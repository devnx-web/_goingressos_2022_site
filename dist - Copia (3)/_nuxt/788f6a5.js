(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{502:function(e,t,r){var content=r(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("5e3c04e9",content,!0,{sourceMap:!1})},503:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjYwcHgiPiAgICA8cGF0aCBkPSJNMTUsM0M4LjM3MywzLDMsOC4zNzMsMywxNWMwLDYuNjI3LDUuMzczLDEyLDEyLDEyczEyLTUuMzczLDEyLTEyQzI3LDguMzczLDIxLjYyNywzLDE1LDN6IE0xNiwyMWgtMnYtN2gyVjIxeiBNMTUsMTEuNSBjLTAuODI4LDAtMS41LTAuNjcyLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVzMS41LDAuNjcyLDEuNSwxLjVTMTUuODI4LDExLjUsMTUsMTEuNXoiLz48L3N2Zz4="},504:function(e,t,r){"use strict";r(502)},505:function(e,t,r){var o=r(60)(!1);o.push([e.i,".bg-menu[data-v-5af18526]{height:64px;background-color:#000;color:#fff}",""]),e.exports=o},506:function(e,t,r){"use strict";r.r(t);var o=r(33),n=(r(37),r(79),{name:"menuTopo",data:function(){return{codigoEnviado:!1,whatsapp:"",idGo:"",codigo:"",resultado:"",evento:[]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.evento=JSON.parse(localStorage.getItem("evento")),r=JSON.parse(localStorage.getItem("id_go"))){t.next=6;break}return r="GO-"+Math.floor(9123030*Math.random()+4564564657879),t.next=6,localStorage.setItem("id_go",JSON.stringify(r));case 6:e.idGo=r,io("https://ws.devnx.com.br/").on(r,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.resultado=r.status,e.resultado&&(e.$alert("Seu pagamento foi confirmado e seus ingressos se encontram disponiveis para download, também foram enviados no e-mail cadastrado e WhatsApp de cada ingresso","Pagamento Confirmado","success"),e.mudaPage());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("evento/".concat(e.$route.params.evento));case 2:r=t.sent,data=r.data,e.evento=data;case 5:case"end":return t.stop()}}),t)})))()},methods:{mudaPage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout((function(){e.$router.push("/".concat(e.$route.params.evento,"/meus-ingressos"))}),2e3);case 1:case"end":return t.stop()}}),t)})))()},enviaVerifica:function(e){e&&alert("verificando..."),this.codigoEnviado=!0}}}),c=n,d=(r(504),r(55)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("script",[e._v("\n      (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1954685,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n    ")]),e._v(" "),o("nav",{staticClass:"bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2"},[o("b-row",[o("b-col",{attrs:{cols:"3",md:"2","align-self":"center"}},[o("div",[o("nuxt-link",{attrs:{to:"/"+e.$route.params.evento}},[e.evento?o("img",{staticClass:"p-1",attrs:{height:"50",src:e.evento.logo?"https://arquivos.devnx.com.br/goingressos/uploads/"+e.evento.logo:"https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logob.png",alt:""}}):e._e()])],1)]),e._v(" "),o("b-col",{staticClass:"text-center",attrs:{cols:"9",md:"8","align-self":"center"}},[o("b-button",{staticClass:"btn-padrao px-4",on:{click:function(t){return e.$router.push("/"+e.$route.params.evento+"/meus-ingressos")}}},[e._v("Meus Ingressos\n          ")])],1),e._v(" "),o("b-col",{staticClass:"d-none d-md-block",attrs:{md:"2","align-self":"center"}},[o("div",{staticClass:"ml-3"},[o("img",{attrs:{height:"45",src:"https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logo-deitadab2.png",alt:""}})])])],1)],1),e._v(" "),o("b-modal",{attrs:{id:"conta",centered:"",title:"Entre em sua conta","hide-footer":""}},[o("div",{staticClass:"py-1"},[o("div",[e.codigoEnviado?e._e():o("div",{staticClass:"bloc-info"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("img",{attrs:{height:"37",src:r(503),alt:""}})]),e._v(" "),o("p",{staticClass:"ml-2 text-info-bloc"},[e._v("\n                Para ver os ingressos comprados insira o seu WhatsApp\n              ")])])]),e._v(" "),e.codigoEnviado?o("div",{staticClass:"mt-2"},[o("p",{staticClass:"font-weight-light small"},[e._v("\n              Código enviado para (41) 99777-8887\n            ")])]):o("div",[o("p",{staticClass:"mt-3"},[e._v("WhatsApp")]),e._v(" "),o("the-mask",{staticClass:"input-form form-control",attrs:{placeholder:"Ex: (99) 99999-9999",mask:["(##) ####-####","(##) #####-####"]},model:{value:e.whatsapp,callback:function(t){e.whatsapp=t},expression:"whatsapp"}})],1)]),e._v(" "),o("div",[e.codigoEnviado?o("b-input",{staticClass:"mt-2 input-form",attrs:{placeholder:"Digite o código"}}):e._e()],1),e._v(" "),o("div",{staticClass:"mt-2"},[e.codigoEnviado?o("b-button",{attrs:{block:"",variant:"success"},on:{click:function(t){return e.enviaVerifica(e.whatsapp)}}},[e._v("Validar Código")]):o("b-button",{attrs:{block:"",variant:"info"},on:{click:function(t){return e.enviaVerifica()}}},[e._v("Enviar Código")]),e._v(" "),e.codigoEnviado?o("p",{staticClass:"mt-2 cursor-pointer",on:{click:function(t){e.codigoEnviado=!1}}},[e._v("\n            Reenviar Código\n          ")]):e._e()],1)])])],1)}),[],!1,null,"5af18526",null);t.default=component.exports},516:function(e,t,r){e.exports=r.p+"img/pix-branco.ea301ad.png"},517:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+"},518:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IjEiIGlkPSJfMSI+PHBhdGggZD0iTTM1Myw0NTBhMTUsMTUsMCwwLDEtMTAuNjEtNC4zOUwxNTcuNSwyNjAuNzFhMTUsMTUsMCwwLDEsMC0yMS4yMUwzNDIuMzksNTQuNmExNSwxNSwwLDEsMSwyMS4yMiwyMS4yMUwxODkuMzIsMjUwLjEsMzYzLjYxLDQyNC4zOUExNSwxNSwwLDAsMSwzNTMsNDUwWiIvPjwvZz48L3N2Zz4="},523:function(e,t,r){var content=r(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("47e1da92",content,!0,{sourceMap:!1})},535:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9Im1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4NCjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMGEwYSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMzUiIHN0cm9rZS1kYXNoYXJyYXk9IjE2NC45MzM2MTQzMTM0NjQxNSA1Ni45Nzc4NzE0Mzc4MjEzOCI+DQogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPg0KPC9jaXJjbGU+DQo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4="},536:function(e,t,r){"use strict";r(523)},537:function(e,t,r){var o=r(60)(!1);o.push([e.i,'.btn-compra[data-v-f9076fd0]{background-color:#05b767;color:#fff}.bg-resumo[data-v-f9076fd0]{font-size:13px;padding:20px;border-radius:8px 8px 0 0;background-color:#2f2f2f;color:#fff}.card-info-credit[data-v-f9076fd0]{background-color:#f6f6f6;border:1px solid #e0e0e0;border-radius:0 0 10px 10px}.card-pay[data-v-f9076fd0]{background:linear-gradient(144deg,#2fbdaf,#5fe2d5);justify-content:center;display:flex;align-items:center;height:40px;border-radius:10px;border:none}.label-estilo[data-v-f9076fd0]{margin-top:0;margin-bottom:0}.label-estilo[data-v-f9076fd0],input[data-v-f9076fd0]{font-family:"Poppins",sans-serif;font-size:14px}input[data-v-f9076fd0]{font-weight:300}.btn-pay-new[data-v-f9076fd0]{background-color:transparent!important;font-size:13px;color:#000}',""]),e.exports=o},548:function(e,t,r){"use strict";r.r(t);var o=r(33),n=(r(79),r(1),r(38),r(4),r(12),r(20),r(27),r(35),r(18),{name:"index",components:{MenuTopo:r(506).default},data:function(){return{mostraico:!1,valueFields:{cardName:"",cardNumber:"",cardMonth:null,cardYear:null,cardCvv:null},inputFields:{cardNumber:"form-checkout__cardNumber",cardName:"form-checkout__cardholderName",cardExpirationDate:"form-checkout__cardExpirationDate",cardholderEmail:"form-checkout__cardholderEmail",cardMonth:"form-checkout__cardExpirationMonth",cardYear:"form-checkout__cardExpirationYear",cardCvv:"form-checkout__securityCode",identificationNumber:"form-checkout__identificationNumber"},labelsFields:{cardName:"Nome Completo",cardHolder:"Titular do cartão",cardMonth:"MM",cardYear:"YY",cardExpires:"Vencimento",cardCvv:"CVV"},minCardYear:(new Date).getFullYear(),mainCardNumber:"",cardNumberMaxLength:19,infoCard:"",loading:!0,minCardMonth:"",ano:"",email:"",titular:"",tipoPagamento:"",codigoEnviado:!1,whatsapp:"",status:"not_accepted",totalIngressos:0,valorTotal:0,ingressos:[]}},beforeMount:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,i,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.carregaCarrinho();case 2:for(r=[],i=2021;i<2051;i++)r.push(i);e.ano=r,n=new MercadoPago("APP_USR-32eb6f4a-9f49-4968-aceb-4cffdba1f377",{locale:"pt-BR"}),c=n.cardForm({amount:e.valorTotal.toString(),autoMount:!0,processingMode:"aggregator",form:{id:"form-checkout",cardholderName:{id:"form-checkout__cardholderName",placeholder:"Titular do cartão"},cardholderEmail:{id:"form-checkout__cardholderEmail",placeholder:"E-mail"},cardNumber:{id:"form-checkout__cardNumber",placeholder:"Número do cartão"},cardExpirationDate:{id:"form-checkout__cardExpirationDate",placeholder:"(MM/YYYY)"},securityCode:{id:"form-checkout__securityCode",placeholder:"Código de segurança"},installments:{id:"form-checkout__installments",placeholder:"Parcelas"},identificationType:{id:"form-checkout__identificationType",placeholder:"Tipo de documento"},identificationNumber:{id:"form-checkout__identificationNumber",placeholder:"Número do CPF"},issuer:{id:"form-checkout__issuer",placeholder:"Banco emissor"}},callbacks:{onFormMounted:function(e){if(e)return console.warn("Form Mounted handling error: ",e)},onFormUnmounted:function(e){if(e)return console.warn("Form Unmounted handling error: ",e)},onIdentificationTypesReceived:function(e,t){if(e)return console.warn("identificationTypes handling error: ",e)},onPaymentMethodsReceived:function(e,t){if(e)return console.warn("paymentMethods handling error: ",e)},onIssuersReceived:function(e,t){if(e)return console.warn("issuers handling error: ",e)},onInstallmentsReceived:function(e,t){if(e)return console.warn("installments handling error: ",e)},onCardTokenReceived:function(t,r){if(t)return t.forEach((function(t){switch(t.code){case"205":e.$toast.error("Digite o número do seu cartão.");break;case"208":e.$toast.error("Escolha um mês.");break;case"209":e.$toast.error("Escolha um ano.");break;case"212":case"213":case"214":e.$toast.error("Informe seu documento.");break;case"221":e.$toast.error("Digite o nome e sobrenome.");break;case"224":e.$toast.error("Digite o código de segurança.");break;case"E301":e.$toast.error("Há algo de errado com o número do cartão. Digite novamente.");break;case"E302":e.$toast.error("Confira o código de segurança.");break;case"316":e.$toast.error("Por favor, digite um nome válido.");break;case"322":case"323":case"324":e.$toast.error("Confira seu documento.");break;case"325":case"326":e.$toast.error("Confira a data de vencimento.");break;default:e.$toast.error("Dados incorretos")}})),e.controleloop=0,console.warn("Token handling error: ",t)},onSubmit:function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.mostraico=!0,r.preventDefault(),o=c.getCardFormData(),e.infoCard=o,e.aplicaPagamento("credit-card");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},onFetching:function(e){var t=document.querySelector(".progress-bar");return t.removeAttribute("value"),function(){t.setAttribute("value","0")}}});case 7:case"end":return t.stop()}}),t)})))()},created:function(){var e=[];this.ano=e;for(var i=2021;i<2030;i++)e.push(i)},methods:{aplicaPagamento:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=localStorage.getItem("cupom")||null,(o=JSON.parse(localStorage.getItem("id_go")))||(o="GO-"+Math.floor(9123030*Math.random()+31230),localStorage.setItem("id_go",JSON.stringify(o))),n={ingressos:e.ingressos,email:e.infoCard.cardholderEmail,pagamento:"credit-card",cupom:r,idGo:o,card:e.infoCard},t.next=6,e.$axios.post("evento/".concat(e.$route.params.evento,"/pre_res_ingresso"),n);case 6:if(c=t.sent,!0===(data=c.data).pago&&(e.$toast.success(data.msg),e.$router.push("/".concat(e.$route.params.evento,"/meus-ingressos"))),!data.error){t.next=13;break}return e.$toast.error(data.error),e.$router.push("/".concat(e.$route.params.evento,"/pagamento/cartao")),t.abrupt("return");case 13:if(!1!==data.pago){t.next=69;break}if(!data.msg.message){t.next=23;break}if("Invalid card_token_id"!==data.msg.message){t.next=19;break}return e.$toast.info("Tempo expirado, digite os dados novamente"),window.location.replace("/".concat(e.$route.params.evento,"/pagamento/cartao")),t.abrupt("return");case 19:return e.$toast.info("Tempo expirado, digite os dados novamente"),window.location.replace("/".concat(e.$route.params.evento,"/pagamento/cartao")),e.mostraico=0,t.abrupt("return");case 23:t.t0=data.msg.status_detail,t.next="cc_rejected_high_risk"===t.t0?26:"cc_rejected_insufficient_amount"===t.t0?29:"cc_rejected_duplicated_payment"===t.t0?32:"pending_contingency"===t.t0?35:"pending_review_manual"===t.t0?39:"cc_rejected_bad_filled_date"===t.t0?43:"cc_rejected_bad_filled_other"===t.t0?46:"cc_rejected_bad_filled_security_code"===t.t0?49:"cc_rejected_blacklist"===t.t0?52:"cc_rejected_call_for_authorize"===t.t0?55:"cc_rejected_card_disabled"===t.t0?58:"cc_rejected_card_error"===t.t0?61:"cc_rejected_max_attempts"===t.t0?64:67;break;case 26:return e.$toast.error("Seu pagamento foi recusado. Tente pagar via PIX"),e.mostraico=0,t.abrupt("break",69);case 29:return e.$toast.error("Saldo insuficiente"),e.mostraico=0,t.abrupt("break",69);case 32:return e.$toast.error("Você já efetuou um pagamento com esse valor. Caso precise pagar novamente, utilize outro cartão ou outra forma de pagamento."),e.mostraico=0,t.abrupt("break",69);case 35:return e.$toast.info("Processando pagamento, em menos de 2 dias úteis informaremos se foi creditado."),e.$router.push("/".concat(e.$route.params.evento,"/meus-ingressos")),e.mostraico=0,t.abrupt("break",69);case 39:return e.$toast.info("Processando pagamento, em menos de 2 dias úteis informaremos se foi creditado ou se necessitamos de mais informação."),e.$router.push("/".concat(e.$route.params.evento,"/meus-ingressos")),e.mostraico=0,t.abrupt("break",69);case 43:return e.$toast.error("Revise a data de vencimento."),e.mostraico=0,t.abrupt("break",69);case 46:return e.$toast.error("Revise os dados."),e.mostraico=0,t.abrupt("break",69);case 49:return e.$toast.error("Revise o código de segurança do cartão."),e.mostraico=0,t.abrupt("break",69);case 52:return e.$toast.error("Não pudemos processar seu pagamento."),e.mostraico=0,t.abrupt("break",69);case 55:return e.$toast.error("Você deve autorizar o cartão de crédio a efetuar o pagamento ao Mercado Pago."),e.mostraico=0,t.abrupt("break",69);case 58:return e.$toast.error("Ligue para a operadora do cartão para ativar seu cartão. O telefone está no verso do seu cartão."),e.mostraico=0,t.abrupt("break",69);case 61:return e.$toast.error("Não conseguimos processar seu pagamento."),e.mostraico=0,t.abrupt("break",69);case 64:return e.$toast.error("Você atingiu o limite de tentativas permitido. Escolha outro cartão ou outra forma de pagamento."),e.mostraico=0,t.abrupt("break",69);case 67:e.$toast.error("Não foi possível processar seu pagamento, tente outro método"),e.mostraico=0;case 69:case"end":return t.stop()}}),t)})))()},salvaDadosCarrinho:function(){localStorage.setItem("ingressosC",JSON.stringify(this.ingressos))},escolhePay:function(e){if(this.salvaDadosCarrinho(),this.email){if(localStorage.setItem("email",JSON.stringify(this.email)),this.tipoPagamento=e,"pix"===e){if(localStorage.setItem("email",JSON.stringify(this.email)),!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))return void this.$toast.error("Digite um e-mail válido");localStorage.setItem("ingressos",JSON.stringify(this.ingressos)),this.$router.push("/".concat(this.$route.params.evento,"/pagamento/pix"))}}else this.$toast.error("Digite um e-mail para continuar")},changeName:function(e){this.valueFields.cardName=e.target.value,this.$emit("input-card-name",this.valueFields.cardName)},changeNumber:function(e){this.valueFields.cardNumber=e.target.value;var t=this.valueFields.cardNumber.replace(/\D/g,"");(/^3[47]\d{0,13}$/.test(t)?(this.valueFields.cardNumber=t.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{6})/,"$1 $2 "),this.cardNumberMaxLength=17):/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(t)?(this.valueFields.cardNumber=t.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{6})/,"$1 $2 "),this.cardNumberMaxLength=16):/^62[0-9]\d*/.test(t)?(this.valueFields.cardNumber=t.replace(/(\d{6})/,"$1 ").replace(/(\d{6}) (\d{7})/,"$1 $2 ").replace(/(\d{6}) (\d{7}) (\d{6})/,"$1 $2 $3 ").replace(/(\d{5}) (\d{5}) (\d{5}) (\d{4})/,"$1 $2 $3 $4"),this.cardNumberMaxLength=21):/^\d{0,16}$/.test(t)&&(this.valueFields.cardNumber=t.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{4})/,"$1 $2 ").replace(/(\d{4}) (\d{4}) (\d{4})/,"$1 $2 $3 "),this.cardNumberMaxLength=19),"deleteContentBackward"==e.inputType)&&(" "==this.valueFields.cardNumber.substring(this.valueFields.cardNumber.length,this.valueFields.cardNumber.length-1)&&(this.valueFields.cardNumber=this.valueFields.cardNumber.substring(0,this.valueFields.cardNumber.length-1)));this.$emit("input-card-number",this.valueFields.cardNumber)},changeMonth:function(){this.$emit("input-card-month",this.valueFields.cardMonth)},changeYear:function(){this.$emit("input-card-year",this.valueFields.cardYear)},changeCvv:function(e){this.valueFields.cardCvv=e.target.value,this.$emit("input-card-cvv",this.valueFields.cardCvv)},generateMonthValue:function(e){return e<10?"0".concat(e):e},toggleMask:function(){this.isCardNumberMasked=!this.isCardNumberMasked,this.isCardNumberMasked?this.maskCardNumber():this.unMaskCardNumber()},maskCardNumber:function(){this.valueFields.cardNumberNotMask=this.valueFields.cardNumber,this.mainCardNumber=this.valueFields.cardNumber;var e=this.valueFields.cardNumber.split("");e.forEach((function(element,t){t>4&&t<14&&""!==element.trim()&&(e[t]="*")})),this.valueFields.cardNumber=e.join("")},unMaskCardNumber:function(){this.valueFields.cardNumber=this.mainCardNumber},carregaCarrinho:function(){var e=localStorage.getItem("ingressosC")||[];if(0===e.length)return this.$router.push("/");var t=0,r=0,o=JSON.parse(e);o.forEach((function(e){t++,r+=parseFloat(e.valor)})),this.valorTotal=r,this.totalIngressos=t,this.ingressos=o}}}),c=n,d=(r(536),r(55)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("script",{attrs:{src:"//code.jivosite.com/widget/MA6Bi7BCGR"}}),e._v(" "),o("menu-topo"),e._v(" "),o("div",{staticClass:"container mt-md-5"},[o("b-row",{staticClass:"mt-4"},[o("b-col",{attrs:{cols:"12",md:"6"}},[o("div",[o("vue-paycard",{attrs:{inputFields:e.inputFields,labels:e.labelsFields,isCardNumberMasked:!1,valueFields:e.valueFields}})],1),e._v(" "),o("div",{directives:[{name:"b-modal",rawName:"v-b-modal.pix",modifiers:{pix:!0}}],staticClass:"card-pay text-center mt-4"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("img",{attrs:{src:r(516),height:"25",alt:""}})]),e._v(" "),o("p",{staticClass:"ml-3 text-light",staticStyle:{"font-size":"15px !important"}},[e._v("Mudar para PIX")])])]),e._v(" "),o("div",{staticClass:"d-flex justify-content-center"},[o("div",[o("div",{staticClass:"bloc-info mt-md-4 mt-3 mb-3"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("img",{attrs:{height:"37",src:r(503),alt:""}})]),e._v(" "),o("p",{staticClass:"ml-2 text-info-bloc"},[e._v("\n                  ssos serão enviados automaticamente no WhatsApp e\n                  e-mail após a confirmação do pagamento\n                ")])])])])]),e._v(" "),o("div",{staticClass:"mb-2"},[o("div",{staticClass:"btn-ver-ing"},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"m-1 d-flex justify-content-between p-2"},[o("div",[e._v("Meus Ingressos - "),o("b",[e._v(e._s(e._f("currency")(e.valorTotal)))])]),e._v(" "),o("div",[o("img",{attrs:{width:"20",src:r(517),alt:""}})])]),e._v(" "),o("b-collapse",{attrs:{id:"collapse-2"}},e._l(e.ingressos,(function(t){return o("div",[o("hr",{staticClass:"mt-0 mb-0"}),e._v(" "),o("div",{staticClass:"p-2"},[o("p",[e._v("    "+e._s(t.nomeIng)+" - "+e._s(t.nomeLote)+":")]),e._v(" "),o("p",[e._v("Nome: "),o("b",[e._v(e._s(t.nome))])]),e._v(" "),o("p",[e._v("Valor: "+e._s(e._f("currency")(t.valor)))]),e._v(" "),o("p",[e._v("CPF: "+e._s(t.cpf))])]),e._v(" "),o("hr",{staticClass:"mt-0 mb-0"})])})),0)],1)])]),e._v(" "),o("b-col",[o("div",{staticClass:"d-flex cursor-pointer",on:{click:function(t){return e.$router.go(-1)}}},[o("img",{attrs:{src:r(518),height:"25px",alt:""}}),e._v(" "),o("p",{staticClass:"ml-2 mb-3"},[e._v("Voltar")])]),e._v(" "),o("div",{staticClass:"bg-resumo d-none d-md-block"},[o("b-row",[o("b-col",[o("p",[e._v("Valor da compra: "+e._s(e._f("currency")(e.valorTotal)))]),e._v(" "),o("p",[e._v("Quantidade de ingressos: "+e._s(e.totalIngressos))])])],1)],1),e._v(" "),o("div",[o("form",{staticClass:"mb-5",attrs:{id:"form-checkout"}},[o("div",{staticClass:"card-info-credit"},[o("div",{staticClass:"bg-insira p-3"},[o("p",{staticStyle:{"font-size":"15px !important"}},[e._v("\n                Insira os dados do cartão\n              ")])]),e._v(" "),o("div",{staticClass:"p-3"},[o("b-row",[o("b-col",{attrs:{md:"12",cols:"12"}},[o("div",{staticClass:"label-estilo"},[e._v("Número do cartão")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"cardNumber",maxlength:e.cardNumberMaxLength,"data-card-field":"",id:e.inputFields.cardNumber},on:{input:e.changeNumber}})])],1),e._v(" "),o("b-row",{staticClass:"mt-2"},[o("b-col",{staticClass:"pr-0"},[o("div",{staticClass:"label-estilo"},[e._v("Vencimento")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"cardExpirationDate",maxlength:"7",id:"form-checkout__cardExpirationDate"}})]),e._v(" "),o("b-col",[o("div",{staticClass:"label-estilo"},[e._v("Código de segurança")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{"data-card-field":"",maxlength:"4",id:"form-checkout__securityCode",id:e.inputFields.cardCvv,type:"text",name:"securityCode"},on:{input:e.changeCvv}})])],1),e._v(" "),o("b-row",{staticClass:"mt-2"},[o("b-col",{staticClass:"pr-md-0",attrs:{md:"6",cols:"12"}},[o("div",{staticClass:"label-estilo"},[e._v("Nome do titular")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"cardholderName",id:e.inputFields.cardName,"data-card-field":""},on:{input:e.changeName}})]),e._v(" "),o("b-col",{staticClass:"mt-2 mt-md-0"},[o("div",{staticClass:"label-estilo"},[e._v("E-mail")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"email",name:"cardholderEmail",id:"form-checkout__cardholderEmail"}})])],1),e._v(" "),o("select",{attrs:{hidden:"",name:"issuer",id:"form-checkout__issuer"}}),e._v(" "),o("select",{attrs:{hidden:"",name:"identificationType",id:"form-checkout__identificationType"}}),e._v(" "),o("b-row",{staticClass:"mt-2"},[o("b-col",{staticClass:"pr-md-0",attrs:{md:"6",cols:"12"}},[o("div",{staticClass:"label-estilo"},[e._v("CPF")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"identificationNumber",id:"form-checkout__identificationNumber"}})]),e._v(" "),o("b-col",{staticClass:"mt-2 mt-md-0"},[o("div",{staticClass:"label-estilo"},[e._v("Pagamento")]),e._v(" "),o("select",{staticClass:"form-control",attrs:{name:"installments",id:"form-checkout__installments"}})])],1),e._v(" "),o("button",{staticClass:"form-control btn-compra mt-2",attrs:{type:"submit",id:"form-checkout__submit"}},[e._v("\n                  Efetuar Pagamento\n                ")])],1),e._v(" "),e.mostraico?o("div",{staticStyle:{"text-align":"left","margin-top":"10px",display:"inline-flex"}},[o("img",{attrs:{src:r(535),width:"30px",alt:""}}),e._v(" "),o("div",{staticClass:"ml-2",staticStyle:{"font-size":"15px","margin-top":"3px","font-family":"Montserrat, sans-serif","font-weight":"500"}},[e._v("Efetuando pagamento...")])]):e._e()])])])])],1)],1),e._v(" "),o("b-modal",{ref:"pix",attrs:{id:"pix",centered:"",title:"Finalizar compra","hide-footer":""}},[o("div",{staticClass:"py-1"},[o("div",[o("div",{staticClass:"bloc-info"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("img",{attrs:{height:"37",src:r(503),alt:""}})]),e._v(" "),o("p",{staticClass:"ml-2 text-info-bloc"},[e._v("\n              Digite seu e-mail para continuar\n            ")])])]),e._v(" "),o("div",[o("p",{staticClass:"mt-3 small"},[e._v("E-mail")]),e._v(" "),o("b-input",{staticClass:"input-form form-control estilo-input",attrs:{placeholder:"Digite seu e-mail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"mt-2"},[o("b-row",[o("b-col",{attrs:{md:"12",cols:"12"}},[o("b-button",{staticClass:"text-center",attrs:{variant:"success",block:""},on:{click:function(t){return e.escolhePay("pix")}}},[o("div",[o("p",{staticClass:"small"},[e._v("Finalizar Compra")])])])],1)],1)],1)])])],1)}),[],!1,null,"f9076fd0",null);t.default=component.exports}}]);