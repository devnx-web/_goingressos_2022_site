<template>
<div>
  <menu-topo/>
  <div style="overflow: hidden">
    <div class="bg-banner">
      </div>
  </div>


    <div class="d-flex justify-content-center">
      <img class="estilo-banner" src="https://arquivos.devnx.com.br/goingressos/uploads/universi/21/12/17/banner.jpg" alt="">
    </div>
  <div style="background-color: white; padding-top: 130px" class="mb-5">
    <b-container>
      <h1>TÍTULO DO EVENTO</h1>
      <p>O Exemplo nasceu em 2021 com a intenção de trazer a alegria e energia que os eventos de micareta proporcionam. Nossa missão é fazer cada abraço valer a pena, que cada beijo e momento seja inesquecível. Contamos com você para fazer essa 1 edição inesquecível.</p>
      <hr>
      <b-row class="mt-3">
        <b-col>
          <div class="card-info">
           <b-row>
             <b-col>
               <div class="small">Data do evento</div>
               <div>11/12/2021 - 12h</div>
               <div>Sábado, 11 de dezembro</div>
             </b-col>
             <b-col>
               <div class="small">Classificação</div>
               <div>+ 18</div>
             </b-col>
           </b-row>
            <hr>
            <b-row>
              <b-col>
                <div class="small">Endereço</div>
                <div>Rua comendador Araujo, 143 - Centro - Curitiba - PR 80420-900</div>
                <a class="d-flex mt-2" href="#" target="_blank">
                  <div>
                    <img height="20" src="../assets/icones/link.svg" alt="">
                  </div>
                  <p class="ml-2" style="color: #25b3ff">Abrir no Maps</p>
                </a>
              </b-col>
            </b-row>
          </div>
          <div class="card-info mt-3">
            <h5 class="pt-2 text-center">
              Como compro os ingressos?
            </h5>
            <hr>
            <b-row class="mt-3">
              <b-col md="2" class="d-flex align-items-center justify-content-center">
                <div class="bloc-bg d-flex align-items-center justify-content-center">
                  <p>1</p>
                </div>
              </b-col>
              <b-col class="pl-0">
                <div>
                  <p class="txt-tutorial">
                   Escolha os ingressos que deseja comprar, você também pode usar um cupom caso tenha
                  </p>
                </div>
              </b-col>
            </b-row>
            <hr>
            <b-row class="mt-3">
              <b-col md="2" class="d-flex align-items-center justify-content-center">
                <div class="bloc-bg d-flex align-items-center justify-content-center">
                  <p>2</p>
                </div>
              </b-col>
              <b-col class="pl-0">
                <div>
                  <p class="txt-tutorial">
                    Preencha as informações com os dados e em seguida clique em “Comprar”
                  </p>
                </div>
              </b-col>
            </b-row>
            <hr>
            <b-row class="mt-3">
              <b-col md="2" class="d-flex align-items-center justify-content-center">
                <div class="bloc-bg d-flex align-items-center justify-content-center">
                  <p>1</p>
                </div>
              </b-col>
              <b-col class="pl-0">
                <div>
                  <p class="txt-tutorial">
                    Scaneie o QR Code pelo seu banco para realizar o pagamento via PIX, ou pague pelo seu cartão de crédito
                  </p>
                </div>
              </b-col>
            </b-row>
            <hr>
            <b-row class="mt-3">
              <b-col md="2" class="d-flex align-items-center justify-content-center">
                <div class="d-flex align-items-center justify-content-center">
                  <img src="../assets/icones/whatsapp.png" height="50" alt="">
                </div>
              </b-col>
              <b-col class="pl-0">
                <div>
                  <p class="txt-tutorial">
                    Seus ingressos serão enviados automaticamente para o WhatsApp cadastrado, você também pode ve-lo através do menu 'meus ingressos'
                  </p>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col>
          <div class="card-ingresso-venda">
         <div class="text-center bg-dark text-light py-1">
           <p>Adquira seu Ingresso</p>
         </div>
            <div v-for="(c, index) in data" :key="c.id">
              <hr class="mt-0 mb-0">

            <div class="p-3 d-flex justify-content-between align-items-center">
              <div>
                <p>{{ c.nomeIngresso }}</p>
                <p class="small">3º Lote - Valor: {{c.valor | currency}}</p>
              </div>
              <div class="d-flex">
                <img @click="dimiIng(c, index)" class="cursor-pointer" height="25" src="../assets/icones/minus.svg" alt="">
                <p class="px-2" style="font-size: 22px; margin-top: -4px">{{c.qtd}}</p>
                <img @click="addIng(c, index)" class="cursor-pointer" height="25" src="../assets/icones/plus.svg" alt="">
              </div>
            </div>
            </div>
            <hr class="mt-0 mb-0">
            <div class="p-3">
              <b-row>
                <b-col md="4" align-self="center">
                  <p @click="cupom = true" style="font-size: 14px; color: #25b3ff;">Possuí um Cupom?</p>
                </b-col>
                <b-col>
                  <b-input-group>
                    <b-form-input class="input-form" style="font-size: 13px;" placeholder="Digite aqui..."></b-form-input>
                    <b-input-group-append>
                      <b-button style="font-size: 13px" variant="success">Aplicar</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>
              </b-row>
            </div>
            <div>
              <hr class="mb-0 mt-0">
             <b-row>
               <b-col v-if="total">
                 <div class="px-2">
                   <p class="text-total">Total:</p>
                   <p class="text-value-total">{{total  | currency}}</p>
                 </div>
               </b-col>
               <b-col>
                 <b-button style="border-radius: 0; height: 100%" variant="success" block @click="compraIng()">Comprar Ingressos</b-button>
               </b-col>
             </b-row>
            </div>

          </div>
        </b-col>
      </b-row>
    </b-container>
