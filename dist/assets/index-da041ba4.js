(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ka(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Ea(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?fl(r):Ea(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(se(e))return e}}const sl=/;(?![^(]*\))/g,ll=/:([^]+)/,cl=/\/\*.*?\*\//gs;function fl(e){const t={};return e.replace(cl,"").split(sl).forEach(n=>{if(n){const r=n.split(ll);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Aa(e){let t="";if(he(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Aa(e[n]);r&&(t+=r+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ul="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dl=ka(ul);function Oo(e){return!!e||e===""}const ml=e=>he(e)?e:e==null?"":H(e)||se(e)&&(e.toString===Io||!U(e.toString))?JSON.stringify(e,Po,2):String(e),Po=(e,t)=>t&&t.__v_isRef?Po(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Co(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!H(t)&&!Ro(t)?String(t):t,ae={},Ut=[],je=()=>{},pl=()=>!1,hl=/^on[^a-z]/,hr=e=>hl.test(e),Oa=e=>e.startsWith("onUpdate:"),_e=Object.assign,Pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,V=(e,t)=>gl.call(e,t),H=Array.isArray,Bt=e=>gr(e)==="[object Map]",Co=e=>gr(e)==="[object Set]",U=e=>typeof e=="function",he=e=>typeof e=="string",Ca=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",So=e=>se(e)&&U(e.then)&&U(e.catch),Io=Object.prototype.toString,gr=e=>Io.call(e),vl=e=>gr(e).slice(8,-1),Ro=e=>gr(e)==="[object Object]",Sa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,qe=vr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,en=vr(e=>e.replace(yl,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),$r=vr(e=>e?`on${br(e)}`:""),yn=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_l=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ci;const xl=()=>ci||(ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class wl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function kl(e,t=Te){t&&t.active&&t.effects.push(e)}function El(){return Te}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},To=e=>(e.w&dt)>0,No=e=>(e.n&dt)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},Ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];To(a)&&!No(a)?a.delete(e):t[n++]=a,a.w&=~dt,a.n&=~dt}t.length=n}},Xr=new WeakMap;let cn=0,dt=1;const Gr=30;let Ne;const Ct=Symbol(""),Qr=Symbol("");class Ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,ft=!0,dt=1<<++cn,cn<=Gr?Al(this):fi(this),this.fn()}finally{cn<=Gr&&Ol(this),dt=1<<--cn,Ne=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(fi(this),this.onStop&&this.onStop(),this.active=!1)}}function fi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const Mo=[];function tn(){Mo.push(ft),ft=!1}function nn(){const e=Mo.pop();ft=e===void 0?!0:e}function Ee(e,t,n){if(ft&&Ne){let r=Xr.get(e);r||Xr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ia()),$o(a)}}function $o(e,t){let n=!1;cn<=Gr?No(e)||(e.n|=dt,n=!To(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Je(e,t,n,r,a,i){const o=Xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Sa(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),Bt(e)&&s.push(o.get(Qr)));break;case"delete":H(e)||(s.push(o.get(Ct)),Bt(e)&&s.push(o.get(Qr)));break;case"set":Bt(e)&&s.push(o.get(Ct));break}if(s.length===1)s[0]&&Jr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Jr(Ia(l))}}function Jr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pl=ka("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ca)),Cl=Ta(),Sl=Ta(!1,!0),Il=Ta(!0),di=Rl();function Rl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=X(this)[t].apply(this,n);return nn(),r}}),e}function Tl(e){const t=X(this);return Ee(t,"has",e),t.hasOwnProperty(e)}function Ta(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Vl:Ho:t?Do:zo).get(r))return r;const o=H(r);if(!e){if(o&&V(di,a))return Reflect.get(di,a,i);if(a==="hasOwnProperty")return Tl}const s=Reflect.get(r,a,i);return(Ca(a)?Lo.has(a):Pl(a))||(e||Ee(r,"get",a),t)?s:ve(s)?o&&Sa(a)?s:s.value:se(s)?e?Uo(s):Tn(s):s}}const Nl=Fo(),Ml=Fo(!0);function Fo(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!or(a)&&!Vt(a)&&(o=X(o),a=X(a)),!H(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=H(n)&&Sa(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?yn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),l}}function $l(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Ll(e,t){const n=Reflect.has(e,t);return(!Ca(t)||!Lo.has(t))&&Ee(e,"has",t),n}function Fl(e){return Ee(e,"iterate",H(e)?"length":Ct),Reflect.ownKeys(e)}const jo={get:Cl,set:Nl,deleteProperty:$l,has:Ll,ownKeys:Fl},jl={get:Il,set(e,t){return!0},deleteProperty(e,t){return!0}},zl=_e({},jo,{get:Sl,set:Ml}),Na=e=>e,yr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=yr(a),s=r?Na:n?La:_n;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function zn(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Dn(e,t=!1){return e=e.__v_raw,!t&&Ee(X(e),"iterate",Ct),Reflect.get(e,"size",e)}function mi(e){e=X(e);const t=X(this);return yr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function pi(e,t){t=X(t);const n=X(this),{has:r,get:a}=yr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function hi(e){const t=X(this),{has:n,get:r}=yr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function gi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function Hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Na:e?La:_n;return!e&&Ee(s,"iterate",Ct),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Un(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Na:t?La:_n;return!t&&Ee(i,"iterate",l?Qr:Ct),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function Dl(){const e={get(i){return jn(this,i)},get size(){return Dn(this)},has:zn,add:mi,set:pi,delete:hi,clear:gi,forEach:Hn(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return Dn(this)},has:zn,add:mi,set:pi,delete:hi,clear:gi,forEach:Hn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Dn(this,!0)},has(i){return zn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Hn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Dn(this,!0)},has(i){return zn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Un(i,!1,!1),n[i]=Un(i,!0,!1),t[i]=Un(i,!1,!0),r[i]=Un(i,!0,!0)}),[e,n,t,r]}const[Hl,Ul,Bl,Yl]=Dl();function Ma(e,t){const n=t?e?Yl:Bl:e?Ul:Hl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Wl={get:Ma(!1,!1)},Kl={get:Ma(!1,!0)},ql={get:Ma(!0,!1)},zo=new WeakMap,Do=new WeakMap,Ho=new WeakMap,Vl=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(e){return e.__v_skip||!Object.isExtensible(e)?0:Xl(vl(e))}function Tn(e){return Vt(e)?e:$a(e,!1,jo,Wl,zo)}function Ql(e){return $a(e,!1,zl,Kl,Do)}function Uo(e){return $a(e,!0,jl,ql,Ho)}function $a(e,t,n,r,a){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Gl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Yt(e){return Vt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function Bo(e){return Yt(e)||Vt(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Yo(e){return ir(e,"__v_skip",!0),e}const _n=e=>se(e)?Tn(e):e,La=e=>se(e)?Uo(e):e;function Wo(e){ft&&Ne&&(e=X(e),$o(e.dep||(e.dep=Ia())))}function Ko(e,t){e=X(e);const n=e.dep;n&&Jr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Jl(e){return qo(e,!1)}function Zl(e){return qo(e,!0)}function qo(e,t){return ve(e)?e:new ec(e,t)}class ec{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:_n(t)}get value(){return Wo(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Vt(t);t=n?t:X(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_n(t),Ko(this))}}function Wt(e){return ve(e)?e.value:e}const tc={get:(e,t,n)=>Wt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return Yt(e)?e:new Proxy(e,tc)}var Xo;class nc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xo]=!1,this._dirty=!0,this.effect=new Ra(t,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return Wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Xo="__v_isReadonly";function rc(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=je):(r=e.get,a=e.set),new nc(r,a,i||!a,n)}function ut(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function ze(e,t,n,r){if(U(e)){const i=ut(e,t,n,r);return i&&So(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ut(l,null,10,[e,o,s]);return}}ac(e,n,a,r)}function ac(e,t,n,r=!0){console.error(e)}let xn=!1,Zr=!1;const ge=[];let We=0;const Kt=[];let Xe=null,Et=0;const Go=Promise.resolve();let Fa=null;function Qo(e){const t=Fa||Go;return e?t.then(this?e.bind(this):e):t}function ic(e){let t=We+1,n=ge.length;for(;t<n;){const r=t+n>>>1;wn(ge[r])<e?t=r+1:n=r}return t}function ja(e){(!ge.length||!ge.includes(e,xn&&e.allowRecurse?We+1:We))&&(e.id==null?ge.push(e):ge.splice(ic(e.id),0,e),Jo())}function Jo(){!xn&&!Zr&&(Zr=!0,Fa=Go.then(es))}function oc(e){const t=ge.indexOf(e);t>We&&ge.splice(t,1)}function sc(e){H(e)?Kt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Et+1:Et))&&Kt.push(e),Jo()}function vi(e,t=xn?We+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function Zo(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>wn(n)-wn(r)),Et=0;Et<Xe.length;Et++)Xe[Et]();Xe=null,Et=0}}const wn=e=>e.id==null?1/0:e.id,lc=(e,t)=>{const n=wn(e)-wn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function es(e){Zr=!1,xn=!0,ge.sort(lc);const t=je;try{for(We=0;We<ge.length;We++){const n=ge[We];n&&n.active!==!1&&ut(n,null,14)}}finally{We=0,ge.length=0,Zo(),xn=!1,Fa=null,(ge.length||Kt.length)&&es()}}function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||ae;p&&(a=n.map(g=>he(g)?g.trim():g)),d&&(a=n.map(_l))}let s,l=r[s=$r(t)]||r[s=$r(qe(t))];!l&&i&&(l=r[s=$r(en(t))]),l&&ze(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,a)}}function ts(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=ts(f,t,!0);c&&(s=!0,_e(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(se(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):_e(o,i),se(e)&&r.set(e,o),o)}function xr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,en(t))||V(e,t))}let $e=null,wr=null;function sr(e){const t=$e;return $e=e,wr=e&&e.type.__scopeId||null,t}function kr(e){wr=e}function Er(){wr=null}function fc(e,t=$e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Oi(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&Oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let $,b;const x=sr(e);try{if(n.shapeFlag&4){const z=a||r;$=Ye(c.call(z,z,d,i,g,p,A)),b=l}else{const z=t;$=Ye(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),b=t.props?l:uc(l)}}catch(z){mn.length=0,_r(z,e,1),$=me(kn)}let O=$;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:W}=O;z.length&&W&7&&(o&&z.some(Oa)&&(b=dc(b,o)),O=Xt(O,b))}return n.dirs&&(O=Xt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),$=O,sr(x),$}const uc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},dc=(e,t)=>{const n={};for(const r in e)(!Oa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!xr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?bi(r,o,f):!0:!!o;return!1}function bi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function pc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hc=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):sc(e)}function er(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=de||$e;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Bn={};function un(e,t,n){return ns(e,t,n)}function ns(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ae){const s=El()===(de==null?void 0:de.scope)?de:null;let l,f=!1,c=!1;if(ve(e)?(l=()=>e.value,f=or(e)):Yt(e)?(l=()=>e,r=!0):H(e)?(c=!0,f=e.some(O=>Yt(O)||or(O)),l=()=>e.map(O=>{if(ve(O))return O.value;if(Yt(O))return zt(O);if(U(O))return ut(O,s,2)})):U(e)?t?l=()=>ut(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[p])}:l=je,t&&r){const O=l;l=()=>zt(O())}let d,p=O=>{d=b.onStop=()=>{ut(O,s,4)}},g;if(An)if(p=je,t?n&&ze(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const O=uf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return je;let A=c?new Array(e.length).fill(Bn):Bn;const S=()=>{if(b.active)if(t){const O=b.run();(r||f||(c?O.some((z,W)=>yn(z,A[W])):yn(O,A)))&&(d&&d(),ze(t,s,3,[O,A===Bn?void 0:c&&A[0]===Bn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let $;a==="sync"?$=S:a==="post"?$=()=>ke(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),$=()=>ja(S));const b=new Ra(l,$);t?n?S():A=b.run():a==="post"?ke(b.run.bind(b),s&&s.suspense):b.run();const x=()=>{b.stop(),s&&s.scope&&Pa(s.scope.effects,b)};return g&&g.push(x),x}function vc(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?rs(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=de;Gt(this);const s=ns(a,i.bind(r),n);return o?Gt(o):Rt(),s}function rs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function zt(e,t){if(!se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))zt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)zt(e[n],t);else if(Co(e)||Bt(e))e.forEach(n=>{zt(n,t)});else if(Ro(e))for(const n in e)zt(e[n],t);return e}function Nn(e){return U(e)?{setup:e,name:e.name}:e}const tr=e=>!!e.type.__asyncLoader,as=e=>e.type.__isKeepAlive;function bc(e,t){is(e,"a",t)}function yc(e,t){is(e,"da",t)}function is(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)as(a.parent.vnode)&&_c(r,t,n,a),a=a.parent}}function _c(e,t,n,r){const a=Ar(t,e,r,!0);os(()=>{Pa(r[t],a)},n)}function Ar(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Gt(n);const s=ze(t,n,e,o);return Rt(),nn(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=de)=>(!An||e==="sp")&&Ar(e,(...r)=>t(...r),n),xc=nt("bm"),wc=nt("m"),kc=nt("bu"),Ec=nt("u"),Ac=nt("bum"),os=nt("um"),Oc=nt("sp"),Pc=nt("rtg"),Cc=nt("rtc");function Sc(e,t=de){Ar("ec",e,t)}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),ze(l,n,8,[e.el,s,e,t]),nn())}}const ss="components";function St(e,t){return Rc(ss,e,!0,t)||e}const Ic=Symbol();function Rc(e,t,n=!0,r=!1){const a=$e||de;if(a){const i=a.type;if(e===ss){const s=lf(i,!1);if(s&&(s===t||s===qe(t)||s===br(qe(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[qe(t)]||e[br(qe(t))])}const ea=e=>e?vs(e)?Ua(e)||e.proxy:ea(e.parent):null,dn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>za(e),$forceUpdate:e=>e.f||(e.f=()=>ja(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>vc.bind(e)}),jr=(e,t)=>e!==ae&&!e.__isScriptSetup&&V(e,t),Tc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(jr(r,t))return o[t]=1,r[t];if(a!==ae&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==ae&&V(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const c=dn[t];let d,p;if(c)return t==="$attrs"&&Ee(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ae&&V(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return jr(a,t)?(a[t]=n,!0):r!==ae&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ae&&V(e,o)||jr(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(dn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ta=!0;function Nc(e){const t=za(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&_i(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:$,beforeDestroy:b,beforeUnmount:x,destroyed:O,unmounted:z,render:W,renderTracked:re,renderTriggered:le,errorCaptured:Ae,serverPrefetch:be,expose:Ce,inheritAttrs:at,components:He,directives:Mt,filters:yt}=t;if(f&&Mc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Q=o[Z];U(Q)&&(r[Z]=Q.bind(n))}if(a){const Z=a.call(n,n);se(Z)&&(e.data=Tn(Z))}if(ta=!0,i)for(const Z in i){const Q=i[Z],Se=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):je,_t=!U(Q)&&U(Q.set)?Q.set.bind(n):je,Ie=oe({get:Se,set:_t});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:xe=>Ie.value=xe})}if(s)for(const Z in s)ls(s[Z],r,n,Z);if(l){const Z=U(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Q=>{er(Q,Z[Q])})}c&&_i(c,e,"c");function fe(Z,Q){H(Q)?Q.forEach(Se=>Z(Se.bind(n))):Q&&Z(Q.bind(n))}if(fe(xc,d),fe(wc,p),fe(kc,g),fe(Ec,A),fe(bc,S),fe(yc,$),fe(Sc,Ae),fe(Cc,re),fe(Pc,le),fe(Ac,x),fe(os,z),fe(Oc,be),H(Ce))if(Ce.length){const Z=e.exposed||(e.exposed={});Ce.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:Se=>n[Q]=Se})})}else e.exposed||(e.exposed={});W&&e.render===je&&(e.render=W),at!=null&&(e.inheritAttrs=at),He&&(e.components=He),Mt&&(e.directives=Mt)}function Mc(e,t,n=je,r=!1){H(e)&&(e=na(e));for(const a in e){const i=e[a];let o;se(i)?"default"in i?o=Qe(i.from||a,i.default,!0):o=Qe(i.from||a):o=Qe(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function _i(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ls(e,t,n,r){const a=r.includes(".")?rs(n,r):()=>n[r];if(he(e)){const i=t[e];U(i)&&un(a,i)}else if(U(e))un(a,e.bind(n));else if(se(e))if(H(e))e.forEach(i=>ls(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&un(a,i,e)}}function za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>lr(l,f,o,!0)),lr(l,t,o)),se(t)&&i.set(t,l),l}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$c[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $c={data:xi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:kt,directives:kt,watch:Fc,provide:xi,inject:Lc};function xi(e,t){return t?e?function(){return _e(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Lc(e,t){return kt(na(e),na(t))}function na(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?_e(_e(Object.create(null),e),t):t}function Fc(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function jc(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ql(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function zc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(xr(e.emitsOptions,p))continue;const g=t[p];if(l)if(V(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const A=qe(p);a[A]=ra(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{cs(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!V(t,d)&&((c=en(d))===d||!V(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ra(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d))&&(delete i[d],f=!0)}f&&Je(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Zn(l))continue;const f=t[l];let c;a&&V(a,c=qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:xr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=X(n),f=s||ae;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ra(a,l,d,f[d],e,!V(f,d))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Gt(a),r=f[n]=l.call(null,t),Rt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=d=>{l=!0;const[p,g]=fs(d,t,!0);_e(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return se(e)&&r.set(e,Ut),Ut;if(H(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);wi(d)&&(o[d]=ae)}else if(i)for(const c in i){const d=qe(c);if(wi(d)){const p=i[c],g=o[d]=H(p)||U(p)?{type:p}:Object.assign({},p);if(g){const A=Ai(Boolean,g.type),S=Ai(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||V(g,"default"))&&s.push(d)}}}const f=[o,s];return se(e)&&r.set(e,f),f}function wi(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ei(e,t){return ki(e)===ki(t)}function Ai(e,t){return H(t)?t.findIndex(n=>Ei(n,e)):U(t)&&Ei(t,e)?0:-1}const us=e=>e[0]==="_"||e==="$stable",Da=e=>H(e)?e.map(Ye):[Ye(e)],Dc=(e,t,n)=>{if(t._n)return t;const r=fc((...a)=>Da(t(...a)),n);return r._c=!1,r},ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(us(a))continue;const i=e[a];if(U(i))t[a]=Dc(a,i,r);else if(i!=null){const o=Da(i);t[a]=()=>o}}},ms=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Hc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),ir(t,"_",n)):ds(t,e.slots={})}else e.slots={},t&&ms(e,t);ir(e.slots,Pr,1)},Uc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ds(t,a)),o=t}else t&&(ms(e,t),o={default:1});if(i)for(const s in a)!us(s)&&!(s in o)&&delete a[s]};function ps(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function Yc(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!se(a)&&(a=null);const i=ps(),o=new Set;let s=!1;const l=i.app={_uid:Bc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=me(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Ua(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function aa(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>aa(p,t&&(H(t)?t[g]:t),n,r,a));return}if(tr(r)&&!a)return;const i=r.shapeFlag&4?Ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ae?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,V(d,f)&&(d[f]=null)):ve(f)&&(f.value=null)),U(l))ut(l,s,12,[o,c]);else{const p=he(l),g=ve(l);if(p||g){const A=()=>{if(e.f){const S=p?V(d,l)?d[l]:c[l]:l.value;a?H(S)&&Pa(S,i):H(S)?S.includes(i)||S.push(i):p?(c[l]=[i],V(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,V(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,ke(A,n)):A()}}}const ke=gc;function Wc(e){return Kc(e)}function Kc(e,t){const n=xl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=je,insertStaticContent:A}=e,S=(u,m,h,v=null,_=null,E=null,I=!1,k=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=C(u),xe(u,_,E,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:F,shapeFlag:N}=m;switch(w){case Or:$(u,m,h,v);break;case kn:b(u,m,h,v);break;case zr:u==null&&x(m,h,v,I);break;case Ge:He(u,m,h,v,_,E,I,k,P);break;default:N&1?W(u,m,h,v,_,E,I,k,P):N&6?Mt(u,m,h,v,_,E,I,k,P):(N&64||N&128)&&w.process(u,m,h,v,_,E,I,k,P,q)}F!=null&&_&&aa(F,u&&u.ref,E,m||u,!m)},$=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&f(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},x=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},z=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},W=(u,m,h,v,_,E,I,k,P)=>{I=I||m.type==="svg",u==null?re(m,h,v,_,E,I,k,P):be(u,m,_,E,I,k,P)},re=(u,m,h,v,_,E,I,k)=>{let P,w;const{type:F,props:N,shapeFlag:j,transition:D,dirs:K}=u;if(P=u.el=o(u.type,E,N&&N.is,N),j&8?c(P,u.children):j&16&&Ae(u.children,P,null,v,_,E&&F!=="foreignObject",I,k),K&&xt(u,null,v,"created"),le(P,u,u.scopeId,I,v),N){for(const J in N)J!=="value"&&!Zn(J)&&i(P,J,null,N[J],E,u.children,v,_,R);"value"in N&&i(P,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Be(w,v,u)}K&&xt(u,null,v,"beforeMount");const ee=(!_||_&&!_.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(P),r(P,m,h),((w=N&&N.onVnodeMounted)||ee||K)&&ke(()=>{w&&Be(w,v,u),ee&&D.enter(P),K&&xt(u,null,v,"mounted")},_)},le=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let E=0;E<v.length;E++)g(u,v[E]);if(_){let E=_.subTree;if(m===E){const I=_.vnode;le(u,I,I.scopeId,I.slotScopeIds,_.parent)}}},Ae=(u,m,h,v,_,E,I,k,P=0)=>{for(let w=P;w<u.length;w++){const F=u[w]=k?lt(u[w]):Ye(u[w]);S(null,F,m,h,v,_,E,I,k)}},be=(u,m,h,v,_,E,I)=>{const k=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:F}=m;P|=u.patchFlag&16;const N=u.props||ae,j=m.props||ae;let D;h&&wt(h,!1),(D=j.onVnodeBeforeUpdate)&&Be(D,h,m,u),F&&xt(m,u,h,"beforeUpdate"),h&&wt(h,!0);const K=_&&m.type!=="foreignObject";if(w?Ce(u.dynamicChildren,w,k,h,v,K,E):I||Q(u,m,k,null,h,v,K,E,!1),P>0){if(P&16)at(k,m,N,j,h,v,_);else if(P&2&&N.class!==j.class&&i(k,"class",null,j.class,_),P&4&&i(k,"style",N.style,j.style,_),P&8){const ee=m.dynamicProps;for(let J=0;J<ee.length;J++){const ue=ee[J],Re=N[ue],Lt=j[ue];(Lt!==Re||ue==="value")&&i(k,ue,Re,Lt,_,u.children,h,v,R)}}P&1&&u.children!==m.children&&c(k,m.children)}else!I&&w==null&&at(k,m,N,j,h,v,_);((D=j.onVnodeUpdated)||F)&&ke(()=>{D&&Be(D,h,m,u),F&&xt(m,u,h,"updated")},v)},Ce=(u,m,h,v,_,E,I)=>{for(let k=0;k<m.length;k++){const P=u[k],w=m[k],F=P.el&&(P.type===Ge||!sn(P,w)||P.shapeFlag&70)?d(P.el):h;S(P,w,F,null,v,_,E,I,!0)}},at=(u,m,h,v,_,E,I)=>{if(h!==v){if(h!==ae)for(const k in h)!Zn(k)&&!(k in v)&&i(u,k,h[k],null,I,m.children,_,E,R);for(const k in v){if(Zn(k))continue;const P=v[k],w=h[k];P!==w&&k!=="value"&&i(u,k,w,P,I,m.children,_,E,R)}"value"in v&&i(u,"value",h.value,v.value)}},He=(u,m,h,v,_,E,I,k,P)=>{const w=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(w,h,v),r(F,h,v),Ae(m.children,h,F,_,E,I,k,P)):N>0&&N&64&&j&&u.dynamicChildren?(Ce(u.dynamicChildren,j,h,_,E,I,k),(m.key!=null||_&&m===_.subTree)&&hs(u,m,!0)):Q(u,m,h,F,_,E,I,k,P)},Mt=(u,m,h,v,_,E,I,k,P)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,I,P):yt(m,h,v,_,E,I,P):an(u,m,P)},yt=(u,m,h,v,_,E,I)=>{const k=u.component=nf(u,v,_);if(as(u)&&(k.ctx.renderer=q),rf(k),k.asyncDep){if(_&&_.registerDep(k,fe),!u.el){const P=k.subTree=me(kn);b(null,P,m,h)}return}fe(k,u,m,h,_,E,I)},an=(u,m,h)=>{const v=m.component=u.component;if(mc(u,m,h))if(v.asyncDep&&!v.asyncResolved){Z(v,m,h);return}else v.next=m,oc(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,_,E,I)=>{const k=()=>{if(u.isMounted){let{next:F,bu:N,u:j,parent:D,vnode:K}=u,ee=F,J;wt(u,!1),F?(F.el=K.el,Z(u,F,I)):F=K,N&&Lr(N),(J=F.props&&F.props.onVnodeBeforeUpdate)&&Be(J,D,F,K),wt(u,!0);const ue=Fr(u),Re=u.subTree;u.subTree=ue,S(Re,ue,d(Re.el),C(Re),u,_,E),F.el=ue.el,ee===null&&pc(u,ue.el),j&&ke(j,_),(J=F.props&&F.props.onVnodeUpdated)&&ke(()=>Be(J,D,F,K),_)}else{let F;const{el:N,props:j}=m,{bm:D,m:K,parent:ee}=u,J=tr(m);if(wt(u,!1),D&&Lr(D),!J&&(F=j&&j.onVnodeBeforeMount)&&Be(F,ee,m),wt(u,!0),N&&Y){const ue=()=>{u.subTree=Fr(u),Y(N,u.subTree,u,_,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Fr(u);S(null,ue,h,v,u,_,E),m.el=ue.el}if(K&&ke(K,_),!J&&(F=j&&j.onVnodeMounted)){const ue=m;ke(()=>Be(F,ee,ue),_)}(m.shapeFlag&256||ee&&tr(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&ke(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ra(k,()=>ja(w),u.scope),w=u.update=()=>P.run();w.id=u.uid,wt(u,!0),w()},Z=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,zc(u,m.props,v,h),Uc(u,m.children,h),tn(),vi(),nn()},Q=(u,m,h,v,_,E,I,k,P=!1)=>{const w=u&&u.children,F=u?u.shapeFlag:0,N=m.children,{patchFlag:j,shapeFlag:D}=m;if(j>0){if(j&128){_t(w,N,h,v,_,E,I,k,P);return}else if(j&256){Se(w,N,h,v,_,E,I,k,P);return}}D&8?(F&16&&R(w,_,E),N!==w&&c(h,N)):F&16?D&16?_t(w,N,h,v,_,E,I,k,P):R(w,_,E,!0):(F&8&&c(h,""),D&16&&Ae(N,h,v,_,E,I,k,P))},Se=(u,m,h,v,_,E,I,k,P)=>{u=u||Ut,m=m||Ut;const w=u.length,F=m.length,N=Math.min(w,F);let j;for(j=0;j<N;j++){const D=m[j]=P?lt(m[j]):Ye(m[j]);S(u[j],D,h,null,_,E,I,k,P)}w>F?R(u,_,E,!0,!1,N):Ae(m,h,v,_,E,I,k,P,N)},_t=(u,m,h,v,_,E,I,k,P)=>{let w=0;const F=m.length;let N=u.length-1,j=F-1;for(;w<=N&&w<=j;){const D=u[w],K=m[w]=P?lt(m[w]):Ye(m[w]);if(sn(D,K))S(D,K,h,null,_,E,I,k,P);else break;w++}for(;w<=N&&w<=j;){const D=u[N],K=m[j]=P?lt(m[j]):Ye(m[j]);if(sn(D,K))S(D,K,h,null,_,E,I,k,P);else break;N--,j--}if(w>N){if(w<=j){const D=j+1,K=D<F?m[D].el:v;for(;w<=j;)S(null,m[w]=P?lt(m[w]):Ye(m[w]),h,K,_,E,I,k,P),w++}}else if(w>j)for(;w<=N;)xe(u[w],_,E,!0),w++;else{const D=w,K=w,ee=new Map;for(w=K;w<=j;w++){const Oe=m[w]=P?lt(m[w]):Ye(m[w]);Oe.key!=null&&ee.set(Oe.key,w)}let J,ue=0;const Re=j-K+1;let Lt=!1,oi=0;const on=new Array(Re);for(w=0;w<Re;w++)on[w]=0;for(w=D;w<=N;w++){const Oe=u[w];if(ue>=Re){xe(Oe,_,E,!0);continue}let Ue;if(Oe.key!=null)Ue=ee.get(Oe.key);else for(J=K;J<=j;J++)if(on[J-K]===0&&sn(Oe,m[J])){Ue=J;break}Ue===void 0?xe(Oe,_,E,!0):(on[Ue-K]=w+1,Ue>=oi?oi=Ue:Lt=!0,S(Oe,m[Ue],h,null,_,E,I,k,P),ue++)}const si=Lt?qc(on):Ut;for(J=si.length-1,w=Re-1;w>=0;w--){const Oe=K+w,Ue=m[Oe],li=Oe+1<F?m[Oe+1].el:v;on[w]===0?S(null,Ue,h,li,_,E,I,k,P):Lt&&(J<0||w!==si[J]?Ie(Ue,h,li,2):J--)}}},Ie=(u,m,h,v,_=null)=>{const{el:E,type:I,transition:k,children:P,shapeFlag:w}=u;if(w&6){Ie(u.component.subTree,m,h,v);return}if(w&128){u.suspense.move(m,h,v);return}if(w&64){I.move(u,m,h,q);return}if(I===Ge){r(E,m,h);for(let N=0;N<P.length;N++)Ie(P[N],m,h,v);r(u.anchor,m,h);return}if(I===zr){O(u,m,h);return}if(v!==2&&w&1&&k)if(v===0)k.beforeEnter(E),r(E,m,h),ke(()=>k.enter(E),_);else{const{leave:N,delayLeave:j,afterLeave:D}=k,K=()=>r(E,m,h),ee=()=>{N(E,()=>{K(),D&&D()})};j?j(E,K,ee):ee()}else r(E,m,h)},xe=(u,m,h,v=!1,_=!1)=>{const{type:E,props:I,ref:k,children:P,dynamicChildren:w,shapeFlag:F,patchFlag:N,dirs:j}=u;if(k!=null&&aa(k,null,h,u,!0),F&256){m.ctx.deactivate(u);return}const D=F&1&&j,K=!tr(u);let ee;if(K&&(ee=I&&I.onVnodeBeforeUnmount)&&Be(ee,m,u),F&6)y(u.component,h,v);else{if(F&128){u.suspense.unmount(h,v);return}D&&xt(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,h,_,q,v):w&&(E!==Ge||N>0&&N&64)?R(w,m,h,!1,!0):(E===Ge&&N&384||!_&&F&16)&&R(P,m,h),v&&$t(u)}(K&&(ee=I&&I.onVnodeUnmounted)||D)&&ke(()=>{ee&&Be(ee,m,u),D&&xt(u,null,m,"unmounted")},h)},$t=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ge){Fn(h,v);return}if(m===zr){z(u);return}const E=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:I,delayLeave:k}=_,P=()=>I(h,E);k?k(u.el,E,P):P()}else E()},Fn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:_,update:E,subTree:I,um:k}=u;v&&Lr(v),_.stop(),E&&(E.active=!1,xe(I,u,m,h)),k&&ke(k,m),ke(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(u,m,h,v=!1,_=!1,E=0)=>{for(let I=E;I<u.length;I++)xe(u[I],m,h,v,_)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),L=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),vi(),Zo(),m._vnode=u},q={p:S,um:xe,m:Ie,r:$t,mt:yt,mc:Ae,pc:Q,pbc:Ce,n:C,o:e};let ie,Y;return t&&([ie,Y]=t(q)),{render:L,hydrate:ie,createApp:Yc(L,ie)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hs(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||hs(o,s)),s.type===Or&&(s.el=o.el)}}function qc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vc=e=>e.__isTeleport,Ge=Symbol(void 0),Or=Symbol(void 0),kn=Symbol(void 0),zr=Symbol(void 0),mn=[];let Le=null;function gt(e=!1){mn.push(Le=e?null:[])}function Xc(){mn.pop(),Le=mn[mn.length-1]||null}let En=1;function Oi(e){En+=e}function Gc(e){return e.dynamicChildren=En>0?Le||Ut:null,Xc(),En>0&&Le&&Le.push(e),e}function vt(e,t,n,r,a,i){return Gc(B(e,t,n,r,a,i,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",gs=({key:e})=>e??null,nr=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||ve(e)||U(e)?{i:$e,r:e,k:t,f:!!n}:e:null;function B(e,t=null,n=null,r=0,a=null,i=e===Ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gs(t),ref:t&&nr(t),scopeId:wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:$e};return s?(Ha(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),En>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const me=Qc;function Qc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ic)&&(e=kn),ia(e)){const s=Xt(e,t,!0);return n&&Ha(s,n),En>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(cf(e)&&(e=e.__vccOpts),t){t=Jc(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=Aa(s)),se(l)&&(Bo(l)&&!H(l)&&(l=_e({},l)),t.style=Ea(l))}const o=he(e)?1:hc(e)?128:Vc(e)?64:se(e)?4:U(e)?2:0;return B(e,t,n,r,a,o,i,!0)}function Jc(e){return e?Bo(e)||Pr in e?_e({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&gs(s),ref:t&&t.ref?n&&a?H(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function It(e=" ",t=0){return me(Or,null,e,t)}function Ye(e){return e==null||typeof e=="boolean"?me(kn):H(e)?me(Ge,null,e.slice()):typeof e=="object"?lt(e):me(Or,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function Ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ha(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=$e:a===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[It(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Aa([t.class,r.class]));else if(a==="style")t.style=Ea([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){ze(e,t,7,[n,r])}const ef=ps();let tf=0;function nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ef,i={uid:tf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fs(r,a),emitsOptions:ts(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cc.bind(null,i),e.ce&&e.ce(i),i}let de=null;const Gt=e=>{de=e,e.scope.on()},Rt=()=>{de&&de.scope.off(),de=null};function vs(e){return e.vnode.shapeFlag&4}let An=!1;function rf(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=vs(e);jc(e,n,a,t),Hc(e,r);const i=a?af(e,t):void 0;return An=!1,i}function af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yo(new Proxy(e.ctx,Tc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?sf(e):null;Gt(e),tn();const i=ut(r,e,0,[e.props,a]);if(nn(),Rt(),So(i)){if(i.then(Rt,Rt),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else bs(e,t)}function Pi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=Vo(t)),bs(e,n)}let Ci;function bs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ci&&!r.render){const a=r.template||za(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=Ci(a,f)}}e.render=r.render||je}Gt(e),tn(),Nc(e),nn(),Rt()}function of(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function sf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=of(e))},slots:e.slots,emit:e.emit,expose:t}}function Ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function lf(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return U(e)&&"__vccOpts"in e}const oe=(e,t)=>rc(e,t,An);function Cr(e,t,n){const r=arguments.length;return r===2?se(t)&&!H(t)?ia(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),me(e,t,n))}const ff=Symbol(""),uf=()=>Qe(ff),df="3.2.47",mf="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,Si=At&&At.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(mf,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gf(e,t,n){const r=e.style,a=he(n);if(n&&!a){if(t&&!he(t))for(const i in t)n[i]==null&&oa(r,i,"");for(const i in n)oa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ii=/\s*!important$/;function oa(e,t,n){if(H(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vf(e,t);Ii.test(n)?e.setProperty(en(r),n.replace(Ii,""),"important"):e[r]=n}}const Ri=["Webkit","Moz","ms"],Dr={};function vf(e,t){const n=Dr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=br(r);for(let a=0;a<Ri.length;a++){const i=Ri[a]+r;if(i in e)return Dr[t]=i}return t}const Ti="http://www.w3.org/1999/xlink";function bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ti,t.slice(6,t.length)):e.setAttributeNS(Ti,t,n);else{const i=dl(t);n==null||i&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function xf(e,t,n,r){e.removeEventListener(t,n,r)}function wf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=kf(t);if(r){const f=i[t]=Of(r,a);_f(e,s,f,l)}else o&&(xf(e,s,o,l),i[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function kf(e){let t;if(Ni.test(e)){t={};let r;for(;r=e.match(Ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Hr=0;const Ef=Promise.resolve(),Af=()=>Hr||(Ef.then(()=>Hr=0),Hr=Date.now());function Of(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Pf(r,n.value),t,5,[r])};return n.value=e,n.attached=Af(),n}function Pf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Mi=/^on[a-z]/,Cf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?hf(e,r,a):t==="style"?gf(e,n,r):hr(t)?Oa(t)||wf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?yf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Mi.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mi.test(t)&&he(n)?!1:t in e}const If=_e({patchProp:Cf},pf);let $i;function Rf(){return $i||($i=Wc(If))}const Tf=(...e)=>{const t=Rf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Nf(e){return he(e)?document.querySelector(e):e}const bt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Mf={name:"Navbar"},$f=e=>(kr("data-v-8b5c606d"),e=e(),Er(),e),Lf={class:"navbar"},Ff={class:"container"},jf=$f(()=>B("a",{class:"navbar-brand",href:"/"},"Qianzi Li",-1)),zf={class:"navbar-menu"},Df={href:"mailto: qianzi@umich.edu",target:"_blank"},Hf={href:"https://github.com/ste519",target:"_blank"},Uf={href:"https://www.linkedin.com/in/qianzi-li/",target:"_blank"};function Bf(e,t,n,r,a,i){const o=St("font-awesome-icon");return gt(),vt("nav",Lf,[B("div",Ff,[jf,B("ul",zf,[B("li",null,[B("a",Df,[me(o,{icon:"fa-solid fa-envelope"}),It("Email")])]),B("li",null,[B("a",Hf,[me(o,{icon:"fa-brands fa-github"}),It("Github")])]),B("li",null,[B("a",Uf,[me(o,{icon:"fa-brands fa-linkedin"}),It("LinkedIn")])])])])])}const Yf=bt(Mf,[["render",Bf],["__scopeId","data-v-8b5c606d"]]);const Wf={name:"Footer",data(){return{currentYear:new Date().getFullYear()}}},Kf={class:"footer"},qf={class:"container"};function Vf(e,t,n,r,a,i){return gt(),vt("footer",Kf,[B("div",qf,[B("p",null,"© "+ml(a.currentYear)+" Qianzi Li. All rights reserved.",1)])])}const Xf=bt(Wf,[["render",Vf],["__scopeId","data-v-38dc97a1"]]);const Gf={components:{Navbar:Yf,Footer:Xf}},Qf={id:"app"};function Jf(e,t,n,r,a,i){const o=St("Navbar"),s=St("router-view"),l=St("Footer");return gt(),vt("div",Qf,[me(o),me(s),me(l)])}const Zf=bt(Gf,[["render",Jf],["__scopeId","data-v-00f7d901"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function eu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Ur(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const pn=()=>{},De=Array.isArray,tu=/\/$/,nu=e=>e.replace(tu,"");function Br(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=ou(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function ru(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Qt(t.matched[r],n.matched[a])&&ys(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ys(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!iu(e[n],t[n]))return!1;return!0}function iu(e,t){return De(e)?Fi(e,t):De(t)?Fi(t,e):e===t}function Fi(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ou(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var On;(function(e){e.pop="pop",e.push="push"})(On||(On={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function su(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nu(e)}const lu=/^[^#]+#/;function cu(e,t){return e.replace(lu,"#")+t}function fu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function uu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=fu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function du(e,t){sa.set(e,t)}function mu(e){const t=sa.get(e);return sa.delete(e),t}let pu=()=>location.protocol+"//"+location.host;function _s(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function hu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=_s(e,location),A=n.value,S=t.value;let $=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}$=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:$,type:On.pop,direction:$?$>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Sr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function zi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Sr():null}}function gu(e){const{history:t,location:n}=window,r={value:_s(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:pu()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=G({},t.state,zi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=G({},a.value,t.state,{forward:l,scroll:Sr()});i(c.current,c,!0);const d=G({},zi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function vu(e){e=su(e);const t=gu(e),n=hu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:cu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function bu(e){return typeof e=="string"||e&&typeof e=="object"}function xs(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ws=Symbol("");var Di;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Di||(Di={}));function Jt(e,t){return G(new Error,{type:e,[ws]:!0},t)}function Ve(e,t){return e instanceof Error&&ws in e&&(t==null||!!(e.type&t))}const Hi="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},_u=/[.+*?^${}()[\]/\\]/g;function xu(e,t){const n=G({},yu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(_u,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:$,regexp:b}=p;i.push({name:A,repeatable:S,optional:$});const x=b||Hi;if(x!==Hi){g+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${x}): `+z.message)}}let O=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(O=$&&f.length<2?`(?:/${O})`:"/"+O),$&&(O+="?"),a+=O,g+=20,$&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:$}=g,b=A in f?f[A]:"";if(De(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const x=De(b)?b.join("/"):b;if(!x)if($)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=x}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function wu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ku(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=wu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Eu={type:0,value:""},Au=/[a-zA-Z0-9_]/;function Ou(e){if(!e)return[[]];if(e==="/")return[[Eu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Au.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function Pu(e,t,n){const r=xu(Ou(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Cu(e,t){const n=[],r=new Map;t=Wi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,A=Su(c);A.aliasOf=p&&p.record;const S=Wi(t,c),$=[A];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of O)$.push(G({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let b,x;for(const O of $){const{path:z}=O;if(d&&z[0]!=="/"){const W=d.record.path,re=W[W.length-1]==="/"?"":"/";O.path=d.record.path+(z&&re+z)}if(b=Pu(O,d,S),p?p.alias.push(b):(x=x||b,x!==b&&x.alias.push(b),g&&c.name&&!Yi(b)&&o(c.name)),A.children){const W=A.children;for(let re=0;re<W.length;re++)i(W[re],b,p&&p.children[re])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return x?()=>{o(x)}:pn}function o(c){if(xs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&ku(c,n[d])>=0&&(c.record.path!==n[d].record.path||!ks(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Yi(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},A,S;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Jt(1,{location:c});S=p.record.name,g=G(Bi(d.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),c.params&&Bi(c.params,p.keys.map(x=>x.name))),A=p.stringify(g)}else if("path"in c)A=c.path,p=n.find(x=>x.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!p)throw Jt(1,{location:c,currentLocation:d});S=p.record.name,g=G({},d.params,c.params),A=p.stringify(g)}const $=[];let b=p;for(;b;)$.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:$,meta:Ru($)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Bi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Su(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Iu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Iu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ru(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ks(e,t){return t.children.some(n=>n===e||ks(e,n))}const Es=/#/g,Tu=/&/g,Nu=/\//g,Mu=/=/g,$u=/\?/g,As=/\+/g,Lu=/%5B/g,Fu=/%5D/g,Os=/%5E/g,ju=/%60/g,Ps=/%7B/g,zu=/%7C/g,Cs=/%7D/g,Du=/%20/g;function Ba(e){return encodeURI(""+e).replace(zu,"|").replace(Lu,"[").replace(Fu,"]")}function Hu(e){return Ba(e).replace(Ps,"{").replace(Cs,"}").replace(Os,"^")}function la(e){return Ba(e).replace(As,"%2B").replace(Du,"+").replace(Es,"%23").replace(Tu,"%26").replace(ju,"`").replace(Ps,"{").replace(Cs,"}").replace(Os,"^")}function Uu(e){return la(e).replace(Mu,"%3D")}function Bu(e){return Ba(e).replace(Es,"%23").replace($u,"%3F")}function Yu(e){return e==null?"":Bu(e).replace(Nu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(As," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let f=t[s];De(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Ki(e){let t="";for(let n in e){const r=e[n];if(n=Uu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ku(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const qu=Symbol(""),qi=Symbol(""),Ya=Symbol(""),Ss=Symbol(""),ca=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ct(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Jt(4,{from:n,to:t})):d instanceof Error?s(d):bu(d)?s(Jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Yr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Vu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ct(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=eu(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&ct(p,n,r,i,o)()}))}}return a}function Vu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vi(e){const t=Qe(Ya),n=Qe(Ss),r=oe(()=>t.resolve(Wt(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Qt.bind(null,c));if(p>-1)return p;const g=Xi(l[f-2]);return f>1&&Xi(c)===g&&d[d.length-1].path!==g?d.findIndex(Qt.bind(null,l[f-2])):p}),i=oe(()=>a.value>-1&&Ju(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&ys(n.params,r.value.params));function s(l={}){return Qu(l)?t[Wt(e.replace)?"replace":"push"](Wt(e.to)).catch(pn):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Xu=Nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(e,{slots:t}){const n=Tn(Vi(e)),{options:r}=Qe(Ya),a=oe(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Cr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Gu=Xu;function Qu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ju(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e??t??n,Zu=Nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(ca),a=oe(()=>e.route||r.value),i=Qe(qi,0),o=oe(()=>{let f=Wt(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=oe(()=>a.value.matched[o.value]);er(qi,oe(()=>o.value+1)),er(qu,s),er(ca,a);const l=Jl();return un(()=>[l.value,s.value,e.name],([f,c,d],[p,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Qt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Qi(n.default,{Component:p,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,$=Cr(p,G({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Qi(n.default,{Component:$,route:f})||$}}});function Qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ed=Zu;function td(e){const t=Cu(e.routes,e),n=e.parseQuery||Wu,r=e.stringifyQuery||Ki,a=e.history,i=ln(),o=ln(),s=ln(),l=Zl(ot);let f=ot;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ur.bind(null,y=>""+y),d=Ur.bind(null,Yu),p=Ur.bind(null,cr);function g(y,R){let C,L;return xs(y)?(C=t.getRecordMatcher(y),L=R):L=y,t.addRoute(L,C)}function A(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function S(){return t.getRoutes().map(y=>y.record)}function $(y){return!!t.getRecordMatcher(y)}function b(y,R){if(R=G({},R||l.value),typeof y=="string"){const u=Br(n,y,R.path),m=t.resolve({path:u.path},R),h=a.createHref(u.fullPath);return G(u,m,{params:p(m.params),hash:cr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=G({},y,{path:Br(n,y.path,R.path).path});else{const u=G({},y.params);for(const m in u)u[m]==null&&delete u[m];C=G({},y,{params:d(y.params)}),R.params=d(R.params)}const L=t.resolve(C,R),q=y.hash||"";L.params=c(p(L.params));const ie=ru(r,G({},y,{hash:Hu(q),path:L.path})),Y=a.createHref(ie);return G({fullPath:ie,hash:q,query:r===Ki?Ku(y.query):y.query||{}},L,{redirectedFrom:void 0,href:Y})}function x(y){return typeof y=="string"?Br(n,y,l.value.path):G({},y)}function O(y,R){if(f!==y)return Jt(8,{from:R,to:y})}function z(y){return le(y)}function W(y){return z(G(x(y),{replace:!0}))}function re(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:C}=R;let L=typeof C=="function"?C(y):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),G({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function le(y,R){const C=f=b(y),L=l.value,q=y.state,ie=y.force,Y=y.replace===!0,u=re(C);if(u)return le(G(x(u),{state:typeof u=="object"?G({},q,u.state):q,force:ie,replace:Y}),R||C);const m=C;m.redirectedFrom=R;let h;return!ie&&au(r,L,C)&&(h=Jt(16,{to:m,from:L}),_t(L,L,!0,!1)),(h?Promise.resolve(h):be(m,L)).catch(v=>Ve(v)?Ve(v,2)?v:Se(v):Z(v,m,L)).then(v=>{if(v){if(Ve(v,2))return le(G({replace:Y},x(v.to),{state:typeof v.to=="object"?G({},q,v.to.state):q,force:ie}),R||m)}else v=at(m,L,!0,Y,q);return Ce(m,L,v),v})}function Ae(y,R){const C=O(y,R);return C?Promise.reject(C):Promise.resolve()}function be(y,R){let C;const[L,q,ie]=nd(y,R);C=Yr(L.reverse(),"beforeRouteLeave",y,R);for(const u of L)u.leaveGuards.forEach(m=>{C.push(ct(m,y,R))});const Y=Ae.bind(null,y,R);return C.push(Y),Ft(C).then(()=>{C=[];for(const u of i.list())C.push(ct(u,y,R));return C.push(Y),Ft(C)}).then(()=>{C=Yr(q,"beforeRouteUpdate",y,R);for(const u of q)u.updateGuards.forEach(m=>{C.push(ct(m,y,R))});return C.push(Y),Ft(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!R.matched.includes(u))if(De(u.beforeEnter))for(const m of u.beforeEnter)C.push(ct(m,y,R));else C.push(ct(u.beforeEnter,y,R));return C.push(Y),Ft(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Yr(ie,"beforeRouteEnter",y,R),C.push(Y),Ft(C))).then(()=>{C=[];for(const u of o.list())C.push(ct(u,y,R));return C.push(Y),Ft(C)}).catch(u=>Ve(u,8)?u:Promise.reject(u))}function Ce(y,R,C){for(const L of s.list())L(y,R,C)}function at(y,R,C,L,q){const ie=O(y,R);if(ie)return ie;const Y=R===ot,u=jt?history.state:{};C&&(L||Y?a.replace(y.fullPath,G({scroll:Y&&u&&u.scroll},q)):a.push(y.fullPath,q)),l.value=y,_t(y,R,C,Y),Se()}let He;function Mt(){He||(He=a.listen((y,R,C)=>{if(!Fn.listening)return;const L=b(y),q=re(L);if(q){le(G(q,{replace:!0}),L).catch(pn);return}f=L;const ie=l.value;jt&&du(ji(ie.fullPath,C.delta),Sr()),be(L,ie).catch(Y=>Ve(Y,12)?Y:Ve(Y,2)?(le(Y.to,L).then(u=>{Ve(u,20)&&!C.delta&&C.type===On.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),Z(Y,L,ie))).then(Y=>{Y=Y||at(L,ie,!1),Y&&(C.delta&&!Ve(Y,8)?a.go(-C.delta,!1):C.type===On.pop&&Ve(Y,20)&&a.go(-1,!1)),Ce(L,ie,Y)}).catch(pn)}))}let yt=ln(),an=ln(),fe;function Z(y,R,C){Se(y);const L=an.list();return L.length?L.forEach(q=>q(y,R,C)):console.error(y),Promise.reject(y)}function Q(){return fe&&l.value!==ot?Promise.resolve():new Promise((y,R)=>{yt.add([y,R])})}function Se(y){return fe||(fe=!y,Mt(),yt.list().forEach(([R,C])=>y?C(y):R()),yt.reset()),y}function _t(y,R,C,L){const{scrollBehavior:q}=e;if(!jt||!q)return Promise.resolve();const ie=!C&&mu(ji(y.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Qo().then(()=>q(y,R,ie)).then(Y=>Y&&uu(Y)).catch(Y=>Z(Y,y,R))}const Ie=y=>a.go(y);let xe;const $t=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:$,getRoutes:S,resolve:b,options:e,push:z,replace:W,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:an.add,isReady:Q,install(y){const R=this;y.component("RouterLink",Gu),y.component("RouterView",ed),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(l)}),jt&&!xe&&l.value===ot&&(xe=!0,z(a.location).catch(q=>{}));const C={};for(const q in ot)C[q]=oe(()=>l.value[q]);y.provide(Ya,R),y.provide(Ss,Tn(C)),y.provide(ca,l);const L=y.unmount;$t.add(y),y.unmount=function(){$t.delete(y),$t.size<1&&(f=ot,He&&He(),He=null,l.value=ot,xe=!1,fe=!1),L()}}};return Fn}function Ft(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function nd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Qt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Qt(f,l))||a.push(l))}return[n,r,a]}const rd={methods:{downloadResume(){const e="https://drive.google.com/uc?export=download&id=1jCLBcofz0hSdFA4YbQZmzOpClA1JzQA3",t=document.createElement("a");t.href=e,t.download="resume.pdf",t.target="_blank",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};function ad(e,t,n,r,a,i){return gt(),vt("button",{onClick:t[0]||(t[0]=(...o)=>i.downloadResume&&i.downloadResume(...o)),class:"download-button"}," Download Resume ")}const id=bt(rd,[["render",ad],["__scopeId","data-v-f49b8365"]]);const od={name:"Intro",components:{DownloadResume:id}},Wa=e=>(kr("data-v-2b73fe64"),e=e(),Er(),e),sd={id:"intro",class:"intro"},ld={class:"container"},cd=Wa(()=>B("h1",null,[It("Hi, I am "),B("strong",null,"Qianzi Li,")],-1)),fd=Wa(()=>B("h2",null,[It("a UX "),B("strong",null,"Designer"),It(" and "),B("strong",null,"Developer")],-1)),ud=Wa(()=>B("h2",null,"who like to design and build clean user interfaces.",-1));function dd(e,t,n,r,a,i){const o=St("download-resume");return gt(),vt("section",sd,[B("div",ld,[cd,fd,ud,me(o)])])}const md=bt(od,[["render",dd],["__scopeId","data-v-2b73fe64"]]);const pd={name:"Projects",methods:{goToOasis(){this.$router.push("/oasis")},goToEdit(){this.$router.push("/updatepackage")}}},Ir=e=>(kr("data-v-6c8b762c"),e=e(),Er(),e),hd={id:"projects",class:"projects"},gd={class:"container"},vd=Ir(()=>B("span",null,"Learn More",-1)),bd=[vd],yd=Ir(()=>B("a",{class:"project",href:"/informed",id:"informed"},[B("span",null,"Learn More")],-1)),_d=Ir(()=>B("a",{class:"project",href:"/ibiogram",id:"ibiogram"},[B("span",null,"Learn More")],-1)),xd=Ir(()=>B("a",{class:"project",href:"/airs",id:"airs"},[B("span",null,"Learn More")],-1));function wd(e,t,n,r,a,i){return gt(),vt("section",hd,[B("div",gd,[B("a",{class:"project",onClick:t[0]||(t[0]=(...o)=>i.goToOasis&&i.goToOasis(...o)),id:"oasis"},bd),yd,_d,xd])])}const kd=bt(pd,[["render",wd],["__scopeId","data-v-6c8b762c"]]),Ed={components:{Intro:md,Projects:kd}},Ad={class:"container"};function Od(e,t,n,r,a,i){const o=St("Intro"),s=St("Projects");return gt(),vt("div",Ad,[me(o),me(s)])}const Pd=bt(Ed,[["render",Od]]),Cd="/portfolio/assets/oasis_home-aa369a09.svg";const Sd={name:"OasisProject"},Is=e=>(kr("data-v-dcdea026"),e=e(),Er(),e),Id={class:"oasis-project"},Rd=Is(()=>B("div",{class:"image"},[B("img",{src:Cd,alt:"Homepage of OASIS"})],-1)),Td=Is(()=>B("div",{class:"container"},[B("h1",null,"Project: OASIS"),B("h2",null,"The Design Lab @ UCSD | 2020 – Now"),B("div",{class:"oasis-details"},[B("ul",null,[B("li",null," Design and develop the user interface using Figma, React, MUI, Html/CSS, and JavaScript. "),B("li",null,"Upgrade the user interface in response to user feedback."),B("li",null," Collaborate with designers, developers, and scholars to deliver the prototype to potential clients including the RADx-rad team and the Lancet team. ")])])],-1)),Nd=[Rd,Td];function Md(e,t,n,r,a,i){return gt(),vt("div",Id,Nd)}const $d=bt(Sd,[["render",Md],["__scopeId","data-v-dcdea026"]]),Ld=td({history:vu("/portfolio"),routes:[{path:"/",name:"home",component:Pd},{path:"/oasis",name:"oasis",component:$d}]});function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function Fd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jd(e,t,n){return t&&Zi(e.prototype,t),n&&Zi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e,t){return Dd(e)||Ud(e,t)||Rs(e,t)||Yd()}function Mn(e){return zd(e)||Hd(e)||Rs(e)||Bd()}function zd(e){if(Array.isArray(e))return fa(e)}function Dd(e){if(Array.isArray(e))return e}function Hd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ud(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Rs(e,t){if(e){if(typeof e=="string")return fa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fa(e,t)}}function fa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var eo=function(){},qa={},Ts={},Ns=null,Ms={mark:eo,measure:eo};try{typeof window<"u"&&(qa=window),typeof document<"u"&&(Ts=document),typeof MutationObserver<"u"&&(Ns=MutationObserver),typeof performance<"u"&&(Ms=performance)}catch{}var Wd=qa.navigator||{},to=Wd.userAgent,no=to===void 0?"":to,mt=qa,ne=Ts,ro=Ns,Yn=Ms;mt.document;var rt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",$s=~no.indexOf("MSIE")||~no.indexOf("Trident/"),Wn,Kn,qn,Vn,Xn,Ze="___FONT_AWESOME___",ua=16,Ls="fa",Fs="svg-inline--fa",Tt="data-fa-i2svg",da="data-fa-pseudo-element",Kd="data-fa-pseudo-element-pending",Va="data-prefix",Xa="data-icon",ao="fontawesome-i2svg",qd="async",Vd=["HTML","HEAD","STYLE","SCRIPT"],js=function(){try{return!0}catch{return!1}}(),te="classic",ce="sharp",Ga=[te,ce];function $n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Pn=$n((Wn={},pe(Wn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Wn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Wn)),Cn=$n((Kn={},pe(Kn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Kn,ce,{solid:"fass",regular:"fasr",light:"fasl"}),Kn)),Sn=$n((qn={},pe(qn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(qn,ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),qn)),Xd=$n((Vn={},pe(Vn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Vn,ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Vn)),Gd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,zs="fa-layers-text",Qd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jd=$n((Xn={},pe(Xn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Xn,ce,{900:"fass",400:"fasr",300:"fasl"}),Xn)),Ds=[1,2,3,4,5,6,7,8,9,10],Zd=Ds.concat([11,12,13,14,15,16,17,18,19,20]),em=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=new Set;Object.keys(Cn[te]).map(In.add.bind(In));Object.keys(Cn[ce]).map(In.add.bind(In));var tm=[].concat(Ga,Mn(In),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(Ds.map(function(e){return"".concat(e,"x")})).concat(Zd.map(function(e){return"w-".concat(e)})),gn=mt.FontAwesomeConfig||{};function nm(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function rm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var am=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];am.forEach(function(e){var t=Ka(e,2),n=t[0],r=t[1],a=rm(nm(n));a!=null&&(gn[r]=a)})}var Hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ls,replacementClass:Fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Zt=T(T({},Hs),gn);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var M={};Object.keys(Hs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Zt[e]=n,vn.forEach(function(r){return r(M)})},get:function(){return Zt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Zt.cssPrefix=t,vn.forEach(function(n){return n(M)})},get:function(){return Zt.cssPrefix}});mt.FontAwesomeConfig=M;var vn=[];function im(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var st=ua,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function om(e){if(!(!e||!rt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var sm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=sm[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qa(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Us(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Us(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ja(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function cm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function fm(e){var t=e.transform,n=e.width,r=n===void 0?ua:n,a=e.height,i=a===void 0?ua:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$s?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var um=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bs(){var e=Ls,t=Fs,n=M.cssPrefix,r=M.replacementClass,a=um;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var io=!1;function Wr(){M.autoAddCss&&!io&&(om(Bs()),io=!0)}var dm={mixout:function(){return{dom:{css:Bs,insertCss:Wr}}},hooks:function(){return{beforeDOMElementCreation:function(){Wr()},beforeI2svg:function(){Wr()}}}},et=mt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Fe=et[Ze],Ys=[],mm=function e(){ne.removeEventListener("DOMContentLoaded",e),ur=1,Ys.map(function(t){return t()})},ur=!1;rt&&(ur=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),ur||ne.addEventListener("DOMContentLoaded",mm));function pm(e){rt&&(ur?setTimeout(e,0):Ys.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Us(e):"<".concat(t," ").concat(lm(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function oo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var hm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?hm(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function gm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ma(e){var t=gm(e);return t.length===1?t[0].toString(16):null}function vm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function so(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=so(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,so(t)):Fe.styles[e]=T(T({},Fe.styles[e]||{}),i),e==="fas"&&pa("fa",t)}var Gn,Qn,Jn,Dt=Fe.styles,bm=Fe.shims,ym=(Gn={},pe(Gn,te,Object.values(Sn[te])),pe(Gn,ce,Object.values(Sn[ce])),Gn),Za=null,Ws={},Ks={},qs={},Vs={},Xs={},_m=(Qn={},pe(Qn,te,Object.keys(Pn[te])),pe(Qn,ce,Object.keys(Pn[ce])),Qn);function xm(e){return~tm.indexOf(e)}function wm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xm(a)?a:null}var Gs=function(){var t=function(i){return Kr(Dt,function(o,s,l){return o[l]=Kr(s,i,{}),o},{})};Ws=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ks=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Xs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Kr(bm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});qs=r.names,Vs=r.unicodes,Za=Tr(M.styleDefault,{family:M.familyDefault})};im(function(e){Za=Tr(e.styleDefault,{family:M.familyDefault})});Gs();function ei(e,t){return(Ws[e]||{})[t]}function km(e,t){return(Ks[e]||{})[t]}function Pt(e,t){return(Xs[e]||{})[t]}function Qs(e){return qs[e]||{prefix:null,iconName:null}}function Em(e){var t=Vs[e],n=ei("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pt(){return Za}var ti=function(){return{prefix:null,iconName:null,rest:[]}};function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=Pn[r][e],i=Cn[r][e]||Cn[r][a],o=e in Fe.styles?e:null;return i||o||null}var lo=(Jn={},pe(Jn,te,Object.keys(Sn[te])),pe(Jn,ce,Object.keys(Sn[ce])),Jn);function Nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,te,"".concat(M.cssPrefix,"-").concat(te)),pe(t,ce,"".concat(M.cssPrefix,"-").concat(ce)),t),o=null,s=te;(e.includes(i[te])||e.some(function(f){return lo[te].includes(f)}))&&(s=te),(e.includes(i[ce])||e.some(function(f){return lo[ce].includes(f)}))&&(s=ce);var l=e.reduce(function(f,c){var d=wm(M.cssPrefix,c);if(Dt[c]?(c=ym[s].includes(c)?Xd[s][c]:c,o=c,f.prefix=c):_m[s].indexOf(c)>-1?(o=c,f.prefix=Tr(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[te]&&c!==i[ce]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?Qs(f.iconName):{},g=Pt(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ti());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Dt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=pt()||"fas"),l}var Am=function(){function e(){Fd(this,e),this.definitions={}}return jd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),pa(s,o[s]);var l=Sn[te][s];l&&pa(l,o[s]),Gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),co=[],Ht={},qt={},Om=Object.keys(qt);function Pm(e,t){var n=t.mixoutsTo;return co=e,Ht={},Object.keys(qt).forEach(function(r){Om.indexOf(r)===-1&&delete qt[r]}),co.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(qt)}),n}function ha(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function ga(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||pt();if(t)return t=Pt(n,t)||t,oo(Js.definitions,n,t)||oo(Fe.styles,n,t)}var Js=new Am,Cm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Nt("noAuto")},Sm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Nt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,pm(function(){Rm({autoReplaceSvgRoot:n}),Nt("watch",t)})}},Im={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tr(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Gd))){var a=Nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||pt(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=pt();return{prefix:i,iconName:Pt(i,t)||t}}}},Pe={noAuto:Cm,config:M,dom:Sm,parse:Im,library:Js,findIconDefinition:ga,toHtml:Ln},Rm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Tm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ja(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Rr(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Nm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function ni(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,$=A.height,b=a==="fak",x=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat($)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/$*16*.0625,"em")}:{};g&&(O.attributes[Tt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||Rn())},children:[l]}),delete O.attributes.title);var W=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},z),d.styles)}),re=r.found&&n.found?tt("generateAbstractMask",W)||{children:[],attributes:{}}:tt("generateAbstractIcon",W)||{children:[],attributes:{}},le=re.children,Ae=re.attributes;return W.children=le,W.attributes=Ae,s?Nm(W):Tm(W)}function fo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Tt]="");var c=T({},o.styles);Ja(a)&&(c.transform=fm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Mm(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qr=Fe.styles;function va(e){var t=e[0],n=e[1],r=e.slice(4),a=Ka(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var $m={found:!1,width:512,height:512};function Lm(e,t){!js&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ba(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=pt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=Qs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(va(o))}Lm(e,t),r(T(T({},$m),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var uo=function(){},ya=M.measurePerformance&&Yn&&Yn.mark&&Yn.measure?Yn:{mark:uo,measure:uo},fn='FA "6.4.0"',Fm=function(t){return ya.mark("".concat(fn," ").concat(t," begins")),function(){return Zs(t)}},Zs=function(t){ya.mark("".concat(fn," ").concat(t," ends")),ya.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},ri={begin:Fm,end:Zs},rr=function(){};function mo(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function jm(e){var t=e.getAttribute?e.getAttribute(Va):null,n=e.getAttribute?e.getAttribute(Xa):null;return t&&n}function zm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Dm(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function Hm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Um(e){return ne.createElement(e)}function el(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hm:Um:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(el(o,{ceFn:r}))}),a}function Bm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(el(a),n)}),n.getAttribute(Tt)===null&&M.keepOriginalSource){var r=ne.createComment(Bm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qa(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ln(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function po(e){e()}function tl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=po;M.mutateApproach===qd&&(r=mt.requestAnimationFrame||po),r(function(){var a=Dm(),i=ri.begin("mutate");e.map(a),i(),n()})}}var ai=!1;function nl(){ai=!0}function _a(){ai=!1}var dr=null;function ho(e){if(ro&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;dr=new ro(function(f){if(!ai){var c=pt();rn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!mo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&mo(d.target)&&~em.indexOf(d.attributeName))if(d.attributeName==="class"&&jm(d.target)){var p=Nr(Qa(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Va,g||c),A&&d.target.setAttribute(Xa,A)}else zm(d.target)&&a(d.target)})}}),rt&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ym(){dr&&dr.disconnect()}function Wm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Km(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nr(Qa(e));return a.prefix||(a.prefix=pt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=km(a.prefix,e.innerText)||ei(a.prefix,ma(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qm(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Vm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Km(e),r=n.iconName,a=n.prefix,i=n.rest,o=qm(e),s=ha("parseNodeAttributes",{},e),l=t.styleParser?Wm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Xm=Fe.styles;function rl(e){var t=M.autoReplaceSvg==="nest"?go(e,{styleParser:!1}):go(e);return~t.extra.classes.indexOf(zs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var ht=new Set;Ga.map(function(e){ht.add("fa-".concat(e))});Object.keys(Pn[te]).map(ht.add.bind(ht));Object.keys(Pn[ce]).map(ht.add.bind(ht));ht=Mn(ht);function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(ao,"-").concat(d))},a=function(d){return n.remove("".concat(ao,"-").concat(d))},i=M.autoFetchSvg?ht:Ga.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Xm));i.includes("fa")||i.push("fa");var o=[".".concat(zs,":not([").concat(Tt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ri.begin("onTree"),f=s.reduce(function(c,d){try{var p=rl(d);p&&c.push(p)}catch(g){js||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){tl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Gm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rl(e).then(function(n){n&&tl([n],t)})}function Qm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ga(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ga(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Jm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,$=S===void 0?[]:S,b=n.attributes,x=b===void 0?{}:b,O=n.styles,z=O===void 0?{}:O;if(t){var W=t.prefix,re=t.iconName,le=t.icon;return Mr(T({type:"icon"},t),function(){return Nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Rn()):(x["aria-hidden"]="true",x.focusable="false")),ni({icons:{main:va(le),mask:l?va(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:re,transform:T(T({},Ke),a),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:x,styles:z,classes:$}})})}},Zm={mixout:function(){return{icon:Qm(Jm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vo,n.nodeCallback=Gm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return vo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ba(a,s),c.iconName?ba(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var $=Ka(S,2),b=$[0],x=$[1];g([n,ni({icons:{main:b,mask:x},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rr(s);l.length>0&&(a.style=l);var f;return Ja(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},ep={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mr({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Mn(i)).join(" ")},children:o}]})}}}},tp={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Mr({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),Mm({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Mn(s))}})})}}}},np={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Mr({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),fo({content:n,transform:T(T({},Ke),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($s){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},rp=new RegExp('"',"ug"),bo=[1105920,1112319];function ap(e){var t=e.replace(rp,""),n=vm(t,0),r=n>=bo[0]&&n<=bo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ma(a?t[0]:t),isSecondary:r||a}}function yo(e,t){var n="".concat(Kd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(le){return le.getAttribute(da)===t})[0],s=mt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cn[p][l[2].toLowerCase()]:Jd[p][f],A=ap(d),S=A.value,$=A.isSecondary,b=l[0].startsWith("FontAwesome"),x=ei(g,S),O=x;if(b){var z=Em(S);z.iconName&&z.prefix&&(x=z.iconName,g=z.prefix)}if(x&&!$&&(!o||o.getAttribute(Va)!==g||o.getAttribute(Xa)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var W=Vm(),re=W.extra;re.attributes[da]=t,ba(x,g).then(function(le){var Ae=ni(T(T({},W),{},{icons:{main:le,mask:ti()},prefix:g,iconName:O,extra:re,watchable:!0})),be=ne.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=Ae.map(function(Ce){return Ln(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ip(e){return Promise.all([yo(e,"::before"),yo(e,"::after")])}function op(e){return e.parentNode!==document.head&&!~Vd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(da)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _o(e){if(rt)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(op).map(ip),a=ri.begin("searchPseudoElements");nl(),Promise.all(r).then(function(){a(),_a(),t()}).catch(function(){a(),_a(),n()})})}var sp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_o,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&_o(a)}}},xo=!1,lp={mixout:function(){return{dom:{unwatch:function(){nl(),xo=!0}}}},hooks:function(){return{bootstrap:function(){ho(ha("mutationObserverCallbacks",{}))},noAuto:function(){Ym()},watch:function(n){var r=n.observeMutationsRoot;xo?_a():ho(ha("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},cp={mixout:function(){return{parse:{transform:function(n){return wo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Vr={x:0,y:0,width:"100%",height:"100%"};function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fp(e){return e.tag==="g"?e.children:[e]}var up={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nr(a.split(" ").map(function(o){return o.trim()})):ti();return i.prefix||(i.prefix=pt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=cm({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:T(T({},Vr),{},{fill:"white"})},S=c.children?{children:c.children.map(ko)}:{},$={tag:"g",attributes:T({},g.inner),children:[ko(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[$]},x="mask-".concat(s||Rn()),O="clip-".concat(s||Rn()),z={tag:"mask",attributes:T(T({},Vr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:fp(p)},z]};return r.push(W,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(x,")")},Vr)}),{children:r,attributes:a}}}},dp={provides:function(t){var n=!1;mt.matchMedia&&(n=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},mp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},pp=[dm,Zm,ep,tp,np,sp,lp,cp,up,dp,mp];Pm(pp,{mixoutsTo:Pe});Pe.noAuto;var al=Pe.config,hp=Pe.library;Pe.dom;var mr=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var gp=Pe.icon;Pe.layer;var vp=Pe.text;Pe.counter;function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bp(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function yp(e,t){if(e==null)return{};var n=bp(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xa(e){return _p(e)||xp(e)||wp(e)||kp()}function _p(e){if(Array.isArray(e))return wa(e)}function xp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wp(e,t){if(e){if(typeof e=="string")return wa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wa(e,t)}}function wa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ep=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},il={exports:{}};(function(e){(function(t){var n=function(b,x,O){if(!f(x)||d(x)||p(x)||g(x)||l(x))return x;var z,W=0,re=0;if(c(x))for(z=[],re=x.length;W<re;W++)z.push(n(b,x[W],O));else{z={};for(var le in x)Object.prototype.hasOwnProperty.call(x,le)&&(z[b(le,O)]=n(b,x[le],O))}return z},r=function(b,x){x=x||{};var O=x.separator||"_",z=x.split||/(?=[A-Z])/;return b.split(z).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(b,x){return r(b,x).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,x){var O=x&&"process"in x?x.process:x;return typeof O!="function"?b:function(z,W){return O(z,b,W)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,x){return n(S(a,x),b)},decamelizeKeys:function(b,x){return n(S(o,x),b,x)},pascalizeKeys:function(b,x){return n(S(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Ep)})(il);var Ap=il.exports,Op=["class","style"];function Pp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ap.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Cp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ii(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Cp(c);break;case"style":l.style=Pp(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=yp(n,Op);return Cr(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var ol=!1;try{ol=!0}catch{}function Sp(){if(!ol&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Ip(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ao(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mr.icon)return mr.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Rp=Nn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Ao(t.icon)}),i=oe(function(){return bn("classes",Ip(t))}),o=oe(function(){return bn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=oe(function(){return bn("mask",Ao(t.mask))}),l=oe(function(){return gp(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});un(l,function(c){if(!c)return Sp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=oe(function(){return l.value?ii(l.value.abstract[0],{},r):null});return function(){return f.value}}});Nn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=al.familyPrefix,i=oe(function(){return["".concat(a,"-layers")].concat(xa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cr("div",{class:i.value},r.default?r.default():[])}}});Nn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=al.familyPrefix,i=oe(function(){return bn("classes",[].concat(xa(t.counter?["".concat(a,"-layers-counter")]:[]),xa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=oe(function(){return bn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=oe(function(){var f=vp(t.value.toString(),Me(Me({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=oe(function(){return ii(s.value,{},r)});return function(){return l.value}}});var Tp={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Np={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Mp={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};hp.add(Tp,Mp,Np);Tf(Zf).component("font-awesome-icon",Rp).use(Ld).mount("#app");
