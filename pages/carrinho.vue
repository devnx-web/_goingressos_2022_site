<template>
  <div>
    <menu-topo/>
    <div class="container mt-md-5 mt-3">
<!--      tornar componente-->
      <div v-if="tipoPagamento === 'card'">
        <b-row class="mt-2">
          <b-col cols="12" md="6">
            <div class="d-flex justify-content-center">
              <div>
                <VuePaycard
                  :inputFields="inputFields"
                  :valueFields="valueFields"
                  :labels="labels"
                />
                <div class="bloc-info mt-5 mb-3">
                  <div class="d-flex align-items-center">
                    <div>
                      <img height="37" src="../assets/icones/info.svg" alt=""/>
                    </div>
                    <p class="ml-2 text-info-bloc">
                      Os ingressos serão enviados automaticamente no WhatsApp e e-mail após a confirmação do pagamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="bg-resumo">
              <b-row>
                <b-col>
                  <p> Valor da compra: {{ valorTotal | currency }}</p>
                  <p> Quantidade de ingressos: {{ totalIngressos }}</p>
                </b-col>
                <b-col md="6" cols="12">
                  <b-button @click="tipoPagamento = ''" block class="btn-pay-new">Alterar forma de pagamento</b-button>
                </b-col>
              </b-row>
            </div>
            <div class="card-info-credit p-3">
              <div id="holder-name">
                <label class="label-estilo mt-n2">Titular do cartão</label>
                <input class="form-control number-two"
                       :value="valueFields.cardName"
                       placeholder="Nome do titular"
                       @input="changeName"
                       :id="inputFields.cardName"
                       style="text-transform: capitalize"
                       data-card-field
                       autocomplete="off"
                       id="form-checkout__cardholderName" type="text" name="cardholderName">
              </div>
              <div id="cpf">
                <label class="label-estilo">CPF</label>
                <input class="form-control number-two" autocomplete="true"
                       placeholder="Digite o CPF do titular"
                       data-card-field
                       type="text"
                       name="cardNumber"/>
              </div>
              <div id="number-card">
                <label class="label-estilo">Número do cartão</label>
                <input class="form-control number-two" autocomplete="true"
                       placeholder="Digite o número do cartão"
                       data-card-field
                       @input="changeNumber" :id="inputFields.cardNumber" type="text"
                       name="cardNumber"/>
              </div>

              <div id="extra">
                <b-row>
                  <b-col cols="6" md="4">
                    <label class="label-estilo">Mês de vencimento</label>
                    <input v-model="valueFields.cardMonth"
                           min="1"
                           placeholder="Ex: 03"
                           maxlength="2"
                           :id="inputFields.cardMonth"
                           class="form-control -select number-two"
                           type="text"
                           @input="changeMonth"
                           aria-label="Card Month"
                           title="Month"
                           data-card-field>
                  </b-col>
                  <b-col class="pl-0" cols="6" md="4">
                    <label class="label-estilo">Ano de vencimento</label>
                    <input
                      min="2020"
                      placeholder="Ex: 2027"
                      maxlength="4"
                      name="cardExpirationYear"
                      v-model="valueFields.cardYear"
                      @input="changeYear"
                      :id="inputFields.cardYear"
                      class="form-control -select number-two"
                      id="form-checkout__cardExpirationYear" type="text"
                      aria-label="Card Year"
                      title="Year"
                      data-card-field>
                  </b-col>
                  <b-col class="pl-md-0" cols="6" md="4">
                    <label class="label-estilo">CVV</label>
                    <input
                      title="CVV"
                      maxlength="4"
                      @input="changeCvv"
                      data-card-field
                      class="form-control number-two" :id="inputFields.cardCvv" type="tel" name="securityCode">

                  </b-col>
                </b-row>
              </div>
              <div>
                <b-button @click="$router.push('/meus-ingressos')" block variant="success" class="mt-3">REALIZAR COMPRA</b-button>
              </div>
              <div v-if="loading" class="d-flex">
                <div>
                  <img height="20" src="../assets/icones/loading.svg" alt="">
                </div>
                <p class="ml-2">Processando pagamento</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-if="tipoPagamento === 'pix'">
        <b-row class="mt-2">
          <b-col md="6" cols="12">
            <div>
              <h5 class="text-center">Siga as instruções para realizar seu pagamento</h5>
              <div class="mt-3">
                <div class="card-mini mt-2">1.&nbsp; Acesse sua instituição financeira, selecione a
                  opção pagar com QR
                  Code, ou então PIX copia e cola;
                </div>
                <div class="card-mini">2. Escaneie o código e realize o pagamento, então você será
                  redirecionado para
                  baixar os ingressos
                </div>
                <div class="card-mini">

                  <div style="display: inline-flex">

                    <div class="pr-2"><img style="width: 40px;" src="../assets/icones/whatsapp.png"
                                           alt=""></div>
                    <div class="pt-1 pl-1"> 3. Todos receberão o ingresso no WhatsApp cadastrado, e você
                      poderá fazer o
                      download no próximo passo!
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="bg-resumo">
              <b-row>
                <b-col>
                  <p> Valor da compra: {{ valorTotal | currency }}</p>
                  <p> Quantidade de ingressos: {{ totalIngressos }}</p>
                </b-col>
                <b-col md="6" cols="12">
                  <b-button @click="tipoPagamento = ''" class="btn-pay-new mt-2 mt-md-0">Alterar forma de pagamento
                  </b-button>
                </b-col>
              </b-row>
            </div>
            <div class="card-info-credit p-3">
              <div class="d-flex justify-content-center">
                <div>
                  <img
                    src="https://api.paymee.com.br/resources/payments/pix/qrcode/bd062a11-ca1a-30f4-ae05-2f7f4aa17188"
                    alt="">
                  <p class="mt-2 text-center">Favorecido: <b>GO INGRESSOS</b></p>
                  <div>
                    <b-button block variant="info" class="mt-3 px-3 mb-4">
                      <img class="mr-2" src="../assets/icones/copy.svg" height="20" alt="">
                      Copiar Código
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
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
              v-if="!tipoPagamento"
              v-b-modal.finaliza
              variant="success"
              class="mt-3 mb-4"
              block
            >Finalizar Compra
            </b-button
            >
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
                <img height="37" src="../assets/icones/info.svg" alt=""/>
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
              placeholder="e-mail"
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
        <hr/>
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

