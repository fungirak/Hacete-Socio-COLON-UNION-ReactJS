(this["webpackJsonpcolon-union-app"]=this["webpackJsonpcolon-union-app"]||[]).push([[0],{31:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t(18),s=t.n(n),r=t(10),l=t(2),o=t(7),i=t.p+"static/media/escudo-union.370ccc3f.png",d=t(11),j=t(14),b=t.p+"static/media/escudo-colon.ebd33c2c.png",m=t(0),u=function(e){var c=e.socio,t=e.equipo;console.log(c);var a=c.dni,n=c.nombre,s=c.apellido,r=c.direccion,l=c.altura,o=c.ciudad,d=c.fechaDeNacimiento;return Object(m.jsxs)("div",{className:"mt-1 mb-5 col-sm-10 col-md-4 posicion",children:[Object(m.jsx)("h1",{className:"text-center text-white text-shadow",children:"NUEVO SOCIO"}),Object(m.jsx)("div",{className:"text-overflow card border border-dark border-1 rounded m-3 p-1 shadow-lg col-sm-10  altura-carnet",children:Object(m.jsxs)("span",{className:"d-flex justify-content-around m-1",children:[Object(m.jsx)("span",{className:"",children:Object(m.jsx)("img",{src:" ".concat(1===t?b:i),alt:"",className:"foto-carnet "})}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"bg-dark text-light w-100 text-center rounded",children:[Object(m.jsx)("span",{style:{textTransform:"uppercase"},children:n}),Object(m.jsx)("span",{style:{textTransform:"uppercase"},children:s})]}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("span",{children:"DNI  "}),Object(m.jsxs)("span",{children:[" ",a]})]}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("div",{children:"Domicilio:"}),Object(m.jsx)("span",{children:r}),Object(m.jsxs)("span",{children:[l," "]})]}),Object(m.jsxs)("div",{children:["Localidad: ",o]}),Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["F.Nac: ",d]})})]})]})})]})},h="rounded-pill m-2 w-50  text-center mb-2 bg-dark text-danger",x="rounded-pill m-2 w-50  text-center mb-2 bg-danger text-light",O={dni:"",correoElectronico:"",nombre:"",apellido:"",direccion:"",altura:"",ciudad:"",fechaDeNacimiento:""},p={},N=function(e){var c=e.equipo,t=e.titulo,n=Object(a.useState)(O),s=Object(o.a)(n,2),r=s[0],l=s[1],i=Object(a.useState)(p),b=Object(o.a)(i,2),N=b[0],f=b[1],v=Object(a.useState)(false),g=Object(o.a)(v,2),w=g[0],y=g[1],C=function(e){l(Object(j.a)(Object(j.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"tama\xf1o",children:[w&&Object(m.jsx)(u,{socio:N,equipo:c}),Object(m.jsx)("form",{onSubmit:function(e){f(r),l(O),e.preventDefault(),y(!0),window.scroll(0,100)},className:"row ".concat(1===c?"fondo-colon":"fondo-union"," "),method:"post",action:"hacete-socio",children:Object(m.jsxs)("div",{className:"form-row ",children:[Object(m.jsx)("h1",{className:"text-center text-danger mt-2 rounded p-1\n                        ".concat("COLON DE SANTA FE"===t?"bg-dark":"bg-white","\n                        "),children:t}),Object(m.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(m.jsxs)("div",{className:"col-md-4  mb-3",children:[Object(m.jsx)("label",{for:"dni",className:"".concat(1===c?h:x," "),children:"DNI"}),Object(m.jsx)("input",{value:r.dni,onChange:C,type:"number",className:"form-control rounded-pill",name:"dni",placeholder:"N\xb0",required:!0})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"correoElectronico",className:"".concat(1===c?h:x," "),children:"Correo electr\xf3nico"}),Object(m.jsx)("input",{value:r.correoElectronico,onChange:C,type:"email",className:"form-control  rounded-pill",name:"correoElectronico",placeholder:"correo electronico",required:!0})]})]}),Object(m.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"nombre",className:"".concat(1===c?h:x," "),children:"Nombre"}),Object(m.jsx)("input",{value:r.nombre,onChange:C,type:"text",className:"form-control rounded-pill",name:"nombre",placeholder:"Nombre",required:!0})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"apellido",className:"".concat(1===c?h:x," "),children:"Apellido"}),Object(m.jsx)("input",{value:r.apellido,onChange:C,type:"text",className:"form-control rounded-pill",name:"apellido",placeholder:"Apellido",required:!0})]})]}),Object(m.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"direccion",className:"".concat(1===c?h:x," "),children:"Direcci\xf3n"}),Object(m.jsx)("input",{value:r.direccion,onChange:C,type:"text",className:"form-control rounded-pill",name:"direccion",placeholder:"Calle",required:!0})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"altura",className:"".concat(1===c?h:x," "),children:"Altura"}),Object(m.jsx)("input",{value:r.altura,onChange:C,type:"number",className:"form-control rounded-pill",name:"altura",placeholder:"Altura",required:!0})]})]}),Object(m.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"ciudad",className:"".concat(1===c?h:x," "),children:"Ciudad"}),Object(m.jsx)("input",{value:r.ciudad,onChange:C,type:"text",className:"form-control  rounded-pill",name:"ciudad",placeholder:"Ciudad",required:!0})]}),Object(m.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(m.jsx)("label",{for:"fechaNacimiento",className:"".concat(1===c?h:x," "),children:"Fecha de Nacimiento"}),Object(m.jsx)("input",{value:r.fechaDeNacimiento,onChange:C,type:"date",className:"form-control rounded-pill",name:"fechaDeNacimiento",placeholder:"Dia/Mes/A\xf1o",required:!0})]})]}),Object(m.jsx)("div",{className:"row d-flex justify-content-center m-2",children:Object(m.jsx)("div",{className:"form-group col-md-4",children:Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{onChange:C,className:"form-check-input",type:"checkbox",id:"invalidCheck3",required:!0}),Object(m.jsx)("label",{className:"bg-white text-dark text-center rounded",for:"invalidCheck3",children:"Aceptar los t\xe9rminos y condiciones"})]})})}),Object(m.jsx)("div",{className:" d-flex justify-content-center ",children:Object(m.jsx)("div",{className:"row col-md-6 mb-5",children:Object(m.jsx)("button",{className:"btn text-center text-danger m-2 rounded p-2 mb-2  shadow border-danger\n                    ".concat("COLON DE SANTA FE"===t?"btn-dark":"btn-light","\n                    "),type:"submit",children:"HACERME SOCIO"})})})]})})]})},f=function(e){var c=e.disabled,t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[!s&&Object(m.jsx)("button",{className:"bg-transparent  fondo-union position-absolute w-100 h-100 border border-0",disabled:c,onClick:function(){return r(!s)},children:Object(m.jsx)("img",{src:i,alt:"",style:{width:"6em",height:"7em"},className:"latido mt-5"})}),s&&Object(m.jsx)(N,{equipo:0,titulo:"UNION DE SANTA FE"})]})},v=function(e){var c=e.disabled,t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(m.jsxs)("div",{className:"d-flex justify-content-center",children:[!s&&Object(m.jsx)("button",{className:"bg-transparent  fondo-colon position-absolute w-100 h-100 border border-0 ",disabled:c,onClick:function(){return r(!s)},children:Object(m.jsx)("img",{src:b,alt:"",style:{width:"6em",height:"7em"},className:"latido mt-5"})}),s&&Object(m.jsx)(N,{equipo:1,titulo:"COLON DE SANTA FE"})]})},g=function(e){e.estadio;return Object(m.jsx)("div",{className:"d-flex justify-content-center   fondo-santa-fe",children:Object(m.jsx)("p",{className:"text-dark bg-white border border-dark border-2  p-2 rounded  d-flex justify-content-center align-self-center",children:"\xa1HACETE SOCIO!"})})},w=t.p+"static/media/estadio-colon.67144115.jpg",y=t.p+"static/media/estadio-union.29e88edb.jpg";function C(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)("div",{className:"navbar-nav bg-dark shadow",children:[Object(m.jsxs)("ul",{className:"nav d-flex justify-content-around",children:[Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(r.b,{to:"/hacete-socio-colon",className:"text-danger p-2 border border-2 rounded border-danger",children:"COLON"})}),Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(r.b,{to:"/",className:"text-light",children:"\xa1HACETE SOCIO!"})}),Object(m.jsx)("li",{className:"nav-item p-3",children:Object(m.jsx)(r.b,{to:"/hacete-socio-union",className:"text-danger p-2 border border-2 rounded border-danger bg-white",children:"UNION"})})]}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/hacete-socio-colon",children:Object(m.jsx)(v,{estadio:w})}),Object(m.jsx)(l.a,{path:"/hacete-socio-union",children:Object(m.jsx)(f,{estadio:y})}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)(g,{})})]})]})})}var E=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(C,{})})};t(30),t(31);s.a.render(Object(m.jsx)(E,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ad00f22d.chunk.js.map