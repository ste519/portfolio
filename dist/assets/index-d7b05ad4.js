(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ea(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Aa(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?fl(r):Aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(se(e))return e}}const sl=/;(?![^(]*\))/g,ll=/:([^]+)/,cl=/\/\*.*?\*\//gs;function fl(e){const t={};return e.replace(cl,"").split(sl).forEach(n=>{if(n){const r=n.split(ll);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Oa(e){let t="";if(he(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=Oa(e[n]);r&&(t+=r+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ul="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dl=Ea(ul);function Oo(e){return!!e||e===""}const ml=e=>he(e)?e:e==null?"":U(e)||se(e)&&(e.toString===Io||!B(e.toString))?JSON.stringify(e,Po,2):String(e),Po=(e,t)=>t&&t.__v_isRef?Po(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Co(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!U(t)&&!Ro(t)?String(t):t,ae={},Ut=[],je=()=>{},pl=()=>!1,hl=/^on[^a-z]/,hr=e=>hl.test(e),Pa=e=>e.startsWith("onUpdate:"),_e=Object.assign,Ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,V=(e,t)=>gl.call(e,t),U=Array.isArray,Bt=e=>gr(e)==="[object Map]",Co=e=>gr(e)==="[object Set]",B=e=>typeof e=="function",he=e=>typeof e=="string",Sa=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",So=e=>se(e)&&B(e.then)&&B(e.catch),Io=Object.prototype.toString,gr=e=>Io.call(e),vl=e=>gr(e).slice(8,-1),Ro=e=>gr(e)==="[object Object]",Ia=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,qe=vr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,en=vr(e=>e.replace(yl,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=vr(e=>e?`on${br(e)}`:""),yn=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},_l=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ci;const wl=()=>ci||(ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class xl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function kl(e,t=Te){t&&t.active&&t.effects.push(e)}function El(){return Te}const Ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},To=e=>(e.w&gt)>0,No=e=>(e.n&gt)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=gt},Ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];To(a)&&!No(a)?a.delete(e):t[n++]=a,a.w&=~gt,a.n&=~gt}t.length=n}},Gr=new WeakMap;let cn=0,gt=1;const Qr=30;let Ne;const St=Symbol(""),Jr=Symbol("");class Ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,mt=!0,gt=1<<++cn,cn<=Qr?Al(this):fi(this),this.fn()}finally{cn<=Qr&&Ol(this),gt=1<<--cn,Ne=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(fi(this),this.onStop&&this.onStop(),this.active=!1)}}function fi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const Mo=[];function tn(){Mo.push(mt),mt=!1}function nn(){const e=Mo.pop();mt=e===void 0?!0:e}function Ee(e,t,n){if(mt&&Ne){let r=Gr.get(e);r||Gr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ra()),$o(a)}}function $o(e,t){let n=!1;cn<=Qr?No(e)||(e.n|=gt,n=!To(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function tt(e,t,n,r,a,i){const o=Gr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?Ia(n)&&s.push(o.get("length")):(s.push(o.get(St)),Bt(e)&&s.push(o.get(Jr)));break;case"delete":U(e)||(s.push(o.get(St)),Bt(e)&&s.push(o.get(Jr)));break;case"set":Bt(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Zr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Zr(Ra(l))}}function Zr(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pl=Ea("__proto__,__v_isRef,__isVue"),Fo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sa)),Cl=Na(),Sl=Na(!1,!0),Il=Na(!0),di=Rl();function Rl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(X)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=X(this)[t].apply(this,n);return nn(),r}}),e}function Tl(e){const t=X(this);return Ee(t,"has",e),t.hasOwnProperty(e)}function Na(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Vl:Ho:t?Do:zo).get(r))return r;const o=U(r);if(!e){if(o&&V(di,a))return Reflect.get(di,a,i);if(a==="hasOwnProperty")return Tl}const s=Reflect.get(r,a,i);return(Sa(a)?Fo.has(a):Pl(a))||(e||Ee(r,"get",a),t)?s:ve(s)?o&&Ia(a)?s:s.value:se(s)?e?Uo(s):Tn(s):s}}const Nl=Lo(),Ml=Lo(!0);function Lo(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!or(a)&&!Vt(a)&&(o=X(o),a=X(a)),!U(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=U(n)&&Ia(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===X(i)&&(s?yn(a,o)&&tt(n,"set",r,a):tt(n,"add",r,a)),l}}function $l(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&tt(e,"delete",t,void 0),r}function Fl(e,t){const n=Reflect.has(e,t);return(!Sa(t)||!Fo.has(t))&&Ee(e,"has",t),n}function Ll(e){return Ee(e,"iterate",U(e)?"length":St),Reflect.ownKeys(e)}const jo={get:Cl,set:Nl,deleteProperty:$l,has:Fl,ownKeys:Ll},jl={get:Il,set(e,t){return!0},deleteProperty(e,t){return!0}},zl=_e({},jo,{get:Sl,set:Ml}),Ma=e=>e,yr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=X(e),i=X(t);n||(t!==i&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=yr(a),s=r?Ma:n?La:_n;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function zn(e,t=!1){const n=this.__v_raw,r=X(n),a=X(e);return t||(e!==a&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Dn(e,t=!1){return e=e.__v_raw,!t&&Ee(X(e),"iterate",St),Reflect.get(e,"size",e)}function mi(e){e=X(e);const t=X(this);return yr(t).has.call(t,e)||(t.add(e),tt(t,"add",e,e)),this}function pi(e,t){t=X(t);const n=X(this),{has:r,get:a}=yr(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yn(t,o)&&tt(n,"set",e,t):tt(n,"add",e,t),this}function hi(e){const t=X(this),{has:n,get:r}=yr(t);let a=n.call(t,e);a||(e=X(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&tt(t,"delete",e,void 0),i}function gi(){const e=X(this),t=e.size!==0,n=e.clear();return t&&tt(e,"clear",void 0,void 0),n}function Hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=X(o),l=t?Ma:e?La:_n;return!e&&Ee(s,"iterate",St),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Un(e,t,n){return function(...r){const a=this.__v_raw,i=X(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ma:t?La:_n;return!t&&Ee(i,"iterate",l?Jr:St),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function Dl(){const e={get(i){return jn(this,i)},get size(){return Dn(this)},has:zn,add:mi,set:pi,delete:hi,clear:gi,forEach:Hn(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return Dn(this)},has:zn,add:mi,set:pi,delete:hi,clear:gi,forEach:Hn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Dn(this,!0)},has(i){return zn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Hn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Dn(this,!0)},has(i){return zn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Un(i,!1,!1),n[i]=Un(i,!0,!1),t[i]=Un(i,!1,!0),r[i]=Un(i,!0,!0)}),[e,n,t,r]}const[Hl,Ul,Bl,Yl]=Dl();function $a(e,t){const n=t?e?Yl:Bl:e?Ul:Hl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Wl={get:$a(!1,!1)},Kl={get:$a(!1,!0)},ql={get:$a(!0,!1)},zo=new WeakMap,Do=new WeakMap,Ho=new WeakMap,Vl=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(e){return e.__v_skip||!Object.isExtensible(e)?0:Xl(vl(e))}function Tn(e){return Vt(e)?e:Fa(e,!1,jo,Wl,zo)}function Ql(e){return Fa(e,!1,zl,Kl,Do)}function Uo(e){return Fa(e,!0,jl,ql,Ho)}function Fa(e,t,n,r,a){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Gl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Yt(e){return Vt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function Bo(e){return Yt(e)||Vt(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Yo(e){return ir(e,"__v_skip",!0),e}const _n=e=>se(e)?Tn(e):e,La=e=>se(e)?Uo(e):e;function Wo(e){mt&&Ne&&(e=X(e),$o(e.dep||(e.dep=Ra())))}function Ko(e,t){e=X(e);const n=e.dep;n&&Zr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Jl(e){return qo(e,!1)}function Zl(e){return qo(e,!0)}function qo(e,t){return ve(e)?e:new ec(e,t)}class ec{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:_n(t)}get value(){return Wo(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Vt(t);t=n?t:X(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_n(t),Ko(this))}}function Wt(e){return ve(e)?e.value:e}const tc={get:(e,t,n)=>Wt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return Yt(e)?e:new Proxy(e,tc)}var Xo;class nc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xo]=!1,this._dirty=!0,this.effect=new Ta(t,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=X(this);return Wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Xo="__v_isReadonly";function rc(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=je):(r=e.get,a=e.set),new nc(r,a,i||!a,n)}function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function ze(e,t,n,r){if(B(e)){const i=pt(e,t,n,r);return i&&So(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){pt(l,null,10,[e,o,s]);return}}ac(e,n,a,r)}function ac(e,t,n,r=!0){console.error(e)}let wn=!1,ea=!1;const ge=[];let We=0;const Kt=[];let Je=null,At=0;const Go=Promise.resolve();let ja=null;function Qo(e){const t=ja||Go;return e?t.then(this?e.bind(this):e):t}function ic(e){let t=We+1,n=ge.length;for(;t<n;){const r=t+n>>>1;xn(ge[r])<e?t=r+1:n=r}return t}function za(e){(!ge.length||!ge.includes(e,wn&&e.allowRecurse?We+1:We))&&(e.id==null?ge.push(e):ge.splice(ic(e.id),0,e),Jo())}function Jo(){!wn&&!ea&&(ea=!0,ja=Go.then(es))}function oc(e){const t=ge.indexOf(e);t>We&&ge.splice(t,1)}function sc(e){U(e)?Kt.push(...e):(!Je||!Je.includes(e,e.allowRecurse?At+1:At))&&Kt.push(e),Jo()}function vi(e,t=wn?We+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function Zo(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>xn(n)-xn(r)),At=0;At<Je.length;At++)Je[At]();Je=null,At=0}}const xn=e=>e.id==null?1/0:e.id,lc=(e,t)=>{const n=xn(e)-xn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function es(e){ea=!1,wn=!0,ge.sort(lc);const t=je;try{for(We=0;We<ge.length;We++){const n=ge[We];n&&n.active!==!1&&pt(n,null,14)}}finally{We=0,ge.length=0,Zo(),wn=!1,ja=null,(ge.length||Kt.length)&&es()}}function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||ae;p&&(a=n.map(g=>he(g)?g.trim():g)),d&&(a=n.map(_l))}let s,l=r[s=Fr(t)]||r[s=Fr(qe(t))];!l&&i&&(l=r[s=Fr(en(t))]),l&&ze(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,a)}}function ts(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=ts(f,t,!0);c&&(s=!0,_e(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(se(e)&&r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):_e(o,i),se(e)&&r.set(e,o),o)}function wr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,en(t))||V(e,t))}let $e=null,xr=null;function sr(e){const t=$e;return $e=e,xr=e&&e.type.__scopeId||null,t}function kr(e){xr=e}function Er(){xr=null}function fc(e,t=$e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Oi(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&Oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let $,b;const w=sr(e);try{if(n.shapeFlag&4){const z=a||r;$=Ye(c.call(z,z,d,i,g,p,A)),b=l}else{const z=t;$=Ye(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),b=t.props?l:uc(l)}}catch(z){mn.length=0,_r(z,e,1),$=fe(kn)}let O=$;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:W}=O;z.length&&W&7&&(o&&z.some(Pa)&&(b=dc(b,o)),O=Xt(O,b))}return n.dirs&&(O=Xt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),$=O,sr(w),$}const uc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},dc=(e,t)=>{const n={};for(const r in e)(!Pa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!wr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?bi(r,o,f):!0:!!o;return!1}function bi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!wr(n,i))return!0}return!1}function pc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hc=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):sc(e)}function er(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function et(e,t,n=!1){const r=me||$e;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const Bn={};function un(e,t,n){return ns(e,t,n)}function ns(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ae){const s=El()===(me==null?void 0:me.scope)?me:null;let l,f=!1,c=!1;if(ve(e)?(l=()=>e.value,f=or(e)):Yt(e)?(l=()=>e,r=!0):U(e)?(c=!0,f=e.some(O=>Yt(O)||or(O)),l=()=>e.map(O=>{if(ve(O))return O.value;if(Yt(O))return zt(O);if(B(O))return pt(O,s,2)})):B(e)?t?l=()=>pt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[p])}:l=je,t&&r){const O=l;l=()=>zt(O())}let d,p=O=>{d=b.onStop=()=>{pt(O,s,4)}},g;if(An)if(p=je,t?n&&ze(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const O=uf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return je;let A=c?new Array(e.length).fill(Bn):Bn;const S=()=>{if(b.active)if(t){const O=b.run();(r||f||(c?O.some((z,W)=>yn(z,A[W])):yn(O,A)))&&(d&&d(),ze(t,s,3,[O,A===Bn?void 0:c&&A[0]===Bn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let $;a==="sync"?$=S:a==="post"?$=()=>ke(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),$=()=>za(S));const b=new Ta(l,$);t?n?S():A=b.run():a==="post"?ke(b.run.bind(b),s&&s.suspense):b.run();const w=()=>{b.stop(),s&&s.scope&&Ca(s.scope.effects,b)};return g&&g.push(w),w}function vc(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?rs(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=me;Gt(this);const s=ns(a,i.bind(r),n);return o?Gt(o):Rt(),s}function rs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function zt(e,t){if(!se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))zt(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)zt(e[n],t);else if(Co(e)||Bt(e))e.forEach(n=>{zt(n,t)});else if(Ro(e))for(const n in e)zt(e[n],t);return e}function Nn(e){return B(e)?{setup:e,name:e.name}:e}const tr=e=>!!e.type.__asyncLoader,as=e=>e.type.__isKeepAlive;function bc(e,t){is(e,"a",t)}function yc(e,t){is(e,"da",t)}function is(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)as(a.parent.vnode)&&_c(r,t,n,a),a=a.parent}}function _c(e,t,n,r){const a=Ar(t,e,r,!0);os(()=>{Ca(r[t],a)},n)}function Ar(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Gt(n);const s=ze(t,n,e,o);return Rt(),nn(),s});return r?a.unshift(i):a.push(i),i}}const it=e=>(t,n=me)=>(!An||e==="sp")&&Ar(e,(...r)=>t(...r),n),wc=it("bm"),xc=it("m"),kc=it("bu"),Ec=it("u"),Ac=it("bum"),os=it("um"),Oc=it("sp"),Pc=it("rtg"),Cc=it("rtc");function Sc(e,t=me){Ar("ec",e,t)}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),ze(l,n,8,[e.el,s,e,t]),nn())}}const ss="components";function ht(e,t){return Rc(ss,e,!0,t)||e}const Ic=Symbol();function Rc(e,t,n=!0,r=!1){const a=$e||me;if(a){const i=a.type;if(e===ss){const s=lf(i,!1);if(s&&(s===t||s===qe(t)||s===br(qe(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[qe(t)]||e[br(qe(t))])}const ta=e=>e?vs(e)?Ba(e)||e.proxy:ta(e.parent):null,dn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ta(e.parent),$root:e=>ta(e.root),$emit:e=>e.emit,$options:e=>Da(e),$forceUpdate:e=>e.f||(e.f=()=>za(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>vc.bind(e)}),zr=(e,t)=>e!==ae&&!e.__isScriptSetup&&V(e,t),Tc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(zr(r,t))return o[t]=1,r[t];if(a!==ae&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==ae&&V(n,t))return o[t]=4,n[t];na&&(o[t]=0)}}const c=dn[t];let d,p;if(c)return t==="$attrs"&&Ee(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ae&&V(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return zr(a,t)?(a[t]=n,!0):r!==ae&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ae&&V(e,o)||zr(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(dn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let na=!0;function Nc(e){const t=Da(e),n=e.proxy,r=e.ctx;na=!1,t.beforeCreate&&_i(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:$,beforeDestroy:b,beforeUnmount:w,destroyed:O,unmounted:z,render:W,renderTracked:re,renderTriggered:le,errorCaptured:Ae,serverPrefetch:be,expose:Ce,inheritAttrs:st,components:He,directives:Mt,filters:_t}=t;if(f&&Mc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const Q=o[Z];B(Q)&&(r[Z]=Q.bind(n))}if(a){const Z=a.call(n,n);se(Z)&&(e.data=Tn(Z))}if(na=!0,i)for(const Z in i){const Q=i[Z],Se=B(Q)?Q.bind(n,n):B(Q.get)?Q.get.bind(n,n):je,wt=!B(Q)&&B(Q.set)?Q.set.bind(n):je,Ie=oe({get:Se,set:wt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:we=>Ie.value=we})}if(s)for(const Z in s)ls(s[Z],r,n,Z);if(l){const Z=B(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(Q=>{er(Q,Z[Q])})}c&&_i(c,e,"c");function ue(Z,Q){U(Q)?Q.forEach(Se=>Z(Se.bind(n))):Q&&Z(Q.bind(n))}if(ue(wc,d),ue(xc,p),ue(kc,g),ue(Ec,A),ue(bc,S),ue(yc,$),ue(Sc,Ae),ue(Cc,re),ue(Pc,le),ue(Ac,w),ue(os,z),ue(Oc,be),U(Ce))if(Ce.length){const Z=e.exposed||(e.exposed={});Ce.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:Se=>n[Q]=Se})})}else e.exposed||(e.exposed={});W&&e.render===je&&(e.render=W),st!=null&&(e.inheritAttrs=st),He&&(e.components=He),Mt&&(e.directives=Mt)}function Mc(e,t,n=je,r=!1){U(e)&&(e=ra(e));for(const a in e){const i=e[a];let o;se(i)?"default"in i?o=et(i.from||a,i.default,!0):o=et(i.from||a):o=et(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function _i(e,t,n){ze(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ls(e,t,n,r){const a=r.includes(".")?rs(n,r):()=>n[r];if(he(e)){const i=t[e];B(i)&&un(a,i)}else if(B(e))un(a,e.bind(n));else if(se(e))if(U(e))e.forEach(i=>ls(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&un(a,i,e)}}function Da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>lr(l,f,o,!0)),lr(l,t,o)),se(t)&&i.set(t,l),l}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$c[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $c={data:wi,props:Et,emits:Et,methods:Et,computed:Et,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Et,directives:Et,watch:Lc,provide:wi,inject:Fc};function wi(e,t){return t?e?function(){return _e(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Fc(e,t){return Et(ra(e),ra(t))}function ra(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Et(e,t){return e?_e(_e(Object.create(null),e),t):t}function Lc(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function jc(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ql(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function zc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=X(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(wr(e.emitsOptions,p))continue;const g=t[p];if(l)if(V(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const A=qe(p);a[A]=aa(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{cs(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!V(t,d)&&((c=en(d))===d||!V(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=aa(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d))&&(delete i[d],f=!0)}f&&tt(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Zn(l))continue;const f=t[l];let c;a&&V(a,c=qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:wr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=X(n),f=s||ae;for(let c=0;c<i.length;c++){const d=i[c];n[d]=aa(a,l,d,f[d],e,!V(f,d))}}return o}function aa(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Gt(a),r=f[n]=l.call(null,t),Rt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const c=d=>{l=!0;const[p,g]=fs(d,t,!0);_e(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return se(e)&&r.set(e,Ut),Ut;if(U(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);xi(d)&&(o[d]=ae)}else if(i)for(const c in i){const d=qe(c);if(xi(d)){const p=i[c],g=o[d]=U(p)||B(p)?{type:p}:Object.assign({},p);if(g){const A=Ai(Boolean,g.type),S=Ai(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||V(g,"default"))&&s.push(d)}}}const f=[o,s];return se(e)&&r.set(e,f),f}function xi(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ei(e,t){return ki(e)===ki(t)}function Ai(e,t){return U(t)?t.findIndex(n=>Ei(n,e)):B(t)&&Ei(t,e)?0:-1}const us=e=>e[0]==="_"||e==="$stable",Ha=e=>U(e)?e.map(Ye):[Ye(e)],Dc=(e,t,n)=>{if(t._n)return t;const r=fc((...a)=>Ha(t(...a)),n);return r._c=!1,r},ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(us(a))continue;const i=e[a];if(B(i))t[a]=Dc(a,i,r);else if(i!=null){const o=Ha(i);t[a]=()=>o}}},ms=(e,t)=>{const n=Ha(t);e.slots.default=()=>n},Hc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),ir(t,"_",n)):ds(t,e.slots={})}else e.slots={},t&&ms(e,t);ir(e.slots,Pr,1)},Uc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ds(t,a)),o=t}else t&&(ms(e,t),o={default:1});if(i)for(const s in a)!us(s)&&!(s in o)&&delete a[s]};function ps(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function Yc(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!se(a)&&(a=null);const i=ps(),o=new Set;let s=!1;const l=i.app={_uid:Bc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:df,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=fe(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Ba(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function ia(e,t,n,r,a=!1){if(U(e)){e.forEach((p,g)=>ia(p,t&&(U(t)?t[g]:t),n,r,a));return}if(tr(r)&&!a)return;const i=r.shapeFlag&4?Ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ae?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,V(d,f)&&(d[f]=null)):ve(f)&&(f.value=null)),B(l))pt(l,s,12,[o,c]);else{const p=he(l),g=ve(l);if(p||g){const A=()=>{if(e.f){const S=p?V(d,l)?d[l]:c[l]:l.value;a?U(S)&&Ca(S,i):U(S)?S.includes(i)||S.push(i):p?(c[l]=[i],V(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,V(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,ke(A,n)):A()}}}const ke=gc;function Wc(e){return Kc(e)}function Kc(e,t){const n=wl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=je,insertStaticContent:A}=e,S=(u,m,h,v=null,_=null,E=null,I=!1,k=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!sn(u,m)&&(v=C(u),we(u,_,E,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:x,ref:L,shapeFlag:N}=m;switch(x){case Or:$(u,m,h,v);break;case kn:b(u,m,h,v);break;case Dr:u==null&&w(m,h,v,I);break;case Ze:He(u,m,h,v,_,E,I,k,P);break;default:N&1?W(u,m,h,v,_,E,I,k,P):N&6?Mt(u,m,h,v,_,E,I,k,P):(N&64||N&128)&&x.process(u,m,h,v,_,E,I,k,P,q)}L!=null&&_&&ia(L,u&&u.ref,E,m||u,!m)},$=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const _=m.el=u.el;m.children!==u.children&&f(_,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,v),u=_;r(m,h,v)},z=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},W=(u,m,h,v,_,E,I,k,P)=>{I=I||m.type==="svg",u==null?re(m,h,v,_,E,I,k,P):be(u,m,_,E,I,k,P)},re=(u,m,h,v,_,E,I,k)=>{let P,x;const{type:L,props:N,shapeFlag:j,transition:D,dirs:K}=u;if(P=u.el=o(u.type,E,N&&N.is,N),j&8?c(P,u.children):j&16&&Ae(u.children,P,null,v,_,E&&L!=="foreignObject",I,k),K&&xt(u,null,v,"created"),le(P,u,u.scopeId,I,v),N){for(const J in N)J!=="value"&&!Zn(J)&&i(P,J,null,N[J],E,u.children,v,_,R);"value"in N&&i(P,"value",null,N.value),(x=N.onVnodeBeforeMount)&&Be(x,v,u)}K&&xt(u,null,v,"beforeMount");const ee=(!_||_&&!_.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(P),r(P,m,h),((x=N&&N.onVnodeMounted)||ee||K)&&ke(()=>{x&&Be(x,v,u),ee&&D.enter(P),K&&xt(u,null,v,"mounted")},_)},le=(u,m,h,v,_)=>{if(h&&g(u,h),v)for(let E=0;E<v.length;E++)g(u,v[E]);if(_){let E=_.subTree;if(m===E){const I=_.vnode;le(u,I,I.scopeId,I.slotScopeIds,_.parent)}}},Ae=(u,m,h,v,_,E,I,k,P=0)=>{for(let x=P;x<u.length;x++){const L=u[x]=k?ut(u[x]):Ye(u[x]);S(null,L,m,h,v,_,E,I,k)}},be=(u,m,h,v,_,E,I)=>{const k=m.el=u.el;let{patchFlag:P,dynamicChildren:x,dirs:L}=m;P|=u.patchFlag&16;const N=u.props||ae,j=m.props||ae;let D;h&&kt(h,!1),(D=j.onVnodeBeforeUpdate)&&Be(D,h,m,u),L&&xt(m,u,h,"beforeUpdate"),h&&kt(h,!0);const K=_&&m.type!=="foreignObject";if(x?Ce(u.dynamicChildren,x,k,h,v,K,E):I||Q(u,m,k,null,h,v,K,E,!1),P>0){if(P&16)st(k,m,N,j,h,v,_);else if(P&2&&N.class!==j.class&&i(k,"class",null,j.class,_),P&4&&i(k,"style",N.style,j.style,_),P&8){const ee=m.dynamicProps;for(let J=0;J<ee.length;J++){const de=ee[J],Re=N[de],Ft=j[de];(Ft!==Re||de==="value")&&i(k,de,Re,Ft,_,u.children,h,v,R)}}P&1&&u.children!==m.children&&c(k,m.children)}else!I&&x==null&&st(k,m,N,j,h,v,_);((D=j.onVnodeUpdated)||L)&&ke(()=>{D&&Be(D,h,m,u),L&&xt(m,u,h,"updated")},v)},Ce=(u,m,h,v,_,E,I)=>{for(let k=0;k<m.length;k++){const P=u[k],x=m[k],L=P.el&&(P.type===Ze||!sn(P,x)||P.shapeFlag&70)?d(P.el):h;S(P,x,L,null,v,_,E,I,!0)}},st=(u,m,h,v,_,E,I)=>{if(h!==v){if(h!==ae)for(const k in h)!Zn(k)&&!(k in v)&&i(u,k,h[k],null,I,m.children,_,E,R);for(const k in v){if(Zn(k))continue;const P=v[k],x=h[k];P!==x&&k!=="value"&&i(u,k,x,P,I,m.children,_,E,R)}"value"in v&&i(u,"value",h.value,v.value)}},He=(u,m,h,v,_,E,I,k,P)=>{const x=m.el=u?u.el:s(""),L=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:D}=m;D&&(k=k?k.concat(D):D),u==null?(r(x,h,v),r(L,h,v),Ae(m.children,h,L,_,E,I,k,P)):N>0&&N&64&&j&&u.dynamicChildren?(Ce(u.dynamicChildren,j,h,_,E,I,k),(m.key!=null||_&&m===_.subTree)&&hs(u,m,!0)):Q(u,m,h,L,_,E,I,k,P)},Mt=(u,m,h,v,_,E,I,k,P)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?_.ctx.activate(m,h,v,I,P):_t(m,h,v,_,E,I,P):an(u,m,P)},_t=(u,m,h,v,_,E,I)=>{const k=u.component=nf(u,v,_);if(as(u)&&(k.ctx.renderer=q),rf(k),k.asyncDep){if(_&&_.registerDep(k,ue),!u.el){const P=k.subTree=fe(kn);b(null,P,m,h)}return}ue(k,u,m,h,_,E,I)},an=(u,m,h)=>{const v=m.component=u.component;if(mc(u,m,h))if(v.asyncDep&&!v.asyncResolved){Z(v,m,h);return}else v.next=m,oc(v.update),v.update();else m.el=u.el,v.vnode=m},ue=(u,m,h,v,_,E,I)=>{const k=()=>{if(u.isMounted){let{next:L,bu:N,u:j,parent:D,vnode:K}=u,ee=L,J;kt(u,!1),L?(L.el=K.el,Z(u,L,I)):L=K,N&&Lr(N),(J=L.props&&L.props.onVnodeBeforeUpdate)&&Be(J,D,L,K),kt(u,!0);const de=jr(u),Re=u.subTree;u.subTree=de,S(Re,de,d(Re.el),C(Re),u,_,E),L.el=de.el,ee===null&&pc(u,de.el),j&&ke(j,_),(J=L.props&&L.props.onVnodeUpdated)&&ke(()=>Be(J,D,L,K),_)}else{let L;const{el:N,props:j}=m,{bm:D,m:K,parent:ee}=u,J=tr(m);if(kt(u,!1),D&&Lr(D),!J&&(L=j&&j.onVnodeBeforeMount)&&Be(L,ee,m),kt(u,!0),N&&Y){const de=()=>{u.subTree=jr(u),Y(N,u.subTree,u,_,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=jr(u);S(null,de,h,v,u,_,E),m.el=de.el}if(K&&ke(K,_),!J&&(L=j&&j.onVnodeMounted)){const de=m;ke(()=>Be(L,ee,de),_)}(m.shapeFlag&256||ee&&tr(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&ke(u.a,_),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ta(k,()=>za(x),u.scope),x=u.update=()=>P.run();x.id=u.uid,kt(u,!0),x()},Z=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,zc(u,m.props,v,h),Uc(u,m.children,h),tn(),vi(),nn()},Q=(u,m,h,v,_,E,I,k,P=!1)=>{const x=u&&u.children,L=u?u.shapeFlag:0,N=m.children,{patchFlag:j,shapeFlag:D}=m;if(j>0){if(j&128){wt(x,N,h,v,_,E,I,k,P);return}else if(j&256){Se(x,N,h,v,_,E,I,k,P);return}}D&8?(L&16&&R(x,_,E),N!==x&&c(h,N)):L&16?D&16?wt(x,N,h,v,_,E,I,k,P):R(x,_,E,!0):(L&8&&c(h,""),D&16&&Ae(N,h,v,_,E,I,k,P))},Se=(u,m,h,v,_,E,I,k,P)=>{u=u||Ut,m=m||Ut;const x=u.length,L=m.length,N=Math.min(x,L);let j;for(j=0;j<N;j++){const D=m[j]=P?ut(m[j]):Ye(m[j]);S(u[j],D,h,null,_,E,I,k,P)}x>L?R(u,_,E,!0,!1,N):Ae(m,h,v,_,E,I,k,P,N)},wt=(u,m,h,v,_,E,I,k,P)=>{let x=0;const L=m.length;let N=u.length-1,j=L-1;for(;x<=N&&x<=j;){const D=u[x],K=m[x]=P?ut(m[x]):Ye(m[x]);if(sn(D,K))S(D,K,h,null,_,E,I,k,P);else break;x++}for(;x<=N&&x<=j;){const D=u[N],K=m[j]=P?ut(m[j]):Ye(m[j]);if(sn(D,K))S(D,K,h,null,_,E,I,k,P);else break;N--,j--}if(x>N){if(x<=j){const D=j+1,K=D<L?m[D].el:v;for(;x<=j;)S(null,m[x]=P?ut(m[x]):Ye(m[x]),h,K,_,E,I,k,P),x++}}else if(x>j)for(;x<=N;)we(u[x],_,E,!0),x++;else{const D=x,K=x,ee=new Map;for(x=K;x<=j;x++){const Oe=m[x]=P?ut(m[x]):Ye(m[x]);Oe.key!=null&&ee.set(Oe.key,x)}let J,de=0;const Re=j-K+1;let Ft=!1,oi=0;const on=new Array(Re);for(x=0;x<Re;x++)on[x]=0;for(x=D;x<=N;x++){const Oe=u[x];if(de>=Re){we(Oe,_,E,!0);continue}let Ue;if(Oe.key!=null)Ue=ee.get(Oe.key);else for(J=K;J<=j;J++)if(on[J-K]===0&&sn(Oe,m[J])){Ue=J;break}Ue===void 0?we(Oe,_,E,!0):(on[Ue-K]=x+1,Ue>=oi?oi=Ue:Ft=!0,S(Oe,m[Ue],h,null,_,E,I,k,P),de++)}const si=Ft?qc(on):Ut;for(J=si.length-1,x=Re-1;x>=0;x--){const Oe=K+x,Ue=m[Oe],li=Oe+1<L?m[Oe+1].el:v;on[x]===0?S(null,Ue,h,li,_,E,I,k,P):Ft&&(J<0||x!==si[J]?Ie(Ue,h,li,2):J--)}}},Ie=(u,m,h,v,_=null)=>{const{el:E,type:I,transition:k,children:P,shapeFlag:x}=u;if(x&6){Ie(u.component.subTree,m,h,v);return}if(x&128){u.suspense.move(m,h,v);return}if(x&64){I.move(u,m,h,q);return}if(I===Ze){r(E,m,h);for(let N=0;N<P.length;N++)Ie(P[N],m,h,v);r(u.anchor,m,h);return}if(I===Dr){O(u,m,h);return}if(v!==2&&x&1&&k)if(v===0)k.beforeEnter(E),r(E,m,h),ke(()=>k.enter(E),_);else{const{leave:N,delayLeave:j,afterLeave:D}=k,K=()=>r(E,m,h),ee=()=>{N(E,()=>{K(),D&&D()})};j?j(E,K,ee):ee()}else r(E,m,h)},we=(u,m,h,v=!1,_=!1)=>{const{type:E,props:I,ref:k,children:P,dynamicChildren:x,shapeFlag:L,patchFlag:N,dirs:j}=u;if(k!=null&&ia(k,null,h,u,!0),L&256){m.ctx.deactivate(u);return}const D=L&1&&j,K=!tr(u);let ee;if(K&&(ee=I&&I.onVnodeBeforeUnmount)&&Be(ee,m,u),L&6)y(u.component,h,v);else{if(L&128){u.suspense.unmount(h,v);return}D&&xt(u,null,m,"beforeUnmount"),L&64?u.type.remove(u,m,h,_,q,v):x&&(E!==Ze||N>0&&N&64)?R(x,m,h,!1,!0):(E===Ze&&N&384||!_&&L&16)&&R(P,m,h),v&&$t(u)}(K&&(ee=I&&I.onVnodeUnmounted)||D)&&ke(()=>{ee&&Be(ee,m,u),D&&xt(u,null,m,"unmounted")},h)},$t=u=>{const{type:m,el:h,anchor:v,transition:_}=u;if(m===Ze){Ln(h,v);return}if(m===Dr){z(u);return}const E=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:I,delayLeave:k}=_,P=()=>I(h,E);k?k(u.el,E,P):P()}else E()},Ln=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:_,update:E,subTree:I,um:k}=u;v&&Lr(v),_.stop(),E&&(E.active=!1,we(I,u,m,h)),k&&ke(k,m),ke(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(u,m,h,v=!1,_=!1,E=0)=>{for(let I=E;I<u.length;I++)we(u[I],m,h,v,_)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),F=(u,m,h)=>{u==null?m._vnode&&we(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),vi(),Zo(),m._vnode=u},q={p:S,um:we,m:Ie,r:$t,mt:_t,mc:Ae,pc:Q,pbc:Ce,n:C,o:e};let ie,Y;return t&&([ie,Y]=t(q)),{render:F,hydrate:ie,createApp:Yc(F,ie)}}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hs(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ut(a[i]),s.el=o.el),n||hs(o,s)),s.type===Or&&(s.el=o.el)}}function qc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vc=e=>e.__isTeleport,Ze=Symbol(void 0),Or=Symbol(void 0),kn=Symbol(void 0),Dr=Symbol(void 0),mn=[];let Fe=null;function Ve(e=!1){mn.push(Fe=e?null:[])}function Xc(){mn.pop(),Fe=mn[mn.length-1]||null}let En=1;function Oi(e){En+=e}function Gc(e){return e.dynamicChildren=En>0?Fe||Ut:null,Xc(),En>0&&Fe&&Fe.push(e),e}function Xe(e,t,n,r,a,i){return Gc(H(e,t,n,r,a,i,!0))}function oa(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",gs=({key:e})=>e??null,nr=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||ve(e)||B(e)?{i:$e,r:e,k:t,f:!!n}:e:null;function H(e,t=null,n=null,r=0,a=null,i=e===Ze?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gs(t),ref:t&&nr(t),scopeId:xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:$e};return s?(Ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),En>0&&!o&&Fe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fe.push(l),l}const fe=Qc;function Qc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ic)&&(e=kn),oa(e)){const s=Xt(e,t,!0);return n&&Ua(s,n),En>0&&!i&&Fe&&(s.shapeFlag&6?Fe[Fe.indexOf(e)]=s:Fe.push(s)),s.patchFlag|=-2,s}if(cf(e)&&(e=e.__vccOpts),t){t=Jc(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=Oa(s)),se(l)&&(Bo(l)&&!U(l)&&(l=_e({},l)),t.style=Aa(l))}const o=he(e)?1:hc(e)?128:Vc(e)?64:se(e)?4:B(e)?2:0;return H(e,t,n,r,a,o,i,!0)}function Jc(e){return e?Bo(e)||Pr in e?_e({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&gs(s),ref:t&&t.ref?n&&a?U(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ze?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function It(e=" ",t=0){return fe(Or,null,e,t)}function Ye(e){return e==null||typeof e=="boolean"?fe(kn):U(e)?fe(Ze,null,e.slice()):typeof e=="object"?ut(e):fe(Or,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function Ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=$e:a===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[It(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Oa([t.class,r.class]));else if(a==="style")t.style=Aa([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){ze(e,t,7,[n,r])}const ef=ps();let tf=0;function nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ef,i={uid:tf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fs(r,a),emitsOptions:ts(r,a),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cc.bind(null,i),e.ce&&e.ce(i),i}let me=null;const Gt=e=>{me=e,e.scope.on()},Rt=()=>{me&&me.scope.off(),me=null};function vs(e){return e.vnode.shapeFlag&4}let An=!1;function rf(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=vs(e);jc(e,n,a,t),Hc(e,r);const i=a?af(e,t):void 0;return An=!1,i}function af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yo(new Proxy(e.ctx,Tc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?sf(e):null;Gt(e),tn();const i=pt(r,e,0,[e.props,a]);if(nn(),Rt(),So(i)){if(i.then(Rt,Rt),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else bs(e,t)}function Pi(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=Vo(t)),bs(e,n)}let Ci;function bs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ci&&!r.render){const a=r.template||Da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=Ci(a,f)}}e.render=r.render||je}Gt(e),tn(),Nc(e),nn(),Rt()}function of(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function sf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=of(e))},slots:e.slots,emit:e.emit,expose:t}}function Ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}}))}function lf(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return B(e)&&"__vccOpts"in e}const oe=(e,t)=>rc(e,t,An);function Cr(e,t,n){const r=arguments.length;return r===2?se(t)&&!U(t)?oa(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oa(n)&&(n=[n]),fe(e,t,n))}const ff=Symbol(""),uf=()=>et(ff),df="3.2.47",mf="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,Si=Ot&&Ot.createElement("template"),pf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ot.createElementNS(mf,e):Ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ot.createTextNode(e),createComment:e=>Ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gf(e,t,n){const r=e.style,a=he(n);if(n&&!a){if(t&&!he(t))for(const i in t)n[i]==null&&sa(r,i,"");for(const i in n)sa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ii=/\s*!important$/;function sa(e,t,n){if(U(n))n.forEach(r=>sa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=vf(e,t);Ii.test(n)?e.setProperty(en(r),n.replace(Ii,""),"important"):e[r]=n}}const Ri=["Webkit","Moz","ms"],Hr={};function vf(e,t){const n=Hr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Hr[t]=r;r=br(r);for(let a=0;a<Ri.length;a++){const i=Ri[a]+r;if(i in e)return Hr[t]=i}return t}const Ti="http://www.w3.org/1999/xlink";function bf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ti,t.slice(6,t.length)):e.setAttributeNS(Ti,t,n);else{const i=dl(t);n==null||i&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function yf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function wf(e,t,n,r){e.removeEventListener(t,n,r)}function xf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=kf(t);if(r){const f=i[t]=Of(r,a);_f(e,s,f,l)}else o&&(wf(e,s,o,l),i[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function kf(e){let t;if(Ni.test(e)){t={};let r;for(;r=e.match(Ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Ur=0;const Ef=Promise.resolve(),Af=()=>Ur||(Ef.then(()=>Ur=0),Ur=Date.now());function Of(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Pf(r,n.value),t,5,[r])};return n.value=e,n.attached=Af(),n}function Pf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Mi=/^on[a-z]/,Cf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?hf(e,r,a):t==="style"?gf(e,n,r):hr(t)?Pa(t)||xf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?yf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),bf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Mi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mi.test(t)&&he(n)?!1:t in e}const If=_e({patchProp:Cf},pf);let $i;function Rf(){return $i||($i=Wc(If))}const Tf=(...e)=>{const t=Rf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Nf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Nf(e){return he(e)?document.querySelector(e):e}const Mf="/portfolio/assets/logo-db1691a5.svg";const Ge=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},$f={name:"Navbar"},Ff=e=>(kr("data-v-84b76129"),e=e(),Er(),e),Lf={class:"navbar"},jf={class:"container"},zf=Ff(()=>H("a",{class:"navbar-brand","aria-label":"home",href:"/portfolio/"},[H("img",{src:Mf})],-1)),Df={class:"navbar-menu"},Hf={href:"mailto: qianzi@umich.edu",target:"_blank"},Uf={href:"https://github.com/ste519",target:"_blank"},Bf={href:"https://www.linkedin.com/in/qianzi-li/",target:"_blank"};function Yf(e,t,n,r,a,i){const o=ht("font-awesome-icon");return Ve(),Xe("nav",Lf,[H("div",jf,[zf,H("ul",Df,[H("li",null,[H("a",Hf,[fe(o,{icon:"fa-solid fa-envelope"}),It("Email")])]),H("li",null,[H("a",Uf,[fe(o,{icon:"fa-brands fa-github"}),It("Github")])]),H("li",null,[H("a",Bf,[fe(o,{icon:"fa-brands fa-linkedin"}),It("LinkedIn")])])])])])}const Wf=Ge($f,[["render",Yf],["__scopeId","data-v-84b76129"]]);const Kf={name:"Footer",data(){return{currentYear:new Date().getFullYear()}}},qf={class:"footer"},Vf={class:"container"};function Xf(e,t,n,r,a,i){return Ve(),Xe("footer",qf,[H("div",Vf,[H("p",null,"© "+ml(a.currentYear)+" Qianzi Li. All rights reserved.",1)])])}const Gf=Ge(Kf,[["render",Xf],["__scopeId","data-v-cce5487e"]]),Qf={components:{Navbar:Wf,Footer:Gf}},Jf={id:"app"};function Zf(e,t,n,r,a,i){const o=ht("Navbar"),s=ht("router-view"),l=ht("Footer");return Ve(),Xe("div",Jf,[fe(o),fe(s),fe(l)])}const eu=Ge(Qf,[["render",Zf]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function tu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Br(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const pn=()=>{},De=Array.isArray,nu=/\/$/,ru=e=>e.replace(nu,"");function Yr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=su(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function au(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function iu(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Qt(t.matched[r],n.matched[a])&&ys(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ys(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ou(e[n],t[n]))return!1;return!0}function ou(e,t){return De(e)?Li(e,t):De(t)?Li(t,e):e===t}function Li(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function su(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var On;(function(e){e.pop="pop",e.push="push"})(On||(On={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function lu(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ru(e)}const cu=/^[^#]+#/;function fu(e,t){return e.replace(cu,"#")+t}function uu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function du(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=uu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const la=new Map;function mu(e,t){la.set(e,t)}function pu(e){const t=la.get(e);return la.delete(e),t}let hu=()=>location.protocol+"//"+location.host;function _s(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Fi(l,"")}return Fi(n,e)+r+a}function gu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=_s(e,location),A=n.value,S=t.value;let $=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}$=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:$,type:On.pop,direction:$?$>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Sr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function zi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Sr():null}}function vu(e){const{history:t,location:n}=window,r={value:_s(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:hu()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=G({},t.state,zi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=G({},a.value,t.state,{forward:l,scroll:Sr()});i(c.current,c,!0);const d=G({},zi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function bu(e){e=lu(e);const t=vu(e),n=gu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:fu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function yu(e){return typeof e=="string"||e&&typeof e=="object"}function ws(e){return typeof e=="string"||typeof e=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xs=Symbol("");var Di;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Di||(Di={}));function Jt(e,t){return G(new Error,{type:e,[xs]:!0},t)}function Qe(e,t){return e instanceof Error&&xs in e&&(t==null||!!(e.type&t))}const Hi="[^/]+?",_u={sensitive:!1,strict:!1,start:!0,end:!0},wu=/[.+*?^${}()[\]/\\]/g;function xu(e,t){const n=G({},_u,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(wu,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:$,regexp:b}=p;i.push({name:A,repeatable:S,optional:$});const w=b||Hi;if(w!==Hi){g+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+z.message)}}let O=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(O=$&&f.length<2?`(?:/${O})`:"/"+O),$&&(O+="?"),a+=O,g+=20,$&&(g+=-8),S&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:$}=g,b=A in f?f[A]:"";if(De(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=De(b)?b.join("/"):b;if(!w)if($)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function ku(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Eu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=ku(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Au={type:0,value:""},Ou=/[a-zA-Z0-9_]/;function Pu(e){if(!e)return[[]];if(e==="/")return[[Au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Ou.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function Cu(e,t,n){const r=xu(Pu(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Su(e,t){const n=[],r=new Map;t=Wi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,A=Iu(c);A.aliasOf=p&&p.record;const S=Wi(t,c),$=[A];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of O)$.push(G({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let b,w;for(const O of $){const{path:z}=O;if(d&&z[0]!=="/"){const W=d.record.path,re=W[W.length-1]==="/"?"":"/";O.path=d.record.path+(z&&re+z)}if(b=Cu(O,d,S),p?p.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),g&&c.name&&!Yi(b)&&o(c.name)),A.children){const W=A.children;for(let re=0;re<W.length;re++)i(W[re],b,p&&p.children[re])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return w?()=>{o(w)}:pn}function o(c){if(ws(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&Eu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!ks(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Yi(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},A,S;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Jt(1,{location:c});S=p.record.name,g=G(Bi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Bi(c.params,p.keys.map(w=>w.name))),A=p.stringify(g)}else if("path"in c)A=c.path,p=n.find(w=>w.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Jt(1,{location:c,currentLocation:d});S=p.record.name,g=G({},d.params,c.params),A=p.stringify(g)}const $=[];let b=p;for(;b;)$.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:$,meta:Tu($)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Bi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Iu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ru(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ru(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ks(e,t){return t.children.some(n=>n===e||ks(e,n))}const Es=/#/g,Nu=/&/g,Mu=/\//g,$u=/=/g,Fu=/\?/g,As=/\+/g,Lu=/%5B/g,ju=/%5D/g,Os=/%5E/g,zu=/%60/g,Ps=/%7B/g,Du=/%7C/g,Cs=/%7D/g,Hu=/%20/g;function Ya(e){return encodeURI(""+e).replace(Du,"|").replace(Lu,"[").replace(ju,"]")}function Uu(e){return Ya(e).replace(Ps,"{").replace(Cs,"}").replace(Os,"^")}function ca(e){return Ya(e).replace(As,"%2B").replace(Hu,"+").replace(Es,"%23").replace(Nu,"%26").replace(zu,"`").replace(Ps,"{").replace(Cs,"}").replace(Os,"^")}function Bu(e){return ca(e).replace($u,"%3D")}function Yu(e){return Ya(e).replace(Es,"%23").replace(Fu,"%3F")}function Wu(e){return e==null?"":Yu(e).replace(Mu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ku(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(As," "),o=i.indexOf("="),s=cr(o<0?i:i.slice(0,o)),l=o<0?null:cr(i.slice(o+1));if(s in t){let f=t[s];De(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Ki(e){let t="";for(let n in e){const r=e[n];if(n=Bu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&ca(i)):[r&&ca(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function qu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Vu=Symbol(""),qi=Symbol(""),Wa=Symbol(""),Ss=Symbol(""),fa=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Jt(4,{from:n,to:t})):d instanceof Error?s(d):yu(d)?s(Jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Wr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Xu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(dt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=tu(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&dt(p,n,r,i,o)()}))}}return a}function Xu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vi(e){const t=et(Wa),n=et(Ss),r=oe(()=>t.resolve(Wt(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Qt.bind(null,c));if(p>-1)return p;const g=Xi(l[f-2]);return f>1&&Xi(c)===g&&d[d.length-1].path!==g?d.findIndex(Qt.bind(null,l[f-2])):p}),i=oe(()=>a.value>-1&&Zu(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&ys(n.params,r.value.params));function s(l={}){return Ju(l)?t[Wt(e.replace)?"replace":"push"](Wt(e.to)).catch(pn):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Gu=Nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(e,{slots:t}){const n=Tn(Vi(e)),{options:r}=et(Wa),a=oe(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Cr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Qu=Gu;function Ju(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Zu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e??t??n,ed=Nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=et(fa),a=oe(()=>e.route||r.value),i=et(qi,0),o=oe(()=>{let f=Wt(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=oe(()=>a.value.matched[o.value]);er(qi,oe(()=>o.value+1)),er(Vu,s),er(fa,a);const l=Jl();return un(()=>[l.value,s.value,e.name],([f,c,d],[p,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Qt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Qi(n.default,{Component:p,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,$=Cr(p,G({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Qi(n.default,{Component:$,route:f})||$}}});function Qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const td=ed;function nd(e){const t=Su(e.routes,e),n=e.parseQuery||Ku,r=e.stringifyQuery||Ki,a=e.history,i=ln(),o=ln(),s=ln(),l=Zl(ct);let f=ct;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Br.bind(null,y=>""+y),d=Br.bind(null,Wu),p=Br.bind(null,cr);function g(y,R){let C,F;return ws(y)?(C=t.getRecordMatcher(y),F=R):F=y,t.addRoute(F,C)}function A(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function S(){return t.getRoutes().map(y=>y.record)}function $(y){return!!t.getRecordMatcher(y)}function b(y,R){if(R=G({},R||l.value),typeof y=="string"){const u=Yr(n,y,R.path),m=t.resolve({path:u.path},R),h=a.createHref(u.fullPath);return G(u,m,{params:p(m.params),hash:cr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=G({},y,{path:Yr(n,y.path,R.path).path});else{const u=G({},y.params);for(const m in u)u[m]==null&&delete u[m];C=G({},y,{params:d(y.params)}),R.params=d(R.params)}const F=t.resolve(C,R),q=y.hash||"";F.params=c(p(F.params));const ie=au(r,G({},y,{hash:Uu(q),path:F.path})),Y=a.createHref(ie);return G({fullPath:ie,hash:q,query:r===Ki?qu(y.query):y.query||{}},F,{redirectedFrom:void 0,href:Y})}function w(y){return typeof y=="string"?Yr(n,y,l.value.path):G({},y)}function O(y,R){if(f!==y)return Jt(8,{from:R,to:y})}function z(y){return le(y)}function W(y){return z(G(w(y),{replace:!0}))}function re(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:C}=R;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),G({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function le(y,R){const C=f=b(y),F=l.value,q=y.state,ie=y.force,Y=y.replace===!0,u=re(C);if(u)return le(G(w(u),{state:typeof u=="object"?G({},q,u.state):q,force:ie,replace:Y}),R||C);const m=C;m.redirectedFrom=R;let h;return!ie&&iu(r,F,C)&&(h=Jt(16,{to:m,from:F}),wt(F,F,!0,!1)),(h?Promise.resolve(h):be(m,F)).catch(v=>Qe(v)?Qe(v,2)?v:Se(v):Z(v,m,F)).then(v=>{if(v){if(Qe(v,2))return le(G({replace:Y},w(v.to),{state:typeof v.to=="object"?G({},q,v.to.state):q,force:ie}),R||m)}else v=st(m,F,!0,Y,q);return Ce(m,F,v),v})}function Ae(y,R){const C=O(y,R);return C?Promise.reject(C):Promise.resolve()}function be(y,R){let C;const[F,q,ie]=rd(y,R);C=Wr(F.reverse(),"beforeRouteLeave",y,R);for(const u of F)u.leaveGuards.forEach(m=>{C.push(dt(m,y,R))});const Y=Ae.bind(null,y,R);return C.push(Y),Lt(C).then(()=>{C=[];for(const u of i.list())C.push(dt(u,y,R));return C.push(Y),Lt(C)}).then(()=>{C=Wr(q,"beforeRouteUpdate",y,R);for(const u of q)u.updateGuards.forEach(m=>{C.push(dt(m,y,R))});return C.push(Y),Lt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!R.matched.includes(u))if(De(u.beforeEnter))for(const m of u.beforeEnter)C.push(dt(m,y,R));else C.push(dt(u.beforeEnter,y,R));return C.push(Y),Lt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Wr(ie,"beforeRouteEnter",y,R),C.push(Y),Lt(C))).then(()=>{C=[];for(const u of o.list())C.push(dt(u,y,R));return C.push(Y),Lt(C)}).catch(u=>Qe(u,8)?u:Promise.reject(u))}function Ce(y,R,C){for(const F of s.list())F(y,R,C)}function st(y,R,C,F,q){const ie=O(y,R);if(ie)return ie;const Y=R===ct,u=jt?history.state:{};C&&(F||Y?a.replace(y.fullPath,G({scroll:Y&&u&&u.scroll},q)):a.push(y.fullPath,q)),l.value=y,wt(y,R,C,Y),Se()}let He;function Mt(){He||(He=a.listen((y,R,C)=>{if(!Ln.listening)return;const F=b(y),q=re(F);if(q){le(G(q,{replace:!0}),F).catch(pn);return}f=F;const ie=l.value;jt&&mu(ji(ie.fullPath,C.delta),Sr()),be(F,ie).catch(Y=>Qe(Y,12)?Y:Qe(Y,2)?(le(Y.to,F).then(u=>{Qe(u,20)&&!C.delta&&C.type===On.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),Z(Y,F,ie))).then(Y=>{Y=Y||st(F,ie,!1),Y&&(C.delta&&!Qe(Y,8)?a.go(-C.delta,!1):C.type===On.pop&&Qe(Y,20)&&a.go(-1,!1)),Ce(F,ie,Y)}).catch(pn)}))}let _t=ln(),an=ln(),ue;function Z(y,R,C){Se(y);const F=an.list();return F.length?F.forEach(q=>q(y,R,C)):console.error(y),Promise.reject(y)}function Q(){return ue&&l.value!==ct?Promise.resolve():new Promise((y,R)=>{_t.add([y,R])})}function Se(y){return ue||(ue=!y,Mt(),_t.list().forEach(([R,C])=>y?C(y):R()),_t.reset()),y}function wt(y,R,C,F){const{scrollBehavior:q}=e;if(!jt||!q)return Promise.resolve();const ie=!C&&pu(ji(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return Qo().then(()=>q(y,R,ie)).then(Y=>Y&&du(Y)).catch(Y=>Z(Y,y,R))}const Ie=y=>a.go(y);let we;const $t=new Set,Ln={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:$,getRoutes:S,resolve:b,options:e,push:z,replace:W,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:an.add,isReady:Q,install(y){const R=this;y.component("RouterLink",Qu),y.component("RouterView",td),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(l)}),jt&&!we&&l.value===ct&&(we=!0,z(a.location).catch(q=>{}));const C={};for(const q in ct)C[q]=oe(()=>l.value[q]);y.provide(Wa,R),y.provide(Ss,Tn(C)),y.provide(fa,l);const F=y.unmount;$t.add(y),y.unmount=function(){$t.delete(y),$t.size<1&&(f=ct,He&&He(),He=null,l.value=ct,we=!1,ue=!1),F()}}};return Ln}function Lt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function rd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Qt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Qt(f,l))||a.push(l))}return[n,r,a]}const ad={methods:{downloadPortfolio(){const e="/李芊姿作品集中文.pdf",t=document.createElement("a");t.href=e,t.download="李芊姿作品集中文.pdf",t.target="_blank",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};function id(e,t,n,r,a,i){return Ve(),Xe("button",{onClick:t[0]||(t[0]=(...o)=>i.downloadPortfolio&&i.downloadPortfolio(...o)),class:"download-button"}," 下载中文作品集 ")}const od=Ge(ad,[["render",id],["__scopeId","data-v-99e2c0df"]]);const sd={methods:{downloadResume(){const e="https://drive.google.com/uc?export=download&id=1jCLBcofz0hSdFA4YbQZmzOpClA1JzQA3",t=document.createElement("a");t.href=e,t.download="resume.pdf",t.target="_blank",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};function ld(e,t,n,r,a,i){return Ve(),Xe("button",{onClick:t[0]||(t[0]=(...o)=>i.downloadResume&&i.downloadResume(...o)),class:"download-button"}," Download Resume ")}const cd=Ge(sd,[["render",ld],["__scopeId","data-v-e92e21a9"]]);const fd={methods:{downloadFile(){const e="/portfolio/李芊姿简历.pdf",t=document.createElement("a");t.href=e,t.download="李芊姿简历.pdf",t.target="_blank",t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};function ud(e,t,n,r,a,i){return Ve(),Xe("button",{onClick:t[0]||(t[0]=(...o)=>i.downloadFile&&i.downloadFile(...o)),class:"download-button"}," 下载中文简历 ")}const dd=Ge(fd,[["render",ud],["__scopeId","data-v-8a8641f5"]]);const md={name:"Intro",components:{DownloadResume:cd,DownloadPortfolio:od,DownloadResumeChinese:dd}},Ir=e=>(kr("data-v-835dce99"),e=e(),Er(),e),pd={id:"intro",class:"intro"},hd={class:"container"},gd=Ir(()=>H("h1",null,[It("Hi, I am "),H("strong",null,"Qianzi(Stella) Li,")],-1)),vd=Ir(()=>H("h2",null,[It("a "),H("strong",null,"UX Designer"),It(" and "),H("strong",null,"Developer")],-1)),bd=Ir(()=>H("h2",null,"who like to design and build clean user interfaces.",-1)),yd=Ir(()=>H("a",{href:"/portfolio/李芊姿简历.pdf"},"Testing ",-1));function _d(e,t,n,r,a,i){const o=ht("download-resume"),s=ht("download-resume-chinese"),l=ht("download-portfolio");return Ve(),Xe("section",pd,[H("div",hd,[gd,vd,bd,fe(o),fe(s),yd,fe(l)])])}const wd=Ge(md,[["render",_d],["__scopeId","data-v-835dce99"]]);const xd={name:"Projects",methods:{goToOasis(){this.$router.push("/oasis")},goToEdit(){this.$router.push("/updatepackage")}}},Rr=e=>(kr("data-v-43fa965f"),e=e(),Er(),e),kd={id:"projects",class:"projects"},Ed={class:"container"},Ad=Rr(()=>H("span",null,"Learn More",-1)),Od=[Ad],Pd=Rr(()=>H("a",{class:"project",href:"/informed",id:"informed"},[H("span",null,"Learn More")],-1)),Cd=Rr(()=>H("a",{class:"project",href:"/ibiogram",id:"ibiogram"},[H("span",null,"Learn More")],-1)),Sd=Rr(()=>H("a",{class:"project",href:"/airs",id:"airs"},[H("span",null,"Learn More")],-1));function Id(e,t,n,r,a,i){return Ve(),Xe("section",kd,[H("div",Ed,[H("a",{class:"project",onClick:t[0]||(t[0]=(...o)=>i.goToOasis&&i.goToOasis(...o)),id:"oasis"},Od),Pd,Cd,Sd])])}const Rd=Ge(xd,[["render",Id],["__scopeId","data-v-43fa965f"]]),Td={components:{Intro:wd,Projects:Rd}},Nd={class:"container"};function Md(e,t,n,r,a,i){const o=ht("Intro");return Ve(),Xe("div",Nd,[fe(o)])}const $d=Ge(Td,[["render",Md]]),Fd="/portfolio/assets/oasis_home-aa369a09.svg";const Ld={name:"OasisProject"},Is=e=>(kr("data-v-dcdea026"),e=e(),Er(),e),jd={class:"oasis-project"},zd=Is(()=>H("div",{class:"image"},[H("img",{src:Fd,alt:"Homepage of OASIS"})],-1)),Dd=Is(()=>H("div",{class:"container"},[H("h1",null,"Project: OASIS"),H("h2",null,"The Design Lab @ UCSD | 2020 – Now"),H("div",{class:"oasis-details"},[H("ul",null,[H("li",null," Design and develop the user interface using Figma, React, MUI, Html/CSS, and JavaScript. "),H("li",null,"Upgrade the user interface in response to user feedback."),H("li",null," Collaborate with designers, developers, and scholars to deliver the prototype to potential clients including the RADx-rad team and the Lancet team. ")])])],-1)),Hd=[zd,Dd];function Ud(e,t,n,r,a,i){return Ve(),Xe("div",jd,Hd)}const Bd=Ge(Ld,[["render",Ud],["__scopeId","data-v-dcdea026"]]),Yd=nd({history:bu("/portfolio/"),routes:[{path:"/",name:"home",component:$d},{path:"/oasis",name:"oasis",component:Bd}]});function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fr(e){return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function Wd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Kd(e,t,n){return t&&Zi(e.prototype,t),n&&Zi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e,t){return Vd(e)||Gd(e,t)||Rs(e,t)||Jd()}function Mn(e){return qd(e)||Xd(e)||Rs(e)||Qd()}function qd(e){if(Array.isArray(e))return ua(e)}function Vd(e){if(Array.isArray(e))return e}function Xd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Rs(e,t){if(e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Qd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var eo=function(){},qa={},Ts={},Ns=null,Ms={mark:eo,measure:eo};try{typeof window<"u"&&(qa=window),typeof document<"u"&&(Ts=document),typeof MutationObserver<"u"&&(Ns=MutationObserver),typeof performance<"u"&&(Ms=performance)}catch{}var Zd=qa.navigator||{},to=Zd.userAgent,no=to===void 0?"":to,vt=qa,ne=Ts,ro=Ns,Yn=Ms;vt.document;var ot=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",$s=~no.indexOf("MSIE")||~no.indexOf("Trident/"),Wn,Kn,qn,Vn,Xn,nt="___FONT_AWESOME___",da=16,Fs="fa",Ls="svg-inline--fa",Tt="data-fa-i2svg",ma="data-fa-pseudo-element",em="data-fa-pseudo-element-pending",Va="data-prefix",Xa="data-icon",ao="fontawesome-i2svg",tm="async",nm=["HTML","HEAD","STYLE","SCRIPT"],js=function(){try{return!0}catch{return!1}}(),te="classic",ce="sharp",Ga=[te,ce];function $n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Pn=$n((Wn={},pe(Wn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Wn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Wn)),Cn=$n((Kn={},pe(Kn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Kn,ce,{solid:"fass",regular:"fasr",light:"fasl"}),Kn)),Sn=$n((qn={},pe(qn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(qn,ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),qn)),rm=$n((Vn={},pe(Vn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Vn,ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Vn)),am=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,zs="fa-layers-text",im=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,om=$n((Xn={},pe(Xn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Xn,ce,{900:"fass",400:"fasr",300:"fasl"}),Xn)),Ds=[1,2,3,4,5,6,7,8,9,10],sm=Ds.concat([11,12,13,14,15,16,17,18,19,20]),lm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=new Set;Object.keys(Cn[te]).map(In.add.bind(In));Object.keys(Cn[ce]).map(In.add.bind(In));var cm=[].concat(Ga,Mn(In),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(Ds.map(function(e){return"".concat(e,"x")})).concat(sm.map(function(e){return"w-".concat(e)})),gn=vt.FontAwesomeConfig||{};function fm(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function um(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var dm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dm.forEach(function(e){var t=Ka(e,2),n=t[0],r=t[1],a=um(fm(n));a!=null&&(gn[r]=a)})}var Hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fs,replacementClass:Ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Zt=T(T({},Hs),gn);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var M={};Object.keys(Hs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Zt[e]=n,vn.forEach(function(r){return r(M)})},get:function(){return Zt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Zt.cssPrefix=t,vn.forEach(function(n){return n(M)})},get:function(){return Zt.cssPrefix}});vt.FontAwesomeConfig=M;var vn=[];function mm(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ft=da,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pm(e){if(!(!e||!ot)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var hm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=hm[Math.random()*62|0];return t}function rn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qa(e){return e.classList?rn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Us(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gm(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Us(e[n]),'" ')},"").trim()}function Tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ja(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function vm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function bm(e){var t=e.transform,n=e.width,r=n===void 0?da:n,a=e.height,i=a===void 0?da:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$s?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ym=`:root, :host {
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
}`;function Bs(){var e=Fs,t=Ls,n=M.cssPrefix,r=M.replacementClass,a=ym;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var io=!1;function Kr(){M.autoAddCss&&!io&&(pm(Bs()),io=!0)}var _m={mixout:function(){return{dom:{css:Bs,insertCss:Kr}}},hooks:function(){return{beforeDOMElementCreation:function(){Kr()},beforeI2svg:function(){Kr()}}}},rt=vt||{};rt[nt]||(rt[nt]={});rt[nt].styles||(rt[nt].styles={});rt[nt].hooks||(rt[nt].hooks={});rt[nt].shims||(rt[nt].shims=[]);var Le=rt[nt],Ys=[],wm=function e(){ne.removeEventListener("DOMContentLoaded",e),ur=1,Ys.map(function(t){return t()})},ur=!1;ot&&(ur=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),ur||ne.addEventListener("DOMContentLoaded",wm));function xm(e){ot&&(ur?setTimeout(e,0):Ys.push(e))}function Fn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Us(e):"<".concat(t," ").concat(gm(r),">").concat(i.map(Fn).join(""),"</").concat(t,">")}function oo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var km=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},qr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?km(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Em(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pa(e){var t=Em(e);return t.length===1?t[0].toString(16):null}function Am(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function so(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=so(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,so(t)):Le.styles[e]=T(T({},Le.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Gn,Qn,Jn,Dt=Le.styles,Om=Le.shims,Pm=(Gn={},pe(Gn,te,Object.values(Sn[te])),pe(Gn,ce,Object.values(Sn[ce])),Gn),Za=null,Ws={},Ks={},qs={},Vs={},Xs={},Cm=(Qn={},pe(Qn,te,Object.keys(Pn[te])),pe(Qn,ce,Object.keys(Pn[ce])),Qn);function Sm(e){return~cm.indexOf(e)}function Im(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Sm(a)?a:null}var Gs=function(){var t=function(i){return qr(Dt,function(o,s,l){return o[l]=qr(s,i,{}),o},{})};Ws=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ks=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Xs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=qr(Om,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});qs=r.names,Vs=r.unicodes,Za=Nr(M.styleDefault,{family:M.familyDefault})};mm(function(e){Za=Nr(e.styleDefault,{family:M.familyDefault})});Gs();function ei(e,t){return(Ws[e]||{})[t]}function Rm(e,t){return(Ks[e]||{})[t]}function Ct(e,t){return(Xs[e]||{})[t]}function Qs(e){return qs[e]||{prefix:null,iconName:null}}function Tm(e){var t=Vs[e],n=ei("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Za}var ti=function(){return{prefix:null,iconName:null,rest:[]}};function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=Pn[r][e],i=Cn[r][e]||Cn[r][a],o=e in Le.styles?e:null;return i||o||null}var lo=(Jn={},pe(Jn,te,Object.keys(Sn[te])),pe(Jn,ce,Object.keys(Sn[ce])),Jn);function Mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,te,"".concat(M.cssPrefix,"-").concat(te)),pe(t,ce,"".concat(M.cssPrefix,"-").concat(ce)),t),o=null,s=te;(e.includes(i[te])||e.some(function(f){return lo[te].includes(f)}))&&(s=te),(e.includes(i[ce])||e.some(function(f){return lo[ce].includes(f)}))&&(s=ce);var l=e.reduce(function(f,c){var d=Im(M.cssPrefix,c);if(Dt[c]?(c=Pm[s].includes(c)?rm[s][c]:c,o=c,f.prefix=c):Cm[s].indexOf(c)>-1?(o=c,f.prefix=Nr(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[te]&&c!==i[ce]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?Qs(f.iconName):{},g=Ct(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ti());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Dt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bt()||"fas"),l}var Nm=function(){function e(){Wd(this,e),this.definitions={}}return Kd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ha(s,o[s]);var l=Sn[te][s];l&&ha(l,o[s]),Gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),co=[],Ht={},qt={},Mm=Object.keys(qt);function $m(e,t){var n=t.mixoutsTo;return co=e,Ht={},Object.keys(qt).forEach(function(r){Mm.indexOf(r)===-1&&delete qt[r]}),co.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(qt)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function at(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function va(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=Ct(n,t)||t,oo(Js.definitions,n,t)||oo(Le.styles,n,t)}var Js=new Nm,Fm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Nt("noAuto")},Lm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ot?(Nt("beforeI2svg",t),at("pseudoElements2svg",t),at("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,xm(function(){zm({autoReplaceSvgRoot:n}),Nt("watch",t)})}},jm={icon:function(t){if(t===null)return null;if(fr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nr(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(am))){var a=Mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||bt(),iconName:Ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=bt();return{prefix:i,iconName:Ct(i,t)||t}}}},Pe={noAuto:Fm,config:M,dom:Lm,parse:jm,library:Js,findIconDefinition:va,toHtml:Fn},zm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Le.styles).length>0||M.autoFetchSvg)&&ot&&M.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function $r(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ot){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Dm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ja(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Tr(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Hm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function ni(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,$=A.height,b=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat($)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/$*16*.0625,"em")}:{};g&&(O.attributes[Tt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||Rn())},children:[l]}),delete O.attributes.title);var W=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},z),d.styles)}),re=r.found&&n.found?at("generateAbstractMask",W)||{children:[],attributes:{}}:at("generateAbstractIcon",W)||{children:[],attributes:{}},le=re.children,Ae=re.attributes;return W.children=le,W.attributes=Ae,s?Hm(W):Dm(W)}function fo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Tt]="");var c=T({},o.styles);Ja(a)&&(c.transform=bm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Tr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Um(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vr=Le.styles;function ba(e){var t=e[0],n=e[1],r=e.slice(4),a=Ka(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Bm={found:!1,width:512,height:512};function Ym(e,t){!js&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=bt()),new Promise(function(r,a){if(at("missingIconAbstract"),n==="fa"){var i=Qs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Vr[t]&&Vr[t][e]){var o=Vr[t][e];return r(ba(o))}Ym(e,t),r(T(T({},Bm),{},{icon:M.showMissingIcons&&e?at("missingIconAbstract")||{}:{}}))})}var uo=function(){},_a=M.measurePerformance&&Yn&&Yn.mark&&Yn.measure?Yn:{mark:uo,measure:uo},fn='FA "6.4.0"',Wm=function(t){return _a.mark("".concat(fn," ").concat(t," begins")),function(){return Zs(t)}},Zs=function(t){_a.mark("".concat(fn," ").concat(t," ends")),_a.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},ri={begin:Wm,end:Zs},rr=function(){};function mo(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function Km(e){var t=e.getAttribute?e.getAttribute(Va):null,n=e.getAttribute?e.getAttribute(Xa):null;return t&&n}function qm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Vm(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function Xm(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Gm(e){return ne.createElement(e)}function el(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Xm:Gm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(el(o,{ceFn:r}))}),a}function Qm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(el(a),n)}),n.getAttribute(Tt)===null&&M.keepOriginalSource){var r=ne.createComment(Qm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qa(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Fn(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function po(e){e()}function tl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=po;M.mutateApproach===tm&&(r=vt.requestAnimationFrame||po),r(function(){var a=Vm(),i=ri.begin("mutate");e.map(a),i(),n()})}}var ai=!1;function nl(){ai=!0}function wa(){ai=!1}var dr=null;function ho(e){if(ro&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;dr=new ro(function(f){if(!ai){var c=bt();rn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!mo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&mo(d.target)&&~lm.indexOf(d.attributeName))if(d.attributeName==="class"&&Km(d.target)){var p=Mr(Qa(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Va,g||c),A&&d.target.setAttribute(Xa,A)}else qm(d.target)&&a(d.target)})}}),ot&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jm(){dr&&dr.disconnect()}function Zm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ep(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mr(Qa(e));return a.prefix||(a.prefix=bt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Rm(a.prefix,e.innerText)||ei(a.prefix,pa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function tp(e){var t=rn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function np(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ep(e),r=n.iconName,a=n.prefix,i=n.rest,o=tp(e),s=ga("parseNodeAttributes",{},e),l=t.styleParser?Zm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var rp=Le.styles;function rl(e){var t=M.autoReplaceSvg==="nest"?go(e,{styleParser:!1}):go(e);return~t.extra.classes.indexOf(zs)?at("generateLayersText",e,t):at("generateSvgReplacementMutation",e,t)}var yt=new Set;Ga.map(function(e){yt.add("fa-".concat(e))});Object.keys(Pn[te]).map(yt.add.bind(yt));Object.keys(Pn[ce]).map(yt.add.bind(yt));yt=Mn(yt);function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ot)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(ao,"-").concat(d))},a=function(d){return n.remove("".concat(ao,"-").concat(d))},i=M.autoFetchSvg?yt:Ga.map(function(c){return"fa-".concat(c)}).concat(Object.keys(rp));i.includes("fa")||i.push("fa");var o=[".".concat(zs,":not([").concat(Tt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ri.begin("onTree"),f=s.reduce(function(c,d){try{var p=rl(d);p&&c.push(p)}catch(g){js||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){tl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function ap(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rl(e).then(function(n){n&&tl([n],t)})}function ip(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:va(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:va(a||{})),e(r,T(T({},n),{},{mask:a}))}}var op=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,$=S===void 0?[]:S,b=n.attributes,w=b===void 0?{}:b,O=n.styles,z=O===void 0?{}:O;if(t){var W=t.prefix,re=t.iconName,le=t.icon;return $r(T({type:"icon"},t),function(){return Nt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Rn()):(w["aria-hidden"]="true",w.focusable="false")),ni({icons:{main:ba(le),mask:l?ba(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:re,transform:T(T({},Ke),a),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:w,styles:z,classes:$}})})}},sp={mixout:function(){return{icon:ip(op)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vo,n.nodeCallback=ap,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return vo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ya(a,s),c.iconName?ya(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var $=Ka(S,2),b=$[0],w=$[1];g([n,ni({icons:{main:b,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tr(s);l.length>0&&(a.style=l);var f;return Ja(o)&&(f=at("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},lp={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return $r({type:"layer"},function(){Nt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Mn(i)).join(" ")},children:o}]})}}}},cp={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return $r({type:"counter",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),Um({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Mn(s))}})})}}}},fp={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return $r({type:"text",content:n},function(){return Nt("beforeDOMElementCreation",{content:n,params:r}),fo({content:n,transform:T(T({},Ke),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($s){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},up=new RegExp('"',"ug"),bo=[1105920,1112319];function dp(e){var t=e.replace(up,""),n=Am(t,0),r=n>=bo[0]&&n<=bo[1],a=t.length===2?t[0]===t[1]:!1;return{value:pa(a?t[0]:t),isSecondary:r||a}}function yo(e,t){var n="".concat(em).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=rn(e.children),o=i.filter(function(le){return le.getAttribute(ma)===t})[0],s=vt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(im),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Cn[p][l[2].toLowerCase()]:om[p][f],A=dp(d),S=A.value,$=A.isSecondary,b=l[0].startsWith("FontAwesome"),w=ei(g,S),O=w;if(b){var z=Tm(S);z.iconName&&z.prefix&&(w=z.iconName,g=z.prefix)}if(w&&!$&&(!o||o.getAttribute(Va)!==g||o.getAttribute(Xa)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var W=np(),re=W.extra;re.attributes[ma]=t,ya(w,g).then(function(le){var Ae=ni(T(T({},W),{},{icons:{main:le,mask:ti()},prefix:g,iconName:O,extra:re,watchable:!0})),be=ne.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=Ae.map(function(Ce){return Fn(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function mp(e){return Promise.all([yo(e,"::before"),yo(e,"::after")])}function pp(e){return e.parentNode!==document.head&&!~nm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ma)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _o(e){if(ot)return new Promise(function(t,n){var r=rn(e.querySelectorAll("*")).filter(pp).map(mp),a=ri.begin("searchPseudoElements");nl(),Promise.all(r).then(function(){a(),wa(),t()}).catch(function(){a(),wa(),n()})})}var hp={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_o,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;M.searchPseudoElements&&_o(a)}}},wo=!1,gp={mixout:function(){return{dom:{unwatch:function(){nl(),wo=!0}}}},hooks:function(){return{bootstrap:function(){ho(ga("mutationObserverCallbacks",{}))},noAuto:function(){Jm()},watch:function(n){var r=n.observeMutationsRoot;wo?wa():ho(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},vp={mixout:function(){return{parse:{transform:function(n){return xo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=xo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Xr={x:0,y:0,width:"100%",height:"100%"};function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function bp(e){return e.tag==="g"?e.children:[e]}var yp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mr(a.split(" ").map(function(o){return o.trim()})):ti();return i.prefix||(i.prefix=bt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=vm({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:T(T({},Xr),{},{fill:"white"})},S=c.children?{children:c.children.map(ko)}:{},$={tag:"g",attributes:T({},g.inner),children:[ko(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[$]},w="mask-".concat(s||Rn()),O="clip-".concat(s||Rn()),z={tag:"mask",attributes:T(T({},Xr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:bp(p)},z]};return r.push(W,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Xr)}),{children:r,attributes:a}}}},_p={provides:function(t){var n=!1;vt.matchMedia&&(n=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wp={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},xp=[_m,sp,lp,cp,fp,hp,gp,vp,yp,_p,wp];$m(xp,{mixoutsTo:Pe});Pe.noAuto;var al=Pe.config,kp=Pe.library;Pe.dom;var mr=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Ep=Pe.icon;Pe.layer;var Ap=Pe.text;Pe.counter;function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Op(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Pp(e,t){if(e==null)return{};var n=Op(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xa(e){return Cp(e)||Sp(e)||Ip(e)||Rp()}function Cp(e){if(Array.isArray(e))return ka(e)}function Sp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ip(e,t){if(e){if(typeof e=="string")return ka(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ka(e,t)}}function ka(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},il={exports:{}};(function(e){(function(t){var n=function(b,w,O){if(!f(w)||d(w)||p(w)||g(w)||l(w))return w;var z,W=0,re=0;if(c(w))for(z=[],re=w.length;W<re;W++)z.push(n(b,w[W],O));else{z={};for(var le in w)Object.prototype.hasOwnProperty.call(w,le)&&(z[b(le,O)]=n(b,w[le],O))}return z},r=function(b,w){w=w||{};var O=w.separator||"_",z=w.split||/(?=[A-Z])/;return b.split(z).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(w,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var w=a(b);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(b,w){return r(b,w).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,w){var O=w&&"process"in w?w.process:w;return typeof O!="function"?b:function(z,W){return O(z,b,W)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,w){return n(S(a,w),b)},decamelizeKeys:function(b,w){return n(S(o,w),b,w)},pascalizeKeys:function(b,w){return n(S(i,w),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Tp)})(il);var Np=il.exports,Mp=["class","style"];function $p(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Np.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ii(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Fp(c);break;case"style":l.style=$p(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Pp(n,Mp);return Cr(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var ol=!1;try{ol=!0}catch{}function Lp(){if(!ol&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function jp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ao(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mr.icon)return mr.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zp=Nn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Ao(t.icon)}),i=oe(function(){return bn("classes",jp(t))}),o=oe(function(){return bn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=oe(function(){return bn("mask",Ao(t.mask))}),l=oe(function(){return Ep(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});un(l,function(c){if(!c)return Lp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=oe(function(){return l.value?ii(l.value.abstract[0],{},r):null});return function(){return f.value}}});Nn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=al.familyPrefix,i=oe(function(){return["".concat(a,"-layers")].concat(xa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cr("div",{class:i.value},r.default?r.default():[])}}});Nn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=al.familyPrefix,i=oe(function(){return bn("classes",[].concat(xa(t.counter?["".concat(a,"-layers-counter")]:[]),xa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=oe(function(){return bn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=oe(function(){var f=Ap(t.value.toString(),Me(Me({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=oe(function(){return ii(s.value,{},r)});return function(){return l.value}}});var Dp={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Hp={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Up={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};kp.add(Dp,Up,Hp);Tf(eu).component("font-awesome-icon",zp).use(Yd).mount("#app");
