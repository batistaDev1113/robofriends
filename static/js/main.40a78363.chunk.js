(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(3),a=n.n(o),i=(n(13),n(4)),h=n(5),l=n(7),d=n(6),b=function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"bg-light-green dib br1 pa1 ma2 grow bw1 tc shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(u,{name:t[n].name,email:t[n].email,id:t[n].id},t[n].id)}));return Object(r.jsx)(s.a.StrictMode,{children:n})},f=(n(14),function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid #000",height:"700px",padding:"10px"},children:e.children})}),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"Robofriends"}),Object(r.jsx)(b,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(j,{robots:c})})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);a.a.render(Object(r.jsx)(g,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.40a78363.chunk.js.map