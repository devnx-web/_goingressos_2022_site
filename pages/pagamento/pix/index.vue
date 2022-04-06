<template>
 <div>
   <menu-topo/>
   <b-container class="mt-md-5 mt-3">
     <div>
       <b-row class="mt-2">
         <b-col md="6" cols="12">
           <div>
             <h5 class="text-center">
               Siga as instruções para realizar seu pagamento
             </h5>
             <div class="mt-3">
               <div class="card-mini mt-2">
                 1.&nbsp; Acesse sua instituição financeira, selecione a opção
                 pagar com QR Code, ou então PIX copia e cola;
               </div>
               <div class="card-mini">
                 2. Escaneie o código e realize o pagamento, então você será
                 redirecionado para baixar os ingressos
               </div>
               <div class="card-mini">
                 <div style="display: inline-flex">
                   <div class="pr-2">
                     <img
                       style="width: 40px"
                       src="../../../assets/icones/whatsapp.png"
                       alt=""
                     />
                   </div>
                   <div class="pt-1 pl-1">
                     3. Todos receberão o ingresso no WhatsApp cadastrado, e
                     você poderá fazer o download no próximo passo!
                   </div>
                 </div>
               </div>
               {{ingressos}}

               <div v-for="c in ingressos" :key="index">
                 {{ c.nomeLote }}
               </div>
             </div>
           </div>
         </b-col>
         <b-col>
           <div class="bg-resumo">
             <b-row>
               <b-col>
                 <p>Valor da compra: {{ valorTotal | currency }}</p>
                 <p>Quantidade de ingressos: {{ totalIngressos }}</p>
               </b-col>
               <b-col md="6" cols="12">
                 <b-button
                   @click="pagarCard()"
                   class="btn-pay-new mt-2 mt-md-0"
                 >Pagar com cartão de crédito
                 </b-button>
               </b-col>
             </b-row>
           </div>
           <div class="card-info-credit p-3">
             <div class="d-flex justify-content-center">
               <div>
                 <div style="width: 300px">
                   <div  :class="dadosretorna.qr_code ? 'op1' : 'op0'">
                     <img style="height: 300px" :src="`data:image/png;base64,`+ dadosretorna.qr_code_base64"/>
                   </div>
                   <div v-if="!dadosretorna.qr_code">
                     <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                     <lottie-player name="lottie" src="https://assets4.lottiefiles.com/packages/lf20_q30c1wrm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin-top: -50px" autoplay></lottie-player>
                   </div>
                 </div>
                 <p class="mt-2 text-center">
                   Favorecido: <b>GO INGRESSOS</b>
                 </p>
                 <div>
                   <b-button @click="copiaCod()" block variant="info" class="mt-3 px-3 mb-4">
                     <img
                       class="mr-2"
                       src="../../../assets/icones/copy.svg"
                       height="20"
                       alt=""
                     />
                     Copiar Código
                   </b-button>
                 </div>
               </div>
             </div>
           </div>
         </b-col>
       </b-row>
     </div>
   </b-container>
 </div>
</template>

<script>
import MenuTopo from "../../../components/menu";
export default {
  name: "index",
  components: {MenuTopo},
  data() {
    return {
      apareceqr: 0,
      dadosretorna: '',
      totalIngressos: 0,
      valorTotal: 0,
      infoingressos: {},
      ingressos: [],
    };
  },
  beforeMount() {
    this.carregaCarrinho();
    const obj = {
      ingressos: this.ingressos,
      email: 'matheus8739sc@gmail.com',
      pagamento: 'pix',
    }
    this.$axios.post('https://phpstack-666249-2543201.cloudwaysapps.com/api/site/surreal-producoes/evento/we-are-carnaval/pre_res_ingresso', obj).then(resp => {
      this.dadosretorna = resp.data
      this.apareceqr = 1
    })
    console.log(this.dadosretorna)
  },

  methods: {
    copiaCod(){
      console.log('dd')

      if (!this.dadosretorna.qrcode) {
        this.$toast.error('Aguarde o QR Code ser gerado para copiar o código')
      }
      navigator.clipboard.writeText(this.dadosretorna.qr_code)
    },
    pagarCard() {
      window.location.replace('/pagamento/cartao')
    },
    carregaCarrinho() {
      const carrinho = localStorage.getItem("ingressos") || [];
      const ing = [];
      if (carrinho.length === 0) return this.$router.push("/");
      let totalIngressos = 0;
      let totalValor = 0;
      const jsonCarrinho = JSON.parse(carrinho);
      jsonCarrinho.forEach((ingresso) => {
        for (let i = 0; i < ingresso.qtd; i++) {
          totalIngressos++;
          totalValor += parseFloat(ingresso.valor);
          ing.push({
            ...ingresso,
          });
        }
      });
      this.valorTotal = totalValor;
      this.totalIngressos = totalIngressos;
      localStorage.setItem("ingressosC", JSON.stringify(ing));
      this.ingressos = ing;
    },
  },
}
</script>

<style scoped>


.op0{
  opacity: 0;
  transition: 2s ease-in-out;
}

.op1{
  opacity: 1;
  transition: 2.5s linear;
}

.bg-resumo
{
  font-size: 13px;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  background-color: #2f2f2f;
  color: white;
}

.card-info-credit
{
  background-color: #f6f6f6;
  border: solid 1px #e0e0e0;
  border-radius: 0 0 10px 10px;
}

.card-mini
{
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  padding-left: 15px;
  font-weight: 500;
  font-size: 13px;
  font-family: Montserrat, sans-serif;
  border: solid 1px #e8e8e8;
}
.btn-pay-new
{
  background-color: transparent !important;
  font-size: 13px;
  color: #ffffff;

}

</style>
