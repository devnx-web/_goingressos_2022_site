<template>
  <div>
    <nav class="bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2">
      <b-row>
        <b-col cols="3" md="2" align-self="center">
          <div>
            <nuxt-link :to="`/${this.$route.params.evento}`">
              <img
                height="50"
                :src="`https://arquivos.devnx.com.br/goingressos/uploads/${evento.logo}`"
                alt=""
              />
            </nuxt-link>
          </div>
        </b-col>
        <b-col cols="9" md="8" class="text-center" align-self="center">
          <b-button @click="$router.push('/meus-ingressos')" class="btn-padrao px-4"
            >Meus Ingressos</b-button
          >
        </b-col>
        <b-col class="d-none d-md-block" md="2" align-self="center">
          <div class="ml-3">
            <img
              height="35"
              src="https://uni.goingressos.com.br/_nuxt/img/Go.f34a656.png"
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
  props: {
    evento: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      codigoEnviado: false,
      whatsapp: "",
      codigo: "",
      resultado: '',
      evento: []
    };
  },
  async mounted() {
    let idGo = JSON.parse(localStorage.getItem("id_go"));
    if (!idGo) {
      idGo = "GO-" + Math.floor(Math.random() * 9123030 + 4564564657879);
      await localStorage.setItem("id_go", JSON.stringify(idGo));
    }
    var socket = io("http://ws.devnx.com.br/");
    console.log(idGo)
    socket.on(idGo, (e) => {
      console.log(e);
      this.resultado = e.status
      if (this.resultado) {
        this.$alert("Seu pagamento foi confirmado e seus ingressos se encontram disponiveis para download, também foram enviados no e-mail cadastrado e WhatsApp de cada ingresso", "Pagamento Confirmado", 'success');
        this.$router.push("/meus-ingressos");
      }
    })
  },
  methods: {
    enviaVerifica(c) {
      if (c) {
        console.log("verificando...");
      }
      this.codigoEnviado = true;
    },
  },
};
</script>

<style scoped>
.bg-menu {
  background-color: black;
  color: white;
}
</style>
