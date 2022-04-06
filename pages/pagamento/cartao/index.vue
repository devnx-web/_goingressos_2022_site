<template>
<div>
  <menu-topo/>
  <div class="container mt-md-5">
    <b-row class="mt-4">
      <b-col cols="12" md="6">
       <div>
         <vue-paycard   :inputFields="inputFields"
                        :labels="labelsFields"
                        :isCardNumberMasked="false"
                        :valueFields="valueFields" />
       </div>
        <b-button
          block
          @click="$router.push('/pagamento/pix')"
          class="btn-pay-new mt-3 d-md-none"
        >Alterar forma de pagamento</b-button>
        <div class="d-flex justify-content-center">
          <div>
            <div class="bloc-info mt-md-5 mt-3 mb-3">
              <div class="d-flex align-items-center">
                <div>
                  <img height="37" src="../../../assets/icones/info.svg" alt="" />
                </div>
                <p class="ml-2 text-info-bloc">
                  Os ingressos serão enviados automaticamente no WhatsApp e
                  e-mail após a confirmação do pagamento
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
              <p>Valor da compra: {{ valorTotal | currency }}</p>
              <p>Quantidade de ingressos: {{ totalIngressos }}</p>
            </b-col>
            <b-col md="6" cols="12" class="d-none d-md-block">
              <b-button
                @click="$router.push('/pagamento/pix')"
                block
                class="btn-pay-new"
                style="color: white !important"
              >Pagar com pix</b-button
              >
            </b-col>
          </b-row>
        </div>
        <div>
          <form id="form-checkout" class="mb-5">
            <div class="card-info-credit p-3">
              <p style="font-size: 15px !important">Insira dos dados do cartão</p>
              <hr>
              <b-row>
                <b-col md="12" cols="12">
                  <div class="label-estilo">Número do cartão</div>
                  <input type="text" name="cardNumber" class="form-control" :maxlength="cardNumberMaxLength" data-card-field @input="changeNumber" :id="inputFields.cardNumber"/>
                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col class="pr-0">
                  <div class="label-estilo">Vencimento</div>
                  <input type="text" name="cardExpirationDate" maxlength="7" id="form-checkout__cardExpirationDate" class="form-control"/>
                </b-col>

                <b-col>
                  <div class="label-estilo">Código de segurança</div>
                  <input data-card-field  maxlength="4" @input="changeCvv" :id="inputFields.cardCvv" type="text" name="securityCode" id="form-checkout__securityCode" class="form-control"/>

                </b-col>
              </b-row>

              <b-row class="mt-2">
                <b-col class="pr-md-0" md="6" cols="12">
                  <div class="label-estilo">Nome do titular</div>
                  <input type="text" name="cardholderName" @input="changeName" :id="inputFields.cardName" data-card-field class="form-control" />
                </b-col>
                <b-col class="mt-2 mt-md-0">
                  <div class="label-estilo">E-mail</div>
                  <input type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" class="form-control"/>
                </b-col>
              </b-row>
              <select hidden name="issuer" id="form-checkout__issuer"></select>
              <select hidden name="identificationType" id="form-checkout__identificationType"></select>
              <b-row class="mt-2">
                <b-col class="pr-md-0"  md="6" cols="12">
                  <div class="label-estilo">CPF</div>
                  <input class="form-control" type="text" name="identificationNumber" id="form-checkout__identificationNumber"/>
                </b-col>
                <b-col class="mt-2 mt-md-0">
                  <div class="label-estilo">Pagamento</div>
                  <select class="form-control" name="installments" id="form-checkout__installments"></select>
                </b-col>
              </b-row>

              <button class="form-control btn-compra mt-2" type="submit" id="form-checkout__submit">Efetuar Pagamento</button>
            </div>
            {{infoCard}}
          </form>
        </div>

      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
