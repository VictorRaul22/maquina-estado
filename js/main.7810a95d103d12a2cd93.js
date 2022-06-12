(()=>{"use strict";var e,t={454:(e,t,n)=>{var a=n(294),r=n(745),s=n(152),c=n(503),o=function(e){var t=e.state,n=e.send,r=["initial","tickets"].some(t.matches);return a.createElement("nav",{className:"Nav"},a.createElement("h1",{className:"Nav-logo"},"Book a fly ✈"),!r&&a.createElement("button",{onClick:function(){n("CANCEL")},className:"Nav-cancel button-secondary"},"Cancelar"))},i=function(e){var t=e.send;return a.createElement("div",{className:"Welcome"},a.createElement("p",{className:"Welcome-title title"},"¡Hoy es el día!"),a.createElement("p",{className:"Welcome-description description"},"Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las maravillas que hay para explorar"),a.createElement("button",{onClick:function(){t("START")},className:"Welcome-cancel button"},"Comenzar"))},l=function(e){var t=e.state,n=e.send,r=(0,a.useState)(""),c=(0,s.Z)(r,2),o=c[0],i=c[1],l=t.context.countries;return a.createElement("div",{className:"Search"},a.createElement("p",{className:"Search-title title"},"Busca tu destino"),a.createElement("select",{id:"country",className:"Search-select",value:o,onChange:function(e){i(e.target.value)}},a.createElement("option",{value:"",disabled:!0,defaultValue:!0},"Escoge un país"),l.map((function(e){return a.createElement("option",{value:e.name.common,key:e.name.common},e.name.common)}))),a.createElement("button",{onClick:function(){n("CONTINUE",{selectedCountry:o})},disabled:""===o,className:"Search-continue button"},"Continuar"))},u=function(e){var t=e.state,n=e.send,r=(0,a.useState)(""),c=(0,s.Z)(r,2),o=c[0],i=c[1],l=t.context.passengers,u=void 0===l?[]:l;return a.createElement("form",{onSubmit:function(e){e.preventDefault(),n("ADD",{newPassenger:o}),i("")},className:"Passengers"},a.createElement("p",{className:"Passengers-title title"},"Agrega a las personas que van a volar ✈️"),u.map((function(e,t){return a.createElement("p",{className:"text",key:"person-".concat(t)},e)})),a.createElement("input",{id:"name",name:"name",type:"text",placeholder:"Escribe el nombre completo",required:!0,value:o,onChange:function(e){i(e.target.value)}}),a.createElement("div",{className:"Passengers-buttons"},a.createElement("button",{className:"Passengers-add button-secondary",type:"submit"},"Agregar Pasajero"),a.createElement("button",{className:"Passenger-pay button",type:"button",onClick:function(){n("DONE")}},"Ver mi ticket")))},m=function(e){var t=e.send,n=e.context;return a.createElement("div",{className:"Tickets"},a.createElement("p",{className:"Tickets-description description"},"Gracias por volar con book a fly 💚"),a.createElement("div",{className:"Tickets-ticket"},a.createElement("div",{className:"Tickets-country"},n.selectedCountry),a.createElement("div",{className:"Tickets-passengers"},a.createElement("span",null,"✈"),n.passengers.map((function(e,t){return a.createElement("p",{key:t},e)})))),a.createElement("button",{onClick:function(){t("FINISH")},className:"Tickets-finalizar button"},"Finalizar"))},p=function(e){var t=e.state,n=e.send;return a.createElement("div",{className:"StepsLayout"},t.matches("initial")?a.createElement(i,{send:n}):t.matches("search")?a.createElement(l,{state:t,send:n}):t.matches("tickets")?a.createElement(m,{send:n,context:t.context}):t.matches("passengers")?a.createElement(u,{state:t,send:n}):null)},d=n(942),f=n(494),g=n(122),v=function(){return fetch("https://restcountries.com/v3.1/region/ame").then((function(e){return e.json()}))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var b={initial:"loading",states:{loading:{invoke:{id:"getCountries",src:function(){return v},onDone:{target:"success",actions:(0,f.f0)({countries:function(e,t){return t.data}})},onError:{target:"failure",actions:(0,f.f0)({error:"Fallo el request"})}}},success:{},failure:{on:{RETRY:{target:"loading"}}}}};const h=(0,g.C)({id:"buy plane tickets",initial:"initial",context:{passengers:[],selectedCountry:"",countries:[],error:""},states:{initial:{on:{START:{target:"search"}}},search:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({on:{CONTINUE:{target:"passengers",actions:(0,f.f0)({selectedCountry:function(e,t){return t.selectedCountry}})},CANCEL:{target:"initial",actions:"resetContext"}}},b),passengers:{on:{DONE:{target:"tickets",cond:"moreThanOnePassenger"},CANCEL:{target:"initial",actions:"resetContext"},ADD:{target:"passengers",actions:(0,f.f0)((function(e,t){return e.passengers.push(t.newPassenger)}))}}},tickets:{after:{5e3:{target:"initial",actions:"resetContext"}},on:{FINISH:"initial"}}}},{actions:{imprimirInicio:function(){return console.log("Imprimir inicio")},imprimirEntrada:function(){return console.log("Imprimir Entrada a search")},inprimirSalida:function(){return console.log("Imprimir Salida de search")},resetContext:(0,f.f0)({passengers:[],selectedCountry:""})},guards:{moreThanOnePassenger:function(e){return e.passengers.length>0}}});var y=function(){var e=(0,c.e)(h),t=(0,s.Z)(e,2),n=t[0],r=t[1];return console.log("nuestra maquina",n.value,n.context),a.createElement("div",{className:"BaseLayout"},a.createElement(o,{state:n,send:r}),a.createElement(p,{state:n,send:r}))};const N=function(){return a.createElement("div",{className:"App"},a.createElement(y,null))};var O=document.getElementById("root");r.createRoot(O).render(a.createElement(N,null)),reportWebVitals()}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,a),s.exports}a.m=t,e=[],a.O=(t,n,r,s)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){for(var[n,r,s]=e[u],o=!0,i=0;i<n.length;i++)(!1&s||c>=s)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(o=!1,s<c&&(c=s));if(o){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[c,o,i]=n,l=0;if(c.some((t=>0!==e[t]))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(i)var u=i(a)}for(t&&t(n);l<c.length;l++)s=c[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self.webpackChunkmaquina_estado=self.webpackChunkmaquina_estado||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[790],(()=>a(454)));r=a.O(r)})();
//# sourceMappingURL=main.7810a95d103d12a2cd93.js.map