(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var r=a(0),i=a.n(r),n=a(163),s=a(158),o=a(160),l=a(161),d=function(e){var t=e.node,a=t.fields.slug,r=t.excerpt,n=t.frontmatter,o=n.title,l=void 0===o?a:o,d=n.date;return i.a.createElement("div",{key:a},i.a.createElement("h3",null,i.a.createElement(s.a,{to:a},l)),i.a.createElement("small",null,d),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))};t.default=function(e){var t=e.data,a=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges,s=e.location;return i.a.createElement(o.a,{location:s,title:a},i.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(n.a,null),r.map(d))};var c="64433652"},156:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(157);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,a){var r;e.exports=(r=a(159))&&r.default||r},158:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(154),i=a.n(r),n=a(156),s=a(155);function o(){var e=i()(["\n  box-shadow: none;\n  text-decoration: none;\n  color: #2aa198 !important;\n"]);return o=function(){return e},e}var l=Object(s.a)(n.a)(o())},159:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},160:function(e,t,a){"use strict";var r=a(154),i=a.n(r),n=a(0),s=a.n(n),o=a(158),l=a(155);a(148);function d(){var e=i()(["\n  max-width: 50em;\n  margin: 0 auto;\n"]);return d=function(){return e},e}var c=l.a.div(d()),u=function(){return s.a.createElement("footer",null,"© ",(new Date).getFullYear())},A=function(e){var t=e.title;return s.a.createElement("header",null,s.a.createElement("h1",null,s.a.createElement(o.a,{to:"/"},t)))};t.a=function(e){var t=e.title,a=e.children;return s.a.createElement(c,null,s.a.createElement(A,{title:t}),s.a.createElement("main",null,a),s.a.createElement(u,null))}},161:function(e,t,a){"use strict";var r=a(162),i=a(4),n=a.n(i),s=a(0),o=a.n(s),l=a(168),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,n=e.keywords,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.arrayOf(n.a.object),keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},t.a=c},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt's Blog",description:"Matt's blog",author:"Matt Hamrick"}}}}},163:function(e,t,a){"use strict";a(164);var r=a(154),i=a.n(r),n=a(166),s=a(156),o=a(167),l=a.n(o),d=a(0),c=a.n(d),u=a(155);function A(){var e=i()(["\n  margin-right: 1em;\n  margin-bottom: 0;\n  min-width: 50px;\n  border-radius: 100%;\n"]);return A=function(){return e},e}function f(){var e=i()(["\n  display: flex;\n  align-items: center;\n"]);return f=function(){return e},e}var p=u.a.div(f()),g=Object(u.a)(l.a)(A()),h=function(e){var t=e.site.siteMetadata,a=t.author,r=t.social,i=e.avatar.childImageSharp.fixed;return c.a.createElement(p,null,c.a.createElement(g,{fixed:i,alt:a,"img-style":{borderRadius:"100%",margin:"auto"}}),c.a.createElement("p",null,"Written by ",c.a.createElement("strong",null," ",a," ")," who lives and works in Mountain View, CA."," ",c.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Follow me on Twitter")))};t.a=function(){return c.a.createElement(s.b,{query:m,render:h,data:n})};var m="808250599"},164:function(e,t,a){"use strict";a(165)("fixed",function(e){return function(){return e(this,"tt","","")}})},165:function(e,t,a){var r=a(11),i=a(18),n=a(19),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},166:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFBAL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgD/2gAMAwEAAhADEAAAAXSdj4rAKHN1xukoE8H/xAAbEAACAwEBAQAAAAAAAAAAAAABEQACEhADE//aAAgBAQABBQLbl3vREAsIq5JE+rsbZ8wjx8//xAAYEQACAwAAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPwHYTLP/xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AY0Yf//EABsQAAIDAAMAAAAAAAAAAAAAAAERABAhICJB/9oACAEBAAY/AithIpIw9KHmx7x//8QAHxAAAgICAQUAAAAAAAAAAAAAAREAIRBxkTFBYaHR/9oACAEBAAE/IWED5RpJsQVCb1ERLJs3ccIIwe0Z6n1CtC0RklKvzCG75HzDFAkreP/aAAwDAQACAAMAAAAQzO1M/8QAGBEBAQADAAAAAAAAAAAAAAAAAAERIVH/2gAIAQMBAT8QkNKxjx//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQUf/aAAgBAgEBPxBKLKFdP//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExQVEQcaHB/9oACAEBAAE/EG8Nlsp96OpWEQtwwDJ5KVWMgriVByZ7hdRtNMVAYgexcJrRyAa7GMgZktVfpl/jvWSNwEjGhSHj/9k=",width:50,height:50,src:"/static/842453d442149c3a9260bd0aa73a9d7b/c15d6/profile-pic.jpg",srcSet:"/static/842453d442149c3a9260bd0aa73a9d7b/c15d6/profile-pic.jpg 1x,\n/static/842453d442149c3a9260bd0aa73a9d7b/43c20/profile-pic.jpg 1.5x,\n/static/842453d442149c3a9260bd0aa73a9d7b/da97e/profile-pic.jpg 2x,\n/static/842453d442149c3a9260bd0aa73a9d7b/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Matt Hamrick",social:{twitter:"mjhamrick"}}}}}},167:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(74)),l=r(a(75)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,E=e.backgroundColor,b=e.Tag,w=e.itemProp,y=this.state.imgLoaded||!1===this.state.fadeIn,v=!0===this.state.fadeIn&&!this.state.imgCached,S=(0,l.default)({opacity:y?1:0,transition:v?"opacity 0.5s":"none"},o),R="boolean"==typeof E?"lightgray":E,j={transitionDelay:"0.5s"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},v&&j,o,A),L={title:t,alt:this.state.isVisible?"":a,style:x,className:f};if(p){var B=p;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&j)}),B.base64&&d.default.createElement(m,(0,l.default)({src:B.base64},L)),B.tracedSVG&&d.default.createElement(m,(0,l.default)({src:B.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,B.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),d.default.createElement(m,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},B))}}))}if(g){var I=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete C.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:I.width,opacity:this.state.imgLoaded?0:1,height:I.height},v&&j)}),I.base64&&d.default.createElement(m,(0,l.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(m,(0,l.default)({src:I.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(m,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},I))}}))}return null},t}(d.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var y=E;t.default=y}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a8ea6e2e89cd3f147e39.js.map