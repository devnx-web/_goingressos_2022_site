<template>
  <div>
<!--    <div>-->
<!--      <div style="position: fixed; bottom: 20px; right: 20px; z-index: 9999">-->
<!--        <a target="_blank" :href="`https://api.whatsapp.com/send?phone=5541988566740&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20improvavel%20talks%20e%20tenho%20algumas%20d%C3%BAvidas%20meu%20id%20%C3%A9%20${idGo}`">-->
<!--          <img style="width: 70px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="" />-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
    <script>
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1954685,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
    <nav class="bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2">
      <b-row>
        <b-col cols="3" md="2" align-self="center">
          <div>
            <nuxt-link :to="`/${$route.params.evento}`">
              <img
                class="p-1"
                v-if="evento"
                height="50"
                :src="evento.logo ? `https://arquivos.devnx.com.br/goingressos/uploads/${evento.logo}` : 'https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logob.png'"
                alt=""
              />
            </nuxt-link>
          </div>
        </b-col>
        <b-col cols="9" md="8" class="text-center" align-self="center">
          <b-button @click="$router.push(`/${$route.params.evento}/meus-ingressos`)" class="btn-padrao px-4"
            >Meus Ingressos
          </b-button>
        </b-col>
        <b-col class="d-none d-md-block" md="2" align-self="center">
          <div class="ml-3">
            <img
              height="45"
              src="https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logo-deitadab2.png"
              alt=""
            />
          </div>
        </b-col>
      </b-row>
    </nav>

    <b-modal id="conta" centered title="Entre em sua conta" hide-footer>
      <div class="py-1">
        <div>
          <div class="bloc-info" v-if="!codigoEnviado">
            <div class="d-flex align-items-center">
              <div>
                <img height="37" src="../assets/icones/info.svg" alt="" />
              </div>
              <p class="ml-2 text-info-bloc">
                Para ver os ingressos comprados insira o seu WhatsApp
              </p>
            </div>
          </div>
          <div v-if="!codigoEnviado">
            <p class="mt-3">WhatsApp</p>
            <the-mask
              v-model="whatsapp"
              class="input-form form-control"
              placeholder="Ex: (99) 99999-9999"
              :mask="['(##) ####-####', '(##) #####-####']"
            />
          </div>
          <div v-else class="mt-2">
            <p class="font-weight-light small">
              Código enviado para (41) 99777-8887
            </p>
          </div>
        </div>
        <div>
          <b-input
            class="mt-2 input-form"
            placeholder="Digite o código"
            v-if="codigoEnviado"
          ></b-input>
        </div>
        <div class="mt-2">
          <b-button
            v-if="!codigoEnviado"
            block
            @click="enviaVerifica()"
            variant="info"
            >Enviar Código</b-button
          >
          <b-button
            v-else
            block
            @click="enviaVerifica(whatsapp)"
            variant="success"
            >Validar Código</b-button
          >
          <p
            class="mt-2 cursor-pointer"
            @click="codigoEnviado = false"
            v-if="codigoEnviado"
          >
            Reenviar Código
          </p>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "menuTopo",
  data() {
    return {
      codigoEnviado: false,
      whatsapp: "",
      idGo: '',
      codigo: "",
      resultado: '',
      evento: []
    };
  },
  async mounted() {
    this.evento = JSON.parse(localStorage.getItem("evento"));
    let idGo = JSON.parse(localStorage.getItem("id_go"));
    if (!idGo) {
      idGo = "GO-" + Math.floor(Math.random() * 9123030 + 4564564657879);
      await localStorage.setItem("id_go", JSON.stringify(idGo));
    }
    this.idGo = idGo
    var socket = io("https://ws.devnx.com.br/");
    socket.on(idGo, async (e) => {
      this.resultado = e.status
      if (this.resultado) {
        this.$alert("Seu pagamento foi confirmado e seus ingressos se encontram disponiveis para download, também foram enviados no e-mail cadastrado e WhatsApp de cada ingresso", "Pagamento Confirmado", 'success');
        this.mudaPage()
      }
    })
  },
  async created() {
    const {data} = await this.$axios.get(`evento/${this.$route.params.evento}`)
    this.evento = data;
  },
  methods: {
    async mudaPage() {
      setTimeout(() => { this.$router.push(`/${this.$route.params.evento}/meus-ingressos`); }, 2000);
    },
    enviaVerifica(c) {
      if (c) alert("verificando...")
      this.codigoEnviado = true;
    },
  },
};
</script>

<style scoped>
.bg-menu {
  height: 64px;
  background-color: black;
  color: white;
}
</style>
