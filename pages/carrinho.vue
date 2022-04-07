<template>
  <div class="mb-5">
    <menu-topo />
    <div class="container mt-md-5 mt-3">
      <!--      tornar componente-->
      <!--fim-->
    </div>
    <div class="container-fluid px-md-5">
      <div class="mt-md-5">
        <b-row>
          <b-col md="8">
            <card-resumo
              class="d-md-none"
              :totalIng="totalIngressos"
              :ingressos="ingressos"
              :vt="valorTotal"
            />
            <div>
              <h1>MEU CARRINHO</h1>
            </div>
            <card-carrinho
              @none="none"
              :ingressos="ingressos"
              @removeIngresso="removeIngresso"
            />
          </b-col>
          <b-col md="4">
            <card-resumo
              class="d-none d-md-block"
              :totalIng="totalIngressos"
              :ingressos="ingressos"
              :vt="valorTotal"
            />
            <p class="mt-2">Forma de pagamento</p>
                <div v-b-modal.finaliza class="card-pay text-center mt-2">
                  <div class="d-flex align-items-center">
                        <div>
                          <img
                            src="../assets/icones/pix-branco.png"
                            height="30"
                            alt=""
                          />
                        </div>
                    <p class="ml-3 text-light" style="font-size: 15px !important">Pagar com PIX</p>
                  </div>
                </div>
                <div @click="escolhePay('card')" class="card-pay-credit cursor-pointer text-center mt-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <img
                        src="../assets/icones/cartao.png"
                        height="30"
                        alt=""
                      />
                    </div>
                    <p class="ml-3 text-light" style="font-size: 15px !important">Pagar com cartão de crédito</p>
                  </div>
                </div>
              </b-col>
            </b-row>
      </div>
    </div>
    <b-modal
      ref="infos"
      id="finaliza"
      centered
      title="Finalizar compra"
      hide-footer
    >
      <div class="py-1">
        <div>
          <div class="bloc-info" v-if="!codigoEnviado">
            <div class="d-flex align-items-center">
              <div>
                <img height="37" src="../assets/icones/info.svg" alt="" />
              </div>
              <p class="ml-2 text-info-bloc">
                Digite seus dados e esolha uma opção de pagamento
              </p>
            </div>
          </div>
          <div>
            <p class="mt-3 small">E-mail</p>
            <b-input
              v-model="email"
              class="input-form form-control estilo-input"
              placeholder="Digite seu e-mail"
            ></b-input>
          </div>
        </div>
        <hr />
        <div class="mt-2">
          <b-row>
            <b-col>
              <b-button variant="success" block @click="escolhePay('pix')" class="text-center">
                <div>
                  <p class="small">Finalizar Compra</p>
                </div>
              </b-button>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import MenuTopo from "../components/menu";
import cardCarrinho from "./cardCarrinho.vue";
import cardResumo from "./cardResumo.vue";

import("../assets/css/estiloCarrinho.css");

export default {
  name: "carrinho",
  components: { MenuTopo, cardCarrinho, cardResumo },
  data() {
    return {
      loading: true,
      desabilita: true,
      tipoPagamento: "",
      codigoEnviado: false,
      whatsapp: "",
      email: "",
      status: "not_accepted",
      totalIngressos: 0,
      valorTotal: 0,
      ingressos: [],
    };
  },
  beforeMount() {
    this.carregaCarrinho();
  },
  created() {
    let ano = [];
    this.ano = ano;
    for (var i = 2021; i < 2030; i++) {
      ano.push(i);
    }
  },
  methods: {
    salvaDadosCarrinho() {
      localStorage.setItem("ingressosC", JSON.stringify(this.ingressos));
    },
    none() {
      this.desabilita = false;
      console.log("ddd");
    },
    escolhePay(metodo) {
      this.tipoPagamento = metodo;
      this.salvaDadosCarrinho()
      if (metodo === "card") {
        window.location.href = "/pagamento/cartao";
      }
      if (metodo === "pix") {
        localStorage.setItem("email", JSON.stringify(this.email));
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
        {
        } else {
          this.$toast.error('Digite um e-mail válido')
          return
        }
        this.$refs["infos"].hide();
        this.$router.push('/pagamento/pix')
        window.location.href = "/pagamento/pix";
      }
    },
    removeIngresso(index) {
      this.ingressos.splice(index, 1);
      this.totalIngressos = this.ingressos.length;
      this.valorTotal = this.ingressos.reduce(
        (total, ingresso) => total + parseFloat(ingresso.valor),
        0
      );
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
            ["nome"]: "",
            ["cpf"]: "",
            ["nasc"]: "",
            ["whats"]: "",
            ["valida"]: false,
          });
        }
      });
      this.valorTotal = totalValor;
      this.totalIngressos = totalIngressos;
      localStorage.setItem("ingressosC", JSON.stringify(ing));
      this.ingressos = ing;
    },
  },
};
</script>

<style scoped>
</style>
