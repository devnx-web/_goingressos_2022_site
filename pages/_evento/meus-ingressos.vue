<template>
  <div>
    <menu-topo/>
    <div class="mt-md-5 mt-3">
      <b-container>
        <div class="card-conta p-md-3">
         <b-row>
           <b-col md="3" class="pr-md-0 border-right">
             <div class="btn-selected rounded-0 rounded-md-left">
               <p>Meus Ingressos</p>
             </div>
           </b-col>
           <b-col class="pl-md-0 mt-3 mt-md-0">
               <div class="px-3">
                 <div class="bloc-info">
                   <div class="d-md-flex align-items-center">
                     <div>
                       <img height="37" src="../../assets/icones/info.svg" alt="" />
                     </div>
                     <p class="ml-2 text-info-bloc">
                       Os ingressos serão enviados automaticamente no WhatsApp e e-mail após a confirmação do pagamento, se o pagamento estiver como recusado, realize uma nova compra, use outro cartão ou então pague via PIX
                     </p>
                   </div>
                 </div>
                 <b-button @click="buscaIngressos()" class="btn-padrao text-dark mt-2 px-4 mb-2">
                   Atualizar Ingressos
                 </b-button>
                 <p v-if="carregaIng">Atualizando...</p>
                 <p v-if="mostratt && !carregaIng">Ingressos Atualizados</p>
               </div>
             <div v-if="carrega" class="text-center mt-3 mb-2">
               <div class="border py-3">
                 <p> Carregando compras</p>
                 <img class="mt-3" src="../../assets/icones/ingressoicone.png" alt="">
               </div>
             </div>
             <div v-if="ingressos.length === 0 && !carrega" class="text-center mb-3 mb-2">
               <div class="border py-3">
                 <p> Você não possui nenhuma compra!</p>
                 <img class="mt-3" src="../../assets/icones/ingressoicone.png" alt="">
               </div>
             </div>
         <div class="p-3">
           <div class="border p-3 mb-3" v-for="(ing, index) in ingressos" :key="index">
             <div>
               <b-row>
                 <b-col align-self="center">
                   <p>Valor: R$ {{ ing.valor }}</p>
                   <p class="small">Método de pagamento: {{ ing.mtdPg === 'credit-card' ? 'Cartão de crédito' : 'PIX' }}</p>
                 </b-col>
                 <b-col>
                   <p class="small">Status:  </p>
                   <b-badge v-if="ing.pg === 0" class="px-3 bar-status">
                     Pagamento pendente
                   </b-badge>
                   <b-badge v-if="ing.pg === 1" variant="success" class="px-3 bar-status">
                     Pagamento aprovado
                   </b-badge>
                   <b-badge v-if="ing.pg === 2" variant="info" class="px-3 bar-status">
                     Pagamento em processamento
                   </b-badge>
                   <b-badge v-if="ing.pg === 3" variant="danger" class="px-3 bar-status">
                     Pagamento Recusado
                   </b-badge>
                 </b-col>
                 <b-col hidden v-if="ing.pg" cols="8" md="6" class="text-right align-self-centeri">
                   <b-button variant="success" class="px-3">Reenviar Ingressos</b-button>
                 </b-col>
               </b-row>
               <div class="card-ingresso mt-2">
                 <b-row>
                   <b-col class="border-right" align-self="center">
                     <p> {{ ing.nome }}</p>
                     <p class="small">  Ingresso {{ ing.tipo }} - {{ ing.lote }}</p>
                   </b-col>
                   <b-col  align-self="center" md="4">
                     <p class="mini-label mt-2 mt-md-0">WhatsApp</p>
                     <p>{{ ing.telefone  | VMask('(##) #########') }}</p>
                   </b-col>
                   <b-col md="3" align-self="center" v-if="!ing.img && ing.pg === 1">
                     <div class="mt-2 mt-md-0">
                       <p class="small">Gerando ingresso, volte em alguns minutos</p>
                     </div>
                   </b-col>
                   <b-col md="1" v-else>
                     <b-button block :href="`https://arquivos.devnx.com.br${ing.img}`" target="_blank" v-if="ing.img" class="bg-ico d-flex justify-content-center align-items-center mt-2 mt-md-0 cursor-pointer">
                       <img height="17" src="../../assets/icones/download.svg" alt="">
                     </b-button>
                   </b-col>
                 </b-row>
               </div>
               <div class="d-flex justify-content-between">
                 <p class="small mt-2">CPF: {{ing.documento | VMask('###.###.###.##') }}</p>
                 <p class="small mt-2">Última alteração: {{ing.updated_at  | moment("DD/MM - H:mm") }}</p>
               </div>
             </div>
           </div>
         </div>
           </b-col>
         </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import MenuTopo from "../../components/menu";
export default {
  name: "meusIngressos",
  components: {MenuTopo},
  data() {
    return {
      mostratt: false,
      carregaIng: false,
      carrega: true,
      ingressos: [],
    };
  },
  beforeMount() {
    this.buscaIngressos();
  },
  async mounted() {
    let idGo = JSON.parse(localStorage.getItem("id_go"));
    if (!idGo) {
      idGo = "GO-" + Math.floor(Math.random() * 9123030 + 4564564657879);
      await localStorage.setItem("id_go", JSON.stringify(idGo));
    }
    var socket = io("http://ws.devnx.com.br/");
    console.log(idGo)
    socket.on(idGo, (e) => {
      this.resultado = e.status
      if (this.resultado) {
        this.buscaIngressos()
      }
    })
  },
  methods: {
    async buscaIngressos() {
      this.carregaIng = true
      let idGo = JSON.parse(localStorage.getItem("id_go"));
      const { data } = await this.$axios.get(`ingressos/${idGo}`)
      this.ingressos = data
      this.carregaIng = false
      this.carrega = false
      this.mostratt = true
    }
  }
}
</script>

<style scoped>

.bar-status
{
  font-weight: 500; padding-top: 4px; padding-bottom: 4px; font-size: 12px
}

.btn-selected
{
  background-color: #020024;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  color: white;
}
.bg-ico
{
  height: 50px;
  background-color: #020024;
  padding: 5px;
  border-radius: 50px;
}

.card-ingresso
{
  border-radius: 15px;
  border: solid 1px rgba(0, 90, 140, 0.48);
  padding: 20px;
}

.card-conta
{
  background-color: #f1f1f1;
}

.mini-label{
  font-size: 11px;
  color: black;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

</style>