import MenuTopo from "../../../components/menu";
export default {
  name: "index",
  components: {MenuTopo},
  data() {
    return {
      valueFields: {
        cardName: '',
        cardNumber: '',
        cardMonth: null,
        cardYear: null,
        cardCvv: null
      },
      inputFields: {
        cardNumber: 'form-checkout__cardNumber',
        cardName: 'form-checkout__cardholderName',
        cardExpirationDate: 'form-checkout__cardExpirationDate',
        cardholderEmail: 'form-checkout__cardholderEmail',
        cardMonth: 'form-checkout__cardExpirationMonth',
        cardYear: 'form-checkout__cardExpirationYear',
        cardCvv: 'form-checkout__securityCode',
        identificationNumber: 'form-checkout__identificationNumber'
      },
      labelsFields: { cardName: 'Nome Completo', cardHolder: 'Titular do cartão', cardMonth: 'MM', cardYear: 'YY', cardExpires: 'Vencimento', cardCvv: 'CVV' },
      minCardYear: new Date().getFullYear(),
      mainCardNumber: '',
      cardNumberMaxLength: 19,
      infoCard: '',
      loading: true,
      minCardMonth: "",
      ano: "",
      email: "",
      titular: "",
      tipoPagamento: "",
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
  mounted() {
    let ano = []

    for (var i = 2021; i < 2051; i++) {
      ano.push(i)
    }
    this.ano = ano
    // eslint-disable-next-line no-undef

    const mp = new MercadoPago('TEST-7c5e58c7-7f93-4e07-8fcd-d4afe81bf3c1', {
      locale: 'pt-BR'
    })
    const cardForm = mp.cardForm({
      amount: '100.5',
      autoMount: true,
      processingMode: 'aggregator',
      form: {
        id: "form-checkout",
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular do cartão",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número do cartão",
        },
        cardExpirationDate: {
          id: "form-checkout__cardExpirationDate",
          placeholder: "(MM/YYYY)",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de segurança",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Parcelas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número do CPF",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emissor",
        },
      },
      callbacks: {
        onFormMounted: (error) => {
          if (error) {
            return console.warn('Form Mounted handling error: ', error)
          }
          console.log('Form mounted')
        },
        onFormUnmounted: (error) => {
          if (error) {
            return console.warn('Form Unmounted handling error: ', error)
          }
          console.log('Form unmounted')
        },
        onIdentificationTypesReceived: (error, identificationTypes) => {
          if (error) {
            return console.warn('identificationTypes handling error: ', error)
          }
          console.log('Identification types available: ', identificationTypes)
        },
        onPaymentMethodsReceived: (error, paymentMethods) => {
          if (error) {
            return console.warn('paymentMethods handling error: ', error)
          }
          console.log('Payment Methods available: ', paymentMethods)
        },
        onIssuersReceived: (error, issuers) => {
          if (error) {
            return console.warn('issuers handling error: ', error)
          }
          console.log('Issuers available: ', issuers)
        },
        onInstallmentsReceived: (error, installments) => {
          if (error) {
            return console.warn('installments handling error: ', error)
          }
          console.log('Installments available: ', installments)
        },

        onCardTokenReceived: (error, token) => {
          if (error) {
            error.forEach(e => {
              console.log(e)
              switch (e.code) {
                case "205":
                  this.$toast.error('Digite o número do seu cartão.')
                  break;
                case "208":
                  this.$toast.error('Escolha um mês.')
                  break;
                case "209":
                  this.$toast.error('Escolha um ano.')
                  break;
                case "212":
                  this.$toast.error('Informe seu documento.')
                  break;
                case "213":
                  this.$toast.error('Informe seu documento.')
                  break;
                case "214":
                  this.$toast.error('Informe seu documento.')
                  break;
                case "221":
                  this.$toast.error('Digite o nome e sobrenome.')
                  break;
                case "224":
                  this.$toast.error('Digite o código de segurança.')
                  break;
                case "E301":
                  this.$toast.error('Há algo de errado com o número do cartão. Digite novamente.')
                  break;
                case "E302":
                  this.$toast.error('Confira o código de segurança.')
                  break;
                case "316":
                  this.$toast.error('Por favor, digite um nome válido.')
                  break;
                case "322":
                  this.$toast.error('Confira seu documento.')
                  break;
                case "323":
                  this.$toast.error('Confira seu documento.')
                  break;
                case "324":
                  this.$toast.error('Confira seu documento.')
                  break;
                case "325":
                  this.$toast.error('Confira a data de vencimento.')
                  break;
                case "326":
                  this.$toast.error('Confira a data de vencimento.')
                  break;
                default:
                  this.$toast.error('Dados incorretos')
              }
            })



            this.controleloop = 0


            return console.warn('Token handling error: ', error)
          }
          // this.tokenCartao = token.token
        },
        onSubmit: event => {
          event.preventDefault();
          const cardData = cardForm.getCardFormData()
          this.infoCard = cardData
          console.log(this.infoCard)

        },
      },
      onFetching: (resource) => {
        console.log("Fetching resource: ", resource);

        // Animate progress bar
        const progressBar = document.querySelector(".progress-bar");
        progressBar.removeAttribute("value");

        return () => {
          progressBar.setAttribute("value", "0");
        };
      }
    })
  },
  created() {
    let ano = [];
    this.ano = ano;
    for (var i = 2021; i < 2030; i++) {
      ano.push(i);
    }
  },
  methods: {
    changeName (e) {
      this.valueFields.cardName = e.target.value
      this.$emit('input-card-name', this.valueFields.cardName)
    },
    changeNumber (e) {
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
      // eslint-disable-next-line
      if (e.inputType == 'deleteContentBackward') {
        const lastChar = this.valueFields.cardNumber.substring(this.valueFields.cardNumber.length, this.valueFields.cardNumber.length - 1)
        // eslint-disable-next-line
        if (lastChar == ' ') { this.valueFields.cardNumber = this.valueFields.cardNumber.substring(0, this.valueFields.cardNumber.length - 1) }
      }
      this.$emit('input-card-number', this.valueFields.cardNumber)
    },
    changeMonth () {
      this.$emit('input-card-month', this.valueFields.cardMonth)
    },
    changeYear () {
      this.$emit('input-card-year', this.valueFields.cardYear)
    },
    changeCvv (e) {
      this.valueFields.cardCvv = e.target.value
      this.$emit('input-card-cvv', this.valueFields.cardCvv)
    },
    generateMonthValue (n) {
      return n < 10 ? `0${n}` : n
    },
    toggleMask () {
      this.isCardNumberMasked = !this.isCardNumberMasked
      if (this.isCardNumberMasked) {
        this.maskCardNumber()
      } else {
        this.unMaskCardNumber()
      }
    },
    maskCardNumber () {
      this.valueFields.cardNumberNotMask = this.valueFields.cardNumber
      this.mainCardNumber = this.valueFields.cardNumber
      const arr = this.valueFields.cardNumber.split('')
      arr.forEach((element, index) => {
        if (index > 4 && index < 14 && element.trim() !== '') {
          arr[index] = '*'
        }
      })
      this.valueFields.cardNumber = arr.join('')
    },
    unMaskCardNumber () {
      this.valueFields.cardNumber = this.mainCardNumber
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
}
</script>

<style scoped>

.btn-compra
{
  background-color: #05b767;
  color: white;
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

.label-estilo
{
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;

}


.number-two
{
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  background-color: white;
}

input {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 14px;
}

.btn-pay-new
{
  background-color: transparent !important;
  font-size: 13px;
  color: black;

}

</style>
