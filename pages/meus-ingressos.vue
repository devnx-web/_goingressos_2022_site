<template>
  <div>
    <menu-topo/>
    <div class="mt-md-5 mt-3">
      <b-container>
        <div class="card-conta p-md-3">
         <b-row>
           <b-col md="3" class="pr-md-0">
             <div class="btn-selected rounded-0 rounded-md-left">
               <p>Meus Ingressos</p>
             </div>
           </b-col>
           <b-col class="pl-md-0 mt-3 mt-md-0">
               <div class="px-2">
                 <div class="bloc-info">
                   <div class="d-md-flex align-items-center">
                     <div>
                       <img height="37" src="../assets/icones/info.svg" alt="" />
                     </div>
                     <p class="ml-2 text-info-bloc">
                       Os ingressos serão enviados automaticamente no WhatsApp e e-mail após a confirmação do pagamento, se o pagamento estiver como recusado, realize uma nova compra, use outro cartão ou então pague via PIX
                     </p>
                   </div>
                 </div>
               </div>
             <div class="border p-3 mt-3" v-for="(ing, index) in ingressos" :key="index">
               <div>
                <b-row>
                  <b-col align-self="center">
                    <p>Valor: R$ {{ ing.valor }}</p>
                    <p class="small">Método de pagamento: {{ ing.mtdPg }}</p>
                  </b-col>
                  <b-col>
                    <p class="small">Status:  </p>
                    <b-badge :variant="ing.pg ? 'success' : 'dark'" class="px-3 bar-status">
                      Pagamento {{ ing.pg ? 'Aprovado' : 'Pendente' }}
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
                     <b-col  align-self="center" md="5">
                       <p>{{ ing.telefone  | VMask('(##) ###-####') }}</p>
                     </b-col>
                     <b-col md="1">
                       <div v-if="ing.pg" class="bg-ico d-flex justify-content-center align-items-center mt-2 mt-md-0 cursor-pointer">
                         <img height="17" src="../assets/icones/download.svg" alt="">
                       </div>
                     </b-col>
                   </b-row>
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
import MenuTopo from "../components/menu";
export default {
  name: "meusIngressos",
  components: {MenuTopo},
  data() {
    return {
      ingressos: [],
    };
  },
  beforeMount() {
    this.buscaIngressos();
  },
  methods: {
    async buscaIngressos() {
      const { data } = await this.$axios.get('ingressos/GO-4564568309850')
      this.ingressos = data
      console.log(data)
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

</style>
