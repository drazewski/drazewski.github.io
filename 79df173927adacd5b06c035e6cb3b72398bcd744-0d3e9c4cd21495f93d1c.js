"use strict";(self.webpackChunkldrazewski_blog=self.webpackChunkldrazewski_blog||[]).push([[214],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return 0===(e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim()).length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,i=0;i<e.length;i++){var o=e[i];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},4041:function(){var e,t,r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=(e=["",""],t=["",""],Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(){for(var t=this,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return i(this,e),this.tag=function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,n))))},n.length>0&&Array.isArray(n[0])&&(n=n[0]),this.transformers=n.map((function(e){return"function"==typeof e?e():e})),this.tag}return r(e,[{key:"interimTag",value:function(e,t){for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];return this.tag(n,e.apply(void 0,[t].concat(i)))}},{key:"processSubstitutions",value:function(e,t,r){var n=this.transformSubstitution(e.shift(),t);return"".concat(t,n,r)}},{key:"transformString",value:function(e){return this.transformers.reduce((function(e,t){return t.onString?t.onString(e):e}),e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce((function(e,r){return r.onSubstitution?r.onSubstitution(e,t):e}),e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce((function(e,t){return t.onEndResult?t.onEndResult(e):e}),e)}}]),e}(),a={separator:"",conjunction:"",serial:!1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return{onSubstitution:function(t,r){if(Array.isArray(t)){var n=t.length,i=e.separator,o=e.conjunction,a=e.serial,s=r.match(/(\n?[^\S\n]+)$/);if(t=s?t.join(i+s[1]):t.join(i+" "),o&&n>1){var l=t.lastIndexOf(i);t=t.slice(0,l)+(a?i:"")+" "+o+t.slice(l+1)}}return t}}};function l(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var r=t.match(/^[^\S\n]*(?=\S)/gm),n=r&&Math.min.apply(Math,l(r.map((function(e){return e.length}))));if(n){var i=new RegExp("^.{"+n+"}","gm");return t.replace(i,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+e)}}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw new Error("Side not supported: "+e)}}},d=(new o(s({separator:","}),u,c),new o(s({separator:",",conjunction:"and"}),u,c),new o(s({separator:",",conjunction:"or"}),u,c),function(e){return{onSubstitution:function(t,r){if(null==e||"string"!=typeof e)throw new Error("You need to specify a string character to split by.");return"string"==typeof t&&t.includes(e)&&(t=t.split(e)),t}}}),p=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e},f=function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(p):p(e)?e:""}}},g=(new o(d("\n"),f,s,u,c),function(e,t){return{onSubstitution:function(r,n){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==r?r:r.toString().replace(e,t)}}}),h=(new o(d("\n"),s,u,c,g(/&/g,"&amp;"),g(/</g,"&lt;"),g(/>/g,"&gt;"),g(/"/g,"&quot;"),g(/'/g,"&#x27;"),g(/`/g,"&#x60;")),function(e,t){return{onEndResult:function(r){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.");return r.replace(e,t)}}});new o(h(/(?:\n(?:\s*))+/g," "),c),new o(h(/(?:\n\s*)/g,""),c),new o(s({separator:","}),h(/(?:\s+)/g," "),c),new o(s({separator:",",conjunction:"or"}),h(/(?:\s+)/g," "),c),new o(s({separator:",",conjunction:"and"}),h(/(?:\s+)/g," "),c),new o(s,u,c),new o(s,h(/(?:\s+)/g," "),c),new o(u,c),new o(u("all"),c)},2359:function(e,t,r){r.d(t,{G:function(){return A},L:function(){return E},M:function(){return R},P:function(){return I},_:function(){return u},a:function(){return s},b:function(){return m},d:function(){return h},g:function(){return y}});var n=r(7294),i=(r(4041),r(4811),r(5697)),o=r.n(i),a=r(3935);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var c=new Set,d=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function p(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function f(e){e&&c.add(e)}function g(e){return c.has(e)}var h=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function m(e,t,n,i,o,a,l,u){var c,d;return void 0===u&&(u={}),null!=l&&l.current&&!("objectFit"in document.documentElement.style)&&(l.current.dataset.objectFit=null!=(c=u.objectFit)?c:"cover",l.current.dataset.objectPosition=""+(null!=(d=u.objectPosition)?d:"50% 50%"),function(e){try{var t=function(){window.objectFitPolyfill(e.current)},n=function(){if(!("objectFitPolyfill"in window))return Promise.resolve(r.e(231).then(r.t.bind(r,7231,23))).then((function(){}))}();Promise.resolve(n&&n.then?n.then(t):t())}catch(e){return Promise.reject(e)}}(l)),p()||(u=s({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},u)),s({},n,{loading:i,shouldLoad:e,"data-main-image":"",style:s({},u,{opacity:t?1:0}),onLoad:function(e){if(!t){f(a);var r=e.currentTarget,n=new Image;n.src=r.currentSrc,n.decode?n.decode().catch((function(){})).then((function(){o(!0)})):o(!0)}},ref:l})}function y(e,t,r,n,i,o,a,l){var u={};o&&(u.backgroundColor=o,"fixed"===r?(u.width=n,u.height=i,u.backgroundColor=o,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),a&&(u.objectFit=a),l&&(u.objectPosition=l);var c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return p()||(c.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),c}var v,b=["children"],w=function(e){var t=e.layout,r=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},E=function(e){var t=e.children,r=u(e,b);return n.createElement(n.Fragment,null,n.createElement(w,s({},r)),t,!1)},S=["src","srcSet","loading","alt","shouldLoad","innerRef"],x=["fallback","sources","shouldLoad"],L=function(e){var t=e.src,r=e.srcSet,i=e.loading,o=e.alt,a=void 0===o?"":o,l=e.shouldLoad,c=e.innerRef,d=u(e,S);return n.createElement("img",s({},d,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:a,ref:c}))},_=(0,n.forwardRef)((function(e,t){var r=e.fallback,i=e.sources,o=void 0===i?[]:i,a=e.shouldLoad,l=void 0===a||a,c=u(e,x),d=c.sizes||(null==r?void 0:r.sizes),p=n.createElement(L,s({},c,r,{sizes:d,shouldLoad:l,innerRef:t}));return o.length?n.createElement("picture",null,o.map((function(e){var t=e.media,r=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:d})})),p):p}));L.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},_.displayName="Picture",_.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var C=["fallback"],I=function(e){var t=e.fallback,r=u(e,C);return t?n.createElement(_,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},r))};I.displayName="Placeholder",I.propTypes={fallback:i.string,sources:null==(v=_.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var R=(0,n.forwardRef)((function(e,t){return n.createElement(n.Fragment,null,n.createElement(_,s({ref:t},e)),n.createElement("noscript",null,n.createElement(_,s({},e,{shouldLoad:!0}))))}));R.displayName="MainImage",R.propTypes=_.propTypes;var k=function(e,t,r){return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:o().object.isRequired,alt:k},O=["style","className"],z=function(e){var t,i;function o(t){var r;return(r=e.call(this,t)||this).root=(0,n.createRef)(),r.hydrated={current:!1},r.forceRender={current:!1},r.lazyHydrator=null,r.ref=(0,n.createRef)(),r.unobserveRef=void 0,r.state={isLoading:d(),isLoaded:!1},r}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,l(t,i);var c=o.prototype;return c._lazyHydrate=function(e,t){var n=this,i=this.root.current.querySelector("[data-gatsby-image-ssr]");return d()&&i&&!this.hydrated.current?(this.hydrated.current=!0,Promise.resolve()):r.e(987).then(r.bind(r,4987)).then((function(r){n.lazyHydrator=(0,r.lazyHydrate)(s({image:e.image.images,isLoading:t.isLoading,isLoaded:t.isLoaded,toggleIsLoaded:function(){null==e.onLoad||e.onLoad(),n.setState({isLoaded:!0})},ref:n.ref},e),n.root,n.hydrated,n.forceRender)}))},c._setupIntersectionObserver=function(e){var t=this;void 0===e&&(e=!0),r.e(175).then(r.bind(r,7175)).then((function(r){var n=(0,r.createIntersectionObserver)((function(){if(t.root.current){var r=JSON.stringify(t.props.image.images);null==t.props.onStartLoad||t.props.onStartLoad({wasCached:e&&g(r)}),t.setState({isLoading:!0,isLoaded:e&&g(r)})}}));t.root.current&&(t.unobserveRef=n(t.root))}))},c.shouldComponentUpdate=function(e,t){var r=this,n=!1;return this.state.isLoading||!t.isLoading||t.isLoaded||(this.forceRender.current=!0),this.props.image.images!==e.image.images&&(this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&(0,a.render)(null,this.root.current)),this.setState({isLoading:!1,isLoaded:!1},(function(){r._setupIntersectionObserver(!1)})),n=!0),this.root.current&&!n&&this._lazyHydrate(e,t),!1},c.componentDidMount=function(){if(this.root.current){var e=this.root.current.querySelector("[data-gatsby-image-ssr]"),t=JSON.stringify(this.props.image.images);if(d()&&e&&p()){var r,n;if(null==(r=(n=this.props).onStartLoad)||r.call(n,{wasCached:!1}),e.complete){var i,o;null==(i=(o=this.props).onLoad)||i.call(o),f(t)}else{var a=this;e.addEventListener("load",(function r(){e.removeEventListener("load",r),null==a.props.onLoad||a.props.onLoad(),f(t)}))}return}this._setupIntersectionObserver(!0)}},c.componentWillUnmount=function(){this.unobserveRef&&(this.unobserveRef(),this.hydrated.current&&this.lazyHydrator&&this.lazyHydrator())},c.render=function(){var e=this.props.as||"div",t=this.props.image,r=t.width,i=t.height,o=t.layout,a=function(e,t,r){var n={},i="gatsby-image-wrapper";return p()||(n.position="relative",n.overflow="hidden"),"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(p()||(n.display="inline-block",n.verticalAlign="top"),i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(r,i,o),l=a.style,c=a.className,d=u(a,O),f=this.props.className;this.props.class&&(f=this.props.class);var g=function(e,t,r){var n=null;return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(o,r,i);return n.createElement(e,s({},d,{style:s({},l,this.props.style,{backgroundColor:this.props.backgroundColor}),className:c+(f?" "+f:""),ref:this.root,dangerouslySetInnerHTML:{__html:g},suppressHydrationWarning:!0}))},o}(n.Component),A=function(e){if(!e.image)return null;p();var t=e.image,r=JSON.stringify([t.width,t.height,t.layout,e.className,e.class,e.backgroundColor]);return n.createElement(z,s({key:r},e))};A.propTypes=j,A.displayName="GatsbyImage";var N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],T=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),H={src:o().string.isRequired,alt:k,width:T,height:T,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=function(e){return function(t){var r=t.src,i=t.__imageData,o=t.__error,a=u(t,N);return o&&console.warn(o),i?n.createElement(e,s({image:i},a)):(console.warn("Image not loaded",r),null)}}(A);q.displayName="StaticImage",q.propTypes=H},8303:function(e,t,r){var n=r(7294),i=r(5444),o=r(2359),a=r(9),s=r(6805),l=(0,a.ZP)(o.G).withConfig({displayName:"HeroImage__ExportedImage",componentId:"sc-yb1rid-0"})(["margin:auto;"]),u=a.ZP.section.withConfig({displayName:"HeroImage__HeroImageWrapper",componentId:"sc-yb1rid-1"})(["margin:0 0 20px 0;overflow:hidden;padding:0;position:relative;"]),c=a.ZP.div.withConfig({displayName:"HeroImage__ImageShadow",componentId:"sc-yb1rid-2"})(["position:absolute;width:100%;height:100%;box-shadow:16px -20px 40px 0px #777 inset;top:0;left:0;"]),d=a.ZP.div.withConfig({displayName:"HeroImage__TitleWrapper",componentId:"sc-yb1rid-3"})(["max-width:1030px;width:100%;position:absolute;bottom:0;left:50%;right:50%;transform:translateX(-50%);"]),p=a.ZP.div.withConfig({displayName:"HeroImage__Title",componentId:"sc-yb1rid-4"})(["position:absolute;bottom:0px;color:white;left:15px;"]),f=a.ZP.h1.withConfig({displayName:"HeroImage__Name",componentId:"sc-yb1rid-5"})(["font-family:'Charmonman',cursive;font-size:20px;border-bottom:1px solid;margin-bottom:15px;padding-bottom:12px;font-weight:300;@media(min-width:","){font-size:30px;}"],s.J.sm),g=a.ZP.h5.withConfig({displayName:"HeroImage__Subname",componentId:"sc-yb1rid-6"})(["font-size:12px;font-weight:500;letter-spacing:2px;text-transform:uppercase;margin:10px 0;@media(min-width:","){font-size:16px;margin:20px 0;}"],s.J.sm);t.Z=function(){var e=(0,i.useStaticQuery)("3663039030"),t=(0,o.d)(e.placeholderImage);return n.createElement(u,null,n.createElement(l,{image:t,imgStyle:{transform:"scaleX(-1)"},style:{maxHeight:"calc(100vh - 48px)"}}),n.createElement(c,null),n.createElement(d,null,n.createElement(p,null,n.createElement(f,null,"Łukasz Drążewski"),n.createElement(g,null,"personal blog"))))}},4142:function(e,t,r){r.d(t,{E:function(){return i}});var n=r(5444),i=function(e){var t;return(null===(t=(0,n.useStaticQuery)("2543130515").allContentfulAsset.nodes.find((function(t){return t.file.url.includes(e)})))||void 0===t?void 0:t.fluid)||null}}}]);
//# sourceMappingURL=79df173927adacd5b06c035e6cb3b72398bcd744-0d3e9c4cd21495f93d1c.js.map