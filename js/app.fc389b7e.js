(function(t){function e(e){for(var n,r,a=e[0],l=e[1],c=e[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"016f":function(t,e,i){"use strict";i("8d32")},"022d":function(t,e,i){},"034f":function(t,e,i){"use strict";i("85ec")},"0547":function(t,e,i){},"117c":function(t,e,i){"use strict";i("a651")},"1a39":function(t,e,i){"use strict";i("6338")},"1a5d":function(t,e,i){"use strict";i("4bd6")},"261d":function(t,e,i){"use strict";i("aae4")},"28f8":function(t,e,i){},3004:function(t,e,i){"use strict";i("b70e")},"484c":function(t,e,i){"use strict";i("d3d1")},"4bd6":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"unselectable",attrs:{id:"app"}},[i("transition",{attrs:{name:"modal-scale",mode:"out-in"}},[t.modal?i("Modal",{attrs:{data:t.showInModal},on:{closeModal:function(e){t.modal=!t.modal}}}):t._e()],1),i("Header",{attrs:{isMenuOpen:t.isMenuOpen},on:{isOpenMenu:t.menuOpen}}),i("Navigation",{attrs:{visible:t.isMenuOpen,"selected-component":t.currentComponentName},on:{hasBeenClicked:function(e){return t.menuOpen(!1)}}}),i("Home",{on:{openSlide:t.openSlide,currentComponent:t.forNavigationComponentName}})],1)},o=[],r=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{class:["box-header",t.isMenuOpen?"menu-is-open":""]},[i("div",{staticClass:"header-container"},[t._m(0),i("div",{staticClass:"box-primary-nav-trigger",on:{click:function(e){return t.menuClicked()}}},[i("span",{staticClass:"box-menu-text"},[t._v("Меню")]),i("span",{class:["box-menu-icon",t.isMenuOpen?"is-clicked":""]})])])])}),a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-logo"},[n("div",{staticClass:"logo__container"},[n("img",{staticClass:"logo__img",attrs:{src:i("753c"),alt:"logo"}})])])}],l={name:"Header",props:{isMenuOpen:{type:Boolean,default:!1}},methods:{menuClicked:function(){this.$emit("isOpenMenu")}}},c=l,p=(i("3004"),i("2877")),u=Object(p["a"])(c,r,a,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("ul",{class:["box-primary-nav",t.visible?"is-visible":""],on:{click:function(e){return t.$emit("hasBeenClicked")}}},[i("li",[t._v(t._s(t.selectedComponent))]),i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"ion-social-facebook"},[i("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M16.0978 8.04889C16.0978 3.60361 12.4942 0 8.04889 0C3.60361 0 0 3.60361 0 8.04889C0 12.0663 2.94335 15.3962 6.79125 16V10.3755H4.74759V8.04889H6.79125V6.27562C6.79125 4.25837 7.99293 3.1441 9.83144 3.1441C10.7118 3.1441 11.6332 3.3013 11.6332 3.3013V5.28208H10.6182C9.61842 5.28208 9.30653 5.90257 9.30653 6.53972V8.04889H11.5388L11.182 10.3755H9.30653V16C13.1544 15.3962 16.0978 12.0663 16.0978 8.04889Z",fill:"white"}})])])])]),i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"ion-social-instagram-outline"},[i("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M7.89177 1.44257C9.9991 1.44257 10.2485 1.45082 11.0808 1.48924C11.8502 1.52481 12.2681 1.655 12.5463 1.76455C12.8895 1.89264 13.1999 2.09718 13.4547 2.3631C13.7171 2.62139 13.9189 2.93608 14.0452 3.28396C14.1533 3.56593 14.2817 3.98952 14.3168 4.76939C14.3547 5.61308 14.3629 5.86584 14.3629 8.00191C14.3629 10.138 14.3547 10.3907 14.3168 11.2344C14.2817 12.0143 14.1533 12.4379 14.0452 12.7199C13.9138 13.0648 13.7127 13.378 13.4547 13.6394C13.1968 13.9009 12.8878 14.1048 12.5475 14.238C12.2693 14.3475 11.8514 14.4777 11.0821 14.5133C10.25 14.5517 10.0003 14.56 7.89302 14.56C5.78569 14.56 5.53601 14.5517 4.70398 14.5133C3.93461 14.4777 3.51671 14.3475 3.23853 14.238C2.89533 14.1099 2.58488 13.9054 2.33006 13.6394C2.06772 13.3811 1.86593 13.0665 1.73956 12.7186C1.63148 12.4366 1.50304 12.013 1.46796 11.2332C1.43005 10.3895 1.42191 10.1367 1.42191 8.00064C1.42191 5.86457 1.43005 5.61181 1.46796 4.76812C1.50304 3.98825 1.63148 3.56466 1.73956 3.28269C1.86593 2.93481 2.06772 2.62012 2.33006 2.36183C2.58488 2.09591 2.89533 1.89137 3.23853 1.76328C3.51671 1.65373 3.93461 1.52354 4.70398 1.48797C5.53633 1.44955 5.78569 1.4413 7.89302 1.4413L7.89177 1.44257ZM7.89302 0C5.74966 0 5.48088 0.00920854 4.63914 0.0482655C3.79739 0.0873224 3.22412 0.223545 2.7229 0.421053C2.19617 0.622036 1.71897 0.936924 1.32448 1.34381C0.923068 1.74368 0.612416 2.22739 0.414136 2.76129C0.219285 3.26935 0.0858345 3.85171 0.0476162 4.70302C0.00939794 5.55434 0 5.82805 0 8.00064C0 10.1732 0.00908468 10.4457 0.0476162 11.2989C0.0861478 12.1521 0.219285 12.7319 0.414136 13.24C0.612496 13.7737 0.923144 14.2571 1.32448 14.6568C1.71884 15.064 2.19607 15.379 2.7229 15.5799C3.22412 15.7777 3.79865 15.913 4.63851 15.9517C5.47837 15.9905 5.74903 16 7.89239 16C10.0357 16 10.3045 15.9908 11.1463 15.9517C11.988 15.9127 12.5594 15.7777 13.0606 15.5799C13.5851 15.3745 14.0613 15.0603 14.4589 14.6573C14.8564 14.2543 15.1665 13.7716 15.3691 13.24C15.5642 12.7319 15.6977 12.1496 15.7359 11.2982C15.7741 10.4469 15.7835 10.1726 15.7835 8C15.7835 5.82742 15.7744 5.55497 15.7359 4.70175C15.6974 3.84854 15.5642 3.26935 15.3691 2.76129C15.171 2.22757 14.8604 1.74406 14.459 1.34445C14.0646 0.93733 13.5874 0.622222 13.0606 0.421053C12.5594 0.223545 11.9849 0.088275 11.145 0.0495356C10.3052 0.0107962 10.0351 0.00127014 7.89177 0.00127014L7.89302 0Z",fill:"white"}}),i("path",{attrs:{d:"M7.89176 3.89282C7.09027 3.89282 6.30678 4.13374 5.64036 4.5851C4.97395 5.03646 4.45454 5.678 4.14783 6.42859C3.84111 7.17918 3.76086 8.0051 3.91722 8.80192C4.07359 9.59874 4.45954 10.3307 5.02628 10.9051C5.59302 11.4796 6.31508 11.8708 7.10117 12.0293C7.88726 12.1878 8.70206 12.1065 9.44254 11.7956C10.183 11.4847 10.8159 10.9582 11.2612 10.2827C11.7065 9.60716 11.9442 8.81298 11.9442 8.00055C11.9442 7.4611 11.8394 6.92693 11.6358 6.42854C11.4321 5.93015 11.1336 5.4773 10.7573 5.09585C10.381 4.71441 9.93427 4.41184 9.44259 4.20542C8.95091 3.999 8.42394 3.89278 7.89176 3.89282ZM7.89176 10.6679C7.37131 10.6679 6.86255 10.5115 6.42981 10.2184C5.99708 9.92528 5.6598 9.50869 5.46063 9.0213C5.26147 8.5339 5.20936 7.99759 5.31089 7.48017C5.41242 6.96276 5.66304 6.48748 6.03106 6.11444C6.39907 5.74141 6.86794 5.48737 7.37839 5.38445C7.88884 5.28152 8.41793 5.33435 8.89876 5.53623C9.37959 5.73812 9.79056 6.08 10.0797 6.51864C10.3689 6.95729 10.5232 7.47299 10.5232 8.00055C10.5232 8.70797 10.2459 9.38642 9.75246 9.88665C9.25897 10.3869 8.58965 10.6679 7.89176 10.6679Z",fill:"white"}}),i("path",{attrs:{d:"M12.1047 4.69044C12.6277 4.69044 13.0517 4.26065 13.0517 3.73047C13.0517 3.2003 12.6277 2.77051 12.1047 2.77051C11.5817 2.77051 11.1577 3.2003 11.1577 3.73047C11.1577 4.26065 11.5817 4.69044 12.1047 4.69044Z",fill:"black"}})])])])])])])},h=[],m={name:"Navigation",props:{visible:{type:Boolean,default:!1},selectedComponent:{type:String,default:""}}},C=m,g=(i("f90c"),Object(p["a"])(C,f,h,!1,null,null,null)),v=g.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid",on:{wheel:function(e){return e.preventDefault(),t.wheel(e)}}},[i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[i("keep-alive",[i(t.view.component,t._b({directives:[{name:"touch",rawName:"v-touch:swipe.left",value:t.next,expression:"next",arg:"swipe",modifiers:{left:!0}},{name:"touch",rawName:"v-touch:swipe.top",value:t.next,expression:"next",arg:"swipe",modifiers:{top:!0}},{name:"touch",rawName:"v-touch:swipe.right",value:t.prev,expression:"prev",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.bottom",value:t.prev,expression:"prev",arg:"swipe",modifiers:{bottom:!0}},{name:"touch",rawName:"v-touch:swipe",value:t.throwComponent(),expression:"throwComponent()",arg:"swipe"}],tag:"component",on:{filterUpdate:t.filterUpdate,inputSlide:t.openSlide}},"component",t.view.theProps,!1))],1)],1),t._m(0)],1)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mouse"},[i("div",{staticClass:"scroll"})])}],w=(i("7db0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"box-intro"},[i("div",{staticClass:"table-cell"},[i("h1",{staticClass:"box-headline letters rotate-2"},[i("span",{staticClass:"box-words-wrapper"},t._l(t.header,(function(e,n){return i("b",{key:"the-word-"+e,class:n===t.nextWord?"is-visible":""},t._l(e,(function(s,o){return i("i",{key:"the-letter-"+s+o+"-in-word-"+e,class:t.rotateLetters(n)},[i("em",[t._v(t._s(s))])])})),0)})),0)]),i("h5",[t._v("Ваш поиск кончается здесь")])])])}),x=[],y={name:"Main",data:function(){return{header:["профессионально!","эффективно!","красиво!"],nextWord:0}},methods:{rotateWords:function(){var t=this;setTimeout((function(){t.nextWord++,t.nextWord>2&&(t.nextWord=0),t.rotateWords()}),3500)},rotateLetters:function(t){return t===this.nextWord?"in":"out"}},mounted:function(){this.rotateWords()}},j=y,M=(i("ec53"),Object(p["a"])(j,w,x,!1,null,null,null)),k=M.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("top-bar",{attrs:{header:t.pageData.header}}),i("section",{staticClass:"data-container"},[i("div",{staticClass:"half image"},[t.trigger?t._e():i("preloader"),i("transition",{attrs:{name:"component-fade",mode:"out-in"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.trigger,expression:"trigger"}],staticClass:"img-responsive",attrs:{src:"http://placehold.it/1200x800",alt:""},on:{load:function(e){return t.showImage()}}})])],1),i("div",{staticClass:"half"},[i("h3",{staticClass:"uppercase"},[t._v(t._s(t.pageData.subHeader))]),i("h5",[t._v(t._s(t.pageData.lid))]),i("div",{staticClass:"lg-screen"},[i("div",{domProps:{innerHTML:t._s(t.pageData.text)}}),i("ul",{staticClass:"social-ul"},[i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"ion-social-facebook"},[i("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M16.0978 8.04889C16.0978 3.60361 12.4942 0 8.04889 0C3.60361 0 0 3.60361 0 8.04889C0 12.0663 2.94335 15.3962 6.79125 16V10.3755H4.74759V8.04889H6.79125V6.27562C6.79125 4.25837 7.99293 3.1441 9.83144 3.1441C10.7118 3.1441 11.6332 3.3013 11.6332 3.3013V5.28208H10.6182C9.61842 5.28208 9.30653 5.90257 9.30653 6.53972V8.04889H11.5388L11.182 10.3755H9.30653V16C13.1544 15.3962 16.0978 12.0663 16.0978 8.04889Z",fill:"black"}})])])])]),i("li",{staticClass:"box-social"},[i("a",{attrs:{href:"#0"}},[i("i",{staticClass:"ion-social-instagram-outline"},[i("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M7.89177 1.44257C9.9991 1.44257 10.2485 1.45082 11.0808 1.48924C11.8502 1.52481 12.2681 1.655 12.5463 1.76455C12.8895 1.89264 13.1999 2.09718 13.4547 2.3631C13.7171 2.62139 13.9189 2.93608 14.0452 3.28396C14.1533 3.56593 14.2817 3.98952 14.3168 4.76939C14.3547 5.61308 14.3629 5.86584 14.3629 8.00191C14.3629 10.138 14.3547 10.3907 14.3168 11.2344C14.2817 12.0143 14.1533 12.4379 14.0452 12.7199C13.9138 13.0648 13.7127 13.378 13.4547 13.6394C13.1968 13.9009 12.8878 14.1048 12.5475 14.238C12.2693 14.3475 11.8514 14.4777 11.0821 14.5133C10.25 14.5517 10.0003 14.56 7.89302 14.56C5.78569 14.56 5.53601 14.5517 4.70398 14.5133C3.93461 14.4777 3.51671 14.3475 3.23853 14.238C2.89533 14.1099 2.58488 13.9054 2.33006 13.6394C2.06772 13.3811 1.86593 13.0665 1.73956 12.7186C1.63148 12.4366 1.50304 12.013 1.46796 11.2332C1.43005 10.3895 1.42191 10.1367 1.42191 8.00064C1.42191 5.86457 1.43005 5.61181 1.46796 4.76812C1.50304 3.98825 1.63148 3.56466 1.73956 3.28269C1.86593 2.93481 2.06772 2.62012 2.33006 2.36183C2.58488 2.09591 2.89533 1.89137 3.23853 1.76328C3.51671 1.65373 3.93461 1.52354 4.70398 1.48797C5.53633 1.44955 5.78569 1.4413 7.89302 1.4413L7.89177 1.44257ZM7.89302 0C5.74966 0 5.48088 0.00920854 4.63914 0.0482655C3.79739 0.0873224 3.22412 0.223545 2.7229 0.421053C2.19617 0.622036 1.71897 0.936924 1.32448 1.34381C0.923068 1.74368 0.612416 2.22739 0.414136 2.76129C0.219285 3.26935 0.0858345 3.85171 0.0476162 4.70302C0.00939794 5.55434 0 5.82805 0 8.00064C0 10.1732 0.00908468 10.4457 0.0476162 11.2989C0.0861478 12.1521 0.219285 12.7319 0.414136 13.24C0.612496 13.7737 0.923144 14.2571 1.32448 14.6568C1.71884 15.064 2.19607 15.379 2.7229 15.5799C3.22412 15.7777 3.79865 15.913 4.63851 15.9517C5.47837 15.9905 5.74903 16 7.89239 16C10.0357 16 10.3045 15.9908 11.1463 15.9517C11.988 15.9127 12.5594 15.7777 13.0606 15.5799C13.5851 15.3745 14.0613 15.0603 14.4589 14.6573C14.8564 14.2543 15.1665 13.7716 15.3691 13.24C15.5642 12.7319 15.6977 12.1496 15.7359 11.2982C15.7741 10.4469 15.7835 10.1726 15.7835 8C15.7835 5.82742 15.7744 5.55497 15.7359 4.70175C15.6974 3.84854 15.5642 3.26935 15.3691 2.76129C15.171 2.22757 14.8604 1.74406 14.459 1.34445C14.0646 0.93733 13.5874 0.622222 13.0606 0.421053C12.5594 0.223545 11.9849 0.088275 11.145 0.0495356C10.3052 0.0107962 10.0351 0.00127014 7.89177 0.00127014L7.89302 0Z",fill:"black"}}),i("path",{attrs:{d:"M7.89176 3.89282C7.09027 3.89282 6.30678 4.13374 5.64036 4.5851C4.97395 5.03646 4.45454 5.678 4.14783 6.42859C3.84111 7.17918 3.76086 8.0051 3.91722 8.80192C4.07359 9.59874 4.45954 10.3307 5.02628 10.9051C5.59302 11.4796 6.31508 11.8708 7.10117 12.0293C7.88726 12.1878 8.70206 12.1065 9.44254 11.7956C10.183 11.4847 10.8159 10.9582 11.2612 10.2827C11.7065 9.60716 11.9442 8.81298 11.9442 8.00055C11.9442 7.4611 11.8394 6.92693 11.6358 6.42854C11.4321 5.93015 11.1336 5.4773 10.7573 5.09585C10.381 4.71441 9.93427 4.41184 9.44259 4.20542C8.95091 3.999 8.42394 3.89278 7.89176 3.89282ZM7.89176 10.6679C7.37131 10.6679 6.86255 10.5115 6.42981 10.2184C5.99708 9.92528 5.6598 9.50869 5.46063 9.0213C5.26147 8.5339 5.20936 7.99759 5.31089 7.48017C5.41242 6.96276 5.66304 6.48748 6.03106 6.11444C6.39907 5.74141 6.86794 5.48737 7.37839 5.38445C7.88884 5.28152 8.41793 5.33435 8.89876 5.53623C9.37959 5.73812 9.79056 6.08 10.0797 6.51864C10.3689 6.95729 10.5232 7.47299 10.5232 8.00055C10.5232 8.70797 10.2459 9.38642 9.75246 9.88665C9.25897 10.3869 8.58965 10.6679 7.89176 10.6679Z",fill:"black"}}),i("path",{attrs:{d:"M12.1047 4.69044C12.6277 4.69044 13.0517 4.26065 13.0517 3.73047C13.0517 3.2003 12.6277 2.77051 12.1047 2.77051C11.5817 2.77051 11.1577 3.2003 11.1577 3.73047C11.1577 4.26065 11.5817 4.69044 12.1047 4.69044Z",fill:"black"}})])])])])])])])])],1)},S=[],O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top-bar"},[i("h1",{domProps:{innerHTML:t._s(t.header)}})])},A=[],D={name:"TopBar",props:{header:{type:String,default:""}}},E=D,T=(i("117c"),Object(p["a"])(E,O,A,!1,null,null,null)),P=T.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"preloader"},[i("svg",{attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",width:"160px",height:"20px",viewBox:"0 0 128 16","xml:space":"preserve"}},[i("path",{attrs:{fill:"#ffe494",d:"M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"}}),i("g",[i("path",{attrs:{fill:"#ffbf00",d:"M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"}}),i("animateTransform",{attrs:{attributeName:"transform",type:"translate",values:"23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0",calcMode:"discrete",dur:"1430ms",repeatCount:"indefinite"}})],1)])])},$=[],Z={name:"Preloader"},B=Z,N=(i("d30a"),Object(p["a"])(B,H,$,!1,null,null,null)),V=N.exports,F={name:"About",components:{Preloader:V,TopBar:P},data:function(){return{pageData:{header:"Обо мне",subHeader:"Обо мне",lid:"Creative & Lorem ipsum dolor sit amet",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. Tecum optime, deinde etiam cum mediocri amico. Et nemo nimium beatus est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis aditus </p>\n<p>Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? Esse enim quam vellet iniquus iustus poterat inpune. </p>"},trigger:!1}},methods:{showImage:function(){var t=this;this.trigger||setTimeout((function(){t.trigger=!0}),1e3)}}},I=F,W=(i("484c"),Object(p["a"])(I,L,S,!1,null,null,null)),X=W.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("top-bar",{attrs:{header:t.pageData.header}}),i("section",{staticClass:"data-container"},t._l(t.pageData.boxes,(function(t,e){return i("service-box",{key:"service-"+e,attrs:{header:t.header,text:t.text,icon:t.icon}})})),1)],1)},R=[],K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"service-box"},[i("i",{staticClass:"size-50",domProps:{innerHTML:t._s(t.icon)}}),i("h3",[t._v(t._s(t.header))]),i("p",[t._v(t._s(t.text))])])},q=[],J={name:"ServiceBox",props:{header:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""}}},z=J,Y=(i("1a39"),Object(p["a"])(z,K,q,!1,null,null,null)),G=Y.exports,Q={name:"Services",components:{ServiceBox:G,TopBar:P},data:function(){return{pageData:{header:"Услуги",boxes:[{header:"Responsive Design",icon:"1",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae"},{header:"Creative Design",icon:"2",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae"},{header:"user friendly",icon:"3",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae"}]}}}},tt=Q,et=Object(p["a"])(tt,U,R,!1,null,null,null),it=et.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("top-bar",{attrs:{header:t.pageData.header}}),i("slider",{attrs:{slider:t.slider,"filters-list":t.filtersList},on:{filterUpdate:t.filterUpdate,inputSlide:t.transitData}})],1)},st=[],ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"slider"},[i("div",{staticClass:"slider-container"},[i("div",{staticClass:"slider__header"},[i("div",{staticClass:"_header"},[i("filters",{attrs:{"filters-list":t.filtersList},on:{filterUpdate:t.filterUpdate}})],1),i("div",{staticClass:"slider__controls"},[i("div",{staticClass:"previous",on:{click:function(e){return t.increase()}}},[i("i",{staticClass:"left__arrow"})]),i("div",{staticClass:"next",on:{click:function(e){return t.decrease()}}},[i("i",{staticClass:"right__arrow"})])])]),i("div",{staticClass:"slider-carousel"},[i("transition-group",{staticClass:"slider__line",style:{left:t.offsetX+"px"},attrs:{tag:"div",name:"moving-list",mode:"out-in"}},t._l(t.slider,(function(e,n){return i("slide",{key:e.alias,staticClass:"moving-list-item",style:t.screen()>1024?{left:320*n+"px"}:{position:"relative"},attrs:{"slide-data":e},on:{inputSlide:t.transitData}})})),1)],1)])])},rt=[],at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"photography"},[i("div",{staticClass:"portfolio_item",on:{click:function(e){return t.$emit("inputSlide",t.slideData.alias)}}},[i("img",{staticClass:"img-responsive",attrs:{src:t.slideData.src,alt:"image"}}),i("div",{staticClass:"portfolio_item_hover"},[i("div",{staticClass:"portfolio-border clearfix"},[i("div",{staticClass:"item_info"},[i("span",[t._v(t._s(t.slideData.header))]),i("em",[t._v(t._s(t.slideData.tag.join("/")))])])])])])])},lt=[],ct={name:"Slide",props:{slideData:{type:Object}}},pt=ct,ut=(i("c988"),Object(p["a"])(pt,at,lt,!1,null,"a5a010a6",null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"categories-grid wow fadeInLeft"},[i("nav",{staticClass:"categories text-center"},[i("ul",{staticClass:"portfolio_filter"},t._l(t.filtersList,(function(e){return i("li",{key:e.title,on:{click:function(i){return t.$emit("filterUpdate",e)}}},[i("span",{class:e.value?"active":""},[t._v(" "+t._s(e.title)+" ")])])})),0)])])},ht=[],mt={name:"Filters",props:{filtersList:{type:Array,default:function(){return[]}}}},Ct=mt,gt=(i("cbf7"),Object(p["a"])(Ct,ft,ht,!1,null,null,null)),vt=gt.exports,bt={name:"Slider",components:{Filters:vt,Slide:dt},props:{slider:{type:Array},filtersList:{type:Array}},data:function(){return{offsetX:0}},methods:{screen:function(){return window.innerWidth},transitData:function(t){this.$emit("inputSlide",t)},filterUpdate:function(t){this.offsetX=0,this.$emit("filterUpdate",t)},increase:function(){this.screen()<320*this.slider.length&&(this.screen()>1024?(this.offsetX+=320,this.offsetX>0&&(this.offsetX=this.screen()-320*this.slider.length)):(this.offsetX+=this.screen(),this.offsetX>0&&(this.offsetX=(1-this.slider.length)*this.screen())))},decrease:function(){this.screen()>1024?(this.offsetX-=320,this.offsetX<this.screen()-320*this.slider.length&&(this.offsetX=0)):(this.offsetX-=this.screen(),this.offsetX<(1-this.slider.length)*this.screen()&&(this.offsetX=0))}}},_t=bt,wt=(i("1a5d"),Object(p["a"])(_t,ot,rt,!1,null,"f8b5af0c",null)),xt=wt.exports,yt={name:"portfolio",components:{Slider:xt,TopBar:P},props:{slider:{type:Array},filtersList:{type:Array}},data:function(){return{pageData:{header:"Портфолио"}}},methods:{transitData:function(t){this.$emit("inputSlide",t)},filterUpdate:function(t){this.$emit("filterUpdate",t)}}},jt=yt,Mt=(i("a0a3"),Object(p["a"])(jt,nt,st,!1,null,null,null)),kt=Mt.exports,Lt={name:"Home",data:function(){return{count:0,view:{component:"Main",theProps:{}},selectedFilter:{title:"All",value:!0},allViews:[{component:"Main",theProps:{}},{component:"About",theProps:{}},{component:"Services",theProps:{}},{component:"Portfolio",theProps:{filtersList:[],slider:[]}}],filtersList:[{title:"All",value:!0},{title:"Web design",value:!1},{title:"Logo",value:!1},{title:"Design",value:!1},{title:"Advertising",value:!1}],slider:[{header:"LingoBros Private French Lesoon`s Website Design",tag:["Web design"],src:"/slider/LingoBros_Private_French_Lesoon_s_Website_Design.png",alias:"first"},{header:"Eco Shop Social Media Design",tag:["Design","Advertising"],src:"/slider/Eco_Shop_Social_Media_Design.png",alias:"2"},{header:"Beeline Mobile Operator",tag:["tag"],src:"/slider/Beeline_Mobile_Operator.jpg",alias:"3"},{header:"K Service Logo Design",tag:["Logo"],src:"/slider/K_Service_Logo_Design.jpg",alias:"4"},{header:"Airsoft Event Poster",tag:["Advertising"],src:"/slider/Airsoft_Event_Poster.jpg",alias:"5"},{header:"Cotti Family Tea",tag:["Design","Advertising"],src:"/slider/Cotti_Family_Tea.png",alias:"6"},{header:"Hand Drawn Illustartions for Marry Me dress shop",tag:["Advertising","Design"],src:"/slider/Hand_Drawn_Illustartions_for_Marry_Me_dress_shop.jpg",alias:"7"},{header:"HELTER SKELTER Foods",tag:["Advertising"],src:"/slider/HELTER_SKELTER_Foods.jpg",alias:"8"},{header:"Nihilist",tag:["Advertising"],src:"/slider/Nihilist.png",alias:"9"}]}},components:{Main:k,About:X,Services:it,Portfolio:kt},computed:{filteredSlider:function(){var t=this;return"All"===this.selectedFilter.title?this.slider:this.slider.filter((function(e){return e.tag[0]===t.selectedFilter.title}))}},methods:{throwComponent:function(){this.$emit("currentComponent",this.view.component)},openSlide:function(t){this.$emit("openSlide",t)},updateSlider:function(){"Portfolio"===this.view.component&&(this.view.theProps={slider:this.filteredSlider,filtersList:this.filtersList})},filterUpdate:function(t){var e=this;this.filtersList.find((function(t){return t.title===e.selectedFilter.title})).value=!1,this.filtersList.find((function(e){return e.title===t.title})).value=!0,this.selectedFilter=t,this.updateSlider()},wheel:function(t){t.deltaY<0?(this.count--,this.count<0&&(this.count=0),this.view=this.allViews[this.count]):(this.count===this.allViews.length-1?this.count=0:this.count++,this.view=this.allViews[this.count],this.updateSlider())},next:function(){this.count++,this.count>this.allViews.length-1&&(this.count=0),this.view=this.allViews[this.count],this.updateSlider()},prev:function(){this.count--,this.count<0&&(this.count=this.allViews.length-1),this.view=this.allViews[this.count],this.updateSlider()}}},St=Lt,Ot=(i("cccb"),Object(p["a"])(St,b,_,!1,null,null,null)),At=Ot.exports,Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal"},[i("div",{staticClass:"modal-container"},[t.data?i("a",{staticClass:"modal-title__link",attrs:{href:t.data.link,target:"_blank"}},[i("div",{staticClass:"modal-title",domProps:{innerHTML:t._s(t.data.title)}})]):t._e(),i("div",{staticClass:"modal-close-button",on:{click:function(e){return t.$emit("closeModal")}}}),i("transition",{attrs:{name:"list",mode:"out-in"}},[t.data.value?i("div",{key:"content",staticClass:"modal-content"},t._l(t.data.value,(function(t){return i("div",{key:t,staticClass:"modal-items"},[i("img",{attrs:{src:t,alt:t}})])})),0):i("div",{key:"preloader",staticClass:"preloader"},[i("preloader")],1)])],1)])},Et=[],Tt={name:"Modal",components:{Preloader:V},props:{data:{type:Object,default:function(){return{}}}}},Pt=Tt,Ht=(i("261d"),i("016f"),Object(p["a"])(Pt,Dt,Et,!1,null,"9383fa2e",null)),$t=Ht.exports,Zt={components:{Modal:$t,Home:At,Navigation:v,Header:d},data:function(){return{isMenuOpen:!1,modal:!1,currentComponentName:"Main",showInModal:{},portfolioData:[{alias:"first",title:"LingoBros Private French Lesson`s Website Design",link:"https://lingobros.com/",value:["/portfolio/french/LingoBros1.png","/portfolio/french/LingoBros2.png","/portfolio/french/LingoBros3.png"]},{alias:"2",title:"Eco Shop Social Media Design",link:"",value:["/portfolio/indiCafe/indi1.png","/portfolio/indiCafe/indi2.png","/portfolio/indiCafe/indi3.png"]},{alias:"3",title:"Beeline Mobile Operator",link:"",value:["/portfolio/beeline/beeline1.jpg","/portfolio/beeline/beeline2.jpg","/portfolio/beeline/beeline3.jpg","/portfolio/beeline/beeline4.png","/portfolio/beeline/beeline5.jpg","/portfolio/beeline/beeline6.png","/portfolio/beeline/beeline8.jpg","/portfolio/beeline/beeline9.png","/portfolio/beeline/beeline10.png","/portfolio/beeline/beeline11.png","/portfolio/beeline/beeline12.png","/portfolio/beeline/beeline13.png","/portfolio/beeline/beeline14.jpg"]},{alias:"4",title:"K Service Logo Design",link:"",value:["/portfolio/k/k1.jpg","/portfolio/k/k2.jpg","/portfolio/k/k3.jpg","/portfolio/k/k4.jpg","/portfolio/k/k5.jpg","/portfolio/k/k6.jpg"]},{alias:"5",title:"Airsoft Event Poster",link:"",value:["/portfolio/storm/storm1.jpg","/portfolio/storm/storm2.png","/portfolio/storm/storm3.jpg","/portfolio/storm/storm4.jpg","/portfolio/storm/storm5.jpg"]},{alias:"6",title:"Cotti Family Tea",link:"",value:["/portfolio/cotti/cotti1.png","/portfolio/cotti/cotti2.png","/portfolio/cotti/cotti3.png","/portfolio/cotti/cotti4.png","/portfolio/cotti/cotti5.png","/portfolio/cotti/cotti6.png"]},{alias:"7",title:"Hand Drawn Illustartions for Marry Me dress shop",link:"",value:["/portfolio/marryme/marry1.jpg","/portfolio/marryme/marry2.jpg","/portfolio/marryme/marry3.jpg","/portfolio/marryme/marry4.jpg","/portfolio/marryme/marry5.jpg","/portfolio/marryme/marry6.jpg","/portfolio/marryme/marry7.jpg","/portfolio/marryme/marry8.jpg","/portfolio/marryme/marry9.jpg"]},{alias:"8",title:"HELTER-SKELTER Foods",link:"",value:["/portfolio/helter/helter1.jpg","/portfolio/helter/helter2.jpg","/portfolio/helter/helter3.jpg","/portfolio/helter/helter4.jpg","/portfolio/helter/helter5.jpg","/portfolio/helter/helter6.jpg","/portfolio/helter/helter7.jpg","/portfolio/helter/helter8.jpg"]},{alias:"9",title:"Nihilist",link:"",value:["/portfolio/nihilist/nih1.png","/portfolio/nihilist/nih2.png","/portfolio/nihilist/nih3.png","/portfolio/nihilist/nih4.png","/portfolio/nihilist/nih5.png","/portfolio/nihilist/nih6.png","/portfolio/nihilist/nih7.png","/portfolio/nihilist/nih8.png","/portfolio/nihilist/nih9.png","/portfolio/nihilist/nih10.png"]}]}},methods:{forNavigationComponentName:function(t){this.currentComponentName=t},openSlide:function(t){var e=this;this.modal=!0,this.showInModal=[],setTimeout((function(){e.showInModal=e.portfolioData.filter((function(e){return e.alias===t}))[0]}),3e3)},menuOpen:function(){this.isMenuOpen=!this.isMenuOpen}}},Bt=Zt,Nt=(i("034f"),Object(p["a"])(Bt,s,o,!1,null,null,null)),Vt=Nt.exports,Ft=i("2f62"),It=i("0086"),Wt=i.n(It);n["a"].use(Ft["a"]),n["a"].use(Wt.a,{disableClick:!1,touchClass:"",tapTolerance:10,touchHoldTolerance:400,swipeTolerance:30,longTapTimeInterval:400,namespace:"touch"}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Vt)}}).$mount("#app")},"5ced":function(t,e,i){},"5f90":function(t,e,i){},6338:function(t,e,i){},"753c":function(t,e,i){t.exports=i.p+"img/face.00f82dac.jpg"},"85ec":function(t,e,i){},"8d32":function(t,e,i){},a0a3:function(t,e,i){"use strict";i("5f90")},a651:function(t,e,i){},aae4:function(t,e,i){},ada4:function(t,e,i){},b70e:function(t,e,i){},c988:function(t,e,i){"use strict";i("ada4")},cbf7:function(t,e,i){"use strict";i("022d")},cccb:function(t,e,i){"use strict";i("5ced")},d30a:function(t,e,i){"use strict";i("28f8")},d3d1:function(t,e,i){},d42d:function(t,e,i){},ec53:function(t,e,i){"use strict";i("0547")},f90c:function(t,e,i){"use strict";i("d42d")}});
//# sourceMappingURL=app.fc389b7e.js.map