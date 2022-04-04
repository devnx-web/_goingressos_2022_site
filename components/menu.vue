<template>
<div>
  <nav class="bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2">
    <b-row>
      <b-col cols="3" md="2" align-self="center">
        <div>
         <nuxt-link to="/">
           <img height="50" src="https://uni.goingressos.com.br/_nuxt/img/logouni.92cc7fe.png" alt="">
         </nuxt-link>
        </div>
        </b-col>
        <b-col cols="9" md="8" class="text-center" align-self="center">
          <b-button  v-b-modal.conta class="btn-padrao px-4">Meus Ingressos</b-button>
        </b-col>
      <b-col class="d-none d-md-block" md="2" align-self="center">
        <div class="ml-3">
          <img height="35" src="https://uni.goingressos.com.br/_nuxt/img/Go.f34a656.png" alt="">
        </div>
      </b-col>
    </b-row>
  </nav>

  <b-modal id="conta" centered title="Entre em sua conta" hide-footer>
    <div class="py-1">
      <div>
       <div class="bloc-info"  v-if="!codigoEnviado">
         <div class="d-flex align-items-center">
           <div>
             <img height="37" src="../assets/icones/info.svg" alt="">
           </div>
           <p class="ml-2 text-info-bloc">Para ver os ingressos comprados insira o WhatsApp do comprador</p>
         </div>
       </div>
      <div v-if="!codigoEnviado">
        <p class="mt-3">WhatsApp</p>
        <the-mask v-model="whatsapp" class="input-form form-control" placeholder="Ex: (99) 99999-9999" :mask="['(##) ####-####', '(##) #####-####']" />
      </div>
      <div v-else class="mt-2">
       <p class="font-weight-light small"> Código enviado para (41) 99777-8887</p>
      </div>
      </div>
      <div>
        <b-input class="mt-2 input-form" placeholder="Digite o código" :disabled="!codigoEnviado"></b-input>
        <p class="txt-info" v-if="!codigoEnviado">Aperte em enviar código antes!</p>
      </div>
      <div class="mt-2">
        <b-button v-if="!codigoEnviado" block @click="enviaVerifica()" variant="info">Enviar Código</b-button>
        <b-button v-else block @click="enviaVerifica(whatsapp)" variant="success">Validar Código</b-button>
        <p class="mt-2 cursor-pointer" @click="codigoEnviado = false" v-if="codigoEnviado">Reenviar Código</p>
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
      whatsapp: '',
      codigo: '',
    }
  },
  methods: {
    enviaVerifica(c){
      if (c) {
        console.log('verificando...')
      }
      this.codigoEnviado = true
    }
  }
}
</script>

<style scoped>

.bg-menu {
  background-color: black;
  color: white;
}

</style>
