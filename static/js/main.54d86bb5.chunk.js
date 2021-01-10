(this["webpackJsonpgrid-homeppl"]=this["webpackJsonpgrid-homeppl"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(0),a=n.n(i),c=n(8),d=n.n(c),o=n(3),s=(n(33),n(14)),l=n(15),u=n(19),h=n(17),j="ADD_GRID",b="GENERATE_GRID",p="REMOVE_ITEM",m="ADD_ITEM",O=(n(34),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).handleSubmit=function(t){t.preventDefault();var e=parseInt(r.props.grid.totalWidthGrid)+parseInt(r.state.columnWidth);0===r.state.columnWidth.length||e>12?r.setState({err:!0}):(r.props.addGrid(r.state),r.setState({columnWidth:"",text:"",err:!1}))},r.updateInput=function(t){r.setState({text:t})},r.state={columnWidth:"",text:"",err:!1,id:"",displayButton:!0},r}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"grid-form",children:[Object(r.jsx)("label",{children:"Grid Generator:"}),this.state.err?Object(r.jsx)("span",{style:{color:"red"},children:"Grid column width is invalid. It cannot be added or total width is already reached maximum of 12"}):"",Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"columnWidth",type:"number",min:"1",max:"12",value:this.state.columnWidth,placeholder:"Grid Column Width between 1 - 12",onChange:function(e){return t.setState({columnWidth:e.target.value})}}),Object(r.jsx)("input",{type:"text",value:this.state.text,placeholder:"Fill out the text for the grid *optional",onChange:function(e){return t.setState({text:e.target.value})}}),Object(r.jsx)("input",{type:"submit",value:"Add Grid",className:"form-btn",disabled:12===this.props.grid.totalWidthGrid})]}),Object(r.jsx)("span",{className:"error",children:this.props.grid.error?this.props.grid.error:""})]})}}]),n}(a.a.Component)),g=Object(o.b)((function(t){return t}),(function(t){return{addGrid:function(e){return t({type:j,payload:e})}}}))(O),f=n(18),x=n(16),v=n.n(x),W=(n(36),Object(o.b)((function(t){return{grid:t.grid}}))((function(t){var e,n,a,c,d,o=t.grid.grid,s=Object(i.useState)(null),l=Object(f.a)(s,2),u=l[0],h=l[1];function j(){return o.map((function(t,e){return Object(r.jsx)("div",{style:{gridColumnEnd:"span ".concat(t.columnWidth),height:"auto",border:"1px solid #777"},children:Object(r.jsxs)("div",{className:"text-wrapper",children:[Object(r.jsx)("h5",{children:"Column"}),Object(r.jsxs)("div",{children:["Width:",t.columnWidth]}),Object(r.jsx)("div",{className:"text",children:t.text?t.text:"Column ".concat(parseInt(e)+1)})]})},e)}))}function b(t){return a=j(),c=v.a.renderToStaticMarkup(a),"html"===t?(h(c),c):"json"===t?(d=function(t,r){var i={};return"string"===typeof t&&(window.DOMParser&&(e=new DOMParser,n=e.parseFromString(t,"text/xml")),t=n.firstChild),function t(e,n){n.type=e.nodeName;var r=e.childNodes;if(null!=r&&r.length){n.content=[];for(var i=0;i<r.length;i++)3===parseInt(r[i].nodeType,10)?n.content.push(r[i].nodeValue):(n.content.push({}),t(r[i],n.content[n.content.length-1]))}if(null!=e.attributes&&e.attributes.length){n.attributes={};for(var a=0;a<e.attributes.length;a++)n.attributes[e.attributes[a].nodeName]=e.attributes[a].nodeValue}}(t,i),r?JSON.stringify(i):i}(c,!0),h(d),d):void 0}return Object(r.jsxs)("div",{className:"container-wrapper",children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("p",{children:"Grid"}),Object(r.jsx)("div",{className:"row",children:j()})]}),Object(r.jsx)("input",{onClick:function(){return b("html")},type:"submit",value:"Export HTML",className:"export-html-btn",disabled:12===!t.grid.totalWidthGrid}),Object(r.jsx)("input",{onClick:function(){return b("json")},type:"submit",value:"Export JSON",className:"export-json-btn",disabled:12===!t.grid.totalWidthGrid}),Object(r.jsx)("div",{className:"export-content-wrapper",children:u})]})}))),y=(n(37),Object(o.b)((function(t){return t}),(function(t){return{addItem:function(e){return t(function(t){return{type:m,payload:t}}(e))},removeItem:function(e){return t(function(t){return{type:p,payload:t}}(e))}}}))((function(t){var e=t.grid.grid;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("ul",{className:"grid",children:[" ",e.map((function(e){return Object(r.jsxs)("li",{className:"list-item",children:[Object(r.jsx)("div",{className:"remove-button",onClick:function(){return t.removeItem(e)},children:"\u2715"}),Object(r.jsx)("div",{className:"add-button",onClick:function(){return t.addItem(e)},children:"\u2713"}),Object(r.jsxs)("span",{className:"column-width",children:["Column Width: ",Object(r.jsx)("b",{children:e.columnWidth})]}),e.text.length>0?"And Text is:  ".concat(e.text):""]},e.id)}))," "]}),12===t.grid.totalWidthGrid?Object(r.jsx)(W,{}):""]})})));var N=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{}),Object(r.jsx)(y,{})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),i(t),a(t),c(t)}))},G=n(4),C=n(5),w=n(2),S=function(t,e){var n=t.grid.filter((function(t){return t.id!==e.id})),r=parseInt(e.columnWidth)/n.length,i=0;return r>0&&(Math.round(r)!==r&&(i=1),r=Math.floor(r)),n.map((function(t,e){return t.columnWidth=parseInt(t.columnWidth)+r,e+1===n.length&&(t.columnWidth=parseInt(t.columnWidth)+i),t}))},D=function(t,e){var n=Object(C.a)(t.grid),r=Object(w.a)({},e);r.id=(new Date).getTime();var i=12-parseInt(e.columnWidth),a=parseInt(e.columnWidth);if("12"===e.columnWidth||i<n.length)return t.grid;for(;a>0;)for(var c=0;c<n.length&&!(n[c].columnWidth<1)&&(1!==parseInt(n[c].columnWidth)&&0!==a&&(n[c].columnWidth-=1,a--),0!==a);c++);return[].concat(Object(C.a)(n),[r])},E={grid:[],totalWidthGrid:0,updatedGrid:!1},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return e.payload.id=(new Date).getTime(),Object(w.a)(Object(w.a)({},t),{},{grid:[].concat(Object(C.a)(t.grid),[e.payload]),totalWidthGrid:t.totalWidthGrid+parseInt(e.payload.columnWidth)});case b:return Object(w.a)(Object(w.a)({},t),{},{grid:[].concat(Object(C.a)(t.grid),[e.payload])});case p:return"12"===t.grid.columnWidth||1===t.grid.length?Object(w.a)(Object(w.a)({},t),{},{error:"Cannot remove the last element",updatedGrid:!1}):Object(w.a)(Object(w.a)({},t),{},{error:"",grid:S(t,e.payload)});case m:return Object(w.a)(Object(w.a)({},t),{},{grid:D(t,e.payload)});default:return t}},M=Object(G.c)({grid:T}),k=Object(G.d)(M,G.a.apply(void 0,[]));d.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(o.a,{store:k,children:Object(r.jsx)(N,{})})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.54d86bb5.chunk.js.map