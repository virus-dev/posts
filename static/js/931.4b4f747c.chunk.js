/*! For license information please see 931.4b4f747c.chunk.js.LICENSE.txt */
(self.webpackChunkposts=self.webpackChunkposts||[]).push([[931],{6931:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return F}});var t=s(2791),i=s(6871),r=s(1694),a=s.n(r),o="Container_container__bL52o",c=s(184),l=function(e){var n=e.children,s=e.className;return(0,c.jsx)("div",{className:a()(o,s),children:n})},u=s(9434),d=function(){return(0,u.I0)()},h=u.v9,_=s(2198),f="Pagination_pagination__ohq7N",p="Pagination_pageNumbers__P-ksI",v="Pagination_pageNumber__rgoPA",x="Pagination_pageNumberActive__lzyyl",j=function(){var e=d(),n=(0,i.s0)(),s=_.h.actions.changePage,t=h((function(e){return e.postsReducer})),r=t.limit,o=t.page,l=t.pages,u=t.isLoading,j=t.count,g=t.postsOnPage;return u||!g.length?null:(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("button",{onClick:function(){var t=o-1<1?1:o-1;e(s(t)),n("/".concat(t))},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,c.jsx)("div",{className:p,children:new Array(l).fill(0).map((function(t,i){return(0,c.jsx)("button",{onClick:function(){return e(s(t=i+1)),void n("/".concat(t));var t},className:a()(v,i+1===o&&x),children:i+1},i)}))}),(0,c.jsx)("button",{onClick:function(){var t=(o+1)*r-r>=j?o:o+1;e(s(t)),n("/".concat(t))},children:"\u0414\u0430\u043b\u0435\u0435"})]})},g=s(6410),N=function(){return(0,c.jsxs)("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"white",children:[(0,c.jsx)("line",{x1:"0.353553",y1:"0.646447",x2:"6.18011",y2:"6.47301",stroke:"white"}),(0,c.jsx)("line",{x1:"5.64645",y1:"6.30331",x2:"11.3033",y2:"0.646453",stroke:"white"})]})},w=s(1523),b="PostsTableHeader_postsTableHeader__9coXi",m="PostsTableHeader_postsTableHeaderButton__IcL+l",T="PostsTableHeader_flipOver__KU3C-",P=function(){var e=d(),n=h((function(e){return e.postsReducer.filter}));return(0,c.jsxs)("div",{className:b,children:[(0,c.jsxs)("button",{className:m,onClick:function(){var s=_.h.actions.changeFilter;if(w.w.ID_DOWN===n)return e(s(w.w.ID_UP));e(s(w.w.ID_DOWN))},children:[(0,c.jsx)("div",{children:"ID"}),w.w.ID_DOWN===n&&(0,c.jsx)(N,{}),w.w.ID_UP===n&&(0,c.jsx)("div",{className:T,children:(0,c.jsx)(N,{})})]}),(0,c.jsxs)("button",{className:m,onClick:function(){var s=_.h.actions.changeFilter;if(w.w.TITLE_DOWN===n)return e(s(w.w.TITLE_UP));e(s(w.w.TITLE_DOWN))},children:[(0,c.jsx)("div",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),w.w.TITLE_DOWN===n&&(0,c.jsx)(N,{}),w.w.TITLE_UP===n&&(0,c.jsx)("div",{className:T,children:(0,c.jsx)(N,{})})]}),(0,c.jsxs)("button",{className:m,onClick:function(){var s=_.h.actions.changeFilter;if(w.w.DESCTIPTION_DOWN===n)return e(s(w.w.DESCTIPTION_UP));e(s(w.w.DESCTIPTION_DOWN))},children:[(0,c.jsx)("div",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),w.w.DESCTIPTION_DOWN===n&&(0,c.jsx)(N,{}),w.w.DESCTIPTION_UP===n&&(0,c.jsx)("div",{className:T,children:(0,c.jsx)(N,{})})]})]})},C="PostsTableRow_postsTableRow__8XfRl",I="PostsTableRow_postsTableRowId__giH7a",D="PostsTableRow_postsTableRowTitle__nwSt1",O="PostsTableRow_postsTableRowBody__GiebV",y=function(e){var n=e.id,s=e.title,t=e.body;return(0,c.jsxs)("div",{className:C,children:[(0,c.jsx)("div",{className:I,children:n}),(0,c.jsx)("div",{className:D,children:s}),(0,c.jsx)("div",{className:O,children:t})]})},k=function(){var e=h((function(e){return e.postsReducer})),n=e.postsOnPage;return e.isLoading?(0,c.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):n.length?(0,c.jsx)(c.Fragment,{children:n.map((function(e){var n=e.id,s=e.title,t=e.body;return(0,c.jsx)(y,{id:n,title:s,body:t},n)}))}):(0,c.jsx)("div",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})},R=function(){return(0,c.jsx)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{d:"M20.7353 19.4958L14.7101 13.4663C15.8979 12.0418 16.6124 10.2213 16.6124 8.23301C16.6124 3.69689 12.8896 0.00860596 8.31048 0.00860596C3.73132 0.00860596 0 3.70119 0 8.23731C0 12.7734 3.72272 16.4617 8.30187 16.4617C10.2472 16.4617 12.0375 15.7946 13.4577 14.68L19.5045 20.7267C19.8574 21.0796 20.3824 21.0796 20.7353 20.7267C21.0882 20.3738 21.0882 19.8487 20.7353 19.4958ZM1.76452 8.23731C1.76452 4.67383 4.69966 1.77743 8.30187 1.77743C11.9041 1.77743 14.8392 4.67383 14.8392 8.23731C14.8392 11.8008 11.9041 14.6972 8.30187 14.6972C4.69966 14.6972 1.76452 11.7965 1.76452 8.23731Z",fill:"white"})})},E="Input_inputWrapper__3B3P2",L="Input_input__kNV4-",W="Input_icon__laieK",S=function(e){var n=e.icon,s=e.onChange,t=e.placeholder,i=e.value,r=e.className;return(0,c.jsxs)("div",{className:a()(E,r),children:[(0,c.jsx)("input",{type:"text",className:L,onChange:s,placeholder:t,value:i}),n&&(0,c.jsx)("span",{className:W,children:n})]})},U="PostsTable_input__f-Qw8",A=function(){var e=d(),n=(0,i.s0)(),s=h((function(e){return e.postsReducer.search}));return(0,t.useEffect)((function(){e((0,g.T)())}),[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{value:s,onChange:function(s){var t=s.target.value,i=_.h.actions.setSearch;e(i(t)),n("/1")},placeholder:"\u041f\u043e\u0438\u0441\u043a",className:U,icon:(0,c.jsx)(R,{})}),(0,c.jsx)(P,{}),(0,c.jsx)(k,{})]})},H=s(7882),B="PagePosts_container__Wwbq0",F=function(){var e=d(),n=(0,i.s0)(),s=(0,i.UO)().pageNumber,r=h((function(e){return e.postsReducer})),a=r.count,o=r.limit,u=r.isLoading;return(0,t.useEffect)((function(){var t=_.h.actions.changePage;if(!u&&a)if(s&&(Number(s)<1||a<Number(s)*o-o)){n(H.n.MAIN);var i=_.h.actions.changePage;e(i(1))}else s&&e(t(Number(s)))}),[a,e,u,o,n,s]),(0,c.jsxs)(l,{className:B,children:[(0,c.jsx)(A,{}),(0,c.jsx)(j,{})]})}},1694:function(e,n){var s;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var a=i.apply(null,s);a&&e.push(a)}}else if("object"===r)if(s.toString===Object.prototype.toString)for(var o in s)t.call(s,o)&&s[o]&&e.push(o);else e.push(s.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(n,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=931.4b4f747c.chunk.js.map