this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-category"]=function(t){function e(e){for(var r,i,u=e[0],s=e[1],a=e[2],b=0,g=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&g.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);g.length;)g.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={29:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return c.push([810,0]),n()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},106:function(t,e){},107:function(t,e){},108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},123:function(t,e,n){"use strict";var r=n(0),o=n(1),c=n(4);n(2);e.a=function(t){var e=t.value,n=t.setAttributes;return Object(r.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return n({orderby:t})}})}},126:function(t,e){},13:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),o=n(6),c=Object(r.createElement)("img",{src:o.T+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},19:function(t,e){!function(){t.exports=this.wp.apiFetch}()},20:function(t,e){!function(){t.exports=this.wp.url}()},21:function(t,e){!function(){t.exports=this.wp.data}()},22:function(t,e){!function(){t.exports=this.wp.blockEditor}()},23:function(t,e){!function(){t.exports=this.wp.blocks}()},26:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},27:function(t,e){!function(){t.exports=this.moment}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},31:function(t,e){!function(){t.exports=this.wp.primitives}()},34:function(t,e){!function(){t.exports=this.wp.dataControls}()},35:function(t,e,n){"use strict";n.d(e,"h",(function(){return g})),n.d(e,"e",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"f",(function(){return O})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return j})),n.d(e,"g",(function(){return w})),n.d(e,"a",(function(){return m}));var r=n(5),o=n.n(r),c=n(20),i=n(19),u=n.n(i),s=n(7),a=n(6);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,l=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,u=void 0===i?[]:i,s={per_page:a.u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b(b({},s),u))];return a.u&&n.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:n})),l}({selected:n,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return b(b({},t),{},{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return u()({path:"/wc/store/products/".concat(t)})},d=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},O=function(t){var e=t.selected,n=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:a.w?100:0,orderby:a.w?"count":"name",order:a.w?"desc":"asc",search:r})];return a.w&&n.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:n})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(n.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},h=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},j=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},w=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},m=function(t,e){if(!t.title.raw)return t.slug;var n=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(n?"":" - ".concat(t.slug))}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var r=n(28),o=n.n(r),c=n(13),i=n.n(c),u=n(1),s=function(){var t=o()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return n=t.sent,t.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),a=function(t){if(t.data&&"rest_invalid_param"===t.code){var e=Object.values(t.data.params);if(e[0])return e[0]}return(null==t?void 0:t.message)||Object(u.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},4:function(t,e){!function(){t.exports=this.wp.components}()},42:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},43:function(t,e,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(42));e.a=function(t){var e,n,i,u=t.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(e=u).message,i=e.type,n?"general"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):"api"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):n:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},48:function(t,e){!function(){t.exports=this.wp.keycodes}()},54:function(t,e){!function(){t.exports=this.wp.hooks}()},56:function(t,e,n){"use strict";var r=n(5),o=n.n(r),c=n(25),i=n.n(c),u=n(0);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=function(t){var e=t.srcElement,n=t.size,r=void 0===n?24:n,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)?Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({width:r,height:r},c)):null}},6:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"I",(function(){return c})),n.d(e,"P",(function(){return i})),n.d(e,"y",(function(){return u})),n.d(e,"A",(function(){return s})),n.d(e,"m",(function(){return a})),n.d(e,"z",(function(){return l})),n.d(e,"C",(function(){return b})),n.d(e,"o",(function(){return g})),n.d(e,"B",(function(){return p})),n.d(e,"n",(function(){return d})),n.d(e,"E",(function(){return f})),n.d(e,"u",(function(){return O})),n.d(e,"w",(function(){return h})),n.d(e,"r",(function(){return j})),n.d(e,"s",(function(){return w})),n.d(e,"t",(function(){return m})),n.d(e,"k",(function(){return y})),n.d(e,"L",(function(){return v})),n.d(e,"Q",(function(){return _})),n.d(e,"q",(function(){return k})),n.d(e,"p",(function(){return E})),n.d(e,"H",(function(){return S})),n.d(e,"c",(function(){return P})),n.d(e,"v",(function(){return C})),n.d(e,"J",(function(){return x})),n.d(e,"T",(function(){return B})),n.d(e,"U",(function(){return D})),n.d(e,"K",(function(){return R})),n.d(e,"a",(function(){return T})),n.d(e,"N",(function(){return M})),n.d(e,"b",(function(){return N})),n.d(e,"M",(function(){return I})),n.d(e,"D",(function(){return L})),n.d(e,"i",(function(){return V})),n.d(e,"O",(function(){return $})),n.d(e,"h",(function(){return q})),n.d(e,"j",(function(){return G})),n.d(e,"G",(function(){return Q})),n.d(e,"F",(function(){return F})),n.d(e,"S",(function(){return U})),n.d(e,"R",(function(){return W})),n.d(e,"d",(function(){return J})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return X})),n.d(e,"x",(function(){return Z})),n.d(e,"X",(function(){return et})),n.d(e,"Y",(function(){return nt})),n.d(e,"V",(function(){return rt})),n.d(e,"W",(function(){return ot}));var r=n(3),o=Object(r.getSetting)("currentUserIsAdmin",!1),c=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),u=Object(r.getSetting)("max_columns",6),s=Object(r.getSetting)("min_columns",1),a=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),b=Object(r.getSetting)("min_rows",1),g=Object(r.getSetting)("default_rows",3),p=Object(r.getSetting)("min_height",500),d=Object(r.getSetting)("default_height",500),f=Object(r.getSetting)("placeholderImgSrc",""),O=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),h=Object(r.getSetting)("limitTags"),j=Object(r.getSetting)("hasProducts",!0),w=Object(r.getSetting)("hasTags",!0),m=Object(r.getSetting)("homeUrl",""),y=Object(r.getSetting)("couponsEnabled",!0),v=Object(r.getSetting)("shippingEnabled",!0),_=Object(r.getSetting)("taxesEnabled",!0),k=(Object(r.getSetting)("displayItemizedTaxes",!1),Object(r.getSetting)("hasDarkEditorStyleSupport",!1)),E=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),S=Object(r.getSetting)("productCount",0),P=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),x=Object(r.getSetting)("shippingCostRequiresAddress",!1),A=(Object(r.getSetting)("isShippingCostHidden",!1),Object(r.getSetting)("woocommerceBlocksPhase",1)),B=Object(r.getSetting)("wcBlocksAssetUrl",""),D=Object(r.getSetting)("wcBlocksBuildUrl",""),R=Object(r.getSetting)("shippingCountries",{}),T=Object(r.getSetting)("allowedCountries",{}),M=Object(r.getSetting)("shippingStates",{}),N=Object(r.getSetting)("allowedStates",{}),I=Object(r.getSetting)("shippingMethodsExist",!1),L=Object(r.getSetting)("paymentGatewaySortOrder",[]),V=Object(r.getSetting)("checkoutShowLoginReminder",!0),z={id:0,title:"",permalink:""},H=Object(r.getSetting)("storePages",{myaccount:z,shop:z,cart:z,checkout:z,privacy:z,terms:z}),$=H.shop.permalink,q=H.checkout.id,G=H.checkout.permalink,Q=H.privacy.permalink,F=H.privacy.title,U=H.terms.permalink,W=H.terms.title,J=H.cart.id,Y=H.cart.permalink,K=Object(r.getSetting)("checkoutAllowsGuest",!1),X=Object(r.getSetting)("checkoutAllowsSignup",!1),Z=H.myaccount.permalink?H.myaccount.permalink:Object(r.getSetting)("loginUrl","/wp-login.php"),tt=n(23),et=function(t,e){if(A>2)return Object(tt.registerBlockType)(t,e)},nt=function(t,e){if(A>1)return Object(tt.registerBlockType)(t,e)},rt=function(){return A>2},ot=function(){return A>1}},65:function(t,e){!function(){t.exports=this.wp.serverSideRender}()},69:function(t,e){!function(){t.exports=this.wp.dom}()},7:function(t,e){!function(){t.exports=this.lodash}()},74:function(t,e){!function(){t.exports=this.wp.deprecated}()},78:function(t,e){!function(){t.exports=this.ReactDOM}()},79:function(t,e,n){"use strict";var r=n(5),o=n.n(r),c=n(0),i=n(1),u=(n(2),n(4));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.onChange,n=t.settings,r=n.button,o=n.price,s=n.rating,l=n.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(a(a({},n),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(a(a({},n),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(a(a({},n),{},{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:r?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return e(a(a({},n),{},{button:!r}))}}))}},80:function(t,e,n){"use strict";var r=n(0),o=n(1),c=n(7),i=(n(2),n(4)),u=n(6);e.a=function(t){var e=t.columns,n=t.rows,s=t.setAttributes,a=t.alignButtons;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.A,u.y);s({columns:Number.isNaN(e)?"":e})},min:u.A,max:u.y}),Object(r.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:n,onChange:function(t){var e=Object(c.clamp)(t,u.C,u.z);s({rows:Number.isNaN(e)?"":e})},min:u.C,max:u.z}),Object(r.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:a?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return s({alignButtons:!a})}}))}},810:function(t,e,n){t.exports=n(916)},811:function(t,e){},812:function(t,e,n){"use strict";var r=n(0),o=n(31),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"}));e.a=c},83:function(t,e){!function(){t.exports=this.wp.viewport}()},84:function(t,e){!function(){t.exports=this.wp.date}()},86:function(t,e,n){"use strict";var r=n(11),o=n.n(r),c=n(0),i=n(1),u=n(7),s=(n(2),n(45)),a=n(4),l=n(28),b=n.n(l),g=n(15),p=n.n(g),d=n(16),f=n.n(d),O=n(12),h=n.n(O),j=n(17),w=n.n(j),m=n(18),y=n.n(m),v=n(10),_=n.n(v),k=n(13),E=n.n(k),S=n(141),P=n(35),C=n(37);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var o=_()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}var A=Object(S.a)((function(t){return function(e){w()(r,e);var n=x(r);function r(){var t;return p()(this,r),(t=n.apply(this,arguments)).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(h()(t)),t}return f()(r,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(P.c)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch(function(){var e=b()(E.a.mark((function e(n){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(n);case 2:r=e.sent,t.setState({categories:null,loading:!1,error:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state,n=e.error,r=e.loading,i=e.categories;return Object(c.createElement)(t,o()({},this.props,{error:n,isLoading:r,categories:i}))}}]),r}(c.Component)}),"withCategories"),B=n(43),D=(n(126),function(t){var e=t.categories,n=t.error,r=t.isLoading,l=t.onChange,b=t.onOperatorChange,g=t.operator,p=t.selected,d=t.isSingle,f=t.showReviewCount,O={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(t){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",t,"woo-gutenberg-products-block"),t)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return n?Object(c.createElement)(B.a,{error:n}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.a,{className:"woocommerce-product-categories",list:e,isLoading:r,selected:p.map((function(t){return Object(u.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,n=t.search,r=t.depth,u=void 0===r?0:r,a=["woocommerce-product-categories__item"];n.length&&a.push("is-searching"),0===u&&0!==e.parent&&a.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name,b=f?Object(i.sprintf)(Object(i._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",e.review_count,"woo-gutenberg-products-block"),l,e.review_count):Object(i.sprintf)(Object(i._n)("%1$s, has %2$d product","%1$s, has %2$d products",e.count,"woo-gutenberg-products-block"),l,e.count),g=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",e.review_count,"woo-gutenberg-products-block"),e.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",e.count,"woo-gutenberg-products-block"),e.count);return Object(c.createElement)(s.b,o()({className:a.join(" ")},t,{showCount:!0,countLabel:g,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:d}),!!b&&Object(c.createElement)("div",{className:p.length<2?"screen-reader-text":""},Object(c.createElement)(a.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:g,onChange:b,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});D.defaultProps={operator:"any",isSingle:!1};e.a=A(D)},9:function(t,e){!function(){t.exports=this.React}()},916:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),c=n(0),i=n(1),u=n(23),s=n(7),a=n(56),l=n(812),b=(n(811),n(15)),g=n.n(b),p=n(16),d=n.n(p),f=n(12),O=n.n(f),h=n(17),j=n.n(h),w=n(18),m=n.n(w),y=n(10),v=n.n(y),_=n(22),k=n(65),E=n.n(k),S=n(4),P=(n(2),n(79)),C=n(80),x=n(86),A=n(123),B=n(174);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var M=function(t){j()(n,t);var e=T(n);function n(){var t;g()(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return t=e.call.apply(e,[this].concat(c)),o()(O()(t),"state",{changedAttributes:{},isEditing:!1}),o()(O()(t),"startEditing",(function(){t.setState({isEditing:!0,changedAttributes:{}})})),o()(O()(t),"stopEditing",(function(){t.setState({isEditing:!1,changedAttributes:{}})})),o()(O()(t),"setChangedAttributes",(function(e){t.setState((function(t){return{changedAttributes:R(R({},t.changedAttributes),e)}}))})),o()(O()(t),"save",(function(){var e=t.state.changedAttributes;(0,t.props.setAttributes)(e),t.stopEditing()})),t}return d()(n,[{key:"componentDidMount",value:function(){this.props.attributes.categories.length||this.setState({isEditing:!0})}},{key:"getInspectorControls",value:function(){var t=this,e=this.props,n=e.attributes,r=e.setAttributes,o=this.state.isEditing,u=n.columns,s=n.catOperator,a=n.contentVisibility,l=n.orderby,b=n.rows,g=n.alignButtons;return Object(c.createElement)(_.InspectorControls,{key:"inspector"},Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Product Category","woo-gutenberg-products-block"),initialOpen:!n.categories.length&&!o},Object(c.createElement)(x.a,{selected:n.categories,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.map((function(t){return t.id})),o={categories:n};r(o),t.setChangedAttributes(o)},operator:s,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any",n={catOperator:e};r(n),t.setChangedAttributes(n)}})),Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(C.a,{columns:u,rows:b,alignButtons:g,setAttributes:r})),Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(P.a,{settings:a,onChange:function(t){return r({contentVisibility:t})}})),Object(c.createElement)(S.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(A.a,{setAttributes:r,value:l})))}},{key:"renderEditMode",value:function(){var t=this,e=this.props,n=e.attributes,r=e.debouncedSpeak,o=this.state.changedAttributes,u=R(R({},n),o);return Object(c.createElement)(S.Placeholder,{icon:Object(c.createElement)(a.a,{srcElement:l.a}),label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),Object(c.createElement)("div",{className:"wc-block-products-category__selection"},Object(c.createElement)(x.a,{selected:u.categories,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.map((function(t){return t.id}));t.setChangedAttributes({categories:n})},operator:u.catOperator,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t.setChangedAttributes({catOperator:e})}}),Object(c.createElement)(S.Button,{isPrimary:!0,onClick:function(){t.save(),r(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Done","woo-gutenberg-products-block")),Object(c.createElement)(S.Button,{className:"wc-block-products-category__cancel-button",isTertiary:!0,onClick:function(){t.stopEditing(),r(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var t=this.props,e=t.attributes,n=t.name,r=e.categories.length;return Object(c.createElement)(S.Disabled,null,r?Object(c.createElement)(E.a,{block:n,attributes:e,EmptyResponsePlaceholder:function(){return Object(c.createElement)(S.Placeholder,{icon:Object(c.createElement)(a.a,{srcElement:l.a}),label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("No products were found that matched your selection.","woo-gutenberg-products-block"))}}):Object(i.__)("Select at least one category to display its products.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var t=this,e=this.state.isEditing;return this.props.attributes.isPreview?B.a:Object(c.createElement)(c.Fragment,null,Object(c.createElement)(_.BlockControls,null,Object(c.createElement)(S.ToolbarGroup,{controls:[{icon:"edit",title:Object(i.__)("Edit"),onClick:function(){return e?t.stopEditing():t.startEditing()},isActive:e}]})),this.getInspectorControls(),e?this.renderEditMode():this.renderViewMode())}}]),n}(c.Component),N=Object(S.withSpokenMessages)(M),I=n(95);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Object(u.registerBlockType)("woocommerce/product-category",{title:Object(i.__)("Products by Category","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(a.a,{srcElement:l.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:V(V({},I.a),{},{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),transforms:{from:[{type:"block",blocks:Object(s.without)(I.b,"woocommerce/product-category"),transform:function(t){return Object(u.createBlock)("woocommerce/product-category",V(V({},t),{},{editMode:!1}))}}]},edit:function(t){return Object(c.createElement)(N,t)},save:function(){return null}})},95:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var r=n(6),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:r.m},rows:{type:"number",default:r.o},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}}});