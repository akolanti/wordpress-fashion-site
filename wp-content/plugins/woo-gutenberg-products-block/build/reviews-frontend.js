!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=280)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},11:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},112:function(e,t,r){"use strict";var n=r(6),o=r(0),c=r(8);var i=function(e,t){return function(r){var n=e(r),o=r.displayName,i=void 0===o?r.name||"Component":o;return n.displayName="".concat(Object(c.upperFirst)(Object(c.camelCase)(t)),"(").concat(i,")"),n}},a=new WeakMap;function s(e,t){return Object(o.useMemo)((function(){var r=function(e){var t=a.get(e)||0;return a.set(e,t+1),t}(e);return t?"".concat(t,"-").concat(r):r}),[e])}t.a=i((function(e){return function(t){var r=s(e);return Object(o.createElement)(e,Object(n.a)({},t,{instanceId:r}))}}),"withInstanceId")},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(11),o=r.n(n),c=r(7),i=r.n(c),a=r(0),s=r(44);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=[".wp-block-woocommerce-cart"],d=function(e){var t=e.Block,r=e.containers,n=e.getProps,c=void 0===n?function(){}:n,i=e.getErrorBoundaryProps,l=void 0===i?function(){}:i;0!==r.length&&Array.prototype.forEach.call(r,(function(e,r){var n=c(e,r),i=l(e,r),p=u(u({},e.dataset),n.attributes);e.classList.remove("is-loading"),Object(a.render)(React.createElement(s.a,i,React.createElement(a.Suspense,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(t,o()({},n,{attributes:p})))),e)}))},f=function(e){var t=e.Block,r=e.getProps,n=e.getErrorBoundaryProps,o=e.selector,c=e.wrappers,i=document.body.querySelectorAll(o);c.length>0&&Array.prototype.filter.call(i,(function(e){return!function(e,t){return Array.prototype.some.call(t,(function(t){return t.contains(e)&&!t.isSameNode(e)}))}(e,c)})),d({Block:t,containers:i,getProps:r,getErrorBoundaryProps:n})},v=function(e){var t=document.body.querySelectorAll(p.join(","));f(u(u({},e),{},{wrappers:t})),Array.prototype.forEach.call(t,(function(t){t.addEventListener("wc-blocks_render_blocks_frontend",(function(){var r,n,o,c,i,a;r=u(u({},e),{},{wrapper:t}),n=r.Block,o=r.getProps,c=r.getErrorBoundaryProps,i=r.selector,a=r.wrapper.querySelectorAll(i),d({Block:n,containers:a,getProps:o,getErrorBoundaryProps:c})}))}))}},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l}));var n=r(51),o=r.n(n),c=r(26),i=r.n(c),a=r(1),s=function(){var e=o()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},145:function(e,t,r){"use strict";r(4);var n=r(5),o=r.n(n),c=r(31),i=r(112);r(167);t.a=Object(i.a)((function(e){var t=e.className,r=e.instanceId,n=e.defaultValue,i=e.label,a=e.onChange,s=e.options,l=e.screenReaderLabel,u=e.readOnly,p=e.value,d="wc-block-components-sort-select__select-".concat(r);return React.createElement("div",{className:o()("wc-block-sort-select","wc-block-components-sort-select",t)},React.createElement(c.a,{label:i,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:d}}),React.createElement("select",{id:d,className:"wc-block-sort-select__select wc-block-components-sort-select__select",defaultValue:n,onChange:a,readOnly:u,value:p},s.map((function(e){return React.createElement("option",{key:e.key,value:e.key},e.label)}))))}))},167:function(e,t){},2:function(e,t){!function(){e.exports=this.React}()},20:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},207:function(e,t,r){function n(e){for(var t,r,n=[],o=0;o<rowCut.length;o++)(t=rowCut.substring(o).match(/^&[a-z0-9#]+;/))?(r=t[0],n.push(r),o+=r.length-1):n.push(rowCut[o]);return n}e.exports&&(e.exports=function(e,t){for(var r,o,c,i,a,s=(t=t||{}).limit||100,l=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,p=t.suffix||"...",d=t.moreLink||"",f=t.moreText||"»",v=t.preserveWhiteSpace||!1,b=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),g=0,m=[],w=!1,h=0;h<b.length;h++)if(r=b[h],rowCut=v?r:r.replace(/[ ]+/g," "),r.length){var y=n(rowCut);if("<"!==r[0])if(g>=s)r="";else if(g+y.length>=s){if(" "===y[(o=s-g)-1])for(;o&&" "===y[(o-=1)-1];);else c=y.slice(o).indexOf(" "),u||(-1!==c?o+=c:o=r.length);r=y.slice(0,o).join("")+p,d&&(r+='<a href="'+d+'" style="display:inline">'+f+"</a>"),g=s,w=!0}else g+=y.length;else if(l){if(g>=s)if(a=(i=r.match(/[a-zA-Z]+/))?i[0]:"")if("</"!==r.substring(0,2))m.push(a),r="";else{for(;m[m.length-1]!==a&&m.length;)m.pop();m.length&&(r=""),m.pop()}else r=""}else r="";b[h]=r}return{html:b.join("\n").replace(/\n/g,""),more:w}})},21:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},22:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},220:function(e,t){},221:function(e,t){},222:function(e,t){},223:function(e,t){},25:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},280:function(e,t,r){"use strict";r.r(t);var n=r(119),o=r(32),c=r.n(o),i=r(33),a=r.n(i),s=r(22),l=r.n(s),u=r(34),p=r.n(u),d=r(35),f=r.n(d),v=r(25),b=r.n(v),g=r(1),m=r(36),w=r(2),h=r.n(w),y=(r(4),r(59)),_=r.n(y),O=r(5),R=r.n(O),k=r(9),j=function(e){return _()({path:"/wc/store/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},x=r(31),E=(r(223),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return React.createElement("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},React.createElement("button",{className:"wp-block-button__link",onClick:t},React.createElement(x.a,{label:r,screenReaderLabel:n})))});E.defaultProps={label:Object(g.__)("Load more","woo-gutenberg-products-block")};var S=E,P=r(145),C=(r(220),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return React.createElement(P.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",defaultValue:t,label:Object(g.__)("Order by","woo-gutenberg-products-block"),onChange:r,options:[{key:"most-recent",label:Object(g.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(g.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(g.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:n,screenReaderLabel:Object(g.__)("Order reviews by","woo-gutenberg-products-block"),value:o})}),T=r(7),M=r.n(T),N=r(207),L=r.n(N),A=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=L()(e,{suffix:r,limit:t});return n.html},D=function(e,t,r,n){var o=I(e,t,r);return A(e,o-n.length,n)},I=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=A(e,n.middle),n=B(n,t.clientHeight,r);return n.middle},B=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f()(this,r)}}var U=function(e){p()(r,e);var t=H(r);function r(e){var n;return c()(this,r),(n=t.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},n.reviewSummary=Object(w.createRef)(),n.reviewContent=Object(w.createRef)(),n.getButton=n.getButton.bind(l()(n)),n.onClick=n.onClick.bind(l()(n)),n}return a()(r,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:D(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,c=e?n:o;if(c)return h.a.createElement("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,c=t.isExpanded;return r?!1===o?h.a.createElement("div",{className:e},h.a.createElement("div",{ref:this.reviewContent},r)):h.a.createElement("div",{className:e},(!c||null===o)&&h.a.createElement("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:n}}),(c||null===o)&&h.a.createElement("div",{ref:this.reviewContent,"aria-hidden":!c},r),this.getButton()):null}}]),r}(w.Component);U.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(g.__)("Read more","woo-gutenberg-products-block"),lessText:Object(g.__)("Read less","woo-gutenberg-products-block"),className:"read-more-content"};var F=U;r(222);var V=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,c=t.showReviewDate,i=t.showReviewerName,a=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,p=n.rating,d=!Object.keys(n).length>0,f=Number.isFinite(p)&&s;return React.createElement("li",{className:R()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":d}),"aria-hidden":d},(u||c||i||a||f)&&React.createElement("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},a&&function(e,t,r){var n,o;return r||!e?React.createElement("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image",width:"48",height:"48"}):React.createElement("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?React.createElement("img",{"aria-hidden":"true",alt:(null===(n=e.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(o=e.product_image)||void 0===o?void 0:o.thumbnail)||""}):React.createElement("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x"}),e.verified&&React.createElement("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(g.__)("Verified buyer","woo-gutenberg-products-block")},Object(g.__)("Verified buyer","woo-gutenberg-products-block")))}(n,o,d),(u||i||f||c)&&React.createElement("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},f&&function(e){var t=e.rating,r={width:t/5*100+"%"},n=Object(g.sprintf)(Object(g.__)("Rated %f out of 5","woo-gutenberg-products-block"),t);return React.createElement("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},React.createElement("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":n},React.createElement("span",{style:r},n)))}(n),u&&function(e){return React.createElement("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},React.createElement("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),i&&function(e){var t=e.reviewer,r=void 0===t?"":t;return React.createElement("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},r)}(n),c&&function(e){var t=e.date_created,r=e.formatted_date_created;return React.createElement("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return React.createElement(F,{maxLines:10,moreText:Object(g.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(g.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},React.createElement("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(221);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){M()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){var t=e.attributes,r=e.reviews,n=(k.y||"product"===t.imageType)&&t.showReviewImage,o=k.u&&t.showReviewRating,c=W(W({},t),{},{showReviewImage:n,showReviewRating:o});return React.createElement("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?React.createElement(V,{attributes:c}):r.map((function(e,t){return React.createElement(V,{key:e.id||t,attributes:c,review:e})})))},G=r(11),Y=r.n(G),Z=r(51),$=r.n(Z),J=r(26),K=r.n(J),Q=r(21),X=r.n(Q),ee=r(124);function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f()(this,r)}}var re=function(e){var t=function(t){p()(n,t);var r=te(n);function n(){var e;c()(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=r.call.apply(r,[this].concat(o)),M()(l()(e),"isPreview",!!e.props.attributes.previewReviews),M()(l()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),M()(l()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),M()(l()(e),"setError",function(){var t=$()(K.a.mark((function t(r){var n,o;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.onReviewsLoadError,t.next=3,Object(ee.a)(r);case 3:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return a()(n,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!X()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,c=t.productId,i={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(i.category_id=Array.isArray(r)?r.join(","):r),c&&(i.product_id=c),i}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),j(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,c=r.reviews,i=r.totalReviews;return React.createElement(e,Y()({},this.props,{error:n,isLoading:o,reviews:c.slice(0,t),totalReviews:i}))}}]),n}(w.Component);M()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}((function(e){var t=e.attributes,r=e.onAppendReviews,n=e.onChangeOrderby,o=e.reviews,c=e.totalReviews,i=t.orderby;return 0===o.length?null:React.createElement(React.Fragment,null,"false"!==t.showOrderby&&k.u&&React.createElement(C,{defaultValue:i,onChange:n}),React.createElement(z,{attributes:t,reviews:o}),"false"!==t.showLoadMore&&c>o.length&&React.createElement(S,{onClick:r,screenReaderLabel:Object(g.__)("Load more reviews","woo-gutenberg-products-block")}))}));function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f()(this,r)}}var oe=function(e){p()(r,e);var t=ne(r);function r(){var e;c()(this,r);var n=(e=t.apply(this,arguments)).props.attributes;return e.state={orderby:n.orderby,reviewsToDisplay:parseInt(n.reviewsOnPageLoad,10)},e.onAppendReviews=e.onAppendReviews.bind(l()(e)),e.onChangeOrderby=e.onChangeOrderby.bind(l()(e)),e}return a()(r,[{key:"onAppendReviews",value:function(){var e=this.props.attributes,t=this.state.reviewsToDisplay;this.setState({reviewsToDisplay:t+parseInt(e.reviewsOnLoadMore,10)})}},{key:"onChangeOrderby",value:function(e){var t=this.props.attributes;this.setState({orderby:e.target.value,reviewsToDisplay:parseInt(t.reviewsOnPageLoad,10)})}},{key:"onReviewsAppended",value:function(e){var t=e.newReviews;Object(m.speak)(Object(g.sprintf)(Object(g._n)("%d review loaded.","%d reviews loaded.",t.length,"woo-gutenberg-products-block"),t.length))}},{key:"onReviewsReplaced",value:function(){Object(m.speak)(Object(g.__)("Reviews list updated.","woo-gutenberg-products-block"))}},{key:"onReviewsLoadError",value:function(){Object(m.speak)(Object(g.__)("There was an error loading the reviews.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this.props.attributes,t=e.categoryIds,r=e.productId,n=this.state.reviewsToDisplay,o=function(e){if(k.u){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}}(this.state.orderby),c=o.order,i=o.orderby;return React.createElement(re,{attributes:e,categoryIds:t,onAppendReviews:this.onAppendReviews,onChangeOrderby:this.onChangeOrderby,onReviewsAppended:this.onReviewsAppended,onReviewsLoadError:this.onReviewsLoadError,onReviewsReplaced:this.onReviewsReplaced,order:c,orderby:i,productId:r,reviewsToDisplay:n})}}]),r}(w.Component);Object(n.a)({selector:"\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n",Block:oe,getProps:function(e){return{attributes:{showReviewDate:e.classList.contains("has-date"),showReviewerName:e.classList.contains("has-name"),showReviewImage:e.classList.contains("has-image"),showReviewRating:e.classList.contains("has-rating"),showReviewContent:e.classList.contains("has-content"),showProductName:e.classList.contains("has-product-name")}}}})},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},31:function(e,t,r){"use strict";var n=r(7),o=r.n(n),c=r(0),i=r(5),a=r.n(i);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,i=e.wrapperProps,s=void 0===i?{}:i,u=null!=r,p=null!=n;return!u&&p?(t=o||"span",s=l(l({},s),{},{className:a()(s.className,"screen-reader-text")}),React.createElement(t,s,n)):(t=o||c.Fragment,u&&p&&r!==n?React.createElement(t,s,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,s,r))}},32:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},33:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},34:function(e,t,r){var n=r(64);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},35:function(e,t,r){var n=r(20).default,o=r(22);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},36:function(e,t){!function(){e.exports=this.wp.a11y}()},4:function(e,t,r){e.exports=r(75)()},41:function(e,t){!function(){e.exports=this.wp.blocks}()},44:function(e,t,r){"use strict";var n=r(32),o=r.n(n),c=r(33),i=r.n(c),a=r(22),s=r.n(a),l=r(34),u=r.n(l),p=r(35),d=r.n(p),f=r(25),v=r.n(f),b=r(7),g=r.n(b),m=(r(4),r(2)),w=r(1),h=r(9),y=function(e){var t=e.imageUrl,r=void 0===t?"".concat(h.C,"img/block-error.svg"):t,n=e.header,o=void 0===n?Object(w.__)("Oops!","woo-gutenberg-products-block"):n,c=e.text,i=void 0===c?Object(w.__)("There was an error loading the content.","woo-gutenberg-products-block"):c,a=e.errorMessage,s=e.errorMessagePrefix,l=void 0===s?Object(w.__)("Error:","woo-gutenberg-products-block"):s;return React.createElement("div",{className:"wc-block-error wc-block-components-error"},r&&React.createElement("img",{className:"wc-block-error__image wc-block-components-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content wc-block-components-error__content"},o&&React.createElement("p",{className:"wc-block-error__header wc-block-components-error__header"},o),i&&React.createElement("p",{className:"wc-block-error__text wc-block-components-error__text"},i),a&&React.createElement("p",{className:"wc-block-error__message wc-block-components-error__message"},l?l+" ":"",a)))};r(77);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d()(this,r)}}var O=function(e){u()(r,e);var t=_(r);function r(){var e;o()(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),g()(s()(e),"state",{errorMessage:"",hasError:!1}),e}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,c=e.errorMessagePrefix,i=e.renderError,a=this.state,s=a.errorMessage;return a.hasError?"function"==typeof i?i({errorMessage:s}):React.createElement(y,{errorMessage:n?s:null,header:t,imageUrl:r,text:o,errorMessagePrefix:c}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:React.createElement(React.Fragment,null,React.createElement("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),r}(m.Component);O.defaultProps={showErrorMessage:!0};t.a=O},5:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===c)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},51:function(e,t){function r(e,t,r,n,o,c,i){try{var a=e[c](i),s=a.value}catch(e){return void r(e)}a.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var i=e.apply(t,n);function a(e){r(i,o,c,a,s,"next",e)}function s(e){r(i,o,c,a,s,"throw",e)}a(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},59:function(e,t){!function(){e.exports=this.wp.apiFetch}()},6:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},64:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,r(t,n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},75:function(e,t,r){"use strict";var n=r(76);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,c,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return r.PropTypes=r,r}},76:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e,t){},8:function(e,t){!function(){e.exports=this.lodash}()},9:function(e,t,r){"use strict";r.d(t,"j",(function(){return o})),r.d(t,"u",(function(){return c})),r.d(t,"y",(function(){return i})),r.d(t,"r",(function(){return a})),r.d(t,"m",(function(){return s})),r.d(t,"o",(function(){return l})),r.d(t,"i",(function(){return u})),r.d(t,"z",(function(){return p})),r.d(t,"l",(function(){return d})),r.d(t,"k",(function(){return f})),r.d(t,"c",(function(){return v})),r.d(t,"n",(function(){return b})),r.d(t,"C",(function(){return m})),r.d(t,"D",(function(){return w})),r.d(t,"v",(function(){return h})),r.d(t,"a",(function(){return y})),r.d(t,"w",(function(){return _})),r.d(t,"b",(function(){return O})),r.d(t,"q",(function(){return R})),r.d(t,"g",(function(){return k})),r.d(t,"x",(function(){return E})),r.d(t,"h",(function(){return S})),r.d(t,"t",(function(){return P})),r.d(t,"s",(function(){return C})),r.d(t,"B",(function(){return T})),r.d(t,"A",(function(){return M})),r.d(t,"d",(function(){return N})),r.d(t,"e",(function(){return L})),r.d(t,"f",(function(){return A})),r.d(t,"p",(function(){return D})),r.d(t,"E",(function(){return I}));var n=r(3),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),a=(Object(n.getSetting)("max_columns",6),Object(n.getSetting)("min_columns",1),Object(n.getSetting)("default_columns",3),Object(n.getSetting)("max_rows",6),Object(n.getSetting)("min_rows",1),Object(n.getSetting)("default_rows",3),Object(n.getSetting)("min_height",500),Object(n.getSetting)("default_height",500),Object(n.getSetting)("placeholderImgSrc","")),s=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),l=Object(n.getSetting)("limitTags"),u=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0),Object(n.getSetting)("homeUrl",""),Object(n.getSetting)("couponsEnabled",!0)),p=(Object(n.getSetting)("shippingEnabled",!0),Object(n.getSetting)("taxesEnabled",!0)),d=(Object(n.getSetting)("displayItemizedTaxes",!1),Object(n.getSetting)("hasDarkEditorStyleSupport",!1)),f=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),v=(Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[])),b=Object(n.getSetting)("isShippingCalculatorEnabled",!0),g=(Object(n.getSetting)("shippingCostRequiresAddress",!1),Object(n.getSetting)("isShippingCostHidden",!1),Object(n.getSetting)("woocommerceBlocksPhase",1)),m=Object(n.getSetting)("wcBlocksAssetUrl",""),w=Object(n.getSetting)("wcBlocksBuildUrl",""),h=Object(n.getSetting)("shippingCountries",{}),y=Object(n.getSetting)("allowedCountries",{}),_=Object(n.getSetting)("shippingStates",{}),O=Object(n.getSetting)("allowedStates",{}),R=(Object(n.getSetting)("shippingMethodsExist",!1),Object(n.getSetting)("paymentGatewaySortOrder",[])),k=Object(n.getSetting)("checkoutShowLoginReminder",!0),j={id:0,title:"",permalink:""},x=Object(n.getSetting)("storePages",{myaccount:j,shop:j,cart:j,checkout:j,privacy:j,terms:j}),E=x.shop.permalink,S=(x.checkout.id,x.checkout.permalink),P=x.privacy.permalink,C=x.privacy.title,T=x.terms.permalink,M=x.terms.title,N=(x.cart.id,x.cart.permalink),L=Object(n.getSetting)("checkoutAllowsGuest",!1),A=Object(n.getSetting)("checkoutAllowsSignup",!1),D=x.myaccount.permalink?x.myaccount.permalink:Object(n.getSetting)("loginUrl","/wp-login.php"),I=(r(41),function(){return g>1})}});