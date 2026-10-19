(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Je(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var oa={exports:{}},La={exports:{}},Ra,U1;function xs(){if(U1)return Ra;U1=1;var v=void 0;return Ra=function(t){return t!==v&&t!==null},Ra}var Ha,q1;function h0(){if(q1)return Ha;q1=1;var v=xs(),t={object:!0,function:!0,undefined:!0};return Ha=function(e){return v(e)?hasOwnProperty.call(t,typeof e):!1},Ha}var Na,Z1;function o0(){if(Z1)return Na;Z1=1;var v=h0();return Na=function(t){if(!v(t))return!1;try{return t.constructor?t.constructor.prototype===t:!1}catch{return!1}},Na}var Ba,W1;function d0(){if(W1)return Ba;W1=1;var v=o0();return Ba=function(t){if(typeof t!="function"||!hasOwnProperty.call(t,"length"))return!1;try{if(typeof t.length!="number"||typeof t.call!="function"||typeof t.apply!="function")return!1}catch{return!1}return!v(t)},Ba}var Oa,j1;function c0(){if(j1)return Oa;j1=1;var v=d0(),t=/^\s*class[\s{/}]/,e=Function.prototype.toString;return Oa=function(r){return!(!v(r)||t.test(e.call(r)))},Oa}var Va,G1;function l0(){return G1||(G1=1,Va=function(){var v=Object.assign,t;return typeof v!="function"?!1:(t={foo:"raz"},v(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}),Va}var Ia,$1;function u0(){return $1||($1=1,Ia=function(){try{return Object.keys("primitive"),!0}catch{return!1}}),Ia}var Pa,X1;function p0(){return X1||(X1=1,Pa=function(){}),Pa}var za,Y1;function S1(){if(Y1)return za;Y1=1;var v=p0()();return za=function(t){return t!==v&&t!==null},za}var Fa,K1;function f0(){if(K1)return Fa;K1=1;var v=S1(),t=Object.keys;return Fa=function(e){return t(v(e)?Object(e):e)},Fa}var Ua,J1;function v0(){return J1||(J1=1,Ua=u0()()?Object.keys:f0()),Ua}var qa,Q1;function g0(){if(Q1)return qa;Q1=1;var v=S1();return qa=function(t){if(!v(t))throw new TypeError("Cannot use null or undefined");return t},qa}var Za,t2;function m0(){if(t2)return Za;t2=1;var v=v0(),t=g0(),e=Math.max;return Za=function(r,i){var n,s,h=e(arguments.length,2),c;for(r=Object(t(r)),c=function(l){try{r[l]=i[l]}catch(f){n||(n=f)}},s=1;s<h;++s)i=arguments[s],v(i).forEach(c);if(n!==void 0)throw n;return r},Za}var Wa,e2;function M0(){return e2||(e2=1,Wa=l0()()?Object.assign:m0()),Wa}var ja,a2;function y0(){if(a2)return ja;a2=1;var v=S1(),t=Array.prototype.forEach,e=Object.create,r=function(i,n){var s;for(s in i)n[s]=i[s]};return ja=function(i){var n=e(null);return t.call(arguments,function(s){v(s)&&r(Object(s),n)}),n},ja}var Ga,r2;function x0(){if(r2)return Ga;r2=1;var v="razdwatrzy";return Ga=function(){return typeof v.contains!="function"?!1:v.contains("dwa")===!0&&v.contains("foo")===!1},Ga}var $a,i2;function w0(){if(i2)return $a;i2=1;var v=String.prototype.indexOf;return $a=function(t){return v.call(this,t,arguments[1])>-1},$a}var Xa,n2;function b0(){return n2||(n2=1,Xa=x0()()?String.prototype.contains:w0()),Xa}var s2;function A0(){if(s2)return La.exports;s2=1;var v=xs(),t=c0(),e=M0(),r=y0(),i=b0(),n=La.exports=function(s,h){var c,l,f,p,w;return arguments.length<2||typeof s!="string"?(p=h,h=s,s=null):p=arguments[2],v(s)?(c=i.call(s,"c"),l=i.call(s,"e"),f=i.call(s,"w")):(c=f=!0,l=!1),w={value:h,configurable:c,enumerable:l,writable:f},p?e(r(p),w):w};return n.gs=function(s,h,c){var l,f,p,w;return typeof s!="string"?(p=c,c=h,h=s,s=null):p=arguments[3],v(h)?t(h)?v(c)?t(c)||(p=c,c=void 0):c=void 0:(p=h,h=c=void 0):h=void 0,v(s)?(l=i.call(s,"c"),f=i.call(s,"e")):(l=!0,f=!1),w={get:h,set:c,configurable:l,enumerable:f},p?e(r(p),w):w},La.exports}var Ya,h2;function C0(){return h2||(h2=1,Ya=function(v){if(typeof v!="function")throw new TypeError(v+" is not a function");return v}),Ya}var o2;function _0(){return o2||(o2=1,(function(v,t){var e=A0(),r=C0(),i=Function.prototype.apply,n=Function.prototype.call,s=Object.create,h=Object.defineProperty,c=Object.defineProperties,l=Object.prototype.hasOwnProperty,f={configurable:!0,enumerable:!1,writable:!0},p,w,M,L,A,u,g;p=function(y,E){var B;return r(E),l.call(this,"__ee__")?B=this.__ee__:(B=f.value=s(null),h(this,"__ee__",f),f.value=null),B[y]?typeof B[y]=="object"?B[y].push(E):B[y]=[B[y],E]:B[y]=E,this},w=function(y,E){var B,b;return r(E),b=this,p.call(this,y,B=function(){M.call(b,y,B),i.call(E,this,arguments)}),B.__eeOnceListener__=E,this},M=function(y,E){var B,b,k,R;if(r(E),!l.call(this,"__ee__"))return this;if(B=this.__ee__,!B[y])return this;if(b=B[y],typeof b=="object")for(R=0;k=b[R];++R)(k===E||k.__eeOnceListener__===E)&&(b.length===2?B[y]=b[R?0:1]:b.splice(R,1));else(b===E||b.__eeOnceListener__===E)&&delete B[y];return this},L=function(y){var E,B,b,k,R;if(l.call(this,"__ee__")&&(k=this.__ee__[y],!!k))if(typeof k=="object"){for(B=arguments.length,R=new Array(B-1),E=1;E<B;++E)R[E-1]=arguments[E];for(k=k.slice(),E=0;b=k[E];++E)i.call(b,this,R)}else switch(arguments.length){case 1:n.call(k,this);break;case 2:n.call(k,this,arguments[1]);break;case 3:n.call(k,this,arguments[1],arguments[2]);break;default:for(B=arguments.length,R=new Array(B-1),E=1;E<B;++E)R[E-1]=arguments[E];i.call(k,this,R)}},A={on:p,once:w,off:M,emit:L},u={on:e(p),once:e(w),off:e(M),emit:e(L)},g=c({},u),v.exports=t=function(y){return y==null?s(g):c(Object(y),u)},t.methods=A})(oa,oa.exports)),oa.exports}var E0=_0();const Re=Je(E0);var ea={},Ne={},qe={},d2;function Ca(){if(d2)return qe;d2=1;function v(i,n,s){if(s===void 0&&(s=Array.prototype),i&&typeof s.find=="function")return s.find.call(i,n);for(var h=0;h<i.length;h++)if(Object.prototype.hasOwnProperty.call(i,h)){var c=i[h];if(n.call(void 0,c,h,i))return c}}function t(i,n){return n===void 0&&(n=Object),n&&typeof n.freeze=="function"?n.freeze(i):i}var e=t({HTML:"text/html",isHTML:function(i){return i===e.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"image/svg+xml"}),r=t({HTML:"http://www.w3.org/1999/xhtml",isHTML:function(i){return i===r.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"});return qe.find=v,qe.freeze=t,qe.MIME_TYPE=e,qe.NAMESPACE=r,qe}var c2;function ws(){if(c2)return Ne;c2=1;var v=Ca(),t=v.find,e=v.NAMESPACE;function r(d){return d!==""}function i(d){return d?d.split(/[\t\n\f\r ]+/).filter(r):[]}function n(d,m){return d.hasOwnProperty(m)||(d[m]=!0),d}function s(d){if(!d)return[];var m=i(d);return Object.keys(m.reduce(n,{}))}function h(d){return function(m){return d&&d.indexOf(m)!==-1}}function c(d,m){for(var D in d)Object.prototype.hasOwnProperty.call(d,D)&&(m[D]=d[D])}function l(d,m){var D=d.prototype;if(!(D instanceof m)){let O=function(){};var o=O;O.prototype=m.prototype,O=new O,c(D,O),d.prototype=D=O}D.constructor!=d&&(typeof d!="function"&&console.error("unknown Class:"+d),D.constructor=d)}var f={},p=f.ELEMENT_NODE=1,w=f.ATTRIBUTE_NODE=2,M=f.TEXT_NODE=3,L=f.CDATA_SECTION_NODE=4,A=f.ENTITY_REFERENCE_NODE=5,u=f.ENTITY_NODE=6,g=f.PROCESSING_INSTRUCTION_NODE=7,y=f.COMMENT_NODE=8,E=f.DOCUMENT_NODE=9,B=f.DOCUMENT_TYPE_NODE=10,b=f.DOCUMENT_FRAGMENT_NODE=11,k=f.NOTATION_NODE=12,R={},H={};R.INDEX_SIZE_ERR=(H[1]="Index size error",1),R.DOMSTRING_SIZE_ERR=(H[2]="DOMString size error",2);var T=R.HIERARCHY_REQUEST_ERR=(H[3]="Hierarchy request error",3);R.WRONG_DOCUMENT_ERR=(H[4]="Wrong document",4),R.INVALID_CHARACTER_ERR=(H[5]="Invalid character",5),R.NO_DATA_ALLOWED_ERR=(H[6]="No data allowed",6),R.NO_MODIFICATION_ALLOWED_ERR=(H[7]="No modification allowed",7);var N=R.NOT_FOUND_ERR=(H[8]="Not found",8);R.NOT_SUPPORTED_ERR=(H[9]="Not supported",9);var j=R.INUSE_ATTRIBUTE_ERR=(H[10]="Attribute in use",10);R.INVALID_STATE_ERR=(H[11]="Invalid state",11),R.SYNTAX_ERR=(H[12]="Syntax error",12),R.INVALID_MODIFICATION_ERR=(H[13]="Invalid modification",13),R.NAMESPACE_ERR=(H[14]="Invalid namespace",14),R.INVALID_ACCESS_ERR=(H[15]="Invalid access",15);function q(d,m){if(m instanceof Error)var D=m;else D=this,Error.call(this,H[d]),this.message=H[d],Error.captureStackTrace&&Error.captureStackTrace(this,q);return D.code=d,m&&(this.message=this.message+": "+m),D}q.prototype=Error.prototype,c(R,q);function G(){}G.prototype={length:0,item:function(d){return d>=0&&d<this.length?this[d]:null},toString:function(d,m){for(var D=[],o=0;o<this.length;o++)Y(this[o],D,d,m);return D.join("")},filter:function(d){return Array.prototype.filter.call(this,d)},indexOf:function(d){return Array.prototype.indexOf.call(this,d)}};function at(d,m){this._node=d,this._refresh=m,tt(this)}function tt(d){var m=d._node._inc||d._node.ownerDocument._inc;if(d._inc!==m){var D=d._refresh(d._node);if(P(d,"length",D.length),!d.$$length||D.length<d.$$length)for(var o=D.length;o in d;o++)Object.prototype.hasOwnProperty.call(d,o)&&delete d[o];c(D,d),d._inc=m}}at.prototype.item=function(d){return tt(this),this[d]||null},l(at,G);function lt(){}function et(d,m){for(var D=d.length;D--;)if(d[D]===m)return D}function K(d,m,D,o){if(o?m[et(m,o)]=D:m[m.length++]=D,d){D.ownerElement=d;var O=d.ownerDocument;O&&(o&&jt(O,d,o),kt(O,d,D))}}function ot(d,m,D){var o=et(m,D);if(o>=0){for(var O=m.length-1;o<O;)m[o]=m[++o];if(m.length=O,d){var F=d.ownerDocument;F&&(jt(F,d,D),D.ownerElement=null)}}else throw new q(N,new Error(d.tagName+"@"+D))}lt.prototype={length:0,item:G.prototype.item,getNamedItem:function(d){for(var m=this.length;m--;){var D=this[m];if(D.nodeName==d)return D}},setNamedItem:function(d){var m=d.ownerElement;if(m&&m!=this._ownerElement)throw new q(j);var D=this.getNamedItem(d.nodeName);return K(this._ownerElement,this,d,D),D},setNamedItemNS:function(d){var m=d.ownerElement,D;if(m&&m!=this._ownerElement)throw new q(j);return D=this.getNamedItemNS(d.namespaceURI,d.localName),K(this._ownerElement,this,d,D),D},removeNamedItem:function(d){var m=this.getNamedItem(d);return ot(this._ownerElement,this,m),m},removeNamedItemNS:function(d,m){var D=this.getNamedItemNS(d,m);return ot(this._ownerElement,this,D),D},getNamedItemNS:function(d,m){for(var D=this.length;D--;){var o=this[D];if(o.localName==m&&o.namespaceURI==d)return o}return null}};function xt(){}xt.prototype={hasFeature:function(d,m){return!0},createDocument:function(d,m,D){var o=new Mt;if(o.implementation=this,o.childNodes=new G,o.doctype=D||null,D&&o.appendChild(D),m){var O=o.createElementNS(d,m);o.appendChild(O)}return o},createDocumentType:function(d,m,D){var o=new te;return o.name=d,o.nodeName=d,o.publicId=m||"",o.systemId=D||"",o}};function nt(){}nt.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(d,m){return Qt(this,d,m)},replaceChild:function(d,m){Qt(this,d,m,Gt),m&&this.removeChild(m)},removeChild:function(d){return mt(this,d)},appendChild:function(d){return this.insertBefore(d,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(d){return ut(this.ownerDocument||this,this,d)},normalize:function(){for(var d=this.firstChild;d;){var m=d.nextSibling;m&&m.nodeType==M&&d.nodeType==M?(this.removeChild(m),d.appendData(m.data)):(d.normalize(),d=m)}},isSupported:function(d,m){return this.ownerDocument.implementation.hasFeature(d,m)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(d){for(var m=this;m;){var D=m._nsMap;if(D){for(var o in D)if(Object.prototype.hasOwnProperty.call(D,o)&&D[o]===d)return o}m=m.nodeType==w?m.ownerDocument:m.parentNode}return null},lookupNamespaceURI:function(d){for(var m=this;m;){var D=m._nsMap;if(D&&d in D&&Object.prototype.hasOwnProperty.call(D,d))return D[d];m=m.nodeType==w?m.ownerDocument:m.parentNode}return null},isDefaultNamespace:function(d){var m=this.lookupPrefix(d);return m==null}};function ft(d){return d=="<"&&"&lt;"||d==">"&&"&gt;"||d=="&"&&"&amp;"||d=='"'&&"&quot;"||"&#"+d.charCodeAt()+";"}c(f,nt),c(f,nt.prototype);function Et(d,m){if(m(d))return!0;if(d=d.firstChild)do if(Et(d,m))return!0;while(d=d.nextSibling)}function Mt(){this.ownerDocument=this}function kt(d,m,D){d&&d._inc++;var o=D.namespaceURI;o===e.XMLNS&&(m._nsMap[D.prefix?D.localName:""]=D.value)}function jt(d,m,D,o){d&&d._inc++;var O=D.namespaceURI;O===e.XMLNS&&delete m._nsMap[D.prefix?D.localName:""]}function Pt(d,m,D){if(d&&d._inc){d._inc++;var o=m.childNodes;if(D)o[o.length++]=D;else{for(var O=m.firstChild,F=0;O;)o[F++]=O,O=O.nextSibling;o.length=F,delete o[o.length]}}}function mt(d,m){var D=m.previousSibling,o=m.nextSibling;return D?D.nextSibling=o:d.firstChild=o,o?o.previousSibling=D:d.lastChild=D,m.parentNode=null,m.previousSibling=null,m.nextSibling=null,Pt(d.ownerDocument,d),m}function It(d){return d&&(d.nodeType===nt.DOCUMENT_NODE||d.nodeType===nt.DOCUMENT_FRAGMENT_NODE||d.nodeType===nt.ELEMENT_NODE)}function Ut(d){return d&&(Tt(d)||St(d)||Ct(d)||d.nodeType===nt.DOCUMENT_FRAGMENT_NODE||d.nodeType===nt.COMMENT_NODE||d.nodeType===nt.PROCESSING_INSTRUCTION_NODE)}function Ct(d){return d&&d.nodeType===nt.DOCUMENT_TYPE_NODE}function Tt(d){return d&&d.nodeType===nt.ELEMENT_NODE}function St(d){return d&&d.nodeType===nt.TEXT_NODE}function Rt(d,m){var D=d.childNodes||[];if(t(D,Tt)||Ct(m))return!1;var o=t(D,Ct);return!(m&&o&&D.indexOf(o)>D.indexOf(m))}function qt(d,m){var D=d.childNodes||[];function o(F){return Tt(F)&&F!==m}if(t(D,o))return!1;var O=t(D,Ct);return!(m&&O&&D.indexOf(O)>D.indexOf(m))}function Vt(d,m,D){if(!It(d))throw new q(T,"Unexpected parent node type "+d.nodeType);if(D&&D.parentNode!==d)throw new q(N,"child not in parent");if(!Ut(m)||Ct(m)&&d.nodeType!==nt.DOCUMENT_NODE)throw new q(T,"Unexpected node type "+m.nodeType+" for parent node type "+d.nodeType)}function Lt(d,m,D){var o=d.childNodes||[],O=m.childNodes||[];if(m.nodeType===nt.DOCUMENT_FRAGMENT_NODE){var F=O.filter(Tt);if(F.length>1||t(O,St))throw new q(T,"More than one element or text in fragment");if(F.length===1&&!Rt(d,D))throw new q(T,"Element in fragment can not be inserted before doctype")}if(Tt(m)&&!Rt(d,D))throw new q(T,"Only one element can be added and only after doctype");if(Ct(m)){if(t(o,Ct))throw new q(T,"Only one doctype is allowed");var x=t(o,Tt);if(D&&o.indexOf(x)<o.indexOf(D))throw new q(T,"Doctype can only be inserted before an element");if(!D&&x)throw new q(T,"Doctype can not be appended since element is present")}}function Gt(d,m,D){var o=d.childNodes||[],O=m.childNodes||[];if(m.nodeType===nt.DOCUMENT_FRAGMENT_NODE){var F=O.filter(Tt);if(F.length>1||t(O,St))throw new q(T,"More than one element or text in fragment");if(F.length===1&&!qt(d,D))throw new q(T,"Element in fragment can not be inserted before doctype")}if(Tt(m)&&!qt(d,D))throw new q(T,"Only one element can be added and only after doctype");if(Ct(m)){let W=function(pt){return Ct(pt)&&pt!==D};var V=W;if(t(o,W))throw new q(T,"Only one doctype is allowed");var x=t(o,Tt);if(D&&o.indexOf(x)<o.indexOf(D))throw new q(T,"Doctype can only be inserted before an element")}}function Qt(d,m,D,o){Vt(d,m,D),d.nodeType===nt.DOCUMENT_NODE&&(o||Lt)(d,m,D);var O=m.parentNode;if(O&&O.removeChild(m),m.nodeType===b){var F=m.firstChild;if(F==null)return m;var x=m.lastChild}else F=x=m;var V=D?D.previousSibling:d.lastChild;F.previousSibling=V,x.nextSibling=D,V?V.nextSibling=F:d.firstChild=F,D==null?d.lastChild=x:D.previousSibling=x;do F.parentNode=d;while(F!==x&&(F=F.nextSibling));return Pt(d.ownerDocument||d,d),m.nodeType==b&&(m.firstChild=m.lastChild=null),m}function Kt(d,m){return m.parentNode&&m.parentNode.removeChild(m),m.parentNode=d,m.previousSibling=d.lastChild,m.nextSibling=null,m.previousSibling?m.previousSibling.nextSibling=m:d.firstChild=m,d.lastChild=m,Pt(d.ownerDocument,d,m),m}Mt.prototype={nodeName:"#document",nodeType:E,doctype:null,documentElement:null,_inc:1,insertBefore:function(d,m){if(d.nodeType==b){for(var D=d.firstChild;D;){var o=D.nextSibling;this.insertBefore(D,m),D=o}return d}return Qt(this,d,m),d.ownerDocument=this,this.documentElement===null&&d.nodeType===p&&(this.documentElement=d),d},removeChild:function(d){return this.documentElement==d&&(this.documentElement=null),mt(this,d)},replaceChild:function(d,m){Qt(this,d,m,Gt),d.ownerDocument=this,m&&this.removeChild(m),Tt(d)&&(this.documentElement=d)},importNode:function(d,m){return Q(this,d,m)},getElementById:function(d){var m=null;return Et(this.documentElement,function(D){if(D.nodeType==p&&D.getAttribute("id")==d)return m=D,!0}),m},getElementsByClassName:function(d){var m=s(d);return new at(this,function(D){var o=[];return m.length>0&&Et(D.documentElement,function(O){if(O!==D&&O.nodeType===p){var F=O.getAttribute("class");if(F){var x=d===F;if(!x){var V=s(F);x=m.every(h(V))}x&&o.push(O)}}}),o})},createElement:function(d){var m=new wt;m.ownerDocument=this,m.nodeName=d,m.tagName=d,m.localName=d,m.childNodes=new G;var D=m.attributes=new lt;return D._ownerElement=m,m},createDocumentFragment:function(){var d=new pe;return d.ownerDocument=this,d.childNodes=new G,d},createTextNode:function(d){var m=new re;return m.ownerDocument=this,m.appendData(d),m},createComment:function(d){var m=new ge;return m.ownerDocument=this,m.appendData(d),m},createCDATASection:function(d){var m=new ce;return m.ownerDocument=this,m.appendData(d),m},createProcessingInstruction:function(d,m){var D=new le;return D.ownerDocument=this,D.tagName=D.nodeName=D.target=d,D.nodeValue=D.data=m,D},createAttribute:function(d){var m=new At;return m.ownerDocument=this,m.name=d,m.nodeName=d,m.localName=d,m.specified=!0,m},createEntityReference:function(d){var m=new he;return m.ownerDocument=this,m.nodeName=d,m},createElementNS:function(d,m){var D=new wt,o=m.split(":"),O=D.attributes=new lt;return D.childNodes=new G,D.ownerDocument=this,D.nodeName=m,D.tagName=m,D.namespaceURI=d,o.length==2?(D.prefix=o[0],D.localName=o[1]):D.localName=m,O._ownerElement=D,D},createAttributeNS:function(d,m){var D=new At,o=m.split(":");return D.ownerDocument=this,D.nodeName=m,D.name=m,D.namespaceURI=d,D.specified=!0,o.length==2?(D.prefix=o[0],D.localName=o[1]):D.localName=m,D}},l(Mt,nt);function wt(){this._nsMap={}}wt.prototype={nodeType:p,hasAttribute:function(d){return this.getAttributeNode(d)!=null},getAttribute:function(d){var m=this.getAttributeNode(d);return m&&m.value||""},getAttributeNode:function(d){return this.attributes.getNamedItem(d)},setAttribute:function(d,m){var D=this.ownerDocument.createAttribute(d);D.value=D.nodeValue=""+m,this.setAttributeNode(D)},removeAttribute:function(d){var m=this.getAttributeNode(d);m&&this.removeAttributeNode(m)},appendChild:function(d){return d.nodeType===b?this.insertBefore(d,null):Kt(this,d)},setAttributeNode:function(d){return this.attributes.setNamedItem(d)},setAttributeNodeNS:function(d){return this.attributes.setNamedItemNS(d)},removeAttributeNode:function(d){return this.attributes.removeNamedItem(d.nodeName)},removeAttributeNS:function(d,m){var D=this.getAttributeNodeNS(d,m);D&&this.removeAttributeNode(D)},hasAttributeNS:function(d,m){return this.getAttributeNodeNS(d,m)!=null},getAttributeNS:function(d,m){var D=this.getAttributeNodeNS(d,m);return D&&D.value||""},setAttributeNS:function(d,m,D){var o=this.ownerDocument.createAttributeNS(d,m);o.value=o.nodeValue=""+D,this.setAttributeNode(o)},getAttributeNodeNS:function(d,m){return this.attributes.getNamedItemNS(d,m)},getElementsByTagName:function(d){return new at(this,function(m){var D=[];return Et(m,function(o){o!==m&&o.nodeType==p&&(d==="*"||o.tagName==d)&&D.push(o)}),D})},getElementsByTagNameNS:function(d,m){return new at(this,function(D){var o=[];return Et(D,function(O){O!==D&&O.nodeType===p&&(d==="*"||O.namespaceURI===d)&&(m==="*"||O.localName==m)&&o.push(O)}),o})}},Mt.prototype.getElementsByTagName=wt.prototype.getElementsByTagName,Mt.prototype.getElementsByTagNameNS=wt.prototype.getElementsByTagNameNS,l(wt,nt);function At(){}At.prototype.nodeType=w,l(At,nt);function yt(){}yt.prototype={data:"",substringData:function(d,m){return this.data.substring(d,d+m)},appendData:function(d){d=this.data+d,this.nodeValue=this.data=d,this.length=d.length},insertData:function(d,m){this.replaceData(d,0,m)},appendChild:function(d){throw new Error(H[T])},deleteData:function(d,m){this.replaceData(d,m,"")},replaceData:function(d,m,D){var o=this.data.substring(0,d),O=this.data.substring(d+m);D=o+D+O,this.nodeValue=this.data=D,this.length=D.length}},l(yt,nt);function re(){}re.prototype={nodeName:"#text",nodeType:M,splitText:function(d){var m=this.data,D=m.substring(d);m=m.substring(0,d),this.data=this.nodeValue=m,this.length=m.length;var o=this.ownerDocument.createTextNode(D);return this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling),o}},l(re,yt);function ge(){}ge.prototype={nodeName:"#comment",nodeType:y},l(ge,yt);function ce(){}ce.prototype={nodeName:"#cdata-section",nodeType:L},l(ce,yt);function te(){}te.prototype.nodeType=B,l(te,nt);function Me(){}Me.prototype.nodeType=k,l(Me,nt);function ue(){}ue.prototype.nodeType=u,l(ue,nt);function he(){}he.prototype.nodeType=A,l(he,nt);function pe(){}pe.prototype.nodeName="#document-fragment",pe.prototype.nodeType=b,l(pe,nt);function le(){}le.prototype.nodeType=g,l(le,nt);function $t(){}$t.prototype.serializeToString=function(d,m,D){return oe.call(d,m,D)},nt.prototype.toString=oe;function oe(d,m){var D=[],o=this.nodeType==9&&this.documentElement||this,O=o.prefix,F=o.namespaceURI;if(F&&O==null){var O=o.lookupPrefix(F);if(O==null)var x=[{namespace:F,prefix:null}]}return Y(this,D,d,m,x),D.join("")}function Ae(d,m,D){var o=d.prefix||"",O=d.namespaceURI;if(!O||o==="xml"&&O===e.XML||O===e.XMLNS)return!1;for(var F=D.length;F--;){var x=D[F];if(x.prefix===o)return x.namespace!==O}return!0}function _(d,m,D){d.push(" ",m,'="',D.replace(/[<&"]/g,ft),'"')}function Y(d,m,D,o,O){if(O||(O=[]),o)if(d=o(d),d){if(typeof d=="string"){m.push(d);return}}else return;switch(d.nodeType){case p:var F=d.attributes,x=F.length,Nt=d.firstChild,V=d.tagName;D=e.isHTML(d.namespaceURI)||D;var W=V;if(!D&&!d.prefix&&d.namespaceURI){for(var pt,st=0;st<F.length;st++)if(F.item(st).name==="xmlns"){pt=F.item(st).value;break}if(!pt)for(var dt=O.length-1;dt>=0;dt--){var bt=O[dt];if(bt.prefix===""&&bt.namespace===d.namespaceURI){pt=bt.namespace;break}}if(pt!==d.namespaceURI)for(var dt=O.length-1;dt>=0;dt--){var bt=O[dt];if(bt.namespace===d.namespaceURI){bt.prefix&&(W=bt.prefix+":"+V);break}}}m.push("<",W);for(var ie=0;ie<x;ie++){var Ht=F.item(ie);Ht.prefix=="xmlns"?O.push({prefix:Ht.localName,namespace:Ht.value}):Ht.nodeName=="xmlns"&&O.push({prefix:"",namespace:Ht.value})}for(var ie=0;ie<x;ie++){var Ht=F.item(ie);if(Ae(Ht,D,O)){var _t=Ht.prefix||"",Zt=Ht.namespaceURI;_(m,_t?"xmlns:"+_t:"xmlns",Zt),O.push({prefix:_t,namespace:Zt})}Y(Ht,m,D,o,O)}if(V===W&&Ae(d,D,O)){var _t=d.prefix||"",Zt=d.namespaceURI;_(m,_t?"xmlns:"+_t:"xmlns",Zt),O.push({prefix:_t,namespace:Zt})}if(Nt||D&&!/^(?:meta|link|img|br|hr|input)$/i.test(V)){if(m.push(">"),D&&/^script$/i.test(V))for(;Nt;)Nt.data?m.push(Nt.data):Y(Nt,m,D,o,O.slice()),Nt=Nt.nextSibling;else for(;Nt;)Y(Nt,m,D,o,O.slice()),Nt=Nt.nextSibling;m.push("</",W,">")}else m.push("/>");return;case E:case b:for(var Nt=d.firstChild;Nt;)Y(Nt,m,D,o,O.slice()),Nt=Nt.nextSibling;return;case w:return _(m,d.name,d.value);case M:return m.push(d.data.replace(/[<&]/g,ft).replace(/]]>/g,"]]&gt;"));case L:return m.push("<![CDATA[",d.data,"]]>");case y:return m.push("<!--",d.data,"-->");case B:var ne=d.publicId,me=d.systemId;if(m.push("<!DOCTYPE ",d.name),ne)m.push(" PUBLIC ",ne),me&&me!="."&&m.push(" ",me),m.push(">");else if(me&&me!=".")m.push(" SYSTEM ",me,">");else{var He=d.internalSubset;He&&m.push(" [",He,"]"),m.push(">")}return;case g:return m.push("<?",d.target," ",d.data,"?>");case A:return m.push("&",d.nodeName,";");default:m.push("??",d.nodeName)}}function Q(d,m,D){var o;switch(m.nodeType){case p:o=m.cloneNode(!1),o.ownerDocument=d;case b:break;case w:D=!0;break}if(o||(o=m.cloneNode(!1)),o.ownerDocument=d,o.parentNode=null,D)for(var O=m.firstChild;O;)o.appendChild(Q(d,O,D)),O=O.nextSibling;return o}function ut(d,m,D){var o=new m.constructor;for(var O in m)if(Object.prototype.hasOwnProperty.call(m,O)){var F=m[O];typeof F!="object"&&F!=o[O]&&(o[O]=F)}switch(m.childNodes&&(o.childNodes=new G),o.ownerDocument=d,o.nodeType){case p:var x=m.attributes,V=o.attributes=new lt,W=x.length;V._ownerElement=o;for(var pt=0;pt<W;pt++)o.setAttributeNode(ut(d,x.item(pt),!0));break;case w:D=!0}if(D)for(var st=m.firstChild;st;)o.appendChild(ut(d,st,D)),st=st.nextSibling;return o}function P(d,m,D){d[m]=D}try{if(Object.defineProperty){let d=function(m){switch(m.nodeType){case p:case b:var D=[];for(m=m.firstChild;m;)m.nodeType!==7&&m.nodeType!==8&&D.push(d(m)),m=m.nextSibling;return D.join("");default:return m.nodeValue}};var $=d;Object.defineProperty(at.prototype,"length",{get:function(){return tt(this),this.$$length}}),Object.defineProperty(nt.prototype,"textContent",{get:function(){return d(this)},set:function(m){switch(this.nodeType){case p:case b:for(;this.firstChild;)this.removeChild(this.firstChild);(m||String(m))&&this.appendChild(this.ownerDocument.createTextNode(m));break;default:this.data=m,this.value=m,this.nodeValue=m}}}),P=function(m,D,o){m["$$"+D]=o}}}catch{}return Ne.DocumentType=te,Ne.DOMException=q,Ne.DOMImplementation=xt,Ne.Element=wt,Ne.Node=nt,Ne.NodeList=G,Ne.XMLSerializer=$t,Ne}var Ze={},Ka={},l2;function S0(){return l2||(l2=1,(function(v){var t=Ca().freeze;v.XML_ENTITIES=t({amp:"&",apos:"'",gt:">",lt:"<",quot:'"'}),v.HTML_ENTITIES=t({Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",AMP:"&",amp:"&",And:"⩓",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",ap:"≈",apacir:"⩯",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",Barwed:"⌆",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",Because:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxDL:"╗",boxDl:"╖",boxdL:"╕",boxdl:"┐",boxDR:"╔",boxDr:"╓",boxdR:"╒",boxdr:"┌",boxH:"═",boxh:"─",boxHD:"╦",boxHd:"╤",boxhD:"╥",boxhd:"┬",boxHU:"╩",boxHu:"╧",boxhU:"╨",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxUL:"╝",boxUl:"╜",boxuL:"╛",boxul:"┘",boxUR:"╚",boxUr:"╙",boxuR:"╘",boxur:"└",boxV:"║",boxv:"│",boxVH:"╬",boxVh:"╫",boxvH:"╪",boxvh:"┼",boxVL:"╣",boxVl:"╢",boxvL:"╡",boxvl:"┤",boxVR:"╠",boxVr:"╟",boxvR:"╞",boxvr:"├",bprime:"‵",Breve:"˘",breve:"˘",brvbar:"¦",Bscr:"ℬ",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",Cap:"⋒",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",CenterDot:"·",centerdot:"·",Cfr:"ℭ",cfr:"𝔠",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",cir:"○",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",Colon:"∷",colon:":",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",Conint:"∯",conint:"∮",ContourIntegral:"∮",Copf:"ℂ",copf:"𝕔",coprod:"∐",Coproduct:"∐",COPY:"©",copy:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",Cross:"⨯",cross:"✗",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",Cup:"⋓",cup:"∪",cupbrcap:"⩈",CupCap:"≍",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",Dagger:"‡",dagger:"†",daleth:"ℸ",Darr:"↡",dArr:"⇓",darr:"↓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",DD:"ⅅ",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",Diamond:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",Downarrow:"⇓",downarrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",ecir:"≖",Ecirc:"Ê",ecirc:"ê",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",eDot:"≑",edot:"ė",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp:" ",emsp13:" ",emsp14:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",Escr:"ℰ",escr:"ℯ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",ExponentialE:"ⅇ",exponentiale:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",ForAll:"∀",forall:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",Fscr:"ℱ",fscr:"𝒻",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",gE:"≧",ge:"≥",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",Gg:"⋙",gg:"≫",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gl:"≷",gla:"⪥",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gnE:"≩",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",Gt:"≫",GT:">",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",hArr:"⇔",harr:"↔",harrcir:"⥈",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",Hfr:"ℌ",hfr:"𝔥",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",Hopf:"ℍ",hopf:"𝕙",horbar:"―",HorizontalLine:"─",Hscr:"ℋ",hscr:"𝒽",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",Ifr:"ℑ",ifr:"𝔦",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Im:"ℑ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",Implies:"⇒",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",Int:"∬",int:"∫",intcal:"⊺",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",Iscr:"ℐ",iscr:"𝒾",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",Lang:"⟪",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",Larr:"↞",lArr:"⇐",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",lAtail:"⤛",latail:"⤙",late:"⪭",lates:"⪭︀",lBarr:"⤎",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",lE:"≦",le:"≤",LeftAngleBracket:"⟨",LeftArrow:"←",Leftarrow:"⇐",leftarrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",Ll:"⋘",ll:"≪",llarr:"⇇",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnap:"⪉",lnapprox:"⪉",lnE:"≨",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftarrow:"⟵",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longleftrightarrow:"⟷",longmapsto:"⟼",LongRightArrow:"⟶",Longrightarrow:"⟹",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",Lscr:"ℒ",lscr:"𝓁",Lsh:"↰",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",Lt:"≪",LT:"<",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",Mscr:"ℳ",mscr:"𝓂",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",ne:"≠",nearhk:"⤤",neArr:"⇗",nearr:"↗",nearrow:"↗",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlArr:"⇍",nlarr:"↚",nldr:"‥",nlE:"≦̸",nle:"≰",nLeftarrow:"⇍",nleftarrow:"↚",nLeftrightarrow:"⇎",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",nopf:"𝕟",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nRightarrow:"⇏",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nVDash:"⊯",nVdash:"⊮",nvDash:"⊭",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwArr:"⇖",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",ocir:"⊚",Ocirc:"Ô",ocirc:"ô",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",Or:"⩔",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",Otimes:"⨷",otimes:"⊗",otimesas:"⨶",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",Popf:"ℙ",popf:"𝕡",pound:"£",Pr:"⪻",pr:"≺",prap:"⪷",prcue:"≼",prE:"⪳",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",Prime:"″",prime:"′",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportion:"∷",Proportional:"∝",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",Qopf:"ℚ",qopf:"𝕢",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",QUOT:'"',quot:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",Rang:"⟫",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",Rarr:"↠",rArr:"⇒",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",rAtail:"⤜",ratail:"⤚",ratio:"∶",rationals:"ℚ",RBarr:"⤐",rBarr:"⤏",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",Re:"ℜ",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",REG:"®",reg:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",Rfr:"ℜ",rfr:"𝔯",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrow:"→",Rightarrow:"⇒",rightarrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",Ropf:"ℝ",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",Rscr:"ℛ",rscr:"𝓇",Rsh:"↱",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",Sc:"⪼",sc:"≻",scap:"⪸",Scaron:"Š",scaron:"š",sccue:"≽",scE:"⪴",sce:"⪰",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",searhk:"⤥",seArr:"⇘",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",Square:"□",square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",Sub:"⋐",sub:"⊂",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",Subset:"⋐",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",Sum:"∑",sum:"∑",sung:"♪",Sup:"⋑",sup:"⊃",sup1:"¹",sup2:"²",sup3:"³",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",Supset:"⋑",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swArr:"⇙",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",Therefore:"∴",therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",thinsp:" ",ThinSpace:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",Tilde:"∼",tilde:"˜",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",TRADE:"™",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",Uarr:"↟",uArr:"⇑",uarr:"↑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrow:"↑",Uparrow:"⇑",uparrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",Updownarrow:"⇕",updownarrow:"↕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",upsi:"υ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTee:"⊥",UpTeeArrow:"↥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",vArr:"⇕",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",Vbar:"⫫",vBar:"⫨",vBarv:"⫩",Vcy:"В",vcy:"в",VDash:"⊫",Vdash:"⊩",vDash:"⊨",vdash:"⊢",Vdashl:"⫦",Vee:"⋁",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",Verbar:"‖",verbar:"|",Vert:"‖",vert:"|",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",Wedge:"⋀",wedge:"∧",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",Xi:"Ξ",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",Yuml:"Ÿ",yuml:"ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",Zfr:"ℨ",zfr:"𝔷",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",Zopf:"ℤ",zopf:"𝕫",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}),v.entityMap=v.HTML_ENTITIES})(Ka)),Ka}var da={},u2;function D0(){if(u2)return da;u2=1;var v=Ca().NAMESPACE,t=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,e=new RegExp("[\\-\\.0-9"+t.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),r=new RegExp("^"+t.source+e.source+"*(?::"+t.source+e.source+"*)?$"),i=0,n=1,s=2,h=3,c=4,l=5,f=6,p=7;function w(T,N){this.message=T,this.locator=N,Error.captureStackTrace&&Error.captureStackTrace(this,w)}w.prototype=new Error,w.prototype.name=w.name;function M(){}M.prototype={parse:function(T,N,j){var q=this.domBuilder;q.startDocument(),B(N,N={}),L(T,N,j,q,this.errorHandler),q.endDocument()}};function L(T,N,j,q,G){function at(wt){if(wt>65535){wt-=65536;var At=55296+(wt>>10),yt=56320+(wt&1023);return String.fromCharCode(At,yt)}else return String.fromCharCode(wt)}function tt(wt){var At=wt.slice(1,-1);return At in j?j[At]:At.charAt(0)==="#"?at(parseInt(At.substr(1).replace("x","0x"))):(G.error("entity not found:"+wt),wt)}function lt(wt){if(wt>Mt){var At=T.substring(Mt,wt).replace(/&#?\w+;/g,tt);nt&&et(Mt),q.characters(At,0,wt-Mt),Mt=wt}}function et(wt,At){for(;wt>=ot&&(At=xt.exec(T));)K=At.index,ot=K+At[0].length,nt.lineNumber++;nt.columnNumber=wt-K+1}for(var K=0,ot=0,xt=/.*(?:\r\n?|\n)|.*$/g,nt=q.locator,ft=[{currentNSMap:N}],Et={},Mt=0;;){try{var kt=T.indexOf("<",Mt);if(kt<0){if(!T.substr(Mt).match(/^\s*$/)){var jt=q.doc,Pt=jt.createTextNode(T.substr(Mt));jt.appendChild(Pt),q.currentElement=Pt}return}switch(kt>Mt&&lt(kt),T.charAt(kt+1)){case"/":var Vt=T.indexOf(">",kt+3),mt=T.substring(kt+2,Vt).replace(/[ \t\n\r]+$/g,""),It=ft.pop();Vt<0?(mt=T.substring(kt+2).replace(/[\s<].*/,""),G.error("end tag name: "+mt+" is not complete:"+It.tagName),Vt=kt+1+mt.length):mt.match(/\s</)&&(mt=mt.replace(/[\s<].*/,""),G.error("end tag name: "+mt+" maybe not complete"),Vt=kt+1+mt.length);var Ut=It.localNSMap,Ct=It.tagName==mt,Tt=Ct||It.tagName&&It.tagName.toLowerCase()==mt.toLowerCase();if(Tt){if(q.endElement(It.uri,It.localName,mt),Ut)for(var St in Ut)Object.prototype.hasOwnProperty.call(Ut,St)&&q.endPrefixMapping(St);Ct||G.fatalError("end tag name: "+mt+" is not match the current start tagName:"+It.tagName)}else ft.push(It);Vt++;break;case"?":nt&&et(kt),Vt=k(T,kt,q);break;case"!":nt&&et(kt),Vt=b(T,kt,q,G);break;default:nt&&et(kt);var Rt=new R,qt=ft[ft.length-1].currentNSMap,Vt=u(T,kt,Rt,qt,tt,G),Lt=Rt.length;if(!Rt.closed&&E(T,Vt,Rt.tagName,Et)&&(Rt.closed=!0,j.nbsp||G.warning("unclosed xml attribute")),nt&&Lt){for(var Gt=A(nt,{}),Qt=0;Qt<Lt;Qt++){var Kt=Rt[Qt];et(Kt.offset),Kt.locator=A(nt,{})}q.locator=Gt,g(Rt,q,qt)&&ft.push(Rt),q.locator=nt}else g(Rt,q,qt)&&ft.push(Rt);v.isHTML(Rt.uri)&&!Rt.closed?Vt=y(T,Vt,Rt.tagName,tt,q):Vt++}}catch(wt){if(wt instanceof w)throw wt;G.error("element parse error: "+wt),Vt=-1}Vt>Mt?Mt=Vt:lt(Math.max(kt,Mt)+1)}}function A(T,N){return N.lineNumber=T.lineNumber,N.columnNumber=T.columnNumber,N}function u(T,N,j,q,G,at){function tt(nt,ft,Et){j.attributeNames.hasOwnProperty(nt)&&at.fatalError("Attribute "+nt+" redefined"),j.addValue(nt,ft,Et)}for(var lt,et,K=++N,ot=i;;){var xt=T.charAt(K);switch(xt){case"=":if(ot===n)lt=T.slice(N,K),ot=h;else if(ot===s)ot=h;else throw new Error("attribute equal must after attrName");break;case"'":case'"':if(ot===h||ot===n)if(ot===n&&(at.warning('attribute value must after "="'),lt=T.slice(N,K)),N=K+1,K=T.indexOf(xt,N),K>0)et=T.slice(N,K).replace(/&#?\w+;/g,G),tt(lt,et,N-1),ot=l;else throw new Error("attribute value no end '"+xt+"' match");else if(ot==c)et=T.slice(N,K).replace(/&#?\w+;/g,G),tt(lt,et,N),at.warning('attribute "'+lt+'" missed start quot('+xt+")!!"),N=K+1,ot=l;else throw new Error('attribute value must after "="');break;case"/":switch(ot){case i:j.setTagName(T.slice(N,K));case l:case f:case p:ot=p,j.closed=!0;case c:case n:break;case s:j.closed=!0;break;default:throw new Error("attribute invalid close char('/')")}break;case"":return at.error("unexpected end of input"),ot==i&&j.setTagName(T.slice(N,K)),K;case">":switch(ot){case i:j.setTagName(T.slice(N,K));case l:case f:case p:break;case c:case n:et=T.slice(N,K),et.slice(-1)==="/"&&(j.closed=!0,et=et.slice(0,-1));case s:ot===s&&(et=lt),ot==c?(at.warning('attribute "'+et+'" missed quot(")!'),tt(lt,et.replace(/&#?\w+;/g,G),N)):((!v.isHTML(q[""])||!et.match(/^(?:disabled|checked|selected)$/i))&&at.warning('attribute "'+et+'" missed value!! "'+et+'" instead!!'),tt(et,et,N));break;case h:throw new Error("attribute value missed!!")}return K;case"":xt=" ";default:if(xt<=" ")switch(ot){case i:j.setTagName(T.slice(N,K)),ot=f;break;case n:lt=T.slice(N,K),ot=s;break;case c:var et=T.slice(N,K).replace(/&#?\w+;/g,G);at.warning('attribute "'+et+'" missed quot(")!!'),tt(lt,et,N);case l:ot=f;break}else switch(ot){case s:j.tagName,(!v.isHTML(q[""])||!lt.match(/^(?:disabled|checked|selected)$/i))&&at.warning('attribute "'+lt+'" missed value!! "'+lt+'" instead2!!'),tt(lt,lt,N),N=K,ot=n;break;case l:at.warning('attribute space is required"'+lt+'"!!');case f:ot=n,N=K;break;case h:ot=c,N=K;break;case p:throw new Error("elements closed character '/' and '>' must be connected to")}}K++}}function g(T,N,j){for(var q=T.tagName,G=null,xt=T.length;xt--;){var at=T[xt],tt=at.qName,lt=at.value,nt=tt.indexOf(":");if(nt>0)var et=at.prefix=tt.slice(0,nt),K=tt.slice(nt+1),ot=et==="xmlns"&&K;else K=tt,et=null,ot=tt==="xmlns"&&"";at.localName=K,ot!==!1&&(G==null&&(G={},B(j,j={})),j[ot]=G[ot]=lt,at.uri=v.XMLNS,N.startPrefixMapping(ot,lt))}for(var xt=T.length;xt--;){at=T[xt];var et=at.prefix;et&&(et==="xml"&&(at.uri=v.XML),et!=="xmlns"&&(at.uri=j[et||""]))}var nt=q.indexOf(":");nt>0?(et=T.prefix=q.slice(0,nt),K=T.localName=q.slice(nt+1)):(et=null,K=T.localName=q);var ft=T.uri=j[et||""];if(N.startElement(ft,K,q,T),T.closed){if(N.endElement(ft,K,q),G)for(et in G)Object.prototype.hasOwnProperty.call(G,et)&&N.endPrefixMapping(et)}else return T.currentNSMap=j,T.localNSMap=G,!0}function y(T,N,j,q,G){if(/^(?:script|textarea)$/i.test(j)){var at=T.indexOf("</"+j+">",N),tt=T.substring(N+1,at);if(/[&<]/.test(tt))return/^script$/i.test(j)?(G.characters(tt,0,tt.length),at):(tt=tt.replace(/&#?\w+;/g,q),G.characters(tt,0,tt.length),at)}return N+1}function E(T,N,j,q){var G=q[j];return G==null&&(G=T.lastIndexOf("</"+j+">"),G<N&&(G=T.lastIndexOf("</"+j)),q[j]=G),G<N}function B(T,N){for(var j in T)Object.prototype.hasOwnProperty.call(T,j)&&(N[j]=T[j])}function b(T,N,j,q){var G=T.charAt(N+2);switch(G){case"-":if(T.charAt(N+3)==="-"){var at=T.indexOf("-->",N+4);return at>N?(j.comment(T,N+4,at-N-4),at+3):(q.error("Unclosed comment"),-1)}else return-1;default:if(T.substr(N+3,6)=="CDATA["){var at=T.indexOf("]]>",N+9);return j.startCDATA(),j.characters(T,N+9,at-N-9),j.endCDATA(),at+3}var tt=H(T,N),lt=tt.length;if(lt>1&&/!doctype/i.test(tt[0][0])){var et=tt[1][0],K=!1,ot=!1;lt>3&&(/^public$/i.test(tt[2][0])?(K=tt[3][0],ot=lt>4&&tt[4][0]):/^system$/i.test(tt[2][0])&&(ot=tt[3][0]));var xt=tt[lt-1];return j.startDTD(et,K,ot),j.endDTD(),xt.index+xt[0].length}}return-1}function k(T,N,j){var q=T.indexOf("?>",N);if(q){var G=T.substring(N,q).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);return G?(G[0].length,j.processingInstruction(G[1],G[2]),q+2):-1}return-1}function R(){this.attributeNames={}}R.prototype={setTagName:function(T){if(!r.test(T))throw new Error("invalid tagName:"+T);this.tagName=T},addValue:function(T,N,j){if(!r.test(T))throw new Error("invalid attribute:"+T);this.attributeNames[T]=this.length,this[this.length++]={qName:T,value:N,offset:j}},length:0,getLocalName:function(T){return this[T].localName},getLocator:function(T){return this[T].locator},getQName:function(T){return this[T].qName},getURI:function(T){return this[T].uri},getValue:function(T){return this[T].value}};function H(T,N){var j,q=[],G=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(G.lastIndex=N,G.exec(T);j=G.exec(T);)if(q.push(j),j[1])return q}return da.XMLReader=M,da.ParseError=w,da}var p2;function k0(){if(p2)return Ze;p2=1;var v=Ca(),t=ws(),e=S0(),r=D0(),i=t.DOMImplementation,n=v.NAMESPACE,s=r.ParseError,h=r.XMLReader;function c(A){this.options=A||{locator:{}}}c.prototype.parseFromString=function(A,u){var g=this.options,y=new h,E=g.domBuilder||new f,B=g.errorHandler,b=g.locator,k=g.xmlns||{},R=/\/x?html?$/.test(u),H=R?e.HTML_ENTITIES:e.XML_ENTITIES;return b&&E.setDocumentLocator(b),y.errorHandler=l(B,E,b),y.domBuilder=g.domBuilder||E,R&&(k[""]=n.HTML),k.xml=k.xml||n.XML,A&&typeof A=="string"?y.parse(A,k,H):y.errorHandler.error("invalid doc source"),E.doc};function l(A,u,g){if(!A){if(u instanceof f)return u;A=u}var y={},E=A instanceof Function;g=g||{};function B(b){var k=A[b];!k&&E&&(k=A.length==2?function(R){A(b,R)}:A),y[b]=k&&function(R){k("[xmldom "+b+"]	"+R+w(g))}||function(){}}return B("warning"),B("error"),B("fatalError"),y}function f(){this.cdata=!1}function p(A,u){u.lineNumber=A.lineNumber,u.columnNumber=A.columnNumber}f.prototype={startDocument:function(){this.doc=new i().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(A,u,g,y){var E=this.doc,B=E.createElementNS(A,g||u),b=y.length;L(this,B),this.currentElement=B,this.locator&&p(this.locator,B);for(var k=0;k<b;k++){var A=y.getURI(k),R=y.getValue(k),g=y.getQName(k),H=E.createAttributeNS(A,g);this.locator&&p(y.getLocator(k),H),H.value=H.nodeValue=R,B.setAttributeNode(H)}},endElement:function(A,u,g){var y=this.currentElement;y.tagName,this.currentElement=y.parentNode},startPrefixMapping:function(A,u){},endPrefixMapping:function(A){},processingInstruction:function(A,u){var g=this.doc.createProcessingInstruction(A,u);this.locator&&p(this.locator,g),L(this,g)},ignorableWhitespace:function(A,u,g){},characters:function(A,u,g){if(A=M.apply(this,arguments),A){if(this.cdata)var y=this.doc.createCDATASection(A);else var y=this.doc.createTextNode(A);this.currentElement?this.currentElement.appendChild(y):/^\s*$/.test(A)&&this.doc.appendChild(y),this.locator&&p(this.locator,y)}},skippedEntity:function(A){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(A){(this.locator=A)&&(A.lineNumber=0)},comment:function(A,u,g){A=M.apply(this,arguments);var y=this.doc.createComment(A);this.locator&&p(this.locator,y),L(this,y)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(A,u,g){var y=this.doc.implementation;if(y&&y.createDocumentType){var E=y.createDocumentType(A,u,g);this.locator&&p(this.locator,E),L(this,E),this.doc.doctype=E}},warning:function(A){console.warn("[xmldom warning]	"+A,w(this.locator))},error:function(A){console.error("[xmldom error]	"+A,w(this.locator))},fatalError:function(A){throw new s(A,this.locator)}};function w(A){if(A)return`
@`+(A.systemId||"")+"#[line:"+A.lineNumber+",col:"+A.columnNumber+"]"}function M(A,u,g){return typeof A=="string"?A.substr(u,g):A.length>=u+g||u?new java.lang.String(A,u,g)+"":A}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(A){f.prototype[A]=function(){return null}});function L(A,u){A.currentElement?A.currentElement.appendChild(u):A.doc.appendChild(u)}return Ze.__DOMHandler=f,Ze.DOMParser=c,Ze.DOMImplementation=t.DOMImplementation,Ze.XMLSerializer=t.XMLSerializer,Ze}var f2;function T0(){if(f2)return ea;f2=1;var v=ws();return ea.DOMImplementation=v.DOMImplementation,ea.XMLSerializer=v.XMLSerializer,ea.DOMParser=k0().DOMParser,ea}var bs=T0();const D1=typeof window<"u"?window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame:!1,L0=1,R0=3,As=typeof URL<"u"?URL:typeof window<"u"?window.URL||window.webkitURL||window.mozURL:void 0;function _a(){var v=new Date().getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(v+Math.random()*16)%16|0;return v=Math.floor(v/16),(e=="x"?r:r&7|8).toString(16)});return t}function H0(){return Math.max(document.documentElement.clientHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight)}function Cs(v){return!!(v&&v.nodeType==1)}function Yt(v){return!isNaN(parseFloat(v))&&isFinite(v)}function _s(v){let t=parseFloat(v);return Yt(v)===!1?!1:typeof v=="string"&&v.indexOf(".")>-1?!0:Math.floor(t)!==t}function Ge(v){var t=["Webkit","webkit","Moz","O","ms"],e=["-webkit-","-webkit-","-moz-","-o-","-ms-"],r=v.toLowerCase(),i=t.length;if(typeof document>"u"||typeof document.body.style[r]<"u")return v;for(var n=0;n<i;n++)if(typeof document.body.style[e[n]+r]<"u")return e[n]+r;return v}function Es(v){for(var t=1,e=arguments.length;t<e;t++){var r=arguments[t];for(var i in r)v[i]===void 0&&(v[i]=r[i])}return v}function de(v){var t=[].slice.call(arguments,1);return t.forEach(function(e){e&&Object.getOwnPropertyNames(e).forEach(function(r){Object.defineProperty(v,r,Object.getOwnPropertyDescriptor(e,r))})}),v}function N0(v,t,e){var r=Ke(v,t,e);return t.splice(r,0,v),r}function Ke(v,t,e,r,i){var n=r||0,s=i||t.length,h=parseInt(n+(s-n)/2),c;return e||(e=function(l,f){if(l>f)return 1;if(l<f)return-1;if(l==f)return 0}),s-n<=0?h:(c=e(t[h],v),s-n===1?c>=0?h:h+1:c===0?h:c===-1?Ke(v,t,e,h,s):Ke(v,t,e,n,h))}function va(v,t,e,r,i){var n=r||0,s=i||t.length,h=parseInt(n+(s-n)/2),c;return e||(e=function(l,f){if(l>f)return 1;if(l<f)return-1;if(l==f)return 0}),s-n<=0?-1:(c=e(t[h],v),s-n===1?c===0?h:-1:c===0?h:c===-1?va(v,t,e,h,s):va(v,t,e,n,h))}function pa(v){var t=window.getComputedStyle(v),e=["width","paddingRight","paddingLeft","marginRight","marginLeft","borderRightWidth","borderLeftWidth"],r=["height","paddingTop","paddingBottom","marginTop","marginBottom","borderTopWidth","borderBottomWidth"],i=0,n=0;return e.forEach(function(s){i+=parseFloat(t[s])||0}),r.forEach(function(s){n+=parseFloat(t[s])||0}),{height:n,width:i}}function ga(v){var t=window.getComputedStyle(v),e=["paddingRight","paddingLeft","marginRight","marginLeft","borderRightWidth","borderLeftWidth"],r=["paddingTop","paddingBottom","marginTop","marginBottom","borderTopWidth","borderBottomWidth"],i=0,n=0;return e.forEach(function(s){i+=parseFloat(t[s])||0}),r.forEach(function(s){n+=parseFloat(t[s])||0}),{height:n,width:i}}function w1(v){let t,e=v.ownerDocument;if(v.nodeType==Node.TEXT_NODE){let r=e.createRange();r.selectNodeContents(v),t=r.getBoundingClientRect()}else t=v.getBoundingClientRect();return t}function ma(){var v=window.innerWidth,t=window.innerHeight;return{top:0,left:0,right:v,bottom:t,width:v,height:t}}function k1(v,t){for(var e=v.parentNode,r=e.childNodes,i,n=-1,s=0;s<r.length&&(i=r[s],i.nodeType===t&&n++,i!=v);s++);return n}function B0(v){return k1(v,R0)}function Ss(v){return k1(v,L0)}function ia(v){return["xml","opf","ncx"].indexOf(v)>-1}function Ds(v,t){return new Blob([v],{type:t})}function Ma(v,t){var e,r=Ds(v,t);return e=As.createObjectURL(r),e}function ks(v){return As.revokeObjectURL(v)}function b1(v,t){var e,r;if(typeof v=="string")return e=btoa(v),r="data:"+t+";base64,"+e,r}function Ts(v){return Object.prototype.toString.call(v).slice(8,-1)}function Te(v,t,e){var r,i;return typeof DOMParser>"u"||e?i=bs.DOMParser:i=DOMParser,v.charCodeAt(0)===65279&&(v=v.slice(1)),r=new i().parseFromString(v,t),r}function Wt(v,t){var e;if(!v)throw new Error("No Element Provided");if(typeof v.querySelector<"u")return v.querySelector(t);if(e=v.getElementsByTagName(t),e.length)return e[0]}function Oe(v,t){return typeof v.querySelector<"u"?v.querySelectorAll(t):v.getElementsByTagName(t)}function $e(v,t,e){var r,i;if(typeof v.querySelector<"u"){t+="[";for(var n in e)t+=n+"~='"+e[n]+"'";return t+="]",v.querySelector(t)}else if(r=v.getElementsByTagName(t),i=Array.prototype.slice.call(r,0).filter(function(s){for(var h in e)if(s.getAttribute(h)===e[h])return!0;return!1}),i)return i[0]}function ya(v,t){var e=v.ownerDocument||v;typeof e.createTreeWalker<"u"?Ls(v,t,NodeFilter.SHOW_TEXT):T1(v,function(r){r&&r.nodeType===3&&t(r)})}function Ls(v,t,e){var r=document.createTreeWalker(v,e,null,!1);let i;for(;i=r.nextNode();)t(i)}function T1(v,t){if(t(v))return!0;if(v=v.firstChild,v)do{if(T1(v,t))return!0;v=v.nextSibling}while(v)}function Rs(v){return new Promise(function(t,e){var r=new FileReader;r.readAsDataURL(v),r.onloadend=function(){t(r.result)}})}function Bt(){this.resolve=null,this.reject=null,this.id=_a(),this.promise=new Promise((v,t)=>{this.resolve=v,this.reject=t}),Object.freeze(this)}function xa(v,t,e){var r;if(typeof v.querySelector<"u"&&(r=v.querySelector(`${t}[*|type="${e}"]`)),!r||r.length===0){r=Oe(v,t);for(var i=0;i<r.length;i++)if(r[i].getAttributeNS("http://www.idpf.org/2007/ops","type")===e||r[i].getAttribute("epub:type")===e)return r[i]}else return r}function A1(v){for(var t=[],e=v.childNodes,r=0;r<e.length;r++){let i=e[r];i.nodeType===1&&t.push(i)}return t}function C1(v){for(var t=[v];v;v=v.parentNode)t.unshift(v);return t}function Xe(v,t,e){for(var r=[],i=v.childNodes,n=0;n<i.length;n++){let s=i[n];if(s.nodeType===1&&s.nodeName.toLowerCase()===t){if(e)return s;r.push(s)}}if(!e)return r}function O0(v,t){let e;if(!(v===null||t===""))for(e=v.parentNode;e.nodeType===1;){if(e.tagName.toLowerCase()===t)return e;e=e.parentNode}}class Hs{constructor(){this.collapsed=!1,this.commonAncestorContainer=void 0,this.endContainer=void 0,this.endOffset=void 0,this.startContainer=void 0,this.startOffset=void 0}setStart(t,e){this.startContainer=t,this.startOffset=e,this.endContainer?this.commonAncestorContainer=this._commonAncestorContainer():this.collapse(!0),this._checkCollapsed()}setEnd(t,e){this.endContainer=t,this.endOffset=e,this.startContainer?(this.collapsed=!1,this.commonAncestorContainer=this._commonAncestorContainer()):this.collapse(!1),this._checkCollapsed()}collapse(t){this.collapsed=!0,t?(this.endContainer=this.startContainer,this.endOffset=this.startOffset,this.commonAncestorContainer=this.startContainer.parentNode):(this.startContainer=this.endContainer,this.startOffset=this.endOffset,this.commonAncestorContainer=this.endOffset.parentNode)}selectNode(t){let e=t.parentNode,r=Array.prototype.indexOf.call(e.childNodes,t);this.setStart(e,r),this.setEnd(e,r+1)}selectNodeContents(t){t.childNodes[t.childNodes-1];let e=t.nodeType===3?t.textContent.length:parent.childNodes.length;this.setStart(t,0),this.setEnd(t,e)}_commonAncestorContainer(t,e){var r=C1(t||this.startContainer),i=C1(e||this.endContainer);if(r[0]==i[0]){for(var n=0;n<r.length;n++)if(r[n]!=i[n])return r[n-1]}}_checkCollapsed(){this.startContainer===this.endContainer&&this.startOffset===this.endOffset?this.collapsed=!0:this.collapsed=!1}toString(){}}const V0=Object.freeze(Object.defineProperty({__proto__:null,RangeObject:Hs,blob2base64:Rs,borders:ga,bounds:pa,createBase64Url:b1,createBlob:Ds,createBlobUrl:Ma,defaults:Es,defer:Bt,documentHeight:H0,extend:de,filterChildren:Xe,findChildren:A1,getParentByTagName:O0,indexOfElementNode:Ss,indexOfNode:k1,indexOfSorted:va,indexOfTextNode:B0,insert:N0,isElement:Cs,isFloat:_s,isNumber:Yt,isXml:ia,locationOf:Ke,nodeBounds:w1,parents:C1,parse:Te,prefixed:Ge,qs:Wt,qsa:Oe,qsp:$e,querySelectorByType:xa,requestAnimationFrame:D1,revokeBlobUrl:ks,sprint:ya,treeWalker:Ls,type:Ts,uuid:_a,walk:T1,windowBounds:ma},Symbol.toStringTag,{value:"Module"}));var Ja,v2;function I0(){if(v2)return Ja;if(v2=1,!v)var v={cwd:function(){return"/"}};function t(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+n)}function e(n,s){for(var h="",c=-1,l=0,f,p=0;p<=n.length;++p){if(p<n.length)f=n.charCodeAt(p);else{if(f===47)break;f=47}if(f===47){if(!(c===p-1||l===1))if(c!==p-1&&l===2){if(h.length<2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){for(var w=h.length-1,M=w;M>=0&&h.charCodeAt(M)!==47;--M);if(M!==w){M===-1?h="":h=h.slice(0,M),c=p,l=0;continue}}else if(h.length===2||h.length===1){h="",c=p,l=0;continue}}s&&(h.length>0?h+="/..":h="..")}else h.length>0?h+="/"+n.slice(c+1,p):h=n.slice(c+1,p);c=p,l=0}else f===46&&l!==-1?++l:l=-1}return h}function r(n,s){var h=s.dir||s.root,c=s.base||(s.name||"")+(s.ext||"");return h?h===s.root?h+c:h+n+c:c}var i={resolve:function(){for(var s="",h=!1,c,l=arguments.length-1;l>=-1&&!h;l--){var f;l>=0?f=arguments[l]:(c===void 0&&(c=v.cwd()),f=c),t(f),f.length!==0&&(s=f+"/"+s,h=f.charCodeAt(0)===47)}return s=e(s,!h),h?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(s){if(t(s),s.length===0)return".";var h=s.charCodeAt(0)===47,c=s.charCodeAt(s.length-1)===47;return s=e(s,!h),s.length===0&&!h&&(s="."),s.length>0&&c&&(s+="/"),h?"/"+s:s},isAbsolute:function(s){return t(s),s.length>0&&s.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var s,h=0;h<arguments.length;++h){var c=arguments[h];t(c),c.length>0&&(s===void 0?s=c:s+="/"+c)}return s===void 0?".":i.normalize(s)},relative:function(s,h){if(t(s),t(h),s===h||(s=i.resolve(s),h=i.resolve(h),s===h))return"";for(var c=1;c<s.length&&s.charCodeAt(c)===47;++c);for(var l=s.length,f=l-c,p=1;p<h.length&&h.charCodeAt(p)===47;++p);for(var w=h.length,M=w-p,L=f<M?f:M,A=-1,u=0;u<=L;++u){if(u===L){if(M>L){if(h.charCodeAt(p+u)===47)return h.slice(p+u+1);if(u===0)return h.slice(p+u)}else f>L&&(s.charCodeAt(c+u)===47?A=u:u===0&&(A=0));break}var g=s.charCodeAt(c+u),y=h.charCodeAt(p+u);if(g!==y)break;g===47&&(A=u)}var E="";for(u=c+A+1;u<=l;++u)(u===l||s.charCodeAt(u)===47)&&(E.length===0?E+="..":E+="/..");return E.length>0?E+h.slice(p+A):(p+=A,h.charCodeAt(p)===47&&++p,h.slice(p))},_makeLong:function(s){return s},dirname:function(s){if(t(s),s.length===0)return".";for(var h=s.charCodeAt(0),c=h===47,l=-1,f=!0,p=s.length-1;p>=1;--p)if(h=s.charCodeAt(p),h===47){if(!f){l=p;break}}else f=!1;return l===-1?c?"/":".":c&&l===1?"//":s.slice(0,l)},basename:function(s,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');t(s);var c=0,l=-1,f=!0,p;if(h!==void 0&&h.length>0&&h.length<=s.length){if(h.length===s.length&&h===s)return"";var w=h.length-1,M=-1;for(p=s.length-1;p>=0;--p){var L=s.charCodeAt(p);if(L===47){if(!f){c=p+1;break}}else M===-1&&(f=!1,M=p+1),w>=0&&(L===h.charCodeAt(w)?--w===-1&&(l=p):(w=-1,l=M))}return c===l?l=M:l===-1&&(l=s.length),s.slice(c,l)}else{for(p=s.length-1;p>=0;--p)if(s.charCodeAt(p)===47){if(!f){c=p+1;break}}else l===-1&&(f=!1,l=p+1);return l===-1?"":s.slice(c,l)}},extname:function(s){t(s);for(var h=-1,c=0,l=-1,f=!0,p=0,w=s.length-1;w>=0;--w){var M=s.charCodeAt(w);if(M===47){if(!f){c=w+1;break}continue}l===-1&&(f=!1,l=w+1),M===46?h===-1?h=w:p!==1&&(p=1):h!==-1&&(p=-1)}return h===-1||l===-1||p===0||p===1&&h===l-1&&h===c+1?"":s.slice(h,l)},format:function(s){if(s===null||typeof s!="object")throw new TypeError('Parameter "pathObject" must be an object, not '+typeof s);return r("/",s)},parse:function(s){t(s);var h={root:"",dir:"",base:"",ext:"",name:""};if(s.length===0)return h;var c=s.charCodeAt(0),l=c===47,f;l?(h.root="/",f=1):f=0;for(var p=-1,w=0,M=-1,L=!0,A=s.length-1,u=0;A>=f;--A){if(c=s.charCodeAt(A),c===47){if(!L){w=A+1;break}continue}M===-1&&(L=!1,M=A+1),c===46?p===-1?p=A:u!==1&&(u=1):p!==-1&&(u=-1)}return p===-1||M===-1||u===0||u===1&&p===M-1&&p===w+1?M!==-1&&(w===0&&l?h.base=h.name=s.slice(1,M):h.base=h.name=s.slice(w,M)):(w===0&&l?(h.name=s.slice(1,p),h.base=s.slice(1,M)):(h.name=s.slice(w,p),h.base=s.slice(w,M)),h.ext=s.slice(p,M)),w>0?h.dir=s.slice(0,w-1):l&&(h.dir="/"),h},sep:"/",delimiter:":",posix:null};return Ja=i,Ja}var P0=I0();const Ie=Je(P0);class Ve{constructor(t){var e,r;e=t.indexOf("://"),e>-1&&(t=new URL(t).pathname),r=this.parse(t),this.path=t,this.isDirectory(t)?this.directory=t:this.directory=r.dir+"/",this.filename=r.base,this.extension=r.ext.slice(1)}parse(t){return Ie.parse(t)}isAbsolute(t){return Ie.isAbsolute(t||this.path)}isDirectory(t){return t.charAt(t.length-1)==="/"}resolve(t){return Ie.resolve(this.directory,t)}relative(t){var e=t&&t.indexOf("://")>-1;return e?t:Ie.relative(this.directory,t)}splitPath(t){return this.splitPathRe.exec(t).slice(1)}toString(){return this.path}}class Se{constructor(t,e){var r=t.indexOf("://")>-1,i=t,n;if(this.Url=void 0,this.href=t,this.protocol="",this.origin="",this.hash="",this.hash="",this.search="",this.base=e,!r&&e!==!1&&typeof e!="string"&&window&&window.location&&(this.base=window.location.href),r||this.base)try{this.base?this.Url=new URL(t,this.base):this.Url=new URL(t),this.href=this.Url.href,this.protocol=this.Url.protocol,this.origin=this.Url.origin,this.hash=this.Url.hash,this.search=this.Url.search,i=this.Url.pathname+(this.Url.search?this.Url.search:"")}catch{this.Url=void 0,this.base&&(n=new Ve(this.base),i=n.resolve(i))}this.Path=new Ve(i),this.directory=this.Path.directory,this.filename=this.Path.filename,this.extension=this.Path.extension}path(){return this.Path}resolve(t){var e=t.indexOf("://")>-1,r;return e?t:(r=Ie.resolve(this.directory,t),this.origin+r)}relative(t){return Ie.relative(t,this.directory)}toString(){return this.href}}const We=1,we=3,z0=9;class Ot{constructor(t,e,r){var i;if(this.str="",this.base={},this.spinePos=0,this.range=!1,this.path={},this.start=null,this.end=null,!(this instanceof Ot))return new Ot(t,e,r);if(typeof e=="string"?this.base=this.parseComponent(e):typeof e=="object"&&e.steps&&(this.base=e),i=this.checkType(t),i==="string")return this.str=t,de(this,this.parse(t));if(i==="range")return de(this,this.fromRange(t,this.base,r));if(i==="node")return de(this,this.fromNode(t,this.base,r));if(i==="EpubCFI"&&t.path)return t;if(t)throw new TypeError("not a valid argument for EpubCFI");return this}checkType(t){return this.isCfiString(t)?"string":t&&typeof t=="object"&&(Ts(t)==="Range"||typeof t.startContainer<"u")?"range":t&&typeof t=="object"&&typeof t.nodeType<"u"?"node":t&&typeof t=="object"&&t instanceof Ot?"EpubCFI":!1}parse(t){var e={spinePos:-1,range:!1,base:{},path:{},start:null,end:null},r,i,n;return typeof t!="string"?{spinePos:-1}:(t.indexOf("epubcfi(")===0&&t[t.length-1]===")"&&(t=t.slice(8,t.length-1)),r=this.getChapterComponent(t),r?(e.base=this.parseComponent(r),i=this.getPathComponent(t),e.path=this.parseComponent(i),n=this.getRange(t),n&&(e.range=!0,e.start=this.parseComponent(n[0]),e.end=this.parseComponent(n[1])),e.spinePos=e.base.steps[1].index,e):{spinePos:-1})}parseComponent(t){var e={steps:[],terminal:{offset:null,assertion:null}},r=t.split(":"),i=r[0].split("/"),n;return r.length>1&&(n=r[1],e.terminal=this.parseTerminal(n)),i[0]===""&&i.shift(),e.steps=i.map((function(s){return this.parseStep(s)}).bind(this)),e}parseStep(t){var e,r,i,n,s;if(n=t.match(/\[(.*)\]/),n&&n[1]&&(s=n[1]),r=parseInt(t),!isNaN(r))return r%2===0?(e="element",i=r/2-1):(e="text",i=(r-1)/2),{type:e,index:i,id:s||null}}parseTerminal(t){var e,r,i=t.match(/\[(.*)\]/);return i&&i[1]?(e=parseInt(t.split("[")[0]),r=i[1]):e=parseInt(t),Yt(e)||(e=null),{offset:e,assertion:r}}getChapterComponent(t){var e=t.split("!");return e[0]}getPathComponent(t){var e=t.split("!");if(e[1])return e[1].split(",")[0]}getRange(t){var e=t.split(",");return e.length===3?[e[1],e[2]]:!1}getCharecterOffsetComponent(t){var e=t.split(":");return e[1]||""}joinSteps(t){return t?t.map(function(e){var r="";return e.type==="element"&&(r+=(e.index+1)*2),e.type==="text"&&(r+=1+2*e.index),e.id&&(r+="["+e.id+"]"),r}).join("/"):""}segmentString(t){var e="/";return e+=this.joinSteps(t.steps),t.terminal&&t.terminal.offset!=null&&(e+=":"+t.terminal.offset),t.terminal&&t.terminal.assertion!=null&&(e+="["+t.terminal.assertion+"]"),e}toString(){var t="epubcfi(";return t+=this.segmentString(this.base),t+="!",t+=this.segmentString(this.path),this.range&&this.start&&(t+=",",t+=this.segmentString(this.start)),this.range&&this.end&&(t+=",",t+=this.segmentString(this.end)),t+=")",t}compare(t,e){var r,i,n,s;if(typeof t=="string"&&(t=new Ot(t)),typeof e=="string"&&(e=new Ot(e)),t.spinePos>e.spinePos)return 1;if(t.spinePos<e.spinePos)return-1;t.range?(r=t.path.steps.concat(t.start.steps),n=t.start.terminal):(r=t.path.steps,n=t.path.terminal),e.range?(i=e.path.steps.concat(e.start.steps),s=e.start.terminal):(i=e.path.steps,s=e.path.terminal);for(var h=0;h<r.length;h++){if(!r[h])return-1;if(!i[h]||r[h].index>i[h].index)return 1;if(r[h].index<i[h].index)return-1}return r.length<i.length?-1:n.offset>s.offset?1:n.offset<s.offset?-1:0}step(t){var e=t.nodeType===we?"text":"element";return{id:t.id,tagName:t.tagName,type:e,index:this.position(t)}}filteredStep(t,e){var r=this.filter(t,e),i;if(r)return i=r.nodeType===we?"text":"element",{id:r.id,tagName:r.tagName,type:i,index:this.filteredPosition(r,e)}}pathTo(t,e,r){for(var i={steps:[],terminal:{offset:null,assertion:null}},n=t,s;n&&n.parentNode&&n.parentNode.nodeType!=z0;)r?s=this.filteredStep(n,r):s=this.step(n),s&&i.steps.unshift(s),n=n.parentNode;return e!=null&&e>=0&&(i.terminal.offset=e,i.steps[i.steps.length-1].type!="text"&&i.steps.push({type:"text",index:0})),i}equalStep(t,e){return!t||!e?!1:t.index===e.index&&t.id===e.id&&t.type===e.type}fromRange(t,e,r){var i={range:!1,base:{},path:{},start:null,end:null},n=t.startContainer,s=t.endContainer,h=t.startOffset,c=t.endOffset,l=!1;if(r&&(l=n.ownerDocument.querySelector("."+r)!=null),typeof e=="string"?(i.base=this.parseComponent(e),i.spinePos=i.base.steps[1].index):typeof e=="object"&&(i.base=e),t.collapsed)l&&(h=this.patchOffset(n,h,r)),i.path=this.pathTo(n,h,r);else{i.range=!0,l&&(h=this.patchOffset(n,h,r)),i.start=this.pathTo(n,h,r),l&&(c=this.patchOffset(s,c,r)),i.end=this.pathTo(s,c,r),i.path={steps:[],terminal:null};var f=i.start.steps.length,p;for(p=0;p<f&&this.equalStep(i.start.steps[p],i.end.steps[p]);p++)p===f-1?i.start.terminal===i.end.terminal&&(i.path.steps.push(i.start.steps[p]),i.range=!1):i.path.steps.push(i.start.steps[p]);i.start.steps=i.start.steps.slice(i.path.steps.length),i.end.steps=i.end.steps.slice(i.path.steps.length)}return i}fromNode(t,e,r){var i={range:!1,base:{},path:{},start:null,end:null};return typeof e=="string"?(i.base=this.parseComponent(e),i.spinePos=i.base.steps[1].index):typeof e=="object"&&(i.base=e),i.path=this.pathTo(t,null,r),i}filter(t,e){var r,i,n,s,h,c=!1;return t.nodeType===we?(c=!0,n=t.parentNode,r=t.parentNode.classList.contains(e)):(c=!1,r=t.classList.contains(e)),r&&c?(s=n.previousSibling,h=n.nextSibling,s&&s.nodeType===we?i=s:h&&h.nodeType===we&&(i=h),i||t):r&&!c?!1:t}patchOffset(t,e,r){if(t.nodeType!=we)throw new Error("Anchor must be a text node");var i=t,n=e;for(t.parentNode.classList.contains(r)&&(i=t.parentNode);i.previousSibling;){if(i.previousSibling.nodeType===We)if(i.previousSibling.classList.contains(r))n+=i.previousSibling.textContent.length;else break;else n+=i.previousSibling.textContent.length;i=i.previousSibling}return n}normalizedMap(t,e,r){var i={},n=-1,s,h=t.length,c,l;for(s=0;s<h;s++)c=t[s].nodeType,c===We&&t[s].classList.contains(r)&&(c=we),s>0&&c===we&&l===we?i[s]=n:e===c&&(n=n+1,i[s]=n),l=c;return i}position(t){var e,r;return t.nodeType===We?(e=t.parentNode.children,e||(e=A1(t.parentNode)),r=Array.prototype.indexOf.call(e,t)):(e=this.textNodes(t.parentNode),r=e.indexOf(t)),r}filteredPosition(t,e){var r,i,n;return t.nodeType===We?(r=t.parentNode.children,n=this.normalizedMap(r,We,e)):(r=t.parentNode.childNodes,t.parentNode.classList.contains(e)&&(t=t.parentNode,r=t.parentNode.childNodes),n=this.normalizedMap(r,we,e)),i=Array.prototype.indexOf.call(r,t),n[i]}stepsToXpath(t){var e=[".","*"];return t.forEach(function(r){var i=r.index+1;r.id?e.push("*[position()="+i+" and @id='"+r.id+"']"):r.type==="text"?e.push("text()["+i+"]"):e.push("*["+i+"]")}),e.join("/")}stepsToQuerySelector(t){var e=["html"];return t.forEach(function(r){var i=r.index+1;r.id?e.push("#"+r.id):r.type==="text"||e.push("*:nth-child("+i+")")}),e.join(">")}textNodes(t,e){return Array.prototype.slice.call(t.childNodes).filter(function(r){return r.nodeType===we?!0:!!(e&&r.classList.contains(e))})}walkToNode(t,e,r){var i=e||document,n=i.documentElement,s,h,c=t.length,l;for(l=0;l<c&&(h=t[l],h.type==="element"?h.id?n=i.getElementById(h.id):(s=n.children||A1(n),n=s[h.index]):h.type==="text"&&(n=this.textNodes(n,r)[h.index]),!!n);l++);return n}findNode(t,e,r){var i=e||document,n,s;return!r&&typeof i.evaluate<"u"?(s=this.stepsToXpath(t),n=i.evaluate(s,i,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue):r?n=this.walkToNode(t,i,r):n=this.walkToNode(t,i),n}fixMiss(t,e,r,i){var n=this.findNode(t.slice(0,-1),r,i),s=n.childNodes,h=this.normalizedMap(s,we,i),c,l,f=t[t.length-1].index;for(let p in h){if(!h.hasOwnProperty(p))return;if(h[p]===f)if(c=s[p],l=c.textContent.length,e>l)e=e-l;else{c.nodeType===We?n=c.childNodes[0]:n=c;break}}return{container:n,offset:e}}toRange(t,e){var r=t||document,i,n,s,h,c,l=this,f,p,w=e?r.querySelector("."+e)!=null:!1,M;if(typeof r.createRange<"u"?i=r.createRange():i=new Hs,l.range?(n=l.start,f=l.path.steps.concat(n.steps),h=this.findNode(f,r,w?e:null),s=l.end,p=l.path.steps.concat(s.steps),c=this.findNode(p,r,w?e:null)):(n=l.path,f=l.path.steps,h=this.findNode(l.path.steps,r,w?e:null)),h)try{n.terminal.offset!=null?i.setStart(h,n.terminal.offset):i.setStart(h,0)}catch{M=this.fixMiss(f,n.terminal.offset,r,w?e:null),i.setStart(M.container,M.offset)}else return console.log("No startContainer found for",this.toString()),null;if(c)try{s.terminal.offset!=null?i.setEnd(c,s.terminal.offset):i.setEnd(c,0)}catch{M=this.fixMiss(p,l.end.terminal.offset,r,w?e:null),i.setEnd(M.container,M.offset)}return i}isCfiString(t){return typeof t=="string"&&t.indexOf("epubcfi(")===0&&t[t.length-1]===")"}generateChapterComponent(t,e,r){var i=parseInt(e),n=(t+1)*2,s="/"+n+"/";return s+=(i+1)*2,r&&(s+="["+r+"]"),s}collapse(t){this.range&&(this.range=!1,t?(this.path.steps=this.path.steps.concat(this.start.steps),this.path.terminal=this.start.terminal):(this.path.steps=this.path.steps.concat(this.end.steps),this.path.terminal=this.end.terminal))}}class De{constructor(t){this.context=t||this,this.hooks=[]}register(){for(var t=0;t<arguments.length;++t)if(typeof arguments[t]=="function")this.hooks.push(arguments[t]);else for(var e=0;e<arguments[t].length;++e)this.hooks.push(arguments[t][e])}deregister(t){let e;for(let r=0;r<this.hooks.length;r++)if(e=this.hooks[r],e===t){this.hooks.splice(r,1);break}}trigger(){var t=arguments,e=this.context,r=[];return this.hooks.forEach(function(i){try{var n=i.apply(e,t)}catch(s){console.log(s)}n&&typeof n.then=="function"&&r.push(n)}),Promise.all(r)}list(){return this.hooks}clear(){return this.hooks=[]}}function Ns(v,t){var e,r,i=t.url,n=i.indexOf("://")>-1;v&&(r=Wt(v,"head"),e=Wt(r,"base"),e||(e=v.createElement("base"),r.insertBefore(e,r.firstChild)),!n&&window&&window.location&&(i=window.location.origin+i),e.setAttribute("href",i))}function F0(v,t){var e,r,i=t.canonical;v&&(e=Wt(v,"head"),r=Wt(e,"link[rel='canonical']"),r?r.setAttribute("href",i):(r=v.createElement("link"),r.setAttribute("rel","canonical"),r.setAttribute("href",i),e.appendChild(r)))}function U0(v,t){var e,r,i=t.idref;v&&(e=Wt(v,"head"),r=Wt(e,"link[property='dc.identifier']"),r?r.setAttribute("content",i):(r=v.createElement("meta"),r.setAttribute("name","dc.identifier"),r.setAttribute("content",i),e.appendChild(r)))}function q0(v,t){var e=v.querySelectorAll("a[href]");if(e.length)for(var r=Wt(v.ownerDocument,"base"),i=r?r.getAttribute("href"):void 0,n=(function(h){var c=h.getAttribute("href");if(c.indexOf("mailto:")!==0){var l=c.indexOf("://")>-1;if(l)h.setAttribute("target","_blank");else{var f;try{f=new Se(c,i)}catch{}h.onclick=function(){return f&&f.hash?t(f.Path.path+f.hash):t(f?f.Path.path:c),!1}}}}).bind(this),s=0;s<e.length;s++)n(e[s])}function g2(v,t,e){return t.forEach(function(r,i){r&&e[i]&&(r=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),v=v.replace(new RegExp(r,"g"),e[i]))}),v}function na(v,t,e,r){var i=typeof window<"u"?window.URL:!1,n=i?"blob":"arraybuffer",s=new Bt,h=new XMLHttpRequest,c=XMLHttpRequest.prototype,l;"overrideMimeType"in c||Object.defineProperty(c,"overrideMimeType",{value:function(){}}),e&&(h.withCredentials=!0),h.onreadystatechange=p,h.onerror=f,h.open("GET",v,!0);for(l in r)h.setRequestHeader(l,r[l]);t=="json"&&h.setRequestHeader("Accept","application/json"),t||(t=new Ve(v).extension),t=="blob"&&(h.responseType=n),ia(t)&&h.overrideMimeType("text/xml"),t=="binary"&&(h.responseType="arraybuffer"),h.send();function f(w){s.reject(w)}function p(){if(this.readyState===XMLHttpRequest.DONE){var w=!1;if((this.responseType===""||this.responseType==="document")&&(w=this.responseXML),this.status===200||this.status===0||w){var M;if(!this.response&&!w)return s.reject({status:this.status,message:"Empty Response",stack:new Error().stack}),s.promise;if(this.status===403)return s.reject({status:this.status,response:this.response,message:"Forbidden",stack:new Error().stack}),s.promise;w?M=this.responseXML:ia(t)?M=Te(this.response,"text/xml"):t=="xhtml"?M=Te(this.response,"application/xhtml+xml"):t=="html"||t=="htm"?M=Te(this.response,"text/html"):t=="json"?M=JSON.parse(this.response):t=="blob"?i?M=this.response:M=new Blob([this.response]):M=this.response,s.resolve(M)}else s.reject({status:this.status,message:this.response,stack:new Error().stack})}}return s.promise}let Z0=class{constructor(t,e){this.idref=t.idref,this.linear=t.linear==="yes",this.properties=t.properties,this.index=t.index,this.href=t.href,this.url=t.url,this.canonical=t.canonical,this.next=t.next,this.prev=t.prev,this.cfiBase=t.cfiBase,e?this.hooks=e:(this.hooks={},this.hooks.serialize=new De(this),this.hooks.content=new De(this)),this.document=void 0,this.contents=void 0,this.output=void 0}load(t){var e=t||this.request||na,r=new Bt,i=r.promise;return this.contents?r.resolve(this.contents):e(this.url).then((function(n){return this.document=n,this.contents=n.documentElement,this.hooks.content.trigger(this.document,this)}).bind(this)).then((function(){r.resolve(this.contents)}).bind(this)).catch(function(n){r.reject(n)}),i}base(){return Ns(this.document,this)}render(t){var e=new Bt,r=e.promise;return this.output,this.load(t).then((function(i){var n=typeof navigator<"u"&&navigator.userAgent||"",s=n.indexOf("Trident")>=0,h;typeof XMLSerializer>"u"||s?h=bs.DOMParser:h=XMLSerializer;var c=new h;return this.output=c.serializeToString(i),this.output}).bind(this)).then((function(){return this.hooks.serialize.trigger(this.output,this)}).bind(this)).then((function(){e.resolve(this.output)}).bind(this)).catch(function(i){e.reject(i)}),r}find(t){var e=this,r=[],i=t.toLowerCase(),n=function(s){for(var h=s.textContent.toLowerCase(),c=e.document.createRange(),l,f,p=-1,w,M=150;f!=-1;)f=h.indexOf(i,p+1),f!=-1&&(c=e.document.createRange(),c.setStart(s,f),c.setEnd(s,f+i.length),l=e.cfiFromRange(c),s.textContent.length<M?w=s.textContent:(w=s.textContent.substring(f-M/2,f+M/2),w="..."+w+"..."),r.push({cfi:l,excerpt:w})),p=f};return ya(e.document,function(s){n(s)}),r}search(t,e=5){if(typeof document.createTreeWalker>"u")return this.find(t);let r=[];const i=150,n=this,s=t.toLowerCase(),h=function(p){const L=p.reduce((A,u)=>A+u.textContent,"").toLowerCase().indexOf(s);if(L!=-1){const u=L+s.length;let g=0,y=0;if(L<p[0].length){let E;for(;g<p.length-1&&(y+=p[g].length,!(u<=y));)g+=1;let B=p[0],b=p[g],k=n.document.createRange();k.setStart(B,L);let R=p.slice(0,g).reduce((T,N)=>T+N.textContent.length,0);k.setEnd(b,R>u?u:u-R),E=n.cfiFromRange(k);let H=p.slice(0,g+1).reduce((T,N)=>T+N.textContent,"");H.length>i&&(H=H.substring(L-i/2,L+i/2),H="..."+H+"..."),r.push({cfi:E,excerpt:H})}}},c=document.createTreeWalker(n.document,NodeFilter.SHOW_TEXT,null,!1);let l,f=[];for(;l=c.nextNode();)f.push(l),f.length==e&&(h(f.slice(0,e)),f=f.slice(1,e));return f.length>0&&h(f),r}reconcileLayoutSettings(t){var e={layout:t.layout,spread:t.spread,orientation:t.orientation};return this.properties.forEach(function(r){var i=r.replace("rendition:",""),n=i.indexOf("-"),s,h;n!=-1&&(s=i.slice(0,n),h=i.slice(n+1),e[s]=h)}),e}cfiFromRange(t){return new Ot(t,this.cfiBase).toString()}cfiFromElement(t){return new Ot(t,this.cfiBase).toString()}unload(){this.document=void 0,this.contents=void 0,this.output=void 0}destroy(){this.unload(),this.hooks.serialize.clear(),this.hooks.content.clear(),this.hooks=void 0,this.idref=void 0,this.linear=void 0,this.properties=void 0,this.index=void 0,this.href=void 0,this.url=void 0,this.next=void 0,this.prev=void 0,this.cfiBase=void 0}};class W0{constructor(){this.spineItems=[],this.spineByHref={},this.spineById={},this.hooks={},this.hooks.serialize=new De,this.hooks.content=new De,this.hooks.content.register(Ns),this.hooks.content.register(F0),this.hooks.content.register(U0),this.epubcfi=new Ot,this.loaded=!1,this.items=void 0,this.manifest=void 0,this.spineNodeIndex=void 0,this.baseUrl=void 0,this.length=void 0}unpack(t,e,r){this.items=t.spine,this.manifest=t.manifest,this.spineNodeIndex=t.spineNodeIndex,this.baseUrl=t.baseUrl||t.basePath||"",this.length=this.items.length,this.items.forEach((i,n)=>{var s=this.manifest[i.idref],h;i.index=n,i.cfiBase=this.epubcfi.generateChapterComponent(this.spineNodeIndex,i.index,i.id),i.href&&(i.url=e(i.href,!0),i.canonical=r(i.href)),s&&(i.href=s.href,i.url=e(i.href,!0),i.canonical=r(i.href),s.properties.length&&i.properties.push.apply(i.properties,s.properties)),i.linear==="yes"?(i.prev=(function(){let c=i.index;for(;c>0;){let l=this.get(c-1);if(l&&l.linear)return l;c-=1}}).bind(this),i.next=(function(){let c=i.index;for(;c<this.spineItems.length-1;){let l=this.get(c+1);if(l&&l.linear)return l;c+=1}}).bind(this)):(i.prev=function(){},i.next=function(){}),h=new Z0(i,this.hooks),this.append(h)}),this.loaded=!0}get(t){var e=0;if(typeof t>"u")for(;e<this.spineItems.length;){let r=this.spineItems[e];if(r&&r.linear)break;e+=1}else this.epubcfi.isCfiString(t)?e=new Ot(t).spinePos:typeof t=="number"||isNaN(t)===!1?e=t:typeof t=="string"&&t.indexOf("#")===0?e=this.spineById[t.substring(1)]:typeof t=="string"&&(t=t.split("#")[0],e=this.spineByHref[t]||this.spineByHref[encodeURI(t)]);return this.spineItems[e]||null}append(t){var e=this.spineItems.length;return t.index=e,this.spineItems.push(t),this.spineByHref[decodeURI(t.href)]=e,this.spineByHref[encodeURI(t.href)]=e,this.spineByHref[t.href]=e,this.spineById[t.idref]=e,e}prepend(t){return this.spineByHref[t.href]=0,this.spineById[t.idref]=0,this.spineItems.forEach(function(e,r){e.index=r}),0}remove(t){var e=this.spineItems.indexOf(t);if(e>-1)return delete this.spineByHref[t.href],delete this.spineById[t.idref],this.spineItems.splice(e,1)}each(){return this.spineItems.forEach.apply(this.spineItems,arguments)}first(){let t=0;do{let e=this.get(t);if(e&&e.linear)return e;t+=1}while(t<this.spineItems.length)}last(){let t=this.spineItems.length-1;do{let e=this.get(t);if(e&&e.linear)return e;t-=1}while(t>=0)}destroy(){this.each(t=>t.destroy()),this.spineItems=void 0,this.spineByHref=void 0,this.spineById=void 0,this.hooks.serialize.clear(),this.hooks.content.clear(),this.hooks=void 0,this.epubcfi=void 0,this.loaded=!1,this.items=void 0,this.manifest=void 0,this.spineNodeIndex=void 0,this.baseUrl=void 0,this.length=void 0}}class L1{constructor(t){this._q=[],this.context=t,this.tick=D1,this.running=!1,this.paused=!1}enqueue(){var t,e,r,i=[].shift.call(arguments),n=arguments;if(!i)throw new Error("No Task Provided");return typeof i=="function"?(t=new Bt,e=t.promise,r={task:i,args:n,deferred:t,promise:e}):r={promise:i},this._q.push(r),this.paused==!1&&!this.running&&this.run(),r.promise}dequeue(){var t,e,r;if(this._q.length&&!this.paused){if(t=this._q.shift(),e=t.task,e)return r=e.apply(this.context,t.args),r&&typeof r.then=="function"?r.then((function(){t.deferred.resolve.apply(this.context,arguments)}).bind(this),(function(){t.deferred.reject.apply(this.context,arguments)}).bind(this)):(t.deferred.resolve.apply(this.context,r),t.promise);if(t.promise)return t.promise}else return t=new Bt,t.deferred.resolve(),t.promise}dump(){for(;this._q.length;)this.dequeue()}run(){return this.running||(this.running=!0,this.defered=new Bt),this.tick.call(window,()=>{this._q.length?this.dequeue().then((function(){this.run()}).bind(this)):(this.defered.resolve(),this.running=void 0)}),this.paused==!0&&(this.paused=!1),this.defered.promise}flush(){if(this.running)return this.running;if(this._q.length)return this.running=this.dequeue().then((function(){return this.running=void 0,this.flush()}).bind(this)),this.running}clear(){this._q=[]}length(){return this._q.length}pause(){this.paused=!0}stop(){this._q=[],this.running=!1,this.paused=!0}}const Ea="0.3",fa=["keydown","keyup","keypressed","mouseup","mousedown","mousemove","click","touchend","touchstart","touchmove"],ct={BOOK:{OPEN_FAILED:"openFailed"},CONTENTS:{EXPAND:"expand",RESIZE:"resize",SELECTED:"selected",SELECTED_RANGE:"selectedRange",LINK_CLICKED:"linkClicked"},LOCATIONS:{CHANGED:"changed"},MANAGERS:{RESIZE:"resize",RESIZED:"resized",ORIENTATION_CHANGE:"orientationchange",ADDED:"added",SCROLL:"scroll",SCROLLED:"scrolled",REMOVED:"removed"},VIEWS:{AXIS:"axis",WRITING_MODE:"writingMode",LOAD_ERROR:"loaderror",RENDERED:"rendered",RESIZED:"resized",DISPLAYED:"displayed",SHOWN:"shown",HIDDEN:"hidden",MARK_CLICKED:"markClicked"},RENDITION:{STARTED:"started",ATTACHED:"attached",DISPLAYED:"displayed",DISPLAY_ERROR:"displayerror",RENDERED:"rendered",REMOVED:"removed",RESIZED:"resized",ORIENTATION_CHANGE:"orientationchange",LOCATION_CHANGED:"locationChanged",RELOCATED:"relocated",MARK_CLICKED:"markClicked",SELECTED:"selected",LAYOUT:"layout"},LAYOUT:{UPDATED:"updated"},ANNOTATION:{ATTACH:"attach",DETACH:"detach"}};class Bs{constructor(t,e,r){this.spine=t,this.request=e,this.pause=r||100,this.q=new L1(this),this.epubcfi=new Ot,this._locations=[],this._locationsWords=[],this.total=0,this.break=150,this._current=0,this._wordCounter=0,this.currentLocation="",this._currentCfi="",this.processingTimeout=void 0}generate(t){return t&&(this.break=t),this.q.pause(),this.spine.each((function(e){e.linear&&this.q.enqueue(this.process.bind(this),e)}).bind(this)),this.q.run().then((function(){return this.total=this._locations.length-1,this._currentCfi&&(this.currentLocation=this._currentCfi),this._locations}).bind(this))}createRange(){return{startContainer:void 0,startOffset:void 0,endContainer:void 0,endOffset:void 0}}process(t){return t.load(this.request).then((function(e){var r=new Bt,i=this.parse(e,t.cfiBase);return this._locations=this._locations.concat(i),t.unload(),this.processingTimeout=setTimeout(()=>r.resolve(i),this.pause),r.promise}).bind(this))}parse(t,e,r){var i=[],n,s=t.ownerDocument,h=Wt(s,"body"),c=0,l,f=r||this.break,p=function(w){var M=w.length,L,A=0;if(w.textContent.trim().length===0)return!1;for(c==0&&(n=this.createRange(),n.startContainer=w,n.startOffset=0),L=f-c,L>M&&(c+=M,A=M);A<M;)if(L=f-c,c===0&&(A+=1,n=this.createRange(),n.startContainer=w,n.startOffset=A),A+L>=M)c+=M-A,A=M;else{A+=L,n.endContainer=w,n.endOffset=A;let u=new Ot(n,e).toString();i.push(u),c=0}l=w};if(ya(h,p.bind(this)),n&&n.startContainer&&l){n.endContainer=l,n.endOffset=l.length;let w=new Ot(n,e).toString();i.push(w),c=0}return i}generateFromWords(t,e,r){var i=t?new Ot(t):void 0;return this.q.pause(),this._locationsWords=[],this._wordCounter=0,this.spine.each((function(n){n.linear&&(i?n.index>=i.spinePos&&this.q.enqueue(this.processWords.bind(this),n,e,i,r):this.q.enqueue(this.processWords.bind(this),n,e,i,r))}).bind(this)),this.q.run().then((function(){return this._currentCfi&&(this.currentLocation=this._currentCfi),this._locationsWords}).bind(this))}processWords(t,e,r,i){return i&&this._locationsWords.length>=i?Promise.resolve():t.load(this.request).then((function(n){var s=new Bt,h=this.parseWords(n,t,e,r),c=i-this._locationsWords.length;return this._locationsWords=this._locationsWords.concat(h.length>=i?h.slice(0,c):h),t.unload(),this.processingTimeout=setTimeout(()=>s.resolve(h),this.pause),s.promise}).bind(this))}countWords(t){return t=t.replace(/(^\s*)|(\s*$)/gi,""),t=t.replace(/[ ]{2,}/gi," "),t=t.replace(/\n /,`
`),t.split(" ").length}parseWords(t,e,r,i){var n=e.cfiBase,s=[],h=t.ownerDocument,c=Wt(h,"body"),l=r,f=i?i.spinePos!==e.index:!0,p;i&&e.index===i.spinePos&&(p=i.findNode(i.range?i.path.steps.concat(i.start.steps):i.path.steps,t.ownerDocument));var w=function(M){if(!f)if(M===p)f=!0;else return!1;if(M.textContent.length<10&&M.textContent.trim().length===0)return!1;var L=this.countWords(M.textContent),A,u=0;if(L===0)return!1;for(A=l-this._wordCounter,A>L&&(this._wordCounter+=L,u=L);u<L;)if(A=l-this._wordCounter,u+A>=L)this._wordCounter+=L-u,u=L;else{u+=A;let g=new Ot(M,n);s.push({cfi:g.toString(),wordCount:this._wordCounter}),this._wordCounter=0}};return ya(c,w.bind(this)),s}locationFromCfi(t){let e;return Ot.prototype.isCfiString(t)&&(t=new Ot(t)),this._locations.length===0?-1:(e=Ke(t,this._locations,this.epubcfi.compare),e>this.total?this.total:e)}percentageFromCfi(t){if(this._locations.length===0)return null;var e=this.locationFromCfi(t);return this.percentageFromLocation(e)}percentageFromLocation(t){return!t||!this.total?0:t/this.total}cfiFromLocation(t){var e=-1;return typeof t!="number"&&(t=parseInt(t)),t>=0&&t<this._locations.length&&(e=this._locations[t]),e}cfiFromPercentage(t){let e;if(t>1&&console.warn("Normalize cfiFromPercentage value to between 0 - 1"),t>=1){let r=new Ot(this._locations[this.total]);return r.collapse(),r.toString()}return e=Math.ceil(this.total*t),this.cfiFromLocation(e)}load(t){return typeof t=="string"?this._locations=JSON.parse(t):this._locations=t,this.total=this._locations.length-1,this._locations}save(){return JSON.stringify(this._locations)}getCurrent(){return this._current}setCurrent(t){var e;if(typeof t=="string")this._currentCfi=t;else if(typeof t=="number")this._current=t;else return;this._locations.length!==0&&(typeof t=="string"?(e=this.locationFromCfi(t),this._current=e):e=t,this.emit(ct.LOCATIONS.CHANGED,{percentage:this.percentageFromLocation(e)}))}get currentLocation(){return this._current}set currentLocation(t){this.setCurrent(t)}length(){return this._locations.length}destroy(){this.spine=void 0,this.request=void 0,this.pause=void 0,this.q.stop(),this.q=void 0,this.epubcfi=void 0,this._locations=void 0,this.total=void 0,this.break=void 0,this._current=void 0,this.currentLocation=void 0,this._currentCfi=void 0,clearTimeout(this.processingTimeout)}}Re(Bs.prototype);let j0=class{constructor(t){this.packagePath="",this.directory="",this.encoding="",t&&this.parse(t)}parse(t){var e;if(!t)throw new Error("Container File Not Found");if(e=Wt(t,"rootfile"),!e)throw new Error("No RootFile Found");this.packagePath=e.getAttribute("full-path"),this.directory=Ie.dirname(this.packagePath),this.encoding=t.xmlEncoding}destroy(){this.packagePath=void 0,this.directory=void 0,this.encoding=void 0}};class m2{constructor(t){this.manifest={},this.navPath="",this.ncxPath="",this.coverPath="",this.spineNodeIndex=0,this.spine=[],this.metadata={},t&&this.parse(t)}parse(t){var e,r,i;if(!t)throw new Error("Package File Not Found");if(e=Wt(t,"metadata"),!e)throw new Error("No Metadata Found");if(r=Wt(t,"manifest"),!r)throw new Error("No Manifest Found");if(i=Wt(t,"spine"),!i)throw new Error("No Spine Found");return this.manifest=this.parseManifest(r),this.navPath=this.findNavPath(r),this.ncxPath=this.findNcxPath(r,i),this.coverPath=this.findCoverPath(t),this.spineNodeIndex=Ss(i),this.spine=this.parseSpine(i,this.manifest),this.uniqueIdentifier=this.findUniqueIdentifier(t),this.metadata=this.parseMetadata(e),this.metadata.direction=i.getAttribute("page-progression-direction"),{metadata:this.metadata,spine:this.spine,manifest:this.manifest,navPath:this.navPath,ncxPath:this.ncxPath,coverPath:this.coverPath,spineNodeIndex:this.spineNodeIndex}}parseMetadata(t){var e={};return e.title=this.getElementText(t,"title"),e.creator=this.getElementText(t,"creator"),e.description=this.getElementText(t,"description"),e.pubdate=this.getElementText(t,"date"),e.publisher=this.getElementText(t,"publisher"),e.identifier=this.getElementText(t,"identifier"),e.language=this.getElementText(t,"language"),e.rights=this.getElementText(t,"rights"),e.modified_date=this.getPropertyText(t,"dcterms:modified"),e.layout=this.getPropertyText(t,"rendition:layout"),e.orientation=this.getPropertyText(t,"rendition:orientation"),e.flow=this.getPropertyText(t,"rendition:flow"),e.viewport=this.getPropertyText(t,"rendition:viewport"),e.media_active_class=this.getPropertyText(t,"media:active-class"),e.spread=this.getPropertyText(t,"rendition:spread"),e}parseManifest(t){var e={},r=Oe(t,"item"),i=Array.prototype.slice.call(r);return i.forEach(function(n){var s=n.getAttribute("id"),h=n.getAttribute("href")||"",c=n.getAttribute("media-type")||"",l=n.getAttribute("media-overlay")||"",f=n.getAttribute("properties")||"";e[s]={href:h,type:c,overlay:l,properties:f.length?f.split(" "):[]}}),e}parseSpine(t,e){var r=[],i=Oe(t,"itemref"),n=Array.prototype.slice.call(i);return n.forEach(function(s,h){var c=s.getAttribute("idref"),l=s.getAttribute("properties")||"",f=l.length?l.split(" "):[],p={id:s.getAttribute("id"),idref:c,linear:s.getAttribute("linear")||"yes",properties:f,index:h};r.push(p)}),r}findUniqueIdentifier(t){var e=t.documentElement.getAttribute("unique-identifier");if(!e)return"";var r=t.getElementById(e);return r&&r.localName==="identifier"&&r.namespaceURI==="http://purl.org/dc/elements/1.1/"&&r.childNodes.length>0?r.childNodes[0].nodeValue.trim():""}findNavPath(t){var e=$e(t,"item",{properties:"nav"});return e?e.getAttribute("href"):!1}findNcxPath(t,e){var r=$e(t,"item",{"media-type":"application/x-dtbncx+xml"}),i;return r||(i=e.getAttribute("toc"),i&&(r=t.querySelector(`#${i}`))),r?r.getAttribute("href"):!1}findCoverPath(t){var e=Wt(t,"package");e.getAttribute("version");var r=$e(t,"item",{properties:"cover-image"});if(r)return r.getAttribute("href");var i=$e(t,"meta",{name:"cover"});if(i){var n=i.getAttribute("content"),s=t.getElementById(n);return s?s.getAttribute("href"):""}else return!1}getElementText(t,e){var r=t.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/",e),i;return!r||r.length===0?"":(i=r[0],i.childNodes.length?i.childNodes[0].nodeValue:"")}getPropertyText(t,e){var r=$e(t,"meta",{property:e});return r&&r.childNodes.length?r.childNodes[0].nodeValue:""}load(t){this.metadata=t.metadata;let e=t.readingOrder||t.spine;return this.spine=e.map((r,i)=>(r.index=i,r.linear=r.linear||"yes",r)),t.resources.forEach((r,i)=>{this.manifest[i]=r,r.rel&&r.rel[0]==="cover"&&(this.coverPath=r.href)}),this.spineNodeIndex=0,this.toc=t.toc.map((r,i)=>(r.label=r.title,r)),{metadata:this.metadata,spine:this.spine,manifest:this.manifest,navPath:this.navPath,ncxPath:this.ncxPath,coverPath:this.coverPath,spineNodeIndex:this.spineNodeIndex,toc:this.toc}}destroy(){this.manifest=void 0,this.navPath=void 0,this.ncxPath=void 0,this.coverPath=void 0,this.spineNodeIndex=void 0,this.spine=void 0,this.metadata=void 0}}let Qa=class{constructor(t){this.toc=[],this.tocByHref={},this.tocById={},this.landmarks=[],this.landmarksByType={},this.length=0,t&&this.parse(t)}parse(t){let e=t.nodeType,r,i;e&&(r=Wt(t,"html"),i=Wt(t,"ncx")),e?r?(this.toc=this.parseNav(t),this.landmarks=this.parseLandmarks(t)):i&&(this.toc=this.parseNcx(t)):this.toc=this.load(t),this.length=0,this.unpack(this.toc)}unpack(t){for(var e,r=0;r<t.length;r++)e=t[r],e.href&&(this.tocByHref[e.href]=r),e.id&&(this.tocById[e.id]=r),this.length++,e.subitems.length&&this.unpack(e.subitems)}get(t){var e;return t?(t.indexOf("#")===0?e=this.tocById[t.substring(1)]:t in this.tocByHref&&(e=this.tocByHref[t]),this.getByIndex(t,e,this.toc)):this.toc}getByIndex(t,e,r){if(r.length===0)return;const i=r[e];if(i&&(t===i.id||t===i.href))return i;{let n;for(let s=0;s<r.length&&(n=this.getByIndex(t,e,r[s].subitems),!n);++s);return n}}landmark(t){var e;return t?(e=this.landmarksByType[t],this.landmarks[e]):this.landmarks}parseNav(t){var e=xa(t,"nav","toc"),r=[];if(!e)return r;let i=Xe(e,"ol",!0);return i&&(r=this.parseNavList(i)),r}parseNavList(t,e){const r=[];if(!t||!t.children)return r;for(let i=0;i<t.children.length;i++){const n=this.navItem(t.children[i],e);n&&r.push(n)}return r}navItem(t,e){let r=t.getAttribute("id")||void 0,i=Xe(t,"a",!0)||Xe(t,"span",!0);if(!i)return;let n=i.getAttribute("href")||"";r||(r=n);let s=i.textContent||"",h=[],c=Xe(t,"ol",!0);return c&&(h=this.parseNavList(c,r)),{id:r,href:n,label:s,subitems:h,parent:e}}parseLandmarks(t){var e=xa(t,"nav","landmarks"),r=e?Oe(e,"li"):[],i=r.length,n,s=[],h;if(!r||i===0)return s;for(n=0;n<i;++n)h=this.landmarkItem(r[n]),h&&(s.push(h),this.landmarksByType[h.type]=n);return s}landmarkItem(t){let e=Xe(t,"a",!0);if(!e)return;let r=e.getAttributeNS("http://www.idpf.org/2007/ops","type")||void 0,i=e.getAttribute("href")||"",n=e.textContent||"";return{href:i,label:n,type:r}}parseNcx(t){var e=Oe(t,"navPoint"),r=e.length,i,n={},s=[],h,c;if(!e||r===0)return s;for(i=0;i<r;++i)h=this.ncxItem(e[i]),n[h.id]=h,h.parent?(c=n[h.parent],c.subitems.push(h)):s.push(h);return s}ncxItem(t){var e=t.getAttribute("id")||!1,r=Wt(t,"content"),i=r.getAttribute("src"),n=Wt(t,"navLabel"),s=n.textContent?n.textContent:"",h=[],c=t.parentNode,l;return c&&(c.nodeName==="navPoint"||c.nodeName.split(":").slice(-1)[0]==="navPoint")&&(l=c.getAttribute("id")),{id:e,href:i,label:s,subitems:h,parent:l}}load(t){return t.map(e=>(e.label=e.title,e.subitems=e.children?this.load(e.children):[],e))}forEach(t){return this.toc.forEach(t)}};var aa={application:{ecmascript:["es","ecma"],javascript:"js",ogg:"ogx",pdf:"pdf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],"rdf+xml":"rdf",smil:["smi","smil"],"xhtml+xml":["xhtml","xht"],xml:["xml","xsl","xsd","opf","ncx"],zip:"zip","x-httpd-eruby":"rhtml","x-latex":"latex","x-maker":["frm","maker","frame","fm","fb","book","fbdoc"],"x-object":"o","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr","epub+zip":"epub","font-tdpfr":"pfr","inkml+xml":["ink","inkml"],json:"json","jsonml+json":"jsonml","mathml+xml":"mathml","metalink+xml":"metalink",mp4:"mp4s","omdoc+xml":"omdoc",oxps:"oxps","vnd.amazon.ebook":"azw",widget:"wgt","x-dtbook+xml":"dtb","x-dtbresource+xml":"res","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-otf":"otf","x-font-pcf":"pcf","x-font-snf":"snf","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","pfb","pfm","afm"],"x-font-woff":"woff","x-mobipocket-ebook":["prc","mobi"],"x-mspublisher":"pub","x-nzb":"nzb","x-tgif":"obj","xaml+xml":"xaml","xml-dtd":"dtd","xproc+xml":"xpl","xslt+xml":"xslt","internet-property-stream":"acx","x-compress":"z","x-compressed":"tgz","x-gzip":"gz"},audio:{flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","mp2","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",ogg:["oga","ogg","spx"],"x-aiff":["aif","aiff","aifc"],"x-ms-wma":"wma","x-wav":"wav",adpcm:"adp",mp4:"mp4a",webm:"weba","x-aac":"aac","x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plugin":"rmp",xm:"xm",mid:["mid","rmi"]},image:{gif:"gif",ief:"ief",jpeg:["jpeg","jpg","jpe"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"x-icon":"ico",bmp:"bmp",webp:"webp","x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod"},text:{"cache-manifest":["manifest","appcache"],css:"css",csv:"csv",html:["html","htm","shtml","stm"],mathml:"mml",plain:["txt","text","brf","conf","def","list","log","in","bas"],richtext:"rtx","tab-separated-values":"tsv","x-bibtex":"bib"},video:{mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"],ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv":"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo":"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"],mj2:["mj2","mjp2"],"vnd.ms-playready.media.pyv":"pyv","vnd.uvvu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv"}},G0=(function(){var v,t,e,r,i={};for(v in aa)if(aa.hasOwnProperty(v)){for(t in aa[v])if(aa[v].hasOwnProperty(t))if(e=aa[v][t],typeof e=="string")i[e]=v+"/"+t;else for(r=0;r<e.length;r++)i[e[r]]=v+"/"+t}return i})(),$0="text/plain";function X0(v){return v&&G0[v.split(".").pop().toLowerCase()]||$0}const Ye={lookup:X0};class Y0{constructor(t,e){this.settings={replacements:e&&e.replacements||"base64",archive:e&&e.archive,resolver:e&&e.resolver,request:e&&e.request},this.process(t)}process(t){this.manifest=t,this.resources=Object.keys(t).map(function(e){return t[e]}),this.replacementUrls=[],this.html=[],this.assets=[],this.css=[],this.urls=[],this.cssUrls=[],this.split(),this.splitUrls()}split(){this.html=this.resources.filter(function(t){if(t.type==="application/xhtml+xml"||t.type==="text/html")return!0}),this.assets=this.resources.filter(function(t){if(t.type!=="application/xhtml+xml"&&t.type!=="text/html")return!0}),this.css=this.resources.filter(function(t){if(t.type==="text/css")return!0})}splitUrls(){this.urls=this.assets.map((function(t){return t.href}).bind(this)),this.cssUrls=this.css.map(function(t){return t.href})}createUrl(t){var e=new Se(t),r=Ye.lookup(e.filename);return this.settings.archive?this.settings.archive.createUrl(t,{base64:this.settings.replacements==="base64"}):this.settings.replacements==="base64"?this.settings.request(t,"blob").then(i=>Rs(i)).then(i=>b1(i,r)):this.settings.request(t,"blob").then(i=>Ma(i,r))}replacements(){if(this.settings.replacements==="none")return new Promise((function(e){e(this.urls)}).bind(this));var t=this.urls.map(e=>{var r=this.settings.resolver(e);return this.createUrl(r).catch(i=>(console.error(i),null))});return Promise.all(t).then(e=>(this.replacementUrls=e.filter(r=>typeof r=="string"),e))}replaceCss(t,e){var r=[];return t=t||this.settings.archive,e=e||this.settings.resolver,this.cssUrls.forEach((function(i){var n=this.createCssFile(i,t,e).then((function(s){var h=this.urls.indexOf(i);h>-1&&(this.replacementUrls[h]=s)}).bind(this));r.push(n)}).bind(this)),Promise.all(r)}createCssFile(t){var e;if(Ie.isAbsolute(t))return new Promise(function(s){s()});var r=this.settings.resolver(t),i;this.settings.archive?i=this.settings.archive.getText(r):i=this.settings.request(r,"text");var n=this.urls.map(s=>{var h=this.settings.resolver(s),c=new Ve(r).relative(h);return c});return i?i.then(s=>(s=g2(s,n,this.replacementUrls),this.settings.replacements==="base64"?e=b1(s,"text/css"):e=Ma(s,"text/css"),e),s=>new Promise(function(h){h()})):new Promise(function(s){s()})}relativeTo(t,e){return e=e||this.settings.resolver,this.urls.map((function(r){var i=e(r),n=new Ve(t).relative(i);return n}).bind(this))}get(t){var e=this.urls.indexOf(t);if(e!==-1)return this.replacementUrls.length?new Promise((function(r,i){r(this.replacementUrls[e])}).bind(this)):this.createUrl(t)}substitute(t,e){var r;return e?r=this.relativeTo(e):r=this.urls,g2(t,r,this.replacementUrls)}destroy(){this.settings=void 0,this.manifest=void 0,this.resources=void 0,this.replacementUrls=void 0,this.html=void 0,this.assets=void 0,this.css=void 0,this.urls=void 0,this.cssUrls=void 0}}class t1{constructor(t){this.pages=[],this.locations=[],this.epubcfi=new Ot,this.firstPage=0,this.lastPage=0,this.totalPages=0,this.toc=void 0,this.ncx=void 0,t&&(this.pageList=this.parse(t)),this.pageList&&this.pageList.length&&this.process(this.pageList)}parse(t){var e=Wt(t,"html"),r=Wt(t,"ncx");if(e)return this.parseNav(t);if(r)return this.parseNcx(t)}parseNav(t){var e=xa(t,"nav","page-list"),r=e?Oe(e,"li"):[],i=r.length,n,s=[],h;if(!r||i===0)return s;for(n=0;n<i;++n)h=this.item(r[n]),s.push(h);return s}parseNcx(t){var e=[],r=0,i,n,s,h=0;if(n=Wt(t,"pageList"),!n||(s=Oe(n,"pageTarget"),h=s.length,!s||s.length===0))return e;for(r=0;r<h;++r)i=this.ncxItem(s[r]),e.push(i);return e}ncxItem(t){var e=Wt(t,"navLabel"),r=Wt(e,"text"),i=r.textContent,n=Wt(t,"content"),s=n.getAttribute("src"),h=parseInt(i,10);return{href:s,page:h}}item(t){var e=Wt(t,"a"),r=e.getAttribute("href")||"",i=e.textContent||"",n=parseInt(i),s=r.indexOf("epubcfi"),h,c,l;return s!=-1?(h=r.split("#"),c=h[0],l=h.length>1?h[1]:!1,{cfi:l,href:r,packageUrl:c,page:n}):{href:r,page:n}}process(t){t.forEach(function(e){this.pages.push(e.page),e.cfi&&this.locations.push(e.cfi)},this),this.firstPage=parseInt(this.pages[0]),this.lastPage=parseInt(this.pages[this.pages.length-1]),this.totalPages=this.lastPage-this.firstPage}pageFromCfi(t){var e=-1;if(this.locations.length===0)return-1;var r=va(t,this.locations,this.epubcfi.compare);return r!=-1?e=this.pages[r]:(r=Ke(t,this.locations,this.epubcfi.compare),e=r-1>=0?this.pages[r-1]:this.pages[0],e!==void 0||(e=-1)),e}cfiFromPage(t){var e=-1;typeof t!="number"&&(t=parseInt(t));var r=this.pages.indexOf(t);return r!=-1&&(e=this.locations[r]),e}pageFromPercentage(t){var e=Math.round(this.totalPages*t);return e}percentageFromPage(t){var e=(t-this.firstPage)/this.totalPages;return Math.round(e*1e3)/1e3}percentageFromCfi(t){var e=this.pageFromCfi(t),r=this.percentageFromPage(e);return r}destroy(){this.pages=void 0,this.locations=void 0,this.epubcfi=void 0,this.pageList=void 0,this.toc=void 0,this.ncx=void 0}}class Os{constructor(t){this.settings=t,this.name=t.layout||"reflowable",this._spread=t.spread!=="none",this._minSpreadWidth=t.minSpreadWidth||800,this._evenSpreads=t.evenSpreads||!1,t.flow==="scrolled"||t.flow==="scrolled-continuous"||t.flow==="scrolled-doc"?this._flow="scrolled":this._flow="paginated",this.width=0,this.height=0,this.spreadWidth=0,this.delta=0,this.columnWidth=0,this.gap=0,this.divisor=1,this.props={name:this.name,spread:this._spread,flow:this._flow,width:0,height:0,spreadWidth:0,delta:0,columnWidth:0,gap:0,divisor:1}}flow(t){return typeof t<"u"&&(t==="scrolled"||t==="scrolled-continuous"||t==="scrolled-doc"?this._flow="scrolled":this._flow="paginated",this.update({flow:this._flow})),this._flow}spread(t,e){return t&&(this._spread=t!=="none",this.update({spread:this._spread})),e>=0&&(this._minSpreadWidth=e),this._spread}calculate(t,e,r){var i=1,n=r||0,s=t,h=e,c=Math.floor(s/12),l,f,p,w;this._spread&&s>=this._minSpreadWidth?i=2:i=1,this.name==="reflowable"&&this._flow==="paginated"&&!(r>=0)&&(n=c%2===0?c:c-1),this.name==="pre-paginated"&&(n=0),i>1?(l=s/i-n,p=l+n):(l=s,p=s),this.name==="pre-paginated"&&i>1&&(s=l),f=l*i+n,w=s,this.width=s,this.height=h,this.spreadWidth=f,this.pageWidth=p,this.delta=w,this.columnWidth=l,this.gap=n,this.divisor=i,this.update({width:s,height:h,spreadWidth:f,pageWidth:p,delta:w,columnWidth:l,gap:n,divisor:i})}format(t,e,r){var i;return this.name==="pre-paginated"?i=t.fit(this.columnWidth,this.height,e):this._flow==="paginated"?i=t.columns(this.width,this.height,this.columnWidth,this.gap,this.settings.direction):r&&r==="horizontal"?i=t.size(null,this.height):i=t.size(this.width,null),i}count(t,e){let r,i;return this.name==="pre-paginated"?(r=1,i=1):this._flow==="paginated"?(e=e||this.delta,r=Math.ceil(t/e),i=r*this.divisor):(e=e||this.height,r=Math.ceil(t/e),i=r),{spreads:r,pages:i}}update(t){if(Object.keys(t).forEach(e=>{this.props[e]===t[e]&&delete t[e]}),Object.keys(t).length>0){let e=de(this.props,t);this.emit(ct.LAYOUT.UPDATED,e,t)}}}Re(Os.prototype);class K0{constructor(t){this.rendition=t,this._themes={default:{rules:{},url:"",serialized:""}},this._overrides={},this._current="default",this._injected=[],this.rendition.hooks.content.register(this.inject.bind(this)),this.rendition.hooks.content.register(this.overrides.bind(this))}register(){if(arguments.length!==0){if(arguments.length===1&&typeof arguments[0]=="object")return this.registerThemes(arguments[0]);if(arguments.length===1&&typeof arguments[0]=="string")return this.default(arguments[0]);if(arguments.length===2&&typeof arguments[1]=="string")return this.registerUrl(arguments[0],arguments[1]);if(arguments.length===2&&typeof arguments[1]=="object")return this.registerRules(arguments[0],arguments[1])}}default(t){if(t){if(typeof t=="string")return this.registerUrl("default",t);if(typeof t=="object")return this.registerRules("default",t)}}registerThemes(t){for(var e in t)t.hasOwnProperty(e)&&(typeof t[e]=="string"?this.registerUrl(e,t[e]):this.registerRules(e,t[e]))}registerCss(t,e){this._themes[t]={serialized:e},(this._injected[t]||t=="default")&&this.update(t)}registerUrl(t,e){var r=new Se(e);this._themes[t]={url:r.toString()},(this._injected[t]||t=="default")&&this.update(t)}registerRules(t,e){this._themes[t]={rules:e},(this._injected[t]||t=="default")&&this.update(t)}select(t){var e=this._current,r;this._current=t,this.update(t),r=this.rendition.getContents(),r.forEach(i=>{i.removeClass(e),i.addClass(t)})}update(t){var e=this.rendition.getContents();e.forEach(r=>{this.add(t,r)})}inject(t){var e=[],r=this._themes,i;for(var n in r)r.hasOwnProperty(n)&&(n===this._current||n==="default")&&(i=r[n],(i.rules&&Object.keys(i.rules).length>0||i.url&&e.indexOf(i.url)===-1)&&this.add(n,t),this._injected.push(n));this._current!="default"&&t.addClass(this._current)}add(t,e){var r=this._themes[t];!r||!e||(r.url?e.addStylesheet(r.url):r.serialized?(e.addStylesheetCss(r.serialized,t),r.injected=!0):r.rules&&(e.addStylesheetRules(r.rules,t),r.injected=!0))}override(t,e,r){var i=this.rendition.getContents();this._overrides[t]={value:e,priority:r===!0},i.forEach(n=>{n.css(t,this._overrides[t].value,this._overrides[t].priority)})}removeOverride(t){var e=this.rendition.getContents();delete this._overrides[t],e.forEach(r=>{r.css(t)})}overrides(t){var e=this._overrides;for(var r in e)e.hasOwnProperty(r)&&t.css(r,e[r].value,e[r].priority)}fontSize(t){this.override("font-size",t)}font(t){this.override("font-family",t,!0)}destroy(){this.rendition=void 0,this._themes=void 0,this._overrides=void 0,this._current=void 0,this._injected=void 0}}class wa{constructor(t,e,r,i=!1){this.layout=t,this.horizontal=r==="horizontal",this.direction=e||"ltr",this._dev=i}section(t){var e=this.findRanges(t),r=this.rangeListToCfiList(t.section.cfiBase,e);return r}page(t,e,r,i){var n=t&&t.document?t.document.body:!1,s;if(n){if(s=this.rangePairToCfiPair(e,{start:this.findStart(n,r,i),end:this.findEnd(n,r,i)}),this._dev===!0){let h=t.document,c=new Ot(s.start).toRange(h),l=new Ot(s.end).toRange(h),f=h.defaultView.getSelection(),p=h.createRange();f.removeAllRanges(),p.setStart(c.startContainer,c.startOffset),p.setEnd(l.endContainer,l.endOffset),f.addRange(p)}return s}}walk(t,e){if(!(t&&t.nodeType===Node.TEXT_NODE)){var r={acceptNode:function(c){return c.data.trim().length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},i=r.acceptNode;i.acceptNode=r.acceptNode;for(var n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,i,!1),s,h;(s=n.nextNode())&&(h=e(s),!h););return h}}findRanges(t){for(var e=[],r=t.contents.scrollWidth(),i=Math.ceil(r/this.layout.spreadWidth),n=i*this.layout.divisor,s=this.layout.columnWidth,h=this.layout.gap,c,l,f=0;f<n.pages;f++)c=(s+h)*f,l=s*(f+1)+h*f,e.push({start:this.findStart(t.document.body,c,l),end:this.findEnd(t.document.body,c,l)});return e}findStart(t,e,r){for(var i=[t],n,s,h=t;i.length;)if(n=i.shift(),s=this.walk(n,c=>{var l,f,p,w,M;if(M=w1(c),this.horizontal&&this.direction==="ltr"){if(l=this.horizontal?M.left:M.top,f=this.horizontal?M.right:M.bottom,l>=e&&l<=r)return c;if(f>e)return c;h=c,i.push(c)}else if(this.horizontal&&this.direction==="rtl"){if(l=M.left,f=M.right,f<=r&&f>=e)return c;if(l<r)return c;h=c,i.push(c)}else{if(p=M.top,w=M.bottom,p>=e&&p<=r)return c;if(w>e)return c;h=c,i.push(c)}}),s)return this.findTextStartRange(s,e,r);return this.findTextStartRange(h,e,r)}findEnd(t,e,r){for(var i=[t],n,s=t,h;i.length;)if(n=i.shift(),h=this.walk(n,c=>{var l,f,p,w,M;if(M=w1(c),this.horizontal&&this.direction==="ltr"){if(l=Math.round(M.left),f=Math.round(M.right),l>r&&s)return s;if(f>r)return c;s=c,i.push(c)}else if(this.horizontal&&this.direction==="rtl"){if(l=Math.round(this.horizontal?M.left:M.top),f=Math.round(this.horizontal?M.right:M.bottom),f<e&&s)return s;if(l<e)return c;s=c,i.push(c)}else{if(p=Math.round(M.top),w=Math.round(M.bottom),p>r&&s)return s;if(w>r)return c;s=c,i.push(c)}}),h)return this.findTextEndRange(h,e,r);return this.findTextEndRange(s,e,r)}findTextStartRange(t,e,r){for(var i=this.splitTextNodeIntoRanges(t),n,s,h,c,l,f=0;f<i.length;f++)if(n=i[f],s=n.getBoundingClientRect(),this.horizontal&&this.direction==="ltr"){if(h=s.left,h>=e)return n}else if(this.horizontal&&this.direction==="rtl"){if(l=s.right,l<=r)return n}else if(c=s.top,c>=e)return n;return i[0]}findTextEndRange(t,e,r){for(var i=this.splitTextNodeIntoRanges(t),n,s,h,c,l,f,p,w=0;w<i.length;w++){if(s=i[w],h=s.getBoundingClientRect(),this.horizontal&&this.direction==="ltr"){if(c=h.left,l=h.right,c>r&&n)return n;if(l>r)return s}else if(this.horizontal&&this.direction==="rtl"){if(c=h.left,l=h.right,l<e&&n)return n;if(c<e)return s}else{if(f=h.top,p=h.bottom,f>r&&n)return n;if(p>r)return s}n=s}return i[i.length-1]}splitTextNodeIntoRanges(t,e){var r=[],i=t.textContent||"",n=i.trim(),s,h=t.ownerDocument,c=e||" ",l=n.indexOf(c);if(l===-1||t.nodeType!=Node.TEXT_NODE)return s=h.createRange(),s.selectNodeContents(t),[s];for(s=h.createRange(),s.setStart(t,0),s.setEnd(t,l),r.push(s),s=!1;l!=-1;)l=n.indexOf(c,l+1),l>0&&(s&&(s.setEnd(t,l),r.push(s)),s=h.createRange(),s.setStart(t,l+1));return s&&(s.setEnd(t,n.length),r.push(s)),r}rangePairToCfiPair(t,e){var r=e.start,i=e.end;r.collapse(!0),i.collapse(!1);let n=new Ot(r,t).toString(),s=new Ot(i,t).toString();return{start:n,end:s}}rangeListToCfiList(t,e){for(var r=[],i,n=0;n<e.length;n++)i=this.rangePairToCfiPair(t,e[n]),r.push(i);return r}axis(t){return t&&(this.horizontal=t==="horizontal"),this.horizontal}}const Vs=typeof navigator<"u",J0=Vs&&/Chrome/.test(navigator.userAgent),M2=Vs&&!J0&&/AppleWebKit/.test(navigator.userAgent),Q0=1;class R1{constructor(t,e,r,i){this.epubcfi=new Ot,this.document=t,this.documentElement=this.document.documentElement,this.content=e||this.document.body,this.window=this.document.defaultView,this._size={width:0,height:0},this.sectionIndex=i||0,this.cfiBase=r||"",this.epubReadingSystem("epub.js",Ea),this.called=0,this.active=!0,this.listeners()}static get listenedEvents(){return fa}width(t){var e=this.content;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.width=t),parseInt(this.window.getComputedStyle(e).width)}height(t){var e=this.content;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.height=t),parseInt(this.window.getComputedStyle(e).height)}contentWidth(t){var e=this.content||this.document.body;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.width=t),parseInt(this.window.getComputedStyle(e).width)}contentHeight(t){var e=this.content||this.document.body;return t&&Yt(t)&&(t=t+"px"),t&&(e.style.height=t),parseInt(this.window.getComputedStyle(e).height)}textWidth(){let t,e,r=this.document.createRange(),i=this.content||this.document.body,n=ga(i);return r.selectNodeContents(i),t=r.getBoundingClientRect(),e=t.width,n&&n.width&&(e+=n.width),Math.round(e)}textHeight(){let t,e,r=this.document.createRange(),i=this.content||this.document.body;return r.selectNodeContents(i),t=r.getBoundingClientRect(),e=t.bottom,Math.round(e)}scrollWidth(){var t=this.documentElement.scrollWidth;return t}scrollHeight(){var t=this.documentElement.scrollHeight;return t}overflow(t){return t&&(this.documentElement.style.overflow=t),this.window.getComputedStyle(this.documentElement).overflow}overflowX(t){return t&&(this.documentElement.style.overflowX=t),this.window.getComputedStyle(this.documentElement).overflowX}overflowY(t){return t&&(this.documentElement.style.overflowY=t),this.window.getComputedStyle(this.documentElement).overflowY}css(t,e,r){var i=this.content||this.document.body;return e?i.style.setProperty(t,e,r?"important":""):i.style.removeProperty(t),this.window.getComputedStyle(i)[t]}viewport(t){var e=this.document.querySelector("meta[name='viewport']"),r={width:void 0,height:void 0,scale:void 0,minimum:void 0,maximum:void 0,scalable:void 0},i=[],n={};if(e&&e.hasAttribute("content")){let s=e.getAttribute("content"),h=s.match(/width\s*=\s*([^,]*)/),c=s.match(/height\s*=\s*([^,]*)/),l=s.match(/initial-scale\s*=\s*([^,]*)/),f=s.match(/minimum-scale\s*=\s*([^,]*)/),p=s.match(/maximum-scale\s*=\s*([^,]*)/),w=s.match(/user-scalable\s*=\s*([^,]*)/);h&&h.length&&typeof h[1]<"u"&&(r.width=h[1]),c&&c.length&&typeof c[1]<"u"&&(r.height=c[1]),l&&l.length&&typeof l[1]<"u"&&(r.scale=l[1]),f&&f.length&&typeof f[1]<"u"&&(r.minimum=f[1]),p&&p.length&&typeof p[1]<"u"&&(r.maximum=p[1]),w&&w.length&&typeof w[1]<"u"&&(r.scalable=w[1])}return n=Es(t||{},r),t&&(n.width&&i.push("width="+n.width),n.height&&i.push("height="+n.height),n.scale&&i.push("initial-scale="+n.scale),n.scalable==="no"?(i.push("minimum-scale="+n.scale),i.push("maximum-scale="+n.scale),i.push("user-scalable="+n.scalable)):(n.scalable&&i.push("user-scalable="+n.scalable),n.minimum&&i.push("minimum-scale="+n.minimum),n.maximum&&i.push("minimum-scale="+n.maximum)),e||(e=this.document.createElement("meta"),e.setAttribute("name","viewport"),this.document.querySelector("head").appendChild(e)),e.setAttribute("content",i.join(", ")),this.window.scrollTo(0,0)),n}expand(){this.emit(ct.CONTENTS.EXPAND)}listeners(){this.imageLoadListeners(),this.mediaQueryListeners(),this.addEventListeners(),this.addSelectionListeners(),typeof ResizeObserver>"u"?(this.resizeListeners(),this.visibilityListeners()):this.resizeObservers(),this.linksHandler()}removeListeners(){this.removeEventListeners(),this.removeSelectionListeners(),this.observer&&this.observer.disconnect(),clearTimeout(this.expanding)}resizeCheck(){let t=this.textWidth(),e=this.textHeight();(t!=this._size.width||e!=this._size.height)&&(this._size={width:t,height:e},this.onResize&&this.onResize(this._size),this.emit(ct.CONTENTS.RESIZE,this._size))}resizeListeners(){clearTimeout(this.expanding),requestAnimationFrame(this.resizeCheck.bind(this)),this.expanding=setTimeout(this.resizeListeners.bind(this),350)}visibilityListeners(){document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.active===!1?(this.active=!0,this.resizeListeners()):(this.active=!1,clearTimeout(this.expanding))})}transitionListeners(){let t=this.content;t.style.transitionProperty="font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height",t.style.transitionDuration="0.001ms",t.style.transitionTimingFunction="linear",t.style.transitionDelay="0",this._resizeCheck=this.resizeCheck.bind(this),this.document.addEventListener("transitionend",this._resizeCheck)}mediaQueryListeners(){for(var t=this.document.styleSheets,e=(function(h){h.matches&&!this._expanding&&setTimeout(this.expand.bind(this),1)}).bind(this),r=0;r<t.length;r+=1){var i;try{i=t[r].cssRules}catch{return}if(!i)return;for(var n=0;n<i.length;n+=1)if(i[n].media){var s=this.window.matchMedia(i[n].media.mediaText);s.addListener(e)}}}resizeObservers(){this.observer=new ResizeObserver(t=>{requestAnimationFrame(this.resizeCheck.bind(this))}),this.observer.observe(this.document.documentElement)}mutationObservers(){this.observer=new MutationObserver(e=>{this.resizeCheck()});let t={attributes:!0,childList:!0,characterData:!0,subtree:!0};this.observer.observe(this.document,t)}imageLoadListeners(){for(var t=this.document.querySelectorAll("img"),e,r=0;r<t.length;r++)e=t[r],typeof e.naturalWidth<"u"&&e.naturalWidth===0&&(e.onload=this.expand.bind(this))}fontLoadListeners(){!this.document||!this.document.fonts||this.document.fonts.ready.then((function(){this.resizeCheck()}).bind(this))}root(){return this.document?this.document.documentElement:null}locationOf(t,e){var r,i={left:0,top:0};if(!this.document)return i;if(this.epubcfi.isCfiString(t)){let n=new Ot(t).toRange(this.document,e);if(n){try{if(!n.endContainer||n.startContainer==n.endContainer&&n.startOffset==n.endOffset){let s=n.startContainer.textContent.indexOf(" ",n.startOffset);s==-1&&(s=n.startContainer.textContent.length),n.setEnd(n.startContainer,s)}}catch(s){console.error("setting end offset to start container length failed",s)}if(n.startContainer.nodeType===Node.ELEMENT_NODE)r=n.startContainer.getBoundingClientRect(),i.left=r.left,i.top=r.top;else if(M2){let s=n.startContainer,h=new Range;try{s.nodeType===Q0?r=s.getBoundingClientRect():n.startOffset+2<s.length?(h.setStart(s,n.startOffset),h.setEnd(s,n.startOffset+2),r=h.getBoundingClientRect()):n.startOffset-2>0?(h.setStart(s,n.startOffset-2),h.setEnd(s,n.startOffset),r=h.getBoundingClientRect()):r=s.parentNode.getBoundingClientRect()}catch(c){console.error(c,c.stack)}}else r=n.getBoundingClientRect()}}else if(typeof t=="string"&&t.indexOf("#")>-1){let n=t.substring(t.indexOf("#")+1),s=this.document.getElementById(n);if(s)if(M2){let h=new Range;h.selectNode(s),r=h.getBoundingClientRect()}else r=s.getBoundingClientRect()}return r&&(i.left=r.left,i.top=r.top),i}addStylesheet(t){return new Promise((function(e,r){var i,n=!1;if(!this.document){e(!1);return}if(i=this.document.querySelector("link[href='"+t+"']"),i){e(!0);return}i=this.document.createElement("link"),i.type="text/css",i.rel="stylesheet",i.href=t,i.onload=i.onreadystatechange=function(){!n&&(!this.readyState||this.readyState=="complete")&&(n=!0,setTimeout(()=>{e(!0)},1))},this.document.head.appendChild(i)}).bind(this))}_getStylesheetNode(t){var e;return t="epubjs-inserted-css-"+(t||""),this.document?(e=this.document.getElementById(t),e||(e=this.document.createElement("style"),e.id=t,this.document.head.appendChild(e)),e):!1}addStylesheetCss(t,e){if(!this.document||!t)return!1;var r;return r=this._getStylesheetNode(e),r.innerHTML=t,!0}addStylesheetRules(t,e){var r;if(!(!this.document||!t||t.length===0))if(r=this._getStylesheetNode(e).sheet,Object.prototype.toString.call(t)==="[object Array]")for(var i=0,n=t.length;i<n;i++){var s=1,h=t[i],c=t[i][0],l="";Object.prototype.toString.call(h[1][0])==="[object Array]"&&(h=h[1],s=0);for(var f=h.length;s<f;s++){var p=h[s];l+=p[0]+":"+p[1]+(p[2]?" !important":"")+`;
`}r.insertRule(c+"{"+l+"}",r.cssRules.length)}else Object.keys(t).forEach(M=>{const L=t[M];if(Array.isArray(L))L.forEach(A=>{const g=Object.keys(A).map(y=>`${y}:${A[y]}`).join(";");r.insertRule(`${M}{${g}}`,r.cssRules.length)});else{const u=Object.keys(L).map(g=>`${g}:${L[g]}`).join(";");r.insertRule(`${M}{${u}}`,r.cssRules.length)}})}addScript(t){return new Promise((function(e,r){var i,n=!1;if(!this.document){e(!1);return}i=this.document.createElement("script"),i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){!n&&(!this.readyState||this.readyState=="complete")&&(n=!0,setTimeout(function(){e(!0)},1))},this.document.head.appendChild(i)}).bind(this))}addClass(t){var e;this.document&&(e=this.content||this.document.body,e&&e.classList.add(t))}removeClass(t){var e;this.document&&(e=this.content||this.document.body,e&&e.classList.remove(t))}addEventListeners(){this.document&&(this._triggerEvent=this.triggerEvent.bind(this),fa.forEach(function(t){this.document.addEventListener(t,this._triggerEvent,{passive:!0})},this))}removeEventListeners(){this.document&&(fa.forEach(function(t){this.document.removeEventListener(t,this._triggerEvent,{passive:!0})},this),this._triggerEvent=void 0)}triggerEvent(t){this.emit(t.type,t)}addSelectionListeners(){this.document&&(this._onSelectionChange=this.onSelectionChange.bind(this),this.document.addEventListener("selectionchange",this._onSelectionChange,{passive:!0}))}removeSelectionListeners(){this.document&&(this.document.removeEventListener("selectionchange",this._onSelectionChange,{passive:!0}),this._onSelectionChange=void 0)}onSelectionChange(t){this.selectionEndTimeout&&clearTimeout(this.selectionEndTimeout),this.selectionEndTimeout=setTimeout((function(){var e=this.window.getSelection();this.triggerSelectedEvent(e)}).bind(this),250)}triggerSelectedEvent(t){var e,r;t&&t.rangeCount>0&&(e=t.getRangeAt(0),e.collapsed||(r=new Ot(e,this.cfiBase).toString(),this.emit(ct.CONTENTS.SELECTED,r),this.emit(ct.CONTENTS.SELECTED_RANGE,e)))}range(t,e){var r=new Ot(t);return r.toRange(this.document,e)}cfiFromRange(t,e){return new Ot(t,this.cfiBase,e).toString()}cfiFromNode(t,e){return new Ot(t,this.cfiBase,e).toString()}map(t){var e=new wa(t);return e.section()}size(t,e){var r={scale:1,scalable:"no"};this.layoutStyle("scrolling"),t>=0&&(this.width(t),r.width=t,this.css("padding","0 "+t/12+"px")),e>=0&&(this.height(e),r.height=e),this.css("margin","0"),this.css("box-sizing","border-box"),this.viewport(r)}columns(t,e,r,i,n){let s=Ge("column-axis"),h=Ge("column-gap"),c=Ge("column-width"),l=Ge("column-fill"),p=this.writingMode().indexOf("vertical")===0?"vertical":"horizontal";this.layoutStyle("paginated"),n==="rtl"&&p==="horizontal"&&this.direction(n),this.width(t),this.height(e),this.viewport({width:t,height:e,scale:1,scalable:"no"}),this.css("overflow-y","hidden"),this.css("margin","0",!0),p==="vertical"?(this.css("padding-top",i/2+"px",!0),this.css("padding-bottom",i/2+"px",!0),this.css("padding-left","20px"),this.css("padding-right","20px"),this.css(s,"vertical")):(this.css("padding-top","20px"),this.css("padding-bottom","20px"),this.css("padding-left",i/2+"px",!0),this.css("padding-right",i/2+"px",!0),this.css(s,"horizontal")),this.css("box-sizing","border-box"),this.css("max-width","inherit"),this.css(l,"auto"),this.css(h,i+"px"),this.css(c,r+"px"),this.css("-webkit-line-box-contain","block glyphs replaced")}scaler(t,e,r){var i="scale("+t+")",n="";this.css("transform-origin","top left"),(e>=0||r>=0)&&(n=" translate("+(e||0)+"px, "+(r||0)+"px )"),this.css("transform",i+n)}fit(t,e,r){var i=this.viewport(),n=parseInt(i.width),s=parseInt(i.height),h=t/n,c=e/s,l=h<c?h:c;if(this.layoutStyle("paginated"),this.width(n),this.height(s),this.overflow("hidden"),this.scaler(l,0,0),this.css("background-size",n*l+"px "+s*l+"px"),this.css("background-color","transparent"),r&&r.properties.includes("page-spread-left")){var f=t-n*l;this.css("margin-left",f+"px")}}direction(t){this.documentElement&&(this.documentElement.style.direction=t)}mapPage(t,e,r,i,n){var s=new wa(e,n);return s.page(this,t,r,i)}linksHandler(){q0(this.content,t=>{this.emit(ct.CONTENTS.LINK_CLICKED,t)})}writingMode(t){let e=Ge("writing-mode");return t&&this.documentElement&&(this.documentElement.style[e]=t),this.window.getComputedStyle(this.documentElement)[e]||""}layoutStyle(t){return t&&(this._layoutStyle=t,navigator.epubReadingSystem.layoutStyle=this._layoutStyle),this._layoutStyle||"paginated"}epubReadingSystem(t,e){return navigator.epubReadingSystem={name:t,version:e,layoutStyle:this.layoutStyle(),hasFeature:function(r){switch(r){case"dom-manipulation":return!0;case"layout-changes":return!0;case"touch-events":return!0;case"mouse-events":return!0;case"keyboard-events":return!0;case"spine-scripting":return!1;default:return!1}}},navigator.epubReadingSystem}destroy(){this.removeListeners()}}Re(R1.prototype);class th{constructor(t){this.rendition=t,this.highlights=[],this.underlines=[],this.marks=[],this._annotations={},this._annotationsBySectionIndex={},this.rendition.hooks.render.register(this.inject.bind(this)),this.rendition.hooks.unloaded.register(this.clear.bind(this))}add(t,e,r,i,n,s){let h=encodeURI(e+t),l=new Ot(e).spinePos,f=new Is({type:t,cfiRange:e,data:r,sectionIndex:l,cb:i,className:n,styles:s});return this._annotations[h]=f,l in this._annotationsBySectionIndex?this._annotationsBySectionIndex[l].push(h):this._annotationsBySectionIndex[l]=[h],this.rendition.views().forEach(w=>{f.sectionIndex===w.index&&f.attach(w)}),f}remove(t,e){let r=encodeURI(t+e);if(r in this._annotations){let i=this._annotations[r];if(e&&i.type!==e)return;this.rendition.views().forEach(s=>{this._removeFromAnnotationBySectionIndex(i.sectionIndex,r),i.sectionIndex===s.index&&i.detach(s)}),delete this._annotations[r]}}_removeFromAnnotationBySectionIndex(t,e){this._annotationsBySectionIndex[t]=this._annotationsAt(t).filter(r=>r!==e)}_annotationsAt(t){return this._annotationsBySectionIndex[t]}highlight(t,e,r,i,n){return this.add("highlight",t,e,r,i,n)}underline(t,e,r,i,n){return this.add("underline",t,e,r,i,n)}mark(t,e,r){return this.add("mark",t,e,r)}each(){return this._annotations.forEach.apply(this._annotations,arguments)}inject(t){let e=t.index;e in this._annotationsBySectionIndex&&this._annotationsBySectionIndex[e].forEach(i=>{this._annotations[i].attach(t)})}clear(t){let e=t.index;e in this._annotationsBySectionIndex&&this._annotationsBySectionIndex[e].forEach(i=>{this._annotations[i].detach(t)})}show(){}hide(){}}class Is{constructor({type:t,cfiRange:e,data:r,sectionIndex:i,cb:n,className:s,styles:h}){this.type=t,this.cfiRange=e,this.data=r,this.sectionIndex=i,this.mark=void 0,this.cb=n,this.className=s,this.styles=h}update(t){this.data=t}attach(t){let{cfiRange:e,data:r,type:i,mark:n,cb:s,className:h,styles:c}=this,l;return i==="highlight"?l=t.highlight(e,r,s,h,c):i==="underline"?l=t.underline(e,r,s,h,c):i==="mark"&&(l=t.mark(e,r,s)),this.mark=l,this.emit(ct.ANNOTATION.ATTACH,l),l}detach(t){let{cfiRange:e,type:r}=this,i;return t&&(r==="highlight"?i=t.unhighlight(e):r==="underline"?i=t.ununderline(e):r==="mark"&&(i=t.unmark(e))),this.mark=void 0,this.emit(ct.ANNOTATION.DETACH,i),i}text(){}}Re(Is.prototype);var _e={},ra={},y2;function eh(){if(y2)return ra;y2=1,Object.defineProperty(ra,"__esModule",{value:!0}),ra.createElement=v;function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}return ra.default={createElement:v},ra}var je={},x2;function ah(){if(x2)return je;x2=1,Object.defineProperty(je,"__esModule",{value:!0}),je.proxyMouse=v,je.clone=t,je.default={proxyMouse:v};function v(r,i){function n(l){for(var f=i.length-1;f>=0;f--){var p=i[f],w=l.clientX,M=l.clientY;if(l.touches&&l.touches.length&&(w=l.touches[0].clientX,M=l.touches[0].clientY),!!e(p,r,w,M)){p.dispatchEvent(t(l));break}}}if(r.nodeName==="iframe"||r.nodeName==="IFRAME")try{this.target=r.contentDocument}catch{this.target=r}else this.target=r;for(var s=["mouseup","mousedown","click","touchstart"],h=0;h<s.length;h++){var c=s[h];this.target.addEventListener(c,function(l){return n(l)},!1)}}function t(r){var i=Object.assign({},r,{bubbles:!1});try{return new MouseEvent(r.type,i)}catch{var n=document.createEvent("MouseEvents");return n.initMouseEvent(r.type,!1,i.cancelable,i.view,i.detail,i.screenX,i.screenY,i.clientX,i.clientY,i.ctrlKey,i.altKey,i.shiftKey,i.metaKey,i.button,i.relatedTarget),n}}function e(r,i,n,s){var h=i.getBoundingClientRect();function c(M,L,A){var u=M.top-h.top,g=M.left-h.left,y=u+M.height,E=g+M.width;return u<=A&&g<=L&&y>A&&E>L}var l=r.getBoundingClientRect();if(!c(l,n,s))return!1;for(var f=r.getClientRects(),p=0,w=f.length;p<w;p++)if(c(f[p],n,s))return!0;return!1}return je}var w2;function rh(){if(w2)return _e;w2=1,Object.defineProperty(_e,"__esModule",{value:!0}),_e.Underline=_e.Highlight=_e.Mark=_e.Pane=void 0;var v=function A(u,g,y){u===null&&(u=Function.prototype);var E=Object.getOwnPropertyDescriptor(u,g);if(E===void 0){var B=Object.getPrototypeOf(u);return B===null?void 0:A(B,g,y)}else{if("value"in E)return E.value;var b=E.get;return b===void 0?void 0:b.call(y)}},t=(function(){function A(u,g){for(var y=0;y<g.length;y++){var E=g[y];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(u,E.key,E)}}return function(u,g,y){return g&&A(u.prototype,g),y&&A(u,y),u}})(),e=eh(),r=s(e),i=ah(),n=s(i);function s(A){return A&&A.__esModule?A:{default:A}}function h(A,u){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:A}function c(A,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);A.prototype=Object.create(u&&u.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(A,u):A.__proto__=u)}function l(A,u){if(!(A instanceof u))throw new TypeError("Cannot call a class as a function")}_e.Pane=(function(){function A(u){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document.body;l(this,A),this.target=u,this.element=r.default.createElement("svg"),this.marks=[],this.element.style.position="absolute",this.element.setAttribute("pointer-events","none"),n.default.proxyMouse(this.target,this.marks),this.container=g,this.container.appendChild(this.element),this.render()}return t(A,[{key:"addMark",value:function(g){var y=r.default.createElement("g");return this.element.appendChild(y),g.bind(y,this.container),this.marks.push(g),g.render(),g}},{key:"removeMark",value:function(g){var y=this.marks.indexOf(g);if(y!==-1){var E=g.unbind();this.element.removeChild(E),this.marks.splice(y,1)}}},{key:"render",value:function(){M(this.element,w(this.target,this.container));var g=!0,y=!1,E=void 0;try{for(var B=this.marks[Symbol.iterator](),b;!(g=(b=B.next()).done);g=!0){var k=b.value;k.render()}}catch(R){y=!0,E=R}finally{try{!g&&B.return&&B.return()}finally{if(y)throw E}}}}]),A})();var f=_e.Mark=(function(){function A(){l(this,A),this.element=null}return t(A,[{key:"bind",value:function(g,y){this.element=g,this.container=y}},{key:"unbind",value:function(){var g=this.element;return this.element=null,g}},{key:"render",value:function(){}},{key:"dispatchEvent",value:function(g){this.element&&this.element.dispatchEvent(g)}},{key:"getBoundingClientRect",value:function(){return this.element.getBoundingClientRect()}},{key:"getClientRects",value:function(){for(var g=[],y=this.element.firstChild;y;)g.push(y.getBoundingClientRect()),y=y.nextSibling;return g}},{key:"filteredRanges",value:function(){var g=Array.from(this.range.getClientRects());return g.filter(function(y){for(var E=0;E<g.length;E++){if(g[E]===y)return!0;var B=L(g[E],y);if(B)return!1}return!0})}}]),A})(),p=_e.Highlight=(function(A){c(u,A);function u(g,y,E,B){l(this,u);var b=h(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return b.range=g,b.className=y,b.data=E||{},b.attributes=B||{},b}return t(u,[{key:"bind",value:function(y,E){v(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"bind",this).call(this,y,E);for(var B in this.data)this.data.hasOwnProperty(B)&&(this.element.dataset[B]=this.data[B]);for(var B in this.attributes)this.attributes.hasOwnProperty(B)&&this.element.setAttribute(B,this.attributes[B]);this.className&&this.element.classList.add(this.className)}},{key:"render",value:function(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(var y=this.element.ownerDocument.createDocumentFragment(),E=this.filteredRanges(),B=this.element.getBoundingClientRect(),b=this.container.getBoundingClientRect(),k=0,R=E.length;k<R;k++){var H=E[k],T=r.default.createElement("rect");T.setAttribute("x",H.left-B.left+b.left),T.setAttribute("y",H.top-B.top+b.top),T.setAttribute("height",H.height),T.setAttribute("width",H.width),y.appendChild(T)}this.element.appendChild(y)}}]),u})(f);_e.Underline=(function(A){c(u,A);function u(g,y,E,B){return l(this,u),h(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,g,y,E,B))}return t(u,[{key:"render",value:function(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(var y=this.element.ownerDocument.createDocumentFragment(),E=this.filteredRanges(),B=this.element.getBoundingClientRect(),b=this.container.getBoundingClientRect(),k=0,R=E.length;k<R;k++){var H=E[k],T=r.default.createElement("rect");T.setAttribute("x",H.left-B.left+b.left),T.setAttribute("y",H.top-B.top+b.top),T.setAttribute("height",H.height),T.setAttribute("width",H.width),T.setAttribute("fill","none");var N=r.default.createElement("line");N.setAttribute("x1",H.left-B.left+b.left),N.setAttribute("x2",H.left-B.left+b.left+H.width),N.setAttribute("y1",H.top-B.top+b.top+H.height-1),N.setAttribute("y2",H.top-B.top+b.top+H.height-1),N.setAttribute("stroke-width",1),N.setAttribute("stroke","black"),N.setAttribute("stroke-linecap","square"),y.appendChild(T),y.appendChild(N)}this.element.appendChild(y)}}]),u})(p);function w(A,u){var g=u.getBoundingClientRect(),y=A.getBoundingClientRect();return{top:y.top-g.top,left:y.left-g.left,height:A.scrollHeight,width:A.scrollWidth}}function M(A,u){A.style.setProperty("top",u.top+"px","important"),A.style.setProperty("left",u.left+"px","important"),A.style.setProperty("height",u.height+"px","important"),A.style.setProperty("width",u.width+"px","important")}function L(A,u){return u.right<=A.right&&u.left>=A.left&&u.top>=A.top&&u.bottom<=A.bottom}return _e}var ca=rh();class Ps{constructor(t,e){this.settings=de({ignoreClass:"",axis:void 0,direction:void 0,width:0,height:0,layout:void 0,globalLayoutProperties:{},method:void 0,forceRight:!1,allowScriptedContent:!1,allowPopups:!1},e||{}),this.id="epubjs-view-"+_a(),this.section=t,this.index=t.index,this.element=this.container(this.settings.axis),this.added=!1,this.displayed=!1,this.rendered=!1,this.fixedWidth=0,this.fixedHeight=0,this.epubcfi=new Ot,this.layout=this.settings.layout,this.pane=void 0,this.highlights={},this.underlines={},this.marks={}}container(t){var e=document.createElement("div");return e.classList.add("epub-view"),e.style.height="0px",e.style.width="0px",e.style.overflow="hidden",e.style.position="relative",e.style.display="block",t&&t=="horizontal"?e.style.flex="none":e.style.flex="initial",e}create(){return this.iframe?this.iframe:(this.element||(this.element=this.createContainer()),this.iframe=document.createElement("iframe"),this.iframe.id=this.id,this.iframe.scrolling="no",this.iframe.style.overflow="hidden",this.iframe.seamless="seamless",this.iframe.style.border="none",this.iframe.sandbox="allow-same-origin",this.settings.allowScriptedContent&&(this.iframe.sandbox+=" allow-scripts"),this.settings.allowPopups&&(this.iframe.sandbox+=" allow-popups"),this.iframe.setAttribute("enable-annotation","true"),this.resizing=!0,this.element.style.visibility="hidden",this.iframe.style.visibility="hidden",this.iframe.style.width="0",this.iframe.style.height="0",this._width=0,this._height=0,this.element.setAttribute("ref",this.index),this.added=!0,this.elementBounds=pa(this.element),"srcdoc"in this.iframe?this.supportsSrcdoc=!0:this.supportsSrcdoc=!1,this.settings.method||(this.settings.method=this.supportsSrcdoc?"srcdoc":"write"),this.iframe)}render(t,e){return this.create(),this.size(),this.sectionRender||(this.sectionRender=this.section.render(t)),this.sectionRender.then((function(r){return this.load(r)}).bind(this)).then((function(){let r=this.contents.writingMode(),i;return this.settings.flow==="scrolled"?i=r.indexOf("vertical")===0?"horizontal":"vertical":i=r.indexOf("vertical")===0?"vertical":"horizontal",r.indexOf("vertical")===0&&this.settings.flow==="paginated"&&(this.layout.delta=this.layout.height),this.setAxis(i),this.emit(ct.VIEWS.AXIS,i),this.setWritingMode(r),this.emit(ct.VIEWS.WRITING_MODE,r),this.layout.format(this.contents,this.section,this.axis),this.addListeners(),new Promise((n,s)=>{this.expand(),this.settings.forceRight&&(this.element.style.marginLeft=this.width()+"px"),n()})}).bind(this),(function(r){return this.emit(ct.VIEWS.LOAD_ERROR,r),new Promise((i,n)=>{n(r)})}).bind(this)).then((function(){this.emit(ct.VIEWS.RENDERED,this.section)}).bind(this))}reset(){this.iframe&&(this.iframe.style.width="0",this.iframe.style.height="0",this._width=0,this._height=0,this._textWidth=void 0,this._contentWidth=void 0,this._textHeight=void 0,this._contentHeight=void 0),this._needsReframe=!0}size(t,e){var r=t||this.settings.width,i=e||this.settings.height;this.layout.name==="pre-paginated"?this.lock("both",r,i):this.settings.axis==="horizontal"?this.lock("height",r,i):this.lock("width",r,i),this.settings.width=r,this.settings.height=i}lock(t,e,r){var i=ga(this.element),n;this.iframe?n=ga(this.iframe):n={width:0,height:0},t=="width"&&Yt(e)&&(this.lockedWidth=e-i.width-n.width),t=="height"&&Yt(r)&&(this.lockedHeight=r-i.height-n.height),t==="both"&&Yt(e)&&Yt(r)&&(this.lockedWidth=e-i.width-n.width,this.lockedHeight=r-i.height-n.height),this.displayed&&this.iframe&&this.expand()}expand(t){var e=this.lockedWidth,r=this.lockedHeight,i;!this.iframe||this._expanding||(this._expanding=!0,this.layout.name==="pre-paginated"?(e=this.layout.columnWidth,r=this.layout.height):this.settings.axis==="horizontal"?(e=this.contents.textWidth(),e%this.layout.pageWidth>0&&(e=Math.ceil(e/this.layout.pageWidth)*this.layout.pageWidth),this.settings.forceEvenPages&&(i=e/this.layout.pageWidth,this.layout.divisor>1&&this.layout.name==="reflowable"&&i%2>0&&(e+=this.layout.pageWidth))):this.settings.axis==="vertical"&&(r=this.contents.textHeight(),this.settings.flow==="paginated"&&r%this.layout.height>0&&(r=Math.ceil(r/this.layout.height)*this.layout.height)),(this._needsReframe||e!=this._width||r!=this._height)&&this.reframe(e,r),this._expanding=!1)}reframe(t,e){var r;Yt(t)&&(this.element.style.width=t+"px",this.iframe.style.width=t+"px",this._width=t),Yt(e)&&(this.element.style.height=e+"px",this.iframe.style.height=e+"px",this._height=e);let i=this.prevBounds?t-this.prevBounds.width:t,n=this.prevBounds?e-this.prevBounds.height:e;r={width:t,height:e,widthDelta:i,heightDelta:n},this.pane&&this.pane.render(),requestAnimationFrame(()=>{let s;for(let h in this.marks)this.marks.hasOwnProperty(h)&&(s=this.marks[h],this.placeMark(s.element,s.range))}),this.onResize(this,r),this.emit(ct.VIEWS.RESIZED,r),this.prevBounds=r,this.elementBounds=pa(this.element)}load(t){var e=new Bt,r=e.promise;if(!this.iframe)return e.reject(new Error("No Iframe Available")),r;if(this.iframe.onload=(function(n){this.onLoad(n,e)}).bind(this),this.settings.method==="blobUrl")this.blobUrl=Ma(t,"application/xhtml+xml"),this.iframe.src=this.blobUrl,this.element.appendChild(this.iframe);else if(this.settings.method==="srcdoc")this.iframe.srcdoc=t,this.element.appendChild(this.iframe);else{if(this.element.appendChild(this.iframe),this.document=this.iframe.contentDocument,!this.document)return e.reject(new Error("No Document Available")),r;if(this.iframe.contentDocument.open(),window.MSApp&&MSApp.execUnsafeLocalFunction){var i=this;MSApp.execUnsafeLocalFunction(function(){i.iframe.contentDocument.write(t)})}else this.iframe.contentDocument.write(t);this.iframe.contentDocument.close()}return r}onLoad(t,e){this.window=this.iframe.contentWindow,this.document=this.iframe.contentDocument,this.contents=new R1(this.document,this.document.body,this.section.cfiBase,this.section.index),this.rendering=!1;var r=this.document.querySelector("link[rel='canonical']");r?r.setAttribute("href",this.section.canonical):(r=this.document.createElement("link"),r.setAttribute("rel","canonical"),r.setAttribute("href",this.section.canonical),this.document.querySelector("head").appendChild(r)),this.contents.on(ct.CONTENTS.EXPAND,()=>{this.displayed&&this.iframe&&(this.expand(),this.contents&&this.layout.format(this.contents))}),this.contents.on(ct.CONTENTS.RESIZE,i=>{this.displayed&&this.iframe&&(this.expand(),this.contents&&this.layout.format(this.contents))}),e.resolve(this.contents)}setLayout(t){this.layout=t,this.contents&&(this.layout.format(this.contents),this.expand())}setAxis(t){this.settings.axis=t,t=="horizontal"?this.element.style.flex="none":this.element.style.flex="initial",this.size()}setWritingMode(t){this.writingMode=t}addListeners(){}removeListeners(t){}display(t){var e=new Bt;return this.displayed?e.resolve(this):this.render(t).then((function(){this.emit(ct.VIEWS.DISPLAYED,this),this.onDisplayed(this),this.displayed=!0,e.resolve(this)}).bind(this),function(r){e.reject(r,this)}),e.promise}show(){this.element.style.visibility="visible",this.iframe&&(this.iframe.style.visibility="visible",this.iframe.style.transform="translateZ(0)",this.iframe.offsetWidth,this.iframe.style.transform=null),this.emit(ct.VIEWS.SHOWN,this)}hide(){this.element.style.visibility="hidden",this.iframe.style.visibility="hidden",this.stopExpanding=!0,this.emit(ct.VIEWS.HIDDEN,this)}offset(){return{top:this.element.offsetTop,left:this.element.offsetLeft}}width(){return this._width}height(){return this._height}position(){return this.element.getBoundingClientRect()}locationOf(t){this.iframe.getBoundingClientRect();var e=this.contents.locationOf(t,this.settings.ignoreClass);return{left:e.left,top:e.top}}onDisplayed(t){}onResize(t,e){}bounds(t){return(t||!this.elementBounds)&&(this.elementBounds=pa(this.element)),this.elementBounds}highlight(t,e={},r,i="epubjs-hl",n={}){if(!this.contents)return;const s=Object.assign({fill:"yellow","fill-opacity":"0.3","mix-blend-mode":"multiply"},n);let h=this.contents.range(t),c=()=>{this.emit(ct.VIEWS.MARK_CLICKED,t,e)};e.epubcfi=t,this.pane||(this.pane=new ca.Pane(this.iframe,this.element));let l=new ca.Highlight(h,i,e,s),f=this.pane.addMark(l);return this.highlights[t]={mark:f,element:f.element,listeners:[c,r]},f.element.setAttribute("ref",i),f.element.addEventListener("click",c),f.element.addEventListener("touchstart",c),r&&(f.element.addEventListener("click",r),f.element.addEventListener("touchstart",r)),f}underline(t,e={},r,i="epubjs-ul",n={}){if(!this.contents)return;const s=Object.assign({stroke:"black","stroke-opacity":"0.3","mix-blend-mode":"multiply"},n);let h=this.contents.range(t),c=()=>{this.emit(ct.VIEWS.MARK_CLICKED,t,e)};e.epubcfi=t,this.pane||(this.pane=new ca.Pane(this.iframe,this.element));let l=new ca.Underline(h,i,e,s),f=this.pane.addMark(l);return this.underlines[t]={mark:f,element:f.element,listeners:[c,r]},f.element.setAttribute("ref",i),f.element.addEventListener("click",c),f.element.addEventListener("touchstart",c),r&&(f.element.addEventListener("click",r),f.element.addEventListener("touchstart",r)),f}mark(t,e={},r){if(!this.contents)return;if(t in this.marks)return this.marks[t];let i=this.contents.range(t);if(!i)return;let n=i.commonAncestorContainer,s=n.nodeType===1?n:n.parentNode,h=l=>{this.emit(ct.VIEWS.MARK_CLICKED,t,e)};i.collapsed&&n.nodeType===1?(i=new Range,i.selectNodeContents(n)):i.collapsed&&(i=new Range,i.selectNodeContents(s));let c=this.document.createElement("a");return c.setAttribute("ref","epubjs-mk"),c.style.position="absolute",c.dataset.epubcfi=t,e&&Object.keys(e).forEach(l=>{c.dataset[l]=e[l]}),r&&(c.addEventListener("click",r),c.addEventListener("touchstart",r)),c.addEventListener("click",h),c.addEventListener("touchstart",h),this.placeMark(c,i),this.element.appendChild(c),this.marks[t]={element:c,range:i,listeners:[h,r]},s}placeMark(t,e){let r,i,n;if(this.layout.name==="pre-paginated"||this.settings.axis!=="horizontal"){let h=e.getBoundingClientRect();r=h.top,i=h.right}else{let h=e.getClientRects(),c;for(var s=0;s!=h.length;s++)c=h[s],(!n||c.left<n)&&(n=c.left,i=Math.ceil(n/this.layout.props.pageWidth)*this.layout.props.pageWidth-this.layout.gap/2,r=c.top)}t.style.top=`${r}px`,t.style.left=`${i}px`}unhighlight(t){let e;t in this.highlights&&(e=this.highlights[t],this.pane.removeMark(e.mark),e.listeners.forEach(r=>{r&&(e.element.removeEventListener("click",r),e.element.removeEventListener("touchstart",r))}),delete this.highlights[t])}ununderline(t){let e;t in this.underlines&&(e=this.underlines[t],this.pane.removeMark(e.mark),e.listeners.forEach(r=>{r&&(e.element.removeEventListener("click",r),e.element.removeEventListener("touchstart",r))}),delete this.underlines[t])}unmark(t){let e;t in this.marks&&(e=this.marks[t],this.element.removeChild(e.element),e.listeners.forEach(r=>{r&&(e.element.removeEventListener("click",r),e.element.removeEventListener("touchstart",r))}),delete this.marks[t])}destroy(){for(let t in this.highlights)this.unhighlight(t);for(let t in this.underlines)this.ununderline(t);for(let t in this.marks)this.unmark(t);this.blobUrl&&ks(this.blobUrl),this.displayed&&(this.displayed=!1,this.removeListeners(),this.contents.destroy(),this.stopExpanding=!0,this.element.removeChild(this.iframe),this.pane&&(this.pane.element.remove(),this.pane=void 0),this.iframe=void 0,this.contents=void 0,this._textWidth=null,this._textHeight=null,this._width=null,this._height=null)}}Re(Ps.prototype);function ih(){var v="reverse",t=nh();return document.body.appendChild(t),t.scrollLeft>0?v="default":typeof Element<"u"&&Element.prototype.scrollIntoView?(t.children[0].children[1].scrollIntoView(),t.scrollLeft<0&&(v="negative")):(t.scrollLeft=1,t.scrollLeft===0&&(v="negative")),document.body.removeChild(t),v}function nh(){var v=document.createElement("div");v.dir="rtl",v.style.position="fixed",v.style.width="1px",v.style.height="1px",v.style.top="0px",v.style.left="0px",v.style.overflow="hidden";var t=document.createElement("div");t.style.width="2px";var e=document.createElement("span");e.style.width="1px",e.style.display="inline-block";var r=document.createElement("span");return r.style.width="1px",r.style.display="inline-block",t.appendChild(e),t.appendChild(r),v.appendChild(t),v}var e1,b2;function H1(){if(b2)return e1;b2=1;function v(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}return e1=v,e1}var a1,A2;function sh(){if(A2)return a1;A2=1;var v=typeof be=="object"&&be&&be.Object===Object&&be;return a1=v,a1}var r1,C2;function zs(){if(C2)return r1;C2=1;var v=sh(),t=typeof self=="object"&&self&&self.Object===Object&&self,e=v||t||Function("return this")();return r1=e,r1}var i1,_2;function hh(){if(_2)return i1;_2=1;var v=zs(),t=function(){return v.Date.now()};return i1=t,i1}var n1,E2;function oh(){if(E2)return n1;E2=1;var v=/\s/;function t(e){for(var r=e.length;r--&&v.test(e.charAt(r)););return r}return n1=t,n1}var s1,S2;function dh(){if(S2)return s1;S2=1;var v=oh(),t=/^\s+/;function e(r){return r&&r.slice(0,v(r)+1).replace(t,"")}return s1=e,s1}var h1,D2;function Fs(){if(D2)return h1;D2=1;var v=zs(),t=v.Symbol;return h1=t,h1}var o1,k2;function ch(){if(k2)return o1;k2=1;var v=Fs(),t=Object.prototype,e=t.hasOwnProperty,r=t.toString,i=v?v.toStringTag:void 0;function n(s){var h=e.call(s,i),c=s[i];try{s[i]=void 0;var l=!0}catch{}var f=r.call(s);return l&&(h?s[i]=c:delete s[i]),f}return o1=n,o1}var d1,T2;function lh(){if(T2)return d1;T2=1;var v=Object.prototype,t=v.toString;function e(r){return t.call(r)}return d1=e,d1}var c1,L2;function uh(){if(L2)return c1;L2=1;var v=Fs(),t=ch(),e=lh(),r="[object Null]",i="[object Undefined]",n=v?v.toStringTag:void 0;function s(h){return h==null?h===void 0?i:r:n&&n in Object(h)?t(h):e(h)}return c1=s,c1}var l1,R2;function ph(){if(R2)return l1;R2=1;function v(t){return t!=null&&typeof t=="object"}return l1=v,l1}var u1,H2;function fh(){if(H2)return u1;H2=1;var v=uh(),t=ph(),e="[object Symbol]";function r(i){return typeof i=="symbol"||t(i)&&v(i)==e}return u1=r,u1}var p1,N2;function vh(){if(N2)return p1;N2=1;var v=dh(),t=H1(),e=fh(),r=NaN,i=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,s=/^0o[0-7]+$/i,h=parseInt;function c(l){if(typeof l=="number")return l;if(e(l))return r;if(t(l)){var f=typeof l.valueOf=="function"?l.valueOf():l;l=t(f)?f+"":f}if(typeof l!="string")return l===0?l:+l;l=v(l);var p=n.test(l);return p||s.test(l)?h(l.slice(2),p?2:8):i.test(l)?r:+l}return p1=c,p1}var f1,B2;function Us(){if(B2)return f1;B2=1;var v=H1(),t=hh(),e=vh(),r="Expected a function",i=Math.max,n=Math.min;function s(h,c,l){var f,p,w,M,L,A,u=0,g=!1,y=!1,E=!0;if(typeof h!="function")throw new TypeError(r);c=e(c)||0,v(l)&&(g=!!l.leading,y="maxWait"in l,w=y?i(e(l.maxWait)||0,c):w,E="trailing"in l?!!l.trailing:E);function B(G){var at=f,tt=p;return f=p=void 0,u=G,M=h.apply(tt,at),M}function b(G){return u=G,L=setTimeout(H,c),g?B(G):M}function k(G){var at=G-A,tt=G-u,lt=c-at;return y?n(lt,w-tt):lt}function R(G){var at=G-A,tt=G-u;return A===void 0||at>=c||at<0||y&&tt>=w}function H(){var G=t();if(R(G))return T(G);L=setTimeout(H,k(G))}function T(G){return L=void 0,E&&f?B(G):(f=p=void 0,M)}function N(){L!==void 0&&clearTimeout(L),u=0,f=A=p=L=void 0}function j(){return L===void 0?M:T(t())}function q(){var G=t(),at=R(G);if(f=arguments,p=this,A=G,at){if(L===void 0)return b(A);if(y)return clearTimeout(L),L=setTimeout(H,c),B(A)}return L===void 0&&(L=setTimeout(H,c)),M}return q.cancel=N,q.flush=j,q}return f1=s,f1}var v1,O2;function gh(){if(O2)return v1;O2=1;var v=Us(),t=H1(),e="Expected a function";function r(i,n,s){var h=!0,c=!0;if(typeof i!="function")throw new TypeError(e);return t(s)&&(h="leading"in s?!!s.leading:h,c="trailing"in s?!!s.trailing:c),v(i,n,{leading:h,maxWait:n,trailing:c})}return v1=r,v1}var mh=gh();const Mh=Je(mh);class yh{constructor(t){this.settings=t||{},this.id="epubjs-container-"+_a(),this.container=this.create(this.settings),this.settings.hidden&&(this.wrapper=this.wrap(this.container))}create(t){let e=t.height,r=t.width,i=t.overflow||!1,n=t.axis||"vertical",s=t.direction;de(this.settings,t),t.height&&Yt(t.height)&&(e=t.height+"px"),t.width&&Yt(t.width)&&(r=t.width+"px");let h=document.createElement("div");return h.id=this.id,h.classList.add("epub-container"),h.style.wordSpacing="0",h.style.lineHeight="0",h.style.verticalAlign="top",h.style.position="relative",n==="horizontal"&&(h.style.display="flex",h.style.flexDirection="row",h.style.flexWrap="nowrap"),r&&(h.style.width=r),e&&(h.style.height=e),i&&(i==="scroll"&&n==="vertical"?(h.style["overflow-y"]=i,h.style["overflow-x"]="hidden"):i==="scroll"&&n==="horizontal"?(h.style["overflow-y"]="hidden",h.style["overflow-x"]=i):h.style.overflow=i),s&&(h.dir=s,h.style.direction=s),s&&this.settings.fullsize&&(document.body.style.direction=s),h}wrap(t){var e=document.createElement("div");return e.style.visibility="hidden",e.style.overflow="hidden",e.style.width="0",e.style.height="0",e.appendChild(t),e}getElement(t){var e;if(Cs(t)?e=t:typeof t=="string"&&(e=document.getElementById(t)),!e)throw new Error("Not an Element");return e}attachTo(t){var e=this.getElement(t),r;if(e)return this.settings.hidden?r=this.wrapper:r=this.container,e.appendChild(r),this.element=e,e}getContainer(){return this.container}onResize(t){(!Yt(this.settings.width)||!Yt(this.settings.height))&&(this.resizeFunc=Mh(t,50),window.addEventListener("resize",this.resizeFunc,!1))}onOrientationChange(t){this.orientationChangeFunc=t,window.addEventListener("orientationchange",this.orientationChangeFunc,!1)}size(t,e){var r;let i=t||this.settings.width,n=e||this.settings.height;t===null?(r=this.element.getBoundingClientRect(),r.width&&(t=Math.floor(r.width),this.container.style.width=t+"px")):Yt(t)?this.container.style.width=t+"px":this.container.style.width=t,e===null?(r=r||this.element.getBoundingClientRect(),r.height&&(e=r.height,this.container.style.height=e+"px")):Yt(e)?this.container.style.height=e+"px":this.container.style.height=e,Yt(t)||(t=this.container.clientWidth),Yt(e)||(e=this.container.clientHeight),this.containerStyles=window.getComputedStyle(this.container),this.containerPadding={left:parseFloat(this.containerStyles["padding-left"])||0,right:parseFloat(this.containerStyles["padding-right"])||0,top:parseFloat(this.containerStyles["padding-top"])||0,bottom:parseFloat(this.containerStyles["padding-bottom"])||0};let s=ma(),h=window.getComputedStyle(document.body),c={left:parseFloat(h["padding-left"])||0,right:parseFloat(h["padding-right"])||0,top:parseFloat(h["padding-top"])||0,bottom:parseFloat(h["padding-bottom"])||0};return i||(t=s.width-c.left-c.right),(this.settings.fullsize&&!n||!n)&&(e=s.height-c.top-c.bottom),{width:t-this.containerPadding.left-this.containerPadding.right,height:e-this.containerPadding.top-this.containerPadding.bottom}}bounds(){let t;return this.container.style.overflow!=="visible"&&(t=this.container&&this.container.getBoundingClientRect()),!t||!t.width||!t.height?ma():t}getSheet(){var t=document.createElement("style");return t.appendChild(document.createTextNode("")),document.head.appendChild(t),t.sheet}addStyleRules(t,e){var r="#"+this.id+" ",i="";this.sheet||(this.sheet=this.getSheet()),e.forEach(function(n){for(var s in n)n.hasOwnProperty(s)&&(i+=s+":"+n[s]+";")}),this.sheet.insertRule(r+t+" {"+i+"}",0)}axis(t){t==="horizontal"?(this.container.style.display="flex",this.container.style.flexDirection="row",this.container.style.flexWrap="nowrap"):this.container.style.display="block",this.settings.axis=t}direction(t){this.container&&(this.container.dir=t,this.container.style.direction=t),this.settings.fullsize&&(document.body.style.direction=t),this.settings.dir=t}overflow(t){this.container&&(t==="scroll"&&this.settings.axis==="vertical"?(this.container.style["overflow-y"]=t,this.container.style["overflow-x"]="hidden"):t==="scroll"&&this.settings.axis==="horizontal"?(this.container.style["overflow-y"]="hidden",this.container.style["overflow-x"]=t):this.container.style.overflow=t),this.settings.overflow=t}destroy(){this.element&&(this.settings.hidden?this.wrapper:this.container,this.element.contains(this.container)&&this.element.removeChild(this.container),window.removeEventListener("resize",this.resizeFunc),window.removeEventListener("orientationChange",this.orientationChangeFunc))}}class xh{constructor(t){this.container=t,this._views=[],this.length=0,this.hidden=!1}all(){return this._views}first(){return this._views[0]}last(){return this._views[this._views.length-1]}indexOf(t){return this._views.indexOf(t)}slice(){return this._views.slice.apply(this._views,arguments)}get(t){return this._views[t]}append(t){return this._views.push(t),this.container&&this.container.appendChild(t.element),this.length++,t}prepend(t){return this._views.unshift(t),this.container&&this.container.insertBefore(t.element,this.container.firstChild),this.length++,t}insert(t,e){return this._views.splice(e,0,t),this.container&&(e<this.container.children.length?this.container.insertBefore(t.element,this.container.children[e]):this.container.appendChild(t.element)),this.length++,t}remove(t){var e=this._views.indexOf(t);e>-1&&this._views.splice(e,1),this.destroy(t),this.length--}destroy(t){t.displayed&&t.destroy(),this.container&&this.container.removeChild(t.element),t=null}forEach(){return this._views.forEach.apply(this._views,arguments)}clear(){var t,e=this.length;if(this.length){for(var r=0;r<e;r++)t=this._views[r],this.destroy(t);this._views=[],this.length=0}}find(t){for(var e,r=this.length,i=0;i<r;i++)if(e=this._views[i],e.displayed&&e.section.index==t.index)return e}displayed(){for(var t=[],e,r=this.length,i=0;i<r;i++)e=this._views[i],e.displayed&&t.push(e);return t}show(){for(var t,e=this.length,r=0;r<e;r++)t=this._views[r],t.displayed&&t.show();this.hidden=!1}hide(){for(var t,e=this.length,r=0;r<e;r++)t=this._views[r],t.displayed&&t.hide();this.hidden=!0}}class ba{constructor(t){this.name="default",this.optsSettings=t.settings,this.View=t.view,this.request=t.request,this.renditionQueue=t.queue,this.q=new L1(this),this.settings=de(this.settings||{},{infinite:!0,hidden:!1,width:void 0,height:void 0,axis:void 0,writingMode:void 0,flow:"scrolled",ignoreClass:"",fullsize:void 0,allowScriptedContent:!1,allowPopups:!1}),de(this.settings,t.settings||{}),this.viewSettings={ignoreClass:this.settings.ignoreClass,axis:this.settings.axis,flow:this.settings.flow,layout:this.layout,method:this.settings.method,width:0,height:0,forceEvenPages:!0,allowScriptedContent:this.settings.allowScriptedContent,allowPopups:this.settings.allowPopups},this.rendered=!1}render(t,e){let r=t.tagName;typeof this.settings.fullsize>"u"&&r&&(r.toLowerCase()=="body"||r.toLowerCase()=="html")&&(this.settings.fullsize=!0),this.settings.fullsize&&(this.settings.overflow="visible",this.overflow=this.settings.overflow),this.settings.size=e,this.settings.rtlScrollType=ih(),this.stage=new yh({width:e.width,height:e.height,overflow:this.overflow,hidden:this.settings.hidden,axis:this.settings.axis,fullsize:this.settings.fullsize,direction:this.settings.direction}),this.stage.attachTo(t),this.container=this.stage.getContainer(),this.views=new xh(this.container),this._bounds=this.bounds(),this._stageSize=this.stage.size(),this.viewSettings.width=this._stageSize.width,this.viewSettings.height=this._stageSize.height,this.stage.onResize(this.onResized.bind(this)),this.stage.onOrientationChange(this.onOrientationChange.bind(this)),this.addEventListeners(),this.layout&&this.updateLayout(),this.rendered=!0}addEventListeners(){var t;window.addEventListener("unload",(function(e){this.destroy()}).bind(this)),this.settings.fullsize?t=window:t=this.container,this._onScroll=this.onScroll.bind(this),t.addEventListener("scroll",this._onScroll)}removeEventListeners(){var t;this.settings.fullsize?t=window:t=this.container,t.removeEventListener("scroll",this._onScroll),this._onScroll=void 0}destroy(){clearTimeout(this.orientationTimeout),clearTimeout(this.resizeTimeout),clearTimeout(this.afterScrolled),this.clear(),this.removeEventListeners(),this.stage.destroy(),this.rendered=!1}onOrientationChange(t){let{orientation:e}=window;this.optsSettings.resizeOnOrientationChange&&this.resize(),clearTimeout(this.orientationTimeout),this.orientationTimeout=setTimeout((function(){this.orientationTimeout=void 0,this.optsSettings.resizeOnOrientationChange&&this.resize(),this.emit(ct.MANAGERS.ORIENTATION_CHANGE,e)}).bind(this),500)}onResized(t){this.resize()}resize(t,e,r){let i=this.stage.size(t,e);if(this.winBounds=ma(),this.orientationTimeout&&this.winBounds.width===this.winBounds.height){this._stageSize=void 0;return}this._stageSize&&this._stageSize.width===i.width&&this._stageSize.height===i.height||(this._stageSize=i,this._bounds=this.bounds(),this.clear(),this.viewSettings.width=this._stageSize.width,this.viewSettings.height=this._stageSize.height,this.updateLayout(),this.emit(ct.MANAGERS.RESIZED,{width:this._stageSize.width,height:this._stageSize.height},r))}createView(t,e){return new this.View(t,de(this.viewSettings,{forceRight:e}))}handleNextPrePaginated(t,e,r){let i;if(this.layout.name==="pre-paginated"&&this.layout.divisor>1){if(t||e.index===0)return;if(i=e.next(),i&&!i.properties.includes("page-spread-left"))return r.call(this,i)}}display(t,e){var r=new Bt,i=r.promise;(e===t.href||Yt(e))&&(e=void 0);var n=this.views.find(t);if(n&&t&&this.layout.name!=="pre-paginated"){let h=n.offset();if(this.settings.direction==="ltr")this.scrollTo(h.left,h.top,!0);else{let c=n.width();this.scrollTo(h.left+c,h.top,!0)}if(e){let c=n.locationOf(e),l=n.width();this.moveTo(c,l)}return r.resolve(),i}this.clear();let s=!1;return this.layout.name==="pre-paginated"&&this.layout.divisor===2&&t.properties.includes("page-spread-right")&&(s=!0),this.add(t,s).then((function(h){if(e){let c=h.locationOf(e),l=h.width();this.moveTo(c,l)}}).bind(this),h=>{r.reject(h)}).then((function(){return this.handleNextPrePaginated(s,t,this.add)}).bind(this)).then((function(){this.views.show(),r.resolve()}).bind(this)),i}afterDisplayed(t){this.emit(ct.MANAGERS.ADDED,t)}afterResized(t){this.emit(ct.MANAGERS.RESIZE,t.section)}moveTo(t,e){var r=0,i=0;this.isPaginated?(r=Math.floor(t.left/this.layout.delta)*this.layout.delta,r+this.layout.delta>this.container.scrollWidth&&(r=this.container.scrollWidth-this.layout.delta),i=Math.floor(t.top/this.layout.delta)*this.layout.delta,i+this.layout.delta>this.container.scrollHeight&&(i=this.container.scrollHeight-this.layout.delta)):i=t.top,this.settings.direction==="rtl"&&(r=r+this.layout.delta,r=r-e),this.scrollTo(r,i,!0)}add(t,e){var r=this.createView(t,e);return this.views.append(r),r.onDisplayed=this.afterDisplayed.bind(this),r.onResize=this.afterResized.bind(this),r.on(ct.VIEWS.AXIS,i=>{this.updateAxis(i)}),r.on(ct.VIEWS.WRITING_MODE,i=>{this.updateWritingMode(i)}),r.display(this.request)}append(t,e){var r=this.createView(t,e);return this.views.append(r),r.onDisplayed=this.afterDisplayed.bind(this),r.onResize=this.afterResized.bind(this),r.on(ct.VIEWS.AXIS,i=>{this.updateAxis(i)}),r.on(ct.VIEWS.WRITING_MODE,i=>{this.updateWritingMode(i)}),r.display(this.request)}prepend(t,e){var r=this.createView(t,e);return r.on(ct.VIEWS.RESIZED,i=>{this.counter(i)}),this.views.prepend(r),r.onDisplayed=this.afterDisplayed.bind(this),r.onResize=this.afterResized.bind(this),r.on(ct.VIEWS.AXIS,i=>{this.updateAxis(i)}),r.on(ct.VIEWS.WRITING_MODE,i=>{this.updateWritingMode(i)}),r.display(this.request)}counter(t){this.settings.axis==="vertical"?this.scrollBy(0,t.heightDelta,!0):this.scrollBy(t.widthDelta,0,!0)}next(){var t,e;let r=this.settings.direction;if(this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"&&(!r||r==="ltr")?(this.scrollLeft=this.container.scrollLeft,e=this.container.scrollLeft+this.container.offsetWidth+this.layout.delta,e<=this.container.scrollWidth?this.scrollBy(this.layout.delta,0,!0):t=this.views.last().section.next()):this.isPaginated&&this.settings.axis==="horizontal"&&r==="rtl"?(this.scrollLeft=this.container.scrollLeft,this.settings.rtlScrollType==="default"?(e=this.container.scrollLeft,e>0?this.scrollBy(this.layout.delta,0,!0):t=this.views.last().section.next()):(e=this.container.scrollLeft+this.layout.delta*-1,e>this.container.scrollWidth*-1?this.scrollBy(this.layout.delta,0,!0):t=this.views.last().section.next())):this.isPaginated&&this.settings.axis==="vertical"?(this.scrollTop=this.container.scrollTop,this.container.scrollTop+this.container.offsetHeight<this.container.scrollHeight?this.scrollBy(0,this.layout.height,!0):t=this.views.last().section.next()):t=this.views.last().section.next(),t)){this.clear(),this.updateLayout();let i=!1;return this.layout.name==="pre-paginated"&&this.layout.divisor===2&&t.properties.includes("page-spread-right")&&(i=!0),this.append(t,i).then((function(){return this.handleNextPrePaginated(i,t,this.append)}).bind(this),n=>n).then((function(){!this.isPaginated&&this.settings.axis==="horizontal"&&this.settings.direction==="rtl"&&this.settings.rtlScrollType==="default"&&this.scrollTo(this.container.scrollWidth,0,!0),this.views.show()}).bind(this))}}prev(){var t,e;let r=this.settings.direction;if(this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"&&(!r||r==="ltr")?(this.scrollLeft=this.container.scrollLeft,e=this.container.scrollLeft,e>0?this.scrollBy(-this.layout.delta,0,!0):t=this.views.first().section.prev()):this.isPaginated&&this.settings.axis==="horizontal"&&r==="rtl"?(this.scrollLeft=this.container.scrollLeft,this.settings.rtlScrollType==="default"?(e=this.container.scrollLeft+this.container.offsetWidth,e<this.container.scrollWidth?this.scrollBy(-this.layout.delta,0,!0):t=this.views.first().section.prev()):(e=this.container.scrollLeft,e<0?this.scrollBy(-this.layout.delta,0,!0):t=this.views.first().section.prev())):this.isPaginated&&this.settings.axis==="vertical"?(this.scrollTop=this.container.scrollTop,this.container.scrollTop>0?this.scrollBy(0,-this.layout.height,!0):t=this.views.first().section.prev()):t=this.views.first().section.prev(),t)){this.clear(),this.updateLayout();let i=!1;return this.layout.name==="pre-paginated"&&this.layout.divisor===2&&typeof t.prev()!="object"&&(i=!0),this.prepend(t,i).then((function(){var n;if(this.layout.name==="pre-paginated"&&this.layout.divisor>1&&(n=t.prev(),n))return this.prepend(n)}).bind(this),n=>n).then((function(){this.isPaginated&&this.settings.axis==="horizontal"&&(this.settings.direction==="rtl"?this.settings.rtlScrollType==="default"?this.scrollTo(0,0,!0):this.scrollTo(this.container.scrollWidth*-1+this.layout.delta,0,!0):this.scrollTo(this.container.scrollWidth-this.layout.delta,0,!0)),this.views.show()}).bind(this))}}current(){var t=this.visible();return t.length?t[t.length-1]:null}clear(){this.views&&(this.views.hide(),this.scrollTo(0,0,!0),this.views.clear())}currentLocation(){return this.updateLayout(),this.isPaginated&&this.settings.axis==="horizontal"?this.location=this.paginatedLocation():this.location=this.scrolledLocation(),this.location}scrolledLocation(){let t=this.visible(),e=this.container.getBoundingClientRect(),r=e.height<window.innerHeight?e.height:window.innerHeight,i=e.width<window.innerWidth?e.width:window.innerWidth,n=this.settings.axis==="vertical";this.settings.direction;let s=0,h=0;return this.settings.fullsize&&(s=n?window.scrollY:window.scrollX),t.map(l=>{let{index:f,href:p}=l.section,w=l.position(),M=l.width(),L=l.height(),A,u,g,y;n?(A=s+e.top-w.top+h,u=A+r-h,y=this.layout.count(L,r).pages,g=r):(A=s+e.left-w.left+h,u=A+i-h,y=this.layout.count(M,i).pages,g=i);let E=Math.ceil(A/g),B=[],b=Math.ceil(u/g);if(this.settings.direction==="rtl"&&!n){let H=E;E=y-b,b=y-H}B=[];for(var k=E;k<=b;k++){let H=k+1;B.push(H)}let R=this.mapping.page(l.contents,l.section.cfiBase,A,u);return{index:f,href:p,pages:B,totalPages:y,mapping:R}})}paginatedLocation(){let t=this.visible(),e=this.container.getBoundingClientRect(),r=0,i=0;return this.settings.fullsize&&(r=window.scrollX),t.map(s=>{let{index:h,href:c}=s.section,l,f=s.position(),p=s.width(),w,M,L;this.settings.direction==="rtl"?(l=e.right-r,L=Math.min(Math.abs(l-f.left),this.layout.width)-i,M=f.width-(f.right-l)-i,w=M-L):(l=e.left+r,L=Math.min(f.right-l,this.layout.width)-i,w=l-f.left+i,M=w+L),i+=L;let A=this.mapping.page(s.contents,s.section.cfiBase,w,M),u=this.layout.count(p).pages,g=Math.floor(w/this.layout.pageWidth),y=[],E=Math.floor(M/this.layout.pageWidth);if(g<0&&(g=0,E=E+1),this.settings.direction==="rtl"){let b=g;g=u-E,E=u-b}for(var B=g+1;B<=E;B++){let b=B;y.push(b)}return{index:h,href:c,pages:y,totalPages:u,mapping:A}})}isVisible(t,e,r,i){var n=t.position(),s=i||this.bounds();return this.settings.axis==="horizontal"&&n.right>s.left-e&&n.left<s.right+r?!0:this.settings.axis==="vertical"&&n.bottom>s.top-e&&n.top<s.bottom+r}visible(){for(var t=this.bounds(),e=this.views.displayed(),r=e.length,i=[],n,s,h=0;h<r;h++)s=e[h],n=this.isVisible(s,0,0,t),n===!0&&i.push(s);return i}scrollBy(t,e,r){let i=this.settings.direction==="rtl"?-1:1;r&&(this.ignore=!0),this.settings.fullsize?window.scrollBy(t*i,e*i):(t&&(this.container.scrollLeft+=t*i),e&&(this.container.scrollTop+=e)),this.scrolled=!0}scrollTo(t,e,r){r&&(this.ignore=!0),this.settings.fullsize?window.scrollTo(t,e):(this.container.scrollLeft=t,this.container.scrollTop=e),this.scrolled=!0}onScroll(){let t,e;this.settings.fullsize?(t=window.scrollY,e=window.scrollX):(t=this.container.scrollTop,e=this.container.scrollLeft),this.scrollTop=t,this.scrollLeft=e,this.ignore?this.ignore=!1:(this.emit(ct.MANAGERS.SCROLL,{top:t,left:e}),clearTimeout(this.afterScrolled),this.afterScrolled=setTimeout((function(){this.emit(ct.MANAGERS.SCROLLED,{top:this.scrollTop,left:this.scrollLeft})}).bind(this),20))}bounds(){var t;return t=this.stage.bounds(),t}applyLayout(t){this.layout=t,this.updateLayout(),this.views&&this.views.length>0&&this.layout.name==="pre-paginated"&&this.display(this.views.first().section)}updateLayout(){this.stage&&(this._stageSize=this.stage.size(),this.isPaginated?(this.layout.calculate(this._stageSize.width,this._stageSize.height,this.settings.gap),this.settings.offset=this.layout.delta/this.layout.divisor):this.layout.calculate(this._stageSize.width,this._stageSize.height),this.viewSettings.width=this.layout.width,this.viewSettings.height=this.layout.height,this.setLayout(this.layout))}setLayout(t){this.viewSettings.layout=t,this.mapping=new wa(t.props,this.settings.direction,this.settings.axis),this.views&&this.views.forEach(function(e){e&&e.setLayout(t)})}updateWritingMode(t){this.writingMode=t}updateAxis(t,e){!e&&t===this.settings.axis||(this.settings.axis=t,this.stage&&this.stage.axis(t),this.viewSettings.axis=t,this.mapping&&(this.mapping=new wa(this.layout.props,this.settings.direction,this.settings.axis)),this.layout&&(t==="vertical"?this.layout.spread("none"):this.layout.spread(this.layout.settings.spread)))}updateFlow(t,e="auto"){let r=t==="paginated"||t==="auto";this.isPaginated=r,t==="scrolled-doc"||t==="scrolled-continuous"||t==="scrolled"?this.updateAxis("vertical"):this.updateAxis("horizontal"),this.viewSettings.flow=t,this.settings.overflow?this.overflow=this.settings.overflow:this.overflow=r?"hidden":e,this.stage&&this.stage.overflow(this.overflow),this.updateLayout()}getContents(){var t=[];return this.views&&this.views.forEach(function(e){const r=e&&e.contents;r&&t.push(r)}),t}direction(t="ltr"){this.settings.direction=t,this.stage&&this.stage.direction(t),this.viewSettings.direction=t,this.updateLayout()}isRendered(){return this.rendered}}Re(ba.prototype);const wh={easeInCubic:function(v){return Math.pow(v,3)}};class _1{constructor(t,e){this.settings=de({duration:80,minVelocity:.2,minDistance:10,easing:wh.easeInCubic},e||{}),this.supportsTouch=this.supportsTouch(),this.supportsTouch&&this.setup(t)}setup(t){this.manager=t,this.layout=this.manager.layout,this.fullsize=this.manager.settings.fullsize,this.fullsize?(this.element=this.manager.stage.element,this.scroller=window,this.disableScroll()):(this.element=this.manager.stage.container,this.scroller=this.element,this.element.style.WebkitOverflowScrolling="touch"),this.manager.settings.offset=this.layout.width,this.manager.settings.afterScrolledTimeout=this.settings.duration*2,this.isVertical=this.manager.settings.axis==="vertical",!(!this.manager.isPaginated||this.isVertical)&&(this.touchCanceler=!1,this.resizeCanceler=!1,this.snapping=!1,this.scrollLeft,this.scrollTop,this.startTouchX=void 0,this.startTouchY=void 0,this.startTime=void 0,this.endTouchX=void 0,this.endTouchY=void 0,this.endTime=void 0,this.addListeners())}supportsTouch(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}disableScroll(){this.element.style.overflow="hidden"}enableScroll(){this.element.style.overflow=""}addListeners(){this._onResize=this.onResize.bind(this),window.addEventListener("resize",this._onResize),this._onScroll=this.onScroll.bind(this),this.scroller.addEventListener("scroll",this._onScroll),this._onTouchStart=this.onTouchStart.bind(this),this.scroller.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.on("touchstart",this._onTouchStart),this._onTouchMove=this.onTouchMove.bind(this),this.scroller.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.on("touchmove",this._onTouchMove),this._onTouchEnd=this.onTouchEnd.bind(this),this.scroller.addEventListener("touchend",this._onTouchEnd,{passive:!0}),this.on("touchend",this._onTouchEnd),this._afterDisplayed=this.afterDisplayed.bind(this),this.manager.on(ct.MANAGERS.ADDED,this._afterDisplayed)}removeListeners(){window.removeEventListener("resize",this._onResize),this._onResize=void 0,this.scroller.removeEventListener("scroll",this._onScroll),this._onScroll=void 0,this.scroller.removeEventListener("touchstart",this._onTouchStart,{passive:!0}),this.off("touchstart",this._onTouchStart),this._onTouchStart=void 0,this.scroller.removeEventListener("touchmove",this._onTouchMove,{passive:!0}),this.off("touchmove",this._onTouchMove),this._onTouchMove=void 0,this.scroller.removeEventListener("touchend",this._onTouchEnd,{passive:!0}),this.off("touchend",this._onTouchEnd),this._onTouchEnd=void 0,this.manager.off(ct.MANAGERS.ADDED,this._afterDisplayed),this._afterDisplayed=void 0}afterDisplayed(t){let e=t.contents;["touchstart","touchmove","touchend"].forEach(r=>{e.on(r,i=>this.triggerViewEvent(i,e))})}triggerViewEvent(t,e){this.emit(t.type,t,e)}onScroll(t){this.scrollLeft=this.fullsize?window.scrollX:this.scroller.scrollLeft,this.scrollTop=this.fullsize?window.scrollY:this.scroller.scrollTop}onResize(t){this.resizeCanceler=!0}onTouchStart(t){let{screenX:e,screenY:r}=t.touches[0];this.fullsize&&this.enableScroll(),this.touchCanceler=!0,this.startTouchX||(this.startTouchX=e,this.startTouchY=r,this.startTime=this.now()),this.endTouchX=e,this.endTouchY=r,this.endTime=this.now()}onTouchMove(t){let{screenX:e,screenY:r}=t.touches[0],i=Math.abs(r-this.endTouchY);this.touchCanceler=!0,!this.fullsize&&i<10&&(this.element.scrollLeft-=e-this.endTouchX),this.endTouchX=e,this.endTouchY=r,this.endTime=this.now()}onTouchEnd(t){this.fullsize&&this.disableScroll(),this.touchCanceler=!1;let e=this.wasSwiped();e!==0?this.snap(e):this.snap(),this.startTouchX=void 0,this.startTouchY=void 0,this.startTime=void 0,this.endTouchX=void 0,this.endTouchY=void 0,this.endTime=void 0}wasSwiped(){let t=this.layout.pageWidth*this.layout.divisor,e=this.endTouchX-this.startTouchX,r=Math.abs(e),i=this.endTime-this.startTime,n=e/i,s=this.settings.minVelocity;if(r<=this.settings.minDistance||r>=t)return 0;if(n>s)return-1;if(n<-s)return 1}needsSnap(){let t=this.scrollLeft,e=this.layout.pageWidth*this.layout.divisor;return t%e!==0}snap(t=0){let e=this.scrollLeft,r=this.layout.pageWidth*this.layout.divisor,i=Math.round(e/r)*r;return t&&(i+=t*r),this.smoothScrollTo(i)}smoothScrollTo(t){const e=new Bt,r=this.scrollLeft,i=this.now(),n=this.settings.duration,s=this.settings.easing;this.snapping=!0;function h(){const c=this.now(),l=Math.min(1,(c-i)/n);if(s(l),this.touchCanceler||this.resizeCanceler){this.resizeCanceler=!1,this.snapping=!1,e.resolve();return}l<1?(window.requestAnimationFrame(h.bind(this)),this.scrollTo(r+(t-r)*l,0)):(this.scrollTo(t,0),this.snapping=!1,e.resolve())}return h.call(this),e.promise}scrollTo(t=0,e=0){this.fullsize?window.scroll(t,e):(this.scroller.scrollLeft=t,this.scroller.scrollTop=e)}now(){return"now"in window.performance?performance.now():new Date().getTime()}destroy(){this.scroller&&(this.fullsize&&this.enableScroll(),this.removeListeners(),this.scroller=void 0)}}Re(_1.prototype);var bh=Us();const Ah=Je(bh);class Ch extends ba{constructor(t){super(t),this.name="continuous",this.settings=de(this.settings||{},{infinite:!0,overflow:void 0,axis:void 0,writingMode:void 0,flow:"scrolled",offset:500,offsetDelta:250,width:void 0,height:void 0,snap:!1,afterScrolledTimeout:10,allowScriptedContent:!1,allowPopups:!1}),de(this.settings,t.settings||{}),t.settings.gap!="undefined"&&t.settings.gap===0&&(this.settings.gap=t.settings.gap),this.viewSettings={ignoreClass:this.settings.ignoreClass,axis:this.settings.axis,flow:this.settings.flow,layout:this.layout,width:0,height:0,forceEvenPages:!1,allowScriptedContent:this.settings.allowScriptedContent,allowPopups:this.settings.allowPopups},this.scrollTop=0,this.scrollLeft=0}display(t,e){return ba.prototype.display.call(this,t,e).then((function(){return this.fill()}).bind(this))}fill(t){var e=t||new Bt;return this.q.enqueue(()=>this.check()).then(r=>{r?this.fill(e):e.resolve()}),e.promise}moveTo(t){var e=0,r=0;this.isPaginated?(e=Math.floor(t.left/this.layout.delta)*this.layout.delta,e+this.settings.offsetDelta):(r=t.top,t.top+this.settings.offsetDelta),(e>0||r>0)&&this.scrollBy(e,r,!0)}afterResized(t){this.emit(ct.MANAGERS.RESIZE,t.section)}removeShownListeners(t){t.onDisplayed=function(){}}add(t){var e=this.createView(t);return this.views.append(e),e.on(ct.VIEWS.RESIZED,r=>{e.expanded=!0}),e.on(ct.VIEWS.AXIS,r=>{this.updateAxis(r)}),e.on(ct.VIEWS.WRITING_MODE,r=>{this.updateWritingMode(r)}),e.onDisplayed=this.afterDisplayed.bind(this),e.onResize=this.afterResized.bind(this),e.display(this.request)}append(t){var e=this.createView(t);return e.on(ct.VIEWS.RESIZED,r=>{e.expanded=!0}),e.on(ct.VIEWS.AXIS,r=>{this.updateAxis(r)}),e.on(ct.VIEWS.WRITING_MODE,r=>{this.updateWritingMode(r)}),this.views.append(e),e.onDisplayed=this.afterDisplayed.bind(this),e}prepend(t){var e=this.createView(t);return e.on(ct.VIEWS.RESIZED,r=>{this.counter(r),e.expanded=!0}),e.on(ct.VIEWS.AXIS,r=>{this.updateAxis(r)}),e.on(ct.VIEWS.WRITING_MODE,r=>{this.updateWritingMode(r)}),this.views.prepend(e),e.onDisplayed=this.afterDisplayed.bind(this),e}counter(t){this.settings.axis==="vertical"?this.scrollBy(0,t.heightDelta,!0):this.scrollBy(t.widthDelta,0,!0)}update(t){for(var e=this.bounds(),r=this.views.all(),i=r.length,n=typeof t<"u"?t:this.settings.offset||0,s,h,c=new Bt,l=[],f=0;f<i;f++)if(h=r[f],s=this.isVisible(h,n,n,e),s===!0)if(h.displayed)h.show();else{let p=h.display(this.request).then(function(w){w.show()},w=>{h.hide()});l.push(p)}else this.q.enqueue(h.destroy.bind(h)),clearTimeout(this.trimTimeout),this.trimTimeout=setTimeout((function(){this.q.enqueue(this.trim.bind(this))}).bind(this),250);return l.length?Promise.all(l).catch(p=>{c.reject(p)}):(c.resolve(),c.promise)}check(t,e){var r=new Bt,i=[],n=this.settings.axis==="horizontal",s=this.settings.offset||0;t&&n&&(s=t),e&&!n&&(s=e);var h=this._bounds;let c=n?this.scrollLeft:this.scrollTop,l=n?Math.floor(h.width):h.height,f=n?this.container.scrollWidth:this.container.scrollHeight,p=this.writingMode&&this.writingMode.indexOf("vertical")===0?"vertical":"horizontal",w=this.settings.rtlScrollType,M=this.settings.direction==="rtl";this.settings.fullsize?(n&&M&&w==="negative"||!n&&M&&w==="default")&&(c=c*-1):(M&&w==="default"&&p==="horizontal"&&(c=f-l-c),M&&w==="negative"&&p==="horizontal"&&(c=c*-1));let L=()=>{let E=this.views.first(),B=E&&E.section.prev();B&&i.push(this.prepend(B))},A=()=>{let E=this.views.last(),B=E&&E.section.next();B&&i.push(this.append(B))},u=c+l+s,g=c-s;u>=f&&A(),g<0&&L();let y=i.map(E=>E.display(this.request));return i.length?Promise.all(y).then(()=>this.check()).then(()=>this.update(s),E=>E):(this.q.enqueue((function(){this.update()}).bind(this)),r.resolve(!1),r.promise)}trim(){for(var t=new Bt,e=this.views.displayed(),r=e[0],i=e[e.length-1],n=this.views.indexOf(r),s=this.views.indexOf(i),h=this.views.slice(0,n),c=this.views.slice(s+1),l=0;l<h.length-1;l++)this.erase(h[l],h);for(var f=1;f<c.length;f++)this.erase(c[f]);return t.resolve(),t.promise}erase(t,e){var r,i;this.settings.fullsize?(r=window.scrollY,i=window.scrollX):(r=this.container.scrollTop,i=this.container.scrollLeft);var n=t.bounds();this.views.remove(t),e&&(this.settings.axis==="vertical"?this.scrollTo(0,r-n.height,!0):this.settings.direction==="rtl"?this.settings.fullsize?this.scrollTo(i+Math.floor(n.width),0,!0):this.scrollTo(i,0,!0):this.scrollTo(i-Math.floor(n.width),0,!0))}addEventListeners(t){window.addEventListener("unload",(function(e){this.ignore=!0,this.destroy()}).bind(this)),this.addScrollListeners(),this.isPaginated&&this.settings.snap&&(this.snapper=new _1(this,this.settings.snap&&typeof this.settings.snap=="object"&&this.settings.snap))}addScrollListeners(){var t;this.tick=D1;let e=this.settings.direction==="rtl"&&this.settings.rtlScrollType==="default"?-1:1;this.scrollDeltaVert=0,this.scrollDeltaHorz=0,this.settings.fullsize?(t=window,this.scrollTop=window.scrollY*e,this.scrollLeft=window.scrollX*e):(t=this.container,this.scrollTop=this.container.scrollTop,this.scrollLeft=this.container.scrollLeft),this._onScroll=this.onScroll.bind(this),t.addEventListener("scroll",this._onScroll),this._scrolled=Ah(this.scrolled.bind(this),30),this.didScroll=!1}removeEventListeners(){var t;this.settings.fullsize?t=window:t=this.container,t.removeEventListener("scroll",this._onScroll),this._onScroll=void 0}onScroll(){let t,e,r=this.settings.direction==="rtl"&&this.settings.rtlScrollType==="default"?-1:1;this.settings.fullsize?(t=window.scrollY*r,e=window.scrollX*r):(t=this.container.scrollTop,e=this.container.scrollLeft),this.scrollTop=t,this.scrollLeft=e,this.ignore?this.ignore=!1:this._scrolled(),this.scrollDeltaVert+=Math.abs(t-this.prevScrollTop),this.scrollDeltaHorz+=Math.abs(e-this.prevScrollLeft),this.prevScrollTop=t,this.prevScrollLeft=e,clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((function(){this.scrollDeltaVert=0,this.scrollDeltaHorz=0}).bind(this),150),clearTimeout(this.afterScrolled),this.didScroll=!1}scrolled(){this.q.enqueue((function(){return this.check()}).bind(this)),this.emit(ct.MANAGERS.SCROLL,{top:this.scrollTop,left:this.scrollLeft}),clearTimeout(this.afterScrolled),this.afterScrolled=setTimeout((function(){this.snapper&&this.snapper.supportsTouch&&this.snapper.needsSnap()||this.emit(ct.MANAGERS.SCROLLED,{top:this.scrollTop,left:this.scrollLeft})}).bind(this),this.settings.afterScrolledTimeout)}next(){let t=this.layout.props.name==="pre-paginated"&&this.layout.props.spread?this.layout.props.delta*2:this.layout.props.delta;this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"?this.scrollBy(t,0,!0):this.scrollBy(0,this.layout.height,!0),this.q.enqueue((function(){return this.check()}).bind(this)))}prev(){let t=this.layout.props.name==="pre-paginated"&&this.layout.props.spread?this.layout.props.delta*2:this.layout.props.delta;this.views.length&&(this.isPaginated&&this.settings.axis==="horizontal"?this.scrollBy(-t,0,!0):this.scrollBy(0,-this.layout.height,!0),this.q.enqueue((function(){return this.check()}).bind(this)))}updateFlow(t){this.rendered&&this.snapper&&(this.snapper.destroy(),this.snapper=void 0),super.updateFlow(t,"scroll"),this.rendered&&this.isPaginated&&this.settings.snap&&(this.snapper=new _1(this,this.settings.snap&&typeof this.settings.snap=="object"&&this.settings.snap))}destroy(){super.destroy(),this.snapper&&this.snapper.destroy()}}class N1{constructor(t,e){this.settings=de(this.settings||{},{width:null,height:null,ignoreClass:"",manager:"default",view:"iframe",flow:null,layout:null,spread:null,minSpreadWidth:800,stylesheet:null,resizeOnOrientationChange:!0,script:null,snap:!1,defaultDirection:"ltr",allowScriptedContent:!1,allowPopups:!1}),de(this.settings,e),typeof this.settings.manager=="object"&&(this.manager=this.settings.manager),this.book=t,this.hooks={},this.hooks.display=new De(this),this.hooks.serialize=new De(this),this.hooks.content=new De(this),this.hooks.unloaded=new De(this),this.hooks.layout=new De(this),this.hooks.render=new De(this),this.hooks.show=new De(this),this.hooks.content.register(this.handleLinks.bind(this)),this.hooks.content.register(this.passEvents.bind(this)),this.hooks.content.register(this.adjustImages.bind(this)),this.book.spine.hooks.content.register(this.injectIdentifier.bind(this)),this.settings.stylesheet&&this.book.spine.hooks.content.register(this.injectStylesheet.bind(this)),this.settings.script&&this.book.spine.hooks.content.register(this.injectScript.bind(this)),this.themes=new K0(this),this.annotations=new th(this),this.epubcfi=new Ot,this.q=new L1(this),this.location=void 0,this.q.enqueue(this.book.opened),this.starting=new Bt,this.started=this.starting.promise,this.q.enqueue(this.start)}setManager(t){this.manager=t}requireManager(t){var e;return typeof t=="string"&&t==="default"?e=ba:typeof t=="string"&&t==="continuous"?e=Ch:e=t,e}requireView(t){var e;return typeof t=="string"&&t==="iframe"?e=Ps:e=t,e}start(){switch(!this.settings.layout&&(this.book.package.metadata.layout==="pre-paginated"||this.book.displayOptions.fixedLayout==="true")&&(this.settings.layout="pre-paginated"),this.book.package.metadata.spread){case"none":this.settings.spread="none";break;case"both":this.settings.spread=!0;break}this.manager||(this.ViewManager=this.requireManager(this.settings.manager),this.View=this.requireView(this.settings.view),this.manager=new this.ViewManager({view:this.View,queue:this.q,request:this.book.load.bind(this.book),settings:this.settings})),this.direction(this.book.package.metadata.direction||this.settings.defaultDirection),this.settings.globalLayoutProperties=this.determineLayoutProperties(this.book.package.metadata),this.flow(this.settings.globalLayoutProperties.flow),this.layout(this.settings.globalLayoutProperties),this.manager.on(ct.MANAGERS.ADDED,this.afterDisplayed.bind(this)),this.manager.on(ct.MANAGERS.REMOVED,this.afterRemoved.bind(this)),this.manager.on(ct.MANAGERS.RESIZED,this.onResized.bind(this)),this.manager.on(ct.MANAGERS.ORIENTATION_CHANGE,this.onOrientationChange.bind(this)),this.manager.on(ct.MANAGERS.SCROLLED,this.reportLocation.bind(this)),this.emit(ct.RENDITION.STARTED),this.starting.resolve()}attachTo(t){return this.q.enqueue((function(){this.manager.render(t,{width:this.settings.width,height:this.settings.height}),this.emit(ct.RENDITION.ATTACHED)}).bind(this))}display(t){return this.displaying&&this.displaying.resolve(),this.q.enqueue(this._display,t)}_display(t){if(this.book){this.epubcfi.isCfiString(t);var e=new Bt,r=e.promise,i;return this.displaying=e,this.book.locations.length()&&_s(t)&&(t=this.book.locations.cfiFromPercentage(parseFloat(t))),i=this.book.spine.get(t),i?(this.manager.display(i,t).then(()=>{e.resolve(i),this.displaying=void 0,this.emit(ct.RENDITION.DISPLAYED,i),this.reportLocation()},n=>{this.emit(ct.RENDITION.DISPLAY_ERROR,n)}),r):(e.reject(new Error("No Section Found")),r)}}afterDisplayed(t){t.on(ct.VIEWS.MARK_CLICKED,(e,r)=>this.triggerMarkEvent(e,r,t.contents)),this.hooks.render.trigger(t,this).then(()=>{t.contents?this.hooks.content.trigger(t.contents,this).then(()=>{this.emit(ct.RENDITION.RENDERED,t.section,t)}):this.emit(ct.RENDITION.RENDERED,t.section,t)})}afterRemoved(t){this.hooks.unloaded.trigger(t,this).then(()=>{this.emit(ct.RENDITION.REMOVED,t.section,t)})}onResized(t,e){this.emit(ct.RENDITION.RESIZED,{width:t.width,height:t.height},e),this.location&&this.location.start&&this.display(e||this.location.start.cfi)}onOrientationChange(t){this.emit(ct.RENDITION.ORIENTATION_CHANGE,t)}moveTo(t){this.manager.moveTo(t)}resize(t,e,r){t&&(this.settings.width=t),e&&(this.settings.height=e),this.manager.resize(t,e,r)}clear(){this.manager.clear()}next(){return this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this))}prev(){return this.q.enqueue(this.manager.prev.bind(this.manager)).then(this.reportLocation.bind(this))}determineLayoutProperties(t){var e,r=this.settings.layout||t.layout||"reflowable",i=this.settings.spread||t.spread||"auto",n=this.settings.orientation||t.orientation||"auto",s=this.settings.flow||t.flow||"auto",h=t.viewport||"",c=this.settings.minSpreadWidth||t.minSpreadWidth||800,l=this.settings.direction||t.direction||"ltr";return(this.settings.width===0||this.settings.width>0)&&(this.settings.height===0||this.settings.height>0),e={layout:r,spread:i,orientation:n,flow:s,viewport:h,minSpreadWidth:c,direction:l},e}flow(t){var e=t;(t==="scrolled"||t==="scrolled-doc"||t==="scrolled-continuous")&&(e="scrolled"),(t==="auto"||t==="paginated")&&(e="paginated"),this.settings.flow=t,this._layout&&this._layout.flow(e),this.manager&&this._layout&&this.manager.applyLayout(this._layout),this.manager&&this.manager.updateFlow(e),this.manager&&this.manager.isRendered()&&this.location&&(this.manager.clear(),this.display(this.location.start.cfi))}layout(t){return t&&(this._layout=new Os(t),this._layout.spread(t.spread,this.settings.minSpreadWidth),this._layout.on(ct.LAYOUT.UPDATED,(e,r)=>{this.emit(ct.RENDITION.LAYOUT,e,r)})),this.manager&&this._layout&&this.manager.applyLayout(this._layout),this._layout}spread(t,e){this.settings.spread=t,e&&(this.settings.minSpreadWidth=e),this._layout&&this._layout.spread(t,e),this.manager&&this.manager.isRendered()&&this.manager.updateLayout()}direction(t){this.settings.direction=t||"ltr",this.manager&&this.manager.direction(this.settings.direction),this.manager&&this.manager.isRendered()&&this.location&&(this.manager.clear(),this.display(this.location.start.cfi))}reportLocation(){return this.q.enqueue((function(){requestAnimationFrame((function(){var r=this.manager.currentLocation();if(r&&r.then&&typeof r.then=="function")r.then((function(i){let n=this.located(i);!n||!n.start||!n.end||(this.location=n,this.emit(ct.RENDITION.LOCATION_CHANGED,{index:this.location.start.index,href:this.location.start.href,start:this.location.start.cfi,end:this.location.end.cfi,percentage:this.location.start.percentage}),this.emit(ct.RENDITION.RELOCATED,this.location))}).bind(this));else if(r){let i=this.located(r);if(!i||!i.start||!i.end)return;this.location=i,this.emit(ct.RENDITION.LOCATION_CHANGED,{index:this.location.start.index,href:this.location.start.href,start:this.location.start.cfi,end:this.location.end.cfi,percentage:this.location.start.percentage}),this.emit(ct.RENDITION.RELOCATED,this.location)}}).bind(this))}).bind(this))}currentLocation(){var t=this.manager.currentLocation();if(t&&t.then&&typeof t.then=="function")t.then((function(e){return this.located(e)}).bind(this));else if(t)return this.located(t)}located(t){if(!t.length)return{};let e=t[0],r=t[t.length-1],i={start:{index:e.index,href:e.href,cfi:e.mapping.start,displayed:{page:e.pages[0]||1,total:e.totalPages}},end:{index:r.index,href:r.href,cfi:r.mapping.end,displayed:{page:r.pages[r.pages.length-1]||1,total:r.totalPages}}},n=this.book.locations.locationFromCfi(e.mapping.start),s=this.book.locations.locationFromCfi(r.mapping.end);n!=null&&(i.start.location=n,i.start.percentage=this.book.locations.percentageFromLocation(n)),s!=null&&(i.end.location=s,i.end.percentage=this.book.locations.percentageFromLocation(s));let h=this.book.pageList.pageFromCfi(e.mapping.start),c=this.book.pageList.pageFromCfi(r.mapping.end);return h!=-1&&(i.start.page=h),c!=-1&&(i.end.page=c),r.index===this.book.spine.last().index&&i.end.displayed.page>=i.end.displayed.total&&(i.atEnd=!0),e.index===this.book.spine.first().index&&i.start.displayed.page===1&&(i.atStart=!0),i}destroy(){this.manager&&this.manager.destroy(),this.book=void 0}passEvents(t){fa.forEach(e=>{t.on(e,r=>this.triggerViewEvent(r,t))}),t.on(ct.CONTENTS.SELECTED,e=>this.triggerSelectedEvent(e,t))}triggerViewEvent(t,e){this.emit(t.type,t,e)}triggerSelectedEvent(t,e){this.emit(ct.RENDITION.SELECTED,t,e)}triggerMarkEvent(t,e,r){this.emit(ct.RENDITION.MARK_CLICKED,t,e,r)}getRange(t,e){var r=new Ot(t),i=this.manager.visible().filter(function(n){if(r.spinePos===n.index)return!0});if(i.length)return i[0].contents.range(r,e)}adjustImages(t){if(this._layout.name==="pre-paginated")return new Promise(function(n){n()});let e=t.window.getComputedStyle(t.content,null),r=(t.content.offsetHeight-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)))*.95,i=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.addStylesheetRules({img:{"max-width":(this._layout.columnWidth?this._layout.columnWidth-i+"px":"100%")+"!important","max-height":r+"px!important","object-fit":"contain","page-break-inside":"avoid","break-inside":"avoid","box-sizing":"border-box"},svg:{"max-width":(this._layout.columnWidth?this._layout.columnWidth-i+"px":"100%")+"!important","max-height":r+"px!important","page-break-inside":"avoid","break-inside":"avoid"}}),new Promise(function(n,s){setTimeout(function(){n()},1)})}getContents(){return this.manager?this.manager.getContents():[]}views(){return(this.manager?this.manager.views:void 0)||[]}handleLinks(t){t&&t.on(ct.CONTENTS.LINK_CLICKED,e=>{let r=this.book.path.relative(e);this.display(r)})}injectStylesheet(t,e){let r=t.createElement("link");r.setAttribute("type","text/css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href",this.settings.stylesheet),t.getElementsByTagName("head")[0].appendChild(r)}injectScript(t,e){let r=t.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",this.settings.script),r.textContent=" ",t.getElementsByTagName("head")[0].appendChild(r)}injectIdentifier(t,e){let r=this.book.packaging.metadata.identifier,i=t.createElement("meta");i.setAttribute("name","dc.relation.ispartof"),r&&i.setAttribute("content",r),t.getElementsByTagName("head")[0].appendChild(i)}}Re(N1.prototype);function Pe(v){throw new Error('Could not dynamically require "'+v+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var g1={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var V2;function _h(){return V2||(V2=1,(function(v,t){(function(e){v.exports=e()})(function(){return(function e(r,i,n){function s(l,f){if(!i[l]){if(!r[l]){var p=typeof Pe=="function"&&Pe;if(!f&&p)return p(l,!0);if(h)return h(l,!0);var w=new Error("Cannot find module '"+l+"'");throw w.code="MODULE_NOT_FOUND",w}var M=i[l]={exports:{}};r[l][0].call(M.exports,function(L){var A=r[l][1][L];return s(A||L)},M,M.exports,e,r,i,n)}return i[l].exports}for(var h=typeof Pe=="function"&&Pe,c=0;c<n.length;c++)s(n[c]);return s})({1:[function(e,r,i){var n=e("./utils"),s=e("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var l=[],f,p,w,M,L,A,u,g=0,y=c.length,E=y,B=n.getTypeOf(c)!=="string";g<c.length;)E=y-g,B?(f=c[g++],p=g<y?c[g++]:0,w=g<y?c[g++]:0):(f=c.charCodeAt(g++),p=g<y?c.charCodeAt(g++):0,w=g<y?c.charCodeAt(g++):0),M=f>>2,L=(f&3)<<4|p>>4,A=E>1?(p&15)<<2|w>>6:64,u=E>2?w&63:64,l.push(h.charAt(M)+h.charAt(L)+h.charAt(A)+h.charAt(u));return l.join("")},i.decode=function(c){var l,f,p,w,M,L,A,u=0,g=0,y="data:";if(c.substr(0,y.length)===y)throw new Error("Invalid base64 input, it looks like a data url.");c=c.replace(/[^A-Za-z0-9+/=]/g,"");var E=c.length*3/4;if(c.charAt(c.length-1)===h.charAt(64)&&E--,c.charAt(c.length-2)===h.charAt(64)&&E--,E%1!==0)throw new Error("Invalid base64 input, bad content length.");var B;for(s.uint8array?B=new Uint8Array(E|0):B=new Array(E|0);u<c.length;)w=h.indexOf(c.charAt(u++)),M=h.indexOf(c.charAt(u++)),L=h.indexOf(c.charAt(u++)),A=h.indexOf(c.charAt(u++)),l=w<<2|M>>4,f=(M&15)<<4|L>>2,p=(L&3)<<6|A,B[g++]=l,L!==64&&(B[g++]=f),A!==64&&(B[g++]=p);return B}},{"./support":30,"./utils":32}],2:[function(e,r,i){var n=e("./external"),s=e("./stream/DataWorker"),h=e("./stream/Crc32Probe"),c=e("./stream/DataLengthProbe");function l(f,p,w,M,L){this.compressedSize=f,this.uncompressedSize=p,this.crc32=w,this.compression=M,this.compressedContent=L}l.prototype={getContentWorker:function(){var f=new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),p=this;return f.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(f,p,w){return f.pipe(new h).pipe(new c("uncompressedSize")).pipe(p.compressWorker(w)).pipe(new c("compressedSize")).withStreamInfo("compression",p)},r.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,r,i){var n=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,r,i){var n=e("./utils");function s(){for(var f,p=[],w=0;w<256;w++){f=w;for(var M=0;M<8;M++)f=f&1?3988292384^f>>>1:f>>>1;p[w]=f}return p}var h=s();function c(f,p,w,M){var L=h,A=M+w;f=f^-1;for(var u=M;u<A;u++)f=f>>>8^L[(f^p[u])&255];return f^-1}function l(f,p,w,M){var L=h,A=M+w;f=f^-1;for(var u=M;u<A;u++)f=f>>>8^L[(f^p.charCodeAt(u))&255];return f^-1}r.exports=function(p,w){if(typeof p>"u"||!p.length)return 0;var M=n.getTypeOf(p)!=="string";return M?c(w|0,p,p.length,0):l(w|0,p,p.length,0)}},{"./utils":32}],5:[function(e,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,r,i){var n=null;typeof Promise<"u"?n=Promise:n=e("lie"),r.exports={Promise:n}},{lie:37}],7:[function(e,r,i){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=e("pako"),h=e("./utils"),c=e("./stream/GenericWorker"),l=n?"uint8array":"array";i.magic="\b\0";function f(p,w){c.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=w,this.meta={}}h.inherits(f,c),f.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(l,p.data),!1)},f.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(w){p.push({data:w,meta:p.meta})}},i.compressWorker=function(p){return new f("Deflate",p)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,r,i){var n=e("../utils"),s=e("../stream/GenericWorker"),h=e("../utf8"),c=e("../crc32"),l=e("../signature"),f=function(g,y){var E="",B;for(B=0;B<y;B++)E+=String.fromCharCode(g&255),g=g>>>8;return E},p=function(g,y){var E=g;return g||(E=y?16893:33204),(E&65535)<<16},w=function(g){return(g||0)&63},M=function(g,y,E,B,b,k){var R=g.file,H=g.compression,T=k!==h.utf8encode,N=n.transformTo("string",k(R.name)),j=n.transformTo("string",h.utf8encode(R.name)),q=R.comment,G=n.transformTo("string",k(q)),at=n.transformTo("string",h.utf8encode(q)),tt=j.length!==R.name.length,lt=at.length!==q.length,et,K,ot="",xt="",nt="",ft=R.dir,Et=R.date,Mt={crc32:0,compressedSize:0,uncompressedSize:0};(!y||E)&&(Mt.crc32=g.crc32,Mt.compressedSize=g.compressedSize,Mt.uncompressedSize=g.uncompressedSize);var kt=0;y&&(kt|=8),!T&&(tt||lt)&&(kt|=2048);var jt=0,Pt=0;ft&&(jt|=16),b==="UNIX"?(Pt=798,jt|=p(R.unixPermissions,ft)):(Pt=20,jt|=w(R.dosPermissions)),et=Et.getUTCHours(),et=et<<6,et=et|Et.getUTCMinutes(),et=et<<5,et=et|Et.getUTCSeconds()/2,K=Et.getUTCFullYear()-1980,K=K<<4,K=K|Et.getUTCMonth()+1,K=K<<5,K=K|Et.getUTCDate(),tt&&(xt=f(1,1)+f(c(N),4)+j,ot+="up"+f(xt.length,2)+xt),lt&&(nt=f(1,1)+f(c(G),4)+at,ot+="uc"+f(nt.length,2)+nt);var mt="";mt+=`
\0`,mt+=f(kt,2),mt+=H.magic,mt+=f(et,2),mt+=f(K,2),mt+=f(Mt.crc32,4),mt+=f(Mt.compressedSize,4),mt+=f(Mt.uncompressedSize,4),mt+=f(N.length,2),mt+=f(ot.length,2);var It=l.LOCAL_FILE_HEADER+mt+N+ot,Ut=l.CENTRAL_FILE_HEADER+f(Pt,2)+mt+f(G.length,2)+"\0\0\0\0"+f(jt,4)+f(B,4)+N+ot+G;return{fileRecord:It,dirRecord:Ut}},L=function(g,y,E,B,b){var k="",R=n.transformTo("string",b(B));return k=l.CENTRAL_DIRECTORY_END+"\0\0\0\0"+f(g,2)+f(g,2)+f(y,4)+f(E,4)+f(R.length,2)+R,k},A=function(g){var y="";return y=l.DATA_DESCRIPTOR+f(g.crc32,4)+f(g.compressedSize,4)+f(g.uncompressedSize,4),y};function u(g,y,E,B){s.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=y,this.zipPlatform=E,this.encodeFileName=B,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}n.inherits(u,s),u.prototype.push=function(g){var y=g.meta.percent||0,E=this.entriesCount,B=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,s.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:E?(y+100*(E-B-1))/E:100}}))},u.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var y=this.streamFiles&&!g.file.dir;if(y){var E=M(g,y,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(g){this.accumulate=!1;var y=this.streamFiles&&!g.file.dir,E=M(g,y,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),y)this.push({data:A(g),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var g=this.bytesWritten,y=0;y<this.dirRecords.length;y++)this.push({data:this.dirRecords[y],meta:{percent:100}});var E=this.bytesWritten-g,B=L(this.dirRecords.length,E,g,this.zipComment,this.encodeFileName);this.push({data:B,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(g){this._sources.push(g);var y=this;return g.on("data",function(E){y.processChunk(E)}),g.on("end",function(){y.closedSource(y.previous.streamInfo),y._sources.length?y.prepareNextSource():y.end()}),g.on("error",function(E){y.error(E)}),this},u.prototype.resume=function(){if(!s.prototype.resume.call(this))return!1;if(!this.previous&&this._sources.length)return this.prepareNextSource(),!0;if(!this.previous&&!this._sources.length&&!this.generatedError)return this.end(),!0},u.prototype.error=function(g){var y=this._sources;if(!s.prototype.error.call(this,g))return!1;for(var E=0;E<y.length;E++)try{y[E].error(g)}catch{}return!0},u.prototype.lock=function(){s.prototype.lock.call(this);for(var g=this._sources,y=0;y<g.length;y++)g[y].lock()},r.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,r,i){var n=e("../compressions"),s=e("./ZipFileWorker"),h=function(c,l){var f=c||l,p=n[f];if(!p)throw new Error(f+" is not a valid compression method !");return p};i.generateWorker=function(c,l,f){var p=new s(l.streamFiles,f,l.platform,l.encodeFileName),w=0;try{c.forEach(function(M,L){w++;var A=h(L.options.compression,l.compression),u=L.options.compressionOptions||l.compressionOptions||{},g=L.dir,y=L.date;L._compressWorker(A,u).withStreamInfo("file",{name:M,dir:g,date:y,comment:L.comment||"",unixPermissions:L.unixPermissions,dosPermissions:L.dosPermissions}).pipe(p)}),p.entriesCount=w}catch(M){p.error(M)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,r,i){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new n;for(var h in this)typeof this[h]!="function"&&(s[h]=this[h]);return s}}n.prototype=e("./object"),n.prototype.loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.2",n.loadAsync=function(s,h){return new n().loadAsync(s,h)},n.external=e("./external"),r.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,r,i){var n=e("./utils"),s=e("./external"),h=e("./utf8"),c=e("./zipEntries"),l=e("./stream/Crc32Probe"),f=e("./nodejsUtils");function p(w){return new s.Promise(function(M,L){var A=w.decompressed.getContentWorker().pipe(new l);A.on("error",function(u){L(u)}).on("end",function(){A.streamInfo.crc32!==w.decompressed.crc32?L(new Error("Corrupted zip : CRC32 mismatch")):M()}).resume()})}r.exports=function(w,M){var L=this;return M=n.extend(M||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),f.isNode&&f.isStream(w)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",w,!0,M.optimizedBinaryString,M.base64).then(function(A){var u=new c(M);return u.load(A),u}).then(function(u){var g=[s.Promise.resolve(u)],y=u.files;if(M.checkCRC32)for(var E=0;E<y.length;E++)g.push(p(y[E]));return s.Promise.all(g)}).then(function(u){for(var g=u.shift(),y=g.files,E=0;E<y.length;E++){var B=y[E],b=B.fileNameStr,k=n.resolve(B.fileNameStr);L.file(k,B.decompressed,{binary:!0,optimizedBinaryString:!0,date:B.date,dir:B.dir,comment:B.fileCommentStr.length?B.fileCommentStr:null,unixPermissions:B.unixPermissions,dosPermissions:B.dosPermissions,createFolders:M.createFolders}),B.dir||(L.file(k).unsafeOriginalName=b)}return g.zipComment.length&&(L.comment=g.zipComment),L})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,r,i){var n=e("../utils"),s=e("../stream/GenericWorker");function h(c,l){s.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}n.inherits(h,s),h.prototype._bindStream=function(c){var l=this;this._stream=c,c.pause(),c.on("data",function(f){l.push({data:f,meta:{percent:0}})}).on("error",function(f){l.isPaused?this.generatedError=f:l.error(f)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},h.prototype.pause=function(){return s.prototype.pause.call(this)?(this._stream.pause(),!0):!1},h.prototype.resume=function(){return s.prototype.resume.call(this)?(this._upstreamEnded?this.end():this._stream.resume(),!0):!1},r.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,r,i){var n=e("readable-stream").Readable,s=e("../utils");s.inherits(h,n);function h(c,l,f){n.call(this,l),this._helper=c;var p=this;c.on("data",function(w,M){p.push(w)||p._helper.pause(),f&&f(M)}).on("error",function(w){p.emit("error",w)}).on("end",function(){p.push(null)})}h.prototype._read=function(){this._helper.resume()},r.exports=h},{"../utils":32,"readable-stream":16}],14:[function(e,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,s);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,s)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var s=new Buffer(n);return s.fill(0),s},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(e,r,i){var n=e("./utf8"),s=e("./utils"),h=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),l=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),w=e("./generate"),M=e("./nodejsUtils"),L=e("./nodejs/NodejsStreamInputAdapter"),A=function(b,k,R){var H=s.getTypeOf(k),T,N=s.extend(R||{},l);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&N.unixPermissions&16384&&(N.dir=!0),N.dosPermissions&&N.dosPermissions&16&&(N.dir=!0),N.dir&&(b=g(b)),N.createFolders&&(T=u(b))&&y.call(this,T,!0);var j=H==="string"&&N.binary===!1&&N.base64===!1;(!R||typeof R.binary>"u")&&(N.binary=!j);var q=k instanceof f&&k.uncompressedSize===0;(q||N.dir||!k||k.length===0)&&(N.base64=!1,N.binary=!0,k="",N.compression="STORE",H="string");var G=null;k instanceof f||k instanceof h?G=k:M.isNode&&M.isStream(k)?G=new L(b,k):G=s.prepareContent(b,k,N.binary,N.optimizedBinaryString,N.base64);var at=new p(b,G,N);this.files[b]=at},u=function(b){b.slice(-1)==="/"&&(b=b.substring(0,b.length-1));var k=b.lastIndexOf("/");return k>0?b.substring(0,k):""},g=function(b){return b.slice(-1)!=="/"&&(b+="/"),b},y=function(b,k){return k=typeof k<"u"?k:l.createFolders,b=g(b),this.files[b]||A.call(this,b,null,{dir:!0,createFolders:k}),this.files[b]};function E(b){return Object.prototype.toString.call(b)==="[object RegExp]"}var B={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(b){var k,R,H;for(k in this.files)H=this.files[k],R=k.slice(this.root.length,k.length),R&&k.slice(0,this.root.length)===this.root&&b(R,H)},filter:function(b){var k=[];return this.forEach(function(R,H){b(R,H)&&k.push(H)}),k},file:function(b,k,R){if(arguments.length===1)if(E(b)){var H=b;return this.filter(function(N,j){return!j.dir&&H.test(N)})}else{var T=this.files[this.root+b];return T&&!T.dir?T:null}else b=this.root+b,A.call(this,b,k,R);return this},folder:function(b){if(!b)return this;if(E(b))return this.filter(function(T,N){return N.dir&&b.test(T)});var k=this.root+b,R=y.call(this,k),H=this.clone();return H.root=R.name,H},remove:function(b){b=this.root+b;var k=this.files[b];if(k||(b.slice(-1)!=="/"&&(b+="/"),k=this.files[b]),k&&!k.dir)delete this.files[b];else for(var R=this.filter(function(T,N){return N.name.slice(0,b.length)===b}),H=0;H<R.length;H++)delete this.files[R[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(b){var k,R={};try{if(R=s.extend(b||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode}),R.type=R.type.toLowerCase(),R.compression=R.compression.toUpperCase(),R.type==="binarystring"&&(R.type="string"),!R.type)throw new Error("No output type specified.");s.checkSupport(R.type),(R.platform==="darwin"||R.platform==="freebsd"||R.platform==="linux"||R.platform==="sunos")&&(R.platform="UNIX"),R.platform==="win32"&&(R.platform="DOS");var H=R.comment||this.comment||"";k=w.generateWorker(this,R,H)}catch(T){k=new h("error"),k.error(T)}return new c(k,R.type||"string",R.mimeType)},generateAsync:function(b,k){return this.generateInternalStream(b).accumulate(k)},generateNodeStream:function(b,k){return b=b||{},b.type||(b.type="nodebuffer"),this.generateInternalStream(b).toNodejsStream(k)}};r.exports=B},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,r,i){r.exports=e("stream")},{stream:void 0}],17:[function(e,r,i){var n=e("./DataReader"),s=e("../utils");function h(c){n.call(this,c);for(var l=0;l<this.data.length;l++)c[l]=c[l]&255}s.inherits(h,n),h.prototype.byteAt=function(c){return this.data[this.zero+c]},h.prototype.lastIndexOfSignature=function(c){for(var l=c.charCodeAt(0),f=c.charCodeAt(1),p=c.charCodeAt(2),w=c.charCodeAt(3),M=this.length-4;M>=0;--M)if(this.data[M]===l&&this.data[M+1]===f&&this.data[M+2]===p&&this.data[M+3]===w)return M-this.zero;return-1},h.prototype.readAndCheckSignature=function(c){var l=c.charCodeAt(0),f=c.charCodeAt(1),p=c.charCodeAt(2),w=c.charCodeAt(3),M=this.readData(4);return l===M[0]&&f===M[1]&&p===M[2]&&w===M[3]},h.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./DataReader":18}],18:[function(e,r,i){var n=e("../utils");function s(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(){},readInt:function(h){var c=0,l;for(this.checkOffset(h),l=this.index+h-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=h,c},readString:function(h){return n.transformTo("string",this.readData(h))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC((h>>25&127)+1980,(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(h&31)<<1))}},r.exports=s},{"../utils":32}],19:[function(e,r,i){var n=e("./Uint8ArrayReader"),s=e("../utils");function h(c){n.call(this,c)}s.inherits(h,n),h.prototype.readData=function(c){this.checkOffset(c);var l=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,r,i){var n=e("./DataReader"),s=e("../utils");function h(c){n.call(this,c)}s.inherits(h,n),h.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},h.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},h.prototype.readAndCheckSignature=function(c){var l=this.readData(4);return c===l},h.prototype.readData=function(c){this.checkOffset(c);var l=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./DataReader":18}],21:[function(e,r,i){var n=e("./ArrayReader"),s=e("../utils");function h(c){n.call(this,c)}s.inherits(h,n),h.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,l},r.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(e,r,i){var n=e("../utils"),s=e("../support"),h=e("./ArrayReader"),c=e("./StringReader"),l=e("./NodeBufferReader"),f=e("./Uint8ArrayReader");r.exports=function(p){var w=n.getTypeOf(p);return n.checkSupport(w),w==="string"&&!s.uint8array?new c(p):w==="nodebuffer"?new l(p):s.uint8array?new f(n.transformTo("uint8array",p)):new h(n.transformTo("array",p))}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,r,i){var n=e("./GenericWorker"),s=e("../utils");function h(c){n.call(this,"ConvertWorker to "+c),this.destType=c}s.inherits(h,n),h.prototype.processChunk=function(c){this.push({data:s.transformTo(this.destType,c.data),meta:c.meta})},r.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(e,r,i){var n=e("./GenericWorker"),s=e("../crc32"),h=e("../utils");function c(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}h.inherits(c,n),c.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,r,i){var n=e("../utils"),s=e("./GenericWorker");function h(c){s.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}n.inherits(h,s),h.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}s.prototype.processChunk.call(this,c)},r.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(e,r,i){var n=e("../utils"),s=e("./GenericWorker"),h=16*1024;function c(l){s.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=n.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}n.inherits(c,s),c.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return s.prototype.resume.call(this)?(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0):!1},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,!(this.isPaused||this.isFinished)&&(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=h,f=null,p=Math.min(this.max,this.index+l);if(this.index>=this.max)return this.end();switch(this.type){case"string":f=this.data.substring(this.index,p);break;case"uint8array":f=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":f=this.data.slice(this.index,p);break}return this.index=p,this.push({data:f,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(e,r,i){function n(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return this.isFinished?!1:(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,h){return this._listeners[s].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,h){if(this._listeners[s])for(var c=0;c<this._listeners[s].length;c++)this._listeners[s][c].call(this,h)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var h=this;return s.on("data",function(c){h.processChunk(c)}),s.on("end",function(){h.end()}),s.on("error",function(c){h.error(c)}),this},pause:function(){return this.isPaused||this.isFinished?!1:(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var s=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,h){return this.extraStreamInfo[s]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},r.exports=n},{}],29:[function(e,r,i){var n=e("../utils"),s=e("./ConvertWorker"),h=e("./GenericWorker"),c=e("../base64"),l=e("../support"),f=e("../external"),p=null;if(l.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(u,g,y){switch(u){case"blob":return n.newBlob(n.transformTo("arraybuffer",g),y);case"base64":return c.encode(g);default:return n.transformTo(u,g)}}function M(u,g){var y,E=0,B=null,b=0;for(y=0;y<g.length;y++)b+=g[y].length;switch(u){case"string":return g.join("");case"array":return Array.prototype.concat.apply([],g);case"uint8array":for(B=new Uint8Array(b),y=0;y<g.length;y++)B.set(g[y],E),E+=g[y].length;return B;case"nodebuffer":return Buffer.concat(g);default:throw new Error("concat : unsupported type '"+u+"'")}}function L(u,g){return new f.Promise(function(y,E){var B=[],b=u._internalType,k=u._outputType,R=u._mimeType;u.on("data",function(H,T){B.push(H),g&&g(T)}).on("error",function(H){B=[],E(H)}).on("end",function(){try{var H=w(k,M(b,B),R);y(H)}catch(T){E(T)}B=[]}).resume()})}function A(u,g,y){var E=g;switch(g){case"blob":case"arraybuffer":E="uint8array";break;case"base64":E="string";break}try{this._internalType=E,this._outputType=g,this._mimeType=y,n.checkSupport(E),this._worker=u.pipe(new s(E)),u.lock()}catch(B){this._worker=new h("error"),this._worker.error(B)}}A.prototype={accumulate:function(u){return L(this,u)},on:function(u,g){var y=this;return u==="data"?this._worker.on(u,function(E){g.call(y,E.data,E.meta)}):this._worker.on(u,function(){n.delay(g,arguments,y)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(u){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},u)}},r.exports=A},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var n=new ArrayBuffer(0);try{i.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var s=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,h=new s;h.append(n),i.blob=h.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(e,r,i){for(var n=e("./utils"),s=e("./support"),h=e("./nodejsUtils"),c=e("./stream/GenericWorker"),l=new Array(256),f=0;f<256;f++)l[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;l[254]=l[254]=1;var p=function(u){var g,y,E,B,b,k=u.length,R=0;for(B=0;B<k;B++)y=u.charCodeAt(B),(y&64512)===55296&&B+1<k&&(E=u.charCodeAt(B+1),(E&64512)===56320&&(y=65536+(y-55296<<10)+(E-56320),B++)),R+=y<128?1:y<2048?2:y<65536?3:4;for(s.uint8array?g=new Uint8Array(R):g=new Array(R),b=0,B=0;b<R;B++)y=u.charCodeAt(B),(y&64512)===55296&&B+1<k&&(E=u.charCodeAt(B+1),(E&64512)===56320&&(y=65536+(y-55296<<10)+(E-56320),B++)),y<128?g[b++]=y:y<2048?(g[b++]=192|y>>>6,g[b++]=128|y&63):y<65536?(g[b++]=224|y>>>12,g[b++]=128|y>>>6&63,g[b++]=128|y&63):(g[b++]=240|y>>>18,g[b++]=128|y>>>12&63,g[b++]=128|y>>>6&63,g[b++]=128|y&63);return g},w=function(u,g){var y;for(g=g||u.length,g>u.length&&(g=u.length),y=g-1;y>=0&&(u[y]&192)===128;)y--;return y<0||y===0?g:y+l[u[y]]>g?y:g},M=function(u){var g,y,E,B,b=u.length,k=new Array(b*2);for(y=0,g=0;g<b;){if(E=u[g++],E<128){k[y++]=E;continue}if(B=l[E],B>4){k[y++]=65533,g+=B-1;continue}for(E&=B===2?31:B===3?15:7;B>1&&g<b;)E=E<<6|u[g++]&63,B--;if(B>1){k[y++]=65533;continue}E<65536?k[y++]=E:(E-=65536,k[y++]=55296|E>>10&1023,k[y++]=56320|E&1023)}return k.length!==y&&(k.subarray?k=k.subarray(0,y):k.length=y),n.applyFromCharCode(k)};i.utf8encode=function(g){return s.nodebuffer?h.newBufferFrom(g,"utf-8"):p(g)},i.utf8decode=function(g){return s.nodebuffer?n.transformTo("nodebuffer",g).toString("utf-8"):(g=n.transformTo(s.uint8array?"uint8array":"array",g),M(g))};function L(){c.call(this,"utf-8 decode"),this.leftOver=null}n.inherits(L,c),L.prototype.processChunk=function(u){var g=n.transformTo(s.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var y=g;g=new Uint8Array(y.length+this.leftOver.length),g.set(this.leftOver,0),g.set(y,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var E=w(g),B=g;E!==g.length&&(s.uint8array?(B=g.subarray(0,E),this.leftOver=g.subarray(E,g.length)):(B=g.slice(0,E),this.leftOver=g.slice(E,g.length))),this.push({data:i.utf8decode(B),meta:u.meta})},L.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=L;function A(){c.call(this,"utf-8 encode")}n.inherits(A,c),A.prototype.processChunk=function(u){this.push({data:i.utf8encode(u.data),meta:u.meta})},i.Utf8EncodeWorker=A},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,r,i){var n=e("./support"),s=e("./base64"),h=e("./nodejsUtils"),c=e("./external");e("setimmediate");function l(u){var g=null;return n.uint8array?g=new Uint8Array(u.length):g=new Array(u.length),p(u,g)}i.newBlob=function(u,g){i.checkSupport("blob");try{return new Blob([u],{type:g})}catch{try{var y=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,E=new y;return E.append(u),E.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};function f(u){return u}function p(u,g){for(var y=0;y<u.length;++y)g[y]=u.charCodeAt(y)&255;return g}var w={stringifyByChunk:function(u,g,y){var E=[],B=0,b=u.length;if(b<=y)return String.fromCharCode.apply(null,u);for(;B<b;)g==="array"||g==="nodebuffer"?E.push(String.fromCharCode.apply(null,u.slice(B,Math.min(B+y,b)))):E.push(String.fromCharCode.apply(null,u.subarray(B,Math.min(B+y,b)))),B+=y;return E.join("")},stringifyByChar:function(u){for(var g="",y=0;y<u.length;y++)g+=String.fromCharCode(u[y]);return g},applyCanBeUsed:{uint8array:(function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function M(u){var g=65536,y=i.getTypeOf(u),E=!0;if(y==="uint8array"?E=w.applyCanBeUsed.uint8array:y==="nodebuffer"&&(E=w.applyCanBeUsed.nodebuffer),E)for(;g>1;)try{return w.stringifyByChunk(u,y,g)}catch{g=Math.floor(g/2)}return w.stringifyByChar(u)}i.applyFromCharCode=M;function L(u,g){for(var y=0;y<u.length;y++)g[y]=u[y];return g}var A={};A.string={string:f,array:function(u){return p(u,new Array(u.length))},arraybuffer:function(u){return A.string.uint8array(u).buffer},uint8array:function(u){return p(u,new Uint8Array(u.length))},nodebuffer:function(u){return p(u,h.allocBuffer(u.length))}},A.array={string:M,array:f,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return h.newBufferFrom(u)}},A.arraybuffer={string:function(u){return M(new Uint8Array(u))},array:function(u){return L(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:f,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return h.newBufferFrom(new Uint8Array(u))}},A.uint8array={string:M,array:function(u){return L(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:f,nodebuffer:function(u){return h.newBufferFrom(u)}},A.nodebuffer={string:M,array:function(u){return L(u,new Array(u.length))},arraybuffer:function(u){return A.nodebuffer.uint8array(u).buffer},uint8array:function(u){return L(u,new Uint8Array(u.length))},nodebuffer:f},i.transformTo=function(u,g){if(g||(g=""),!u)return g;i.checkSupport(u);var y=i.getTypeOf(g),E=A[y][u](g);return E},i.resolve=function(u){for(var g=u.split("/"),y=[],E=0;E<g.length;E++){var B=g[E];B==="."||B===""&&E!==0&&E!==g.length-1||(B===".."?y.pop():y.push(B))}return y.join("/")},i.getTypeOf=function(u){if(typeof u=="string")return"string";var g=Object.prototype.toString.call(u);if(g==="[object Array]")return"array";if(n.nodebuffer&&h.isBuffer(u))return"nodebuffer";if(n.uint8array&&g==="[object Uint8Array]")return"uint8array";if(n.arraybuffer&&g==="[object ArrayBuffer]")return"arraybuffer"},i.checkSupport=function(u){var g=n[u.toLowerCase()];if(!g)throw new Error(u+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(u){var g="",y,E;for(E=0;E<(u||"").length;E++)y=u.charCodeAt(E),g+="\\x"+(y<16?"0":"")+y.toString(16).toUpperCase();return g},i.delay=function(u,g,y){setImmediate(function(){u.apply(y||null,g||[])})},i.inherits=function(u,g){var y=function(){};y.prototype=g.prototype,u.prototype=new y},i.extend=function(){var u={},g,y;for(g=0;g<arguments.length;g++)for(y in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],y)&&typeof u[y]>"u"&&(u[y]=arguments[g][y]);return u},i.prepareContent=function(u,g,y,E,B){var b=c.Promise.resolve(g).then(function(k){var R=n.blob&&(k instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(k))!==-1);return R?typeof Blob.prototype.arrayBuffer<"u"?k.arrayBuffer():typeof FileReader<"u"?new c.Promise(function(H,T){var N=new FileReader;N.onload=function(j){H(j.target.result)},N.onerror=function(j){T(j.target.error)},N.readAsArrayBuffer(k)}):c.Promise.reject(new Error(u+" is a Blob, but we have no way of reading it.")):k});return b.then(function(k){var R=i.getTypeOf(k);return R?(R==="arraybuffer"?k=i.transformTo("uint8array",k):R==="string"&&(B?k=s.decode(k):y&&E!==!0&&(k=l(k))),k):c.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,r,i){var n=e("./reader/readerFor"),s=e("./utils"),h=e("./signature"),c=e("./zipEntry"),l=e("./support");function f(p){this.files=[],this.loadOptions=p}f.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(w)+", expected "+s.pretty(p)+")")}},isSignature:function(p,w){var M=this.reader.index;this.reader.setIndex(p);var L=this.reader.readString(4),A=L===w;return this.reader.setIndex(M),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),w=l.uint8array?"uint8array":"array",M=s.transformTo(w,p);this.zipComment=this.loadOptions.decodeFileName(M)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p=this.zip64EndOfCentralSize-44,w=0,M,L,A;w<p;)M=this.reader.readInt(2),L=this.reader.readInt(4),A=this.reader.readData(L),this.zip64ExtensibleData[M]={id:M,length:L,value:A}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,w;for(p=0;p<this.files.length;p++)w=this.files[p],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)p=new c({zip64:this.zip64},this.loadOptions),p.readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(p<0){var w=!this.isSignature(0,h.LOCAL_FILE_HEADER);throw w?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(p);var M=p;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,p=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),p<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var L=this.centralDirOffset+this.centralDirSize;this.zip64&&(L+=20,L+=12+this.zip64EndOfCentralSize);var A=M-L;if(A>0)this.isSignature(M,h.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(p){this.reader=n(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,r,i){var n=e("./reader/readerFor"),s=e("./utils"),h=e("./compressedObject"),c=e("./crc32"),l=e("./utf8"),f=e("./compressions"),p=e("./support"),w=0,M=3,L=function(u){for(var g in f)if(Object.prototype.hasOwnProperty.call(f,g)&&f[g].magic===u)return f[g];return null};function A(u,g){this.options=u,this.loadOptions=g}A.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},readLocalPart:function(u){var g,y;if(u.skip(22),this.fileNameLength=u.readInt(2),y=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(y),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(g=L(this.compressionMethod),g===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,g,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var g=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(g),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(this.externalFileAttributes&16),u===w&&(this.dosPermissions=this.externalFileAttributes&63),u===M&&(this.unixPermissions=this.externalFileAttributes>>16&65535),!this.dir&&this.fileNameStr.slice(-1)==="/"&&(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var g=u.index+this.extraFieldsLength,y,E,B;for(this.extraFields||(this.extraFields={});u.index+4<g;)y=u.readInt(2),E=u.readInt(2),B=u.readData(E),this.extraFields[y]={id:y,length:E,value:B};u.setIndex(g)},handleUTF8:function(){var u=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var y=s.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(y)}var E=this.findExtraFieldUnicodeComment();if(E!==null)this.fileCommentStr=E;else{var B=s.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(B)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var g=n(u.value);return g.readInt(1)!==1||c(this.fileName)!==g.readInt(4)?null:l.utf8decode(g.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var g=n(u.value);return g.readInt(1)!==1||c(this.fileComment)!==g.readInt(4)?null:l.utf8decode(g.readData(u.length-5))}return null}},r.exports=A},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,r,i){var n=e("./stream/StreamHelper"),s=e("./stream/DataWorker"),h=e("./utf8"),c=e("./compressedObject"),l=e("./stream/GenericWorker"),f=function(L,A,u){this.name=L,this.dir=u.dir,this.date=u.date,this.comment=u.comment,this.unixPermissions=u.unixPermissions,this.dosPermissions=u.dosPermissions,this._data=A,this._dataBinary=u.binary,this.options={compression:u.compression,compressionOptions:u.compressionOptions}};f.prototype={internalStream:function(L){var A=null,u="string";try{if(!L)throw new Error("No output type specified.");u=L.toLowerCase();var g=u==="string"||u==="text";(u==="binarystring"||u==="text")&&(u="string"),A=this._decompressWorker();var y=!this._dataBinary;y&&!g&&(A=A.pipe(new h.Utf8EncodeWorker)),!y&&g&&(A=A.pipe(new h.Utf8DecodeWorker))}catch(E){A=new l("error"),A.error(E)}return new n(A,u,"")},async:function(L,A){return this.internalStream(L).accumulate(A)},nodeStream:function(L,A){return this.internalStream(L||"nodebuffer").toNodejsStream(A)},_compressWorker:function(L,A){if(this._data instanceof c&&this._data.compression.magic===L.magic)return this._data.getCompressedWorker();var u=this._decompressWorker();return this._dataBinary||(u=u.pipe(new h.Utf8EncodeWorker)),c.createWorkerFrom(u,L,A)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof l?this._data:new s(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},M=0;M<p.length;M++)f.prototype[p[M]]=w;r.exports=f},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,r,i){(function(n){var s=n.MutationObserver||n.WebKitMutationObserver,h;if(s){var c=0,l=new s(L),f=n.document.createTextNode("");l.observe(f,{characterData:!0}),h=function(){f.data=c=++c%2}}else if(!n.setImmediate&&typeof n.MessageChannel<"u"){var p=new n.MessageChannel;p.port1.onmessage=L,h=function(){p.port2.postMessage(0)}}else"document"in n&&"onreadystatechange"in n.document.createElement("script")?h=function(){var u=n.document.createElement("script");u.onreadystatechange=function(){L(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},n.document.documentElement.appendChild(u)}:h=function(){setTimeout(L,0)};var w,M=[];function L(){w=!0;for(var u,g,y=M.length;y;){for(g=M,M=[],u=-1;++u<y;)g[u]();y=M.length}w=!1}r.exports=A;function A(u){M.push(u)===1&&!w&&h()}}).call(this,typeof be<"u"?be:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,r,i){var n=e("immediate");function s(){}var h={},c=["REJECTED"],l=["FULFILLED"],f=["PENDING"];r.exports=p;function p(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,b!==s&&A(this,b)}p.prototype.finally=function(b){if(typeof b!="function")return this;var k=this.constructor;return this.then(R,H);function R(T){function N(){return T}return k.resolve(b()).then(N)}function H(T){function N(){throw T}return k.resolve(b()).then(N)}},p.prototype.catch=function(b){return this.then(null,b)},p.prototype.then=function(b,k){if(typeof b!="function"&&this.state===l||typeof k!="function"&&this.state===c)return this;var R=new this.constructor(s);if(this.state!==f){var H=this.state===l?b:k;M(R,H,this.outcome)}else this.queue.push(new w(R,b,k));return R};function w(b,k,R){this.promise=b,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof R=="function"&&(this.onRejected=R,this.callRejected=this.otherCallRejected)}w.prototype.callFulfilled=function(b){h.resolve(this.promise,b)},w.prototype.otherCallFulfilled=function(b){M(this.promise,this.onFulfilled,b)},w.prototype.callRejected=function(b){h.reject(this.promise,b)},w.prototype.otherCallRejected=function(b){M(this.promise,this.onRejected,b)};function M(b,k,R){n(function(){var H;try{H=k(R)}catch(T){return h.reject(b,T)}H===b?h.reject(b,new TypeError("Cannot resolve promise with itself")):h.resolve(b,H)})}h.resolve=function(b,k){var R=u(L,k);if(R.status==="error")return h.reject(b,R.value);var H=R.value;if(H)A(b,H);else{b.state=l,b.outcome=k;for(var T=-1,N=b.queue.length;++T<N;)b.queue[T].callFulfilled(k)}return b},h.reject=function(b,k){b.state=c,b.outcome=k;for(var R=-1,H=b.queue.length;++R<H;)b.queue[R].callRejected(k);return b};function L(b){var k=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof k=="function")return function(){k.apply(b,arguments)}}function A(b,k){var R=!1;function H(q){R||(R=!0,h.reject(b,q))}function T(q){R||(R=!0,h.resolve(b,q))}function N(){k(T,H)}var j=u(N);j.status==="error"&&H(j.value)}function u(b,k){var R={};try{R.value=b(k),R.status="success"}catch(H){R.status="error",R.value=H}return R}p.resolve=g;function g(b){return b instanceof this?b:h.resolve(new this(s),b)}p.reject=y;function y(b){var k=new this(s);return h.reject(k,b)}p.all=E;function E(b){var k=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=b.length,H=!1;if(!R)return this.resolve([]);for(var T=new Array(R),N=0,j=-1,q=new this(s);++j<R;)G(b[j],j);return q;function G(at,tt){k.resolve(at).then(lt,function(et){H||(H=!0,h.reject(q,et))});function lt(et){T[tt]=et,++N===R&&!H&&(H=!0,h.resolve(q,T))}}}p.race=B;function B(b){var k=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=b.length,H=!1;if(!R)return this.resolve([]);for(var T=-1,N=new this(s);++T<R;)j(b[T]);return N;function j(q){k.resolve(q).then(function(G){H||(H=!0,h.resolve(N,G))},function(G){H||(H=!0,h.reject(N,G))})}}},{immediate:36}],38:[function(e,r,i){var n=e("./lib/utils/common").assign,s=e("./lib/deflate"),h=e("./lib/inflate"),c=e("./lib/zlib/constants"),l={};n(l,s,h,c),r.exports=l},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,r,i){var n=e("./zlib/deflate"),s=e("./utils/common"),h=e("./utils/strings"),c=e("./zlib/messages"),l=e("./zlib/zstream"),f=Object.prototype.toString,p=0,w=4,M=0,L=1,A=2,u=-1,g=0,y=8;function E(R){if(!(this instanceof E))return new E(R);this.options=s.assign({level:u,method:y,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},R||{});var H=this.options;H.raw&&H.windowBits>0?H.windowBits=-H.windowBits:H.gzip&&H.windowBits>0&&H.windowBits<16&&(H.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var T=n.deflateInit2(this.strm,H.level,H.method,H.windowBits,H.memLevel,H.strategy);if(T!==M)throw new Error(c[T]);if(H.header&&n.deflateSetHeader(this.strm,H.header),H.dictionary){var N;if(typeof H.dictionary=="string"?N=h.string2buf(H.dictionary):f.call(H.dictionary)==="[object ArrayBuffer]"?N=new Uint8Array(H.dictionary):N=H.dictionary,T=n.deflateSetDictionary(this.strm,N),T!==M)throw new Error(c[T]);this._dict_set=!0}}E.prototype.push=function(R,H){var T=this.strm,N=this.options.chunkSize,j,q;if(this.ended)return!1;q=H===~~H?H:H===!0?w:p,typeof R=="string"?T.input=h.string2buf(R):f.call(R)==="[object ArrayBuffer]"?T.input=new Uint8Array(R):T.input=R,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new s.Buf8(N),T.next_out=0,T.avail_out=N),j=n.deflate(T,q),j!==L&&j!==M)return this.onEnd(j),this.ended=!0,!1;(T.avail_out===0||T.avail_in===0&&(q===w||q===A))&&(this.options.to==="string"?this.onData(h.buf2binstring(s.shrinkBuf(T.output,T.next_out))):this.onData(s.shrinkBuf(T.output,T.next_out)))}while((T.avail_in>0||T.avail_out===0)&&j!==L);return q===w?(j=n.deflateEnd(this.strm),this.onEnd(j),this.ended=!0,j===M):(q===A&&(this.onEnd(M),T.avail_out=0),!0)},E.prototype.onData=function(R){this.chunks.push(R)},E.prototype.onEnd=function(R){R===M&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=R,this.msg=this.strm.msg};function B(R,H){var T=new E(H);if(T.push(R,!0),T.err)throw T.msg||c[T.err];return T.result}function b(R,H){return H=H||{},H.raw=!0,B(R,H)}function k(R,H){return H=H||{},H.gzip=!0,B(R,H)}i.Deflate=E,i.deflate=B,i.deflateRaw=b,i.gzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,r,i){var n=e("./zlib/inflate"),s=e("./utils/common"),h=e("./utils/strings"),c=e("./zlib/constants"),l=e("./zlib/messages"),f=e("./zlib/zstream"),p=e("./zlib/gzheader"),w=Object.prototype.toString;function M(u){if(!(this instanceof M))return new M(u);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},u||{});var g=this.options;g.raw&&g.windowBits>=0&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),g.windowBits>=0&&g.windowBits<16&&!(u&&u.windowBits)&&(g.windowBits+=32),g.windowBits>15&&g.windowBits<48&&(g.windowBits&15)===0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var y=n.inflateInit2(this.strm,g.windowBits);if(y!==c.Z_OK)throw new Error(l[y]);this.header=new p,n.inflateGetHeader(this.strm,this.header)}M.prototype.push=function(u,g){var y=this.strm,E=this.options.chunkSize,B=this.options.dictionary,b,k,R,H,T,N,j=!1;if(this.ended)return!1;k=g===~~g?g:g===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof u=="string"?y.input=h.binstring2buf(u):w.call(u)==="[object ArrayBuffer]"?y.input=new Uint8Array(u):y.input=u,y.next_in=0,y.avail_in=y.input.length;do{if(y.avail_out===0&&(y.output=new s.Buf8(E),y.next_out=0,y.avail_out=E),b=n.inflate(y,c.Z_NO_FLUSH),b===c.Z_NEED_DICT&&B&&(typeof B=="string"?N=h.string2buf(B):w.call(B)==="[object ArrayBuffer]"?N=new Uint8Array(B):N=B,b=n.inflateSetDictionary(this.strm,N)),b===c.Z_BUF_ERROR&&j===!0&&(b=c.Z_OK,j=!1),b!==c.Z_STREAM_END&&b!==c.Z_OK)return this.onEnd(b),this.ended=!0,!1;y.next_out&&(y.avail_out===0||b===c.Z_STREAM_END||y.avail_in===0&&(k===c.Z_FINISH||k===c.Z_SYNC_FLUSH))&&(this.options.to==="string"?(R=h.utf8border(y.output,y.next_out),H=y.next_out-R,T=h.buf2string(y.output,R),y.next_out=H,y.avail_out=E-H,H&&s.arraySet(y.output,y.output,R,H,0),this.onData(T)):this.onData(s.shrinkBuf(y.output,y.next_out))),y.avail_in===0&&y.avail_out===0&&(j=!0)}while((y.avail_in>0||y.avail_out===0)&&b!==c.Z_STREAM_END);return b===c.Z_STREAM_END&&(k=c.Z_FINISH),k===c.Z_FINISH?(b=n.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===c.Z_OK):(k===c.Z_SYNC_FLUSH&&(this.onEnd(c.Z_OK),y.avail_out=0),!0)},M.prototype.onData=function(u){this.chunks.push(u)},M.prototype.onEnd=function(u){u===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg};function L(u,g){var y=new M(g);if(y.push(u,!0),y.err)throw y.msg||l[y.err];return y.result}function A(u,g){return g=g||{},g.raw=!0,L(u,g)}i.Inflate=M,i.inflate=L,i.inflateRaw=A,i.ungzip=L},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,r,i){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var f=l.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var p in f)f.hasOwnProperty(p)&&(c[p]=f[p])}}return c},i.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var s={arraySet:function(c,l,f,p,w){if(l.subarray&&c.subarray){c.set(l.subarray(f,f+p),w);return}for(var M=0;M<p;M++)c[w+M]=l[f+M]},flattenChunks:function(c){var l,f,p,w,M,L;for(p=0,l=0,f=c.length;l<f;l++)p+=c[l].length;for(L=new Uint8Array(p),w=0,l=0,f=c.length;l<f;l++)M=c[l],L.set(M,w),w+=M.length;return L}},h={arraySet:function(c,l,f,p,w){for(var M=0;M<p;M++)c[w+M]=l[f+M]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,s)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,h))},i.setTyped(n)},{}],42:[function(e,r,i){var n=e("./common"),s=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var c=new n.Buf8(256),l=0;l<256;l++)c[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;c[254]=c[254]=1,i.string2buf=function(p){var w,M,L,A,u,g=p.length,y=0;for(A=0;A<g;A++)M=p.charCodeAt(A),(M&64512)===55296&&A+1<g&&(L=p.charCodeAt(A+1),(L&64512)===56320&&(M=65536+(M-55296<<10)+(L-56320),A++)),y+=M<128?1:M<2048?2:M<65536?3:4;for(w=new n.Buf8(y),u=0,A=0;u<y;A++)M=p.charCodeAt(A),(M&64512)===55296&&A+1<g&&(L=p.charCodeAt(A+1),(L&64512)===56320&&(M=65536+(M-55296<<10)+(L-56320),A++)),M<128?w[u++]=M:M<2048?(w[u++]=192|M>>>6,w[u++]=128|M&63):M<65536?(w[u++]=224|M>>>12,w[u++]=128|M>>>6&63,w[u++]=128|M&63):(w[u++]=240|M>>>18,w[u++]=128|M>>>12&63,w[u++]=128|M>>>6&63,w[u++]=128|M&63);return w};function f(p,w){if(w<65537&&(p.subarray&&h||!p.subarray&&s))return String.fromCharCode.apply(null,n.shrinkBuf(p,w));for(var M="",L=0;L<w;L++)M+=String.fromCharCode(p[L]);return M}i.buf2binstring=function(p){return f(p,p.length)},i.binstring2buf=function(p){for(var w=new n.Buf8(p.length),M=0,L=w.length;M<L;M++)w[M]=p.charCodeAt(M);return w},i.buf2string=function(p,w){var M,L,A,u,g=w||p.length,y=new Array(g*2);for(L=0,M=0;M<g;){if(A=p[M++],A<128){y[L++]=A;continue}if(u=c[A],u>4){y[L++]=65533,M+=u-1;continue}for(A&=u===2?31:u===3?15:7;u>1&&M<g;)A=A<<6|p[M++]&63,u--;if(u>1){y[L++]=65533;continue}A<65536?y[L++]=A:(A-=65536,y[L++]=55296|A>>10&1023,y[L++]=56320|A&1023)}return f(y,L)},i.utf8border=function(p,w){var M;for(w=w||p.length,w>p.length&&(w=p.length),M=w-1;M>=0&&(p[M]&192)===128;)M--;return M<0||M===0?w:M+c[p[M]]>w?M:w}},{"./common":41}],43:[function(e,r,i){function n(s,h,c,l){for(var f=s&65535|0,p=s>>>16&65535|0,w=0;c!==0;){w=c>2e3?2e3:c,c-=w;do f=f+h[l++]|0,p=p+f|0;while(--w);f%=65521,p%=65521}return f|p<<16|0}r.exports=n},{}],44:[function(e,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,r,i){function n(){for(var c,l=[],f=0;f<256;f++){c=f;for(var p=0;p<8;p++)c=c&1?3988292384^c>>>1:c>>>1;l[f]=c}return l}var s=n();function h(c,l,f,p){var w=s,M=p+f;c^=-1;for(var L=p;L<M;L++)c=c>>>8^w[(c^l[L])&255];return c^-1}r.exports=h},{}],46:[function(e,r,i){var n=e("../utils/common"),s=e("./trees"),h=e("./adler32"),c=e("./crc32"),l=e("./messages"),f=0,p=1,w=3,M=4,L=5,A=0,u=1,g=-2,y=-3,E=-5,B=-1,b=1,k=2,R=3,H=4,T=0,N=2,j=8,q=9,G=15,at=8,tt=29,lt=256,et=lt+1+tt,K=30,ot=19,xt=2*et+1,nt=15,ft=3,Et=258,Mt=Et+ft+1,kt=32,jt=42,Pt=69,mt=73,It=91,Ut=103,Ct=113,Tt=666,St=1,Rt=2,qt=3,Vt=4,Lt=3;function Gt(o,O){return o.msg=l[O],O}function Qt(o){return(o<<1)-(o>4?9:0)}function Kt(o){for(var O=o.length;--O>=0;)o[O]=0}function wt(o){var O=o.state,F=O.pending;F>o.avail_out&&(F=o.avail_out),F!==0&&(n.arraySet(o.output,O.pending_buf,O.pending_out,F,o.next_out),o.next_out+=F,O.pending_out+=F,o.total_out+=F,o.avail_out-=F,O.pending-=F,O.pending===0&&(O.pending_out=0))}function At(o,O){s._tr_flush_block(o,o.block_start>=0?o.block_start:-1,o.strstart-o.block_start,O),o.block_start=o.strstart,wt(o.strm)}function yt(o,O){o.pending_buf[o.pending++]=O}function re(o,O){o.pending_buf[o.pending++]=O>>>8&255,o.pending_buf[o.pending++]=O&255}function ge(o,O,F,x){var V=o.avail_in;return V>x&&(V=x),V===0?0:(o.avail_in-=V,n.arraySet(O,o.input,o.next_in,V,F),o.state.wrap===1?o.adler=h(o.adler,O,V,F):o.state.wrap===2&&(o.adler=c(o.adler,O,V,F)),o.next_in+=V,o.total_in+=V,V)}function ce(o,O){var F=o.max_chain_length,x=o.strstart,V,W,pt=o.prev_length,st=o.nice_match,dt=o.strstart>o.w_size-Mt?o.strstart-(o.w_size-Mt):0,bt=o.window,ie=o.w_mask,Ht=o.prev,_t=o.strstart+Et,Zt=bt[x+pt-1],Nt=bt[x+pt];o.prev_length>=o.good_match&&(F>>=2),st>o.lookahead&&(st=o.lookahead);do if(V=O,!(bt[V+pt]!==Nt||bt[V+pt-1]!==Zt||bt[V]!==bt[x]||bt[++V]!==bt[x+1])){x+=2,V++;do;while(bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&bt[++x]===bt[++V]&&x<_t);if(W=Et-(_t-x),x=_t-Et,W>pt){if(o.match_start=O,pt=W,W>=st)break;Zt=bt[x+pt-1],Nt=bt[x+pt]}}while((O=Ht[O&ie])>dt&&--F!==0);return pt<=o.lookahead?pt:o.lookahead}function te(o){var O=o.w_size,F,x,V,W,pt;do{if(W=o.window_size-o.lookahead-o.strstart,o.strstart>=O+(O-Mt)){n.arraySet(o.window,o.window,O,O,0),o.match_start-=O,o.strstart-=O,o.block_start-=O,x=o.hash_size,F=x;do V=o.head[--F],o.head[F]=V>=O?V-O:0;while(--x);x=O,F=x;do V=o.prev[--F],o.prev[F]=V>=O?V-O:0;while(--x);W+=O}if(o.strm.avail_in===0)break;if(x=ge(o.strm,o.window,o.strstart+o.lookahead,W),o.lookahead+=x,o.lookahead+o.insert>=ft)for(pt=o.strstart-o.insert,o.ins_h=o.window[pt],o.ins_h=(o.ins_h<<o.hash_shift^o.window[pt+1])&o.hash_mask;o.insert&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[pt+ft-1])&o.hash_mask,o.prev[pt&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=pt,pt++,o.insert--,!(o.lookahead+o.insert<ft)););}while(o.lookahead<Mt&&o.strm.avail_in!==0)}function Me(o,O){var F=65535;for(F>o.pending_buf_size-5&&(F=o.pending_buf_size-5);;){if(o.lookahead<=1){if(te(o),o.lookahead===0&&O===f)return St;if(o.lookahead===0)break}o.strstart+=o.lookahead,o.lookahead=0;var x=o.block_start+F;if((o.strstart===0||o.strstart>=x)&&(o.lookahead=o.strstart-x,o.strstart=x,At(o,!1),o.strm.avail_out===0)||o.strstart-o.block_start>=o.w_size-Mt&&(At(o,!1),o.strm.avail_out===0))return St}return o.insert=0,O===M?(At(o,!0),o.strm.avail_out===0?qt:Vt):(o.strstart>o.block_start&&(At(o,!1),o.strm.avail_out===0),St)}function ue(o,O){for(var F,x;;){if(o.lookahead<Mt){if(te(o),o.lookahead<Mt&&O===f)return St;if(o.lookahead===0)break}if(F=0,o.lookahead>=ft&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),F!==0&&o.strstart-F<=o.w_size-Mt&&(o.match_length=ce(o,F)),o.match_length>=ft)if(x=s._tr_tally(o,o.strstart-o.match_start,o.match_length-ft),o.lookahead-=o.match_length,o.match_length<=o.max_lazy_match&&o.lookahead>=ft){o.match_length--;do o.strstart++,o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart;while(--o.match_length!==0);o.strstart++}else o.strstart+=o.match_length,o.match_length=0,o.ins_h=o.window[o.strstart],o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+1])&o.hash_mask;else x=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++;if(x&&(At(o,!1),o.strm.avail_out===0))return St}return o.insert=o.strstart<ft-1?o.strstart:ft-1,O===M?(At(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(At(o,!1),o.strm.avail_out===0)?St:Rt}function he(o,O){for(var F,x,V;;){if(o.lookahead<Mt){if(te(o),o.lookahead<Mt&&O===f)return St;if(o.lookahead===0)break}if(F=0,o.lookahead>=ft&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),o.prev_length=o.match_length,o.prev_match=o.match_start,o.match_length=ft-1,F!==0&&o.prev_length<o.max_lazy_match&&o.strstart-F<=o.w_size-Mt&&(o.match_length=ce(o,F),o.match_length<=5&&(o.strategy===b||o.match_length===ft&&o.strstart-o.match_start>4096)&&(o.match_length=ft-1)),o.prev_length>=ft&&o.match_length<=o.prev_length){V=o.strstart+o.lookahead-ft,x=s._tr_tally(o,o.strstart-1-o.prev_match,o.prev_length-ft),o.lookahead-=o.prev_length-1,o.prev_length-=2;do++o.strstart<=V&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+ft-1])&o.hash_mask,F=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart);while(--o.prev_length!==0);if(o.match_available=0,o.match_length=ft-1,o.strstart++,x&&(At(o,!1),o.strm.avail_out===0))return St}else if(o.match_available){if(x=s._tr_tally(o,0,o.window[o.strstart-1]),x&&At(o,!1),o.strstart++,o.lookahead--,o.strm.avail_out===0)return St}else o.match_available=1,o.strstart++,o.lookahead--}return o.match_available&&(x=s._tr_tally(o,0,o.window[o.strstart-1]),o.match_available=0),o.insert=o.strstart<ft-1?o.strstart:ft-1,O===M?(At(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(At(o,!1),o.strm.avail_out===0)?St:Rt}function pe(o,O){for(var F,x,V,W,pt=o.window;;){if(o.lookahead<=Et){if(te(o),o.lookahead<=Et&&O===f)return St;if(o.lookahead===0)break}if(o.match_length=0,o.lookahead>=ft&&o.strstart>0&&(V=o.strstart-1,x=pt[V],x===pt[++V]&&x===pt[++V]&&x===pt[++V])){W=o.strstart+Et;do;while(x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&x===pt[++V]&&V<W);o.match_length=Et-(W-V),o.match_length>o.lookahead&&(o.match_length=o.lookahead)}if(o.match_length>=ft?(F=s._tr_tally(o,1,o.match_length-ft),o.lookahead-=o.match_length,o.strstart+=o.match_length,o.match_length=0):(F=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++),F&&(At(o,!1),o.strm.avail_out===0))return St}return o.insert=0,O===M?(At(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(At(o,!1),o.strm.avail_out===0)?St:Rt}function le(o,O){for(var F;;){if(o.lookahead===0&&(te(o),o.lookahead===0)){if(O===f)return St;break}if(o.match_length=0,F=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++,F&&(At(o,!1),o.strm.avail_out===0))return St}return o.insert=0,O===M?(At(o,!0),o.strm.avail_out===0?qt:Vt):o.last_lit&&(At(o,!1),o.strm.avail_out===0)?St:Rt}function $t(o,O,F,x,V){this.good_length=o,this.max_lazy=O,this.nice_length=F,this.max_chain=x,this.func=V}var oe;oe=[new $t(0,0,0,0,Me),new $t(4,4,8,4,ue),new $t(4,5,16,8,ue),new $t(4,6,32,32,ue),new $t(4,4,16,16,he),new $t(8,16,32,32,he),new $t(8,16,128,128,he),new $t(8,32,128,256,he),new $t(32,128,258,1024,he),new $t(32,258,258,4096,he)];function Ae(o){o.window_size=2*o.w_size,Kt(o.head),o.max_lazy_match=oe[o.level].max_lazy,o.good_match=oe[o.level].good_length,o.nice_match=oe[o.level].nice_length,o.max_chain_length=oe[o.level].max_chain,o.strstart=0,o.block_start=0,o.lookahead=0,o.insert=0,o.match_length=o.prev_length=ft-1,o.match_available=0,o.ins_h=0}function _(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=j,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(xt*2),this.dyn_dtree=new n.Buf16((2*K+1)*2),this.bl_tree=new n.Buf16((2*ot+1)*2),Kt(this.dyn_ltree),Kt(this.dyn_dtree),Kt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(nt+1),this.heap=new n.Buf16(2*et+1),Kt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*et+1),Kt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Y(o){var O;return!o||!o.state?Gt(o,g):(o.total_in=o.total_out=0,o.data_type=N,O=o.state,O.pending=0,O.pending_out=0,O.wrap<0&&(O.wrap=-O.wrap),O.status=O.wrap?jt:Ct,o.adler=O.wrap===2?0:1,O.last_flush=f,s._tr_init(O),A)}function Q(o){var O=Y(o);return O===A&&Ae(o.state),O}function ut(o,O){return!o||!o.state||o.state.wrap!==2?g:(o.state.gzhead=O,A)}function P(o,O,F,x,V,W){if(!o)return g;var pt=1;if(O===B&&(O=6),x<0?(pt=0,x=-x):x>15&&(pt=2,x-=16),V<1||V>q||F!==j||x<8||x>15||O<0||O>9||W<0||W>H)return Gt(o,g);x===8&&(x=9);var st=new _;return o.state=st,st.strm=o,st.wrap=pt,st.gzhead=null,st.w_bits=x,st.w_size=1<<st.w_bits,st.w_mask=st.w_size-1,st.hash_bits=V+7,st.hash_size=1<<st.hash_bits,st.hash_mask=st.hash_size-1,st.hash_shift=~~((st.hash_bits+ft-1)/ft),st.window=new n.Buf8(st.w_size*2),st.head=new n.Buf16(st.hash_size),st.prev=new n.Buf16(st.w_size),st.lit_bufsize=1<<V+6,st.pending_buf_size=st.lit_bufsize*4,st.pending_buf=new n.Buf8(st.pending_buf_size),st.d_buf=1*st.lit_bufsize,st.l_buf=3*st.lit_bufsize,st.level=O,st.strategy=W,st.method=F,Q(o)}function $(o,O){return P(o,O,j,G,at,T)}function d(o,O){var F,x,V,W;if(!o||!o.state||O>L||O<0)return o?Gt(o,g):g;if(x=o.state,!o.output||!o.input&&o.avail_in!==0||x.status===Tt&&O!==M)return Gt(o,o.avail_out===0?E:g);if(x.strm=o,F=x.last_flush,x.last_flush=O,x.status===jt)if(x.wrap===2)o.adler=0,yt(x,31),yt(x,139),yt(x,8),x.gzhead?(yt(x,(x.gzhead.text?1:0)+(x.gzhead.hcrc?2:0)+(x.gzhead.extra?4:0)+(x.gzhead.name?8:0)+(x.gzhead.comment?16:0)),yt(x,x.gzhead.time&255),yt(x,x.gzhead.time>>8&255),yt(x,x.gzhead.time>>16&255),yt(x,x.gzhead.time>>24&255),yt(x,x.level===9?2:x.strategy>=k||x.level<2?4:0),yt(x,x.gzhead.os&255),x.gzhead.extra&&x.gzhead.extra.length&&(yt(x,x.gzhead.extra.length&255),yt(x,x.gzhead.extra.length>>8&255)),x.gzhead.hcrc&&(o.adler=c(o.adler,x.pending_buf,x.pending,0)),x.gzindex=0,x.status=Pt):(yt(x,0),yt(x,0),yt(x,0),yt(x,0),yt(x,0),yt(x,x.level===9?2:x.strategy>=k||x.level<2?4:0),yt(x,Lt),x.status=Ct);else{var pt=j+(x.w_bits-8<<4)<<8,st=-1;x.strategy>=k||x.level<2?st=0:x.level<6?st=1:x.level===6?st=2:st=3,pt|=st<<6,x.strstart!==0&&(pt|=kt),pt+=31-pt%31,x.status=Ct,re(x,pt),x.strstart!==0&&(re(x,o.adler>>>16),re(x,o.adler&65535)),o.adler=1}if(x.status===Pt)if(x.gzhead.extra){for(V=x.pending;x.gzindex<(x.gzhead.extra.length&65535)&&!(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),wt(o),V=x.pending,x.pending===x.pending_buf_size));)yt(x,x.gzhead.extra[x.gzindex]&255),x.gzindex++;x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),x.gzindex===x.gzhead.extra.length&&(x.gzindex=0,x.status=mt)}else x.status=mt;if(x.status===mt)if(x.gzhead.name){V=x.pending;do{if(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),wt(o),V=x.pending,x.pending===x.pending_buf_size)){W=1;break}x.gzindex<x.gzhead.name.length?W=x.gzhead.name.charCodeAt(x.gzindex++)&255:W=0,yt(x,W)}while(W!==0);x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),W===0&&(x.gzindex=0,x.status=It)}else x.status=It;if(x.status===It)if(x.gzhead.comment){V=x.pending;do{if(x.pending===x.pending_buf_size&&(x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),wt(o),V=x.pending,x.pending===x.pending_buf_size)){W=1;break}x.gzindex<x.gzhead.comment.length?W=x.gzhead.comment.charCodeAt(x.gzindex++)&255:W=0,yt(x,W)}while(W!==0);x.gzhead.hcrc&&x.pending>V&&(o.adler=c(o.adler,x.pending_buf,x.pending-V,V)),W===0&&(x.status=Ut)}else x.status=Ut;if(x.status===Ut&&(x.gzhead.hcrc?(x.pending+2>x.pending_buf_size&&wt(o),x.pending+2<=x.pending_buf_size&&(yt(x,o.adler&255),yt(x,o.adler>>8&255),o.adler=0,x.status=Ct)):x.status=Ct),x.pending!==0){if(wt(o),o.avail_out===0)return x.last_flush=-1,A}else if(o.avail_in===0&&Qt(O)<=Qt(F)&&O!==M)return Gt(o,E);if(x.status===Tt&&o.avail_in!==0)return Gt(o,E);if(o.avail_in!==0||x.lookahead!==0||O!==f&&x.status!==Tt){var dt=x.strategy===k?le(x,O):x.strategy===R?pe(x,O):oe[x.level].func(x,O);if((dt===qt||dt===Vt)&&(x.status=Tt),dt===St||dt===qt)return o.avail_out===0&&(x.last_flush=-1),A;if(dt===Rt&&(O===p?s._tr_align(x):O!==L&&(s._tr_stored_block(x,0,0,!1),O===w&&(Kt(x.head),x.lookahead===0&&(x.strstart=0,x.block_start=0,x.insert=0))),wt(o),o.avail_out===0))return x.last_flush=-1,A}return O!==M?A:x.wrap<=0?u:(x.wrap===2?(yt(x,o.adler&255),yt(x,o.adler>>8&255),yt(x,o.adler>>16&255),yt(x,o.adler>>24&255),yt(x,o.total_in&255),yt(x,o.total_in>>8&255),yt(x,o.total_in>>16&255),yt(x,o.total_in>>24&255)):(re(x,o.adler>>>16),re(x,o.adler&65535)),wt(o),x.wrap>0&&(x.wrap=-x.wrap),x.pending!==0?A:u)}function m(o){var O;return!o||!o.state?g:(O=o.state.status,O!==jt&&O!==Pt&&O!==mt&&O!==It&&O!==Ut&&O!==Ct&&O!==Tt?Gt(o,g):(o.state=null,O===Ct?Gt(o,y):A))}function D(o,O){var F=O.length,x,V,W,pt,st,dt,bt,ie;if(!o||!o.state||(x=o.state,pt=x.wrap,pt===2||pt===1&&x.status!==jt||x.lookahead))return g;for(pt===1&&(o.adler=h(o.adler,O,F,0)),x.wrap=0,F>=x.w_size&&(pt===0&&(Kt(x.head),x.strstart=0,x.block_start=0,x.insert=0),ie=new n.Buf8(x.w_size),n.arraySet(ie,O,F-x.w_size,x.w_size,0),O=ie,F=x.w_size),st=o.avail_in,dt=o.next_in,bt=o.input,o.avail_in=F,o.next_in=0,o.input=O,te(x);x.lookahead>=ft;){V=x.strstart,W=x.lookahead-(ft-1);do x.ins_h=(x.ins_h<<x.hash_shift^x.window[V+ft-1])&x.hash_mask,x.prev[V&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=V,V++;while(--W);x.strstart=V,x.lookahead=ft-1,te(x)}return x.strstart+=x.lookahead,x.block_start=x.strstart,x.insert=x.lookahead,x.lookahead=0,x.match_length=x.prev_length=ft-1,x.match_available=0,o.next_in=dt,o.input=bt,o.avail_in=st,x.wrap=pt,A}i.deflateInit=$,i.deflateInit2=P,i.deflateReset=Q,i.deflateResetKeep=Y,i.deflateSetHeader=ut,i.deflate=d,i.deflateEnd=m,i.deflateSetDictionary=D,i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,r,i){function n(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}r.exports=n},{}],48:[function(e,r,i){var n=30,s=12;r.exports=function(c,l){var f,p,w,M,L,A,u,g,y,E,B,b,k,R,H,T,N,j,q,G,at,tt,lt,et,K;f=c.state,p=c.next_in,et=c.input,w=p+(c.avail_in-5),M=c.next_out,K=c.output,L=M-(l-c.avail_out),A=M+(c.avail_out-257),u=f.dmax,g=f.wsize,y=f.whave,E=f.wnext,B=f.window,b=f.hold,k=f.bits,R=f.lencode,H=f.distcode,T=(1<<f.lenbits)-1,N=(1<<f.distbits)-1;t:do{k<15&&(b+=et[p++]<<k,k+=8,b+=et[p++]<<k,k+=8),j=R[b&T];e:for(;;){if(q=j>>>24,b>>>=q,k-=q,q=j>>>16&255,q===0)K[M++]=j&65535;else if(q&16){G=j&65535,q&=15,q&&(k<q&&(b+=et[p++]<<k,k+=8),G+=b&(1<<q)-1,b>>>=q,k-=q),k<15&&(b+=et[p++]<<k,k+=8,b+=et[p++]<<k,k+=8),j=H[b&N];a:for(;;){if(q=j>>>24,b>>>=q,k-=q,q=j>>>16&255,q&16){if(at=j&65535,q&=15,k<q&&(b+=et[p++]<<k,k+=8,k<q&&(b+=et[p++]<<k,k+=8)),at+=b&(1<<q)-1,at>u){c.msg="invalid distance too far back",f.mode=n;break t}if(b>>>=q,k-=q,q=M-L,at>q){if(q=at-q,q>y&&f.sane){c.msg="invalid distance too far back",f.mode=n;break t}if(tt=0,lt=B,E===0){if(tt+=g-q,q<G){G-=q;do K[M++]=B[tt++];while(--q);tt=M-at,lt=K}}else if(E<q){if(tt+=g+E-q,q-=E,q<G){G-=q;do K[M++]=B[tt++];while(--q);if(tt=0,E<G){q=E,G-=q;do K[M++]=B[tt++];while(--q);tt=M-at,lt=K}}}else if(tt+=E-q,q<G){G-=q;do K[M++]=B[tt++];while(--q);tt=M-at,lt=K}for(;G>2;)K[M++]=lt[tt++],K[M++]=lt[tt++],K[M++]=lt[tt++],G-=3;G&&(K[M++]=lt[tt++],G>1&&(K[M++]=lt[tt++]))}else{tt=M-at;do K[M++]=K[tt++],K[M++]=K[tt++],K[M++]=K[tt++],G-=3;while(G>2);G&&(K[M++]=K[tt++],G>1&&(K[M++]=K[tt++]))}}else if((q&64)===0){j=H[(j&65535)+(b&(1<<q)-1)];continue a}else{c.msg="invalid distance code",f.mode=n;break t}break}}else if((q&64)===0){j=R[(j&65535)+(b&(1<<q)-1)];continue e}else if(q&32){f.mode=s;break t}else{c.msg="invalid literal/length code",f.mode=n;break t}break}}while(p<w&&M<A);G=k>>3,p-=G,k-=G<<3,b&=(1<<k)-1,c.next_in=p,c.next_out=M,c.avail_in=p<w?5+(w-p):5-(p-w),c.avail_out=M<A?257+(A-M):257-(M-A),f.hold=b,f.bits=k}},{}],49:[function(e,r,i){var n=e("../utils/common"),s=e("./adler32"),h=e("./crc32"),c=e("./inffast"),l=e("./inftrees"),f=0,p=1,w=2,M=4,L=5,A=6,u=0,g=1,y=2,E=-2,B=-3,b=-4,k=-5,R=8,H=1,T=2,N=3,j=4,q=5,G=6,at=7,tt=8,lt=9,et=10,K=11,ot=12,xt=13,nt=14,ft=15,Et=16,Mt=17,kt=18,jt=19,Pt=20,mt=21,It=22,Ut=23,Ct=24,Tt=25,St=26,Rt=27,qt=28,Vt=29,Lt=30,Gt=31,Qt=32,Kt=852,wt=592,At=15,yt=At;function re(P){return(P>>>24&255)+(P>>>8&65280)+((P&65280)<<8)+((P&255)<<24)}function ge(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ce(P){var $;return!P||!P.state?E:($=P.state,P.total_in=P.total_out=$.total=0,P.msg="",$.wrap&&(P.adler=$.wrap&1),$.mode=H,$.last=0,$.havedict=0,$.dmax=32768,$.head=null,$.hold=0,$.bits=0,$.lencode=$.lendyn=new n.Buf32(Kt),$.distcode=$.distdyn=new n.Buf32(wt),$.sane=1,$.back=-1,u)}function te(P){var $;return!P||!P.state?E:($=P.state,$.wsize=0,$.whave=0,$.wnext=0,ce(P))}function Me(P,$){var d,m;return!P||!P.state||(m=P.state,$<0?(d=0,$=-$):(d=($>>4)+1,$<48&&($&=15)),$&&($<8||$>15))?E:(m.window!==null&&m.wbits!==$&&(m.window=null),m.wrap=d,m.wbits=$,te(P))}function ue(P,$){var d,m;return P?(m=new ge,P.state=m,m.window=null,d=Me(P,$),d!==u&&(P.state=null),d):E}function he(P){return ue(P,yt)}var pe=!0,le,$t;function oe(P){if(pe){var $;for(le=new n.Buf32(512),$t=new n.Buf32(32),$=0;$<144;)P.lens[$++]=8;for(;$<256;)P.lens[$++]=9;for(;$<280;)P.lens[$++]=7;for(;$<288;)P.lens[$++]=8;for(l(p,P.lens,0,288,le,0,P.work,{bits:9}),$=0;$<32;)P.lens[$++]=5;l(w,P.lens,0,32,$t,0,P.work,{bits:5}),pe=!1}P.lencode=le,P.lenbits=9,P.distcode=$t,P.distbits=5}function Ae(P,$,d,m){var D,o=P.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new n.Buf8(o.wsize)),m>=o.wsize?(n.arraySet(o.window,$,d-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(D=o.wsize-o.wnext,D>m&&(D=m),n.arraySet(o.window,$,d-m,D,o.wnext),m-=D,m?(n.arraySet(o.window,$,d-m,m,0),o.wnext=m,o.whave=o.wsize):(o.wnext+=D,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=D))),0}function _(P,$){var d,m,D,o,O,F,x,V,W,pt,st,dt,bt,ie,Ht=0,_t,Zt,Nt,ne,me,He,Xt,fe,se=new n.Buf8(4),Ce,ye,sa=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return E;d=P.state,d.mode===ot&&(d.mode=xt),O=P.next_out,D=P.output,x=P.avail_out,o=P.next_in,m=P.input,F=P.avail_in,V=d.hold,W=d.bits,pt=F,st=x,fe=u;t:for(;;)switch(d.mode){case H:if(d.wrap===0){d.mode=xt;break}for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(d.wrap&2&&V===35615){d.check=0,se[0]=V&255,se[1]=V>>>8&255,d.check=h(d.check,se,2,0),V=0,W=0,d.mode=T;break}if(d.flags=0,d.head&&(d.head.done=!1),!(d.wrap&1)||(((V&255)<<8)+(V>>8))%31){P.msg="incorrect header check",d.mode=Lt;break}if((V&15)!==R){P.msg="unknown compression method",d.mode=Lt;break}if(V>>>=4,W-=4,Xt=(V&15)+8,d.wbits===0)d.wbits=Xt;else if(Xt>d.wbits){P.msg="invalid window size",d.mode=Lt;break}d.dmax=1<<Xt,P.adler=d.check=1,d.mode=V&512?et:ot,V=0,W=0;break;case T:for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(d.flags=V,(d.flags&255)!==R){P.msg="unknown compression method",d.mode=Lt;break}if(d.flags&57344){P.msg="unknown header flags set",d.mode=Lt;break}d.head&&(d.head.text=V>>8&1),d.flags&512&&(se[0]=V&255,se[1]=V>>>8&255,d.check=h(d.check,se,2,0)),V=0,W=0,d.mode=N;case N:for(;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.head&&(d.head.time=V),d.flags&512&&(se[0]=V&255,se[1]=V>>>8&255,se[2]=V>>>16&255,se[3]=V>>>24&255,d.check=h(d.check,se,4,0)),V=0,W=0,d.mode=j;case j:for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.head&&(d.head.xflags=V&255,d.head.os=V>>8),d.flags&512&&(se[0]=V&255,se[1]=V>>>8&255,d.check=h(d.check,se,2,0)),V=0,W=0,d.mode=q;case q:if(d.flags&1024){for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.length=V,d.head&&(d.head.extra_len=V),d.flags&512&&(se[0]=V&255,se[1]=V>>>8&255,d.check=h(d.check,se,2,0)),V=0,W=0}else d.head&&(d.head.extra=null);d.mode=G;case G:if(d.flags&1024&&(dt=d.length,dt>F&&(dt=F),dt&&(d.head&&(Xt=d.head.extra_len-d.length,d.head.extra||(d.head.extra=new Array(d.head.extra_len)),n.arraySet(d.head.extra,m,o,dt,Xt)),d.flags&512&&(d.check=h(d.check,m,dt,o)),F-=dt,o+=dt,d.length-=dt),d.length))break t;d.length=0,d.mode=at;case at:if(d.flags&2048){if(F===0)break t;dt=0;do Xt=m[o+dt++],d.head&&Xt&&d.length<65536&&(d.head.name+=String.fromCharCode(Xt));while(Xt&&dt<F);if(d.flags&512&&(d.check=h(d.check,m,dt,o)),F-=dt,o+=dt,Xt)break t}else d.head&&(d.head.name=null);d.length=0,d.mode=tt;case tt:if(d.flags&4096){if(F===0)break t;dt=0;do Xt=m[o+dt++],d.head&&Xt&&d.length<65536&&(d.head.comment+=String.fromCharCode(Xt));while(Xt&&dt<F);if(d.flags&512&&(d.check=h(d.check,m,dt,o)),F-=dt,o+=dt,Xt)break t}else d.head&&(d.head.comment=null);d.mode=lt;case lt:if(d.flags&512){for(;W<16;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(V!==(d.check&65535)){P.msg="header crc mismatch",d.mode=Lt;break}V=0,W=0}d.head&&(d.head.hcrc=d.flags>>9&1,d.head.done=!0),P.adler=d.check=0,d.mode=ot;break;case et:for(;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}P.adler=d.check=re(V),V=0,W=0,d.mode=K;case K:if(d.havedict===0)return P.next_out=O,P.avail_out=x,P.next_in=o,P.avail_in=F,d.hold=V,d.bits=W,y;P.adler=d.check=1,d.mode=ot;case ot:if($===L||$===A)break t;case xt:if(d.last){V>>>=W&7,W-=W&7,d.mode=Rt;break}for(;W<3;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}switch(d.last=V&1,V>>>=1,W-=1,V&3){case 0:d.mode=nt;break;case 1:if(oe(d),d.mode=Pt,$===A){V>>>=2,W-=2;break t}break;case 2:d.mode=Mt;break;case 3:P.msg="invalid block type",d.mode=Lt}V>>>=2,W-=2;break;case nt:for(V>>>=W&7,W-=W&7;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if((V&65535)!==(V>>>16^65535)){P.msg="invalid stored block lengths",d.mode=Lt;break}if(d.length=V&65535,V=0,W=0,d.mode=ft,$===A)break t;case ft:d.mode=Et;case Et:if(dt=d.length,dt){if(dt>F&&(dt=F),dt>x&&(dt=x),dt===0)break t;n.arraySet(D,m,o,dt,O),F-=dt,o+=dt,x-=dt,O+=dt,d.length-=dt;break}d.mode=ot;break;case Mt:for(;W<14;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(d.nlen=(V&31)+257,V>>>=5,W-=5,d.ndist=(V&31)+1,V>>>=5,W-=5,d.ncode=(V&15)+4,V>>>=4,W-=4,d.nlen>286||d.ndist>30){P.msg="too many length or distance symbols",d.mode=Lt;break}d.have=0,d.mode=kt;case kt:for(;d.have<d.ncode;){for(;W<3;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.lens[sa[d.have++]]=V&7,V>>>=3,W-=3}for(;d.have<19;)d.lens[sa[d.have++]]=0;if(d.lencode=d.lendyn,d.lenbits=7,Ce={bits:d.lenbits},fe=l(f,d.lens,0,19,d.lencode,0,d.work,Ce),d.lenbits=Ce.bits,fe){P.msg="invalid code lengths set",d.mode=Lt;break}d.have=0,d.mode=jt;case jt:for(;d.have<d.nlen+d.ndist;){for(;Ht=d.lencode[V&(1<<d.lenbits)-1],_t=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(_t<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(Nt<16)V>>>=_t,W-=_t,d.lens[d.have++]=Nt;else{if(Nt===16){for(ye=_t+2;W<ye;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(V>>>=_t,W-=_t,d.have===0){P.msg="invalid bit length repeat",d.mode=Lt;break}Xt=d.lens[d.have-1],dt=3+(V&3),V>>>=2,W-=2}else if(Nt===17){for(ye=_t+3;W<ye;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=_t,W-=_t,Xt=0,dt=3+(V&7),V>>>=3,W-=3}else{for(ye=_t+7;W<ye;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=_t,W-=_t,Xt=0,dt=11+(V&127),V>>>=7,W-=7}if(d.have+dt>d.nlen+d.ndist){P.msg="invalid bit length repeat",d.mode=Lt;break}for(;dt--;)d.lens[d.have++]=Xt}}if(d.mode===Lt)break;if(d.lens[256]===0){P.msg="invalid code -- missing end-of-block",d.mode=Lt;break}if(d.lenbits=9,Ce={bits:d.lenbits},fe=l(p,d.lens,0,d.nlen,d.lencode,0,d.work,Ce),d.lenbits=Ce.bits,fe){P.msg="invalid literal/lengths set",d.mode=Lt;break}if(d.distbits=6,d.distcode=d.distdyn,Ce={bits:d.distbits},fe=l(w,d.lens,d.nlen,d.ndist,d.distcode,0,d.work,Ce),d.distbits=Ce.bits,fe){P.msg="invalid distances set",d.mode=Lt;break}if(d.mode=Pt,$===A)break t;case Pt:d.mode=mt;case mt:if(F>=6&&x>=258){P.next_out=O,P.avail_out=x,P.next_in=o,P.avail_in=F,d.hold=V,d.bits=W,c(P,st),O=P.next_out,D=P.output,x=P.avail_out,o=P.next_in,m=P.input,F=P.avail_in,V=d.hold,W=d.bits,d.mode===ot&&(d.back=-1);break}for(d.back=0;Ht=d.lencode[V&(1<<d.lenbits)-1],_t=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(_t<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(Zt&&(Zt&240)===0){for(ne=_t,me=Zt,He=Nt;Ht=d.lencode[He+((V&(1<<ne+me)-1)>>ne)],_t=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(ne+_t<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=ne,W-=ne,d.back+=ne}if(V>>>=_t,W-=_t,d.back+=_t,d.length=Nt,Zt===0){d.mode=St;break}if(Zt&32){d.back=-1,d.mode=ot;break}if(Zt&64){P.msg="invalid literal/length code",d.mode=Lt;break}d.extra=Zt&15,d.mode=It;case It:if(d.extra){for(ye=d.extra;W<ye;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.length+=V&(1<<d.extra)-1,V>>>=d.extra,W-=d.extra,d.back+=d.extra}d.was=d.length,d.mode=Ut;case Ut:for(;Ht=d.distcode[V&(1<<d.distbits)-1],_t=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(_t<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if((Zt&240)===0){for(ne=_t,me=Zt,He=Nt;Ht=d.distcode[He+((V&(1<<ne+me)-1)>>ne)],_t=Ht>>>24,Zt=Ht>>>16&255,Nt=Ht&65535,!(ne+_t<=W);){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}V>>>=ne,W-=ne,d.back+=ne}if(V>>>=_t,W-=_t,d.back+=_t,Zt&64){P.msg="invalid distance code",d.mode=Lt;break}d.offset=Nt,d.extra=Zt&15,d.mode=Ct;case Ct:if(d.extra){for(ye=d.extra;W<ye;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}d.offset+=V&(1<<d.extra)-1,V>>>=d.extra,W-=d.extra,d.back+=d.extra}if(d.offset>d.dmax){P.msg="invalid distance too far back",d.mode=Lt;break}d.mode=Tt;case Tt:if(x===0)break t;if(dt=st-x,d.offset>dt){if(dt=d.offset-dt,dt>d.whave&&d.sane){P.msg="invalid distance too far back",d.mode=Lt;break}dt>d.wnext?(dt-=d.wnext,bt=d.wsize-dt):bt=d.wnext-dt,dt>d.length&&(dt=d.length),ie=d.window}else ie=D,bt=O-d.offset,dt=d.length;dt>x&&(dt=x),x-=dt,d.length-=dt;do D[O++]=ie[bt++];while(--dt);d.length===0&&(d.mode=mt);break;case St:if(x===0)break t;D[O++]=d.length,x--,d.mode=mt;break;case Rt:if(d.wrap){for(;W<32;){if(F===0)break t;F--,V|=m[o++]<<W,W+=8}if(st-=x,P.total_out+=st,d.total+=st,st&&(P.adler=d.check=d.flags?h(d.check,D,st,O-st):s(d.check,D,st,O-st)),st=x,(d.flags?V:re(V))!==d.check){P.msg="incorrect data check",d.mode=Lt;break}V=0,W=0}d.mode=qt;case qt:if(d.wrap&&d.flags){for(;W<32;){if(F===0)break t;F--,V+=m[o++]<<W,W+=8}if(V!==(d.total&4294967295)){P.msg="incorrect length check",d.mode=Lt;break}V=0,W=0}d.mode=Vt;case Vt:fe=g;break t;case Lt:fe=B;break t;case Gt:return b;case Qt:default:return E}return P.next_out=O,P.avail_out=x,P.next_in=o,P.avail_in=F,d.hold=V,d.bits=W,(d.wsize||st!==P.avail_out&&d.mode<Lt&&(d.mode<Rt||$!==M))&&Ae(P,P.output,P.next_out,st-P.avail_out),pt-=P.avail_in,st-=P.avail_out,P.total_in+=pt,P.total_out+=st,d.total+=st,d.wrap&&st&&(P.adler=d.check=d.flags?h(d.check,D,st,P.next_out-st):s(d.check,D,st,P.next_out-st)),P.data_type=d.bits+(d.last?64:0)+(d.mode===ot?128:0)+(d.mode===Pt||d.mode===ft?256:0),(pt===0&&st===0||$===M)&&fe===u&&(fe=k),fe}function Y(P){if(!P||!P.state)return E;var $=P.state;return $.window&&($.window=null),P.state=null,u}function Q(P,$){var d;return!P||!P.state||(d=P.state,(d.wrap&2)===0)?E:(d.head=$,$.done=!1,u)}function ut(P,$){var d=$.length,m,D,o;return!P||!P.state||(m=P.state,m.wrap!==0&&m.mode!==K)?E:m.mode===K&&(D=1,D=s(D,$,d,0),D!==m.check)?B:(o=Ae(P,$,d,d),o?(m.mode=Gt,b):(m.havedict=1,u))}i.inflateReset=te,i.inflateReset2=Me,i.inflateResetKeep=ce,i.inflateInit=he,i.inflateInit2=ue,i.inflate=_,i.inflateEnd=Y,i.inflateGetHeader=Q,i.inflateSetDictionary=ut,i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,r,i){var n=e("../utils/common"),s=15,h=852,c=592,l=0,f=1,p=2,w=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],M=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],L=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],A=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(g,y,E,B,b,k,R,H){var T=H.bits,N=0,j=0,q=0,G=0,at=0,tt=0,lt=0,et=0,K=0,ot=0,xt,nt,ft,Et,Mt,kt=null,jt=0,Pt,mt=new n.Buf16(s+1),It=new n.Buf16(s+1),Ut=null,Ct=0,Tt,St,Rt;for(N=0;N<=s;N++)mt[N]=0;for(j=0;j<B;j++)mt[y[E+j]]++;for(at=T,G=s;G>=1&&mt[G]===0;G--);if(at>G&&(at=G),G===0)return b[k++]=1<<24|64<<16|0,b[k++]=1<<24|64<<16|0,H.bits=1,0;for(q=1;q<G&&mt[q]===0;q++);for(at<q&&(at=q),et=1,N=1;N<=s;N++)if(et<<=1,et-=mt[N],et<0)return-1;if(et>0&&(g===l||G!==1))return-1;for(It[1]=0,N=1;N<s;N++)It[N+1]=It[N]+mt[N];for(j=0;j<B;j++)y[E+j]!==0&&(R[It[y[E+j]]++]=j);if(g===l?(kt=Ut=R,Pt=19):g===f?(kt=w,jt-=257,Ut=M,Ct-=257,Pt=256):(kt=L,Ut=A,Pt=-1),ot=0,j=0,N=q,Mt=k,tt=at,lt=0,ft=-1,K=1<<at,Et=K-1,g===f&&K>h||g===p&&K>c)return 1;for(;;){Tt=N-lt,R[j]<Pt?(St=0,Rt=R[j]):R[j]>Pt?(St=Ut[Ct+R[j]],Rt=kt[jt+R[j]]):(St=96,Rt=0),xt=1<<N-lt,nt=1<<tt,q=nt;do nt-=xt,b[Mt+(ot>>lt)+nt]=Tt<<24|St<<16|Rt|0;while(nt!==0);for(xt=1<<N-1;ot&xt;)xt>>=1;if(xt!==0?(ot&=xt-1,ot+=xt):ot=0,j++,--mt[N]===0){if(N===G)break;N=y[E+R[j]]}if(N>at&&(ot&Et)!==ft){for(lt===0&&(lt=at),Mt+=q,tt=N-lt,et=1<<tt;tt+lt<G&&(et-=mt[tt+lt],!(et<=0));)tt++,et<<=1;if(K+=1<<tt,g===f&&K>h||g===p&&K>c)return 1;ft=ot&Et,b[ft]=at<<24|tt<<16|Mt-k|0}}return ot!==0&&(b[Mt+ot]=N-lt<<24|64<<16|0),H.bits=at,0}},{"../utils/common":41}],51:[function(e,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,r,i){var n=e("../utils/common"),s=4,h=0,c=1,l=2;function f(_){for(var Y=_.length;--Y>=0;)_[Y]=0}var p=0,w=1,M=2,L=3,A=258,u=29,g=256,y=g+1+u,E=30,B=19,b=2*y+1,k=15,R=16,H=7,T=256,N=16,j=17,q=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],at=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],lt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],et=512,K=new Array((y+2)*2);f(K);var ot=new Array(E*2);f(ot);var xt=new Array(et);f(xt);var nt=new Array(A-L+1);f(nt);var ft=new Array(u);f(ft);var Et=new Array(E);f(Et);function Mt(_,Y,Q,ut,P){this.static_tree=_,this.extra_bits=Y,this.extra_base=Q,this.elems=ut,this.max_length=P,this.has_stree=_&&_.length}var kt,jt,Pt;function mt(_,Y){this.dyn_tree=_,this.max_code=0,this.stat_desc=Y}function It(_){return _<256?xt[_]:xt[256+(_>>>7)]}function Ut(_,Y){_.pending_buf[_.pending++]=Y&255,_.pending_buf[_.pending++]=Y>>>8&255}function Ct(_,Y,Q){_.bi_valid>R-Q?(_.bi_buf|=Y<<_.bi_valid&65535,Ut(_,_.bi_buf),_.bi_buf=Y>>R-_.bi_valid,_.bi_valid+=Q-R):(_.bi_buf|=Y<<_.bi_valid&65535,_.bi_valid+=Q)}function Tt(_,Y,Q){Ct(_,Q[Y*2],Q[Y*2+1])}function St(_,Y){var Q=0;do Q|=_&1,_>>>=1,Q<<=1;while(--Y>0);return Q>>>1}function Rt(_){_.bi_valid===16?(Ut(_,_.bi_buf),_.bi_buf=0,_.bi_valid=0):_.bi_valid>=8&&(_.pending_buf[_.pending++]=_.bi_buf&255,_.bi_buf>>=8,_.bi_valid-=8)}function qt(_,Y){var Q=Y.dyn_tree,ut=Y.max_code,P=Y.stat_desc.static_tree,$=Y.stat_desc.has_stree,d=Y.stat_desc.extra_bits,m=Y.stat_desc.extra_base,D=Y.stat_desc.max_length,o,O,F,x,V,W,pt=0;for(x=0;x<=k;x++)_.bl_count[x]=0;for(Q[_.heap[_.heap_max]*2+1]=0,o=_.heap_max+1;o<b;o++)O=_.heap[o],x=Q[Q[O*2+1]*2+1]+1,x>D&&(x=D,pt++),Q[O*2+1]=x,!(O>ut)&&(_.bl_count[x]++,V=0,O>=m&&(V=d[O-m]),W=Q[O*2],_.opt_len+=W*(x+V),$&&(_.static_len+=W*(P[O*2+1]+V)));if(pt!==0){do{for(x=D-1;_.bl_count[x]===0;)x--;_.bl_count[x]--,_.bl_count[x+1]+=2,_.bl_count[D]--,pt-=2}while(pt>0);for(x=D;x!==0;x--)for(O=_.bl_count[x];O!==0;)F=_.heap[--o],!(F>ut)&&(Q[F*2+1]!==x&&(_.opt_len+=(x-Q[F*2+1])*Q[F*2],Q[F*2+1]=x),O--)}}function Vt(_,Y,Q){var ut=new Array(k+1),P=0,$,d;for($=1;$<=k;$++)ut[$]=P=P+Q[$-1]<<1;for(d=0;d<=Y;d++){var m=_[d*2+1];m!==0&&(_[d*2]=St(ut[m]++,m))}}function Lt(){var _,Y,Q,ut,P,$=new Array(k+1);for(Q=0,ut=0;ut<u-1;ut++)for(ft[ut]=Q,_=0;_<1<<G[ut];_++)nt[Q++]=ut;for(nt[Q-1]=ut,P=0,ut=0;ut<16;ut++)for(Et[ut]=P,_=0;_<1<<at[ut];_++)xt[P++]=ut;for(P>>=7;ut<E;ut++)for(Et[ut]=P<<7,_=0;_<1<<at[ut]-7;_++)xt[256+P++]=ut;for(Y=0;Y<=k;Y++)$[Y]=0;for(_=0;_<=143;)K[_*2+1]=8,_++,$[8]++;for(;_<=255;)K[_*2+1]=9,_++,$[9]++;for(;_<=279;)K[_*2+1]=7,_++,$[7]++;for(;_<=287;)K[_*2+1]=8,_++,$[8]++;for(Vt(K,y+1,$),_=0;_<E;_++)ot[_*2+1]=5,ot[_*2]=St(_,5);kt=new Mt(K,G,g+1,y,k),jt=new Mt(ot,at,0,E,k),Pt=new Mt(new Array(0),tt,0,B,H)}function Gt(_){var Y;for(Y=0;Y<y;Y++)_.dyn_ltree[Y*2]=0;for(Y=0;Y<E;Y++)_.dyn_dtree[Y*2]=0;for(Y=0;Y<B;Y++)_.bl_tree[Y*2]=0;_.dyn_ltree[T*2]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function Qt(_){_.bi_valid>8?Ut(_,_.bi_buf):_.bi_valid>0&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function Kt(_,Y,Q,ut){Qt(_),Ut(_,Q),Ut(_,~Q),n.arraySet(_.pending_buf,_.window,Y,Q,_.pending),_.pending+=Q}function wt(_,Y,Q,ut){var P=Y*2,$=Q*2;return _[P]<_[$]||_[P]===_[$]&&ut[Y]<=ut[Q]}function At(_,Y,Q){for(var ut=_.heap[Q],P=Q<<1;P<=_.heap_len&&(P<_.heap_len&&wt(Y,_.heap[P+1],_.heap[P],_.depth)&&P++,!wt(Y,ut,_.heap[P],_.depth));)_.heap[Q]=_.heap[P],Q=P,P<<=1;_.heap[Q]=ut}function yt(_,Y,Q){var ut,P,$=0,d,m;if(_.last_lit!==0)do ut=_.pending_buf[_.d_buf+$*2]<<8|_.pending_buf[_.d_buf+$*2+1],P=_.pending_buf[_.l_buf+$],$++,ut===0?Tt(_,P,Y):(d=nt[P],Tt(_,d+g+1,Y),m=G[d],m!==0&&(P-=ft[d],Ct(_,P,m)),ut--,d=It(ut),Tt(_,d,Q),m=at[d],m!==0&&(ut-=Et[d],Ct(_,ut,m)));while($<_.last_lit);Tt(_,T,Y)}function re(_,Y){var Q=Y.dyn_tree,ut=Y.stat_desc.static_tree,P=Y.stat_desc.has_stree,$=Y.stat_desc.elems,d,m,D=-1,o;for(_.heap_len=0,_.heap_max=b,d=0;d<$;d++)Q[d*2]!==0?(_.heap[++_.heap_len]=D=d,_.depth[d]=0):Q[d*2+1]=0;for(;_.heap_len<2;)o=_.heap[++_.heap_len]=D<2?++D:0,Q[o*2]=1,_.depth[o]=0,_.opt_len--,P&&(_.static_len-=ut[o*2+1]);for(Y.max_code=D,d=_.heap_len>>1;d>=1;d--)At(_,Q,d);o=$;do d=_.heap[1],_.heap[1]=_.heap[_.heap_len--],At(_,Q,1),m=_.heap[1],_.heap[--_.heap_max]=d,_.heap[--_.heap_max]=m,Q[o*2]=Q[d*2]+Q[m*2],_.depth[o]=(_.depth[d]>=_.depth[m]?_.depth[d]:_.depth[m])+1,Q[d*2+1]=Q[m*2+1]=o,_.heap[1]=o++,At(_,Q,1);while(_.heap_len>=2);_.heap[--_.heap_max]=_.heap[1],qt(_,Y),Vt(Q,D,_.bl_count)}function ge(_,Y,Q){var ut,P=-1,$,d=Y[1],m=0,D=7,o=4;for(d===0&&(D=138,o=3),Y[(Q+1)*2+1]=65535,ut=0;ut<=Q;ut++)$=d,d=Y[(ut+1)*2+1],!(++m<D&&$===d)&&(m<o?_.bl_tree[$*2]+=m:$!==0?($!==P&&_.bl_tree[$*2]++,_.bl_tree[N*2]++):m<=10?_.bl_tree[j*2]++:_.bl_tree[q*2]++,m=0,P=$,d===0?(D=138,o=3):$===d?(D=6,o=3):(D=7,o=4))}function ce(_,Y,Q){var ut,P=-1,$,d=Y[1],m=0,D=7,o=4;for(d===0&&(D=138,o=3),ut=0;ut<=Q;ut++)if($=d,d=Y[(ut+1)*2+1],!(++m<D&&$===d)){if(m<o)do Tt(_,$,_.bl_tree);while(--m!==0);else $!==0?($!==P&&(Tt(_,$,_.bl_tree),m--),Tt(_,N,_.bl_tree),Ct(_,m-3,2)):m<=10?(Tt(_,j,_.bl_tree),Ct(_,m-3,3)):(Tt(_,q,_.bl_tree),Ct(_,m-11,7));m=0,P=$,d===0?(D=138,o=3):$===d?(D=6,o=3):(D=7,o=4)}}function te(_){var Y;for(ge(_,_.dyn_ltree,_.l_desc.max_code),ge(_,_.dyn_dtree,_.d_desc.max_code),re(_,_.bl_desc),Y=B-1;Y>=3&&_.bl_tree[lt[Y]*2+1]===0;Y--);return _.opt_len+=3*(Y+1)+5+5+4,Y}function Me(_,Y,Q,ut){var P;for(Ct(_,Y-257,5),Ct(_,Q-1,5),Ct(_,ut-4,4),P=0;P<ut;P++)Ct(_,_.bl_tree[lt[P]*2+1],3);ce(_,_.dyn_ltree,Y-1),ce(_,_.dyn_dtree,Q-1)}function ue(_){var Y=4093624447,Q;for(Q=0;Q<=31;Q++,Y>>>=1)if(Y&1&&_.dyn_ltree[Q*2]!==0)return h;if(_.dyn_ltree[18]!==0||_.dyn_ltree[20]!==0||_.dyn_ltree[26]!==0)return c;for(Q=32;Q<g;Q++)if(_.dyn_ltree[Q*2]!==0)return c;return h}var he=!1;function pe(_){he||(Lt(),he=!0),_.l_desc=new mt(_.dyn_ltree,kt),_.d_desc=new mt(_.dyn_dtree,jt),_.bl_desc=new mt(_.bl_tree,Pt),_.bi_buf=0,_.bi_valid=0,Gt(_)}function le(_,Y,Q,ut){Ct(_,(p<<1)+(ut?1:0),3),Kt(_,Y,Q)}function $t(_){Ct(_,w<<1,3),Tt(_,T,K),Rt(_)}function oe(_,Y,Q,ut){var P,$,d=0;_.level>0?(_.strm.data_type===l&&(_.strm.data_type=ue(_)),re(_,_.l_desc),re(_,_.d_desc),d=te(_),P=_.opt_len+3+7>>>3,$=_.static_len+3+7>>>3,$<=P&&(P=$)):P=$=Q+5,Q+4<=P&&Y!==-1?le(_,Y,Q,ut):_.strategy===s||$===P?(Ct(_,(w<<1)+(ut?1:0),3),yt(_,K,ot)):(Ct(_,(M<<1)+(ut?1:0),3),Me(_,_.l_desc.max_code+1,_.d_desc.max_code+1,d+1),yt(_,_.dyn_ltree,_.dyn_dtree)),Gt(_),ut&&Qt(_)}function Ae(_,Y,Q){return _.pending_buf[_.d_buf+_.last_lit*2]=Y>>>8&255,_.pending_buf[_.d_buf+_.last_lit*2+1]=Y&255,_.pending_buf[_.l_buf+_.last_lit]=Q&255,_.last_lit++,Y===0?_.dyn_ltree[Q*2]++:(_.matches++,Y--,_.dyn_ltree[(nt[Q]+g+1)*2]++,_.dyn_dtree[It(Y)*2]++),_.last_lit===_.lit_bufsize-1}i._tr_init=pe,i._tr_stored_block=le,i._tr_flush_block=oe,i._tr_tally=Ae,i._tr_align=$t},{"../utils/common":41}],53:[function(e,r,i){function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}r.exports=n},{}],54:[function(e,r,i){(function(n){(function(s,h){if(s.setImmediate)return;var c=1,l={},f=!1,p=s.document,w;function M(H){typeof H!="function"&&(H=new Function(""+H));for(var T=new Array(arguments.length-1),N=0;N<T.length;N++)T[N]=arguments[N+1];var j={callback:H,args:T};return l[c]=j,w(c),c++}function L(H){delete l[H]}function A(H){var T=H.callback,N=H.args;switch(N.length){case 0:T();break;case 1:T(N[0]);break;case 2:T(N[0],N[1]);break;case 3:T(N[0],N[1],N[2]);break;default:T.apply(h,N);break}}function u(H){if(f)setTimeout(u,0,H);else{var T=l[H];if(T){f=!0;try{A(T)}finally{L(H),f=!1}}}}function g(){w=function(H){process.nextTick(function(){u(H)})}}function y(){if(s.postMessage&&!s.importScripts){var H=!0,T=s.onmessage;return s.onmessage=function(){H=!1},s.postMessage("","*"),s.onmessage=T,H}}function E(){var H="setImmediate$"+Math.random()+"$",T=function(N){N.source===s&&typeof N.data=="string"&&N.data.indexOf(H)===0&&u(+N.data.slice(H.length))};s.addEventListener?s.addEventListener("message",T,!1):s.attachEvent("onmessage",T),w=function(N){s.postMessage(H+N,"*")}}function B(){var H=new MessageChannel;H.port1.onmessage=function(T){var N=T.data;u(N)},w=function(T){H.port2.postMessage(T)}}function b(){var H=p.documentElement;w=function(T){var N=p.createElement("script");N.onreadystatechange=function(){u(T),N.onreadystatechange=null,H.removeChild(N),N=null},H.appendChild(N)}}function k(){w=function(H){setTimeout(u,0,H)}}var R=Object.getPrototypeOf&&Object.getPrototypeOf(s);R=R&&R.setTimeout?R:s,{}.toString.call(s.process)==="[object process]"?g():y()?E():s.MessageChannel?B():p&&"onreadystatechange"in p.createElement("script")?b():k(),R.setImmediate=M,R.clearImmediate=L})(typeof self>"u"?typeof n>"u"?this:n:self)}).call(this,typeof be<"u"?be:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(g1)),g1.exports}var Eh=_h();const Sh=Je(Eh);let Dh=class{constructor(){this.zip=void 0,this.urlCache={},this.checkRequirements()}checkRequirements(){try{this.zip=new Sh}catch{throw new Error("JSZip lib not loaded")}}open(t,e){return this.zip.loadAsync(t,{base64:e})}openUrl(t,e){return na(t,"binary").then((function(r){return this.zip.loadAsync(r,{base64:e})}).bind(this))}request(t,e){var r=new Bt,i,n=new Ve(t);return e||(e=n.extension),e=="blob"?i=this.getBlob(t):i=this.getText(t),i?i.then((function(s){let h=this.handleResponse(s,e);r.resolve(h)}).bind(this)):r.reject({message:"File not found in the epub: "+t,stack:new Error().stack}),r.promise}handleResponse(t,e){var r;return e=="json"?r=JSON.parse(t):ia(e)?r=Te(t,"text/xml"):e=="xhtml"?r=Te(t,"application/xhtml+xml"):e=="html"||e=="htm"?r=Te(t,"text/html"):r=t,r}getBlob(t,e){var r=window.decodeURIComponent(t.substr(1)),i=this.zip.file(r);if(i)return e=e||Ye.lookup(i.name),i.async("uint8array").then(function(n){return new Blob([n],{type:e})})}getText(t,e){var r=window.decodeURIComponent(t.substr(1)),i=this.zip.file(r);if(i)return i.async("string").then(function(n){return n})}getBase64(t,e){var r=window.decodeURIComponent(t.substr(1)),i=this.zip.file(r);if(i)return e=e||Ye.lookup(i.name),i.async("base64").then(function(n){return"data:"+e+";base64,"+n})}createUrl(t,e){var r=new Bt,i=window.URL||window.webkitURL||window.mozURL,n,s,h=e&&e.base64;return t in this.urlCache?(r.resolve(this.urlCache[t]),r.promise):(h?(s=this.getBase64(t),s&&s.then((function(c){this.urlCache[t]=c,r.resolve(c)}).bind(this))):(s=this.getBlob(t),s&&s.then((function(c){n=i.createObjectURL(c),this.urlCache[t]=n,r.resolve(n)}).bind(this))),s||r.reject({message:"File not found in the epub: "+t,stack:new Error().stack}),r.promise)}revokeUrl(t){var e=window.URL||window.webkitURL||window.mozURL,r=this.urlCache[t];r&&e.revokeObjectURL(r)}destroy(){var t=window.URL||window.webkitURL||window.mozURL;for(let e in this.urlCache)t.revokeObjectURL(e);this.zip=void 0,this.urlCache={}}};var m1={exports:{}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/var I2;function kh(){return I2||(I2=1,(function(v,t){(function(e){v.exports=e()})(function(){return(function e(r,i,n){function s(l,f){if(!i[l]){if(!r[l]){var p=typeof Pe=="function"&&Pe;if(!f&&p)return p(l,!0);if(h)return h(l,!0);var w=new Error("Cannot find module '"+l+"'");throw w.code="MODULE_NOT_FOUND",w}var M=i[l]={exports:{}};r[l][0].call(M.exports,function(L){var A=r[l][1][L];return s(A||L)},M,M.exports,e,r,i,n)}return i[l].exports}for(var h=typeof Pe=="function"&&Pe,c=0;c<n.length;c++)s(n[c]);return s})({1:[function(e,r,i){(function(n){var s=n.MutationObserver||n.WebKitMutationObserver,h;if(s){var c=0,l=new s(L),f=n.document.createTextNode("");l.observe(f,{characterData:!0}),h=function(){f.data=c=++c%2}}else if(!n.setImmediate&&typeof n.MessageChannel<"u"){var p=new n.MessageChannel;p.port1.onmessage=L,h=function(){p.port2.postMessage(0)}}else"document"in n&&"onreadystatechange"in n.document.createElement("script")?h=function(){var u=n.document.createElement("script");u.onreadystatechange=function(){L(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},n.document.documentElement.appendChild(u)}:h=function(){setTimeout(L,0)};var w,M=[];function L(){w=!0;for(var u,g,y=M.length;y;){for(g=M,M=[],u=-1;++u<y;)g[u]();y=M.length}w=!1}r.exports=A;function A(u){M.push(u)===1&&!w&&h()}}).call(this,typeof be<"u"?be:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(e,r,i){var n=e(1);function s(){}var h={},c=["REJECTED"],l=["FULFILLED"],f=["PENDING"];r.exports=p;function p(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,b!==s&&A(this,b)}p.prototype.catch=function(b){return this.then(null,b)},p.prototype.then=function(b,k){if(typeof b!="function"&&this.state===l||typeof k!="function"&&this.state===c)return this;var R=new this.constructor(s);if(this.state!==f){var H=this.state===l?b:k;M(R,H,this.outcome)}else this.queue.push(new w(R,b,k));return R};function w(b,k,R){this.promise=b,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof R=="function"&&(this.onRejected=R,this.callRejected=this.otherCallRejected)}w.prototype.callFulfilled=function(b){h.resolve(this.promise,b)},w.prototype.otherCallFulfilled=function(b){M(this.promise,this.onFulfilled,b)},w.prototype.callRejected=function(b){h.reject(this.promise,b)},w.prototype.otherCallRejected=function(b){M(this.promise,this.onRejected,b)};function M(b,k,R){n(function(){var H;try{H=k(R)}catch(T){return h.reject(b,T)}H===b?h.reject(b,new TypeError("Cannot resolve promise with itself")):h.resolve(b,H)})}h.resolve=function(b,k){var R=u(L,k);if(R.status==="error")return h.reject(b,R.value);var H=R.value;if(H)A(b,H);else{b.state=l,b.outcome=k;for(var T=-1,N=b.queue.length;++T<N;)b.queue[T].callFulfilled(k)}return b},h.reject=function(b,k){b.state=c,b.outcome=k;for(var R=-1,H=b.queue.length;++R<H;)b.queue[R].callRejected(k);return b};function L(b){var k=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof k=="function")return function(){k.apply(b,arguments)}}function A(b,k){var R=!1;function H(q){R||(R=!0,h.reject(b,q))}function T(q){R||(R=!0,h.resolve(b,q))}function N(){k(T,H)}var j=u(N);j.status==="error"&&H(j.value)}function u(b,k){var R={};try{R.value=b(k),R.status="success"}catch(H){R.status="error",R.value=H}return R}p.resolve=g;function g(b){return b instanceof this?b:h.resolve(new this(s),b)}p.reject=y;function y(b){var k=new this(s);return h.reject(k,b)}p.all=E;function E(b){var k=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=b.length,H=!1;if(!R)return this.resolve([]);for(var T=new Array(R),N=0,j=-1,q=new this(s);++j<R;)G(b[j],j);return q;function G(at,tt){k.resolve(at).then(lt,function(et){H||(H=!0,h.reject(q,et))});function lt(et){T[tt]=et,++N===R&&!H&&(H=!0,h.resolve(q,T))}}}p.race=B;function B(b){var k=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=b.length,H=!1;if(!R)return this.resolve([]);for(var T=-1,N=new this(s);++T<R;)j(b[T]);return N;function j(q){k.resolve(q).then(function(G){H||(H=!0,h.resolve(N,G))},function(G){H||(H=!0,h.reject(N,G))})}}},{1:1}],3:[function(e,r,i){(function(n){typeof n.Promise!="function"&&(n.Promise=e(2))}).call(this,typeof be<"u"?be:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(e,r,i){var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C};function s(C,I){if(!(C instanceof I))throw new TypeError("Cannot call a class as a function")}function h(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var c=h();function l(){try{if(!c||!c.open)return!1;var C=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),I=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!C||I)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function f(C,I){C=C||[],I=I||{};try{return new Blob(C,I)}catch(z){if(z.name!=="TypeError")throw z;for(var S=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,U=new S,Z=0;Z<C.length;Z+=1)U.append(C[Z]);return U.getBlob(I.type)}}typeof Promise>"u"&&e(3);var p=Promise;function w(C,I){I&&C.then(function(S){I(null,S)},function(S){I(S)})}function M(C,I,S){typeof I=="function"&&C.then(I),typeof S=="function"&&C.catch(S)}function L(C){return typeof C!="string"&&(console.warn(C+" used as a key, but it is not a string."),C=String(C)),C}function A(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var u="local-forage-detect-blob-support",g=void 0,y={},E=Object.prototype.toString,B="readonly",b="readwrite";function k(C){for(var I=C.length,S=new ArrayBuffer(I),U=new Uint8Array(S),Z=0;Z<I;Z++)U[Z]=C.charCodeAt(Z);return S}function R(C){return new p(function(I){var S=C.transaction(u,b),U=f([""]);S.objectStore(u).put(U,"key"),S.onabort=function(Z){Z.preventDefault(),Z.stopPropagation(),I(!1)},S.oncomplete=function(){var Z=navigator.userAgent.match(/Chrome\/(\d+)/),z=navigator.userAgent.match(/Edge\//);I(z||!Z||parseInt(Z[1],10)>=43)}}).catch(function(){return!1})}function H(C){return typeof g=="boolean"?p.resolve(g):R(C).then(function(I){return g=I,g})}function T(C){var I=y[C.name],S={};S.promise=new p(function(U,Z){S.resolve=U,S.reject=Z}),I.deferredOperations.push(S),I.dbReady?I.dbReady=I.dbReady.then(function(){return S.promise}):I.dbReady=S.promise}function N(C){var I=y[C.name],S=I.deferredOperations.pop();if(S)return S.resolve(),S.promise}function j(C,I){var S=y[C.name],U=S.deferredOperations.pop();if(U)return U.reject(I),U.promise}function q(C,I){return new p(function(S,U){if(y[C.name]=y[C.name]||ft(),C.db)if(I)T(C),C.db.close();else return S(C.db);var Z=[C.name];I&&Z.push(C.version);var z=c.open.apply(c,Z);I&&(z.onupgradeneeded=function(X){var J=z.result;try{J.createObjectStore(C.storeName),X.oldVersion<=1&&J.createObjectStore(u)}catch(rt){if(rt.name==="ConstraintError")console.warn('The database "'+C.name+'" has been upgraded from version '+X.oldVersion+" to version "+X.newVersion+', but the storage "'+C.storeName+'" already exists.');else throw rt}}),z.onerror=function(X){X.preventDefault(),U(z.error)},z.onsuccess=function(){var X=z.result;X.onversionchange=function(J){J.target.close()},S(X),N(C)}})}function G(C){return q(C,!1)}function at(C){return q(C,!0)}function tt(C,I){if(!C.db)return!0;var S=!C.db.objectStoreNames.contains(C.storeName),U=C.version<C.db.version,Z=C.version>C.db.version;if(U&&(C.version!==I&&console.warn('The database "'+C.name+`" can't be downgraded from version `+C.db.version+" to version "+C.version+"."),C.version=C.db.version),Z||S){if(S){var z=C.db.version+1;z>C.version&&(C.version=z)}return!0}return!1}function lt(C){return new p(function(I,S){var U=new FileReader;U.onerror=S,U.onloadend=function(Z){var z=btoa(Z.target.result||"");I({__local_forage_encoded_blob:!0,data:z,type:C.type})},U.readAsBinaryString(C)})}function et(C){var I=k(atob(C.data));return f([I],{type:C.type})}function K(C){return C&&C.__local_forage_encoded_blob}function ot(C){var I=this,S=I._initReady().then(function(){var U=y[I._dbInfo.name];if(U&&U.dbReady)return U.dbReady});return M(S,C,C),S}function xt(C){T(C);for(var I=y[C.name],S=I.forages,U=0;U<S.length;U++){var Z=S[U];Z._dbInfo.db&&(Z._dbInfo.db.close(),Z._dbInfo.db=null)}return C.db=null,G(C).then(function(z){return C.db=z,tt(C)?at(C):z}).then(function(z){C.db=I.db=z;for(var X=0;X<S.length;X++)S[X]._dbInfo.db=z}).catch(function(z){throw j(C,z),z})}function nt(C,I,S,U){U===void 0&&(U=1);try{var Z=C.db.transaction(C.storeName,I);S(null,Z)}catch(z){if(U>0&&(!C.db||z.name==="InvalidStateError"||z.name==="NotFoundError"))return p.resolve().then(function(){if(!C.db||z.name==="NotFoundError"&&!C.db.objectStoreNames.contains(C.storeName)&&C.version<=C.db.version)return C.db&&(C.version=C.db.version+1),at(C)}).then(function(){return xt(C).then(function(){nt(C,I,S,U-1)})}).catch(S);S(z)}}function ft(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Et(C){var I=this,S={db:null};if(C)for(var U in C)S[U]=C[U];var Z=y[S.name];Z||(Z=ft(),y[S.name]=Z),Z.forages.push(I),I._initReady||(I._initReady=I.ready,I.ready=ot);var z=[];function X(){return p.resolve()}for(var J=0;J<Z.forages.length;J++){var rt=Z.forages[J];rt!==I&&z.push(rt._initReady().catch(X))}var it=Z.forages.slice(0);return p.all(z).then(function(){return S.db=Z.db,G(S)}).then(function(ht){return S.db=ht,tt(S,I._defaultConfig.version)?at(S):ht}).then(function(ht){S.db=Z.db=ht,I._dbInfo=S;for(var gt=0;gt<it.length;gt++){var Dt=it[gt];Dt!==I&&(Dt._dbInfo.db=S.db,Dt._dbInfo.version=S.version)}})}function Mt(C,I){var S=this;C=L(C);var U=new p(function(Z,z){S.ready().then(function(){nt(S._dbInfo,B,function(X,J){if(X)return z(X);try{var rt=J.objectStore(S._dbInfo.storeName),it=rt.get(C);it.onsuccess=function(){var ht=it.result;ht===void 0&&(ht=null),K(ht)&&(ht=et(ht)),Z(ht)},it.onerror=function(){z(it.error)}}catch(ht){z(ht)}})}).catch(z)});return w(U,I),U}function kt(C,I){var S=this,U=new p(function(Z,z){S.ready().then(function(){nt(S._dbInfo,B,function(X,J){if(X)return z(X);try{var rt=J.objectStore(S._dbInfo.storeName),it=rt.openCursor(),ht=1;it.onsuccess=function(){var gt=it.result;if(gt){var Dt=gt.value;K(Dt)&&(Dt=et(Dt));var zt=C(Dt,gt.key,ht++);zt!==void 0?Z(zt):gt.continue()}else Z()},it.onerror=function(){z(it.error)}}catch(gt){z(gt)}})}).catch(z)});return w(U,I),U}function jt(C,I,S){var U=this;C=L(C);var Z=new p(function(z,X){var J;U.ready().then(function(){return J=U._dbInfo,E.call(I)==="[object Blob]"?H(J.db).then(function(rt){return rt?I:lt(I)}):I}).then(function(rt){nt(U._dbInfo,b,function(it,ht){if(it)return X(it);try{var gt=ht.objectStore(U._dbInfo.storeName);rt===null&&(rt=void 0);var Dt=gt.put(rt,C);ht.oncomplete=function(){rt===void 0&&(rt=null),z(rt)},ht.onabort=ht.onerror=function(){var zt=Dt.error?Dt.error:Dt.transaction.error;X(zt)}}catch(zt){X(zt)}})}).catch(X)});return w(Z,S),Z}function Pt(C,I){var S=this;C=L(C);var U=new p(function(Z,z){S.ready().then(function(){nt(S._dbInfo,b,function(X,J){if(X)return z(X);try{var rt=J.objectStore(S._dbInfo.storeName),it=rt.delete(C);J.oncomplete=function(){Z()},J.onerror=function(){z(it.error)},J.onabort=function(){var ht=it.error?it.error:it.transaction.error;z(ht)}}catch(ht){z(ht)}})}).catch(z)});return w(U,I),U}function mt(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){nt(I._dbInfo,b,function(z,X){if(z)return Z(z);try{var J=X.objectStore(I._dbInfo.storeName),rt=J.clear();X.oncomplete=function(){U()},X.onabort=X.onerror=function(){var it=rt.error?rt.error:rt.transaction.error;Z(it)}}catch(it){Z(it)}})}).catch(Z)});return w(S,C),S}function It(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){nt(I._dbInfo,B,function(z,X){if(z)return Z(z);try{var J=X.objectStore(I._dbInfo.storeName),rt=J.count();rt.onsuccess=function(){U(rt.result)},rt.onerror=function(){Z(rt.error)}}catch(it){Z(it)}})}).catch(Z)});return w(S,C),S}function Ut(C,I){var S=this,U=new p(function(Z,z){if(C<0){Z(null);return}S.ready().then(function(){nt(S._dbInfo,B,function(X,J){if(X)return z(X);try{var rt=J.objectStore(S._dbInfo.storeName),it=!1,ht=rt.openKeyCursor();ht.onsuccess=function(){var gt=ht.result;if(!gt){Z(null);return}C===0||it?Z(gt.key):(it=!0,gt.advance(C))},ht.onerror=function(){z(ht.error)}}catch(gt){z(gt)}})}).catch(z)});return w(U,I),U}function Ct(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){nt(I._dbInfo,B,function(z,X){if(z)return Z(z);try{var J=X.objectStore(I._dbInfo.storeName),rt=J.openKeyCursor(),it=[];rt.onsuccess=function(){var ht=rt.result;if(!ht){U(it);return}it.push(ht.key),ht.continue()},rt.onerror=function(){Z(rt.error)}}catch(ht){Z(ht)}})}).catch(Z)});return w(S,C),S}function Tt(C,I){I=A.apply(this,arguments);var S=this.config();C=typeof C!="function"&&C||{},C.name||(C.name=C.name||S.name,C.storeName=C.storeName||S.storeName);var U=this,Z;if(!C.name)Z=p.reject("Invalid arguments");else{var z=C.name===S.name&&U._dbInfo.db,X=z?p.resolve(U._dbInfo.db):G(C).then(function(J){var rt=y[C.name],it=rt.forages;rt.db=J;for(var ht=0;ht<it.length;ht++)it[ht]._dbInfo.db=J;return J});C.storeName?Z=X.then(function(J){if(J.objectStoreNames.contains(C.storeName)){var rt=J.version+1;T(C);var it=y[C.name],ht=it.forages;J.close();for(var gt=0;gt<ht.length;gt++){var Dt=ht[gt];Dt._dbInfo.db=null,Dt._dbInfo.version=rt}var zt=new p(function(Ft,ee){var Jt=c.open(C.name,rt);Jt.onerror=function(xe){var ta=Jt.result;ta.close(),ee(xe)},Jt.onupgradeneeded=function(){var xe=Jt.result;xe.deleteObjectStore(C.storeName)},Jt.onsuccess=function(){var xe=Jt.result;xe.close(),Ft(xe)}});return zt.then(function(Ft){it.db=Ft;for(var ee=0;ee<ht.length;ee++){var Jt=ht[ee];Jt._dbInfo.db=Ft,N(Jt._dbInfo)}}).catch(function(Ft){throw(j(C,Ft)||p.resolve()).catch(function(){}),Ft})}}):Z=X.then(function(J){T(C);var rt=y[C.name],it=rt.forages;J.close();for(var ht=0;ht<it.length;ht++){var gt=it[ht];gt._dbInfo.db=null}var Dt=new p(function(zt,Ft){var ee=c.deleteDatabase(C.name);ee.onerror=function(){var Jt=ee.result;Jt&&Jt.close(),Ft(ee.error)},ee.onblocked=function(){console.warn('dropInstance blocked for database "'+C.name+'" until all open connections are closed')},ee.onsuccess=function(){var Jt=ee.result;Jt&&Jt.close(),zt(Jt)}});return Dt.then(function(zt){rt.db=zt;for(var Ft=0;Ft<it.length;Ft++){var ee=it[Ft];N(ee._dbInfo)}}).catch(function(zt){throw(j(C,zt)||p.resolve()).catch(function(){}),zt})})}return w(Z,I),Z}var St={_driver:"asyncStorage",_initStorage:Et,_support:l(),iterate:kt,getItem:Mt,setItem:jt,removeItem:Pt,clear:mt,length:It,key:Ut,keys:Ct,dropInstance:Tt};function Rt(){return typeof openDatabase=="function"}var qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vt="~~local_forage_type~",Lt=/^~~local_forage_type~([^~]+)~/,Gt="__lfsc__:",Qt=Gt.length,Kt="arbf",wt="blob",At="si08",yt="ui08",re="uic8",ge="si16",ce="si32",te="ur16",Me="ui32",ue="fl32",he="fl64",pe=Qt+Kt.length,le=Object.prototype.toString;function $t(C){var I=C.length*.75,S=C.length,U,Z=0,z,X,J,rt;C[C.length-1]==="="&&(I--,C[C.length-2]==="="&&I--);var it=new ArrayBuffer(I),ht=new Uint8Array(it);for(U=0;U<S;U+=4)z=qt.indexOf(C[U]),X=qt.indexOf(C[U+1]),J=qt.indexOf(C[U+2]),rt=qt.indexOf(C[U+3]),ht[Z++]=z<<2|X>>4,ht[Z++]=(X&15)<<4|J>>2,ht[Z++]=(J&3)<<6|rt&63;return it}function oe(C){var I=new Uint8Array(C),S="",U;for(U=0;U<I.length;U+=3)S+=qt[I[U]>>2],S+=qt[(I[U]&3)<<4|I[U+1]>>4],S+=qt[(I[U+1]&15)<<2|I[U+2]>>6],S+=qt[I[U+2]&63];return I.length%3===2?S=S.substring(0,S.length-1)+"=":I.length%3===1&&(S=S.substring(0,S.length-2)+"=="),S}function Ae(C,I){var S="";if(C&&(S=le.call(C)),C&&(S==="[object ArrayBuffer]"||C.buffer&&le.call(C.buffer)==="[object ArrayBuffer]")){var U,Z=Gt;C instanceof ArrayBuffer?(U=C,Z+=Kt):(U=C.buffer,S==="[object Int8Array]"?Z+=At:S==="[object Uint8Array]"?Z+=yt:S==="[object Uint8ClampedArray]"?Z+=re:S==="[object Int16Array]"?Z+=ge:S==="[object Uint16Array]"?Z+=te:S==="[object Int32Array]"?Z+=ce:S==="[object Uint32Array]"?Z+=Me:S==="[object Float32Array]"?Z+=ue:S==="[object Float64Array]"?Z+=he:I(new Error("Failed to get type for BinaryArray"))),I(Z+oe(U))}else if(S==="[object Blob]"){var z=new FileReader;z.onload=function(){var X=Vt+C.type+"~"+oe(this.result);I(Gt+wt+X)},z.readAsArrayBuffer(C)}else try{I(JSON.stringify(C))}catch(X){console.error("Couldn't convert value into a JSON string: ",C),I(null,X)}}function _(C){if(C.substring(0,Qt)!==Gt)return JSON.parse(C);var I=C.substring(pe),S=C.substring(Qt,pe),U;if(S===wt&&Lt.test(I)){var Z=I.match(Lt);U=Z[1],I=I.substring(Z[0].length)}var z=$t(I);switch(S){case Kt:return z;case wt:return f([z],{type:U});case At:return new Int8Array(z);case yt:return new Uint8Array(z);case re:return new Uint8ClampedArray(z);case ge:return new Int16Array(z);case te:return new Uint16Array(z);case ce:return new Int32Array(z);case Me:return new Uint32Array(z);case ue:return new Float32Array(z);case he:return new Float64Array(z);default:throw new Error("Unkown type: "+S)}}var Y={serialize:Ae,deserialize:_,stringToBuffer:$t,bufferToString:oe};function Q(C,I,S,U){C.executeSql("CREATE TABLE IF NOT EXISTS "+I.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],S,U)}function ut(C){var I=this,S={db:null};if(C)for(var U in C)S[U]=typeof C[U]!="string"?C[U].toString():C[U];var Z=new p(function(z,X){try{S.db=openDatabase(S.name,String(S.version),S.description,S.size)}catch(J){return X(J)}S.db.transaction(function(J){Q(J,S,function(){I._dbInfo=S,z()},function(rt,it){X(it)})},X)});return S.serializer=Y,Z}function P(C,I,S,U,Z,z){C.executeSql(S,U,Z,function(X,J){J.code===J.SYNTAX_ERR?X.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[I.storeName],function(rt,it){it.rows.length?z(rt,J):Q(rt,I,function(){rt.executeSql(S,U,Z,z)},z)},z):z(X,J)},z)}function $(C,I){var S=this;C=L(C);var U=new p(function(Z,z){S.ready().then(function(){var X=S._dbInfo;X.db.transaction(function(J){P(J,X,"SELECT * FROM "+X.storeName+" WHERE key = ? LIMIT 1",[C],function(rt,it){var ht=it.rows.length?it.rows.item(0).value:null;ht&&(ht=X.serializer.deserialize(ht)),Z(ht)},function(rt,it){z(it)})})}).catch(z)});return w(U,I),U}function d(C,I){var S=this,U=new p(function(Z,z){S.ready().then(function(){var X=S._dbInfo;X.db.transaction(function(J){P(J,X,"SELECT * FROM "+X.storeName,[],function(rt,it){for(var ht=it.rows,gt=ht.length,Dt=0;Dt<gt;Dt++){var zt=ht.item(Dt),Ft=zt.value;if(Ft&&(Ft=X.serializer.deserialize(Ft)),Ft=C(Ft,zt.key,Dt+1),Ft!==void 0){Z(Ft);return}}Z()},function(rt,it){z(it)})})}).catch(z)});return w(U,I),U}function m(C,I,S,U){var Z=this;C=L(C);var z=new p(function(X,J){Z.ready().then(function(){I===void 0&&(I=null);var rt=I,it=Z._dbInfo;it.serializer.serialize(I,function(ht,gt){gt?J(gt):it.db.transaction(function(Dt){P(Dt,it,"INSERT OR REPLACE INTO "+it.storeName+" (key, value) VALUES (?, ?)",[C,ht],function(){X(rt)},function(zt,Ft){J(Ft)})},function(Dt){if(Dt.code===Dt.QUOTA_ERR){if(U>0){X(m.apply(Z,[C,rt,S,U-1]));return}J(Dt)}})})}).catch(J)});return w(z,S),z}function D(C,I,S){return m.apply(this,[C,I,S,1])}function o(C,I){var S=this;C=L(C);var U=new p(function(Z,z){S.ready().then(function(){var X=S._dbInfo;X.db.transaction(function(J){P(J,X,"DELETE FROM "+X.storeName+" WHERE key = ?",[C],function(){Z()},function(rt,it){z(it)})})}).catch(z)});return w(U,I),U}function O(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){var z=I._dbInfo;z.db.transaction(function(X){P(X,z,"DELETE FROM "+z.storeName,[],function(){U()},function(J,rt){Z(rt)})})}).catch(Z)});return w(S,C),S}function F(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){var z=I._dbInfo;z.db.transaction(function(X){P(X,z,"SELECT COUNT(key) as c FROM "+z.storeName,[],function(J,rt){var it=rt.rows.item(0).c;U(it)},function(J,rt){Z(rt)})})}).catch(Z)});return w(S,C),S}function x(C,I){var S=this,U=new p(function(Z,z){S.ready().then(function(){var X=S._dbInfo;X.db.transaction(function(J){P(J,X,"SELECT key FROM "+X.storeName+" WHERE id = ? LIMIT 1",[C+1],function(rt,it){var ht=it.rows.length?it.rows.item(0).key:null;Z(ht)},function(rt,it){z(it)})})}).catch(z)});return w(U,I),U}function V(C){var I=this,S=new p(function(U,Z){I.ready().then(function(){var z=I._dbInfo;z.db.transaction(function(X){P(X,z,"SELECT key FROM "+z.storeName,[],function(J,rt){for(var it=[],ht=0;ht<rt.rows.length;ht++)it.push(rt.rows.item(ht).key);U(it)},function(J,rt){Z(rt)})})}).catch(Z)});return w(S,C),S}function W(C){return new p(function(I,S){C.transaction(function(U){U.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(Z,z){for(var X=[],J=0;J<z.rows.length;J++)X.push(z.rows.item(J).name);I({db:C,storeNames:X})},function(Z,z){S(z)})},function(U){S(U)})})}function pt(C,I){I=A.apply(this,arguments);var S=this.config();C=typeof C!="function"&&C||{},C.name||(C.name=C.name||S.name,C.storeName=C.storeName||S.storeName);var U=this,Z;return C.name?Z=new p(function(z){var X;C.name===S.name?X=U._dbInfo.db:X=openDatabase(C.name,"","",0),C.storeName?z({db:X,storeNames:[C.storeName]}):z(W(X))}).then(function(z){return new p(function(X,J){z.db.transaction(function(rt){function it(zt){return new p(function(Ft,ee){rt.executeSql("DROP TABLE IF EXISTS "+zt,[],function(){Ft()},function(Jt,xe){ee(xe)})})}for(var ht=[],gt=0,Dt=z.storeNames.length;gt<Dt;gt++)ht.push(it(z.storeNames[gt]));p.all(ht).then(function(){X()}).catch(function(zt){J(zt)})},function(rt){J(rt)})})}):Z=p.reject("Invalid arguments"),w(Z,I),Z}var st={_driver:"webSQLStorage",_initStorage:ut,_support:Rt(),iterate:d,getItem:$,setItem:D,removeItem:o,clear:O,length:F,key:x,keys:V,dropInstance:pt};function dt(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function bt(C,I){var S=C.name+"/";return C.storeName!==I.storeName&&(S+=C.storeName+"/"),S}function ie(){var C="_localforage_support_test";try{return localStorage.setItem(C,!0),localStorage.removeItem(C),!1}catch{return!0}}function Ht(){return!ie()||localStorage.length>0}function _t(C){var I=this,S={};if(C)for(var U in C)S[U]=C[U];return S.keyPrefix=bt(C,I._defaultConfig),Ht()?(I._dbInfo=S,S.serializer=Y,p.resolve()):p.reject()}function Zt(C){var I=this,S=I.ready().then(function(){for(var U=I._dbInfo.keyPrefix,Z=localStorage.length-1;Z>=0;Z--){var z=localStorage.key(Z);z.indexOf(U)===0&&localStorage.removeItem(z)}});return w(S,C),S}function Nt(C,I){var S=this;C=L(C);var U=S.ready().then(function(){var Z=S._dbInfo,z=localStorage.getItem(Z.keyPrefix+C);return z&&(z=Z.serializer.deserialize(z)),z});return w(U,I),U}function ne(C,I){var S=this,U=S.ready().then(function(){for(var Z=S._dbInfo,z=Z.keyPrefix,X=z.length,J=localStorage.length,rt=1,it=0;it<J;it++){var ht=localStorage.key(it);if(ht.indexOf(z)===0){var gt=localStorage.getItem(ht);if(gt&&(gt=Z.serializer.deserialize(gt)),gt=C(gt,ht.substring(X),rt++),gt!==void 0)return gt}}});return w(U,I),U}function me(C,I){var S=this,U=S.ready().then(function(){var Z=S._dbInfo,z;try{z=localStorage.key(C)}catch{z=null}return z&&(z=z.substring(Z.keyPrefix.length)),z});return w(U,I),U}function He(C){var I=this,S=I.ready().then(function(){for(var U=I._dbInfo,Z=localStorage.length,z=[],X=0;X<Z;X++){var J=localStorage.key(X);J.indexOf(U.keyPrefix)===0&&z.push(J.substring(U.keyPrefix.length))}return z});return w(S,C),S}function Xt(C){var I=this,S=I.keys().then(function(U){return U.length});return w(S,C),S}function fe(C,I){var S=this;C=L(C);var U=S.ready().then(function(){var Z=S._dbInfo;localStorage.removeItem(Z.keyPrefix+C)});return w(U,I),U}function se(C,I,S){var U=this;C=L(C);var Z=U.ready().then(function(){I===void 0&&(I=null);var z=I;return new p(function(X,J){var rt=U._dbInfo;rt.serializer.serialize(I,function(it,ht){if(ht)J(ht);else try{localStorage.setItem(rt.keyPrefix+C,it),X(z)}catch(gt){(gt.name==="QuotaExceededError"||gt.name==="NS_ERROR_DOM_QUOTA_REACHED")&&J(gt),J(gt)}})})});return w(Z,S),Z}function Ce(C,I){if(I=A.apply(this,arguments),C=typeof C!="function"&&C||{},!C.name){var S=this.config();C.name=C.name||S.name,C.storeName=C.storeName||S.storeName}var U=this,Z;return C.name?Z=new p(function(z){C.storeName?z(bt(C,U._defaultConfig)):z(C.name+"/")}).then(function(z){for(var X=localStorage.length-1;X>=0;X--){var J=localStorage.key(X);J.indexOf(z)===0&&localStorage.removeItem(J)}}):Z=p.reject("Invalid arguments"),w(Z,I),Z}var ye={_driver:"localStorageWrapper",_initStorage:_t,_support:dt(),iterate:ne,getItem:Nt,setItem:se,removeItem:fe,clear:Zt,length:Xt,key:me,keys:He,dropInstance:Ce},sa=function(I,S){return I===S||typeof I=="number"&&typeof S=="number"&&isNaN(I)&&isNaN(S)},Js=function(I,S){for(var U=I.length,Z=0;Z<U;){if(sa(I[Z],S))return!0;Z++}return!1},P1=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"},Qe={},z1={},Ue={INDEXEDDB:St,WEBSQL:st,LOCALSTORAGE:ye},Qs=[Ue.INDEXEDDB._driver,Ue.WEBSQL._driver,Ue.LOCALSTORAGE._driver],ha=["dropInstance"],Sa=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(ha),t0={description:"",driver:Qs.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function e0(C,I){C[I]=function(){var S=arguments;return C.ready().then(function(){return C[I].apply(C,S)})}}function Da(){for(var C=1;C<arguments.length;C++){var I=arguments[C];if(I)for(var S in I)I.hasOwnProperty(S)&&(P1(I[S])?arguments[0][S]=I[S].slice():arguments[0][S]=I[S])}return arguments[0]}var a0=(function(){function C(I){s(this,C);for(var S in Ue)if(Ue.hasOwnProperty(S)){var U=Ue[S],Z=U._driver;this[S]=Z,Qe[Z]||this.defineDriver(U)}this._defaultConfig=Da({},t0),this._config=Da({},this._defaultConfig,I),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return C.prototype.config=function(S){if((typeof S>"u"?"undefined":n(S))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var U in S){if(U==="storeName"&&(S[U]=S[U].replace(/\W/g,"_")),U==="version"&&typeof S[U]!="number")return new Error("Database version must be a number.");this._config[U]=S[U]}return"driver"in S&&S.driver?this.setDriver(this._config.driver):!0}else return typeof S=="string"?this._config[S]:this._config},C.prototype.defineDriver=function(S,U,Z){var z=new p(function(X,J){try{var rt=S._driver,it=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!S._driver){J(it);return}for(var ht=Sa.concat("_initStorage"),gt=0,Dt=ht.length;gt<Dt;gt++){var zt=ht[gt],Ft=!Js(ha,zt);if((Ft||S[zt])&&typeof S[zt]!="function"){J(it);return}}var ee=function(){for(var ta=function(n0){return function(){var s0=new Error("Method "+n0+" is not implemented by the current driver"),F1=p.reject(s0);return w(F1,arguments[arguments.length-1]),F1}},ka=0,i0=ha.length;ka<i0;ka++){var Ta=ha[ka];S[Ta]||(S[Ta]=ta(Ta))}};ee();var Jt=function(ta){Qe[rt]&&console.info("Redefining LocalForage driver: "+rt),Qe[rt]=S,z1[rt]=ta,X()};"_support"in S?S._support&&typeof S._support=="function"?S._support().then(Jt,J):Jt(!!S._support):Jt(!0)}catch(xe){J(xe)}});return M(z,U,Z),z},C.prototype.driver=function(){return this._driver||null},C.prototype.getDriver=function(S,U,Z){var z=Qe[S]?p.resolve(Qe[S]):p.reject(new Error("Driver not found."));return M(z,U,Z),z},C.prototype.getSerializer=function(S){var U=p.resolve(Y);return M(U,S),U},C.prototype.ready=function(S){var U=this,Z=U._driverSet.then(function(){return U._ready===null&&(U._ready=U._initDriver()),U._ready});return M(Z,S,S),Z},C.prototype.setDriver=function(S,U,Z){var z=this;P1(S)||(S=[S]);var X=this._getSupportedDrivers(S);function J(){z._config.driver=z.driver()}function rt(gt){return z._extend(gt),J(),z._ready=z._initStorage(z._config),z._ready}function it(gt){return function(){var Dt=0;function zt(){for(;Dt<gt.length;){var Ft=gt[Dt];return Dt++,z._dbInfo=null,z._ready=null,z.getDriver(Ft).then(rt).catch(zt)}J();var ee=new Error("No available storage method found.");return z._driverSet=p.reject(ee),z._driverSet}return zt()}}var ht=this._driverSet!==null?this._driverSet.catch(function(){return p.resolve()}):p.resolve();return this._driverSet=ht.then(function(){var gt=X[0];return z._dbInfo=null,z._ready=null,z.getDriver(gt).then(function(Dt){z._driver=Dt._driver,J(),z._wrapLibraryMethodsWithReady(),z._initDriver=it(X)})}).catch(function(){J();var gt=new Error("No available storage method found.");return z._driverSet=p.reject(gt),z._driverSet}),M(this._driverSet,U,Z),this._driverSet},C.prototype.supports=function(S){return!!z1[S]},C.prototype._extend=function(S){Da(this,S)},C.prototype._getSupportedDrivers=function(S){for(var U=[],Z=0,z=S.length;Z<z;Z++){var X=S[Z];this.supports(X)&&U.push(X)}return U},C.prototype._wrapLibraryMethodsWithReady=function(){for(var S=0,U=Sa.length;S<U;S++)e0(this,Sa[S])},C.prototype.createInstance=function(S){return new C(S)},C})(),r0=new a0;r.exports=r0},{3:3}]},{},[4])(4)})})(m1)),m1.exports}var Th=kh();const P2=Je(Th);let qs=class{constructor(t,e,r){this.urlCache={},this.storage=void 0,this.name=t,this.requester=e||na,this.resolver=r,this.online=!0,this.checkRequirements(),this.addListeners()}checkRequirements(){try{let t;typeof P2>"u"&&(t=P2),this.storage=t.createInstance({name:this.name})}catch{throw new Error("localForage lib not loaded")}}addListeners(){this._status=this.status.bind(this),window.addEventListener("online",this._status),window.addEventListener("offline",this._status)}removeListeners(){window.removeEventListener("online",this._status),window.removeEventListener("offline",this._status),this._status=void 0}status(t){let e=navigator.onLine;this.online=e,e?this.emit("online",this):this.emit("offline",this)}add(t,e){let r=t.resources.map(i=>{let{href:n}=i,s=this.resolver(n),h=window.encodeURIComponent(s);return this.storage.getItem(h).then(c=>!c||e?this.requester(s,"binary").then(l=>this.storage.setItem(h,l)):c)});return Promise.all(r)}put(t,e,r){let i=window.encodeURIComponent(t);return this.storage.getItem(i).then(n=>n||this.requester(t,"binary",e,r).then(s=>this.storage.setItem(i,s)))}request(t,e,r,i){return this.online?this.requester(t,e,r,i).then(n=>(this.put(t),n)):this.retrieve(t,e)}retrieve(t,e){new Bt;var r,i=new Ve(t);return e||(e=i.extension),e=="blob"?r=this.getBlob(t):r=this.getText(t),r.then(n=>{var s=new Bt,h;return n?(h=this.handleResponse(n,e),s.resolve(h)):s.reject({message:"File not found in storage: "+t,stack:new Error().stack}),s.promise})}handleResponse(t,e){var r;return e=="json"?r=JSON.parse(t):ia(e)?r=Te(t,"text/xml"):e=="xhtml"?r=Te(t,"application/xhtml+xml"):e=="html"||e=="htm"?r=Te(t,"text/html"):r=t,r}getBlob(t,e){let r=window.encodeURIComponent(t);return this.storage.getItem(r).then(function(i){if(i)return e=e||Ye.lookup(t),new Blob([i],{type:e})})}getText(t,e){let r=window.encodeURIComponent(t);return e=e||Ye.lookup(t),this.storage.getItem(r).then(function(i){var n=new Bt,s=new FileReader,h;if(i)return h=new Blob([i],{type:e}),s.addEventListener("loadend",()=>{n.resolve(s.result)}),s.readAsText(h,e),n.promise})}getBase64(t,e){let r=window.encodeURIComponent(t);return e=e||Ye.lookup(t),this.storage.getItem(r).then(i=>{var n=new Bt,s=new FileReader,h;if(i)return h=new Blob([i],{type:e}),s.addEventListener("loadend",()=>{n.resolve(s.result)}),s.readAsDataURL(h,e),n.promise})}createUrl(t,e){var r=new Bt,i=window.URL||window.webkitURL||window.mozURL,n,s,h=e&&e.base64;return t in this.urlCache?(r.resolve(this.urlCache[t]),r.promise):(h?(s=this.getBase64(t),s&&s.then((function(c){this.urlCache[t]=c,r.resolve(c)}).bind(this))):(s=this.getBlob(t),s&&s.then((function(c){n=i.createObjectURL(c),this.urlCache[t]=n,r.resolve(n)}).bind(this))),s||r.reject({message:"File not found in storage: "+t,stack:new Error().stack}),r.promise)}revokeUrl(t){var e=window.URL||window.webkitURL||window.mozURL,r=this.urlCache[t];r&&e.revokeObjectURL(r)}destroy(){var t=window.URL||window.webkitURL||window.mozURL;for(let e in this.urlCache)t.revokeObjectURL(e);this.urlCache={},this.removeListeners()}};Re(qs.prototype);class M1{constructor(t){this.interactive="",this.fixedLayout="",this.openToSpread="",this.orientationLock="",t&&this.parse(t)}parse(t){if(!t)return this;const e=Wt(t,"display_options");return e?(Oe(e,"option").forEach(i=>{let n="";switch(i.childNodes.length&&(n=i.childNodes[0].nodeValue),i.attributes.name.value){case"interactive":this.interactive=n;break;case"fixed-layout":this.fixedLayout=n;break;case"open-to-spread":this.openToSpread=n;break;case"orientation-lock":this.orientationLock=n;break}}),this):this}destroy(){this.interactive=void 0,this.fixedLayout=void 0,this.openToSpread=void 0,this.orientationLock=void 0}}const z2="META-INF/container.xml",Lh="META-INF/com.apple.ibooks.display-options.xml",Ee={BINARY:"binary",BASE64:"base64",EPUB:"epub",OPF:"opf",MANIFEST:"json",DIRECTORY:"directory"};let B1=class{constructor(t,e){typeof e>"u"&&typeof t!="string"&&!(t instanceof Blob)&&!(t instanceof ArrayBuffer)&&(e=t,t=void 0),this.settings=de(this.settings||{},{requestMethod:void 0,requestCredentials:void 0,requestHeaders:void 0,encoding:void 0,replacements:void 0,canonical:void 0,openAs:void 0,store:void 0}),de(this.settings,e),this.opening=new Bt,this.opened=this.opening.promise,this.isOpen=!1,this.loading={manifest:new Bt,spine:new Bt,metadata:new Bt,cover:new Bt,navigation:new Bt,pageList:new Bt,resources:new Bt,displayOptions:new Bt},this.loaded={manifest:this.loading.manifest.promise,spine:this.loading.spine.promise,metadata:this.loading.metadata.promise,cover:this.loading.cover.promise,navigation:this.loading.navigation.promise,pageList:this.loading.pageList.promise,resources:this.loading.resources.promise,displayOptions:this.loading.displayOptions.promise},this.ready=Promise.all([this.loaded.manifest,this.loaded.spine,this.loaded.metadata,this.loaded.cover,this.loaded.navigation,this.loaded.resources,this.loaded.displayOptions]),this.isRendered=!1,this.request=this.settings.requestMethod||na,this.spine=new W0,this.locations=new Bs(this.spine,this.load.bind(this)),this.navigation=void 0,this.pageList=void 0,this.url=void 0,this.path=void 0,this.archived=!1,this.archive=void 0,this.storage=void 0,this.resources=void 0,this.rendition=void 0,this.container=void 0,this.packaging=void 0,this.displayOptions=void 0,this.settings.store&&this.store(this.settings.store),t&&this.open(t,this.settings.openAs).catch(r=>{var i=new Error("Cannot load book at "+t);this.emit(ct.BOOK.OPEN_FAILED,i)})}open(t,e){var r,i=e||this.determineType(t);return i===Ee.BINARY?(this.archived=!0,this.url=new Se("/",""),r=this.openEpub(t)):i===Ee.BASE64?(this.archived=!0,this.url=new Se("/",""),r=this.openEpub(t,i)):i===Ee.EPUB?(this.archived=!0,this.url=new Se("/",""),r=this.request(t,"binary",this.settings.requestCredentials,this.settings.requestHeaders).then(this.openEpub.bind(this))):i==Ee.OPF?(this.url=new Se(t),r=this.openPackaging(this.url.Path.toString())):i==Ee.MANIFEST?(this.url=new Se(t),r=this.openManifest(this.url.Path.toString())):(this.url=new Se(t),r=this.openContainer(z2).then(this.openPackaging.bind(this))),r}openEpub(t,e){return this.unarchive(t,e||this.settings.encoding).then(()=>this.openContainer(z2)).then(r=>this.openPackaging(r))}openContainer(t){return this.load(t).then(e=>(this.container=new j0(e),this.resolve(this.container.packagePath)))}openPackaging(t){return this.path=new Ve(t),this.load(t).then(e=>(this.packaging=new m2(e),this.unpack(this.packaging)))}openManifest(t){return this.path=new Ve(t),this.load(t).then(e=>(this.packaging=new m2,this.packaging.load(e),this.unpack(this.packaging)))}load(t){var e=this.resolve(t);return this.archived?this.archive.request(e):this.request(e,null,this.settings.requestCredentials,this.settings.requestHeaders)}resolve(t,e){if(t){var r=t,i=t.indexOf("://")>-1;return i?t:(this.path&&(r=this.path.resolve(t)),e!=!1&&this.url&&(r=this.url.resolve(r)),r)}}canonical(t){var e=t;return t?(this.settings.canonical?e=this.settings.canonical(t):e=this.resolve(t,!0),e):""}determineType(t){var e,r,i;if(this.settings.encoding==="base64")return Ee.BASE64;if(typeof t!="string")return Ee.BINARY;if(e=new Se(t),r=e.path(),i=r.extension,i&&(i=i.replace(/\?.*$/,"")),!i)return Ee.DIRECTORY;if(i==="epub")return Ee.EPUB;if(i==="opf")return Ee.OPF;if(i==="json")return Ee.MANIFEST}unpack(t){this.package=t,this.packaging.metadata.layout===""?this.load(this.url.resolve(Lh)).then(e=>{this.displayOptions=new M1(e),this.loading.displayOptions.resolve(this.displayOptions)}).catch(e=>{this.displayOptions=new M1,this.loading.displayOptions.resolve(this.displayOptions)}):(this.displayOptions=new M1,this.loading.displayOptions.resolve(this.displayOptions)),this.spine.unpack(this.packaging,this.resolve.bind(this),this.canonical.bind(this)),this.resources=new Y0(this.packaging.manifest,{archive:this.archive,resolver:this.resolve.bind(this),request:this.request.bind(this),replacements:this.settings.replacements||(this.archived?"blobUrl":"base64")}),this.loadNavigation(this.packaging).then(()=>{this.loading.navigation.resolve(this.navigation)}),this.packaging.coverPath&&(this.cover=this.resolve(this.packaging.coverPath)),this.loading.manifest.resolve(this.packaging.manifest),this.loading.metadata.resolve(this.packaging.metadata),this.loading.spine.resolve(this.spine),this.loading.cover.resolve(this.cover),this.loading.resources.resolve(this.resources),this.loading.pageList.resolve(this.pageList),this.isOpen=!0,this.archived||this.settings.replacements&&this.settings.replacements!="none"?this.replacements().then(()=>{this.loaded.displayOptions.then(()=>{this.opening.resolve(this)})}).catch(e=>{console.error(e)}):this.loaded.displayOptions.then(()=>{this.opening.resolve(this)})}loadNavigation(t){let e=t.navPath||t.ncxPath,r=t.toc;return r?new Promise((i,n)=>{this.navigation=new Qa(r),t.pageList&&(this.pageList=new t1(t.pageList)),i(this.navigation)}):e?this.load(e,"xml").then(i=>(this.navigation=new Qa(i),this.pageList=new t1(i),this.navigation)):new Promise((i,n)=>{this.navigation=new Qa,this.pageList=new t1,i(this.navigation)})}section(t){return this.spine.get(t)}renderTo(t,e){return this.rendition=new N1(this,e),this.rendition.attachTo(t),this.rendition}setRequestCredentials(t){this.settings.requestCredentials=t}setRequestHeaders(t){this.settings.requestHeaders=t}unarchive(t,e){return this.archive=new Dh,this.archive.open(t,e)}store(t){let e=this.settings.replacements&&this.settings.replacements!=="none",r=this.url,i=this.settings.requestMethod||na.bind(this);return this.storage=new qs(t,i,this.resolve.bind(this)),this.request=this.storage.request.bind(this.storage),this.opened.then(()=>{this.archived&&(this.storage.requester=this.archive.request.bind(this.archive));let n=(s,h)=>{h.output=this.resources.substitute(s,h.url)};this.resources.settings.replacements=e||"blobUrl",this.resources.replacements().then(()=>this.resources.replaceCss()),this.storage.on("offline",()=>{this.url=new Se("/",""),this.spine.hooks.serialize.register(n)}),this.storage.on("online",()=>{this.url=r,this.spine.hooks.serialize.deregister(n)})}),this.storage}coverUrl(){return this.loaded.cover.then(()=>this.cover?this.archived?this.archive.createUrl(this.cover):this.cover:null)}replacements(){return this.spine.hooks.serialize.register((t,e)=>{e.output=this.resources.substitute(t,e.url)}),this.resources.replacements().then(()=>this.resources.replaceCss())}getRange(t){var e=new Ot(t),r=this.spine.get(e.spinePos),i=this.load.bind(this);return r?r.load(i).then(function(n){var s=e.toRange(r.document);return s}):new Promise((n,s)=>{s("CFI could not be found")})}key(t){var e=t||this.packaging.metadata.identifier||this.url.filename;return`epubjs:${Ea}:${e}`}destroy(){this.opened=void 0,this.loading=void 0,this.loaded=void 0,this.ready=void 0,this.isOpen=!1,this.isRendered=!1,this.spine&&this.spine.destroy(),this.locations&&this.locations.destroy(),this.pageList&&this.pageList.destroy(),this.archive&&this.archive.destroy(),this.resources&&this.resources.destroy(),this.container&&this.container.destroy(),this.packaging&&this.packaging.destroy(),this.rendition&&this.rendition.destroy(),this.displayOptions&&this.displayOptions.destroy(),this.spine=void 0,this.locations=void 0,this.pageList=void 0,this.archive=void 0,this.resources=void 0,this.container=void 0,this.packaging=void 0,this.rendition=void 0,this.navigation=void 0,this.url=void 0,this.path=void 0,this.archived=!1}};Re(B1.prototype);function ze(v,t){return new B1(v,t)}ze.VERSION=Ea;typeof global<"u"&&(global.EPUBJS_VERSION=Ea);ze.Book=B1;ze.Rendition=N1;ze.Contents=R1;ze.CFI=Ot;ze.utils=V0;/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=(v,t,e=[])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",v);return Object.keys(t).forEach(i=>{r.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const n=Zs(...i);r.appendChild(n)}),r};var Rh=([v,t,e])=>Zs(v,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=v=>Array.from(v.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),Nh=v=>typeof v=="string"?v:!v||!v.class?"":v.class&&typeof v.class=="string"?v.class.split(" "):v.class&&Array.isArray(v.class)?v.class:"",Bh=v=>v.flatMap(Nh).map(e=>e.trim()).filter(Boolean).filter((e,r,i)=>i.indexOf(e)===r).join(" "),Oh=v=>v.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,r)=>e.toUpperCase()+r.toLowerCase()),F2=(v,{nameAttr:t,icons:e,attrs:r})=>{var L;const i=v.getAttribute(t);if(i==null)return;const n=Oh(i),s=e[n];if(!s)return console.warn(`${v.outerHTML} icon name was not found in the provided icons object.`);const h=Hh(v),[c,l,f]=s,p={...l,"data-lucide":i,...r,...h},w=Bh(["lucide",`lucide-${i}`,h,r]);w&&Object.assign(p,{class:w});const M=Rh([c,p,f]);return(L=v.parentNode)==null?void 0:L.replaceChild(M,v)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",a,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",a,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",a,[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",a,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",a,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",a,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",a,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",a,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",a,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",a,[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",a,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",a,[["path",{d:"M17 12H7"}],["path",{d:"M19 18H5"}],["path",{d:"M21 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",a,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",a,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=["svg",a,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=["svg",a,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=["svg",a,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=["svg",a,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=["svg",a,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=["svg",a,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=["svg",a,[["path",{d:"M3 12h18"}],["path",{d:"M3 18h18"}],["path",{d:"M3 6h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=["svg",a,[["path",{d:"M15 12H3"}],["path",{d:"M17 18H3"}],["path",{d:"M21 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=["svg",a,[["path",{d:"M21 12H9"}],["path",{d:"M21 18H7"}],["path",{d:"M21 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=["svg",a,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=["svg",a,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=["svg",a,[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=["svg",a,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=["svg",a,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=["svg",a,[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=["svg",a,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=["svg",a,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=["svg",a,[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=["svg",a,[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=["svg",a,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=["svg",a,[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=["svg",a,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=["svg",a,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=["svg",a,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=["svg",a,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=["svg",a,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=["svg",a,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=["svg",a,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=["svg",a,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=["svg",a,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=["svg",a,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=["svg",a,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=["svg",a,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=["svg",a,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=["svg",a,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=["svg",a,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=["svg",a,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=["svg",a,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=["svg",a,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",a,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",a,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",a,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",a,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",a,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",a,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",a,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",a,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",a,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",a,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",a,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",a,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",a,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",a,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=["svg",a,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",a,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",a,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",a,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",a,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",a,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",a,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",a,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=["svg",a,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",a,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",a,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",a,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",a,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",a,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",a,[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",a,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",a,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",a,[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",a,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",a,[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",a,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",a,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",a,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",a,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",a,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",a,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",a,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",a,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",a,[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",a,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",a,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",a,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=["svg",a,[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=["svg",a,[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",a,[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",a,[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",a,[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",a,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",a,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",a,[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",a,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",a,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",a,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",a,[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",a,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",a,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",a,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",a,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",a,[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",a,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",a,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",a,[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",a,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=["svg",a,[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",a,[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",a,[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",a,[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["circle",{cx:"14",cy:"8",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",a,[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",a,[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",a,[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",a,[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",a,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",a,[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",a,[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",a,[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",a,[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",a,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",a,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",a,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",a,[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",a,[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",a,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",a,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",a,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=["svg",a,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",a,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",a,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",a,[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",a,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",a,[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",a,[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",a,[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",a,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",a,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",a,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",a,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",a,[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",a,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",a,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",a,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",a,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",a,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",a,[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",a,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",a,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",a,[["path",{d:"M11 14h1v4"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",a,[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",a,[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",a,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",a,[["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"M16 2v4"}],["path",{d:"m16.9 15.2-.4-.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",a,[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",a,[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",a,[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",a,[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",a,[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M16 2v4"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{d:"M3 10h4"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",a,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",a,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",a,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",a,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",a,[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",a,[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=["svg",a,[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",a,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",a,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",a,[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",a,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",a,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",a,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",a,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",a,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",a,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",a,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",a,[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",a,[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=["svg",a,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",a,[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=["svg",a,[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",a,[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",a,[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",a,[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",a,[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=["svg",a,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=["svg",a,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",a,[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=["svg",a,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=["svg",a,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=["svg",a,[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",a,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",a,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",a,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",a,[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",a,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",a,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",a,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",a,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",a,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",a,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",a,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",a,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",a,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",a,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",a,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",a,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",a,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",a,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",a,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",a,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",a,[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",a,[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",a,[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",a,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",a,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",a,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",a,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",a,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",a,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",a,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",a,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",a,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",a,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",a,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",a,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",a,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",a,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",a,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",a,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",a,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",a,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",a,[["path",{d:"M12 6v6l4 2"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}],["path",{d:"M20 11.5v6"}],["path",{d:"M20 21.5h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",a,[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",a,[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",a,[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",a,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",a,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",a,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",a,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",a,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",a,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",a,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",a,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",a,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",a,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",a,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",a,[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",a,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",a,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",a,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",a,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",a,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",a,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",a,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",a,[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",a,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",a,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",a,[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",a,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",a,[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",a,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",a,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=["svg",a,[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",a,[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",a,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",a,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",a,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",a,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",a,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",a,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",a,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",a,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",a,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",a,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",a,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",a,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",a,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",a,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",a,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",a,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",a,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",a,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",a,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",a,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",a,[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",a,[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",a,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",a,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",a,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",a,[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",a,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",a,[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",a,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",a,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",a,[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",a,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",a,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",a,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",a,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",a,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",a,[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",a,[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",a,[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",a,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",a,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",a,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",a,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",a,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",a,[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",a,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",a,[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",a,[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",a,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",a,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",a,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",a,[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",a,[["path",{d:"M14.4 14.4 9.6 9.6"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"}],["path",{d:"m21.5 21.5-1.4-1.4"}],["path",{d:"M3.9 3.9 2.5 2.5"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",a,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",a,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",a,[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=["svg",a,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",a,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",a,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",a,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=["svg",a,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",a,[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",a,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",a,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",a,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",a,[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",a,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",a,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",a,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",a,[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",a,[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",a,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",a,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",a,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",a,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",a,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",a,[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",a,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",a,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",a,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",a,[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",a,[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",a,[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",a,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",a,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",a,[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3.2 12.9-.9-.4"}],["path",{d:"m3.2 15.1-.9.4"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.9 11.2-.4-.9"}],["path",{d:"m4.9 16.8-.4.9"}],["path",{d:"m7.5 10.3-.4.9"}],["path",{d:"m7.5 17.7-.4-.9"}],["path",{d:"m9.7 12.5-.9.4"}],["path",{d:"m9.7 15.5-.9-.4"}],["circle",{cx:"6",cy:"14",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",a,[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}],["path",{d:"M8 18v-7.7L16 9v7"}],["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=["svg",a,[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=["svg",a,[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",a,[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",a,[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",a,[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",a,[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",a,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 18a3 3 0 1 0-6 0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",a,[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",a,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",a,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",a,[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",a,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",a,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",a,[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",a,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",a,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",a,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",a,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",a,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",a,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",a,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",a,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",a,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",a,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",a,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",a,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",a,[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",a,[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",a,[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",a,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",a,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",a,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",a,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",a,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",a,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",a,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",a,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",a,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",a,[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",a,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",a,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",a,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",a,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",a,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",a,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",a,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",a,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",a,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",a,[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",a,[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",a,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",a,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",a,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",a,[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",a,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",a,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",a,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",a,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",a,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",a,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",a,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",a,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",a,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",a,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",a,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",a,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",a,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",a,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",a,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",a,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",a,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",a,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",a,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",a,[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",a,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",a,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",a,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",a,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",a,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",a,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",a,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",a,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",a,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",a,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",a,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",a,[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",a,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",a,[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",a,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",a,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",a,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",a,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",a,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=["svg",a,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",a,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=["svg",a,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",a,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",a,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",a,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",a,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",a,[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",a,[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",a,[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",a,[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",a,[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",a,[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",a,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",a,[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",a,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",a,[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",a,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",a,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",a,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",a,[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",a,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",a,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",a,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",a,[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",a,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",a,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",a,[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",a,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",a,[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",a,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",a,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",a,[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",a,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",a,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",a,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",a,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",a,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",a,[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",a,[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",a,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",a,[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",a,[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=["svg",a,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",a,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",a,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",a,[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",a,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",a,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",a,[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",a,[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",a,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",a,[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",a,[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",a,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",a,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=["svg",a,[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m7 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=["svg",a,[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m3 8 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",a,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",a,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",a,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",a,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",a,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",a,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",a,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",a,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",a,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",a,[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",a,[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",a,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",a,[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",a,[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",a,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",a,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",a,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",a,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",a,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",a,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",a,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",a,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",a,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",a,[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=["svg",a,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",a,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",a,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",a,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",a,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",a,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",a,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",a,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",a,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",a,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",a,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",a,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",a,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",a,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",a,[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",a,[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M4 11h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",a,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",a,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",a,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",a,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",a,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",a,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",a,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",a,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",a,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",a,[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",a,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",a,[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",a,[["path",{d:"M10 18h4"}],["path",{d:"M11 6H3"}],["path",{d:"M15 6h6"}],["path",{d:"M18 9V3"}],["path",{d:"M7 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",a,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",a,[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"M4 10h2"}],["path",{d:"M4 6h1v4"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",a,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",a,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",a,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",a,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",a,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",a,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",a,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",a,[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",a,[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",a,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=["svg",a,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",a,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",a,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",a,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",a,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",a,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",a,[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",a,[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",a,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",a,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",a,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",a,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",a,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",a,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",a,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",a,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",a,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",a,[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",a,[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",a,[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",a,[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",a,[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",a,[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",a,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",a,[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",a,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",a,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",a,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",a,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",a,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",a,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",a,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",a,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",a,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",a,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",a,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",a,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",a,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=["svg",a,[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=["svg",a,[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",a,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=["svg",a,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=["svg",a,[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=["svg",a,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=["svg",a,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",a,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",a,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",a,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=["svg",a,[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",a,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",a,[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",a,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",a,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",a,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",a,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",a,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",a,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",a,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",a,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",a,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",a,[["path",{d:"M12 17v4"}],["path",{d:"m15.2 4.9-.9-.4"}],["path",{d:"m15.2 7.1-.9.4"}],["path",{d:"m16.9 3.2-.4-.9"}],["path",{d:"m16.9 8.8-.4.9"}],["path",{d:"m19.5 2.3-.4.9"}],["path",{d:"m19.5 9.7-.4-.9"}],["path",{d:"m21.7 4.5-.9.4"}],["path",{d:"m21.7 7.5-.9-.4"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",a,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",a,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",a,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",a,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",a,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",a,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",a,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",a,[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",a,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",a,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",a,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",a,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",a,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",a,[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",a,[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",a,[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",a,[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",a,[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",a,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=["svg",a,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",a,[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",a,[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",a,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",a,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",a,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",a,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",a,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",a,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",a,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",a,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",a,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",a,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",a,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",a,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",a,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",a,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",a,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",a,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",a,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",a,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",a,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",a,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",a,[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",a,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",a,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",a,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",a,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",a,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",a,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=["svg",a,[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",a,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=["svg",a,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=["svg",a,[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",a,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",a,[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",a,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",a,[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",a,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",a,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",a,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",a,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",a,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",a,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",a,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",a,[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"}],["path",{d:"m7.5 4.27 9 5.15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",a,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",a,[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=["svg",a,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",a,[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",a,[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",a,[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",a,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",a,[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",a,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",a,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",a,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=["svg",a,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",a,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",a,[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=["svg",a,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",a,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=["svg",a,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=["svg",a,[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=["svg",a,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=["svg",a,[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=["svg",a,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=["svg",a,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=["svg",a,[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=["svg",a,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=["svg",a,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=["svg",a,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=["svg",a,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=["svg",a,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=["svg",a,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=["svg",a,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=["svg",a,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=["svg",a,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=["svg",a,[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=["svg",a,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=["svg",a,[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=["svg",a,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=["svg",a,[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=["svg",a,[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=["svg",a,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=["svg",a,[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=["svg",a,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=["svg",a,[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=["svg",a,[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=["svg",a,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=["svg",a,[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=["svg",a,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=["svg",a,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=["svg",a,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=["svg",a,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=["svg",a,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",a,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=["svg",a,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=["svg",a,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=["svg",a,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=["svg",a,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=["svg",a,[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=["svg",a,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=["svg",a,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=["svg",a,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=["svg",a,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=["svg",a,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=["svg",a,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=["svg",a,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=["svg",a,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=["svg",a,[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=["svg",a,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=["svg",a,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=["svg",a,[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=["svg",a,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=["svg",a,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",a,[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",a,[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",a,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",a,[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",a,[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",a,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",a,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",a,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",a,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",a,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",a,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",a,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",a,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",a,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",a,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",a,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",a,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",a,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",a,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",a,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",a,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",a,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",a,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",a,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",a,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",a,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",a,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",a,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",a,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",a,[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",a,[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",a,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",a,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",a,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",a,[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",a,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",a,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",a,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=["svg",a,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",a,[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",a,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",a,[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",a,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",a,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",a,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",a,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=["svg",a,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=["svg",a,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=["svg",a,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=["svg",a,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=["svg",a,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=["svg",a,[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=["svg",a,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=["svg",a,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=["svg",a,[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=["svg",a,[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=["svg",a,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=["svg",a,[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=["svg",a,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=["svg",a,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=["svg",a,[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=["svg",a,[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=["svg",a,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=["svg",a,[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=["svg",a,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=["svg",a,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=["svg",a,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=["svg",a,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",a,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",a,[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=["svg",a,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=["svg",a,[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",a,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",a,[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",a,[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",a,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",a,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",a,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=["svg",a,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",a,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",a,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",a,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",a,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",a,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",a,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",a,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",a,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",a,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",a,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=["svg",a,[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=["svg",a,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=["svg",a,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=["svg",a,[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=["svg",a,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=["svg",a,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=["svg",a,[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=["svg",a,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=["svg",a,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=["svg",a,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=["svg",a,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=["svg",a,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=["svg",a,[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=["svg",a,[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=["svg",a,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=["svg",a,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=["svg",a,[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=["svg",a,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=["svg",a,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=["svg",a,[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=["svg",a,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=["svg",a,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=["svg",a,[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=["svg",a,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=["svg",a,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=["svg",a,[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=["svg",a,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",a,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=["svg",a,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=["svg",a,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=["svg",a,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=["svg",a,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=["svg",a,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=["svg",a,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=["svg",a,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=["svg",a,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=["svg",a,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=["svg",a,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",a,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=["svg",a,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=["svg",a,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=["svg",a,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=["svg",a,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=["svg",a,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=["svg",a,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=["svg",a,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",a,[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",a,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",a,[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",a,[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",a,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",a,[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",a,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=["svg",a,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=["svg",a,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",a,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",a,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",a,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",a,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=["svg",a,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=["svg",a,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=["svg",a,[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=["svg",a,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=["svg",a,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=["svg",a,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=["svg",a,[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=["svg",a,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=["svg",a,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=["svg",a,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=["svg",a,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=["svg",a,[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=["svg",a,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=["svg",a,[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=["svg",a,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=["svg",a,[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=["svg",a,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=["svg",a,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=["svg",a,[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=["svg",a,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=["svg",a,[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=["svg",a,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=["svg",a,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=["svg",a,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=["svg",a,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=["svg",a,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=["svg",a,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=["svg",a,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=["svg",a,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=["svg",a,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=["svg",a,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=["svg",a,[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=["svg",a,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=["svg",a,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=["svg",a,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=["svg",a,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=["svg",a,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=["svg",a,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=["svg",a,[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=["svg",a,[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=["svg",a,[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=["svg",a,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=["svg",a,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=["svg",a,[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=["svg",a,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=["svg",a,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=["svg",a,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=["svg",a,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=["svg",a,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=["svg",a,[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=["svg",a,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=["svg",a,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=["svg",a,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=["svg",a,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=["svg",a,[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=["svg",a,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=["svg",a,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=["svg",a,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",a,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=["svg",a,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=["svg",a,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=["svg",a,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=["svg",a,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=["svg",a,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=["svg",a,[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",a,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=["svg",a,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=["svg",a,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=["svg",a,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=["svg",a,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=["svg",a,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=["svg",a,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=["svg",a,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=["svg",a,[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=["svg",a,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=["svg",a,[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=["svg",a,[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=["svg",a,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=["svg",a,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=["svg",a,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=["svg",a,[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=["svg",a,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=["svg",a,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=["svg",a,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=["svg",a,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=["svg",a,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=["svg",a,[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=["svg",a,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=["svg",a,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=["svg",a,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=["svg",a,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",a,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=["svg",a,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=["svg",a,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",a,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=["svg",a,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=["svg",a,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=["svg",a,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=["svg",a,[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=["svg",a,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",a,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=["svg",a,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=["svg",a,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=["svg",a,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=["svg",a,[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=["svg",a,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=["svg",a,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",a,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=["svg",a,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=["svg",a,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=["svg",a,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=["svg",a,[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=["svg",a,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=["svg",a,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=["svg",a,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=["svg",a,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=["svg",a,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=["svg",a,[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=["svg",a,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=["svg",a,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=["svg",a,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=["svg",a,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",a,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=["svg",a,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=["svg",a,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=["svg",a,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=["svg",a,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=["svg",a,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=["svg",a,[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=["svg",a,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",a,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",a,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=["svg",a,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=["svg",a,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",a,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=["svg",a,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",a,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",a,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=["svg",a,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=["svg",a,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=["svg",a,[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=["svg",a,[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=["svg",a,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=["svg",a,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=["svg",a,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=["svg",a,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=["svg",a,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=["svg",a,[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=["svg",a,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=["svg",a,[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=["svg",a,[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=["svg",a,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=["svg",a,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=["svg",a,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",a,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=["svg",a,[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=["svg",a,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=["svg",a,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=["svg",a,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=["svg",a,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=["svg",a,[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=["svg",a,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=["svg",a,[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=["svg",a,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=["svg",a,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=["svg",a,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=["svg",a,[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=["svg",a,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=["svg",a,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=["svg",a,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=["svg",a,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=["svg",a,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=["svg",a,[["path",{d:"M12 20h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=["svg",a,[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=["svg",a,[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=["svg",a,[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=["svg",a,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=["svg",a,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=["svg",a,[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=["svg",a,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=["svg",a,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=["svg",a,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=["svg",a,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=["svg",a,[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=["svg",a,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=["svg",a,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Vh,AArrowUp:Ih,ALargeSmall:Ph,Accessibility:zh,Activity:Fh,ActivitySquare:an,AirVent:Uh,Airplay:qh,AlarmCheck:U2,AlarmClock:Wh,AlarmClockCheck:U2,AlarmClockMinus:q2,AlarmClockOff:Zh,AlarmClockPlus:Z2,AlarmMinus:q2,AlarmPlus:Z2,AlarmSmoke:jh,Album:Gh,AlertCircle:mr,AlertOctagon:Ri,AlertTriangle:ns,AlignCenter:Yh,AlignCenterHorizontal:$h,AlignCenterVertical:Xh,AlignEndHorizontal:Kh,AlignEndVertical:Jh,AlignHorizontalDistributeCenter:Qh,AlignHorizontalDistributeEnd:to,AlignHorizontalDistributeStart:eo,AlignHorizontalJustifyCenter:ao,AlignHorizontalJustifyEnd:ro,AlignHorizontalJustifyStart:io,AlignHorizontalSpaceAround:no,AlignHorizontalSpaceBetween:so,AlignJustify:ho,AlignLeft:oo,AlignRight:co,AlignStartHorizontal:lo,AlignStartVertical:uo,AlignVerticalDistributeCenter:po,AlignVerticalDistributeEnd:fo,AlignVerticalDistributeStart:vo,AlignVerticalJustifyCenter:go,AlignVerticalJustifyEnd:mo,AlignVerticalJustifyStart:Mo,AlignVerticalSpaceAround:yo,AlignVerticalSpaceBetween:xo,Ambulance:wo,Ampersand:bo,Ampersands:Ao,Amphora:Co,Anchor:_o,Angry:Eo,Annoyed:So,Antenna:Do,Anvil:ko,Aperture:To,AppWindow:Ro,AppWindowMac:Lo,Apple:Ho,Archive:Oo,ArchiveRestore:No,ArchiveX:Bo,AreaChart:ir,Armchair:Vo,ArrowBigDown:Po,ArrowBigDownDash:Io,ArrowBigLeft:Fo,ArrowBigLeftDash:zo,ArrowBigRight:qo,ArrowBigRightDash:Uo,ArrowBigUp:Wo,ArrowBigUpDash:Zo,ArrowDown:ed,ArrowDown01:jo,ArrowDown10:Go,ArrowDownAZ:W2,ArrowDownAz:W2,ArrowDownCircle:Mr,ArrowDownFromLine:$o,ArrowDownLeft:Xo,ArrowDownLeftFromCircle:xr,ArrowDownLeftFromSquare:on,ArrowDownLeftSquare:rn,ArrowDownNarrowWide:Yo,ArrowDownRight:Ko,ArrowDownRightFromCircle:wr,ArrowDownRightFromSquare:dn,ArrowDownRightSquare:nn,ArrowDownSquare:sn,ArrowDownToDot:Jo,ArrowDownToLine:Qo,ArrowDownUp:td,ArrowDownWideNarrow:j2,ArrowDownZA:G2,ArrowDownZa:G2,ArrowLeft:nd,ArrowLeftCircle:yr,ArrowLeftFromLine:ad,ArrowLeftRight:rd,ArrowLeftSquare:hn,ArrowLeftToLine:id,ArrowRight:dd,ArrowRightCircle:Cr,ArrowRightFromLine:sd,ArrowRightLeft:hd,ArrowRightSquare:un,ArrowRightToLine:od,ArrowUp:yd,ArrowUp01:cd,ArrowUp10:ld,ArrowUpAZ:$2,ArrowUpAz:$2,ArrowUpCircle:_r,ArrowUpDown:ud,ArrowUpFromDot:pd,ArrowUpFromLine:fd,ArrowUpLeft:vd,ArrowUpLeftFromCircle:br,ArrowUpLeftFromSquare:cn,ArrowUpLeftSquare:pn,ArrowUpNarrowWide:X2,ArrowUpRight:gd,ArrowUpRightFromCircle:Ar,ArrowUpRightFromSquare:ln,ArrowUpRightSquare:fn,ArrowUpSquare:vn,ArrowUpToLine:md,ArrowUpWideNarrow:Md,ArrowUpZA:Y2,ArrowUpZa:Y2,ArrowsUpFromLine:xd,Asterisk:wd,AsteriskSquare:gn,AtSign:bd,Atom:Ad,AudioLines:Cd,AudioWaveform:_d,Award:Ed,Axe:Sd,Axis3D:K2,Axis3d:K2,Baby:Dd,Backpack:kd,Badge:Wd,BadgeAlert:Td,BadgeCent:Ld,BadgeCheck:J2,BadgeDollarSign:Rd,BadgeEuro:Hd,BadgeHelp:Nd,BadgeIndianRupee:Bd,BadgeInfo:Od,BadgeJapaneseYen:Vd,BadgeMinus:Id,BadgePercent:Pd,BadgePlus:zd,BadgePoundSterling:Fd,BadgeRussianRuble:Ud,BadgeSwissFranc:qd,BadgeX:Zd,BaggageClaim:jd,Ban:Gd,Banana:$d,Bandage:Xd,Banknote:Yd,BarChart:ur,BarChart2:pr,BarChart3:cr,BarChart4:dr,BarChartBig:or,BarChartHorizontal:sr,BarChartHorizontalBig:nr,Barcode:Kd,Baseline:Jd,Bath:Qd,Battery:nc,BatteryCharging:tc,BatteryFull:ec,BatteryLow:ac,BatteryMedium:rc,BatteryWarning:ic,Beaker:sc,Bean:oc,BeanOff:hc,Bed:lc,BedDouble:dc,BedSingle:cc,Beef:uc,Beer:fc,BeerOff:pc,Bell:wc,BellDot:vc,BellElectric:gc,BellMinus:mc,BellOff:Mc,BellPlus:yc,BellRing:xc,BetweenHorizonalEnd:Q2,BetweenHorizonalStart:tr,BetweenHorizontalEnd:Q2,BetweenHorizontalStart:tr,BetweenVerticalEnd:bc,BetweenVerticalStart:Ac,BicepsFlexed:Cc,Bike:_c,Binary:Ec,Binoculars:Sc,Biohazard:Dc,Bird:kc,Bitcoin:Tc,Blend:Lc,Blinds:Rc,Blocks:Hc,Bluetooth:Vc,BluetoothConnected:Nc,BluetoothOff:Bc,BluetoothSearching:Oc,Bold:Ic,Bolt:Pc,Bomb:zc,Bone:Fc,Book:cl,BookA:Uc,BookAudio:qc,BookCheck:Zc,BookCopy:Wc,BookDashed:er,BookDown:jc,BookHeadphones:Gc,BookHeart:$c,BookImage:Xc,BookKey:Yc,BookLock:Kc,BookMarked:Jc,BookMinus:Qc,BookOpen:al,BookOpenCheck:tl,BookOpenText:el,BookPlus:rl,BookTemplate:er,BookText:il,BookType:nl,BookUp:hl,BookUp2:sl,BookUser:ol,BookX:dl,Bookmark:vl,BookmarkCheck:ll,BookmarkMinus:ul,BookmarkPlus:pl,BookmarkX:fl,BoomBox:gl,Bot:yl,BotMessageSquare:ml,BotOff:Ml,Box:xl,BoxSelect:Sn,Boxes:wl,Braces:ar,Brackets:bl,Brain:_l,BrainCircuit:Al,BrainCog:Cl,BrickWall:El,Briefcase:Tl,BriefcaseBusiness:Sl,BriefcaseConveyorBelt:Dl,BriefcaseMedical:kl,BringToFront:Ll,Brush:Rl,Bug:Bl,BugOff:Hl,BugPlay:Nl,Building:Vl,Building2:Ol,Bus:Pl,BusFront:Il,Cable:Fl,CableCar:zl,Cake:ql,CakeSlice:Ul,Calculator:Zl,Calendar:lu,Calendar1:Wl,CalendarArrowDown:jl,CalendarArrowUp:Gl,CalendarCheck:Xl,CalendarCheck2:$l,CalendarClock:Yl,CalendarCog:Kl,CalendarDays:Jl,CalendarFold:Ql,CalendarHeart:tu,CalendarMinus:au,CalendarMinus2:eu,CalendarOff:ru,CalendarPlus:nu,CalendarPlus2:iu,CalendarRange:su,CalendarSearch:hu,CalendarSync:ou,CalendarX:cu,CalendarX2:du,Camera:pu,CameraOff:uu,CandlestickChart:hr,Candy:gu,CandyCane:fu,CandyOff:vu,Cannabis:mu,Captions:rr,CaptionsOff:Mu,Car:wu,CarFront:yu,CarTaxiFront:xu,Caravan:bu,Carrot:Au,CaseLower:Cu,CaseSensitive:_u,CaseUpper:Eu,CassetteTape:Su,Cast:Du,Castle:ku,Cat:Tu,Cctv:Lu,ChartArea:ir,ChartBar:sr,ChartBarBig:nr,ChartBarDecreasing:Ru,ChartBarIncreasing:Hu,ChartBarStacked:Nu,ChartCandlestick:hr,ChartColumn:cr,ChartColumnBig:or,ChartColumnDecreasing:Bu,ChartColumnIncreasing:dr,ChartColumnStacked:Ou,ChartGantt:Vu,ChartLine:lr,ChartNetwork:Iu,ChartNoAxesColumn:pr,ChartNoAxesColumnDecreasing:Pu,ChartNoAxesColumnIncreasing:ur,ChartNoAxesCombined:zu,ChartNoAxesGantt:fr,ChartPie:vr,ChartScatter:gr,ChartSpline:Fu,Check:qu,CheckCheck:Uu,CheckCircle:Er,CheckCircle2:Sr,CheckSquare:Mn,CheckSquare2:yn,ChefHat:Zu,Cherry:Wu,ChevronDown:ju,ChevronDownCircle:Dr,ChevronDownSquare:xn,ChevronFirst:Gu,ChevronLast:$u,ChevronLeft:Xu,ChevronLeftCircle:kr,ChevronLeftSquare:wn,ChevronRight:Yu,ChevronRightCircle:Tr,ChevronRightSquare:bn,ChevronUp:Ku,ChevronUpCircle:Lr,ChevronUpSquare:An,ChevronsDown:Qu,ChevronsDownUp:Ju,ChevronsLeft:ap,ChevronsLeftRight:ep,ChevronsLeftRightEllipsis:tp,ChevronsRight:ip,ChevronsRightLeft:rp,ChevronsUp:sp,ChevronsUpDown:np,Chrome:hp,Church:op,Cigarette:cp,CigaretteOff:dp,Circle:wp,CircleAlert:mr,CircleArrowDown:Mr,CircleArrowLeft:yr,CircleArrowOutDownLeft:xr,CircleArrowOutDownRight:wr,CircleArrowOutUpLeft:br,CircleArrowOutUpRight:Ar,CircleArrowRight:Cr,CircleArrowUp:_r,CircleCheck:Sr,CircleCheckBig:Er,CircleChevronDown:Dr,CircleChevronLeft:kr,CircleChevronRight:Tr,CircleChevronUp:Lr,CircleDashed:lp,CircleDivide:Rr,CircleDollarSign:up,CircleDot:fp,CircleDotDashed:pp,CircleEllipsis:vp,CircleEqual:gp,CircleFadingArrowUp:mp,CircleFadingPlus:Mp,CircleGauge:Hr,CircleHelp:Nr,CircleMinus:Br,CircleOff:yp,CircleParking:Vr,CircleParkingOff:Or,CirclePause:Ir,CirclePercent:Pr,CirclePlay:zr,CirclePlus:Fr,CirclePower:Ur,CircleSlash:xp,CircleSlash2:qr,CircleSlashed:qr,CircleStop:Zr,CircleUser:jr,CircleUserRound:Wr,CircleX:Gr,CircuitBoard:bp,Citrus:Ap,Clapperboard:Cp,Clipboard:Hp,ClipboardCheck:_p,ClipboardCopy:Ep,ClipboardEdit:Xr,ClipboardList:Sp,ClipboardMinus:Dp,ClipboardPaste:kp,ClipboardPen:Xr,ClipboardPenLine:$r,ClipboardPlus:Tp,ClipboardSignature:$r,ClipboardType:Lp,ClipboardX:Rp,Clock:Xp,Clock1:Np,Clock10:Bp,Clock11:Op,Clock12:Vp,Clock2:Ip,Clock3:Pp,Clock4:zp,Clock5:Fp,Clock6:Up,Clock7:qp,Clock8:Zp,Clock9:Wp,ClockAlert:jp,ClockArrowDown:Gp,ClockArrowUp:$p,Cloud:lf,CloudAlert:Yp,CloudCog:Kp,CloudDownload:Yr,CloudDrizzle:Jp,CloudFog:Qp,CloudHail:tf,CloudLightning:ef,CloudMoon:rf,CloudMoonRain:af,CloudOff:nf,CloudRain:hf,CloudRainWind:sf,CloudSnow:of,CloudSun:cf,CloudSunRain:df,CloudUpload:Kr,Cloudy:uf,Clover:pf,Club:ff,Code:vf,Code2:Jr,CodeSquare:Cn,CodeXml:Jr,Codepen:gf,Codesandbox:mf,Coffee:Mf,Cog:yf,Coins:xf,Columns:Qr,Columns2:Qr,Columns3:ti,Columns4:wf,Combine:bf,Command:Af,Compass:Cf,Component:_f,Computer:Ef,ConciergeBell:Sf,Cone:Df,Construction:kf,Contact:Tf,Contact2:ei,ContactRound:ei,Container:Lf,Contrast:Rf,Cookie:Hf,CookingPot:Nf,Copy:zf,CopyCheck:Bf,CopyMinus:Of,CopyPlus:Vf,CopySlash:If,CopyX:Pf,Copyleft:Ff,Copyright:Uf,CornerDownLeft:qf,CornerDownRight:Zf,CornerLeftDown:Wf,CornerLeftUp:jf,CornerRightDown:Gf,CornerRightUp:$f,CornerUpLeft:Xf,CornerUpRight:Yf,Cpu:Kf,CreativeCommons:Jf,CreditCard:Qf,Croissant:t4,Crop:e4,Cross:a4,Crosshair:r4,Crown:i4,Cuboid:n4,CupSoda:s4,CurlyBraces:ar,Currency:h4,Cylinder:o4,Dam:d4,Database:u4,DatabaseBackup:c4,DatabaseZap:l4,Delete:p4,Dessert:f4,Diameter:v4,Diamond:M4,DiamondMinus:g4,DiamondPercent:ai,DiamondPlus:m4,Dice1:y4,Dice2:x4,Dice3:w4,Dice4:b4,Dice5:A4,Dice6:C4,Dices:_4,Diff:E4,Disc:T4,Disc2:S4,Disc3:D4,DiscAlbum:k4,Divide:L4,DivideCircle:Rr,DivideSquare:Dn,Dna:H4,DnaOff:R4,Dock:N4,Dog:B4,DollarSign:O4,Donut:V4,DoorClosed:I4,DoorOpen:P4,Dot:z4,DotSquare:kn,Download:F4,DownloadCloud:Yr,DraftingCompass:U4,Drama:q4,Dribbble:Z4,Drill:W4,Droplet:G4,DropletOff:j4,Droplets:$4,Drum:X4,Drumstick:Y4,Dumbbell:K4,Ear:Q4,EarOff:J4,Earth:ri,EarthLock:t5,Eclipse:e5,Edit:la,Edit2:Wi,Edit3:Zi,Egg:i5,EggFried:a5,EggOff:r5,Ellipsis:ni,EllipsisVertical:ii,Equal:h5,EqualApproximately:n5,EqualNot:s5,EqualSquare:Tn,Eraser:o5,EthernetPort:d5,Euro:c5,Expand:l5,ExternalLink:u5,Eye:v5,EyeClosed:p5,EyeOff:f5,Facebook:g5,Factory:m5,Fan:M5,FastForward:y5,Feather:x5,Fence:w5,FerrisWheel:b5,Figma:A5,File:xv,FileArchive:C5,FileAudio:E5,FileAudio2:_5,FileAxis3D:si,FileAxis3d:si,FileBadge:D5,FileBadge2:S5,FileBarChart:hi,FileBarChart2:oi,FileBox:k5,FileChartColumn:oi,FileChartColumnIncreasing:hi,FileChartLine:di,FileChartPie:ci,FileCheck:L5,FileCheck2:T5,FileClock:R5,FileCode:N5,FileCode2:H5,FileCog:li,FileCog2:li,FileDiff:B5,FileDigit:O5,FileDown:V5,FileEdit:pi,FileHeart:I5,FileImage:P5,FileInput:z5,FileJson:U5,FileJson2:F5,FileKey:Z5,FileKey2:q5,FileLineChart:di,FileLock:j5,FileLock2:W5,FileMinus:$5,FileMinus2:G5,FileMusic:X5,FileOutput:Y5,FilePen:pi,FilePenLine:ui,FilePieChart:ci,FilePlus:J5,FilePlus2:K5,FileQuestion:Q5,FileScan:tv,FileSearch:av,FileSearch2:ev,FileSignature:ui,FileSliders:rv,FileSpreadsheet:iv,FileStack:nv,FileSymlink:sv,FileTerminal:hv,FileText:ov,FileType:cv,FileType2:dv,FileUp:lv,FileUser:uv,FileVideo:fv,FileVideo2:pv,FileVolume:gv,FileVolume2:vv,FileWarning:mv,FileX:yv,FileX2:Mv,Files:wv,Film:bv,Filter:Cv,FilterX:Av,Fingerprint:_v,FireExtinguisher:Ev,Fish:kv,FishOff:Sv,FishSymbol:Dv,Flag:Hv,FlagOff:Tv,FlagTriangleLeft:Lv,FlagTriangleRight:Rv,Flame:Bv,FlameKindling:Nv,Flashlight:Vv,FlashlightOff:Ov,FlaskConical:Pv,FlaskConicalOff:Iv,FlaskRound:zv,FlipHorizontal:Uv,FlipHorizontal2:Fv,FlipVertical:Zv,FlipVertical2:qv,Flower:jv,Flower2:Wv,Focus:Gv,FoldHorizontal:$v,FoldVertical:Xv,Folder:A3,FolderArchive:Yv,FolderCheck:Kv,FolderClock:Jv,FolderClosed:Qv,FolderCode:t3,FolderCog:fi,FolderCog2:fi,FolderDot:e3,FolderDown:a3,FolderEdit:vi,FolderGit:i3,FolderGit2:r3,FolderHeart:n3,FolderInput:s3,FolderKanban:h3,FolderKey:o3,FolderLock:d3,FolderMinus:c3,FolderOpen:u3,FolderOpenDot:l3,FolderOutput:p3,FolderPen:vi,FolderPlus:f3,FolderRoot:v3,FolderSearch:m3,FolderSearch2:g3,FolderSymlink:M3,FolderSync:y3,FolderTree:x3,FolderUp:w3,FolderX:b3,Folders:C3,Footprints:_3,ForkKnife:gs,ForkKnifeCrossed:vs,Forklift:E3,FormInput:Gi,Forward:S3,Frame:D3,Framer:k3,Frown:T3,Fuel:L3,Fullscreen:R3,FunctionSquare:Ln,GalleryHorizontal:N3,GalleryHorizontalEnd:H3,GalleryThumbnails:B3,GalleryVertical:V3,GalleryVerticalEnd:O3,Gamepad:P3,Gamepad2:I3,GanttChart:fr,GanttChartSquare:x1,Gauge:z3,GaugeCircle:Hr,Gavel:F3,Gem:U3,Ghost:q3,Gift:Z3,GitBranch:j3,GitBranchPlus:W3,GitCommit:gi,GitCommitHorizontal:gi,GitCommitVertical:G3,GitCompare:X3,GitCompareArrows:$3,GitFork:Y3,GitGraph:K3,GitMerge:J3,GitPullRequest:ig,GitPullRequestArrow:Q3,GitPullRequestClosed:tg,GitPullRequestCreate:ag,GitPullRequestCreateArrow:eg,GitPullRequestDraft:rg,Github:ng,Gitlab:sg,GlassWater:hg,Glasses:og,Globe:cg,Globe2:ri,GlobeLock:dg,Goal:lg,Grab:ug,GraduationCap:pg,Grape:fg,Grid:y1,Grid2X2:Mi,Grid2X2Plus:mi,Grid2x2:Mi,Grid2x2Check:vg,Grid2x2Plus:mi,Grid2x2X:gg,Grid3X3:y1,Grid3x3:y1,Grip:yg,GripHorizontal:mg,GripVertical:Mg,Group:xg,Guitar:wg,Ham:bg,Hammer:Ag,Hand:Dg,HandCoins:Cg,HandHeart:_g,HandHelping:yi,HandMetal:Eg,HandPlatter:Sg,Handshake:kg,HardDrive:Rg,HardDriveDownload:Tg,HardDriveUpload:Lg,HardHat:Hg,Hash:Ng,Haze:Bg,HdmiPort:Og,Heading:qg,Heading1:Vg,Heading2:Ig,Heading3:Pg,Heading4:zg,Heading5:Fg,Heading6:Ug,HeadphoneOff:Zg,Headphones:Wg,Headset:jg,Heart:Kg,HeartCrack:Gg,HeartHandshake:$g,HeartOff:Xg,HeartPulse:Yg,Heater:Jg,HelpCircle:Nr,HelpingHand:yi,Hexagon:Qg,Highlighter:t6,History:e6,Home:xi,Hop:r6,HopOff:a6,Hospital:i6,Hotel:n6,Hourglass:s6,House:xi,HousePlug:h6,HousePlus:o6,IceCream:bi,IceCream2:wi,IceCreamBowl:wi,IceCreamCone:bi,IdCard:d6,Image:m6,ImageDown:c6,ImageMinus:l6,ImageOff:u6,ImagePlay:p6,ImagePlus:f6,ImageUp:v6,ImageUpscale:g6,Images:M6,Import:y6,Inbox:x6,Indent:Ci,IndentDecrease:Ai,IndentIncrease:Ci,IndianRupee:w6,Infinity:b6,Info:A6,Inspect:Vn,InspectionPanel:C6,Instagram:_6,Italic:E6,IterationCcw:S6,IterationCw:D6,JapaneseYen:k6,Joystick:T6,Kanban:L6,KanbanSquare:Rn,KanbanSquareDashed:_n,Key:N6,KeyRound:R6,KeySquare:H6,Keyboard:V6,KeyboardMusic:B6,KeyboardOff:O6,Lamp:q6,LampCeiling:I6,LampDesk:P6,LampFloor:z6,LampWallDown:F6,LampWallUp:U6,LandPlot:Z6,Landmark:W6,Languages:j6,Laptop:$6,Laptop2:_i,LaptopMinimal:_i,LaptopMinimalCheck:G6,Lasso:Y6,LassoSelect:X6,Laugh:K6,Layers:Ei,Layers2:J6,Layers3:Ei,Layout:qi,LayoutDashboard:Q6,LayoutGrid:t8,LayoutList:e8,LayoutPanelLeft:a8,LayoutPanelTop:r8,LayoutTemplate:i8,Leaf:n8,LeafyGreen:s8,Lectern:h8,LetterText:o8,Library:c8,LibraryBig:d8,LibrarySquare:Hn,LifeBuoy:l8,Ligature:u8,Lightbulb:f8,LightbulbOff:p8,LineChart:lr,Link:m8,Link2:g8,Link2Off:v8,Linkedin:M8,List:B8,ListCheck:y8,ListChecks:x8,ListCollapse:w8,ListEnd:b8,ListFilter:C8,ListFilterPlus:A8,ListMinus:_8,ListMusic:E8,ListOrdered:S8,ListPlus:D8,ListRestart:k8,ListStart:T8,ListTodo:L8,ListTree:R8,ListVideo:H8,ListX:N8,Loader:V8,Loader2:Si,LoaderCircle:Si,LoaderPinwheel:O8,Locate:z8,LocateFixed:I8,LocateOff:P8,Lock:U8,LockKeyhole:F8,LockKeyholeOpen:Di,LockOpen:ki,LogIn:q8,LogOut:Z8,Logs:W8,Lollipop:j8,Luggage:G8,MSquare:Nn,Magnet:$8,Mail:r7,MailCheck:X8,MailMinus:Y8,MailOpen:K8,MailPlus:J8,MailQuestion:Q8,MailSearch:t7,MailWarning:e7,MailX:a7,Mailbox:i7,Mails:n7,Map:M7,MapPin:g7,MapPinCheck:h7,MapPinCheckInside:s7,MapPinHouse:o7,MapPinMinus:c7,MapPinMinusInside:d7,MapPinOff:l7,MapPinPlus:p7,MapPinPlusInside:u7,MapPinX:v7,MapPinXInside:f7,MapPinned:m7,Martini:y7,Maximize:w7,Maximize2:x7,Medal:b7,Megaphone:C7,MegaphoneOff:A7,Meh:_7,MemoryStick:E7,Menu:S7,MenuSquare:Bn,Merge:D7,MessageCircle:P7,MessageCircleCode:k7,MessageCircleDashed:T7,MessageCircleHeart:L7,MessageCircleMore:R7,MessageCircleOff:H7,MessageCirclePlus:N7,MessageCircleQuestion:B7,MessageCircleReply:O7,MessageCircleWarning:V7,MessageCircleX:I7,MessageSquare:em,MessageSquareCode:z7,MessageSquareDashed:F7,MessageSquareDiff:U7,MessageSquareDot:q7,MessageSquareHeart:Z7,MessageSquareLock:W7,MessageSquareMore:j7,MessageSquareOff:G7,MessageSquarePlus:$7,MessageSquareQuote:X7,MessageSquareReply:Y7,MessageSquareShare:K7,MessageSquareText:J7,MessageSquareWarning:Q7,MessageSquareX:tm,MessagesSquare:am,Mic:im,Mic2:Ti,MicOff:rm,MicVocal:Ti,Microchip:nm,Microscope:sm,Microwave:hm,Milestone:om,Milk:cm,MilkOff:dm,Minimize:um,Minimize2:lm,Minus:pm,MinusCircle:Br,MinusSquare:On,Monitor:Em,MonitorCheck:fm,MonitorCog:vm,MonitorDot:gm,MonitorDown:mm,MonitorOff:Mm,MonitorPause:ym,MonitorPlay:xm,MonitorSmartphone:wm,MonitorSpeaker:bm,MonitorStop:Am,MonitorUp:Cm,MonitorX:_m,Moon:Dm,MoonStar:Sm,MoreHorizontal:ni,MoreVertical:ii,Mountain:Tm,MountainSnow:km,Mouse:Om,MouseOff:Lm,MousePointer:Bm,MousePointer2:Rm,MousePointerBan:Hm,MousePointerClick:Nm,MousePointerSquareDashed:En,Move:Xm,Move3D:Li,Move3d:Li,MoveDiagonal:Im,MoveDiagonal2:Vm,MoveDown:Fm,MoveDownLeft:Pm,MoveDownRight:zm,MoveHorizontal:Um,MoveLeft:qm,MoveRight:Zm,MoveUp:Gm,MoveUpLeft:Wm,MoveUpRight:jm,MoveVertical:$m,Music:Qm,Music2:Ym,Music3:Km,Music4:Jm,Navigation:rM,Navigation2:eM,Navigation2Off:tM,NavigationOff:aM,Network:iM,Newspaper:nM,Nfc:sM,Notebook:cM,NotebookPen:hM,NotebookTabs:oM,NotebookText:dM,NotepadText:uM,NotepadTextDashed:lM,Nut:fM,NutOff:pM,Octagon:gM,OctagonAlert:Ri,OctagonMinus:vM,OctagonPause:Hi,OctagonX:Ni,Omega:mM,Option:MM,Orbit:yM,Origami:xM,Outdent:Ai,Package:DM,Package2:wM,PackageCheck:bM,PackageMinus:AM,PackageOpen:CM,PackagePlus:_M,PackageSearch:EM,PackageX:SM,PaintBucket:kM,PaintRoller:TM,Paintbrush:LM,Paintbrush2:Bi,PaintbrushVertical:Bi,Palette:RM,Palmtree:is,PanelBottom:BM,PanelBottomClose:HM,PanelBottomDashed:Oi,PanelBottomInactive:Oi,PanelBottomOpen:NM,PanelLeft:zi,PanelLeftClose:Vi,PanelLeftDashed:Ii,PanelLeftInactive:Ii,PanelLeftOpen:Pi,PanelRight:IM,PanelRightClose:OM,PanelRightDashed:Fi,PanelRightInactive:Fi,PanelRightOpen:VM,PanelTop:FM,PanelTopClose:PM,PanelTopDashed:Ui,PanelTopInactive:Ui,PanelTopOpen:zM,PanelsLeftBottom:UM,PanelsLeftRight:ti,PanelsRightBottom:qM,PanelsTopBottom:Yi,PanelsTopLeft:qi,Paperclip:ZM,Parentheses:WM,ParkingCircle:Vr,ParkingCircleOff:Or,ParkingMeter:jM,ParkingSquare:Pn,ParkingSquareOff:In,PartyPopper:GM,Pause:$M,PauseCircle:Ir,PauseOctagon:Hi,PawPrint:XM,PcCase:YM,Pen:Wi,PenBox:la,PenLine:Zi,PenOff:KM,PenSquare:la,PenTool:JM,Pencil:a9,PencilLine:QM,PencilOff:t9,PencilRuler:e9,Pentagon:r9,Percent:i9,PercentCircle:Pr,PercentDiamond:ai,PercentSquare:zn,PersonStanding:n9,PhilippinePeso:s9,Phone:p9,PhoneCall:h9,PhoneForwarded:o9,PhoneIncoming:d9,PhoneMissed:c9,PhoneOff:l9,PhoneOutgoing:u9,Pi:f9,PiSquare:Fn,Piano:v9,Pickaxe:g9,PictureInPicture:M9,PictureInPicture2:m9,PieChart:vr,PiggyBank:y9,Pilcrow:b9,PilcrowLeft:x9,PilcrowRight:w9,PilcrowSquare:Un,Pill:C9,PillBottle:A9,Pin:E9,PinOff:_9,Pipette:S9,Pizza:D9,Plane:L9,PlaneLanding:k9,PlaneTakeoff:T9,Play:R9,PlayCircle:zr,PlaySquare:qn,Plug:N9,Plug2:H9,PlugZap:ji,PlugZap2:ji,Plus:B9,PlusCircle:Fr,PlusSquare:Zn,Pocket:V9,PocketKnife:O9,Podcast:I9,Pointer:z9,PointerOff:P9,Popcorn:F9,Popsicle:U9,PoundSterling:q9,Power:W9,PowerCircle:Ur,PowerOff:Z9,PowerSquare:Wn,Presentation:j9,Printer:$9,PrinterCheck:G9,Projector:X9,Proportions:Y9,Puzzle:K9,Pyramid:J9,QrCode:Q9,Quote:ty,Rabbit:ey,Radar:ay,Radiation:ry,Radical:iy,Radio:hy,RadioReceiver:ny,RadioTower:sy,Radius:oy,RailSymbol:dy,Rainbow:cy,Rat:ly,Ratio:uy,Receipt:wy,ReceiptCent:py,ReceiptEuro:fy,ReceiptIndianRupee:vy,ReceiptJapaneseYen:gy,ReceiptPoundSterling:my,ReceiptRussianRuble:My,ReceiptSwissFranc:yy,ReceiptText:xy,RectangleEllipsis:Gi,RectangleHorizontal:by,RectangleVertical:Ay,Recycle:Cy,Redo:Sy,Redo2:_y,RedoDot:Ey,RefreshCcw:ky,RefreshCcwDot:Dy,RefreshCw:Ly,RefreshCwOff:Ty,Refrigerator:Ry,Regex:Hy,RemoveFormatting:Ny,Repeat:Vy,Repeat1:By,Repeat2:Oy,Replace:Py,ReplaceAll:Iy,Reply:Fy,ReplyAll:zy,Rewind:Uy,Ribbon:qy,Rocket:Zy,RockingChair:Wy,RollerCoaster:jy,Rotate3D:$i,Rotate3d:$i,RotateCcw:$y,RotateCcwSquare:Gy,RotateCw:Yy,RotateCwSquare:Xy,Route:Jy,RouteOff:Ky,Router:Qy,Rows:Xi,Rows2:Xi,Rows3:Yi,Rows4:tx,Rss:ex,Ruler:ax,RussianRuble:rx,Sailboat:ix,Salad:nx,Sandwich:sx,Satellite:ox,SatelliteDish:hx,Save:lx,SaveAll:dx,SaveOff:cx,Scale:ux,Scale3D:Ki,Scale3d:Ki,Scaling:px,Scan:bx,ScanBarcode:fx,ScanEye:vx,ScanFace:gx,ScanHeart:mx,ScanLine:Mx,ScanQrCode:yx,ScanSearch:xx,ScanText:wx,ScatterChart:gr,School:Ax,School2:hs,Scissors:_x,ScissorsLineDashed:Cx,ScissorsSquare:jn,ScissorsSquareDashedBottom:mn,ScreenShare:Sx,ScreenShareOff:Ex,Scroll:kx,ScrollText:Dx,Search:Nx,SearchCheck:Tx,SearchCode:Lx,SearchSlash:Rx,SearchX:Hx,Section:Bx,Send:Vx,SendHorizonal:Ji,SendHorizontal:Ji,SendToBack:Ox,SeparatorHorizontal:Ix,SeparatorVertical:Px,Server:qx,ServerCog:zx,ServerCrash:Fx,ServerOff:Ux,Settings:Wx,Settings2:Zx,Shapes:jx,Share:$x,Share2:Gx,Sheet:Xx,Shell:Yx,Shield:sw,ShieldAlert:Kx,ShieldBan:Jx,ShieldCheck:Qx,ShieldClose:Qi,ShieldEllipsis:tw,ShieldHalf:ew,ShieldMinus:aw,ShieldOff:rw,ShieldPlus:iw,ShieldQuestion:nw,ShieldX:Qi,Ship:ow,ShipWheel:hw,Shirt:dw,ShoppingBag:cw,ShoppingBasket:lw,ShoppingCart:uw,Shovel:pw,ShowerHead:fw,Shrink:vw,Shrub:gw,Shuffle:mw,Sidebar:zi,SidebarClose:Vi,SidebarOpen:Pi,Sigma:Mw,SigmaSquare:Gn,Signal:Aw,SignalHigh:yw,SignalLow:xw,SignalMedium:ww,SignalZero:bw,Signature:Cw,Signpost:Ew,SignpostBig:_w,Siren:Sw,SkipBack:Dw,SkipForward:kw,Skull:Tw,Slack:Lw,Slash:Rw,SlashSquare:$n,Slice:Hw,Sliders:tn,SlidersHorizontal:Nw,SlidersVertical:tn,Smartphone:Vw,SmartphoneCharging:Bw,SmartphoneNfc:Ow,Smile:Pw,SmilePlus:Iw,Snail:zw,Snowflake:Fw,Sofa:Uw,SortAsc:X2,SortDesc:j2,Soup:qw,Space:Zw,Spade:Ww,Sparkle:jw,Sparkles:en,Speaker:Gw,Speech:$w,SpellCheck:Yw,SpellCheck2:Xw,Spline:Kw,Split:Jw,SplitSquareHorizontal:Xn,SplitSquareVertical:Yn,SprayCan:Qw,Sprout:tb,Square:sb,SquareActivity:an,SquareArrowDown:sn,SquareArrowDownLeft:rn,SquareArrowDownRight:nn,SquareArrowLeft:hn,SquareArrowOutDownLeft:on,SquareArrowOutDownRight:dn,SquareArrowOutUpLeft:cn,SquareArrowOutUpRight:ln,SquareArrowRight:un,SquareArrowUp:vn,SquareArrowUpLeft:pn,SquareArrowUpRight:fn,SquareAsterisk:gn,SquareBottomDashedScissors:mn,SquareChartGantt:x1,SquareCheck:yn,SquareCheckBig:Mn,SquareChevronDown:xn,SquareChevronLeft:wn,SquareChevronRight:bn,SquareChevronUp:An,SquareCode:Cn,SquareDashed:Sn,SquareDashedBottom:ab,SquareDashedBottomCode:eb,SquareDashedKanban:_n,SquareDashedMousePointer:En,SquareDivide:Dn,SquareDot:kn,SquareEqual:Tn,SquareFunction:Ln,SquareGanttChart:x1,SquareKanban:Rn,SquareLibrary:Hn,SquareM:Nn,SquareMenu:Bn,SquareMinus:On,SquareMousePointer:Vn,SquareParking:Pn,SquareParkingOff:In,SquarePen:la,SquarePercent:zn,SquarePi:Fn,SquarePilcrow:Un,SquarePlay:qn,SquarePlus:Zn,SquarePower:Wn,SquareRadical:rb,SquareScissors:jn,SquareSigma:Gn,SquareSlash:$n,SquareSplitHorizontal:Xn,SquareSplitVertical:Yn,SquareSquare:ib,SquareStack:nb,SquareTerminal:Kn,SquareUser:Qn,SquareUserRound:Jn,SquareX:ts,Squircle:hb,Squirrel:ob,Stamp:db,Star:ub,StarHalf:cb,StarOff:lb,Stars:en,StepBack:pb,StepForward:fb,Stethoscope:vb,Sticker:gb,StickyNote:mb,StopCircle:Zr,Store:Mb,StretchHorizontal:yb,StretchVertical:xb,Strikethrough:wb,Subscript:bb,Subtitles:rr,Sun:Sb,SunDim:Ab,SunMedium:Cb,SunMoon:_b,SunSnow:Eb,Sunrise:Db,Sunset:kb,Superscript:Tb,SwatchBook:Lb,SwissFranc:Rb,SwitchCamera:Hb,Sword:Nb,Swords:Bb,Syringe:Ob,Table:Zb,Table2:Vb,TableCellsMerge:Ib,TableCellsSplit:Pb,TableColumnsSplit:zb,TableOfContents:Fb,TableProperties:Ub,TableRowsSplit:qb,Tablet:jb,TabletSmartphone:Wb,Tablets:Gb,Tag:$b,Tags:Xb,Tally1:Yb,Tally2:Kb,Tally3:Jb,Tally4:Qb,Tally5:tA,Tangent:eA,Target:aA,Telescope:rA,Tent:nA,TentTree:iA,Terminal:sA,TerminalSquare:Kn,TestTube:hA,TestTube2:es,TestTubeDiagonal:es,TestTubes:oA,Text:pA,TextCursor:cA,TextCursorInput:dA,TextQuote:lA,TextSearch:uA,TextSelect:as,TextSelection:as,Theater:fA,Thermometer:mA,ThermometerSnowflake:vA,ThermometerSun:gA,ThumbsDown:MA,ThumbsUp:yA,Ticket:EA,TicketCheck:xA,TicketMinus:wA,TicketPercent:bA,TicketPlus:AA,TicketSlash:CA,TicketX:_A,Tickets:DA,TicketsPlane:SA,Timer:LA,TimerOff:kA,TimerReset:TA,ToggleLeft:RA,ToggleRight:HA,Toilet:NA,Tornado:BA,Torus:OA,Touchpad:IA,TouchpadOff:VA,TowerControl:PA,ToyBrick:zA,Tractor:FA,TrafficCone:UA,Train:rs,TrainFront:ZA,TrainFrontTunnel:qA,TrainTrack:WA,TramFront:rs,Trash:GA,Trash2:jA,TreeDeciduous:$A,TreePalm:is,TreePine:XA,Trees:YA,Trello:KA,TrendingDown:JA,TrendingUp:tC,TrendingUpDown:QA,Triangle:aC,TriangleAlert:ns,TriangleRight:eC,Trophy:rC,Truck:iC,Turtle:nC,Tv:hC,Tv2:ss,TvMinimal:ss,TvMinimalPlay:sC,Twitch:oC,Twitter:dC,Type:lC,TypeOutline:cC,Umbrella:pC,UmbrellaOff:uC,Underline:fC,Undo:mC,Undo2:vC,UndoDot:gC,UnfoldHorizontal:MC,UnfoldVertical:yC,Ungroup:xC,University:hs,Unlink:bC,Unlink2:wC,Unlock:ki,UnlockKeyhole:Di,Unplug:AC,Upload:CC,UploadCloud:Kr,Usb:_C,User:BC,User2:ps,UserCheck:EC,UserCheck2:os,UserCircle:jr,UserCircle2:Wr,UserCog:SC,UserCog2:ds,UserMinus:DC,UserMinus2:cs,UserPen:kC,UserPlus:TC,UserPlus2:ls,UserRound:ps,UserRoundCheck:os,UserRoundCog:ds,UserRoundMinus:cs,UserRoundPen:LC,UserRoundPlus:ls,UserRoundSearch:RC,UserRoundX:us,UserSearch:HC,UserSquare:Qn,UserSquare2:Jn,UserX:NC,UserX2:us,Users:OC,Users2:fs,UsersRound:fs,Utensils:gs,UtensilsCrossed:vs,UtilityPole:VC,Variable:IC,Vault:PC,Vegan:zC,VenetianMask:FC,Verified:J2,Vibrate:qC,VibrateOff:UC,Video:WC,VideoOff:ZC,Videotape:jC,View:GC,Voicemail:$C,Volleyball:XC,Volume:t_,Volume1:YC,Volume2:KC,VolumeOff:JC,VolumeX:QC,Vote:e_,Wallet:r_,Wallet2:ms,WalletCards:a_,WalletMinimal:ms,Wallpaper:i_,Wand:n_,Wand2:Ms,WandSparkles:Ms,Warehouse:s_,WashingMachine:h_,Watch:o_,Waves:c_,WavesLadder:d_,Waypoints:l_,Webcam:u_,Webhook:f_,WebhookOff:p_,Weight:v_,Wheat:m_,WheatOff:g_,WholeWord:M_,Wifi:A_,WifiHigh:y_,WifiLow:x_,WifiOff:w_,WifiZero:b_,Wind:__,WindArrowDown:C_,Wine:S_,WineOff:E_,Workflow:D_,Worm:k_,WrapText:T_,Wrench:L_,X:R_,XCircle:Gr,XOctagon:Ni,XSquare:ts,Youtube:H_,Zap:B_,ZapOff:N_,ZoomIn:O_,ZoomOut:V_},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=({icons:v={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(v).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const r=document.querySelectorAll(`[${t}]`);if(Array.from(r).forEach(i=>F2(i,{nameAttr:t,icons:v,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(n=>F2(n,{nameAttr:"icon-name",icons:v,attrs:e})))}},O1="demo-ai-reader",E1={id:O1,title:"AI 编程实习手册",author:"课程示例 · 蔡子靖",type:"TXT",sizeLabel:"课程示例",content:["AI 编程实习手册","","第一章  从需求开始","","一个可交付的项目，不是从写代码开始，而是从理解问题开始。","先把用户要完成的任务说清楚，再把任务拆成可以验证的小步骤。PRD 负责描述要解决什么问题，技术设计负责说明准备如何解决，AGENTS 文档则把协作约定留给下一轮开发。","","第二章  让迭代留下痕迹","","第一次实现只需要覆盖最小可用范围。完成后通过真实操作发现问题，再把新增需求写回文档并进入下一轮开发。每次迭代都应该能回答三个问题：哪里变好了，如何验证，下一步是什么。","","第三章  把结果交付出去","","代码通过构建只是起点。桌面应用还需要实际启动、导入真实文件、切换章节，并确认关闭后再次打开仍能回到上次阅读位置。一个被验证过的作品，才真正完成了从想法到产品的旅程。","","结语","","保持好奇，持续交付。"].join(`
`),chapters:[{id:"demo-1",label:"第一章  从需求开始",start:2},{id:"demo-2",label:"第二章  让迭代留下痕迹",start:10},{id:"demo-3",label:"第三章  把结果交付出去",start:18},{id:"demo-4",label:"结语",start:26}],progress:18,currentChapter:0,bookmarks:[{id:"demo-bookmark-1",label:"第一章  从需求开始",chapter:0,createdAt:"课程示例"}],notes:[{id:"demo-note-1",text:"先把用户要完成的任务说清楚，再拆成可以验证的小步骤。",chapter:0,createdAt:"课程示例"}],sessions:3,importedAt:"课程示例"},vt={books:[],activeBookId:O1,theme:"light",search:"",textSearch:"",rightTab:"toc",noteDraft:"",epub:null,rendition:null,saveTimer:null,skipScrollUpdateUntil:0},I_={book:"book-open",add:"file-plus-2",folder:"folder-open",upload:"upload",list:"list",right:"panel-right",search:"search",bookmark:"bookmark",note:"notebook-pen",stats:"bar-chart-3",save:"save",sun:"sun",moon:"moon",back:"chevron-left",next:"chevron-right",close:"x"},ae=(v,t=17)=>`<i data-lucide="${I_[v]||v}" width="${t}" height="${t}" stroke-width="1.8"></i>`,P_=document.querySelector("#app");function Be(){return vt.books.find(v=>v.id===vt.activeBookId)||vt.books[0]}function ve(v=""){return v.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function Aa(v){return`${Math.round(v||0)}%`}function Gs(v){return{...v,bookmarks:v.bookmarks||[],notes:v.notes||[],sessions:v.sessions||1}}function z_(v){const t=(v==null?void 0:v.chapters)||[],e=vt.search.trim().toLowerCase();return t.map((r,i)=>({...r,index:i})).filter(r=>!e||r.label.toLowerCase().includes(e))}function $s(v){const t=vt.textSearch.trim().toLowerCase();if(!t)return"";if(v.type!=="TXT")return'<div class="search-message">EPUB 正文搜索将在下一轮支持，当前可使用目录搜索。</div>';const e=v.content.split(/\r?\n/).map((r,i)=>({line:r,index:i})).filter(r=>r.line.toLowerCase().includes(t)).slice(0,6);return e.length?`<div class="search-results">${e.map(r=>`<button class="search-result" data-search-line="${r.index}"><span>${String(r.index+1).padStart(2,"0")}</span><strong>${ve(r.line.trim()||"空行")}</strong>${ae("right",13)}</button>`).join("")}</div>`:'<div class="search-message">没有找到匹配内容</div>'}function F_(v,t){var e,r,i,n,s;return vt.rightTab==="notes"?`
      <div class="note-compose">
        <textarea id="note-input" placeholder="记录当前章节的想法...">${ve(vt.noteDraft)}</textarea>
        <button class="save-note-button" id="save-note">${ae("save",14)}保存笔记</button>
      </div>
      <div class="notes-list">
        ${(e=v.notes)!=null&&e.length?v.notes.slice().reverse().map(h=>`
          <article class="note-item">
            <div class="note-item-meta"><span>第 ${(h.chapter||0)+1} 章</span><button class="remove-note" data-note-id="${h.id}" title="删除笔记">${ae("close",13)}</button></div>
            <p>${ve(h.text)}</p>
          </article>
        `).join(""):'<p class="empty-panel">还没有笔记，先记录一个想法吧。</p>'}
      </div>
    `:vt.rightTab==="stats"?`
      <div class="stats-overview"><span class="eyebrow">READING INSIGHTS</span><strong>${Aa(v.progress)}</strong><p>当前书籍完成度</p></div>
      <div class="stats-grid">
        <div><strong>${((r=v.chapters)==null?void 0:r.length)||0}</strong><span>章节</span></div>
        <div><strong>${((i=v.bookmarks)==null?void 0:i.length)||0}</strong><span>书签</span></div>
        <div><strong>${((n=v.notes)==null?void 0:n.length)||0}</strong><span>笔记</span></div>
        <div><strong>${v.sessions||1}</strong><span>阅读次数</span></div>
      </div>
      <div class="bookmark-section"><span class="eyebrow">BOOKMARKS</span>${(s=v.bookmarks)!=null&&s.length?v.bookmarks.map(h=>`<button class="bookmark-row" data-bookmark-chapter="${h.chapter}"><span>${String((h.chapter||0)+1).padStart(2,"0")}</span><strong>${ve(h.label)}</strong>${ae("right",13)}</button>`).join(""):'<p class="empty-panel">点击上方书签按钮保存当前位置。</p>'}</div>
    `:`
    <label class="search-field">${ae("search",15)}<input id="toc-search" type="search" placeholder="搜索章节" value="${ve(vt.search)}" /></label>
    <div class="toc-list">${t.length?t.map(h=>`<button class="toc-row ${h.index===(v.currentChapter||0)?"is-current":""}" data-chapter-index="${h.index}"><span>${String(h.index+1).padStart(2,"0")}</span><strong>${ve(h.label)}</strong>${h.index===(v.currentChapter||0)?`<i>${ae("right",14)}</i>`:""}</button>`).join(""):'<p class="no-results">没有匹配的章节</p>'}</div>
    <div class="toc-note">${v.type==="EPUB"?"EPUB 目录来自书籍内置导航。":"TXT 章节根据标题自动识别，也可以继续滚动阅读。"}</div>
  `}function ke(){var e;const v=Gs(Be()||E1),t=z_(v);document.documentElement.dataset.theme=vt.theme,P_.innerHTML=`
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">${ae("book",22)}<span>Lumen Study Desk</span><small>DESKTOP STUDY WORKSPACE</small></div>
        <div class="topbar-actions">
          <label class="import-button" title="导入 TXT 或 EPUB 文件">
            ${ae("upload")}<span>导入书籍</span>
            <input id="file-input" type="file" accept=".txt,.epub,text/plain,application/epub+zip" />
          </label>
          <button class="icon-button" id="theme-toggle" title="切换主题">${ae(vt.theme==="light"?"moon":"sun")}</button>
        </div>
      </header>
      <main class="workspace">
        <aside class="library-panel">
          <div class="panel-heading"><div><span class="eyebrow">MY LIBRARY</span><h1>我的书架</h1></div><button class="small-icon-button" id="focus-import" title="导入新书">${ae("add",16)}</button></div>
          <div class="library-count">${vt.books.length} 本书 · 已保存阅读进度</div>
          <div class="book-list">
            ${vt.books.map(r=>`
              <button class="book-card ${r.id===v.id?"is-active":""}" data-book-id="${r.id}">
                <span class="book-cover ${r.type==="EPUB"?"cover-epub":""}">${r.type}</span>
                <span class="book-card-copy"><strong>${ve(r.title)}</strong><small>${ve(r.author||"未知作者")}</small><em>${Aa(r.progress)}</em></span>
              </button>
            `).join("")}
          </div>
          <div class="library-footer"><span class="status-dot"></span><span>本地数据已同步</span></div>
        </aside>
        <section class="reader-panel">
          <div class="reader-toolbar">
            <div class="reader-meta"><span class="format-badge">${v.type}</span><div><h2>${ve(v.title)}</h2><p>${ve(v.author||"未知作者")} · ${ve(v.sizeLabel||"本地文件")}</p></div></div>
            <div class="reader-tools"><button class="tool-button" id="focus-search" title="全文搜索">${ae("search")}<span>全文搜索</span></button><button class="tool-button" id="add-bookmark" title="保存当前章节">${ae("bookmark")}<span>书签</span></button><button class="tool-button" id="toggle-toc" title="显示或隐藏学习面板">${ae("right")}<span>面板</span></button></div>
          </div>
          <div class="reader-search-row"><label class="search-field">${ae("search",15)}<input id="text-search" type="search" placeholder="搜索正文中的关键词" value="${ve(vt.textSearch)}" /></label><span>支持 TXT 正文检索</span></div>
          <div id="search-results-host">${$s(v)}</div>
          <div class="progress-line"><span style="width: ${Math.max(1,Math.min(100,v.progress||0))}%"></span></div>
          <div class="reader-stage">
            <div class="reader-content ${v.type==="EPUB"?"is-epub":""}" id="reader-content"></div>
            <div class="reader-empty" id="reader-empty" hidden></div>
          </div>
          <footer class="reader-footer"><button class="text-button" id="previous-chapter">${ae("back",15)}上一章</button><span id="reading-status">第 ${(v.currentChapter||0)+1} 章 · ${Aa(v.progress)} 已读</span><button class="text-button" id="next-chapter">下一章${ae("next",15)}</button></footer>
        </section>
        <aside class="toc-panel" id="toc-panel">
          <div class="toc-heading"><div><span class="eyebrow">STUDY PANEL</span><h2>${vt.rightTab==="toc"?"目录":vt.rightTab==="notes"?"学习笔记":"学习统计"}</h2></div><button class="small-icon-button" id="close-toc" title="关闭面板">${ae("close",16)}</button></div>
          <div class="study-tabs"><button class="study-tab ${vt.rightTab==="toc"?"is-active":""}" data-study-tab="toc">${ae("list",14)}目录</button><button class="study-tab ${vt.rightTab==="notes"?"is-active":""}" data-study-tab="notes">${ae("note",14)}笔记 <b>${((e=v.notes)==null?void 0:e.length)||0}</b></button><button class="study-tab ${vt.rightTab==="stats"?"is-active":""}" data-study-tab="stats">${ae("stats",14)}统计</button></div>
          <div id="study-panel-content">${F_(v,t)}</div>
        </aside>
      </main>
      <div class="toast" id="toast" role="status"></div>
    </div>
  `,js({icons:Ws}),U_(),v.type==="TXT"?q_(v):W_(v)}function U_(){var v,t,e,r,i,n,s,h,c,l,f,p,w;(v=document.querySelector("#file-input"))==null||v.addEventListener("change",X_),(t=document.querySelector("#focus-import"))==null||t.addEventListener("click",()=>{var M;return(M=document.querySelector("#file-input"))==null?void 0:M.click()}),(e=document.querySelector("#theme-toggle"))==null||e.addEventListener("click",()=>{vt.theme=vt.theme==="light"?"dark":"light",Le(),ke()}),(r=document.querySelector("#toggle-toc"))==null||r.addEventListener("click",()=>{var M;return(M=document.querySelector("#toc-panel"))==null?void 0:M.classList.toggle("is-collapsed")}),(i=document.querySelector("#close-toc"))==null||i.addEventListener("click",()=>{var M;return(M=document.querySelector("#toc-panel"))==null?void 0:M.classList.add("is-collapsed")}),(n=document.querySelector("#focus-search"))==null||n.addEventListener("click",()=>{var M;return(M=document.querySelector("#text-search"))==null?void 0:M.focus()}),(s=document.querySelector("#text-search"))==null||s.addEventListener("input",M=>{vt.textSearch=M.target.value;const L=document.querySelector("#search-results-host");L&&(L.innerHTML=$s(Be()),js({icons:Ws}),ys())}),(h=document.querySelector("#add-bookmark"))==null||h.addEventListener("click",j_),document.querySelectorAll("[data-study-tab]").forEach(M=>M.addEventListener("click",()=>{vt.rightTab=M.dataset.studyTab,ke()})),(c=document.querySelector("#save-note"))==null||c.addEventListener("click",G_),(l=document.querySelector("#note-input"))==null||l.addEventListener("input",M=>{vt.noteDraft=M.target.value}),document.querySelectorAll("[data-note-id]").forEach(M=>M.addEventListener("click",()=>$_(M.dataset.noteId))),document.querySelectorAll("[data-bookmark-chapter]").forEach(M=>M.addEventListener("click",()=>ua(Number(M.dataset.bookmarkChapter)))),ys(),(f=document.querySelector("#toc-search"))==null||f.addEventListener("input",M=>{vt.search=M.target.value,ke();const L=document.querySelector("#toc-search");L==null||L.focus(),L==null||L.setSelectionRange(L.value.length,L.value.length)}),document.querySelectorAll("[data-book-id]").forEach(M=>M.addEventListener("click",()=>{vt.activeBookId=M.dataset.bookId,vt.search="",vt.textSearch="",vt.rightTab="toc",Ys(),Le(),ke()})),document.querySelectorAll("[data-chapter-index]").forEach(M=>M.addEventListener("click",()=>ua(Number(M.dataset.chapterIndex)))),(p=document.querySelector("#previous-chapter"))==null||p.addEventListener("click",()=>ua(Math.max(0,(Be().currentChapter||0)-1))),(w=document.querySelector("#next-chapter"))==null||w.addEventListener("click",()=>ua(Math.min(Be().chapters.length-1,(Be().currentChapter||0)+1)))}function ys(){document.querySelectorAll("[data-search-line]").forEach(v=>v.addEventListener("click",()=>{var r;const t=document.querySelector("#reader-content"),e=(t==null?void 0:t.querySelectorAll("p, .paragraph-gap"))||[];vt.skipScrollUpdateUntil=Date.now()+700,(r=e[Number(v.dataset.searchLine)])==null||r.scrollIntoView({behavior:"smooth",block:"center"})}))}function q_(v){const t=document.querySelector("#reader-content"),e=v.content.split(/\r?\n/);t.innerHTML=`<article class="txt-reader">${e.map(i=>i.trim()?`<p>${ve(i)}</p>`:'<div class="paragraph-gap"></div>').join("")}</article>`;const r=v.chapters[v.currentChapter||0];if(r){const n=t.querySelectorAll("p, .paragraph-gap")[r.start];n&&n.scrollIntoView({block:"start"})}t.addEventListener("scroll",()=>{if(Date.now()<vt.skipScrollUpdateUntil)return;const i=t.scrollHeight-t.clientHeight,n=i>0?t.scrollTop/i*100:0,s=Z_(v,t.scrollTop);v.progress=Math.max(0,Math.min(100,n)),v.currentChapter=s,I1(v),Ks()},{passive:!0})}function Z_(v,t){const e=document.querySelector("#reader-content"),r=(e==null?void 0:e.querySelectorAll("p, .paragraph-gap"))||[];let i=0;return v.chapters.forEach((n,s)=>{const h=r[n.start];h&&h.offsetTop-80<=t&&(i=s)}),i}async function W_(v){var e,r,i,n;const t=document.querySelector("#reader-content");if(!v.data){t.innerHTML='<div class="unsupported"><strong>没有找到 EPUB 内容</strong><span>请重新导入这个文件。</span></div>';return}try{vt.epub=ze(Xs(v.data));const s=await vt.epub.loaded.navigation;if(!((e=v.chapters)!=null&&e.length)&&((r=s==null?void 0:s.toc)!=null&&r.length)){v.chapters=V1(s.toc),Le(),ke();return}vt.rendition=vt.epub.renderTo(t,{width:"100%",height:"100%",spread:"none",flow:"scrolled"}),vt.rendition.on("relocated",h=>{var p,w;const c=(p=h==null?void 0:h.start)!=null&&p.percentage?h.start.percentage*100:v.progress;v.progress=Math.max(0,Math.min(100,c));const l=((w=h==null?void 0:h.start)==null?void 0:w.href)||"",f=v.chapters.findIndex(M=>l.includes(M.href));f>=0&&(v.currentChapter=f),I1(v),Ks()}),await vt.rendition.display(((n=(i=v.chapters)==null?void 0:i[v.currentChapter||0])==null?void 0:n.href)||void 0)}catch(s){t.innerHTML=`<div class="unsupported"><strong>EPUB 读取失败</strong><span>${ve(s.message||"文件格式暂不支持")}</span></div>`}}function V1(v,t=[]){return v.forEach(e=>{var r;t.push({id:e.href,label:e.label.trim(),href:e.href}),(r=e.subitems)!=null&&r.length&&V1(e.subitems,t)}),t}function ua(v){var e,r,i;const t=Be();if((e=t==null?void 0:t.chapters)!=null&&e[v]){if(t.currentChapter=v,t.type==="TXT"){const n=document.querySelector("#reader-content"),s=(n==null?void 0:n.querySelectorAll("p, .paragraph-gap"))||[];vt.skipScrollUpdateUntil=Date.now()+700,(r=s[t.chapters[v].start])==null||r.scrollIntoView({behavior:"smooth",block:"start"}),t.progress=Math.max(t.progress||0,Math.min(99,Math.round(v/Math.max(1,t.chapters.length-1)*100))),I1(t),Le()}else(i=vt.rendition)==null||i.display(t.chapters[v].href);document.querySelectorAll(".toc-row").forEach(n=>n.classList.toggle("is-current",Number(n.dataset.chapterIndex)===v))}}function j_(){var e,r;const v=Be();if(!v)return;v.bookmarks=v.bookmarks||[];const t=v.currentChapter||0;if(v.bookmarks.some(i=>i.chapter===t)){Fe("当前章节已经保存过书签");return}v.bookmarks.push({id:`bookmark-${Date.now()}`,label:((r=(e=v.chapters)==null?void 0:e[t])==null?void 0:r.label)||`第 ${t+1} 章`,chapter:t,createdAt:new Date().toLocaleDateString("zh-CN")}),Le(),Fe("已保存当前章节书签"),vt.rightTab==="stats"&&ke()}function G_(){const v=Be(),t=vt.noteDraft.trim();if(!v||!t){Fe("先写下内容，再保存笔记");return}v.notes=v.notes||[],v.notes.push({id:`note-${Date.now()}`,text:t,chapter:v.currentChapter||0,createdAt:new Date().toLocaleDateString("zh-CN")}),vt.noteDraft="",vt.rightTab="notes",Le(),ke(),Fe("笔记已保存")}function $_(v){const t=Be();t.notes=(t.notes||[]).filter(e=>e.id!==v),Le(),ke(),Fe("笔记已删除")}function I1(v){const t=document.querySelector("#reading-status"),e=document.querySelector(".progress-line span");t&&(t.textContent=`第 ${(v.currentChapter||0)+1} 章 · ${Aa(v.progress)} 已读`),e&&(e.style.width=`${Math.max(1,Math.min(100,v.progress||0))}%`)}async function X_(v){var e,r,i,n,s;const t=(e=v.target.files)==null?void 0:e[0];if(t)try{const h=t.name.toLowerCase().endsWith(".epub")?"EPUB":"TXT",c=`${h.toLowerCase()}-${Date.now()}`,l={id:c,title:t.name.replace(/\.(txt|epub)$/i,""),author:"本地导入",type:h,sizeLabel:`${Math.max(1,Math.round(t.size/1024))} KB`,progress:0,currentChapter:0,bookmarks:[],notes:[],sessions:1,importedAt:new Date().toLocaleDateString("zh-CN")};if(h==="TXT")l.content=await t.text(),l.chapters=Y_(l.content);else{l.data=K_(await t.arrayBuffer());const f=ze(Xs(l.data)),p=await f.loaded.navigation;l.chapters=V1(p.toc||[]),l.title=((i=(r=f.packaging)==null?void 0:r.metadata)==null?void 0:i.title)||l.title,l.author=((s=(n=f.packaging)==null?void 0:n.metadata)==null?void 0:s.creator)||l.author,f.destroy()}vt.books=[l,...vt.books.filter(f=>f.id!==c)],vt.activeBookId=c,vt.search="",vt.textSearch="",vt.rightTab="toc",Ys(),await Le(),ke(),Fe(`${h} 已导入，目录和阅读进度已启用`)}catch(h){Fe(`导入失败：${h.message||"请检查文件格式"}`)}finally{v.target.value=""}}function Y_(v){const t=v.split(/\r?\n/),e=[],r=/^(第[\u4e00-\u9fa5\d]+[章节回].*|Chapter\s+\d+.*|[一二三四五六七八九十]+[、.].*)$/i;return t.forEach((i,n)=>{r.test(i.trim())&&e.push({id:`txt-${n}`,label:i.trim(),start:n})}),e.length?e:[{id:"txt-start",label:"正文",start:0}]}function K_(v){let t="";const e=new Uint8Array(v),r=32768;for(let i=0;i<e.length;i+=r)t+=String.fromCharCode(...e.subarray(i,i+r));return btoa(t)}function Xs(v){const t=atob(v),e=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)e[r]=t.charCodeAt(r);return e.buffer}function Ys(){var v,t;(v=vt.rendition)==null||v.destroy(),(t=vt.epub)==null||t.destroy(),vt.rendition=null,vt.epub=null}function Ks(){window.clearTimeout(vt.saveTimer),vt.saveTimer=window.setTimeout(Le,250)}async function Le(){var t;const v={books:vt.books,activeBookId:vt.activeBookId,theme:vt.theme};await((t=window.readerStore)==null?void 0:t.save(v))}function Fe(v){const t=document.querySelector("#toast");t&&(t.textContent=v,t.classList.add("is-visible"),window.setTimeout(()=>t.classList.remove("is-visible"),2400))}async function J_(){var e,r;const v=await((e=window.readerStore)==null?void 0:e.load());vt.books=(r=v==null?void 0:v.books)!=null&&r.length?v.books.map(Gs):[E1],vt.activeBookId=(v==null?void 0:v.activeBookId)||vt.books[0].id,vt.theme=(v==null?void 0:v.theme)||"light",vt.books.some(i=>i.id===O1)||vt.books.push(E1);const t=vt.books.find(i=>i.id===vt.activeBookId);t&&(t.sessions=(t.sessions||0)+1),Le(),ke()}J_();
