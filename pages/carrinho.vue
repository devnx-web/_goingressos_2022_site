<template>
  <div class="mb-5">
    <menu-topo />
    <b-button @click="conulta()">ver</b-button>
    <div class="container mt-md-5 mt-3">
      <!--      tornar componente-->
      <!--fim-->
    </div>
    <div class="container-fluid px-md-5" v-if="!tipoPagamento">
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
              v-if="!tipoPagamento"
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
            <b-button
              v-b-modal.finaliza
              v-if="!tipoPagamento"
              variant="success"
              class="mt-3 mb-4"
              @click="testaSocket"
              block
              >Finalizar Compra
            </b-button>
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
          <div v-if="ingressos.length < 2">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              class="mt-2"
              unchecked-value="not_accepted"
            >
              <p class="small mt-1">O ingresso é para outra pessoa</p>
            </b-form-checkbox>
          </div>
          <div v-if="ingressos.length === 1 && status !== 'accepted'">
            <p class="mt-3 small">E-mail</p>
            <b-input
              class="input-form form-control estilo-input"
              placeholder="Digite seu e-mail"
            ></b-input>
          </div>
          <div v-if="status === 'accepted' || ingressos.length > 1">
            <b-row>
              <b-col md="6" class="pr-md-1">
                <div>
                  <p class="mt-3 small">Nome Completo</p>
                  <b-input
                    class="input-form form-control estilo-input"
                    placeholder="Ex: Anderson Costa"
                  />
                </div>
              </b-col>
              <b-col md="6" class="pl-md-1">
                <div>
                  <p class="mt-3 small">WhatsApp</p>
                  <b-input
                    class="input-form form-control estilo-input"
                    placeholder="Ex: (99) 99999-9999"
                  />
                </div>
              </b-col>
            </b-row>
            <b-row class="mt-n2">
              <b-col md="6" class="pr-md-1">
                <div>
                  <p class="mt-3 small">CPF</p>
                  <b-input
                    placeholder="CPF"
                    class="input-form form-control estilo-input"
                  />
                </div>
              </b-col>
              <b-col md="6" class="pl-md-1">
                <div>
                  <p class="mt-3 small">E-mail</p>
                  <b-input
                    placeholder="E-mail"
                    class="input-form form-control estilo-input"
                  />
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
        <hr />
        <p>Forma de pagamento</p>
        <div class="mt-2">
          <b-row>
            <b-col md="6" cols="6" class="pr-1">
              <div @click="escolhePay('pix')" class="card-pay text-center py-2">
                <div>
                  <div>
                    <img
                      src="../assets/icones/pix-106.svg"
                      height="30"
                      alt=""
                    />
                  </div>
                  <p class="small mt-1">Pagar pelo PIX</p>
                </div>
              </div>
            </b-col>
            <b-col md="6" class="pl-1" cols="6">
              <div
                @click="escolhePay('card')"
                class="card-pay text-center py-2"
              >
                <div>
                  <div>
                    <img
                      src="../assets/icones/credit-card-ico.png"
                      height="40"
                      alt=""
                    />
                  </div>
                  <p class="small mt-1">Pagar pelo Cartão</p>
                </div>
              </div>
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
    conulta() {
      this.ingressos.forEach(index)
      {
        let valida
        valida = false
      }
      console.log(this.ingressos)
    },

    none() {
      this.desabilita = false
      console.log('ddd')
    },

    escolhePay(metodo) {
      this.tipoPagamento = metodo;
      this.$refs["infos"].hide();
      if (metodo === "card") {
        window.location.replace("/pagamento/cartao");
      }
      if (metodo === 'pix') {
        localStorage.setItem('ingressos', JSON.stringify(this.ingressos))
        this.$router.push('/pagamento/pix')
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
