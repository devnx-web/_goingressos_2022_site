(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{502:function(t,e,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("3f6f456e",content,!0,{sourceMap:!1})},503:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjYwcHgiPiAgICA8cGF0aCBkPSJNMTUsM0M4LjM3MywzLDMsOC4zNzMsMywxNWMwLDYuNjI3LDUuMzczLDEyLDEyLDEyczEyLTUuMzczLDEyLTEyQzI3LDguMzczLDIxLjYyNywzLDE1LDN6IE0xNiwyMWgtMnYtN2gyVjIxeiBNMTUsMTEuNSBjLTAuODI4LDAtMS41LTAuNjcyLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVzMS41LDAuNjcyLDEuNSwxLjVTMTUuODI4LDExLjUsMTUsMTEuNXoiLz48L3N2Zz4="},504:function(t,e,n){"use strict";n(502)},505:function(t,e,n){var o=n(60)(!1);o.push([t.i,".bg-menu[data-v-c6da3814]{height:64px;background-color:#000;color:#fff}",""]),t.exports=o},506:function(t,e,n){"use strict";n.r(e);var o=n(33),r=(n(37),n(79),{name:"menuTopo",data:function(){return{codigoEnviado:!1,whatsapp:"",idGo:"",codigo:"",resultado:"",evento:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.evento=JSON.parse(localStorage.getItem("evento")),n=JSON.parse(localStorage.getItem("id_go"))){e.next=6;break}return n="GO-"+Math.floor(9123030*Math.random()+4564564657879),e.next=6,localStorage.setItem("id_go",JSON.stringify(n));case 6:t.idGo=n,io("https://ws.devnx.com.br/").on(n,function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.resultado=n.status,t.resultado&&(t.$alert("Seu pagamento foi confirmado e seus ingressos se encontram disponiveis para download, também foram enviados no e-mail cadastrado e WhatsApp de cada ingresso","Pagamento Confirmado","success"),t.mudaPage());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("evento/".concat(t.$route.params.evento));case 2:n=e.sent,data=n.data,t.evento=data;case 5:case"end":return e.stop()}}),e)})))()},methods:{mudaPage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.$router.push("/".concat(t.$route.params.evento,"/meus-ingressos"))}),2e3);case 1:case"end":return e.stop()}}),e)})))()},enviaVerifica:function(t){t&&alert("verificando..."),this.codigoEnviado=!0}}}),c=r,d=(n(504),n(55)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("div",{staticStyle:{position:"fixed",bottom:"20px",right:"20px","z-index":"9999"}},[o("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=554187550164&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20surreal%20e%20tenho%20algumas%20d%C3%BAvidas%20meu%20id%20%C3%A9%20"+t.idGo}},[o("img",{staticStyle:{width:"70px"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",alt:""}})])])]),t._v(" "),o("script",[t._v("\n    (function(h,o,t,j,a,r){\n      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n      h._hjSettings={hjid:1954685,hjsv:6};\n      a=o.getElementsByTagName('head')[0];\n      r=o.createElement('script');r.async=1;\n      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n      a.appendChild(r);\n    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n  ")]),t._v(" "),o("nav",{staticClass:"bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2"},[o("b-row",[o("b-col",{attrs:{cols:"3",md:"2","align-self":"center"}},[o("div",[o("nuxt-link",{attrs:{to:"/"+t.$route.params.evento}},[t.evento?o("img",{attrs:{height:"50",src:"https://arquivos.devnx.com.br/goingressos/uploads/"+t.evento.logo,alt:""}}):t._e()])],1)]),t._v(" "),o("b-col",{staticClass:"text-center",attrs:{cols:"9",md:"8","align-self":"center"}},[o("b-button",{staticClass:"btn-padrao px-4",on:{click:function(e){return t.$router.push("/"+t.$route.params.evento+"/meus-ingressos")}}},[t._v("Meus Ingressos\n        ")])],1),t._v(" "),o("b-col",{staticClass:"d-none d-md-block",attrs:{md:"2","align-self":"center"}},[o("div",{staticClass:"ml-3"},[o("img",{attrs:{height:"35",src:"https://uni.goingressos.com.br/_nuxt/img/Go.f34a656.png",alt:""}})])])],1)],1),t._v(" "),o("b-modal",{attrs:{id:"conta",centered:"",title:"Entre em sua conta","hide-footer":""}},[o("div",{staticClass:"py-1"},[o("div",[t.codigoEnviado?t._e():o("div",{staticClass:"bloc-info"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("img",{attrs:{height:"37",src:n(503),alt:""}})]),t._v(" "),o("p",{staticClass:"ml-2 text-info-bloc"},[t._v("\n              Para ver os ingressos comprados insira o seu WhatsApp\n            ")])])]),t._v(" "),t.codigoEnviado?o("div",{staticClass:"mt-2"},[o("p",{staticClass:"font-weight-light small"},[t._v("\n            Código enviado para (41) 99777-8887\n          ")])]):o("div",[o("p",{staticClass:"mt-3"},[t._v("WhatsApp")]),t._v(" "),o("the-mask",{staticClass:"input-form form-control",attrs:{placeholder:"Ex: (99) 99999-9999",mask:["(##) ####-####","(##) #####-####"]},model:{value:t.whatsapp,callback:function(e){t.whatsapp=e},expression:"whatsapp"}})],1)]),t._v(" "),o("div",[t.codigoEnviado?o("b-input",{staticClass:"mt-2 input-form",attrs:{placeholder:"Digite o código"}}):t._e()],1),t._v(" "),o("div",{staticClass:"mt-2"},[t.codigoEnviado?o("b-button",{attrs:{block:"",variant:"success"},on:{click:function(e){return t.enviaVerifica(t.whatsapp)}}},[t._v("Validar Código")]):o("b-button",{attrs:{block:"",variant:"info"},on:{click:function(e){return t.enviaVerifica()}}},[t._v("Enviar Código")]),t._v(" "),t.codigoEnviado?o("p",{staticClass:"mt-2 cursor-pointer",on:{click:function(e){t.codigoEnviado=!1}}},[t._v("\n          Reenviar Código\n        ")]):t._e()],1)])])],1)}),[],!1,null,"c6da3814",null);e.default=component.exports},520:function(t,e,n){t.exports=n.p+"img/ingressoicone.78c225c.png"},521:function(t,e,n){var content=n(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("1db0cd7d",content,!0,{sourceMap:!1})},530:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzIDhWMkg3djZIMmw4IDggOC04aC01ek0wIDE4aDIwdjJIMHYtMnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PC9wYXRoPjwvc3ZnPg=="},531:function(t,e,n){"use strict";n(521)},532:function(t,e,n){var o=n(60)(!1);o.push([t.i,'.bar-status[data-v-49e5f9ea]{font-weight:500;padding-top:4px;padding-bottom:4px;font-size:12px}.btn-selected[data-v-49e5f9ea]{padding:10px;border-radius:10px 0 0 10px;color:#fff}.bg-ico[data-v-49e5f9ea],.btn-selected[data-v-49e5f9ea]{background-color:#020024}.bg-ico[data-v-49e5f9ea]{height:50px;padding:5px;border-radius:50px}.card-ingresso[data-v-49e5f9ea]{border-radius:15px;border:1px solid rgba(0,90,140,.48);padding:20px}.card-conta[data-v-49e5f9ea]{background-color:#f1f1f1}.mini-label[data-v-49e5f9ea]{font-size:11px;color:#000;font-weight:500;font-family:"Poppins",sans-serif}',""]),t.exports=o},544:function(t,e,n){"use strict";n.r(e);var o=n(33),r=(n(79),{name:"meusIngressos",components:{MenuTopo:n(506).default},data:function(){return{mostratt:!1,carregaIng:!1,carrega:!0,ingressos:[]}},beforeMount:function(){this.buscaIngressos()},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.removeItem("cupom"),n=JSON.parse(localStorage.getItem("id_go"))){e.next=6;break}return n="GO-"+Math.floor(9123030*Math.random()+4564564657879),e.next=6,localStorage.setItem("id_go",JSON.stringify(n));case 6:o=io("https://ws.devnx.com.br/"),console.log(n),o.on(n,(function(e){t.resultado=e.status,t.resultado&&t.buscaIngressos()}));case 9:case"end":return e.stop()}}),e)})))()},methods:{buscaIngressos:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.carregaIng=!0,n=JSON.parse(localStorage.getItem("id_go")),e.next=4,t.$axios.get("ingressos/".concat(n));case 4:o=e.sent,data=o.data,t.ingressos=data,t.carregaIng=!1,t.carrega=!1,t.mostratt=!0;case 10:case"end":return e.stop()}}),e)})))()}}}),c=(n(531),n(55)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("menu-topo"),t._v(" "),o("div",{staticClass:"mt-md-5 mt-3"},[o("b-container",[o("div",{staticClass:"card-conta p-md-3"},[o("b-row",[o("b-col",{staticClass:"pr-md-0 border-right",attrs:{md:"3"}},[o("div",{staticClass:"btn-selected rounded-0 rounded-md-left"},[o("p",[t._v("Meus Ingressos")])])]),t._v(" "),o("b-col",{staticClass:"pl-md-0 mt-3 mt-md-0"},[o("div",{staticClass:"px-3"},[o("div",{staticClass:"bloc-info"},[o("div",{staticClass:"d-md-flex align-items-center"},[o("div",[o("img",{attrs:{height:"37",src:n(503),alt:""}})]),t._v(" "),o("p",{staticClass:"ml-2 text-info-bloc"},[t._v("\n                    Os ingressos serão enviados automaticamente no WhatsApp e\n                    e-mail após a confirmação do pagamento, se o pagamento\n                    estiver como recusado, realize uma nova compra, use outro\n                    cartão ou então pague via PIX\n                  ")])])]),t._v(" "),o("b-button",{staticClass:"btn-padrao text-dark mt-2 px-4 mb-2",on:{click:function(e){return t.buscaIngressos()}}},[t._v("\n                Atualizar Ingressos\n              ")]),t._v(" "),t.carregaIng?o("p",[t._v("Atualizando...")]):t._e(),t._v(" "),t.mostratt&&!t.carregaIng?o("p",[t._v("Ingressos Atualizados")]):t._e()],1),t._v(" "),t.carrega?o("div",{staticClass:"text-center mt-3 mb-2"},[o("div",{staticClass:"border py-3"},[o("p",[t._v("Carregando compras")]),t._v(" "),o("img",{staticClass:"mt-3",attrs:{src:n(520),alt:""}})])]):t._e(),t._v(" "),0!==t.ingressos.length||t.carrega?t._e():o("div",{staticClass:"text-center mb-3 mb-2"},[o("div",{staticClass:"border py-3"},[o("p",[t._v("Você não possui nenhuma compra!")]),t._v(" "),o("img",{staticClass:"mt-3",attrs:{src:n(520),alt:""}})])]),t._v(" "),o("div",{staticClass:"p-3"},t._l(t.ingressos,(function(e,r){return o("div",{key:r,staticClass:"border p-3 mb-3"},[o("div",[o("b-row",[o("b-col",{attrs:{"align-self":"center"}},[o("p",[t._v("Valor: R$ "+t._s(e.valor))]),t._v(" "),o("p",{staticClass:"small"},[t._v("\n                        Método de pagamento:\n                        "+t._s("credit-card"===e.mtdPg?"Cartão de crédito":"PIX")+"\n                      ")])]),t._v(" "),o("b-col",[o("p",{staticClass:"small"},[t._v("Status:")]),t._v(" "),0===e.pg?o("b-badge",{staticClass:"px-3 bar-status"},[t._v("\n                        Pagamento pendente\n                      ")]):t._e(),t._v(" "),1===e.pg?o("b-badge",{staticClass:"px-3 bar-status",attrs:{variant:"success"}},[t._v("\n                        Pagamento aprovado\n                      ")]):t._e(),t._v(" "),2===e.pg?o("b-badge",{staticClass:"px-3 bar-status",attrs:{variant:"info"}},[t._v("\n                        Pagamento em processamento\n                      ")]):t._e(),t._v(" "),3===e.pg?o("b-badge",{staticClass:"px-3 bar-status",attrs:{variant:"danger"}},[t._v("\n                        Pagamento Recusado\n                      ")]):t._e()],1),t._v(" "),e.pg?o("b-col",{staticClass:"text-right align-self-centeri",attrs:{hidden:"",cols:"8",md:"6"}},[o("b-button",{staticClass:"px-3",attrs:{variant:"success"}},[t._v("Reenviar Ingressos")])],1):t._e()],1),t._v(" "),o("div",{staticClass:"card-ingresso mt-2"},[o("b-row",[o("b-col",{staticClass:"border-right",attrs:{"align-self":"center"}},[o("p",[t._v(t._s(e.nome))]),t._v(" "),o("p",{staticClass:"small"},[t._v("\n                          Ingresso "+t._s(e.tipo)+" - "+t._s(e.lote)+"\n                        ")])]),t._v(" "),o("b-col",{attrs:{"align-self":"center",md:"4"}},[o("p",{staticClass:"mini-label mt-2 mt-md-0"},[t._v("WhatsApp")]),t._v(" "),o("p",[t._v(t._s(t._f("VMask")(e.telefone,"(##) #########")))])]),t._v(" "),e.img||1!==e.pg?o("b-col",{attrs:{md:"1"}},[e.img?o("b-button",{staticClass:"\n                            bg-ico\n                            d-flex\n                            justify-content-center\n                            align-items-center\n                            mt-2 mt-md-0\n                            cursor-pointer\n                          ",attrs:{block:"",href:"https://arquivos.devnx.com.br/goingressos/uploads/"+e.img,target:"_blank"}},[o("img",{attrs:{height:"17",src:n(530),alt:""}})]):t._e()],1):o("b-col",{attrs:{md:"3","align-self":"center"}},[o("div",{staticClass:"mt-2 mt-md-0"},[o("p",{staticClass:"small"},[t._v("\n                            Gerando ingresso, volte em alguns minutos\n                          ")])])])],1)],1),t._v(" "),o("div",{staticClass:"d-flex justify-content-between"},[o("p",{staticClass:"small mt-2"},[t._v("\n                      CPF: "+t._s(t._f("VMask")(e.documento,"###.###.###.##"))+"\n                    ")]),t._v(" "),o("p",{staticClass:"small mt-2"},[t._v("\n                      Última alteração:\n                      "+t._s(t._f("moment")(e.updated_at,"DD/MM - H:mm"))+"\n                    ")])])],1)])})),0)])],1)],1)])],1)],1)}),[],!1,null,"49e5f9ea",null);e.default=component.exports}}]);