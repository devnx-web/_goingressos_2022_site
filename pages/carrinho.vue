<template>
  <div>
    <menu-topo />
    <div class="container-fluid px-5">
      <div class="mt-5">
        <b-row>
          <b-col md="8">
            <div>
              <h1>MEU CARRINHO</h1>
            </div>
            <card-carrinho
              :ingressos="ingressos"
              @removeIngresso="removeIngresso"
            />
          </b-col>
          <b-col md="4">
            <card-resumo
              :totalIng="totalIngressos"
              :ingressos="ingressos"
              :vt="valorTotal"
            />
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal id="finaliza" centered title="Finalizar compra" hide-footer>
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
          <b-row>
            <b-col md="6" class="pr-1">
              <div>
                <p class="mt-3 small">Nome Completo</p>
                <b-input
                  class="input-form form-control estilo-input"
                  placeholder="Ex: Anderson Costa"
                />
              </div>
            </b-col>
            <b-col md="6" class="pl-1">
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
            <b-col md="6" class="pr-1">
              <div>
                <p class="mt-3 small">CPF</p>
                <b-input
                  placeholder="CPF"
                  class="input-form form-control estilo-input"
                />
              </div>
            </b-col>
            <b-col md="6" class="pl-1">
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
        <hr />
        <p>Forma de pagamento</p>
        <div class="mt-2">
          <b-row>
            <b-col md="6" class="pr-1">
              <div class="card-pay text-center py-2">
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
            <b-col md="6" class="pl-1">
              <div class="card-pay text-center py-2">
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

export default {
  name: "carrinho",
  components: { MenuTopo, cardCarrinho, cardResumo },
  data() {
    return {
      codigoEnviado: false,
      whatsapp: "",
      status: "not_accepted",
      totalIngressos: 0,
      valorTotal: 0,
      ingressos: [],
    };
  },
  beforeMount() {
    this.carregaCarrinho();
  },
  methods: {
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
.card-pay {
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  border: solid 1px #dedede;
}

.card-pay:hover {
  background-color: #424242;
  color: white;
  cursor: pointer;
}

.new-input {
  border: solid 1px #dcdcdc;
}

.estilo-input {
  border-radius: 10px !important;
  overflow: hidden;
  border: solid 1px #ececec;
}

input {
  height: 40px;
  font-size: 13px !important;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 0;
  box-shadow: none !important;
}

.bg-total {
  color: white;
  border-radius: 0 0 20px 20px;
  background-color: black;
}

.card-resumo {
  border-radius: 20px;
  background: rgb(245, 245, 245);
}

.card-ingressos {
  border-radius: 20px;
  border: solid 1px #e1e1e1;
}

.card-ingressos .bg-topo {
  color: white;
  padding: 15px 2px;
  background: #020024;
  background: linear-gradient(144deg, #005a8c 10%, #0c8abf);
  border-radius: 20px 20px 0 0;
}

h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: white;
  font-size: 17px;
  margin: 0;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
}
</style>
