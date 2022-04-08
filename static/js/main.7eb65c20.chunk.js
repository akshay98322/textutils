(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),r=n.n(c),l=(n(9),n(2)),i=(n(10),n(0));function o(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-".concat("light"===e.mode?"primary":"dark"),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-light",children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.togleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark"})]})]})]})})}function b(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],c=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",placeholder:"Enter your text here.",value:s,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){if(""!==s){var t=s.toUpperCase();c(t),e.showAlert("Text converted to Uppercase.","success")}else e.showAlert("Please enter text first.","danger")},children:"Upper"}),Object(i.jsx)("button",{className:"btn btn-secondary mx-1 my-2",onClick:function(){if(""!==s){var t=s[0].toUpperCase()+s.substring(1).toLowerCase();c(t),e.showAlert("Text capitalized.","success")}else e.showAlert("Please enter text first.","danger")},children:"Capitalize"}),Object(i.jsx)("button",{className:"btn btn-success mx-1 my-2",onClick:function(){if(""!==s){var t=s.toLowerCase();c(t),e.showAlert("Text converted to Lowercase.","success")}else e.showAlert("Please enter text first.","danger")},children:"Lower"}),Object(i.jsx)("button",{className:"btn btn-danger mx-1 my-2",onClick:function(){if(""!==s){c(""),e.showAlert("Text cleared.","success")}else e.showAlert("No text to clear.","danger")},children:"Clear"}),Object(i.jsx)("button",{className:"btn btn-warning mx-1 my-2",onClick:function(){""!==s?(navigator.clipboard.writeText(s),e.showAlert("Text copied to clipboard.","success")):e.showAlert("No text to copy.","danger")},children:"Copy"}),Object(i.jsx)("button",{className:"btn btn-info mx-1 my-2",onClick:function(){if(""!==s){var t=s.split(/[ ]+/).join(" ");c(t),e.showAlert("Extra spaces removed.","success")}else e.showAlert("Please enter text first.","danger")},children:"Remove Space"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Your Text summary"}),Object(i.jsxs)("p",{children:["Your text has ",s.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",s.length," characters."]}),Object(i.jsxs)("p",{children:["It will take ",.008*s.split(/\s+/).filter((function(e){return 0!==e.length})).length," minutes to read"]}),Object(i.jsx)("h4",{children:"Text Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter something in the the textbox to view here"})]})]})}function d(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(i.jsx)("strong",{children:e.alert.msg})})})}o.defaultProps={title:"Default Title",aboutText:"Default About"};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(null),r=Object(l.a)(c,2),h=r[0],j=r[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1e3)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{title:"TextUtils",aboutText:"About",mode:n,togleMode:function(){"light"===n?(s("dark"),document.body.style.backgroundColor="#ddd",u("Dark Mode Enabled","success")):(s("light"),document.body.style.backgroundColor="white",u("Light Mode Enabled","success"))}}),Object(i.jsx)(d,{alert:h}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(b,{heading:"Enter the text to analize",mode:n,showAlert:u})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7eb65c20.chunk.js.map