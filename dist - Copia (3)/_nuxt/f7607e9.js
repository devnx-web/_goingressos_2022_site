(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{502:function(t,e,o){var content=o(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("5e3c04e9",content,!0,{sourceMap:!1})},503:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjYwcHgiPiAgICA8cGF0aCBkPSJNMTUsM0M4LjM3MywzLDMsOC4zNzMsMywxNWMwLDYuNjI3LDUuMzczLDEyLDEyLDEyczEyLTUuMzczLDEyLTEyQzI3LDguMzczLDIxLjYyNywzLDE1LDN6IE0xNiwyMWgtMnYtN2gyVjIxeiBNMTUsMTEuNSBjLTAuODI4LDAtMS41LTAuNjcyLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVzMS41LDAuNjcyLDEuNSwxLjVTMTUuODI4LDExLjUsMTUsMTEuNXoiLz48L3N2Zz4="},504:function(t,e,o){"use strict";o(502)},505:function(t,e,o){var n=o(60)(!1);n.push([t.i,".bg-menu[data-v-5af18526]{height:64px;background-color:#000;color:#fff}",""]),t.exports=n},506:function(t,e,o){"use strict";o.r(e);var n=o(33),r=(o(37),o(79),{name:"menuTopo",data:function(){return{codigoEnviado:!1,whatsapp:"",idGo:"",codigo:"",resultado:"",evento:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.evento=JSON.parse(localStorage.getItem("evento")),o=JSON.parse(localStorage.getItem("id_go"))){e.next=6;break}return o="GO-"+Math.floor(9123030*Math.random()+4564564657879),e.next=6,localStorage.setItem("id_go",JSON.stringify(o));case 6:t.idGo=o,io("https://ws.devnx.com.br/").on(o,function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.resultado=o.status,t.resultado&&(t.$alert("Seu pagamento foi confirmado e seus ingressos se encontram disponiveis para download, também foram enviados no e-mail cadastrado e WhatsApp de cada ingresso","Pagamento Confirmado","success"),t.mudaPage());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("evento/".concat(t.$route.params.evento));case 2:o=e.sent,data=o.data,t.evento=data;case 5:case"end":return e.stop()}}),e)})))()},methods:{mudaPage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.$router.push("/".concat(t.$route.params.evento,"/meus-ingressos"))}),2e3);case 1:case"end":return e.stop()}}),e)})))()},enviaVerifica:function(t){t&&alert("verificando..."),this.codigoEnviado=!0}}}),c=r,l=(o(504),o(55)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("script",[t._v("\n      (function(h,o,t,j,a,r){\n        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n        h._hjSettings={hjid:1954685,hjsv:6};\n        a=o.getElementsByTagName('head')[0];\n        r=o.createElement('script');r.async=1;\n        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n        a.appendChild(r);\n      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n    ")]),t._v(" "),n("nav",{staticClass:"bg-menu navbar-expand-lg px-md-5 px-3 py-2 py-md-2"},[n("b-row",[n("b-col",{attrs:{cols:"3",md:"2","align-self":"center"}},[n("div",[n("nuxt-link",{attrs:{to:"/"+t.$route.params.evento}},[t.evento?n("img",{staticClass:"p-1",attrs:{height:"50",src:t.evento.logo?"https://arquivos.devnx.com.br/goingressos/uploads/"+t.evento.logo:"https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logob.png",alt:""}}):t._e()])],1)]),t._v(" "),n("b-col",{staticClass:"text-center",attrs:{cols:"9",md:"8","align-self":"center"}},[n("b-button",{staticClass:"btn-padrao px-4",on:{click:function(e){return t.$router.push("/"+t.$route.params.evento+"/meus-ingressos")}}},[t._v("Meus Ingressos\n          ")])],1),t._v(" "),n("b-col",{staticClass:"d-none d-md-block",attrs:{md:"2","align-self":"center"}},[n("div",{staticClass:"ml-3"},[n("img",{attrs:{height:"45",src:"https://arquivos.devnx.com.br/goingressos/uploads/go-ingressos-logo-deitadab2.png",alt:""}})])])],1)],1),t._v(" "),n("b-modal",{attrs:{id:"conta",centered:"",title:"Entre em sua conta","hide-footer":""}},[n("div",{staticClass:"py-1"},[n("div",[t.codigoEnviado?t._e():n("div",{staticClass:"bloc-info"},[n("div",{staticClass:"d-flex align-items-center"},[n("div",[n("img",{attrs:{height:"37",src:o(503),alt:""}})]),t._v(" "),n("p",{staticClass:"ml-2 text-info-bloc"},[t._v("\n                Para ver os ingressos comprados insira o seu WhatsApp\n              ")])])]),t._v(" "),t.codigoEnviado?n("div",{staticClass:"mt-2"},[n("p",{staticClass:"font-weight-light small"},[t._v("\n              Código enviado para (41) 99777-8887\n            ")])]):n("div",[n("p",{staticClass:"mt-3"},[t._v("WhatsApp")]),t._v(" "),n("the-mask",{staticClass:"input-form form-control",attrs:{placeholder:"Ex: (99) 99999-9999",mask:["(##) ####-####","(##) #####-####"]},model:{value:t.whatsapp,callback:function(e){t.whatsapp=e},expression:"whatsapp"}})],1)]),t._v(" "),n("div",[t.codigoEnviado?n("b-input",{staticClass:"mt-2 input-form",attrs:{placeholder:"Digite o código"}}):t._e()],1),t._v(" "),n("div",{staticClass:"mt-2"},[t.codigoEnviado?n("b-button",{attrs:{block:"",variant:"success"},on:{click:function(e){return t.enviaVerifica(t.whatsapp)}}},[t._v("Validar Código")]):n("b-button",{attrs:{block:"",variant:"info"},on:{click:function(e){return t.enviaVerifica()}}},[t._v("Enviar Código")]),t._v(" "),t.codigoEnviado?n("p",{staticClass:"mt-2 cursor-pointer",on:{click:function(e){t.codigoEnviado=!1}}},[t._v("\n            Reenviar Código\n          ")]):t._e()],1)])])],1)}),[],!1,null,"5af18526",null);e.default=component.exports},507:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxpdmVsbG8gMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY0IDBhNjQgNjQgMCAxIDAgNjQgNjRBNjQuMDcgNjQuMDcgMCAwIDAgNjQgMFptMCAxMjJhNTggNTggMCAxIDEgNTgtNTggNTguMDcgNTguMDcgMCAwIDEtNTggNThaIiBmaWxsPSIjMTkzZjkzIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNOTAgNjFIMzhhMyAzIDAgMCAwIDAgNmg1MmEzIDMgMCAwIDAgMC02WiIgZmlsbD0iIzE5M2Y5MyIgY2xhc3M9ImZpbGwtMDAwMDAwIj48L3BhdGg+PC9zdmc+"},511:function(t,e,o){t.exports=o.p+"img/whatsapp.6c3c5b4.png"},519:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxpdmVsbG8gMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY0IDBhNjQgNjQgMCAxIDAgNjQgNjRBNjQuMDcgNjQuMDcgMCAwIDAgNjQgMFptMCAxMjJhNTggNTggMCAxIDEgNTgtNTggNTguMDcgNTguMDcgMCAwIDEtNTggNThaIiBmaWxsPSIjMTkzZjkzIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48cGF0aCBkPSJNOTAgNjFINjdWMzhhMyAzIDAgMCAwLTYgMHYyM0gzOGEzIDMgMCAwIDAgMCA2aDIzdjIzYTMgMyAwIDAgMCA2IDBWNjdoMjNhMyAzIDAgMCAwIDAtNloiIGZpbGw9IiMxOTNmOTMiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PC9wYXRoPjwvc3ZnPg=="},520:function(t,e,o){var content=o(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("d5cea344",content,!0,{sourceMap:!1})},528:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNCA0aC0xM3YxOGgyMHYtMTFoMXYxMmgtMjJ2LTIwaDE0djF6bTEwIDVoLTF2LTYuMjkzbC0xMS42NDYgMTEuNjQ3LS43MDgtLjcwOCAxMS42NDctMTEuNjQ2aC02LjI5M3YtMWg4djh6Ii8+PC9zdmc+"},529:function(t,e,o){"use strict";o(520)},530:function(t,e,o){var n=o(60)(!1);n.push([t.i,'.txt-tutorial{font-size:14px;font-weight:400}.bloc-bg{text-align:center;border-radius:100px;color:#fff;height:40px;width:40px;background-color:#000}.bloc-bg,.card-info{font-family:"Poppins",sans-serif}.card-info{border-radius:5px;border:1px solid #d9d9d9;padding:10px}.text-total{font-size:13px;margin-top:5px}.text-value-total{font-weight:500;font-family:"Poppins",sans-serif;margin-bottom:5px}.card-ingresso-venda{border:1px solid #dcdcdc;border-radius:5px}.estilo-banner{height:350px;width:990px;position:absolute;top:64px;left:50%;transform:translateX(-50%);border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:0 4px 18px 5px rgba(0,0,0,.29);overflow:hidden}.bg-banner,.estilo-banner{-o-object-fit:cover;object-fit:cover;background-position:50%;background-size:cover}.bg-banner{height:270px;filter:blur(8px);-webkit-filter:blur(8px);transform:scale(1.2)}',""]),t.exports=n},545:function(t,e,o){"use strict";o.r(e);var n=o(33),r=(o(79),o(15),o(1),o(4),{name:"IndexPage",components:{MenuTopo:o(506).default},data:function(){return{valorTotal:0,evento:{id:"",nome:"",descricao:"",banner:"",endereco:"",classicicacao:"",data:""},cupom:"",titulo:"",ingressos:[],ingressosCompra:[]}},head:function(){return{title:"".concat(this.evento.nome)}},beforeMount:function(){this.carregaIngressos()},methods:{aplicaCupom:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("evento/".concat(t.$route.params.evento,"?cupom=").concat(t.cupom));case 2:o=e.sent,data=o.data,console.log(data),data.ingressos[0].valorOrigin!==data.ingressos[0].valor?(localStorage.setItem("cupom",t.cupom),t.$toast.success("Cupom aplicado com sucesso!")):t.$toast.error("Cupom inválido"),t.evento=data,t.ingressos=data.ingressos;case 8:case"end":return e.stop()}}),e)})))()},carregaIngressos:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("ingressos"),localStorage.removeItem("cupom"),localStorage.removeItem("ingressosC"),e.next=5,t.$axios.get("evento/".concat(t.$route.params.evento));case 5:if(o=e.sent,data=o.data,t.evento=data,t.ingressos=data.ingressos,!(n=localStorage.getItem("cupomUser")||null)){e.next=15;break}return t.cupom=n,localStorage.removeItem("cupomUser"),e.next=15,t.aplicaCupom();case 15:localStorage.setItem("evento",JSON.stringify(data));case 16:case"end":return e.stop()}}),e)})))()},compraIng:function(){0!==this.total?(this.$router.push("/".concat(this.$route.params.evento,"/carrinho")),this.$toast.info("Insira os dados dos ingressos")):this.$toast.error("Adicione ingressos para comprar!")},somaIngressos:function(){var t=0,e=[];this.ingressos.forEach((function(o){o.qtd>0&&e.push(o),t+=o.qtd*o.valor})),this.valorTotal=t,localStorage.setItem("ingressos",JSON.stringify(e))},dimiIng:function(t,e){t.qtd>0&&(this.ingressos[e].qtd--,this.somaIngressos())},addIng:function(t,e){this.ingressos[e].qtd++,this.somaIngressos()}}}),c=(o(529),o(55)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("script",{attrs:{src:"//code.jivosite.com/widget/MA6Bi7BCGR"}}),t._v(" "),n("menu-topo"),t._v(" "),n("div",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"d-none bg-banner d-md-block",style:"background-image: url('https://arquivos.devnx.com.br/goingressos/uploads/"+t.evento.banner+"')"})]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center"},[n("img",{staticClass:"estilo-banner d-none d-md-block",attrs:{src:"https://arquivos.devnx.com.br/goingressos/uploads/"+t.evento.banner,alt:t.evento.nome}})]),t._v(" "),n("div",{staticClass:"d-md-none"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://arquivos.devnx.com.br/goingressos/uploads/"+t.evento.banner,alt:""}})]),t._v(" "),n("b-container",[n("div",{staticClass:"mb-5 padding-banner mt-4 mt-md-0"},[n("div",[n("h1",[t._v(t._s(t.evento.nome))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.evento.descricao)}}),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"card-ingresso-venda d-md-none"},[n("div",{staticClass:"text-center bg-dark text-light py-1"},[n("p",[t._v("Adquira seu Ingresso")])]),t._v(" "),t._l(t.ingressos,(function(e,r){return n("div",{key:r},[n("hr",{staticClass:"mt-0 mb-0"}),t._v(" "),n("div",{staticClass:"p-3"},[n("div",[n("p",[t._v(t._s(e.nomeIng))]),t._v(" "),n("p",{staticClass:"small"},[t._v("\n                  "+t._s(e.nomeLote)+" - Valor: "+t._s(t._f("currency")(e.valor))+"\n                ")])]),t._v(" "),n("div",{staticClass:"d-flex mt-2"},[n("img",{staticClass:"cursor-pointer",attrs:{height:"25",src:o(507),alt:""},on:{click:function(o){return t.dimiIng(e,r)}}}),t._v(" "),n("p",{staticClass:"px-2",staticStyle:{"font-size":"22px !important","margin-top":"-4px"}},[t._v("\n                  "+t._s(e.qtd)+"\n                ")]),t._v(" "),n("img",{staticClass:"cursor-pointer",attrs:{height:"25",src:o(519),alt:""},on:{click:function(o){return t.addIng(e,r)}}})])])])})),t._v(" "),n("hr",{staticClass:"mt-0 mb-0"}),t._v(" "),n("div",{staticClass:"p-3"},[n("b-row",[n("b-col",{attrs:{md:"4","align-self":"center"}},[n("p",{staticStyle:{"font-size":"14px",color:"#25b3ff"}},[t._v("\n                  Possui um Cupom?\n                ")])]),t._v(" "),n("b-col",[n("b-input-group",[n("b-form-input",{staticClass:"input-form",staticStyle:{"font-size":"13px"},attrs:{placeholder:"Digite aqui..."},model:{value:t.cupom,callback:function(e){t.cupom=e},expression:"cupom"}}),t._v(" "),n("b-input-group-append",[n("b-button",{staticStyle:{"font-size":"13px"},attrs:{variant:"success"},on:{click:function(e){return t.aplicaCupom()}}},[t._v("Aplicar")])],1)],1)],1)],1)],1),t._v(" "),n("div",[n("hr",{staticClass:"mb-0 mt-0"}),t._v(" "),n("b-row",[t.valorTotal?n("b-col",{attrs:{cols:"5"}},[n("div",{staticClass:"pl-3"},[n("p",{staticClass:"text-total"},[t._v("Total:")]),t._v(" "),n("p",{staticClass:"text-value-total"},[t._v("\n                    "+t._s(t._f("currency")(t.valorTotal))+"\n                  ")])])]):t._e(),t._v(" "),n("b-col",[n("b-button",{staticStyle:{"border-radius":"0",height:"100%","font-size":"14px"},attrs:{variant:"success",block:""},on:{click:function(e){return t.compraIng()}}},[t._v("Comprar Ingressos")])],1)],1)],1)],2),t._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"card-info"},[n("b-row",[n("b-col",[n("div",{staticClass:"small"},[t._v("Data do evento")]),t._v(" "),n("div",[t._v(t._s(t.evento.data))])]),t._v(" "),n("b-col",[n("div",{staticClass:"small"},[t._v("Classificação")]),t._v(" "),n("b-badge",{staticClass:"d-flex align-items-center justify-content-center align-content-center",class:"L"===t.evento.classificacao?"quadrado":"retangulo",staticStyle:{"font-size":"15px","font-weight":"600"},attrs:{variant:"L"===t.evento.classificacao?"success":"dark"}},[t._v(t._s(t.evento.classificacao))])],1)],1),t._v(" "),n("hr"),t._v(" "),n("b-row",[n("b-col",[n("div",{staticClass:"small"},[t._v("Endereço")]),t._v(" "),n("div",[t._v("\n                    "+t._s(t.evento.endereco)+"\n                  ")]),t._v(" "),t.evento.mostrarmapa?n("a",{staticClass:"d-flex mt-2",attrs:{href:"#",target:"_blank"}},[n("div",[n("img",{attrs:{height:"20",src:o(528),alt:""}})]),t._v(" "),n("p",{staticClass:"ml-2",staticStyle:{color:"#25b3ff"}},[t._v("Abrir no Maps")])]):t._e()])],1)],1),t._v(" "),n("div",{staticClass:"card-info mt-3"},[n("h5",{staticClass:"pt-2 text-center"},[t._v("Como compro os ingressos?")]),t._v(" "),n("hr"),t._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{staticClass:"d-flex justify-content-md-center pr-md-0",attrs:{md:"2"}},[n("div",{staticClass:"\n                      bloc-bg\n                      d-flex\n                      align-items-center\n                      justify-content-center\n                    "},[n("p",[t._v("1")])])]),t._v(" "),n("b-col",{staticClass:"pr-md-0"},[n("div",[n("p",{staticClass:"txt-tutorial mt-2 mt-md-0"},[t._v("\n                      Escolha os ingressos que deseja comprar, você também\n                      pode usar um cupom caso tenha\n                    ")])])])],1),t._v(" "),n("hr"),t._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{staticClass:"d-flex justify-content-md-center pr-md-0",attrs:{md:"2"}},[n("div",{staticClass:"\n                      bloc-bg\n                      d-flex\n                      align-items-center\n                      justify-content-center\n                    "},[n("p",[t._v("2")])])]),t._v(" "),n("b-col",[n("div",[n("p",{staticClass:"txt-tutorial mt-2 mt-md-0"},[t._v("\n                      Preencha as informações com os dados e em seguida clique\n                      em “Comprar”\n                    ")])])])],1),t._v(" "),n("hr"),t._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{staticClass:"d-flex justify-content-md-center pr-md-0",attrs:{md:"2"}},[n("div",{staticClass:"\n                      bloc-bg\n                      d-flex\n                      align-items-center\n                      justify-content-center\n                    "},[n("p",[t._v("1")])])]),t._v(" "),n("b-col",[n("div",[n("p",{staticClass:"txt-tutorial mt-2 mt-md-0"},[t._v("\n                      Scaneie o QR Code pelo seu banco para realizar o\n                      pagamento via PIX, ou pague pelo seu cartão de crédito\n                    ")])])])],1),t._v(" "),n("hr"),t._v(" "),n("b-row",{staticClass:"mt-3"},[n("b-col",{staticClass:"d-flex justify-content-md-center pr-md-0",attrs:{md:"2"}},[n("div",{staticClass:"\n                      d-flex\n                      align-items-center\n                      md-justify-content-center\n                    "},[n("img",{attrs:{src:o(511),height:"50",alt:""}})])]),t._v(" "),n("b-col",[n("div",[n("p",{staticClass:"txt-tutorial mt-2 mt-md-0"},[t._v("\n                      Seus ingressos serão enviados automaticamente para o\n                      WhatsApp cadastrado, você também pode ve-lo através do\n                      menu 'meus ingressos'\n                    ")])])])],1)],1)]),t._v(" "),n("b-col",[n("div",{staticClass:"card-ingresso-venda d-none d-md-block"},[n("div",{staticClass:"text-center bg-dark text-light py-1"},[n("p",[t._v("Adquira seu Ingresso")])]),t._v(" "),t._l(t.ingressos,(function(e,r){return n("div",{key:r},[n("hr",{staticClass:"mt-0 mb-0"}),t._v(" "),n("div",{staticClass:"\n                    p-3\n                    d-flex\n                    justify-content-between\n                    align-items-center\n                  "},[n("div",[n("p",[t._v(t._s(e.nomeIng))]),t._v(" "),n("p",{staticClass:"small"},[t._v("\n                      "+t._s(e.nomeLote)+" - Valor: "+t._s(t._f("currency")(e.valor))+"\n                    ")])]),t._v(" "),n("div",{staticClass:"d-flex"},[n("img",{staticClass:"cursor-pointer",attrs:{height:"25",src:o(507),alt:""},on:{click:function(o){return t.dimiIng(e,r)}}}),t._v(" "),n("p",{staticClass:"px-2",staticStyle:{"font-size":"22px","margin-top":"-4px"}},[t._v("\n                      "+t._s(e.qtd)+"\n                    ")]),t._v(" "),n("img",{staticClass:"cursor-pointer",attrs:{height:"25",src:o(519),alt:""},on:{click:function(o){return t.addIng(e,r)}}})])])])})),t._v(" "),n("hr",{staticClass:"mt-0 mb-0"}),t._v(" "),n("div",{staticClass:"p-3"},[n("b-row",[n("b-col",{attrs:{md:"4","align-self":"center"}},[n("p",{staticStyle:{"font-size":"14px",color:"#25b3ff"}},[t._v("\n                      Possui um Cupom?\n                    ")])]),t._v(" "),n("b-col",[n("b-input-group",[n("b-form-input",{staticClass:"input-form",staticStyle:{"font-size":"13px"},attrs:{placeholder:"Digite aqui..."},model:{value:t.cupom,callback:function(e){t.cupom=e},expression:"cupom"}}),t._v(" "),n("b-input-group-append",[n("b-button",{staticStyle:{"font-size":"13px"},attrs:{variant:"success"},on:{click:function(e){return t.aplicaCupom()}}},[t._v("Aplicar")])],1)],1)],1)],1)],1),t._v(" "),n("div",[n("hr",{staticClass:"mb-0 mt-0"}),t._v(" "),n("b-row",[t.valorTotal?n("b-col",[n("div",{staticClass:"px-2"},[n("p",{staticClass:"text-total"},[t._v("Total:")]),t._v(" "),n("p",{staticClass:"text-value-total"},[t._v("\n                        "+t._s(t._f("currency")(t.valorTotal))+"\n                      ")])])]):t._e(),t._v(" "),n("b-col",[t.valorTotal?n("b-button",{staticStyle:{"border-radius":"0",height:"100%"},attrs:{variant:"success",block:""},on:{click:function(e){return t.compraIng()}}},[t._v("Comprar Ingressos")]):t._e()],1)],1)],1)],2)])],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);