</div>
  </div>
</template>

<script>
import MenuTopo from "../components/menu";
export default {
  name: 'IndexPage',
  components: {MenuTopo},
  data() {
    return {
      total: 0,
      data: {
        [0]: {
          id: 1,
          nomeIngresso: 'Camarote',
          valor: 150,
          qtd: 0,
        },
        [1]: {
          id: 2,
          nomeIngresso: 'Camarote2',
          valor: 120,
          qtd: 0,
        },
      },
      cupom: ''
    }
  },
  created() {
    console.log(this.data)
  },
  methods: {
    compraIng(){
      if (this.total === 0) {
        this.$toast.error('Adicione ingressos para comprar!')
        return
      }
      this.$router.push('/carrinho')
      this.$toast.info('Insira os dados dos ingressos')
    },

    dimiIng(ing, index) {
      if (ing.qtd > 0) {
        this.total = this.total - ing.valor
        this.data[index].qtd = ing.qtd - 1
      }
    },
    addIng(ing, index) {
      this.total = this.total + ing.valor
      this.data[index].qtd = ing.qtd + 1
    }
  }
}
</script>

<style>


.txt-tutorial {
  font-size: 14px;
  font-weight: 400;
}

.bloc-bg
{
  text-align: center;
  border-radius: 100px;
  color: white;
  height: 40px;
  width: 40px;
  background-color: black;
  font-family: 'Poppins', sans-serif;
}

.card-info
{
  border-radius: 5px;
  border: solid 1px #d9d9d9;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
}

.text-total
{
  font-size: 13px;
  margin-top: 5px;
}

.text-value-total
{
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 5px;
}
.card-ingresso-venda
{
 border: solid 1px #dcdcdc;
  border-radius: 5px;
}

.estilo-banner{
  height: 350px;
  width: 990px;
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-position: 50%;
  background-size: cover;
  box-shadow: 0 4px 18px 5px rgb(0 0 0 / 29%);
  overflow: hidden;
}

.bg-banner
{
  background-image: url("https://arquivos.devnx.com.br/goingressos/uploads/universi/21/12/17/banner.jpg");
  background-size: cover;
  height: 270px;
  -o-object-fit: cover;
  object-fit: cover;
  filter: blur(8px);
  background-position: 50%;
  -webkit-filter: blur(8px);
  transform: scale(1.2);
}
</style>