import('../assets/css/estiloCarrinho.css')

export default {
  name: "carrinho",
  components: {MenuTopo, cardCarrinho, cardResumo},
  data() {
    return {
      loading: true,
      minCardMonth: '',
      ano: '',
      titular: '',
      inputFields: {
        cardNumber: 'v-card-number',
        cardName: 'v-card-name',
        cardMonth: 'v-card-month',
        cardYear: 'v-card-year',
        cardCvv: 'v-card-cvv'
      },
      tipoPagamento: "",
      codigoEnviado: false,
      whatsapp: "",
      status: "not_accepted",
      totalIngressos: 0,
      valorTotal: 0,
      ingressos: [],
      isCardNumberMasked: {
        type: Boolean,
        default: false
      },
      valueFields: {
        cardName: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
        cardCvv: "",
      },
      labels: {
        cardName: 'Nome Completo',
        cardHolder: 'Titular do cartão',
        cardMonth: 'MM',
        cardYear: 'YY',
        cardExpires: 'Vencimento',
        cardCvv: 'CVV'
      }
    };
  },
  beforeMount() {
    this.carregaCarrinho();
  },
  created() {
    let ano = []
    this.ano = ano
    for (var i = 2021; i < 2030; i++) {
      ano.push(i)
    }

  },
  methods: {

    changeNumber(e) {
      this.valueFields.cardNumber = e.target.value
      const value = this.valueFields.cardNumber.replace(/\D/g, '')
      // american express, 15 digits
      if ((/^3[47]\d{0,13}$/).test(value)) {
        this.valueFields.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
        this.cardNumberMaxLength = 17
      } else if ((/^3(?:0[0-5]|[68]\d)\d{0,11}$/).test(value)) { // diner's club, 14 digits
        this.valueFields.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
        this.cardNumberMaxLength = 16
      } else if (/^62[0-9]\d*/.test(value)) {
        this.valueFields.cardNumber = value.replace(/(\d{6})/, '$1 ').replace(/(\d{6}) (\d{7})/, '$1 $2 ').replace(/(\d{6}) (\d{7}) (\d{6})/, '$1 $2 $3 ').replace(/(\d{5}) (\d{5}) (\d{5}) (\d{4})/, '$1 $2 $3 $4')
        this.cardNumberMaxLength = 21
      } else if ((/^\d{0,16}$/).test(value)) { // regular cc number, 16 digits
        this.valueFields.cardNumber = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
        this.cardNumberMaxLength = 19
      }

      if (e.inputType == 'deleteContentBackward') {
        const lastChar = this.valueFields.cardNumber.substring(this.valueFields.cardNumber.length, this.valueFields.cardNumber.length - 1)

        if (lastChar == ' ') {
          this.valueFields.cardNumber = this.valueFields.cardNumber.substring(0, this.valueFields.cardNumber.length - 1)
        }
      }
      this.$emit('input-card-number', this.valueFields.cardNumber)
    },

    changeMonth() {
      this.$emit('input-card-month', this.valueFields.cardMonth)
    },
    changeYear() {
      this.$emit('input-card-year', this.valueFields.cardYear)
    },
    changeCvv(e) {
      this.valueFields.cardCvv = e.target.value
      this.$emit('input-card-cvv', this.valueFields.cardCvv)
    },

    changeName(e) {
      this.valueFields.cardName = e.target.value
      this.$emit('input-card-name', this.valueFields.cardName)
    },

    generateMonthValue(n) {
      return n < 10 ? `0${n}` : n
    },

    escolhePay(metodo) {
      this.tipoPagamento = metodo;
      this.$refs["infos"].hide();
      this.salvarIngressos();
    },

    removeIngresso(index) {
      this.ingressos.splice(index, 1);
      this.totalIngressos = this.ingressos.length;
      this.valorTotal = this.ingressos.reduce(
        (total, ingresso) => total + parseFloat(ingresso.valor),
        0
      );
    },
    salvarIngressos() {
      fetch(
        "https://phpstack-666249-2543201.cloudwaysapps.com/api/site/surreal-producoes/evento/we-are-carnaval/pre_res_ingresso",
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.ingressos),
        }
      )
        .then((res) => res.json())
        .then((res) => console.log(res));
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
</style>
