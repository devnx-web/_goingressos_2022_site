<template>
  <div>
    <menu-topo />
    <b-container class="mt-md-5 mt-3">
      <div>
        <b-row class="mt-2">
          <b-col md="6" cols="12">
            <div>
              <div @click="$router.go(-1)" class="d-flex cursor-pointer">
                <img src="../../../../assets/icones/back.svg" height="25px" alt="">
                <p class="ml-2 mb-3">Voltar</p>
              </div>
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
                        src="../../../../assets/icones/whatsapp.png"
                        alt=""
                      />
                    </div>
                    <div class="pt-1 pl-1">
                      3. Todos receberão o ingresso no WhatsApp cadastrado, e
                      você poderá fazer o download no próximo passo!
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="btn-ver-ing">
                    <div v-b-toggle.collapse-2 class="m-1 d-flex justify-content-between p-2">
                      <div>Meus Ingressos - <b>{{valorTotal | currency}}</b></div>
                      <div><img width="20" src="../../../../assets/icones/arrow.svg" alt=""></div>
                    </div>
                    <b-collapse id="collapse-2">
                      <div  v-for="(c, index) in ingressos" :key="index">
                        <hr class="mt-0 mb-0">
                        <div class="p-2">
                          <p>    {{c.nomeIng}} - {{ c.nomeLote }}:</p>
                          <p>Nome: <b>{{c.nome}}</b></p>
                          <p>Valor: {{c.valor | currency}}</p>
                          <p>CPF: {{c.cpf}}</p>
                        </div>
                        <hr class="mt-0 mb-0">
                      </div>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="bg-resumo d-none d-md-block">
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
            <div class="card-info-credit p-3 mt-3 mt-md-0 mb-5">
              <div class="d-flex justify-content-center">
                <div>
                  <div style="width: 300px">
                    <div :class="dadosretorna.qr_code ? 'op1' : 'op0'">
                      <img
                        v-if="dadosretorna.qr_code_base64"
                        style="height: 300px"
                        :src="
                          `data:image/png;base64,` + dadosretorna.qr_code_base64
                      "
                      />
                    </div>
                    <div v-if="!dadosretorna.qr_code">
                      <lottie-player
                        src="https://assets4.lottiefiles.com/packages/lf20_q30c1wrm.json"
                        background="transparent"
                        speed="1"
                        style="width: 300px; height: 300px; margin-top: -50px"
                        autoplay
                      ></lottie-player>
                    </div>
                  </div>
                  <p class="mt-2 text-center">
                    Favorecido: <b>GO INGRESSOS</b>
                  </p>
                  <div>
                    <b-button
                      @click="copiaCod()"
                      block
                      variant="info"
                      class="mt-3 px-3 mb-4"
                    >
                      <img
                        class="mr-2"
                        src="../../../../assets/icones/copy.svg"
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
import MenuTopo from "../../../../components/menu";
export default {
  name: "index",
  components: { MenuTopo },
  data() {
    return {
      apareceqr: 0,
      dadosretorna: "",
      totalIngressos: 0,
      valorTotal: 0,
      infoingressos: {},
      ingressos: [],
    };
  },
  async beforeMount() {
    let email = localStorage.getItem("email") || [];
    let idGo = JSON.parse(localStorage.getItem("id_go"));
    email = JSON.parse(email)
    await this.carregaCarrinho();
    const obj = {
      ingressos: this.ingressos,
      email: email,
      pagamento: "pix",
      idGo
    };
    const {data } = await this.$axios.post("evento/we-are-carnaval/pre_res_ingresso", obj)
    this.dadosretorna = data;
    this.apareceqr = 1;
    console.log(this.dadosretorna);
  },

  methods: {
    copiaCod() {
      console.log("dd");

      if (!this.dadosretorna.qr_code) {
        this.$toast.error("Aguarde o QR Code ser gerado para copiar o código");
        return
      }
      navigator.clipboard.writeText(this.dadosretorna.qr_code);
      this.$toast.info('Código copiado com sucesso')
    },
    pagarCard() {
      window.location.replace("/pagamento/cartao");
    },
    carregaCarrinho() {
      const carrinho = localStorage.getItem("ingressosC") || [];
      if (carrinho.length === 0) return this.$router.push("/");
      let totalIngressos = 0;
      let totalValor = 0;
      const jsonCarrinho = JSON.parse(carrinho);
      jsonCarrinho.forEach((ingresso) => {
          totalIngressos++;
          totalValor += parseFloat(ingresso.valor);
      });
      this.valorTotal = totalValor;
      this.totalIngressos = totalIngressos;
      this.ingressos = jsonCarrinho;
      console.log(this.ingressos)
    },
  },
};
</script>

<style scoped>

.card-ing
{
  padding: 10px;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}

.bg-resumo {
  font-size: 13px;
  padding: 20px;
  border-radius: 8px 8px 0 0;
  background-color: #2f2f2f;
  color: white;
}

.card-info-credit {
  background-color: #f6f6f6;
  border: solid 1px #e0e0e0;
  border-radius: 0 0 10px 10px;
}

.card-mini {
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  padding-left: 15px;
  font-weight: 500;
  font-size: 13px;
  font-family: Montserrat, sans-serif;
  border: solid 1px #e8e8e8;
}
.btn-pay-new {
  background-color: transparent !important;
  font-size: 13px;
  color: #ffffff;
}
</style>
