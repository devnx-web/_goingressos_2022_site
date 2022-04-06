<template>
  <div>
    <menu-topo />
    <div style="overflow: hidden">
      <div class="bg-banner d-none d-md-block"></div>
    </div>

    <div class="d-flex justify-content-center">
      <img
        class="estilo-banner d-none d-md-block"
        :src="evento.banner"
        :alt="evento.nome"
      />
    </div>
    <div class="d-md-none">
      <img
        style="width: 100%"
        src="https://arquivos.devnx.com.br/goingressos/uploads/universi/21/12/17/banner.jpg"
        alt=""
      />
    </div>
    <b-container>
      <div class="mb-5 padding-banner mt-4 mt-md-0">
        <div>
          <h1>{{ evento.nome }}</h1>
          <p>
            {{ evento.descricao }}
          </p>
          <hr />
          <div class="card-ingresso-venda d-md-none">
            <div class="text-center bg-dark text-light py-1">
              <p>Adquira seu Ingresso</p>
            </div>
            <div v-for="(c, index) in ingressos" :key="index">
              <hr class="mt-0 mb-0" />

              <div class="p-3">
                <div>
                  <p>{{ c.nomeIng }}</p>
                  <p class="small">
                    {{ c.nomeLote }} - Valor: {{ c.valor | currency }}
                  </p>
                </div>
                <div class="d-flex mt-2">
                  <img
                    @click="dimiIng(c, index)"
                    class="cursor-pointer"
                    height="25"
                    src="../assets/icones/minus.svg"
                    alt=""
                  />
                  <p
                    class="px-2"
                    style="font-size: 22px !important; margin-top: -4px"
                  >
                    {{ c.qtd }}
                  </p>
                  <img
                    @click="addIng(c, index)"
                    class="cursor-pointer"
                    height="25"
                    src="../assets/icones/plus.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr class="mt-0 mb-0" />
            <div class="p-3">
              <b-row>
                <b-col md="4" align-self="center">
                  <p
                    @click="cupom = true"
                    style="font-size: 14px; color: #25b3ff"
                  >
                    Possuí um Cupom?
                  </p>
                </b-col>
                <b-col>
                  <b-input-group>
                    <b-form-input
                      class="input-form"
                      style="font-size: 13px"
                      placeholder="Digite aqui..."
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button style="font-size: 13px" variant="success"
                        >Aplicar</b-button
                      >
                    </b-input-group-append>
                  </b-input-group>
                </b-col>
              </b-row>
            </div>
            <div>
              <hr class="mb-0 mt-0" />
              <b-row>
                <b-col v-if="valorTotal" cols="5">
                  <div class="pl-3">
                    <p class="text-total">Total:</p>
                    <p class="text-value-total">
                      {{ valorTotal | currency }}
                    </p>
                  </div>
                </b-col>
                <b-col>
                  <b-button
                    style="border-radius: 0; height: 100%; font-size: 14px"
                    variant="success"
                    block
                    @click="compraIng()"
                    >Comprar Ingressos</b-button
                  >
                </b-col>
              </b-row>
            </div>
          </div>
          <b-row class="mt-3">
            <b-col cols="12" md="6">
              <div class="card-info">
                <b-row>
                  <b-col>
                    <div class="small">Data do evento</div>
                    <div>{{ evento.data }}</div>
                  </b-col>
                  <b-col>
                    <div class="small">Classificação</div>
                    <div>{{ evento.classificacao }}</div>
                  </b-col>
                </b-row>
                <hr />
                <b-row>
                  <b-col>
                    <div class="small">Endereço</div>
                    <div>
                      {{ evento.endereco }}
                    </div>
                    <a class="d-flex mt-2" href="#" target="_blank">
                      <div>
                        <img
                          height="20"
                          src="../assets/icones/link.svg"
                          alt=""
                        />
                      </div>
                      <p class="ml-2" style="color: #25b3ff">Abrir no Maps</p>
                    </a>
                  </b-col>
                </b-row>
              </div>
              <div class="card-info mt-3">
                <h5 class="pt-2 text-center">Como compro os ingressos?</h5>
                <hr />
                <b-row class="mt-3">
                  <b-col
                    class="d-flex justify-content-md-center pr-md-0"
                    md="2"
                  >
                    <div
                      class="
                        bloc-bg
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <p>1</p>
                    </div>
                  </b-col>
                  <b-col class="pr-md-0">
                    <div>
                      <p class="txt-tutorial mt-2 mt-md-0">
                        Escolha os ingressos que deseja comprar, você também
                        pode usar um cupom caso tenha
                      </p>
                    </div>
                  </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                  <b-col
                    class="d-flex justify-content-md-center pr-md-0"
                    md="2"
                  >
                    <div
                      class="
                        bloc-bg
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <p>2</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <p class="txt-tutorial mt-2 mt-md-0">
                        Preencha as informações com os dados e em seguida clique
                        em “Comprar”
                      </p>
                    </div>
                  </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                  <b-col
                    class="d-flex justify-content-md-center pr-md-0"
                    md="2"
                  >
                    <div
                      class="
                        bloc-bg
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <p>1</p>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <p class="txt-tutorial mt-2 mt-md-0">
                        Scaneie o QR Code pelo seu banco para realizar o
                        pagamento via PIX, ou pague pelo seu cartão de crédito
                      </p>
                    </div>
                  </b-col>
                </b-row>
                <hr />
                <b-row class="mt-3">
                  <b-col
                    class="d-flex justify-content-md-center pr-md-0"
                    md="2"
                  >
                    <div
                      class="
                        d-flex
                        align-items-center
                        md-justify-content-center
                      "
                    >
                      <img
                        src="../assets/icones/whatsapp.png"
                        height="50"
                        alt=""
                      />
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <p class="txt-tutorial mt-2 mt-md-0">
                        Seus ingressos serão enviados automaticamente para o
                        WhatsApp cadastrado, você também pode ve-lo através do
                        menu 'meus ingressos'
                      </p>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col>
              <div class="card-ingresso-venda d-none d-md-block">
                <div class="text-center bg-dark text-light py-1">
                  <p>Adquira seu Ingresso</p>
                </div>
                <div v-for="(c, index) in ingressos" :key="index">
                  <hr class="mt-0 mb-0" />

                  <div
                    class="
                      p-3
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div>
                      <p>{{ c.nomeIng }}</p>
                      <p class="small">
                        {{ c.nomeLote }} - Valor: {{ c.valor | currency }}
                      </p>
                    </div>
                    <div class="d-flex">
                      <img
                        @click="dimiIng(c, index)"
                        class="cursor-pointer"
                        height="25"
                        src="../assets/icones/minus.svg"
                        alt=""
                      />
                      <p class="px-2" style="font-size: 22px; margin-top: -4px">
                        {{ c.qtd }}
                      </p>
                      <img
                        @click="addIng(c, index)"
                        class="cursor-pointer"
                        height="25"
                        src="../assets/icones/plus.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <hr class="mt-0 mb-0" />
                <div class="p-3">
                  <b-row>
                    <b-col md="4" align-self="center">
                      <p
                        @click="cupom = true"
                        style="font-size: 14px; color: #25b3ff"
                      >
                        Possuí um Cupom?
                      </p>
                    </b-col>
                    <b-col>
                      <b-input-group>
                        <b-form-input
                          class="input-form"
                          style="font-size: 13px"
                          placeholder="Digite aqui..."
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button style="font-size: 13px" variant="success"
                            >Aplicar</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                    </b-col>
                  </b-row>
                </div>
                <div>
                  <hr class="mb-0 mt-0" />
                  <b-row>
                    <b-col v-if="valorTotal">
                      <div class="px-2">
                        <p class="text-total">Total:</p>
                        <p class="text-value-total">
                          {{ valorTotal | currency }}
                        </p>
                      </div>
                    </b-col>
                    <b-col>
                      <b-button
                        style="border-radius: 0; height: 100%"
                        variant="success"
                        block
                        @click="compraIng()"
                        >Comprar Ingressos</b-button
                      >
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import MenuTopo from "../components/menu";
export default {
  name: "IndexPage",
  components: { MenuTopo },
  data() {
    return {
      valorTotal: 0,
      evento: {
        id: "",
        nome: "",
        descricao: "",
        banner: "",
        endereco: "",
        classicicacao: "",
        data: new Date(),
      },
      cupom: "",
      ingressos: [],
      ingressosCompra: [],
    };
  },
  beforeMount() {
    this.carregaIngressos();
  },
  methods: {
    async carregaIngressos() {
      localStorage.removeItem("ingressos");
      localStorage.removeItem("ingressosC");
      const data = await fetch(
        "https://phpstack-666249-2543201.cloudwaysapps.com/api/site/surreal-producoes/evento/we-are-carnaval"
      );
      const evJson = await data.json();
      this.evento = evJson;
      this.ingressos = evJson.ingressos;
    },
    compraIng() {
      if (this.total === 0) {
        this.$toast.error("Adicione ingressos para comprar!");
        return;
      }
      this.$router.push("/carrinho");
      this.$toast.info("Insira os dados dos ingressos");
    },
    somaIngressos() {
      let valorT = 0;
      const carrinho = [];
      this.ingressos.forEach((ing) => {
        if (ing.qtd > 0) carrinho.push(ing);
        valorT += ing.qtd * ing.valor;
      });
      this.valorTotal = valorT;
      localStorage.setItem("ingressos", JSON.stringify(carrinho));
    },
    dimiIng(ing, index) {
      if (ing.qtd > 0) {
        this.ingressos[index].qtd--;
        this.somaIngressos();
      }
    },
    addIng(ing, index) {
      this.ingressos[index].qtd++;
      this.somaIngressos();
    },
  },
};
</script>

<style>
.txt-tutorial {
  font-size: 14px;
  font-weight: 400;
}

.bloc-bg {
  text-align: center;
  border-radius: 100px;
  color: white;
  height: 40px;
  width: 40px;
  background-color: black;
  font-family: "Poppins", sans-serif;
}

.card-info {
  border-radius: 5px;
  border: solid 1px #d9d9d9;
  padding: 10px;
  font-family: "Poppins", sans-serif;
}

.text-total {
  font-size: 13px;
  margin-top: 5px;
}

.text-value-total {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
}
.card-ingresso-venda {
  border: solid 1px #dcdcdc;
  border-radius: 5px;
}

.estilo-banner {
  height: 350px;
  width: 990px;
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-position: 50%;
  background-size: cover;
  box-shadow: 0 4px 18px 5px rgb(0 0 0 / 29%);
  overflow: hidden;
}

.bg-banner {
  background-image: url("https://arquivos.devnx.com.br/goingressos/uploads/universi/21/12/17/banner.jpg");
  background-size: cover;
  height: 270px;
  -o-object-fit: cover;
  object-fit: cover;
  filter: blur(8px);
  background-position: 50%;
  -webkit-filter: blur(8px);
  transform: scale(1.2);
}
</style>
