(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{30:function(e,t,n){e.exports=n(56)},56:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),c=n.n(i),l=n(3),o=n(4);function d(){var e=Object(l.a)(["\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: 'Raleway', sans-serif;\n  }\n\n  body {\n     -webkit-font-smoothing: antialiased;\n     background-color: #cc5577;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23ce5776' x='10' width='11' height='11'/%3E%3Crect fill='%23d05a76' y='10' width='11' height='11'/%3E%3Crect fill='%23d15c75' x='20' width='11' height='11'/%3E%3Crect fill='%23d35f74' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d46174' y='20' width='11' height='11'/%3E%3Crect fill='%23d66473' x='30' width='11' height='11'/%3E%3Crect fill='%23d76673' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d96972' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23da6c72' y='30' width='11' height='11'/%3E%3Crect fill='%23db6e71' x='40' width='11' height='11'/%3E%3Crect fill='%23dc7171' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23dd7471' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23de7671' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23df7971' y='40' width='11' height='11'/%3E%3Crect fill='%23e07c71' x='50' width='11' height='11'/%3E%3Crect fill='%23e17e71' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23e28171' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23e38471' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23e38771' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23e48972' y='50' width='11' height='11'/%3E%3Crect fill='%23e58c72' x='60' width='11' height='11'/%3E%3Crect fill='%23e58f73' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23e69173' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23e69474' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23e79775' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23e79a75' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23e89c76' x='70' width='11' height='11'/%3E%3Crect fill='%23e89f77' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23e8a278' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23e9a47a' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23e9a77b' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23e9aa7c' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23e9ac7e' x='80' width='11' height='11'/%3E%3Crect fill='%23eaaf7f' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23eab281' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23eab482' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23eab784' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23eaba86' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ebbc88' x='90' width='11' height='11'/%3E%3Crect fill='%23ebbf8a' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ebc18c' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ebc48e' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23ebc790' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23ebc992' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23ebcc94' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23ebce97' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23ebd199' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23ecd39c' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23ecd69e' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23ecd8a1' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23ecdba4' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23ecdda6' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23ece0a9' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23ede2ac' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23ede4af' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23ede7b2' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23ede9b5' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23eeecb8' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E\");\n  background-attachment: fixed;\n  background-size: cover;\n      }\n\n button {\ncolor: black;\nbackground-color: white;\nborder: 1px solid #d05a76;\nborder-radius: 4px;\ncursor: pointer;\nheight:32px;\nfont-size:14px;\nbox-shadow: 0 0 4px #999;\nbackground-position: center;\ntransition: background 0.8s;\n}\n\nbutton:hover {\nbackground:#d05a76 radial-gradient(circle, transparent 1%, #d05a76 1%) center/15000%;\ncolor: white;\n}\n\nbutton:active{\nbackground-color:#292d3e;\nbackground-size: 100%;\ntransition: background 0s;\n}\n\nbutton:disabled{\nbackground-color:gray;\n\n}\n\nbutton:disabled:hover {\n  background-color:gray;\n}\n  \n.Toastify__toast--success {\n  background: #d05a76 ;\n  border-radius: 10px 10px 0px 10px;\n }\n\n input, select{\n   padding: 3px 5px;\n   border-radius: 5px;\n   border: 0.5px dashed #d05a76; \n   box-shadow: 2.5px 2.5px 1px #0000003b;\n   margin: 2.5px 0 5px 0;\n   background: white\n }\n\n option{\n   background: white;\n   text-align: center;\n   border: none;\n }\n\n\n  \n  \n  "]);return d=function(){return e},e}var h=Object(o.a)(d());function u(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 15px;\n  height: 230px;\n  width: 300px;\n  background: white;\n  border: 2px dashed #d05a76;\n  padding: 10px 10px;\n\n  z-index: 2;\n  text-align: center;\n  border-radius: 2px 30px 30px 30px;\n\n  h5 {\n    color: black;\n    margin-bottom: 10px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    label {\n      color: black;\n      margin-top: 5px;\n      margin-bottom: 5px;\n    }\n\n    button {\n      margin-top: 15px;\n    }\n  }\n"]);return u=function(){return e},e}var f=o.b.div(u());function b(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 250px;\n  width: 100%;\n  color: black;\n  background: #d05a76;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    flex: 3;\n    text-align: center;\n    color: white;\n  }\n\n  "," {\n    flex: 1;\n    position: sticky;\n    top: 1px;\n    bottom: 10px;\n  }\n"]);return b=function(){return e},e}var s=o.b.header(b(),f),x=n(1),p=n.n(x),g=n(6),w=n(12),m=n(7),E=n(5),y=["Domingo","Segunda-feira","Ter\xe7a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S\xe1bado"],C=n(29),v=n.n(C).a.create({baseURL:"https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-victorgutierrez"}),k=n(9),j=function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("",t).then((function(){k.b.success("Tarefa criada com sucesso!")})).catch((function(e){console.error(e),k.b.error("Houve um erro na cria\xe7\xe3o da sua tarefa")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=Object(r.createContext)({}),S=function(){var e=Object(r.useState)(Object(m.a)(Object(m.a)({},{}),{},{text:""})),t=Object(E.a)(e,2),n=t[0],i=t[1],c=Object(r.useContext)(O).Load,l=function(e){var t=e.target,r=t.value,a=t.id;i(Object(m.a)(Object(m.a)({},n),{},Object(w.a)({},a,r)))},o=function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j(n).then((function(){i(Object(m.a)(Object(m.a)({},n),{},{text:""})),c()})).catch((function(){i(Object(m.a)(Object(m.a)({},n),{},{text:""}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(f,null,a.a.createElement("h5",null,"Crie sua tarefa"),a.a.createElement("form",{onSubmit:o},a.a.createElement("label",{htmlFor:"day"},"Nome da tarefa"),a.a.createElement("input",{required:!0,"data-testid":"task-input",onChange:l,type:"text",id:"text",value:n.text,placeholder:"Insira um nome"}),a.a.createElement("label",{htmlFor:"day"},"Dia da tarefa"),a.a.createElement("select",{"data-testid":"day-input",required:!0,onChange:l,id:"day"},a.a.createElement("option",{value:""},"Selecione o dia"),y.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))),a.a.createElement("button",{"data-testid":"createButton",type:"submit"},"Criar Tarefa")))},z=function(){return a.a.createElement(s,null,a.a.createElement(S,null),a.a.createElement("div",null,a.a.createElement("h1",{"data-testid":"logo"},"Planner"),a.a.createElement("p",null,"A way to keep your schedules")))},F=function(){var e=Object(r.useState)([]),t=Object(E.a)(e,2),n=t[0],a=t[1],i=Object(r.useContext)(O).reloadSwitch;Object(r.useEffect)((function(){c()}),[i]);var c=function(){var e=Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("").then((function(e){a(e.data)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return[n]};function D(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  height: 300px;\n  width: 300px;\n  border-bottom: 5px dashed white;\n  list-style: none;\n  text-align: center;\n  break-before: auto;\n  word-break: break-word;\n  overflow-y: scroll;\n  border-radius: 5px;\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    display: none;\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    display: none;\n  }\n\n  h1 {\n    font-size: 20px;\n    text-align: center;\n    padding: 5px;\n    margin-bottom: 10px;\n    position: sticky;\n    top: 0px;\n    background: white;\n    border-radius: 5px;\n  }\n"]);return D=function(){return e},e}var T=o.b.div(D());function B(){var e=Object(l.a)(["\n  color: ",";\n  text-decoration: ",";\n  padding: 10px 5px;\n\n  text-decoration-color: black;\n"]);return B=function(){return e},e}function I(){var e=Object(l.a)(["\n  width: 80%;\n  height: auto;\n  padding: 10px;\n  border-radius: 5px;\n  word-break: break-word;\n  margin: 10px auto;\n  display: flex;\n  flex-direction: column;\n  background: bisque;\n\n  input::placeholder {\n    text-align: center;\n  }\n"]);return I=function(){return e},e}var L=o.b.li(I()),q=o.b.p(B(),(function(e){return e.completion?"gray":"black"}),(function(e){return e.completion?"line-through":"none"})),A=function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.delete("/".concat(t)).then((function(){return k.b.success("Tarefa deletada com sucesso")})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.text,n=e.id,i=Object(r.useState)(!1),c=Object(E.a)(i,2),l=c[0],o=c[1],d=Object(r.useState)(!1),h=Object(E.a)(d,2),u=h[0],f=h[1],b=Object(r.useContext)(O).Load,s=function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t).then((function(){b()})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(L,{"data-testid":"task-box",onKeyDown:function(e){27===Number(e.keyCode)&&o(!1)}},a.a.createElement(q,{completion:u},t),l?a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{placeholder:"Insira o novo conte\xfado",type:"text"}),a.a.createElement("button",{disabled:!0,title:"N\xe3o suportado pela API, apenas demonstrativo"},"Enviar"),a.a.createElement("button",{onClick:function(){return o(!1)}},"Cancelar")):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{style:{background:u?"#d05a76":"white",color:u?"white":"black"},onClick:function(){return f((function(e){return!e}))}},u?"Atividade Completa!":"Completar"),a.a.createElement("button",{onClick:function(){return o(!0)}},"Editar"),a.a.createElement("button",{onClick:function(){return s(n)}},"Deletar")))},P=function(e){var t=e.day,n=F(),r=Object(E.a)(n,1)[0];return a.a.createElement(T,null,a.a.createElement("h1",{"data-testid":"day-title"},t),r.map((function(e){return e.day===t?a.a.createElement(N,{id:e.id,text:e.text,key:e.id}):a.a.createElement(a.a.Fragment,null)})))};function J(){var e=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-top: 20px;\n  min-height: 1000px;\n  justify-content: center;\n"]);return J=function(){return e},e}var Q=o.b.main(J()),R=function(){return a.a.createElement(Q,{"data-testid":"day-container"},y.map((function(e){return a.a.createElement(P,{key:e,day:e})})))},_=function(e){var t=e.children,n=Object(r.useState)(0),i=Object(E.a)(n,2),c=i[0],l=i[1];return a.a.createElement(O.Provider,{value:{reloadSwitch:c,Load:function(){l((function(e){return e+1}))}}},t)};n(55);var H=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(k.a,{position:"bottom-right"}),a.a.createElement(_,null,a.a.createElement(z,null),a.a.createElement(R,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0140ab0e.chunk.js.map