(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{502:function(t,e,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("5e3c04e9",content,!0,{sourceMap:!1})},503:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjYwcHgiPiAgICA8cGF0aCBkPSJNMTUsM0M4LjM3MywzLDMsOC4zNzMsMywxNWMwLDYuNjI3LDUuMzczLDEyLDEyLDEyczEyLTUuMzczLDEyLTEyQzI3LDguMzczLDIxLjYyNywzLDE1LDN6IE0xNiwyMWgtMnYtN2gyVjIxeiBNMTUsMTEuNSBjLTAuODI4LDAtMS41LTAuNjcyLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVzMS41LDAuNjcyLDEuNSwxLjVTMTUuODI4LDExLjUsMTUsMTEuNXoiLz48L3N2Zz4="},504:function(t,e,n){"use strict";n(502)},505:function(t,e,n){var o=n(60)(!1);o.push([t.i,".bg-menu[data-v-5af18526]{height:64px;background-color:#000;color:#fff}",""]),t.exports=o},506:function(t,e,n){"use strict";n.r(e);var o=n(33),r=(n(37),n(79),{name:"menuTopo",data:function(){return{codigoEnviado:!1,whatsapp:"",idGo:"",codigo:"",resultado:"",evento:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.evento=JSON.parse(localStorage.getItem("evento")),n=JSON.parse(localStorage.getItem("id_go"))){e.next=6;break}return n="GO-"+Math.floor(9123030*Math.random()+4564564657879),e.next=6,localStorage.setItem("id_go",JSON.stringify(n));case 6:t.idGo=n,io("https://ws.devnx.com.br/").on(n,function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.resultado=n.status,t.resultado&&(t.$alert("Seu pagamento foi confirmado e seus ingressos se encontram disponiveis para download, também foram enviados no e-mail cadastrado e WhatsApp de cada ingresso","Pagamento Confirmado","success"),t.mudaPage());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("evento/".concat(t.$route.params.evento));case 2:n=e.sent,data=n.data,t.evento=data;case 5:case"end":return e.stop()}}),e)})))()},methods:{mudaPage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.$router.push("/".concat(t.$route.params.evento,"/meus-ingressos"))}),2e3);case 1:case"end":return e.stop()}}),e)})))()},enviaVerifica:function(t){t&&alert("verificando..."),this.codigoEnviado=!0}}}),c=r,d=(n(504),n(55)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("script",[t._v("\n      (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1954685,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n    ")]),t._v(" "),o("nav",{staticClass:"bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2"},[o("b-row",[o("b-col",{attrs:{cols:"3",md:"2","align-self":"center"}},[o("div",[o("nuxt-link",{attrs:{to:"/"+t.$route.params.evento}},[t.evento?o("img",{staticClass:"p-1",attrs:{height:"50",src:t.evento.logo?"https://arquivos.devnx.com.br/goingressos/uploads/"+t.evento.logo:"https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logob.png",alt:""}}):t._e()])],1)]),t._v(" "),o("b-col",{staticClass:"text-center",attrs:{cols:"9",md:"8","align-self":"center"}},[o("b-button",{staticClass:"btn-padrao px-4",on:{click:function(e){return t.$router.push("/"+t.$route.params.evento+"/meus-ingressos")}}},[t._v("Meus Ingressos\n          ")])],1),t._v(" "),o("b-col",{staticClass:"d-none d-md-block",attrs:{md:"2","align-self":"center"}},[o("div",{staticClass:"ml-3"},[o("img",{attrs:{height:"45",src:"https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logo-deitadab2.png",alt:""}})])])],1)],1),t._v(" "),o("b-modal",{attrs:{id:"conta",centered:"",title:"Entre em sua conta","hide-footer":""}},[o("div",{staticClass:"py-1"},[o("div",[t.codigoEnviado?t._e():o("div",{staticClass:"bloc-info"},[o("div",{staticClass:"d-flex align-items-center"},[o("div",[o("img",{attrs:{height:"37",src:n(503),alt:""}})]),t._v(" "),o("p",{staticClass:"ml-2 text-info-bloc"},[t._v("\n                Para ver os ingressos comprados insira o seu WhatsApp\n              ")])])]),t._v(" "),t.codigoEnviado?o("div",{staticClass:"mt-2"},[o("p",{staticClass:"font-weight-light small"},[t._v("\n              Código enviado para (41) 99777-8887\n            ")])]):o("div",[o("p",{staticClass:"mt-3"},[t._v("WhatsApp")]),t._v(" "),o("the-mask",{staticClass:"input-form form-control",attrs:{placeholder:"Ex: (99) 99999-9999",mask:["(##) ####-####","(##) #####-####"]},model:{value:t.whatsapp,callback:function(e){t.whatsapp=e},expression:"whatsapp"}})],1)]),t._v(" "),o("div",[t.codigoEnviado?o("b-input",{staticClass:"mt-2 input-form",attrs:{placeholder:"Digite o código"}}):t._e()],1),t._v(" "),o("div",{staticClass:"mt-2"},[t.codigoEnviado?o("b-button",{attrs:{block:"",variant:"success"},on:{click:function(e){return t.enviaVerifica(t.whatsapp)}}},[t._v("Validar Código")]):o("b-button",{attrs:{block:"",variant:"info"},on:{click:function(e){return t.enviaVerifica()}}},[t._v("Enviar Código")]),t._v(" "),t.codigoEnviado?o("p",{staticClass:"mt-2 cursor-pointer",on:{click:function(e){t.codigoEnviado=!1}}},[t._v("\n            Reenviar Código\n          ")]):t._e()],1)])])],1)}),[],!1,null,"5af18526",null);e.default=component.exports}}]);