(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(159),u=n(160),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(u.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=s;var l="1097489062"},155:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),u=n.n(c);n.d(e,"a",function(){return u.a});n(156);var s=r.a.createContext({}),l=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(t,e,n){var a;t.exports=(a=n(158))&&a.default||a},157:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(153),r=n.n(a),i=n(155),o=n(154);function c(){var t=r()(["\n  box-shadow: none;\n  text-decoration: none;\n"]);return c=function(){return t},t}var u=Object(o.a)(i.a)(c())},158:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},159:function(t,e,n){"use strict";var a=n(153),r=n.n(a),i=n(0),o=n.n(i),c=n(157),u=n(154);n(147);function s(){var t=r()(["\n  max-width: 50em;\n  margin: 0 auto;\n"]);return s=function(){return t},t}var l=u.a.div(s()),d=function(){return o.a.createElement("footer",null,"© ",(new Date).getFullYear())},p=function(t){var e=t.title;return o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(c.a,{to:"/"},e)))};e.a=function(t){var e=t.title,n=t.children;return o.a.createElement(l,null,o.a.createElement(p,{title:e}),o.a.createElement("main",null,n),o.a.createElement(d,null))}},160:function(t,e,n){"use strict";var a=n(161),r=n(4),i=n.n(r),o=n(0),c=n.n(o),u=n(167),s=n.n(u);function l(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,o=t.title,u=a.data.site,l=e||u.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=l},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Matt's Blog",description:"Matt's blog",author:"Matt Hamrick"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-c90ea165aef4491104ee.js.map