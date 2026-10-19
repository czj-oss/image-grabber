(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ye(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var ha={exports:{}},Da={exports:{}},Ta,F1;function ys(){if(F1)return Ta;F1=1;var v=void 0;return Ta=function(t){return t!==v&&t!==null},Ta}var ka,U1;function a0(){if(U1)return ka;U1=1;var v=ys(),t={object:!0,function:!0,undefined:!0};return ka=function(e){return v(e)?hasOwnProperty.call(t,typeof e):!1},ka}var La,q1;function r0(){if(q1)return La;q1=1;var v=a0();return La=function(t){if(!v(t))return!1;try{return t.constructor?t.constructor.prototype===t:!1}catch{return!1}},La}var Ra,Z1;function i0(){if(Z1)return Ra;Z1=1;var v=r0();return Ra=function(t){if(typeof t!="function"||!hasOwnProperty.call(t,"length"))return!1;try{if(typeof t.length!="number"||typeof t.call!="function"||typeof t.apply!="function")return!1}catch{return!1}return!v(t)},Ra}var Ha,W1;function n0(){if(W1)return Ha;W1=1;var v=i0(),t=/^\s*class[\s{/}]/,e=Function.prototype.toString;return Ha=function(r){return!(!v(r)||t.test(e.call(r)))},Ha}var Na,j1;function s0(){return j1||(j1=1,Na=function(){var v=Object.assign,t;return typeof v!="function"?!1:(t={foo:"raz"},v(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}),Na}var Ba,G1;function h0(){return G1||(G1=1,Ba=function(){try{return Object.keys("primitive"),!0}catch{return!1}}),Ba}var Oa,X1;function o0(){return X1||(X1=1,Oa=function(){}),Oa}var Va,$1;function E1(){if($1)return Va;$1=1;var v=o0()();return Va=function(t){return t!==v&&t!==null},Va}var Ia,Y1;function d0(){if(Y1)return Ia;Y1=1;var v=E1(),t=Object.keys;return Ia=function(e){return t(v(e)?Object(e):e)},Ia}var Pa,K1;function c0(){return K1||(K1=1,Pa=h0()()?Object.keys:d0()),Pa}var za,J1;function l0(){if(J1)return za;J1=1;var v=E1();return za=function(t){if(!v(t))throw new TypeError("Cannot use null or undefined");return t},za}var Fa,Q1;function u0(){if(Q1)return Fa;Q1=1;var v=c0(),t=l0(),e=Math.max;return Fa=function(r,i){var n,s,h=e(arguments.length,2),c;for(r=Object(t(r)),c=function(l){try{r[l]=i[l]}catch(f){n||(n=f)}},s=1;s<h;++s)i=arguments[s],v(i).forEach(c);if(n!==void 0)throw n;return r},Fa}var Ua,t2;function p0(){return t2||(t2=1,Ua=s0()()?Object.assign:u0()),Ua}var qa,e2;function f0(){if(e2)return qa;e2=1;var v=E1(),t=Array.prototype.forEach,e=Object.create,r=function(i,n){var s;for(s in i)n[s]=i[s]};return qa=function(i){var n=e(null);return t.call(arguments,function(s){v(s)&&r(Object(s),n)}),n},qa}var Za,a2;function v0(){if(a2)return Za;a2=1;var v="razdwatrzy";return Za=function(){return typeof v.contains!="function"?!1:v.contains("dwa")===!0&&v.contains("foo")===!1},Za}var Wa,r2;function g0(){if(r2)return Wa;r2=1;var v=String.prototype.indexOf;return Wa=function(t){return v.call(this,t,arguments[1])>-1},Wa}var ja,i2;function m0(){return i2||(i2=1,ja=v0()()?String.prototype.contains:g0()),ja}var n2;function M0(){if(n2)return Da.exports;n2=1;var v=ys(),t=n0(),e=p0(),r=f0(),i=m0(),n=Da.exports=function(s,h){var c,l,f,p,b;return arguments.length<2||typeof s!="string"?(p=h,h=s,s=null):p=arguments[2],v(s)?(c=i.call(s,"c"),l=i.call(s,"e"),f=i.call(s,"w")):(c=f=!0,l=!1),b={value:h,configurable:c,enumerable:l,writable:f},p?e(r(p),b):b};return n.gs=function(s,h,c){var l,f,p,b;return typeof s!="string"?(p=c,c=h,h=s,s=null):p=arguments[3],v(h)?t(h)?v(c)?t(c)||(p=c,c=void 0):c=void 0:(p=h,h=c=void 0):h=void 0,v(s)?(l=i.call(s,"c"),f=i.call(s,"e")):(l=!0,f=!1),b={get:h,set:c,configurable:l,enumerable:f},p?e(r(p),b):b},Da.exports}var Ga,s2;function y0(){return s2||(s2=1,Ga=function(v){if(typeof v!="function")throw new TypeError(v+" is not a function");return v}),Ga}var h2;function x0(){return h2||(h2=1,(function(v,t){var e=M0(),r=y0(),i=Function.prototype.apply,n=Function.prototype.call,s=Object.create,h=Object.defineProperty,c=Object.defineProperties,l=Object.prototype.hasOwnProperty,f={configurable:!0,enumerable:!1,writable:!0},p,b,y,R,A,u,g;p=function(M,E){var B;return r(E),l.call(this,"__ee__")?B=this.__ee__:(B=f.value=s(null),h(this,"__ee__",f),f.value=null),B[M]?typeof B[M]=="object"?B[M].push(E):B[M]=[B[M],E]:B[M]=E,this},b=function(M,E){var B,w;return r(E),w=this,p.call(this,M,B=function(){y.call(w,M,B),i.call(E,this,arguments)}),B.__eeOnceListener__=E,this},y=function(M,E){var B,w,T,L;if(r(E),!l.call(this,"__ee__"))return this;if(B=this.__ee__,!B[M])return this;if(w=B[M],typeof w=="object")for(L=0;T=w[L];++L)(T===E||T.__eeOnceListener__===E)&&(w.length===2?B[M]=w[L?0:1]:w.splice(L,1));else(w===E||w.__eeOnceListener__===E)&&delete B[M];return this},R=function(M){var E,B,w,T,L;if(l.call(this,"__ee__")&&(T=this.__ee__[M],!!T))if(typeof T=="object"){for(B=arguments.length,L=new Array(B-1),E=1;E<B;++E)L[E-1]=arguments[E];for(T=T.slice(),E=0;w=T[E];++E)i.call(w,this,L)}else switch(arguments.length){case 1:n.call(T,this);break;case 2:n.call(T,this,arguments[1]);break;case 3:n.call(T,this,arguments[1],arguments[2]);break;default:for(B=arguments.length,L=new Array(B-1),E=1;E<B;++E)L[E-1]=arguments[E];i.call(T,this,L)}},A={on:p,once:b,off:y,emit:R},u={on:e(p),once:e(b),off:e(y),emit:e(R)},g=c({},u),v.exports=t=function(M){return M==null?s(g):c(Object(M),u)},t.methods=A})(ha,ha.exports)),ha.exports}var w0=x0();const Te=Ye(w0);var Qe={},Le={},Pe={},o2;function wa(){if(o2)return Pe;o2=1;function v(i,n,s){if(s===void 0&&(s=Array.prototype),i&&typeof s.find=="function")return s.find.call(i,n);for(var h=0;h<i.length;h++)if(Object.prototype.hasOwnProperty.call(i,h)){var c=i[h];if(n.call(void 0,c,h,i))return c}}function t(i,n){return n===void 0&&(n=Object),n&&typeof n.freeze=="function"?n.freeze(i):i}var e=t({HTML:"text/html",isHTML:function(i){return i===e.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"image/svg+xml"}),r=t({HTML:"http://www.w3.org/1999/xhtml",isHTML:function(i){return i===r.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"});return Pe.find=v,Pe.freeze=t,Pe.MIME_TYPE=e,Pe.NAMESPACE=r,Pe}var d2;function xs(){if(d2)return Le;d2=1;var v=wa(),t=v.find,e=v.NAMESPACE;function r(d){return d!==""}function i(d){return d?d.split(/[\t\n\f\r ]+/).filter(r):[]}function n(d,m){return d.hasOwnProperty(m)||(d[m]=!0),d}function s(d){if(!d)return[];var m=i(d);return Object.keys(m.reduce(n,{}))}function h(d){return function(m){return d&&d.indexOf(m)!==-1}}function c(d,m){for(var D in d)Object.prototype.hasOwnProperty.call(d,D)&&(m[D]=d[D])}function l(d,m){var D=d.prototype;if(!(D instanceof m)){let O=function(){};var o=O;O.prototype=m.prototype,O=new O,c(D,O),d.prototype=D=O}D.constructor!=d&&(typeof d!="function"&&console.error("unknown Class:"+d),D.constructor=d)}var f={},p=f.ELEMENT_NODE=1,b=f.ATTRIBUTE_NODE=2,y=f.TEXT_NODE=3,R=f.CDATA_SECTION_NODE=4,A=f.ENTITY_REFERENCE_NODE=5,u=f.ENTITY_NODE=6,g=f.PROCESSING_INSTRUCTION_NODE=7,M=f.COMMENT_NODE=8,E=f.DOCUMENT_NODE=9,B=f.DOCUMENT_TYPE_NODE=10,w=f.DOCUMENT_FRAGMENT_NODE=11,T=f.NOTATION_NODE=12,L={},H={};L.INDEX_SIZE_ERR=(H[1]="Index size error",1),L.DOMSTRING_SIZE_ERR=(H[2]="DOMString size error",2);var k=L.HIERARCHY_REQUEST_ERR=(H[3]="Hierarchy request error",3);L.WRONG_DOCUMENT_ERR=(H[4]="Wrong document",4),L.INVALID_CHARACTER_ERR=(H[5]="Invalid character",5),L.NO_DATA_ALLOWED_ERR=(H[6]="No data allowed",6),L.NO_MODIFICATION_ALLOWED_ERR=(H[7]="No modification allowed",7);var N=L.NOT_FOUND_ERR=(H[8]="Not found",8);L.NOT_SUPPORTED_ERR=(H[9]="Not supported",9);var j=L.INUSE_ATTRIBUTE_ERR=(H[10]="Attribute in use",10);L.INVALID_STATE_ERR=(H[11]="Invalid state",11),L.SYNTAX_ERR=(H[12]="Syntax error",12),L.INVALID_MODIFICATION_ERR=(H[13]="Invalid modification",13),L.NAMESPACE_ERR=(H[14]="Invalid namespace",14),L.INVALID_ACCESS_ERR=(H[15]="Invalid access",15);function q(d,m){if(m instanceof Error)var D=m;else D=this,Error.call(this,H[d]),this.message=H[d],Error.captureStackTrace&&Error.captureStackTrace(this,q);return D.code=d,m&&(this.message=this.message+": "+m),D}q.prototype=Error.prototype,c(L,q);function G(){}G.prototype={length:0,item:function(d){return d>=0&&d<this.length?this[d]:null},toString:function(d,m){for(var D=[],o=0;o<this.length;o++)Y(this[o],D,d,m);return D.join("")},filter:function(d){return Array.prototype.filter.call(this,d)},indexOf:function(d){return Array.prototype.indexOf.call(this,d)}};function at(d,m){this._node=d,this._refresh=m,tt(this)}function tt(d){var m=d._node._inc||d._node.ownerDocument._inc;if(d._inc!==m){var D=d._refresh(d._node);if(P(d,"length",D.length),!d.$$length||D.length<d.$$length)for(var o=D.length;o in d;o++)Object.prototype.hasOwnProperty.call(d,o)&&delete d[o];c(D,d),d._inc=m}}at.prototype.item=function(d){return tt(this),this[d]||null},l(at,G);function lt(){}function et(d,m){for(var D=d.length;D--;)if(d[D]===m)return D}function K(d,m,D,o){if(o?m[et(m,o)]=D:m[m.length++]=D,d){D.ownerElement=d;var O=d.ownerDocument;O&&(o&&jt(O,d,o),Tt(O,d,D))}}function ot(d,m,D){var o=et(m,D);if(o>=0){for(var O=m.length-1;o<O;)m[o]=m[++o];if(m.length=O,d){var F=d.ownerDocument;F&&(jt(F,d,D),D.ownerElement=null)}}else throw new q(N,new Error(d.tagName+"@"+D))}lt.prototype={length:0,item:G.prototype.item,getNamedItem:function(d){for(var m=this.length;m--;){var D=this[m];if(D.nodeName==d)return D}},setNamedItem:function(d){var m=d.ownerElement;if(m&&m!=this._ownerElement)throw new q(j);var D=this.getNamedItem(d.nodeName);return K(this._ownerElement,this,d,D),D},setNamedItemNS:function(d){var m=d.ownerElement,D;if(m&&m!=this._ownerElement)throw new q(j);return D=this.getNamedItemNS(d.namespaceURI,d.localName),K(this._ownerElement,this,d,D),D},removeNamedItem:function(d){var m=this.getNamedItem(d);return ot(this._ownerElement,this,m),m},removeNamedItemNS:function(d,m){var D=this.getNamedItemNS(d,m);return ot(this._ownerElement,this,D),D},getNamedItemNS:function(d,m){for(var D=this.length;D--;){var o=this[D];if(o.localName==m&&o.namespaceURI==d)return o}return null}};function yt(){}yt.prototype={hasFeature:function(d,m){return!0},createDocument:function(d,m,D){var o=new mt;if(o.implementation=this,o.childNodes=new G,o.doctype=D||null,D&&o.appendChild(D),m){var O=o.createElementNS(d,m);o.appendChild(O)}return o},createDocumentType:function(d,m,D){var o=new te;return o.name=d,o.nodeName=d,o.publicId=m||"",o.systemId=D||"",o}};function nt(){}nt.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(d,m){return Qt(this,d,m)},replaceChild:function(d,m){Qt(this,d,m,Gt),m&&this.removeChild(m)},removeChild:function(d){return gt(this,d)},appendChild:function(d){return this.insertBefore(d,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(d){return ut(this.ownerDocument||this,this,d)},normalize:function(){for(var d=this.firstChild;d;){var m=d.nextSibling;m&&m.nodeType==y&&d.nodeType==y?(this.removeChild(m),d.appendData(m.data)):(d.normalize(),d=m)}},isSupported:function(d,m){return this.ownerDocument.implementation.hasFeature(d,m)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(d){for(var m=this;m;){var D=m._nsMap;if(D){for(var o in D)if(Object.prototype.hasOwnProperty.call(D,o)&&D[o]===d)return o}m=m.nodeType==b?m.ownerDocument:m.parentNode}return null},lookupNamespaceURI:function(d){for(var m=this;m;){var D=m._nsMap;if(D&&d in D&&Object.prototype.hasOwnProperty.call(D,d))return D[d];m=m.nodeType==b?m.ownerDocument:m.parentNode}return null},isDefaultNamespace:function(d){var m=this.lookupPrefix(d);return m==null}};function ft(d){return d=="<"&&"&lt;"||d==">"&&"&gt;"||d=="&"&&"&amp;"||d=='"'&&"&quot;"||"&#"+d.charCodeAt()+";"}c(f,nt),c(f,nt.prototype);function Et(d,m){if(m(d))return!0;if(d=d.firstChild)do if(Et(d,m))return!0;while(d=d.nextSibling)}function mt(){this.ownerDocument=this}function Tt(d,m,D){d&&d._inc++;var o=D.namespaceURI;o===e.XMLNS&&(m._nsMap[D.prefix?D.localName:""]=D.value)}function jt(d,m,D,o){d&&d._inc++;var O=D.namespaceURI;O===e.XMLNS&&delete m._nsMap[D.prefix?D.localName:""]}function Pt(d,m,D){if(d&&d._inc){d._inc++;var o=m.childNodes;if(D)o[o.length++]=D;else{for(var O=m.firstChild,F=0;O;)o[F++]=O,O=O.nextSibling;o.length=F,delete o[o.length]}}}function gt(d,m){var D=m.previousSibling,o=m.nextSibling;return D?D.nextSibling=o:d.firstChild=o,o?o.previousSibling=D:d.lastChild=D,m.parentNode=null,m.previousSibling=null,m.nextSibling=null,Pt(d.ownerDocument,d),m}function It(d){return d&&(d.nodeType===nt.DOCUMENT_NODE||d.nodeType===nt.DOCUMENT_FRAGMENT_NODE||d.nodeType===nt.ELEMENT_NODE)}function Ut(d){return d&&(kt(d)||St(d)||At(d)||d.nodeType===nt.DOCUMENT_FRAGMENT_NODE||d.nodeType===nt.COMMENT_NODE||d.nodeType===nt.PROCESSING_INSTRUCTION_NODE)}function At(d){return d&&d.nodeType===nt.DOCUMENT_TYPE_NODE}function kt(d){return d&&d.nodeType===nt.ELEMENT_NODE}function St(d){return d&&d.nodeType===nt.TEXT_NODE}function Rt(d,m){var D=d.childNodes||[];if(t(D,kt)||At(m))return!1;var o=t(D,At);return!(m&&o&&D.indexOf(o)>D.indexOf(m))}function qt(d,m){var D=d.childNodes||[];function o(F){return kt(F)&&F!==m}if(t(D,o))return!1;var O=t(D,At);return!(m&&O&&D.indexOf(O)>D.indexOf(m))}function Vt(d,m,D){if(!It(d))throw new q(k,"Unexpected parent node type "+d.nodeType);if(D&&D.parentNode!==d)throw new q(N,"child not in parent");if(!Ut(m)||At(m)&&d.nodeType!==nt.DOCUMENT_NODE)throw new q(k,"Unexpected node type "+m.nodeType+" for parent node type "+d.nodeType)}function Lt(d,m,D){var o=d.childNodes||[],O=m.childNodes||[];if(m.nodeType===nt.DOCUMENT_FRAGMENT_NODE){var F=O.filter(kt);if(F.length>1||t(O,St))throw new q(k,"More than one element or text in fragment");if(F.length===1&&!Rt(d,D))throw new q(k,"Element in fragment can not be inserted before doctype")}if(kt(m)&&!Rt(d,D))throw new q(k,"Only one element can be added and only after doctype");if(At(m)){if(t(o,At))throw new q(k,"Only one doctype is allowed");var x=t(o,kt);if(D&&o.indexOf(x)<o.indexOf(D))throw new q(k,"Doctype can only be inserted before an element");if(!D&&x)throw new q(k,"Doctype can not be appended since element is present")}}function Gt(d,m,D){var o=d.childNodes||[],O=m.childNodes||[];if(m.nodeType===nt.DOCUMENT_FRAGMENT_NODE){var F=O.filter(kt);if(F.length>1||t(O,St))throw new q(k,"More than one element or text in fragment");if(F.length===1&&!qt(d,D))throw new q(k,"Element in fragment can not be inserted before doctype")}if(kt(m)&&!qt(d,D))throw new q(k,"Only one element can be added and only after doctype");if(At(m)){let W=function(pt){return At(pt)&&pt!==D};var V=W;if(t(o,W))throw new q(k,"Only one doctype is allowed");var x=t(o,kt);if(D&&o.indexOf(x)<o.indexOf(D))throw new q(k,"Doctype can only be inserted before an element")}}function Qt(d,m,D,o){Vt(d,m,D),d.nodeType===nt.DOCUMENT_NODE&&(o||Lt)(d,m,D);var O=m.parentNode;if(O&&O.removeChild(m),m.nodeType===w){var F=m.firstChild;if(F==null)return m;var x=m.lastChild}else F=x=m;var V=D?D.previousSibling:d.lastChild;F.previousSibling=V,x.nextSibling=D,V?V.nextSibling=F:d.firstChild=F,D==null?d.lastChild=x:D.previousSibling=x;do F.parentNode=d;while(F!==x&&(F=F.nextSibling));return Pt(d.ownerDocument||d,d),m.nodeType==w&&(m.firstChild=m.lastChild=null),m}function Kt(d,m){return m.parentNode&&m.parentNode.removeChild(m),m.parentNode=d,m.previousSibling=d.lastChild,m.nextSibling=null,m.previousSibling?m.previousSibling.nextSibling=m:d.firstChild=m,d.lastChild=m,Pt(d.ownerDocument,d,m),m}mt.prototype={nodeName:"#document",nodeType:E,doctype:null,documentElement:null,_inc:1,insertBefore:function(d,m){if(d.nodeType==w){for(var D=d.firstChild;D;){var o=D.nextSibling;this.insertBefore(D,m),D=o}return d}return Qt(this,d,m),d.ownerDocument=this,this.documentElement===null&&d.nodeType===p&&(this.documentElement=d),d},removeChild:function(d){return this.documentElement==d&&(this.documentElement=null),gt(this,d)},replaceChild:function(d,m){Qt(this,d,m,Gt),d.ownerDocument=this,m&&this.removeChild(m),kt(d)&&(this.documentElement=d)},importNode:function(d,m){return Q(this,d,m)},getElementById:function(d){var m=null;return Et(this.documentElement,function(D){if(D.nodeType==p&&D.getAttribute("id")==d)return m=D,!0}),m},getElementsByClassName:function(d){var m=s(d);return new at(this,function(D){var o=[];return m.length>0&&Et(D.documentElement,function(O){if(O!==D&&O.nodeType===p){var F=O.getAttribute("class");if(F){var x=d===F;if(!x){var V=s(F);x=m.every(h(V))}x&&o.push(O)}}}),o})},createElement:function(d){var m=new xt;m.ownerDocument=this,m.nodeName=d,m.tagName=d,m.localName=d,m.childNodes=new G;var D=m.attributes=new lt;return D._ownerElement=m,m},createDocumentFragment:function(){var d=new ue;return d.ownerDocument=this,d.childNodes=new G,d},createTextNode:function(d){var m=new ae;return m.ownerDocument=this,m.appendData(d),m},createComment:function(d){var m=new fe;return m.ownerDocument=this,m.appendData(d),m},createCDATASection:function(d){var m=new de;return m.ownerDocument=this,m.appendData(d),m},createProcessingInstruction:function(d,m){var D=new ce;return D.ownerDocument=this,D.tagName=D.nodeName=D.target=d,D.nodeValue=D.data=m,D},createAttribute:function(d){var m=new bt;return m.ownerDocument=this,m.name=d,m.nodeName=d,m.localName=d,m.specified=!0,m},createEntityReference:function(d){var m=new se;return m.ownerDocument=this,m.nodeName=d,m},createElementNS:function(d,m){var D=new xt,o=m.split(":"),O=D.attributes=new lt;return D.childNodes=new G,D.ownerDocument=this,D.nodeName=m,D.tagName=m,D.namespaceURI=d,o.length==2?(D.prefix=o[0],D.localName=o[1]):D.localName=m,O._ownerElement=D,D},createAttributeNS:function(d,m){var D=new bt,o=m.split(":");return D.ownerDocument=this,D.nodeName=m,D.name=m,D.namespaceURI=d,D.specified=!0,o.length==2?(D.prefix=o[0],D.localName=o[1]):D.localName=m,D}},l(mt,nt);function xt(){this._nsMap={}}xt.prototype={nodeType:p,hasAttribute:function(d){return this.getAttributeNode(d)!=null},getAttribute:function(d){var m=this.getAttributeNode(d);return m&&m.value||""},getAttributeNode:function(d){return this.attributes.getNamedItem(d)},setAttribute:function(d,m){var D=this.ownerDocument.createAttribute(d);D.value=D.nodeValue=""+m,this.setAttributeNode(D)},removeAttribute:function(d){var m=this.getAttributeNode(d);m&&this.removeAttributeNode(m)},appendChild:function(d){return d.nodeType===w?this.insertBefore(d,null):Kt(this,d)},setAttributeNode:function(d){return this.attributes.setNamedItem(d)},setAttributeNodeNS:function(d){return this.attributes.setNamedItemNS(d)},removeAttributeNode:function(d){return this.attributes.removeNamedItem(d.nodeName)},removeAttributeNS:function(d,m){var D=this.getAttributeNodeNS(d,m);D&&this.removeAttributeNode(D)},hasAttributeNS:function(d,m){return this.getAttributeNodeNS(d,m)!=null},getAttributeNS:function(d,m){var D=this.getAttributeNodeNS(d,m);return D&&D.value||""},setAttributeNS:function(d,m,D){var o=this.ownerDocument.createAttributeNS(d,m);o.value=o.nodeValue=""+D,this.setAttributeNode(o)},getAttributeNodeNS:function(d,m){return this.attributes.getNamedItemNS(d,m)},getElementsByTagName:function(d){return new at(this,function(m){var D=[];return Et(m,function(o){o!==m&&o.nodeType==p&&(d==="*"||o.tagName==d)&&D.push(o)}),D})},getElementsByTagNameNS:function(d,m){return new at(this,function(D){var o=[];return Et(D,function(O){O!==D&&O.nodeType===p&&(d==="*"||O.namespaceURI===d)&&(m==="*"||O.localName==m)&&o.push(O)}),o})}},mt.prototype.getElementsByTagName=xt.prototype.getElementsByTagName,mt.prototype.getElementsByTagNameNS=xt.prototype.getElementsByTagNameNS,l(xt,nt);function bt(){}bt.prototype.nodeType=b,l(bt,nt);function Mt(){}Mt.prototype={data:"",substringData:function(d,m){return this.data.substring(d,d+m)},appendData:function(d){d=this.data+d,this.nodeValue=this.data=d,this.length=d.length},insertData:function(d,m){this.replaceData(d,0,m)},appendChild:function(d){throw new Error(H[k])},deleteData:function(d,m){this.replaceData(d,m,"")},replaceData:function(d,m,D){var o=this.data.substring(0,d),O=this.data.substring(d+m);D=o+D+O,this.nodeValue=this.data=D,this.length=D.length}},l(Mt,nt);function ae(){}ae.prototype={nodeName:"#text",nodeType:y,splitText:function(d){var m=this.data,D=m.substring(d);m=m.substring(0,d),this.data=this.nodeValue=m,this.length=m.length;var o=this.ownerDocument.createTextNode(D);return this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling),o}},l(ae,Mt);function fe(){}fe.prototype={nodeName:"#comment",nodeType:M},l(fe,Mt);function de(){}de.prototype={nodeName:"#cdata-section",nodeType:R},l(de,Mt);function te(){}te.prototype.nodeType=B,l(te,nt);function ge(){}ge.prototype.nodeType=T,l(ge,nt);function le(){}le.prototype.nodeType=u,l(le,nt);function se(){}se.prototype.nodeType=A,l(se,nt);function ue(){}ue.prototype.nodeName="#document-fragment",ue.prototype.nodeType=w,l(ue,nt);function ce(){}ce.prototype.nodeType=g,l(ce,nt);function Xt(){}Xt.prototype.serializeToString=function(d,m,D){return he.call(d,m,D)},nt.prototype.toString=he;function he(d,m){var D=[],o=this.nodeType==9&&this.documentElement||this,O=o.prefix,F=o.namespaceURI;if(F&&O==null){var O=o.lookupPrefix(F);if(O==null)var x=[{namespace:F,prefix:null}]}return Y(this,D,d,m,x),D.join("")}function we(d,m,D){var o=d.prefix||"",O=d.namespaceURI;if(!O||o==="xml"&&O===e.XML||O===e.XMLNS)return!1;for(var F=D.length;F--;){var x=D[F];if(x.prefix===o)return x.namespace!==O}return!0}function _(d,m,D){d.push(" ",m,'="',D.replace(/[<&"]/g,ft),'"')}function Y(d,m,D,o,O){if(O||(O=[]),o)if(d=o(d),d){if(typeof d=="string"){m.push(d);return}}else return;switch(d.nodeType){case p:var F=d.attributes,x=F.length,Nt=d.firstChild,V=d.tagName;D=e.isHTML(d.namespaceURI)||D;var W=V;if(!D&&!d.prefix&&d.namespaceURI){for(var pt,st=0;st<F.length;st++)if(F.item(st).name==="xmlns"){pt=F.item(st).value;break}if(!pt)for(var dt=O.length-1;dt>=0;dt--){var wt=O[dt];if(wt.prefix===""&&wt.namespace===d.namespaceURI){pt=wt.namespace;break}}if(pt!==d.namespaceURI)for(var dt=O.length-1;dt>=0;dt--){var wt=O[dt];if(wt.namespace===d.namespaceURI){wt.prefix&&(W=wt.prefix+":"+V);break}}}m.push("<",W);for(var re=0;re<x;re++){var Ht=F.item(re);Ht.prefix=="xmlns"?O.push({prefix:Ht.localName,namespace:Ht.value}):Ht.nodeName=="xmlns"&&O.push({prefix:"",namespace:Ht.value})}for(var re=0;re<x;re++){var Ht=F.item(re);if(we(Ht,D,O)){var Ct=Ht.prefix||"",Zt=Ht.namespaceURI;_(m,Ct?"xmlns:"+Ct:"xmlns",Zt),O.push({prefix:Ct,namespace:Zt})}Y(Ht,m,D,o,O)}if(V===W&&we(d,D,O)){var Ct=d.prefix||"",Zt=d.namespaceURI;_(m,Ct?"xmlns:"+Ct:"xmlns",Zt),O.push({prefix:Ct,namespace:Zt})}if(Nt||D&&!/^(?:meta|link|img|br|hr|input)$/i.test(V)){if(m.push(">"),D&&/^script$/i.test(V))for(;Nt;)Nt.data?m.push(Nt.data):Y(Nt,m,D,o,O.slice()),Nt=Nt.nextSibling;else for(;Nt;)Y(Nt,m,D,o,O.slice()),Nt=Nt.nextSibling;m.push("</",W,">")}else m.push("/>");return;case E:case w:for(var Nt=d.firstChild;Nt;)Y(Nt,m,D,o,O.slice()),Nt=Nt.nextSibling;return;case b:return _(m,d.name,d.value);case y:return m.push(d.data.replace(/[<&]/g,ft).replace(/]]>/g,"]]&gt;"));case R:return m.push("<![CDATA[",d.data,"]]>");case M:return m.push("<!--",d.data,"-->");case B:var ie=d.publicId,ve=d.systemId;if(m.push("<!DOCTYPE ",d.name),ie)m.push(" PUBLIC ",ie),ve&&ve!="."&&m.push(" ",ve),m.push(">");else if(ve&&ve!=".")m.push(" SYSTEM ",ve,">");else{var ke=d.internalSubset;ke&&m.push(" [",ke,"]"),m.push(">")}return;case g:return m.push("<?",d.target," ",d.data,"?>");case A:return m.push("&",d.nodeName,";");default:m.push("??",d.nodeName)}}function Q(d,m,D){var o;switch(m.nodeType){case p:o=m.cloneNode(!1),o.ownerDocument=d;case w:break;case b:D=!0;break}if(o||(o=m.cloneNode(!1)),o.ownerDocument=d,o.parentNode=null,D)for(var O=m.firstChild;O;)o.appendChild(Q(d,O,D)),O=O.nextSibling;return o}function ut(d,m,D){var o=new m.constructor;for(var O in m)if(Object.prototype.hasOwnProperty.call(m,O)){var F=m[O];typeof F!="object"&&F!=o[O]&&(o[O]=F)}switch(m.childNodes&&(o.childNodes=new G),o.ownerDocument=d,o.nodeType){case p:var x=m.attributes,V=o.attributes=new lt,W=x.length;V._ownerElement=o;for(var pt=0;pt<W;pt++)o.setAttributeNode(ut(d,x.item(pt),!0));break;case b:D=!0}if(D)for(var st=m.firstChild;st;)o.appendChild(ut(d,st,D)),st=st.nextSibling;return o}function P(d,m,D){d[m]=D}try{if(Object.defineProperty){let d=function(m){switch(m.nodeType){case p:case w:var D=[];for(m=m.firstChild;m;)m.nodeType!==7&&m.nodeType!==8&&D.push(d(m)),m=m.nextSibling;return D.join("");default:return m.nodeValue}};var X=d;Object.defineProperty(at.prototype,"length",{get:function(){return tt(this),this.$$length}}),Object.defineProperty(nt.prototype,"textContent",{get:function(){return d(this)},set:function(m){switch(this.nodeType){case p:case w:for(;this.firstChild;)this.removeChild(this.firstChild);(m||String(m))&&this.appendChild(this.ownerDocument.createTextNode(m));break;default:this.data=m,this.value=m,this.nodeValue=m}}}),P=function(m,D,o){m["$$"+D]=o}}}catch{}return Le.DocumentType=te,Le.DOMException=q,Le.DOMImplementation=yt,Le.Element=xt,Le.Node=nt,Le.NodeList=G,Le.XMLSerializer=Xt,Le}var ze={},Xa={},c2;function b0(){return c2||(c2=1,(function(v){var t=wa().freeze;v.XML_ENTITIES=t({amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}),v.HTML_ENTITIES=t({Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",AMP:"&",amp:"&",And:"⩓",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",ap:"≈",apacir:"⩯",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",Barwed:"⌆",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",Because:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxDL:"╗",boxDl:"╖",boxdL:"╕",boxdl:"┐",boxDR:"╔",boxDr:"╓",boxdR:"╒",boxdr:"┌",boxH:"═",boxh:"─",boxHD:"╦",boxHd:"╤",boxhD:"╥",boxhd:"┬",boxHU:"╩",boxHu:"╧",boxhU:"╨",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxUL:"╝",boxUl:"╜",boxuL:"╛",boxul:"┘",boxUR:"╚",boxUr:"╙",boxuR:"╘",boxur:"└",boxV:"║",boxv:"│",boxVH:"╬",boxVh:"╫",boxvH:"╪",boxvh:"┼",boxVL:"╣",boxVl:"╢",boxvL:"╡",boxvl:"┤",boxVR:"╠",boxVr:"╟",boxvR:"╞",boxvr:"├",bprime:"‵",Breve:"˘",breve:"˘",brvbar:"¦",Bscr:"ℬ",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",Cap:"⋒",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",CenterDot:"·",centerdot:"·",Cfr:"ℭ",cfr:"𝔠",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",Colon:"∷",colon:":",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",Conint:"∯",conint:"∮",ContourIntegral:"∮",Copf:"ℂ",copf:"𝕔",coprod:"∐",Coproduct:"∐",COPY:"©",copy:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",Cross:"⨯",cross:"✗",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",Cup:"⋓",cup:"∪",cupbrcap:"⩈",CupCap:"≍",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",Dagger:"‡",dagger:"†",daleth:"ℸ",Darr:"↡",dArr:"⇓",darr:"↓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",DD:"ⅅ",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",Diamond:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",Downarrow:"⇓",downarrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",ecir:"≖",Ecirc:"Ê",ecirc:"ê",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",eDot:"≑",edot:"ė",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",Escr:"ℰ",escr:"ℯ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",ExponentialE:"ⅇ",exponentiale:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",ForAll:"∀",forall:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",Fscr:"ℱ",fscr:"𝒻",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",gE:"≧",ge:"≥",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",Gg:"⋙",gg:"≫",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gnE:"≩",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",Gt:"≫",GT:">",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",hArr:"⇔",harr:"↔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",Hfr:"ℌ",hfr:"𝔥",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",Hopf:"ℍ",hopf:"𝕙",horbar:"―",HorizontalLine:"─",Hscr:"ℋ",hscr:"𝒽",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",Ifr:"ℑ",ifr:"𝔦",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Im:"ℑ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",Int:"∬",int:"∫",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",Iscr:"ℐ",iscr:"𝒾",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",Lang:"⟪",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",Larr:"↞",lArr:"⇐",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",lAtail:"⤛",latail:"⤙",late:"⪭",lates:"⪭︀",lBarr:"⤎",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",lE:"≦",le:"≤",LeftAngleBracket:"⟨",LeftArrow:"←",Leftarrow:"⇐",leftarrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",Ll:"⋘",ll:"≪",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lnE:"≨",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftarrow:"⟵",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longleftrightarrow:"⟷",longmapsto:"⟼",LongRightArrow:"⟶",Longrightarrow:"⟹",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",Lscr:"ℒ",lscr:"𝓁",Lsh:"↰",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",Lt:"≪",LT:"<",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",Mscr:"ℳ",mscr:"𝓂",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",ne:"≠",nearhk:"⤤",neArr:"⇗",nearr:"↗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlArr:"⇍",nlarr:"↚",nldr:"‥",nlE:"≦̸",nle:"≰",nLeftarrow:"⇍",nleftarrow:"↚",nLeftrightarrow:"⇎",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",nopf:"𝕟",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nRightarrow:"⇏",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nVDash:"⊯",nVdash:"⊮",nvDash:"⊭",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwArr:"⇖",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",ocir:"⊚",Ocirc:"Ô",ocirc:"ô",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",Or:"⩔",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",Otimes:"⨷",otimes:"⊗",otimesas:"⨶",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",Popf:"ℙ",popf:"𝕡",pound:"£",Pr:"⪻",pr:"≺",prap:"⪷",prcue:"≼",prE:"⪳",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",Prime:"″",prime:"′",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",Qopf:"ℚ",qopf:"𝕢",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",QUOT:'"',quot:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",Rang:"⟫",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",Rarr:"↠",rArr:"⇒",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",rAtail:"⤜",ratail:"⤚",ratio:"∶",rationals:"ℚ",RBarr:"⤐",rBarr:"⤏",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",REG:"®",reg:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",Rfr:"ℜ",rfr:"𝔯",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrow:"→",Rightarrow:"⇒",rightarrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",Ropf:"ℝ",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",Rscr:"ℛ",rscr:"𝓇",Rsh:"↱",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",Sc:"⪼",sc:"≻",scap:"⪸",Scaron:"Š",scaron:"š",sccue:"≽",scE:"⪴",sce:"⪰",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",seArr:"⇘",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",Square:"□",square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",Sub:"⋐",sub:"⊂",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",Subset:"⋐",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",Sum:"∑",sum:"∑",sung:"♪",Sup:"⋑",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",Supset:"⋑",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swArr:"⇙",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",Therefore:"∴",therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",Tilde:"∼",tilde:"˜",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",TRADE:"™",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",Uarr:"↟",uArr:"⇑",uarr:"↑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrow:"↑",Uparrow:"⇑",uparrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",Updownarrow:"⇕",updownarrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",upsi:"υ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",vArr:"⇕",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",Vbar:"⫫",vBar:"⫨",vBarv:"⫩",Vcy:"В",vcy:"в",VDash:"⊫",Vdash:"⊩",vDash:"⊨",vdash:"⊢",Vdashl:"⫦",Vee:"⋁",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",Verbar:"‖",verbar:"|",Vert:"‖",vert:"|",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",Wedge:"⋀",wedge:"∧",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",Xi:"Ξ",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",Yuml:"Ÿ",yuml:"ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",Zfr:"ℨ",zfr:"𝔷",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",Zopf:"ℤ",zopf:"𝕫",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}),v.entityMap=v.HTML_ENTITIES})(Xa)),Xa}var oa={},l2;function A0(){if(l2)return oa;l2=1;var v=wa().NAMESPACE,t=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,e=new RegExp("[\\-\\.0-9"+t.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),r=new RegExp("^"+t.source+e.source+"*(?::"+t.source+e.source+"*)?$"),i=0,n=1,s=2,h=3,c=4,l=5,f=6,p=7;function b(k,N){this.message=k,this.locator=N,Error.captureStackTrace&&Error.captureStackTrace(this,b)}b.prototype=new Error,b.prototype.name=b.name;function y(){}y.prototype={parse:function(k,N,j){var q=this.domBuilder;q.startDocument(),B(N,N={}),R(k,N,j,q,this.errorHandler),q.endDocument()}};function R(k,N,j,q,G){function at(xt){if(xt>65535){xt-=65536;var bt=55296+(xt>>10),Mt=56320+(xt&1023);return String.fromCharCode(bt,Mt)}else return String.fromCharCode(xt)}function tt(xt){var bt=xt.slice(1,-1);return bt in j?j[bt]:bt.charAt(0)==="#"?at(parseInt(bt.substr(1).replace("x","0x"))):(G.error("entity not found:"+xt),xt)}function lt(xt){if(xt>mt){var bt=k.substring(mt,xt).replace(/&#?\w+;/g,tt);nt&&et(mt),q.characters(bt,0,xt-mt),mt=xt}}function et(xt,bt){for(;xt>=ot&&(bt=yt.exec(k));)K=bt.index,ot=K+bt[0].length,nt.lineNumber++;nt.columnNumber=xt-K+1}for(var K=0,ot=0,yt=/.*(?:\r\n?|\n)|.*$/g,nt=q.locator,ft=[{currentNSMap:N}],Et={},mt=0;;){try{var Tt=k.indexOf("<",mt);if(Tt<0){if(!k.substr(mt).match(/^\s*$/)){var jt=q.doc,Pt=jt.createTextNode(k.substr(mt));jt.appendChild(Pt),q.currentElement=Pt}return}switch(Tt>mt&&lt(Tt),k.charAt(Tt+1)){case"/":var Vt=k.indexOf(">",Tt+3),gt=k.substring(Tt+2,Vt).replace(/[ \t\n\r]+$/g,""),It=ft.pop();Vt<0?(gt=k.substring(Tt+2).replace(/[\s<].*/,""),G.error("end tag name: "+gt+" is not complete:"+It.tagName),Vt=Tt+1+gt.length):gt.match(/\s</)&&(gt=gt.replace(/[\s<].*/,""),G.error("end tag name: "+gt+" maybe not complete"),Vt=Tt+1+gt.length);var Ut=It.localNSMap,At=It.tagName==gt,kt=At||It.tagName&&It.tagName.toLowerCase()==gt.toLowerCase();if(kt){if(q.endElement(It.uri,It.localName,gt),Ut)for(var St in Ut)Object.prototype.hasOwnProperty.call(Ut,St)&&q.endPrefixMapping(St);At||G.fatalError("end tag name: "+gt+" is not match the current start tagName:"+It.tagName)}else ft.push(It);Vt++;break;case"?":nt&&et(Tt),Vt=T(k,Tt,q);break;case"!":nt&&et(Tt),Vt=w(k,Tt,q,G);break;default:nt&&et(Tt);var Rt=new L,qt=ft[ft.length-1].currentNSMap,Vt=u(k,Tt,Rt,qt,tt,G),Lt=Rt.length;if(!Rt.closed&&E(k,Vt,Rt.tagName,Et)&&(Rt.closed=!0,j.nbsp||G.warning("unclosed xml attribute")),nt&&Lt){for(var Gt=A(nt,{}),Qt=0;Qt<Lt;Qt++){var Kt=Rt[Qt];et(Kt.offset),Kt.locator=A(nt,{})}q.locator=Gt,g(Rt,q,qt)&&ft.push(Rt),q.locator=nt}else g(Rt,q,qt)&&ft.push(Rt);v.isHTML(Rt.uri)&&!Rt.closed?Vt=M(k,Vt,Rt.tagName,tt,q):Vt++}}catch(xt){if(xt instanceof b)throw xt;G.error("element parse error: "+xt),Vt=-1}Vt>mt?mt=Vt:lt(Math.max(Tt,mt)+1)}}function A(k,N){return N.lineNumber=k.lineNumber,N.columnNumber=k.columnNumber,N}function u(k,N,j,q,G,at){function tt(nt,ft,Et){j.attributeNames.hasOwnProperty(nt)&&at.fatalError("Attribute "+nt+" redefined"),j.addValue(nt,ft,Et)}for(var lt,et,K=++N,ot=i;;){var yt=k.charAt(K);switch(yt){case"=":if(ot===n)lt=k.slice(N,K),ot=h;else if(ot===s)ot=h;else throw new Error("attribute equal must after attrName");break;case"'":case'"':if(ot===h||ot===n)if(ot===n&&(at.warning('attribute value must after "="'),lt=k.slice(N,K)),N=K+1,K=k.indexOf(yt,N),K>0)et=k.slice(N,K).replace(/&#?\w+;/g,G),tt(lt,et,N-1),ot=l;else throw new Error("attribute value no end '"+yt+"' match");else if(ot==c)et=k.slice(N,K).replace(/&#?\w+;/g,G),tt(lt,et,N),at.warning('attribute "'+lt+'" missed start quot('+yt+")!!"),N=K+1,ot=l;else throw new Error('attribute value must after "="');break;case"/":switch(ot){case i:j.setTagName(k.slice(N,K));case l:case f:case p:ot=p,j.closed=!0;case c:case n:break;case s:j.closed=!0;break;default:throw new Error("attribute invalid close char('/')")}break;case"":return at.error("unexpected end of input"),ot==i&&j.setTagName(k.slice(N,K)),K;case">":switch(ot){case i:j.setTagName(k.slice(N,K));case l:case f:case p:break;case c:case n:et=k.slice(N,K),et.slice(-1)==="/"&&(j.closed=!0,et=et.slice(0,-1));case s:ot===s&&(et=lt),ot==c?(at.warning('attribute "'+et+'" missed quot(")!'),tt(lt,et.replace(/&#?\w+;/g,G),N)):((!v.isHTML(q[""])||!et.match(/^(?:disabled|checked|selected)$/i))&&at.warning('attribute "'+et+'" missed value!! "'+et+'" instead!!'),tt(et,et,N));break;case h:throw new Error("attribute value missed!!")}return K;case"":yt=" ";default:if(yt<=" ")switch(ot){case i:j.setTagName(k.slice(N,K)),ot=f;break;case n:lt=k.slice(N,K),ot=s;break;case c:var et=k.slice(N,K).replace(/&#?\w+;/g,G);at.warning('attribute "'+et+'" missed quot(")!!'),tt(lt,et,N);case l:ot=f;break}else switch(ot){case s:j.tagName,(!v.isHTML(q[""])||!lt.match(/^(?:disabled|checked|selected)$/i))&&at.warning('attribute "'+lt+'" missed value!! "'+lt+'" instead2!!'),tt(lt,lt,N),N=K,ot=n;break;case l:at.warning('attribute space is required"'+lt+'"!!');case f:ot=n,N=K;break;case h:ot=c,N=K;break;case p:throw new Error("elements closed character '/' and '>' must be connected to")}}K++}}function g(k,N,j){for(var q=k.tagName,G=null,yt=k.length;yt--;){var at=k[yt],tt=at.qName,lt=at.value,nt=tt.indexOf(":");if(nt>0)var et=at.prefix=tt.slice(0,nt),K=tt.slice(nt+1),ot=et==="xmlns"&&K;else K=tt,et=null,ot=tt==="xmlns"&&"";at.localName=K,ot!==!1&&(G==null&&(G={},B(j,j={})),j[ot]=G[ot]=lt,at.uri=v.XMLNS,N.startPrefixMapping(ot,lt))}for(var yt=k.length;yt--;){at=k[yt];var et=at.prefix;et&&(et==="xml"&&(at.uri=v.XML),et!=="xmlns"&&(at.uri=j[et||""]))}var nt=q.indexOf(":");nt>0?(et=k.prefix=q.slice(0,nt),K=k.localName=q.slice(nt+1)):(et=null,K=k.localName=q);var ft=k.uri=j[et||""];if(N.startElement(ft,K,q,k),k.closed){if(N.endElement(ft,K,q),G)for(et in G)Object.prototype.hasOwnProperty.call(G,et)&&N.endPrefixMapping(et)}else return k.currentNSMap=j,k.localNSMap=G,!0}function M(k,N,j,q,G){if(/^(?:script|textarea)$/i.test(j)){var at=k.indexOf("</"+j+">",N),tt=k.substring(N+1,at);if(/[&<]/.test(tt))return/^script$/i.test(j)?(G.characters(tt,0,tt.length),at):(tt=tt.replace(/&#?\w+;/g,q),G.characters(tt,0,tt.length),at)}return N+1}function E(k,N,j,q){var G=q[j];return G==null&&(G=k.lastIndexOf("</"+j+">"),G<N&&(G=k.lastIndexOf("</"+j)),q[j]=G),G<N}function B(k,N){for(var j in k)Object.prototype.hasOwnProperty.call(k,j)&&(N[j]=k[j])}function w(k,N,j,q){var G=k.charAt(N+2);switch(G){case"-":if(k.charAt(N+3)==="-"){var at=k.indexOf("-->",N+4);return at>N?(j.comment(k,N+4,at-N-4),at+3):(q.error("Unclosed comment"),-1)}else return-1;default:if(k.substr(N+3,6)=="CDATA["){var at=k.indexOf("]]>",N+9);return j.startCDATA(),j.characters(k,N+9,at-N-9),j.endCDATA(),at+3}var tt=H(k,N),lt=tt.length;if(lt>1&&/!doctype/i.test(tt[0][0])){var et=tt[1][0],K=!1,ot=!1;lt>3&&(/^public$/i.test(tt[2][0])?(K=tt[3][0],ot=lt>4&&tt[4][0]):/^system$/i.test(tt[2][0])&&(ot=tt[3][0]));var yt=tt[lt-1];return j.startDTD(et,K,ot),j.endDTD(),yt.index+yt[0].length}}return-1}function T(k,N,j){var q=k.indexOf("?>",N);if(q){var G=k.substring(N,q).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return G?(G[0].length,j.processingInstruction(G[1],G[2]),q+2):-1}return-1}function L(){this.attributeNames={}}L.prototype={setTagName:function(k){if(!r.test(k))throw new Error("invalid tagName:"+k);this.tagName=k},addValue:function(k,N,j){if(!r.test(k))throw new Error("invalid attribute:"+k);this.attributeNames[k]=this.length,this[this.length++]={qName:k,value:N,offset:j}},length:0,getLocalName:function(k){return this[k].localName},getLocator:function(k){return this[k].locator},getQName:function(k){return this[k].qName},getURI:function(k){return this[k].uri},getValue:function(k){return this[k].value}};function H(k,N){var j,q=[],G=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(G.lastIndex=N,G.exec(k);j=G.exec(k);)if(q.push(j),j[1])return q}return oa.XMLReader=y,oa.ParseError=b,oa}var u2;function C0(){if(u2)return ze;u2=1;var v=wa(),t=xs(),e=b0(),r=A0(),i=t.DOMImplementation,n=v.NAMESPACE,s=r.ParseError,h=r.XMLReader;function c(A){this.options=A||{locator:{}}}c.prototype.parseFromString=function(A,u){var g=this.options,M=new h,E=g.domBuilder||new f,B=g.errorHandler,w=g.locator,T=g.xmlns||{},L=/\/x?html?$/.test(u),H=L?e.HTML_ENTITIES:e.XML_ENTITIES;return w&&E.setDocumentLocator(w),M.errorHandler=l(B,E,w),M.domBuilder=g.domBuilder||E,L&&(T[""]=n.HTML),T.xml=T.xml||n.XML,A&&typeof A=="string"?M.parse(A,T,H):M.errorHandler.error("invalid doc source"),E.doc};function l(A,u,g){if(!A){if(u instanceof f)return u;A=u}var M={},E=A instanceof Function;g=g||{};function B(w){var T=A[w];!T&&E&&(T=A.length==2?function(L){A(w,L)}:A),M[w]=T&&function(L){T("[xmldom "+w+"]	"+L+b(g))}||function(){}}return B("warning"),B("error"),B("fatalError"),M}function f(){this.cdata=!1}function p(A,u){u.lineNumber=A.lineNumber,u.columnNumber=A.columnNumber}f.prototype={startDocument:function(){this.doc=new i().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(A,u,g,M){var E=this.doc,B=E.createElementNS(A,g||u),w=M.length;R(this,B),this.currentElement=B,this.locator&&p(this.locator,B);for(var T=0;T<w;T++){var A=M.getURI(T),L=M.getValue(T),g=M.getQName(T),H=E.createAttributeNS(A,g);this.locator&&p(M.getLocator(T),H),H.value=H.nodeValue=L,B.setAttributeNode(H)}},endElement:function(A,u,g){var M=this.currentElement;M.tagName,this.currentElement=M.parentNode},startPrefixMapping:function(A,u){},endPrefixMapping:function(A){},processingInstruction:function(A,u){var g=this.doc.createProcessingInstruction(A,u);this.locator&&p(this.locator,g),R(this,g)},ignorableWhitespace:function(A,u,g){},characters:function(A,u,g){if(A=y.apply(this,arguments),A){if(this.cdata)var M=this.doc.createCDATASection(A);else var M=this.doc.createTextNode(A);this.currentElement?this.currentElement.appendChild(M):/^\s*$/.test(A)&&this.doc.appendChild(M),this.locator&&p(this.locator,M)}},skippedEntity:function(A){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(A){(this.locator=A)&&(A.lineNumber=0)},comment:function(A,u,g){A=y.apply(this,arguments);var M=this.doc.createComment(A);this.locator&&p(this.locator,M),R(this,M)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(A,u,g){var M=this.doc.implementation;if(M&&M.createDocumentType){var E=M.createDocumentType(A,u,g);this.locator&&p(this.locator,E),R(this,E),this.doc.doctype=E}},warning:function(A){console.warn("[xmldom warning]	"+A,b(this.locator))},error:function(A){console.error("[xmldom error]	"+A,b(this.locator))},fatalError:function(A){throw new s(A,this.locator)}};function b(A){if(A)return`
@`+(A.systemId||"")+"#[line:"+A.lineNumber+",col:"+A.columnNumber+"]"}function y(A,u,g){return typeof A=="string"?A.substr(u,g):A.length>=u+g||u?new java.lang.String(A,u,g)+"":A}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(A){f.prototype[A]=function(){return null}});function R(A,u){A.currentElement?A.currentElement.appendChild(u):A.doc.appendChild(u)}return ze.__DOMHandler=f,ze.DOMParser=c,ze.DOMImplementation=t.DOMImplementation,ze.XMLSerializer=t.XMLSerializer,ze}var p2;function _0(){if(p2)return Qe;p2=1;var v=xs();return Qe.DOMImplementation=v.DOMImplementation,Qe.XMLSerializer=v.XMLSerializer,Qe.DOMParser=C0().DOMParser,Qe}var ws=_0();const S1=typeof window<"u"?window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame:!1,E0=1,S0=3,bs=typeof URL<"u"?URL:typeof window<"u"?window.URL||window.webkitURL||window.mozURL:void 0;function ba(){var v=new Date().getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(v+Math.random()*16)%16|0;return v=Math.floor(v/16),(e=="x"?r:r&7|8).toString(16)});return t}function D0(){return Math.max(document.documentElement.clientHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight)}function As(v){return!!(v&&v.nodeType==1)}function Yt(v){return!isNaN(parseFloat(v))&&isFinite(v)}function Cs(v){let t=parseFloat(v);return Yt(v)===!1?!1:typeof v=="string"&&v.indexOf(".")>-1?!0:Math.floor(t)!==t}function qe(v){var t=["Webkit","webkit","Moz","O","ms"],e=["-webkit-","-webkit-","-moz-","-o-","-ms-"],r=v.toLowerCase(),i=t.length;if(typeof document>"u"||typeof document.body.style[r]<"u")return v;for(var n=0;n<i;n++)if(typeof document.body.style[e[n]+r]<"u")return e[n]+r;return v}function _s(v){for(var t=1,e=arguments.length;t<e;t++){var r=arguments[t];for(var i in r)v[i]===void 0&&(v[i]=r[i])}return v}function oe(v){var t=[].slice.call(arguments,1);return t.forEach(function(e){e&&Object.getOwnPropertyNames(e).forEach(function(r){Object.defineProperty(v,r,Object.getOwnPropertyDescriptor(e,r))})}),v}function T0(v,t,e){var r=Xe(v,t,e);return t.splice(r,0,v),r}function Xe(v,t,e,r,i){var n=r||0,s=i||t.length,h=parseInt(n+(s-n)/2),c;return e||(e=function(l,f){if(l>f)return 1;if(l<f)return-1;if(l==f)return 0}),s-n<=0?h:(c=e(t[h],v),s-n===1?c>=0?h:h+1:c===0?h:c===-1?Xe(v,t,e,h,s):Xe(v,t,e,n,h))}function pa(v,t,e,r,i){var n=r||0,s=i||t.length,h=parseInt(n+(s-n)/2),c;return e||(e=function(l,f){if(l>f)return 1;if(l<f)return-1;if(l==f)return 0}),s-n<=0?-1:(c=e(t[h],v),s-n===1?c===0?h:-1:c===0?h:c===-1?pa(v,t,e,h,s):pa(v,t,e,n,h))}function la(v){var t=window.getComputedStyle(v),e=["width","paddingRight","paddingLeft","marginRight","marginLeft","borderRightWidth","borderLeftWidth"],r=["height","paddingTop","paddingBottom","marginTop","marginBottom","borderTopWidth","borderBottomWidth"],i=0,n=0;return e.forEach(function(s){i+=parseFloat(t[s])||0}),r.forEach(function(s){n+=parseFloat(t[s])||0}),{height:n,width:i}}function fa(v){var t=window.getComputedStyle(v),e=["paddingRight","paddingLeft","marginRight","marginLeft","borderRightWidth","borderLeftWidth"],r=["paddingTop","paddingBottom","marginTop","marginBottom","borderTopWidth","borderBottomWidth"],i=0,n=0;return e.forEach(function(s){i+=parseFloat(t[s])||0}),r.forEach(function(s){n+=parseFloat(t[s])||0}),{height:n,width:i}}function y1(v){let t,e=v.ownerDocument;if(v.nodeType==Node.TEXT_NODE){let r=e.createRange();r.selectNodeContents(v),t=r.getBoundingClientRect()}else t=v.getBoundingClientRect();return t}function va(){var v=window.innerWidth,t=window.innerHeight;return{top:0,left:0,right:v,bottom:t,width:v,height:t}}function D1(v,t){for(var e=v.parentNode,r=e.childNodes,i,n=-1,s=0;s<r.length&&(i=r[s],i.nodeType===t&&n++,i!=v);s++);return n}function k0(v){return D1(v,S0)}function Es(v){return D1(v,E0)}function ra(v){return["xml","opf","ncx"].indexOf(v)>-1}function Ss(v,t){return new Blob([v],{type:t})}function ga(v,t){var e,r=Ss(v,t);return e=bs.createObjectURL(r),e}function Ds(v){return bs.revokeObjectURL(v)}function x1(v,t){var e,r;if(typeof v=="string")return e=btoa(v),r="data:"+t+";base64,"+e,r}function Ts(v){return Object.prototype.toString.call(v).slice(8,-1)}function De(v,t,e){var r,i;return typeof DOMParser>"u"||e?i=ws.DOMParser:i=DOMParser,v.charCodeAt(0)===65279&&(v=v.slice(1)),r=new i().parseFromString(v,t),r}function Wt(v,t){var e;if(!v)throw new Error("No Element Provided");if(typeof v.querySelector<"u")return v.querySelector(t);if(e=v.getElementsByTagName(t),e.length)return e[0]}function He(v,t){return typeof v.querySelector<"u"?v.querySelectorAll(t):v.getElementsByTagName(t)}function Ze(v,t,e){var r,i;if(typeof v.querySelector<"u"){t+="[";for(var n in e)t+=n+"~='"+e[n]+"'";return t+="]",v.querySelector(t)}else if(r=v.getElementsByTagName(t),i=Array.prototype.slice.call(r,0).filter(function(s){for(var h in e)if(s.getAttribute(h)===e[h])return!0;return!1}),i)return i[0]}function ma(v,t){var e=v.ownerDocument||v;typeof e.createTreeWalker<"u"?ks(v,t,NodeFilter.SHOW_TEXT):T1(v,function(r){r&&r.nodeType===3&&t(r)})}function ks(v,t,e){var r=document.createTreeWalker(v,e,null,!1);let i;for(;i=r.nextNode();)t(i)}function T1(v,t){if(t(v))return!0;if(v=v.firstChild,v)do{if(T1(v,t))return!0;v=v.nextSibling}while(v)}function Ls(v){return new Promise(function(t,e){var r=new FileReader;r.readAsDataURL(v),r.onloadend=function(){t(r.result)}})}function Bt(){this.resolve=null,this.reject=null,this.id=ba(),this.promise=new Promise((v,t)=>{this.resolve=v,this.reject=t}),Object.freeze(this)}function Ma(v,t,e){var r;if(typeof v.querySelector<"u"&&(r=v.querySelector(`${t}[*|type="${e}"]`)),!r||r.length===0){r=He(v,t);for(var i=0;i<r.length;i++)if(r[i].getAttributeNS("http://www.idpf.org/2007/ops","type")===e||r[i].getAttribute("epub:type")===e)return r[i]}else return r}function w1(v){for(var t=[],e=v.childNodes,r=0;r<e.length;r++){let i=e[r];i.nodeType===1&&t.push(i)}return t}function b1(v){for(var t=[v];v;v=v.parentNode)t.unshift(v);return t}function We(v,t,e){for(var r=[],i=v.childNodes,n=0;n<i.length;n++){let s=i[n];if(s.nodeType===1&&s.nodeName.toLowerCase()===t){if(e)return s;r.push(s)}}if(!e)return r}function L0(v,t){let e;if(!(v===null||t===""))for(e=v.parentNode;e.nodeType===1;){if(e.tagName.toLowerCase()===t)return e;e=e.parentNode}}class Rs{constructor(){this.collapsed=!1,this.commonAncestorContainer=void 0,this.endContainer=void 0,this.endOffset=void 0,this.startContainer=void 0,this.startOffset=void 0}setStart(t,e){this.startContainer=t,this.startOffset=e,this.endContainer?this.commonAncestorContainer=this._commonAncestorContainer():this.collapse(!0),this._checkCollapsed()}setEnd(t,e){this.endContainer=t,this.endOffset=e,this.startContainer?(this.collapsed=!1,this.commonAncestorContainer=this._commonAncestorContainer()):this.collapse(!1),this._checkCollapsed()}collapse(t){this.collapsed=!0,t?(this.endContainer=this.startContainer,this.endOffset=this.startOffset,this.commonAncestorContainer=this.startContainer.parentNode):(this.startContainer=this.endContainer,this.startOffset=this.endOffset,this.commonAncestorContainer=this.endOffset.parentNode)}selectNode(t){let e=t.parentNode,r=Array.prototype.indexOf.call(e.childNodes,t);this.setStart(e,r),this.setEnd(e,r+1)}selectNodeContents(t){t.childNodes[t.childNodes-1];let e=t.nodeType===3?t.textContent.length:parent.childNodes.length;this.setStart(t,0),this.setEnd(t,e)}_commonAncestorContainer(t,e){var r=b1(t||this.startContainer),i=b1(e||this.endContainer);if(r[0]==i[0]){for(var n=0;n<r.length;n++)if(r[n]!=i[n])return r[n-1]}}_checkCollapsed(){this.startContainer===this.endContainer&&this.startOffset===this.endOffset?this.collapsed=!0:this.collapsed=!1}toString(){}}const R0=Object.freeze(Object.defineProperty({__proto__:null,RangeObject:Rs,blob2base64:Ls,borders:fa,bounds:la,createBase64Url:x1,createBlob:Ss,createBlobUrl:ga,defaults:_s,defer:Bt,documentHeight:D0,extend:oe,filterChildren:We,findChildren:w1,getParentByTagName:L0,indexOfElementNode:Es,indexOfNode:D1,indexOfSorted:pa,indexOfTextNode:k0,insert:T0,isElement:As,isFloat:Cs,isNumber:Yt,isXml:ra,locationOf:Xe,nodeBounds:y1,parents:b1,parse:De,prefixed:qe,qs:Wt,qsa:He,qsp:Ze,querySelectorByType:Ma,requestAnimationFrame:S1,revokeBlobUrl:Ds,sprint:ma,treeWalker:ks,type:Ts,uuid:ba,walk:T1,windowBounds:va},Symbol.toStringTag,{value:"Module"}));var $a,f2;function H0(){if(f2)return $a;if(f2=1,!v)var v={cwd:function(){return"/"}};function t(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+n)}function e(n,s){for(var h="",c=-1,l=0,f,p=0;p<=n.length;++p){if(p<n.length)f=n.charCodeAt(p);else{if(f===47)break;f=47}if(f===47){if(!(c===p-1||l===1))if(c!==p-1&&l===2){if(h.length<2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){for(var b=h.length-1,y=b;y>=0&&h.charCodeAt(y)!==47;--y);if(y!==b){y===-1?h="":h=h.slice(0,y),c=p,l=0;continue}}else if(h.length===2||h.length===1){h="",c=p,l=0;continue}}s&&(h.length>0?h+="/..":h="..")}else h.length>0?h+="/"+n.slice(c+1,p):h=n.slice(c+1,p);c=p,l=0}else f===46&&l!==-1?++l:l=-1}return h}function r(n,s){var h=s.dir||s.root,c=s.base||(s.name||"")+(s.ext||"");return h?h===s.root?h+c:h+n+c:c}var i={resolve:function(){for(var s="",h=!1,c,l=arguments.length-1;l>=-1&&!h;l--){var f;l>=0?f=arguments[l]:(c===void 0&&(c=v.cwd()),f=c),t(f),f.length!==0&&(s=f+"/"+s,h=f.charCodeAt(0)===47)}return s=e(s,!h),h?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(s){if(t(s),s.length===0)return".";var h=s.charCodeAt(0)===47,c=s.charCodeAt(s.length-1)===47;return s=e(s,!h),s.length===0&&!h&&(s="."),s.length>0&&c&&(s+="/"),h?"/"+s:s},isAbsolute:function(s){return t(s),s.length>0&&s.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var s,h=0;h<arguments.length;++h){var c=arguments[h];t(c),c.length>0&&(s===void 0?s=c:s+="/"+c)}return s===void 0?".":i.normalize(s)},relative:function(s,h){if(t(s),t(h),s===h||(s=i.resolve(s),h=i.resolve(h),s===h))return"";for(var c=1;c<s.length&&s.charCodeAt(c)===47;++c);for(var l=s.length,f=l-c,p=1;p<h.length&&h.charCodeAt(p)===47;++p);for(var b=h.length,y=b-p,R=f<y?f:y,A=-1,u=0;u<=R;++u){if(u===R){if(y>R){if(h.charCodeAt(p+u)===47)return h.slice(p+u+1);if(u===0)return h.slice(p+u)}else f>R&&(s.charCodeAt(c+u)===47?A=u:u===0&&(A=0));break}var g=s.charCodeAt(c+u),M=h.charCodeAt(p+u);if(g!==M)break;g===47&&(A=u)}var E="";for(u=c+A+1;u<=l;++u)(u===l||s.charCodeAt(u)===47)&&(E.length===0?E+="..":E+="/..");return E.length>0?E+h.slice(p+A):(p+=A,h.charCodeAt(p)===47&&++p,h.slice(p))},_makeLong:function(s){return s},dirname:function(s){if(t(s),s.length===0)return".";for(var h=s.charCodeAt(0),c=h===47,l=-1,f=!0,p=s.length-1;p>=1;--p)if(h=s.charCodeAt(p),h===47){if(!f){l=p;break}}else f=!1;return l===-1?c?"/":".":c&&l===1?"//":s.slice(0,l)},basename:function(s,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');t(s);var c=0,l=-1,f=!0,p;if(h!==void 0&&h.length>0&&h.length<=s.length){if(h.length===s.length&&h===s)return"";var b=h.length-1,y=-1;for(p=s.length-1;p>=0;--p){var R=s.charCodeAt(p);if(R===47){if(!f){c=p+1;break}}else y===-1&&(f=!1,y=p+1),b>=0&&(R===h.charCodeAt(b)?--b===-1&&(l=p):(b=-1,l=y))}return c===l?l=y:l===-1&&(l=s.length),s.slice(c,l)}else{for(p=s.length-1;p>=0;--p)if(s.charCodeAt(p)===47){if(!f){c=p+1;break}}else l===-1&&(f=!1,l=p+1);return l===-1?"":s.slice(c,l)}},extname:function(s){t(s);for(var h=-1,c=0,l=-1,f=!0,p=0,b=s.length-1;b>=0;--b){var y=s.charCodeAt(b);if(y===47){if(!f){c=b+1;break}continue}l===-1&&(f=!1,l=b+1),y===46?h===-1?h=b:p!==1&&(p=1):h!==-1&&(p=-1)}return h===-1||l===-1||p===0||p===1&&h===l-1&&h===c+1?"":s.slice(h,l)},format:function(s){if(s===null||typeof s!="object")throw new TypeError('Parameter "pathObject" must be an object, not '+typeof s);return r("/",s)},parse:function(s){t(s);var h={root:"",dir:"",base:"",ext:"",name:""};if(s.length===0)return h;var c=s.charCodeAt(0),l=c===47,f;l?(h.root="/",f=1):f=0;for(var p=-1,b=0,y=-1,R=!0,A=s.length-1,u=0;A>=f;--A){if(c=s.charCodeAt(A),c===47){if(!R){b=A+1;break}continue}y===-1&&(R=!1,y=A+1),c===46?p===-1?p=A:u!==1&&(u=1):p!==-1&&(u=-1)}return p===-1||y===-1||u===0||u===1&&p===y-1&&p===b+1?y!==-1&&(b===0&&l?h.base=h.name=s.slice(1,y):h.base=h.name=s.slice(b,y)):(b===0&&l?(h.name=s.slice(1,p),h.base=s.slice(1,y)):(h.name=s.slice(b,p),h.base=s.slice(b,y)),h.ext=s.slice(p,y)),b>0?h.dir=s.slice(0,b-1):l&&(h.dir="/"),h},sep:"/",delimiter:":",posix:null};return $a=i,$a}var N0=H0();const Be=Ye(N0);class Ne{constructor(t){var e,r;e=t.indexOf("://"),e>-1&&(t=new URL(t).pathname),r=this.parse(t),this.path=t,this.isDirectory(t)?this.directory=t:this.directory=r.dir+"/",this.filename=r.base,this.extension=r.ext.slice(1)}parse(t){return Be.parse(t)}isAbsolute(t){return Be.isAbsolute(t||this.path)}isDirectory(t){return t.charAt(t.length-1)==="/"}resolve(t){return Be.resolve(this.directory,t)}relative(t){var e=t&&t.indexOf("://")>-1;return e?t:Be.relative(this.directory,t)}splitPath(t){return this.splitPathRe.exec(t).slice(1)}toString(){return this.path}}class Ee{constructor(t,e){var r=t.indexOf("://")>-1,i=t,n;if(this.Url=void 0,this.href=t,this.protocol="",this.origin="",this.hash="",this.hash="",this.search="",this.base=e,!r&&e!==!1&&typeof e!="string"&&window&&window.location&&(this.base=window.location.href),r||this.base)try{this.base?this.Url=new URL(t,this.base):this.Url=new URL(t),this.href=this.Url.href,this.protocol=this.Url.protocol,this.origin=this.Url.origin,this.hash=this.Url.hash,this.search=this.Url.search,i=this.Url.pathname+(this.Url.search?this.Url.search:"")}catch{this.Url=void 0,this.base&&(n=new Ne(this.base),i=n.resolve(i))}this.Path=new Ne(i),this.directory=this.Path.directory,this.filename=this.Path.filename,this.extension=this.Path.extension}path(){return this.Path}resolve(t){var e=t.indexOf("://")>-1,r;return e?t:(r=Be.resolve(this.directory,t),this.origin+r)}relative(t){return Be.relative(t,this.directory)}toString(){return this.href}}const Fe=1,ye=3,B0=9;class Ot{constructor(t,e,r){var i;if(this.str="",this.base={},this.spinePos=0,this.range=!1,this.path={},this.start=null,this.end=null,!(this instanceof Ot))return new Ot(t,e,r);if(typeof e=="string"?this.base=this.parseComponent(e):typeof e=="object"&&e.steps&&(this.base=e),i=this.checkType(t),i==="string")return this.str=t,oe(this,this.parse(t));if(i==="range")return oe(this,this.fromRange(t,this.base,r));if(i==="node")return oe(this,this.fromNode(t,this.base,r));if(i==="EpubCFI"&&t.path)return t;if(t)throw new TypeError("not a valid argument for EpubCFI");return this}checkType(t){return this.isCfiString(t)?"string":t&&typeof t=="object"&&(Ts(t)==="Range"||typeof t.startContainer<"u")?"range":t&&typeof t=="object"&&typeof t.nodeType<"u"?"node":t&&typeof t=="object"&&t instanceof Ot?"EpubCFI":!1}parse(t){var e={spinePos:-1,range:!1,base:{},path:{},start:null,end:null},r,i,n;return typeof t!="string"?{spinePos:-1}:(t.indexOf("epubcfi(")===0&&t[t.length-1]===")"&&(t=t.slice(8,t.length-1)),r=this.getChapterComponent(t),r?(e.base=this.parseComponent(r),i=this.getPathComponent(t),e.path=this.parseComponent(i),n=this.getRange(t),n&&(e.range=!0,e.start=this.parseComponent(n[0]),e.end=this.parseComponent(n[1])),e.spinePos=e.base.steps[1].index,e):{spinePos:-1})}parseComponent(t){var e={steps:[],terminal:{offset:null,assertion:null}},r=t.split(":"),i=r[0].split("/"),n;return r.length>1&&(n=r[1],e.terminal=this.parseTerminal(n)),i[0]===""&&i.shift(),e.steps=i.map((function(s){return this.parseStep(s)}).bind(this)),e}parseStep(t){var e,r,i,n,s;if(n=t.match(/\[(.*)\]/),n&&n[1]&&(s=n[1]),r=parseInt(t),!isNaN(r))return r%2===0?(e="element",i=r/2-1):(e="text",i=(r-1)/2),{type:e,index:i,id:s||null}}parseTerminal(t){var e,r,i=t.match(/\[(.*)\]/);return i&&i[1]?(e=parseInt(t.split("[")[0]),r=i[1]):e=parseInt(t),Yt(e)||(e=null),{offset:e,assertion:r}}getChapterComponent(t){var e=t.split("!");return e[0]}getPathComponent(t){var e=t.split("!");if(e[1])return e[1].split(",")[0]}getRange(t){var e=t.split(",");return e.length===3?[e[1],e[2]]:!1}getCharecterOffsetComponent(t){var e=t.split(":");return e[1]||""}joinSteps(t){return t?t.map(function(e){var r="";return e.type==="element"&&(r+=(e.index+1)*2),e.type==="text"&&(r+=1+2*e.index),e.id&&(r+="["+e.id+"]"),r}).join("/"):""}segmentString(t){var e="/";return e+=this.joinSteps(t.steps),t.terminal&&t.terminal.offset!=null&&(e+=":"+t.terminal.offset),t.terminal&&t.terminal.assertion!=null&&(e+="["+t.terminal.assertion+"]"),e}toString(){var t="epubcfi(";return t+=this.segmentString(this.base),t+="!",t+=this.segmentString(this.path),this.range&&this.start&&(t+=",",t+=this.segmentString(this.start)),this.range&&this.end&&(t+=",",t+=this.segmentString(this.end)),t+=")",t}compare(t,e){var r,i,n,s;if(typeof t=="string"&&(t=new Ot(t)),typeof e=="string"&&(e=new Ot(e)),t.spinePos>e.spinePos)return 1;if(t.spinePos<e.spinePos)return-1;t.range?(r=t.path.steps.concat(t.start.steps),n=t.start.terminal):(r=t.path.steps,n=t.path.terminal),e.range?(i=e.path.steps.concat(e.start.steps),s=e.start.terminal):(i=e.path.steps,s=e.path.terminal);for(var h=0;h<r.length;h++){if(!r[h])return-1;if(!i[h]||r[h].index>i[h].index)return 1;if(r[h].index<i[h].index)return-1}return r.length<i.length?-1:n.offset>s.offset?1:n.offset<s.offset?-1:0}step(t){var e=t.nodeType===ye?"text":"element";return{id:t.id,tagName:t.tagName,type:e,index:this.position(t)}}filteredStep(t,e){var r=this.filter(t,e),i;if(r)return i=r.nodeType===ye?"text":"element",{id:r.id,tagName:r.tagName,type:i,index:this.filteredPosition(r,e)}}pathTo(t,e,r){for(var i={steps:[],terminal:{offset:null,assertion:null}},n=t,s;n&&n.parentNode&&n.parentNode.nodeType!=B0;)r?s=this.filteredStep(n,r):s=this.step(n),s&&i.steps.unshift(s),n=n.parentNode;return e!=null&&e>=0&&(i.terminal.offset=e,i.steps[i.steps.length-1].type!="text"&&i.steps.push({type:"text",index:0})),i}equalStep(t,e){return!t||!e?!1:t.index===e.index&&t.id===e.id&&t.type===e.type}fromRange(t,e,r){var i={range:!1,base:{},path:{},start:null,end:null},n=t.startContainer,s=t.endContainer,h=t.startOffset,c=t.endOffset,l=!1;if(r&&(l=n.ownerDocument.querySelector("."+r)!=null),typeof e=="string"?(i.base=this.parseComponent(e),i.spinePos=i.base.steps[1].index):typeof e=="object"&&(i.base=e),t.collapsed)l&&(h=this.patchOffset(n,h,r)),i.path=this.pathTo(n,h,r);else{i.range=!0,l&&(h=this.patchOffset(n,h,r)),i.start=this.pathTo(n,h,r),l&&(c=this.patchOffset(s,c,r)),i.end=this.pathTo(s,c,r),i.path={steps:[],terminal:null};var f=i.start.steps.length,p;for(p=0;p<f&&this.equalStep(i.start.steps[p],i.end.steps[p]);p++)p===f-1?i.start.terminal===i.end.terminal&&(i.path.steps.push(i.start.steps[p]),i.range=!1):i.path.steps.push(i.start.steps[p]);i.start.steps=i.start.steps.slice(i.path.steps.length),i.end.steps=i.end.steps.slice(i.path.steps.length)}return i}fromNode(t,e,r){var i={range:!1,base:{},path:{},start:null,end:null};return typeof e=="string"?(i.base=this.parseComponent(e),i.spinePos=i.base.steps[1].index):typeof e=="object"&&(i.base=e),i.path=this.pathTo(t,null,r),i}filter(t,e){var r,i,n,s,h,c=!1;return t.nodeType===ye?(c=!0,n=t.parentNode,r=t.parentNode.classList.contains(e)):(c=!1,r=t.classList.contains(e)),r&&c?(s=n.previousSibling,h=n.nextSibling,s&&s.nodeType===ye?i=s:h&&h.nodeType===ye&&(i=h),i||t):r&&!c?!1:t}patchOffset(t,e,r){if(t.nodeType!=ye)throw new Error("Anchor must be a text node");var i=t,n=e;for(t.parentNode.classList.contains(r)&&(i=t.parentNode);i.previousSibling;){if(i.previousSibling.nodeType===Fe)if(i.previousSibling.classList.contains(r))n+=i.previousSibling.textContent.length;else break;else n+=i.previousSibling.textContent.length;i=i.previousSibling}return n}normalizedMap(t,e,r){var i={},n=-1,s,h=t.length,c,l;for(s=0;s<h;s++)c=t[s].nodeType,c===Fe&&t[s].classList.contains(r)&&(c=ye),s>0&&c===ye&&l===ye?i[s]=n:e===c&&(n=n+1,i[s]=n),l=c;return i}position(t){var e,r;return t.nodeType===Fe?(e=t.parentNode.children,e||(e=w1(t.parentNode)),r=Array.prototype.indexOf.call(e,t)):(e=this.textNodes(t.parentNode),r=e.indexOf(t)),r}filteredPosition(t,e){var r,i,n;return t.nodeType===Fe?(r=t.parentNode.children,n=this.normalizedMap(r,Fe,e)):(r=t.parentNode.childNodes,t.parentNode.classList.contains(e)&&(t=t.parentNode,r=t.parentNode.childNodes),n=this.normalizedMap(r,ye,e)),i=Array.prototype.indexOf.call(r,t),n[i]}stepsToXpath(t){var e=[".","*"];return t.forEach(function(r){var i=r.index+1;r.id?e.push("*[position()="+i+" and @id='"+r.id+"']"):r.type==="text"?e.push("text()["+i+"]"):e.push("*["+i+"]")}),e.join("/")}stepsToQuerySelector(t){var e=["html"];return t.forEach(function(r){var i=r.index+1;r.id?e.push("#"+r.id):r.type==="text"||e.push("*:nth-child("+i+")")}),e.join(">")}textNodes(t,e){return Array.prototype.slice.call(t.childNodes).filter(function(r){return r.nodeType===ye?!0:!!(e&&r.classList.contains(e))})}walkToNode(t,e,r){var i=e||document,n=i.documentElement,s,h,c=t.length,l;for(l=0;l<c&&(h=t[l],h.type==="element"?h.id?n=i.getElementById(h.id):(s=n.children||w1(n),n=s[h.index]):h.type==="text"&&(n=this.textNodes(n,r)[h.index]),!!n);l++);return n}findNode(t,e,r){var i=e||document,n,s;return!r&&typeof i.evaluate<"u"?(s=this.stepsToXpath(t),n=i.evaluate(s,i,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue):r?n=this.walkToNode(t,i,r):n=this.walkToNode(t,i),n}fixMiss(t,e,r,i){var n=this.findNode(t.slice(0,-1),r,i),s=n.childNodes,h=this.normalizedMap(s,ye,i),c,l,f=t[t.length-1].index;for(let p in h){if(!h.hasOwnProperty(p))return;if(h[p]===f)if(c=s[p],l=c.textContent.length,e>l)e=e-l;else{c.nodeType===Fe?n=c.childNodes[0]:n=c;break}}return{container:n,offset:e}}toRange(t,e){var r=t||document,i,n,s,h,c,l=this,f,p,b=e?r.querySelector("."+e)!=null:!1,y;if(typeof r.createRange<"u"?i=r.createRange():i=new Rs,l.range?(n=l.start,f=l.path.steps.concat(n.steps),h=this.findNode(f,r,b?e:null),s=l.end,p=l.path.steps.concat(s.steps),c=this.findNode(p,r,b?e:null)):(n=l.path,f=l.path.steps,h=this.findNode(l.path.steps,r,b?e:null)),h)try{n.terminal.offset!=null?i.setStart(h,n.terminal.offset):i.setStart(h,0)}catch{y=this.fixMiss(f,n.terminal.offset,r,b?e:null),i.setStart(y.container,y.offset)}else return console.log("No startContainer found for",this.toString()),null;if(c)try{s.terminal.offset!=null?i.setEnd(c,s.terminal.offset):i.setEnd(c,0)}catch{y=this.fixMiss(p,l.end.terminal.offset,r,b?e:null),i.setEnd(y.container,y.offset)}return i}isCfiString(t){return typeof t=="string"&&t.indexOf("epubcfi(")===0&&t[t.length-1]===")"}generateChapterComponent(t,e,r){var i=parseInt(e),n=(t+1)*2,s="/"+n+"/";return s+=(i+1)*2,r&&(s+="["+r+"]"),s}collapse(t){this.range&&(this.range=!1,t?(this.path.steps=this.path.steps.concat(this.start.steps),this.path.terminal=this.start.terminal):(this.path.steps=this.path.steps.concat(this.end.steps),this.path.terminal=this.end.terminal))}}class Se{constructor(t){this.context=t||this,this.hooks=[]}register(){for(var t=0;t<arguments.length;++t)if(typeof arguments[t]=="function")this.hooks.push(arguments[t]);else for(var e=0;e<arguments[t].length;++e)this.hooks.push(arguments[t][e])}deregister(t){let e;for(let r=0;r<this.hooks.length;r++)if(e=this.hooks[r],e===t){this.hooks.splice(r,1);break}}trigger(){var t=arguments,e=this.context,r=[];return this.hooks.forEach(function(i){try{var n=i.apply(e,t)}catch(s){console.log(s)}n&&typeof n.then=="function"&&r.push(n)}),Promise.all(r)}list(){return this.hooks}clear(){return this.hooks=[]}}function Hs(v,t){var e,r,i=t.url,n=i.indexOf("://")>-1;v&&(r=Wt(v,"head"),e=Wt(r,"base"),e||(e=v.createElement("base"),r.insertBefore(e,r.firstChild)),!n&&window&&window.location&&(i=window.location.origin+i),e.setAttribute("href",i))}function O0(v,t){var e,r,i=t.canonical;v&&(e=Wt(v,"head"),r=Wt(e,"link[rel='canonical']"),r?r.setAttribute("href",i):(r=v.createElement("link"),r.setAttribute("rel","canonical"),r.setAttribute("href",i),e.appendChild(r)))}function V0(v,t){var e,r,i=t.idref;v&&(e=Wt(v,"head"),r=Wt(e,"link[property='dc.identifier']"),r?r.setAttribute("content",i):(r=v.createElement("meta"),r.setAttribute("name","dc.identifier"),r.setAttribute("content",i),e.appendChild(r)))}function I0(v,t){var e=v.querySelectorAll("a[href]");if(e.length)for(var r=Wt(v.ownerDocument,"base"),i=r?r.getAttribute("href"):void 0,n=(function(h){var c=h.getAttribute("href");if(c.indexOf("mailto:")!==0){var l=c.indexOf("://")>-1;if(l)h.setAttribute("target","_blank");else{var f;try{f=new Ee(c,i)}catch{}h.onclick=function(){return f&&f.hash?t(f.Path.path+f.hash):t(f?f.Path.path:c),!1}}}}).bind(this),s=0;s<e.length;s++)n(e[s])}function v2(v,t,e){return t.forEach(function(r,i){r&&e[i]&&(r=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),v=v.replace(new RegExp(r,"g"),e[i]))}),v}function ia(v,t,e,r){var i=typeof window<"u"?window.URL:!1,n=i?"blob":"arraybuffer",s=new Bt,h=new XMLHttpRequest,c=XMLHttpRequest.prototype,l;"overrideMimeType"in c||Object.defineProperty(c,"overrideMimeType",{value:function(){}}),e&&(h.withCredentials=!0),h.onreadystatechange=p,h.onerror=f,h.open("GET",v,!0);for(l in r)h.setRequestHeader(l,r[l]);t=="json"&&h.setRequestHeader("Accept","application/json"),t||(t=new Ne(v).extension),t=="blob"&&(h.responseType=n),ra(t)&&h.overrideMimeType("text/xml"),t=="binary"&&(h.responseType="arraybuffer"),h.send();function f(b){s.reject(b)}function p(){if(this.readyState===XMLHttpRequest.DONE){var b=!1;if((this.responseType===""||this.responseType==="document")&&(b=this.responseXML),this.status===200||this.status===0||b){var y;if(!this.response&&!b)return s.reject({status:this.status,message:"Empty Response",stack:new Error().stack}),s.promise;if(this.status===403)return s.reject({status:this.status,response:this.response,message:"Forbidden",stack:new Error().stack}),s.promise;b?y=this.responseXML:ra(t)?y=De(this.response,"text/xml"):t=="xhtml"?y=De(this.response,"application/xhtml+xml"):t=="html"||t=="htm"?y=De(this.response,"text/html"):t=="json"?y=JSON.parse(this.response):t=="blob"?i?y=this.response:y=new Blob([this.response]):y=this.response,s.resolve(y)}else s.reject({status:this.status,message:this.response,stack:new Error().stack})}}return s.promise}let P0=class{constructor(t,e){this.idref=t.idref,this.linear=t.linear==="yes",this.properties=t.properties,this.index=t.index,this.href=t.href,this.url=t.url,this.canonical=t.canonical,this.next=t.next,this.prev=t.prev,this.cfiBase=t.cfiBase,e?this.hooks=e:(this.hooks={},this.hooks.serialize=new Se(this),this.hooks.content=new Se(this)),this.document=void 0,this.contents=void 0,this.output=void 0}load(t){var e=t||this.request||ia,r=new Bt,i=r.promise;return this.contents?r.resolve(this.contents):e(this.url).then((function(n){return this.document=n,this.contents=n.documentElement,this.hooks.content.trigger(this.document,this)}).bind(this)).then((function(){r.resolve(this.contents)}).bind(this)).catch(function(n){r.reject(n)}),i}base(){return Hs(this.document,this)}render(t){var e=new Bt,r=e.promise;return this.output,this.load(t).then((function(i){var n=typeof navigator<"u"&&navigator.userAgent||"",s=n.indexOf("Trident")>=0,h;typeof XMLSerializer>"u"||s?h=ws.DOMParser:h=XMLSerializer;var c=new h;return this.output=c.serializeToString(i),this.output}).bind(this)).then((function(){return this.hooks.serialize.trigger(this.output,this)}).bind(this)).then((function(){e.resolve(this.output)}).bind(this)).catch(function(i){e.reject(i)}),r}find(t){var e=this,r=[],i=t.toLowerCase(),n=function(s){for(var h=s.textContent.toLowerCase(),c=e.document.createRange(),l,f,p=-1,b,y=150;f!=-1;)f=h.indexOf(i,p+1),f!=-1&&(c=e.document.createRange(),c.setStart(s,f),c.setEnd(s,f+i.length),l=e.cfiFromRange(c),s.textContent.length<y?b=s.textContent:(b=s.textContent.substring(f-y/2,f+y/2),b="..."+b+"..."),r.push({cfi:l,excerpt:b})),p=f};return ma(e.document,function(s){n(s)}),r}search(t,e=5){if(typeof document.createTreeWalker>"u")return this.find(t);let r=[];const i=150,n=this,s=t.toLowerCase(),h=function(p){const R=p.reduce((A,u)=>A+u.textContent,"").toLowerCase().indexOf(s);if(R!=-1){const u=R+s.length;let g=0,M=0;if(R<p[0].length){let E;for(;g<p.length-1&&(M+=p[g].length,!(u<=M));)g+=1;let B=p[0],w=p[g],T=n.document.createRange();T.setStart(B,R);let L=p.slice(0,g).reduce((k,N)=>k+N.textContent.length,0);T.setEnd(w,L>u?u:u-L),E=n.cfiFromRange(T);let H=p.slice(0,g+1).reduce((k,N)=>k+N.textContent,"");H.length>i&&(H=H.substring(R-i/2,R+i/2),H="..."+H+"..."),r.push({cfi:E,excerpt:H})}}},c=document.createTreeWalker(n.document,NodeFilter.SHOW_TEXT,null,!1);let l,f=[];for(;l=c.nextNode();)f.push(l),f.length==e&&(h(f.slice(0,e)),f=f.slice(1,e));return f.length>0&&h(f),r}reconcileLayoutSettings(t){var e={layout:t.layout,spread:t.spread,orientation:t.orientation};return this.properties.forEach(function(r){var i=r.replace("rendition:",""),n=i.indexOf("-"),s,h;n!=-1&&(s=i.slice(0,n),h=i.slice(n+1),e[s]=h)}),e}cfiFromRange(t){return new Ot(t,this.cfiBase).toString()}cfiFromElement(t){return new Ot(t,this.cfiBase).toString()}unload(){this.document=void 0,this.contents=void 0,this.output=void 0}destroy(){this.unload(),this.hooks.serialize.clear(),this.hooks.content.clear(),this.hooks=void 0,this.idref=void 0,this.linear=void 0,this.properties=void 0,this.index=void 0,this.href=void 0,this.url=void 0,this.next=void 0,this.prev=void 0,this.cfiBase=void 0}};class z0{constructor(){this.spineItems=[],this.spineByHref={},this.spineById={},this.hooks={},this.hooks.serialize=new Se,this.hooks.content=new Se,this.hooks.content.register(Hs),this.hooks.content.register(O0),this.hooks.content.register(V0),this.epubcfi=new Ot,this.loaded=!1,this.items=void 0,this.manifest=void 0,this.spineNodeIndex=void 0,this.baseUrl=void 0,this.length=void 0}unpack(t,e,r){this.items=t.spine,this.manifest=t.manifest,this.spineNodeIndex=t.spineNodeIndex,this.baseUrl=t.baseUrl||t.basePath||"",this.length=this.items.length,this.items.forEach((i,n)=>{var s=this.manifest[i.idref],h;i.index=n,i.cfiBase=this.epubcfi.generateChapterComponent(this.spineNodeIndex,i.index,i.id),i.href&&(i.url=e(i.href,!0),i.canonical=r(i.href)),s&&(i.href=s.href,i.url=e(i.href,!0),i.canonical=r(i.href),s.properties.length&&i.properties.push.apply(i.properties,s.properties)),i.linear==="yes"?(i.prev=(function(){let c=i.index;for(;c>0;){let l=this.get(c-1);if(l&&l.linear)return l;c-=1}}).bind(this),i.next=(function(){let c=i.index;for(;c<this.spineItems.length-1;){let l=this.get(c+1);if(l&&l.linear)return l;c+=1}}).bind(this)):(i.prev=function(){},i.next=function(){}),h=new P0(i,this.hooks),this.append(h)}),this.loaded=!0}get(t){var e=0;if(typeof t>"u")for(;e<this.spineItems.length;){let r=this.spineItems[e];if(r&&r.linear)break;e+=1}else this.epubcfi.isCfiString(t)?e=new Ot(t).spinePos:typeof t=="number"||isNaN(t)===!1?e=t:typeof t=="string"&&t.indexOf("#")===0?e=this.spineById[t.substring(1)]:typeof t=="string"&&(t=t.split("#")[0],e=this.spineByHref[t]||this.spineByHref[encodeURI(t)]);return this.spineItems[e]||null}append(t){var e=this.spineItems.length;return t.index=e,this.spineItems.push(t),this.spineByHref[decodeURI(t.href)]=e,this.spineByHref[encodeURI(t.href)]=e,this.spineByHref[t.href]=e,this.spineById[t.idref]=e,e}prepend(t){return this.spineByHref[t.href]=0,this.spineById[t.idref]=0,this.spineItems.forEach(function(e,r){e.index=r}),0}remove(t){var e=this.spineItems.indexOf(t);if(e>-1)return delete this.spineByHref[t.href],delete this.spineById[t.idref],this.spineItems.splice(e,1)}each(){return this.spineItems.forEach.apply(this.spineItems,arguments)}first(){let t=0;do{let e=this.get(t);if(e&&e.linear)return e;t+=1}while(t<this.spineItems.length)}last(){let t=this.spineItems.length-1;do{let e=this.get(t);if(e&&e.linear)return e;t-=1}while(t>=0)}destroy(){this.each(t=>t.destroy()),this.spineItems=void 0,this.spineByHref=void 0,this.spineById=void 0,this.hooks.serialize.clear(),this.hooks.content.clear(),this.hooks=void 0,this.epubcfi=void 0,this.loaded=!1,this.items=void 0,this.manifest=void 0,this.spineNodeIndex=void 0,this.baseUrl=void 0,this.length=void 0}}class k1{constructor(t){this._q=[],this.context=t,this.tick=S1,this.running=!1,this.paused=!1}enqueue(){var t,e,r,i=[].shift.call(arguments),n=arguments;if(!i)throw new Error("No Task Provided");return typeof i=="function"?(t=new Bt,e=t.promise,r={task:i,args:n,deferred:t,promise:e}):r={promise:i},this._q.push(r),this.paused==!1&&!this.running&&this.run(),r.promise}dequeue(){var t,e,r;if(this._q.length&&!this.paused){if(t=this._q.shift(),e=t.task,e)return r=e.apply(this.context,t.args),r&&typeof r.then=="function"?r.then((function(){t.deferred.resolve.apply(this.context,arguments)}).bind(this),(function(){t.deferred.reject.apply(this.context,arguments)}).bind(this)):(t.deferred.resolve.apply(this.context,r),t.promise);if(t.promise)return t.promise}else return t=new Bt,t.deferred.resolve(),t.promise}dump(){for(;this._q.length;)this.dequeue()}run(){return this.running||(this.running=!0,this.defered=new Bt),this.tick.call(window,()=>{this._q.length?this.dequeue().then((function(){this.run()}).bind(this)):(this.defered.resolve(),this.running=void 0)}),this.paused==!0&&(this.paused=!1),this.defered.promise}flush(){if(this.running)return this.running;if(this._q.length)return this.running=this.dequeue().then((function(){return this.running=void 0,this.flush()}).bind(this)),this.running}clear(){this._q=[]}length(){return this._q.length}pause(){this.paused=!0}stop(){this._q=[],this.running=!1,this.paused=!0}}const Aa="0.3",ua=["keydown","keyup","keypressed","mouseup","mousedown","mousemove","click","touchend","touchstart","touchmove"],ct={BOOK:{OPEN_FAILED:"openFailed"},CONTENTS:{EXPAND:"expand",RESIZE:"resize",SELECTED:"selected",SELECTED_RANGE:"selectedRange",LINK_CLICKED:"linkClicked"},LOCATIONS:{CHANGED:"changed"},MANAGERS:{RESIZE:"resize",RESIZED:"resized",ORIENTATION_CHANGE:"orientationchange",ADDED:"added",SCROLL:"scroll",SCROLLED:"scrolled",REMOVED:"removed"},VIEWS:{AXIS:"axis",WRITING_MODE:"writingMode",LOAD_ERROR:"loaderror",RENDERED:"rendered",RESIZED:"resized",DISPLAYED:"displayed",SHOWN:"shown",HIDDEN:"hidden",MARK_CLICKED:"markClicked"},RENDITION:{STARTED:"started",ATTACHED:"attached",DISPLAYED:"displayed",DISPLAY_ERROR:"displayerror",RENDERED:"rendered",REMOVED:"removed",RESIZED:"resized",ORIENTATION_CHANGE:"orientationchange",LOCATION_CHANGED:"locationChanged",RELOCATED:"relocated",MARK_CLICKED:"markClicked",SELECTED:"selected",LAYOUT:"layout"},LAYOUT:{UPDATED:"updated"},ANNOTATION:{ATTACH:"attach",DETACH:"detach"}};class Ns{constructor(t,e,r){this.spine=t,this.request=e,this.pause=r||100,this.q=new k1(this),this.epubcfi=new Ot,this._locations=[],this._locationsWords=[],this.total=0,this.break=150,this._current=0,this._wordCounter=0,this.currentLocation="",this._currentCfi="",this.processingTimeout=void 0}generate(t){return t&&(this.break=t),this.q.pause(),this.spine.each((function(e){e.linear&&this.q.enqueue(this.process.bind(this),e)}).bind(this)),this.q.run().then((function(){return this.total=this._locations.length-1,this._currentCfi&&(this.currentLocation=this._currentCfi),this._locations}).bind(this))}createRange(){return{startContainer:void 0,startOffset:void 0,endContainer:void 0,endOffset:void 0}}process(t){return t.load(this.request).then((function(e){var r=new Bt,i=this.parse(e,t.cfiBase);return this._locations=this._locations.concat(i),t.unload(),this.processingTimeout=setTimeout(()=>r.resolve(i),this.pause),r.promise}).bind(this))}parse(t,e,r){var i=[],n,s=t.ownerDocument,h=Wt(s,"body"),c=0,l,f=r||this.break,p=function(b){var y=b.length,R,A=0;if(b.textContent.trim().length===0)return!1;for(c==0&&(n=this.createRange(),n.startContainer=b,n.startOffset=0),R=f-c,R>y&&(c+=y,A=y);A<y;)if(R=f-c,c===0&&(A+=1,n=this.createRange(),n.startContainer=b,n.startOffset=A),A+R>=y)c+=y-A,A=y;else{A+=R,n.endContainer=b,n.endOffset=A;let u=new Ot(n,e).toString();i.push(u),c=0}l=b};if(ma(h,p.bind(this)),n&&n.startContainer&&l){n.endContainer=l,n.endOffset=l.length;let b=new Ot(n,e).toString();i.push(b),c=0}return i}generateFromWords(t,e,r){var i=t?new Ot(t):void 0;return this.q.pause(),this._locationsWords=[],this._wordCounter=0,this.spine.each((function(n){n.linear&&(i?n.index>=i.spinePos&&this.q.enqueue(this.processWords.bind(this),n,e,i,r):this.q.enqueue(this.processWords.bind(this),n,e,i,r))}).bind(this)),this.q.run().then((function(){return this._currentCfi&&(this.currentLocation=this._currentCfi),this._locationsWords}).bind(this))}processWords(t,e,r,i){return i&&this._locationsWords.length>=i?Promise.resolve():t.load(this.request).then((function(n){var s=new Bt,h=this.parseWords(n,t,e,r),c=i-this._locationsWords.length;return this._locationsWords=this._locationsWords.concat(h.length>=i?h.slice(0,c):h),t.unload(),this.processingTimeout=setTimeout(()=>s.resolve(h),this.pause),s.promise}).bind(this))}countWords(t){return t=t.replace(/(^\s*)|(\s*$)/gi,""),t=t.replace(/[ ]{2,}/gi," "),t=t.replace(/\n /,`
`),t.split(" ").length}parseWords(t,e,r,i){var n=e.cfiBase,s=[],h=t.ownerDocument,c=Wt(h,"body"),l=r,f=i?i.spinePos!==e.index:!0,p;i&&e.index===i.spinePos&&(p=i.findNode(i.range?i.path.steps.concat(i.start.steps):i.path.steps,t.ownerDocument));var b=function(y){if(!f)if(y===p)f=!0;else return!1;if(y.textContent.length<10&&y.textContent.trim().length===0)return!1;var R=this.countWords(y.textContent),A,u=0;if(R===0)return!1;for(A=l-this._wordCounter,A>R&&(this._wordCounter+=R,u=R);u<R;)if(A=l-this._wordCounter,u+A>=R)this._wordCounter+=R-u,u=R;else{u+=A;let g=new Ot(y,n);s.push({cfi:g.toString(),wordCount:this._wordCounter}),this._wordCounter=0}};return ma(c,b.bind(this)),s}locationFromCfi(t){let e;return Ot.prototype.isCfiString(t)&&(t=new Ot(t)),this._locations.length===0?-1:(e=Xe(t,this._locations,this.epubcfi.compare),e>this.total?this.total:e)}percentageFromCfi(t){if(this._locations.length===0)return null;var e=this.locationFromCfi(t);return this.percentageFromLocation(e)}percentageFromLocation(t){return!t||!this.total?0:t/this.total}cfiFromLocation(t){var e=-1;return typeof t!="number"&&(t=parseInt(t)),t>=0&&t<this._locations.length&&(e=this._locations[t]),e}cfiFromPercentage(t){let e;if(t>1&&console.warn("Normalize cfiFromPercentage value to between 0 - 1"),t>=1){let r=new Ot(this._locations[this.total]);return r.collapse(),r.toString()}return e=Math.ceil(this.total*t),this.cfiFromLocation(e)}load(t){return typeof t=="string"?this._locations=JSON.parse(t):this._locations=t,this.total=this._locations.length-1,this._locations}save(){return JSON.stringify(this._locations)}getCurrent(){return this._current}setCurrent(t){var e;if(typeof t=="string")this._currentCfi=t;else if(typeof t=="number")this._current=t;else return;this._locations.length!==0&&(typeof t=="string"?(e=this.locationFromCfi(t),this._current=e):e=t,this.emit(ct.LOCATIONS.CHANGED,{percentage:this.percentageFromLocation(e)}))}get currentLocation(){return this._current}set currentLocation(t){this.setCurrent(t)}length(){return this._locations.length}destroy(){this.spine=void 0,this.request=void 0,this.pause=void 0,this.q.stop(),this.q=void 0,this.epubcfi=void 0,this._locations=void 0,this.total=void 0,this.break=void 0,this._current=void 0,this.currentLocation=void 0,this._currentCfi=void 0,clearTimeout(this.processingTimeout)}}Te(Ns.prototype);let F0=class{constructor(t){this.packagePath="",this.directory="",this.encoding="",t&&this.parse(t)}parse(t){var e;if(!t)throw new Error("Container File Not Found");if(e=Wt(t,"rootfile"),!e)throw new Error("No RootFile Found");this.packagePath=e.getAttribute("full-path"),this.directory=Be.dirname(this.packagePath),this.encoding=t.xmlEncoding}destroy(){this.packagePath=void 0,this.directory=void 0,this.encoding=void 0}};class g2{constructor(t){this.manifest={},this.navPath="",this.ncxPath="",this.coverPath="",this.spineNodeIndex=0,this.spine=[],this.metadata={},t&&this.parse(t)}parse(t){var e,r,i;if(!t)throw new Error("Package File Not Found");if(e=Wt(t,"metadata"),!e)throw new Error("No Metadata Found");if(r=Wt(t,"manifest"),!r)throw new Error("No Manifest Found");if(i=Wt(t,"spine"),!i)throw new Error("No Spine Found");return this.manifest=this.parseManifest(r),this.navPath=this.findNavPath(r),this.ncxPath=this.findNcxPath(r,i),this.coverPath=this.findCoverPath(t),this.spineNodeIndex=Es(i),this.spine=this.parseSpine(i,this.manifest),this.uniqueIdentifier=this.findUniqueIdentifier(t),this.metadata=this.parseMetadata(e),this.metadata.direction=i.getAttribute("page-progression-direction"),{metadata:this.metadata,spine:this.spine,manifest:this.manifest,navPath:this.navPath,ncxPath:this.ncxPath,coverPath:this.coverPath,spineNodeIndex:this.spineNodeIndex}}parseMetadata(t){var e={};return e.title=this.getElementText(t,"title"),e.creator=this.getElementText(t,"creator"),e.description=this.getElementText(t,"description"),e.pubdate=this.getElementText(t,"date"),e.publisher=this.getElementText(t,"publisher"),e.identifier=this.getElementText(t,"identifier"),e.language=this.getElementText(t,"language"),e.rights=this.getElementText(t,"rights"),e.modified_date=this.getPropertyText(t,"dcterms:modified"),e.layout=this.getPropertyText(t,"rendition:layout"),e.orientation=this.getPropertyText(t,"rendition:orientation"),e.flow=this.getPropertyText(t,"rendition:flow"),e.viewport=this.getPropertyText(t,"rendition:viewport"),e.media_active_class=this.getPropertyText(t,"media:active-class"),e.spread=this.getPropertyText(t,"rendition:spread"),e}parseManifest(t){var e={},r=He(t,"item"),i=Array.prototype.slice.call(r);return i.forEach(function(n){var s=n.getAttribute("id"),h=n.getAttribute("href")||"",c=n.getAttribute("media-type")||"",l=n.getAttribute("media-overlay")||"",f=n.getAttribute("properties")||"";e[s]={href:h,type:c,overlay:l,properties:f.length?f.split(" "):[]}}),e}parseSpine(t,e){var r=[],i=He(t,"itemref"),n=Array.prototype.slice.call(i);return n.forEach(function(s,h){var c=s.getAttribute("idref"),l=s.getAttribute("properties")||"",f=l.length?l.split(" "):[],p={id:s.getAttribute("id"),idref:c,linear:s.getAttribute("linear")||"yes",properties:f,index:h};r.push(p)}),r}findUniqueIdentifier(t){var e=t.documentElement.getAttribute("unique-identifier");if(!e)return"";var r=t.getElementById(e);return r&&r.localName==="identifier"&&r.namespaceURI==="http://purl.org/dc/elements/1.1/"&&r.childNodes.length>0?r.childNodes[0].nodeValue.trim():""}findNavPath(t){var e=Ze(t,"item",{properties:"nav"});return e?e.getAttribute("href"):!1}findNcxPath(t,e){var r=Ze(t,"item",{"media-type":"application/x-dtbncx+xml"}),i;return r||(i=e.getAttribute("toc"),i&&(r=t.querySelector(`#${i}`))),r?r.getAttribute("href"):!1}findCoverPath(t){var e=Wt(t,"package");e.getAttribute("version");var r=Ze(t,"item",{properties:"cover-image"});if(r)return r.getAttribute("href");var i=Ze(t,"meta",{name:"cover"});if(i){var n=i.getAttribute("content"),s=t.getElementById(n);return s?s.getAttribute("href"):""}else return!1}getElementText(t,e){var r=t.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/",e),i;return!r||r.length===0?"":(i=r[0],i.childNodes.length?i.childNodes[0].nodeValue:"")}getPropertyText(t,e){var r=Ze(t,"meta",{property:e});return r&&r.childNodes.length?r.childNodes[0].nodeValue:""}load(t){this.metadata=t.metadata;let e=t.readingOrder||t.spine;return this.spine=e.map((r,i)=>(r.index=i,r.linear=r.linear||"yes",r)),t.resources.forEach((r,i)=>{this.manifest[i]=r,r.rel&&r.rel[0]==="cover"&&(this.coverPath=r.href)}),this.spineNodeIndex=0,this.toc=t.toc.map((r,i)=>(r.label=r.title,r)),{metadata:this.metadata,spine:this.spine,manifest:this.manifest,navPath:this.navPath,ncxPath:this.ncxPath,coverPath:this.coverPath,spineNodeIndex:this.spineNodeIndex,toc:this.toc}}destroy(){this.manifest=void 0,this.navPath=void 0,this.ncxPath=void 0,this.coverPath=void 0,this.spineNodeIndex=void 0,this.spine=void 0,this.metadata=void 0}}let Ya=class{constructor(t){this.toc=[],this.tocByHref={},this.tocById={},this.landmarks=[],this.landmarksByType={},this.length=0,t&&this.parse(t)}parse(t){let e=t.nodeType,r,i;e&&(r=Wt(t,"html"),i=Wt(t,"ncx")),e?r?(this.toc=this.parseNav(t),this.landmarks=this.parseLandmarks(t)):i&&(this.toc=this.parseNcx(t)):this.toc=this.load(t),this.length=0,this.unpack(this.toc)}unpack(t){for(var e,r=0;r<t.length;r++)e=t[r],e.href&&(this.tocByHref[e.href]=r),e.id&&(this.tocById[e.id]=r),this.length++,e.subitems.length&&this.unpack(e.subitems)}get(t){var e;return t?(t.indexOf("#")===0?e=this.tocById[t.substring(1)]:t in this.tocByHref&&(e=this.tocByHref[t]),this.getByIndex(t,e,this.toc)):this.toc}getByIndex(t,e,r){if(r.length===0)return;const i=r[e];if(i&&(t===i.id||t===i.href))return i;{let n;for(let s=0;s<r.length&&(n=this.getByIndex(t,e,r[s].subitems),!n);++s);return n}}landmark(t){var e;return t?(e=this.landmarksByType[t],this.landmarks[e]):this.landmarks}parseNav(t){var e=Ma(t,"nav","toc"),r=[];if(!e)return r;let i=We(e,"ol",!0);return i&&(r=this.parseNavList(i)),r}parseNavList(t,e){const r=[];if(!t||!t.children)return r;for(let i=0;i<t.children.length;i++){const n=this.navItem(t.children[i],e);n&&r.push(n)}return r}navItem(t,e){let r=t.getAttribute("id")||void 0,i=We(t,"a",!0)||We(t,"span",!0);if(!i)return;let n=i.getAttribute("href")||"";r||(r=n);let s=i.textContent||"",h=[],c=We(t,"ol",!0);return c&&(h=this.parseNavList(c,r)),{id:r,href:n,label:s,subitems:h,parent:e}}parseLandmarks(t){var e=Ma(t,"nav","landmarks"),r=e?He(e,"li"):[],i=r.length,n,s=[],h;if(!r||i===0)return s;for(n=0;n<i;++n)h=this.landmarkItem(r[n]),h&&(s.push(h),this.landmarksByType[h.type]=n);return s}landmarkItem(t){let e=We(t,"a",!0);if(!e)return;let r=e.getAttributeNS("http://www.idpf.org/2007/ops","type")||void 0,i=e.getAttribute("href")||"",n=e.textContent||"";return{href:i,label:n,type:r}}parseNcx(t){var e=He(t,"navPoint"),r=e.length,i,n={},s=[],h,c;if(!e||r===0)return s;for(i=0;i<r;++i)h=this.ncxItem(e[i]),n[h.id]=h,h.parent?(c=n[h.parent],c.subitems.push(h)):s.push(h);return s}ncxItem(t){var e=t.getAttribute("id")||!1,r=Wt(t,"content"),i=r.getAttribute("src"),n=Wt(t,"navLabel"),s=n.textContent?n.textContent:"",h=[],c=t.parentNode,l;return c&&(c.nodeName==="navPoint"||c.nodeName.split(":").slice(-1)[0]==="navPoint")&&(l=c.getAttribute("id")),{id:e,href:i,label:s,subitems:h,parent:l}}load(t){return t.map(e=>(e.label=e.title,e.subitems=e.children?this.load(e.children):[],e))}forEach(t){return this.toc.forEach(t)}};var ta={application:{ecmascript:["es","ecma"],javascript:"js",ogg:"ogx",pdf:"pdf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],"rdf+xml":"rdf",smil:["smi","smil"],"xhtml+xml":["xhtml","xht"],xml:["xml","xsl","xsd","opf","ncx"],zip:"zip","x-httpd-eruby":"rhtml","x-latex":"latex","x-maker":["frm","maker","frame","fm","fb","book","fbdoc"],"x-object":"o","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr","epub+zip":"epub","font-tdpfr":"pfr","inkml+xml":["ink","inkml"],json:"json","jsonml+json":"jsonml","mathml+xml":"mathml","metalink+xml":"metalink",mp4:"mp4s","omdoc+xml":"omdoc",oxps:"oxps","vnd.amazon.ebook":"azw",widget:"wgt","x-dtbook+xml":"dtb","x-dtbresource+xml":"res","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-otf":"otf","x-font-pcf":"pcf","x-font-snf":"snf","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","pfb","pfm","afm"],"x-font-woff":"woff","x-mobipocket-ebook":["prc","mobi"],"x-mspublisher":"pub","x-nzb":"nzb","x-tgif":"obj","xaml+xml":"xaml","xml-dtd":"dtd","xproc+xml":"xpl","xslt+xml":"xslt","internet-property-stream":"acx","x-compress":"z","x-compressed":"tgz","x-gzip":"gz"},audio:{flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","mp2","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",ogg:["oga","ogg","spx"],"x-aiff":["aif","aiff","aifc"],"x-ms-wma":"wma","x-wav":"wav",adpcm:"adp",mp4:"mp4a",webm:"weba","x-aac":"aac","x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plugin":"rmp",xm:"xm",mid:["mid","rmi"]},image:{gif:"gif",ief:"ief",jpeg:["jpeg","jpg","jpe"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"x-icon":"ico",bmp:"bmp",webp:"webp","x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod"},text:{"cache-manifest":["manifest","appcache"],css:"css",csv:"csv",html:["html","htm","shtml","stm"],mathml:"mml",plain:["txt","text","brf","conf","def","list","log","in","bas"],richtext:"rtx","tab-separated-values":"tsv","x-bibtex":"bib"},video:{mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"],ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv":"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo":"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"],mj2:["mj2","mjp2"],"vnd.ms-playready.media.pyv":"pyv","vnd.uvvu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv"}},U0=(function(){var v,t,e,r,i={};for(v in ta)if(ta.hasOwnProperty(v)){for(t in ta[v])if(ta[v].hasOwnProperty(t))if(e=ta[v][t],typeof e=="string")i[e]=v+"/"+t;else for(r=0;r<e.length;r++)i[e[r]]=v+"/"+t}return i})(),q0="text/plain";function Z0(v){return v&&U0[v.split(".").pop().toLowerCase()]||q0}const je={lookup:Z0};class W0{constructor(t,e){this.settings={replacements:e&&e.replacements||"base64",archive:e&&e.archive,resolver:e&&e.resolver,request:e&&e.request},this.process(t)}process(t){this.manifest=t,this.resources=Object.keys(t).map(function(e){return t[e]}),this.replacementUrls=[],this.html=[],this.assets=[],this.css=[],this.urls=[],this.cssUrls=[],this.split(),this.splitUrls()}split(){this.html=this.resources.filter(function(t){if(t.type==="application/xhtml+xml"||t.type==="text/html")return!0}),this.assets=this.resources.filter(function(t){if(t.type!=="application/xhtml+xml"&&t.type!=="text/html")return!0}),this.css=this.resources.filter(function(t){if(t.type==="text/css")return!0})}splitUrls(){this.urls=this.assets.map((function(t){return t.href}).bind(this)),this.cssUrls=this.css.map(function(t){return t.href})}createUrl(t){var e=new Ee(t),r=je.lookup(e.filename);return this.settings.archive?this.settings.archive.createUrl(t,{base64:this.settings.replacements==="base64"}):this.settings.replacements==="base64"?this.settings.request(t,"blob").then(i=>Ls(i)).then(i=>x1(i,r)):this.settings.request(t,"blob").then(i=>ga(i,r))}replacements(){if(this.settings.replacements==="none")return new Promise((function(e){e(this.urls)}).bind(this));var t=this.urls.map(e=>{var r=this.settings.resolver(e);return this.createUrl(r).catch(i=>(console.error(i),null))});return Promise.all(t).then(e=>(this.replacementUrls=e.filter(r=>typeof r=="string"),e))}replaceCss(t,e){var r=[];return t=t||this.settings.archive,e=e||this.settings.resolver,this.cssUrls.forEach((function(i){var n=this.createCssFile(i,t,e).then((function(s){var h=this.urls.indexOf(i);h>-1&&(this.replacementUrls[h]=s)}).bind(this));r.push(n)}).bind(this)),Promise.all(r)}createCssFile(t){var e;if(Be.isAbsolute(t))return new Promise(function(s){s()});var r=this.settings.resolver(t),i;this.settings.archive?i=this.settings.archive.getText(r):i=this.settings.request(r,"text");var n=this.urls.map(s=>{var h=this.settings.resolver(s),c=new Ne(r).relative(h);return c});return i?i.then(s=>(s=v2(s,n,this.replacementUrls),this.settings.replacements==="base64"?e=x1(s,"text/css"):e=ga(s,"text/css"),e),s=>new Promise(function(h){h()})):new Promise(function(s){s()})}relativeTo(t,e){return e=e||this.settings.resolver,this.urls.map((function(r){var i=e(r),n=new Ne(t).relative(i);return n}).bind(this))}get(t){var e=this.urls.indexOf(t);if(e!==-1)return this.replacementUrls.length?new Promise((function(r,i){r(this.replacementUrls[e])}).bind(this)):this.createUrl(t)}substitute(t,e){var r;return e?r=this.relativeTo(e):r=this.urls,v2(t,r,this.replacementUrls)}destroy(){this.settings=void 0,this.manifest=void 0,this.resources=void 0,this.replacementUrls=void 0,this.html=void 0,this.assets=void 0,this.css=void 0,this.urls=void 0,this.cssUrls=void 0}}class Ka{constructor(t){this.pages=[],this.locations=[],this.epubcfi=new Ot,this.firstPage=0,this.lastPage=0,this.totalPages=0,this.toc=void 0,this.ncx=void 0,t&&(this.pageList=this.parse(t)),this.pageList&&this.pageList.length&&this.process(this.pageList)}parse(t){var e=Wt(t,"html"),r=Wt(t,"ncx");if(e)return this.parseNav(t);if(r)return this.parseNcx(t)}parseNav(t){var e=Ma(t,"nav","page-list"),r=e?He(e,"li"):[],i=r.length,n,s=[],h;if(!r||i===0)return s;for(n=0;n<i;++n)h=this.item(r[n]),s.push(h);return s}parseNcx(t){var e=[],r=0,i,n,s,h=0;if(n=Wt(t,"pageList"),!n||(s=He(n,"pageTarget"),h=s.length,!s||s.length===0))return e;for(r=0;r<h;++r)i=this.ncxItem(s[r]),e.push(i);return e}ncxItem(t){var e=Wt(t,"navLabel"),r=Wt(e,"text"),i=r.textContent,n=Wt(t,"content"),s=n.getAttribute("src"),h=parseInt(i,10);return{href:s,page:h}}item(t){var e=Wt(t,"a"),r=e.getAttribute("href")||"",i=e.textContent||"",n=parseInt(i),s=r.indexOf("epubcfi"),h,c,l;return s!=-1?(h=r.split("#"),c=h[0],l=h.length>1?h[1]:!1,{cfi:l,href:r,packageUrl:c,page:n}):{href:r,page:n}}process(t){t.forEach(function(e){this.pages.push(e.page),e.cfi&&this.locations.push(e.cfi)},this),this.firstPage=parseInt(this.pages[0]),this.lastPage=parseInt(this.pages[this.pages.length-1]),this.totalPages=this.lastPage-this.firstPage}pageFromCfi(t){var e=-1;if(this.locations.length===0)return-1;var r=pa(t,this.locations,this.epubcfi.compare);return r!=-1?e=this.pages[r]:(r=Xe(t,this.locations,this.epubcfi.compare),e=r-1>=0?this.pages[r-1]:this.pages[0],e!==void 0||(e=-1)),e}cfiFromPage(t){var e=-1;typeof t!="number"&&(t=parseInt(t));var r=this.pages.indexOf(t);return r!=-1&&(e=this.locations[r]),e}pageFromPercentage(t){var e=Math.round(this.totalPages*t);return e}percentageFromPage(t){var e=(t-this.firstPage)/this.totalPages;return Math.round(e*1e3)/1e3}percentageFromCfi(t){var e=this.pageFromCfi(t),r=this.percentageFromPage(e);return r}destroy(){this.pages=void 0,this.locations=void 0,this.epubcfi=void 0,this.pageList=void 0,this.toc=void 0,this.ncx=void 0}}class Bs{constructor(t){this.settings=t,this.name=t.layout||"reflowable",this._spread=t.spread!=="none",this._minSpreadWidth=t.minSpreadWidth||800,this._evenSpreads=t.evenSpreads||!1,t.flow==="scrolled"||t.flow==="scrolled-continuous"||t.flow==="scrolled-doc"?this._flow="scrolled":this._flow="paginated",this.width=0,this.height=0,this.spreadWidth=0,this.delta=0,this.columnWidth=0,this.gap=0,this.divisor=1,this.props={name:this.name,spread:this._spread,flow:this._flow,width:0,height:0,spreadWidth:0,delta:0,columnWidth:0,gap:0,divisor:1}}flow(t){return typeof t<"u"&&(t==="scrolled"||t==="scrolled-continuous"||t==="scrolled-doc"?this._flow="scrolled":this._flow="paginated",this.update({flow:this._flow})),this._flow}spread(t,e){return t&&(this._spread=t!=="none",this.update({spread:this._spread})),e>=0&&(this._minSpreadWidth=e),this._spread}calculate(t,e,r){var i=1,n=r||0,s=t,h=e,c=Math.floor(s/12),l,f,p,b;this._spread&&s>=this._minSpreadWidth?i=2:i=1,this.name==="reflowable"&&this._flow==="paginated"&&!(r>=0)&&(n=c%2===0?c:c-1),this.name==="pre-paginated"&&(n=0),i>1?(l=s/i-n,p=l+n):(l=s,p=s),this.name==="pre-paginated"&&i>1&&(s=l),f=l*i+n,b=s,this.width=s,this.height=h,this.spreadWidth=f,this.pageWidth=p,this.delta=b,this.columnWidth=l,this.gap=n,this.divisor=i,this.update({width:s,height:h,spreadWidth:f,pageWidth:p,delta:b,columnWidth:l,gap:n,divisor:i})}format(t,e,r){var i;return this.name==="pre-paginated"?i=t.fit(this.columnWidth,this.height,e):this._flow==="paginated"?i=t.columns(this.width,this.height,this.columnWidth,this.gap,this.settings.direction):r&&r==="horizontal"?i=t.size(null,this.height):i=t.size(this.width,null),i}count(t,e){let r,i;return this.name==="pre-paginated"?(r=1,i=1):this._flow==="paginated"?(e=e||this.delta,r=Math.ceil(t/e),i=r*this.divisor):(e=e||this.height,r=Math.ceil(t/e),i=r),{spreads:r,pages:i}}update(t){if(Object.keys(t).forEach(e=>{this.props[e]===t[e]&&delete t[e]}),Object.keys(t).length>0){let e=oe(this.props,t);this.emit(ct.LAYOUT.UPDATED,e,t)}}}Te(Bs.prototype);class j0{constructor(t){this.rendition=t,this._themes={default:{rules:{},url:"",serialized:""}},this._overrides={},this._current="default",this._injected=[],this.rendition.hooks.content.register(this.inject.bind(this)),this.rendition.hooks.content.register(this.overrides.bind(this))}register(){if(arguments.length!==0){if(arguments.length===1&&typeof arguments[0]=="object")return this.registerThemes(arguments[0]);if(arguments.length===1&&typeof arguments[0]=="string")return this.default(arguments[0]);if(arguments.length===2&&typeof arguments[1]=="string")return this.registerUrl(arguments[0],arguments[1]);if(arguments.length===2&&typeof arguments[1]=="object")return this.registerRules(arguments[0],arguments[1])}}default(t){if(t){if(typeof t=="string")return this.registerUrl("default",t);if(typeof t=="object")return this.registerRules("default",t)}}registerThemes(t){for(var e in t)t.hasOwnProperty(e)&&(typeof t[e]=="string"?this.registerUrl(e,t[e]):this.registerRules(e,t[e]))}registerCss(t,e){this._themes[t]={serialized:e},(this._injected[t]||t=="default")&&this.update(t)}registerUrl(t,e){var r=new Ee(e);this._themes[t]={url:r.toString()},(this._injected[t]||t=="default")&&this.update(t)}registerRules(t,e){this._themes[t]={rules:e},(this._injected[t]||t=="default")&&this.update(t)}select(t){var e=this._current,r;this._current=t,this.update(t),r=this.rendition.getContents(),r.forEach(i=>{i.removeClass(e),i.addClass(t)})}update(t){var e=this.rendition.getContents();e.forEach(r=>{this.add(t,r)})}inject(t){var e=[],r=this._themes,i;for(var n in r)r.hasOwnProperty(n)&&(n===this._current||n==="default")&&(i=r[n],(i.rules&&Object.keys(i.rules).length>0||i.url&&e.indexOf(i.url)===-1)&&this.add(n,t),this._injected.push(n));this._current!="default"&&t.addClass(this._current)}add(t,e){var r=this._themes[t];!r||!e||(r.url?e.addStylesheet(r.url):r.serialized?(e.addStylesheetCss(r.serialized,t),r.injected=!0):r.rules&&(e.addStylesheetRules(r.rules,t),r.injected=!0))}override(t,e,r){var i=this.rendition.getContents();this._overrides[t]={value:e,priority:r===!0},i.forEach(n=>{n.css(t,this._overrides[t].value,this._overrides[t].priority)})}removeOverride(t){var e=this.rendition.getContents();delete this._overrides[t],e.forEach(r=>{r.css(t)})}overrides(t){var e=this._overrides;for(var r in e)e.hasOwnProperty(r)&&t.css(r,e[r].value,e[r].priority)}fontSize(t){this.override("font-size",t)}font(t){this.override("font-family",t,!0)}destroy(){this.rendition=void 0,this._themes=void 0,this._overrides=void 0,this._current=void 0,this._injected=void 0}}class ya{constructor(t,e,r,i=!1){this.layout=t,this.horizontal=r==="horizontal",this.direction=e||"ltr",this._dev=i}section(t){var e=this.findRanges(t),r=this.rangeListToCfiList(t.section.cfiBase,e);return r}page(t,e,r,i){var n=t&&t.document?t.document.body:!1,s;if(n){if(s=this.rangePairToCfiPair(e,{start:this.findStart(n,r,i),end:this.findEnd(n,r,i)}),this._dev===!0){let h=t.document,c=new Ot(s.start).toRange(h),l=new Ot(s.end).toRange(h),f=h.defaultView.getSelection(),p=h.createRange();f.removeAllRanges(),p.setStart(c.startContainer,c.startOffset),p.setEnd(l.endContainer,l.endOffset),f.addRange(p)}return s}}walk(t,e){if(!(t&&t.nodeType===Node.TEXT_NODE)){var r={acceptNode:function(c){return c.data.trim().length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},i=r.acceptNode;i.acceptNode=r.acceptNode;for(var n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,i,!1),s,h;(s=n.nextNode())&&(h=e(s),!h););return h}}findRanges(t){for(var e=[],r=t.contents.scrollWidth(),i=Math.ceil(r/this.layout.spreadWidth),n=i*this.layout.divisor,s=this.layout.columnWidth,h=this.layout.gap,c,l,f=0;f<n.pages;f++)c=(s+h)*f,l=s*(f+1)+h*f,e.push({start:this.findStart(t.document.body,c,l),end:this.findEnd(t.document.body,c,l)});return e}findStart(t,e,r){for(var i=[t],n,s,h=t;i.length;)if(n=i.shift(),s=this.walk(n,c=>{var l,f,p,b,y;if(y=y1(c),this.horizontal&&this.direction==="ltr"){if(l=this.horizontal?y.left:y.top,f=this.horizontal?y.right:y.bottom,l>=e&&l<=r)return c;if(f>e)return c;h=c,i.push(c)}else if(this.horizontal&&this.direction==="rtl"){if(l=y.left,f=y.right,f<=r&&f>=e)return c;if(l<r)return c;h=c,i.push(c)}else{if(p=y.top,b=y.bottom,p>=e&&p<=r)return c;if(b>e)return c;h=c,i.push(c)}}),s)return this.findTextStartRange(s,e,r);return this.findTextStartRange(h,e,r)}findEnd(t,e,r){for(var i=[t],n,s=t,h;i.length;)if(n=i.shift(),h=this.walk(n,c=>{var l,f,p,b,y;if(y=y1(c),this.horizontal&&this.direction==="ltr"){if(l=Math.round(y.left),f=Math.round(y.right),l>r&&s)return s;if(f>r)return c;s=c,i.push(c)}else if(this.horizontal&&this.direction==="rtl"){if(l=Math.round(this.horizontal?y.left:y.top),f=Math.round(this.horizontal?y.right:y.bottom),f<e&&s)return s;if(l<e)return c;s=c,i.push(c)}else{if(p=Math.round(y.top),b=Math.round(y.bottom),p>r&&s)return s;if(b>r)return c;s=c,i.push(c)}}),h)return this.findTextEndRange(h,e,r);return this.findTextEndRange(s,e,r)}findTextStartRange(t,e,r){for(var i=this.splitTextNodeIntoRanges(t),n,s,h,c,l,f=0;f<i.length;f++)if(n=i[f],s=n.getBoundingClientRect(),this.horizontal&&this.direction==="ltr"){if(h=s.left,h>=e)return n}else if(this.horizontal&&this.direction==="rtl"){if(l=s.right,l<=r)return n}else if(c=s.top,c>=e)return n;return i[0]}findTextEndRange(t,e,r){for(var i=this.splitTextNodeIntoRanges(t),n,s,h,c,l,f,p,b=0;b<i.length;b++){if(s=i[b],h=s.getBoundingClientRect(),this.horizontal&&this.direction==="ltr"){if(c=h.left,l=h.right,c>r&&n)return n;if(l>r)return s}else if(this.horizontal&&this.direction==="rtl"){if(c=h.left,l=h.right,l<e&&n)return n;if(c<e)return s}else{if(f=h.top,p=h.bottom,f>r&&n)return n;if(p>r)return s}n=s}return i[i.length-1]}splitTextNodeIntoRanges(t,e){var r=[],i=t.textContent||"",n=i.trim(),s,h=t.ownerDocument,c=e||" ",l=n.indexOf(c);if(l===-1||t.nodeType!=Node.TEXT_NODE)return s=h.createRange(),s.selectNodeContents(t),[s];for(s=h.createRange(),s.setStart(t,0),s.setEnd(t,l),r.push(s),s=!1;l!=-1;)l=n.indexOf(c,l+1),l>0&&(s&&(s.setEnd(t,l),r.push(s)),s=h.createRange(),s.setStart(t,l+1));return s&&(s.setEnd(t,n.length),r.push(s)),r}rangePairToCfiPair(t,e){var r=e.start,i=e.end;r.collapse(!0),i.collapse(!1);let n=new Ot(r,t).toString(),s=new Ot(i,t).toString();return{start:n,end:s}}rangeListToCfiList(t,e){for(var r=[],i,n=0;n<e.length;n++)i=this.rangePairToCfiPair(t,e[n]),r.push(i);return r}axis(t){return t&&(this.horizontal=t==="horizontal"),this.horizontal}}const Os=typeof navigator<"u",G0=Os&&/Chrome/.test(navigator.userAgent),m2=Os&&!G0&&/AppleWebKit/.test(navigator.userAgent),X0=1;class L1{constructor(t,e,r,i){this.epubcfi=new Ot,this.document=t,this.documentElement=this.document.documentElement,this.content=e||this.document.body,this.window=this.document.defaultView,this._size={width:0,height:0},this.sectionIndex=i||0,this.cfiBase=r||"",this.epubReadingSystem("epub.js",Aa),this.called=0,this.active=!0,this.listeners()}static get listenedEvents(){return ua}width(t){var e=this.content;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.width=t),parseInt(this.window.getComputedStyle(e).width)}height(t){var e=this.content;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.height=t),parseInt(this.window.getComputedStyle(e).height)}contentWidth(t){var e=this.content||this.document.body;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.width=t),parseInt(this.window.getComputedStyle(e).width)}contentHeight(t){var e=this.content||this.document.body;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.height=t),parseInt(this.window.getComputedStyle(e).height)}textWidth(){let t,e,r=this.document.createRange(),i=this.content||this.document.body,n=fa(i);return r.selectNodeContents(i),t=r.getBoundingClientRect(),e=t.width,n&&n.width&&(e+=n.width),Math.round(e)}textHeight(){let t,e,r=this.document.createRange(),i=this.content||this.document.body;return r.selectNodeContents(i),t=r.getBoundingClientRect(),e=t.bottom,Math.round(e)}scrollWidth(){var t=this.documentElement.scrollWidth;return t}scrollHeight(){var t=this.documentElement.scrollHeight;return t}overflow(t){return t&&(this.documentElement.style.overflow=t),this.window.getComputedStyle(this.documentElement).overflow}overflowX(t){return t&&(this.documentElement.style.overflowX=t),this.window.getComputedStyle(this.documentElement).overflowX}overflowY(t){return t&&(this.documentElement.style.overflowY=t),this.window.getComputedStyle(this.documentElement).overflowY}css(t,e,r){var i=this.content||this.document.body;return e?i.style.setProperty(t,e,r?"important":""):i.style.removeProperty(t),this.window.getComputedStyle(i)[t]}viewport(t){var e=this.document.querySelector("meta[name='viewport']"),r={width:void 0,height:void 0,scale:void 0,minimum:void 0,maximum:void 0,scalable:void 0},i=[],n={};if(e&&e.hasAttribute("content")){let s=e.getAttribute("content"),h=s.match(/width\s*=\s*([^,]*)/),c=s.match(/height\s*=\s*([^,]*)/),l=s.match(/initial-scale\s*=\s*([^,]*)/),f=s.match(/minimum-scale\s*=\s*([^,]*)/),p=s.match(/maximum-scale\s*=\s*([^,]*)/),b=s.match(/user-scalable\s*=\s*([^,]*)/);h&&h.length&&typeof h[1]<"u"&&(r.width=h[1]),c&&c.length&&typeof c[1]<"u"&&(r.height=c[1]),l&&l.length&&typeof l[1]<"u"&&(r.scale=l[1]),f&&f.length&&typeof f[1]<"u"&&(r.minimum=f[1]),p&&p.length&&typeof p[1]<"u"&&(r.maximum=p[1]),b&&b.length&&typeof b[1]<"u"&&(r.scalable=b[1])}return n=_s(t||{},r),t&&(n.width&&i.push("width="+n.width),n.height&&i.push("height="+n.height),n.scale&&i.push("initial-scale="+n.scale),n.scalable==="no"?(i.push("minimum-scale="+n.scale),i.push("maximum-scale="+n.scale),i.push("user-scalable="+n.scalable)):(n.scalable&&i.push("user-scalable="+n.scalable),n.minimum&&i.push("minimum-scale="+n.minimum),n.maximum&&i.push("minimum-scale="+n.maximum)),e||(e=this.document.createElement("meta"),e.setAttribute("name","viewport"),this.document.querySelector("head").appendChild(e)),e.setAttribute("content",i.join(", ")),this.window.scrollTo(0,0)),n}expand(){this.emit(ct.CONTENTS.EXPAND)}listeners(){this.imageLoadListeners(),this.mediaQueryListeners(),this.addEventListeners(),this.addSelectionListeners(),typeof ResizeObserver>"u"?(this.resizeListeners(),this.visibilityListeners()):this.resizeObservers(),this.linksHandler()}removeListeners(){this.removeEventListeners(),this.removeSelectionListeners(),this.observer&&this.observer.disconnect(),clearTimeout(this.expanding)}resizeCheck(){let t=this.textWidth(),e=this.textHeight();(t!=this._size.width||e!=this._size.height)&&(this._size={width:t,height:e},this.onResize&&this.onResize(this._size),this.emit(ct.CONTENTS.RESIZE,this._size))}resizeListeners(){clearTimeout(this.expanding),requestAnimationFrame(this.resizeCheck.bind(this)),this.expanding=setTimeout(this.resizeListeners.bind(this),350)}visibilityListeners(){document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.active===!1?(this.active=!0,this.resizeListeners()):(this.active=!1,clearTimeout(this.expanding))})}transitionListeners(){let t=this.content;t.style.transitionProperty="font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height",t.style.transitionDuration="0.001ms",t.style.transitionTimingFunction="linear",t.style.transitionDelay="0",this._resizeCheck=this.resizeCheck.bind(this),this.document.addEventListener("transitionend",this._resizeCheck)}mediaQueryListeners(){for(var t=this.document.styleSheets,e=(function(h){h.matches&&!this._expanding&&setTimeout(this.expand.bind(this),1)}).bind(this),r=0;r<t.length;r+=1){var i;try{i=t[r].cssRules}catch{return}if(!i)return;for(var n=0;n<i.length;n+=1)if(i[n].media){var s=this.window.matchMedia(i[n].media.mediaText);s.addListener(e)}}}resizeObservers(){this.observer=new ResizeObserver(t=>{requestAnimationFrame(this.resizeCheck.bind(this))}),this.observer.observe(this.document.documentElement)}mutationObservers(){this.observer=new MutationObserver(e=>{this.resizeCheck()});let t={attributes:!0,childList:!0,characterData:!0,subtree:!0};this.observer.observe(this.document,t)}imageLoadListeners(){for(var t=this.document.querySelectorAll("img"),e,r=0;r<t.length;r++)e=t[r],typeof e.naturalWidth<"u"&&e.naturalWidth===0&&(e.onload=this.expand.bind(this))}fontLoadListeners(){!this.document||!this.document.fonts||this.document.fonts.ready.then((function(){this.resizeCheck()}).bind(this))}root(){return this.document?this.document.documentElement:null}locationOf(t,e){var r,i={left:0,top:0};if(!this.document)return i;if(this.epubcfi.isCfiString(t)){let n=new Ot(t).toRange(this.document,e);if(n){try{if(!n.endContainer||n.startContainer==n.endContainer&&n.startOffset==n.endOffset){let s=n.startContainer.textContent.indexOf(" ",n.startOffset);s==-1&&(s=n.startContainer.textContent.length),n.setEnd(n.startContainer,s)}}catch(s){console.error("setting end offset to start container length failed",s)}if(n.startContainer.nodeType===Node.ELEMENT_NODE)r=n.startContainer.getBoundingClientRect(),i.left=r.left,i.top=r.top;else if(m2){let s=n.startContainer,h=new Range;try{s.nodeType===X0?r=s.getBoundingClientRect():n.startOffset+2<s.length?(h.setStart(s,n.startOffset),h.setEnd(s,n.startOffset+2),r=h.getBoundingClientRect()):n.startOffset-2>0?(h.setStart(s,n.startOffset-2),h.setEnd(s,n.startOffset),r=h.getBoundingClientRect()):r=s.parentNode.getBoundingClientRect()}catch(c){console.error(c,c.stack)}}else r=n.getBoundingClientRect()}}else if(typeof t=="string"&&t.indexOf("#")>-1){let n=t.substring(t.indexOf("#")+1),s=this.document.getElementById(n);if(s)if(m2){let h=new Range;h.selectNode(s),r=h.getBoundingClientRect()}else r=s.getBoundingClientRect()}return r&&(i.left=r.left,i.top=r.top),i}addStylesheet(t){return new Promise((function(e,r){var i,n=!1;if(!this.document){e(!1);return}if(i=this.document.querySelector("link[href='"+t+"']"),i){e(!0);return}i=this.document.createElement("link"),i.type="text/css",i.rel="stylesheet",i.href=t,i.onload=i.onreadystatechange=function(){!n&&(!this.readyState||this.readyState=="complete")&&(n=!0,setTimeout(()=>{e(!0)},1))},this.document.head.appendChild(i)}).bind(this))}_getStylesheetNode(t){var e;return t="epubjs-inserted-css-"+(t||""),this.document?(e=this.document.getElementById(t),e||(e=this.document.createElement("style"),e.id=t,this.document.head.appendChild(e)),e):!1}addStylesheetCss(t,e){if(!this.document||!t)return!1;var r;return r=this._getStylesheetNode(e),r.innerHTML=t,!0}addStylesheetRules(t,e){var r;if(!(!this.document||!t||t.length===0))if(r=this._getStylesheetNode(e).sheet,Object.prototype.toString.call(t)==="[object Array]")for(var i=0,n=t.length;i<n;i++){var s=1,h=t[i],c=t[i][0],l="";Object.prototype.toString.call(h[1][0])==="[object Array]"&&(h=h[1],s=0);for(var f=h.length;s<f;s++){var p=h[s];l+=p[0]+":"+p[1]+(p[2]?" !important":"")+`;
`}r.insertRule(c+"{"+l+"}",r.cssRules.length)}else Object.keys(t).forEach(y=>{const R=t[y];if(Array.isArray(R))R.forEach(A=>{const g=Object.keys(A).map(M=>`${M}:${A[M]}`).join(";");r.insertRule(`${y}{${g}}`,r.cssRules.length)});else{const u=Object.keys(R).map(g=>`${g}:${R[g]}`).join(";");r.insertRule(`${y}{${u}}`,r.cssRules.length)}})}addScript(t){return new Promise((function(e,r){var i,n=!1;if(!this.document){e(!1);return}i=this.document.createElement("script"),i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){!n&&(!this.readyState||this.readyState=="complete")&&(n=!0,setTimeout(function(){e(!0)},1))},this.document.head.appendChild(i)}).bind(this))}addClass(t){var e;this.document&&(e=this.content||this.document.body,e&&e.classList.add(t))}removeClass(t){var e;this.document&&(e=this.content||this.document.body,e&&e.classList.remove(t))}addEventListeners(){this.document&&(this._triggerEvent=this.triggerEvent.bind(this),ua.forEach(function(t){this.document.addEventListener(t,this._triggerEvent,{passive:!0})},this))}removeEventListeners(){this.document&&(ua.forEach(function(t){this.document.removeEventListener(t,this._triggerEvent,{passive:!0})},this),this._triggerEvent=void 0)}triggerEvent(t){this.emit(t.type,t)}addSelectionListeners(){this.document&&(this._onSelectionChange=this.onSelectionChange.bind(this),this.document.addEventListener("selectionchange",this._onSelectionChange,{passive:!0}))}removeSelectionListeners(){this.document&&(this.document.removeEventListener("selectionchange",this._onSelectionChange,{passive:!0}),this._onSelectionChange=void 0)}onSelectionChange(t){this.selectionEndTimeout&&clearTimeout(this.selectionEndTimeout),this.selectionEndTimeout=setTimeout((function(){var e=this.window.getSelection();this.triggerSelectedEvent(e)}).bind(this),250)}triggerSelectedEvent(t){var e,r;t&&t.rangeCount>0&&(e=t.getRangeAt(0),e.collapsed||(r=new Ot(e,this.cfiBase).toString(),this.emit(ct.CONTENTS.SELECTED,r),this.emit(ct.CONTENTS.SELECTED_RANGE,e)))}range(t,e){var r=new Ot(t);return r.toRange(this.document,e)}cfiFromRange(t,e){return new Ot(t,this.cfiBase,e).toString()}cfiFromNode(t,e){return new Ot(t,this.cfiBase,e).toString()}map(t){var e=new ya(t);return e.section()}size(t,e){var r={scale:1,scalable:"no"};this.layoutStyle("scrolling"),t>=0&&(this.width(t),r.width=t,this.css("padding","0 "+t/12+"px")),e>=0&&(this.height(e),r.height=e),this.css("margin","0"),this.css("box-sizing","border-box"),this.viewport(r)}columns(t,e,r,i,n){let s=qe("column-axis"),h=qe("column-gap"),c=qe("column-width"),l=qe("column-fill"),p=this.writingMode().indexOf("vertical")===0?"vertical":"horizontal";this.layoutStyle("paginated"),n==="rtl"&&p==="horizontal"&&this.direction(n),this.width(t),this.height(e),this.viewport({width:t,height:e,scale:1,scalable:"no"}),this.css("overflow-y","hidden"),this.css("margin","0",!0),p==="vertical"?(this.css("padding-top",i/2+"px",!0),this.css("padding-bottom",i/2+"px",!0),this.css("padding-left","20px"),this.css("padding-right","20px"),this.css(s,"vertical")):(this.css("padding-top","20px"),this.css("padding-bottom","20px"),this.css("padding-left",i/2+"px",!0),this.css("padding-right",i/2+"px",!0),this.css(s,"horizontal")),this.css("box-sizing","border-box"),this.css("max-width","inherit"),this.css(l,"auto"),this.css(h,i+"px"),this.css(c,r+"px"),this.css("-webkit-line-box-contain","block glyphs replaced")}scaler(t,e,r){var i="scale("+t+")",n="";this.css("transform-origin","top left"),(e>=0||r>=0)&&(n=" translate("+(e||0)+"px, "+(r||0)+"px )"),this.css("transform",i+n)}fit(t,e,r){var i=this.viewport(),n=parseInt(i.width),s=parseInt(i.height),h=t/n,c=e/s,l=h<c?h:c;if(this.layoutStyle("paginated"),this.width(n),this.height(s),this.overflow("hidden"),this.scaler(l,0,0),this.css("background-size",n*l+"px "+s*l+"px"),this.css("background-color","transparent"),r&&r.properties.includes("page-spread-left")){var f=t-n*l;this.css("margin-left",f+"px")}}direction(t){this.documentElement&&(this.documentElement.style.direction=t)}mapPage(t,e,r,i,n){var s=new ya(e,n);return s.page(this,t,r,i)}linksHandler(){I0(this.content,t=>{this.emit(ct.CONTENTS.LINK_CLICKED,t)})}writingMode(t){let e=qe("writing-mode");return t&&this.documentElement&&(this.documentElement.style[e]=t),this.window.getComputedStyle(this.documentElement)[e]||""}layoutStyle(t){return t&&(this._layoutStyle=t,navigator.epubReadingSystem.layoutStyle=this._layoutStyle),this._layoutStyle||"paginated"}epubReadingSystem(t,e){return navigator.epubReadingSystem={name:t,version:e,layoutStyle:this.layoutStyle(),hasFeature:function(r){switch(r){case"dom-manipulation":return!0;case"layout-changes":return!0;case"touch-events":return!0;case"mouse-events":return!0;case"keyboard-events":return!0;case"spine-scripting":return!1;default:return!1}}},navigator.epubReadingSystem}destroy(){this.removeListeners()}}Te(L1.prototype);class $0{constructor(t){this.rendition=t,this.highlights=[],this.underlines=[],this.marks=[],this._annotations={},this._annotationsBySectionIndex={},this.rendition.hooks.render.register(this.inject.bind(this)),this.rendition.hooks.unloaded.register(this.clear.bind(this))}add(t,e,r,i,n,s){let h=encodeURI(e+t),l=new Ot(e).spinePos,f=new Vs({type:t,cfiRange:e,data:r,sectionIndex:l,cb:i,className:n,styles:s});return this._annotations[h]=f,l in this._annotationsBySectionIndex?this._annotationsBySectionIndex[l].push(h):this._annotationsBySectionIndex[l]=[h],this.rendition.views().forEach(b=>{f.sectionIndex===b.index&&f.attach(b)}),f}remove(t,e){let r=encodeURI(t+e);if(r in this._annotations){let i=this._annotations[r];if(e&&i.type!==e)return;this.rendition.views().forEach(s=>{this._removeFromAnnotationBySectionIndex(i.sectionIndex,r),i.sectionIndex===s.index&&i.detach(s)}),delete this._annotations[r]}}_removeFromAnnotationBySectionIndex(t,e){this._annotationsBySectionIndex[t]=this._annotationsAt(t).filter(r=>r!==e)}_annotationsAt(t){return this._annotationsBySectionIndex[t]}highlight(t,e,r,i,n){return this.add("highlight",t,e,r,i,n)}underline(t,e,r,i,n){return this.add("underline",t,e,r,i,n)}mark(t,e,r){return this.add("mark",t,e,r)}each(){return this._annotations.forEach.apply(this._annotations,arguments)}inject(t){let e=t.index;e in this._annotationsBySectionIndex&&this._annotationsBySectionIndex[e].forEach(i=>{this._annotations[i].attach(t)})}clear(t){let e=t.index;e in this._annotationsBySectionIndex&&this._annotationsBySectionIndex[e].forEach(i=>{this._annotations[i].detach(t)})}show(){}hide(){}}class Vs{constructor({type:t,cfiRange:e,data:r,sectionIndex:i,cb:n,className:s,styles:h}){this.type=t,this.cfiRange=e,this.data=r,this.sectionIndex=i,this.mark=void 0,this.cb=n,this.className=s,this.styles=h}update(t){this.data=t}attach(t){let{cfiRange:e,data:r,type:i,mark:n,cb:s,className:h,styles:c}=this,l;return i==="highlight"?l=t.highlight(e,r,s,h,c):i==="underline"?l=t.underline(e,r,s,h,c):i==="mark"&&(l=t.mark(e,r,s)),this.mark=l,this.emit(ct.ANNOTATION.ATTACH,l),l}detach(t){let{cfiRange:e,type:r}=this,i;return t&&(r==="highlight"?i=t.unhighlight(e):r==="underline"?i=t.ununderline(e):r==="mark"&&(i=t.unmark(e))),this.mark=void 0,this.emit(ct.ANNOTATION.DETACH,i),i}text(){}}Te(Vs.prototype);var Ae={},ea={},M2;function Y0(){if(M2)return ea;M2=1,Object.defineProperty(ea,"__esModule",{value:!0}),ea.createElement=v;function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}return ea.default={createElement:v},ea}var Ue={},y2;function K0(){if(y2)return Ue;y2=1,Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.proxyMouse=v,Ue.clone=t,Ue.default={proxyMouse:v};function v(r,i){function n(l){for(var f=i.length-1;f>=0;f--){var p=i[f],b=l.clientX,y=l.clientY;if(l.touches&&l.touches.length&&(b=l.touches[0].clientX,y=l.touches[0].clientY),!!e(p,r,b,y)){p.dispatchEvent(t(l));break}}}if(r.nodeName==="iframe"||r.nodeName==="IFRAME")try{this.target=r.contentDocument}catch{this.target=r}else this.target=r;for(var s=["mouseup","mousedown","click","touchstart"],h=0;h<s.length;h++){var c=s[h];this.target.addEventListener(c,function(l){return n(l)},!1)}}function t(r){var i=Object.assign({},r,{bubbles:!1});try{return new MouseEvent(r.type,i)}catch{var n=document.createEvent("MouseEvents");return n.initMouseEvent(r.type,!1,i.cancelable,i.view,i.detail,i.screenX,i.screenY,i.clientX,i.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.button,i.relatedTarget),n}}function e(r,i,n,s){var h=i.getBoundingClientRect();function c(y,R,A){var u=y.top-h.top,g=y.left-h.left,M=u+y.height,E=g+y.width;return u<=A&&g<=R&&M>A&&E>R}var l=r.getBoundingClientRect();if(!c(l,n,s))return!1;for(var f=r.getClientRects(),p=0,b=f.length;p<b;p++)if(c(f[p],n,s))return!0;return!1}return Ue}var x2;function J0(){if(x2)return Ae;x2=1,Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.Underline=Ae.Highlight=Ae.Mark=Ae.Pane=void 0;var v=function A(u,g,M){u===null&&(u=Function.prototype);var E=Object.getOwnPropertyDescriptor(u,g);if(E===void 0){var B=Object.getPrototypeOf(u);return B===null?void 0:A(B,g,M)}else{if("value"in E)return E.value;var w=E.get;return w===void 0?void 0:w.call(M)}},t=(function(){function A(u,g){for(var M=0;M<g.length;M++){var E=g[M];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(u,E.key,E)}}return function(u,g,M){return g&&A(u.prototype,g),M&&A(u,M),u}})(),e=Y0(),r=s(e),i=K0(),n=s(i);function s(A){return A&&A.__esModule?A:{default:A}}function h(A,u){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:A}function c(A,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);A.prototype=Object.create(u&&u.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(A,u):A.__proto__=u)}function l(A,u){if(!(A instanceof u))throw new TypeError("Cannot call a class as a function")}Ae.Pane=(function(){function A(u){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.body;l(this,A),this.target=u,this.element=r.default.createElement("svg"),this.marks=[],this.element.style.position="absolute",this.element.setAttribute("pointer-events","none"),n.default.proxyMouse(this.target,this.marks),this.container=g,this.container.appendChild(this.element),this.render()}return t(A,[{key:"addMark",value:function(g){var M=r.default.createElement("g");return this.element.appendChild(M),g.bind(M,this.container),this.marks.push(g),g.render(),g}},{key:"removeMark",value:function(g){var M=this.marks.indexOf(g);if(M!==-1){var E=g.unbind();this.element.removeChild(E),this.marks.splice(M,1)}}},{key:"render",value:function(){y(this.element,b(this.target,this.container));var g=!0,M=!1,E=void 0;try{for(var B=this.marks[Symbol.iterator](),w;!(g=(w=B.next()).done);g=!0){var T=w.value;T.render()}}catch(L){M=!0,E=L}finally{try{!g&&B.return&&B.return()}finally{if(M)throw E}}}}]),A})();var f=Ae.Mark=(function(){function A(){l(this,A),this.element=null}return t(A,[{key:"bind",value:function(g,M){this.element=g,this.container=M}},{key:"unbind",value:function(){var g=this.element;return this.element=null,g}},{key:"render",value:function(){}},{key:"dispatchEvent",value:function(g){this.element&&this.element.dispatchEvent(g)}},{key:"getBoundingClientRect",value:function(){return this.element.getBoundingClientRect()}},{key:"getClientRects",value:function(){for(var g=[],M=this.element.firstChild;M;)g.push(M.getBoundingClientRect()),M=M.nextSibling;return g}},{key:"filteredRanges",value:function(){var g=Array.from(this.range.getClientRects());return g.filter(function(M){for(var E=0;E<g.length;E++){if(g[E]===M)return!0;var B=R(g[E],M);if(B)return!1}return!0})}}]),A})(),p=Ae.Highlight=(function(A){c(u,A);function u(g,M,E,B){l(this,u);var w=h(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return w.range=g,w.className=M,w.data=E||{},w.attributes=B||{},w}return t(u,[{key:"bind",value:function(M,E){v(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"bind",this).call(this,M,E);for(var B in this.data)this.data.hasOwnProperty(B)&&(this.element.dataset[B]=this.data[B]);for(var B in this.attributes)this.attributes.hasOwnProperty(B)&&this.element.setAttribute(B,this.attributes[B]);this.className&&this.element.classList.add(this.className)}},{key:"render",value:function(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(var M=this.element.ownerDocument.createDocumentFragment(),E=this.filteredRanges(),B=this.element.getBoundingClientRect(),w=this.container.getBoundingClientRect(),T=0,L=E.length;T<L;T++){var H=E[T],k=r.default.createElement("rect");k.setAttribute("x",H.left-B.left+w.left),k.setAttribute("y",H.top-B.top+w.top),k.setAttribute("height",H.height),k.setAttribute("width",H.width),M.appendChild(k)}this.element.appendChild(M)}}]),u})(f);Ae.Underline=(function(A){c(u,A);function u(g,M,E,B){return l(this,u),h(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,g,M,E,B))}return t(u,[{key:"render",value:function(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(var M=this.element.ownerDocument.createDocumentFragment(),E=this.filteredRanges(),B=this.element.getBoundingClientRect(),w=this.container.getBoundingClientRect(),T=0,L=E.length;T<L;T++){var H=E[T],k=r.default.createElement("rect");k.setAttribute("x",H.left-B.left+w.left),k.setAttribute("y",H.top-B.top+w.top),k.setAttribute("height",H.height),k.setAttribute("width",H.width),k.setAttribute("fill","none");var N=r.default.createElement("line");N.setAttribute("x1",H.left-B.left+w.left),N.setAttribute("x2",H.left-B.left+w.left+H.width),N.setAttribute("y1",H.top-B.top+w.top+H.height-1),N.setAttribute("y2",H.top-B.top+w.top+H.height-1),N.setAttribute("stroke-width",1),N.setAttribute("stroke","black"),N.setAttribute("stroke-linecap","square"),M.appendChild(k),M.appendChild(N)}this.element.appendChild(M)}}]),u})(p);function b(A,u){var g=u.getBoundingClientRect(),M=A.getBoundingClientRect();return{top:M.top-g.top,left:M.left-g.left,height:A.scrollHeight,width:A.scrollWidth}}function y(A,u){A.style.setProperty("top",u.top+"px","important"),A.style.setProperty("left",u.left+"px","important"),A.style.setProperty("height",u.height+"px","important"),A.style.setProperty("width",u.width+"px","important")}function R(A,u){return u.right<=A.right&&u.left>=A.left&&u.top>=A.top&&u.bottom<=A.bottom}return Ae}var da=J0();class Is{constructor(t,e){this.settings=oe({ignoreClass:"",axis:void 0,direction:void 0,width:0,height:0,layout:void 0,globalLayoutProperties:{},method:void 0,forceRight:!1,allowScriptedContent:!1,allowPopups:!1},e||{}),this.id="epubjs-view-"+ba(),this.section=t,this.index=t.index,this.element=this.container(this.settings.axis),this.added=!1,this.displayed=!1,this.rendered=!1,this.fixedWidth=0,this.fixedHeight=0,this.epubcfi=new Ot,this.layout=this.settings.layout,this.pane=void 0,this.highlights={},this.underlines={},this.marks={}}container(t){var e=document.createElement("div");return e.classList.add("epub-view"),e.style.height="0px",e.style.width="0px",e.style.overflow="hidden",e.style.position="relative",e.style.display="block",t&&t=="horizontal"?e.style.flex="none":e.style.flex="initial",e}create(){return this.iframe?this.iframe:(this.element||(this.element=this.createContainer()),this.iframe=document.createElement("iframe"),this.iframe.id=this.id,this.iframe.scrolling="no",this.iframe.style.overflow="hidden",this.iframe.seamless="seamless",this.iframe.style.border="none",this.iframe.sandbox="allow-same-origin",this.settings.allowScriptedContent&&(this.iframe.sandbox+=" allow-scripts"),this.settings.allowPopups&&(this.iframe.sandbox+=" allow-popups"),this.iframe.setAttribute("enable-annotation","true"),this.resizing=!0,this.element.style.visibility="hidden",this.iframe.style.visibility="hidden",this.iframe.style.width="0",this.iframe.style.height="0",this._width=0,this._height=0,this.element.setAttribute("ref",this.index),this.added=!0,this.elementBounds=la(this.element),"srcdoc"in this.iframe?this.supportsSrcdoc=!0:this.supportsSrcdoc=!1,this.settings.method||(this.settings.method=this.supportsSrcdoc?"srcdoc":"write"),this.iframe)}render(t,e){return this.create(),this.size(),this.sectionRender||(this.sectionRender=this.section.render(t)),this.sectionRender.then((function(r){return this.load(r)}).bind(this)).then((function(){let r=this.contents.writingMode(),i;return this.settings.flow==="scrolled"?i=r.indexOf("vertical")===0?"horizontal":"vertical":i=r.indexOf("vertical")===0?"vertical":"horizontal",r.indexOf("vertical")===0&&this.settings.flow==="paginated"&&(this.layout.delta=this.layout.height),this.setAxis(i),this.emit(ct.VIEWS.AXIS,i),this.setWritingMode(r),this.emit(ct.VIEWS.WRITING_MODE,r),this.layout.format(this.contents,this.section,this.axis),this.addListeners(),new Promise((n,s)=>{this.expand(),this.settings.forceRight&&(this.element.style.marginLeft=this.width()+"px"),n()})}).bind(this),(function(r){return this.emit(ct.VIEWS.LOAD_ERROR,r),new Promise((i,n)=>{n(r)})}).bind(this)).then((function(){this.emit(ct.VIEWS.RENDERED,this.section)}).bind(this))}reset(){this.iframe&&(this.iframe.style.width="0",this.iframe.style.height="0",this._width=0,this._height=0,this._textWidth=void 0,this._contentWidth=void 0,this._textHeight=void 0,this._contentHeight=void 0),this._needsReframe=!0}size(t,e){var r=t||this.settings.width,i=e||this.settings.height;this.layout.name==="pre-paginated"?this.lock("both",r,i):this.settings.axis==="horizontal"?this.lock("height",r,i):this.lock("width",r,i),this.settings.width=r,this.settings.height=i}lock(t,e,r){var i=fa(this.element),n;this.iframe?n=fa(this.iframe):n={width:0,height:0},t=="width"&&Yt(e)&&(this.lockedWidth=e-i.width-n.width),t=="height"&&Yt(r)&&(this.lockedHeight=r-i.height-n.height),t==="both"&&Yt(e)&&Yt(r)&&(this.lockedWidth=e-i.width-n.width,this.lockedHeight=r-i.height-n.height),this.displayed&&this.iframe&&this.expand()}expand(t){var e=this.lockedWidth,r=this.lockedHeight,i;!this.iframe||this._expanding||(this._expanding=!0,this.layout.name==="pre-paginated"?(e=this.layout.columnWidth,r=this.layout.height):this.settings.axis==="horizontal"?(e=this.contents.textWidth(),e%this.layout.pageWidth>0&&(e=Math.ceil(e/this.layout.pageWidth)*this.layout.pageWidth),this.settings.forceEvenPages&&(i=e/this.layout.pageWidth,this.layout.divisor>1&&this.layout.name==="reflowable"&&i%2>0&&(e+=this.layout.pageWidth))):this.settings.axis==="vertical"&&(r=this.contents.textHeight(),this.settings.flow==="paginated"&&r%this.layout.height>0&&(r=Math.ceil(r/this.layout.height)*this.layout.height)),(this._needsReframe||e!=this._width||r!=this._height)&&this.reframe(e,r),this._expanding=!1)}reframe(t,e){var r;Yt(t)&&(this.element.style.width=t+"px",this.iframe.style.width=t+"px",this._width=t),Yt(e)&&(this.element.style.height=e+"px",this.iframe.style.height=e+"px",this._height=e);let i=this.prevBounds?t-this.prevBounds.width:t,n=this.prevBounds?e-this.prevBounds.height:e;r={width:t,height:e,widthDelta:i,heightDelta:n},this.pane&&this.pane.render(),requestAnimationFrame(()=>{let s;for(let h in this.marks)this.marks.hasOwnProperty(h)&&(s=this.marks[h],this.placeMark(s.element,s.range))}),this.onResize(this,r),this.emit(ct.VIEWS.RESIZED,r),this.prevBounds=r,this.elementBounds=la(this.element)}load(t){var e=new Bt,r=e.promise;if(!this.iframe)return e.reject(new Error("No Iframe Available")),r;if(this.iframe.onload=(function(n){this.onLoad(n,e)}).bind(this),this.settings.method==="blobUrl")this.blobUrl=ga(t,"application/xhtml+xml"),this.iframe.src=this.blobUrl,this.element.appendChild(this.iframe);else if(this.settings.method==="srcdoc")this.iframe.srcdoc=t,this.element.appendChild(this.iframe);else{if(this.element.appendChild(this.iframe),this.document=this.iframe.contentDocument,!this.document)return e.reject(new Error("No Document Available")),r;if(this.iframe.contentDocument.open(),window.MSApp&&MSApp.execUnsafeLocalFunction){var i=this;MSApp.execUnsafeLocalFunction(function(){i.iframe.contentDocument.write(t)})}else this.iframe.contentDocument.write(t);this.iframe.contentDocument.close()}return r}onLoad(t,e){this.window=this.iframe.contentWindow,this.document=this.iframe.contentDocument,this.contents=new L1(this.document,this.document.body,this.section.cfiBase,this.section.index),this.rendering=!1;var r=this.document.querySelector("link[rel='canonical']");r?r.setAttribute("href",this.section.canonical):(r=this.document.createElement("link"),r.setAttribute("rel","canonical"),r.setAttribute("href",this.section.canonical),this.document.querySelector("head").appendChild(r)),this.contents.on(ct.CONTENTS.EXPAND,()=>{this.displayed&&this.iframe&&(this.expand(),this.contents&&this.layout.format(this.contents))}),this.contents.on(ct.CONTENTS.RESIZE,i=>{this.displayed&&this.iframe&&(this.expand(),this.contents&&this.layout.format(this.contents))}),e.resolve(this.contents)}setLayout(t){this.layout=t,this.contents&&(this.layout.format(this.contents),this.expand())}setAxis(t){this.settings.axis=t,t=="horizontal"?this.element.style.flex="none":this.element.style.flex="initial",this.size()}setWritingMode(t){this.writingMode=t}addListeners(){}removeListeners(t){}display(t){var e=new Bt;return this.displayed?e.resolve(this):this.render(t).then((function(){this.emit(ct.VIEWS.DISPLAYED,this),this.onDisplayed(this),this.displayed=!0,e.resolve(this)}).bind(this),function(r){e.reject(r,this)}),e.promise}show(){this.element.style.visibility="visible",this.iframe&&(this.iframe.style.visibility="visible",this.iframe.style.transform="translateZ(0)",this.iframe.offsetWidth,this.iframe.style.transform=null),this.emit(ct.VIEWS.SHOWN,this)}hide(){this.element.style.visibility="hidden",this.iframe.style.visibility="hidden",this.stopExpanding=!0,this.emit(ct.VIEWS.HIDDEN,this)}offset(){return{top:this.element.offsetTop,left:this.element.offsetLeft}}width(){return this._width}height(){return this._height}position(){return this.element.getBoundingClientRect()}locationOf(t){this.iframe.getBoundingClientRect();var e=this.contents.locationOf(t,this.settings.ignoreClass);return{left:e.left,top:e.top}}onDisplayed(t){}onResize(t,e){}bounds(t){return(t||!this.elementBounds)&&(this.elementBounds=la(this.element)),this.elementBounds}highlight(t,e={},r,i="epubjs-hl",n={}){if(!this.contents)return;const s=Object.assign({fill:"yellow","fill-opacity":"0.3","mix-blend-mode":"multiply"},n);let h=this.contents.range(t),c=()=>{this.emit(ct.VIEWS.MARK_CLICKED,t,e)};e.epubcfi=t,this.pane||(this.pane=new da.Pane(this.iframe,this.element));let l=new da.Highlight(h,i,e,s),f=this.pane.addMark(l);return this.highlights[t]={mark:f,element:f.element,listeners:[c,r]},f.element.setAttribute("ref",i),f.element.addEventListener("click",c),f.element.addEventListener("touchstart",c),r&&(f.element.addEventListener("click",r),f.element.addEventListener("touchstart",r)),f}underline(t,e={},r,i="epubjs-ul",n={}){if(!this.contents)return;const s=Object.assign({stroke:"black","stroke-opacity":"0.3","mix-blend-mode":"multiply"},n);let h=this.contents.range(t),c=()=>{this.emit(ct.VIEWS.MARK_CLICKED,t,e)};e.epubcfi=t,this.pane||(this.pane=new da.Pane(this.iframe,this.element));let l=new da.Underline(h,i,e,s),f=this.pane.addMark(l);return this.underlines[t]={mark:f,element:f.element,listeners:[c,r]},f.element.setAttribute("ref",i),f.element.addEventListener("click",c),f.element.addEventListener("touchstart",c),r&&(f.element.addEventListener("click",r),f.element.addEventListener("touchstart",r)),f}mark(t,e={},r){if(!this.contents)return;if(t in this.marks)return this.marks[t];let i=this.contents.range(t);if(!i)return;let n=i.commonAncestorContainer,s=n.nodeType===1?n:n.parentNode,h=l=>{this.emit(ct.VIEWS.MARK_CLICKED,t,e)};i.collapsed&&n.nodeType===1?(i=new Range,i.selectNodeContents(n)):i.collapsed&&(i=new Range,i.selectNodeContents(s));let c=this.document.createElement("a");return c.setAttribute("ref","epubjs-mk"),c.style.position="absolute",c.dataset.epubcfi=t,e&&Object.keys(e).forEach(l=>{c.dataset[l]=e[l]}),r&&(c.addEventListener("click",r),c.addEventListener("touchstart",r)),c.addEventListener("click",h),c.addEventListener("touchstart",h),this.placeMark(c,i),this.element.appendChild(c),this.marks[t]={element:c,range:i,listeners:[h,r]},s}placeMark(t,e){let r,i,n;if(this.layout.name==="pre-paginated"||this.settings.axis!=="horizontal"){let h=e.getBoundingClientRect();r=h.top,i=h.right}else{let h=e.getClientRects(),c;for(var s=0;s!=h.length;s++)c=h[s],(!n||c.left<n)&&(n=c.left,i=Math.ceil(n/this.layout.props.pageWidth)*this.layout.props.pageWidth-this.layout.gap/2,r=c.top)}t.style.top=`${r}px`,t.style.left=`${i}px`}unhighlight(t){let e;t in this.highlights&&(e=this.highlights[t],this.pane.removeMark(e.mark),e.listeners.forEach(r=>{r&&(e.element.removeEventListener("click",r),e.element.removeEventListener("touchstart",r))}),delete this.highlights[t])}ununderline(t){let e;t in this.underlines&&(e=this.underlines[t],this.pane.removeMark(e.mark),e.listeners.forEach(r=>{r&&(e.element.removeEventListener("click",r),e.element.removeEventListener("touchstart",r))}),delete this.underlines[t])}unmark(t){let e;t in this.marks&&(e=this.marks[t],this.element.removeChild(e.element),e.listeners.forEach(r=>{r&&(e.element.removeEventListener("click",r),e.element.removeEventListener("touchstart",r))}),delete this.marks[t])}destroy(){for(let t in this.highlights)this.unhighlight(t);for(let t in this.underlines)this.ununderline(t);for(let t in this.marks)this.unmark(t);this.blobUrl&&Ds(this.blobUrl),this.displayed&&(this.displayed=!1,this.removeListeners(),this.contents.destroy(),this.stopExpanding=!0,this.element.removeChild(this.iframe),this.pane&&(this.pane.element.remove(),this.pane=void 0),this.iframe=void 0,this.contents=void 0,this._textWidth=null,this._textHeight=null,this._width=null,this._height=null)}}Te(Is.prototype);function Q0(){var v="reverse",t=th();return document.body.appendChild(t),t.scrollLeft>0?v="default":typeof Element<"u"&&Element.prototype.scrollIntoView?(t.children[0].children[1].scrollIntoView(),t.scrollLeft<0&&(v="negative")):(t.scrollLeft=1,t.scrollLeft===0&&(v="negative")),document.body.removeChild(t),v}function th(){var v=document.createElement("div");v.dir="rtl",v.style.position="fixed",v.style.width="1px",v.style.height="1px",v.style.top="0px",v.style.left="0px",v.style.overflow="hidden";var t=document.createElement("div");t.style.width="2px";var e=document.createElement("span");e.style.width="1px",e.style.display="inline-block";var r=document.createElement("span");return r.style.width="1px",r.style.display="inline-block",t.appendChild(e),t.appendChild(r),v.appendChild(t),v}var Ja,w2;function R1(){if(w2)return Ja;w2=1;function v(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}return Ja=v,Ja}var Qa,b2;function eh(){if(b2)return Qa;b2=1;var v=typeof xe=="object"&&xe&&xe.Object===Object&&xe;return Qa=v,Qa}var t1,A2;function Ps(){if(A2)return t1;A2=1;var v=eh(),t=typeof self=="object"&&self&&self.Object===Object&&self,e=v||t||Function("return this")();return t1=e,t1}var e1,C2;function ah(){if(C2)return e1;C2=1;var v=Ps(),t=function(){return v.Date.now()};return e1=t,e1}var a1,_2;function rh(){if(_2)return a1;_2=1;var v=/\s/;function t(e){for(var r=e.length;r--&&v.test(e.charAt(r)););return r}return a1=t,a1}var r1,E2;function ih(){if(E2)return r1;E2=1;var v=rh(),t=/^\s+/;function e(r){return r&&r.slice(0,v(r)+1).replace(t,"")}return r1=e,r1}var i1,S2;function zs(){if(S2)return i1;S2=1;var v=Ps(),t=v.Symbol;return i1=t,i1}var n1,D2;function nh(){if(D2)return n1;D2=1;var v=zs(),t=Object.prototype,e=t.hasOwnProperty,r=t.toString,i=v?v.toStringTag:void 0;function n(s){var h=e.call(s,i),c=s[i];try{s[i]=void 0;var l=!0}catch{}var f=r.call(s);return l&&(h?s[i]=c:delete s[i]),f}return n1=n,n1}var s1,T2;function sh(){if(T2)return s1;T2=1;var v=Object.prototype,t=v.toString;function e(r){return t.call(r)}return s1=e,s1}var h1,k2;function hh(){if(k2)return h1;k2=1;var v=zs(),t=nh(),e=sh(),r="[object Null]",i="[object Undefined]",n=v?v.toStringTag:void 0;function s(h){return h==null?h===void 0?i:r:n&&n in Object(h)?t(h):e(h)}return h1=s,h1}var o1,L2;function oh(){if(L2)return o1;L2=1;function v(t){return t!=null&&typeof t=="object"}return o1=v,o1}var d1,R2;function dh(){if(R2)return d1;R2=1;var v=hh(),t=oh(),e="[object Symbol]";function r(i){return typeof i=="symbol"||t(i)&&v(i)==e}return d1=r,d1}var c1,H2;function ch(){if(H2)return c1;H2=1;var v=ih(),t=R1(),e=dh(),r=NaN,i=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,s=/^0o[0-7]+$/i,h=parseInt;function c(l){if(typeof l=="number")return l;if(e(l))return r;if(t(l)){var f=typeof l.valueOf=="function"?l.valueOf():l;l=t(f)?f+"":f}if(typeof l!="string")return l===0?l:+l;l=v(l);var p=n.test(l);return p||s.test(l)?h(l.slice(2),p?2:8):i.test(l)?r:+l}return c1=c,c1}var l1,N2;function Fs(){if(N2)return l1;N2=1;var v=R1(),t=ah(),e=ch(),r="Expected a function",i=Math.max,n=Math.min;function s(h,c,l){var f,p,b,y,R,A,u=0,g=!1,M=!1,E=!0;if(typeof h!="function")throw new TypeError(r);c=e(c)||0,v(l)&&(g=!!l.leading,M="maxWait"in l,b=M?i(e(l.maxWait)||0,c):b,E="trailing"in l?!!l.trailing:E);function B(G){var at=f,tt=p;return f=p=void 0,u=G,y=h.apply(tt,at),y}function w(G){return u=G,R=setTimeout(H,c),g?B(G):y}function T(G){var at=G-A,tt=G-u,lt=c-at;return M?n(lt,b-tt):lt}function L(G){var at=G-A,tt=G-u;return A===void 0||at>=c||at<0||M&&tt>=b}function H(){var G=t();if(L(G))return k(G);R=setTimeout(H,T(G))}function k(G){return R=void 0,E&&f?B(G):(f=p=void 0,y)}function N(){R!==void 0&&clearTimeout(R),u=0,f=A=p=R=void 0}function j(){return R===void 0?y:k(t())}function q(){var G=t(),at=L(G);if(f=arguments,p=this,A=G,at){if(R===void 0)return w(A);if(M)return clearTimeout(R),R=setTimeout(H,c),B(A)}return R===void 0&&(R=setTimeout(H,c)),y}return q.cancel=N,q.flush=j,q}return l1=s,l1}var u1,B2;function lh(){if(B2)return u1;B2=1;var v=Fs(),t=R1(),e="Expected a function";function r(i,n,s){var h=!0,c=!0;if(typeof i!="function")throw new TypeError(e);return t(s)&&(h="leading"in s?!!s.leading:h,c="trailing"in s?!!s.trailing:c),v(i,n,{leading:h,maxWait:n,trailing:c})}return u1=r,u1}var uh=lh();const ph=Ye(uh);class fh{constructor(t){this.settings=t||{},this.id="epubjs-container-"+ba(),this.container=this.create(this.settings),this.settings.hidden&&(this.wrapper=this.wrap(this.container))}create(t){let e=t.height,r=t.width,i=t.overflow||!1,n=t.axis||"vertical",s=t.direction;oe(this.settings,t),t.height&&Yt(t.height)&&(e=t.height+"px"),t.width&&Yt(t.width)&&(r=t.width+"px");let h=document.createElement("div");return h.id=this.id,h.classList.add("epub-container"),h.style.wordSpacing="0",h.style.lineHeight="0",h.style.verticalAlign="top",h.style.position="relative",n==="horizontal"&&(h.style.display="flex",h.style.flexDirection="row",h.style.flexWrap="nowrap"),r&&(h.style.width=r),e&&(h.style.height=e),i&&(i==="scroll"&&n==="vertical"?(h.style["overflow-y"]=i,h.style["overflow-x"]="hidden"):i==="scroll"&&n==="horizontal"?(h.style["overflow-y"]="hidden",h.style["overflow-x"]=i):h.style.overflow=i),s&&(h.dir=s,h.style.direction=s),s&&this.settings.fullsize&&(document.body.style.direction=s),h}wrap(t){var e=document.createElement("div");return e.style.visibility="hidden",e.style.overflow="hidden",e.style.width="0",e.style.height="0",e.appendChild(t),e}getElement(t){var e;if(As(t)?e=t:typeof t=="string"&&(e=document.getElementById(t)),!e)throw new Error("Not an Element");return e}attachTo(t){var e=this.getElement(t),r;if(e)return this.settings.hidden?r=this.wrapper:r=this.container,e.appendChild(r),this.element=e,e}getContainer(){return this.container}onResize(t){(!Yt(this.settings.width)||!Yt(this.settings.height))&&(this.resizeFunc=ph(t,50),window.addEventListener("resize",this.resizeFunc,!1))}onOrientationChange(t){this.orientationChangeFunc=t,window.addEventListener("orientationchange",this.orientationChangeFunc,!1)}size(t,e){var r;let i=t||this.settings.width,n=e||this.settings.height;t===null?(r=this.element.getBoundingClientRect(),r.width&&(t=Math.floor(r.width),this.container.style.width=t+"px")):Yt(t)?this.container.style.width=t+"px":this.container.style.width=t,e===null?(r=r||this.element.getBoundingClientRect(),r.height&&(e=r.height,this.container.style.height=e+"px")):Yt(e)?this.container.style.height=e+"px":this.container.style.height=e,Yt(t)||(t=this.container.clientWidth),Yt(e)||(e=this.container.clientHeight),this.containerStyles=window.getComputedStyle(this.container),this.containerPadding={left:parseFloat(this.containerStyles["padding-left"])||0,right:parseFloat(this.containerStyles["padding-right"])||0,top:parseFloat(this.containerStyles["padding-top"])||0,bottom:parseFloat(this.containerStyles["padding-bottom"])||0};let s=va(),h=window.getComputedStyle(document.body),c={left:parseFloat(h["padding-left"])||0,right:parseFloat(h["padding-right"])||0,top:parseFloat(h["padding-top"])||0,bottom:parseFloat(h["padding-bottom"])||0};return i||(t=s.width-c.left-c.right),(this.settings.fullsize&&!n||!n)&&(e=s.height-c.top-c.bottom),{width:t-this.containerPadding.left-this.containerPadding.right,height:e-this.containerPadding.top-this.containerPadding.bottom}}bounds(){let t;return this.container.style.overflow!=="visible"&&(t=this.container&&this.container.getBoundingClientRect()),!t||!t.width||!t.height?va():t}getSheet(){var t=document.createElement("style");return t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet}addStyleRules(t,e){var r="#"+this.id+" ",i="";this.sheet||(this.sheet=this.getSheet()),e.forEach(function(n){for(var s in n)n.hasOwnProperty(s)&&(i+=s+":"+n[s]+";")}),this.sheet.insertRule(r+t+" {"+i+"}",0)}axis(t){t==="horizontal"?(this.container.style.display="flex",this.container.style.flexDirection="row",this.container.style.flexWrap="nowrap"):this.container.style.display="block",this.settings.axis=t}direction(t){this.container&&(this.container.dir=t,this.container.style.direction=t),this.settings.fullsize&&(document.body.style.direction=t),this.settings.dir=t}overflow(t){this.container&&(t==="scroll"&&this.settings.axis==="vertical"?(this.container.style["overflow-y"]=t,this.container.style["overflow-x"]="hidden"):t==="scroll"&&this.settings.axis==="horizontal"?(this.container.style["overflow-y"]="hidden",this.container.style["overflow-x"]=t):this.container.style.overflow=t),this.settings.overflow=t}destroy(){this.element&&(this.settings.hidden?this.wrapper:this.container,this.element.contains(this.container)&&this.element.removeChild(this.container),window.removeEventListener("resize",this.resizeFunc),window.removeEventListener("orientationChange",this.orientationChangeFunc))}}class vh{constructor(t){this.container=t,this._views=[],this.length=0,this.hidden=!1}all(){return this._views}first(){return this._views[0]}last(){return this._views[this._views.length-1]}indexOf(t){return this._views.indexOf(t)}slice(){return this._views.slice.apply(this._views,arguments)}get(t){return this._views[t]}append(t){return this._views.push(t),this.container&&this.container.appendChild(t.element),this.length++,t}prepend(t){return this._views.unshift(t),this.container&&this.container.insertBefore(t.element,this.container.firstChild),this.length++,t}insert(t,e){return this._views.splice(e,0,t),this.container&&(e<this.container.children.length?this.container.insertBefore(t.element,this.container.children[e]):this.container.appendChild(t.element)),this.length++,t}remove(t){var e=this._views.indexOf(t);e>-1&&this._views.splice(e,1),this.destroy(t),this.length--}destroy(t){t.displayed&&t.destroy(),this.container&&this.container.removeChild(t.element),t=null}forEach(){return this._views.forEach.apply(this._views,arguments)}clear(){var t,e=this.length;if(this.length){for(var r=0;r<e;r++)t=this._views[r],this.destroy(t);this._views=[],this.length=0}}find(t){for(var e,r=this.length,i=0;i<r;i++)if(e=this._views[i],e.displayed&&e.section.index==t.index)return e}displayed(){for(var t=[],e,r=this.length,i=0;i<r;i++)e=this._views[i],e.displayed&&t.push(e);return t}show(){for(var t,e=this.length,r=0;r<e;r++)t=this._views[r],t.displayed&&t.show();this.hidden=!1}hide(){for(var t,e=this.length,r=0;r<e;r++)t=this._views[r],t.displayed&&t.hide();this.hidden=!0}}class xa{constructor(t){this.name="default",this.optsSettings=t.settings,this.View=t.view,this.request=t.request,this.renditionQueue=t.queue,this.q=new k1(this),this.settings=oe(this.settings||{},{infinite:!0,hidden:!1,width:void 0,height:void 0,axis:void 0,writingMode:void 0,flow:"scrolled",ignoreClass:"",fullsize:void 0,allowScriptedContent:!1,allowPopups:!1}),oe(this.settings,t.settings||{}),this.viewSettings={ignoreClass:this.settings.ignoreClass,axis:this.settings.axis,flow:this.settings.flow,layout:this.layout,method:this.settings.method,width:0,height:0,forceEvenPages:!0,allowScriptedContent:this.settings.allowScriptedContent,allowPopups:this.settings.allowPopups},this.rendered=!1}render(t,e){let r=t.tagName;typeof this.settings.fullsize>"u"&&r&&(r.toLowerCase()=="body"||r.toLowerCase()=="html")&&(this.settings.fullsize=!0),this.settings.fullsize&&(this.settings.overflow="visible",this.overflow=this.settings.overflow),this.settings.size=e,this.settings.rtlScrollType=Q0(),this.stage=new fh({width:e.width,height:e.height,overflow:this.overflow,hidden:this.settings.hidden,axis:this.settings.axis,fullsize:this.settings.fullsize,direction:this.settings.direction}),this.stage.attachTo(t),this.container=this.stage.getContainer(),this.views=new vh(this.container),this._bounds=this.bounds(),this._stageSize=this.stage.size(),this.viewSettings.width=this._stageSize.width,this.viewSettings.height=this._stageSize.height,this.stage.onResize(this.onResized.bind(this)),this.stage.onOrientationChange(this.onOrientationChange.bind(this)),this.addEventListeners(),this.layout&&this.updateLayout(),this.rendered=!0}addEventListeners(){var t;window.addEventListener("unload",(function(e){this.destroy()}).bind(this)),this.settings.fullsize?t=window:t=this.container,this._onScroll=this.onScroll.bind(this),t.addEventListener("scroll",this._onScroll)}removeEventListeners(){var t;this.settings.fullsize?t=window:t=this.container,t.removeEventListener("scroll",this._onScroll),this._onScroll=void 0}destroy(){clearTimeout(this.orientationTimeout),clearTimeout(this.resizeTimeout),clearTimeout(this.afterScrolled),this.clear(),this.removeEventListeners(),this.stage.destroy(),this.rendered=!1}onOrientationChange(t){let{orientation:e}=window;this.optsSettings.resizeOnOrientationChange&&this.resize(),clearTimeout(this.orientationTimeout),this.orientationTimeout=setTimeout((function(){this.orientationTimeout=void 0,this.optsSettings.resizeOnOrientationChange&&this.resize(),this.emit(ct.MANAGERS.ORIENTATION_CHANGE,e)}).bind(this),500)}onResized(t){this.resize()}resize(t,e,r){let i=this.stage.size(t,e);if(this.winBounds=va(),this.orientationTimeout&&this.winBounds.width===this.winBounds.height){this._stageSize=void 0;return}this._stageSize&&this._stageSize.width===i.width&&this._stageSize.height===i.height||(this._stageSize=i,this._bounds=this.bounds(),this.clear(),this.viewSettings.width=this._stageSize.width,this.viewSettings.height=this._stageSize.height,this.updateLayout(),this.emit(ct.MANAGERS.RESIZED,{width:this._stageSize.width,height:this._stageSize.height},r))}createView(t,e){return new this.View(t,oe(this.viewSettings,{forceRight:e}))}handleNextPrePaginated(t,e,r){let i;if(this.layout.name==="pre-paginated"&&this.layout.divisor>1){if(t||e.index===0)return;if(i=e.next(),i&&!i.properties.includes("page-spread-left"))return r.call(this,i)}}display(t,e){var r=new Bt,i=r.promise;(e===t.href||Yt(e))&&(e=void 0);var n=this.views.find(t);if(n&&t&&this.layout.name!=="pre-paginated"){let h=n.offset();if(this.settings.direction==="ltr")this.scrollTo(h.left,h.top,!0);else{let c=n.width();this.scrollTo(h.left+c,h.top,!0)}if(e){let c=n.locationOf(e),l=n.width();this.moveTo(c,l)}return r.resolve(),i}this.clear();let s=!1;return this.layout.name==="pre-paginated"&&this.layout.divisor===2&&t.properties.includes("page-spread-right")&&(s=!0),this.add(t,s).then((function(h){if(e){let c=h.locationOf(e),l=h.width();this.moveTo(c,l)}}).bind(this),h=>{r.reject(h)}).then((function(){return this.handleNextPrePaginated(s,t,this.add)}).bind(this)).then((function(){this.views.show(),r.resolve()}).bind(this)),i}afterDisplayed(t){this.emit(ct.MANAGERS.ADDED,t)}afterResized(t){this.emit(ct.MANAGERS.RESIZE,t.section)}moveTo(t,e){var r=0,i=0;this.isPaginated?(r=Math.floor(t.left/this.layout.delta)*this.layout.delta,r+this.layout.delta>this.container.scrollWidth&&(r=this.container.scrollWidth-this.layout.delta),i=Math.floor(t.top/this.layout.delta)*this.layout.delta,i+this.layout.delta>this.container.scrollHeight&&(i=this.container.scrollHeight-this.layout.delta)):i=t.top,this.settings.direction==="rtl"&&(r=r+this.layout.delta,r=r-e),this.scrollTo(r,i,!0)}add(t,e){var r=this.createView(t,e);return this.views.append(r),r.onDisplayed=this.afterDisplayed.bind(this),r.onResize=this.afterResized.bind(this),r.on(ct.VIEWS.AXIS,i=>{this.updateAxis(i)}),r.on(ct.VIEWS.WRITING_MODE,i=>{this.updateWritingMode(i)}),r.display(this.request)}append(t,e){var r=this.createView(t,e);return this.views.append(r),r.onDisplayed=this.afterDisplayed.bind(this),r.onResize=this.afterResized.bind(this),r.on(ct.VIEWS.AXIS,i=>{this.updateAxis(i)}),r.on(ct.VIEWS.WRITING_MODE,i=>{this.updateWritingMode(i)}),r.display(this.request)}prepend(t,e){var r=this.createView(t,e);return r.on(ct.VIEWS.RESIZED,i=>{this.counter(i)}),this.views.prepend(r),r.onDisplayed=this.afterDisplayed.bind(this),r.onResize=this.afterResized.bind(this),r.on(ct.VIEWS.AXIS,i=>{this.updateAxis(i)}),r.on(ct.VIEWS.WRITING_MODE,i=>{this.updateWritingMode(i)}),r.display(this.request)}counter(t){this.settings.axis==="vertical"?this.scrollBy(0,t.heightDelta,!0):this.scrollBy(t.widthDelta,0,!0)}next(){var t,e;let r=this.settings.direction;if(this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"&&(!r||r==="ltr")?(this.scrollLeft=this.container.scrollLeft,e=this.container.scrollLeft+this.container.offsetWidth+this.layout.delta,e<=this.container.scrollWidth?this.scrollBy(this.layout.delta,0,!0):t=this.views.last().section.next()):this.isPaginated&&this.settings.axis==="horizontal"&&r==="rtl"?(this.scrollLeft=this.container.scrollLeft,this.settings.rtlScrollType==="default"?(e=this.container.scrollLeft,e>0?this.scrollBy(this.layout.delta,0,!0):t=this.views.last().section.next()):(e=this.container.scrollLeft+this.layout.delta*-1,e>this.container.scrollWidth*-1?this.scrollBy(this.layout.delta,0,!0):t=this.views.last().section.next())):this.isPaginated&&this.settings.axis==="vertical"?(this.scrollTop=this.container.scrollTop,this.container.scrollTop+this.container.offsetHeight<this.container.scrollHeight?this.scrollBy(0,this.layout.height,!0):t=this.views.last().section.next()):t=this.views.last().section.next(),t)){this.clear(),this.updateLayout();let i=!1;return this.layout.name==="pre-paginated"&&this.layout.divisor===2&&t.properties.includes("page-spread-right")&&(i=!0),this.append(t,i).then((function(){return this.handleNextPrePaginated(i,t,this.append)}).bind(this),n=>n).then((function(){!this.isPaginated&&this.settings.axis==="horizontal"&&this.settings.direction==="rtl"&&this.settings.rtlScrollType==="default"&&this.scrollTo(this.container.scrollWidth,0,!0),this.views.show()}).bind(this))}}prev(){var t,e;let r=this.settings.direction;if(this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"&&(!r||r==="ltr")?(this.scrollLeft=this.container.scrollLeft,e=this.container.scrollLeft,e>0?this.scrollBy(-this.layout.delta,0,!0):t=this.views.first().section.prev()):this.isPaginated&&this.settings.axis==="horizontal"&&r==="rtl"?(this.scrollLeft=this.container.scrollLeft,this.settings.rtlScrollType==="default"?(e=this.container.scrollLeft+this.container.offsetWidth,e<this.container.scrollWidth?this.scrollBy(-this.layout.delta,0,!0):t=this.views.first().section.prev()):(e=this.container.scrollLeft,e<0?this.scrollBy(-this.layout.delta,0,!0):t=this.views.first().section.prev())):this.isPaginated&&this.settings.axis==="vertical"?(this.scrollTop=this.container.scrollTop,this.container.scrollTop>0?this.scrollBy(0,-this.layout.height,!0):t=this.views.first().section.prev()):t=this.views.first().section.prev(),t)){this.clear(),this.updateLayout();let i=!1;return this.layout.name==="pre-paginated"&&this.layout.divisor===2&&typeof t.prev()!="object"&&(i=!0),this.prepend(t,i).then((function(){var n;if(this.layout.name==="pre-paginated"&&this.layout.divisor>1&&(n=t.prev(),n))return this.prepend(n)}).bind(this),n=>n).then((function(){this.isPaginated&&this.settings.axis==="horizontal"&&(this.settings.direction==="rtl"?this.settings.rtlScrollType==="default"?this.scrollTo(0,0,!0):this.scrollTo(this.container.scrollWidth*-1+this.layout.delta,0,!0):this.scrollTo(this.container.scrollWidth-this.layout.delta,0,!0)),this.views.show()}).bind(this))}}current(){var t=this.visible();return t.length?t[t.length-1]:null}clear(){this.views&&(this.views.hide(),this.scrollTo(0,0,!0),this.views.clear())}currentLocation(){return this.updateLayout(),this.isPaginated&&this.settings.axis==="horizontal"?this.location=this.paginatedLocation():this.location=this.scrolledLocation(),this.location}scrolledLocation(){let t=this.visible(),e=this.container.getBoundingClientRect(),r=e.height<window.innerHeight?e.height:window.innerHeight,i=e.width<window.innerWidth?e.width:window.innerWidth,n=this.settings.axis==="vertical";this.settings.direction;let s=0,h=0;return this.settings.fullsize&&(s=n?window.scrollY:window.scrollX),t.map(l=>{let{index:f,href:p}=l.section,b=l.position(),y=l.width(),R=l.height(),A,u,g,M;n?(A=s+e.top-b.top+h,u=A+r-h,M=this.layout.count(R,r).pages,g=r):(A=s+e.left-b.left+h,u=A+i-h,M=this.layout.count(y,i).pages,g=i);let E=Math.ceil(A/g),B=[],w=Math.ceil(u/g);if(this.settings.direction==="rtl"&&!n){let H=E;E=M-w,w=M-H}B=[];for(var T=E;T<=w;T++){let H=T+1;B.push(H)}let L=this.mapping.page(l.contents,l.section.cfiBase,A,u);return{index:f,href:p,pages:B,totalPages:M,mapping:L}})}paginatedLocation(){let t=this.visible(),e=this.container.getBoundingClientRect(),r=0,i=0;return this.settings.fullsize&&(r=window.scrollX),t.map(s=>{let{index:h,href:c}=s.section,l,f=s.position(),p=s.width(),b,y,R;this.settings.direction==="rtl"?(l=e.right-r,R=Math.min(Math.abs(l-f.left),this.layout.width)-i,y=f.width-(f.right-l)-i,b=y-R):(l=e.left+r,R=Math.min(f.right-l,this.layout.width)-i,b=l-f.left+i,y=b+R),i+=R;let A=this.mapping.page(s.contents,s.section.cfiBase,b,y),u=this.layout.count(p).pages,g=Math.floor(b/this.layout.pageWidth),M=[],E=Math.floor(y/this.layout.pageWidth);if(g<0&&(g=0,E=E+1),this.settings.direction==="rtl"){let w=g;g=u-E,E=u-w}for(var B=g+1;B<=E;B++){let w=B;M.push(w)}return{index:h,href:c,pages:M,totalPages:u,mapping:A}})}isVisible(t,e,r,i){var n=t.position(),s=i||this.bounds();return this.settings.axis==="horizontal"&&n.right>s.left-e&&n.left<s.right+r?!0:this.settings.axis==="vertical"&&n.bottom>s.top-e&&n.top<s.bottom+r}visible(){for(var t=this.bounds(),e=this.views.displayed(),r=e.length,i=[],n,s,h=0;h<r;h++)s=e[h],n=this.isVisible(s,0,0,t),n===!0&&i.push(s);return i}scrollBy(t,e,r){let i=this.settings.direction==="rtl"?-1:1;r&&(this.ignore=!0),this.settings.fullsize?window.scrollBy(t*i,e*i):(t&&(this.container.scrollLeft+=t*i),e&&(this.container.scrollTop+=e)),this.scrolled=!0}scrollTo(t,e,r){r&&(this.ignore=!0),this.settings.fullsize?window.scrollTo(t,e):(this.container.scrollLeft=t,this.container.scrollTop=e),this.scrolled=!0}onScroll(){let t,e;this.settings.fullsize?(t=window.scrollY,e=window.scrollX):(t=this.container.scrollTop,e=this.container.scrollLeft),this.scrollTop=t,this.scrollLeft=e,this.ignore?this.ignore=!1:(this.emit(ct.MANAGERS.SCROLL,{top:t,left:e}),clearTimeout(this.afterScrolled),this.afterScrolled=setTimeout((function(){this.emit(ct.MANAGERS.SCROLLED,{top:this.scrollTop,left:this.scrollLeft})}).bind(this),20))}bounds(){var t;return t=this.stage.bounds(),t}applyLayout(t){this.layout=t,this.updateLayout(),this.views&&this.views.length>0&&this.layout.name==="pre-paginated"&&this.display(this.views.first().section)}updateLayout(){this.stage&&(this._stageSize=this.stage.size(),this.isPaginated?(this.layout.calculate(this._stageSize.width,this._stageSize.height,this.settings.gap),this.settings.offset=this.layout.delta/this.layout.divisor):this.layout.calculate(this._stageSize.width,this._stageSize.height),this.viewSettings.width=this.layout.width,this.viewSettings.height=this.layout.height,this.setLayout(this.layout))}setLayout(t){this.viewSettings.layout=t,this.mapping=new ya(t.props,this.settings.direction,this.settings.axis),this.views&&this.views.forEach(function(e){e&&e.setLayout(t)})}updateWritingMode(t){this.writingMode=t}updateAxis(t,e){!e&&t===this.settings.axis||(this.settings.axis=t,this.stage&&this.stage.axis(t),this.viewSettings.axis=t,this.mapping&&(this.mapping=new ya(this.layout.props,this.settings.direction,this.settings.axis)),this.layout&&(t==="vertical"?this.layout.spread("none"):this.layout.spread(this.layout.settings.spread)))}updateFlow(t,e="auto"){let r=t==="paginated"||t==="auto";this.isPaginated=r,t==="scrolled-doc"||t==="scrolled-continuous"||t==="scrolled"?this.updateAxis("vertical"):this.updateAxis("horizontal"),this.viewSettings.flow=t,this.settings.overflow?this.overflow=this.settings.overflow:this.overflow=r?"hidden":e,this.stage&&this.stage.overflow(this.overflow),this.updateLayout()}getContents(){var t=[];return this.views&&this.views.forEach(function(e){const r=e&&e.contents;r&&t.push(r)}),t}direction(t="ltr"){this.settings.direction=t,this.stage&&this.stage.direction(t),this.viewSettings.direction=t,this.updateLayout()}isRendered(){return this.rendered}}Te(xa.prototype);const gh={easeInCubic:function(v){return Math.pow(v,3)}};class A1{constructor(t,e){this.settings=oe({duration:80,minVelocity:.2,minDistance:10,easing:gh.easeInCubic},e||{}),this.supportsTouch=this.supportsTouch(),this.supportsTouch&&this.setup(t)}setup(t){this.manager=t,this.layout=this.manager.layout,this.fullsize=this.manager.settings.fullsize,this.fullsize?(this.element=this.manager.stage.element,this.scroller=window,this.disableScroll()):(this.element=this.manager.stage.container,this.scroller=this.element,this.element.style.WebkitOverflowScrolling="touch"),this.manager.settings.offset=this.layout.width,this.manager.settings.afterScrolledTimeout=this.settings.duration*2,this.isVertical=this.manager.settings.axis==="vertical",!(!this.manager.isPaginated||this.isVertical)&&(this.touchCanceler=!1,this.resizeCanceler=!1,this.snapping=!1,this.scrollLeft,this.scrollTop,this.startTouchX=void 0,this.startTouchY=void 0,this.startTime=void 0,this.endTouchX=void 0,this.endTouchY=void 0,this.endTime=void 0,this.addListeners())}supportsTouch(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}disableScroll(){this.element.style.overflow="hidden"}enableScroll(){this.element.style.overflow=""}addListeners(){this._onResize=this.onResize.bind(this),window.addEventListener("resize",this._onResize),this._onScroll=this.onScroll.bind(this),this.scroller.addEventListener("scroll",this._onScroll),this._onTouchStart=this.onTouchStart.bind(this),this.scroller.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.on("touchstart",this._onTouchStart),this._onTouchMove=this.onTouchMove.bind(this),this.scroller.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.on("touchmove",this._onTouchMove),this._onTouchEnd=this.onTouchEnd.bind(this),this.scroller.addEventListener("touchend",this._onTouchEnd,{passive:!0}),this.on("touchend",this._onTouchEnd),this._afterDisplayed=this.afterDisplayed.bind(this),this.manager.on(ct.MANAGERS.ADDED,this._afterDisplayed)}removeListeners(){window.removeEventListener("resize",this._onResize),this._onResize=void 0,this.scroller.removeEventListener("scroll",this._onScroll),this._onScroll=void 0,this.scroller.removeEventListener("touchstart",this._onTouchStart,{passive:!0}),this.off("touchstart",this._onTouchStart),this._onTouchStart=void 0,this.scroller.removeEventListener("touchmove",this._onTouchMove,{passive:!0}),this.off("touchmove",this._onTouchMove),this._onTouchMove=void 0,this.scroller.removeEventListener("touchend",this._onTouchEnd,{passive:!0}),this.off("touchend",this._onTouchEnd),this._onTouchEnd=void 0,this.manager.off(ct.MANAGERS.ADDED,this._afterDisplayed),this._afterDisplayed=void 0}afterDisplayed(t){let e=t.contents;["touchstart","touchmove","touchend"].forEach(r=>{e.on(r,i=>this.triggerViewEvent(i,e))})}triggerViewEvent(t,e){this.emit(t.type,t,e)}onScroll(t){this.scrollLeft=this.fullsize?window.scrollX:this.scroller.scrollLeft,this.scrollTop=this.fullsize?window.scrollY:this.scroller.scrollTop}onResize(t){this.resizeCanceler=!0}onTouchStart(t){let{screenX:e,screenY:r}=t.touches[0];this.fullsize&&this.enableScroll(),this.touchCanceler=!0,this.startTouchX||(this.startTouchX=e,this.startTouchY=r,this.startTime=this.now()),this.endTouchX=e,this.endTouchY=r,this.endTime=this.now()}onTouchMove(t){let{screenX:e,screenY:r}=t.touches[0],i=Math.abs(r-this.endTouchY);this.touchCanceler=!0,!this.fullsize&&i<10&&(this.element.scrollLeft-=e-this.endTouchX),this.endTouchX=e,this.endTouchY=r,this.endTime=this.now()}onTouchEnd(t){this.fullsize&&this.disableScroll(),this.touchCanceler=!1;let e=this.wasSwiped();e!==0?this.snap(e):this.snap(),this.startTouchX=void 0,this.startTouchY=void 0,this.startTime=void 0,this.endTouchX=void 0,this.endTouchY=void 0,this.endTime=void 0}wasSwiped(){let t=this.layout.pageWidth*this.layout.divisor,e=this.endTouchX-this.startTouchX,r=Math.abs(e),i=this.endTime-this.startTime,n=e/i,s=this.settings.minVelocity;if(r<=this.settings.minDistance||r>=t)return 0;if(n>s)return-1;if(n<-s)return 1}needsSnap(){let t=this.scrollLeft,e=this.layout.pageWidth*this.layout.divisor;return t%e!==0}snap(t=0){let e=this.scrollLeft,r=this.layout.pageWidth*this.layout.divisor,i=Math.round(e/r)*r;return t&&(i+=t*r),this.smoothScrollTo(i)}smoothScrollTo(t){const e=new Bt,r=this.scrollLeft,i=this.now(),n=this.settings.duration,s=this.settings.easing;this.snapping=!0;function h(){const c=this.now(),l=Math.min(1,(c-i)/n);if(s(l),this.touchCanceler||this.resizeCanceler){this.resizeCanceler=!1,this.snapping=!1,e.resolve();return}l<1?(window.requestAnimationFrame(h.bind(this)),this.scrollTo(r+(t-r)*l,0)):(this.scrollTo(t,0),this.snapping=!1,e.resolve())}return h.call(this),e.promise}scrollTo(t=0,e=0){this.fullsize?window.scroll(t,e):(this.scroller.scrollLeft=t,this.scroller.scrollTop=e)}now(){return"now"in window.performance?performance.now():new Date().getTime()}destroy(){this.scroller&&(this.fullsize&&this.enableScroll(),this.removeListeners(),this.scroller=void 0)}}Te(A1.prototype);var mh=Fs();const Mh=Ye(mh);class yh extends xa{constructor(t){super(t),this.name="continuous",this.settings=oe(this.settings||{},{infinite:!0,overflow:void 0,axis:void 0,writingMode:void 0,flow:"scrolled",offset:500,offsetDelta:250,width:void 0,height:void 0,snap:!1,afterScrolledTimeout:10,allowScriptedContent:!1,allowPopups:!1}),oe(this.settings,t.settings||{}),t.settings.gap!="undefined"&&t.settings.gap===0&&(this.settings.gap=t.settings.gap),this.viewSettings={ignoreClass:this.settings.ignoreClass,axis:this.settings.axis,flow:this.settings.flow,layout:this.layout,width:0,height:0,forceEvenPages:!1,allowScriptedContent:this.settings.allowScriptedContent,allowPopups:this.settings.allowPopups},this.scrollTop=0,this.scrollLeft=0}display(t,e){return xa.prototype.display.call(this,t,e).then((function(){return this.fill()}).bind(this))}fill(t){var e=t||new Bt;return this.q.enqueue(()=>this.check()).then(r=>{r?this.fill(e):e.resolve()}),e.promise}moveTo(t){var e=0,r=0;this.isPaginated?(e=Math.floor(t.left/this.layout.delta)*this.layout.delta,e+this.settings.offsetDelta):(r=t.top,t.top+this.settings.offsetDelta),(e>0||r>0)&&this.scrollBy(e,r,!0)}afterResized(t){this.emit(ct.MANAGERS.RESIZE,t.section)}removeShownListeners(t){t.onDisplayed=function(){}}add(t){var e=this.createView(t);return this.views.append(e),e.on(ct.VIEWS.RESIZED,r=>{e.expanded=!0}),e.on(ct.VIEWS.AXIS,r=>{this.updateAxis(r)}),e.on(ct.VIEWS.WRITING_MODE,r=>{this.updateWritingMode(r)}),e.onDisplayed=this.afterDisplayed.bind(this),e.onResize=this.afterResized.bind(this),e.display(this.request)}append(t){var e=this.createView(t);return e.on(ct.VIEWS.RESIZED,r=>{e.expanded=!0}),e.on(ct.VIEWS.AXIS,r=>{this.updateAxis(r)}),e.on(ct.VIEWS.WRITING_MODE,r=>{this.updateWritingMode(r)}),this.views.append(e),e.onDisplayed=this.afterDisplayed.bind(this),e}prepend(t){var e=this.createView(t);return e.on(ct.VIEWS.RESIZED,r=>{this.counter(r),e.expanded=!0}),e.on(ct.VIEWS.AXIS,r=>{this.updateAxis(r)}),e.on(ct.VIEWS.WRITING_MODE,r=>{this.updateWritingMode(r)}),this.views.prepend(e),e.onDisplayed=this.afterDisplayed.bind(this),e}counter(t){this.settings.axis==="vertical"?this.scrollBy(0,t.heightDelta,!0):this.scrollBy(t.widthDelta,0,!0)}update(t){for(var e=this.bounds(),r=this.views.all(),i=r.length,n=typeof t<"u"?t:this.settings.offset||0,s,h,c=new Bt,l=[],f=0;f<i;f++)if(h=r[f],s=this.isVisible(h,n,n,e),s===!0)if(h.displayed)h.show();else{let p=h.display(this.request).then(function(b){b.show()},b=>{h.hide()});l.push(p)}else this.q.enqueue(h.destroy.bind(h)),clearTimeout(this.trimTimeout),this.trimTimeout=setTimeout((function(){this.q.enqueue(this.trim.bind(this))}).bind(this),250);return l.length?Promise.all(l).catch(p=>{c.reject(p)}):(c.resolve(),c.promise)}check(t,e){var r=new Bt,i=[],n=this.settings.axis==="horizontal",s=this.settings.offset||0;t&&n&&(s=t),e&&!n&&(s=e);var h=this._bounds;let c=n?this.scrollLeft:this.scrollTop,l=n?Math.floor(h.width):h.height,f=n?this.container.scrollWidth:this.container.scrollHeight,p=this.writingMode&&this.writingMode.indexOf("vertical")===0?"vertical":"horizontal",b=this.settings.rtlScrollType,y=this.settings.direction==="rtl";this.settings.fullsize?(n&&y&&b==="negative"||!n&&y&&b==="default")&&(c=c*-1):(y&&b==="default"&&p==="horizontal"&&(c=f-l-c),y&&b==="negative"&&p==="horizontal"&&(c=c*-1));let R=()=>{let E=this.views.first(),B=E&&E.section.prev();B&&i.push(this.prepend(B))},A=()=>{let E=this.views.last(),B=E&&E.section.next();B&&i.push(this.append(B))},u=c+l+s,g=c-s;u>=f&&A(),g<0&&R();let M=i.map(E=>E.display(this.request));return i.length?Promise.all(M).then(()=>this.check()).then(()=>this.update(s),E=>E):(this.q.enqueue((function(){this.update()}).bind(this)),r.resolve(!1),r.promise)}trim(){for(var t=new Bt,e=this.views.displayed(),r=e[0],i=e[e.length-1],n=this.views.indexOf(r),s=this.views.indexOf(i),h=this.views.slice(0,n),c=this.views.slice(s+1),l=0;l<h.length-1;l++)this.erase(h[l],h);for(var f=1;f<c.length;f++)this.erase(c[f]);return t.resolve(),t.promise}erase(t,e){var r,i;this.settings.fullsize?(r=window.scrollY,i=window.scrollX):(r=this.container.scrollTop,i=this.container.scrollLeft);var n=t.bounds();this.views.remove(t),e&&(this.settings.axis==="vertical"?this.scrollTo(0,r-n.height,!0):this.settings.direction==="rtl"?this.settings.fullsize?this.scrollTo(i+Math.floor(n.width),0,!0):this.scrollTo(i,0,!0):this.scrollTo(i-Math.floor(n.width),0,!0))}addEventListeners(t){window.addEventListener("unload",(function(e){this.ignore=!0,this.destroy()}).bind(this)),this.addScrollListeners(),this.isPaginated&&this.settings.snap&&(this.snapper=new A1(this,this.settings.snap&&typeof this.settings.snap=="object"&&this.settings.snap))}addScrollListeners(){var t;this.tick=S1;let e=this.settings.direction==="rtl"&&this.settings.rtlScrollType==="default"?-1:1;this.scrollDeltaVert=0,this.scrollDeltaHorz=0,this.settings.fullsize?(t=window,this.scrollTop=window.scrollY*e,this.scrollLeft=window.scrollX*e):(t=this.container,this.scrollTop=this.container.scrollTop,this.scrollLeft=this.container.scrollLeft),this._onScroll=this.onScroll.bind(this),t.addEventListener("scroll",this._onScroll),this._scrolled=Mh(this.scrolled.bind(this),30),this.didScroll=!1}removeEventListeners(){var t;this.settings.fullsize?t=window:t=this.container,t.removeEventListener("scroll",this._onScroll),this._onScroll=void 0}onScroll(){let t,e,r=this.settings.direction==="rtl"&&this.settings.rtlScrollType==="default"?-1:1;this.settings.fullsize?(t=window.scrollY*r,e=window.scrollX*r):(t=this.container.scrollTop,e=this.container.scrollLeft),this.scrollTop=t,this.scrollLeft=e,this.ignore?this.ignore=!1:this._scrolled(),this.scrollDeltaVert+=Math.abs(t-this.prevScrollTop),this.scrollDeltaHorz+=Math.abs(e-this.prevScrollLeft),this.prevScrollTop=t,this.prevScrollLeft=e,clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((function(){this.scrollDeltaVert=0,this.scrollDeltaHorz=0}).bind(this),150),clearTimeout(this.afterScrolled),this.didScroll=!1}scrolled(){this.q.enqueue((function(){return this.check()}).bind(this)),this.emit(ct.MANAGERS.SCROLL,{top:this.scrollTop,left:this.scrollLeft}),clearTimeout(this.afterScrolled),this.afterScrolled=setTimeout((function(){this.snapper&&this.snapper.supportsTouch&&this.snapper.needsSnap()||this.emit(ct.MANAGERS.SCROLLED,{top:this.scrollTop,left:this.scrollLeft})}).bind(this),this.settings.afterScrolledTimeout)}next(){let t=this.layout.props.name==="pre-paginated"&&this.layout.props.spread?this.layout.props.delta*2:this.layout.props.delta;this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"?this.scrollBy(t,0,!0):this.scrollBy(0,this.layout.height,!0),this.q.enqueue((function(){return this.check()}).bind(this)))}prev(){let t=this.layout.props.name==="pre-paginated"&&this.layout.props.spread?this.layout.props.delta*2:this.layout.props.delta;this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"?this.scrollBy(-t,0,!0):this.scrollBy(0,-this.layout.height,!0),this.q.enqueue((function(){return this.check()}).bind(this)))}updateFlow(t){this.rendered&&this.snapper&&(this.snapper.destroy(),this.snapper=void 0),super.updateFlow(t,"scroll"),this.rendered&&this.isPaginated&&this.settings.snap&&(this.snapper=new A1(this,this.settings.snap&&typeof this.settings.snap=="object"&&this.settings.snap))}destroy(){super.destroy(),this.snapper&&this.snapper.destroy()}}class H1{constructor(t,e){this.settings=oe(this.settings||{},{width:null,height:null,ignoreClass:"",manager:"default",view:"iframe",flow:null,layout:null,spread:null,minSpreadWidth:800,stylesheet:null,resizeOnOrientationChange:!0,script:null,snap:!1,defaultDirection:"ltr",allowScriptedContent:!1,allowPopups:!1}),oe(this.settings,e),typeof this.settings.manager=="object"&&(this.manager=this.settings.manager),this.book=t,this.hooks={},this.hooks.display=new Se(this),this.hooks.serialize=new Se(this),this.hooks.content=new Se(this),this.hooks.unloaded=new Se(this),this.hooks.layout=new Se(this),this.hooks.render=new Se(this),this.hooks.show=new Se(this),this.hooks.content.register(this.handleLinks.bind(this)),this.hooks.content.register(this.passEvents.bind(this)),this.hooks.content.register(this.adjustImages.bind(this)),this.book.spine.hooks.content.register(this.injectIdentifier.bind(this)),this.settings.stylesheet&&this.book.spine.hooks.content.register(this.injectStylesheet.bind(this)),this.settings.script&&this.book.spine.hooks.content.register(this.injectScript.bind(this)),this.themes=new j0(this),this.annotations=new $0(this),this.epubcfi=new Ot,this.q=new k1(this),this.location=void 0,this.q.enqueue(this.book.opened),this.starting=new Bt,this.started=this.starting.promise,this.q.enqueue(this.start)}setManager(t){this.manager=t}requireManager(t){var e;return typeof t=="string"&&t==="default"?e=xa:typeof t=="string"&&t==="continuous"?e=yh:e=t,e}requireView(t){var e;return typeof t=="string"&&t==="iframe"?e=Is:e=t,e}start(){switch(!this.settings.layout&&(this.book.package.metadata.layout==="pre-paginated"||this.book.displayOptions.fixedLayout==="true")&&(this.settings.layout="pre-paginated"),this.book.package.metadata.spread){case"none":this.settings.spread="none";break;case"both":this.settings.spread=!0;break}this.manager||(this.ViewManager=this.requireManager(this.settings.manager),this.View=this.requireView(this.settings.view),this.manager=new this.ViewManager({view:this.View,queue:this.q,request:this.book.load.bind(this.book),settings:this.settings})),this.direction(this.book.package.metadata.direction||this.settings.defaultDirection),this.settings.globalLayoutProperties=this.determineLayoutProperties(this.book.package.metadata),this.flow(this.settings.globalLayoutProperties.flow),this.layout(this.settings.globalLayoutProperties),this.manager.on(ct.MANAGERS.ADDED,this.afterDisplayed.bind(this)),this.manager.on(ct.MANAGERS.REMOVED,this.afterRemoved.bind(this)),this.manager.on(ct.MANAGERS.RESIZED,this.onResized.bind(this)),this.manager.on(ct.MANAGERS.ORIENTATION_CHANGE,this.onOrientationChange.bind(this)),this.manager.on(ct.MANAGERS.SCROLLED,this.reportLocation.bind(this)),this.emit(ct.RENDITION.STARTED),this.starting.resolve()}attachTo(t){return this.q.enqueue((function(){this.manager.render(t,{width:this.settings.width,height:this.settings.height}),this.emit(ct.RENDITION.ATTACHED)}).bind(this))}display(t){return this.displaying&&this.displaying.resolve(),this.q.enqueue(this._display,t)}_display(t){if(this.book){this.epubcfi.isCfiString(t);var e=new Bt,r=e.promise,i;return this.displaying=e,this.book.locations.length()&&Cs(t)&&(t=this.book.locations.cfiFromPercentage(parseFloat(t))),i=this.book.spine.get(t),i?(this.manager.display(i,t).then(()=>{e.resolve(i),this.displaying=void 0,this.emit(ct.RENDITION.DISPLAYED,i),this.reportLocation()},n=>{this.emit(ct.RENDITION.DISPLAY_ERROR,n)}),r):(e.reject(new Error("No Section Found")),r)}}afterDisplayed(t){t.on(ct.VIEWS.MARK_CLICKED,(e,r)=>this.triggerMarkEvent(e,r,t.contents)),this.hooks.render.trigger(t,this).then(()=>{t.contents?this.hooks.content.trigger(t.contents,this).then(()=>{this.emit(ct.RENDITION.RENDERED,t.section,t)}):this.emit(ct.RENDITION.RENDERED,t.section,t)})}afterRemoved(t){this.hooks.unloaded.trigger(t,this).then(()=>{this.emit(ct.RENDITION.REMOVED,t.section,t)})}onResized(t,e){this.emit(ct.RENDITION.RESIZED,{width:t.width,height:t.height},e),this.location&&this.location.start&&this.display(e||this.location.start.cfi)}onOrientationChange(t){this.emit(ct.RENDITION.ORIENTATION_CHANGE,t)}moveTo(t){this.manager.moveTo(t)}resize(t,e,r){t&&(this.settings.width=t),e&&(this.settings.height=e),this.manager.resize(t,e,r)}clear(){this.manager.clear()}next(){return this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this))}prev(){return this.q.enqueue(this.manager.prev.bind(this.manager)).then(this.reportLocation.bind(this))}determineLayoutProperties(t){var e,r=this.settings.layout||t.layout||"reflowable",i=this.settings.spread||t.spread||"auto",n=this.settings.orientation||t.orientation||"auto",s=this.settings.flow||t.flow||"auto",h=t.viewport||"",c=this.settings.minSpreadWidth||t.minSpreadWidth||800,l=this.settings.direction||t.direction||"ltr";return(this.settings.width===0||this.settings.width>0)&&(this.settings.height===0||this.settings.height>0),e={layout:r,spread:i,orientation:n,flow:s,viewport:h,minSpreadWidth:c,direction:l},e}flow(t){var e=t;(t==="scrolled"||t==="scrolled-doc"||t==="scrolled-continuous")&&(e="scrolled"),(t==="auto"||t==="paginated")&&(e="paginated"),this.settings.flow=t,this._layout&&this._layout.flow(e),this.manager&&this._layout&&this.manager.applyLayout(this._layout),this.manager&&this.manager.updateFlow(e),this.manager&&this.manager.isRendered()&&this.location&&(this.manager.clear(),this.display(this.location.start.cfi))}layout(t){return t&&(this._layout=new Bs(t),this._layout.spread(t.spread,this.settings.minSpreadWidth),this._layout.on(ct.LAYOUT.UPDATED,(e,r)=>{this.emit(ct.RENDITION.LAYOUT,e,r)})),this.manager&&this._layout&&this.manager.applyLayout(this._layout),this._layout}spread(t,e){this.settings.spread=t,e&&(this.settings.minSpreadWidth=e),this._layout&&this._layout.spread(t,e),this.manager&&this.manager.isRendered()&&this.manager.updateLayout()}direction(t){this.settings.direction=t||"ltr",this.manager&&this.manager.direction(this.settings.direction),this.manager&&this.manager.isRendered()&&this.location&&(this.manager.clear(),this.display(this.location.start.cfi))}reportLocation(){return this.q.enqueue((function(){requestAnimationFrame((function(){var r=this.manager.currentLocation();if(r&&r.then&&typeof r.then=="function")r.then((function(i){let n=this.located(i);!n||!n.start||!n.end||(this.location=n,this.emit(ct.RENDITION.LOCATION_CHANGED,{index:this.location.start.index,href:this.location.start.href,start:this.location.start.cfi,end:this.location.end.cfi,percentage:this.location.start.percentage}),this.emit(ct.RENDITION.RELOCATED,this.location))}).bind(this));else if(r){let i=this.located(r);if(!i||!i.start||!i.end)return;this.location=i,this.emit(ct.RENDITION.LOCATION_CHANGED,{index:this.location.start.index,href:this.location.start.href,start:this.location.start.cfi,end:this.location.end.cfi,percentage:this.location.start.percentage}),this.emit(ct.RENDITION.RELOCATED,this.location)}}).bind(this))}).bind(this))}currentLocation(){var t=this.manager.currentLocation();if(t&&t.then&&typeof t.then=="function")t.then((function(e){return this.located(e)}).bind(this));else if(t)return this.located(t)}located(t){if(!t.length)return{};let e=t[0],r=t[t.length-1],i={start:{index:e.index,href:e.href,cfi:e.mapping.start,displayed:{page:e.pages[0]||1,total:e.totalPages}},end:{index:r.index,href:r.href,cfi:r.mapping.end,displayed:{page:r.pages[r.pages.length-1]||1,total:r.totalPages}}},n=this.book.locations.locationFromCfi(e.mapping.start),s=this.book.locations.locationFromCfi(r.mapping.end);n!=null&&(i.start.location=n,i.start.percentage=this.book.locations.percentageFromLocation(n)),s!=null&&(i.end.location=s,i.end.percentage=this.book.locations.percentageFromLocation(s));let h=this.book.pageList.pageFromCfi(e.mapping.start),c=this.book.pageList.pageFromCfi(r.mapping.end);return h!=-1&&(i.start.page=h),c!=-1&&(i.end.page=c),r.index===this.book.spine.last().index&&i.end.displayed.page>=i.end.displayed.total&&(i.atEnd=!0),e.index===this.book.spine.first().index&&i.start.displayed.page===1&&(i.atStart=!0),i}destroy(){this.manager&&this.manager.destroy(),this.book=void 0}passEvents(t){ua.forEach(e=>{t.on(e,r=>this.triggerViewEvent(r,t))}),t.on(ct.CONTENTS.SELECTED,e=>this.triggerSelectedEvent(e,t))}triggerViewEvent(t,e){this.emit(t.type,t,e)}triggerSelectedEvent(t,e){this.emit(ct.RENDITION.SELECTED,t,e)}triggerMarkEvent(t,e,r){this.emit(ct.RENDITION.MARK_CLICKED,t,e,r)}getRange(t,e){var r=new Ot(t),i=this.manager.visible().filter(function(n){if(r.spinePos===n.index)return!0});if(i.length)return i[0].contents.range(r,e)}adjustImages(t){if(this._layout.name==="pre-paginated")return new Promise(function(n){n()});let e=t.window.getComputedStyle(t.content,null),r=(t.content.offsetHeight-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)))*.95,i=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.addStylesheetRules({img:{"max-width":(this._layout.columnWidth?this._layout.columnWidth-i+"px":"100%")+"!important","max-height":r+"px!important","object-fit":"contain","page-break-inside":"avoid","break-inside":"avoid","box-sizing":"border-box"},svg:{"max-width":(this._layout.columnWidth?this._layout.columnWidth-i+"px":"100%")+"!important","max-height":r+"px!important","page-break-inside":"avoid","break-inside":"avoid"}}),new Promise(function(n,s){setTimeout(function(){n()},1)})}getContents(){return this.manager?this.manager.getContents():[]}views(){return(this.manager?this.manager.views:void 0)||[]}handleLinks(t){t&&t.on(ct.CONTENTS.LINK_CLICKED,e=>{let r=this.book.path.relative(e);this.display(r)})}injectStylesheet(t,e){let r=t.createElement("link");r.setAttribute("type","text/css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",this.settings.stylesheet),t.getElementsByTagName("head")[0].appendChild(r)}injectScript(t,e){let r=t.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",this.settings.script),r.textContent=" ",t.getElementsByTagName("head")[0].appendChild(r)}injectIdentifier(t,e){let r=this.book.packaging.metadata.identifier,i=t.createElement("meta");i.setAttribute("name","dc.relation.ispartof"),r&&i.setAttribute("content",r),t.getElementsByTagName("head")[0].appendChild(i)}}Te(H1.prototype);function Oe(v){throw new Error('Could not dynamically require "'+v+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var p1={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var O2;function xh(){return O2||(O2=1,(function(v,t){(function(e){v.exports=e()})(function(){return(function e(r,i,n){function s(l,f){if(!i[l]){if(!r[l]){var p=typeof Oe=="function"&&Oe;if(!f&&p)return p(l,!0);if(h)return h(l,!0);var b=new Error("Cannot find module '"+l+"'");throw b.code="MODULE_NOT_FOUND",b}var y=i[l]={exports:{}};r[l][0].call(y.exports,function(R){var A=r[l][1][R];return s(A||R)},y,y.exports,e,r,i,n)}return i[l].exports}for(var h=typeof Oe=="function"&&Oe,c=0;c<n.length;c++)s(n[c]);return s})({1:[function(e,r,i){var n=e("./utils"),s=e("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var l=[],f,p,b,y,R,A,u,g=0,M=c.length,E=M,B=n.getTypeOf(c)!=="string";g<c.length;)E=M-g,B?(f=c[g++],p=g<M?c[g++]:0,b=g<M?c[g++]:0):(f=c.charCodeAt(g++),p=g<M?c.charCodeAt(g++):0,b=g<M?c.charCodeAt(g++):0),y=f>>2,R=(f&3)<<4|p>>4,A=E>1?(p&15)<<2|b>>6:64,u=E>2?b&63:64,l.push(h.charAt(y)+h.charAt(R)+h.charAt(A)+h.charAt(u));return l.join("")},i.decode=function(c){var l,f,p,b,y,R,A,u=0,g=0,M="data:";if(c.substr(0,M.length)===M)throw new Error("Invalid base64 input, it looks like a data url.");c=c.replace(/[^A-Za-z0-9+/=]/g,"");var E=c.length*3/4;if(c.charAt(c.length-1)===h.charAt(64)&&E--,c.charAt(c.length-2)===h.charAt(64)&&E--,E%1!==0)throw new Error("Invalid base64 input, bad content length.");var B;for(s.uint8array?B=new Uint8Array(E|0):B=new Array(E|0);u<c.length;)b=h.indexOf(c.charAt(u++)),y=h.indexOf(c.charAt(u++)),R=h.indexOf(c.charAt(u++)),A=h.indexOf(c.charAt(u++)),l=b<<2|y>>4,f=(y&15)<<4|R>>2,p=(R&3)<<6|A,B[g++]=l,R!==64&&(B[g++]=f),A!==64&&(B[g++]=p);return B}},{"./support":30,"./utils":32}],2:[function(e,r,i){var n=e("./external"),s=e("./stream/DataWorker"),h=e("./stream/Crc32Probe"),c=e("./stream/DataLengthProbe");function l(f,p,b,y,R){this.compressedSize=f,this.uncompressedSize=p,this.crc32=b,this.compression=y,this.compressedContent=R}l.prototype={getContentWorker:function(){var f=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),p=this;return f.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(f,p,b){return f.pipe(new h).pipe(new c("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",p)},r.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,r,i){var n=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,r,i){var n=e("./utils");function s(){for(var f,p=[],b=0;b<256;b++){f=b;for(var y=0;y<8;y++)f=f&1?3988292384^f>>>1:f>>>1;p[b]=f}return p}var h=s();function c(f,p,b,y){var R=h,A=y+b;f=f^-1;for(var u=y;u<A;u++)f=f>>>8^R[(f^p[u])&255];return f^-1}function l(f,p,b,y){var R=h,A=y+b;f=f^-1;for(var u=y;u<A;u++)f=f>>>8^R[(f^p.charCodeAt(u))&255];return f^-1}r.exports=function(p,b){if(typeof p>"u"||!p.length)return 0;var y=n.getTypeOf(p)!=="string";return y?c(b|0,p,p.length,0):l(b|0,p,p.length,0)}},{"./utils":32}],5:[function(e,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,r,i){var n=null;typeof Promise<"u"?n=Promise:n=e("lie"),r.exports={Promise:n}},{lie:37}],7:[function(e,r,i){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=e("pako"),h=e("./utils"),c=e("./stream/GenericWorker"),l=n?"uint8array":"array";i.magic="\b\0";function f(p,b){c.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}h.inherits(f,c),f.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(l,p.data),!1)},f.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},i.compressWorker=function(p){return new f("Deflate",p)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,r,i){var n=e("../utils"),s=e("../stream/GenericWorker"),h=e("../utf8"),c=e("../crc32"),l=e("../signature"),f=function(g,M){var E="",B;for(B=0;B<M;B++)E+=String.fromCharCode(g&255),g=g>>>8;return E},p=function(g,M){var E=g;return g||(E=M?16893:33204),(E&65535)<<16},b=function(g){return(g||0)&63},y=function(g,M,E,B,w,T){var L=g.file,H=g.compression,k=T!==h.utf8encode,N=n.transformTo("string",T(L.name)),j=n.transformTo("string",h.utf8encode(L.name)),q=L.comment,G=n.transformTo("string",T(q)),at=n.transformTo("string",h.utf8encode(q)),tt=j.length!==L.name.length,lt=at.length!==q.length,et,K,ot="",yt="",nt="",ft=L.dir,Et=L.date,mt={crc32:0,compressedSize:0,uncompressedSize:0};(!M||E)&&(mt.crc32=g.crc32,mt.compressedSize=g.compressedSize,mt.uncompressedSize=g.uncompressedSize);var Tt=0;M&&(Tt|=8),!k&&(tt||lt)&&(Tt|=2048);var jt=0,Pt=0;ft&&(jt|=16),w==="UNIX"?(Pt=798,jt|=p(L.unixPermissions,ft)):(Pt=20,jt|=b(L.dosPermissions)),et=Et.getUTCHours(),et=et<<6,et=et|Et.getUTCMinutes(),et=et<<5,et=et|Et.getUTCSeconds()/2,K=Et.getUTCFullYear()-1980,K=K<<4,K=K|Et.getUTCMonth()+1,K=K<<5,K=K|Et.getUTCDate(),tt&&(yt=f(1,1)+f(c(N),4)+j,ot+="up"+f(yt.length,2)+yt),lt&&(nt=f(1,1)+f(c(G),4)+at,ot+="uc"+f(nt.length,2)+nt);var gt="";gt+=`
\0`,gt+=f(Tt,2),gt+=H.magic,gt+=f(et,2),gt+=f(K,2),gt+=f(mt.crc32,4),gt+=f(mt.compressedSize,4),gt+=f(mt.uncompressedSize,4),gt+=f(N.length,2),gt+=f(ot.length,2);var It=l.LOCAL_FILE_HEADER+gt+N+ot,Ut=l.CENTRAL_FILE_HEADER+f(Pt,2)+gt+f(G.length,2)+"\0\0\0\0"+f(jt,4)+f(B,4)+N+ot+G;return{fileRecord:It,dirRecord:Ut}},R=function(g,M,E,B,w){var T="",L=n.transformTo("string",w(B));return T=l.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(g,2)+f(g,2)+f(M,4)+f(E,4)+f(L.length,2)+L,T},A=function(g){var M="";return M=l.DATA_DESCRIPTOR+f(g.crc32,4)+f(g.compressedSize,4)+f(g.uncompressedSize,4),M};function u(g,M,E,B){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=M,this.zipPlatform=E,this.encodeFileName=B,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}n.inherits(u,s),u.prototype.push=function(g){var M=g.meta.percent||0,E=this.entriesCount,B=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,s.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:E?(M+100*(E-B-1))/E:100}}))},u.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var M=this.streamFiles&&!g.file.dir;if(M){var E=y(g,M,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(g){this.accumulate=!1;var M=this.streamFiles&&!g.file.dir,E=y(g,M,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),M)this.push({data:A(g),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var g=this.bytesWritten,M=0;M<this.dirRecords.length;M++)this.push({data:this.dirRecords[M],meta:{percent:100}});var E=this.bytesWritten-g,B=R(this.dirRecords.length,E,g,this.zipComment,this.encodeFileName);this.push({data:B,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(g){this._sources.push(g);var M=this;return g.on("data",function(E){M.processChunk(E)}),g.on("end",function(){M.closedSource(M.previous.streamInfo),M._sources.length?M.prepareNextSource():M.end()}),g.on("error",function(E){M.error(E)}),this},u.prototype.resume=function(){if(!s.prototype.resume.call(this))return!1;if(!this.previous&&this._sources.length)return this.prepareNextSource(),!0;if(!this.previous&&!this._sources.length&&!this.generatedError)return this.end(),!0},u.prototype.error=function(g){var M=this._sources;if(!s.prototype.error.call(this,g))return!1;for(var E=0;E<M.length;E++)try{M[E].error(g)}catch{}return!0},u.prototype.lock=function(){s.prototype.lock.call(this);for(var g=this._sources,M=0;M<g.length;M++)g[M].lock()},r.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,r,i){var n=e("../compressions"),s=e("./ZipFileWorker"),h=function(c,l){var f=c||l,p=n[f];if(!p)throw new Error(f+" is not a valid compression method !");return p};i.generateWorker=function(c,l,f){var p=new s(l.streamFiles,f,l.platform,l.encodeFileName),b=0;try{c.forEach(function(y,R){b++;var A=h(R.options.compression,l.compression),u=R.options.compressionOptions||l.compressionOptions||{},g=R.dir,M=R.date;R._compressWorker(A,u).withStreamInfo("file",{name:y,dir:g,date:M,comment:R.comment||"",unixPermissions:R.unixPermissions,dosPermissions:R.dosPermissions}).pipe(p)}),p.entriesCount=b}catch(y){p.error(y)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,r,i){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var h in this)typeof this[h]!="function"&&(s[h]=this[h]);return s}}n.prototype=e("./object"),n.prototype.loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.2",n.loadAsync=function(s,h){return new n().loadAsync(s,h)},n.external=e("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,r,i){var n=e("./utils"),s=e("./external"),h=e("./utf8"),c=e("./zipEntries"),l=e("./stream/Crc32Probe"),f=e("./nodejsUtils");function p(b){return new s.Promise(function(y,R){var A=b.decompressed.getContentWorker().pipe(new l);A.on("error",function(u){R(u)}).on("end",function(){A.streamInfo.crc32!==b.decompressed.crc32?R(new Error("Corrupted zip : CRC32 mismatch")):y()}).resume()})}r.exports=function(b,y){var R=this;return y=n.extend(y||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),f.isNode&&f.isStream(b)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",b,!0,y.optimizedBinaryString,y.base64).then(function(A){var u=new c(y);return u.load(A),u}).then(function(u){var g=[s.Promise.resolve(u)],M=u.files;if(y.checkCRC32)for(var E=0;E<M.length;E++)g.push(p(M[E]));return s.Promise.all(g)}).then(function(u){for(var g=u.shift(),M=g.files,E=0;E<M.length;E++){var B=M[E],w=B.fileNameStr,T=n.resolve(B.fileNameStr);R.file(T,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:y.createFolders}),B.dir||(R.file(T).unsafeOriginalName=w)}return g.zipComment.length&&(R.comment=g.zipComment),R})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,r,i){var n=e("../utils"),s=e("../stream/GenericWorker");function h(c,l){s.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}n.inherits(h,s),h.prototype._bindStream=function(c){var l=this;this._stream=c,c.pause(),c.on("data",function(f){l.push({data:f,meta:{percent:0}})}).on("error",function(f){l.isPaused?this.generatedError=f:l.error(f)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},h.prototype.pause=function(){return s.prototype.pause.call(this)?(this._stream.pause(),!0):!1},h.prototype.resume=function(){return s.prototype.resume.call(this)?(this._upstreamEnded?this.end():this._stream.resume(),!0):!1},r.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,r,i){var n=e("readable-stream").Readable,s=e("../utils");s.inherits(h,n);function h(c,l,f){n.call(this,l),this._helper=c;var p=this;c.on("data",function(b,y){p.push(b)||p._helper.pause(),f&&f(y)}).on("error",function(b){p.emit("error",b)}).on("end",function(){p.push(null)})}h.prototype._read=function(){this._helper.resume()},r.exports=h},{"../utils":32,"readable-stream":16}],14:[function(e,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(e,r,i){var n=e("./utf8"),s=e("./utils"),h=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),l=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),b=e("./generate"),y=e("./nodejsUtils"),R=e("./nodejs/NodejsStreamInputAdapter"),A=function(w,T,L){var H=s.getTypeOf(T),k,N=s.extend(L||{},l);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&N.unixPermissions&16384&&(N.dir=!0),N.dosPermissions&&N.dosPermissions&16&&(N.dir=!0),N.dir&&(w=g(w)),N.createFolders&&(k=u(w))&&M.call(this,k,!0);var j=H==="string"&&N.binary===!1&&N.base64===!1;(!L||typeof L.binary>"u")&&(N.binary=!j);var q=T instanceof f&&T.uncompressedSize===0;(q||N.dir||!T||T.length===0)&&(N.base64=!1,N.binary=!0,T="",N.compression="STORE",H="string");var G=null;T instanceof f||T instanceof h?G=T:y.isNode&&y.isStream(T)?G=new R(w,T):G=s.prepareContent(w,T,N.binary,N.optimizedBinaryString,N.base64);var at=new p(w,G,N);this.files[w]=at},u=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var T=w.lastIndexOf("/");return T>0?w.substring(0,T):""},g=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},M=function(w,T){return T=typeof T<"u"?T:l.createFolders,w=g(w),this.files[w]||A.call(this,w,null,{dir:!0,createFolders:T}),this.files[w]};function E(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var B={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var T,L,H;for(T in this.files)H=this.files[T],L=T.slice(this.root.length,T.length),L&&T.slice(0,this.root.length)===this.root&&w(L,H)},filter:function(w){var T=[];return this.forEach(function(L,H){w(L,H)&&T.push(H)}),T},file:function(w,T,L){if(arguments.length===1)if(E(w)){var H=w;return this.filter(function(N,j){return!j.dir&&H.test(N)})}else{var k=this.files[this.root+w];return k&&!k.dir?k:null}else w=this.root+w,A.call(this,w,T,L);return this},folder:function(w){if(!w)return this;if(E(w))return this.filter(function(k,N){return N.dir&&w.test(k)});var T=this.root+w,L=M.call(this,T),H=this.clone();return H.root=L.name,H},remove:function(w){w=this.root+w;var T=this.files[w];if(T||(w.slice(-1)!=="/"&&(w+="/"),T=this.files[w]),T&&!T.dir)delete this.files[w];else for(var L=this.filter(function(k,N){return N.name.slice(0,w.length)===w}),H=0;H<L.length;H++)delete this.files[L[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var T,L={};try{if(L=s.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode}),L.type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");s.checkSupport(L.type),(L.platform==="darwin"||L.platform==="freebsd"||L.platform==="linux"||L.platform==="sunos")&&(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var H=L.comment||this.comment||"";T=b.generateWorker(this,L,H)}catch(k){T=new h("error"),T.error(k)}return new c(T,L.type||"string",L.mimeType)},generateAsync:function(w,T){return this.generateInternalStream(w).accumulate(T)},generateNodeStream:function(w,T){return w=w||{},w.type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(T)}};r.exports=B},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,r,i){r.exports=e("stream")},{stream:void 0}],17:[function(e,r,i){var n=e("./DataReader"),s=e("../utils");function h(c){n.call(this,c);for(var l=0;l<this.data.length;l++)c[l]=c[l]&255}s.inherits(h,n),h.prototype.byteAt=function(c){return this.data[this.zero+c]},h.prototype.lastIndexOfSignature=function(c){for(var l=c.charCodeAt(0),f=c.charCodeAt(1),p=c.charCodeAt(2),b=c.charCodeAt(3),y=this.length-4;y>=0;--y)if(this.data[y]===l&&this.data[y+1]===f&&this.data[y+2]===p&&this.data[y+3]===b)return y-this.zero;return-1},h.prototype.readAndCheckSignature=function(c){var l=c.charCodeAt(0),f=c.charCodeAt(1),p=c.charCodeAt(2),b=c.charCodeAt(3),y=this.readData(4);return l===y[0]&&f===y[1]&&p===y[2]&&b===y[3]},h.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./DataReader":18}],18:[function(e,r,i){var n=e("../utils");function s(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(){},readInt:function(h){var c=0,l;for(this.checkOffset(h),l=this.index+h-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=h,c},readString:function(h){return n.transformTo("string",this.readData(h))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC((h>>25&127)+1980,(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(h&31)<<1))}},r.exports=s},{"../utils":32}],19:[function(e,r,i){var n=e("./Uint8ArrayReader"),s=e("../utils");function h(c){n.call(this,c)}s.inherits(h,n),h.prototype.readData=function(c){this.checkOffset(c);var l=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,r,i){var n=e("./DataReader"),s=e("../utils");function h(c){n.call(this,c)}s.inherits(h,n),h.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},h.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},h.prototype.readAndCheckSignature=function(c){var l=this.readData(4);return c===l},h.prototype.readData=function(c){this.checkOffset(c);var l=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./DataReader":18}],21:[function(e,r,i){var n=e("./ArrayReader"),s=e("../utils");function h(c){n.call(this,c)}s.inherits(h,n),h.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(e,r,i){var n=e("../utils"),s=e("../support"),h=e("./ArrayReader"),c=e("./StringReader"),l=e("./NodeBufferReader"),f=e("./Uint8ArrayReader");r.exports=function(p){var b=n.getTypeOf(p);return n.checkSupport(b),b==="string"&&!s.uint8array?new c(p):b==="nodebuffer"?new l(p):s.uint8array?new f(n.transformTo("uint8array",p)):new h(n.transformTo("array",p))}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,r,i){var n=e("./GenericWorker"),s=e("../utils");function h(c){n.call(this,"ConvertWorker to "+c),this.destType=c}s.inherits(h,n),h.prototype.processChunk=function(c){this.push({data:s.transformTo(this.destType,c.data),meta:c.meta})},r.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(e,r,i){var n=e("./GenericWorker"),s=e("../crc32"),h=e("../utils");function c(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}h.inherits(c,n),c.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,r,i){var n=e("../utils"),s=e("./GenericWorker");function h(c){s.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(h,s),h.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}s.prototype.processChunk.call(this,c)},r.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(e,r,i){var n=e("../utils"),s=e("./GenericWorker"),h=16*1024;function c(l){s.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=n.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}n.inherits(c,s),c.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return s.prototype.resume.call(this)?(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0):!1},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,!(this.isPaused||this.isFinished)&&(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=h,f=null,p=Math.min(this.max,this.index+l);if(this.index>=this.max)return this.end();switch(this.type){case"string":f=this.data.substring(this.index,p);break;case"uint8array":f=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":f=this.data.slice(this.index,p);break}return this.index=p,this.push({data:f,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(e,r,i){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return this.isFinished?!1:(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,h){return this._listeners[s].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,h){if(this._listeners[s])for(var c=0;c<this._listeners[s].length;c++)this._listeners[s][c].call(this,h)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var h=this;return s.on("data",function(c){h.processChunk(c)}),s.on("end",function(){h.end()}),s.on("error",function(c){h.error(c)}),this},pause:function(){return this.isPaused||this.isFinished?!1:(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var s=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,h){return this.extraStreamInfo[s]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=n},{}],29:[function(e,r,i){var n=e("../utils"),s=e("./ConvertWorker"),h=e("./GenericWorker"),c=e("../base64"),l=e("../support"),f=e("../external"),p=null;if(l.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(u,g,M){switch(u){case"blob":return n.newBlob(n.transformTo("arraybuffer",g),M);case"base64":return c.encode(g);default:return n.transformTo(u,g)}}function y(u,g){var M,E=0,B=null,w=0;for(M=0;M<g.length;M++)w+=g[M].length;switch(u){case"string":return g.join("");case"array":return Array.prototype.concat.apply([],g);case"uint8array":for(B=new Uint8Array(w),M=0;M<g.length;M++)B.set(g[M],E),E+=g[M].length;return B;case"nodebuffer":return Buffer.concat(g);default:throw new Error("concat : unsupported type '"+u+"'")}}function R(u,g){return new f.Promise(function(M,E){var B=[],w=u._internalType,T=u._outputType,L=u._mimeType;u.on("data",function(H,k){B.push(H),g&&g(k)}).on("error",function(H){B=[],E(H)}).on("end",function(){try{var H=b(T,y(w,B),L);M(H)}catch(k){E(k)}B=[]}).resume()})}function A(u,g,M){var E=g;switch(g){case"blob":case"arraybuffer":E="uint8array";break;case"base64":E="string";break}try{this._internalType=E,this._outputType=g,this._mimeType=M,n.checkSupport(E),this._worker=u.pipe(new s(E)),u.lock()}catch(B){this._worker=new h("error"),this._worker.error(B)}}A.prototype={accumulate:function(u){return R(this,u)},on:function(u,g){var M=this;return u==="data"?this._worker.on(u,function(E){g.call(M,E.data,E.meta)}):this._worker.on(u,function(){n.delay(g,arguments,M)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(u){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},u)}},r.exports=A},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var n=new ArrayBuffer(0);try{i.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,h=new s;h.append(n),i.blob=h.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(e,r,i){for(var n=e("./utils"),s=e("./support"),h=e("./nodejsUtils"),c=e("./stream/GenericWorker"),l=new Array(256),f=0;f<256;f++)l[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;l[254]=l[254]=1;var p=function(u){var g,M,E,B,w,T=u.length,L=0;for(B=0;B<T;B++)M=u.charCodeAt(B),(M&64512)===55296&&B+1<T&&(E=u.charCodeAt(B+1),(E&64512)===56320&&(M=65536+(M-55296<<10)+(E-56320),B++)),L+=M<128?1:M<2048?2:M<65536?3:4;for(s.uint8array?g=new Uint8Array(L):g=new Array(L),w=0,B=0;w<L;B++)M=u.charCodeAt(B),(M&64512)===55296&&B+1<T&&(E=u.charCodeAt(B+1),(E&64512)===56320&&(M=65536+(M-55296<<10)+(E-56320),B++)),M<128?g[w++]=M:M<2048?(g[w++]=192|M>>>6,g[w++]=128|M&63):M<65536?(g[w++]=224|M>>>12,g[w++]=128|M>>>6&63,g[w++]=128|M&63):(g[w++]=240|M>>>18,g[w++]=128|M>>>12&63,g[w++]=128|M>>>6&63,g[w++]=128|M&63);return g},b=function(u,g){var M;for(g=g||u.length,g>u.length&&(g=u.length),M=g-1;M>=0&&(u[M]&192)===128;)M--;return M<0||M===0?g:M+l[u[M]]>g?M:g},y=function(u){var g,M,E,B,w=u.length,T=new Array(w*2);for(M=0,g=0;g<w;){if(E=u[g++],E<128){T[M++]=E;continue}if(B=l[E],B>4){T[M++]=65533,g+=B-1;continue}for(E&=B===2?31:B===3?15:7;B>1&&g<w;)E=E<<6|u[g++]&63,B--;if(B>1){T[M++]=65533;continue}E<65536?T[M++]=E:(E-=65536,T[M++]=55296|E>>10&1023,T[M++]=56320|E&1023)}return T.length!==M&&(T.subarray?T=T.subarray(0,M):T.length=M),n.applyFromCharCode(T)};i.utf8encode=function(g){return s.nodebuffer?h.newBufferFrom(g,"utf-8"):p(g)},i.utf8decode=function(g){return s.nodebuffer?n.transformTo("nodebuffer",g).toString("utf-8"):(g=n.transformTo(s.uint8array?"uint8array":"array",g),y(g))};function R(){c.call(this,"utf-8 decode"),this.leftOver=null}n.inherits(R,c),R.prototype.processChunk=function(u){var g=n.transformTo(s.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var M=g;g=new Uint8Array(M.length+this.leftOver.length),g.set(this.leftOver,0),g.set(M,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var E=b(g),B=g;E!==g.length&&(s.uint8array?(B=g.subarray(0,E),this.leftOver=g.subarray(E,g.length)):(B=g.slice(0,E),this.leftOver=g.slice(E,g.length))),this.push({data:i.utf8decode(B),meta:u.meta})},R.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=R;function A(){c.call(this,"utf-8 encode")}n.inherits(A,c),A.prototype.processChunk=function(u){this.push({data:i.utf8encode(u.data),meta:u.meta})},i.Utf8EncodeWorker=A},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,r,i){var n=e("./support"),s=e("./base64"),h=e("./nodejsUtils"),c=e("./external");e("setimmediate");function l(u){var g=null;return n.uint8array?g=new Uint8Array(u.length):g=new Array(u.length),p(u,g)}i.newBlob=function(u,g){i.checkSupport("blob");try{return new Blob([u],{type:g})}catch{try{var M=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,E=new M;return E.append(u),E.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};function f(u){return u}function p(u,g){for(var M=0;M<u.length;++M)g[M]=u.charCodeAt(M)&255;return g}var b={stringifyByChunk:function(u,g,M){var E=[],B=0,w=u.length;if(w<=M)return String.fromCharCode.apply(null,u);for(;B<w;)g==="array"||g==="nodebuffer"?E.push(String.fromCharCode.apply(null,u.slice(B,Math.min(B+M,w)))):E.push(String.fromCharCode.apply(null,u.subarray(B,Math.min(B+M,w)))),B+=M;return E.join("")},stringifyByChar:function(u){for(var g="",M=0;M<u.length;M++)g+=String.fromCharCode(u[M]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function y(u){var g=65536,M=i.getTypeOf(u),E=!0;if(M==="uint8array"?E=b.applyCanBeUsed.uint8array:M==="nodebuffer"&&(E=b.applyCanBeUsed.nodebuffer),E)for(;g>1;)try{return b.stringifyByChunk(u,M,g)}catch{g=Math.floor(g/2)}return b.stringifyByChar(u)}i.applyFromCharCode=y;function R(u,g){for(var M=0;M<u.length;M++)g[M]=u[M];return g}var A={};A.string={string:f,array:function(u){return p(u,new Array(u.length))},arraybuffer:function(u){return A.string.uint8array(u).buffer},uint8array:function(u){return p(u,new Uint8Array(u.length))},nodebuffer:function(u){return p(u,h.allocBuffer(u.length))}},A.array={string:y,array:f,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return h.newBufferFrom(u)}},A.arraybuffer={string:function(u){return y(new Uint8Array(u))},array:function(u){return R(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:f,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return h.newBufferFrom(new Uint8Array(u))}},A.uint8array={string:y,array:function(u){return R(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:f,nodebuffer:function(u){return h.newBufferFrom(u)}},A.nodebuffer={string:y,array:function(u){return R(u,new Array(u.length))},arraybuffer:function(u){return A.nodebuffer.uint8array(u).buffer},uint8array:function(u){return R(u,new Uint8Array(u.length))},nodebuffer:f},i.transformTo=function(u,g){if(g||(g=""),!u)return g;i.checkSupport(u);var M=i.getTypeOf(g),E=A[M][u](g);return E},i.resolve=function(u){for(var g=u.split("/"),M=[],E=0;E<g.length;E++){var B=g[E];B==="."||B===""&&E!==0&&E!==g.length-1||(B===".."?M.pop():M.push(B))}return M.join("/")},i.getTypeOf=function(u){if(typeof u=="string")return"string";var g=Object.prototype.toString.call(u);if(g==="[object Array]")return"array";if(n.nodebuffer&&h.isBuffer(u))return"nodebuffer";if(n.uint8array&&g==="[object Uint8Array]")return"uint8array";if(n.arraybuffer&&g==="[object ArrayBuffer]")return"arraybuffer"},i.checkSupport=function(u){var g=n[u.toLowerCase()];if(!g)throw new Error(u+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(u){var g="",M,E;for(E=0;E<(u||"").length;E++)M=u.charCodeAt(E),g+="\\x"+(M<16?"0":"")+M.toString(16).toUpperCase();return g},i.delay=function(u,g,M){setImmediate(function(){u.apply(M||null,g||[])})},i.inherits=function(u,g){var M=function(){};M.prototype=g.prototype,u.prototype=new M},i.extend=function(){var u={},g,M;for(g=0;g<arguments.length;g++)for(M in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],M)&&typeof u[M]>"u"&&(u[M]=arguments[g][M]);return u},i.prepareContent=function(u,g,M,E,B){var w=c.Promise.resolve(g).then(function(T){var L=n.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1);return L?typeof Blob.prototype.arrayBuffer<"u"?T.arrayBuffer():typeof FileReader<"u"?new c.Promise(function(H,k){var N=new FileReader;N.onload=function(j){H(j.target.result)},N.onerror=function(j){k(j.target.error)},N.readAsArrayBuffer(T)}):c.Promise.reject(new Error(u+" is a Blob, but we have no way of reading it.")):T});return w.then(function(T){var L=i.getTypeOf(T);return L?(L==="arraybuffer"?T=i.transformTo("uint8array",T):L==="string"&&(B?T=s.decode(T):M&&E!==!0&&(T=l(T))),T):c.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,r,i){var n=e("./reader/readerFor"),s=e("./utils"),h=e("./signature"),c=e("./zipEntry"),l=e("./support");function f(p){this.files=[],this.loadOptions=p}f.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(b)+", expected "+s.pretty(p)+")")}},isSignature:function(p,b){var y=this.reader.index;this.reader.setIndex(p);var R=this.reader.readString(4),A=R===b;return this.reader.setIndex(y),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=l.uint8array?"uint8array":"array",y=s.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(y)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p=this.zip64EndOfCentralSize-44,b=0,y,R,A;b<p;)y=this.reader.readInt(2),R=this.reader.readInt(4),A=this.reader.readData(R),this.zip64ExtensibleData[y]={id:y,length:R,value:A}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)p=new c({zip64:this.zip64},this.loadOptions),p.readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(p<0){var b=!this.isSignature(0,h.LOCAL_FILE_HEADER);throw b?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(p);var y=p;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,p=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),p<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var R=this.centralDirOffset+this.centralDirSize;this.zip64&&(R+=20,R+=12+this.zip64EndOfCentralSize);var A=y-R;if(A>0)this.isSignature(y,h.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(p){this.reader=n(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,r,i){var n=e("./reader/readerFor"),s=e("./utils"),h=e("./compressedObject"),c=e("./crc32"),l=e("./utf8"),f=e("./compressions"),p=e("./support"),b=0,y=3,R=function(u){for(var g in f)if(Object.prototype.hasOwnProperty.call(f,g)&&f[g].magic===u)return f[g];return null};function A(u,g){this.options=u,this.loadOptions=g}A.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},readLocalPart:function(u){var g,M;if(u.skip(22),this.fileNameLength=u.readInt(2),M=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(M),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(g=R(this.compressionMethod),g===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(this.externalFileAttributes&16),u===b&&(this.dosPermissions=this.externalFileAttributes&63),u===y&&(this.unixPermissions=this.externalFileAttributes>>16&65535),!this.dir&&this.fileNameStr.slice(-1)==="/"&&(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g=u.index+this.extraFieldsLength,M,E,B;for(this.extraFields||(this.extraFields={});u.index+4<g;)M=u.readInt(2),E=u.readInt(2),B=u.readData(E),this.extraFields[M]={id:M,length:E,value:B};u.setIndex(g)},handleUTF8:function(){var u=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var M=s.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(M)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var B=s.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(B)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=n(u.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:l.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=n(u.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:l.utf8decode(g.readData(u.length-5))}return null}},r.exports=A},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,r,i){var n=e("./stream/StreamHelper"),s=e("./stream/DataWorker"),h=e("./utf8"),c=e("./compressedObject"),l=e("./stream/GenericWorker"),f=function(R,A,u){this.name=R,this.dir=u.dir,this.date=u.date,this.comment=u.comment,this.unixPermissions=u.unixPermissions,this.dosPermissions=u.dosPermissions,this._data=A,this._dataBinary=u.binary,this.options={compression:u.compression,compressionOptions:u.compressionOptions}};f.prototype={internalStream:function(R){var A=null,u="string";try{if(!R)throw new Error("No output type specified.");u=R.toLowerCase();var g=u==="string"||u==="text";(u==="binarystring"||u==="text")&&(u="string"),A=this._decompressWorker();var M=!this._dataBinary;M&&!g&&(A=A.pipe(new h.Utf8EncodeWorker)),!M&&g&&(A=A.pipe(new h.Utf8DecodeWorker))}catch(E){A=new l("error"),A.error(E)}return new n(A,u,"")},async:function(R,A){return this.internalStream(R).accumulate(A)},nodeStream:function(R,A){return this.internalStream(R||"nodebuffer").toNodejsStream(A)},_compressWorker:function(R,A){if(this._data instanceof c&&this._data.compression.magic===R.magic)return this._data.getCompressedWorker();var u=this._decompressWorker();return this._dataBinary||(u=u.pipe(new h.Utf8EncodeWorker)),c.createWorkerFrom(u,R,A)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof l?this._data:new s(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},y=0;y<p.length;y++)f.prototype[p[y]]=b;r.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,r,i){(function(n){var s=n.MutationObserver||n.WebKitMutationObserver,h;if(s){var c=0,l=new s(R),f=n.document.createTextNode("");l.observe(f,{characterData:!0}),h=function(){f.data=c=++c%2}}else if(!n.setImmediate&&typeof n.MessageChannel<"u"){var p=new n.MessageChannel;p.port1.onmessage=R,h=function(){p.port2.postMessage(0)}}else"document"in n&&"onreadystatechange"in n.document.createElement("script")?h=function(){var u=n.document.createElement("script");u.onreadystatechange=function(){R(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},n.document.documentElement.appendChild(u)}:h=function(){setTimeout(R,0)};var b,y=[];function R(){b=!0;for(var u,g,M=y.length;M;){for(g=y,y=[],u=-1;++u<M;)g[u]();M=y.length}b=!1}r.exports=A;function A(u){y.push(u)===1&&!b&&h()}}).call(this,typeof xe<"u"?xe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,r,i){var n=e("immediate");function s(){}var h={},c=["REJECTED"],l=["FULFILLED"],f=["PENDING"];r.exports=p;function p(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,w!==s&&A(this,w)}p.prototype.finally=function(w){if(typeof w!="function")return this;var T=this.constructor;return this.then(L,H);function L(k){function N(){return k}return T.resolve(w()).then(N)}function H(k){function N(){throw k}return T.resolve(w()).then(N)}},p.prototype.catch=function(w){return this.then(null,w)},p.prototype.then=function(w,T){if(typeof w!="function"&&this.state===l||typeof T!="function"&&this.state===c)return this;var L=new this.constructor(s);if(this.state!==f){var H=this.state===l?w:T;y(L,H,this.outcome)}else this.queue.push(new b(L,w,T));return L};function b(w,T,L){this.promise=w,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof L=="function"&&(this.onRejected=L,this.callRejected=this.otherCallRejected)}b.prototype.callFulfilled=function(w){h.resolve(this.promise,w)},b.prototype.otherCallFulfilled=function(w){y(this.promise,this.onFulfilled,w)},b.prototype.callRejected=function(w){h.reject(this.promise,w)},b.prototype.otherCallRejected=function(w){y(this.promise,this.onRejected,w)};function y(w,T,L){n(function(){var H;try{H=T(L)}catch(k){return h.reject(w,k)}H===w?h.reject(w,new TypeError("Cannot resolve promise with itself")):h.resolve(w,H)})}h.resolve=function(w,T){var L=u(R,T);if(L.status==="error")return h.reject(w,L.value);var H=L.value;if(H)A(w,H);else{w.state=l,w.outcome=T;for(var k=-1,N=w.queue.length;++k<N;)w.queue[k].callFulfilled(T)}return w},h.reject=function(w,T){w.state=c,w.outcome=T;for(var L=-1,H=w.queue.length;++L<H;)w.queue[L].callRejected(T);return w};function R(w){var T=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof T=="function")return function(){T.apply(w,arguments)}}function A(w,T){var L=!1;function H(q){L||(L=!0,h.reject(w,q))}function k(q){L||(L=!0,h.resolve(w,q))}function N(){T(k,H)}var j=u(N);j.status==="error"&&H(j.value)}function u(w,T){var L={};try{L.value=w(T),L.status="success"}catch(H){L.status="error",L.value=H}return L}p.resolve=g;function g(w){return w instanceof this?w:h.resolve(new this(s),w)}p.reject=M;function M(w){var T=new this(s);return h.reject(T,w)}p.all=E;function E(w){var T=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,H=!1;if(!L)return this.resolve([]);for(var k=new Array(L),N=0,j=-1,q=new this(s);++j<L;)G(w[j],j);return q;function G(at,tt){T.resolve(at).then(lt,function(et){H||(H=!0,h.reject(q,et))});function lt(et){k[tt]=et,++N===L&&!H&&(H=!0,h.resolve(q,k))}}}p.race=B;function B(w){var T=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,H=!1;if(!L)return this.resolve([]);for(var k=-1,N=new this(s);++k<L;)j(w[k]);return N;function j(q){T.resolve(q).then(function(G){H||(H=!0,h.resolve(N,G))},function(G){H||(H=!0,h.reject(N,G))})}}},{immediate:36}],38:[function(e,r,i){var n=e("./lib/utils/common").assign,s=e("./lib/deflate"),h=e("./lib/inflate"),c=e("./lib/zlib/constants"),l={};n(l,s,h,c),r.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,r,i){var n=e("./zlib/deflate"),s=e("./utils/common"),h=e("./utils/strings"),c=e("./zlib/messages"),l=e("./zlib/zstream"),f=Object.prototype.toString,p=0,b=4,y=0,R=1,A=2,u=-1,g=0,M=8;function E(L){if(!(this instanceof E))return new E(L);this.options=s.assign({level:u,method:M,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},L||{});var H=this.options;H.raw&&H.windowBits>0?H.windowBits=-H.windowBits:H.gzip&&H.windowBits>0&&H.windowBits<16&&(H.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var k=n.deflateInit2(this.strm,H.level,H.method,H.windowBits,H.memLevel,H.strategy);if(k!==y)throw new Error(c[k]);if(H.header&&n.deflateSetHeader(this.strm,H.header),H.dictionary){var N;if(typeof H.dictionary=="string"?N=h.string2buf(H.dictionary):f.call(H.dictionary)==="[object ArrayBuffer]"?N=new Uint8Array(H.dictionary):N=H.dictionary,k=n.deflateSetDictionary(this.strm,N),k!==y)throw new Error(c[k]);this._dict_set=!0}}E.prototype.push=function(L,H){var k=this.strm,N=this.options.chunkSize,j,q;if(this.ended)return!1;q=H===~~H?H:H===!0?b:p,typeof L=="string"?k.input=h.string2buf(L):f.call(L)==="[object ArrayBuffer]"?k.input=new Uint8Array(L):k.input=L,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new s.Buf8(N),k.next_out=0,k.avail_out=N),j=n.deflate(k,q),j!==R&&j!==y)return this.onEnd(j),this.ended=!0,!1;(k.avail_out===0||k.avail_in===0&&(q===b||q===A))&&(this.options.to==="string"?this.onData(h.buf2binstring(s.shrinkBuf(k.output,k.next_out))):this.onData(s.shrinkBuf(k.output,k.next_out)))}while((k.avail_in>0||k.avail_out===0)&&j!==R);return q===b?(j=n.deflateEnd(this.strm),this.onEnd(j),this.ended=!0,j===y):(q===A&&(this.onEnd(y),k.avail_out=0),!0)},E.prototype.onData=function(L){this.chunks.push(L)},E.prototype.onEnd=function(L){L===y&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=L,this.msg=this.strm.msg};function B(L,H){var k=new E(H);if(k.push(L,!0),k.err)throw k.msg||c[k.err];return k.result}function w(L,H){return H=H||{},H.raw=!0,B(L,H)}function T(L,H){return H=H||{},H.gzip=!0,B(L,H)}i.Deflate=E,i.deflate=B,i.deflateRaw=w,i.gzip=T},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,r,i){var n=e("./zlib/inflate"),s=e("./utils/common"),h=e("./utils/strings"),c=e("./zlib/constants"),l=e("./zlib/messages"),f=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function y(u){if(!(this instanceof y))return new y(u);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},u||{});var g=this.options;g.raw&&g.windowBits>=0&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),g.windowBits>=0&&g.windowBits<16&&!(u&&u.windowBits)&&(g.windowBits+=32),g.windowBits>15&&g.windowBits<48&&(g.windowBits&15)===0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var M=n.inflateInit2(this.strm,g.windowBits);if(M!==c.Z_OK)throw new Error(l[M]);this.header=new p,n.inflateGetHeader(this.strm,this.header)}y.prototype.push=function(u,g){var M=this.strm,E=this.options.chunkSize,B=this.options.dictionary,w,T,L,H,k,N,j=!1;if(this.ended)return!1;T=g===~~g?g:g===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof u=="string"?M.input=h.binstring2buf(u):b.call(u)==="[object ArrayBuffer]"?M.input=new Uint8Array(u):M.input=u,M.next_in=0,M.avail_in=M.input.length;do{if(M.avail_out===0&&(M.output=new s.Buf8(E),M.next_out=0,M.avail_out=E),w=n.inflate(M,c.Z_NO_FLUSH),w===c.Z_NEED_DICT&&B&&(typeof B=="string"?N=h.string2buf(B):b.call(B)==="[object ArrayBuffer]"?N=new Uint8Array(B):N=B,w=n.inflateSetDictionary(this.strm,N)),w===c.Z_BUF_ERROR&&j===!0&&(w=c.Z_OK,j=!1),w!==c.Z_STREAM_END&&w!==c.Z_OK)return this.onEnd(w),this.ended=!0,!1;M.next_out&&(M.avail_out===0||w===c.Z_STREAM_END||M.avail_in===0&&(T===c.Z_FINISH||T===c.Z_SYNC_FLUSH))&&(this.options.to==="string"?(L=h.utf8border(M.output,M.next_out),H=M.next_out-L,k=h.buf2string(M.output,L),M.next_out=H,M.avail_out=E-H,H&&s.arraySet(M.output,M.output,L,H,0),this.onData(k)):this.onData(s.shrinkBuf(M.output,M.next_out))),M.avail_in===0&&M.avail_out===0&&(j=!0)}while((M.avail_in>0||M.avail_out===0)&&w!==c.Z_STREAM_END);return w===c.Z_STREAM_END&&(T=c.Z_FINISH),T===c.Z_FINISH?(w=n.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===c.Z_OK):(T===c.Z_SYNC_FLUSH&&(this.onEnd(c.Z_OK),M.avail_out=0),!0)},y.prototype.onData=function(u){this.chunks.push(u)},y.prototype.onEnd=function(u){u===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg};function R(u,g){var M=new y(g);if(M.push(u,!0),M.err)throw M.msg||l[M.err];return M.result}function A(u,g){return g=g||{},g.raw=!0,R(u,g)}i.Inflate=y,i.inflate=R,i.inflateRaw=A,i.ungzip=R},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,r,i){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var f=l.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var p in f)f.hasOwnProperty(p)&&(c[p]=f[p])}}return c},i.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var s={arraySet:function(c,l,f,p,b){if(l.subarray&&c.subarray){c.set(l.subarray(f,f+p),b);return}for(var y=0;y<p;y++)c[b+y]=l[f+y]},flattenChunks:function(c){var l,f,p,b,y,R;for(p=0,l=0,f=c.length;l<f;l++)p+=c[l].length;for(R=new Uint8Array(p),b=0,l=0,f=c.length;l<f;l++)y=c[l],R.set(y,b),b+=y.length;return R}},h={arraySet:function(c,l,f,p,b){for(var y=0;y<p;y++)c[b+y]=l[f+y]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,s)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,h))},i.setTyped(n)},{}],42:[function(e,r,i){var n=e("./common"),s=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var c=new n.Buf8(256),l=0;l<256;l++)c[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;c[254]=c[254]=1,i.string2buf=function(p){var b,y,R,A,u,g=p.length,M=0;for(A=0;A<g;A++)y=p.charCodeAt(A),(y&64512)===55296&&A+1<g&&(R=p.charCodeAt(A+1),(R&64512)===56320&&(y=65536+(y-55296<<10)+(R-56320),A++)),M+=y<128?1:y<2048?2:y<65536?3:4;for(b=new n.Buf8(M),u=0,A=0;u<M;A++)y=p.charCodeAt(A),(y&64512)===55296&&A+1<g&&(R=p.charCodeAt(A+1),(R&64512)===56320&&(y=65536+(y-55296<<10)+(R-56320),A++)),y<128?b[u++]=y:y<2048?(b[u++]=192|y>>>6,b[u++]=128|y&63):y<65536?(b[u++]=224|y>>>12,b[u++]=128|y>>>6&63,b[u++]=128|y&63):(b[u++]=240|y>>>18,b[u++]=128|y>>>12&63,b[u++]=128|y>>>6&63,b[u++]=128|y&63);return b};function f(p,b){if(b<65537&&(p.subarray&&h||!p.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(p,b));for(var y="",R=0;R<b;R++)y+=String.fromCharCode(p[R]);return y}i.buf2binstring=function(p){return f(p,p.length)},i.binstring2buf=function(p){for(var b=new n.Buf8(p.length),y=0,R=b.length;y<R;y++)b[y]=p.charCodeAt(y);return b},i.buf2string=function(p,b){var y,R,A,u,g=b||p.length,M=new Array(g*2);for(R=0,y=0;y<g;){if(A=p[y++],A<128){M[R++]=A;continue}if(u=c[A],u>4){M[R++]=65533,y+=u-1;continue}for(A&=u===2?31:u===3?15:7;u>1&&y<g;)A=A<<6|p[y++]&63,u--;if(u>1){M[R++]=65533;continue}A<65536?M[R++]=A:(A-=65536,M[R++]=55296|A>>10&1023,M[R++]=56320|A&1023)}return f(M,R)},i.utf8border=function(p,b){var y;for(b=b||p.length,b>p.length&&(b=p.length),y=b-1;y>=0&&(p[y]&192)===128;)y--;return y<0||y===0?b:y+c[p[y]]>b?y:b}},{"./common":41}],43:[function(e,r,i){function n(s,h,c,l){for(var f=s&65535|0,p=s>>>16&65535|0,b=0;c!==0;){b=c>2e3?2e3:c,c-=b;do f=f+h[l++]|0,p=p+f|0;while(--b);f%=65521,p%=65521}return f|p<<16|0}r.exports=n},{}],44:[function(e,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,r,i){function n(){for(var c,l=[],f=0;f<256;f++){c=f;for(var p=0;p<8;p++)c=c&1?3988292384^c>>>1:c>>>1;l[f]=c}return l}var s=n();function h(c,l,f,p){var b=s,y=p+f;c^=-1;for(var R=p;R<y;R++)c=c>>>8^b[(c^l[R])&255];return c^-1}r.exports=h},{}],46:[function(e,r,i){var n=e("../utils/common"),s=e("./trees"),h=e("./adler32"),c=e("./crc32"),l=e("./messages"),f=0,p=1,b=3,y=4,R=5,A=0,u=1,g=-2,M=-3,E=-5,B=-1,w=1,T=2,L=3,H=4,k=0,N=2,j=8,q=9,G=15,at=8,tt=29,lt=256,et=lt+1+tt,K=30,ot=19,yt=2*et+1,nt=15,ft=3,Et=258,mt=Et+ft+1,Tt=32,jt=42,Pt=69,gt=73,It=91,Ut=103,At=113,kt=666,St=1,Rt=2,qt=3,Vt=4,Lt=3;function Gt(o,O){return o.msg=l[O],O}function Qt(o){return(o<<1)-(o>4?9:0)}function Kt(o){for(var O=o.length;--O>=0;)o[O]=0}function xt(o){var O=o.state,F=O.pending;F>o.avail_out&&(F=o.avail_out),F!==0&&(n.arraySet(o.output,O.pending_buf,O.pending_out,F,o.next_out),o.next_out+=F,O.pending_out+=F,o.total_out+=F,o.avail_out-=F,O.pending-=F,O.pending===0&&(O.pending_out=0))}function bt(o,O){s._tr_flush_block(o,o.block_start>=0?o.block_start:-1,o.strstart-o.block_start,O),o.block_start=o.strstart,xt(o.strm)}function Mt(o,O){o.pending_buf[o.pending++]=O}function ae(o,O){o.pending_buf[o.pending++]=O>>>8&255,o.pending_buf[o.pending++]=O&255}function fe(o,O,F,x){var V=o.avail_in;return V>x&&(V=x),V===0?0:(o.avail_in-=V,n.arraySet(O,o.input,o.next_in,V,F),o.state.wrap===1?o.adler=h(o.adler,O,V,F):o.state.wrap===2&&(o.adler=c(o.adler,O,V,F)),o.next_in+=V,o.total_in+=V,V)}function de(o,O){var F=o.max_chain_length,x=o.strstart,V,W,pt=o.prev_length,st=o.nice_match,dt=o.strstart>o.w_size-mt?o.strstart-(o.w_size-mt):0,wt=o.window,re=o.w_mask,Ht=o.prev,Ct=o.strstart+Et,Zt=wt[x+pt-1],Nt=wt[x+pt];o.prev_length>=o.good_match&&(F>>=2),st>o.lookahead&&(st=o.lookahead);do if(V=O,!(wt[V+pt]!==Nt||wt[V+pt-1]!==Zt||wt[V]!==wt[x]||wt[++V]!==wt[x+1])){x+=2,V++;do;while(wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&wt[++x]===wt[++V]&&x<Ct);if(W=Et-(Ct-x),x=Ct-Et,W>pt){if(o.match_start=O,pt=W,W>=st)break;Zt=wt[x+pt-1],Nt=wt[x+pt]}}while((O=Ht[O&re])>dt&&--F!==0);return pt<=o.lookahead?pt:o.lookahead}function te(o){var O=o.w_size,F,x,V,W,pt;do{if(W=o.window_size-o.lookahead-o.strstart,o.strstart>=O+(O-mt)){n.arraySet(o.window,o.window,O,O,0),o.match_start-=O,o.strstart-=O,o.block_start-=O,x=o.hash_size,F=x;do V=o.head[--F],o.head[F]=V>=O?V-O:0;while(--x);x=O,F=x;do V=o.prev[--F],o.prev[F]=V>=O?V-O:0;while(--x);W+=O}if(o.strm.avail_in===0)break;if(x=fe(o.strm,o.window,o.strstart+o.lookahead,W),o.lookahead+=x,o.lookahead+o.insert>=ft)for(pt=o.strstart-o.insert,o.ins_h=o.window[pt],o.ins_h=(o.ins_h<<o.hash_shift^o.window[pt+1])&o.hash_mask;o.insert&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[pt+ft-1])&o.hash_mask,o.prev[pt&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=pt,pt++,o.insert--,!(o.lookahead+o.insert<ft)););}while(o.lookahead<mt&&o.strm.avail_in!==0)}function ge(o,O){var F=65535;for(F>o.pending_buf_size-5&&(F=o.pending_buf_size-5);;){if(o.lookahead<=1){if(te(o),o.lookahead===0&&O===f)return St;if(o.lookahead===0)break}o.strstart+=o.lookahead,o.lookahead=0;var x=o.block_start+F;if((o.strstart===0||o.strstart>=x)&&(o.lookahead=o.strstart-x,o.strstart=x,bt(o,!1),o.strm.avail_out===0)||o.strstart-o.block_start>=o.w_size-mt&&(bt(o,!1),o.strm.avail_out===0))return St}return o.insert=0,O===y?(bt(o,!0),o.strm.avail_out===0?qt:Vt):(o.strstart>o.block_start&&(bt(o,!1),o.strm.avail_out===0),St)}function le(o,O){for(var F,x;;){if(o.lookahead<mt){if(te(o),o.lookahead<mt&&O===f)return St;if(o.lookahead===0)break}if(F=0,o.lookahead>=ft&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),F!==0&&o.strstart-F<=o.w_size-mt&&(o.match_length=de(o,F)),o.match_length>=ft)if(x=s._tr_tally(o,o.strstart-o.match_start,o.match_length-ft),o.lookahead-=o.match_length,o.match_length<=o.max_lazy_match&&o.lookahead>=ft){o.match_length--;do o.strstart++,o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart;while(--o.match_length!==0);o.strstart++}else o.strstart+=o.match_length,o.match_length=0,o.ins_h=o.window[o.strstart],o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+1])&o.hash_mask;else x=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++;if(x&&(bt(o,!1),o.strm.avail_out===0))return St}return o.insert=o.strstart<ft-1?o.strstart:ft-1,O===y?(bt(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(bt(o,!1),o.strm.avail_out===0)?St:Rt}function se(o,O){for(var F,x,V;;){if(o.lookahead<mt){if(te(o),o.lookahead<mt&&O===f)return St;if(o.lookahead===0)break}if(F=0,o.lookahead>=ft&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),o.prev_length=o.match_length,o.prev_match=o.match_start,o.match_length=ft-1,F!==0&&o.prev_length<o.max_lazy_match&&o.strstart-F<=o.w_size-mt&&(o.match_length=de(o,F),o.match_length<=5&&(o.strategy===w||o.match_length===ft&&o.strstart-o.match_start>4096)&&(o.match_length=ft-1)),o.prev_length>=ft&&o.match_length<=o.prev_length){V=o.strstart+o.lookahead-ft,x=s._tr_tally(o,o.strstart-1-o.prev_match,o.prev_length-ft),o.lookahead-=o.prev_length-1,o.prev_length-=2;do++o.strstart<=V&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart);while(--o.prev_length!==0);if(o.match_available=0,o.match_length=ft-1,o.strstart++,x&&(bt(o,!1),o.strm.avail_out===0))return St}else if(o.match_available){if(x=s._tr_tally(o,0,o.window[o.strstart-1]),x&&bt(o,!1),o.strstart++,o.lookahead--,o.strm.avail_out===0)return St}else o.match_available=1,o.strstart++,o.lookahead--}return o.match_available&&(x=s._tr_tally(o,0,o.window[o.strstart-1]),o.match_available=0),o.insert=o.strstart<ft-1?o.strstart:ft-1,O===y?(bt(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(bt(o,!1),o.strm.avail_out===0)?St:Rt}function ue(o,O){for(var F,x,V,W,pt=o.window;;){if(o.lookahead<=Et){if(te(o),o.lookahead<=Et&&O===f)return St;if(o.lookahead===0)break}if(o.match_length=0,o.lookahead>=ft&&o.strstart>0&&(V=o.strstart-1,x=pt[V],x===pt[++V]&&x===pt[++V]&&x===pt[++V])){W=o.strstart+Et;do;while(x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&V<W);o.match_length=Et-(W-V),o.match_length>o.lookahead&&(o.match_length=o.lookahead)}if(o.match_length>=ft?(F=s._tr_tally(o,1,o.match_length-ft),o.lookahead-=o.match_length,o.strstart+=o.match_length,o.match_length=0):(F=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++),F&&(bt(o,!1),o.strm.avail_out===0))return St}return o.insert=0,O===y?(bt(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(bt(o,!1),o.strm.avail_out===0)?St:Rt}function ce(o,O){for(var F;;){if(o.lookahead===0&&(te(o),o.lookahead===0)){if(O===f)return St;break}if(o.match_length=0,F=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++,F&&(bt(o,!1),o.strm.avail_out===0))return St}return o.insert=0,O===y?(bt(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(bt(o,!1),o.strm.avail_out===0)?St:Rt}function Xt(o,O,F,x,V){this.good_length=o,this.max_lazy=O,this.nice_length=F,this.max_chain=x,this.func=V}var he;he=[new Xt(0,0,0,0,ge),new Xt(4,4,8,4,le),new Xt(4,5,16,8,le),new Xt(4,6,32,32,le),new Xt(4,4,16,16,se),new Xt(8,16,32,32,se),new Xt(8,16,128,128,se),new Xt(8,32,128,256,se),new Xt(32,128,258,1024,se),new Xt(32,258,258,4096,se)];function we(o){o.window_size=2*o.w_size,Kt(o.head),o.max_lazy_match=he[o.level].max_lazy,o.good_match=he[o.level].good_length,o.nice_match=he[o.level].nice_length,o.max_chain_length=he[o.level].max_chain,o.strstart=0,o.block_start=0,o.lookahead=0,o.insert=0,o.match_length=o.prev_length=ft-1,o.match_available=0,o.ins_h=0}function _(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=j,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(yt*2),this.dyn_dtree=new n.Buf16((2*K+1)*2),this.bl_tree=new n.Buf16((2*ot+1)*2),Kt(this.dyn_ltree),Kt(this.dyn_dtree),Kt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(nt+1),this.heap=new n.Buf16(2*et+1),Kt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*et+1),Kt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Y(o){var O;return!o||!o.state?Gt(o,g):(o.total_in=o.total_out=0,o.data_type=N,O=o.state,O.pending=0,O.pending_out=0,O.wrap<0&&(O.wrap=-O.wrap),O.status=O.wrap?jt:At,o.adler=O.wrap===2?0:1,O.last_flush=f,s._tr_init(O),A)}function Q(o){var O=Y(o);return O===A&&we(o.state),O}function ut(o,O){return!o||!o.state||o.state.wrap!==2?g:(o.state.gzhead=O,A)}function P(o,O,F,x,V,W){if(!o)return g;var pt=1;if(O===B&&(O=6),x<0?(pt=0,x=-x):x>15&&(pt=2,x-=16),V<1||V>q||F!==j||x<8||x>15||O<0||O>9||W<0||W>H)return Gt(o,g);x===8&&(x=9);var st=new _;return o.state=st,st.strm=o,st.wrap=pt,st.gzhead=null,st.w_bits=x,st.w_size=1<<st.w_bits,st.w_mask=st.w_size-1,st.hash_bits=V+7,st.hash_size=1<<st.hash_bits,st.hash_mask=st.hash_size-1,st.hash_shift=~~((st.hash_bits+ft-1)/ft),st.window=new n.Buf8(st.w_size*2),st.head=new n.Buf16(st.hash_size),st.prev=new n.Buf16(st.w_size),st.lit_bufsize=1<<V+6,st.pending_buf_size=st.lit_bufsize*4,st.pending_buf=new n.Buf8(st.pending_buf_size),st.d_buf=1*st.lit_bufsize,st.l_buf=3*st.lit_bufsize,st.level=O,st.strategy=W,st.method=F,Q(o)}function X(o,O){return P(o,O,j,G,at,k)}function d(o,O){var F,x,V,W;if(!o||!o.state||O>R||O<0)return o?Gt(o,g):g;if(x=o.state,!o.output||!o.input&&o.avail_in!==0||x.status===kt&&O!==y)return Gt(o,o.avail_out===0?E:g);if(x.strm=o,F=x.last_flush,x.last_flush=O,x.status===jt)if(x.wrap===2)o.adler=0,Mt(x,31),Mt(x,139),Mt(x,8),x.gzhead?(Mt(x,(x.gzhead.text?1:0)+(x.gzhead.hcrc?2:0)+(x.gzhead.extra?4:0)+(x.gzhead.name?8:0)+(x.gzhead.comment?16:0)),Mt(x,x.gzhead.time&255),Mt(x,x.gzhead.time>>8&255),Mt(x,x.gzhead.time>>16&255),Mt(x,x.gzhead.time>>24&255),Mt(x,x.level===9?2:x.strategy>=T||x.level<2?4:0),Mt(x,x.gzhead.os&255),x.gzhead.extra&&x.gzhead.extra.length&&(Mt(x,x.gzhead.extra.length&255),Mt(x,x.gzhead.extra.length>>8&255)),x.gzhead.hcrc&&(o.adler=c(o.adler,x.pending_buf,x.pending,0)),x.gzindex=0,x.status=Pt):(Mt(x,0),Mt(x,0),Mt(x,0),Mt(x,0),Mt(x,0),Mt(x,x.level===9?2:x.strategy>=T||x.level<2?4:0),Mt(x,Lt),x.status=At);else{var pt=j+(x.w_bits-8<<4)<<8,st=-1;x.strategy>=T||x.level<2?st=0:x.level<6?st=1:x.level===6?st=2:st=3,pt|=st<<6,x.strstart!==0&&(pt|=Tt),pt+=31-pt%31,x.status=At,ae(x,pt),x.strstart!==0&&(ae(x,o.adler>>>16),ae(x,o.adler&65535)),o.adler=1}if(x.status===Pt)if(x.gzhead.extra){for(V=x.pending;x.gzindex<(x.gzhead.extra.length&65535)&&!(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),xt(o),V=x.pending,x.pending===x.pending_buf_size));)Mt(x,x.gzhead.extra[x.gzindex]&255),x.gzindex++;x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),x.gzindex===x.gzhead.extra.length&&(x.gzindex=0,x.status=gt)}else x.status=gt;if(x.status===gt)if(x.gzhead.name){V=x.pending;do{if(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),xt(o),V=x.pending,x.pending===x.pending_buf_size)){W=1;break}x.gzindex<x.gzhead.name.length?W=x.gzhead.name.charCodeAt(x.gzindex++)&255:W=0,Mt(x,W)}while(W!==0);x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),W===0&&(x.gzindex=0,x.status=It)}else x.status=It;if(x.status===It)if(x.gzhead.comment){V=x.pending;do{if(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),xt(o),V=x.pending,x.pending===x.pending_buf_size)){W=1;break}x.gzindex<x.gzhead.comment.length?W=x.gzhead.comment.charCodeAt(x.gzindex++)&255:W=0,Mt(x,W)}while(W!==0);x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),W===0&&(x.status=Ut)}else x.status=Ut;if(x.status===Ut&&(x.gzhead.hcrc?(x.pending+2>x.pending_buf_size&&xt(o),x.pending+2<=x.pending_buf_size&&(Mt(x,o.adler&255),Mt(x,o.adler>>8&255),o.adler=0,x.status=At)):x.status=At),x.pending!==0){if(xt(o),o.avail_out===0)return x.last_flush=-1,A}else if(o.avail_in===0&&Qt(O)<=Qt(F)&&O!==y)return Gt(o,E);if(x.status===kt&&o.avail_in!==0)return Gt(o,E);if(o.avail_in!==0||x.lookahead!==0||O!==f&&x.status!==kt){var dt=x.strategy===T?ce(x,O):x.strategy===L?ue(x,O):he[x.level].func(x,O);if((dt===qt||dt===Vt)&&(x.status=kt),dt===St||dt===qt)return o.avail_out===0&&(x.last_flush=-1),A;if(dt===Rt&&(O===p?s._tr_align(x):O!==R&&(s._tr_stored_block(x,0,0,!1),O===b&&(Kt(x.head),x.lookahead===0&&(x.strstart=0,x.block_start=0,x.insert=0))),xt(o),o.avail_out===0))return x.last_flush=-1,A}return O!==y?A:x.wrap<=0?u:(x.wrap===2?(Mt(x,o.adler&255),Mt(x,o.adler>>8&255),Mt(x,o.adler>>16&255),Mt(x,o.adler>>24&255),Mt(x,o.total_in&255),Mt(x,o.total_in>>8&255),Mt(x,o.total_in>>16&255),Mt(x,o.total_in>>24&255)):(ae(x,o.adler>>>16),ae(x,o.adler&65535)),xt(o),x.wrap>0&&(x.wrap=-x.wrap),x.pending!==0?A:u)}function m(o){var O;return!o||!o.state?g:(O=o.state.status,O!==jt&&O!==Pt&&O!==gt&&O!==It&&O!==Ut&&O!==At&&O!==kt?Gt(o,g):(o.state=null,O===At?Gt(o,M):A))}function D(o,O){var F=O.length,x,V,W,pt,st,dt,wt,re;if(!o||!o.state||(x=o.state,pt=x.wrap,pt===2||pt===1&&x.status!==jt||x.lookahead))return g;for(pt===1&&(o.adler=h(o.adler,O,F,0)),x.wrap=0,F>=x.w_size&&(pt===0&&(Kt(x.head),x.strstart=0,x.block_start=0,x.insert=0),re=new n.Buf8(x.w_size),n.arraySet(re,O,F-x.w_size,x.w_size,0),O=re,F=x.w_size),st=o.avail_in,dt=o.next_in,wt=o.input,o.avail_in=F,o.next_in=0,o.input=O,te(x);x.lookahead>=ft;){V=x.strstart,W=x.lookahead-(ft-1);do x.ins_h=(x.ins_h<<x.hash_shift^x.window[V+ft-1])&x.hash_mask,x.prev[V&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=V,V++;while(--W);x.strstart=V,x.lookahead=ft-1,te(x)}return x.strstart+=x.lookahead,x.block_start=x.strstart,x.insert=x.lookahead,x.lookahead=0,x.match_length=x.prev_length=ft-1,x.match_available=0,o.next_in=dt,o.input=wt,o.avail_in=st,x.wrap=pt,A}i.deflateInit=X,i.deflateInit2=P,i.deflateReset=Q,i.deflateResetKeep=Y,i.deflateSetHeader=ut,i.deflate=d,i.deflateEnd=m,i.deflateSetDictionary=D,i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,r,i){function n(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}r.exports=n},{}],48:[function(e,r,i){var n=30,s=12;r.exports=function(c,l){var f,p,b,y,R,A,u,g,M,E,B,w,T,L,H,k,N,j,q,G,at,tt,lt,et,K;f=c.state,p=c.next_in,et=c.input,b=p+(c.avail_in-5),y=c.next_out,K=c.output,R=y-(l-c.avail_out),A=y+(c.avail_out-257),u=f.dmax,g=f.wsize,M=f.whave,E=f.wnext,B=f.window,w=f.hold,T=f.bits,L=f.lencode,H=f.distcode,k=(1<<f.lenbits)-1,N=(1<<f.distbits)-1;t:do{T<15&&(w+=et[p++]<<T,T+=8,w+=et[p++]<<T,T+=8),j=L[w&k];e:for(;;){if(q=j>>>24,w>>>=q,T-=q,q=j>>>16&255,q===0)K[y++]=j&65535;else if(q&16){G=j&65535,q&=15,q&&(T<q&&(w+=et[p++]<<T,T+=8),G+=w&(1<<q)-1,w>>>=q,T-=q),T<15&&(w+=et[p++]<<T,T+=8,w+=et[p++]<<T,T+=8),j=H[w&N];a:for(;;){if(q=j>>>24,w>>>=q,T-=q,q=j>>>16&255,q&16){if(at=j&65535,q&=15,T<q&&(w+=et[p++]<<T,T+=8,T<q&&(w+=et[p++]<<T,T+=8)),at+=w&(1<<q)-1,at>u){c.msg="invalid distance too far back",f.mode=n;break t}if(w>>>=q,T-=q,q=y-R,at>q){if(q=at-q,q>M&&f.sane){c.msg="invalid distance too far back",f.mode=n;break t}if(tt=0,lt=B,E===0){if(tt+=g-q,q<G){G-=q;do K[y++]=B[tt++];while(--q);tt=y-at,lt=K}}else if(E<q){if(tt+=g+E-q,q-=E,q<G){G-=q;do K[y++]=B[tt++];while(--q);if(tt=0,E<G){q=E,G-=q;do K[y++]=B[tt++];while(--q);tt=y-at,lt=K}}}else if(tt+=E-q,q<G){G-=q;do K[y++]=B[tt++];while(--q);tt=y-at,lt=K}for(;G>2;)K[y++]=lt[tt++],K[y++]=lt[tt++],K[y++]=lt[tt++],G-=3;G&&(K[y++]=lt[tt++],G>1&&(K[y++]=lt[tt++]))}else{tt=y-at;do K[y++]=K[tt++],K[y++]=K[tt++],K[y++]=K[tt++],G-=3;while(G>2);G&&(K[y++]=K[tt++],G>1&&(K[y++]=K[tt++]))}}else if((q&64)===0){j=H[(j&65535)+(w&(1<<q)-1)];continue a}else{c.msg="invalid distance code",f.mode=n;break t}break}}else if((q&64)===0){j=L[(j&65535)+(w&(1<<q)-1)];continue e}else if(q&32){f.mode=s;break t}else{c.msg="invalid literal/length code",f.mode=n;break t}break}}while(p<b&&y<A);G=T>>3,p-=G,T-=G<<3,w&=(1<<T)-1,c.next_in=p,c.next_out=y,c.avail_in=p<b?5+(b-p):5-(p-b),c.avail_out=y<A?257+(A-y):257-(y-A),f.hold=w,f.bits=T}},{}],49:[function(e,r,i){var n=e("../utils/common"),s=e("./adler32"),h=e("./crc32"),c=e("./inffast"),l=e("./inftrees"),f=0,p=1,b=2,y=4,R=5,A=6,u=0,g=1,M=2,E=-2,B=-3,w=-4,T=-5,L=8,H=1,k=2,N=3,j=4,q=5,G=6,at=7,tt=8,lt=9,et=10,K=11,ot=12,yt=13,nt=14,ft=15,Et=16,mt=17,Tt=18,jt=19,Pt=20,gt=21,It=22,Ut=23,At=24,kt=25,St=26,Rt=27,qt=28,Vt=29,Lt=30,Gt=31,Qt=32,Kt=852,xt=592,bt=15,Mt=bt;function ae(P){return(P>>>24&255)+(P>>>8&65280)+((P&65280)<<8)+((P&255)<<24)}function fe(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function de(P){var X;return!P||!P.state?E:(X=P.state,P.total_in=P.total_out=X.total=0,P.msg="",X.wrap&&(P.adler=X.wrap&1),X.mode=H,X.last=0,X.havedict=0,X.dmax=32768,X.head=null,X.hold=0,X.bits=0,X.lencode=X.lendyn=new n.Buf32(Kt),X.distcode=X.distdyn=new n.Buf32(xt),X.sane=1,X.back=-1,u)}function te(P){var X;return!P||!P.state?E:(X=P.state,X.wsize=0,X.whave=0,X.wnext=0,de(P))}function ge(P,X){var d,m;return!P||!P.state||(m=P.state,X<0?(d=0,X=-X):(d=(X>>4)+1,X<48&&(X&=15)),X&&(X<8||X>15))?E:(m.window!==null&&m.wbits!==X&&(m.window=null),m.wrap=d,m.wbits=X,te(P))}function le(P,X){var d,m;return P?(m=new fe,P.state=m,m.window=null,d=ge(P,X),d!==u&&(P.state=null),d):E}function se(P){return le(P,Mt)}var ue=!0,ce,Xt;function he(P){if(ue){var X;for(ce=new n.Buf32(512),Xt=new n.Buf32(32),X=0;X<144;)P.lens[X++]=8;for(;X<256;)P.lens[X++]=9;for(;X<280;)P.lens[X++]=7;for(;X<288;)P.lens[X++]=8;for(l(p,P.lens,0,288,ce,0,P.work,{bits:9}),X=0;X<32;)P.lens[X++]=5;l(b,P.lens,0,32,Xt,0,P.work,{bits:5}),ue=!1}P.lencode=ce,P.lenbits=9,P.distcode=Xt,P.distbits=5}function we(P,X,d,m){var D,o=P.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new n.Buf8(o.wsize)),m>=o.wsize?(n.arraySet(o.window,X,d-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(D=o.wsize-o.wnext,D>m&&(D=m),n.arraySet(o.window,X,d-m,D,o.wnext),m-=D,m?(n.arraySet(o.window,X,d-m,m,0),o.wnext=m,o.whave=o.wsize):(o.wnext+=D,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=D))),0}function _(P,X){var d,m,D,o,O,F,x,V,W,pt,st,dt,wt,re,Ht=0,Ct,Zt,Nt,ie,ve,ke,$t,pe,ne=new n.Buf8(4),be,me,na=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return E;d=P.state,d.mode===ot&&(d.mode=yt),O=P.next_out,D=P.output,x=P.avail_out,o=P.next_in,m=P.input,F=P.avail_in,V=d.hold,W=d.bits,pt=F,st=x,pe=u;t:for(;;)switch(d.mode){case H:if(d.wrap===0){d.mode=yt;break}for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(d.wrap&2&&V===35615){d.check=0,ne[0]=V&255,ne[1]=V>>>8&255,d.check=h(d.check,ne,2,0),V=0,W=0,d.mode=k;break}if(d.flags=0,d.head&&(d.head.done=!1),!(d.wrap&1)||(((V&255)<<8)+(V>>8))%31){P.msg="incorrect header check",d.mode=Lt;break}if((V&15)!==L){P.msg="unknown compression method",d.mode=Lt;break}if(V>>>=4,W-=4,$t=(V&15)+8,d.wbits===0)d.wbits=$t;else if($t>d.wbits){P.msg="invalid window size",d.mode=Lt;break}d.dmax=1<<$t,P.adler=d.check=1,d.mode=V&512?et:ot,V=0,W=0;break;case k:for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(d.flags=V,(d.flags&255)!==L){P.msg="unknown compression method",d.mode=Lt;break}if(d.flags&57344){P.msg="unknown header flags set",d.mode=Lt;break}d.head&&(d.head.text=V>>8&1),d.flags&512&&(ne[0]=V&255,ne[1]=V>>>8&255,d.check=h(d.check,ne,2,0)),V=0,W=0,d.mode=N;case N:for(;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.head&&(d.head.time=V),d.flags&512&&(ne[0]=V&255,ne[1]=V>>>8&255,ne[2]=V>>>16&255,ne[3]=V>>>24&255,d.check=h(d.check,ne,4,0)),V=0,W=0,d.mode=j;case j:for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.head&&(d.head.xflags=V&255,d.head.os=V>>8),d.flags&512&&(ne[0]=V&255,ne[1]=V>>>8&255,d.check=h(d.check,ne,2,0)),V=0,W=0,d.mode=q;case q:if(d.flags&1024){for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.length=V,d.head&&(d.head.extra_len=V),d.flags&512&&(ne[0]=V&255,ne[1]=V>>>8&255,d.check=h(d.check,ne,2,0)),V=0,W=0}else d.head&&(d.head.extra=null);d.mode=G;case G:if(d.flags&1024&&(dt=d.length,dt>F&&(dt=F),dt&&(d.head&&($t=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),n.arraySet(d.head.extra,m,o,dt,$t)),d.flags&512&&(d.check=h(d.check,m,dt,o)),F-=dt,o+=dt,d.length-=dt),d.length))break t;d.length=0,d.mode=at;case at:if(d.flags&2048){if(F===0)break t;dt=0;do $t=m[o+dt++],d.head&&$t&&d.length<65536&&(d.head.name+=String.fromCharCode($t));while($t&&dt<F);if(d.flags&512&&(d.check=h(d.check,m,dt,o)),F-=dt,o+=dt,$t)break t}else d.head&&(d.head.name=null);d.length=0,d.mode=tt;case tt:if(d.flags&4096){if(F===0)break t;dt=0;do $t=m[o+dt++],d.head&&$t&&d.length<65536&&(d.head.comment+=String.fromCharCode($t));while($t&&dt<F);if(d.flags&512&&(d.check=h(d.check,m,dt,o)),F-=dt,o+=dt,$t)break t}else d.head&&(d.head.comment=null);d.mode=lt;case lt:if(d.flags&512){for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(V!==(d.check&65535)){P.msg="header crc mismatch",d.mode=Lt;break}V=0,W=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),P.adler=d.check=0,d.mode=ot;break;case et:for(;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}P.adler=d.check=ae(V),V=0,W=0,d.mode=K;case K:if(d.havedict===0)return P.next_out=O,P.avail_out=x,P.next_in=o,P.avail_in=F,d.hold=V,d.bits=W,M;P.adler=d.check=1,d.mode=ot;case ot:if(X===R||X===A)break t;case yt:if(d.last){V>>>=W&7,W-=W&7,d.mode=Rt;break}for(;W<3;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}switch(d.last=V&1,V>>>=1,W-=1,V&3){case 0:d.mode=nt;break;case 1:if(he(d),d.mode=Pt,X===A){V>>>=2,W-=2;break t}break;case 2:d.mode=mt;break;case 3:P.msg="invalid block type",d.mode=Lt}V>>>=2,W-=2;break;case nt:for(V>>>=W&7,W-=W&7;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if((V&65535)!==(V>>>16^65535)){P.msg="invalid stored block lengths",d.mode=Lt;break}if(d.length=V&65535,V=0,W=0,d.mode=ft,X===A)break t;case ft:d.mode=Et;case Et:if(dt=d.length,dt){if(dt>F&&(dt=F),dt>x&&(dt=x),dt===0)break t;n.arraySet(D,m,o,dt,O),F-=dt,o+=dt,x-=dt,O+=dt,d.length-=dt;break}d.mode=ot;break;case mt:for(;W<14;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(d.nlen=(V&31)+257,V>>>=5,W-=5,d.ndist=(V&31)+1,V>>>=5,W-=5,d.ncode=(V&15)+4,V>>>=4,W-=4,d.nlen>286||d.ndist>30){P.msg="too many length or distance symbols",d.mode=Lt;break}d.have=0,d.mode=Tt;case Tt:for(;d.have<d.ncode;){for(;W<3;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.lens[na[d.have++]]=V&7,V>>>=3,W-=3}for(;d.have<19;)d.lens[na[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,be={bits:d.lenbits},pe=l(f,d.lens,0,19,d.lencode,0,d.work,be),d.lenbits=be.bits,pe){P.msg="invalid code lengths set",d.mode=Lt;break}d.have=0,d.mode=jt;case jt:for(;d.have<d.nlen+d.ndist;){for(;Ht=d.lencode[V&(1<<d.lenbits)-1],Ct=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(Ct<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(Nt<16)V>>>=Ct,W-=Ct,d.lens[d.have++]=Nt;else{if(Nt===16){for(me=Ct+2;W<me;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(V>>>=Ct,W-=Ct,d.have===0){P.msg="invalid bit length repeat",d.mode=Lt;break}$t=d.lens[d.have-1],dt=3+(V&3),V>>>=2,W-=2}else if(Nt===17){for(me=Ct+3;W<me;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=Ct,W-=Ct,$t=0,dt=3+(V&7),V>>>=3,W-=3}else{for(me=Ct+7;W<me;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=Ct,W-=Ct,$t=0,dt=11+(V&127),V>>>=7,W-=7}if(d.have+dt>d.nlen+d.ndist){P.msg="invalid bit length repeat",d.mode=Lt;break}for(;dt--;)d.lens[d.have++]=$t}}if(d.mode===Lt)break;if(d.lens[256]===0){P.msg="invalid code -- missing end-of-block",d.mode=Lt;break}if(d.lenbits=9,be={bits:d.lenbits},pe=l(p,d.lens,0,d.nlen,d.lencode,0,d.work,be),d.lenbits=be.bits,pe){P.msg="invalid literal/lengths set",d.mode=Lt;break}if(d.distbits=6,d.distcode=d.distdyn,be={bits:d.distbits},pe=l(b,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,be),d.distbits=be.bits,pe){P.msg="invalid distances set",d.mode=Lt;break}if(d.mode=Pt,X===A)break t;case Pt:d.mode=gt;case gt:if(F>=6&&x>=258){P.next_out=O,P.avail_out=x,P.next_in=o,P.avail_in=F,d.hold=V,d.bits=W,c(P,st),O=P.next_out,D=P.output,x=P.avail_out,o=P.next_in,m=P.input,F=P.avail_in,V=d.hold,W=d.bits,d.mode===ot&&(d.back=-1);break}for(d.back=0;Ht=d.lencode[V&(1<<d.lenbits)-1],Ct=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(Ct<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(Zt&&(Zt&240)===0){for(ie=Ct,ve=Zt,ke=Nt;Ht=d.lencode[ke+((V&(1<<ie+ve)-1)>>ie)],Ct=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(ie+Ct<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=ie,W-=ie,d.back+=ie}if(V>>>=Ct,W-=Ct,d.back+=Ct,d.length=Nt,Zt===0){d.mode=St;break}if(Zt&32){d.back=-1,d.mode=ot;break}if(Zt&64){P.msg="invalid literal/length code",d.mode=Lt;break}d.extra=Zt&15,d.mode=It;case It:if(d.extra){for(me=d.extra;W<me;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.length+=V&(1<<d.extra)-1,V>>>=d.extra,W-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=Ut;case Ut:for(;Ht=d.distcode[V&(1<<d.distbits)-1],Ct=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(Ct<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if((Zt&240)===0){for(ie=Ct,ve=Zt,ke=Nt;Ht=d.distcode[ke+((V&(1<<ie+ve)-1)>>ie)],Ct=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(ie+Ct<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=ie,W-=ie,d.back+=ie}if(V>>>=Ct,W-=Ct,d.back+=Ct,Zt&64){P.msg="invalid distance code",d.mode=Lt;break}d.offset=Nt,d.extra=Zt&15,d.mode=At;case At:if(d.extra){for(me=d.extra;W<me;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.offset+=V&(1<<d.extra)-1,V>>>=d.extra,W-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){P.msg="invalid distance too far back",d.mode=Lt;break}d.mode=kt;case kt:if(x===0)break t;if(dt=st-x,d.offset>dt){if(dt=d.offset-dt,dt>d.whave&&d.sane){P.msg="invalid distance too far back",d.mode=Lt;break}dt>d.wnext?(dt-=d.wnext,wt=d.wsize-dt):wt=d.wnext-dt,dt>d.length&&(dt=d.length),re=d.window}else re=D,wt=O-d.offset,dt=d.length;dt>x&&(dt=x),x-=dt,d.length-=dt;do D[O++]=re[wt++];while(--dt);d.length===0&&(d.mode=gt);break;case St:if(x===0)break t;D[O++]=d.length,x--,d.mode=gt;break;case Rt:if(d.wrap){for(;W<32;){if(F===0)break t;F--,V|=m[o++]<<W,W+=8}if(st-=x,P.total_out+=st,d.total+=st,st&&(P.adler=d.check=d.flags?h(d.check,D,st,O-st):s(d.check,D,st,O-st)),st=x,(d.flags?V:ae(V))!==d.check){P.msg="incorrect data check",d.mode=Lt;break}V=0,W=0}d.mode=qt;case qt:if(d.wrap&&d.flags){for(;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(V!==(d.total&4294967295)){P.msg="incorrect length check",d.mode=Lt;break}V=0,W=0}d.mode=Vt;case Vt:pe=g;break t;case Lt:pe=B;break t;case Gt:return w;case Qt:default:return E}return P.next_out=O,P.avail_out=x,P.next_in=o,P.avail_in=F,d.hold=V,d.bits=W,(d.wsize||st!==P.avail_out&&d.mode<Lt&&(d.mode<Rt||X!==y))&&we(P,P.output,P.next_out,st-P.avail_out),pt-=P.avail_in,st-=P.avail_out,P.total_in+=pt,P.total_out+=st,d.total+=st,d.wrap&&st&&(P.adler=d.check=d.flags?h(d.check,D,st,P.next_out-st):s(d.check,D,st,P.next_out-st)),P.data_type=d.bits+(d.last?64:0)+(d.mode===ot?128:0)+(d.mode===Pt||d.mode===ft?256:0),(pt===0&&st===0||X===y)&&pe===u&&(pe=T),pe}function Y(P){if(!P||!P.state)return E;var X=P.state;return X.window&&(X.window=null),P.state=null,u}function Q(P,X){var d;return!P||!P.state||(d=P.state,(d.wrap&2)===0)?E:(d.head=X,X.done=!1,u)}function ut(P,X){var d=X.length,m,D,o;return!P||!P.state||(m=P.state,m.wrap!==0&&m.mode!==K)?E:m.mode===K&&(D=1,D=s(D,X,d,0),D!==m.check)?B:(o=we(P,X,d,d),o?(m.mode=Gt,w):(m.havedict=1,u))}i.inflateReset=te,i.inflateReset2=ge,i.inflateResetKeep=de,i.inflateInit=se,i.inflateInit2=le,i.inflate=_,i.inflateEnd=Y,i.inflateGetHeader=Q,i.inflateSetDictionary=ut,i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,r,i){var n=e("../utils/common"),s=15,h=852,c=592,l=0,f=1,p=2,b=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],y=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],R=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],A=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(g,M,E,B,w,T,L,H){var k=H.bits,N=0,j=0,q=0,G=0,at=0,tt=0,lt=0,et=0,K=0,ot=0,yt,nt,ft,Et,mt,Tt=null,jt=0,Pt,gt=new n.Buf16(s+1),It=new n.Buf16(s+1),Ut=null,At=0,kt,St,Rt;for(N=0;N<=s;N++)gt[N]=0;for(j=0;j<B;j++)gt[M[E+j]]++;for(at=k,G=s;G>=1&&gt[G]===0;G--);if(at>G&&(at=G),G===0)return w[T++]=1<<24|64<<16|0,w[T++]=1<<24|64<<16|0,H.bits=1,0;for(q=1;q<G&&gt[q]===0;q++);for(at<q&&(at=q),et=1,N=1;N<=s;N++)if(et<<=1,et-=gt[N],et<0)return-1;if(et>0&&(g===l||G!==1))return-1;for(It[1]=0,N=1;N<s;N++)It[N+1]=It[N]+gt[N];for(j=0;j<B;j++)M[E+j]!==0&&(L[It[M[E+j]]++]=j);if(g===l?(Tt=Ut=L,Pt=19):g===f?(Tt=b,jt-=257,Ut=y,At-=257,Pt=256):(Tt=R,Ut=A,Pt=-1),ot=0,j=0,N=q,mt=T,tt=at,lt=0,ft=-1,K=1<<at,Et=K-1,g===f&&K>h||g===p&&K>c)return 1;for(;;){kt=N-lt,L[j]<Pt?(St=0,Rt=L[j]):L[j]>Pt?(St=Ut[At+L[j]],Rt=Tt[jt+L[j]]):(St=96,Rt=0),yt=1<<N-lt,nt=1<<tt,q=nt;do nt-=yt,w[mt+(ot>>lt)+nt]=kt<<24|St<<16|Rt|0;while(nt!==0);for(yt=1<<N-1;ot&yt;)yt>>=1;if(yt!==0?(ot&=yt-1,ot+=yt):ot=0,j++,--gt[N]===0){if(N===G)break;N=M[E+L[j]]}if(N>at&&(ot&Et)!==ft){for(lt===0&&(lt=at),mt+=q,tt=N-lt,et=1<<tt;tt+lt<G&&(et-=gt[tt+lt],!(et<=0));)tt++,et<<=1;if(K+=1<<tt,g===f&&K>h||g===p&&K>c)return 1;ft=ot&Et,w[ft]=at<<24|tt<<16|mt-T|0}}return ot!==0&&(w[mt+ot]=N-lt<<24|64<<16|0),H.bits=at,0}},{"../utils/common":41}],51:[function(e,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,r,i){var n=e("../utils/common"),s=4,h=0,c=1,l=2;function f(_){for(var Y=_.length;--Y>=0;)_[Y]=0}var p=0,b=1,y=2,R=3,A=258,u=29,g=256,M=g+1+u,E=30,B=19,w=2*M+1,T=15,L=16,H=7,k=256,N=16,j=17,q=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],at=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],lt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],et=512,K=new Array((M+2)*2);f(K);var ot=new Array(E*2);f(ot);var yt=new Array(et);f(yt);var nt=new Array(A-R+1);f(nt);var ft=new Array(u);f(ft);var Et=new Array(E);f(Et);function mt(_,Y,Q,ut,P){this.static_tree=_,this.extra_bits=Y,this.extra_base=Q,this.elems=ut,this.max_length=P,this.has_stree=_&&_.length}var Tt,jt,Pt;function gt(_,Y){this.dyn_tree=_,this.max_code=0,this.stat_desc=Y}function It(_){return _<256?yt[_]:yt[256+(_>>>7)]}function Ut(_,Y){_.pending_buf[_.pending++]=Y&255,_.pending_buf[_.pending++]=Y>>>8&255}function At(_,Y,Q){_.bi_valid>L-Q?(_.bi_buf|=Y<<_.bi_valid&65535,Ut(_,_.bi_buf),_.bi_buf=Y>>L-_.bi_valid,_.bi_valid+=Q-L):(_.bi_buf|=Y<<_.bi_valid&65535,_.bi_valid+=Q)}function kt(_,Y,Q){At(_,Q[Y*2],Q[Y*2+1])}function St(_,Y){var Q=0;do Q|=_&1,_>>>=1,Q<<=1;while(--Y>0);return Q>>>1}function Rt(_){_.bi_valid===16?(Ut(_,_.bi_buf),_.bi_buf=0,_.bi_valid=0):_.bi_valid>=8&&(_.pending_buf[_.pending++]=_.bi_buf&255,_.bi_buf>>=8,_.bi_valid-=8)}function qt(_,Y){var Q=Y.dyn_tree,ut=Y.max_code,P=Y.stat_desc.static_tree,X=Y.stat_desc.has_stree,d=Y.stat_desc.extra_bits,m=Y.stat_desc.extra_base,D=Y.stat_desc.max_length,o,O,F,x,V,W,pt=0;for(x=0;x<=T;x++)_.bl_count[x]=0;for(Q[_.heap[_.heap_max]*2+1]=0,o=_.heap_max+1;o<w;o++)O=_.heap[o],x=Q[Q[O*2+1]*2+1]+1,x>D&&(x=D,pt++),Q[O*2+1]=x,!(O>ut)&&(_.bl_count[x]++,V=0,O>=m&&(V=d[O-m]),W=Q[O*2],_.opt_len+=W*(x+V),X&&(_.static_len+=W*(P[O*2+1]+V)));if(pt!==0){do{for(x=D-1;_.bl_count[x]===0;)x--;_.bl_count[x]--,_.bl_count[x+1]+=2,_.bl_count[D]--,pt-=2}while(pt>0);for(x=D;x!==0;x--)for(O=_.bl_count[x];O!==0;)F=_.heap[--o],!(F>ut)&&(Q[F*2+1]!==x&&(_.opt_len+=(x-Q[F*2+1])*Q[F*2],Q[F*2+1]=x),O--)}}function Vt(_,Y,Q){var ut=new Array(T+1),P=0,X,d;for(X=1;X<=T;X++)ut[X]=P=P+Q[X-1]<<1;for(d=0;d<=Y;d++){var m=_[d*2+1];m!==0&&(_[d*2]=St(ut[m]++,m))}}function Lt(){var _,Y,Q,ut,P,X=new Array(T+1);for(Q=0,ut=0;ut<u-1;ut++)for(ft[ut]=Q,_=0;_<1<<G[ut];_++)nt[Q++]=ut;for(nt[Q-1]=ut,P=0,ut=0;ut<16;ut++)for(Et[ut]=P,_=0;_<1<<at[ut];_++)yt[P++]=ut;for(P>>=7;ut<E;ut++)for(Et[ut]=P<<7,_=0;_<1<<at[ut]-7;_++)yt[256+P++]=ut;for(Y=0;Y<=T;Y++)X[Y]=0;for(_=0;_<=143;)K[_*2+1]=8,_++,X[8]++;for(;_<=255;)K[_*2+1]=9,_++,X[9]++;for(;_<=279;)K[_*2+1]=7,_++,X[7]++;for(;_<=287;)K[_*2+1]=8,_++,X[8]++;for(Vt(K,M+1,X),_=0;_<E;_++)ot[_*2+1]=5,ot[_*2]=St(_,5);Tt=new mt(K,G,g+1,M,T),jt=new mt(ot,at,0,E,T),Pt=new mt(new Array(0),tt,0,B,H)}function Gt(_){var Y;for(Y=0;Y<M;Y++)_.dyn_ltree[Y*2]=0;for(Y=0;Y<E;Y++)_.dyn_dtree[Y*2]=0;for(Y=0;Y<B;Y++)_.bl_tree[Y*2]=0;_.dyn_ltree[k*2]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function Qt(_){_.bi_valid>8?Ut(_,_.bi_buf):_.bi_valid>0&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function Kt(_,Y,Q,ut){Qt(_),Ut(_,Q),Ut(_,~Q),n.arraySet(_.pending_buf,_.window,Y,Q,_.pending),_.pending+=Q}function xt(_,Y,Q,ut){var P=Y*2,X=Q*2;return _[P]<_[X]||_[P]===_[X]&&ut[Y]<=ut[Q]}function bt(_,Y,Q){for(var ut=_.heap[Q],P=Q<<1;P<=_.heap_len&&(P<_.heap_len&&xt(Y,_.heap[P+1],_.heap[P],_.depth)&&P++,!xt(Y,ut,_.heap[P],_.depth));)_.heap[Q]=_.heap[P],Q=P,P<<=1;_.heap[Q]=ut}function Mt(_,Y,Q){var ut,P,X=0,d,m;if(_.last_lit!==0)do ut=_.pending_buf[_.d_buf+X*2]<<8|_.pending_buf[_.d_buf+X*2+1],P=_.pending_buf[_.l_buf+X],X++,ut===0?kt(_,P,Y):(d=nt[P],kt(_,d+g+1,Y),m=G[d],m!==0&&(P-=ft[d],At(_,P,m)),ut--,d=It(ut),kt(_,d,Q),m=at[d],m!==0&&(ut-=Et[d],At(_,ut,m)));while(X<_.last_lit);kt(_,k,Y)}function ae(_,Y){var Q=Y.dyn_tree,ut=Y.stat_desc.static_tree,P=Y.stat_desc.has_stree,X=Y.stat_desc.elems,d,m,D=-1,o;for(_.heap_len=0,_.heap_max=w,d=0;d<X;d++)Q[d*2]!==0?(_.heap[++_.heap_len]=D=d,_.depth[d]=0):Q[d*2+1]=0;for(;_.heap_len<2;)o=_.heap[++_.heap_len]=D<2?++D:0,Q[o*2]=1,_.depth[o]=0,_.opt_len--,P&&(_.static_len-=ut[o*2+1]);for(Y.max_code=D,d=_.heap_len>>1;d>=1;d--)bt(_,Q,d);o=X;do d=_.heap[1],_.heap[1]=_.heap[_.heap_len--],bt(_,Q,1),m=_.heap[1],_.heap[--_.heap_max]=d,_.heap[--_.heap_max]=m,Q[o*2]=Q[d*2]+Q[m*2],_.depth[o]=(_.depth[d]>=_.depth[m]?_.depth[d]:_.depth[m])+1,Q[d*2+1]=Q[m*2+1]=o,_.heap[1]=o++,bt(_,Q,1);while(_.heap_len>=2);_.heap[--_.heap_max]=_.heap[1],qt(_,Y),Vt(Q,D,_.bl_count)}function fe(_,Y,Q){var ut,P=-1,X,d=Y[1],m=0,D=7,o=4;for(d===0&&(D=138,o=3),Y[(Q+1)*2+1]=65535,ut=0;ut<=Q;ut++)X=d,d=Y[(ut+1)*2+1],!(++m<D&&X===d)&&(m<o?_.bl_tree[X*2]+=m:X!==0?(X!==P&&_.bl_tree[X*2]++,_.bl_tree[N*2]++):m<=10?_.bl_tree[j*2]++:_.bl_tree[q*2]++,m=0,P=X,d===0?(D=138,o=3):X===d?(D=6,o=3):(D=7,o=4))}function de(_,Y,Q){var ut,P=-1,X,d=Y[1],m=0,D=7,o=4;for(d===0&&(D=138,o=3),ut=0;ut<=Q;ut++)if(X=d,d=Y[(ut+1)*2+1],!(++m<D&&X===d)){if(m<o)do kt(_,X,_.bl_tree);while(--m!==0);else X!==0?(X!==P&&(kt(_,X,_.bl_tree),m--),kt(_,N,_.bl_tree),At(_,m-3,2)):m<=10?(kt(_,j,_.bl_tree),At(_,m-3,3)):(kt(_,q,_.bl_tree),At(_,m-11,7));m=0,P=X,d===0?(D=138,o=3):X===d?(D=6,o=3):(D=7,o=4)}}function te(_){var Y;for(fe(_,_.dyn_ltree,_.l_desc.max_code),fe(_,_.dyn_dtree,_.d_desc.max_code),ae(_,_.bl_desc),Y=B-1;Y>=3&&_.bl_tree[lt[Y]*2+1]===0;Y--);return _.opt_len+=3*(Y+1)+5+5+4,Y}function ge(_,Y,Q,ut){var P;for(At(_,Y-257,5),At(_,Q-1,5),At(_,ut-4,4),P=0;P<ut;P++)At(_,_.bl_tree[lt[P]*2+1],3);de(_,_.dyn_ltree,Y-1),de(_,_.dyn_dtree,Q-1)}function le(_){var Y=4093624447,Q;for(Q=0;Q<=31;Q++,Y>>>=1)if(Y&1&&_.dyn_ltree[Q*2]!==0)return h;if(_.dyn_ltree[18]!==0||_.dyn_ltree[20]!==0||_.dyn_ltree[26]!==0)return c;for(Q=32;Q<g;Q++)if(_.dyn_ltree[Q*2]!==0)return c;return h}var se=!1;function ue(_){se||(Lt(),se=!0),_.l_desc=new gt(_.dyn_ltree,Tt),_.d_desc=new gt(_.dyn_dtree,jt),_.bl_desc=new gt(_.bl_tree,Pt),_.bi_buf=0,_.bi_valid=0,Gt(_)}function ce(_,Y,Q,ut){At(_,(p<<1)+(ut?1:0),3),Kt(_,Y,Q)}function Xt(_){At(_,b<<1,3),kt(_,k,K),Rt(_)}function he(_,Y,Q,ut){var P,X,d=0;_.level>0?(_.strm.data_type===l&&(_.strm.data_type=le(_)),ae(_,_.l_desc),ae(_,_.d_desc),d=te(_),P=_.opt_len+3+7>>>3,X=_.static_len+3+7>>>3,X<=P&&(P=X)):P=X=Q+5,Q+4<=P&&Y!==-1?ce(_,Y,Q,ut):_.strategy===s||X===P?(At(_,(b<<1)+(ut?1:0),3),Mt(_,K,ot)):(At(_,(y<<1)+(ut?1:0),3),ge(_,_.l_desc.max_code+1,_.d_desc.max_code+1,d+1),Mt(_,_.dyn_ltree,_.dyn_dtree)),Gt(_),ut&&Qt(_)}function we(_,Y,Q){return _.pending_buf[_.d_buf+_.last_lit*2]=Y>>>8&255,_.pending_buf[_.d_buf+_.last_lit*2+1]=Y&255,_.pending_buf[_.l_buf+_.last_lit]=Q&255,_.last_lit++,Y===0?_.dyn_ltree[Q*2]++:(_.matches++,Y--,_.dyn_ltree[(nt[Q]+g+1)*2]++,_.dyn_dtree[It(Y)*2]++),_.last_lit===_.lit_bufsize-1}i._tr_init=ue,i._tr_stored_block=ce,i._tr_flush_block=he,i._tr_tally=we,i._tr_align=Xt},{"../utils/common":41}],53:[function(e,r,i){function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}r.exports=n},{}],54:[function(e,r,i){(function(n){(function(s,h){if(s.setImmediate)return;var c=1,l={},f=!1,p=s.document,b;function y(H){typeof H!="function"&&(H=new Function(""+H));for(var k=new Array(arguments.length-1),N=0;N<k.length;N++)k[N]=arguments[N+1];var j={callback:H,args:k};return l[c]=j,b(c),c++}function R(H){delete l[H]}function A(H){var k=H.callback,N=H.args;switch(N.length){case 0:k();break;case 1:k(N[0]);break;case 2:k(N[0],N[1]);break;case 3:k(N[0],N[1],N[2]);break;default:k.apply(h,N);break}}function u(H){if(f)setTimeout(u,0,H);else{var k=l[H];if(k){f=!0;try{A(k)}finally{R(H),f=!1}}}}function g(){b=function(H){process.nextTick(function(){u(H)})}}function M(){if(s.postMessage&&!s.importScripts){var H=!0,k=s.onmessage;return s.onmessage=function(){H=!1},s.postMessage("","*"),s.onmessage=k,H}}function E(){var H="setImmediate$"+Math.random()+"$",k=function(N){N.source===s&&typeof N.data=="string"&&N.data.indexOf(H)===0&&u(+N.data.slice(H.length))};s.addEventListener?s.addEventListener("message",k,!1):s.attachEvent("onmessage",k),b=function(N){s.postMessage(H+N,"*")}}function B(){var H=new MessageChannel;H.port1.onmessage=function(k){var N=k.data;u(N)},b=function(k){H.port2.postMessage(k)}}function w(){var H=p.documentElement;b=function(k){var N=p.createElement("script");N.onreadystatechange=function(){u(k),N.onreadystatechange=null,H.removeChild(N),N=null},H.appendChild(N)}}function T(){b=function(H){setTimeout(u,0,H)}}var L=Object.getPrototypeOf&&Object.getPrototypeOf(s);L=L&&L.setTimeout?L:s,{}.toString.call(s.process)==="[object process]"?g():M()?E():s.MessageChannel?B():p&&"onreadystatechange"in p.createElement("script")?w():T(),L.setImmediate=y,L.clearImmediate=R})(typeof self>"u"?typeof n>"u"?this:n:self)}).call(this,typeof xe<"u"?xe:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(p1)),p1.exports}var wh=xh();const bh=Ye(wh);let Ah=class{constructor(){this.zip=void 0,this.urlCache={},this.checkRequirements()}checkRequirements(){try{this.zip=new bh}catch{throw new Error("JSZip lib not loaded")}}open(t,e){return this.zip.loadAsync(t,{base64:e})}openUrl(t,e){return ia(t,"binary").then((function(r){return this.zip.loadAsync(r,{base64:e})}).bind(this))}request(t,e){var r=new Bt,i,n=new Ne(t);return e||(e=n.extension),e=="blob"?i=this.getBlob(t):i=this.getText(t),i?i.then((function(s){let h=this.handleResponse(s,e);r.resolve(h)}).bind(this)):r.reject({message:"File not found in the epub: "+t,stack:new Error().stack}),r.promise}handleResponse(t,e){var r;return e=="json"?r=JSON.parse(t):ra(e)?r=De(t,"text/xml"):e=="xhtml"?r=De(t,"application/xhtml+xml"):e=="html"||e=="htm"?r=De(t,"text/html"):r=t,r}getBlob(t,e){var r=window.decodeURIComponent(t.substr(1)),i=this.zip.file(r);if(i)return e=e||je.lookup(i.name),i.async("uint8array").then(function(n){return new Blob([n],{type:e})})}getText(t,e){var r=window.decodeURIComponent(t.substr(1)),i=this.zip.file(r);if(i)return i.async("string").then(function(n){return n})}getBase64(t,e){var r=window.decodeURIComponent(t.substr(1)),i=this.zip.file(r);if(i)return e=e||je.lookup(i.name),i.async("base64").then(function(n){return"data:"+e+";base64,"+n})}createUrl(t,e){var r=new Bt,i=window.URL||window.webkitURL||window.mozURL,n,s,h=e&&e.base64;return t in this.urlCache?(r.resolve(this.urlCache[t]),r.promise):(h?(s=this.getBase64(t),s&&s.then((function(c){this.urlCache[t]=c,r.resolve(c)}).bind(this))):(s=this.getBlob(t),s&&s.then((function(c){n=i.createObjectURL(c),this.urlCache[t]=n,r.resolve(n)}).bind(this))),s||r.reject({message:"File not found in the epub: "+t,stack:new Error().stack}),r.promise)}revokeUrl(t){var e=window.URL||window.webkitURL||window.mozURL,r=this.urlCache[t];r&&e.revokeObjectURL(r)}destroy(){var t=window.URL||window.webkitURL||window.mozURL;for(let e in this.urlCache)t.revokeObjectURL(e);this.zip=void 0,this.urlCache={}}};var f1={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/var V2;function Ch(){return V2||(V2=1,(function(v,t){(function(e){v.exports=e()})(function(){return(function e(r,i,n){function s(l,f){if(!i[l]){if(!r[l]){var p=typeof Oe=="function"&&Oe;if(!f&&p)return p(l,!0);if(h)return h(l,!0);var b=new Error("Cannot find module '"+l+"'");throw b.code="MODULE_NOT_FOUND",b}var y=i[l]={exports:{}};r[l][0].call(y.exports,function(R){var A=r[l][1][R];return s(A||R)},y,y.exports,e,r,i,n)}return i[l].exports}for(var h=typeof Oe=="function"&&Oe,c=0;c<n.length;c++)s(n[c]);return s})({1:[function(e,r,i){(function(n){var s=n.MutationObserver||n.WebKitMutationObserver,h;if(s){var c=0,l=new s(R),f=n.document.createTextNode("");l.observe(f,{characterData:!0}),h=function(){f.data=c=++c%2}}else if(!n.setImmediate&&typeof n.MessageChannel<"u"){var p=new n.MessageChannel;p.port1.onmessage=R,h=function(){p.port2.postMessage(0)}}else"document"in n&&"onreadystatechange"in n.document.createElement("script")?h=function(){var u=n.document.createElement("script");u.onreadystatechange=function(){R(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},n.document.documentElement.appendChild(u)}:h=function(){setTimeout(R,0)};var b,y=[];function R(){b=!0;for(var u,g,M=y.length;M;){for(g=y,y=[],u=-1;++u<M;)g[u]();M=y.length}b=!1}r.exports=A;function A(u){y.push(u)===1&&!b&&h()}}).call(this,typeof xe<"u"?xe:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(e,r,i){var n=e(1);function s(){}var h={},c=["REJECTED"],l=["FULFILLED"],f=["PENDING"];r.exports=p;function p(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,w!==s&&A(this,w)}p.prototype.catch=function(w){return this.then(null,w)},p.prototype.then=function(w,T){if(typeof w!="function"&&this.state===l||typeof T!="function"&&this.state===c)return this;var L=new this.constructor(s);if(this.state!==f){var H=this.state===l?w:T;y(L,H,this.outcome)}else this.queue.push(new b(L,w,T));return L};function b(w,T,L){this.promise=w,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof L=="function"&&(this.onRejected=L,this.callRejected=this.otherCallRejected)}b.prototype.callFulfilled=function(w){h.resolve(this.promise,w)},b.prototype.otherCallFulfilled=function(w){y(this.promise,this.onFulfilled,w)},b.prototype.callRejected=function(w){h.reject(this.promise,w)},b.prototype.otherCallRejected=function(w){y(this.promise,this.onRejected,w)};function y(w,T,L){n(function(){var H;try{H=T(L)}catch(k){return h.reject(w,k)}H===w?h.reject(w,new TypeError("Cannot resolve promise with itself")):h.resolve(w,H)})}h.resolve=function(w,T){var L=u(R,T);if(L.status==="error")return h.reject(w,L.value);var H=L.value;if(H)A(w,H);else{w.state=l,w.outcome=T;for(var k=-1,N=w.queue.length;++k<N;)w.queue[k].callFulfilled(T)}return w},h.reject=function(w,T){w.state=c,w.outcome=T;for(var L=-1,H=w.queue.length;++L<H;)w.queue[L].callRejected(T);return w};function R(w){var T=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof T=="function")return function(){T.apply(w,arguments)}}function A(w,T){var L=!1;function H(q){L||(L=!0,h.reject(w,q))}function k(q){L||(L=!0,h.resolve(w,q))}function N(){T(k,H)}var j=u(N);j.status==="error"&&H(j.value)}function u(w,T){var L={};try{L.value=w(T),L.status="success"}catch(H){L.status="error",L.value=H}return L}p.resolve=g;function g(w){return w instanceof this?w:h.resolve(new this(s),w)}p.reject=M;function M(w){var T=new this(s);return h.reject(T,w)}p.all=E;function E(w){var T=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,H=!1;if(!L)return this.resolve([]);for(var k=new Array(L),N=0,j=-1,q=new this(s);++j<L;)G(w[j],j);return q;function G(at,tt){T.resolve(at).then(lt,function(et){H||(H=!0,h.reject(q,et))});function lt(et){k[tt]=et,++N===L&&!H&&(H=!0,h.resolve(q,k))}}}p.race=B;function B(w){var T=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var L=w.length,H=!1;if(!L)return this.resolve([]);for(var k=-1,N=new this(s);++k<L;)j(w[k]);return N;function j(q){T.resolve(q).then(function(G){H||(H=!0,h.resolve(N,G))},function(G){H||(H=!0,h.reject(N,G))})}}},{1:1}],3:[function(e,r,i){(function(n){typeof n.Promise!="function"&&(n.Promise=e(2))}).call(this,typeof xe<"u"?xe:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(e,r,i){var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C};function s(C,I){if(!(C instanceof I))throw new TypeError("Cannot call a class as a function")}function h(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var c=h();function l(){try{if(!c||!c.open)return!1;var C=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),I=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!C||I)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function f(C,I){C=C||[],I=I||{};try{return new Blob(C,I)}catch(z){if(z.name!=="TypeError")throw z;for(var S=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,U=new S,Z=0;Z<C.length;Z+=1)U.append(C[Z]);return U.getBlob(I.type)}}typeof Promise>"u"&&e(3);var p=Promise;function b(C,I){I&&C.then(function(S){I(null,S)},function(S){I(S)})}function y(C,I,S){typeof I=="function"&&C.then(I),typeof S=="function"&&C.catch(S)}function R(C){return typeof C!="string"&&(console.warn(C+" used as a key, but it is not a string."),C=String(C)),C}function A(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var u="local-forage-detect-blob-support",g=void 0,M={},E=Object.prototype.toString,B="readonly",w="readwrite";function T(C){for(var I=C.length,S=new ArrayBuffer(I),U=new Uint8Array(S),Z=0;Z<I;Z++)U[Z]=C.charCodeAt(Z);return S}function L(C){return new p(function(I){var S=C.transaction(u,w),U=f([""]);S.objectStore(u).put(U,"key"),S.onabort=function(Z){Z.preventDefault(),Z.stopPropagation(),I(!1)},S.oncomplete=function(){var Z=navigator.userAgent.match(/Chrome\/(\d+)/),z=navigator.userAgent.match(/Edge\//);I(z||!Z||parseInt(Z[1],10)>=43)}}).catch(function(){return!1})}function H(C){return typeof g=="boolean"?p.resolve(g):L(C).then(function(I){return g=I,g})}function k(C){var I=M[C.name],S={};S.promise=new p(function(U,Z){S.resolve=U,S.reject=Z}),I.deferredOperations.push(S),I.dbReady?I.dbReady=I.dbReady.then(function(){return S.promise}):I.dbReady=S.promise}function N(C){var I=M[C.name],S=I.deferredOperations.pop();if(S)return S.resolve(),S.promise}function j(C,I){var S=M[C.name],U=S.deferredOperations.pop();if(U)return U.reject(I),U.promise}function q(C,I){return new p(function(S,U){if(M[C.name]=M[C.name]||ft(),C.db)if(I)k(C),C.db.close();else return S(C.db);var Z=[C.name];I&&Z.push(C.version);var z=c.open.apply(c,Z);I&&(z.onupgradeneeded=function($){var J=z.result;try{J.createObjectStore(C.storeName),$.oldVersion<=1&&J.createObjectStore(u)}catch(rt){if(rt.name==="ConstraintError")console.warn('The database "'+C.name+'" has been upgraded from version '+$.oldVersion+" to version "+$.newVersion+', but the storage "'+C.storeName+'" already exists.');else throw rt}}),z.onerror=function($){$.preventDefault(),U(z.error)},z.onsuccess=function(){var $=z.result;$.onversionchange=function(J){J.target.close()},S($),N(C)}})}function G(C){return q(C,!1)}function at(C){return q(C,!0)}function tt(C,I){if(!C.db)return!0;var S=!C.db.objectStoreNames.contains(C.storeName),U=C.version<C.db.version,Z=C.version>C.db.version;if(U&&(C.version!==I&&console.warn('The database "'+C.name+`" can't be downgraded from version `+C.db.version+" to version "+C.version+"."),C.version=C.db.version),Z||S){if(S){var z=C.db.version+1;z>C.version&&(C.version=z)}return!0}return!1}function lt(C){return new p(function(I,S){var U=new FileReader;U.onerror=S,U.onloadend=function(Z){var z=btoa(Z.target.result||"");I({__local_forage_encoded_blob:!0,data:z,type:C.type})},U.readAsBinaryString(C)})}function et(C){var I=T(atob(C.data));return f([I],{type:C.type})}function K(C){return C&&C.__local_forage_encoded_blob}function ot(C){var I=this,S=I._initReady().then(function(){var U=M[I._dbInfo.name];if(U&&U.dbReady)return U.dbReady});return y(S,C,C),S}function yt(C){k(C);for(var I=M[C.name],S=I.forages,U=0;U<S.length;U++){var Z=S[U];Z._dbInfo.db&&(Z._dbInfo.db.close(),Z._dbInfo.db=null)}return C.db=null,G(C).then(function(z){return C.db=z,tt(C)?at(C):z}).then(function(z){C.db=I.db=z;for(var $=0;$<S.length;$++)S[$]._dbInfo.db=z}).catch(function(z){throw j(C,z),z})}function nt(C,I,S,U){U===void 0&&(U=1);try{var Z=C.db.transaction(C.storeName,I);S(null,Z)}catch(z){if(U>0&&(!C.db||z.name==="InvalidStateError"||z.name==="NotFoundError"))return p.resolve().then(function(){if(!C.db||z.name==="NotFoundError"&&!C.db.objectStoreNames.contains(C.storeName)&&C.version<=C.db.version)return C.db&&(C.version=C.db.version+1),at(C)}).then(function(){return yt(C).then(function(){nt(C,I,S,U-1)})}).catch(S);S(z)}}function ft(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Et(C){var I=this,S={db:null};if(C)for(var U in C)S[U]=C[U];var Z=M[S.name];Z||(Z=ft(),M[S.name]=Z),Z.forages.push(I),I._initReady||(I._initReady=I.ready,I.ready=ot);var z=[];function $(){return p.resolve()}for(var J=0;J<Z.forages.length;J++){var rt=Z.forages[J];rt!==I&&z.push(rt._initReady().catch($))}var it=Z.forages.slice(0);return p.all(z).then(function(){return S.db=Z.db,G(S)}).then(function(ht){return S.db=ht,tt(S,I._defaultConfig.version)?at(S):ht}).then(function(ht){S.db=Z.db=ht,I._dbInfo=S;for(var vt=0;vt<it.length;vt++){var Dt=it[vt];Dt!==I&&(Dt._dbInfo.db=S.db,Dt._dbInfo.version=S.version)}})}function mt(C,I){var S=this;C=R(C);var U=new p(function(Z,z){S.ready().then(function(){nt(S._dbInfo,B,function($,J){if($)return z($);try{var rt=J.objectStore(S._dbInfo.storeName),it=rt.get(C);it.onsuccess=function(){var ht=it.result;ht===void 0&&(ht=null),K(ht)&&(ht=et(ht)),Z(ht)},it.onerror=function(){z(it.error)}}catch(ht){z(ht)}})}).catch(z)});return b(U,I),U}function Tt(C,I){var S=this,U=new p(function(Z,z){S.ready().then(function(){nt(S._dbInfo,B,function($,J){if($)return z($);try{var rt=J.objectStore(S._dbInfo.storeName),it=rt.openCursor(),ht=1;it.onsuccess=function(){var vt=it.result;if(vt){var Dt=vt.value;K(Dt)&&(Dt=et(Dt));var zt=C(Dt,vt.key,ht++);zt!==void 0?Z(zt):vt.continue()}else Z()},it.onerror=function(){z(it.error)}}catch(vt){z(vt)}})}).catch(z)});return b(U,I),U}function jt(C,I,S){var U=this;C=R(C);var Z=new p(function(z,$){var J;U.ready().then(function(){return J=U._dbInfo,E.call(I)==="[object Blob]"?H(J.db).then(function(rt){return rt?I:lt(I)}):I}).then(function(rt){nt(U._dbInfo,w,function(it,ht){if(it)return $(it);try{var vt=ht.objectStore(U._dbInfo.storeName);rt===null&&(rt=void 0);var Dt=vt.put(rt,C);ht.oncomplete=function(){rt===void 0&&(rt=null),z(rt)},ht.onabort=ht.onerror=function(){var zt=Dt.error?Dt.error:Dt.transaction.error;$(zt)}}catch(zt){$(zt)}})}).catch($)});return b(Z,S),Z}function Pt(C,I){var S=this;C=R(C);var U=new p(function(Z,z){S.ready().then(function(){nt(S._dbInfo,w,function($,J){if($)return z($);try{var rt=J.objectStore(S._dbInfo.storeName),it=rt.delete(C);J.oncomplete=function(){Z()},J.onerror=function(){z(it.error)},J.onabort=function(){var ht=it.error?it.error:it.transaction.error;z(ht)}}catch(ht){z(ht)}})}).catch(z)});return b(U,I),U}function gt(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){nt(I._dbInfo,w,function(z,$){if(z)return Z(z);try{var J=$.objectStore(I._dbInfo.storeName),rt=J.clear();$.oncomplete=function(){U()},$.onabort=$.onerror=function(){var it=rt.error?rt.error:rt.transaction.error;Z(it)}}catch(it){Z(it)}})}).catch(Z)});return b(S,C),S}function It(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){nt(I._dbInfo,B,function(z,$){if(z)return Z(z);try{var J=$.objectStore(I._dbInfo.storeName),rt=J.count();rt.onsuccess=function(){U(rt.result)},rt.onerror=function(){Z(rt.error)}}catch(it){Z(it)}})}).catch(Z)});return b(S,C),S}function Ut(C,I){var S=this,U=new p(function(Z,z){if(C<0){Z(null);return}S.ready().then(function(){nt(S._dbInfo,B,function($,J){if($)return z($);try{var rt=J.objectStore(S._dbInfo.storeName),it=!1,ht=rt.openKeyCursor();ht.onsuccess=function(){var vt=ht.result;if(!vt){Z(null);return}C===0||it?Z(vt.key):(it=!0,vt.advance(C))},ht.onerror=function(){z(ht.error)}}catch(vt){z(vt)}})}).catch(z)});return b(U,I),U}function At(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){nt(I._dbInfo,B,function(z,$){if(z)return Z(z);try{var J=$.objectStore(I._dbInfo.storeName),rt=J.openKeyCursor(),it=[];rt.onsuccess=function(){var ht=rt.result;if(!ht){U(it);return}it.push(ht.key),ht.continue()},rt.onerror=function(){Z(rt.error)}}catch(ht){Z(ht)}})}).catch(Z)});return b(S,C),S}function kt(C,I){I=A.apply(this,arguments);var S=this.config();C=typeof C!="function"&&C||{},C.name||(C.name=C.name||S.name,C.storeName=C.storeName||S.storeName);var U=this,Z;if(!C.name)Z=p.reject("Invalid arguments");else{var z=C.name===S.name&&U._dbInfo.db,$=z?p.resolve(U._dbInfo.db):G(C).then(function(J){var rt=M[C.name],it=rt.forages;rt.db=J;for(var ht=0;ht<it.length;ht++)it[ht]._dbInfo.db=J;return J});C.storeName?Z=$.then(function(J){if(J.objectStoreNames.contains(C.storeName)){var rt=J.version+1;k(C);var it=M[C.name],ht=it.forages;J.close();for(var vt=0;vt<ht.length;vt++){var Dt=ht[vt];Dt._dbInfo.db=null,Dt._dbInfo.version=rt}var zt=new p(function(Ft,ee){var Jt=c.open(C.name,rt);Jt.onerror=function(Me){var Je=Jt.result;Je.close(),ee(Me)},Jt.onupgradeneeded=function(){var Me=Jt.result;Me.deleteObjectStore(C.storeName)},Jt.onsuccess=function(){var Me=Jt.result;Me.close(),Ft(Me)}});return zt.then(function(Ft){it.db=Ft;for(var ee=0;ee<ht.length;ee++){var Jt=ht[ee];Jt._dbInfo.db=Ft,N(Jt._dbInfo)}}).catch(function(Ft){throw(j(C,Ft)||p.resolve()).catch(function(){}),Ft})}}):Z=$.then(function(J){k(C);var rt=M[C.name],it=rt.forages;J.close();for(var ht=0;ht<it.length;ht++){var vt=it[ht];vt._dbInfo.db=null}var Dt=new p(function(zt,Ft){var ee=c.deleteDatabase(C.name);ee.onerror=function(){var Jt=ee.result;Jt&&Jt.close(),Ft(ee.error)},ee.onblocked=function(){console.warn('dropInstance blocked for database "'+C.name+'" until all open connections are closed')},ee.onsuccess=function(){var Jt=ee.result;Jt&&Jt.close(),zt(Jt)}});return Dt.then(function(zt){rt.db=zt;for(var Ft=0;Ft<it.length;Ft++){var ee=it[Ft];N(ee._dbInfo)}}).catch(function(zt){throw(j(C,zt)||p.resolve()).catch(function(){}),zt})})}return b(Z,I),Z}var St={_driver:"asyncStorage",_initStorage:Et,_support:l(),iterate:Tt,getItem:mt,setItem:jt,removeItem:Pt,clear:gt,length:It,key:Ut,keys:At,dropInstance:kt};function Rt(){return typeof openDatabase=="function"}var qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vt="~~local_forage_type~",Lt=/^~~local_forage_type~([^~]+)~/,Gt="__lfsc__:",Qt=Gt.length,Kt="arbf",xt="blob",bt="si08",Mt="ui08",ae="uic8",fe="si16",de="si32",te="ur16",ge="ui32",le="fl32",se="fl64",ue=Qt+Kt.length,ce=Object.prototype.toString;function Xt(C){var I=C.length*.75,S=C.length,U,Z=0,z,$,J,rt;C[C.length-1]==="="&&(I--,C[C.length-2]==="="&&I--);var it=new ArrayBuffer(I),ht=new Uint8Array(it);for(U=0;U<S;U+=4)z=qt.indexOf(C[U]),$=qt.indexOf(C[U+1]),J=qt.indexOf(C[U+2]),rt=qt.indexOf(C[U+3]),ht[Z++]=z<<2|$>>4,ht[Z++]=($&15)<<4|J>>2,ht[Z++]=(J&3)<<6|rt&63;return it}function he(C){var I=new Uint8Array(C),S="",U;for(U=0;U<I.length;U+=3)S+=qt[I[U]>>2],S+=qt[(I[U]&3)<<4|I[U+1]>>4],S+=qt[(I[U+1]&15)<<2|I[U+2]>>6],S+=qt[I[U+2]&63];return I.length%3===2?S=S.substring(0,S.length-1)+"=":I.length%3===1&&(S=S.substring(0,S.length-2)+"=="),S}function we(C,I){var S="";if(C&&(S=ce.call(C)),C&&(S==="[object ArrayBuffer]"||C.buffer&&ce.call(C.buffer)==="[object ArrayBuffer]")){var U,Z=Gt;C instanceof ArrayBuffer?(U=C,Z+=Kt):(U=C.buffer,S==="[object Int8Array]"?Z+=bt:S==="[object Uint8Array]"?Z+=Mt:S==="[object Uint8ClampedArray]"?Z+=ae:S==="[object Int16Array]"?Z+=fe:S==="[object Uint16Array]"?Z+=te:S==="[object Int32Array]"?Z+=de:S==="[object Uint32Array]"?Z+=ge:S==="[object Float32Array]"?Z+=le:S==="[object Float64Array]"?Z+=se:I(new Error("Failed to get type for BinaryArray"))),I(Z+he(U))}else if(S==="[object Blob]"){var z=new FileReader;z.onload=function(){var $=Vt+C.type+"~"+he(this.result);I(Gt+xt+$)},z.readAsArrayBuffer(C)}else try{I(JSON.stringify(C))}catch($){console.error("Couldn't convert value into a JSON string: ",C),I(null,$)}}function _(C){if(C.substring(0,Qt)!==Gt)return JSON.parse(C);var I=C.substring(ue),S=C.substring(Qt,ue),U;if(S===xt&&Lt.test(I)){var Z=I.match(Lt);U=Z[1],I=I.substring(Z[0].length)}var z=Xt(I);switch(S){case Kt:return z;case xt:return f([z],{type:U});case bt:return new Int8Array(z);case Mt:return new Uint8Array(z);case ae:return new Uint8ClampedArray(z);case fe:return new Int16Array(z);case te:return new Uint16Array(z);case de:return new Int32Array(z);case ge:return new Uint32Array(z);case le:return new Float32Array(z);case se:return new Float64Array(z);default:throw new Error("Unkown type: "+S)}}var Y={serialize:we,deserialize:_,stringToBuffer:Xt,bufferToString:he};function Q(C,I,S,U){C.executeSql("CREATE TABLE IF NOT EXISTS "+I.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],S,U)}function ut(C){var I=this,S={db:null};if(C)for(var U in C)S[U]=typeof C[U]!="string"?C[U].toString():C[U];var Z=new p(function(z,$){try{S.db=openDatabase(S.name,String(S.version),S.description,S.size)}catch(J){return $(J)}S.db.transaction(function(J){Q(J,S,function(){I._dbInfo=S,z()},function(rt,it){$(it)})},$)});return S.serializer=Y,Z}function P(C,I,S,U,Z,z){C.executeSql(S,U,Z,function($,J){J.code===J.SYNTAX_ERR?$.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[I.storeName],function(rt,it){it.rows.length?z(rt,J):Q(rt,I,function(){rt.executeSql(S,U,Z,z)},z)},z):z($,J)},z)}function X(C,I){var S=this;C=R(C);var U=new p(function(Z,z){S.ready().then(function(){var $=S._dbInfo;$.db.transaction(function(J){P(J,$,"SELECT * FROM "+$.storeName+" WHERE key = ? LIMIT 1",[C],function(rt,it){var ht=it.rows.length?it.rows.item(0).value:null;ht&&(ht=$.serializer.deserialize(ht)),Z(ht)},function(rt,it){z(it)})})}).catch(z)});return b(U,I),U}function d(C,I){var S=this,U=new p(function(Z,z){S.ready().then(function(){var $=S._dbInfo;$.db.transaction(function(J){P(J,$,"SELECT * FROM "+$.storeName,[],function(rt,it){for(var ht=it.rows,vt=ht.length,Dt=0;Dt<vt;Dt++){var zt=ht.item(Dt),Ft=zt.value;if(Ft&&(Ft=$.serializer.deserialize(Ft)),Ft=C(Ft,zt.key,Dt+1),Ft!==void 0){Z(Ft);return}}Z()},function(rt,it){z(it)})})}).catch(z)});return b(U,I),U}function m(C,I,S,U){var Z=this;C=R(C);var z=new p(function($,J){Z.ready().then(function(){I===void 0&&(I=null);var rt=I,it=Z._dbInfo;it.serializer.serialize(I,function(ht,vt){vt?J(vt):it.db.transaction(function(Dt){P(Dt,it,"INSERT OR REPLACE INTO "+it.storeName+" (key, value) VALUES (?, ?)",[C,ht],function(){$(rt)},function(zt,Ft){J(Ft)})},function(Dt){if(Dt.code===Dt.QUOTA_ERR){if(U>0){$(m.apply(Z,[C,rt,S,U-1]));return}J(Dt)}})})}).catch(J)});return b(z,S),z}function D(C,I,S){return m.apply(this,[C,I,S,1])}function o(C,I){var S=this;C=R(C);var U=new p(function(Z,z){S.ready().then(function(){var $=S._dbInfo;$.db.transaction(function(J){P(J,$,"DELETE FROM "+$.storeName+" WHERE key = ?",[C],function(){Z()},function(rt,it){z(it)})})}).catch(z)});return b(U,I),U}function O(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){var z=I._dbInfo;z.db.transaction(function($){P($,z,"DELETE FROM "+z.storeName,[],function(){U()},function(J,rt){Z(rt)})})}).catch(Z)});return b(S,C),S}function F(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){var z=I._dbInfo;z.db.transaction(function($){P($,z,"SELECT COUNT(key) as c FROM "+z.storeName,[],function(J,rt){var it=rt.rows.item(0).c;U(it)},function(J,rt){Z(rt)})})}).catch(Z)});return b(S,C),S}function x(C,I){var S=this,U=new p(function(Z,z){S.ready().then(function(){var $=S._dbInfo;$.db.transaction(function(J){P(J,$,"SELECT key FROM "+$.storeName+" WHERE id = ? LIMIT 1",[C+1],function(rt,it){var ht=it.rows.length?it.rows.item(0).key:null;Z(ht)},function(rt,it){z(it)})})}).catch(z)});return b(U,I),U}function V(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){var z=I._dbInfo;z.db.transaction(function($){P($,z,"SELECT key FROM "+z.storeName,[],function(J,rt){for(var it=[],ht=0;ht<rt.rows.length;ht++)it.push(rt.rows.item(ht).key);U(it)},function(J,rt){Z(rt)})})}).catch(Z)});return b(S,C),S}function W(C){return new p(function(I,S){C.transaction(function(U){U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(Z,z){for(var $=[],J=0;J<z.rows.length;J++)$.push(z.rows.item(J).name);I({db:C,storeNames:$})},function(Z,z){S(z)})},function(U){S(U)})})}function pt(C,I){I=A.apply(this,arguments);var S=this.config();C=typeof C!="function"&&C||{},C.name||(C.name=C.name||S.name,C.storeName=C.storeName||S.storeName);var U=this,Z;return C.name?Z=new p(function(z){var $;C.name===S.name?$=U._dbInfo.db:$=openDatabase(C.name,"","",0),C.storeName?z({db:$,storeNames:[C.storeName]}):z(W($))}).then(function(z){return new p(function($,J){z.db.transaction(function(rt){function it(zt){return new p(function(Ft,ee){rt.executeSql("DROP TABLE IF EXISTS "+zt,[],function(){Ft()},function(Jt,Me){ee(Me)})})}for(var ht=[],vt=0,Dt=z.storeNames.length;vt<Dt;vt++)ht.push(it(z.storeNames[vt]));p.all(ht).then(function(){$()}).catch(function(zt){J(zt)})},function(rt){J(rt)})})}):Z=p.reject("Invalid arguments"),b(Z,I),Z}var st={_driver:"webSQLStorage",_initStorage:ut,_support:Rt(),iterate:d,getItem:X,setItem:D,removeItem:o,clear:O,length:F,key:x,keys:V,dropInstance:pt};function dt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function wt(C,I){var S=C.name+"/";return C.storeName!==I.storeName&&(S+=C.storeName+"/"),S}function re(){var C="_localforage_support_test";try{return localStorage.setItem(C,!0),localStorage.removeItem(C),!1}catch{return!0}}function Ht(){return!re()||localStorage.length>0}function Ct(C){var I=this,S={};if(C)for(var U in C)S[U]=C[U];return S.keyPrefix=wt(C,I._defaultConfig),Ht()?(I._dbInfo=S,S.serializer=Y,p.resolve()):p.reject()}function Zt(C){var I=this,S=I.ready().then(function(){for(var U=I._dbInfo.keyPrefix,Z=localStorage.length-1;Z>=0;Z--){var z=localStorage.key(Z);z.indexOf(U)===0&&localStorage.removeItem(z)}});return b(S,C),S}function Nt(C,I){var S=this;C=R(C);var U=S.ready().then(function(){var Z=S._dbInfo,z=localStorage.getItem(Z.keyPrefix+C);return z&&(z=Z.serializer.deserialize(z)),z});return b(U,I),U}function ie(C,I){var S=this,U=S.ready().then(function(){for(var Z=S._dbInfo,z=Z.keyPrefix,$=z.length,J=localStorage.length,rt=1,it=0;it<J;it++){var ht=localStorage.key(it);if(ht.indexOf(z)===0){var vt=localStorage.getItem(ht);if(vt&&(vt=Z.serializer.deserialize(vt)),vt=C(vt,ht.substring($),rt++),vt!==void 0)return vt}}});return b(U,I),U}function ve(C,I){var S=this,U=S.ready().then(function(){var Z=S._dbInfo,z;try{z=localStorage.key(C)}catch{z=null}return z&&(z=z.substring(Z.keyPrefix.length)),z});return b(U,I),U}function ke(C){var I=this,S=I.ready().then(function(){for(var U=I._dbInfo,Z=localStorage.length,z=[],$=0;$<Z;$++){var J=localStorage.key($);J.indexOf(U.keyPrefix)===0&&z.push(J.substring(U.keyPrefix.length))}return z});return b(S,C),S}function $t(C){var I=this,S=I.keys().then(function(U){return U.length});return b(S,C),S}function pe(C,I){var S=this;C=R(C);var U=S.ready().then(function(){var Z=S._dbInfo;localStorage.removeItem(Z.keyPrefix+C)});return b(U,I),U}function ne(C,I,S){var U=this;C=R(C);var Z=U.ready().then(function(){I===void 0&&(I=null);var z=I;return new p(function($,J){var rt=U._dbInfo;rt.serializer.serialize(I,function(it,ht){if(ht)J(ht);else try{localStorage.setItem(rt.keyPrefix+C,it),$(z)}catch(vt){(vt.name==="QuotaExceededError"||vt.name==="NS_ERROR_DOM_QUOTA_REACHED")&&J(vt),J(vt)}})})});return b(Z,S),Z}function be(C,I){if(I=A.apply(this,arguments),C=typeof C!="function"&&C||{},!C.name){var S=this.config();C.name=C.name||S.name,C.storeName=C.storeName||S.storeName}var U=this,Z;return C.name?Z=new p(function(z){C.storeName?z(wt(C,U._defaultConfig)):z(C.name+"/")}).then(function(z){for(var $=localStorage.length-1;$>=0;$--){var J=localStorage.key($);J.indexOf(z)===0&&localStorage.removeItem(J)}}):Z=p.reject("Invalid arguments"),b(Z,I),Z}var me={_driver:"localStorageWrapper",_initStorage:Ct,_support:dt(),iterate:ie,getItem:Nt,setItem:ne,removeItem:pe,clear:Zt,length:$t,key:ve,keys:ke,dropInstance:be},na=function(I,S){return I===S||typeof I=="number"&&typeof S=="number"&&isNaN(I)&&isNaN(S)},Gs=function(I,S){for(var U=I.length,Z=0;Z<U;){if(na(I[Z],S))return!0;Z++}return!1},I1=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"},Ke={},P1={},Ie={INDEXEDDB:St,WEBSQL:st,LOCALSTORAGE:me},Xs=[Ie.INDEXEDDB._driver,Ie.WEBSQL._driver,Ie.LOCALSTORAGE._driver],sa=["dropInstance"],Ca=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(sa),$s={description:"",driver:Xs.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ys(C,I){C[I]=function(){var S=arguments;return C.ready().then(function(){return C[I].apply(C,S)})}}function _a(){for(var C=1;C<arguments.length;C++){var I=arguments[C];if(I)for(var S in I)I.hasOwnProperty(S)&&(I1(I[S])?arguments[0][S]=I[S].slice():arguments[0][S]=I[S])}return arguments[0]}var Ks=(function(){function C(I){s(this,C);for(var S in Ie)if(Ie.hasOwnProperty(S)){var U=Ie[S],Z=U._driver;this[S]=Z,Ke[Z]||this.defineDriver(U)}this._defaultConfig=_a({},$s),this._config=_a({},this._defaultConfig,I),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return C.prototype.config=function(S){if((typeof S>"u"?"undefined":n(S))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var U in S){if(U==="storeName"&&(S[U]=S[U].replace(/\W/g,"_")),U==="version"&&typeof S[U]!="number")return new Error("Database version must be a number.");this._config[U]=S[U]}return"driver"in S&&S.driver?this.setDriver(this._config.driver):!0}else return typeof S=="string"?this._config[S]:this._config},C.prototype.defineDriver=function(S,U,Z){var z=new p(function($,J){try{var rt=S._driver,it=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!S._driver){J(it);return}for(var ht=Ca.concat("_initStorage"),vt=0,Dt=ht.length;vt<Dt;vt++){var zt=ht[vt],Ft=!Gs(sa,zt);if((Ft||S[zt])&&typeof S[zt]!="function"){J(it);return}}var ee=function(){for(var Je=function(t0){return function(){var e0=new Error("Method "+t0+" is not implemented by the current driver"),z1=p.reject(e0);return b(z1,arguments[arguments.length-1]),z1}},Ea=0,Qs=sa.length;Ea<Qs;Ea++){var Sa=sa[Ea];S[Sa]||(S[Sa]=Je(Sa))}};ee();var Jt=function(Je){Ke[rt]&&console.info("Redefining LocalForage driver: "+rt),Ke[rt]=S,P1[rt]=Je,$()};"_support"in S?S._support&&typeof S._support=="function"?S._support().then(Jt,J):Jt(!!S._support):Jt(!0)}catch(Me){J(Me)}});return y(z,U,Z),z},C.prototype.driver=function(){return this._driver||null},C.prototype.getDriver=function(S,U,Z){var z=Ke[S]?p.resolve(Ke[S]):p.reject(new Error("Driver not found."));return y(z,U,Z),z},C.prototype.getSerializer=function(S){var U=p.resolve(Y);return y(U,S),U},C.prototype.ready=function(S){var U=this,Z=U._driverSet.then(function(){return U._ready===null&&(U._ready=U._initDriver()),U._ready});return y(Z,S,S),Z},C.prototype.setDriver=function(S,U,Z){var z=this;I1(S)||(S=[S]);var $=this._getSupportedDrivers(S);function J(){z._config.driver=z.driver()}function rt(vt){return z._extend(vt),J(),z._ready=z._initStorage(z._config),z._ready}function it(vt){return function(){var Dt=0;function zt(){for(;Dt<vt.length;){var Ft=vt[Dt];return Dt++,z._dbInfo=null,z._ready=null,z.getDriver(Ft).then(rt).catch(zt)}J();var ee=new Error("No available storage method found.");return z._driverSet=p.reject(ee),z._driverSet}return zt()}}var ht=this._driverSet!==null?this._driverSet.catch(function(){return p.resolve()}):p.resolve();return this._driverSet=ht.then(function(){var vt=$[0];return z._dbInfo=null,z._ready=null,z.getDriver(vt).then(function(Dt){z._driver=Dt._driver,J(),z._wrapLibraryMethodsWithReady(),z._initDriver=it($)})}).catch(function(){J();var vt=new Error("No available storage method found.");return z._driverSet=p.reject(vt),z._driverSet}),y(this._driverSet,U,Z),this._driverSet},C.prototype.supports=function(S){return!!P1[S]},C.prototype._extend=function(S){_a(this,S)},C.prototype._getSupportedDrivers=function(S){for(var U=[],Z=0,z=S.length;Z<z;Z++){var $=S[Z];this.supports($)&&U.push($)}return U},C.prototype._wrapLibraryMethodsWithReady=function(){for(var S=0,U=Ca.length;S<U;S++)Ys(this,Ca[S])},C.prototype.createInstance=function(S){return new C(S)},C})(),Js=new Ks;r.exports=Js},{3:3}]},{},[4])(4)})})(f1)),f1.exports}var _h=Ch();const I2=Ye(_h);let Us=class{constructor(t,e,r){this.urlCache={},this.storage=void 0,this.name=t,this.requester=e||ia,this.resolver=r,this.online=!0,this.checkRequirements(),this.addListeners()}checkRequirements(){try{let t;typeof I2>"u"&&(t=I2),this.storage=t.createInstance({name:this.name})}catch{throw new Error("localForage lib not loaded")}}addListeners(){this._status=this.status.bind(this),window.addEventListener("online",this._status),window.addEventListener("offline",this._status)}removeListeners(){window.removeEventListener("online",this._status),window.removeEventListener("offline",this._status),this._status=void 0}status(t){let e=navigator.onLine;this.online=e,e?this.emit("online",this):this.emit("offline",this)}add(t,e){let r=t.resources.map(i=>{let{href:n}=i,s=this.resolver(n),h=window.encodeURIComponent(s);return this.storage.getItem(h).then(c=>!c||e?this.requester(s,"binary").then(l=>this.storage.setItem(h,l)):c)});return Promise.all(r)}put(t,e,r){let i=window.encodeURIComponent(t);return this.storage.getItem(i).then(n=>n||this.requester(t,"binary",e,r).then(s=>this.storage.setItem(i,s)))}request(t,e,r,i){return this.online?this.requester(t,e,r,i).then(n=>(this.put(t),n)):this.retrieve(t,e)}retrieve(t,e){new Bt;var r,i=new Ne(t);return e||(e=i.extension),e=="blob"?r=this.getBlob(t):r=this.getText(t),r.then(n=>{var s=new Bt,h;return n?(h=this.handleResponse(n,e),s.resolve(h)):s.reject({message:"File not found in storage: "+t,stack:new Error().stack}),s.promise})}handleResponse(t,e){var r;return e=="json"?r=JSON.parse(t):ra(e)?r=De(t,"text/xml"):e=="xhtml"?r=De(t,"application/xhtml+xml"):e=="html"||e=="htm"?r=De(t,"text/html"):r=t,r}getBlob(t,e){let r=window.encodeURIComponent(t);return this.storage.getItem(r).then(function(i){if(i)return e=e||je.lookup(t),new Blob([i],{type:e})})}getText(t,e){let r=window.encodeURIComponent(t);return e=e||je.lookup(t),this.storage.getItem(r).then(function(i){var n=new Bt,s=new FileReader,h;if(i)return h=new Blob([i],{type:e}),s.addEventListener("loadend",()=>{n.resolve(s.result)}),s.readAsText(h,e),n.promise})}getBase64(t,e){let r=window.encodeURIComponent(t);return e=e||je.lookup(t),this.storage.getItem(r).then(i=>{var n=new Bt,s=new FileReader,h;if(i)return h=new Blob([i],{type:e}),s.addEventListener("loadend",()=>{n.resolve(s.result)}),s.readAsDataURL(h,e),n.promise})}createUrl(t,e){var r=new Bt,i=window.URL||window.webkitURL||window.mozURL,n,s,h=e&&e.base64;return t in this.urlCache?(r.resolve(this.urlCache[t]),r.promise):(h?(s=this.getBase64(t),s&&s.then((function(c){this.urlCache[t]=c,r.resolve(c)}).bind(this))):(s=this.getBlob(t),s&&s.then((function(c){n=i.createObjectURL(c),this.urlCache[t]=n,r.resolve(n)}).bind(this))),s||r.reject({message:"File not found in storage: "+t,stack:new Error().stack}),r.promise)}revokeUrl(t){var e=window.URL||window.webkitURL||window.mozURL,r=this.urlCache[t];r&&e.revokeObjectURL(r)}destroy(){var t=window.URL||window.webkitURL||window.mozURL;for(let e in this.urlCache)t.revokeObjectURL(e);this.urlCache={},this.removeListeners()}};Te(Us.prototype);class v1{constructor(t){this.interactive="",this.fixedLayout="",this.openToSpread="",this.orientationLock="",t&&this.parse(t)}parse(t){if(!t)return this;const e=Wt(t,"display_options");return e?(He(e,"option").forEach(i=>{let n="";switch(i.childNodes.length&&(n=i.childNodes[0].nodeValue),i.attributes.name.value){case"interactive":this.interactive=n;break;case"fixed-layout":this.fixedLayout=n;break;case"open-to-spread":this.openToSpread=n;break;case"orientation-lock":this.orientationLock=n;break}}),this):this}destroy(){this.interactive=void 0,this.fixedLayout=void 0,this.openToSpread=void 0,this.orientationLock=void 0}}const P2="META-INF/container.xml",Eh="META-INF/com.apple.ibooks.display-options.xml",Ce={BINARY:"binary",BASE64:"base64",EPUB:"epub",OPF:"opf",MANIFEST:"json",DIRECTORY:"directory"};let N1=class{constructor(t,e){typeof e>"u"&&typeof t!="string"&&!(t instanceof Blob)&&!(t instanceof ArrayBuffer)&&(e=t,t=void 0),this.settings=oe(this.settings||{},{requestMethod:void 0,requestCredentials:void 0,requestHeaders:void 0,encoding:void 0,replacements:void 0,canonical:void 0,openAs:void 0,store:void 0}),oe(this.settings,e),this.opening=new Bt,this.opened=this.opening.promise,this.isOpen=!1,this.loading={manifest:new Bt,spine:new Bt,metadata:new Bt,cover:new Bt,navigation:new Bt,pageList:new Bt,resources:new Bt,displayOptions:new Bt},this.loaded={manifest:this.loading.manifest.promise,spine:this.loading.spine.promise,metadata:this.loading.metadata.promise,cover:this.loading.cover.promise,navigation:this.loading.navigation.promise,pageList:this.loading.pageList.promise,resources:this.loading.resources.promise,displayOptions:this.loading.displayOptions.promise},this.ready=Promise.all([this.loaded.manifest,this.loaded.spine,this.loaded.metadata,this.loaded.cover,this.loaded.navigation,this.loaded.resources,this.loaded.displayOptions]),this.isRendered=!1,this.request=this.settings.requestMethod||ia,this.spine=new z0,this.locations=new Ns(this.spine,this.load.bind(this)),this.navigation=void 0,this.pageList=void 0,this.url=void 0,this.path=void 0,this.archived=!1,this.archive=void 0,this.storage=void 0,this.resources=void 0,this.rendition=void 0,this.container=void 0,this.packaging=void 0,this.displayOptions=void 0,this.settings.store&&this.store(this.settings.store),t&&this.open(t,this.settings.openAs).catch(r=>{var i=new Error("Cannot load book at "+t);this.emit(ct.BOOK.OPEN_FAILED,i)})}open(t,e){var r,i=e||this.determineType(t);return i===Ce.BINARY?(this.archived=!0,this.url=new Ee("/",""),r=this.openEpub(t)):i===Ce.BASE64?(this.archived=!0,this.url=new Ee("/",""),r=this.openEpub(t,i)):i===Ce.EPUB?(this.archived=!0,this.url=new Ee("/",""),r=this.request(t,"binary",this.settings.requestCredentials,this.settings.requestHeaders).then(this.openEpub.bind(this))):i==Ce.OPF?(this.url=new Ee(t),r=this.openPackaging(this.url.Path.toString())):i==Ce.MANIFEST?(this.url=new Ee(t),r=this.openManifest(this.url.Path.toString())):(this.url=new Ee(t),r=this.openContainer(P2).then(this.openPackaging.bind(this))),r}openEpub(t,e){return this.unarchive(t,e||this.settings.encoding).then(()=>this.openContainer(P2)).then(r=>this.openPackaging(r))}openContainer(t){return this.load(t).then(e=>(this.container=new F0(e),this.resolve(this.container.packagePath)))}openPackaging(t){return this.path=new Ne(t),this.load(t).then(e=>(this.packaging=new g2(e),this.unpack(this.packaging)))}openManifest(t){return this.path=new Ne(t),this.load(t).then(e=>(this.packaging=new g2,this.packaging.load(e),this.unpack(this.packaging)))}load(t){var e=this.resolve(t);return this.archived?this.archive.request(e):this.request(e,null,this.settings.requestCredentials,this.settings.requestHeaders)}resolve(t,e){if(t){var r=t,i=t.indexOf("://")>-1;return i?t:(this.path&&(r=this.path.resolve(t)),e!=!1&&this.url&&(r=this.url.resolve(r)),r)}}canonical(t){var e=t;return t?(this.settings.canonical?e=this.settings.canonical(t):e=this.resolve(t,!0),e):""}determineType(t){var e,r,i;if(this.settings.encoding==="base64")return Ce.BASE64;if(typeof t!="string")return Ce.BINARY;if(e=new Ee(t),r=e.path(),i=r.extension,i&&(i=i.replace(/\?.*$/,"")),!i)return Ce.DIRECTORY;if(i==="epub")return Ce.EPUB;if(i==="opf")return Ce.OPF;if(i==="json")return Ce.MANIFEST}unpack(t){this.package=t,this.packaging.metadata.layout===""?this.load(this.url.resolve(Eh)).then(e=>{this.displayOptions=new v1(e),this.loading.displayOptions.resolve(this.displayOptions)}).catch(e=>{this.displayOptions=new v1,this.loading.displayOptions.resolve(this.displayOptions)}):(this.displayOptions=new v1,this.loading.displayOptions.resolve(this.displayOptions)),this.spine.unpack(this.packaging,this.resolve.bind(this),this.canonical.bind(this)),this.resources=new W0(this.packaging.manifest,{archive:this.archive,resolver:this.resolve.bind(this),request:this.request.bind(this),replacements:this.settings.replacements||(this.archived?"blobUrl":"base64")}),this.loadNavigation(this.packaging).then(()=>{this.loading.navigation.resolve(this.navigation)}),this.packaging.coverPath&&(this.cover=this.resolve(this.packaging.coverPath)),this.loading.manifest.resolve(this.packaging.manifest),this.loading.metadata.resolve(this.packaging.metadata),this.loading.spine.resolve(this.spine),this.loading.cover.resolve(this.cover),this.loading.resources.resolve(this.resources),this.loading.pageList.resolve(this.pageList),this.isOpen=!0,this.archived||this.settings.replacements&&this.settings.replacements!="none"?this.replacements().then(()=>{this.loaded.displayOptions.then(()=>{this.opening.resolve(this)})}).catch(e=>{console.error(e)}):this.loaded.displayOptions.then(()=>{this.opening.resolve(this)})}loadNavigation(t){let e=t.navPath||t.ncxPath,r=t.toc;return r?new Promise((i,n)=>{this.navigation=new Ya(r),t.pageList&&(this.pageList=new Ka(t.pageList)),i(this.navigation)}):e?this.load(e,"xml").then(i=>(this.navigation=new Ya(i),this.pageList=new Ka(i),this.navigation)):new Promise((i,n)=>{this.navigation=new Ya,this.pageList=new Ka,i(this.navigation)})}section(t){return this.spine.get(t)}renderTo(t,e){return this.rendition=new H1(this,e),this.rendition.attachTo(t),this.rendition}setRequestCredentials(t){this.settings.requestCredentials=t}setRequestHeaders(t){this.settings.requestHeaders=t}unarchive(t,e){return this.archive=new Ah,this.archive.open(t,e)}store(t){let e=this.settings.replacements&&this.settings.replacements!=="none",r=this.url,i=this.settings.requestMethod||ia.bind(this);return this.storage=new Us(t,i,this.resolve.bind(this)),this.request=this.storage.request.bind(this.storage),this.opened.then(()=>{this.archived&&(this.storage.requester=this.archive.request.bind(this.archive));let n=(s,h)=>{h.output=this.resources.substitute(s,h.url)};this.resources.settings.replacements=e||"blobUrl",this.resources.replacements().then(()=>this.resources.replaceCss()),this.storage.on("offline",()=>{this.url=new Ee("/",""),this.spine.hooks.serialize.register(n)}),this.storage.on("online",()=>{this.url=r,this.spine.hooks.serialize.deregister(n)})}),this.storage}coverUrl(){return this.loaded.cover.then(()=>this.cover?this.archived?this.archive.createUrl(this.cover):this.cover:null)}replacements(){return this.spine.hooks.serialize.register((t,e)=>{e.output=this.resources.substitute(t,e.url)}),this.resources.replacements().then(()=>this.resources.replaceCss())}getRange(t){var e=new Ot(t),r=this.spine.get(e.spinePos),i=this.load.bind(this);return r?r.load(i).then(function(n){var s=e.toRange(r.document);return s}):new Promise((n,s)=>{s("CFI could not be found")})}key(t){var e=t||this.packaging.metadata.identifier||this.url.filename;return`epubjs:${Aa}:${e}`}destroy(){this.opened=void 0,this.loading=void 0,this.loaded=void 0,this.ready=void 0,this.isOpen=!1,this.isRendered=!1,this.spine&&this.spine.destroy(),this.locations&&this.locations.destroy(),this.pageList&&this.pageList.destroy(),this.archive&&this.archive.destroy(),this.resources&&this.resources.destroy(),this.container&&this.container.destroy(),this.packaging&&this.packaging.destroy(),this.rendition&&this.rendition.destroy(),this.displayOptions&&this.displayOptions.destroy(),this.spine=void 0,this.locations=void 0,this.pageList=void 0,this.archive=void 0,this.resources=void 0,this.container=void 0,this.packaging=void 0,this.rendition=void 0,this.navigation=void 0,this.url=void 0,this.path=void 0,this.archived=!1}};Te(N1.prototype);function Ve(v,t){return new N1(v,t)}Ve.VERSION=Aa;typeof global<"u"&&(global.EPUBJS_VERSION=Aa);Ve.Book=N1;Ve.Rendition=H1;Ve.Contents=L1;Ve.CFI=Ot;Ve.utils=R0;/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=(v,t,e=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",v);return Object.keys(t).forEach(i=>{r.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const n=qs(...i);r.appendChild(n)}),r};var Sh=([v,t,e])=>qs(v,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=v=>Array.from(v.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Th=v=>typeof v=="string"?v:!v||!v.class?"":v.class&&typeof v.class=="string"?v.class.split(" "):v.class&&Array.isArray(v.class)?v.class:"",kh=v=>v.flatMap(Th).map(e=>e.trim()).filter(Boolean).filter((e,r,i)=>i.indexOf(e)===r).join(" "),Lh=v=>v.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,r)=>e.toUpperCase()+r.toLowerCase()),z2=(v,{nameAttr:t,icons:e,attrs:r})=>{var R;const i=v.getAttribute(t);if(i==null)return;const n=Lh(i),s=e[n];if(!s)return console.warn(`${v.outerHTML} icon name was not found in the provided icons object.`);const h=Dh(v),[c,l,f]=s,p={...l,"data-lucide":i,...r,...h},b=kh(["lucide",`lucide-${i}`,h,r]);b&&Object.assign(p,{class:b});const y=Sh([c,p,f]);return(R=v.parentNode)==null?void 0:R.replaceChild(y,v)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=["svg",a,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",a,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=["svg",a,[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",a,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",a,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",a,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",a,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",a,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",a,[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",a,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",a,[["path",{d:"M17 12H7"}],["path",{d:"M19 18H5"}],["path",{d:"M21 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",a,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",a,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",a,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",a,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",a,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",a,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",a,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",a,[["path",{d:"M3 12h18"}],["path",{d:"M3 18h18"}],["path",{d:"M3 6h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",a,[["path",{d:"M15 12H3"}],["path",{d:"M17 18H3"}],["path",{d:"M21 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",a,[["path",{d:"M21 12H9"}],["path",{d:"M21 18H7"}],["path",{d:"M21 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",a,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",a,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",a,[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",a,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",a,[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",a,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",a,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",a,[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",a,[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",a,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",a,[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",a,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",a,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",a,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",a,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",a,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",a,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",a,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",a,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",a,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",a,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",a,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",a,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",a,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",a,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",a,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",a,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",a,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",a,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",a,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",a,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",a,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",a,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",a,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",a,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",a,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",a,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",a,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",a,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",a,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",a,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",a,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",a,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",a,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",a,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",a,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",a,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",a,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=["svg",a,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",a,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",a,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",a,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",a,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",a,[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",a,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",a,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",a,[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",a,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",a,[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",a,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",a,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",a,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",a,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",a,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",a,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",a,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",a,[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",a,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",a,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=["svg",a,[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=["svg",a,[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",a,[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",a,[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",a,[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",a,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",a,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",a,[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",a,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",a,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",a,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",a,[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",a,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",a,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",a,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",a,[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",a,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",a,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",a,[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",a,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=["svg",a,[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",a,[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",a,[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",a,[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["circle",{cx:"14",cy:"8",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",a,[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",a,[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",a,[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",a,[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",a,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",a,[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",a,[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",a,[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",a,[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",a,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",a,[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",a,[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",a,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",a,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",a,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=["svg",a,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",a,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",a,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",a,[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",a,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",a,[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",a,[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",a,[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",a,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",a,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",a,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",a,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",a,[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",a,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",a,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",a,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",a,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",a,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",a,[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",a,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",a,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",a,[["path",{d:"M11 14h1v4"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",a,[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",a,[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",a,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",a,[["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"M16 2v4"}],["path",{d:"m16.9 15.2-.4-.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",a,[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",a,[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",a,[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",a,[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",a,[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M16 2v4"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{d:"M3 10h4"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",a,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",a,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",a,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",a,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",a,[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",a,[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=["svg",a,[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",a,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",a,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",a,[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",a,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",a,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",a,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",a,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",a,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",a,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",a,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",a,[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",a,[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=["svg",a,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",a,[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=["svg",a,[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",a,[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",a,[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",a,[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",a,[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=["svg",a,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=["svg",a,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",a,[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=["svg",a,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=["svg",a,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=["svg",a,[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",a,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",a,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",a,[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",a,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",a,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",a,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",a,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",a,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",a,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",a,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",a,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",a,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",a,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",a,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",a,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",a,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",a,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",a,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",a,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",a,[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",a,[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",a,[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",a,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",a,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",a,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",a,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",a,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",a,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",a,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",a,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",a,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",a,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",a,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",a,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",a,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",a,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",a,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",a,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",a,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",a,[["path",{d:"M12 6v6l4 2"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}],["path",{d:"M20 11.5v6"}],["path",{d:"M20 21.5h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",a,[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",a,[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",a,[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",a,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",a,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",a,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",a,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",a,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",a,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",a,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",a,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",a,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",a,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",a,[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",a,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",a,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",a,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",a,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",a,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",a,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",a,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",a,[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",a,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",a,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",a,[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",a,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",a,[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",a,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",a,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=["svg",a,[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",a,[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",a,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",a,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",a,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",a,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",a,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",a,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",a,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",a,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",a,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",a,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",a,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",a,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",a,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",a,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",a,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",a,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",a,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",a,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",a,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",a,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",a,[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",a,[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",a,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",a,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",a,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",a,[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",a,[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",a,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",a,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",a,[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",a,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",a,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",a,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",a,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",a,[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",a,[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",a,[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",a,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",a,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",a,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",a,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",a,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",a,[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",a,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",a,[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",a,[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",a,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",a,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",a,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",a,[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",a,[["path",{d:"M14.4 14.4 9.6 9.6"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"}],["path",{d:"m21.5 21.5-1.4-1.4"}],["path",{d:"M3.9 3.9 2.5 2.5"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",a,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",a,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",a,[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=["svg",a,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",a,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",a,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",a,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",a,[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",a,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",a,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",a,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",a,[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",a,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",a,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",a,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",a,[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",a,[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",a,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",a,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",a,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",a,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",a,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",a,[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",a,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",a,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",a,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",a,[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",a,[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",a,[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",a,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",a,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",a,[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3.2 12.9-.9-.4"}],["path",{d:"m3.2 15.1-.9.4"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.9 11.2-.4-.9"}],["path",{d:"m4.9 16.8-.4.9"}],["path",{d:"m7.5 10.3-.4.9"}],["path",{d:"m7.5 17.7-.4-.9"}],["path",{d:"m9.7 12.5-.9.4"}],["path",{d:"m9.7 15.5-.9-.4"}],["circle",{cx:"6",cy:"14",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",a,[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}],["path",{d:"M8 18v-7.7L16 9v7"}],["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=["svg",a,[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=["svg",a,[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",a,[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",a,[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",a,[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",a,[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 18a3 3 0 1 0-6 0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",a,[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",a,[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",a,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",a,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",a,[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",a,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",a,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",a,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",a,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",a,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",a,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",a,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",a,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",a,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",a,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",a,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",a,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",a,[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",a,[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",a,[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",a,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",a,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",a,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",a,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",a,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",a,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",a,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",a,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",a,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",a,[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",a,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",a,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",a,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",a,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",a,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",a,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",a,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",a,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",a,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",a,[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",a,[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",a,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",a,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",a,[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",a,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",a,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",a,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",a,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",a,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",a,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",a,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",a,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",a,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",a,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",a,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",a,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",a,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",a,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",a,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",a,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",a,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",a,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",a,[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",a,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",a,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",a,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",a,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",a,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",a,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",a,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",a,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",a,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",a,[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",a,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",a,[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",a,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",a,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",a,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",a,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",a,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=["svg",a,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",a,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=["svg",a,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",a,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",a,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",a,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",a,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",a,[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",a,[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",a,[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",a,[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",a,[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=["svg",a,[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",a,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",a,[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",a,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",a,[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",a,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",a,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",a,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",a,[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",a,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",a,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",a,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",a,[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",a,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",a,[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",a,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",a,[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",a,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",a,[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",a,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",a,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",a,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",a,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",a,[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",a,[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",a,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",a,[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",a,[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",a,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=["svg",a,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",a,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",a,[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",a,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",a,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",a,[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",a,[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",a,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",a,[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",a,[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",a,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",a,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",a,[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m7 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=["svg",a,[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m3 8 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",a,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",a,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",a,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",a,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",a,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",a,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",a,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",a,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",a,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",a,[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",a,[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",a,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",a,[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",a,[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",a,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",a,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",a,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",a,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",a,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",a,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",a,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",a,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",a,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",a,[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=["svg",a,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",a,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",a,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",a,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",a,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=["svg",a,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",a,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",a,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",a,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",a,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",a,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",a,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",a,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",a,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",a,[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",a,[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M4 11h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",a,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",a,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",a,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",a,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",a,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",a,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",a,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",a,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",a,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",a,[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",a,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",a,[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",a,[["path",{d:"M10 18h4"}],["path",{d:"M11 6H3"}],["path",{d:"M15 6h6"}],["path",{d:"M18 9V3"}],["path",{d:"M7 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",a,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",a,[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"M4 10h2"}],["path",{d:"M4 6h1v4"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",a,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",a,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",a,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",a,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",a,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",a,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",a,[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",a,[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",a,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",a,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=["svg",a,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",a,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",a,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",a,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",a,[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",a,[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",a,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",a,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",a,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",a,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",a,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",a,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",a,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",a,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",a,[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",a,[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",a,[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",a,[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",a,[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",a,[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",a,[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",a,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",a,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",a,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",a,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",a,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",a,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",a,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",a,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",a,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",a,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",a,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",a,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",a,[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",a,[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",a,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",a,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=["svg",a,[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",a,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",a,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=["svg",a,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=["svg",a,[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=["svg",a,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",a,[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",a,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",a,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",a,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",a,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",a,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",a,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",a,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",a,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",a,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",a,[["path",{d:"M12 17v4"}],["path",{d:"m15.2 4.9-.9-.4"}],["path",{d:"m15.2 7.1-.9.4"}],["path",{d:"m16.9 3.2-.4-.9"}],["path",{d:"m16.9 8.8-.4.9"}],["path",{d:"m19.5 2.3-.4.9"}],["path",{d:"m19.5 9.7-.4-.9"}],["path",{d:"m21.7 4.5-.9.4"}],["path",{d:"m21.7 7.5-.9-.4"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",a,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",a,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",a,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",a,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",a,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",a,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",a,[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",a,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",a,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",a,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",a,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",a,[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",a,[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",a,[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",a,[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",a,[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",a,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",a,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",a,[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",a,[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",a,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",a,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",a,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",a,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",a,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",a,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",a,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",a,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",a,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",a,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",a,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",a,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",a,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",a,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",a,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",a,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",a,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",a,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",a,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",a,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",a,[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",a,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",a,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",a,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",a,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",a,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=["svg",a,[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",a,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=["svg",a,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=["svg",a,[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",a,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",a,[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",a,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",a,[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",a,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",a,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",a,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",a,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",a,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",a,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",a,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",a,[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"}],["path",{d:"m7.5 4.27 9 5.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",a,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",a,[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=["svg",a,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",a,[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",a,[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",a,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",a,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",a,[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",a,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",a,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",a,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=["svg",a,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",a,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",a,[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=["svg",a,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",a,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",a,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",a,[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",a,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",a,[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",a,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=["svg",a,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=["svg",a,[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=["svg",a,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=["svg",a,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=["svg",a,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=["svg",a,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=["svg",a,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=["svg",a,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=["svg",a,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=["svg",a,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=["svg",a,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=["svg",a,[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=["svg",a,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=["svg",a,[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=["svg",a,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=["svg",a,[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=["svg",a,[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=["svg",a,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=["svg",a,[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=["svg",a,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=["svg",a,[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=["svg",a,[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=["svg",a,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=["svg",a,[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=["svg",a,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=["svg",a,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=["svg",a,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=["svg",a,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=["svg",a,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=["svg",a,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=["svg",a,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=["svg",a,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=["svg",a,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=["svg",a,[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=["svg",a,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=["svg",a,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=["svg",a,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=["svg",a,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=["svg",a,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=["svg",a,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=["svg",a,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=["svg",a,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=["svg",a,[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=["svg",a,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=["svg",a,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=["svg",a,[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=["svg",a,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=["svg",a,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=["svg",a,[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=["svg",a,[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=["svg",a,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=["svg",a,[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=["svg",a,[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",a,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",a,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",a,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",a,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",a,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",a,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",a,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",a,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",a,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",a,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",a,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",a,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",a,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",a,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",a,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",a,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",a,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",a,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",a,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",a,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",a,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",a,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",a,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",a,[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",a,[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",a,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",a,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",a,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",a,[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",a,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",a,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",a,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",a,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",a,[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",a,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",a,[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",a,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",a,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",a,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",a,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",a,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",a,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",a,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",a,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=["svg",a,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=["svg",a,[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=["svg",a,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=["svg",a,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=["svg",a,[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=["svg",a,[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=["svg",a,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",a,[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=["svg",a,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=["svg",a,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=["svg",a,[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=["svg",a,[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=["svg",a,[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=["svg",a,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=["svg",a,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=["svg",a,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=["svg",a,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=["svg",a,[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=["svg",a,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=["svg",a,[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",a,[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=["svg",a,[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=["svg",a,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=["svg",a,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",a,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=["svg",a,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",a,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",a,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",a,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=["svg",a,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",a,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",a,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",a,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",a,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",a,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=["svg",a,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=["svg",a,[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=["svg",a,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=["svg",a,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=["svg",a,[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=["svg",a,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=["svg",a,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=["svg",a,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=["svg",a,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=["svg",a,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=["svg",a,[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=["svg",a,[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=["svg",a,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=["svg",a,[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=["svg",a,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=["svg",a,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=["svg",a,[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=["svg",a,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=["svg",a,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=["svg",a,[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=["svg",a,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=["svg",a,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=["svg",a,[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=["svg",a,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",a,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=["svg",a,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=["svg",a,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=["svg",a,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=["svg",a,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=["svg",a,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=["svg",a,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=["svg",a,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=["svg",a,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=["svg",a,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",a,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=["svg",a,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=["svg",a,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=["svg",a,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=["svg",a,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=["svg",a,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=["svg",a,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=["svg",a,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",a,[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",a,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",a,[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",a,[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",a,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",a,[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",a,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=["svg",a,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=["svg",a,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",a,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",a,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",a,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",a,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=["svg",a,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",a,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=["svg",a,[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",a,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",a,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",a,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=["svg",a,[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=["svg",a,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",a,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",a,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=["svg",a,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=["svg",a,[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=["svg",a,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=["svg",a,[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=["svg",a,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=["svg",a,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=["svg",a,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=["svg",a,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=["svg",a,[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=["svg",a,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=["svg",a,[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=["svg",a,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=["svg",a,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=["svg",a,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=["svg",a,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=["svg",a,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=["svg",a,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=["svg",a,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=["svg",a,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=["svg",a,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=["svg",a,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=["svg",a,[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=["svg",a,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=["svg",a,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=["svg",a,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=["svg",a,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=["svg",a,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=["svg",a,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=["svg",a,[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=["svg",a,[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=["svg",a,[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=["svg",a,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=["svg",a,[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=["svg",a,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=["svg",a,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=["svg",a,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=["svg",a,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=["svg",a,[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=["svg",a,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=["svg",a,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=["svg",a,[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=["svg",a,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=["svg",a,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=["svg",a,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",a,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=["svg",a,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=["svg",a,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=["svg",a,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=["svg",a,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=["svg",a,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=["svg",a,[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=["svg",a,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=["svg",a,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=["svg",a,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=["svg",a,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=["svg",a,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=["svg",a,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=["svg",a,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=["svg",a,[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=["svg",a,[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=["svg",a,[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=["svg",a,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=["svg",a,[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=["svg",a,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=["svg",a,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=["svg",a,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=["svg",a,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=["svg",a,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=["svg",a,[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=["svg",a,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=["svg",a,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=["svg",a,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=["svg",a,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",a,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=["svg",a,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",a,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=["svg",a,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=["svg",a,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=["svg",a,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=["svg",a,[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=["svg",a,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",a,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=["svg",a,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=["svg",a,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=["svg",a,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=["svg",a,[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=["svg",a,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=["svg",a,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",a,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=["svg",a,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=["svg",a,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=["svg",a,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=["svg",a,[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=["svg",a,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=["svg",a,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=["svg",a,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=["svg",a,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=["svg",a,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=["svg",a,[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=["svg",a,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=["svg",a,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=["svg",a,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=["svg",a,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",a,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=["svg",a,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=["svg",a,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=["svg",a,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=["svg",a,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=["svg",a,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=["svg",a,[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=["svg",a,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",a,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=["svg",a,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=["svg",a,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",a,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",a,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",a,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=["svg",a,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=["svg",a,[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=["svg",a,[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=["svg",a,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=["svg",a,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=["svg",a,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=["svg",a,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=["svg",a,[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=["svg",a,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=["svg",a,[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=["svg",a,[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=["svg",a,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",a,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=["svg",a,[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=["svg",a,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",a,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=["svg",a,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=["svg",a,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=["svg",a,[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=["svg",a,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=["svg",a,[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=["svg",a,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=["svg",a,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=["svg",a,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=["svg",a,[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=["svg",a,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=["svg",a,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=["svg",a,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=["svg",a,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=["svg",a,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=["svg",a,[["path",{d:"M12 20h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=["svg",a,[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=["svg",a,[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=["svg",a,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=["svg",a,[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=["svg",a,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=["svg",a,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=["svg",a,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=["svg",a,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=["svg",a,[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=["svg",a,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Rh,AArrowUp:Hh,ALargeSmall:Nh,Accessibility:Bh,Activity:Oh,ActivitySquare:en,AirVent:Vh,Airplay:Ih,AlarmCheck:F2,AlarmClock:zh,AlarmClockCheck:F2,AlarmClockMinus:U2,AlarmClockOff:Ph,AlarmClockPlus:q2,AlarmMinus:U2,AlarmPlus:q2,AlarmSmoke:Fh,Album:Uh,AlertCircle:gr,AlertOctagon:Li,AlertTriangle:is,AlignCenter:Wh,AlignCenterHorizontal:qh,AlignCenterVertical:Zh,AlignEndHorizontal:jh,AlignEndVertical:Gh,AlignHorizontalDistributeCenter:Xh,AlignHorizontalDistributeEnd:$h,AlignHorizontalDistributeStart:Yh,AlignHorizontalJustifyCenter:Kh,AlignHorizontalJustifyEnd:Jh,AlignHorizontalJustifyStart:Qh,AlignHorizontalSpaceAround:to,AlignHorizontalSpaceBetween:eo,AlignJustify:ao,AlignLeft:ro,AlignRight:io,AlignStartHorizontal:no,AlignStartVertical:so,AlignVerticalDistributeCenter:ho,AlignVerticalDistributeEnd:oo,AlignVerticalDistributeStart:co,AlignVerticalJustifyCenter:lo,AlignVerticalJustifyEnd:uo,AlignVerticalJustifyStart:po,AlignVerticalSpaceAround:fo,AlignVerticalSpaceBetween:vo,Ambulance:go,Ampersand:mo,Ampersands:Mo,Amphora:yo,Anchor:xo,Angry:wo,Annoyed:bo,Antenna:Ao,Anvil:Co,Aperture:_o,AppWindow:So,AppWindowMac:Eo,Apple:Do,Archive:Lo,ArchiveRestore:To,ArchiveX:ko,AreaChart:rr,Armchair:Ro,ArrowBigDown:No,ArrowBigDownDash:Ho,ArrowBigLeft:Oo,ArrowBigLeftDash:Bo,ArrowBigRight:Io,ArrowBigRightDash:Vo,ArrowBigUp:zo,ArrowBigUpDash:Po,ArrowDown:Yo,ArrowDown01:Fo,ArrowDown10:Uo,ArrowDownAZ:Z2,ArrowDownAz:Z2,ArrowDownCircle:mr,ArrowDownFromLine:qo,ArrowDownLeft:Zo,ArrowDownLeftFromCircle:yr,ArrowDownLeftFromSquare:hn,ArrowDownLeftSquare:an,ArrowDownNarrowWide:Wo,ArrowDownRight:jo,ArrowDownRightFromCircle:xr,ArrowDownRightFromSquare:on,ArrowDownRightSquare:rn,ArrowDownSquare:nn,ArrowDownToDot:Go,ArrowDownToLine:Xo,ArrowDownUp:$o,ArrowDownWideNarrow:W2,ArrowDownZA:j2,ArrowDownZa:j2,ArrowLeft:td,ArrowLeftCircle:Mr,ArrowLeftFromLine:Ko,ArrowLeftRight:Jo,ArrowLeftSquare:sn,ArrowLeftToLine:Qo,ArrowRight:id,ArrowRightCircle:Ar,ArrowRightFromLine:ed,ArrowRightLeft:ad,ArrowRightSquare:ln,ArrowRightToLine:rd,ArrowUp:fd,ArrowUp01:nd,ArrowUp10:sd,ArrowUpAZ:G2,ArrowUpAz:G2,ArrowUpCircle:Cr,ArrowUpDown:hd,ArrowUpFromDot:od,ArrowUpFromLine:dd,ArrowUpLeft:cd,ArrowUpLeftFromCircle:wr,ArrowUpLeftFromSquare:dn,ArrowUpLeftSquare:un,ArrowUpNarrowWide:X2,ArrowUpRight:ld,ArrowUpRightFromCircle:br,ArrowUpRightFromSquare:cn,ArrowUpRightSquare:pn,ArrowUpSquare:fn,ArrowUpToLine:ud,ArrowUpWideNarrow:pd,ArrowUpZA:$2,ArrowUpZa:$2,ArrowsUpFromLine:vd,Asterisk:gd,AsteriskSquare:vn,AtSign:md,Atom:Md,AudioLines:yd,AudioWaveform:xd,Award:wd,Axe:bd,Axis3D:Y2,Axis3d:Y2,Baby:Ad,Backpack:Cd,Badge:zd,BadgeAlert:_d,BadgeCent:Ed,BadgeCheck:K2,BadgeDollarSign:Sd,BadgeEuro:Dd,BadgeHelp:Td,BadgeIndianRupee:kd,BadgeInfo:Ld,BadgeJapaneseYen:Rd,BadgeMinus:Hd,BadgePercent:Nd,BadgePlus:Bd,BadgePoundSterling:Od,BadgeRussianRuble:Vd,BadgeSwissFranc:Id,BadgeX:Pd,BaggageClaim:Fd,Ban:Ud,Banana:qd,Bandage:Zd,Banknote:Wd,BarChart:lr,BarChart2:ur,BarChart3:dr,BarChart4:or,BarChartBig:hr,BarChartHorizontal:nr,BarChartHorizontalBig:ir,Barcode:jd,Baseline:Gd,Bath:Xd,Battery:tc,BatteryCharging:$d,BatteryFull:Yd,BatteryLow:Kd,BatteryMedium:Jd,BatteryWarning:Qd,Beaker:ec,Bean:rc,BeanOff:ac,Bed:sc,BedDouble:ic,BedSingle:nc,Beef:hc,Beer:dc,BeerOff:oc,Bell:gc,BellDot:cc,BellElectric:lc,BellMinus:uc,BellOff:pc,BellPlus:fc,BellRing:vc,BetweenHorizonalEnd:J2,BetweenHorizonalStart:Q2,BetweenHorizontalEnd:J2,BetweenHorizontalStart:Q2,BetweenVerticalEnd:mc,BetweenVerticalStart:Mc,BicepsFlexed:yc,Bike:xc,Binary:wc,Binoculars:bc,Biohazard:Ac,Bird:Cc,Bitcoin:_c,Blend:Ec,Blinds:Sc,Blocks:Dc,Bluetooth:Rc,BluetoothConnected:Tc,BluetoothOff:kc,BluetoothSearching:Lc,Bold:Hc,Bolt:Nc,Bomb:Bc,Bone:Oc,Book:nl,BookA:Vc,BookAudio:Ic,BookCheck:Pc,BookCopy:zc,BookDashed:tr,BookDown:Fc,BookHeadphones:Uc,BookHeart:qc,BookImage:Zc,BookKey:Wc,BookLock:jc,BookMarked:Gc,BookMinus:Xc,BookOpen:Kc,BookOpenCheck:$c,BookOpenText:Yc,BookPlus:Jc,BookTemplate:tr,BookText:Qc,BookType:tl,BookUp:al,BookUp2:el,BookUser:rl,BookX:il,Bookmark:cl,BookmarkCheck:sl,BookmarkMinus:hl,BookmarkPlus:ol,BookmarkX:dl,BoomBox:ll,Bot:fl,BotMessageSquare:ul,BotOff:pl,Box:vl,BoxSelect:En,Boxes:gl,Braces:er,Brackets:ml,Brain:xl,BrainCircuit:Ml,BrainCog:yl,BrickWall:wl,Briefcase:_l,BriefcaseBusiness:bl,BriefcaseConveyorBelt:Al,BriefcaseMedical:Cl,BringToFront:El,Brush:Sl,Bug:kl,BugOff:Dl,BugPlay:Tl,Building:Rl,Building2:Ll,Bus:Nl,BusFront:Hl,Cable:Ol,CableCar:Bl,Cake:Il,CakeSlice:Vl,Calculator:Pl,Calendar:su,Calendar1:zl,CalendarArrowDown:Fl,CalendarArrowUp:Ul,CalendarCheck:Zl,CalendarCheck2:ql,CalendarClock:Wl,CalendarCog:jl,CalendarDays:Gl,CalendarFold:Xl,CalendarHeart:$l,CalendarMinus:Kl,CalendarMinus2:Yl,CalendarOff:Jl,CalendarPlus:tu,CalendarPlus2:Ql,CalendarRange:eu,CalendarSearch:au,CalendarSync:ru,CalendarX:nu,CalendarX2:iu,Camera:ou,CameraOff:hu,CandlestickChart:sr,Candy:lu,CandyCane:du,CandyOff:cu,Cannabis:uu,Captions:ar,CaptionsOff:pu,Car:gu,CarFront:fu,CarTaxiFront:vu,Caravan:mu,Carrot:Mu,CaseLower:yu,CaseSensitive:xu,CaseUpper:wu,CassetteTape:bu,Cast:Au,Castle:Cu,Cat:_u,Cctv:Eu,ChartArea:rr,ChartBar:nr,ChartBarBig:ir,ChartBarDecreasing:Su,ChartBarIncreasing:Du,ChartBarStacked:Tu,ChartCandlestick:sr,ChartColumn:dr,ChartColumnBig:hr,ChartColumnDecreasing:ku,ChartColumnIncreasing:or,ChartColumnStacked:Lu,ChartGantt:Ru,ChartLine:cr,ChartNetwork:Hu,ChartNoAxesColumn:ur,ChartNoAxesColumnDecreasing:Nu,ChartNoAxesColumnIncreasing:lr,ChartNoAxesCombined:Bu,ChartNoAxesGantt:pr,ChartPie:fr,ChartScatter:vr,ChartSpline:Ou,Check:Iu,CheckCheck:Vu,CheckCircle:_r,CheckCircle2:Er,CheckSquare:mn,CheckSquare2:Mn,ChefHat:Pu,Cherry:zu,ChevronDown:Fu,ChevronDownCircle:Sr,ChevronDownSquare:yn,ChevronFirst:Uu,ChevronLast:qu,ChevronLeft:Zu,ChevronLeftCircle:Dr,ChevronLeftSquare:xn,ChevronRight:Wu,ChevronRightCircle:Tr,ChevronRightSquare:wn,ChevronUp:ju,ChevronUpCircle:kr,ChevronUpSquare:bn,ChevronsDown:Xu,ChevronsDownUp:Gu,ChevronsLeft:Ku,ChevronsLeftRight:Yu,ChevronsLeftRightEllipsis:$u,ChevronsRight:Qu,ChevronsRightLeft:Ju,ChevronsUp:ep,ChevronsUpDown:tp,Chrome:ap,Church:rp,Cigarette:np,CigaretteOff:ip,Circle:gp,CircleAlert:gr,CircleArrowDown:mr,CircleArrowLeft:Mr,CircleArrowOutDownLeft:yr,CircleArrowOutDownRight:xr,CircleArrowOutUpLeft:wr,CircleArrowOutUpRight:br,CircleArrowRight:Ar,CircleArrowUp:Cr,CircleCheck:Er,CircleCheckBig:_r,CircleChevronDown:Sr,CircleChevronLeft:Dr,CircleChevronRight:Tr,CircleChevronUp:kr,CircleDashed:sp,CircleDivide:Lr,CircleDollarSign:hp,CircleDot:dp,CircleDotDashed:op,CircleEllipsis:cp,CircleEqual:lp,CircleFadingArrowUp:up,CircleFadingPlus:pp,CircleGauge:Rr,CircleHelp:Hr,CircleMinus:Nr,CircleOff:fp,CircleParking:Or,CircleParkingOff:Br,CirclePause:Vr,CirclePercent:Ir,CirclePlay:Pr,CirclePlus:zr,CirclePower:Fr,CircleSlash:vp,CircleSlash2:Ur,CircleSlashed:Ur,CircleStop:qr,CircleUser:Wr,CircleUserRound:Zr,CircleX:jr,CircuitBoard:mp,Citrus:Mp,Clapperboard:yp,Clipboard:Dp,ClipboardCheck:xp,ClipboardCopy:wp,ClipboardEdit:Xr,ClipboardList:bp,ClipboardMinus:Ap,ClipboardPaste:Cp,ClipboardPen:Xr,ClipboardPenLine:Gr,ClipboardPlus:_p,ClipboardSignature:Gr,ClipboardType:Ep,ClipboardX:Sp,Clock:Zp,Clock1:Tp,Clock10:kp,Clock11:Lp,Clock12:Rp,Clock2:Hp,Clock3:Np,Clock4:Bp,Clock5:Op,Clock6:Vp,Clock7:Ip,Clock8:Pp,Clock9:zp,ClockAlert:Fp,ClockArrowDown:Up,ClockArrowUp:qp,Cloud:sf,CloudAlert:Wp,CloudCog:jp,CloudDownload:$r,CloudDrizzle:Gp,CloudFog:Xp,CloudHail:$p,CloudLightning:Yp,CloudMoon:Jp,CloudMoonRain:Kp,CloudOff:Qp,CloudRain:ef,CloudRainWind:tf,CloudSnow:af,CloudSun:nf,CloudSunRain:rf,CloudUpload:Yr,Cloudy:hf,Clover:of,Club:df,Code:cf,Code2:Kr,CodeSquare:An,CodeXml:Kr,Codepen:lf,Codesandbox:uf,Coffee:pf,Cog:ff,Coins:vf,Columns:Jr,Columns2:Jr,Columns3:Qr,Columns4:gf,Combine:mf,Command:Mf,Compass:yf,Component:xf,Computer:wf,ConciergeBell:bf,Cone:Af,Construction:Cf,Contact:_f,Contact2:ti,ContactRound:ti,Container:Ef,Contrast:Sf,Cookie:Df,CookingPot:Tf,Copy:Bf,CopyCheck:kf,CopyMinus:Lf,CopyPlus:Rf,CopySlash:Hf,CopyX:Nf,Copyleft:Of,Copyright:Vf,CornerDownLeft:If,CornerDownRight:Pf,CornerLeftDown:zf,CornerLeftUp:Ff,CornerRightDown:Uf,CornerRightUp:qf,CornerUpLeft:Zf,CornerUpRight:Wf,Cpu:jf,CreativeCommons:Gf,CreditCard:Xf,Croissant:$f,Crop:Yf,Cross:Kf,Crosshair:Jf,Crown:Qf,Cuboid:t4,CupSoda:e4,CurlyBraces:er,Currency:a4,Cylinder:r4,Dam:i4,Database:h4,DatabaseBackup:n4,DatabaseZap:s4,Delete:o4,Dessert:d4,Diameter:c4,Diamond:p4,DiamondMinus:l4,DiamondPercent:ei,DiamondPlus:u4,Dice1:f4,Dice2:v4,Dice3:g4,Dice4:m4,Dice5:M4,Dice6:y4,Dices:x4,Diff:w4,Disc:_4,Disc2:b4,Disc3:A4,DiscAlbum:C4,Divide:E4,DivideCircle:Lr,DivideSquare:Sn,Dna:D4,DnaOff:S4,Dock:T4,Dog:k4,DollarSign:L4,Donut:R4,DoorClosed:H4,DoorOpen:N4,Dot:B4,DotSquare:Dn,Download:O4,DownloadCloud:$r,DraftingCompass:V4,Drama:I4,Dribbble:P4,Drill:z4,Droplet:U4,DropletOff:F4,Droplets:q4,Drum:Z4,Drumstick:W4,Dumbbell:j4,Ear:X4,EarOff:G4,Earth:ai,EarthLock:$4,Eclipse:Y4,Edit:ca,Edit2:Zi,Edit3:qi,Egg:Q4,EggFried:K4,EggOff:J4,Ellipsis:ii,EllipsisVertical:ri,Equal:a5,EqualApproximately:t5,EqualNot:e5,EqualSquare:Tn,Eraser:r5,EthernetPort:i5,Euro:n5,Expand:s5,ExternalLink:h5,Eye:c5,EyeClosed:o5,EyeOff:d5,Facebook:l5,Factory:u5,Fan:p5,FastForward:f5,Feather:v5,Fence:g5,FerrisWheel:m5,Figma:M5,File:vv,FileArchive:y5,FileAudio:w5,FileAudio2:x5,FileAxis3D:ni,FileAxis3d:ni,FileBadge:A5,FileBadge2:b5,FileBarChart:si,FileBarChart2:hi,FileBox:C5,FileChartColumn:hi,FileChartColumnIncreasing:si,FileChartLine:oi,FileChartPie:di,FileCheck:E5,FileCheck2:_5,FileClock:S5,FileCode:T5,FileCode2:D5,FileCog:ci,FileCog2:ci,FileDiff:k5,FileDigit:L5,FileDown:R5,FileEdit:ui,FileHeart:H5,FileImage:N5,FileInput:B5,FileJson:V5,FileJson2:O5,FileKey:P5,FileKey2:I5,FileLineChart:oi,FileLock:F5,FileLock2:z5,FileMinus:q5,FileMinus2:U5,FileMusic:Z5,FileOutput:W5,FilePen:ui,FilePenLine:li,FilePieChart:di,FilePlus:G5,FilePlus2:j5,FileQuestion:X5,FileScan:$5,FileSearch:K5,FileSearch2:Y5,FileSignature:li,FileSliders:J5,FileSpreadsheet:Q5,FileStack:tv,FileSymlink:ev,FileTerminal:av,FileText:rv,FileType:nv,FileType2:iv,FileUp:sv,FileUser:hv,FileVideo:dv,FileVideo2:ov,FileVolume:lv,FileVolume2:cv,FileWarning:uv,FileX:fv,FileX2:pv,Files:gv,Film:mv,Filter:yv,FilterX:Mv,Fingerprint:xv,FireExtinguisher:wv,Fish:Cv,FishOff:bv,FishSymbol:Av,Flag:Dv,FlagOff:_v,FlagTriangleLeft:Ev,FlagTriangleRight:Sv,Flame:kv,FlameKindling:Tv,Flashlight:Rv,FlashlightOff:Lv,FlaskConical:Nv,FlaskConicalOff:Hv,FlaskRound:Bv,FlipHorizontal:Vv,FlipHorizontal2:Ov,FlipVertical:Pv,FlipVertical2:Iv,Flower:Fv,Flower2:zv,Focus:Uv,FoldHorizontal:qv,FoldVertical:Zv,Folder:M3,FolderArchive:Wv,FolderCheck:jv,FolderClock:Gv,FolderClosed:Xv,FolderCode:$v,FolderCog:pi,FolderCog2:pi,FolderDot:Yv,FolderDown:Kv,FolderEdit:fi,FolderGit:Qv,FolderGit2:Jv,FolderHeart:t3,FolderInput:e3,FolderKanban:a3,FolderKey:r3,FolderLock:i3,FolderMinus:n3,FolderOpen:h3,FolderOpenDot:s3,FolderOutput:o3,FolderPen:fi,FolderPlus:d3,FolderRoot:c3,FolderSearch:u3,FolderSearch2:l3,FolderSymlink:p3,FolderSync:f3,FolderTree:v3,FolderUp:g3,FolderX:m3,Folders:y3,Footprints:x3,ForkKnife:vs,ForkKnifeCrossed:fs,Forklift:w3,FormInput:ji,Forward:b3,Frame:A3,Framer:C3,Frown:_3,Fuel:E3,Fullscreen:S3,FunctionSquare:kn,GalleryHorizontal:T3,GalleryHorizontalEnd:D3,GalleryThumbnails:k3,GalleryVertical:R3,GalleryVerticalEnd:L3,Gamepad:N3,Gamepad2:H3,GanttChart:pr,GanttChartSquare:m1,Gauge:B3,GaugeCircle:Rr,Gavel:O3,Gem:V3,Ghost:I3,Gift:P3,GitBranch:F3,GitBranchPlus:z3,GitCommit:vi,GitCommitHorizontal:vi,GitCommitVertical:U3,GitCompare:Z3,GitCompareArrows:q3,GitFork:W3,GitGraph:j3,GitMerge:G3,GitPullRequest:Q3,GitPullRequestArrow:X3,GitPullRequestClosed:$3,GitPullRequestCreate:K3,GitPullRequestCreateArrow:Y3,GitPullRequestDraft:J3,Github:tg,Gitlab:eg,GlassWater:ag,Glasses:rg,Globe:ng,Globe2:ai,GlobeLock:ig,Goal:sg,Grab:hg,GraduationCap:og,Grape:dg,Grid:g1,Grid2X2:mi,Grid2X2Plus:gi,Grid2x2:mi,Grid2x2Check:cg,Grid2x2Plus:gi,Grid2x2X:lg,Grid3X3:g1,Grid3x3:g1,Grip:fg,GripHorizontal:ug,GripVertical:pg,Group:vg,Guitar:gg,Ham:mg,Hammer:Mg,Hand:Ag,HandCoins:yg,HandHeart:xg,HandHelping:Mi,HandMetal:wg,HandPlatter:bg,Handshake:Cg,HardDrive:Sg,HardDriveDownload:_g,HardDriveUpload:Eg,HardHat:Dg,Hash:Tg,Haze:kg,HdmiPort:Lg,Heading:Ig,Heading1:Rg,Heading2:Hg,Heading3:Ng,Heading4:Bg,Heading5:Og,Heading6:Vg,HeadphoneOff:Pg,Headphones:zg,Headset:Fg,Heart:jg,HeartCrack:Ug,HeartHandshake:qg,HeartOff:Zg,HeartPulse:Wg,Heater:Gg,HelpCircle:Hr,HelpingHand:Mi,Hexagon:Xg,Highlighter:$g,History:Yg,Home:yi,Hop:Jg,HopOff:Kg,Hospital:Qg,Hotel:t6,Hourglass:e6,House:yi,HousePlug:a6,HousePlus:r6,IceCream:wi,IceCream2:xi,IceCreamBowl:xi,IceCreamCone:wi,IdCard:i6,Image:u6,ImageDown:n6,ImageMinus:s6,ImageOff:h6,ImagePlay:o6,ImagePlus:d6,ImageUp:c6,ImageUpscale:l6,Images:p6,Import:f6,Inbox:v6,Indent:Ai,IndentDecrease:bi,IndentIncrease:Ai,IndianRupee:g6,Infinity:m6,Info:M6,Inspect:On,InspectionPanel:y6,Instagram:x6,Italic:w6,IterationCcw:b6,IterationCw:A6,JapaneseYen:C6,Joystick:_6,Kanban:E6,KanbanSquare:Ln,KanbanSquareDashed:Cn,Key:T6,KeyRound:S6,KeySquare:D6,Keyboard:R6,KeyboardMusic:k6,KeyboardOff:L6,Lamp:I6,LampCeiling:H6,LampDesk:N6,LampFloor:B6,LampWallDown:O6,LampWallUp:V6,LandPlot:P6,Landmark:z6,Languages:F6,Laptop:q6,Laptop2:Ci,LaptopMinimal:Ci,LaptopMinimalCheck:U6,Lasso:W6,LassoSelect:Z6,Laugh:j6,Layers:_i,Layers2:G6,Layers3:_i,Layout:Ui,LayoutDashboard:X6,LayoutGrid:$6,LayoutList:Y6,LayoutPanelLeft:K6,LayoutPanelTop:J6,LayoutTemplate:Q6,Leaf:t8,LeafyGreen:e8,Lectern:a8,LetterText:r8,Library:n8,LibraryBig:i8,LibrarySquare:Rn,LifeBuoy:s8,Ligature:h8,Lightbulb:d8,LightbulbOff:o8,LineChart:cr,Link:u8,Link2:l8,Link2Off:c8,Linkedin:p8,List:k8,ListCheck:f8,ListChecks:v8,ListCollapse:g8,ListEnd:m8,ListFilter:y8,ListFilterPlus:M8,ListMinus:x8,ListMusic:w8,ListOrdered:b8,ListPlus:A8,ListRestart:C8,ListStart:_8,ListTodo:E8,ListTree:S8,ListVideo:D8,ListX:T8,Loader:R8,Loader2:Ei,LoaderCircle:Ei,LoaderPinwheel:L8,Locate:B8,LocateFixed:H8,LocateOff:N8,Lock:V8,LockKeyhole:O8,LockKeyholeOpen:Si,LockOpen:Di,LogIn:I8,LogOut:P8,Logs:z8,Lollipop:F8,Luggage:U8,MSquare:Hn,Magnet:q8,Mail:J8,MailCheck:Z8,MailMinus:W8,MailOpen:j8,MailPlus:G8,MailQuestion:X8,MailSearch:$8,MailWarning:Y8,MailX:K8,Mailbox:Q8,Mails:t7,Map:p7,MapPin:l7,MapPinCheck:a7,MapPinCheckInside:e7,MapPinHouse:r7,MapPinMinus:n7,MapPinMinusInside:i7,MapPinOff:s7,MapPinPlus:o7,MapPinPlusInside:h7,MapPinX:c7,MapPinXInside:d7,MapPinned:u7,Martini:f7,Maximize:g7,Maximize2:v7,Medal:m7,Megaphone:y7,MegaphoneOff:M7,Meh:x7,MemoryStick:w7,Menu:b7,MenuSquare:Nn,Merge:A7,MessageCircle:N7,MessageCircleCode:C7,MessageCircleDashed:_7,MessageCircleHeart:E7,MessageCircleMore:S7,MessageCircleOff:D7,MessageCirclePlus:T7,MessageCircleQuestion:k7,MessageCircleReply:L7,MessageCircleWarning:R7,MessageCircleX:H7,MessageSquare:Y7,MessageSquareCode:B7,MessageSquareDashed:O7,MessageSquareDiff:V7,MessageSquareDot:I7,MessageSquareHeart:P7,MessageSquareLock:z7,MessageSquareMore:F7,MessageSquareOff:U7,MessageSquarePlus:q7,MessageSquareQuote:Z7,MessageSquareReply:W7,MessageSquareShare:j7,MessageSquareText:G7,MessageSquareWarning:X7,MessageSquareX:$7,MessagesSquare:K7,Mic:Q7,Mic2:Ti,MicOff:J7,MicVocal:Ti,Microchip:tm,Microscope:em,Microwave:am,Milestone:rm,Milk:nm,MilkOff:im,Minimize:hm,Minimize2:sm,Minus:om,MinusCircle:Nr,MinusSquare:Bn,Monitor:wm,MonitorCheck:dm,MonitorCog:cm,MonitorDot:lm,MonitorDown:um,MonitorOff:pm,MonitorPause:fm,MonitorPlay:vm,MonitorSmartphone:gm,MonitorSpeaker:mm,MonitorStop:Mm,MonitorUp:ym,MonitorX:xm,Moon:Am,MoonStar:bm,MoreHorizontal:ii,MoreVertical:ri,Mountain:_m,MountainSnow:Cm,Mouse:Lm,MouseOff:Em,MousePointer:km,MousePointer2:Sm,MousePointerBan:Dm,MousePointerClick:Tm,MousePointerSquareDashed:_n,Move:Zm,Move3D:ki,Move3d:ki,MoveDiagonal:Hm,MoveDiagonal2:Rm,MoveDown:Om,MoveDownLeft:Nm,MoveDownRight:Bm,MoveHorizontal:Vm,MoveLeft:Im,MoveRight:Pm,MoveUp:Um,MoveUpLeft:zm,MoveUpRight:Fm,MoveVertical:qm,Music:Xm,Music2:Wm,Music3:jm,Music4:Gm,Navigation:Jm,Navigation2:Ym,Navigation2Off:$m,NavigationOff:Km,Network:Qm,Newspaper:tM,Nfc:eM,Notebook:nM,NotebookPen:aM,NotebookTabs:rM,NotebookText:iM,NotepadText:hM,NotepadTextDashed:sM,Nut:dM,NutOff:oM,Octagon:lM,OctagonAlert:Li,OctagonMinus:cM,OctagonPause:Ri,OctagonX:Hi,Omega:uM,Option:pM,Orbit:fM,Origami:vM,Outdent:bi,Package:AM,Package2:gM,PackageCheck:mM,PackageMinus:MM,PackageOpen:yM,PackagePlus:xM,PackageSearch:wM,PackageX:bM,PaintBucket:CM,PaintRoller:_M,Paintbrush:EM,Paintbrush2:Ni,PaintbrushVertical:Ni,Palette:SM,Palmtree:rs,PanelBottom:kM,PanelBottomClose:DM,PanelBottomDashed:Bi,PanelBottomInactive:Bi,PanelBottomOpen:TM,PanelLeft:Pi,PanelLeftClose:Oi,PanelLeftDashed:Vi,PanelLeftInactive:Vi,PanelLeftOpen:Ii,PanelRight:HM,PanelRightClose:LM,PanelRightDashed:zi,PanelRightInactive:zi,PanelRightOpen:RM,PanelTop:OM,PanelTopClose:NM,PanelTopDashed:Fi,PanelTopInactive:Fi,PanelTopOpen:BM,PanelsLeftBottom:VM,PanelsLeftRight:Qr,PanelsRightBottom:IM,PanelsTopBottom:$i,PanelsTopLeft:Ui,Paperclip:PM,Parentheses:zM,ParkingCircle:Or,ParkingCircleOff:Br,ParkingMeter:FM,ParkingSquare:In,ParkingSquareOff:Vn,PartyPopper:UM,Pause:qM,PauseCircle:Vr,PauseOctagon:Ri,PawPrint:ZM,PcCase:WM,Pen:Zi,PenBox:ca,PenLine:qi,PenOff:jM,PenSquare:ca,PenTool:GM,Pencil:KM,PencilLine:XM,PencilOff:$M,PencilRuler:YM,Pentagon:JM,Percent:QM,PercentCircle:Ir,PercentDiamond:ei,PercentSquare:Pn,PersonStanding:t9,PhilippinePeso:e9,Phone:o9,PhoneCall:a9,PhoneForwarded:r9,PhoneIncoming:i9,PhoneMissed:n9,PhoneOff:s9,PhoneOutgoing:h9,Pi:d9,PiSquare:zn,Piano:c9,Pickaxe:l9,PictureInPicture:p9,PictureInPicture2:u9,PieChart:fr,PiggyBank:f9,Pilcrow:m9,PilcrowLeft:v9,PilcrowRight:g9,PilcrowSquare:Fn,Pill:y9,PillBottle:M9,Pin:w9,PinOff:x9,Pipette:b9,Pizza:A9,Plane:E9,PlaneLanding:C9,PlaneTakeoff:_9,Play:S9,PlayCircle:Pr,PlaySquare:Un,Plug:T9,Plug2:D9,PlugZap:Wi,PlugZap2:Wi,Plus:k9,PlusCircle:zr,PlusSquare:qn,Pocket:R9,PocketKnife:L9,Podcast:H9,Pointer:B9,PointerOff:N9,Popcorn:O9,Popsicle:V9,PoundSterling:I9,Power:z9,PowerCircle:Fr,PowerOff:P9,PowerSquare:Zn,Presentation:F9,Printer:q9,PrinterCheck:U9,Projector:Z9,Proportions:W9,Puzzle:j9,Pyramid:G9,QrCode:X9,Quote:$9,Rabbit:Y9,Radar:K9,Radiation:J9,Radical:Q9,Radio:ay,RadioReceiver:ty,RadioTower:ey,Radius:ry,RailSymbol:iy,Rainbow:ny,Rat:sy,Ratio:hy,Receipt:gy,ReceiptCent:oy,ReceiptEuro:dy,ReceiptIndianRupee:cy,ReceiptJapaneseYen:ly,ReceiptPoundSterling:uy,ReceiptRussianRuble:py,ReceiptSwissFranc:fy,ReceiptText:vy,RectangleEllipsis:ji,RectangleHorizontal:my,RectangleVertical:My,Recycle:yy,Redo:by,Redo2:xy,RedoDot:wy,RefreshCcw:Cy,RefreshCcwDot:Ay,RefreshCw:Ey,RefreshCwOff:_y,Refrigerator:Sy,Regex:Dy,RemoveFormatting:Ty,Repeat:Ry,Repeat1:ky,Repeat2:Ly,Replace:Ny,ReplaceAll:Hy,Reply:Oy,ReplyAll:By,Rewind:Vy,Ribbon:Iy,Rocket:Py,RockingChair:zy,RollerCoaster:Fy,Rotate3D:Gi,Rotate3d:Gi,RotateCcw:qy,RotateCcwSquare:Uy,RotateCw:Wy,RotateCwSquare:Zy,Route:Gy,RouteOff:jy,Router:Xy,Rows:Xi,Rows2:Xi,Rows3:$i,Rows4:$y,Rss:Yy,Ruler:Ky,RussianRuble:Jy,Sailboat:Qy,Salad:tx,Sandwich:ex,Satellite:rx,SatelliteDish:ax,Save:sx,SaveAll:ix,SaveOff:nx,Scale:hx,Scale3D:Yi,Scale3d:Yi,Scaling:ox,Scan:mx,ScanBarcode:dx,ScanEye:cx,ScanFace:lx,ScanHeart:ux,ScanLine:px,ScanQrCode:fx,ScanSearch:vx,ScanText:gx,ScatterChart:vr,School:Mx,School2:ss,Scissors:xx,ScissorsLineDashed:yx,ScissorsSquare:Wn,ScissorsSquareDashedBottom:gn,ScreenShare:bx,ScreenShareOff:wx,Scroll:Cx,ScrollText:Ax,Search:Tx,SearchCheck:_x,SearchCode:Ex,SearchSlash:Sx,SearchX:Dx,Section:kx,Send:Rx,SendHorizonal:Ki,SendHorizontal:Ki,SendToBack:Lx,SeparatorHorizontal:Hx,SeparatorVertical:Nx,Server:Ix,ServerCog:Bx,ServerCrash:Ox,ServerOff:Vx,Settings:zx,Settings2:Px,Shapes:Fx,Share:qx,Share2:Ux,Sheet:Zx,Shell:Wx,Shield:ew,ShieldAlert:jx,ShieldBan:Gx,ShieldCheck:Xx,ShieldClose:Ji,ShieldEllipsis:$x,ShieldHalf:Yx,ShieldMinus:Kx,ShieldOff:Jx,ShieldPlus:Qx,ShieldQuestion:tw,ShieldX:Ji,Ship:rw,ShipWheel:aw,Shirt:iw,ShoppingBag:nw,ShoppingBasket:sw,ShoppingCart:hw,Shovel:ow,ShowerHead:dw,Shrink:cw,Shrub:lw,Shuffle:uw,Sidebar:Pi,SidebarClose:Oi,SidebarOpen:Ii,Sigma:pw,SigmaSquare:jn,Signal:Mw,SignalHigh:fw,SignalLow:vw,SignalMedium:gw,SignalZero:mw,Signature:yw,Signpost:ww,SignpostBig:xw,Siren:bw,SkipBack:Aw,SkipForward:Cw,Skull:_w,Slack:Ew,Slash:Sw,SlashSquare:Gn,Slice:Dw,Sliders:Qi,SlidersHorizontal:Tw,SlidersVertical:Qi,Smartphone:Rw,SmartphoneCharging:kw,SmartphoneNfc:Lw,Smile:Nw,SmilePlus:Hw,Snail:Bw,Snowflake:Ow,Sofa:Vw,SortAsc:X2,SortDesc:W2,Soup:Iw,Space:Pw,Spade:zw,Sparkle:Fw,Sparkles:tn,Speaker:Uw,Speech:qw,SpellCheck:Ww,SpellCheck2:Zw,Spline:jw,Split:Gw,SplitSquareHorizontal:Xn,SplitSquareVertical:$n,SprayCan:Xw,Sprout:$w,Square:eb,SquareActivity:en,SquareArrowDown:nn,SquareArrowDownLeft:an,SquareArrowDownRight:rn,SquareArrowLeft:sn,SquareArrowOutDownLeft:hn,SquareArrowOutDownRight:on,SquareArrowOutUpLeft:dn,SquareArrowOutUpRight:cn,SquareArrowRight:ln,SquareArrowUp:fn,SquareArrowUpLeft:un,SquareArrowUpRight:pn,SquareAsterisk:vn,SquareBottomDashedScissors:gn,SquareChartGantt:m1,SquareCheck:Mn,SquareCheckBig:mn,SquareChevronDown:yn,SquareChevronLeft:xn,SquareChevronRight:wn,SquareChevronUp:bn,SquareCode:An,SquareDashed:En,SquareDashedBottom:Kw,SquareDashedBottomCode:Yw,SquareDashedKanban:Cn,SquareDashedMousePointer:_n,SquareDivide:Sn,SquareDot:Dn,SquareEqual:Tn,SquareFunction:kn,SquareGanttChart:m1,SquareKanban:Ln,SquareLibrary:Rn,SquareM:Hn,SquareMenu:Nn,SquareMinus:Bn,SquareMousePointer:On,SquareParking:In,SquareParkingOff:Vn,SquarePen:ca,SquarePercent:Pn,SquarePi:zn,SquarePilcrow:Fn,SquarePlay:Un,SquarePlus:qn,SquarePower:Zn,SquareRadical:Jw,SquareScissors:Wn,SquareSigma:jn,SquareSlash:Gn,SquareSplitHorizontal:Xn,SquareSplitVertical:$n,SquareSquare:Qw,SquareStack:tb,SquareTerminal:Yn,SquareUser:Jn,SquareUserRound:Kn,SquareX:Qn,Squircle:ab,Squirrel:rb,Stamp:ib,Star:hb,StarHalf:nb,StarOff:sb,Stars:tn,StepBack:ob,StepForward:db,Stethoscope:cb,Sticker:lb,StickyNote:ub,StopCircle:qr,Store:pb,StretchHorizontal:fb,StretchVertical:vb,Strikethrough:gb,Subscript:mb,Subtitles:ar,Sun:bb,SunDim:Mb,SunMedium:yb,SunMoon:xb,SunSnow:wb,Sunrise:Ab,Sunset:Cb,Superscript:_b,SwatchBook:Eb,SwissFranc:Sb,SwitchCamera:Db,Sword:Tb,Swords:kb,Syringe:Lb,Table:Pb,Table2:Rb,TableCellsMerge:Hb,TableCellsSplit:Nb,TableColumnsSplit:Bb,TableOfContents:Ob,TableProperties:Vb,TableRowsSplit:Ib,Tablet:Fb,TabletSmartphone:zb,Tablets:Ub,Tag:qb,Tags:Zb,Tally1:Wb,Tally2:jb,Tally3:Gb,Tally4:Xb,Tally5:$b,Tangent:Yb,Target:Kb,Telescope:Jb,Tent:tA,TentTree:Qb,Terminal:eA,TerminalSquare:Yn,TestTube:aA,TestTube2:ts,TestTubeDiagonal:ts,TestTubes:rA,Text:oA,TextCursor:nA,TextCursorInput:iA,TextQuote:sA,TextSearch:hA,TextSelect:es,TextSelection:es,Theater:dA,Thermometer:uA,ThermometerSnowflake:cA,ThermometerSun:lA,ThumbsDown:pA,ThumbsUp:fA,Ticket:wA,TicketCheck:vA,TicketMinus:gA,TicketPercent:mA,TicketPlus:MA,TicketSlash:yA,TicketX:xA,Tickets:AA,TicketsPlane:bA,Timer:EA,TimerOff:CA,TimerReset:_A,ToggleLeft:SA,ToggleRight:DA,Toilet:TA,Tornado:kA,Torus:LA,Touchpad:HA,TouchpadOff:RA,TowerControl:NA,ToyBrick:BA,Tractor:OA,TrafficCone:VA,Train:as,TrainFront:PA,TrainFrontTunnel:IA,TrainTrack:zA,TramFront:as,Trash:UA,Trash2:FA,TreeDeciduous:qA,TreePalm:rs,TreePine:ZA,Trees:WA,Trello:jA,TrendingDown:GA,TrendingUp:$A,TrendingUpDown:XA,Triangle:KA,TriangleAlert:is,TriangleRight:YA,Trophy:JA,Truck:QA,Turtle:tC,Tv:aC,Tv2:ns,TvMinimal:ns,TvMinimalPlay:eC,Twitch:rC,Twitter:iC,Type:sC,TypeOutline:nC,Umbrella:oC,UmbrellaOff:hC,Underline:dC,Undo:uC,Undo2:cC,UndoDot:lC,UnfoldHorizontal:pC,UnfoldVertical:fC,Ungroup:vC,University:ss,Unlink:mC,Unlink2:gC,Unlock:Di,UnlockKeyhole:Si,Unplug:MC,Upload:yC,UploadCloud:Yr,Usb:xC,User:kC,User2:us,UserCheck:wC,UserCheck2:hs,UserCircle:Wr,UserCircle2:Zr,UserCog:bC,UserCog2:os,UserMinus:AC,UserMinus2:ds,UserPen:CC,UserPlus:_C,UserPlus2:cs,UserRound:us,UserRoundCheck:hs,UserRoundCog:os,UserRoundMinus:ds,UserRoundPen:EC,UserRoundPlus:cs,UserRoundSearch:SC,UserRoundX:ls,UserSearch:DC,UserSquare:Jn,UserSquare2:Kn,UserX:TC,UserX2:ls,Users:LC,Users2:ps,UsersRound:ps,Utensils:vs,UtensilsCrossed:fs,UtilityPole:RC,Variable:HC,Vault:NC,Vegan:BC,VenetianMask:OC,Verified:K2,Vibrate:IC,VibrateOff:VC,Video:zC,VideoOff:PC,Videotape:FC,View:UC,Voicemail:qC,Volleyball:ZC,Volume:$C,Volume1:WC,Volume2:jC,VolumeOff:GC,VolumeX:XC,Vote:YC,Wallet:JC,Wallet2:gs,WalletCards:KC,WalletMinimal:gs,Wallpaper:QC,Wand:t_,Wand2:ms,WandSparkles:ms,Warehouse:e_,WashingMachine:a_,Watch:r_,Waves:n_,WavesLadder:i_,Waypoints:s_,Webcam:h_,Webhook:d_,WebhookOff:o_,Weight:c_,Wheat:u_,WheatOff:l_,WholeWord:p_,Wifi:M_,WifiHigh:f_,WifiLow:v_,WifiOff:g_,WifiZero:m_,Wind:x_,WindArrowDown:y_,Wine:b_,WineOff:w_,Workflow:A_,Worm:C_,WrapText:__,Wrench:E_,X:S_,XCircle:jr,XOctagon:Hi,XSquare:Qn,Youtube:D_,Zap:k_,ZapOff:T_,ZoomIn:L_,ZoomOut:R_},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=({icons:v={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(v).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${t}]`);if(Array.from(r).forEach(i=>z2(i,{nameAttr:t,icons:v,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(n=>z2(n,{nameAttr:"icon-name",icons:v,attrs:e})))}},B1="demo-ai-reader",C1={id:B1,title:"AI 编程实习手册",author:"课程示例 · 蔡子靖",type:"TXT",sizeLabel:"课程示例",content:["AI 编程实习手册","","第一章  从需求开始","","一个可交付的项目，不是从写代码开始，而是从理解问题开始。","先把用户要完成的任务说清楚，再把任务拆成可以验证的小步骤。PRD 负责描述要解决什么问题，技术设计负责说明准备如何解决，AGENTS 文档则把协作约定留给下一轮开发。","","第二章  让迭代留下痕迹","","第一次实现只需要覆盖最小可用范围。完成后通过真实操作发现问题，再把新增需求写回文档并进入下一轮开发。每次迭代都应该能回答三个问题：哪里变好了，如何验证，下一步是什么。","","第三章  把结果交付出去","","代码通过构建只是起点。桌面应用还需要实际启动、导入真实文件、切换章节，并确认关闭后再次打开仍能回到上次阅读位置。一个被验证过的作品，才真正完成了从想法到产品的旅程。","","结语","","保持好奇，持续交付。"].join(`
`),chapters:[{id:"demo-1",label:"第一章  从需求开始",start:2},{id:"demo-2",label:"第二章  让迭代留下痕迹",start:10},{id:"demo-3",label:"第三章  把结果交付出去",start:18},{id:"demo-4",label:"结语",start:26}],progress:18,currentChapter:0,importedAt:"课程示例"},_t={books:[],activeBookId:B1,theme:"light",search:"",epub:null,rendition:null,saveTimer:null,skipScrollUpdateUntil:0},B_={book:"book-open",add:"file-plus-2",folder:"folder-open",upload:"upload",list:"list",right:"panel-right",search:"search",sun:"sun",moon:"moon",back:"chevron-left",next:"chevron-right",close:"x"},_e=(v,t=17)=>`<i data-lucide="${B_[v]||v}" width="${t}" height="${t}" stroke-width="1.8"></i>`,O_=document.querySelector("#app");function aa(){return _t.books.find(v=>v.id===_t.activeBookId)||_t.books[0]}function Re(v=""){return v.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function _1(v){return`${Math.round(v||0)}%`}function V_(v){const t=(v==null?void 0:v.chapters)||[],e=_t.search.trim().toLowerCase();return t.map((r,i)=>({...r,index:i})).filter(r=>!e||r.label.toLowerCase().includes(e))}function Ge(){const v=aa()||C1,t=V_(v);document.documentElement.dataset.theme=_t.theme,O_.innerHTML=`
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">${_e("book",22)}<span>Lumen Reader</span><small>DESKTOP READER</small></div>
        <div class="topbar-actions">
          <label class="import-button" title="导入 TXT 或 EPUB 文件">
            ${_e("upload")}<span>导入书籍</span>
            <input id="file-input" type="file" accept=".txt,.epub,text/plain,application/epub+zip" />
          </label>
          <button class="icon-button" id="theme-toggle" title="切换主题">${_e(_t.theme==="light"?"moon":"sun")}</button>
        </div>
      </header>
      <main class="workspace">
        <aside class="library-panel">
          <div class="panel-heading"><div><span class="eyebrow">MY LIBRARY</span><h1>我的书架</h1></div><button class="small-icon-button" id="focus-import" title="导入新书">${_e("add",16)}</button></div>
          <div class="library-count">${_t.books.length} 本书 · 已保存阅读进度</div>
          <div class="book-list">
            ${_t.books.map(e=>`
              <button class="book-card ${e.id===v.id?"is-active":""}" data-book-id="${e.id}">
                <span class="book-cover ${e.type==="EPUB"?"cover-epub":""}">${e.type}</span>
                <span class="book-card-copy"><strong>${Re(e.title)}</strong><small>${Re(e.author||"未知作者")}</small><em>${_1(e.progress)}</em></span>
              </button>
            `).join("")}
          </div>
          <div class="library-footer"><span class="status-dot"></span><span>本地数据已同步</span></div>
        </aside>
        <section class="reader-panel">
          <div class="reader-toolbar">
            <div class="reader-meta"><span class="format-badge">${v.type}</span><div><h2>${Re(v.title)}</h2><p>${Re(v.author||"未知作者")} · ${Re(v.sizeLabel||"本地文件")}</p></div></div>
            <div class="reader-tools"><button class="tool-button" id="focus-search" title="搜索目录">${_e("search")}<span>搜索</span></button><button class="tool-button" id="toggle-toc" title="显示或隐藏目录">${_e("right")}<span>目录</span></button></div>
          </div>
          <div class="progress-line"><span style="width: ${Math.max(1,Math.min(100,v.progress||0))}%"></span></div>
          <div class="reader-stage">
            <div class="reader-content ${v.type==="EPUB"?"is-epub":""}" id="reader-content"></div>
            <div class="reader-empty" id="reader-empty" hidden></div>
          </div>
          <footer class="reader-footer"><button class="text-button" id="previous-chapter">${_e("back",15)}上一章</button><span id="reading-status">第 ${(v.currentChapter||0)+1} 章 · ${_1(v.progress)} 已读</span><button class="text-button" id="next-chapter">下一章${_e("next",15)}</button></footer>
        </section>
        <aside class="toc-panel" id="toc-panel">
          <div class="toc-heading"><div><span class="eyebrow">CONTENTS</span><h2>目录</h2></div><button class="small-icon-button" id="close-toc" title="关闭目录">${_e("close",16)}</button></div>
          <label class="search-field">${_e("search",15)}<input id="toc-search" type="search" placeholder="搜索章节" value="${Re(_t.search)}" /></label>
          <div class="toc-list">${t.length?t.map(e=>`<button class="toc-row ${e.index===(v.currentChapter||0)?"is-current":""}" data-chapter-index="${e.index}"><span>${String(e.index+1).padStart(2,"0")}</span><strong>${Re(e.label)}</strong>${e.index===(v.currentChapter||0)?`<i>${_e("right",14)}</i>`:""}</button>`).join(""):'<p class="no-results">没有匹配的章节</p>'}</div>
          <div class="toc-note">${v.type==="EPUB"?"EPUB 目录来自书籍内置导航。":"TXT 章节根据标题自动识别，也可以继续滚动阅读。"}</div>
        </aside>
      </main>
      <div class="toast" id="toast" role="status"></div>
    </div>
  `,N_({icons:H_}),I_(),v.type==="TXT"?P_(v):F_(v)}function I_(){var v,t,e,r,i,n,s,h,c;(v=document.querySelector("#file-input"))==null||v.addEventListener("change",U_),(t=document.querySelector("#focus-import"))==null||t.addEventListener("click",()=>{var l;return(l=document.querySelector("#file-input"))==null?void 0:l.click()}),(e=document.querySelector("#theme-toggle"))==null||e.addEventListener("click",()=>{_t.theme=_t.theme==="light"?"dark":"light",$e(),Ge()}),(r=document.querySelector("#toggle-toc"))==null||r.addEventListener("click",()=>{var l;return(l=document.querySelector("#toc-panel"))==null?void 0:l.classList.toggle("is-collapsed")}),(i=document.querySelector("#close-toc"))==null||i.addEventListener("click",()=>{var l;return(l=document.querySelector("#toc-panel"))==null?void 0:l.classList.add("is-collapsed")}),(n=document.querySelector("#focus-search"))==null||n.addEventListener("click",()=>{var l;return(l=document.querySelector("#toc-search"))==null?void 0:l.focus()}),(s=document.querySelector("#toc-search"))==null||s.addEventListener("input",l=>{_t.search=l.target.value,Ge();const f=document.querySelector("#toc-search");f==null||f.focus(),f==null||f.setSelectionRange(f.value.length,f.value.length)}),document.querySelectorAll("[data-book-id]").forEach(l=>l.addEventListener("click",()=>{_t.activeBookId=l.dataset.bookId,_t.search="",Ws(),$e(),Ge()})),document.querySelectorAll("[data-chapter-index]").forEach(l=>l.addEventListener("click",()=>M1(Number(l.dataset.chapterIndex)))),(h=document.querySelector("#previous-chapter"))==null||h.addEventListener("click",()=>M1(Math.max(0,(aa().currentChapter||0)-1))),(c=document.querySelector("#next-chapter"))==null||c.addEventListener("click",()=>M1(Math.min(aa().chapters.length-1,(aa().currentChapter||0)+1)))}function P_(v){const t=document.querySelector("#reader-content"),e=v.content.split(/\r?\n/);t.innerHTML=`<article class="txt-reader">${e.map(i=>i.trim()?`<p>${Re(i)}</p>`:'<div class="paragraph-gap"></div>').join("")}</article>`;const r=v.chapters[v.currentChapter||0];if(r){const n=t.querySelectorAll("p, .paragraph-gap")[r.start];n&&n.scrollIntoView({block:"start"})}t.addEventListener("scroll",()=>{if(Date.now()<_t.skipScrollUpdateUntil)return;const i=t.scrollHeight-t.clientHeight,n=i>0?t.scrollTop/i*100:0,s=z_(v,t.scrollTop);v.progress=Math.max(0,Math.min(100,n)),v.currentChapter=s,V1(v),js()},{passive:!0})}function z_(v,t){const e=document.querySelector("#reader-content"),r=(e==null?void 0:e.querySelectorAll("p, .paragraph-gap"))||[];let i=0;return v.chapters.forEach((n,s)=>{const h=r[n.start];h&&h.offsetTop-80<=t&&(i=s)}),i}async function F_(v){var e,r,i,n;const t=document.querySelector("#reader-content");if(!v.data){t.innerHTML='<div class="unsupported"><strong>没有找到 EPUB 内容</strong><span>请重新导入这个文件。</span></div>';return}try{_t.epub=Ve(Zs(v.data));const s=await _t.epub.loaded.navigation;if(!((e=v.chapters)!=null&&e.length)&&((r=s==null?void 0:s.toc)!=null&&r.length)){v.chapters=O1(s.toc),$e(),Ge();return}_t.rendition=_t.epub.renderTo(t,{width:"100%",height:"100%",spread:"none",flow:"scrolled"}),_t.rendition.on("relocated",h=>{var p,b;const c=(p=h==null?void 0:h.start)!=null&&p.percentage?h.start.percentage*100:v.progress;v.progress=Math.max(0,Math.min(100,c));const l=((b=h==null?void 0:h.start)==null?void 0:b.href)||"",f=v.chapters.findIndex(y=>l.includes(y.href));f>=0&&(v.currentChapter=f),V1(v),js()}),await _t.rendition.display(((n=(i=v.chapters)==null?void 0:i[v.currentChapter||0])==null?void 0:n.href)||void 0)}catch(s){t.innerHTML=`<div class="unsupported"><strong>EPUB 读取失败</strong><span>${Re(s.message||"文件格式暂不支持")}</span></div>`}}function O1(v,t=[]){return v.forEach(e=>{var r;t.push({id:e.href,label:e.label.trim(),href:e.href}),(r=e.subitems)!=null&&r.length&&O1(e.subitems,t)}),t}function M1(v){var e,r,i;const t=aa();if((e=t==null?void 0:t.chapters)!=null&&e[v]){if(t.currentChapter=v,t.type==="TXT"){const n=document.querySelector("#reader-content"),s=(n==null?void 0:n.querySelectorAll("p, .paragraph-gap"))||[];_t.skipScrollUpdateUntil=Date.now()+700,(r=s[t.chapters[v].start])==null||r.scrollIntoView({behavior:"smooth",block:"start"}),t.progress=Math.max(t.progress||0,Math.min(99,Math.round(v/Math.max(1,t.chapters.length-1)*100))),V1(t),$e()}else(i=_t.rendition)==null||i.display(t.chapters[v].href);document.querySelectorAll(".toc-row").forEach(n=>n.classList.toggle("is-current",Number(n.dataset.chapterIndex)===v))}}function V1(v){const t=document.querySelector("#reading-status"),e=document.querySelector(".progress-line span");t&&(t.textContent=`第 ${(v.currentChapter||0)+1} 章 · ${_1(v.progress)} 已读`),e&&(e.style.width=`${Math.max(1,Math.min(100,v.progress||0))}%`)}async function U_(v){var e,r,i,n,s;const t=(e=v.target.files)==null?void 0:e[0];if(t)try{const h=t.name.toLowerCase().endsWith(".epub")?"EPUB":"TXT",c=`${h.toLowerCase()}-${Date.now()}`,l={id:c,title:t.name.replace(/\.(txt|epub)$/i,""),author:"本地导入",type:h,sizeLabel:`${Math.max(1,Math.round(t.size/1024))} KB`,progress:0,currentChapter:0,importedAt:new Date().toLocaleDateString("zh-CN")};if(h==="TXT")l.content=await t.text(),l.chapters=q_(l.content);else{l.data=Z_(await t.arrayBuffer());const f=Ve(Zs(l.data)),p=await f.loaded.navigation;l.chapters=O1(p.toc||[]),l.title=((i=(r=f.packaging)==null?void 0:r.metadata)==null?void 0:i.title)||l.title,l.author=((s=(n=f.packaging)==null?void 0:n.metadata)==null?void 0:s.creator)||l.author,f.destroy()}_t.books=[l,..._t.books.filter(f=>f.id!==c)],_t.activeBookId=c,_t.search="",Ws(),await $e(),Ge(),Ms(`${h} 已导入，目录和阅读进度已启用`)}catch(h){Ms(`导入失败：${h.message||"请检查文件格式"}`)}finally{v.target.value=""}}function q_(v){const t=v.split(/\r?\n/),e=[],r=/^(第[\u4e00-\u9fa5\d]+[章节回].*|Chapter\s+\d+.*|[一二三四五六七八九十]+[、.].*)$/i;return t.forEach((i,n)=>{r.test(i.trim())&&e.push({id:`txt-${n}`,label:i.trim(),start:n})}),e.length?e:[{id:"txt-start",label:"正文",start:0}]}function Z_(v){let t="";const e=new Uint8Array(v),r=32768;for(let i=0;i<e.length;i+=r)t+=String.fromCharCode(...e.subarray(i,i+r));return btoa(t)}function Zs(v){const t=atob(v),e=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)e[r]=t.charCodeAt(r);return e.buffer}function Ws(){var v,t;(v=_t.rendition)==null||v.destroy(),(t=_t.epub)==null||t.destroy(),_t.rendition=null,_t.epub=null}function js(){window.clearTimeout(_t.saveTimer),_t.saveTimer=window.setTimeout($e,250)}async function $e(){var t;const v={books:_t.books,activeBookId:_t.activeBookId,theme:_t.theme};await((t=window.readerStore)==null?void 0:t.save(v))}function Ms(v){const t=document.querySelector("#toast");t&&(t.textContent=v,t.classList.add("is-visible"),window.setTimeout(()=>t.classList.remove("is-visible"),2400))}async function W_(){var t,e;const v=await((t=window.readerStore)==null?void 0:t.load());_t.books=(e=v==null?void 0:v.books)!=null&&e.length?v.books:[C1],_t.activeBookId=(v==null?void 0:v.activeBookId)||_t.books[0].id,_t.theme=(v==null?void 0:v.theme)||"light",_t.books.some(r=>r.id===B1)||_t.books.push(C1),Ge()}W_();
