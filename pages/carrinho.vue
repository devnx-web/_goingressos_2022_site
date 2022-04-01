<template>
  <div>
    <menu-topo/>
    <div class="container-fluid px-5">
      <div class="mt-5">
        <b-row>
          <b-col md="8">
            <div>
              <h1>MEU CARRINHO</h1>
              <p class="small">ID da compra: GO-40655454</p>
            </div>
            <div class="card-ingressos mt-2">
              <div class="bg-topo px-3 d-flex justify-content-between align-items-center">
             <div>
               <h3>EVENTO EXEMPLO 1 EDIÇÃO</h3>
               <p class="small">11/12/2022 - 12h</p>
             </div>
                <div>
                  tempo restatne: 3213
                </div>
              </div>
              <div class="p-3">
                <div>
                  <p>Preencha as informações abaixo para finalizar a compra!</p>
                </div>
                <div class="d-flex align-items-center mt-3">
                  <div class="estilo-input">
                    <b-row>
                      <b-col class="pr-0">
                        <b-input placeholder="Nome Completo"></b-input>
                      </b-col>
                      <b-col class="pl-0 pr-0 border-left">
                        <b-input placeholder="CPF"></b-input>
                      </b-col>
                      <b-col class="pr-0 pl-0 border-right border-left">
                        <the-mask v-model="whatsapp" class="input-form form-control" placeholder="Ex: (99) 99999-9999" :mask="['(##) ####-####', '(##) #####-####']" />
                      </b-col>
                      <b-col class="pl-0">
                        <b-input type="date" placeholder="Data de nascimento"></b-input>
                      </b-col>
                    </b-row>
                  </div>
                  <div class="ml-3">
                    <img height="30" src="../assets/icones/minus.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div>
              <div>
                <h2>RESUMO</h2>
                <p class="small ml-1">(1 Ingresso)</p>
              </div>

              <div class="card-resumo mt-2">
                <div class="p-3">
                  <p>Ingresso Feminino</p>
                  <p class="small">Bloco 3 Lote</p>
                </div>
                <div class="bg-total p-3 d-flex justify-content-between">
                  <p>Total:</p>
                  <p><b>00</b></p>
                </div>
              </div>

              <div>
                <b-button v-b-modal.finaliza variant="success" class="mt-3" block>Finalizar Compra</b-button>
              </div>

            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal id="finaliza" centered title="Finalizar compra" hide-footer>
      <div class="py-1">
        <div>
          <div class="bloc-info"  v-if="!codigoEnviado">
            <div class="d-flex align-items-center">
              <div>
                <img height="37" src="../assets/icones/info.svg" alt="">
              </div>
              <p class="ml-2 text-info-bloc">Digite seus dados e esolha uma opção de pagamento</p>
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
            <b-col md="6"  class="pr-1">
              <div>
                <p class="mt-3 small">Nome Completo</p>
                <b-input class="input-form form-control estilo-input" placeholder="Ex: Anderson Costa"/>
              </div>
            </b-col>
            <b-col md="6" class="pl-1">
              <div>
                <p class="mt-3 small">WhatsApp</p>
                <b-input class="input-form form-control estilo-input" placeholder="Ex: (99) 99999-9999" :mask="['(##) ####-####', '(##) #####-####']" />
              </div>
            </b-col>
          </b-row>
          <b-row class="mt-n2">
            <b-col md="6"  class="pr-1">
              <div>
                <p class="mt-3 small">CPF</p>
                <b-input placeholder="CPF" class="input-form form-control estilo-input"/>
              </div>
            </b-col>
            <b-col md="6" class="pl-1">
              <div>
                <p class="mt-3 small">E-mail</p>
                <b-input placeholder="E-mail" class="input-form form-control estilo-input"/>
              </div>
            </b-col>
          </b-row>
        </div>
        <hr>
        <p>Forma de pagamento</p>
        <div class="mt-2">
         <b-row>
           <b-col md="6" class="pr-1">
             <div class="card-pay text-center py-2">
              <div>
                <div>
                  <img src="../assets/icones/pix-106.svg" height="30" alt="">
                </div>
                <p class="small mt-1">Pagar pelo PIX</p>
              </div>
              </div>
           </b-col>
           <b-col md="6" class="pl-1">
             <div class="card-pay text-center py-2">
              <div>
                <div>
                  <img src="../assets/icones/credit-card-ico.png" height="40" alt="">
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

export default {
  name: "carrinho",
  components: {MenuTopo},
  data() {
    return {
      status: 'not_accepted'
    }
  }
}
</script>

<style scoped>

.card-pay
{
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


.new-input{
  border: solid 1px #dcdcdc;
}

.estilo-input
{
  border-radius: 10px !important;
  overflow: hidden;
  border: solid 1px #ececec;
}

input{
  height: 40px;
  font-size: 13px !important;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 0;
  box-shadow: none !important;
}

.bg-total{
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
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 17px;
  margin: 0;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
}

</style>
