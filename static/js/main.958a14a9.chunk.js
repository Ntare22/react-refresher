(this["webpackJsonpreact-refresher"]=this["webpackJsonpreact-refresher"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(2)),o=n(3),i=n(5),h=n(4),l=n(0),u=function(e){return Object(l.jsxs)("div",{className:"bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("p",{children:e.email})]})]})},b=function(e){return e.robots.map((function(e){return Object(l.jsx)(u,{id:e.id,name:e.name,email:e.email},e.id)}))},j=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:e.children})},d=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(r.Component),f=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(f,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(d,{children:Object(l.jsx)(b,{robots:t})})})]})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);s.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(O,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.958a14a9.chunk.js.map