const ty=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};ty();function kt(){}const ny=e=>e;function ku(e,t){for(const n in t)e[n]=t[n];return e}function xm(e){return e()}function vf(){return Object.create(null)}function Ws(e){e.forEach(xm)}function iy(e){return typeof e=="function"}function Ft(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ry(e){return Object.keys(e).length===0}function qn(e,...t){if(e==null)return kt;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function lt(e,t,n){e.$$.on_destroy.push(qn(t,n))}function kh(e,t,n,i){if(e){const r=wm(e,t,n,i);return e[0](r)}}function wm(e,t,n,i){return e[1]&&i?ku(n.ctx.slice(),e[1](i(t))):n.ctx}function sy(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=t.dirty[a]|r[a];return s}return t.dirty|r}return t.dirty}function Bh(e,t,n,i,r,s,o){const a=sy(t,i,r,s);if(a){const c=wm(t,n,i,o);e.p(c,a)}}function ve(e,t,n=t){return e.set(n),t}const Mm=typeof window!="undefined";let oy=Mm?()=>window.performance.now():()=>Date.now(),Em=Mm?e=>requestAnimationFrame(e):kt;const us=new Set;function Sm(e){us.forEach(t=>{t.c(e)||(us.delete(t),t.f())}),us.size!==0&&Em(Sm)}function ay(e){let t;return us.size===0&&Em(Sm),{promise:new Promise(n=>{us.add(t={c:e,f:n})}),abort(){us.delete(t)}}}let pa=!1;const Co=new Set;function cy(){pa=!0}function ly(){pa=!1;for(const e of Co)e.parentNode.removeChild(e);Co.clear()}function He(e,t){pa&&Co.delete(t),t.parentNode!==e&&e.appendChild(t)}function Je(e,t,n){pa&&Co.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function Ve(e){pa?Co.add(e):e.parentNode&&e.parentNode.removeChild(e)}function Pc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function St(e){return document.createElement(e)}function pr(e){return document.createTextNode(e)}function Ye(){return pr(" ")}function js(){return pr("")}function Zt(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $e(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function uy(e){return Array.from(e.childNodes)}function bf(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function xf(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}let Ta;function hy(){if(Ta===void 0){Ta=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Ta=!0}}return Ta}function fy(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=St("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=hy();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=Zt(window,"message",o=>{o.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{s=Zt(i.contentWindow,"resize",t)}),He(e,i),()=>{(r||s&&i.contentWindow)&&s(),Ve(i)}}function _t(e,t,n){e.classList[n?"add":"remove"](t)}function dy(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}let Cc;function Dc(e){Cc=e}function Il(){if(!Cc)throw new Error("Function called outside component initialization");return Cc}function yn(e){Il().$$.on_mount.push(e)}function py(e){Il().$$.on_destroy.push(e)}function my(){const e=Il();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const r=dy(t,n);i.slice().forEach(s=>{s.call(e,r)})}}}const go=[],An=[],Mc=[],Bu=[],gy=Promise.resolve();let Uu=!1;function yy(){Uu||(Uu=!0,gy.then(Xe))}function Ic(e){Mc.push(e)}function Uh(e){Bu.push(e)}let Yl=!1;const ql=new Set;function Xe(){if(!Yl){Yl=!0;do{for(let e=0;e<go.length;e+=1){const t=go[e];Dc(t),_y(t.$$)}for(Dc(null),go.length=0;An.length;)An.pop()();for(let e=0;e<Mc.length;e+=1){const t=Mc[e];ql.has(t)||(ql.add(t),t())}Mc.length=0}while(go.length);for(;Bu.length;)Bu.pop()();Uu=!1,Yl=!1,ql.clear()}}function _y(e){if(e.fragment!==null){e.update(),Ws(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ic)}}const Ec=new Set;let mr;function Wi(){mr={r:0,c:[],p:mr}}function ji(){mr.r||Ws(mr.c),mr=mr.p}function Se(e,t){e&&e.i&&(Ec.delete(e),e.i(t))}function Pe(e,t,n,i){if(e&&e.o){if(Ec.has(e))return;Ec.add(e),mr.c.push(()=>{Ec.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function wf(e,t){Pe(e,1,1,()=>{t.delete(e.key)})}function Mf(e,t,n,i,r,s,o,a,c,l,u,h){let d=e.length,f=s.length,p=d;const y={};for(;p--;)y[e[p].key]=p;const _=[],m=new Map,g=new Map;for(p=f;p--;){const S=h(r,s,p),w=n(S);let O=o.get(w);O?i&&O.p(S,t):(O=l(w,S),O.c()),m.set(w,_[p]=O),w in y&&g.set(w,Math.abs(p-y[w]))}const v=new Set,b=new Set;function x(S){Se(S,1),S.m(a,u),o.set(S.key,S),u=S.first,f--}for(;d&&f;){const S=_[f-1],w=e[d-1],O=S.key,R=w.key;S===w?(u=S.first,d--,f--):m.has(R)?!o.has(O)||v.has(O)?x(S):b.has(R)?d--:g.get(O)>g.get(R)?(b.add(O),x(S)):(v.add(R),d--):(c(w,o),d--)}for(;d--;){const S=e[d];m.has(S.key)||c(S,o)}for(;f;)x(_[f-1]);return _}function Hh(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ze(e){e&&e.c()}function We(e,t,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=e.$$;r&&r.m(t,n),i||Ic(()=>{const c=s.map(xm).filter(iy);o?o.push(...c):Ws(c),e.$$.on_mount=[]}),a.forEach(Ic)}function je(e,t){const n=e.$$;n.fragment!==null&&(Ws(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function vy(e,t){e.$$.dirty[0]===-1&&(go.push(e),yy(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ht(e,t,n,i,r,s,o=[-1]){const a=Cc;Dc(e);const c=e.$$={fragment:null,ctx:null,props:s,update:kt,not_equal:r,bound:vf(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:t.context||[]),callbacks:vf(),dirty:o,skip_bound:!1};let l=!1;if(c.ctx=n?n(e,t.props||{},(u,h,...d)=>{const f=d.length?d[0]:h;return c.ctx&&r(c.ctx[u],c.ctx[u]=f)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](f),l&&vy(e,u)),h}):[],c.update(),l=!0,Ws(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){cy();const u=uy(t.target);c.fragment&&c.fragment.l(u),u.forEach(Ve)}else c.fragment&&c.fragment.c();t.intro&&Se(e.$$.fragment),We(e,t.target,t.anchor,t.customElement),ly(),Xe()}Dc(a)}class zt{$destroy(){je(this,1),this.$destroy=kt}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!ry(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */function st(e){return e===null||typeof e=="undefined"}function Tt(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ot(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}const Ut=e=>(typeof e=="number"||e instanceof Number)&&isFinite(+e);function bn(e,t){return Ut(e)?e:t}function Ke(e,t){return typeof e=="undefined"?t:e}const by=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:e/t,Tm=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Vt(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Jt(e,t,n,i){let r,s,o;if(Tt(e))if(s=e.length,i)for(r=s-1;r>=0;r--)t.call(n,e[r],r);else for(r=0;r<s;r++)t.call(n,e[r],r);else if(ot(e))for(o=Object.keys(e),s=o.length,r=0;r<s;r++)t.call(n,e[o[r]],o[r])}function Ef(e,t){let n,i,r,s;if(!e||!t||e.length!==t.length)return!1;for(n=0,i=e.length;n<i;++n)if(r=e[n],s=t[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function Oc(e){if(Tt(e))return e.map(Oc);if(ot(e)){const t=Object.create(null),n=Object.keys(e),i=n.length;let r=0;for(;r<i;++r)t[n[r]]=Oc(e[n[r]]);return t}return e}function Am(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function xy(e,t,n,i){if(!Am(e))return;const r=t[e],s=n[e];ot(r)&&ot(s)?Do(r,s,i):t[e]=Oc(s)}function Do(e,t,n){const i=Tt(t)?t:[t],r=i.length;if(!ot(e))return e;n=n||{};const s=n.merger||xy;for(let o=0;o<r;++o){if(t=i[o],!ot(t))continue;const a=Object.keys(t);for(let c=0,l=a.length;c<l;++c)s(a[c],e,t,n)}return e}function Rm(e,t){return Do(e,t,{merger:wy})}function wy(e,t,n){if(!Am(e))return;const i=t[e],r=n[e];ot(i)&&ot(r)?Rm(i,r):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Oc(r))}const Sf={"":e=>e,x:e=>e.x,y:e=>e.y};function gs(e,t){return(Sf[t]||(Sf[t]=My(t)))(e)}function My(e){const t=Ey(e);return n=>{for(const i of t){if(i==="")break;n=n&&n[i]}return n}}function Ey(e){const t=e.split("."),n=[];let i="";for(const r of t)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function Lm(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Pm=e=>typeof e!="undefined",xt=Math.PI,tt=2*xt,Sy=tt+xt,Ty=xt/180,bt=xt/2,to=xt/4,Tf=xt*2/3,Mn=Math.log10,ei=Math.sign;function Af(e){const t=Math.round(e);e=bo(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Mn(e))),i=e/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function Ay(e){const t=[],n=Math.sqrt(e);let i;for(i=1;i<n;i++)e%i===0&&(t.push(i),t.push(e/i));return n===(n|0)&&t.push(n),t.sort((r,s)=>r-s).pop(),t}function ys(e){return!isNaN(parseFloat(e))&&isFinite(e)}function bo(e,t,n){return Math.abs(e-t)<n}function Ry(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Cm(e,t,n){let i,r,s;for(i=0,r=e.length;i<r;i++)s=e[i][n],isNaN(s)||(t.min=Math.min(t.min,s),t.max=Math.max(t.max,s))}function kn(e){return e*(xt/180)}function zh(e){return e*(180/xt)}function Rf(e){if(!Ut(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Ly(e,t){const n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*xt&&(s+=tt),{angle:s,distance:r}}function Hu(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Py(e,t){return(e-t+Sy)%tt-xt}function Nn(e){return(e%tt+tt)%tt}function Fc(e,t,n,i){const r=Nn(e),s=Nn(t),o=Nn(n),a=Nn(s-r),c=Nn(o-r),l=Nn(r-s),u=Nn(r-o);return r===s||r===o||i&&s===o||a>c&&l<u}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function Cy(e){return jt(e,-32768,32767)}function Nc(e,t,n,i=1e-6){return e>=Math.min(t,n)-i&&e<=Math.max(t,n)+i}function Dm(e,t,n){n=n||(o=>e[o]<t);let i=e.length-1,r=0,s;for(;i-r>1;)s=r+i>>1,n(s)?r=s:i=s;return{lo:r,hi:i}}const rs=(e,t,n,i)=>Dm(e,n,i?r=>e[r][t]<=n:r=>e[r][t]<n);function Dy(e,t,n){let i=0,r=e.length;for(;i<r&&e[i]<t;)i++;for(;r>i&&e[r-1]>n;)r--;return i>0||r<e.length?e.slice(i,r):e}const Im=["push","pop","shift","splice","unshift"];function Iy(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Im.forEach(n=>{const i="_onData"+Lm(n),r=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...s){const o=r.apply(this,s);return e._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...s)}),o}})})}function Lf(e,t){const n=e._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(t);r!==-1&&i.splice(r,1),!(i.length>0)&&(Im.forEach(s=>{delete e[s]}),delete e._chartjs)}function Om(e){const t=new Set;let n,i;for(n=0,i=e.length;n<i;++n)t.add(e[n]);return t.size===i?e:Array.from(t)}const Oy=function(){return typeof window=="undefined"?function(e){return e()}:window.requestAnimationFrame}(),Fy=e=>e==="start"?"left":e==="end"?"right":"center",Pf=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2;function Fm(e,t,n){const i=t.length;let r=0,s=i;if(e._sorted){const{iScale:o,_parsed:a}=e,c=o.axis,{min:l,max:u,minDefined:h,maxDefined:d}=o.getUserBounds();h&&(r=jt(Math.min(rs(a,o.axis,l).lo,n?i:rs(t,c,o.getPixelForValue(l)).lo),0,i-1)),d?s=jt(Math.max(rs(a,o.axis,u,!0).hi+1,n?0:rs(t,c,o.getPixelForValue(u),!0).hi+1),r,i)-r:s=i-r}return{start:r,count:s}}function Nm(e){const{xScale:t,yScale:n,_scaleRanges:i}=e,r={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!i)return e._scaleRanges=r,!0;const s=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}const Aa=e=>e===0||e===1,Cf=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*tt/n)),Df=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*tt/n)+1,xo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*bt)+1,easeOutSine:e=>Math.sin(e*bt),easeInOutSine:e=>-.5*(Math.cos(xt*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Aa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Aa(e)?e:Cf(e,.075,.3),easeOutElastic:e=>Aa(e)?e:Df(e,.075,.3),easeInOutElastic(e){return Aa(e)?e:e<.5?.5*Cf(e*2,.1125,.45):.5+.5*Df(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-xo.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?xo.easeInBounce(e*2)*.5:xo.easeOutBounce(e*2-1)*.5+.5};/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function ma(e){return e+.5|0}const Ni=(e,t,n)=>Math.max(Math.min(e,n),t);function yo(e){return Ni(ma(e*2.55),0,255)}function Ui(e){return Ni(ma(e*255),0,255)}function pi(e){return Ni(ma(e/2.55)/100,0,1)}function If(e){return Ni(ma(e*100),0,100)}const vn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},zu=[..."0123456789ABCDEF"],Ny=e=>zu[e&15],ky=e=>zu[(e&240)>>4]+zu[e&15],Ra=e=>(e&240)>>4===(e&15),By=e=>Ra(e.r)&&Ra(e.g)&&Ra(e.b)&&Ra(e.a);function Uy(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&vn[e[1]]*17,g:255&vn[e[2]]*17,b:255&vn[e[3]]*17,a:t===5?vn[e[4]]*17:255}:(t===7||t===9)&&(n={r:vn[e[1]]<<4|vn[e[2]],g:vn[e[3]]<<4|vn[e[4]],b:vn[e[5]]<<4|vn[e[6]],a:t===9?vn[e[7]]<<4|vn[e[8]]:255})),n}const Hy=(e,t)=>e<255?t(e):"";function zy(e){var t=By(e)?Ny:ky;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Hy(e.a,t):void 0}const Gy=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function km(e,t,n){const i=t*Math.min(n,1-n),r=(s,o=(s+e/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function Vy(e,t,n){const i=(r,s=(r+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function Wy(e,t,n){const i=km(e,1,.5);let r;for(t+n>1&&(r=1/(t+n),t*=r,n*=r),r=0;r<3;r++)i[r]*=1-t-n,i[r]+=t;return i}function jy(e,t,n,i,r){return e===r?(t-n)/i+(t<n?6:0):t===r?(n-e)/i+2:(e-t)/i+4}function Gh(e){const n=e.r/255,i=e.g/255,r=e.b/255,s=Math.max(n,i,r),o=Math.min(n,i,r),a=(s+o)/2;let c,l,u;return s!==o&&(u=s-o,l=a>.5?u/(2-s-o):u/(s+o),c=jy(n,i,r,u,s),c=c*60+.5),[c|0,l||0,a]}function Vh(e,t,n,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,i)).map(Ui)}function Wh(e,t,n){return Vh(km,e,t,n)}function Xy(e,t,n){return Vh(Wy,e,t,n)}function Yy(e,t,n){return Vh(Vy,e,t,n)}function Bm(e){return(e%360+360)%360}function qy(e){const t=Gy.exec(e);let n=255,i;if(!t)return;t[5]!==i&&(n=t[6]?yo(+t[5]):Ui(+t[5]));const r=Bm(+t[2]),s=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=Xy(r,s,o):t[1]==="hsv"?i=Yy(r,s,o):i=Wh(r,s,o),{r:i[0],g:i[1],b:i[2],a:n}}function Zy(e,t){var n=Gh(e);n[0]=Bm(n[0]+t),n=Wh(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Jy(e){if(!e)return;const t=Gh(e),n=t[0],i=If(t[1]),r=If(t[2]);return e.a<255?`hsla(${n}, ${i}%, ${r}%, ${pi(e.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const Of={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ff={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Ky(){const e={},t=Object.keys(Ff),n=Object.keys(Of);let i,r,s,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],r=0;r<n.length;r++)s=n[r],a=a.replace(s,Of[s]);s=parseInt(Ff[o],16),e[a]=[s>>16&255,s>>8&255,s&255]}return e}let La;function Qy(e){La||(La=Ky(),La.transparent=[0,0,0,0]);const t=La[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const $y=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function e0(e){const t=$y.exec(e);let n=255,i,r,s;if(!!t){if(t[7]!==i){const o=+t[7];n=t[8]?yo(o):Ni(o*255,0,255)}return i=+t[1],r=+t[3],s=+t[5],i=255&(t[2]?yo(i):Ni(i,0,255)),r=255&(t[4]?yo(r):Ni(r,0,255)),s=255&(t[6]?yo(s):Ni(s,0,255)),{r:i,g:r,b:s,a:n}}}function t0(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${pi(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Zl=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Nr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function n0(e,t,n){const i=Nr(pi(e.r)),r=Nr(pi(e.g)),s=Nr(pi(e.b));return{r:Ui(Zl(i+n*(Nr(pi(t.r))-i))),g:Ui(Zl(r+n*(Nr(pi(t.g))-r))),b:Ui(Zl(s+n*(Nr(pi(t.b))-s))),a:e.a+n*(t.a-e.a)}}function Pa(e,t,n){if(e){let i=Gh(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*n,t===0?360:1)),i=Wh(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function Um(e,t){return e&&Object.assign(t||{},e)}function Nf(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Ui(e[3]))):(t=Um(e,{r:0,g:0,b:0,a:1}),t.a=Ui(t.a)),t}function i0(e){return e.charAt(0)==="r"?e0(e):qy(e)}class kc{constructor(t){if(t instanceof kc)return t;const n=typeof t;let i;n==="object"?i=Nf(t):n==="string"&&(i=Uy(t)||Qy(t)||i0(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Um(this._rgb);return t&&(t.a=pi(t.a)),t}set rgb(t){this._rgb=Nf(t)}rgbString(){return this._valid?t0(this._rgb):void 0}hexString(){return this._valid?zy(this._rgb):void 0}hslString(){return this._valid?Jy(this._rgb):void 0}mix(t,n){if(t){const i=this.rgb,r=t.rgb;let s;const o=n===s?.5:n,a=2*o-1,c=i.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;s=1-l,i.r=255&l*i.r+s*r.r+.5,i.g=255&l*i.g+s*r.g+.5,i.b=255&l*i.b+s*r.b+.5,i.a=o*i.a+(1-o)*r.a,this.rgb=i}return this}interpolate(t,n){return t&&(this._rgb=n0(this._rgb,t._rgb,n)),this}clone(){return new kc(this.rgb)}alpha(t){return this._rgb.a=Ui(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=ma(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Pa(this._rgb,2,t),this}darken(t){return Pa(this._rgb,2,-t),this}saturate(t){return Pa(this._rgb,1,t),this}desaturate(t){return Pa(this._rgb,1,-t),this}rotate(t){return Zy(this._rgb,t),this}}function Hm(e){return new kc(e)}function zm(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function kf(e){return zm(e)?e:Hm(e)}function Jl(e){return zm(e)?e:Hm(e).saturate(.5).darken(.1).hexString()}const Gm=Object.create(null),r0=Object.create(null);function wo(e,t){if(!t)return e;const n=t.split(".");for(let i=0,r=n.length;i<r;++i){const s=n[i];e=e[s]||(e[s]=Object.create(null))}return e}function Kl(e,t,n){return typeof t=="string"?Do(wo(e,t),n):Do(wo(e,""),t)}class s0{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>Jl(i.backgroundColor),this.hoverBorderColor=(n,i)=>Jl(i.borderColor),this.hoverColor=(n,i)=>Jl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,n){return Kl(this,t,n)}get(t){return wo(this,t)}describe(t,n){return Kl(r0,t,n)}override(t,n){return Kl(Gm,t,n)}route(t,n,i,r){const s=wo(this,t),o=wo(this,i),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[a],l=o[r];return ot(c)?Object.assign({},l,c):Ke(c,l)},set(c){this[a]=c}}})}}var at=new s0({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function o0(e){return!e||st(e.size)||st(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Bc(e,t,n,i,r){let s=t[r];return s||(s=t[r]=e.measureText(r).width,n.push(r)),s>i&&(i=s),i}function a0(e,t,n,i){i=i||{};let r=i.data=i.data||{},s=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(r=i.data={},s=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let o=0;const a=n.length;let c,l,u,h,d;for(c=0;c<a;c++)if(h=n[c],h!=null&&Tt(h)!==!0)o=Bc(e,r,s,o,h);else if(Tt(h))for(l=0,u=h.length;l<u;l++)d=h[l],d!=null&&!Tt(d)&&(o=Bc(e,r,s,o,d));e.restore();const f=s.length/2;if(f>n.length){for(c=0;c<f;c++)delete r[s[c]];s.splice(0,f)}return o}function $i(e,t,n){const i=e.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((t-r)*i)/i+r}function Gu(e,t,n,i){c0(e,t,n,i,null)}function c0(e,t,n,i,r){let s,o,a,c,l,u;const h=t.pointStyle,d=t.rotation,f=t.radius;let p=(d||0)*Ty;if(h&&typeof h=="object"&&(s=h.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){e.save(),e.translate(n,i),e.rotate(p),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(f)||f<=0)){switch(e.beginPath(),h){default:r?e.ellipse(n,i,r/2,f,0,0,tt):e.arc(n,i,f,0,tt),e.closePath();break;case"triangle":e.moveTo(n+Math.sin(p)*f,i-Math.cos(p)*f),p+=Tf,e.lineTo(n+Math.sin(p)*f,i-Math.cos(p)*f),p+=Tf,e.lineTo(n+Math.sin(p)*f,i-Math.cos(p)*f),e.closePath();break;case"rectRounded":l=f*.516,c=f-l,o=Math.cos(p+to)*c,a=Math.sin(p+to)*c,e.arc(n-o,i-a,l,p-xt,p-bt),e.arc(n+a,i-o,l,p-bt,p),e.arc(n+o,i+a,l,p,p+bt),e.arc(n-a,i+o,l,p+bt,p+xt),e.closePath();break;case"rect":if(!d){c=Math.SQRT1_2*f,u=r?r/2:c,e.rect(n-u,i-c,2*u,2*c);break}p+=to;case"rectRot":o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+a,i-o),e.lineTo(n+o,i+a),e.lineTo(n-a,i+o),e.closePath();break;case"crossRot":p+=to;case"cross":o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a),e.moveTo(n+a,i-o),e.lineTo(n-a,i+o);break;case"star":o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a),e.moveTo(n+a,i-o),e.lineTo(n-a,i+o),p+=to,o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a),e.moveTo(n+a,i-o),e.lineTo(n-a,i+o);break;case"line":o=r?r/2:Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a);break;case"dash":e.moveTo(n,i),e.lineTo(n+Math.cos(p)*f,i+Math.sin(p)*f);break}e.fill(),t.borderWidth>0&&e.stroke()}}function Vu(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function l0(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function u0(e){e.restore()}function h0(e,t,n,i,r){if(!t)return e.lineTo(n.x,n.y);if(r==="middle"){const s=(t.x+n.x)/2;e.lineTo(s,t.y),e.lineTo(s,n.y)}else r==="after"!=!!i?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function f0(e,t,n,i){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function Uc(e,t,n,i,r,s={}){const o=Tt(t)?t:[t],a=s.strokeWidth>0&&s.strokeColor!=="";let c,l;for(e.save(),e.font=r.string,d0(e,s),c=0;c<o.length;++c)l=o[c],a&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),st(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(l,n,i,s.maxWidth)),e.fillText(l,n,i,s.maxWidth),p0(e,n,i,l,s),i+=r.lineHeight;e.restore()}function d0(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),st(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function p0(e,t,n,i,r){if(r.strikethrough||r.underline){const s=e.measureText(i),o=t-s.actualBoundingBoxLeft,a=t+s.actualBoundingBoxRight,c=n-s.actualBoundingBoxAscent,l=n+s.actualBoundingBoxDescent,u=r.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=r.decorationWidth||2,e.moveTo(o,u),e.lineTo(a,u),e.stroke()}}function Hc(e,t){const{x:n,y:i,w:r,h:s,radius:o}=t;e.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-bt,xt,!0),e.lineTo(n,i+s-o.bottomLeft),e.arc(n+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,xt,bt,!0),e.lineTo(n+r-o.bottomRight,i+s),e.arc(n+r-o.bottomRight,i+s-o.bottomRight,o.bottomRight,bt,0,!0),e.lineTo(n+r,i+o.topRight),e.arc(n+r-o.topRight,i+o.topRight,o.topRight,0,-bt,!0),e.lineTo(n+o.topLeft,i)}const m0=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),g0=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function y0(e,t){const n=(""+e).match(m0);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const _0=e=>+e||0;function jh(e,t){const n={},i=ot(t),r=i?Object.keys(t):t,s=ot(e)?i?o=>Ke(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of r)n[o]=_0(s(o));return n}function Vm(e){return jh(e,{top:"y",right:"x",bottom:"y",left:"x"})}function hs(e){return jh(e,["topLeft","topRight","bottomLeft","bottomRight"])}function ti(e){const t=Vm(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ln(e,t){e=e||{},t=t||at.font;let n=Ke(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let i=Ke(e.style,t.style);i&&!(""+i).match(g0)&&(console.warn('Invalid font style specified: "'+i+'"'),i="");const r={family:Ke(e.family,t.family),lineHeight:y0(Ke(e.lineHeight,t.lineHeight),n),size:n,style:i,weight:Ke(e.weight,t.weight),string:""};return r.string=o0(r),r}function Ca(e,t,n,i){let r=!0,s,o,a;for(s=0,o=e.length;s<o;++s)if(a=e[s],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),r=!1),n!==void 0&&Tt(a)&&(a=a[n%a.length],r=!1),a!==void 0))return i&&!r&&(i.cacheable=!1),a}function v0(e,t,n){const{min:i,max:r}=e,s=Tm(t,(r-i)/2),o=(a,c)=>n&&a===0?0:a+c;return{min:o(i,-Math.abs(s)),max:o(r,s)}}function Lr(e,t){return Object.assign(Object.create(e),t)}function Wm(e,t,n,i){const{iScale:r}=e,{key:s="r"}=this._parsing,o=new Array(i);let a,c,l,u;for(a=0,c=i;a<c;++a)l=a+n,u=t[l],o[a]={r:r.parse(gs(u,s),l)};return o}const b0=Number.EPSILON||1e-14,_s=(e,t)=>t<e.length&&!e[t].skip&&e[t],jm=e=>e==="x"?"y":"x";function x0(e,t,n,i){const r=e.skip?t:e,s=t,o=n.skip?t:n,a=Hu(s,r),c=Hu(o,s);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=i*l,d=i*u;return{previous:{x:s.x-h*(o.x-r.x),y:s.y-h*(o.y-r.y)},next:{x:s.x+d*(o.x-r.x),y:s.y+d*(o.y-r.y)}}}function w0(e,t,n){const i=e.length;let r,s,o,a,c,l=_s(e,0);for(let u=0;u<i-1;++u)if(c=l,l=_s(e,u+1),!(!c||!l)){if(bo(t[u],0,b0)){n[u]=n[u+1]=0;continue}r=n[u]/t[u],s=n[u+1]/t[u],a=Math.pow(r,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=r*o*t[u],n[u+1]=s*o*t[u])}}function M0(e,t,n="x"){const i=jm(n),r=e.length;let s,o,a,c=_s(e,0);for(let l=0;l<r;++l){if(o=a,a=c,c=_s(e,l+1),!a)continue;const u=a[n],h=a[i];o&&(s=(u-o[n])/3,a[`cp1${n}`]=u-s,a[`cp1${i}`]=h-s*t[l]),c&&(s=(c[n]-u)/3,a[`cp2${n}`]=u+s,a[`cp2${i}`]=h+s*t[l])}}function E0(e,t="x"){const n=jm(t),i=e.length,r=Array(i).fill(0),s=Array(i);let o,a,c,l=_s(e,0);for(o=0;o<i;++o)if(a=c,c=l,l=_s(e,o+1),!!c){if(l){const u=l[t]-c[t];r[o]=u!==0?(l[n]-c[n])/u:0}s[o]=a?l?ei(r[o-1])!==ei(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}w0(e,r,s),M0(e,s,t)}function Da(e,t,n){return Math.max(Math.min(e,n),t)}function S0(e,t){let n,i,r,s,o,a=Vu(e[0],t);for(n=0,i=e.length;n<i;++n)o=s,s=a,a=n<i-1&&Vu(e[n+1],t),s&&(r=e[n],o&&(r.cp1x=Da(r.cp1x,t.left,t.right),r.cp1y=Da(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=Da(r.cp2x,t.left,t.right),r.cp2y=Da(r.cp2y,t.top,t.bottom)))}function T0(e,t,n,i,r){let s,o,a,c;if(t.spanGaps&&(e=e.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")E0(e,r);else{let l=i?e[e.length-1]:e[0];for(s=0,o=e.length;s<o;++s)a=e[s],c=x0(l,a,e[Math.min(s+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&S0(e,n)}(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e})();function lr(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function A0(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:i==="middle"?n<.5?e.y:t.y:i==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function R0(e,t,n,i){const r={x:e.cp2x,y:e.cp2y},s={x:t.cp1x,y:t.cp1y},o=lr(e,r,n),a=lr(r,s,n),c=lr(s,t,n),l=lr(o,a,n),u=lr(a,c,n);return lr(l,u,n)}const Bf=new Map;function L0(e,t){t=t||{};const n=e+JSON.stringify(t);let i=Bf.get(n);return i||(i=new Intl.NumberFormat(e,t),Bf.set(n,i)),i}function ga(e,t,n){return L0(t,n).format(e)}const P0=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},C0=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ql(e,t,n){return e?P0(t,n):C0()}function D0(e,t){let n,i;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=i)}function I0(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Xm(e){return e==="angle"?{between:Fc,compare:Py,normalize:Nn}:{between:Nc,compare:(t,n)=>t-n,normalize:t=>t}}function Uf({start:e,end:t,count:n,loop:i,style:r}){return{start:e%n,end:t%n,loop:i&&(t-e+1)%n===0,style:r}}function O0(e,t,n){const{property:i,start:r,end:s}=n,{between:o,normalize:a}=Xm(i),c=t.length;let{start:l,end:u,loop:h}=e,d,f;if(h){for(l+=c,u+=c,d=0,f=c;d<f&&o(a(t[l%c][i]),r,s);++d)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:h,style:e.style}}function F0(e,t,n){if(!n)return[e];const{property:i,start:r,end:s}=n,o=t.length,{compare:a,between:c,normalize:l}=Xm(i),{start:u,end:h,loop:d,style:f}=O0(e,t,n),p=[];let y=!1,_=null,m,g,v;const b=()=>c(r,v,m)&&a(r,v)!==0,x=()=>a(s,m)===0||c(s,v,m),S=()=>y||b(),w=()=>!y||x();for(let O=u,R=u;O<=h;++O)g=t[O%o],!g.skip&&(m=l(g[i]),m!==v&&(y=c(m,r,s),_===null&&S()&&(_=a(m,r)===0?O:R),_!==null&&w()&&(p.push(Uf({start:_,end:O,loop:d,count:o,style:f})),_=null),R=O,v=m));return _!==null&&p.push(Uf({start:_,end:h,loop:d,count:o,style:f})),p}function N0(e,t){const n=[],i=e.segments;for(let r=0;r<i.length;r++){const s=F0(i[r],e.points,t);s.length&&n.push(...s)}return n}function k0(e,t,n,i){let r=0,s=t-1;if(n&&!i)for(;r<t&&!e[r].skip;)r++;for(;r<t&&e[r].skip;)r++;for(r%=t,n&&(s+=r);s>r&&e[s%t].skip;)s--;return s%=t,{start:r,end:s}}function B0(e,t,n,i){const r=e.length,s=[];let o=t,a=e[t],c;for(c=t+1;c<=n;++c){const l=e[c%r];l.skip||l.stop?a.skip||(i=!1,s.push({start:t%r,end:(c-1)%r,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&s.push({start:t%r,end:o%r,loop:i}),s}function U0(e,t){const n=e.points,i=e.options.spanGaps,r=n.length;if(!r)return[];const s=!!e._loop,{start:o,end:a}=k0(n,r,s,i);if(i===!0)return Hf(e,[{start:o,end:a,loop:s}],n,t);const c=a<o?a+r:a,l=!!e._fullLoop&&o===0&&a===r-1;return Hf(e,B0(n,o,c,l),n,t)}function Hf(e,t,n,i){return!i||!i.setContext||!n?t:H0(e,t,n,i)}function H0(e,t,n,i){const r=e._chart.getContext(),s=zf(e.options),{_datasetIndex:o,options:{spanGaps:a}}=e,c=n.length,l=[];let u=s,h=t[0].start,d=h;function f(p,y,_,m){const g=a?-1:1;if(p!==y){for(p+=c;n[p%c].skip;)p-=g;for(;n[y%c].skip;)y+=g;p%c!==y%c&&(l.push({start:p%c,end:y%c,loop:_,style:m}),u=m,h=y%c)}}for(const p of t){h=a?h:p.start;let y=n[h%c],_;for(d=h+1;d<=p.end;d++){const m=n[d%c];_=zf(i.setContext(Lr(r,{type:"segment",p0:y,p1:m,p0DataIndex:(d-1)%c,p1DataIndex:d%c,datasetIndex:o}))),z0(_,u)&&f(h,d-1,p.loop,u),y=m,u=_}h<d-1&&f(h,d-1,p.loop,u)}return l}function zf(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function z0(e,t){return t&&JSON.stringify(e)!==JSON.stringify(t)}/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */class G0{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,i,r){const s=n.listeners[r],o=n.duration;s.forEach(a=>a({chart:t,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Oy.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let o=s.length-1,a=!1,c;for(;o>=0;--o)c=s[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(s[o]=s[s.length-1],s.pop());a&&(r.draw(),this._notify(r,i,t,"progress")),s.length||(i.running=!1,this._notify(r,i,t,"complete"),i.initial=!1),n+=s.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let i=n.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,i)),i}listen(t,n,i){this._getAnims(t).listeners[n].push(i)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var V0=new G0;const Gf="transparent",W0={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const i=kf(e||Gf),r=i.valid&&kf(t||Gf);return r&&r.valid?r.mix(i,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class j0{constructor(t,n,i,r){const s=n[i];r=Ca([t.to,r,s,t.from]);const o=Ca([t.from,s,r]);this._active=!0,this._fn=t.fn||W0[t.type||typeof o],this._easing=xo[t.easing]||xo.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=i,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],s=i-this._start,o=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=Ca([t.to,n,r,t.from]),this._from=Ca([t.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,i=this._duration,r=this._prop,s=this._from,o=this._loop,a=this._to;let c;if(this._active=s!==a&&(o||n<i),!this._active){this._target[r]=a,this._notify(!0);return}if(n<0){this._target[r]=s;return}c=n/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[r]=this._fn(s,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,i)=>{t.push({res:n,rej:i})})}_notify(t){const n=t?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}const X0=["x","y","borderWidth","radius","tension"],Y0=["color","borderColor","backgroundColor"];at.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const q0=Object.keys(at.animation);at.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"});at.set("animations",{colors:{type:"color",properties:Y0},numbers:{type:"number",properties:X0}});at.describe("animations",{_fallback:"animation"});at.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}});class Ym{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!ot(t))return;const n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!ot(r))return;const s={};for(const o of q0)s[o]=r[o];(Tt(r.properties)&&r.properties||[i]).forEach(o=>{(o===i||!n.has(o))&&n.set(o,s)})})}_animateOptions(t,n){const i=n.options,r=J0(t,i);if(!r)return[];const s=this._createAnimations(r,i);return i.$shared&&Z0(t.options.$animations,i).then(()=>{t.options=i},()=>{}),s}_createAnimations(t,n){const i=this._properties,r=[],s=t.$animations||(t.$animations={}),o=Object.keys(n),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){r.push(...this._animateOptions(t,n));continue}const u=n[l];let h=s[l];const d=i.get(l);if(h)if(d&&h.active()){h.update(d,u,a);continue}else h.cancel();if(!d||!d.duration){t[l]=u;continue}s[l]=h=new j0(d,t,l,u),r.push(h)}return r}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const i=this._createAnimations(t,n);if(i.length)return V0.add(this._chart,i),!0}}function Z0(e,t){const n=[],i=Object.keys(t);for(let r=0;r<i.length;r++){const s=e[i[r]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function J0(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Vf(e,t){const n=e&&e.options||{},i=n.reverse,r=n.min===void 0?t:0,s=n.max===void 0?t:0;return{start:i?s:r,end:i?r:s}}function K0(e,t,n){if(n===!1)return!1;const i=Vf(e,n),r=Vf(t,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function Q0(e){let t,n,i,r;return ot(e)?(t=e.top,n=e.right,i=e.bottom,r=e.left):t=n=i=r=e,{top:t,right:n,bottom:i,left:r,disabled:e===!1}}function qm(e,t){const n=[],i=e._getSortedDatasetMetas(t);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function Wf(e,t,n,i={}){const r=e.keys,s=i.mode==="single";let o,a,c,l;if(t!==null){for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===n){if(i.all)continue;break}l=e.values[c],Ut(l)&&(s||t===0||ei(t)===ei(l))&&(t+=l)}return t}}function $0(e){const t=Object.keys(e),n=new Array(t.length);let i,r,s;for(i=0,r=t.length;i<r;++i)s=t[i],n[i]={x:s,y:e[s]};return n}function jf(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function e_(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function t_(e){const{min:t,max:n,minDefined:i,maxDefined:r}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function n_(e,t,n){const i=e[t]||(e[t]={});return i[n]||(i[n]={})}function Xf(e,t,n,i){for(const r of t.getMatchingVisibleMetas(i).reverse()){const s=e[r.index];if(n&&s>0||!n&&s<0)return r.index}return null}function Yf(e,t){const{chart:n,_cachedMeta:i}=e,r=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=i,c=s.axis,l=o.axis,u=e_(s,o,i),h=t.length;let d;for(let f=0;f<h;++f){const p=t[f],{[c]:y,[l]:_}=p,m=p._stacks||(p._stacks={});d=m[l]=n_(r,u,y),d[a]=_,d._top=Xf(d,o,!0,i.type),d._bottom=Xf(d,o,!1,i.type)}}function $l(e,t){const n=e.scales;return Object.keys(n).filter(i=>n[i].axis===t).shift()}function i_(e,t){return Lr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function r_(e,t,n){return Lr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function no(e,t){const n=e.controller.index,i=e.vScale&&e.vScale.axis;if(!!i){t=t||e._parsed;for(const r of t){const s=r._stacks;if(!s||s[i]===void 0||s[i][n]===void 0)return;delete s[i][n]}}}const eu=e=>e==="reset"||e==="none",qf=(e,t)=>t?e:Object.assign({},e),s_=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:qm(n,!0),values:null};class Un{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=jf(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&no(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(h,d,f,p)=>h==="x"?d:h==="r"?p:f,s=n.xAxisID=Ke(i.xAxisID,$l(t,"x")),o=n.yAxisID=Ke(i.yAxisID,$l(t,"y")),a=n.rAxisID=Ke(i.rAxisID,$l(t,"r")),c=n.indexAxis,l=n.iAxisID=r(c,s,o,a),u=n.vAxisID=r(c,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(l),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Lf(this._data,this),t._stacked&&no(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),i=this._data;if(ot(n))this._data=$0(n);else if(i!==n){if(i){Lf(i,this);const r=this._cachedMeta;no(r),r._parsed=[]}n&&Object.isExtensible(n)&&Iy(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const s=n._stacked;n._stacked=jf(n.vScale,n),n.stack!==i.stack&&(r=!0,no(n),n.stack=i.stack),this._resyncElements(t),(r||s!==n._stacked)&&Yf(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:i,_data:r}=this,{iScale:s,_stacked:o}=i,a=s.axis;let c=t===0&&n===r.length?!0:i._sorted,l=t>0&&i._parsed[t-1],u,h,d;if(this._parsing===!1)i._parsed=r,i._sorted=!0,d=r;else{Tt(r[t])?d=this.parseArrayData(i,r,t,n):ot(r[t])?d=this.parseObjectData(i,r,t,n):d=this.parsePrimitiveData(i,r,t,n);const f=()=>h[a]===null||l&&h[a]<l[a];for(u=0;u<n;++u)i._parsed[u+t]=h=d[u],c&&(f()&&(c=!1),l=h);i._sorted=c}o&&Yf(this,d)}parsePrimitiveData(t,n,i,r){const{iScale:s,vScale:o}=t,a=s.axis,c=o.axis,l=s.getLabels(),u=s===o,h=new Array(r);let d,f,p;for(d=0,f=r;d<f;++d)p=d+i,h[d]={[a]:u||s.parse(l[p],p),[c]:o.parse(n[p],p)};return h}parseArrayData(t,n,i,r){const{xScale:s,yScale:o}=t,a=new Array(r);let c,l,u,h;for(c=0,l=r;c<l;++c)u=c+i,h=n[u],a[c]={x:s.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(t,n,i,r){const{xScale:s,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(r);let u,h,d,f;for(u=0,h=r;u<h;++u)d=u+i,f=n[d],l[u]={x:s.parse(gs(f,a),d),y:o.parse(gs(f,c),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,i){const r=this.chart,s=this._cachedMeta,o=n[t.axis],a={keys:qm(r,!0),values:n._stacks[t.axis]};return Wf(a,o,s.index,{mode:i})}updateRangeFromParsed(t,n,i,r){const s=i[n.axis];let o=s===null?NaN:s;const a=r&&i._stacks[n.axis];r&&a&&(r.values=a,o=Wf(r,s,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,n){const i=this._cachedMeta,r=i._parsed,s=i._sorted&&t===i.iScale,o=r.length,a=this._getOtherScale(t),c=s_(n,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=t_(a);let d,f;function p(){f=r[d];const y=f[a.axis];return!Ut(f[t.axis])||u>y||h<y}for(d=0;d<o&&!(!p()&&(this.updateRangeFromParsed(l,t,f,c),s));++d);if(s){for(d=o-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(l,t,f,c);break}}return l}getAllParsedValues(t){const n=this._cachedMeta._parsed,i=[];let r,s,o;for(r=0,s=n.length;r<s;++r)o=n[r][t.axis],Ut(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,i=n.iScale,r=n.vScale,s=this.getParsed(t);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=Q0(Ke(this.options.clip,K0(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],s=n.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(t,s,a,c),u=a;u<a+c;++u){const h=r[u];h.hidden||(h.active&&l?o.push(h):h.draw(t,s))}for(u=0;u<o.length;++u)o[u].draw(t,s)}getStyle(t,n){const i=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,n,i){const r=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];s=o.$context||(o.$context=r_(this.getContext(),t,o)),s.parsed=this.getParsed(t),s.raw=r.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=i_(this.chart.getContext(),this.index)),s.dataset=r,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=i,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",i){const r=n==="active",s=this._cachedDataOpts,o=t+"-"+n,a=s[o],c=this.enableOptionSharing&&Pm(i);if(a)return qf(a,c);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,t),h=r?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),u),f=Object.keys(at.elements[t]),p=()=>this.getContext(i,r),y=l.resolveNamedOptions(d,f,p,h);return y.$shared&&(y.$shared=c,s[o]=Object.freeze(qf(y,c))),y}_resolveAnimations(t,n,i){const r=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let c;if(r.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),d=u.getOptionScopes(this.getDataset(),h);c=u.createResolver(d,this.getContext(t,i,n))}const l=new Ym(r,c&&c.animations);return c&&c._cacheable&&(s[o]=Object.freeze(l)),l}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||eu(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const i=this.resolveDataElementOptions(t,n),r=this._sharedOptions,s=this.getSharedOptions(i),o=this.includeOptions(n,s)||s!==r;return this.updateSharedOptions(s,n,i),{sharedOptions:s,includeOptions:o}}updateElement(t,n,i,r){eu(r)?Object.assign(t,i):this._resolveAnimations(n,r).update(t,i)}updateSharedOptions(t,n,i){t&&!eu(n)&&this._resolveAnimations(void 0,n).update(t,i)}_setStyle(t,n,i,r){t.active=r;const s=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(t,{options:!r&&this.getSharedOptions(s)||s})}removeHoverStyle(t,n,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,n,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const r=i.length,s=n.length,o=Math.min(s,r);o&&this.parse(0,o),s>r?this._insertElements(r,s-r,t):s<r&&this._removeElements(s,r-s)}_insertElements(t,n,i=!0){const r=this._cachedMeta,s=r.data,o=t+n;let a;const c=l=>{for(l.length+=n,a=l.length-1;a>=o;a--)l[a]=l[a-n]};for(c(s),a=t;a<o;++a)s[a]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(t,n),i&&this.updateElements(s,t,n,"reset")}updateElements(t,n,i,r){}_removeElements(t,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(t,n);i._stacked&&no(i,r)}i.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,i,r]=t;this[n](i,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Un.defaults={};Un.prototype.datasetElementType=null;Un.prototype.dataElementType=null;function o_(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let i=[];for(let r=0,s=n.length;r<s;r++)i=i.concat(n[r].controller.getAllParsedValues(e));e._cache.$bar=Om(i.sort((r,s)=>r-s))}return e._cache.$bar}function a_(e){const t=e.iScale,n=o_(t,e.type);let i=t._length,r,s,o,a;const c=()=>{o===32767||o===-32768||(Pm(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(r=0,s=n.length;r<s;++r)o=t.getPixelForValue(n[r]),c();for(a=void 0,r=0,s=t.ticks.length;r<s;++r)o=t.getPixelForTick(r),c();return i}function c_(e,t,n,i){const r=n.barThickness;let s,o;return st(r)?(s=t.min*n.categoryPercentage,o=n.barPercentage):(s=r*i,o=1),{chunk:s/i,ratio:o,start:t.pixels[e]-s/2}}function l_(e,t,n,i){const r=t.pixels,s=r[e];let o=e>0?r[e-1]:null,a=e<r.length-1?r[e+1]:null;const c=n.categoryPercentage;o===null&&(o=s-(a===null?t.end-t.start:a-s)),a===null&&(a=s+s-o);const l=s-(s-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:n.barPercentage,start:l}}function u_(e,t,n,i){const r=n.parse(e[0],i),s=n.parse(e[1],i),o=Math.min(r,s),a=Math.max(r,s);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:r,end:s,min:o,max:a}}function Zm(e,t,n,i){return Tt(e)?u_(e,t,n,i):t[n.axis]=n.parse(e,i),t}function Zf(e,t,n,i){const r=e.iScale,s=e.vScale,o=r.getLabels(),a=r===s,c=[];let l,u,h,d;for(l=n,u=n+i;l<u;++l)d=t[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(Zm(d,h,s,l));return c}function tu(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function h_(e,t,n){return e!==0?ei(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function f_(e){let t,n,i,r,s;return e.horizontal?(t=e.base>e.x,n="left",i="right"):(t=e.base<e.y,n="bottom",i="top"),t?(r="end",s="start"):(r="start",s="end"),{start:n,end:i,reverse:t,top:r,bottom:s}}function d_(e,t,n,i){let r=t.borderSkipped;const s={};if(!r){e.borderSkipped=s;return}if(r===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:u}=f_(e);r==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===i?r=l:(n._bottom||0)===i?r=u:(s[Jf(u,o,a,c)]=!0,r=l)),s[Jf(r,o,a,c)]=!0,e.borderSkipped=s}function Jf(e,t,n,i){return i?(e=p_(e,t,n),e=Kf(e,n,t)):e=Kf(e,t,n),e}function p_(e,t,n){return e===t?n:e===n?t:e}function Kf(e,t,n){return e==="start"?t:e==="end"?n:e}function m_(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Xh extends Un{parsePrimitiveData(t,n,i,r){return Zf(t,n,i,r)}parseArrayData(t,n,i,r){return Zf(t,n,i,r)}parseObjectData(t,n,i,r){const{iScale:s,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=s.axis==="x"?a:c,u=o.axis==="x"?a:c,h=[];let d,f,p,y;for(d=i,f=i+r;d<f;++d)y=n[d],p={},p[s.axis]=s.parse(gs(y,l),d),h.push(Zm(gs(y,u),p,o,d));return h}updateRangeFromParsed(t,n,i,r){super.updateRangeFromParsed(t,n,i,r);const s=i._custom;s&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,s.min),t.max=Math.max(t.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:i,vScale:r}=n,s=this.getParsed(t),o=s._custom,a=tu(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(s[r.axis]);return{label:""+i.getLabelForValue(s[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,i,r){const s=r==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),u=this._getRuler(),{sharedOptions:h,includeOptions:d}=this._getSharedOptions(n,r);for(let f=n;f<n+i;f++){const p=this.getParsed(f),y=s||st(p[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(f),_=this._calculateBarIndexPixels(f,u),m=(p._stacks||{})[a.axis],g={horizontal:l,base:y.base,enableBorderRadius:!m||tu(p._custom)||o===m._top||o===m._bottom,x:l?y.head:_.center,y:l?_.center:y.head,height:l?_.size:Math.abs(y.size),width:l?Math.abs(y.size):_.size};d&&(g.options=h||this.resolveDataElementOptions(f,t[f].active?"active":r));const v=g.options||t[f].options;d_(g,v,m,o),m_(g,v,u.ratio),this.updateElement(t[f],f,g,r)}}_getStacks(t,n){const{iScale:i}=this._cachedMeta,r=i.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),s=i.options.stacked,o=[],a=c=>{const l=c.controller.getParsed(n),u=l&&l[c.vScale.axis];if(st(u)||isNaN(u))return!0};for(const c of r)if(!(n!==void 0&&a(c))&&((s===!1||o.indexOf(c.stack)===-1||s===void 0&&c.stack===void 0)&&o.push(c.stack),c.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,i){const r=this._getStacks(t,i),s=n!==void 0?r.indexOf(n):-1;return s===-1?r.length-1:s}_getRuler(){const t=this.options,n=this._cachedMeta,i=n.iScale,r=[];let s,o;for(s=0,o=n.data.length;s<o;++s)r.push(i.getPixelForValue(this.getParsed(s)[i.axis],s));const a=t.barThickness;return{min:a||a_(n),pixels:r,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:i},options:{base:r,minBarLength:s}}=this,o=r||0,a=this.getParsed(t),c=a._custom,l=tu(c);let u=a[n.axis],h=0,d=i?this.applyStack(n,a,i):u,f,p;d!==u&&(h=d-u,d=u),l&&(u=c.barStart,d=c.barEnd-c.barStart,u!==0&&ei(u)!==ei(c.barEnd)&&(h=0),h+=u);const y=!st(r)&&!l?r:h;let _=n.getPixelForValue(y);if(this.chart.getDataVisibility(t)?f=n.getPixelForValue(h+d):f=_,p=f-_,Math.abs(p)<s){p=h_(p,n,o)*s,u===o&&(_-=p/2);const m=n.getPixelForDecimal(0),g=n.getPixelForDecimal(1),v=Math.min(m,g),b=Math.max(m,g);_=Math.max(Math.min(_,b),v),f=_+p}if(_===n.getPixelForValue(o)){const m=ei(p)*n.getLineWidthForValue(o)/2;_+=m,p-=m}return{size:p,base:_,head:f,center:f+p/2}}_calculateBarIndexPixels(t,n){const i=n.scale,r=this.options,s=r.skipNull,o=Ke(r.maxBarThickness,1/0);let a,c;if(n.grouped){const l=s?this._getStackCount(t):n.stackCount,u=r.barThickness==="flex"?l_(t,n,r,l):c_(t,n,r,l),h=this._getStackIndex(this.index,this._cachedMeta.stack,s?t:void 0);a=u.start+u.chunk*h+u.chunk/2,c=Math.min(o,u.chunk*u.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,n.min*n.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,n=t.vScale,i=t.data,r=i.length;let s=0;for(;s<r;++s)this.getParsed(s)[n.axis]!==null&&i[s].draw(this._ctx)}}Xh.id="bar";Xh.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};Xh.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Yh extends Un{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,i,r){const s=super.parsePrimitiveData(t,n,i,r);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+i).radius;return s}parseArrayData(t,n,i,r){const s=super.parseArrayData(t,n,i,r);for(let o=0;o<s.length;o++){const a=n[i+o];s[o]._custom=Ke(a[2],this.resolveDataElementOptions(o+i).radius)}return s}parseObjectData(t,n,i,r){const s=super.parseObjectData(t,n,i,r);for(let o=0;o<s.length;o++){const a=n[i+o];s[o]._custom=Ke(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return s}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let i=t.length-1;i>=0;--i)n=Math.max(n,t[i].size(this.resolveDataElementOptions(i))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,{xScale:i,yScale:r}=n,s=this.getParsed(t),o=i.getLabelForValue(s.x),a=r.getLabelForValue(s.y),c=s._custom;return{label:n.label,value:"("+o+", "+a+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,i,r){const s=r==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(n,r),u=o.axis,h=a.axis;for(let d=n;d<n+i;d++){const f=t[d],p=!s&&this.getParsed(d),y={},_=y[u]=s?o.getPixelForDecimal(.5):o.getPixelForValue(p[u]),m=y[h]=s?a.getBasePixel():a.getPixelForValue(p[h]);y.skip=isNaN(_)||isNaN(m),l&&(y.options=c||this.resolveDataElementOptions(d,f.active?"active":r),s&&(y.options.radius=0)),this.updateElement(f,d,y,r)}}resolveDataElementOptions(t,n){const i=this.getParsed(t);let r=super.resolveDataElementOptions(t,n);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const s=r.radius;return n!=="active"&&(r.radius=0),r.radius+=Ke(i&&i._custom,s),r}}Yh.id="bubble";Yh.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};Yh.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function g_(e,t,n){let i=1,r=1,s=0,o=0;if(t<tt){const a=e,c=a+t,l=Math.cos(a),u=Math.sin(a),h=Math.cos(c),d=Math.sin(c),f=(v,b,x)=>Fc(v,a,c,!0)?1:Math.max(b,b*n,x,x*n),p=(v,b,x)=>Fc(v,a,c,!0)?-1:Math.min(b,b*n,x,x*n),y=f(0,l,h),_=f(bt,u,d),m=p(xt,l,h),g=p(xt+bt,u,d);i=(y-m)/2,r=(_-g)/2,s=-(y+m)/2,o=-(_+g)/2}return{ratioX:i,ratioY:r,offsetX:s,offsetY:o}}class ya extends Un{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const i=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=i;else{let s=c=>+i[c];if(ot(i[t])){const{key:c="value"}=this._parsing;s=l=>+gs(i[l],c)}let o,a;for(o=t,a=t+n;o<a;++o)r._parsed[o]=s(o)}}_getRotation(){return kn(this.options.rotation-90)}_getCircumference(){return kn(this.options.circumference)}_getRotationExtents(){let t=tt,n=-tt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const r=this.chart.getDatasetMeta(i).controller,s=r._getRotation(),o=r._getCircumference();t=Math.min(t,s),n=Math.max(n,s+o)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:i}=n,r=this._cachedMeta,s=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(by(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:u,rotation:h}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:p,offsetY:y}=g_(h,u,c),_=(i.width-o)/d,m=(i.height-o)/f,g=Math.max(Math.min(_,m)/2,0),v=Tm(this.options.radius,g),b=Math.max(v*c,0),x=(v-b)/this._getVisibleDatasetWeightTotal();this.offsetX=p*v,this.offsetY=y*v,r.total=this.calculateTotal(),this.outerRadius=v-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*l,0),this.updateElements(s,0,s.length,t)}_circumference(t,n){const i=this.options,r=this._cachedMeta,s=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*s/tt)}updateElements(t,n,i,r){const s=r==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,u=(a.left+a.right)/2,h=(a.top+a.bottom)/2,d=s&&l.animateScale,f=d?0:this.innerRadius,p=d?0:this.outerRadius,{sharedOptions:y,includeOptions:_}=this._getSharedOptions(n,r);let m=this._getRotation(),g;for(g=0;g<n;++g)m+=this._circumference(g,s);for(g=n;g<n+i;++g){const v=this._circumference(g,s),b=t[g],x={x:u+this.offsetX,y:h+this.offsetY,startAngle:m,endAngle:m+v,circumference:v,outerRadius:p,innerRadius:f};_&&(x.options=y||this.resolveDataElementOptions(g,b.active?"active":r)),m+=v,this.updateElement(b,g,x,r)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let i=0,r;for(r=0;r<n.length;r++){const s=t._parsed[r];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(r)&&!n[r].hidden&&(i+=Math.abs(s))}return i}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?tt*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],s=ga(n._parsed[t],i.options.locale);return{label:r[t]||"",value:s}}getMaxBorderWidth(t){let n=0;const i=this.chart;let r,s,o,a,c;if(!t){for(r=0,s=i.data.datasets.length;r<s;++r)if(i.isDatasetVisible(r)){o=i.getDatasetMeta(r),t=o.data,a=o.controller;break}}if(!t)return 0;for(r=0,s=t.length;r<s;++r)c=a.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(n=Math.max(n,c.borderWidth||0,c.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let i=0,r=t.length;i<r;++i){const s=this.resolveDataElementOptions(i);n=Math.max(n,s.offset||0,s.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(t){return Math.max(Ke(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}ya.id="doughnut";ya.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};ya.descriptors={_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"};ya.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n}}=e.legend.options;return t.labels.map((i,r)=>{const o=e.getDatasetMeta(0).controller.getStyle(r);return{text:i,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(r),index:r}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(e){let t=e.label;const n=": "+e.formattedValue;return Tt(t)?(t=t.slice(),t[0]+=n):t+=n,t}}}}};class qh extends Un{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:a,count:c}=Fm(n,r,o);this._drawStart=a,this._drawCount=c,Nm(n)&&(a=0,c=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(r,a,c,t)}updateElements(t,n,i,r){const s=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,r),d=o.axis,f=a.axis,{spanGaps:p,segment:y}=this.options,_=ys(p)?p:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||r==="none";let g=n>0&&this.getParsed(n-1);for(let v=n;v<n+i;++v){const b=t[v],x=this.getParsed(v),S=m?b:{},w=st(x[f]),O=S[d]=o.getPixelForValue(x[d],v),R=S[f]=s||w?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,x,c):x[f],v);S.skip=isNaN(O)||isNaN(R)||w,S.stop=v>0&&Math.abs(x[d]-g[d])>_,y&&(S.parsed=x,S.raw=l.data[v]),h&&(S.options=u||this.resolveDataElementOptions(v,b.active?"active":r)),m||this.updateElement(b,v,S,r),g=x}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,i=n.options&&n.options.borderWidth||0,r=t.data||[];if(!r.length)return i;const s=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,s,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}qh.id="line";qh.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};qh.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Zh extends Un{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],s=ga(n._parsed[t].r,i.options.locale);return{label:r[t]||"",value:s}}parseObjectData(t,n,i,r){return Wm.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,r)=>{const s=this.getParsed(r).r;!isNaN(s)&&this.chart.getDataVisibility(r)&&(s<n.min&&(n.min=s),s>n.max&&(n.max=s))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,i=t.options,r=Math.min(n.right-n.left,n.bottom-n.top),s=Math.max(r/2,0),o=Math.max(i.cutoutPercentage?s/100*i.cutoutPercentage:1,0),a=(s-o)/t.getVisibleDatasetCount();this.outerRadius=s-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,n,i,r){const s=r==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,u=l.xCenter,h=l.yCenter,d=l.getIndexAngle(0)-.5*xt;let f=d,p;const y=360/this.countVisibleElements();for(p=0;p<n;++p)f+=this._computeAngle(p,r,y);for(p=n;p<n+i;p++){const _=t[p];let m=f,g=f+this._computeAngle(p,r,y),v=o.getDataVisibility(p)?l.getDistanceFromCenterForValue(this.getParsed(p).r):0;f=g,s&&(c.animateScale&&(v=0),c.animateRotate&&(m=g=d));const b={x:u,y:h,innerRadius:0,outerRadius:v,startAngle:m,endAngle:g,options:this.resolveDataElementOptions(p,_.active?"active":r)};this.updateElement(_,p,b,r)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((i,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&n++}),n}_computeAngle(t,n,i){return this.chart.getDataVisibility(t)?kn(this.resolveDataElementOptions(t,n).angle||i):0}}Zh.id="polarArea";Zh.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};Zh.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n}}=e.legend.options;return t.labels.map((i,r)=>{const o=e.getDatasetMeta(0).controller.getStyle(r);return{text:i,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(r),index:r}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(e){return e.chart.data.labels[e.dataIndex]+": "+e.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Jm extends ya{}Jm.id="pie";Jm.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Jh extends Un{getLabelAndValue(t){const n=this._cachedMeta.vScale,i=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(t,n,i,r){return Wm.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta,i=n.dataset,r=n.data||[],s=n.iScale.getLabels();if(i.points=r,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===r.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,n,i,r){const s=this._cachedMeta.rScale,o=r==="reset";for(let a=n;a<n+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":r),u=s.getPointPositionForValue(a,this.getParsed(a).r),h=o?s.xCenter:u.x,d=o?s.yCenter:u.y,f={x:h,y:d,angle:u.angle,skip:isNaN(h)||isNaN(d),options:l};this.updateElement(c,a,f,r)}}}Jh.id="radar";Jh.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};Jh.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class wi{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}hasValue(){return ys(this.x)&&ys(this.y)}getProps(t,n){const i=this.$animations;if(!n||!i)return this;const r={};return t.forEach(s=>{r[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),r}}wi.defaults={};wi.defaultRoutes=void 0;const Km={values(e){return Tt(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const i=this.chart.options.locale;let r,s=e;if(n.length>1){const l=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(l<1e-4||l>1e15)&&(r="scientific"),s=y_(e,n)}const o=Mn(Math.abs(s)),a=Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),ga(e,i,c)},logarithmic(e,t,n){if(e===0)return"0";const i=e/Math.pow(10,Math.floor(Mn(e)));return i===1||i===2||i===5?Km.numeric.call(this,e,t,n):""}};function y_(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Ol={formatters:Km};at.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ol.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});at.route("scale.ticks","color","","color");at.route("scale.grid","color","","borderColor");at.route("scale.grid","borderColor","","borderColor");at.route("scale.title","color","","color");at.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"});at.describe("scales",{_fallback:"scale"});at.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"});function __(e,t){const n=e.options.ticks,i=n.maxTicksLimit||v_(e),r=n.major.enabled?x_(t):[],s=r.length,o=r[0],a=r[s-1],c=[];if(s>i)return w_(t,c,r,s/i),c;const l=b_(r,t,i);if(s>0){let u,h;const d=s>1?Math.round((a-o)/(s-1)):null;for(Ia(t,c,l,st(d)?0:o-d,o),u=0,h=s-1;u<h;u++)Ia(t,c,l,r[u],r[u+1]);return Ia(t,c,l,a,st(d)?t.length:a+d),c}return Ia(t,c,l),c}function v_(e){const t=e.options.offset,n=e._tickSize(),i=e._length/n+(t?0:1),r=e._maxLength/n;return Math.floor(Math.min(i,r))}function b_(e,t,n){const i=M_(e),r=t.length/n;if(!i)return Math.max(r,1);const s=Ay(i);for(let o=0,a=s.length-1;o<a;o++){const c=s[o];if(c>r)return c}return Math.max(r,1)}function x_(e){const t=[];let n,i;for(n=0,i=e.length;n<i;n++)e[n].major&&t.push(n);return t}function w_(e,t,n,i){let r=0,s=n[0],o;for(i=Math.ceil(i),o=0;o<e.length;o++)o===s&&(t.push(e[o]),r++,s=n[r*i])}function Ia(e,t,n,i,r){const s=Ke(i,0),o=Math.min(Ke(r,e.length),e.length);let a=0,c,l,u;for(n=Math.ceil(n),r&&(c=r-i,n=c/Math.floor(c/n)),u=s;u<0;)a++,u=Math.round(s+a*n);for(l=Math.max(s,0);l<o;l++)l===u&&(t.push(e[l]),a++,u=Math.round(s+a*n))}function M_(e){const t=e.length;let n,i;if(t<2)return!1;for(i=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==i)return!1;return i}const E_=e=>e==="left"?"right":e==="right"?"left":e,Qf=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n;function $f(e,t){const n=[],i=e.length/t,r=e.length;let s=0;for(;s<r;s+=i)n.push(e[Math.floor(s)]);return n}function S_(e,t,n){const i=e.ticks.length,r=Math.min(t,i-1),s=e._startPixel,o=e._endPixel,a=1e-6;let c=e.getPixelForTick(r),l;if(!(n&&(i===1?l=Math.max(c-s,o-c):t===0?l=(e.getPixelForTick(1)-c)/2:l=(c-e.getPixelForTick(r-1))/2,c+=r<t?l:-l,c<s-a||c>o+a)))return c}function T_(e,t){Jt(e,n=>{const i=n.gc,r=i.length/2;let s;if(r>t){for(s=0;s<r;++s)delete n.data[i[s]];i.splice(0,r)}})}function io(e){return e.drawTicks?e.tickLength:0}function ed(e,t){if(!e.display)return 0;const n=ln(e.font,t),i=ti(e.padding);return(Tt(e.text)?e.text.length:1)*n.lineHeight+i.height}function A_(e,t){return Lr(e,{scale:t,type:"scale"})}function R_(e,t,n){return Lr(e,{tick:n,index:t,type:"tick"})}function L_(e,t,n){let i=Fy(e);return(n&&t!=="right"||!n&&t==="right")&&(i=E_(i)),i}function P_(e,t,n,i){const{top:r,left:s,bottom:o,right:a,chart:c}=e,{chartArea:l,scales:u}=c;let h=0,d,f,p;const y=o-r,_=a-s;if(e.isHorizontal()){if(f=Pf(i,s,a),ot(n)){const m=Object.keys(n)[0],g=n[m];p=u[m].getPixelForValue(g)+y-t}else n==="center"?p=(l.bottom+l.top)/2+y-t:p=Qf(e,n,t);d=a-s}else{if(ot(n)){const m=Object.keys(n)[0],g=n[m];f=u[m].getPixelForValue(g)-_+t}else n==="center"?f=(l.left+l.right)/2-_+t:f=Qf(e,n,t);p=Pf(i,o,r),h=n==="left"?-bt:bt}return{titleX:f,titleY:p,maxWidth:d,rotation:h}}class Pr extends wi{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return t=bn(t,Number.POSITIVE_INFINITY),n=bn(n,Number.NEGATIVE_INFINITY),i=bn(i,Number.POSITIVE_INFINITY),r=bn(r,Number.NEGATIVE_INFINITY),{min:bn(t,i),max:bn(n,r),minDefined:Ut(t),maxDefined:Ut(n)}}getMinMax(t){let{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds(),o;if(r&&s)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),r||(n=Math.min(n,o.min)),s||(i=Math.max(i,o.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:bn(n,bn(i,n)),max:bn(i,bn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Vt(this.options.beforeUpdate,[this])}update(t,n,i){const{beginAtZero:r,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=v0(this,s,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?$f(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=__(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,t=!t),this._startPixel=n,this._endPixel=i,this._reversePixels=t,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Vt(this.options.afterUpdate,[this])}beforeSetDimensions(){Vt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Vt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Vt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Vt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i],s.label=Vt(n.callback,[s.value,i,t],this)}afterTickToLabelConversion(){Vt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Vt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,i=this.ticks.length,r=n.minRotation||0,s=n.maxRotation;let o=r,a,c,l;if(!this._isVisible()||!n.display||r>=s||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const u=this._getLabelSizes(),h=u.widest.width,d=u.highest.height,f=jt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),h+6>a&&(a=f/(i-(t.offset?.5:1)),c=this.maxHeight-io(t.grid)-n.padding-ed(t.title,this.chart.options.font),l=Math.sqrt(h*h+d*d),o=zh(Math.min(Math.asin(jt((u.highest.height+6)/a,-1,1)),Math.asin(jt(c/l,-1,1))-Math.asin(jt(d/l,-1,1)))),o=Math.max(r,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){Vt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Vt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=ed(r,n.options.font);if(a?(t.width=this.maxWidth,t.height=io(s)+c):(t.height=this.maxHeight,t.width=io(s)+c),i.display&&this.ticks.length){const{first:l,last:u,widest:h,highest:d}=this._getLabelSizes(),f=i.padding*2,p=kn(this.labelRotation),y=Math.cos(p),_=Math.sin(p);if(a){const m=i.mirror?0:_*h.width+y*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{const m=i.mirror?0:y*h.width+_*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(l,u,_,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,i,r){const{ticks:{align:s,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;c?l?(d=r*t.width,f=i*n.height):(d=i*t.height,f=r*n.width):s==="start"?f=n.width:s==="end"?d=t.width:s!=="inner"&&(d=t.width/2,f=n.width/2),this.paddingLeft=Math.max((d-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=t.height/2;s==="start"?(u=0,h=t.height):s==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Vt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,i;for(n=0,i=t.length;n<i;n++)st(t[n].label)&&(t.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=$f(i,n)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,n){const{ctx:i,_longestTextCache:r}=this,s=[],o=[];let a=0,c=0,l,u,h,d,f,p,y,_,m,g,v;for(l=0;l<n;++l){if(d=t[l].label,f=this._resolveTickFontOptions(l),i.font=p=f.string,y=r[p]=r[p]||{data:{},gc:[]},_=f.lineHeight,m=g=0,!st(d)&&!Tt(d))m=Bc(i,y.data,y.gc,m,d),g=_;else if(Tt(d))for(u=0,h=d.length;u<h;++u)v=d[u],!st(v)&&!Tt(v)&&(m=Bc(i,y.data,y.gc,m,v),g+=_);s.push(m),o.push(g),a=Math.max(m,a),c=Math.max(g,c)}T_(r,n);const b=s.indexOf(a),x=o.indexOf(c),S=w=>({width:s[w]||0,height:o[w]||0});return{first:S(0),last:S(n-1),widest:S(b),highest:S(x),widths:s,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return Cy(this._alignToPixels?$i(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const i=n[t];return i.$context||(i.$context=R_(this.getContext(),t,i))}return this.$context||(this.$context=A_(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=kn(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=t.autoSkipPadding||0,a=s?s.widest.width+o:0,c=s?s.highest.height+o:0;return this.isHorizontal()?c*i>a*r?a/i:c/r:c*r<a*i?c/i:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,i=this.chart,r=this.options,{grid:s,position:o}=r,a=s.offset,c=this.isHorizontal(),u=this.ticks.length+(a?1:0),h=io(s),d=[],f=s.setContext(this.getContext()),p=f.drawBorder?f.borderWidth:0,y=p/2,_=function(F){return $i(i,F,p)};let m,g,v,b,x,S,w,O,R,q,H,j;if(o==="top")m=_(this.bottom),S=this.bottom-h,O=m-y,q=_(t.top)+y,j=t.bottom;else if(o==="bottom")m=_(this.top),q=t.top,j=_(t.bottom)-y,S=m+y,O=this.top+h;else if(o==="left")m=_(this.right),x=this.right-h,w=m-y,R=_(t.left)+y,H=t.right;else if(o==="right")m=_(this.left),R=t.left,H=_(t.right)-y,x=m+y,w=this.left+h;else if(n==="x"){if(o==="center")m=_((t.top+t.bottom)/2+.5);else if(ot(o)){const F=Object.keys(o)[0],B=o[F];m=_(this.chart.scales[F].getPixelForValue(B))}q=t.top,j=t.bottom,S=m+y,O=S+h}else if(n==="y"){if(o==="center")m=_((t.left+t.right)/2);else if(ot(o)){const F=Object.keys(o)[0],B=o[F];m=_(this.chart.scales[F].getPixelForValue(B))}x=m-y,w=x-h,R=t.left,H=t.right}const W=Ke(r.ticks.maxTicksLimit,u),V=Math.max(1,Math.ceil(u/W));for(g=0;g<u;g+=V){const F=s.setContext(this.getContext(g)),B=F.lineWidth,X=F.color,ne=F.borderDash||[],ue=F.borderDashOffset,he=F.tickWidth,ce=F.tickColor,Me=F.tickBorderDash||[],_e=F.tickBorderDashOffset;v=S_(this,g,a),v!==void 0&&(b=$i(i,v,B),c?x=w=R=H=b:S=O=q=j=b,d.push({tx1:x,ty1:S,tx2:w,ty2:O,x1:R,y1:q,x2:H,y2:j,width:B,color:X,borderDash:ne,borderDashOffset:ue,tickWidth:he,tickColor:ce,tickBorderDash:Me,tickBorderDashOffset:_e}))}return this._ticksLength=u,this._borderValue=m,d}_computeLabelItems(t){const n=this.axis,i=this.options,{position:r,ticks:s}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:u,mirror:h}=s,d=io(i.grid),f=d+u,p=h?-u:f,y=-kn(this.labelRotation),_=[];let m,g,v,b,x,S,w,O,R,q,H,j,W="middle";if(r==="top")S=this.bottom-p,w=this._getXAxisLabelAlignment();else if(r==="bottom")S=this.top+p,w=this._getXAxisLabelAlignment();else if(r==="left"){const F=this._getYAxisLabelAlignment(d);w=F.textAlign,x=F.x}else if(r==="right"){const F=this._getYAxisLabelAlignment(d);w=F.textAlign,x=F.x}else if(n==="x"){if(r==="center")S=(t.top+t.bottom)/2+f;else if(ot(r)){const F=Object.keys(r)[0],B=r[F];S=this.chart.scales[F].getPixelForValue(B)+f}w=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")x=(t.left+t.right)/2-f;else if(ot(r)){const F=Object.keys(r)[0],B=r[F];x=this.chart.scales[F].getPixelForValue(B)}w=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(c==="start"?W="top":c==="end"&&(W="bottom"));const V=this._getLabelSizes();for(m=0,g=a.length;m<g;++m){v=a[m],b=v.label;const F=s.setContext(this.getContext(m));O=this.getPixelForTick(m)+s.labelOffset,R=this._resolveTickFontOptions(m),q=R.lineHeight,H=Tt(b)?b.length:1;const B=H/2,X=F.color,ne=F.textStrokeColor,ue=F.textStrokeWidth;let he=w;o?(x=O,w==="inner"&&(m===g-1?he=this.options.reverse?"left":"right":m===0?he=this.options.reverse?"right":"left":he="center"),r==="top"?l==="near"||y!==0?j=-H*q+q/2:l==="center"?j=-V.highest.height/2-B*q+q:j=-V.highest.height+q/2:l==="near"||y!==0?j=q/2:l==="center"?j=V.highest.height/2-B*q:j=V.highest.height-H*q,h&&(j*=-1)):(S=O,j=(1-H)*q/2);let ce;if(F.showLabelBackdrop){const Me=ti(F.backdropPadding),_e=V.heights[m],Ie=V.widths[m];let T=S+j-Me.top,M=x-Me.left;switch(W){case"middle":T-=_e/2;break;case"bottom":T-=_e;break}switch(w){case"center":M-=Ie/2;break;case"right":M-=Ie;break}ce={left:M,top:T,width:Ie+Me.width,height:_e+Me.height,color:F.backdropColor}}_.push({rotation:y,label:b,font:R,color:X,strokeColor:ne,strokeWidth:ue,textOffset:j,textAlign:he,textBaseline:W,translation:[x,S],backdrop:ce})}return _}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-kn(this.labelRotation))return t==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=this.options,o=this._getLabelSizes(),a=t+s,c=o.widest.width;let l,u;return n==="left"?r?(u=this.right+s,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u+=c)):(u=this.right-a,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u=this.left)):n==="right"?r?(u=this.left+s,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u-=c)):(u=this.left+a,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u=this.right)):l="right",{textAlign:l,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:i,top:r,width:s,height:o}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(i,r,s,o),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(s=>s.value===t);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,o;const a=(c,l,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(n.display)for(s=0,o=r.length;s<o;++s){const c=r[s];n.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{grid:i}}=this,r=i.setContext(this.getContext()),s=i.drawBorder?r.borderWidth:0;if(!s)return;const o=i.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let c,l,u,h;this.isHorizontal()?(c=$i(t,this.left,s)-s/2,l=$i(t,this.right,o)+o/2,u=h=a):(u=$i(t,this.top,s)-s/2,h=$i(t,this.bottom,o)+o/2,c=l=a),n.save(),n.lineWidth=r.borderWidth,n.strokeStyle=r.borderColor,n.beginPath(),n.moveTo(c,u),n.lineTo(l,h),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&l0(i,r);const s=this._labelItems||(this._labelItems=this._computeLabelItems(t));let o,a;for(o=0,a=s.length;o<a;++o){const c=s[o],l=c.font,u=c.label;c.backdrop&&(i.fillStyle=c.backdrop.color,i.fillRect(c.backdrop.left,c.backdrop.top,c.backdrop.width,c.backdrop.height));let h=c.textOffset;Uc(i,u,0,h,l,c)}r&&u0(i)}drawTitle(){const{ctx:t,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const s=ln(i.font),o=ti(i.padding),a=i.align;let c=s.lineHeight/2;n==="bottom"||n==="center"||ot(n)?(c+=o.bottom,Tt(i.text)&&(c+=s.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:u,maxWidth:h,rotation:d}=P_(this,c,n,a);Uc(t,i.text,0,0,s,{color:i.color,maxWidth:h,rotation:d,textAlign:L_(a,n,r),textBaseline:"middle",translation:[l,u]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,i=Ke(t.grid&&t.grid.z,-1);return!this._isVisible()||this.draw!==Pr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[i]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return ln(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Oa{constructor(t,n,i){this.type=t,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let i;I_(n)&&(i=this.register(n));const r=this.items,s=t.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in r||(r[s]=t,C_(t,o,i),this.override&&at.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const n=this.items,i=t.id,r=this.scope;i in n&&delete n[i],r&&i in at[r]&&(delete at[r][i],this.override&&delete Gm[i])}}function C_(e,t,n){const i=Do(Object.create(null),[n?at.get(n):{},at.get(t),e.defaults]);at.set(t,i),e.defaultRoutes&&D_(t,e.defaultRoutes),e.descriptors&&at.describe(t,e.descriptors)}function D_(e,t){Object.keys(t).forEach(n=>{const i=n.split("."),r=i.pop(),s=[e].concat(i).join("."),o=t[n].split("."),a=o.pop(),c=o.join(".");at.route(s,r,c,a)})}function I_(e){return"id"in e&&"defaults"in e}class O_{constructor(){this.controllers=new Oa(Un,"datasets",!0),this.elements=new Oa(wi,"elements"),this.plugins=new Oa(Object,"plugins"),this.scales=new Oa(Pr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,i){[...n].forEach(r=>{const s=i||this._getRegistryForType(r);i||s.isForType(r)||s===this.plugins&&r.id?this._exec(t,s,r):Jt(r,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,n,i){const r=Lm(t);Vt(i["before"+r],[],i),n[t](i),Vt(i["after"+r],[],i)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(t))return i}return this.plugins}_get(t,n,i){const r=n.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return r}}var F_=new O_;class Kh extends Un{update(t){const n=this._cachedMeta,{data:i=[]}=n,r=this.chart._animationsDisabled;let{start:s,count:o}=Fm(n,i,r);if(this._drawStart=s,this._drawCount=o,Nm(n)&&(s=0,o=i.length),this.options.showLine){const{dataset:a,_dataset:c}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:l},t)}this.updateElements(i,s,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=F_.getElement("line")),super.addElements()}updateElements(t,n,i,r){const s=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,u=this.resolveDataElementOptions(n,r),h=this.getSharedOptions(u),d=this.includeOptions(r,h),f=o.axis,p=a.axis,{spanGaps:y,segment:_}=this.options,m=ys(y)?y:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||s||r==="none";let v=n>0&&this.getParsed(n-1);for(let b=n;b<n+i;++b){const x=t[b],S=this.getParsed(b),w=g?x:{},O=st(S[p]),R=w[f]=o.getPixelForValue(S[f],b),q=w[p]=s||O?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,S,c):S[p],b);w.skip=isNaN(R)||isNaN(q)||O,w.stop=b>0&&Math.abs(S[f]-v[f])>m,_&&(w.parsed=S,w.raw=l.data[b]),d&&(w.options=h||this.resolveDataElementOptions(b,x.active?"active":r)),g||this.updateElement(x,b,w,r),v=S}this.updateSharedOptions(h,r,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let a=0;for(let c=n.length-1;c>=0;--c)a=Math.max(a,n[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,r=i.options&&i.options.borderWidth||0;if(!n.length)return r;const s=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(r,s,o)/2}}Kh.id="scatter";Kh.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};Kh.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(e){return"("+e.label+", "+e.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function er(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Wu{constructor(t){this.options=t||{}}init(t){}formats(){return er()}parse(t,n){return er()}format(t,n){return er()}add(t,n,i){return er()}diff(t,n,i){return er()}startOf(t,n,i){return er()}endOf(t,n){return er()}}Wu.override=function(e){Object.assign(Wu.prototype,e)};var N_={_date:Wu};at.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});function Qm(e,t,n){const{startAngle:i,pixelMargin:r,x:s,y:o,outerRadius:a,innerRadius:c}=t;let l=r/a;e.beginPath(),e.arc(s,o,a,i-l,n+l),c>r?(l=r/c,e.arc(s,o,c,n+l,i-l,!0)):e.arc(s,o,r,n+bt,i-bt),e.closePath(),e.clip()}function k_(e){return jh(e,["outerStart","outerEnd","innerStart","innerEnd"])}function B_(e,t,n,i){const r=k_(e.options.borderRadius),s=(n-t)/2,o=Math.min(s,i*t/2),a=c=>{const l=(n-Math.min(s,c))*i/2;return jt(c,0,Math.min(s,l))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:jt(r.innerStart,0,o),innerEnd:jt(r.innerEnd,0,o)}}function kr(e,t,n,i){return{x:n+e*Math.cos(t),y:i+e*Math.sin(t)}}function ju(e,t,n,i,r,s){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:u}=t,h=Math.max(t.outerRadius+i+n-l,0),d=u>0?u+i+n+l:0;let f=0;const p=r-c;if(i){const F=u>0?u-i:0,B=h>0?h-i:0,X=(F+B)/2,ne=X!==0?p*X/(X+i):p;f=(p-ne)/2}const y=Math.max(.001,p*h-n/xt)/h,_=(p-y)/2,m=c+_+f,g=r-_-f,{outerStart:v,outerEnd:b,innerStart:x,innerEnd:S}=B_(t,d,h,g-m),w=h-v,O=h-b,R=m+v/w,q=g-b/O,H=d+x,j=d+S,W=m+x/H,V=g-S/j;if(e.beginPath(),s){if(e.arc(o,a,h,R,q),b>0){const X=kr(O,q,o,a);e.arc(X.x,X.y,b,q,g+bt)}const F=kr(j,g,o,a);if(e.lineTo(F.x,F.y),S>0){const X=kr(j,V,o,a);e.arc(X.x,X.y,S,g+bt,V+Math.PI)}if(e.arc(o,a,d,g-S/d,m+x/d,!0),x>0){const X=kr(H,W,o,a);e.arc(X.x,X.y,x,W+Math.PI,m-bt)}const B=kr(w,m,o,a);if(e.lineTo(B.x,B.y),v>0){const X=kr(w,R,o,a);e.arc(X.x,X.y,v,m-bt,R)}}else{e.moveTo(o,a);const F=Math.cos(R)*h+o,B=Math.sin(R)*h+a;e.lineTo(F,B);const X=Math.cos(q)*h+o,ne=Math.sin(q)*h+a;e.lineTo(X,ne)}e.closePath()}function U_(e,t,n,i,r){const{fullCircles:s,startAngle:o,circumference:a}=t;let c=t.endAngle;if(s){ju(e,t,n,i,o+tt,r);for(let l=0;l<s;++l)e.fill();isNaN(a)||(c=o+a%tt,a%tt===0&&(c+=tt))}return ju(e,t,n,i,c,r),e.fill(),c}function H_(e,t,n){const{x:i,y:r,startAngle:s,pixelMargin:o,fullCircles:a}=t,c=Math.max(t.outerRadius-o,0),l=t.innerRadius+o;let u;for(n&&Qm(e,t,s+tt),e.beginPath(),e.arc(i,r,l,s+tt,s,!0),u=0;u<a;++u)e.stroke();for(e.beginPath(),e.arc(i,r,c,s,s+tt),u=0;u<a;++u)e.stroke()}function z_(e,t,n,i,r,s){const{options:o}=t,{borderWidth:a,borderJoinStyle:c}=o,l=o.borderAlign==="inner";!a||(l?(e.lineWidth=a*2,e.lineJoin=c||"round"):(e.lineWidth=a,e.lineJoin=c||"bevel"),t.fullCircles&&H_(e,t,l),l&&Qm(e,t,r),ju(e,t,n,i,r,s),e.stroke())}class Qh extends wi{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,n,i){const r=this.getProps(["x","y"],i),{angle:s,distance:o}=Ly(r,{x:t,y:n}),{startAngle:a,endAngle:c,innerRadius:l,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=this.options.spacing/2,p=Ke(h,c-a)>=tt||Fc(s,a,c),y=Nc(o,l+d,u+d);return p&&y}getCenterPoint(t){const{x:n,y:i,startAngle:r,endAngle:s,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:c,spacing:l}=this.options,u=(r+s)/2,h=(o+a+l+c)/2;return{x:n+Math.cos(u)*h,y:i+Math.sin(u)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:n,circumference:i}=this,r=(n.offset||0)/2,s=(n.spacing||0)/2,o=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=i>tt?Math.floor(i/tt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=0;if(r){a=r/2;const l=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(l)*a,Math.sin(l)*a),this.circumference>=xt&&(a=r)}t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor;const c=U_(t,this,a,s,o);z_(t,this,a,s,c,o),t.restore()}}Qh.id="arc";Qh.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};Qh.defaultRoutes={backgroundColor:"backgroundColor"};function $m(e,t,n=t){e.lineCap=Ke(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Ke(n.borderDash,t.borderDash)),e.lineDashOffset=Ke(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Ke(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Ke(n.borderWidth,t.borderWidth),e.strokeStyle=Ke(n.borderColor,t.borderColor)}function G_(e,t,n){e.lineTo(n.x,n.y)}function V_(e){return e.stepped?h0:e.tension||e.cubicInterpolationMode==="monotone"?f0:G_}function eg(e,t,n={}){const i=e.length,{start:r=0,end:s=i-1}=n,{start:o,end:a}=t,c=Math.max(r,o),l=Math.min(s,a),u=r<o&&s<o||r>a&&s>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!u?i+l-c:l-c}}function W_(e,t,n,i){const{points:r,options:s}=t,{count:o,start:a,loop:c,ilen:l}=eg(r,n,i),u=V_(s);let{move:h=!0,reverse:d}=i||{},f,p,y;for(f=0;f<=l;++f)p=r[(a+(d?l-f:f))%o],!p.skip&&(h?(e.moveTo(p.x,p.y),h=!1):u(e,y,p,d,s.stepped),y=p);return c&&(p=r[(a+(d?l:0))%o],u(e,y,p,d,s.stepped)),!!c}function j_(e,t,n,i){const r=t.points,{count:s,start:o,ilen:a}=eg(r,n,i),{move:c=!0,reverse:l}=i||{};let u=0,h=0,d,f,p,y,_,m;const g=b=>(o+(l?a-b:b))%s,v=()=>{y!==_&&(e.lineTo(u,_),e.lineTo(u,y),e.lineTo(u,m))};for(c&&(f=r[g(0)],e.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=r[g(d)],f.skip)continue;const b=f.x,x=f.y,S=b|0;S===p?(x<y?y=x:x>_&&(_=x),u=(h*u+b)/++h):(v(),e.lineTo(b,x),p=S,h=0,y=_=x),m=x}v()}function Xu(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?j_:W_}function X_(e){return e.stepped?A0:e.tension||e.cubicInterpolationMode==="monotone"?R0:lr}function Y_(e,t,n,i){let r=t._path;r||(r=t._path=new Path2D,t.path(r,n,i)&&r.closePath()),$m(e,t.options),e.stroke(r)}function q_(e,t,n,i){const{segments:r,options:s}=t,o=Xu(t);for(const a of r)$m(e,s,a.style),e.beginPath(),o(e,t,a,{start:n,end:n+i-1})&&e.closePath(),e.stroke()}const Z_=typeof Path2D=="function";function J_(e,t,n,i){Z_&&!t.options.segment?Y_(e,t,n,i):q_(e,t,n,i)}class Fl extends wi{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;T0(this._points,i,t,r,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=U0(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,i=t.length;return i&&n[t[i-1].end]}interpolate(t,n){const i=this.options,r=t[n],s=this.points,o=N0(this,{property:n,start:r,end:r});if(!o.length)return;const a=[],c=X_(i);let l,u;for(l=0,u=o.length;l<u;++l){const{start:h,end:d}=o[l],f=s[h],p=s[d];if(f===p){a.push(f);continue}const y=Math.abs((r-f[n])/(p[n]-f[n])),_=c(f,p,y,i.stepped);_[n]=t[n],a.push(_)}return a.length===1?a[0]:a}pathSegment(t,n,i){return Xu(this)(t,this,n,i)}path(t,n,i){const r=this.segments,s=Xu(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of r)o&=s(t,this,a,{start:n,end:n+i-1});return!!o}draw(t,n,i,r){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(t.save(),J_(t,this,i,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Fl.id="line";Fl.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};Fl.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};Fl.descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};function td(e,t,n,i){const r=e.options,{[n]:s}=e.getProps([n],i);return Math.abs(t-s)<r.radius+r.hitRadius}class $h extends wi{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,i){const r=this.options,{x:s,y:o}=this.getProps(["x","y"],i);return Math.pow(t-s,2)+Math.pow(n-o,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,n){return td(this,t,"x",n)}inYRange(t,n){return td(this,t,"y",n)}getCenterPoint(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const i=n&&t.borderWidth||0;return(n+i)*2}draw(t,n){const i=this.options;this.skip||i.radius<.1||!Vu(this,n,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Gu(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}$h.id="point";$h.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};$h.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function tg(e,t){const{x:n,y:i,base:r,width:s,height:o}=e.getProps(["x","y","base","width","height"],t);let a,c,l,u,h;return e.horizontal?(h=o/2,a=Math.min(n,r),c=Math.max(n,r),l=i-h,u=i+h):(h=s/2,a=n-h,c=n+h,l=Math.min(i,r),u=Math.max(i,r)),{left:a,top:l,right:c,bottom:u}}function ki(e,t,n,i){return e?0:jt(t,n,i)}function K_(e,t,n){const i=e.options.borderWidth,r=e.borderSkipped,s=Vm(i);return{t:ki(r.top,s.top,0,n),r:ki(r.right,s.right,0,t),b:ki(r.bottom,s.bottom,0,n),l:ki(r.left,s.left,0,t)}}function Q_(e,t,n){const{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),r=e.options.borderRadius,s=hs(r),o=Math.min(t,n),a=e.borderSkipped,c=i||ot(r);return{topLeft:ki(!c||a.top||a.left,s.topLeft,0,o),topRight:ki(!c||a.top||a.right,s.topRight,0,o),bottomLeft:ki(!c||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:ki(!c||a.bottom||a.right,s.bottomRight,0,o)}}function $_(e){const t=tg(e),n=t.right-t.left,i=t.bottom-t.top,r=K_(e,n/2,i/2),s=Q_(e,n/2,i/2);return{outer:{x:t.left,y:t.top,w:n,h:i,radius:s},inner:{x:t.left+r.l,y:t.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,s.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(r.b,r.r))}}}}function nu(e,t,n,i){const r=t===null,s=n===null,a=e&&!(r&&s)&&tg(e,i);return a&&(r||Nc(t,a.left,a.right))&&(s||Nc(n,a.top,a.bottom))}function ev(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function tv(e,t){e.rect(t.x,t.y,t.w,t.h)}function iu(e,t,n={}){const i=e.x!==n.x?-t:0,r=e.y!==n.y?-t:0,s=(e.x+e.w!==n.x+n.w?t:0)-i,o=(e.y+e.h!==n.y+n.h?t:0)-r;return{x:e.x+i,y:e.y+r,w:e.w+s,h:e.h+o,radius:e.radius}}class ef extends wi{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:i,backgroundColor:r}}=this,{inner:s,outer:o}=$_(this),a=ev(o.radius)?Hc:tv;t.save(),(o.w!==s.w||o.h!==s.h)&&(t.beginPath(),a(t,iu(o,n,s)),t.clip(),a(t,iu(s,-n,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,iu(s,n)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,n,i){return nu(this,t,n,i)}inXRange(t,n){return nu(this,t,null,n)}inYRange(t,n){return nu(this,null,t,n)}getCenterPoint(t){const{x:n,y:i,base:r,horizontal:s}=this.getProps(["x","y","base","horizontal"],t);return{x:s?(n+r)/2:n,y:s?i:(i+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}ef.id="bar";ef.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};ef.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};const Sc={average(e){if(!e.length)return!1;let t,n,i=0,r=0,s=0;for(t=0,n=e.length;t<n;++t){const o=e[t].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,r+=a.y,++s}}return{x:i/s,y:r/s}},nearest(e,t){if(!e.length)return!1;let n=t.x,i=t.y,r=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=e.length;s<o;++s){const c=e[s].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),u=Hu(t,l);u<r&&(r=u,a=c)}}if(a){const c=a.tooltipPosition();n=c.x,i=c.y}return{x:n,y:i}}};function Xn(e,t){return t&&(Tt(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function fi(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function nv(e,t){const{element:n,datasetIndex:i,index:r}=t,s=e.getDatasetMeta(i).controller,{label:o,value:a}=s.getLabelAndValue(r);return{chart:e,label:o,parsed:s.getParsed(r),raw:e.data.datasets[i].data[r],formattedValue:a,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function nd(e,t){const n=e.chart.ctx,{body:i,footer:r,title:s}=e,{boxWidth:o,boxHeight:a}=t,c=ln(t.bodyFont),l=ln(t.titleFont),u=ln(t.footerFont),h=s.length,d=r.length,f=i.length,p=ti(t.padding);let y=p.height,_=0,m=i.reduce((b,x)=>b+x.before.length+x.lines.length+x.after.length,0);if(m+=e.beforeBody.length+e.afterBody.length,h&&(y+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),m){const b=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;y+=f*b+(m-f)*c.lineHeight+(m-1)*t.bodySpacing}d&&(y+=t.footerMarginTop+d*u.lineHeight+(d-1)*t.footerSpacing);let g=0;const v=function(b){_=Math.max(_,n.measureText(b).width+g)};return n.save(),n.font=l.string,Jt(e.title,v),n.font=c.string,Jt(e.beforeBody.concat(e.afterBody),v),g=t.displayColors?o+2+t.boxPadding:0,Jt(i,b=>{Jt(b.before,v),Jt(b.lines,v),Jt(b.after,v)}),g=0,n.font=u.string,Jt(e.footer,v),n.restore(),_+=p.width,{width:_,height:y}}function iv(e,t){const{y:n,height:i}=t;return n<i/2?"top":n>e.height-i/2?"bottom":"center"}function rv(e,t,n,i){const{x:r,width:s}=i,o=n.caretSize+n.caretPadding;if(e==="left"&&r+s+o>t.width||e==="right"&&r-s-o<0)return!0}function sv(e,t,n,i){const{x:r,width:s}=n,{width:o,chartArea:{left:a,right:c}}=e;let l="center";return i==="center"?l=r<=(a+c)/2?"left":"right":r<=s/2?l="left":r>=o-s/2&&(l="right"),rv(l,e,t,n)&&(l="center"),l}function id(e,t,n){const i=n.yAlign||t.yAlign||iv(e,n);return{xAlign:n.xAlign||t.xAlign||sv(e,t,n,i),yAlign:i}}function ov(e,t){let{x:n,width:i}=e;return t==="right"?n-=i:t==="center"&&(n-=i/2),n}function av(e,t,n){let{y:i,height:r}=e;return t==="top"?i+=n:t==="bottom"?i-=r+n:i-=r/2,i}function rd(e,t,n,i){const{caretSize:r,caretPadding:s,cornerRadius:o}=e,{xAlign:a,yAlign:c}=n,l=r+s,{topLeft:u,topRight:h,bottomLeft:d,bottomRight:f}=hs(o);let p=ov(t,a);const y=av(t,c,l);return c==="center"?a==="left"?p+=l:a==="right"&&(p-=l):a==="left"?p-=Math.max(u,d)+r:a==="right"&&(p+=Math.max(h,f)+r),{x:jt(p,0,i.width-t.width),y:jt(y,0,i.height-t.height)}}function Fa(e,t,n){const i=ti(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function sd(e){return Xn([],fi(e))}function cv(e,t,n){return Lr(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function od(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}class lv extends wi{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new Ym(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=cv(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:i}=n,r=i.beforeTitle.apply(this,[t]),s=i.title.apply(this,[t]),o=i.afterTitle.apply(this,[t]);let a=[];return a=Xn(a,fi(r)),a=Xn(a,fi(s)),a=Xn(a,fi(o)),a}getBeforeBody(t,n){return sd(n.callbacks.beforeBody.apply(this,[t]))}getBody(t,n){const{callbacks:i}=n,r=[];return Jt(t,s=>{const o={before:[],lines:[],after:[]},a=od(i,s);Xn(o.before,fi(a.beforeLabel.call(this,s))),Xn(o.lines,a.label.call(this,s)),Xn(o.after,fi(a.afterLabel.call(this,s))),r.push(o)}),r}getAfterBody(t,n){return sd(n.callbacks.afterBody.apply(this,[t]))}getFooter(t,n){const{callbacks:i}=n,r=i.beforeFooter.apply(this,[t]),s=i.footer.apply(this,[t]),o=i.afterFooter.apply(this,[t]);let a=[];return a=Xn(a,fi(r)),a=Xn(a,fi(s)),a=Xn(a,fi(o)),a}_createItems(t){const n=this._active,i=this.chart.data,r=[],s=[],o=[];let a=[],c,l;for(c=0,l=n.length;c<l;++c)a.push(nv(this.chart,n[c]));return t.filter&&(a=a.filter((u,h,d)=>t.filter(u,h,d,i))),t.itemSort&&(a=a.sort((u,h)=>t.itemSort(u,h,i))),Jt(a,u=>{const h=od(t.callbacks,u);r.push(h.labelColor.call(this,u)),s.push(h.labelPointStyle.call(this,u)),o.push(h.labelTextColor.call(this,u))}),this.labelColors=r,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(t,n){const i=this.options.setContext(this.getContext()),r=this._active;let s,o=[];if(!r.length)this.opacity!==0&&(s={opacity:0});else{const a=Sc[i.position].call(this,r,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=nd(this,i),l=Object.assign({},a,c),u=id(this.chart,i,l),h=rd(i,l,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,i,r){const s=this.getCaretPosition(t,i,r);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(t,n,i){const{xAlign:r,yAlign:s}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:u,bottomRight:h}=hs(a),{x:d,y:f}=t,{width:p,height:y}=n;let _,m,g,v,b,x;return s==="center"?(b=f+y/2,r==="left"?(_=d,m=_-o,v=b+o,x=b-o):(_=d+p,m=_+o,v=b-o,x=b+o),g=_):(r==="left"?m=d+Math.max(c,u)+o:r==="right"?m=d+p-Math.max(l,h)-o:m=this.caretX,s==="top"?(v=f,b=v-o,_=m-o,g=m+o):(v=f+y,b=v+o,_=m+o,g=m-o),x=v),{x1:_,x2:m,x3:g,y1:v,y2:b,y3:x}}drawTitle(t,n,i){const r=this.title,s=r.length;let o,a,c;if(s){const l=Ql(i.rtl,this.x,this.width);for(t.x=Fa(this,i.titleAlign,i),n.textAlign=l.textAlign(i.titleAlign),n.textBaseline="middle",o=ln(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,c=0;c<s;++c)n.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===s&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,n,i,r,s){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l,boxPadding:u}=s,h=ln(s.bodyFont),d=Fa(this,"left",s),f=r.x(d),p=c<h.lineHeight?(h.lineHeight-c)/2:0,y=n.y+p;if(s.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=r.leftForLtr(f,l)+l/2,g=y+c/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,Gu(t,_,m,g),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Gu(t,_,m,g)}else{t.lineWidth=ot(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=r.leftForLtr(f,l-u),m=r.leftForLtr(r.xPlus(f,1),l-u-2),g=hs(o.borderRadius);Object.values(g).some(v=>v!==0)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,Hc(t,{x:_,y,w:l,h:c,radius:g}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Hc(t,{x:m,y:y+1,w:l-2,h:c-2,radius:g}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(_,y,l,c),t.strokeRect(_,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(m,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,n,i){const{body:r}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:u}=i,h=ln(i.bodyFont);let d=h.lineHeight,f=0;const p=Ql(i.rtl,this.x,this.width),y=function(O){n.fillText(O,p.x(t.x+f),t.y+d/2),t.y+=d+s},_=p.textAlign(o);let m,g,v,b,x,S,w;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,t.x=Fa(this,_,i),n.fillStyle=i.bodyColor,Jt(this.beforeBody,y),f=a&&_!=="right"?o==="center"?l/2+u:l+2+u:0,b=0,S=r.length;b<S;++b){for(m=r[b],g=this.labelTextColors[b],n.fillStyle=g,Jt(m.before,y),v=m.lines,a&&v.length&&(this._drawColorBox(n,t,b,p,i),d=Math.max(h.lineHeight,c)),x=0,w=v.length;x<w;++x)y(v[x]),d=h.lineHeight;Jt(m.after,y)}f=0,d=h.lineHeight,Jt(this.afterBody,y),t.y-=s}drawFooter(t,n,i){const r=this.footer,s=r.length;let o,a;if(s){const c=Ql(i.rtl,this.x,this.width);for(t.x=Fa(this,i.footerAlign,i),t.y+=i.footerMarginTop,n.textAlign=c.textAlign(i.footerAlign),n.textBaseline="middle",o=ln(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,n,i,r){const{xAlign:s,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:u}=i,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:p}=hs(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(a+h,c),o==="top"&&this.drawCaret(t,n,i,r),n.lineTo(a+l-d,c),n.quadraticCurveTo(a+l,c,a+l,c+d),o==="center"&&s==="right"&&this.drawCaret(t,n,i,r),n.lineTo(a+l,c+u-p),n.quadraticCurveTo(a+l,c+u,a+l-p,c+u),o==="bottom"&&this.drawCaret(t,n,i,r),n.lineTo(a+f,c+u),n.quadraticCurveTo(a,c+u,a,c+u-f),o==="center"&&s==="left"&&this.drawCaret(t,n,i,r),n.lineTo(a,c+h),n.quadraticCurveTo(a,c,a+h,c),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,i=this.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const o=Sc[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=nd(this,t),c=Object.assign({},o,this._size),l=id(n,t,c),u=rd(t,c,l,n);(r._to!==u.x||s._to!==u.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=ti(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(s,t,r,n),D0(t,n.textDirection),s.y+=o.top,this.drawTitle(s,t,n),this.drawBody(s,t,n),this.drawFooter(s,t,n),I0(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const i=this._active,r=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),s=!Ef(i,r),o=this._positionChanged(r,n);(s||o)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,s=this._active||[],o=this._getActiveElements(t,s,n,i),a=this._positionChanged(o,t),c=n||!Ef(o,s)||a;return c&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),c}_getActiveElements(t,n,i,r){const s=this.options;if(t.type==="mouseout")return[];if(!r)return n;const o=this.chart.getElementsAtEventForMode(t,s.mode,s,i);return s.reverse&&o.reverse(),o}_positionChanged(t,n){const{caretX:i,caretY:r,options:s}=this,o=Sc[s.position].call(this,t,n);return o!==!1&&(i!==o.x||r!==o.y)}}lv.positioners=Sc;const uv=(e,t,n,i)=>(typeof t=="string"?(n=e.push(t)-1,i.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function hv(e,t,n,i){const r=e.indexOf(t);if(r===-1)return uv(e,t,n,i);const s=e.lastIndexOf(t);return r!==s?n:r}const fv=(e,t)=>e===null?null:jt(Math.round(e),0,t);class Yu extends Pr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:s}of n)i[r]===s&&i.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(st(t))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===t?n:hv(i,t,Ke(n,t),this._addedLabels),fv(n,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const t=this.min,n=this.max,i=this.options.offset,r=[];let s=this.getLabels();s=t===0&&n===s.length-1?s:s.slice(t,n+1),this._valueRange=Math.max(s.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=n;o++)r.push({value:o});return r}getLabelForValue(t){const n=this.getLabels();return t>=0&&t<n.length?n[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}Yu.id="category";Yu.defaults={ticks:{callback:Yu.prototype.getLabelForValue}};function dv(e,t){const n=[],{bounds:r,step:s,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:d}=e,f=s||1,p=u-1,{min:y,max:_}=t,m=!st(o),g=!st(a),v=!st(l),b=(_-y)/(h+1);let x=Af((_-y)/p/f)*f,S,w,O,R;if(x<1e-14&&!m&&!g)return[{value:y},{value:_}];R=Math.ceil(_/x)-Math.floor(y/x),R>p&&(x=Af(R*x/p/f)*f),st(c)||(S=Math.pow(10,c),x=Math.ceil(x*S)/S),r==="ticks"?(w=Math.floor(y/x)*x,O=Math.ceil(_/x)*x):(w=y,O=_),m&&g&&s&&Ry((a-o)/s,x/1e3)?(R=Math.round(Math.min((a-o)/x,u)),x=(a-o)/R,w=o,O=a):v?(w=m?o:w,O=g?a:O,R=l-1,x=(O-w)/R):(R=(O-w)/x,bo(R,Math.round(R),x/1e3)?R=Math.round(R):R=Math.ceil(R));const q=Math.max(Rf(x),Rf(w));S=Math.pow(10,st(c)?q:c),w=Math.round(w*S)/S,O=Math.round(O*S)/S;let H=0;for(m&&(d&&w!==o?(n.push({value:o}),w<o&&H++,bo(Math.round((w+H*x)*S)/S,o,ad(o,b,e))&&H++):w<o&&H++);H<R;++H)n.push({value:Math.round((w+H*x)*S)/S});return g&&d&&O!==a?n.length&&bo(n[n.length-1].value,a,ad(a,b,e))?n[n.length-1].value=a:n.push({value:a}):(!g||O===a)&&n.push({value:O}),n}function ad(e,t,{horizontal:n,minRotation:i}){const r=kn(i),s=(n?Math.sin(r):Math.cos(r))||.001,o=.75*t*(""+e).length;return Math.min(t/s,o)}class zc extends Pr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return st(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:s}=this;const o=c=>r=n?r:c,a=c=>s=i?s:c;if(t){const c=ei(r),l=ei(s);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(r===s){let c=1;(s>=Number.MAX_SAFE_INTEGER||r<=Number.MIN_SAFE_INTEGER)&&(c=Math.abs(s*.05)),a(s+c),t||o(r-c)}this.min=r,this.max=s}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=t,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=dv(r,s);return t.bounds==="ticks"&&Cm(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const r=(i-n)/Math.max(t.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(t){return ga(t,this.chart.options.locale,this.options.ticks.format)}}class ng extends zc{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ut(t)?t:0,this.max=Ut(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,i=kn(this.options.ticks.minRotation),r=(t?Math.sin(i):Math.cos(i))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}ng.id="linear";ng.defaults={ticks:{callback:Ol.formatters.numeric}};function cd(e){return e/Math.pow(10,Math.floor(Mn(e)))===1}function pv(e,t){const n=Math.floor(Mn(t.max)),i=Math.ceil(t.max/Math.pow(10,n)),r=[];let s=bn(e.min,Math.pow(10,Math.floor(Mn(t.min)))),o=Math.floor(Mn(s)),a=Math.floor(s/Math.pow(10,o)),c=o<0?Math.pow(10,Math.abs(o)):1;do r.push({value:s,major:cd(s)}),++a,a===10&&(a=1,++o,c=o>=0?1:c),s=Math.round(a*Math.pow(10,o)*c)/c;while(o<n||o===n&&a<i);const l=bn(e.max,s);return r.push({value:l,major:cd(s)}),r}class ig extends Pr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const i=zc.prototype.parse.apply(this,[t,n]);if(i===0){this._zero=!0;return}return Ut(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ut(t)?Math.max(0,t):null,this.max=Ut(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let i=this.min,r=this.max;const s=c=>i=t?i:c,o=c=>r=n?r:c,a=(c,l)=>Math.pow(10,Math.floor(Mn(c))+l);i===r&&(i<=0?(s(1),o(10)):(s(a(i,-1)),o(a(r,1)))),i<=0&&s(a(r,-1)),r<=0&&o(a(i,1)),this._zero&&this.min!==this._suggestedMin&&i===a(this.min,0)&&s(a(i,-1)),this.min=i,this.max=r}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},i=pv(n,this);return t.bounds==="ticks"&&Cm(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":ga(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Mn(t),this._valueRange=Mn(this.max)-Mn(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Mn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}ig.id="logarithmic";ig.defaults={ticks:{callback:Ol.formatters.logarithmic,major:{enabled:!0}}};function qu(e){const t=e.ticks;if(t.display&&e.display){const n=ti(t.backdropPadding);return Ke(t.font&&t.font.size,at.font.size)+n.height}return 0}function mv(e,t,n){return n=Tt(n)?n:[n],{w:a0(e,t.string,n),h:n.length*t.lineHeight}}function ld(e,t,n,i,r){return e===i||e===r?{start:t-n/2,end:t+n/2}:e<i||e>r?{start:t-n,end:t}:{start:t,end:t+n}}function gv(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),i=[],r=[],s=e._pointLabels.length,o=e.options.pointLabels,a=o.centerPointLabels?xt/s:0;for(let c=0;c<s;c++){const l=o.setContext(e.getPointLabelContext(c));r[c]=l.padding;const u=e.getPointPosition(c,e.drawingArea+r[c],a),h=ln(l.font),d=mv(e.ctx,h,e._pointLabels[c]);i[c]=d;const f=Nn(e.getIndexAngle(c)+a),p=Math.round(zh(f)),y=ld(p,u.x,d.w,0,180),_=ld(p,u.y,d.h,90,270);yv(n,t,f,y,_)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=_v(e,i,r)}function yv(e,t,n,i,r){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/s,e.l=Math.min(e.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/s,e.r=Math.max(e.r,t.r+a)),r.start<t.t?(c=(t.t-r.start)/o,e.t=Math.min(e.t,t.t-c)):r.end>t.b&&(c=(r.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function _v(e,t,n){const i=[],r=e._pointLabels.length,s=e.options,o=qu(s)/2,a=e.drawingArea,c=s.pointLabels.centerPointLabels?xt/r:0;for(let l=0;l<r;l++){const u=e.getPointPosition(l,a+o+n[l],c),h=Math.round(zh(Nn(u.angle+bt))),d=t[l],f=xv(u.y,d.h,h),p=vv(h),y=bv(u.x,d.w,p);i.push({x:u.x,y:f,textAlign:p,left:y,top:f,right:y+d.w,bottom:f+d.h})}return i}function vv(e){return e===0||e===180?"center":e<180?"left":"right"}function bv(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function xv(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function wv(e,t){const{ctx:n,options:{pointLabels:i}}=e;for(let r=t-1;r>=0;r--){const s=i.setContext(e.getPointLabelContext(r)),o=ln(s.font),{x:a,y:c,textAlign:l,left:u,top:h,right:d,bottom:f}=e._pointLabelItems[r],{backdropColor:p}=s;if(!st(p)){const y=hs(s.borderRadius),_=ti(s.backdropPadding);n.fillStyle=p;const m=u-_.left,g=h-_.top,v=d-u+_.width,b=f-h+_.height;Object.values(y).some(x=>x!==0)?(n.beginPath(),Hc(n,{x:m,y:g,w:v,h:b,radius:y}),n.fill()):n.fillRect(m,g,v,b)}Uc(n,e._pointLabels[r],a,c+o.lineHeight/2,o,{color:s.color,textAlign:l,textBaseline:"middle"})}}function rg(e,t,n,i){const{ctx:r}=e;if(n)r.arc(e.xCenter,e.yCenter,t,0,tt);else{let s=e.getPointPosition(0,t);r.moveTo(s.x,s.y);for(let o=1;o<i;o++)s=e.getPointPosition(o,t),r.lineTo(s.x,s.y)}}function Mv(e,t,n,i){const r=e.ctx,s=t.circular,{color:o,lineWidth:a}=t;!s&&!i||!o||!a||n<0||(r.save(),r.strokeStyle=o,r.lineWidth=a,r.setLineDash(t.borderDash),r.lineDashOffset=t.borderDashOffset,r.beginPath(),rg(e,n,s,i),r.closePath(),r.stroke(),r.restore())}function Ev(e,t,n){return Lr(e,{label:n,index:t,type:"pointLabel"})}class Nl extends zc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ti(qu(this.options)/2),n=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Ut(t)&&!isNaN(t)?t:0,this.max=Ut(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/qu(this.options))}generateTickLabels(t){zc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,i)=>{const r=Vt(this.options.pointLabels.callback,[n,i],this);return r||r===0?r:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?gv(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,i,r){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,i,r))}getIndexAngle(t){const n=tt/(this._pointLabels.length||1),i=this.options.startAngle||0;return Nn(t*n+kn(i))}getDistanceFromCenterForValue(t){if(st(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(st(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const i=n[t];return Ev(this.getContext(),t,i)}}getPointPosition(t,n,i=0){const r=this.getIndexAngle(t)-bt+i;return{x:Math.cos(r)*n+this.xCenter,y:Math.sin(r)*n+this.yCenter,angle:r}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:i,right:r,bottom:s}=this._pointLabelItems[t];return{left:n,top:i,right:r,bottom:s}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),rg(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:i,grid:r}=n,s=this._pointLabels.length;let o,a,c;if(n.pointLabels.display&&wv(this,s),r.display&&this.ticks.forEach((l,u)=>{if(u!==0){a=this.getDistanceFromCenterForValue(l.value);const h=r.setContext(this.getContext(u-1));Mv(this,h,a,s)}}),i.display){for(t.save(),o=s-1;o>=0;o--){const l=i.setContext(this.getPointLabelContext(o)),{color:u,lineWidth:h}=l;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(l.borderDash),t.lineDashOffset=l.borderDashOffset,a=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const r=this.getIndexAngle(0);let s,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&!n.reverse)return;const l=i.setContext(this.getContext(c)),u=ln(l.font);if(s=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=u.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ti(l.backdropPadding);t.fillRect(-o/2-h.left,-s-u.size/2-h.top,o+h.width,u.size+h.height)}Uc(t,a.label,0,-s,u,{color:l.color})}),t.restore()}drawTitle(){}}Nl.id="radialLinear";Nl.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ol.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};Nl.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};Nl.descriptors={angleLines:{_fallback:"grid"}};const kl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},nn=Object.keys(kl);function Sv(e,t){return e-t}function ud(e,t){if(st(t))return null;const n=e._adapter,{parser:i,round:r,isoWeekday:s}=e._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Ut(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(r&&(o=r==="week"&&(ys(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,r)),+o)}function hd(e,t,n,i){const r=nn.length;for(let s=nn.indexOf(e);s<r-1;++s){const o=kl[nn[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-t)/(a*o.size))<=i)return nn[s]}return nn[r-1]}function Tv(e,t,n,i,r){for(let s=nn.length-1;s>=nn.indexOf(n);s--){const o=nn[s];if(kl[o].common&&e._adapter.diff(r,i,o)>=t-1)return o}return nn[n?nn.indexOf(n):0]}function Av(e){for(let t=nn.indexOf(e)+1,n=nn.length;t<n;++t)if(kl[nn[t]].common)return nn[t]}function fd(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:i,hi:r}=Dm(n,t),s=n[i]>=t?n[i]:n[r];e[s]=!0}}function Rv(e,t,n,i){const r=e._adapter,s=+r.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=s;a<=o;a=+r.add(a,1,i))c=n[a],c>=0&&(t[c].major=!0);return t}function dd(e,t,n){const i=[],r={},s=t.length;let o,a;for(o=0;o<s;++o)a=t[o],r[a]=o,i.push({value:a,major:!1});return s===0||!n?i:Rv(e,i,r,n)}class Bl extends Pr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n){const i=t.time||(t.time={}),r=this._adapter=new N_._date(t.adapters.date);r.init(n),Rm(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:ud(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,i=t.time.unit||"day";let{min:r,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(r=Math.min(r,l.min)),!a&&!isNaN(l.max)&&(s=Math.max(s,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=Ut(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=Ut(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],i=t[t.length-1]),{min:n,max:i}}buildTicks(){const t=this.options,n=t.time,i=t.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const s=this.min,o=this.max,a=Dy(r,s,o);return this._unit=n.unit||(i.autoSkip?hd(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):Tv(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Av(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),dd(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t){let n=0,i=0,r,s;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?n=1-r:n=(this.getDecimalForValue(t[1])-r)/2,s=this.getDecimalForValue(t[t.length-1]),t.length===1?i=s:i=(s-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;n=jt(n,0,o),i=jt(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const t=this._adapter,n=this.min,i=this.max,r=this.options,s=r.time,o=s.unit||hd(s.minUnit,n,i,this._getLabelCapacity(n)),a=Ke(s.stepSize,1),c=o==="week"?s.isoWeekday:!1,l=ys(c)||c===!0,u={};let h=n,d,f;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=r.ticks.source==="data"&&this.getDataTimestamps();for(d=h,f=0;d<i;d=+t.add(d,a,o),f++)fd(u,d,p);return(d===i||r.bounds==="ticks"||f===1)&&fd(u,d,p),Object.keys(u).sort((y,_)=>y-_).map(y=>+y)}getLabelForValue(t){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(t,i.tooltipFormat):n.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,n,i,r){const s=this.options,o=s.time.displayFormats,a=this._unit,c=this._majorUnit,l=a&&o[a],u=c&&o[c],h=i[n],d=c&&u&&h&&h.major,f=this._adapter.format(t,r||(d?u:l)),p=s.ticks.callback;return p?Vt(p,[f,n,i],this):f}generateTickLabels(t){let n,i,r;for(n=0,i=t.length;n<i;++n)r=t[n],r.label=this._tickFormatFunction(r.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,i=this.ctx.measureText(t).width,r=kn(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*s+a*o,h:i*o+a*s}}_getLabelCapacity(t){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=this._tickFormatFunction(t,0,dd(this,[t],this._majorUnit),r),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,i;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)t=t.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,i;if(t.length)return t;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)t.push(ud(this,r[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Om(t.sort(Sv))}}Bl.id="time";Bl.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function Na(e,t,n){let i=0,r=e.length-1,s,o,a,c;n?(t>=e[i].pos&&t<=e[r].pos&&({lo:i,hi:r}=rs(e,"pos",t)),{pos:s,time:a}=e[i],{pos:o,time:c}=e[r]):(t>=e[i].time&&t<=e[r].time&&({lo:i,hi:r}=rs(e,"time",t)),{time:s,pos:a}=e[i],{time:o,pos:c}=e[r]);const l=o-s;return l?a+(c-a)*(t-s)/l:a}class sg extends Bl{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Na(n,this.min),this._tableRange=Na(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:i}=this,r=[],s=[];let o,a,c,l,u;for(o=0,a=t.length;o<a;++o)l=t[o],l>=n&&l<=i&&r.push(l);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=r.length;o<a;++o)u=r[o+1],c=r[o-1],l=r[o],Math.round((u+c)/2)!==l&&s.push({time:l,pos:o/(a-1)});return s}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?t=this.normalize(n.concat(i)):t=n.length?n:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Na(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return Na(this._table,i*this._tableRange+this._minPos,!0)}}sg.id="timeseries";sg.defaults=Bl.defaults;Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const t=Object(e);for(let n=1;n<arguments.length;n++){const i=arguments[n];if(i!=null)for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t});const Lv="119",Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pv=0,pd=1,Cv=2,og=1,ag=2,_o=3,Xs=0,It=1,Ys=2,cg=1,Hi=0,Mo=1,md=2,gd=3,yd=4,Dv=5,ns=100,Iv=101,Ov=102,_d=103,vd=104,Fv=200,Nv=201,kv=202,Bv=203,lg=204,ug=205,Uv=206,Hv=207,zv=208,Gv=209,Vv=210,Wv=0,jv=1,Xv=2,Zu=3,Yv=4,qv=5,Zv=6,Jv=7,Ul=0,Kv=1,Qv=2,fs=0,$v=1,eb=2,tb=3,nb=4,ib=5,tf=300,nf=301,rf=302,hg=303,sf=304,_a=306,Hl=307,yr=1e3,Kt=1001,Io=1002,Pt=1003,Gc=1004,Vc=1005,Ot=1006,of=1007,vs=1008,va=1009,rb=1010,sb=1011,Wc=1012,ob=1013,Tc=1014,Fi=1015,jc=1016,ab=1017,cb=1018,lb=1019,Eo=1020,ub=1021,mi=1022,hn=1023,hb=1024,fb=1025,db=hn,ds=1026,Oo=1027,pb=1028,mb=1029,gb=1030,yb=1031,_b=1032,vb=1033,bd=33776,xd=33777,wd=33778,Md=33779,Ed=35840,Sd=35841,Td=35842,Ad=35843,bb=36196,Rd=37492,Ld=37496,xb=37808,wb=37809,Mb=37810,Eb=37811,Sb=37812,Tb=37813,Ab=37814,Rb=37815,Lb=37816,Pb=37817,Cb=37818,Db=37819,Ib=37820,Ob=37821,Fb=36492,Nb=37840,kb=37841,Bb=37842,Ub=37843,Hb=37844,zb=37845,Gb=37846,Vb=37847,Wb=37848,jb=37849,Xb=37850,Yb=37851,qb=37852,Zb=37853,Jb=2200,Kb=2201,Qb=2202,Fo=2300,ps=2301,ru=2302,bs=2400,ss=2401,Xc=2402,af=2500,fg=2501,$b=0,ex=1,Pd=2,sn=3e3,xs=3001,cf=3007,lf=3002,tx=3003,dg=3004,pg=3005,mg=3006,nx=3200,ix=3201,Cr=0,rx=1,su=7680,sx=519,zl=35044,No=35048;function Hn(){}Object.assign(Hn.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e)}}});const Nt=[];for(let e=0;e<256;e++)Nt[e]=(e<16?"0":"")+e.toString(16);let ka=1234567;const De={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[e&255]+Nt[e>>8&255]+Nt[e>>16&255]+Nt[e>>24&255]+"-"+Nt[t&255]+Nt[t>>8&255]+"-"+Nt[t>>16&15|64]+Nt[t>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(ka=e%2147483647),ka=ka*16807%2147483647,(ka-1)/2147483646},degToRad:function(e){return e*De.DEG2RAD},radToDeg:function(e){return e*De.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),p=o((i-t)/2);switch(r){case"XYX":e.set(a*u,c*h,c*d,a*l);break;case"YZY":e.set(c*d,a*u,c*h,a*l);break;case"ZXZ":e.set(c*h,c*d,a*u,a*l);break;case"XZX":e.set(a*u,c*p,c*f,a*l);break;case"YXY":e.set(c*f,a*u,c*p,a*l);break;case"ZYZ":e.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function oe(e=0,t=0){this.x=e,this.y=t}Object.defineProperties(oe.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}});Object.assign(oe.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function $t(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign($t.prototype,{isMatrix3:!0,set:function(e,t,n,i,r,s,o,a,c){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=r,l[5]=a,l[6]=n,l[7]=s,l[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this},extractBasis:function(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},setFromMatrix4:function(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],a=n[6],c=n[1],l=n[4],u=n[7],h=n[2],d=n[5],f=n[8],p=i[0],y=i[3],_=i[6],m=i[1],g=i[4],v=i[7],b=i[2],x=i[5],S=i[8];return r[0]=s*p+o*m+a*b,r[3]=s*y+o*g+a*x,r[6]=s*_+o*v+a*S,r[1]=c*p+l*m+u*b,r[4]=c*y+l*g+u*x,r[7]=c*_+l*v+u*S,r[2]=h*p+d*m+f*b,r[5]=h*y+d*g+f*x,r[8]=h*_+d*v+f*S,this},multiplyScalar:function(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8];return t*s*l-t*o*c-n*r*l+n*o*a+i*r*c-i*s*a},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const n=e.elements,i=this.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],f=d*c-l*h,p=l*u-d*a,y=h*a-c*u,_=r*f+s*p+o*y;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return i[0]=f*m,i[1]=(o*h-d*s)*m,i[2]=(l*s-o*c)*m,i[3]=p*m,i[4]=(d*r-o*u)*m,i[5]=(o*a-l*r)*m,i[6]=y*m,i[7]=(s*u-h*r)*m,i[8]=(c*r-s*a)*m,this},transpose:function(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,n,i,r,s,o){const a=Math.cos(r),c=Math.sin(r);this.set(n*a,n*c,-n*(a*s+c*o)+s+e,-i*c,i*a,-i*(-c*s+a*o)+o+t,0,0,1)},scale:function(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this},rotate:function(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],o=i[6],a=i[1],c=i[4],l=i[7];return i[0]=t*r+n*a,i[3]=t*s+n*c,i[6]=t*o+n*l,i[1]=-n*r+t*a,i[4]=-n*s+t*c,i[7]=-n*o+t*l,this},translate:function(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this},equals:function(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}});let Br;const br={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Br.width=e.width,Br.height=e.height;const n=Br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};let ox=0;function it(e,t,n,i,r,s,o,a,c,l){Object.defineProperty(this,"id",{value:ox++}),this.uuid=De.generateUUID(),this.name="",this.image=e!==void 0?e:it.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:it.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:Kt,this.wrapT=i!==void 0?i:Kt,this.magFilter=r!==void 0?r:Ot,this.minFilter=s!==void 0?s:vs,this.anisotropy=c!==void 0?c:1,this.format=o!==void 0?o:hn,this.internalFormat=null,this.type=a!==void 0?a:va,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:sn,this.version=0,this.onUpdate=null}it.DEFAULT_IMAGE=void 0;it.DEFAULT_MAPPING=tf;it.prototype=Object.assign(Object.create(Hn.prototype),{constructor:it,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=De.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)r.push(br.getDataURL(i[s]))}else r=br.getDataURL(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(it.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Qe(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}Object.defineProperties(Qe.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}});Object.assign(Qe.prototype,{isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){let t,n,i,r;const a=e.elements,c=a[0],l=a[4],u=a[8],h=a[1],d=a[5],f=a[9],p=a[2],y=a[6],_=a[10];if(Math.abs(l-h)<.01&&Math.abs(u-p)<.01&&Math.abs(f-y)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+p)<.1&&Math.abs(f+y)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,v=(d+1)/2,b=(_+1)/2,x=(l+h)/4,S=(u+p)/4,w=(f+y)/4;return g>v&&g>b?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=x/n,r=S/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=x/i,r=w/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=w/r),this.set(n,i,r,t),this}let m=Math.sqrt((y-f)*(y-f)+(u-p)*(u-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(y-f)/m,this.y=(u-p)/m,this.z=(h-l)/m,this.w=Math.acos((c+d+_-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Tn(e,t,n){this.width=e,this.height=t,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t),n=n||{},this.texture=new it(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Tn.prototype=Object.assign(Object.create(Hn.prototype),{constructor:Tn,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Cd(e,t,n){Tn.call(this,e,t,n),this.samples=4}Cd.prototype=Object.assign(Object.create(Tn.prototype),{constructor:Cd,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Tn.prototype.copy.call(this,e),this.samples=e.samples,this}});function At(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}Object.assign(At,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,s,o){let a=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3];const h=r[s+0],d=r[s+1],f=r[s+2],p=r[s+3];if(u!==p||a!==h||c!==d||l!==f){let y=1-o,_=a*h+c*d+l*f+u*p,m=_>=0?1:-1,g=1-_*_;if(g>Number.EPSILON){const b=Math.sqrt(g),x=Math.atan2(b,_*m);y=Math.sin(y*x)/b,o=Math.sin(o*x)/b}const v=o*m;if(a=a*y+h*v,c=c*y+d*v,l=l*y+f*v,u=u*y+p*v,y===1-o){const b=1/Math.sqrt(a*a+c*c+l*l+u*u);a*=b,c*=b,l*=b,u*=b}}e[t]=a,e[t+1]=c,e[t+2]=l,e[t+3]=u},multiplyQuaternionsFlat:function(e,t,n,i,r,s){const o=n[i],a=n[i+1],c=n[i+2],l=n[i+3],u=r[s],h=r[s+1],d=r[s+2],f=r[s+3];return e[t]=o*f+l*u+a*d-c*h,e[t+1]=a*f+l*h+c*u-o*d,e[t+2]=c*f+l*d+o*h-a*u,e[t+3]=l*f-o*u-a*h-c*d,e}});Object.defineProperties(At.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}});Object.assign(At.prototype,{isQuaternion:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e.order,o=Math.cos,a=Math.sin,c=o(n/2),l=o(i/2),u=o(r/2),h=a(n/2),d=a(i/2),f=a(r/2);switch(s){case"XYZ":this._x=h*l*u+c*d*f,this._y=c*d*u-h*l*f,this._z=c*l*f+h*d*u,this._w=c*l*u-h*d*f;break;case"YXZ":this._x=h*l*u+c*d*f,this._y=c*d*u-h*l*f,this._z=c*l*f-h*d*u,this._w=c*l*u+h*d*f;break;case"ZXY":this._x=h*l*u-c*d*f,this._y=c*d*u+h*l*f,this._z=c*l*f+h*d*u,this._w=c*l*u-h*d*f;break;case"ZYX":this._x=h*l*u-c*d*f,this._y=c*d*u+h*l*f,this._z=c*l*f-h*d*u,this._w=c*l*u+h*d*f;break;case"YZX":this._x=h*l*u+c*d*f,this._y=c*d*u+h*l*f,this._z=c*l*f-h*d*u,this._w=c*l*u-h*d*f;break;case"XZY":this._x=h*l*u-c*d*f,this._y=c*d*u-h*l*f,this._z=c*l*f+h*d*u,this._w=c*l*u+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this},setFromRotationMatrix:function(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10],h=n+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-a)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(l-a)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(a+l)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(a+l)/d,this._z=.25*d}return this._onChangeCallback(),this},setFromUnitVectors:function(e,t){let i=e.dot(t)+1;return i<1e-6?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()},angleTo:function(e){return 2*Math.acos(Math.abs(De.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this},identity:function(){return this.set(0,0,0,1)},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,a=t._y,c=t._z,l=t._w;return this._x=n*l+s*o+i*c-r*a,this._y=i*l+s*a+r*o-n*c,this._z=r*l+s*c+n*a-i*o,this._w=s*l-n*o-i*a-r*c,this._onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,h=Math.sin(t*l)/c;return this._w=s*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},fromBufferAttribute:function(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});const ou=new L,Dd=new At;function L(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}Object.assign(L.prototype,{isVector3:!0,set:function(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Dd.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(Dd.setFromAxisAngle(e,t))},applyMatrix3:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this},applyQuaternion:function(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,a=e.w,c=a*t+s*i-o*n,l=a*n+o*t-r*i,u=a*i+r*n-s*t,h=-r*t-s*n-o*i;return this.x=c*a+h*-r+l*-o-u*-s,this.y=l*a+h*-s+u*-r-c*-o,this.z=u*a+h*-o+c*-s-l*-r,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this},cross:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,a=t.z;return this.x=i*a-r*o,this.y=r*s-n*a,this.z=n*o-i*s,this},projectOnVector:function(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)},projectOnPlane:function(e){return ou.copy(this).projectOnVector(e),this.sub(ou)},reflect:function(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(De.clamp(n,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this},setFromMatrixPosition:function(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,t*4)},setFromMatrix3Column:function(e,t){return this.fromArray(e.elements,t*3)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});const Ur=new L,Dn=new Fe,ax=new L(0,0,0),cx=new L(1,1,1),Si=new L,Ba=new L,an=new L;function Fe(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(Fe.prototype,{isMatrix4:!0,set:function(e,t,n,i,r,s,o,a,c,l,u,h,d,f,p,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=a,_[2]=c,_[6]=l,_[10]=u,_[14]=h,_[3]=d,_[7]=f,_[11]=p,_[15]=y,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new Fe().fromArray(this.elements)},copy:function(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this},copyPosition:function(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(e){const t=this.elements,n=e.elements,i=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),s=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=s*l,d=s*u,f=o*l,p=o*u;t[0]=a*l,t[4]=-a*u,t[8]=c,t[1]=d+f*c,t[5]=h-p*c,t[9]=-o*a,t[2]=p-h*c,t[6]=f+d*c,t[10]=s*a}else if(e.order==="YXZ"){const h=a*l,d=a*u,f=c*l,p=c*u;t[0]=h+p*o,t[4]=f*o-d,t[8]=s*c,t[1]=s*u,t[5]=s*l,t[9]=-o,t[2]=d*o-f,t[6]=p+h*o,t[10]=s*a}else if(e.order==="ZXY"){const h=a*l,d=a*u,f=c*l,p=c*u;t[0]=h-p*o,t[4]=-s*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=s*l,t[9]=p-h*o,t[2]=-s*c,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){const h=s*l,d=s*u,f=o*l,p=o*u;t[0]=a*l,t[4]=f*c-d,t[8]=h*c+p,t[1]=a*u,t[5]=p*c+h,t[9]=d*c-f,t[2]=-c,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){const h=s*a,d=s*c,f=o*a,p=o*c;t[0]=a*l,t[4]=p-h*u,t[8]=f*u+d,t[1]=u,t[5]=s*l,t[9]=-o*l,t[2]=-c*l,t[6]=d*u+f,t[10]=h-p*u}else if(e.order==="XZY"){const h=s*a,d=s*c,f=o*a,p=o*c;t[0]=a*l,t[4]=-u,t[8]=c*l,t[1]=h*u+p,t[5]=s*l,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*l,t[10]=p*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(ax,e,cx)},lookAt:function(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(n,an),Si.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(n,an)),Si.normalize(),Ba.crossVectors(an,Si),i[0]=Si.x,i[4]=Ba.x,i[8]=an.x,i[1]=Si.y,i[5]=Ba.y,i[9]=an.y,i[2]=Si.z,i[6]=Ba.z,i[10]=an.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],a=n[8],c=n[12],l=n[1],u=n[5],h=n[9],d=n[13],f=n[2],p=n[6],y=n[10],_=n[14],m=n[3],g=n[7],v=n[11],b=n[15],x=i[0],S=i[4],w=i[8],O=i[12],R=i[1],q=i[5],H=i[9],j=i[13],W=i[2],V=i[6],F=i[10],B=i[14],X=i[3],ne=i[7],ue=i[11],he=i[15];return r[0]=s*x+o*R+a*W+c*X,r[4]=s*S+o*q+a*V+c*ne,r[8]=s*w+o*H+a*F+c*ue,r[12]=s*O+o*j+a*B+c*he,r[1]=l*x+u*R+h*W+d*X,r[5]=l*S+u*q+h*V+d*ne,r[9]=l*w+u*H+h*F+d*ue,r[13]=l*O+u*j+h*B+d*he,r[2]=f*x+p*R+y*W+_*X,r[6]=f*S+p*q+y*V+_*ne,r[10]=f*w+p*H+y*F+_*ue,r[14]=f*O+p*j+y*B+_*he,r[3]=m*x+g*R+v*W+b*X,r[7]=m*S+g*q+v*V+b*ne,r[11]=m*w+g*H+v*F+b*ue,r[15]=m*O+g*j+v*B+b*he,this},multiplyScalar:function(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},determinant:function(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],a=e[9],c=e[13],l=e[2],u=e[6],h=e[10],d=e[14],f=e[3],p=e[7],y=e[11],_=e[15];return f*(+r*a*u-i*c*u-r*o*h+n*c*h+i*o*d-n*a*d)+p*(+t*a*d-t*c*h+r*s*h-i*s*d+i*c*l-r*a*l)+y*(+t*c*u-t*o*d-r*s*u+n*s*d+r*o*l-n*c*l)+_*(-i*o*l-t*a*u+t*o*h+i*s*u-n*s*h+n*a*l)},transpose:function(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const n=this.elements,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],p=i[10],y=i[11],_=i[12],m=i[13],g=i[14],v=i[15],b=f*g*h-m*p*h+m*u*y-l*g*y-f*u*v+l*p*v,x=_*p*h-d*g*h-_*u*y+c*g*y+d*u*v-c*p*v,S=d*m*h-_*f*h+_*l*y-c*m*y-d*l*v+c*f*v,w=_*f*u-d*m*u-_*l*p+c*m*p+d*l*g-c*f*g,O=r*b+s*x+o*S+a*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/O;return n[0]=b*R,n[1]=(m*p*a-f*g*a-m*o*y+s*g*y+f*o*v-s*p*v)*R,n[2]=(l*g*a-m*u*a+m*o*h-s*g*h-l*o*v+s*u*v)*R,n[3]=(f*u*a-l*p*a-f*o*h+s*p*h+l*o*y-s*u*y)*R,n[4]=x*R,n[5]=(d*g*a-_*p*a+_*o*y-r*g*y-d*o*v+r*p*v)*R,n[6]=(_*u*a-c*g*a-_*o*h+r*g*h+c*o*v-r*u*v)*R,n[7]=(c*p*a-d*u*a+d*o*h-r*p*h-c*o*y+r*u*y)*R,n[8]=S*R,n[9]=(_*f*a-d*m*a-_*s*y+r*m*y+d*s*v-r*f*v)*R,n[10]=(c*m*a-_*l*a+_*s*h-r*m*h-c*s*v+r*l*v)*R,n[11]=(d*l*a-c*f*a-d*s*h+r*f*h+c*s*y-r*l*y)*R,n[12]=w*R,n[13]=(d*m*o-_*f*o+_*s*p-r*m*p-d*s*g+r*f*g)*R,n[14]=(_*l*o-c*m*o-_*s*u+r*m*u+c*s*g-r*l*g)*R,n[15]=(c*f*o-d*l*o+d*s*u-r*f*u-c*s*p+r*l*p)*R,this},scale:function(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,a=e.z,c=r*s,l=r*o;return this.set(c*s+n,c*o-i*a,c*a+i*o,0,c*o+i*a,l*o+n,l*a-i*s,0,c*a-i*o,l*a+i*s,r*a*a+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,a=t._w,c=r+r,l=s+s,u=o+o,h=r*c,d=r*l,f=r*u,p=s*l,y=s*u,_=o*u,m=a*c,g=a*l,v=a*u,b=n.x,x=n.y,S=n.z;return i[0]=(1-(p+_))*b,i[1]=(d+v)*b,i[2]=(f-g)*b,i[3]=0,i[4]=(d-v)*x,i[5]=(1-(h+_))*x,i[6]=(y+m)*x,i[7]=0,i[8]=(f+g)*S,i[9]=(y-m)*S,i[10]=(1-(h+p))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},decompose:function(e,t,n){const i=this.elements;let r=Ur.set(i[0],i[1],i[2]).length(),s=Ur.set(i[4],i[5],i[6]).length(),o=Ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);const c=1/r,l=1/s,u=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=l,Dn.elements[5]*=l,Dn.elements[6]*=l,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=r,n.y=s,n.z=o,this},makePerspective:function(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,a=2*r/(t-e),c=2*r/(n-i),l=(t+e)/(t-e),u=(n+i)/(n-i),h=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=a,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(e,t,n,i,r,s){const o=this.elements,a=1/(t-e),c=1/(n-i),l=1/(s-r),u=(t+e)*a,h=(n+i)*c,d=(s+r)*l;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}});const Id=new Fe,Od=new At;function Dr(e=0,t=0,n=0,i=Dr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}Dr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];Dr.DefaultOrder="XYZ";Object.defineProperties(Dr.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}});Object.assign(Dr.prototype,{isEuler:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){const i=De.clamp,r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,n){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,t,n)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return Od.setFromEuler(this),this.setFromQuaternion(Od,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});function uf(){this.mask=1}Object.assign(uf.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},disableAll:function(){this.mask=0},test:function(e){return(this.mask&e.mask)!==0}});let lx=0;const Fd=new L,Hr=new At,ci=new Fe,Ua=new L,ro=new L,ux=new L,hx=new At,Nd=new L(1,0,0),kd=new L(0,1,0),Bd=new L(0,0,1),fx={type:"added"},dx={type:"removed"};function pe(){Object.defineProperty(this,"id",{value:lx++}),this.uuid=De.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DefaultUp.clone();const e=new L,t=new Dr,n=new At,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new $t}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=pe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}pe.DefaultUp=new L(0,1,0);pe.DefaultMatrixAutoUpdate=!0;pe.prototype=Object.assign(Object.create(Hn.prototype),{constructor:pe,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this},rotateOnWorldAxis:function(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this},rotateX:function(e){return this.rotateOnAxis(Nd,e)},rotateY:function(e){return this.rotateOnAxis(kd,e)},rotateZ:function(e){return this.rotateOnAxis(Bd,e)},translateOnAxis:function(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(Nd,e)},translateY:function(e){return this.translateOnAxis(kd,e)},translateZ:function(e){return this.translateOnAxis(Bd,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(ci.getInverse(this.matrixWorld))},lookAt:function(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ro,Ua,this.up):ci.lookAt(Ua,ro,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(ci),this.quaternion.premultiply(Hr.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),ci.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new L),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new At),this.updateMatrixWorld(!0),this.matrixWorld.decompose(ro,e,ux),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new L),this.updateMatrixWorld(!0),this.matrixWorld.decompose(ro,hx,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new L),this.updateMatrixWorld(!0);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(e.shapes,u)}else r(e.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(e.materials,this.material[a]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(t){const o=s(e.geometries),a=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}});function ko(){pe.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}ko.prototype=Object.assign(Object.create(pe.prototype),{constructor:ko,isScene:!0,copy:function(e,t){return pe.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){const t=pe.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:"dispose"})}});const li=[new L,new L,new L,new L,new L,new L,new L,new L],so=new L,au=new zn,zr=new L,Gr=new L,Vr=new L,Ti=new L,Ai=new L,tr=new L,oo=new L,Ha=new L,za=new L,nr=new L;function zn(e,t){this.min=e!==void 0?e:new L(1/0,1/0,1/0),this.max=t!==void 0?t:new L(-1/0,-1/0,-1/0)}Object.assign(zn.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let a=0,c=e.length;a<c;a+=3){const l=e[a],u=e[a+1],h=e[a+2];l<t&&(t=l),u<n&&(n=u),h<i&&(i=h),l>r&&(r=l),u>s&&(s=u),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,s,o),this},setFromBufferAttribute:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let a=0,c=e.count;a<c;a++){const l=e.getX(a),u=e.getY(a),h=e.getZ(a);l<t&&(t=l),u<n&&(n=u),h<i&&(i=h),l>r&&(r=l),u>s&&(s=u),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,s,o),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){const n=so.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),au.copy(t.boundingBox),au.applyMatrix4(e.matrixWorld),this.union(au));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new L),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,so),so.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(oo),Ha.subVectors(this.max,oo),zr.subVectors(e.a,oo),Gr.subVectors(e.b,oo),Vr.subVectors(e.c,oo),Ti.subVectors(Gr,zr),Ai.subVectors(Vr,Gr),tr.subVectors(zr,Vr);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-tr.z,tr.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,tr.z,0,-tr.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-tr.y,tr.x,0];return!cu(t,zr,Gr,Vr,Ha)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,zr,Gr,Vr,Ha))?!1:(za.crossVectors(Ti,Ai),t=[za.x,za.y,za.z],cu(t,zr,Gr,Vr,Ha))},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new L),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return so.copy(e).clamp(this.min,this.max).sub(e).length()},getBoundingSphere:function(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(so).length()*.5,e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function cu(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){nr.fromArray(e,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=t.dot(nr),l=n.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const px=new zn;function ai(e,t){this.center=e!==void 0?e:new L,this.radius=t!==void 0?t:-1}Object.assign(ai.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){const n=this.center;t!==void 0?n.copy(t):px.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new L),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new zn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}});const ui=new L,lu=new L,Ga=new L,Ri=new L,uu=new L,Va=new L,hu=new L;function qs(e,t){this.origin=e!==void 0?e:new L,this.direction=t!==void 0?t:new L(0,0,-1)}Object.assign(qs.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new L),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,ui)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new L),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.direction).multiplyScalar(t).add(this.origin),ui.distanceToSquared(e))},distanceSqToSegment:function(e,t,n,i){lu.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(lu);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ga),o=Ri.dot(this.direction),a=-Ri.dot(Ga),c=Ri.lengthSq(),l=Math.abs(1-s*s);let u,h,d,f;if(l>0)if(u=s*a-o,h=s*o-a,f=r*l,u>=0)if(h>=-f)if(h<=f){const p=1/l;u*=p,h*=p,d=u*(u+s*h+2*o)+h*(s*u+h+2*a)+c}else h=r,u=Math.max(0,-(s*h+o)),d=-u*u+h*(h+2*a)+c;else h=-r,u=Math.max(0,-(s*h+o)),d=-u*u+h*(h+2*a)+c;else h<=-f?(u=Math.max(0,-(-s*r+o)),h=u>0?-r:Math.min(Math.max(-r,-a),r),d=-u*u+h*(h+2*a)+c):h<=f?(u=0,h=Math.min(Math.max(-r,-a),r),d=h*(h+2*a)+c):(u=Math.max(0,-(s*r+o)),h=u>0?r:Math.min(Math.max(-r,-a),r),d=-u*u+h*(h+2*a)+c);else h=s>0?-r:r,u=Math.max(0,-(s*h+o)),d=-u*u+h*(h+2*a)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ga).multiplyScalar(h).add(lu),d},intersectSphere:function(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,a=n+s;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null},intersectPlane:function(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)},intersectsPlane:function(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0},intersectBox:function(e,t){let n,i,r,s,o,a;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),l>=0?(r=(e.min.y-h.y)*l,s=(e.max.y-h.y)*l):(r=(e.max.y-h.y)*l,s=(e.min.y-h.y)*l),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),u>=0?(o=(e.min.z-h.z)*u,a=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,a=(e.min.z-h.z)*u),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)},intersectsBox:function(e){return this.intersectBox(e,ui)!==null},intersectTriangle:function(e,t,n,i,r){uu.subVectors(t,e),Va.subVectors(n,e),hu.crossVectors(uu,Va);let s=this.direction.dot(hu),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ri.subVectors(this.origin,e);const a=o*this.direction.dot(Va.crossVectors(Ri,Va));if(a<0)return null;const c=o*this.direction.dot(uu.cross(Ri));if(c<0||a+c>s)return null;const l=-o*Ri.dot(hu);return l<0?null:this.at(l/s,r)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}});const fu=new L,mx=new L,gx=new $t;function Zn(e,t){this.normal=e!==void 0?e:new L(1,0,0),this.constant=t!==void 0?t:0}Object.assign(Zn.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,n){const i=fu.subVectors(n,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new L),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new L);const n=e.delta(fu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const r=-(e.start.dot(this.normal)+this.constant)/i;if(!(r<0||r>1))return t.copy(n).multiplyScalar(r).add(e.start)},intersectsLine:function(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){const n=t||gx.getNormalMatrix(e),i=this.coplanarPoint(fu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}});const Fn=new L,di=new L,du=new L,hi=new L,Wr=new L,jr=new L,Ud=new L,pu=new L,mu=new L,gu=new L;function Bt(e,t,n){this.a=e!==void 0?e:new L,this.b=t!==void 0?t:new L,this.c=n!==void 0?n:new L}Object.assign(Bt,{getNormal:function(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new L),i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)},getBarycoord:function(e,t,n,i,r){Fn.subVectors(i,t),di.subVectors(n,t),du.subVectors(e,t);const s=Fn.dot(Fn),o=Fn.dot(di),a=Fn.dot(du),c=di.dot(di),l=di.dot(du),u=s*c-o*o;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new L),u===0)return r.set(-2,-1,-1);const h=1/u,d=(c*a-o*l)*h,f=(s*l-o*a)*h;return r.set(1-d-f,f,d)},containsPoint:function(e,t,n,i){return Bt.getBarycoord(e,t,n,i,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1},getUV:function(e,t,n,i,r,s,o,a){return this.getBarycoord(e,t,n,i,hi),a.set(0,0),a.addScaledVector(r,hi.x),a.addScaledVector(s,hi.y),a.addScaledVector(o,hi.z),a},isFrontFacing:function(e,t,n,i){return Fn.subVectors(n,t),di.subVectors(e,t),Fn.cross(di).dot(i)<0}});Object.assign(Bt.prototype,{set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return Fn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Fn.cross(di).length()*.5},getMidpoint:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return Bt.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Zn),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,n,i,r){return Bt.getUV(e,this.a,this.b,this.c,t,n,i,r)},containsPoint:function(e){return Bt.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new L);const n=this.a,i=this.b,r=this.c;let s,o;Wr.subVectors(i,n),jr.subVectors(r,n),pu.subVectors(e,n);const a=Wr.dot(pu),c=jr.dot(pu);if(a<=0&&c<=0)return t.copy(n);mu.subVectors(e,i);const l=Wr.dot(mu),u=jr.dot(mu);if(l>=0&&u<=l)return t.copy(i);const h=a*u-l*c;if(h<=0&&a>=0&&l<=0)return s=a/(a-l),t.copy(n).addScaledVector(Wr,s);gu.subVectors(e,r);const d=Wr.dot(gu),f=jr.dot(gu);if(f>=0&&d<=f)return t.copy(r);const p=d*c-a*f;if(p<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(jr,o);const y=l*f-d*u;if(y<=0&&u-l>=0&&d-f>=0)return Ud.subVectors(r,i),o=(u-l)/(u-l+(d-f)),t.copy(i).addScaledVector(Ud,o);const _=1/(y+p+h);return s=p*_,o=h*_,t.copy(n).addScaledVector(Wr,s).addScaledVector(jr,o)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}});const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function de(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}function yu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function _u(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function vu(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}Object.assign(de.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(e,t,n){if(e=De.euclideanModulo(e,1),t=De.clamp(t,0,1),n=De.clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=yu(r,i,e+1/3),this.g=yu(r,i,e),this.b=yu(r,i,e-1/3)}return this},setStyle:function(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let i;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)){const o=parseFloat(i[1])/360,a=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(o,a,c)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this},setColorName:function(e){const t=gg[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=_u(e.r),this.g=_u(e.g),this.b=_u(e.b),this},copyLinearToSRGB:function(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),s=Math.min(t,n,i);let o,a;const c=(s+r)/2;if(s===r)o=0,a=0;else{const l=r-s;switch(a=c<=.5?l/(r+s):l/(2-r-s),r){case t:o=(n-i)/l+(n<i?6:0);break;case n:o=(i-t)/l+2;break;case i:o=(t-n)/l+4;break}o/=6}return e.h=o,e.s=a,e.l=c,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,n){return this.getHSL(In),In.h+=e,In.s+=t,In.l+=n,this.setHSL(In.h,In.s,In.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(In),e.getHSL(Wa);const n=De.lerp(In.h,Wa.h,t),i=De.lerp(In.s,Wa.s,t),r=De.lerp(In.l,Wa.l,t);return this.setHSL(n,i,r),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},fromBufferAttribute:function(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});de.NAMES=gg;function Yc(e,t,n,i,r,s){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new L,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new de,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=s!==void 0?s:0}Object.assign(Yc.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});let yx=0;function Le(){Object.defineProperty(this,"id",{value:yx++}),this.uuid=De.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Mo,this.side=Xs,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lg,this.blendDst=ug,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=su,this.stencilZFail=su,this.stencilZPass=su,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Le.prototype=Object.assign(Object.create(Hn.prototype),{constructor:Le,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===cg;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Xs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Le.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Wt(e){Le.call(this),this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}Wt.prototype=Object.create(Le.prototype);Wt.prototype.constructor=Wt;Wt.prototype.isMeshBasicMaterial=!0;Wt.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};const rt=new L,ja=new oe;function Re(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Re.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Re.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new de),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this},copyVector2sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new oe),t[n++]=s.x,t[n++]=s.y}return this},copyVector3sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new L),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this},copyVector4sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Qe),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Ju(e,t,n){Re.call(this,new Int8Array(e),t,n)}Ju.prototype=Object.create(Re.prototype);Ju.prototype.constructor=Ju;function Ku(e,t,n){Re.call(this,new Uint8Array(e),t,n)}Ku.prototype=Object.create(Re.prototype);Ku.prototype.constructor=Ku;function Qu(e,t,n){Re.call(this,new Uint8ClampedArray(e),t,n)}Qu.prototype=Object.create(Re.prototype);Qu.prototype.constructor=Qu;function $u(e,t,n){Re.call(this,new Int16Array(e),t,n)}$u.prototype=Object.create(Re.prototype);$u.prototype.constructor=$u;function Bo(e,t,n){Re.call(this,new Uint16Array(e),t,n)}Bo.prototype=Object.create(Re.prototype);Bo.prototype.constructor=Bo;function eh(e,t,n){Re.call(this,new Int32Array(e),t,n)}eh.prototype=Object.create(Re.prototype);eh.prototype.constructor=eh;function Uo(e,t,n){Re.call(this,new Uint32Array(e),t,n)}Uo.prototype=Object.create(Re.prototype);Uo.prototype.constructor=Uo;function ge(e,t,n){Re.call(this,new Float32Array(e),t,n)}ge.prototype=Object.create(Re.prototype);ge.prototype.constructor=ge;function th(e,t,n){Re.call(this,new Float64Array(e),t,n)}th.prototype=Object.create(Re.prototype);th.prototype.constructor=th;function yg(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(yg.prototype,{computeGroups:function(e){const t=[];let n,i,r;const s=e.faces;for(i=0;i<s.length;i++){const o=s[i];o.materialIndex!==r&&(r=o.materialIndex,n!==void 0&&(n.count=i*3-n.start,t.push(n)),n={start:i*3,materialIndex:r})}n!==void 0&&(n.count=i*3-n.start,t.push(n)),this.groups=t},fromGeometry:function(e){const t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,s=i[1]&&i[1].length>0,o=e.morphTargets,a=o.length;let c;if(a>0){c=[];for(let _=0;_<a;_++)c[_]={name:o[_].name,data:[]};this.morphTargets.position=c}const l=e.morphNormals,u=l.length;let h;if(u>0){h=[];for(let _=0;_<u;_++)h[_]={name:l[_].name,data:[]};this.morphTargets.normal=h}const d=e.skinIndices,f=e.skinWeights,p=d.length===n.length,y=f.length===n.length;n.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let _=0;_<t.length;_++){const m=t[_];this.vertices.push(n[m.a],n[m.b],n[m.c]);const g=m.vertexNormals;if(g.length===3)this.normals.push(g[0],g[1],g[2]);else{const b=m.normal;this.normals.push(b,b,b)}const v=m.vertexColors;if(v.length===3)this.colors.push(v[0],v[1],v[2]);else{const b=m.color;this.colors.push(b,b,b)}if(r===!0){const b=i[0][_];b!==void 0?this.uvs.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",_),this.uvs.push(new oe,new oe,new oe))}if(s===!0){const b=i[1][_];b!==void 0?this.uvs2.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",_),this.uvs2.push(new oe,new oe,new oe))}for(let b=0;b<a;b++){const x=o[b].vertices;c[b].data.push(x[m.a],x[m.b],x[m.c])}for(let b=0;b<u;b++){const x=l[b].vertexNormals[_];h[b].data.push(x.a,x.b,x.c)}p&&this.skinIndices.push(d[m.a],d[m.b],d[m.c]),y&&this.skinWeights.push(f[m.a],f[m.b],f[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}});function _g(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}let _x=1;const Vn=new Fe,bu=new pe,Xr=new L,cn=new zn,ao=new zn,Dt=new L;function be(){Object.defineProperty(this,"id",{value:_x+=2}),this.uuid=De.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}be.prototype=Object.assign(Object.create(Hn.prototype),{constructor:be,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(_g(e)>65535?Uo:Bo)(e,1):this.index=e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this},rotateY:function(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this},rotateZ:function(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this},translate:function(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this},scale:function(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this},lookAt:function(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this},setFromObject:function(e){const t=e.geometry;if(e.isPoints||e.isLine){const n=new ge(t.vertices.length*3,3),i=new ge(t.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(t.vertices)),this.setAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){const r=new ge(t.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}if(t.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(t.vertices),n.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(t.normals),n.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(t.colors),n.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(t.uvs),n.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(t.lineDistances),n.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new yg().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){const t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new Re(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){const n=new Float32Array(e.normals.length*3);this.setAttribute("normal",new Re(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){const n=new Float32Array(e.colors.length*3);this.setAttribute("color",new Re(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){const n=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new Re(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){const n=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new Re(n,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(const n in e.morphTargets){const i=[],r=e.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new ge(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(e.skinIndices.length>0){const n=new ge(e.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){const n=new ge(e.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ao.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(cn.min,ao.min),cn.expandByPoint(Dt),Dt.addVectors(cn.max,ao.max),cn.expandByPoint(Dt)):(cn.expandByPoint(ao.min),cn.expandByPoint(ao.max))}cn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Dt.fromBufferAttribute(o,c),a&&(Xr.fromBufferAttribute(e,c),Dt.add(Xr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new L,r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const f=e.getX(h+0),p=e.getX(h+1),y=e.getX(h+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,o=e.attributes[i],a=o.array,c=o.itemSize*t,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)},toNonIndexed:function(){function e(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let d=0,f=0;for(let p=0,y=a.length;p<y;p++){d=a[p]*l;for(let _=0;_<l;_++)h[f++]=c[d++]}return new Re(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const t=new be,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=e(a,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],d=e(h,n);a.push(d)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t},toJSON:function(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(e.data);c.name!==""&&(l.name=c.name),e.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=d.toJSON(e.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e},clone:function(){return new be().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Hd=new Fe,ir=new qs,xu=new ai,Li=new L,Pi=new L,Ci=new L,wu=new L,Mu=new L,Eu=new L,Xa=new L,Ya=new L,qa=new L,os=new oe,as=new oe,cs=new oe,So=new L,Za=new L;function nt(e,t){pe.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new be,this.material=t!==void 0?t:new Wt,this.updateMorphTargets()}nt.prototype=Object.assign(Object.create(pe.prototype),{constructor:nt,isMesh:!0,copy:function(e){return pe.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xu.copy(n.boundingSphere),xu.applyMatrix4(r),e.ray.intersectsSphere(xu)===!1)||(Hd.getInverse(r),ir.copy(e.ray).applyMatrix4(Hd),n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const _=d[p],m=i[_.materialIndex],g=Math.max(_.start,f.start),v=Math.min(_.start+_.count,f.start+f.count);for(let b=g,x=v;b<x;b+=3){const S=o.getX(b),w=o.getX(b+1),O=o.getX(b+2);s=Ja(this,m,e,ir,a,c,l,u,h,S,w,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let _=p,m=y;_<m;_+=3){const g=o.getX(_),v=o.getX(_+1),b=o.getX(_+2);s=Ja(this,i,e,ir,a,c,l,u,h,g,v,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const _=d[p],m=i[_.materialIndex],g=Math.max(_.start,f.start),v=Math.min(_.start+_.count,f.start+f.count);for(let b=g,x=v;b<x;b+=3){const S=b,w=b+1,O=b+2;s=Ja(this,m,e,ir,a,c,l,u,h,S,w,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let _=p,m=y;_<m;_+=3){const g=_,v=_+1,b=_+2;s=Ja(this,i,e,ir,a,c,l,u,h,g,v,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const u=n.faceVertexUvs[0];u.length>0&&(l=u);for(let h=0,d=c.length;h<d;h++){const f=c[h],p=o?i[f.materialIndex]:i;if(p===void 0)continue;const y=a[f.a],_=a[f.b],m=a[f.c];if(s=vg(this,p,e,ir,y,_,m,So),s){if(l&&l[h]){const g=l[h];os.copy(g[0]),as.copy(g[1]),cs.copy(g[2]),s.uv=Bt.getUV(So,y,_,m,os,as,cs,new oe)}s.face=f,s.faceIndex=h,t.push(s)}}}}});function vg(e,t,n,i,r,s,o,a){let c;if(t.side===It?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side!==Ys,a),c===null)return null;Za.copy(a),Za.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Za);return l<n.near||l>n.far?null:{distance:l,point:Za.clone(),object:e}}function Ja(e,t,n,i,r,s,o,a,c,l,u,h){Li.fromBufferAttribute(r,l),Pi.fromBufferAttribute(r,u),Ci.fromBufferAttribute(r,h);const d=e.morphTargetInfluences;if(t.morphTargets&&s&&d){Xa.set(0,0,0),Ya.set(0,0,0),qa.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const _=d[p],m=s[p];_!==0&&(wu.fromBufferAttribute(m,l),Mu.fromBufferAttribute(m,u),Eu.fromBufferAttribute(m,h),o?(Xa.addScaledVector(wu,_),Ya.addScaledVector(Mu,_),qa.addScaledVector(Eu,_)):(Xa.addScaledVector(wu.sub(Li),_),Ya.addScaledVector(Mu.sub(Pi),_),qa.addScaledVector(Eu.sub(Ci),_)))}Li.add(Xa),Pi.add(Ya),Ci.add(qa)}e.isSkinnedMesh&&(e.boneTransform(l,Li),e.boneTransform(u,Pi),e.boneTransform(h,Ci));const f=vg(e,t,n,i,Li,Pi,Ci,So);if(f){a&&(os.fromBufferAttribute(a,l),as.fromBufferAttribute(a,u),cs.fromBufferAttribute(a,h),f.uv=Bt.getUV(So,Li,Pi,Ci,os,as,cs,new oe)),c&&(os.fromBufferAttribute(c,l),as.fromBufferAttribute(c,u),cs.fromBufferAttribute(c,h),f.uv2=Bt.getUV(So,Li,Pi,Ci,os,as,cs,new oe));const p=new Yc(l,u,h);Bt.getNormal(Li,Pi,Ci,p.normal),f.face=p}return f}let vx=0;const Wn=new Fe,Su=new pe,Ka=new L;function Ce(){Object.defineProperty(this,"id",{value:vx+=2}),this.uuid=De.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Ce.prototype=Object.assign(Object.create(Hn.prototype),{constructor:Ce,isGeometry:!0,applyMatrix4:function(e){const t=new $t().getNormalMatrix(e);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(e);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this},rotateY:function(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this},rotateZ:function(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this},translate:function(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this},scale:function(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this},lookAt:function(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this},fromBufferGeometry:function(e){const t=this,n=e.index!==null?e.index:void 0,i=e.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)t.vertices.push(new L().fromBufferAttribute(r,h)),o!==void 0&&t.colors.push(new de().fromBufferAttribute(o,h));function l(h,d,f,p){const y=o===void 0?[]:[t.colors[h].clone(),t.colors[d].clone(),t.colors[f].clone()],_=s===void 0?[]:[new L().fromBufferAttribute(s,h),new L().fromBufferAttribute(s,d),new L().fromBufferAttribute(s,f)],m=new Yc(h,d,f,_,y,p);t.faces.push(m),a!==void 0&&t.faceVertexUvs[0].push([new oe().fromBufferAttribute(a,h),new oe().fromBufferAttribute(a,d),new oe().fromBufferAttribute(a,f)]),c!==void 0&&t.faceVertexUvs[1].push([new oe().fromBufferAttribute(c,h),new oe().fromBufferAttribute(c,d),new oe().fromBufferAttribute(c,f)])}const u=e.groups;if(u.length>0)for(let h=0;h<u.length;h++){const d=u[h],f=d.start,p=d.count;for(let y=f,_=f+p;y<_;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),d.materialIndex):l(y,y+1,y+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ka).negate(),this.translate(Ka.x,Ka.y,Ka.z),this},normalize:function(){this.computeBoundingSphere();const e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new Fe;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const e=new L,t=new L;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];e.subVectors(a,o),t.subVectors(s,o),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);const t=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)t[n]=new L;if(e){const n=new L,i=new L;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),t[o.a].add(n),t[o.b].add(n),t[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];t[r.a].add(r.normal),t[r.b].add(r.normal),t[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)t[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(t[r.a]),s[1].copy(t[r.b]),s[2].copy(t[r.c])):(s[0]=t[r.a].clone(),s[1]=t[r.b].clone(),s[2]=t[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){const n=this.faces[e],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const e=new Ce;e.faces=this.faces;for(let t=0,n=this.morphTargets.length;t<n;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];const r=this.morphNormals[t].faceNormals,s=this.morphNormals[t].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new L,l={a:new L,b:new L,c:new L};r.push(c),s.push(l)}}const i=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new zn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let i,r=this.vertices.length,s=this.vertices,o=e.vertices,a=this.faces,c=e.faces,l=this.colors,u=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new $t().getNormalMatrix(t));for(let h=0,d=o.length;h<d;h++){const p=o[h].clone();t!==void 0&&p.applyMatrix4(t),s.push(p)}for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone());for(let h=0,d=c.length;h<d;h++){let f=c[h],p,y,_,m=f.vertexNormals,g=f.vertexColors;p=new Yc(f.a+r,f.b+r,f.c+r),p.normal.copy(f.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let v=0,b=m.length;v<b;v++)y=m[v].clone(),i!==void 0&&y.applyMatrix3(i).normalize(),p.vertexNormals.push(y);p.color.copy(f.color);for(let v=0,b=g.length;v<b;v++)_=g[v],p.vertexColors.push(_.clone());p.materialIndex=f.materialIndex+n,a.push(p)}for(let h=0,d=e.faceVertexUvs.length;h<d;h++){const f=e.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=f.length;p<y;p++){const _=f[p],m=[];for(let g=0,v=_.length;g<v;g++)m.push(_[g].clone());this.faceVertexUvs[h].push(m)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){const e={},t=[],n=[],r=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],u=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[u]===void 0?(e[u]=a,t.push(this.vertices[a]),n[a]=t.length-1):n[a]=n[e[u]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];const u=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(u[h]===u[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,u=this.faceVertexUvs.length;l<u;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-t.length;return this.vertices=t,o},setFromPoints:function(e){this.vertices=[];for(let t=0,n=e.length;t<n;t++){const i=e[t];this.vertices.push(new L(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}e.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===t&&(s=[]),r&&r.length===t&&(o=[]);for(let a=0;a<t;a++){const c=e[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}const t=[];for(let f=0;f<this.vertices.length;f++){const p=this.vertices[f];t.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let f=0;f<this.faces.length;f++){const p=this.faces[f],y=!0,_=!1,m=this.faceVertexUvs[0][f]!==void 0,g=p.normal.length()>0,v=p.vertexNormals.length>0,b=p.color.r!==1||p.color.g!==1||p.color.b!==1,x=p.vertexColors.length>0;let S=0;if(S=l(S,0,0),S=l(S,1,y),S=l(S,2,_),S=l(S,3,m),S=l(S,4,g),S=l(S,5,v),S=l(S,6,b),S=l(S,7,x),n.push(S),n.push(p.a,p.b,p.c),n.push(p.materialIndex),m){const w=this.faceVertexUvs[0][f];n.push(d(w[0]),d(w[1]),d(w[2]))}if(g&&n.push(u(p.normal)),v){const w=p.vertexNormals;n.push(u(w[0]),u(w[1]),u(w[2]))}if(b&&n.push(h(p.color)),x){const w=p.vertexColors;n.push(h(w[0]),h(w[1]),h(w[2]))}}function l(f,p,y){return y?f|1<<p:f&~(1<<p)}function u(f){const p=f.x.toString()+f.y.toString()+f.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(f.x,f.y,f.z)),r[p]}function h(f){const p=f.r.toString()+f.g.toString()+f.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(f.getHex())),o[p]}function d(f){const p=f.x.toString()+f.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(f.x,f.y)),c[p]}return e.data={},e.data.vertices=t,e.data.normals=i,s.length>0&&(e.data.colors=s),a.length>0&&(e.data.uvs=[a]),e.data.faces=n,e},clone:function(){return new Ce().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;const t=e.vertices;for(let h=0,d=t.length;h<d;h++)this.vertices.push(t[h].clone());const n=e.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=e.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=e.faceVertexUvs.length;h<d;h++){const f=e.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=f.length;p<y;p++){const _=f[p],m=[];for(let g=0,v=_.length;g<v;g++){const b=_[g];m.push(b.clone())}this.faceVertexUvs[h].push(m)}}const r=e.morphTargets;for(let h=0,d=r.length;h<d;h++){const f={};if(f.name=r[h].name,r[h].vertices!==void 0){f.vertices=[];for(let p=0,y=r[h].vertices.length;p<y;p++)f.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){f.normals=[];for(let p=0,y=r[h].normals.length;p<y;p++)f.normals.push(r[h].normals[p].clone())}this.morphTargets.push(f)}const s=e.morphNormals;for(let h=0,d=s.length;h<d;h++){const f={};if(s[h].vertexNormals!==void 0){f.vertexNormals=[];for(let p=0,y=s[h].vertexNormals.length;p<y;p++){const _=s[h].vertexNormals[p],m={};m.a=_.a.clone(),m.b=_.b.clone(),m.c=_.c.clone(),f.vertexNormals.push(m)}}if(s[h].faceNormals!==void 0){f.faceNormals=[];for(let p=0,y=s[h].faceNormals.length;p<y;p++)f.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(f)}const o=e.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=e.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const c=e.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class bx extends Ce{constructor(t,n,i,r,s,o){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o},this.fromBufferGeometry(new xr(t,n,i,r,s,o)),this.mergeVertices()}}class xr extends be{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,n,t,o,s,0),p("z","y","x",1,-1,i,n,-t,o,s,1),p("x","z","y",1,1,t,i,n,r,o,2),p("x","z","y",1,-1,t,i,-n,r,o,3),p("x","y","z",1,-1,t,n,i,r,s,4),p("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(h,2));function p(y,_,m,g,v,b,x,S,w,O,R){const q=b/w,H=x/O,j=b/2,W=x/2,V=S/2,F=w+1,B=O+1;let X=0,ne=0;const ue=new L;for(let he=0;he<B;he++){const ce=he*H-W;for(let Me=0;Me<F;Me++){const _e=Me*q-j;ue[y]=_e*g,ue[_]=ce*v,ue[m]=V,l.push(ue.x,ue.y,ue.z),ue[y]=0,ue[_]=0,ue[m]=S>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Me/w),h.push(1-he/O),X+=1}}for(let he=0;he<O;he++)for(let ce=0;ce<w;ce++){const Me=d+ce+F*he,_e=d+ce+F*(he+1),Ie=d+(ce+1)+F*(he+1),T=d+(ce+1)+F*he;c.push(Me,_e,T),c.push(_e,Ie,T),ne+=6}a.addGroup(f,ne,R),f+=ne,d+=X}}}function ws(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Gt(e){const t={};for(let n=0;n<e.length;n++){const i=ws(e[n]);for(const r in i)t[r]=i[r]}return t}const xx={clone:ws,merge:Gt};var wx=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Mx=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;function en(e){Le.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=wx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}en.prototype=Object.create(Le.prototype);en.prototype.constructor=en;en.prototype.isShaderMaterial=!0;en.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this};en.prototype.toJSON=function(e){const t=Le.prototype.toJSON.call(this,e);t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function gi(){pe.call(this),this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}gi.prototype=Object.assign(Object.create(pe.prototype),{constructor:gi,isCamera:!0,copy:function(e,t){return pe.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new L),this.updateMatrixWorld(!0);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){pe.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){pe.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function vt(e,t,n,i){gi.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}vt.prototype=Object.assign(Object.create(gi.prototype),{constructor:vt,isPerspectiveCamera:!0,copy:function(e,t){return gi.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){const t=.5*this.getFilmHeight()/e;this.fov=De.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){const e=Math.tan(De.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return De.RAD2DEG*2*Math.atan(Math.tan(De.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=this.near,t=e*Math.tan(De.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=pe.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});const Yr=90,qr=1;function Ho(e,t,n){if(pe.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new vt(Yr,qr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const r=new vt(Yr,qr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const s=new vt(Yr,qr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new L(0,1,0)),this.add(s);const o=new vt(Yr,qr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const a=new vt(Yr,qr,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new L(0,0,1)),this.add(a);const c=new vt(Yr,qr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(u,i),l.setRenderTarget(n,1),l.render(u,r),l.setRenderTarget(n,2),l.render(u,s),l.setRenderTarget(n,3),l.render(u,o),l.setRenderTarget(n,4),l.render(u,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(u,c),l.setRenderTarget(d),l.xr.enabled=h},this.clear=function(l,u,h,d){const f=l.getRenderTarget();for(let p=0;p<6;p++)l.setRenderTarget(n,p),l.clear(u,h,d);l.setRenderTarget(f)}}Ho.prototype=Object.create(pe.prototype);Ho.prototype.constructor=Ho;function zo(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),Tn.call(this,e,e,t)}zo.prototype=Object.create(Tn.prototype);zo.prototype.constructor=zo;zo.prototype.isWebGLCubeRenderTarget=!0;zo.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=hn,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n=new ko,i={uniforms:{tEquirect:{value:null}},vertexShader:`

			varying vec3 vWorldDirection;

			vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

				return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

			}

			void main() {

				vWorldDirection = transformDirection( position, modelMatrix );

				#include <begin_vertex>
				#include <project_vertex>

			}
		`,fragmentShader:`

			uniform sampler2D tEquirect;

			varying vec3 vWorldDirection;

			#include <common>

			void main() {

				vec3 direction = normalize( vWorldDirection );

				vec2 sampleUV = equirectUv( direction );

				gl_FragColor = texture2D( tEquirect, sampleUV );

			}
		`},r=new en({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Hi});r.uniforms.tEquirect.value=t;const s=new nt(new xr(5,5,5),r);return n.add(s),new Ho(1,10,this).update(e,n),s.geometry.dispose(),s.material.dispose(),this};function Ms(e,t,n,i,r,s,o,a,c,l,u,h){it.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Pt,this.minFilter=l!==void 0?l:Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Ms.prototype=Object.create(it.prototype);Ms.prototype.constructor=Ms;Ms.prototype.isDataTexture=!0;const Zr=new ai,Qa=new L;function ba(e,t,n,i,r,s){this.planes=[e!==void 0?e:new Zn,t!==void 0?t:new Zn,n!==void 0?n:new Zn,i!==void 0?i:new Zn,r!==void 0?r:new Zn,s!==void 0?s:new Zn]}Object.assign(ba.prototype,{set:function(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromProjectionMatrix:function(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],a=n[4],c=n[5],l=n[6],u=n[7],h=n[8],d=n[9],f=n[10],p=n[11],y=n[12],_=n[13],m=n[14],g=n[15];return t[0].setComponents(o-i,u-a,p-h,g-y).normalize(),t[1].setComponents(o+i,u+a,p+h,g+y).normalize(),t[2].setComponents(o+r,u+c,p+d,g+_).normalize(),t[3].setComponents(o-r,u-c,p-d,g-_).normalize(),t[4].setComponents(o-s,u-l,p-f,g-m).normalize(),t[5].setComponents(o+s,u+l,p+f,g+m).normalize(),this},intersectsObject:function(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)},intersectsSprite:function(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)},intersectsSphere:function(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0},intersectsBox:function(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qa.x=i.normal.x>0?e.max.x:e.min.x,Qa.y=i.normal.y>0?e.max.y:e.min.y,Qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qa)<0)return!1}return!0},containsPoint:function(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}});const me={common:{diffuse:{value:new de(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new $t},uv2Transform:{value:new $t},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new de(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new $t}},sprite:{diffuse:{value:new de(15658734)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new $t}}};function bg(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Ex(e,t){const n=t.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,f=e.createBuffer();e.bindBuffer(u,f),e.bufferData(u,h,d),l.onUploadCallback();let p=e.FLOAT;return h instanceof Float32Array?p=e.FLOAT:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?p=e.UNSIGNED_SHORT:h instanceof Int16Array?p=e.SHORT:h instanceof Uint32Array?p=e.UNSIGNED_INT:h instanceof Int32Array?p=e.INT:h instanceof Int8Array?p=e.BYTE:h instanceof Uint8Array&&(p=e.UNSIGNED_BYTE),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,f=u.updateRange;e.bindBuffer(h,l),f.count===-1?e.bufferSubData(h,0,d):(n?e.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):e.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(e.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}function qc(e,t,n,i){Ce.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new wr(e,t,n,i)),this.mergeVertices()}qc.prototype=Object.create(Ce.prototype);qc.prototype.constructor=qc;function wr(e,t,n,i){be.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},e=e||1,t=t||1;const r=e/2,s=t/2,o=Math.floor(n)||1,a=Math.floor(i)||1,c=o+1,l=a+1,u=e/o,h=t/a,d=[],f=[],p=[],y=[];for(let _=0;_<l;_++){const m=_*h-s;for(let g=0;g<c;g++){const v=g*u-r;f.push(v,-m,0),p.push(0,0,1),y.push(g/o),y.push(1-_/a)}}for(let _=0;_<a;_++)for(let m=0;m<o;m++){const g=m+c*_,v=m+c*(_+1),b=m+1+c*(_+1),x=m+1+c*_;d.push(g,v,x),d.push(v,b,x)}this.setIndex(d),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(y,2))}wr.prototype=Object.create(be.prototype);wr.prototype.constructor=wr;var Sx=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Tx=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Ax=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`,Rx=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`,Lx=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Px=`
vec3 transformed = vec3( position );
`,Cx=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Dx=`

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	return vec2( -1.04, 1.04 ) * a004 + r.zw;

}

float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

#if defined ( PHYSICALLY_CORRECT_LIGHTS )

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	// this is intended to be used on spot and point lights who are represented as luminous intensity
	// but who must be converted to luminous irradiance for surface lighting calculation
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

#else

	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );

	}

	return 1.0;

#endif

}

vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotLH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );

	return ( 1.0 - specularColor ) * fresnel + specularColor;

} // validated

vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {

	// See F_Schlick
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;

	return Fr * fresnel + F0;

}


// Microfacet Models for Refraction through Rough Surfaces - equation (34)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {

	// geometry term (normalized) = G(l)\u22C5G(v) / 4(n\u22C5l)(n\u22C5v)
	// also see #12151

	float a2 = pow2( alpha );

	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );

	return 1.0 / ( gl * gv );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	// dotNL and dotNV are explicitly swapped. This is not a mistake.
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( incidentLight.direction + viewDir );

	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( G * D );

} // validated

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );

	return specularColor * brdf.x + brdf.y;

} // validated

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;

	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );

	//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );
	//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );

	vec3 F = F_Schlick( specularColor, dotLH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}

float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L94
float D_Charlie(float roughness, float NoH) {
	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125); // 2^(-14/2), so sin2h^2 > 0 in fp16
	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs#L136
float V_Neubelt(float NoV, float NoL) {
	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}

vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {

	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;

	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );

	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );

}

#endif
`,Ix=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// http://api.unrealengine.com/attachments/Engine/Rendering/LightingAndShadows/BumpMappingWithoutTangentSpace/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 );

		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Ox=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,Fx=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Nx=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,kx=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Bx=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`,Ux=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`,Hx=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`,zx=`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`,Gx=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	float distance = dot( planeNormal, point - pointOnPlane );

	return - distance * planeNormal + point;

}

float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return sign( dot( point - pointOnPlane, planeNormal ) );

}

vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {

	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Vx=`
#ifdef ENVMAP_TYPE_CUBE_UV

#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0

// These shader functions convert between the UV coordinates of a single face of
// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
// sampling a textureCube (not generally normalized).

float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}

// RH coordinate system; PMREM face-indexing convention
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x); // pos x
    } else if (face == 1.0) {
      uv = vec2(-direction.x, -direction.z) / abs(direction.y); // pos y
    } else if (face == 2.0) {
      uv = vec2(-direction.x, direction.y) / abs(direction.z); // pos z
    } else if (face == 3.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x); // neg x
    } else if (face == 4.0) {
      uv = vec2(-direction.x, direction.z) / abs(direction.y); // neg y
    } else {
      uv = vec2(direction.x, direction.y) / abs(direction.z); // neg z
    }
    return 0.5 * (uv + 1.0);
}

vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);

  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);

  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;

  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}

// These defines must match with PMREMGenerator

#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0

float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
  }
  return mip;
}

vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);

  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif
`,Wx=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,jx=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Xx=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Yx=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,qx=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Zx=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Jx=`
// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}

vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}

vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}

vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}

vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}

// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}

vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	// NOTE: The implementation with min causes the shader to not compile on
	// a common Alcatel A502DL in Chrome 78/Android 8.1. Some research suggests 
	// that the chipset is Mediatek MT6739 w/ IMG PowerVR GE8100 GPU.
	// D = min( floor( D ) / 255.0, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}

// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html

// M matrix, for encoding
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}

// Inverse M matrix, for decoding
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}
`,Kx=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;
		
		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		}  else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#elif defined( ENVMAP_TYPE_EQUIREC )

		reflectVec = normalize( reflectVec );

		vec2 sampleUV = equirectUv( reflectVec );

		vec4 envColor = texture2D( envMap, sampleUV );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifndef ENVMAP_TYPE_CUBE_UV

		envColor = envMapTexelToLinear( envColor );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Qx=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,$x=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,ew=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,tw=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,nw=`
#ifdef USE_FOG

	fogDepth = - mvPosition.z;

#endif
`,iw=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`,rw=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,sw=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,ow=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return texture2D( gradientMap, coord ).rgb;

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,aw=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`,cw=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,lw=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

/*
#if NUM_RECT_AREA_LIGHTS > 0

	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		// TODO (abelnation): implement

	}

#endif
*/

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,uw=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {

	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI;

	#endif

	return irradiance;

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {

		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );

		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// directLight is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {

		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );

		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );

		if ( angleCos > spotLight.coneCos ) {

			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );

			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;

		} else {

			directLight.color = vec3( 0.0 );
			directLight.visible = false;

		}
	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {

		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			irradiance *= PI;

		#endif

		return irradiance;

	}

#endif
`,hw=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif

	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {

		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );

			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );

			#else

				// force the bias high to get the last LOD level as it is the most blurred.
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

		#else

			vec4 envMapColor = vec4( 0.0 );

		#endif

		return PI * envMapColor.rgb * envMapIntensity;

	}

	// Trowbridge-Reitz distribution to Mip level, following the logic of http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {

		float maxMIPLevelScalar = float( maxMIPLevel );

		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );

		// clamp to allowable LOD ranges.
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );

	}

	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {

		#ifdef ENVMAP_MODE_REFLECTION

		  vec3 reflectVec = reflect( -viewDir, normal );

		  // Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

		#else

		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );

		#endif

		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );

		#ifdef ENVMAP_TYPE_CUBE

			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );

			#else

				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#elif defined( ENVMAP_TYPE_CUBE_UV )

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

		#elif defined( ENVMAP_TYPE_EQUIREC )

			vec2 sampleUV = equirectUv( reflectVec );

			#ifdef TEXTURE_LOD_EXT

				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );

			#else

				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );

			#endif

			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;

		#endif

		return envMapColor.rgb * envMapIntensity;

	}

#endif
`,fw=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,dw=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,pw=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,mw=`
varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif


struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,gw=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.specularRoughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );

#ifdef REFLECTIVITY

	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );

#endif

#ifdef CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheen;

#endif
`,yw=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;

#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif

};

#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04

// Clear coat directional hemishperical reflectance (this approximation should be improved)
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {

	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		irradiance *= PI; // punctual light

	#endif

	#ifdef CLEARCOAT

		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = ccDotNL * directLight.color;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			ccIrradiance *= PI; // punctual light

		#endif

		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

	#else

		float clearcoatDHR = 0.0;

	#endif

	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif

	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef CLEARCOAT

		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );

		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );

	#else

		float clearcoatDHR = 0.0;

	#endif

	float clearcoatInv = 1.0 - clearcoatDHR;

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,_w=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointDirectLightIrradiance( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotDirectLightIrradiance( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,vw=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, maxMipLevel );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );

	#ifdef CLEARCOAT

		clearcoatRadiance += getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );

	#endif

#endif
`,bw=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,xw=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,ww=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Mw=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Ew=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,Sw=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`,Tw=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Aw=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,Rw=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Lw=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Pw=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Cw=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

#endif
`,Dw=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifndef USE_MORPHNORMALS

		uniform float morphTargetInfluences[ 8 ];

	#else

		uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`,Iw=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];

	#ifndef USE_MORPHNORMALS

		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];

	#endif

#endif
`,Ow=`
#ifdef FLAT_SHADED

	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Fw=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );

#endif
`,Nw=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Per-Pixel Tangent Space Normal Mapping
	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );

		mat3 tsn = mat3( S, T, N );

		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

		return normalize( tsn * mapN );

	}

#endif
`,kw=`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Bw=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );

	#endif

#endif
`,Uw=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,Hw=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,zw=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Gw=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Vw=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Ww=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,jw=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Xw=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Yw=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,qw=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Zw=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,Jw=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,Kw=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Qw=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`,$w=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,eM=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,tM=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,nM=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,iM=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,rM=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/~reinhard/cdrom/
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,sM=`
#ifdef USE_TRANSMISSIONMAP

	totalTransmission *= texture2D( transmissionMap, vUv ).r;

#endif
`,oM=`
#ifdef USE_TRANSMISSIONMAP

	uniform sampler2D transmissionMap;

#endif
`,aM=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,cM=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,lM=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,uM=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,hM=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,fM=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,dM=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,pM=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,mM=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,gM=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,yM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,_M=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,vM=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,bM=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,xM=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,wM=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	vec4 texColor = texture2D( tEquirect, sampleUV );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,MM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,EM=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,SM=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,TM=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,AM=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>

	#ifdef USE_ENVMAP

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,RM=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,LM=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,PM=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>

#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );

	#else

		vec4 matcapColor = vec4( 1.0 );

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,CM=`
#define MATCAP

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

		vNormal = normalize( transformedNormal );

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,DM=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,IM=`
#define TOON

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,OM=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,FM=`
#define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,NM=`
#define STANDARD

#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
	uniform float transmission;
#endif

#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif

#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	// this is a stub for the transmission model
	#ifdef TRANSMISSION
		diffuseColor.a *= saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,kM=`
#define STANDARD

varying vec3 vViewPosition;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,BM=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

}
`,UM=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,HM=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,zM=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,GM=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,VM=`
#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,WM=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,jM=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`;const ke={alphamap_fragment:Sx,alphamap_pars_fragment:Tx,alphatest_fragment:Ax,aomap_fragment:Rx,aomap_pars_fragment:Lx,begin_vertex:Px,beginnormal_vertex:Cx,bsdfs:Dx,bumpmap_pars_fragment:Ix,clipping_planes_fragment:Ox,clipping_planes_pars_fragment:Fx,clipping_planes_pars_vertex:Nx,clipping_planes_vertex:kx,color_fragment:Bx,color_pars_fragment:Ux,color_pars_vertex:Hx,color_vertex:zx,common:Gx,cube_uv_reflection_fragment:Vx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:jx,displacementmap_vertex:Xx,emissivemap_fragment:Yx,emissivemap_pars_fragment:qx,encodings_fragment:Zx,encodings_pars_fragment:Jx,envmap_fragment:Kx,envmap_common_pars_fragment:Qx,envmap_pars_fragment:$x,envmap_pars_vertex:ew,envmap_physical_pars_fragment:hw,envmap_vertex:tw,fog_vertex:nw,fog_pars_vertex:iw,fog_fragment:rw,fog_pars_fragment:sw,gradientmap_pars_fragment:ow,lightmap_fragment:aw,lightmap_pars_fragment:cw,lights_lambert_vertex:lw,lights_pars_begin:uw,lights_toon_fragment:fw,lights_toon_pars_fragment:dw,lights_phong_fragment:pw,lights_phong_pars_fragment:mw,lights_physical_fragment:gw,lights_physical_pars_fragment:yw,lights_fragment_begin:_w,lights_fragment_maps:vw,lights_fragment_end:bw,logdepthbuf_fragment:xw,logdepthbuf_pars_fragment:ww,logdepthbuf_pars_vertex:Mw,logdepthbuf_vertex:Ew,map_fragment:Sw,map_pars_fragment:Tw,map_particle_fragment:Aw,map_particle_pars_fragment:Rw,metalnessmap_fragment:Lw,metalnessmap_pars_fragment:Pw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Dw,morphtarget_vertex:Iw,normal_fragment_begin:Ow,normal_fragment_maps:Fw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:Bw,clearcoat_pars_fragment:Uw,packing:Hw,premultiplied_alpha_fragment:zw,project_vertex:Gw,dithering_fragment:Vw,dithering_pars_fragment:Ww,roughnessmap_fragment:jw,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:qw,shadowmap_vertex:Zw,shadowmask_pars_fragment:Jw,skinbase_vertex:Kw,skinning_pars_vertex:Qw,skinning_vertex:$w,skinnormal_vertex:eM,specularmap_fragment:tM,specularmap_pars_fragment:nM,tonemapping_fragment:iM,tonemapping_pars_fragment:rM,transmissionmap_fragment:sM,transmissionmap_pars_fragment:oM,uv_pars_fragment:aM,uv_pars_vertex:cM,uv_vertex:lM,uv2_pars_fragment:uM,uv2_pars_vertex:hM,uv2_vertex:fM,worldpos_vertex:dM,background_frag:pM,background_vert:mM,cube_frag:gM,cube_vert:yM,depth_frag:_M,depth_vert:vM,distanceRGBA_frag:bM,distanceRGBA_vert:xM,equirect_frag:wM,equirect_vert:MM,linedashed_frag:EM,linedashed_vert:SM,meshbasic_frag:TM,meshbasic_vert:AM,meshlambert_frag:RM,meshlambert_vert:LM,meshmatcap_frag:PM,meshmatcap_vert:CM,meshtoon_frag:DM,meshtoon_vert:IM,meshphong_frag:OM,meshphong_vert:FM,meshphysical_frag:NM,meshphysical_vert:kM,normal_frag:BM,normal_vert:UM,points_frag:HM,points_vert:zM,shadow_frag:GM,shadow_vert:VM,sprite_frag:WM,sprite_vert:jM},Jn={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.fog,me.lights,{emissive:{value:new de(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new de(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.normal_vert,fragmentShader:ke.normal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:Gt([me.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Jn.physical={uniforms:Gt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new oe(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new de(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function XM(e,t,n,i){const r=new de(0);let s=0,o,a,c=null,l=0,u=null;function h(f,p,y,_){let m=p.isScene===!0?p.background:null;const g=e.xr,v=g.getSession&&g.getSession();if(v&&v.environmentBlendMode==="additive"&&(m=null),m===null?d(r,s):m&&m.isColor&&(d(m,1),_=!0),(e.autoClear||_)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===_a)){a===void 0&&(a=new nt(new xr(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:ws(Jn.cube.uniforms),vertexShader:Jn.cube.vertexShader,fragmentShader:Jn.cube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(x,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a));const b=m.isWebGLCubeRenderTarget?m.texture:m;a.material.uniforms.envMap.value=b,a.material.uniforms.flipEnvMap.value=b.isCubeTexture?-1:1,(c!==m||l!==b.version||u!==e.toneMapping)&&(a.material.needsUpdate=!0,c=m,l=b.version,u=e.toneMapping),f.unshift(a,a.geometry,a.material,0,0,null)}else m&&m.isTexture&&(o===void 0&&(o=new nt(new wr(2,2),new en({name:"BackgroundMaterial",uniforms:ws(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||l!==m.version||u!==e.toneMapping)&&(o.material.needsUpdate=!0,c=m,l=m.version,u=e.toneMapping),f.unshift(o,o.geometry,o.material,0,0,null))}function d(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,i)}return{getClearColor:function(){return r},setClearColor:function(f,p){r.set(f),s=p!==void 0?p:1,d(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(f){s=f,d(r,s)},render:h}}function YM(e,t,n,i){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function u(W,V,F,B,X){let ne=!1;if(o){const ue=p(B,F,V);l!==ue&&(l=ue,d(l.object)),ne=_(B),ne&&m(B)}else{const ue=V.wireframe===!0;(l.geometry!==B.id||l.program!==F.id||l.wireframe!==ue)&&(l.geometry=B.id,l.program=F.id,l.wireframe=ue,ne=!0)}W.isInstancedMesh===!0&&(ne=!0),X!==null&&n.update(X,e.ELEMENT_ARRAY_BUFFER),ne&&(w(W,V,F,B),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function h(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function d(W){return i.isWebGL2?e.bindVertexArray(W):s.bindVertexArrayOES(W)}function f(W){return i.isWebGL2?e.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function p(W,V,F){const B=F.wireframe===!0;let X=a[W.id];X===void 0&&(X={},a[W.id]=X);let ne=X[V.id];ne===void 0&&(ne={},X[V.id]=ne);let ue=ne[B];return ue===void 0&&(ue=y(h()),ne[B]=ue),ue}function y(W){const V=[],F=[],B=[];for(let X=0;X<r;X++)V[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:B,object:W,attributes:{}}}function _(W){const V=l.attributes,F=W.attributes;if(Object.keys(V).length!==Object.keys(F).length)return!0;for(const B in F){const X=V[B],ne=F[B];if(X.attribute!==ne||X.data!==ne.data)return!0}return!1}function m(W){const V={},F=W.attributes;for(const B in F){const X=F[B],ne={};ne.attribute=X,X.data&&(ne.data=X.data),V[B]=ne}l.attributes=V}function g(){const W=l.newAttributes;for(let V=0,F=W.length;V<F;V++)W[V]=0}function v(W){b(W,0)}function b(W,V){const F=l.newAttributes,B=l.enabledAttributes,X=l.attributeDivisors;F[W]=1,B[W]===0&&(e.enableVertexAttribArray(W),B[W]=1),X[W]!==V&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,V),X[W]=V)}function x(){const W=l.newAttributes,V=l.enabledAttributes;for(let F=0,B=V.length;F<B;F++)V[F]!==W[F]&&(e.disableVertexAttribArray(F),V[F]=0)}function S(W,V,F,B,X,ne){i.isWebGL2===!0&&(F===e.INT||F===e.UNSIGNED_INT)?e.vertexAttribIPointer(W,V,F,X,ne):e.vertexAttribPointer(W,V,F,B,X,ne)}function w(W,V,F,B){if(i.isWebGL2===!1&&(W.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const X=B.attributes,ne=F.getAttributes(),ue=V.defaultAttributeValues;for(const he in ne){const ce=ne[he];if(ce>=0){const Me=X[he];if(Me!==void 0){const _e=Me.normalized,Ie=Me.itemSize,T=n.get(Me);if(T===void 0)continue;const M=T.buffer,P=T.type,C=T.bytesPerElement;if(Me.isInterleavedBufferAttribute){const U=Me.data,G=U.stride,I=Me.offset;U&&U.isInstancedInterleavedBuffer?(b(ce,U.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)):v(ce),e.bindBuffer(e.ARRAY_BUFFER,M),S(ce,Ie,P,_e,G*C,I*C)}else Me.isInstancedBufferAttribute?(b(ce,Me.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=Me.meshPerAttribute*Me.count)):v(ce),e.bindBuffer(e.ARRAY_BUFFER,M),S(ce,Ie,P,_e,0,0)}else if(he==="instanceMatrix"){const _e=n.get(W.instanceMatrix);if(_e===void 0)continue;const Ie=_e.buffer,T=_e.type;b(ce+0,1),b(ce+1,1),b(ce+2,1),b(ce+3,1),e.bindBuffer(e.ARRAY_BUFFER,Ie),e.vertexAttribPointer(ce+0,4,T,!1,64,0),e.vertexAttribPointer(ce+1,4,T,!1,64,16),e.vertexAttribPointer(ce+2,4,T,!1,64,32),e.vertexAttribPointer(ce+3,4,T,!1,64,48)}else if(ue!==void 0){const _e=ue[he];if(_e!==void 0)switch(_e.length){case 2:e.vertexAttrib2fv(ce,_e);break;case 3:e.vertexAttrib3fv(ce,_e);break;case 4:e.vertexAttrib4fv(ce,_e);break;default:e.vertexAttrib1fv(ce,_e)}}}}x()}function O(){H();for(const W in a){const V=a[W];for(const F in V){const B=V[F];for(const X in B)f(B[X].object),delete B[X];delete V[F]}delete a[W]}}function R(W){if(a[W.id]===void 0)return;const V=a[W.id];for(const F in V){const B=V[F];for(const X in B)f(B[X].object),delete B[X];delete V[F]}delete a[W.id]}function q(W){for(const V in a){const F=a[V];if(F[W.id]===void 0)continue;const B=F[W.id];for(const X in B)f(B[X].object),delete B[X];delete F[W.id]}}function H(){j(),l!==c&&(l=c,d(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:H,resetDefaultState:j,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:v,disableUnusedAttributes:x}}function qM(e,t,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){e.drawArrays(s,l,u),n.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=e,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),n.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function ZM(e,t,n){let i;function r(){if(i!==void 0)return i;const S=t.get("EXT_texture_filter_anisotropic");return S!==null?i=e.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(S){if(S==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&e instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,v=o||!!t.get("OES_texture_float"),b=g&&v,x=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:x}}function JM(){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Zn,o=new $t,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,d){const f=u.length!==0||h||n!==0||i;return i=h,t=l(u,d,0),n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,h,d,f,p,y){if(!i||u===null||u.length===0||r&&!d)r?l(null):c();else{const _=r?0:n,m=_*4;let g=p.clippingState||null;a.value=g,g=l(u,f,m,y);for(let v=0;v!==m;++v)g[v]=t[v];p.clippingState=g,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,d,f){let p=u!==null?u.length:0,y=null;if(p!==0){if(y=a.value,f!==!0||y===null){const _=d+p*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(y===null||y.length<_)&&(y=new Float32Array(_));for(let g=0,v=d;g!==p;++g,v+=4)s.copy(u[g]).applyMatrix4(m,o),s.normal.toArray(y,v),y[v+3]=s.constant}a.value=y,a.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,y}}function KM(e){const t={};return{has:function(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,!!i},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]}}}function QM(e,t,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const d=h.target,f=r.get(d);f.index!==null&&t.remove(f.index);for(const y in f.attributes)t.remove(f.attributes[y]);d.removeEventListener("dispose",o),r.delete(d);const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let f=r.get(d);return f||(d.addEventListener("dispose",o),d.isBufferGeometry?f=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new be().setFromObject(h)),f=d._bufferGeometry),r.set(d,f),n.memory.geometries++,f)}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],e.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const y=f[p];for(let _=0,m=y.length;_<m;_++)t.update(y[_],e.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let y=0;if(f!==null){const g=f.array;y=f.version;for(let v=0,b=g.length;v<b;v+=3){const x=g[v+0],S=g[v+1],w=g[v+2];d.push(x,S,S,w,w,x)}}else{const g=p.array;y=p.version;for(let v=0,b=g.length/3-1;v<b;v+=3){const x=v+0,S=v+1,w=v+2;d.push(x,S,S,w,w,x)}}const _=new(_g(d)>65535?Uo:Bo)(d,1);_.version=y;const m=s.get(h);m&&t.remove(m),s.set(h,_)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $M(e,t,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){e.drawElements(s,f,a,d*c),n.update(f,s,1)}function h(d,f,p){if(p===0)return;let y,_;if(r)y=e,_="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,f,a,d*c,p),n.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function eE(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tE(e,t){return e[0]-t[0]}function nE(e,t){return Math.abs(t[1])-Math.abs(e[1])}function iE(e){const t={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=t[o.id];if(h===void 0){h=[];for(let _=0;_<u;_++)h[_]=[_,0];t[o.id]=h}for(let _=0;_<u;_++){const m=h[_];m[0]=_,m[1]=l[_]}h.sort(nE);for(let _=0;_<8;_++)_<u&&h[_][1]?(i[_][0]=h[_][0],i[_][1]=h[_][1]):(i[_][0]=Number.MAX_SAFE_INTEGER,i[_][1]=0);i.sort(tE);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const m=i[_],g=m[0],v=m[1];g!==Number.MAX_SAFE_INTEGER&&v?(d&&o.getAttribute("morphTarget"+_)!==d[g]&&o.setAttribute("morphTarget"+_,d[g]),f&&o.getAttribute("morphNormal"+_)!==f[g]&&o.setAttribute("morphNormal"+_,f[g]),n[_]=v,p+=v):(d&&o.getAttribute("morphTarget"+_)!==void 0&&o.deleteAttribute("morphTarget"+_),f&&o.getAttribute("morphNormal"+_)!==void 0&&o.deleteAttribute("morphNormal"+_),n[_]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function rE(e,t,n,i){let r=new WeakMap;function s(a){const c=i.render.frame,l=a.geometry,u=t.get(a,l);return r.get(u)!==c&&(l.isGeometry&&u.updateFromObject(a),t.update(u),r.set(u,c)),a.isInstancedMesh&&n.update(a.instanceMatrix,e.ARRAY_BUFFER),u}function o(){r=new WeakMap}return{update:s,dispose:o}}function Xi(e,t,n,i,r,s,o,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:nf,o=o!==void 0?o:mi,it.call(this,e,t,n,i,r,s,o,a,c,l),this.flipY=!1}Xi.prototype=Object.create(it.prototype);Xi.prototype.constructor=Xi;Xi.prototype.isCubeTexture=!0;Object.defineProperty(Xi.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function Go(e,t,n,i){it.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Go.prototype=Object.create(it.prototype);Go.prototype.constructor=Go;Go.prototype.isDataTexture2DArray=!0;function Vo(e,t,n,i){it.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Vo.prototype=Object.create(it.prototype);Vo.prototype.constructor=Vo;Vo.prototype.isDataTexture3D=!0;const xg=new it,sE=new Go,oE=new Vo,wg=new Xi,zd=[],Gd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),jd=new Float32Array(4);function Zs(e,t,n){const i=e[0];if(i<=0||i>0)return e;let r=t*n,s=zd[r];if(s===void 0&&(s=new Float32Array(r),zd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function Rn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Mg(e,t){let n=Gd[t];n===void 0&&(n=new Int32Array(t),Gd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function aE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function cE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Rn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function lE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Rn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function uE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Rn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function hE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Rn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(Rn(n,i))return;jd.set(i),e.uniformMatrix2fv(this.addr,!1,jd),fn(n,i)}}function fE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Rn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(Rn(n,i))return;Wd.set(i),e.uniformMatrix3fv(this.addr,!1,Wd),fn(n,i)}}function dE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Rn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(Rn(n,i))return;Vd.set(i),e.uniformMatrix4fv(this.addr,!1,Vd),fn(n,i)}}function pE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||xg,r)}function mE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||sE,r)}function gE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||oE,r)}function yE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||wg,r)}function _E(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function vE(e,t){const n=this.cache;Rn(n,t)||(e.uniform2iv(this.addr,t),fn(n,t))}function bE(e,t){const n=this.cache;Rn(n,t)||(e.uniform3iv(this.addr,t),fn(n,t))}function xE(e,t){const n=this.cache;Rn(n,t)||(e.uniform4iv(this.addr,t),fn(n,t))}function wE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ME(e){switch(e){case 5126:return aE;case 35664:return cE;case 35665:return lE;case 35666:return uE;case 35674:return hE;case 35675:return fE;case 35676:return dE;case 5124:case 35670:return _E;case 35667:case 35671:return vE;case 35668:case 35672:return bE;case 35669:case 35673:return xE;case 5125:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return mE}}function EE(e,t){e.uniform1fv(this.addr,t)}function SE(e,t){e.uniform1iv(this.addr,t)}function TE(e,t){e.uniform2iv(this.addr,t)}function AE(e,t){e.uniform3iv(this.addr,t)}function RE(e,t){e.uniform4iv(this.addr,t)}function LE(e,t){const n=Zs(t,this.size,2);e.uniform2fv(this.addr,n)}function PE(e,t){const n=Zs(t,this.size,3);e.uniform3fv(this.addr,n)}function CE(e,t){const n=Zs(t,this.size,4);e.uniform4fv(this.addr,n)}function DE(e,t){const n=Zs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function IE(e,t){const n=Zs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function OE(e,t){const n=Zs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function FE(e,t,n){const i=t.length,r=Mg(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(t[s]||xg,r[s])}function NE(e,t,n){const i=t.length,r=Mg(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(t[s]||wg,r[s])}function kE(e){switch(e){case 5126:return EE;case 35664:return LE;case 35665:return PE;case 35666:return CE;case 35674:return DE;case 35675:return IE;case 35676:return OE;case 5124:case 35670:return SE;case 35667:case 35671:return TE;case 35668:case 35672:return AE;case 35669:case 35673:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35680:case 36300:case 36308:case 36293:return NE}}function BE(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ME(t.type)}function Eg(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=kE(t.type)}Eg.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),fn(t,e)};function Sg(e){this.id=e,this.seq=[],this.map={}}Sg.prototype.setValue=function(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}};const Tu=/([\w\d_]+)(\])?(\[|\.)?/g;function Xd(e,t){e.seq.push(t),e.map[t.id]=t}function UE(e,t,n){const i=e.name,r=i.length;for(Tu.lastIndex=0;;){const s=Tu.exec(i),o=Tu.lastIndex;let a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Xd(n,l===void 0?new BE(a,e,t):new Eg(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new Sg(a),Xd(n,h)),n=h}}}function zi(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);UE(r,s,this)}}zi.prototype.setValue=function(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)};zi.prototype.setOptional=function(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)};zi.upload=function(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}};zi.seqWithValue=function(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n};function Yd(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let HE=0;function zE(e){const t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Tg(e){switch(e){case sn:return["Linear","( value )"];case xs:return["sRGB","( value )"];case lf:return["RGBE","( value )"];case dg:return["RGBM","( value, 7.0 )"];case pg:return["RGBM","( value, 16.0 )"];case mg:return["RGBD","( value, 256.0 )"];case cf:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case tx:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function qd(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+zE(s)}function co(e,t){const n=Tg(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function GE(e,t){const n=Tg(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function VE(e,t){let n;switch(t){case $v:n="Linear";break;case eb:n="Reinhard";break;case tb:n="OptimizedCineon";break;case nb:n="ACESFilmic";break;case ib:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function WE(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vo).join(`
`)}function jE(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function XE(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(t,r).name;n[o]=e.getAttribLocation(t,o)}return n}function vo(e){return e!==""}function Zd(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(e){return e.replace(YE,qE)}function qE(e,t){const n=ke[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return nh(n)}const ZE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,JE=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function Kd(e){return e.replace(JE,Ag).replace(ZE,KE)}function KE(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ag(e,t,n,i)}function Ag(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[ i \]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qd(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function QE(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===og?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ag?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===_o&&(t="SHADOWMAP_TYPE_VSM"),t}function $E(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case nf:case rf:t="ENVMAP_TYPE_CUBE";break;case _a:case Hl:t="ENVMAP_TYPE_CUBE_UV";break;case hg:case sf:t="ENVMAP_TYPE_EQUIREC";break}return t}function e1(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case rf:case sf:case Hl:t="ENVMAP_MODE_REFRACTION";break}return t}function t1(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Kv:t="ENVMAP_BLENDING_MIX";break;case Qv:t="ENVMAP_BLENDING_ADD";break}return t}function n1(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=QE(n),l=$E(n),u=e1(n),h=t1(n),d=e.gammaFactor>0?e.gammaFactor:1,f=n.isWebGL2?"":WE(n),p=jE(s),y=r.createProgram();let _,m;n.isRawShaderMaterial?(_=[p].filter(vo).join(`
`),_.length>0&&(_+=`
`),m=[f,p].filter(vo).join(`
`),m.length>0&&(m+=`
`)):(_=[Qd(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),m=[f,Qd(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fs?"#define TONE_MAPPING":"",n.toneMapping!==fs?ke.tonemapping_pars_fragment:"",n.toneMapping!==fs?VE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",ke.encodings_pars_fragment,n.map?co("mapTexelToLinear",n.mapEncoding):"",n.matcap?co("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?co("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?co("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?co("lightMapTexelToLinear",n.lightMapEncoding):"",GE("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),o=nh(o),o=Zd(o,n),o=Jd(o,n),a=nh(a),a=Zd(a,n),a=Jd(a,n),o=Kd(o),a=Kd(a),n.isWebGL2&&!n.isRawShaderMaterial&&(_=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=[`#version 300 es
`,"#define varying in","out highp vec4 pc_fragColor;","#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=_+o,v=m+a,b=Yd(r,r.VERTEX_SHADER,g),x=Yd(r,r.FRAGMENT_SHADER,v);if(r.attachShader(y,b),r.attachShader(y,x),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),e.debug.checkShaderErrors){const O=r.getProgramInfoLog(y).trim(),R=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(x).trim();let H=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1){H=!1;const W=qd(r,b,"vertex"),V=qd(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"gl.VALIDATE_STATUS",r.getProgramParameter(y,r.VALIDATE_STATUS),"gl.getProgramInfoLog",O,W,V)}else O!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",O):(R===""||q==="")&&(j=!1);j&&(this.diagnostics={runnable:H,programLog:O,vertexShader:{log:R,prefix:_},fragmentShader:{log:q,prefix:m}})}r.deleteShader(b),r.deleteShader(x);let S;this.getUniforms=function(){return S===void 0&&(S=new zi(r,y)),S};let w;return this.getAttributes=function(){return w===void 0&&(w=XE(r,y)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=HE++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=x,this}function i1(e,t,n,i){const r=[],s=n.isWebGL2,o=n.logarithmicDepthBuffer,a=n.floatVertexTextures,c=n.maxVertexUniforms,l=n.vertexTextures;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},d=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function f(b){const S=b.skeleton.bones;if(a)return 1024;{const O=Math.floor((c-20)/4),R=Math.min(O,S.length);return R<S.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+S.length+" bones. This GPU supports "+R+"."),0):R}}function p(b){let x;return b?b.isTexture?x=b.encoding:b.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),x=b.texture.encoding):x=sn,x}function y(b,x,S,w,O,R,q){const H=w.fog,j=b.isMeshStandardMaterial?w.environment:null,W=b.envMap||j,V=h[b.type],F=q.isSkinnedMesh?f(q):0;b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let B,X;if(V){const he=Jn[V];B=he.vertexShader,X=he.fragmentShader}else B=b.vertexShader,X=b.fragmentShader;const ne=e.getRenderTarget();return{isWebGL2:s,shaderID:V,shaderName:b.type,vertexShader:B,fragmentShader:X,defines:b.defines,isRawShaderMaterial:b.isRawShaderMaterial,isShaderMaterial:b.isShaderMaterial,precision:u,instancing:q.isInstancedMesh===!0,supportsVertexTextures:l,outputEncoding:ne!==null?p(ne.texture):e.outputEncoding,map:!!b.map,mapEncoding:p(b.map),matcap:!!b.matcap,matcapEncoding:p(b.matcap),envMap:!!W,envMapMode:W&&W.mapping,envMapEncoding:p(W),envMapCubeUV:!!W&&(W.mapping===_a||W.mapping===Hl),lightMap:!!b.lightMap,lightMapEncoding:p(b.lightMap),aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:p(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===rx,tangentSpaceNormalMap:b.normalMapType===Cr,clearcoatMap:!!b.clearcoatMap,clearcoatRoughnessMap:!!b.clearcoatRoughnessMap,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,transmissionMap:!!b.transmissionMap,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.transmissionMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog,fogExp2:H&&H.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:o,skinning:b.skinning&&F>0,maxBones:F,useVertexTexture:a,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numClippingPlanes:O,numClipIntersection:R,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&S.length>0,shadowMapType:e.shadowMap.type,toneMapping:b.toneMapped?e.toneMapping:fs,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:b.side===Ys,flipSided:b.side===It,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||t.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:s||t.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:s||t.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.fragmentShader),x.push(b.vertexShader)),b.defines!==void 0)for(const S in b.defines)x.push(S),x.push(b.defines[S]);if(b.isRawShaderMaterial===void 0){for(let S=0;S<d.length;S++)x.push(b[d[S]]);x.push(e.outputEncoding),x.push(e.gammaFactor)}return x.push(b.customProgramCacheKey),x.join()}function m(b){const x=h[b.type];let S;if(x){const w=Jn[x];S=xx.clone(w.uniforms)}else S=b.uniforms;return S}function g(b,x){let S;for(let w=0,O=r.length;w<O;w++){const R=r[w];if(R.cacheKey===x){S=R,++S.usedTimes;break}}return S===void 0&&(S=new n1(e,x,b,i),r.push(S)),S}function v(b){if(--b.usedTimes===0){const x=r.indexOf(b);r[x]=r[r.length-1],r.pop(),b.destroy()}}return{getParameters:y,getProgramCacheKey:_,getUniforms:m,acquireProgram:g,releaseProgram:v,programs:r}}function r1(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function s1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function o1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function $d(e){const t=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,f,p,y,_,m){let g=t[n];const v=e.get(p);return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,program:v.program||s,groupOrder:y,renderOrder:d.renderOrder,z:_,group:m},t[n]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.program=v.program||s,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=_,g.group=m),n++,g}function c(d,f,p,y,_,m){const g=a(d,f,p,y,_,m);(p.transparent===!0?r:i).push(g)}function l(d,f,p,y,_,m){const g=a(d,f,p,y,_,m);(p.transparent===!0?r:i).unshift(g)}function u(d,f){i.length>1&&i.sort(d||s1),r.length>1&&r.sort(f||o1)}function h(){for(let d=n,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function a1(e){let t=new WeakMap;function n(s){const o=s.target;o.removeEventListener("dispose",n),t.delete(o)}function i(s,o){const a=t.get(s);let c;return a===void 0?(c=new $d(e),t.set(s,new WeakMap),t.get(s).set(o,c),s.addEventListener("dispose",n)):(c=a.get(o),c===void 0&&(c=new $d(e),a.set(o,c))),c}function r(){t=new WeakMap}return{get:i,dispose:r}}function c1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new de};break;case"SpotLight":n={position:new L,direction:new L,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new de,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new de,groundColor:new de};break;case"RectAreaLight":n={color:new de,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function l1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let u1=0;function h1(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function f1(){const e=new c1,t=l1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)n.probe.push(new L);const i=new L,r=new Fe,s=new Fe;function o(a,c,l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,y=0,_=0,m=0,g=0,v=0,b=0;const x=l.matrixWorldInverse;a.sort(h1);for(let w=0,O=a.length;w<O;w++){const R=a[w],q=R.color,H=R.intensity,j=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=q.r*H,h+=q.g*H,d+=q.b*H;else if(R.isLightProbe)for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],H);else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),V.direction.sub(i),V.direction.transformDirection(x),R.castShadow){const F=R.shadow,B=t.get(R);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=R.shadow.matrix,g++}n.directional[f]=V,f++}else if(R.isSpotLight){const V=e.get(R);if(V.position.setFromMatrixPosition(R.matrixWorld),V.position.applyMatrix4(x),V.color.copy(q).multiplyScalar(H),V.distance=j,V.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),V.direction.sub(i),V.direction.transformDirection(x),V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,R.castShadow){const F=R.shadow,B=t.get(R);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,n.spotShadow[y]=B,n.spotShadowMap[y]=W,n.spotShadowMatrix[y]=R.shadow.matrix,b++}n.spot[y]=V,y++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(q).multiplyScalar(H),V.position.setFromMatrixPosition(R.matrixWorld),V.position.applyMatrix4(x),s.identity(),r.copy(R.matrixWorld),r.premultiply(x),s.extractRotation(r),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),V.halfWidth.applyMatrix4(s),V.halfHeight.applyMatrix4(s),n.rectArea[_]=V,_++}else if(R.isPointLight){const V=e.get(R);if(V.position.setFromMatrixPosition(R.matrixWorld),V.position.applyMatrix4(x),V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const F=R.shadow,B=t.get(R);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=R.shadow.matrix,v++}n.point[p]=V,p++}else if(R.isHemisphereLight){const V=e.get(R);V.direction.setFromMatrixPosition(R.matrixWorld),V.direction.transformDirection(x),V.direction.normalize(),V.skyColor.copy(R.color).multiplyScalar(H),V.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[m]=V,m++}}n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==p||S.spotLength!==y||S.rectAreaLength!==_||S.hemiLength!==m||S.numDirectionalShadows!==g||S.numPointShadows!==v||S.numSpotShadows!==b)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=v,n.spotShadowMatrix.length=b,S.directionalLength=f,S.pointLength=p,S.spotLength=y,S.rectAreaLength=_,S.hemiLength=m,S.numDirectionalShadows=g,S.numPointShadows=v,S.numSpotShadows=b,n.version=u1++)}return{setup:o,state:n}}function ep(){const e=new f1,t=[],n=[];function i(){t.length=0,n.length=0}function r(c){t.push(c)}function s(c){n.push(c)}function o(c){e.setup(t,n,c)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e},setupLights:o,pushLight:r,pushShadow:s}}function d1(){let e=new WeakMap;function t(r){const s=r.target;s.removeEventListener("dispose",t),e.delete(s)}function n(r,s){let o;return e.has(r)===!1?(o=new ep,e.set(r,new WeakMap),e.get(r).set(s,o),r.addEventListener("dispose",t)):e.get(r).has(s)===!1?(o=new ep,e.get(r).set(s,o)):o=e.get(r).get(s),o}function i(){e=new WeakMap}return{get:n,dispose:i}}function Mr(e){Le.call(this),this.type="MeshDepthMaterial",this.depthPacking=nx,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}Mr.prototype=Object.create(Le.prototype);Mr.prototype.constructor=Mr;Mr.prototype.isMeshDepthMaterial=!0;Mr.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function Er(e){Le.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}Er.prototype=Object.create(Le.prototype);Er.prototype.constructor=Er;Er.prototype.isMeshDistanceMaterial=!0;Er.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var p1=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

  float mean = 0.0;
  float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );

  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {

    #ifdef HORIZONAL_PASS

      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

    #else

      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;

    #endif

  }

  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;

  float std_dev = sqrt( squared_mean - mean * mean );

  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`,m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`;function Rg(e,t,n){let i=new ba;const r=new oe,s=new oe,o=new Qe,a=[],c=[],l={},u={0:It,1:Xs,2:Ys},h=new en({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:m1,fragmentShader:p1}),d=h.clone();d.defines.HORIZONAL_PASS=1;const f=new be;f.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new nt(f,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=og,this.render=function(x,S,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||x.length===0)return;const O=e.getRenderTarget(),R=e.getActiveCubeFace(),q=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let j=0,W=x.length;j<W;j++){const V=x[j],F=V.shadow;if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}r.copy(F.mapSize);const B=F.getFrameExtents();if(r.multiply(B),s.copy(F.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/B.x),r.x=s.x*B.x,F.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/B.y),r.y=s.y*B.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===_o){const ne={minFilter:Ot,magFilter:Ot,format:hn,stencilBuffer:!1};F.map=new Tn(r.x,r.y,ne),F.map.texture.name=V.name+".shadowMap",F.mapPass=new Tn(r.x,r.y,ne),F.camera.updateProjectionMatrix()}if(F.map===null){const ne={minFilter:Pt,magFilter:Pt,format:hn,stencilBuffer:!1};F.map=new Tn(r.x,r.y,ne),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();const X=F.getViewportCount();for(let ne=0;ne<X;ne++){const ue=F.getViewport(ne);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),H.viewport(o),F.updateMatrices(V,ne),i=F.getFrustum(),b(S,w,F.camera,V,this.type)}!F.isPointLightShadow&&this.type===_o&&_(F,w),F.needsUpdate=!1}y.needsUpdate=!1,e.setRenderTarget(O,R,q)};function _(x,S){const w=t.update(p);h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(S,null,w,h,p,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(S,null,w,d,p,null)}function m(x,S,w){const O=x<<0|S<<1|w<<2;let R=a[O];return R===void 0&&(R=new Mr({depthPacking:ix,morphTargets:x,skinning:S}),a[O]=R),R}function g(x,S,w){const O=x<<0|S<<1|w<<2;let R=c[O];return R===void 0&&(R=new Er({morphTargets:x,skinning:S}),c[O]=R),R}function v(x,S,w,O,R,q,H){let j=null,W=m,V=x.customDepthMaterial;if(O.isPointLight===!0&&(W=g,V=x.customDistanceMaterial),V===void 0){let F=!1;w.morphTargets===!0&&(F=S.morphAttributes&&S.morphAttributes.position&&S.morphAttributes.position.length>0);let B=!1;x.isSkinnedMesh===!0&&(w.skinning===!0?B=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",x));const X=x.isInstancedMesh===!0;j=W(F,B,X)}else j=V;if(e.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0){const F=j.uuid,B=w.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let ne=X[B];ne===void 0&&(ne=j.clone(),X[B]=ne),j=ne}return j.visible=w.visible,j.wireframe=w.wireframe,H===_o?j.side=w.shadowSide!==null?w.shadowSide:w.side:j.side=w.shadowSide!==null?w.shadowSide:u[w.side],j.clipShadows=w.clipShadows,j.clippingPlanes=w.clippingPlanes,j.clipIntersection=w.clipIntersection,j.wireframeLinewidth=w.wireframeLinewidth,j.linewidth=w.linewidth,O.isPointLight===!0&&j.isMeshDistanceMaterial===!0&&(j.referencePosition.setFromMatrixPosition(O.matrixWorld),j.nearDistance=R,j.farDistance=q),j}function b(x,S,w,O,R){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&R===_o)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const j=t.update(x),W=x.material;if(Array.isArray(W)){const V=j.groups;for(let F=0,B=V.length;F<B;F++){const X=V[F],ne=W[X.materialIndex];if(ne&&ne.visible){const ue=v(x,j,ne,O,w.near,w.far,R);e.renderBufferDirect(w,null,j,ue,x,X)}}}else if(W.visible){const V=v(x,j,W,O,w.near,w.far,R);e.renderBufferDirect(w,null,j,V,x,null)}}const H=x.children;for(let j=0,W=H.length;j<W;j++)b(H[j],S,w,O,R)}}function g1(e,t,n){const i=n.isWebGL2;function r(){let D=!1;const ee=new Qe;let N=null;const se=new Qe(0,0,0,0);return{setMask:function(ae){N!==ae&&!D&&(e.colorMask(ae,ae,ae,ae),N=ae)},setLocked:function(ae){D=ae},setClear:function(ae,fe,Ee,te,xe){xe===!0&&(ae*=te,fe*=te,Ee*=te),ee.set(ae,fe,Ee,te),se.equals(ee)===!1&&(e.clearColor(ae,fe,Ee,te),se.copy(ee))},reset:function(){D=!1,N=null,se.set(-1,0,0,0)}}}function s(){let D=!1,ee=null,N=null,se=null;return{setTest:function(ae){ae?he(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!D&&(e.depthMask(ae),ee=ae)},setFunc:function(ae){if(N!==ae){if(ae)switch(ae){case Wv:e.depthFunc(e.NEVER);break;case jv:e.depthFunc(e.ALWAYS);break;case Xv:e.depthFunc(e.LESS);break;case Zu:e.depthFunc(e.LEQUAL);break;case Yv:e.depthFunc(e.EQUAL);break;case qv:e.depthFunc(e.GEQUAL);break;case Zv:e.depthFunc(e.GREATER);break;case Jv:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);N=ae}},setLocked:function(ae){D=ae},setClear:function(ae){se!==ae&&(e.clearDepth(ae),se=ae)},reset:function(){D=!1,ee=null,N=null,se=null}}}function o(){let D=!1,ee=null,N=null,se=null,ae=null,fe=null,Ee=null,te=null,xe=null;return{setTest:function(we){D||(we?he(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(we){ee!==we&&!D&&(e.stencilMask(we),ee=we)},setFunc:function(we,Ue,Ge){(N!==we||se!==Ue||ae!==Ge)&&(e.stencilFunc(we,Ue,Ge),N=we,se=Ue,ae=Ge)},setOp:function(we,Ue,Ge){(fe!==we||Ee!==Ue||te!==Ge)&&(e.stencilOp(we,Ue,Ge),fe=we,Ee=Ue,te=Ge)},setLocked:function(we){D=we},setClear:function(we){xe!==we&&(e.clearStencil(we),xe=we)},reset:function(){D=!1,ee=null,N=null,se=null,ae=null,fe=null,Ee=null,te=null,xe=null}}}const a=new r,c=new s,l=new o;let u={},h=null,d=null,f=null,p=null,y=null,_=null,m=null,g=null,v=null,b=!1,x=null,S=null,w=null,O=null,R=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL\ ([0-9])/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(W)[1]),H=j>=2);let V=null,F={};const B=new Qe,X=new Qe;function ne(D,ee,N){const se=new Uint8Array(4),ae=e.createTexture();e.bindTexture(D,ae),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let fe=0;fe<N;fe++)e.texImage2D(ee+fe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,se);return ae}const ue={};ue[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(e.DEPTH_TEST),c.setFunc(Zu),P(!1),C(pd),he(e.CULL_FACE),T(Hi);function he(D){u[D]!==!0&&(e.enable(D),u[D]=!0)}function ce(D){u[D]!==!1&&(e.disable(D),u[D]=!1)}function Me(D){return h!==D?(e.useProgram(D),h=D,!0):!1}const _e={[ns]:e.FUNC_ADD,[Iv]:e.FUNC_SUBTRACT,[Ov]:e.FUNC_REVERSE_SUBTRACT};if(i)_e[_d]=e.MIN,_e[vd]=e.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(_e[_d]=D.MIN_EXT,_e[vd]=D.MAX_EXT)}const Ie={[Fv]:e.ZERO,[Nv]:e.ONE,[kv]:e.SRC_COLOR,[lg]:e.SRC_ALPHA,[Vv]:e.SRC_ALPHA_SATURATE,[zv]:e.DST_COLOR,[Uv]:e.DST_ALPHA,[Bv]:e.ONE_MINUS_SRC_COLOR,[ug]:e.ONE_MINUS_SRC_ALPHA,[Gv]:e.ONE_MINUS_DST_COLOR,[Hv]:e.ONE_MINUS_DST_ALPHA};function T(D,ee,N,se,ae,fe,Ee,te){if(D===Hi){d&&(ce(e.BLEND),d=!1);return}if(d||(he(e.BLEND),d=!0),D!==Dv){if(D!==f||te!==b){if((p!==ns||m!==ns)&&(e.blendEquation(e.FUNC_ADD),p=ns,m=ns),te)switch(D){case Mo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case md:e.blendFunc(e.ONE,e.ONE);break;case gd:e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA);break;case yd:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Mo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case md:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case gd:e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR);break;case yd:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,_=null,g=null,v=null,f=D,b=te}return}ae=ae||ee,fe=fe||N,Ee=Ee||se,(ee!==p||ae!==m)&&(e.blendEquationSeparate(_e[ee],_e[ae]),p=ee,m=ae),(N!==y||se!==_||fe!==g||Ee!==v)&&(e.blendFuncSeparate(Ie[N],Ie[se],Ie[fe],Ie[Ee]),y=N,_=se,g=fe,v=Ee),f=D,b=null}function M(D,ee){D.side===Ys?ce(e.CULL_FACE):he(e.CULL_FACE);let N=D.side===It;ee&&(N=!N),P(N),D.blending===Mo&&D.transparent===!1?T(Hi):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const se=D.stencilWrite;l.setTest(se),se&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits)}function P(D){x!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),x=D)}function C(D){D!==Pv?(he(e.CULL_FACE),D!==S&&(D===pd?e.cullFace(e.BACK):D===Cv?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ce(e.CULL_FACE),S=D}function U(D){D!==w&&(H&&e.lineWidth(D),w=D)}function G(D,ee,N){D?(he(e.POLYGON_OFFSET_FILL),(O!==ee||R!==N)&&(e.polygonOffset(ee,N),O=ee,R=N)):ce(e.POLYGON_OFFSET_FILL)}function I(D){D?he(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function z(D){D===void 0&&(D=e.TEXTURE0+q-1),V!==D&&(e.activeTexture(D),V=D)}function Y(D,ee){V===null&&z();let N=F[V];N===void 0&&(N={type:void 0,texture:void 0},F[V]=N),(N.type!==D||N.texture!==ee)&&(e.bindTexture(D,ee||ue[D]),N.type=D,N.texture=ee)}function Q(){const D=F[V];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{e.texImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function E(){try{e.texImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(D){B.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),B.copy(D))}function Z(D){X.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function K(){u={},V=null,F={},h=null,f=null,x=null,S=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:ce,useProgram:Me,setBlending:T,setMaterial:M,setFlipSided:P,setCullFace:C,setLineWidth:U,setPolygonOffset:G,setScissorTest:I,activeTexture:z,bindTexture:Y,unbindTexture:Q,compressedTexImage2D:J,texImage2D:ie,texImage3D:E,scissor:A,viewport:Z,reset:K}}function y1(e,t,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,A){return p?new OffscreenCanvas(E,A):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function _(E,A,Z,K){let D=1;if((E.width>K||E.height>K)&&(D=K/Math.max(E.width,E.height)),D<1||A===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){const ee=A?De.floorPowerOfTwo:Math.floor,N=ee(D*E.width),se=ee(D*E.height);f===void 0&&(f=y(N,se));const ae=Z?y(N,se):f;return ae.width=N,ae.height=se,ae.getContext("2d").drawImage(E,0,0,N,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+N+"x"+se+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return De.isPowerOfTwo(E.width)&&De.isPowerOfTwo(E.height)}function g(E){return a?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==Pt&&E.minFilter!==Ot}function v(E,A){return E.generateMipmaps&&A&&E.minFilter!==Pt&&E.minFilter!==Ot}function b(E,A,Z,K){e.generateMipmap(E);const D=i.get(A);D.__maxMipLevel=Math.log(Math.max(Z,K))*Math.LOG2E}function x(E,A,Z){if(a===!1)return A;if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=A;return A===e.RED&&(Z===e.FLOAT&&(K=e.R32F),Z===e.HALF_FLOAT&&(K=e.R16F),Z===e.UNSIGNED_BYTE&&(K=e.R8)),A===e.RGB&&(Z===e.FLOAT&&(K=e.RGB32F),Z===e.HALF_FLOAT&&(K=e.RGB16F),Z===e.UNSIGNED_BYTE&&(K=e.RGB8)),A===e.RGBA&&(Z===e.FLOAT&&(K=e.RGBA32F),Z===e.HALF_FLOAT&&(K=e.RGBA16F),Z===e.UNSIGNED_BYTE&&(K=e.RGBA8)),(K===e.R16F||K===e.R32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(E){return E===Pt||E===Gc||E===Vc?e.NEAREST:e.LINEAR}function w(E){const A=E.target;A.removeEventListener("dispose",w),R(A),A.isVideoTexture&&d.delete(A),o.memory.textures--}function O(E){const A=E.target;A.removeEventListener("dispose",O),q(A),o.memory.textures--}function R(E){const A=i.get(E);A.__webglInit!==void 0&&(e.deleteTexture(A.__webglTexture),i.remove(E))}function q(E){const A=i.get(E),Z=i.get(E.texture);if(!!E){if(Z.__webglTexture!==void 0&&e.deleteTexture(Z.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)e.deleteFramebuffer(A.__webglFramebuffer[K]),A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer[K]);else e.deleteFramebuffer(A.__webglFramebuffer),A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&e.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer&&e.deleteRenderbuffer(A.__webglColorRenderbuffer),A.__webglDepthRenderbuffer&&e.deleteRenderbuffer(A.__webglDepthRenderbuffer);i.remove(E.texture),i.remove(E)}}let H=0;function j(){H=0}function W(){const E=H;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),H+=1,E}function V(E,A){const Z=i.get(E);if(E.isVideoTexture&&z(E),E.version>0&&Z.__version!==E.version){const K=E.image;if(K===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Z,E,A);return}}n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_2D,Z.__webglTexture)}function F(E,A){const Z=i.get(E);if(E.version>0&&Z.__version!==E.version){_e(Z,E,A);return}n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_2D_ARRAY,Z.__webglTexture)}function B(E,A){const Z=i.get(E);if(E.version>0&&Z.__version!==E.version){_e(Z,E,A);return}n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_3D,Z.__webglTexture)}function X(E,A){if(E.image.length!==6)return;const Z=i.get(E);if(E.version>0&&Z.__version!==E.version){Me(Z,E),n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY);const K=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),D=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let xe=0;xe<6;xe++)!K&&!D?ee[xe]=_(E.image[xe],!1,!0,l):ee[xe]=D?E.image[xe].image:E.image[xe];const N=ee[0],se=m(N)||a,ae=s.convert(E.format),fe=s.convert(E.type),Ee=x(E.internalFormat,ae,fe);ce(e.TEXTURE_CUBE_MAP,E,se);let te;if(K){for(let xe=0;xe<6;xe++){te=ee[xe].mipmaps;for(let we=0;we<te.length;we++){const Ue=te[we];E.format!==hn&&E.format!==mi?ae!==null?n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,Ee,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we,Ee,Ue.width,Ue.height,0,ae,fe,Ue.data)}}Z.__maxMipLevel=te.length-1}else{te=E.mipmaps;for(let xe=0;xe<6;xe++)if(D){n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ee,ee[xe].width,ee[xe].height,0,ae,fe,ee[xe].data);for(let we=0;we<te.length;we++){const Ge=te[we].image[xe].image;n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,Ee,Ge.width,Ge.height,0,ae,fe,Ge.data)}}else{n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ee,ae,fe,ee[xe]);for(let we=0;we<te.length;we++){const Ue=te[we];n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we+1,Ee,ae,fe,Ue.image[xe])}}Z.__maxMipLevel=te.length}v(E,se)&&b(e.TEXTURE_CUBE_MAP,E,N.width,N.height),Z.__version=E.version,E.onUpdate&&E.onUpdate(E)}else n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture)}function ne(E,A){n.activeTexture(e.TEXTURE0+A),n.bindTexture(e.TEXTURE_CUBE_MAP,i.get(E).__webglTexture)}const ue={[yr]:e.REPEAT,[Kt]:e.CLAMP_TO_EDGE,[Io]:e.MIRRORED_REPEAT},he={[Pt]:e.NEAREST,[Gc]:e.NEAREST_MIPMAP_NEAREST,[Vc]:e.NEAREST_MIPMAP_LINEAR,[Ot]:e.LINEAR,[of]:e.LINEAR_MIPMAP_NEAREST,[vs]:e.LINEAR_MIPMAP_LINEAR};function ce(E,A,Z){Z?(e.texParameteri(E,e.TEXTURE_WRAP_S,ue[A.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,ue[A.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,ue[A.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,he[A.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,he[A.minFilter])):(e.texParameteri(E,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(E,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(A.wrapS!==Kt||A.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(E,e.TEXTURE_MAG_FILTER,S(A.magFilter)),e.texParameteri(E,e.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==Pt&&A.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const K=t.get("EXT_texture_filter_anisotropic");if(K){if(A.type===Fi&&t.get("OES_texture_float_linear")===null||A.type===jc&&(a||t.get("OES_texture_half_float_linear"))===null)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(e.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Me(E,A){E.__webglInit===void 0&&(E.__webglInit=!0,A.addEventListener("dispose",w),E.__webglTexture=e.createTexture(),o.memory.textures++)}function _e(E,A,Z){let K=e.TEXTURE_2D;A.isDataTexture2DArray&&(K=e.TEXTURE_2D_ARRAY),A.isDataTexture3D&&(K=e.TEXTURE_3D),Me(E,A),n.activeTexture(e.TEXTURE0+Z),n.bindTexture(K,E.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment);const D=g(A)&&m(A.image)===!1,ee=_(A.image,D,!1,u),N=m(ee)||a,se=s.convert(A.format);let ae=s.convert(A.type),fe=x(A.internalFormat,se,ae);ce(K,A,N);let Ee;const te=A.mipmaps;if(A.isDepthTexture)fe=e.DEPTH_COMPONENT,a?A.type===Fi?fe=e.DEPTH_COMPONENT32F:A.type===Tc?fe=e.DEPTH_COMPONENT24:A.type===Eo?fe=e.DEPTH24_STENCIL8:fe=e.DEPTH_COMPONENT16:A.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ds&&fe===e.DEPTH_COMPONENT&&A.type!==Wc&&A.type!==Tc&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Wc,ae=s.convert(A.type)),A.format===Oo&&fe===e.DEPTH_COMPONENT&&(fe=e.DEPTH_STENCIL,A.type!==Eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Eo,ae=s.convert(A.type))),n.texImage2D(e.TEXTURE_2D,0,fe,ee.width,ee.height,0,se,ae,null);else if(A.isDataTexture)if(te.length>0&&N){for(let xe=0,we=te.length;xe<we;xe++)Ee=te[xe],n.texImage2D(e.TEXTURE_2D,xe,fe,Ee.width,Ee.height,0,se,ae,Ee.data);A.generateMipmaps=!1,E.__maxMipLevel=te.length-1}else n.texImage2D(e.TEXTURE_2D,0,fe,ee.width,ee.height,0,se,ae,ee.data),E.__maxMipLevel=0;else if(A.isCompressedTexture){for(let xe=0,we=te.length;xe<we;xe++)Ee=te[xe],A.format!==hn&&A.format!==mi?se!==null?n.compressedTexImage2D(e.TEXTURE_2D,xe,fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(e.TEXTURE_2D,xe,fe,Ee.width,Ee.height,0,se,ae,Ee.data);E.__maxMipLevel=te.length-1}else if(A.isDataTexture2DArray)n.texImage3D(e.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,se,ae,ee.data),E.__maxMipLevel=0;else if(A.isDataTexture3D)n.texImage3D(e.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,se,ae,ee.data),E.__maxMipLevel=0;else if(te.length>0&&N){for(let xe=0,we=te.length;xe<we;xe++)Ee=te[xe],n.texImage2D(e.TEXTURE_2D,xe,fe,se,ae,Ee);A.generateMipmaps=!1,E.__maxMipLevel=te.length-1}else n.texImage2D(e.TEXTURE_2D,0,fe,se,ae,ee),E.__maxMipLevel=0;v(A,N)&&b(K,A,ee.width,ee.height),E.__version=A.version,A.onUpdate&&A.onUpdate(A)}function Ie(E,A,Z,K){const D=s.convert(A.texture.format),ee=s.convert(A.texture.type),N=x(A.texture.internalFormat,D,ee);n.texImage2D(K,0,N,A.width,A.height,0,D,ee,null),e.bindFramebuffer(e.FRAMEBUFFER,E),e.framebufferTexture2D(e.FRAMEBUFFER,Z,K,i.get(A.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function T(E,A,Z){if(e.bindRenderbuffer(e.RENDERBUFFER,E),A.depthBuffer&&!A.stencilBuffer){let K=e.DEPTH_COMPONENT16;if(Z){const D=A.depthTexture;D&&D.isDepthTexture&&(D.type===Fi?K=e.DEPTH_COMPONENT32F:D.type===Tc&&(K=e.DEPTH_COMPONENT24));const ee=I(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,K,A.width,A.height)}else e.renderbufferStorage(e.RENDERBUFFER,K,A.width,A.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,E)}else if(A.depthBuffer&&A.stencilBuffer){if(Z){const K=I(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,K,e.DEPTH24_STENCIL8,A.width,A.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,A.width,A.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,E)}else{const K=s.convert(A.texture.format),D=s.convert(A.texture.type),ee=x(A.texture.internalFormat,K,D);if(Z){const N=I(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,N,ee,A.width,A.height)}else e.renderbufferStorage(e.RENDERBUFFER,ee,A.width,A.height)}e.bindRenderbuffer(e.RENDERBUFFER,null)}function M(E,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(e.FRAMEBUFFER,E),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);const K=i.get(A.depthTexture).__webglTexture;if(A.depthTexture.format===ds)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(A.depthTexture.format===Oo)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function P(E){const A=i.get(E),Z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");M(A.__webglFramebuffer,E)}else if(Z){A.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer[K]),A.__webglDepthbuffer[K]=e.createRenderbuffer(),T(A.__webglDepthbuffer[K],E,!1)}else e.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=e.createRenderbuffer(),T(A.__webglDepthbuffer,E,!1);e.bindFramebuffer(e.FRAMEBUFFER,null)}function C(E){const A=i.get(E),Z=i.get(E.texture);E.addEventListener("dispose",O),Z.__webglTexture=e.createTexture(),o.memory.textures++;const K=E.isWebGLCubeRenderTarget===!0,D=E.isWebGLMultisampleRenderTarget===!0,ee=m(E)||a;if(a&&E.texture.format===mi&&(E.texture.type===Fi||E.texture.type===jc)&&(E.texture.format=hn,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),K){A.__webglFramebuffer=[];for(let N=0;N<6;N++)A.__webglFramebuffer[N]=e.createFramebuffer()}else if(A.__webglFramebuffer=e.createFramebuffer(),D)if(a){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer);const N=s.convert(E.texture.format),se=s.convert(E.texture.type),ae=x(E.texture.internalFormat,N,se),fe=I(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,fe,ae,E.width,E.height),e.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,A.__webglColorRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),T(A.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(e.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(K){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(e.TEXTURE_CUBE_MAP,E.texture,ee);for(let N=0;N<6;N++)Ie(A.__webglFramebuffer[N],E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+N);v(E.texture,ee)&&b(e.TEXTURE_CUBE_MAP,E.texture,E.width,E.height),n.bindTexture(e.TEXTURE_CUBE_MAP,null)}else n.bindTexture(e.TEXTURE_2D,Z.__webglTexture),ce(e.TEXTURE_2D,E.texture,ee),Ie(A.__webglFramebuffer,E,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),v(E.texture,ee)&&b(e.TEXTURE_2D,E.texture,E.width,E.height),n.bindTexture(e.TEXTURE_2D,null);E.depthBuffer&&P(E)}function U(E){const A=E.texture,Z=m(E)||a;if(v(A,Z)){const K=E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,D=i.get(A).__webglTexture;n.bindTexture(K,D),b(K,A,E.width,E.height),n.bindTexture(K,null)}}function G(E){if(E.isWebGLMultisampleRenderTarget)if(a){const A=i.get(E);e.bindFramebuffer(e.READ_FRAMEBUFFER,A.__webglMultisampledFramebuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,A.__webglFramebuffer);const Z=E.width,K=E.height;let D=e.COLOR_BUFFER_BIT;E.depthBuffer&&(D|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&(D|=e.STENCIL_BUFFER_BIT),e.blitFramebuffer(0,0,Z,K,0,0,Z,K,D,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function I(E){return a&&E.isWebGLMultisampleRenderTarget?Math.min(h,E.samples):0}function z(E){const A=o.render.frame;d.get(E)!==A&&(d.set(E,A),E.update())}let Y=!1,Q=!1;function J(E,A){E&&E.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),E=E.texture),V(E,A)}function ie(E,A){E&&E.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),E=E.texture),E&&E.isCubeTexture||Array.isArray(E.image)&&E.image.length===6?X(E,A):ne(E,A)}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=V,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=X,this.setTextureCubeDynamic=ne,this.setupRenderTarget=C,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=G,this.safeSetTexture2D=J,this.safeSetTextureCube=ie}function _1(e,t,n){const i=n.isWebGL2;function r(s){let o;if(s===va)return e.UNSIGNED_BYTE;if(s===ab)return e.UNSIGNED_SHORT_4_4_4_4;if(s===cb)return e.UNSIGNED_SHORT_5_5_5_1;if(s===lb)return e.UNSIGNED_SHORT_5_6_5;if(s===rb)return e.BYTE;if(s===sb)return e.SHORT;if(s===Wc)return e.UNSIGNED_SHORT;if(s===ob)return e.INT;if(s===Tc)return e.UNSIGNED_INT;if(s===Fi)return e.FLOAT;if(s===jc)return i?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ub)return e.ALPHA;if(s===mi)return e.RGB;if(s===hn)return e.RGBA;if(s===hb)return e.LUMINANCE;if(s===fb)return e.LUMINANCE_ALPHA;if(s===ds)return e.DEPTH_COMPONENT;if(s===Oo)return e.DEPTH_STENCIL;if(s===pb)return e.RED;if(s===mb)return e.RED_INTEGER;if(s===gb)return e.RG;if(s===yb)return e.RG_INTEGER;if(s===_b)return e.RGB_INTEGER;if(s===vb)return e.RGBA_INTEGER;if(s===bd||s===xd||s===wd||s===Md)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===bd)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xd)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wd)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Md)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ed||s===Sd||s===Td||s===Ad)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ed)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Td)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ad)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bb)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Rd||s===Ld)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Rd)return o.COMPRESSED_RGB8_ETC2;if(s===Ld)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===xb||s===wb||s===Mb||s===Eb||s===Sb||s===Tb||s===Ab||s===Rb||s===Lb||s===Pb||s===Cb||s===Db||s===Ib||s===Ob||s===Nb||s===kb||s===Bb||s===Ub||s===Hb||s===zb||s===Gb||s===Vb||s===Wb||s===jb||s===Xb||s===Yb||s===qb||s===Zb)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Fb)return o=t.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Eo)return i?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function ih(e){vt.call(this),this.cameras=e||[]}ih.prototype=Object.assign(Object.create(vt.prototype),{constructor:ih,isArrayCamera:!0});function Qn(){pe.call(this),this.type="Group"}Qn.prototype=Object.assign(Object.create(pe.prototype),{constructor:Qn,isGroup:!0});function To(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(To.prototype,{constructor:To,getHandSpace:function(){if(this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){let t=new Qn;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e)if(e.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(e.hand[l]){let u=t.getJointPose(e.hand[l],n);const h=c.joints[l];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;const d=c.joints[window.XRHand.INDEX_PHALANX_TIP],f=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=d.position.distanceTo(f.position),y=.02,_=.005;c.inputState.pinching&&p>y+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=y-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Lg(e,t){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new vt;u.layers.enable(1),u.viewport=new Qe;const h=new vt;h.layers.enable(2),h.viewport=new Qe;const d=[u,h],f=new ih;f.layers.enable(1),f.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=c[H];return j===void 0&&(j=new To,c[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=c[H];return j===void 0&&(j=new To,c[H]=j),j.getGripSpace()},this.getHand=function(H){let j=c[H];return j===void 0&&(j=new To,c[H]=j),j.getHandSpace()};function _(H){const j=l.get(H.inputSource);j&&j.dispatchEvent({type:H.type})}function m(){l.forEach(function(H,j){H.disconnect(j)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function g(H){s=H,q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(H){if(i=H,i!==null){i.addEventListener("select",_),i.addEventListener("selectstart",_),i.addEventListener("selectend",_),i.addEventListener("squeeze",_),i.addEventListener("squeezestart",_),i.addEventListener("squeezeend",_),i.addEventListener("end",m);const j=t.getContextAttributes();j.xrCompatible!==!0&&t.makeXRCompatible();const W={antialias:j.antialias,alpha:j.alpha,depth:j.depth,stencil:j.stencil,framebufferScaleFactor:r},V=new XRWebGLLayer(i,t,W);i.updateRenderState({baseLayer:V}),i.requestReferenceSpace(o).then(g),i.addEventListener("inputsourceschange",v)}};function v(H){const j=i.inputSources;for(let W=0;W<c.length;W++)l.set(j[W],c[W]);for(let W=0;W<H.removed.length;W++){const V=H.removed[W],F=l.get(V);F&&(F.dispatchEvent({type:"disconnected",data:V}),l.delete(V))}for(let W=0;W<H.added.length;W++){const V=H.added[W],F=l.get(V);F&&F.dispatchEvent({type:"connected",data:V})}}const b=new L,x=new L;function S(H,j,W){b.setFromMatrixPosition(j.matrixWorld),x.setFromMatrixPosition(W.matrixWorld);const V=b.distanceTo(x),F=j.projectionMatrix.elements,B=W.projectionMatrix.elements,X=F[14]/(F[10]-1),ne=F[14]/(F[10]+1),ue=(F[9]+1)/F[5],he=(F[9]-1)/F[5],ce=(F[8]-1)/F[0],Me=(B[8]+1)/B[0],_e=X*ce,Ie=X*Me,T=V/(-ce+Me),M=T*-ce;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(M),H.translateZ(T),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.getInverse(H.matrixWorld);const P=X+T,C=ne+T,U=_e-M,G=Ie+(V-M),I=ue*ne/C*P,z=he*ne/C*P;H.projectionMatrix.makePerspective(U,G,I,z,P,C)}function w(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.getInverse(H.matrixWorld)}this.getCamera=function(H){f.near=h.near=u.near=H.near,f.far=h.far=u.far=H.far,(p!==f.near||y!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,y=f.far);const j=H.parent,W=f.cameras;w(f,j);for(let F=0;F<W.length;F++)w(W[F],j);H.matrixWorld.copy(f.matrixWorld);const V=H.children;for(let F=0,B=V.length;F<B;F++)V[F].updateMatrixWorld(!0);return W.length===2?S(f,u,h):f.projectionMatrix.copy(u.projectionMatrix),f};let O=null;function R(H,j){if(a=j.getViewerPose(s),a!==null){const V=a.views,F=i.renderState.baseLayer;e.setFramebuffer(F.framebuffer);let B=!1;V.length!==f.cameras.length&&(f.cameras.length=0,B=!0);for(let X=0;X<V.length;X++){const ne=V[X],ue=F.getViewport(ne),he=d[X];he.matrix.fromArray(ne.transform.matrix),he.projectionMatrix.fromArray(ne.projectionMatrix),he.viewport.set(ue.x,ue.y,ue.width,ue.height),X===0&&f.matrix.copy(he.matrix),B===!0&&f.cameras.push(he)}}const W=i.inputSources;for(let V=0;V<c.length;V++){const F=c[V],B=W[V];F.update(B,j,s)}O&&O(H,j)}const q=new bg;q.setAnimationLoop(R),this.setAnimationLoop=function(H){O=H},this.dispose=function(){}}Object.assign(Lg.prototype,Hn.prototype);function v1(e){function t(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,x){g.isMeshBasicMaterial?i(m,g):g.isMeshLambertMaterial?(i(m,g),c(m,g)):g.isMeshToonMaterial?(i(m,g),u(m,g)):g.isMeshPhongMaterial?(i(m,g),l(m,g)):g.isMeshStandardMaterial?(i(m,g,v),g.isMeshPhysicalMaterial?d(m,g,v):h(m,g,v)):g.isMeshMatcapMaterial?(i(m,g),f(m,g)):g.isMeshDepthMaterial?(i(m,g),p(m,g)):g.isMeshDistanceMaterial?(i(m,g),y(m,g)):g.isMeshNormalMaterial?(i(m,g),_(m,g)):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&s(m,g)):g.isPointsMaterial?o(m,g,b,x):g.isSpriteMaterial?a(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(m,g,v){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);const b=g.envMap||v;if(b){m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio;var x=e.get(b).__maxMipLevel;x!==void 0&&(m.maxMipLevel.value=x)}g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let S;g.map?S=g.map:g.specularMap?S=g.specularMap:g.displacementMap?S=g.displacementMap:g.normalMap?S=g.normalMap:g.bumpMap?S=g.bumpMap:g.roughnessMap?S=g.roughnessMap:g.metalnessMap?S=g.metalnessMap:g.alphaMap?S=g.alphaMap:g.emissiveMap&&(S=g.emissiveMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let w;g.aoMap?w=g.aoMap:g.lightMap&&(w=g.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function s(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let v;g.map?v=g.map:g.alphaMap&&(v=g.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function l(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===It&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===It&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===It&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===It&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function h(m,g,v){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===It&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===It&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),(g.envMap||v)&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){h(m,g,v),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===It&&m.clearcoatNormalScale.value.negate()),m.transmission.value=g.transmission,g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap)}function f(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===It&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===It&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function y(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function _(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===It&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===It&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function xa(e){e=e||{};const t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,s=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",u=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let h=null,d=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=sn,this.physicallyCorrectLights=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const f=this;let p=!1,y=null,_=0,m=0,g=null,v=null,b=-1,x=null,S=null;const w=new Qe,O=new Qe;let R=null,q=t.width,H=t.height,j=1,W=null,V=null;const F=new Qe(0,0,q,H),B=new Qe(0,0,q,H);let X=!1;const ne=new ba,ue=new JM;let he=!1,ce=!1;const Me=new Fe,_e=new L,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function T(){return g===null?j:1}let M=n;function P(k,re){for(let $=0;$<k.length;$++){const le=k[$],ye=t.getContext(le,re);if(ye!==null)return ye}return null}try{const k={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),M===null){const re=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&re.shift(),M=P(re,k),M===null)throw P(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let C,U,G,I,z,Y,Q,J,ie,E,A,Z,K,D,ee,N,se,ae,fe;function Ee(){C=new KM(M),U=new ZM(M,C,e),U.isWebGL2===!1&&(C.get("WEBGL_depth_texture"),C.get("OES_texture_float"),C.get("OES_texture_half_float"),C.get("OES_texture_half_float_linear"),C.get("OES_standard_derivatives"),C.get("OES_element_index_uint"),C.get("OES_vertex_array_object"),C.get("ANGLE_instanced_arrays")),C.get("OES_texture_float_linear"),ae=new _1(M,C,U),G=new g1(M,C,U),G.scissor(O.copy(B).multiplyScalar(j).floor()),G.viewport(w.copy(F).multiplyScalar(j).floor()),I=new eE(M),z=new r1,Y=new y1(M,C,G,z,U,ae,I),Q=new Ex(M,U),fe=new YM(M,C,Q,U),J=new QM(M,Q,I,fe),ie=new rE(M,J,Q,I),ee=new iE(M),E=new i1(f,C,U,fe),A=new v1(z),Z=new a1(z),K=new d1,D=new XM(f,G,ie,a),N=new qM(M,C,I,U),se=new $M(M,C,I,U),I.programs=E.programs,f.capabilities=U,f.extensions=C,f.properties=z,f.renderLists=Z,f.state=G,f.info=I}Ee();const te=new Lg(f,M);this.xr=te;const xe=new Rg(f,ie,U.maxTextureSize);this.shadowMap=xe,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const k=C.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=C.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(k){k!==void 0&&(j=k,this.setSize(q,H,!1))},this.getSize=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),k=new oe),k.set(q,H)},this.setSize=function(k,re,$){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=k,H=re,t.width=Math.floor(k*j),t.height=Math.floor(re*j),$!==!1&&(t.style.width=k+"px",t.style.height=re+"px"),this.setViewport(0,0,k,re)},this.getDrawingBufferSize=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),k=new oe),k.set(q*j,H*j).floor()},this.setDrawingBufferSize=function(k,re,$){q=k,H=re,j=$,t.width=Math.floor(k*$),t.height=Math.floor(re*$),this.setViewport(0,0,k,re)},this.getCurrentViewport=function(k){return k===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),k=new Qe),k.copy(w)},this.getViewport=function(k){return k.copy(F)},this.setViewport=function(k,re,$,le){k.isVector4?F.set(k.x,k.y,k.z,k.w):F.set(k,re,$,le),G.viewport(w.copy(F).multiplyScalar(j).floor())},this.getScissor=function(k){return k.copy(B)},this.setScissor=function(k,re,$,le){k.isVector4?B.set(k.x,k.y,k.z,k.w):B.set(k,re,$,le),G.scissor(O.copy(B).multiplyScalar(j).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(k){G.setScissorTest(X=k)},this.setOpaqueSort=function(k){W=k},this.setTransparentSort=function(k){V=k},this.getClearColor=function(){return D.getClearColor()},this.setClearColor=function(){D.setClearColor.apply(D,arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha.apply(D,arguments)},this.clear=function(k,re,$){let le=0;(k===void 0||k)&&(le|=M.COLOR_BUFFER_BIT),(re===void 0||re)&&(le|=M.DEPTH_BUFFER_BIT),($===void 0||$)&&(le|=M.STENCIL_BUFFER_BIT),M.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),Z.dispose(),K.dispose(),z.dispose(),ie.dispose(),fe.dispose(),te.dispose(),Gn.stop()};function we(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,Ee()}function Ge(k){const re=k.target;re.removeEventListener("dispose",Ge),Js(re)}function Js(k){Ir(k),z.remove(k)}function Ir(k){const re=z.get(k).program;re!==void 0&&E.releaseProgram(re)}function Or(k,re){k.render(function($){f.renderBufferImmediate($,re)})}this.renderBufferImmediate=function(k,re){fe.initAttributes();const $=z.get(k);k.hasPositions&&!$.position&&($.position=M.createBuffer()),k.hasNormals&&!$.normal&&($.normal=M.createBuffer()),k.hasUvs&&!$.uv&&($.uv=M.createBuffer()),k.hasColors&&!$.color&&($.color=M.createBuffer());const le=re.getAttributes();k.hasPositions&&(M.bindBuffer(M.ARRAY_BUFFER,$.position),M.bufferData(M.ARRAY_BUFFER,k.positionArray,M.DYNAMIC_DRAW),fe.enableAttribute(le.position),M.vertexAttribPointer(le.position,3,M.FLOAT,!1,0,0)),k.hasNormals&&(M.bindBuffer(M.ARRAY_BUFFER,$.normal),M.bufferData(M.ARRAY_BUFFER,k.normalArray,M.DYNAMIC_DRAW),fe.enableAttribute(le.normal),M.vertexAttribPointer(le.normal,3,M.FLOAT,!1,0,0)),k.hasUvs&&(M.bindBuffer(M.ARRAY_BUFFER,$.uv),M.bufferData(M.ARRAY_BUFFER,k.uvArray,M.DYNAMIC_DRAW),fe.enableAttribute(le.uv),M.vertexAttribPointer(le.uv,2,M.FLOAT,!1,0,0)),k.hasColors&&(M.bindBuffer(M.ARRAY_BUFFER,$.color),M.bufferData(M.ARRAY_BUFFER,k.colorArray,M.DYNAMIC_DRAW),fe.enableAttribute(le.color),M.vertexAttribPointer(le.color,3,M.FLOAT,!1,0,0)),fe.disableUnusedAttributes(),M.drawArrays(M.TRIANGLES,0,k.count),k.count=0},this.renderBufferDirect=function(k,re,$,le,ye,Be){re===null&&(re=Ie);const Ne=ye.isMesh&&ye.matrixWorld.determinant()<0,Te=Fr(k,re,le,ye);G.setMaterial(le,Ne);let pt=$.index;const mt=$.attributes.position;if(pt===null){if(mt===void 0||mt.count===0)return}else if(pt.count===0)return;let ht=1;le.wireframe===!0&&(pt=J.getWireframeAttribute($),ht=2),(le.morphTargets||le.morphNormals)&&ee.update(ye,$,le,Te),fe.setup(ye,le,Te,$,pt);let Mt,Oe=N;pt!==null&&(Mt=Q.get(pt),Oe=se,Oe.setIndex(Mt));const gt=pt!==null?pt.count:mt.count,Lt=$.drawRange.start*ht,ct=$.drawRange.count*ht,Ea=Be!==null?Be.start*ht:0,Cn=Be!==null?Be.count*ht:1/0,Ei=Math.max(Lt,Ea),Xl=Math.min(gt,Lt+ct,Ea+Cn)-1,Sa=Math.max(0,Xl-Ei+1);if(Sa!==0){if(ye.isMesh)le.wireframe===!0?(G.setLineWidth(le.wireframeLinewidth*T()),Oe.setMode(M.LINES)):Oe.setMode(M.TRIANGLES);else if(ye.isLine){let eo=le.linewidth;eo===void 0&&(eo=1),G.setLineWidth(eo*T()),ye.isLineSegments?Oe.setMode(M.LINES):ye.isLineLoop?Oe.setMode(M.LINE_LOOP):Oe.setMode(M.LINE_STRIP)}else ye.isPoints?Oe.setMode(M.POINTS):ye.isSprite&&Oe.setMode(M.TRIANGLES);if(ye.isInstancedMesh)Oe.renderInstances(Ei,Sa,ye.count);else if($.isInstancedBufferGeometry){const eo=Math.min($.instanceCount,$._maxInstanceCount);Oe.renderInstances(Ei,Sa,eo)}else Oe.render(Ei,Sa)}},this.compile=function(k,re){d=K.get(k,re),d.init(),k.traverse(function(le){le.isLight&&(d.pushLight(le),le.castShadow&&d.pushShadow(le))}),d.setupLights(re);const $=new WeakMap;k.traverse(function(le){let ye=le.material;if(ye)if(Array.isArray(ye))for(let Be=0;Be<ye.length;Be++){let Ne=ye[Be];$.has(Ne)===!1&&(Ct(Ne,k,le),$.set(Ne))}else $.has(ye)===!1&&(Ct(ye,k,le),$.set(ye))})};let Ks=null;function Wl(k){te.isPresenting||Ks&&Ks(k)}const Gn=new bg;Gn.setAnimationLoop(Wl),typeof window!="undefined"&&Gn.setContext(window),this.setAnimationLoop=function(k){Ks=k,te.setAnimationLoop(k),k===null?Gn.stop():Gn.start()},this.render=function(k,re){let $,le;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),$=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),le=arguments[3]),re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;fe.resetDefaultState(),b=-1,x=null,k.autoUpdate===!0&&k.updateMatrixWorld(),re.parent===null&&re.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(re=te.getCamera(re)),k.isScene===!0&&k.onBeforeRender(f,k,re,$||g),d=K.get(k,re),d.init(),Me.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ne.setFromProjectionMatrix(Me),ce=this.localClippingEnabled,he=ue.init(this.clippingPlanes,ce,re),h=Z.get(k,re),h.init(),_n(k,re,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(W,V),he===!0&&ue.beginShadows();const ye=d.state.shadowsArray;xe.render(ye,k,re),d.setupLights(re),he===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),$!==void 0&&this.setRenderTarget($),D.render(h,k,re,le);const Be=h.opaque,Ne=h.transparent;Be.length>0&&Mi(Be,k,re),Ne.length>0&&Mi(Ne,k,re),k.isScene===!0&&k.onAfterRender(f,k,re),g!==null&&(Y.updateRenderTargetMipmap(g),Y.updateMultisampleRenderTarget(g)),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1),h=null,d=null};function _n(k,re,$,le){if(k.visible===!1)return;if(k.layers.test(re.layers)){if(k.isGroup)$=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(re);else if(k.isLight)d.pushLight(k),k.castShadow&&d.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||ne.intersectsSprite(k)){le&&_e.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Me);const Ne=ie.update(k),Te=k.material;Te.visible&&h.push(k,Ne,Te,$,_e.z,null)}}else if(k.isImmediateRenderObject)le&&_e.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Me),h.push(k,null,k.material,$,_e.z,null);else if((k.isMesh||k.isLine||k.isPoints)&&(k.isSkinnedMesh&&k.skeleton.frame!==I.render.frame&&(k.skeleton.update(),k.skeleton.frame=I.render.frame),!k.frustumCulled||ne.intersectsObject(k))){le&&_e.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Me);const Ne=ie.update(k),Te=k.material;if(Array.isArray(Te)){const pt=Ne.groups;for(let mt=0,ht=pt.length;mt<ht;mt++){const Mt=pt[mt],Oe=Te[Mt.materialIndex];Oe&&Oe.visible&&h.push(k,Ne,Oe,$,_e.z,Mt)}}else Te.visible&&h.push(k,Ne,Te,$,_e.z,null)}}const Be=k.children;for(let Ne=0,Te=Be.length;Ne<Te;Ne++)_n(Be[Ne],re,$,le)}function Mi(k,re,$){const le=re.isScene===!0?re.overrideMaterial:null;for(let ye=0,Be=k.length;ye<Be;ye++){const Ne=k[ye],Te=Ne.object,pt=Ne.geometry,mt=le===null?Ne.material:le,ht=Ne.group;if($.isArrayCamera){S=$;const Mt=$.cameras;for(let Oe=0,gt=Mt.length;Oe<gt;Oe++){const Lt=Mt[Oe];Te.layers.test(Lt.layers)&&(G.viewport(w.copy(Lt.viewport)),d.setupLights(Lt),Qs(Te,re,Lt,pt,mt,ht))}}else S=null,Qs(Te,re,$,pt,mt,ht)}}function Qs(k,re,$,le,ye,Be){if(k.onBeforeRender(f,re,$,le,ye,Be),d=K.get(re,S||$),k.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),k.isImmediateRenderObject){const Ne=Fr($,re,ye,k);G.setMaterial(ye),fe.reset(),Or(k,Ne)}else f.renderBufferDirect($,re,le,ye,k,Be);k.onAfterRender(f,re,$,le,ye,Be),d=K.get(re,S||$)}function Ct(k,re,$){re.isScene!==!0&&(re=Ie);const le=z.get(k),ye=d.state.lights,Be=d.state.shadowsArray,Ne=ye.state.version,Te=E.getParameters(k,ye.state,Be,re,ue.numPlanes,ue.numIntersection,$),pt=E.getProgramCacheKey(Te);let mt=le.program,ht=!0;if(mt===void 0)k.addEventListener("dispose",Ge);else if(mt.cacheKey!==pt)Ir(k);else if(le.lightsStateVersion!==Ne)le.lightsStateVersion=Ne,ht=!1;else{if(Te.shaderID!==void 0)return;ht=!1}ht&&(Te.uniforms=E.getUniforms(k,Te),k.onBeforeCompile(Te,f),mt=E.acquireProgram(Te,pt),le.program=mt,le.uniforms=Te.uniforms,le.outputEncoding=Te.outputEncoding);const Mt=mt.getAttributes();if(k.morphTargets){k.numSupportedMorphTargets=0;for(let ct=0;ct<f.maxMorphTargets;ct++)Mt["morphTarget"+ct]>=0&&k.numSupportedMorphTargets++}if(k.morphNormals){k.numSupportedMorphNormals=0;for(let ct=0;ct<f.maxMorphNormals;ct++)Mt["morphNormal"+ct]>=0&&k.numSupportedMorphNormals++}const Oe=le.uniforms;(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(le.numClippingPlanes=ue.numPlanes,le.numIntersection=ue.numIntersection,Oe.clippingPlanes=ue.uniform),le.environment=k.isMeshStandardMaterial?re.environment:null,le.fog=re.fog,le.needsLights=jl(k),le.lightsStateVersion=Ne,le.needsLights&&(Oe.ambientLightColor.value=ye.state.ambient,Oe.lightProbe.value=ye.state.probe,Oe.directionalLights.value=ye.state.directional,Oe.directionalLightShadows.value=ye.state.directionalShadow,Oe.spotLights.value=ye.state.spot,Oe.spotLightShadows.value=ye.state.spotShadow,Oe.rectAreaLights.value=ye.state.rectArea,Oe.pointLights.value=ye.state.point,Oe.pointLightShadows.value=ye.state.pointShadow,Oe.hemisphereLights.value=ye.state.hemi,Oe.directionalShadowMap.value=ye.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,Oe.spotShadowMap.value=ye.state.spotShadowMap,Oe.spotShadowMatrix.value=ye.state.spotShadowMatrix,Oe.pointShadowMap.value=ye.state.pointShadowMap,Oe.pointShadowMatrix.value=ye.state.pointShadowMatrix);const gt=le.program.getUniforms(),Lt=zi.seqWithValue(gt.seq,Oe);le.uniformsList=Lt}function Fr(k,re,$,le){re.isScene!==!0&&(re=Ie),Y.resetTextureUnits();const ye=re.fog,Be=$.isMeshStandardMaterial?re.environment:null,Ne=g===null?f.outputEncoding:g.texture.encoding,Te=z.get($),pt=d.state.lights;if(he===!0&&(ce===!0||k!==x)){const ct=k===x&&$.id===b;ue.setState($.clippingPlanes,$.clipIntersection,$.clipShadows,k,Te,ct)}$.version===Te.__version?(Te.program===void 0||$.fog&&Te.fog!==ye||Te.environment!==Be||Te.needsLights&&Te.lightsStateVersion!==pt.state.version||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ue.numPlanes||Te.numIntersection!==ue.numIntersection)||Te.outputEncoding!==Ne)&&Ct($,re,le):(Ct($,re,le),Te.__version=$.version);let mt=!1,ht=!1,Mt=!1;const Oe=Te.program,gt=Oe.getUniforms(),Lt=Te.uniforms;if(G.useProgram(Oe.program)&&(mt=!0,ht=!0,Mt=!0),$.id!==b&&(b=$.id,ht=!0),mt||x!==k){if(gt.setValue(M,"projectionMatrix",k.projectionMatrix),U.logarithmicDepthBuffer&&gt.setValue(M,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),x!==k&&(x=k,ht=!0,Mt=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const ct=gt.map.cameraPosition;ct!==void 0&&ct.setValue(M,_e.setFromMatrixPosition(k.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(M,"isOrthographic",k.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||$.skinning)&&gt.setValue(M,"viewMatrix",k.matrixWorldInverse)}if($.skinning){gt.setOptional(M,le,"bindMatrix"),gt.setOptional(M,le,"bindMatrixInverse");const ct=le.skeleton;if(ct){const Ea=ct.bones;if(U.floatVertexTextures){if(ct.boneTexture===void 0){let Cn=Math.sqrt(Ea.length*4);Cn=De.ceilPowerOfTwo(Cn),Cn=Math.max(Cn,4);const Ei=new Float32Array(Cn*Cn*4);Ei.set(ct.boneMatrices);const Xl=new Ms(Ei,Cn,Cn,hn,Fi);ct.boneMatrices=Ei,ct.boneTexture=Xl,ct.boneTextureSize=Cn}gt.setValue(M,"boneTexture",ct.boneTexture,Y),gt.setValue(M,"boneTextureSize",ct.boneTextureSize)}else gt.setOptional(M,ct,"boneMatrices")}}return(ht||Te.receiveShadow!==le.receiveShadow)&&(Te.receiveShadow=le.receiveShadow,gt.setValue(M,"receiveShadow",le.receiveShadow)),ht&&(gt.setValue(M,"toneMappingExposure",f.toneMappingExposure),Te.needsLights&&$s(Lt,Mt),ye&&$.fog&&A.refreshFogUniforms(Lt,ye),A.refreshMaterialUniforms(Lt,$,Be,j,H),Lt.ltc_1!==void 0&&(Lt.ltc_1.value=me.LTC_1),Lt.ltc_2!==void 0&&(Lt.ltc_2.value=me.LTC_2),zi.upload(M,Te.uniformsList,Lt,Y)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zi.upload(M,Te.uniformsList,Lt,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(M,"center",le.center),gt.setValue(M,"modelViewMatrix",le.modelViewMatrix),gt.setValue(M,"normalMatrix",le.normalMatrix),gt.setValue(M,"modelMatrix",le.matrixWorld),Oe}function $s(k,re){k.ambientLightColor.needsUpdate=re,k.lightProbe.needsUpdate=re,k.directionalLights.needsUpdate=re,k.directionalLightShadows.needsUpdate=re,k.pointLights.needsUpdate=re,k.pointLightShadows.needsUpdate=re,k.spotLights.needsUpdate=re,k.spotLightShadows.needsUpdate=re,k.rectAreaLights.needsUpdate=re,k.hemisphereLights.needsUpdate=re}function jl(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.setFramebuffer=function(k){y!==k&&g===null&&M.bindFramebuffer(M.FRAMEBUFFER,k),y=k},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return g},this.setRenderTarget=function(k,re,$){g=k,_=re,m=$,k&&z.get(k).__webglFramebuffer===void 0&&Y.setupRenderTarget(k);let le=y,ye=!1;if(k){const Be=z.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(le=Be[re||0],ye=!0):k.isWebGLMultisampleRenderTarget?le=z.get(k).__webglMultisampledFramebuffer:le=Be,w.copy(k.viewport),O.copy(k.scissor),R=k.scissorTest}else w.copy(F).multiplyScalar(j).floor(),O.copy(B).multiplyScalar(j).floor(),R=X;if(v!==le&&(M.bindFramebuffer(M.FRAMEBUFFER,le),v=le),G.viewport(w),G.scissor(O),G.setScissorTest(R),ye){const Be=z.get(k.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+(re||0),Be.__webglTexture,$||0)}},this.readRenderTargetPixels=function(k,re,$,le,ye,Be,Ne){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=z.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Ne!==void 0&&(Te=Te[Ne]),Te){let pt=!1;Te!==v&&(M.bindFramebuffer(M.FRAMEBUFFER,Te),pt=!0);try{const mt=k.texture,ht=mt.format,Mt=mt.type;if(ht!==hn&&ae.convert(ht)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt!==va&&ae.convert(Mt)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Mt===Fi&&(U.isWebGL2||C.get("OES_texture_float")||C.get("WEBGL_color_buffer_float")))&&!(Mt===jc&&(U.isWebGL2?C.get("EXT_color_buffer_float"):C.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M.checkFramebufferStatus(M.FRAMEBUFFER)===M.FRAMEBUFFER_COMPLETE?re>=0&&re<=k.width-le&&$>=0&&$<=k.height-ye&&M.readPixels(re,$,le,ye,ae.convert(ht),ae.convert(Mt),Be):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{pt&&M.bindFramebuffer(M.FRAMEBUFFER,v)}}},this.copyFramebufferToTexture=function(k,re,$){$===void 0&&($=0);const le=Math.pow(2,-$),ye=Math.floor(re.image.width*le),Be=Math.floor(re.image.height*le),Ne=ae.convert(re.format);Y.setTexture2D(re,0),M.copyTexImage2D(M.TEXTURE_2D,$,Ne,k.x,k.y,ye,Be,0),G.unbindTexture()},this.copyTextureToTexture=function(k,re,$,le){le===void 0&&(le=0);const ye=re.image.width,Be=re.image.height,Ne=ae.convert($.format),Te=ae.convert($.type);Y.setTexture2D($,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,$.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,$.unpackAlignment),re.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,le,k.x,k.y,ye,Be,Ne,Te,re.image.data):re.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,le,k.x,k.y,re.mipmaps[0].width,re.mipmaps[0].height,Ne,re.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,le,k.x,k.y,Ne,Te,re.image),le===0&&$.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),G.unbindTexture()},this.initTexture=function(k){Y.setTexture2D(k,0),G.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function tp(e){xa.call(this,e)}tp.prototype=Object.assign(Object.create(xa.prototype),{constructor:tp,isWebGL1Renderer:!0});function rh(e,t){this.name="",this.color=new de(e),this.density=t!==void 0?t:25e-5}Object.assign(rh.prototype,{isFogExp2:!0,clone:function(){return new rh(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function Zc(e,t,n){this.name="",this.color=new de(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}Object.assign(Zc.prototype,{isFog:!0,clone:function(){return new Zc(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function un(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=De.generateUUID()}Object.defineProperty(un.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(un.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=De.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new un(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=De.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const rr=new L;function Yi(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(Yi.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}});Object.assign(Yi.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)rr.x=this.getX(t),rr.y=this.getY(t),rr.z=this.getZ(t),rr.applyMatrix4(e),this.setXYZ(t,rr.x,rr.y,rr.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Re(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Sr(e){Le.call(this),this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Sr.prototype=Object.create(Le.prototype);Sr.prototype.constructor=Sr;Sr.prototype.isSpriteMaterial=!0;Sr.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};let Jr;const lo=new L,Kr=new L,Qr=new L,$r=new oe,uo=new oe,Pg=new Fe,$a=new L,ho=new L,ec=new L,np=new oe,Au=new oe,ip=new oe;function sh(e){if(pe.call(this),this.type="Sprite",Jr===void 0){Jr=new be;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new un(t,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new Yi(n,3,0,!1)),Jr.setAttribute("uv",new Yi(n,2,3,!1))}this.geometry=Jr,this.material=e!==void 0?e:new Sr,this.center=new oe(.5,.5)}sh.prototype=Object.assign(Object.create(pe.prototype),{constructor:sh,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),Pg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Qr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;tc($a.set(-.5,-.5,0),Qr,s,Kr,i,r),tc(ho.set(.5,-.5,0),Qr,s,Kr,i,r),tc(ec.set(.5,.5,0),Qr,s,Kr,i,r),np.set(0,0),Au.set(1,0),ip.set(1,1);let o=e.ray.intersectTriangle($a,ho,ec,!1,lo);if(o===null&&(tc(ho.set(-.5,.5,0),Qr,s,Kr,i,r),Au.set(0,1),o=e.ray.intersectTriangle($a,ec,ho,!1,lo),o===null))return;const a=e.ray.origin.distanceTo(lo);a<e.near||a>e.far||t.push({distance:a,point:lo.clone(),uv:Bt.getUV(lo,$a,ho,ec,np,Au,ip,new oe),face:null,object:this})},copy:function(e){return pe.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function tc(e,t,n,i,r,s){$r.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(uo.x=s*$r.x-r*$r.y,uo.y=r*$r.x+s*$r.y):uo.copy($r),e.copy(t),e.x+=uo.x,e.y+=uo.y,e.applyMatrix4(Pg)}const nc=new L,rp=new L;function Jc(){pe.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Jc.prototype=Object.assign(Object.create(pe.prototype),{constructor:Jc,isLOD:!0,copy:function(e){pe.prototype.copy.call(this,e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){if(this.levels.length>0){nc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(nc);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){const t=this.levels;if(t.length>1){nc.setFromMatrixPosition(e.matrixWorld),rp.setFromMatrixPosition(this.matrixWorld);const n=nc.distanceTo(rp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){const t=pe.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}});function Kc(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),nt.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}Kc.prototype=Object.assign(Object.create(nt.prototype),{constructor:Kc,isSkinnedMesh:!0,copy:function(e){return nt.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){nt.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){const e=new L,t=new Qe,n=new Qe,i=new L,r=new Fe;return function(s,o){const a=this.skeleton,c=this.geometry;t.fromBufferAttribute(c.attributes.skinIndex,s),n.fromBufferAttribute(c.attributes.skinWeight,s),e.fromBufferAttribute(c.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let l=0;l<4;l++){const u=n.getComponent(l);if(u!==0){const h=t.getComponent(l);r.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),o.addScaledVector(i.copy(e).applyMatrix4(r),u)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const sp=new Fe,b1=new Fe;function Qc(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}Object.assign(Qc.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:b1;sp.multiplyMatrices(o,t[r]),sp.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new Qc(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function oh(){pe.call(this),this.type="Bone"}oh.prototype=Object.assign(Object.create(pe.prototype),{constructor:oh,isBone:!0});const op=new Fe,ap=new Fe,ic=[],fo=new nt;function ah(e,t,n){nt.call(this,e,t),this.instanceMatrix=new Re(new Float32Array(n*16),16),this.count=n,this.frustumCulled=!1}ah.prototype=Object.assign(Object.create(nt.prototype),{constructor:ah,isInstancedMesh:!0,copy:function(e){return nt.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){const n=this.matrixWorld,i=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,op),ap.multiplyMatrices(n,op),fo.matrixWorld=ap,fo.raycast(e,ic);for(let s=0,o=ic.length;s<o;s++){const a=ic[s];a.instanceId=r,a.object=this,t.push(a)}ic.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function wt(e){Le.call(this),this.type="LineBasicMaterial",this.color=new de(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}wt.prototype=Object.create(Le.prototype);wt.prototype.constructor=wt;wt.prototype.isLineBasicMaterial=!0;wt.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};const cp=new L,lp=new L,up=new Fe,rc=new qs,sc=new ai;function dn(e,t,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),pe.call(this),this.type="Line",this.geometry=e!==void 0?e:new be,this.material=t!==void 0?t:new wt,this.updateMorphTargets()}dn.prototype=Object.assign(Object.create(pe.prototype),{constructor:dn,isLine:!0,copy:function(e){return pe.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)cp.fromBufferAttribute(t,i-1),lp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cp.distanceTo(lp);e.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;n[0]=0;for(let i=1,r=t.length;i<r;i++)n[i]=n[i-1],n[i]+=t[i-1].distanceTo(t[i])}return this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;up.getInverse(i),rc.copy(e.ray).applyMatrix4(up);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new L,c=new L,l=new L,u=new L,h=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,p=n.attributes.position.array;if(d!==null){const y=d.array;for(let _=0,m=y.length-1;_<m;_+=h){const g=y[_],v=y[_+1];if(a.fromArray(p,g*3),c.fromArray(p,v*3),rc.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(u);x<e.near||x>e.far||t.push({distance:x,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else for(let y=0,_=p.length/3-1;y<_;y+=h){if(a.fromArray(p,3*y),c.fromArray(p,3*y+3),rc.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(u);g<e.near||g>e.far||t.push({distance:g,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,f=d.length;for(let p=0;p<f-1;p+=h){if(rc.distanceSqToSegment(d[p],d[p+1],u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const oc=new L,ac=new L;function Rt(e,t){dn.call(this,e,t),this.type="LineSegments"}Rt.prototype=Object.assign(Object.create(dn.prototype),{constructor:Rt,isLineSegments:!0,computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)oc.fromBufferAttribute(t,i),ac.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oc.distanceTo(ac);e.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;for(let i=0,r=t.length;i<r;i+=2)oc.copy(t[i]),ac.copy(t[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oc.distanceTo(ac)}return this}});function $c(e,t){dn.call(this,e,t),this.type="LineLoop"}$c.prototype=Object.assign(Object.create(dn.prototype),{constructor:$c,isLineLoop:!0});function qi(e){Le.call(this),this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}qi.prototype=Object.create(Le.prototype);qi.prototype.constructor=qi;qi.prototype.isPointsMaterial=!0;qi.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};const hp=new Fe,ch=new qs,cc=new ai,lc=new L;function el(e,t){pe.call(this),this.type="Points",this.geometry=e!==void 0?e:new be,this.material=t!==void 0?t:new qi,this.updateMorphTargets()}el.prototype=Object.assign(Object.create(pe.prototype),{constructor:el,isPoints:!0,copy:function(e){return pe.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(i),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;hp.getInverse(i),ch.copy(e.ray).applyMatrix4(hp);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position.array;if(a!==null){const u=a.array;for(let h=0,d=u.length;h<d;h++){const f=u[h];lc.fromArray(l,f*3),Ru(lc,f,o,i,e,t,this)}}else for(let u=0,h=l.length/3;u<h;u++)lc.fromArray(l,u*3),Ru(lc,u,o,i,e,t,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)Ru(a[c],c,o,i,e,t,this)}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Ru(e,t,n,i,r,s,o){const a=ch.distanceSqToPoint(e);if(a<n){const c=new L;ch.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}function fp(e,t,n,i,r,s,o,a,c){it.call(this,e,t,n,i,r,s,o,a,c),this.format=o!==void 0?o:mi,this.minFilter=s!==void 0?s:Ot,this.magFilter=r!==void 0?r:Ot,this.generateMipmaps=!1;const l=this;function u(){l.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}fp.prototype=Object.assign(Object.create(it.prototype),{constructor:fp,isVideoTexture:!0,update:function(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Wo(e,t,n,i,r,s,o,a,c,l,u,h){it.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Wo.prototype=Object.create(it.prototype);Wo.prototype.constructor=Wo;Wo.prototype.isCompressedTexture=!0;function jo(e,t,n,i,r,s,o,a,c){it.call(this,e,t,n,i,r,s,o,a,c),this.needsUpdate=!0}jo.prototype=Object.create(it.prototype);jo.prototype.constructor=jo;jo.prototype.isCanvasTexture=!0;function tl(e,t,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:ds,l!==ds&&l!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ds&&(n=Wc),n===void 0&&l===Oo&&(n=Eo),it.call(this,null,i,r,s,o,a,l,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=a!==void 0?a:Pt,this.flipY=!1,this.generateMipmaps=!1}tl.prototype=Object.create(it.prototype);tl.prototype.constructor=tl;tl.prototype.isDepthTexture=!0;function nl(e){be.call(this),this.type="WireframeGeometry";const t=[],n=[0,0],i={},r=["a","b","c"];if(e&&e.isGeometry){const s=e.faces;for(let o=0,a=s.length;o<a;o++){const c=s[o];for(let l=0;l<3;l++){const u=c[r[l]],h=c[r[(l+1)%3]];n[0]=Math.min(u,h),n[1]=Math.max(u,h);const d=n[0]+","+n[1];i[d]===void 0&&(i[d]={index1:n[0],index2:n[1]})}}for(const o in i){const a=i[o];let c=e.vertices[a.index1];t.push(c.x,c.y,c.z),c=e.vertices[a.index2],t.push(c.x,c.y,c.z)}}else if(e&&e.isBufferGeometry){let s=new L;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let p=d,y=d+f;p<y;p+=3)for(let _=0;_<3;_++){const m=a.getX(p+_),g=a.getX(p+(_+1)%3);n[0]=Math.min(m,g),n[1]=Math.max(m,g);const v=n[0]+","+n[1];i[v]===void 0&&(i[v]={index1:n[0],index2:n[1]})}}for(const l in i){const u=i[l];s.fromBufferAttribute(o,u.index1),t.push(s.x,s.y,s.z),s.fromBufferAttribute(o,u.index2),t.push(s.x,s.y,s.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l;s.fromBufferAttribute(o,u),t.push(s.x,s.y,s.z);const h=3*a+(l+1)%3;s.fromBufferAttribute(o,h),t.push(s.x,s.y,s.z)}}}this.setAttribute("position",new ge(t,3))}nl.prototype=Object.create(be.prototype);nl.prototype.constructor=nl;function il(e,t,n){Ce.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new Xo(e,t,n)),this.mergeVertices()}il.prototype=Object.create(Ce.prototype);il.prototype.constructor=il;function Xo(e,t,n){be.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new L,l=new L,u=new L,h=new L,d=new L;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const f=t+1;for(let p=0;p<=n;p++){const y=p/n;for(let _=0;_<=t;_++){const m=_/t;e(m,y,l),r.push(l.x,l.y,l.z),m-a>=0?(e(m-a,y,u),h.subVectors(l,u)):(e(m+a,y,u),h.subVectors(u,l)),y-a>=0?(e(m,y-a,u),d.subVectors(l,u)):(e(m,y+a,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(m,y)}}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=p*f+y,m=p*f+y+1,g=(p+1)*f+y+1,v=(p+1)*f+y;i.push(_,m,v),i.push(m,g,v)}this.setIndex(i),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(o,2))}Xo.prototype=Object.create(be.prototype);Xo.prototype.constructor=Xo;function rl(e,t,n,i){Ce.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new pn(e,t,n,i)),this.mergeVertices()}rl.prototype=Object.create(Ce.prototype);rl.prototype.constructor=rl;function pn(e,t,n,i){be.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1,i=i||0;const r=[],s=[];o(i),c(n),l(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const g=new L,v=new L,b=new L;for(let x=0;x<t.length;x+=3)d(t[x+0],g),d(t[x+1],v),d(t[x+2],b),a(g,v,b,m)}function a(m,g,v,b){const x=Math.pow(2,b),S=[];for(let w=0;w<=x;w++){S[w]=[];const O=m.clone().lerp(v,w/x),R=g.clone().lerp(v,w/x),q=x-w;for(let H=0;H<=q;H++)H===0&&w===x?S[w][H]=O:S[w][H]=O.clone().lerp(R,H/q)}for(let w=0;w<x;w++)for(let O=0;O<2*(x-w)-1;O++){const R=Math.floor(O/2);O%2===0?(h(S[w][R+1]),h(S[w+1][R]),h(S[w][R])):(h(S[w][R+1]),h(S[w+1][R+1]),h(S[w+1][R]))}}function c(m){const g=new L;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(m),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function l(){const m=new L;for(let g=0;g<r.length;g+=3){m.x=r[g+0],m.y=r[g+1],m.z=r[g+2];const v=y(m)/2/Math.PI+.5,b=_(m)/Math.PI+.5;s.push(v,1-b)}f(),u()}function u(){for(let m=0;m<s.length;m+=6){const g=s[m+0],v=s[m+2],b=s[m+4],x=Math.max(g,v,b),S=Math.min(g,v,b);x>.9&&S<.1&&(g<.2&&(s[m+0]+=1),v<.2&&(s[m+2]+=1),b<.2&&(s[m+4]+=1))}}function h(m){r.push(m.x,m.y,m.z)}function d(m,g){const v=m*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function f(){const m=new L,g=new L,v=new L,b=new L,x=new oe,S=new oe,w=new oe;for(let O=0,R=0;O<r.length;O+=9,R+=6){m.set(r[O+0],r[O+1],r[O+2]),g.set(r[O+3],r[O+4],r[O+5]),v.set(r[O+6],r[O+7],r[O+8]),x.set(s[R+0],s[R+1]),S.set(s[R+2],s[R+3]),w.set(s[R+4],s[R+5]),b.copy(m).add(g).add(v).divideScalar(3);const q=y(b);p(x,R+0,m,q),p(S,R+2,g,q),p(w,R+4,v,q)}}function p(m,g,v,b){b<0&&m.x===1&&(s[g]=m.x-1),v.x===0&&v.z===0&&(s[g]=b/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function _(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}pn.prototype=Object.create(be.prototype);pn.prototype.constructor=pn;function sl(e,t){Ce.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Yo(e,t)),this.mergeVertices()}sl.prototype=Object.create(Ce.prototype);sl.prototype.constructor=sl;function Yo(e,t){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];pn.call(this,n,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}Yo.prototype=Object.create(pn.prototype);Yo.prototype.constructor=Yo;function ol(e,t){Ce.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Es(e,t)),this.mergeVertices()}ol.prototype=Object.create(Ce.prototype);ol.prototype.constructor=ol;function Es(e,t){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];pn.call(this,n,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}Es.prototype=Object.create(pn.prototype);Es.prototype.constructor=Es;function al(e,t){Ce.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new qo(e,t)),this.mergeVertices()}al.prototype=Object.create(Ce.prototype);al.prototype.constructor=al;function qo(e,t){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];pn.call(this,i,r,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}qo.prototype=Object.create(pn.prototype);qo.prototype.constructor=qo;function cl(e,t){Ce.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Zo(e,t)),this.mergeVertices()}cl.prototype=Object.create(Ce.prototype);cl.prototype.constructor=cl;function Zo(e,t){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];pn.call(this,r,s,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}Zo.prototype=Object.create(pn.prototype);Zo.prototype.constructor=Zo;function ll(e,t,n,i,r,s){Ce.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},s!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");const o=new Ss(e,t,n,i,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals,this.fromBufferGeometry(o),this.mergeVertices()}ll.prototype=Object.create(Ce.prototype);ll.prototype.constructor=ll;function Ss(e,t,n,i,r){be.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;const s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new L,a=new L,c=new oe;let l=new L;const u=[],h=[],d=[],f=[];p(),this.setIndex(f),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function p(){for(let g=0;g<t;g++)y(g);y(r===!1?t:0),m(),_()}function y(g){l=e.getPointAt(g/t,l);const v=s.normals[g],b=s.binormals[g];for(let x=0;x<=i;x++){const S=x/i*Math.PI*2,w=Math.sin(S),O=-Math.cos(S);a.x=O*v.x+w*b.x,a.y=O*v.y+w*b.y,a.z=O*v.z+w*b.z,a.normalize(),h.push(a.x,a.y,a.z),o.x=l.x+n*a.x,o.y=l.y+n*a.y,o.z=l.z+n*a.z,u.push(o.x,o.y,o.z)}}function _(){for(let g=1;g<=t;g++)for(let v=1;v<=i;v++){const b=(i+1)*(g-1)+(v-1),x=(i+1)*g+(v-1),S=(i+1)*g+v,w=(i+1)*(g-1)+v;f.push(b,x,w),f.push(x,S,w)}}function m(){for(let g=0;g<=t;g++)for(let v=0;v<=i;v++)c.x=g/t,c.y=v/i,d.push(c.x,c.y)}}Ss.prototype=Object.create(be.prototype);Ss.prototype.constructor=Ss;Ss.prototype.toJSON=function(){const e=be.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e};function ul(e,t,n,i,r,s,o){Ce.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},o!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Jo(e,t,n,i,r,s)),this.mergeVertices()}ul.prototype=Object.create(Ce.prototype);ul.prototype.constructor=ul;function Jo(e,t,n,i,r,s){be.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},e=e||1,t=t||.4,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,s=s||3;const o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L,f=new L,p=new L,y=new L,_=new L;for(let g=0;g<=n;++g){const v=g/n*r*Math.PI*2;m(v,r,s,e,d),m(v+.01,r,s,e,f),y.subVectors(f,d),_.addVectors(f,d),p.crossVectors(y,_),_.crossVectors(p,y),p.normalize(),_.normalize();for(let b=0;b<=i;++b){const x=b/i*Math.PI*2,S=-t*Math.cos(x),w=t*Math.sin(x);u.x=d.x+(S*_.x+w*p.x),u.y=d.y+(S*_.y+w*p.y),u.z=d.z+(S*_.z+w*p.z),a.push(u.x,u.y,u.z),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(g/n),l.push(b/i)}}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){const b=(i+1)*(g-1)+(v-1),x=(i+1)*g+(v-1),S=(i+1)*g+v,w=(i+1)*(g-1)+v;o.push(b,x,w),o.push(x,S,w)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2));function m(g,v,b,x,S){const w=Math.cos(g),O=Math.sin(g),R=b/v*g,q=Math.cos(R);S.x=x*(2+q)*.5*w,S.y=x*(2+q)*O*.5,S.z=x*Math.sin(R)*.5}}Jo.prototype=Object.create(be.prototype);Jo.prototype.constructor=Jo;function hl(e,t,n,i,r){Ce.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new Ko(e,t,n,i,r)),this.mergeVertices()}hl.prototype=Object.create(Ce.prototype);hl.prototype.constructor=hl;function Ko(e,t,n,i,r){be.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||1,t=t||.4,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;const s=[],o=[],a=[],c=[],l=new L,u=new L,h=new L;for(let d=0;d<=n;d++)for(let f=0;f<=i;f++){const p=f/i*r,y=d/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(p),u.y=(e+t*Math.cos(y))*Math.sin(p),u.z=t*Math.sin(y),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),h.subVectors(u,l).normalize(),a.push(h.x,h.y,h.z),c.push(f/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=i;f++){const p=(i+1)*d+f-1,y=(i+1)*(d-1)+f-1,_=(i+1)*(d-1)+f,m=(i+1)*d+f;s.push(p,y,m),s.push(y,_,m)}this.setIndex(s),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(c,2))}Ko.prototype=Object.create(be.prototype);Ko.prototype.constructor=Ko;const x1={triangulate:function(e,t,n){n=n||2;let i=t&&t.length,r=i?t[0]*n:e.length,s=Cg(e,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=T1(e,t,s,n)),e.length>80*n){a=l=e[0],c=u=e[1];for(let p=n;p<r;p+=n)h=e[p],d=e[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return Qo(s,o,n,a,c,f),o}};function Cg(e,t,n,i,r){let s,o;if(r===k1(e,t,n,i)>0)for(s=t;s<n;s+=i)o=dp(s,e[s],e[s+1],o);else for(s=n-i;s>=t;s-=i)o=dp(s,e[s],e[s+1],o);return o&&Gl(o,o.next)&&(ea(o),o=o.next),o}function Zi(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Gl(n,n.next)||dt(n.prev,n,n.next)===0)){if(ea(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Qo(e,t,n,i,r,s,o){if(!e)return;!o&&s&&C1(e,i,r,s);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,s?M1(e,i,r,s):w1(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),ea(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=E1(Zi(e),t,n),Qo(e,t,n,i,r,s,2)):o===2&&S1(e,t,n,i,r,s):Qo(Zi(e),t,n,i,r,s,1);break}}}function w1(e){let t=e.prev,n=e,i=e.next;if(dt(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(ls(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&dt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function M1(e,t,n,i){let r=e.prev,s=e,o=e.next;if(dt(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=lh(a,c,t,n,i),d=lh(l,u,t,n,i),f=e.prevZ,p=e.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==e.prev&&f!==e.next&&ls(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&dt(f.prev,f,f.next)>=0||(f=f.prevZ,p!==e.prev&&p!==e.next&&ls(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&dt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&ls(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&dt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&ls(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&dt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function E1(e,t,n){let i=e;do{let r=i.prev,s=i.next.next;!Gl(r,s)&&Dg(r,i,i.next,s)&&$o(r,s)&&$o(s,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(s.i/n),ea(i),ea(i.next),i=e=s),i=i.next}while(i!==e);return Zi(i)}function S1(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O1(o,a)){let c=Ig(o,a);o=Zi(o,o.next),c=Zi(c,c.next),Qo(o,t,n,i,r,s),Qo(c,t,n,i,r,s);return}a=a.next}o=o.next}while(o!==e)}function T1(e,t,n,i){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*i,c=s<o-1?t[s+1]*i:e.length,l=Cg(e,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(I1(l));for(r.sort(A1),s=0;s<r.length;s++)R1(r[s],n),n=Zi(n,n.next);return n}function A1(e,t){return e.x-t.x}function R1(e,t){if(t=L1(e,t),t){const n=Ig(t,e);Zi(t,t.next),Zi(n,n.next)}}function L1(e,t){let n=t,i=e.x,r=e.y,s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,u=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&ls(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),$o(n,e)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&P1(o,n)))&&(o=n,u=h)),n=n.next;while(n!==a);return o}function P1(e,t){return dt(e.prev,e,t.prev)<0&&dt(t.next,e,e.next)<0}function C1(e,t,n,i){let r=e;do r.z===null&&(r.z=lh(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,D1(r)}function D1(e){let t,n,i,r,s,o,a,c,l=1;do{for(n=e,e=null,s=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return e}function lh(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function I1(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ls(e,t,n,i,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(i-a)-(n-o)*(t-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function O1(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!F1(e,t)&&($o(e,t)&&$o(t,e)&&N1(e,t)&&(dt(e.prev,e,t.prev)||dt(e,t.prev,t))||Gl(e,t)&&dt(e.prev,e,e.next)>0&&dt(t.prev,t,t.next)>0)}function dt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Gl(e,t){return e.x===t.x&&e.y===t.y}function Dg(e,t,n,i){const r=hc(dt(e,t,n)),s=hc(dt(e,t,i)),o=hc(dt(n,i,e)),a=hc(dt(n,i,t));return!!(r!==s&&o!==a||r===0&&uc(e,n,t)||s===0&&uc(e,i,t)||o===0&&uc(n,e,i)||a===0&&uc(n,t,i))}function uc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function hc(e){return e>0?1:e<0?-1:0}function F1(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Dg(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function $o(e,t){return dt(e.prev,e,e.next)<0?dt(e,t,e.next)>=0&&dt(e,e.prev,t)>=0:dt(e,t,e.prev)<0||dt(e,e.next,t)<0}function N1(e,t){let n=e,i=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function Ig(e,t){let n=new uh(e.i,e.x,e.y),i=new uh(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function dp(e,t,n,i){const r=new uh(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ea(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function uh(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function k1(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}const Gi={area:function(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return Gi.area(e)<0},triangulateShape:function(e,t){const n=[],i=[],r=[];pp(e),mp(n,e);let s=e.length;t.forEach(pp);for(let a=0;a<t.length;a++)i.push(s),s+=t[a].length,mp(n,t[a]);const o=x1.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function pp(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function mp(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function Ts(e,t){Ce.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new yi(e,t)),this.mergeVertices()}Ts.prototype=Object.create(Ce.prototype);Ts.prototype.constructor=Ts;Ts.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Og(t,n,e)};function yi(e,t){be.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];s(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function s(o){const a=[],c=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,f=t.bevelSize!==void 0?t.bevelSize:d-2,p=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:B1;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let g,v=!1,b,x,S,w;_&&(g=_.getSpacedPoints(l),v=!0,h=!1,b=_.computeFrenetFrames(l,!1),x=new L,S=new L,w=new L),h||(y=0,d=0,f=0,p=0);const O=o.extractPoints(c);let R=O.shape;const q=O.holes;if(!Gi.isClockWise(R)){R=R.reverse();for(let I=0,z=q.length;I<z;I++){const Y=q[I];Gi.isClockWise(Y)&&(q[I]=Y.reverse())}}const j=Gi.triangulateShape(R,q),W=R;for(let I=0,z=q.length;I<z;I++){const Y=q[I];R=R.concat(Y)}function V(I,z,Y){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().multiplyScalar(Y).add(I)}const F=R.length,B=j.length;function X(I,z,Y){let Q,J,ie;const E=I.x-z.x,A=I.y-z.y,Z=Y.x-I.x,K=Y.y-I.y,D=E*E+A*A,ee=E*K-A*Z;if(Math.abs(ee)>Number.EPSILON){const N=Math.sqrt(D),se=Math.sqrt(Z*Z+K*K),ae=z.x-A/N,fe=z.y+E/N,Ee=Y.x-K/se,te=Y.y+Z/se,xe=((Ee-ae)*K-(te-fe)*Z)/(E*K-A*Z);Q=ae+E*xe-I.x,J=fe+A*xe-I.y;const we=Q*Q+J*J;if(we<=2)return new oe(Q,J);ie=Math.sqrt(we/2)}else{let N=!1;E>Number.EPSILON?Z>Number.EPSILON&&(N=!0):E<-Number.EPSILON?Z<-Number.EPSILON&&(N=!0):Math.sign(A)===Math.sign(K)&&(N=!0),N?(Q=-A,J=E,ie=Math.sqrt(D)):(Q=E,J=A,ie=Math.sqrt(D/2))}return new oe(Q/ie,J/ie)}const ne=[];for(let I=0,z=W.length,Y=z-1,Q=I+1;I<z;I++,Y++,Q++)Y===z&&(Y=0),Q===z&&(Q=0),ne[I]=X(W[I],W[Y],W[Q]);const ue=[];let he,ce=ne.concat();for(let I=0,z=q.length;I<z;I++){const Y=q[I];he=[];for(let Q=0,J=Y.length,ie=J-1,E=Q+1;Q<J;Q++,ie++,E++)ie===J&&(ie=0),E===J&&(E=0),he[Q]=X(Y[Q],Y[ie],Y[E]);ue.push(he),ce=ce.concat(he)}for(let I=0;I<y;I++){const z=I/y,Y=d*Math.cos(z*Math.PI/2),Q=f*Math.sin(z*Math.PI/2)+p;for(let J=0,ie=W.length;J<ie;J++){const E=V(W[J],ne[J],Q);M(E.x,E.y,-Y)}for(let J=0,ie=q.length;J<ie;J++){const E=q[J];he=ue[J];for(let A=0,Z=E.length;A<Z;A++){const K=V(E[A],he[A],Q);M(K.x,K.y,-Y)}}}const Me=f+p;for(let I=0;I<F;I++){const z=h?V(R[I],ce[I],Me):R[I];v?(S.copy(b.normals[0]).multiplyScalar(z.x),x.copy(b.binormals[0]).multiplyScalar(z.y),w.copy(g[0]).add(S).add(x),M(w.x,w.y,w.z)):M(z.x,z.y,0)}for(let I=1;I<=l;I++)for(let z=0;z<F;z++){const Y=h?V(R[z],ce[z],Me):R[z];v?(S.copy(b.normals[I]).multiplyScalar(Y.x),x.copy(b.binormals[I]).multiplyScalar(Y.y),w.copy(g[I]).add(S).add(x),M(w.x,w.y,w.z)):M(Y.x,Y.y,u/l*I)}for(let I=y-1;I>=0;I--){const z=I/y,Y=d*Math.cos(z*Math.PI/2),Q=f*Math.sin(z*Math.PI/2)+p;for(let J=0,ie=W.length;J<ie;J++){const E=V(W[J],ne[J],Q);M(E.x,E.y,u+Y)}for(let J=0,ie=q.length;J<ie;J++){const E=q[J];he=ue[J];for(let A=0,Z=E.length;A<Z;A++){const K=V(E[A],he[A],Q);v?M(K.x,K.y+g[l-1].y,g[l-1].x+Y):M(K.x,K.y,u+Y)}}}_e(),Ie();function _e(){const I=i.length/3;if(h){let z=0,Y=F*z;for(let Q=0;Q<B;Q++){const J=j[Q];P(J[2]+Y,J[1]+Y,J[0]+Y)}z=l+y*2,Y=F*z;for(let Q=0;Q<B;Q++){const J=j[Q];P(J[0]+Y,J[1]+Y,J[2]+Y)}}else{for(let z=0;z<B;z++){const Y=j[z];P(Y[2],Y[1],Y[0])}for(let z=0;z<B;z++){const Y=j[z];P(Y[0]+F*l,Y[1]+F*l,Y[2]+F*l)}}n.addGroup(I,i.length/3-I,0)}function Ie(){const I=i.length/3;let z=0;T(W,z),z+=W.length;for(let Y=0,Q=q.length;Y<Q;Y++){const J=q[Y];T(J,z),z+=J.length}n.addGroup(I,i.length/3-I,1)}function T(I,z){let Y=I.length;for(;--Y>=0;){const Q=Y;let J=Y-1;J<0&&(J=I.length-1);for(let ie=0,E=l+y*2;ie<E;ie++){const A=F*ie,Z=F*(ie+1),K=z+Q+A,D=z+J+A,ee=z+J+Z,N=z+Q+Z;C(K,D,ee,N)}}}function M(I,z,Y){a.push(I),a.push(z),a.push(Y)}function P(I,z,Y){U(I),U(z),U(Y);const Q=i.length/3,J=m.generateTopUV(n,i,Q-3,Q-2,Q-1);G(J[0]),G(J[1]),G(J[2])}function C(I,z,Y,Q){U(I),U(z),U(Q),U(z),U(Y),U(Q);const J=i.length/3,ie=m.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);G(ie[0]),G(ie[1]),G(ie[3]),G(ie[1]),G(ie[2]),G(ie[3])}function U(I){i.push(a[I*3+0]),i.push(a[I*3+1]),i.push(a[I*3+2])}function G(I){r.push(I.x),r.push(I.y)}}}yi.prototype=Object.create(be.prototype);yi.prototype.constructor=yi;yi.prototype.toJSON=function(){const e=be.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Og(t,n,e)};const B1={generateTopUV:function(e,t,n,i,r){const s=t[n*3],o=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new oe(s,o),new oe(a,c),new oe(l,u)]},generateSideWallUV:function(e,t,n,i,r,s){const o=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[r*3],f=t[r*3+1],p=t[r*3+2],y=t[s*3],_=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<.01?[new oe(o,1-c),new oe(l,1-h),new oe(d,1-p),new oe(y,1-m)]:[new oe(a,1-c),new oe(u,1-h),new oe(f,1-p),new oe(_,1-m)]}};function Og(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function fl(e,t){Ce.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new ta(e,t)),this.mergeVertices()}fl.prototype=Object.create(Ce.prototype);fl.prototype.constructor=fl;function ta(e,t){t=t||{};const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ce;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),yi.call(this,i,t),this.type="TextBufferGeometry"}ta.prototype=Object.create(yi.prototype);ta.prototype.constructor=ta;function dl(e,t,n,i,r,s,o){Ce.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new As(e,t,n,i,r,s,o)),this.mergeVertices()}dl.prototype=Object.create(Ce.prototype);dl.prototype.constructor=dl;function As(e,t,n,i,r,s,o){be.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},e=e||1,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,s=s!==void 0?s:0,o=o!==void 0?o:Math.PI;const a=Math.min(s+o,Math.PI);let c=0;const l=[],u=new L,h=new L,d=[],f=[],p=[],y=[];for(let _=0;_<=n;_++){const m=[],g=_/n;let v=0;_==0&&s==0?v=.5/t:_==n&&a==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const x=b/t;u.x=-e*Math.cos(i+x*r)*Math.sin(s+g*o),u.y=e*Math.cos(s+g*o),u.z=e*Math.sin(i+x*r)*Math.sin(s+g*o),f.push(u.x,u.y,u.z),h.copy(u).normalize(),p.push(h.x,h.y,h.z),y.push(x+v,1-g),m.push(c++)}l.push(m)}for(let _=0;_<n;_++)for(let m=0;m<t;m++){const g=l[_][m+1],v=l[_][m],b=l[_+1][m],x=l[_+1][m+1];(_!==0||s>0)&&d.push(g,v,x),(_!==n-1||a<Math.PI)&&d.push(v,b,x)}this.setIndex(d),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(y,2))}As.prototype=Object.create(be.prototype);As.prototype.constructor=As;function pl(e,t,n,i,r,s){Ce.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},this.fromBufferGeometry(new na(e,t,n,i,r,s)),this.mergeVertices()}pl.prototype=Object.create(Ce.prototype);pl.prototype.constructor=pl;function na(e,t,n,i,r,s){be.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},e=e||.5,t=t||1,r=r!==void 0?r:0,s=s!==void 0?s:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;const o=[],a=[],c=[],l=[];let u=e;const h=(t-e)/i,d=new L,f=new oe;for(let p=0;p<=i;p++){for(let y=0;y<=n;y++){const _=r+y/n*s;d.x=u*Math.cos(_),d.y=u*Math.sin(_),a.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,l.push(f.x,f.y)}u+=h}for(let p=0;p<i;p++){const y=p*(n+1);for(let _=0;_<n;_++){const m=_+y,g=m,v=m+n+1,b=m+n+2,x=m+1;o.push(g,v,x),o.push(v,b,x)}}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}na.prototype=Object.create(be.prototype);na.prototype.constructor=na;function ml(e,t,n,i){Ce.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new ia(e,t,n,i)),this.mergeVertices()}ml.prototype=Object.create(Ce.prototype);ml.prototype.constructor=ml;function ia(e,t,n,i){be.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||Math.PI*2,i=De.clamp(i,0,Math.PI*2);const r=[],s=[],o=[],a=1/t,c=new L,l=new oe;for(let u=0;u<=t;u++){const h=n+u*a*i,d=Math.sin(h),f=Math.cos(h);for(let p=0;p<=e.length-1;p++)c.x=e[p].x*d,c.y=e[p].y,c.z=e[p].x*f,s.push(c.x,c.y,c.z),l.x=u/t,l.y=p/(e.length-1),o.push(l.x,l.y)}for(let u=0;u<t;u++)for(let h=0;h<e.length-1;h++){const d=h+u*e.length,f=d,p=d+e.length,y=d+e.length+1,_=d+1;r.push(f,p,_),r.push(p,y,_)}if(this.setIndex(r),this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(o,2)),this.computeVertexNormals(),i===Math.PI*2){const u=this.attributes.normal.array,h=new L,d=new L,f=new L,p=t*e.length*3;for(let y=0,_=0;y<e.length;y++,_+=3)h.x=u[_+0],h.y=u[_+1],h.z=u[_+2],d.x=u[p+_+0],d.y=u[p+_+1],d.z=u[p+_+2],f.addVectors(h,d).normalize(),u[_+0]=u[p+_+0]=f.x,u[_+1]=u[p+_+1]=f.y,u[_+2]=u[p+_+2]=f.z}}ia.prototype=Object.create(be.prototype);ia.prototype.constructor=ia;function Rs(e,t){Ce.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Ls(e,t)),this.mergeVertices()}Rs.prototype=Object.create(Ce.prototype);Rs.prototype.constructor=Rs;Rs.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this),t=this.parameters.shapes;return Fg(t,e)};function Ls(e,t){be.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;const n=[],i=[],r=[],s=[];let o=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let l=0;l<e.length;l++)c(e[l]),this.addGroup(o,a,l),o+=a,a=0;this.setIndex(n),this.setAttribute("position",new ge(i,3)),this.setAttribute("normal",new ge(r,3)),this.setAttribute("uv",new ge(s,2));function c(l){const u=i.length/3,h=l.extractPoints(t);let d=h.shape;const f=h.holes;Gi.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,_=f.length;y<_;y++){const m=f[y];Gi.isClockWise(m)===!0&&(f[y]=m.reverse())}const p=Gi.triangulateShape(d,f);for(let y=0,_=f.length;y<_;y++){const m=f[y];d=d.concat(m)}for(let y=0,_=d.length;y<_;y++){const m=d[y];i.push(m.x,m.y,0),r.push(0,0,1),s.push(m.x,m.y)}for(let y=0,_=p.length;y<_;y++){const m=p[y],g=m[0]+u,v=m[1]+u,b=m[2]+u;n.push(g,v,b),a+=3}}}Ls.prototype=Object.create(be.prototype);Ls.prototype.constructor=Ls;Ls.prototype.toJSON=function(){const e=be.prototype.toJSON.call(this),t=this.parameters.shapes;return Fg(t,e)};function Fg(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function gl(e,t){be.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1;const n=[],i=Math.cos(De.DEG2RAD*t),r=[0,0],s={};let o,a,c;const l=["a","b","c"];let u;e.isBufferGeometry?(u=new Ce,u.fromBufferGeometry(e)):u=e.clone(),u.mergeVertices(),u.computeFaceNormals();const h=u.vertices,d=u.faces;for(let f=0,p=d.length;f<p;f++){const y=d[f];for(let _=0;_<3;_++)o=y[l[_]],a=y[l[(_+1)%3]],r[0]=Math.min(o,a),r[1]=Math.max(o,a),c=r[0]+","+r[1],s[c]===void 0?s[c]={index1:r[0],index2:r[1],face1:f,face2:void 0}:s[c].face2=f}for(c in s){const f=s[c];if(f.face2===void 0||d[f.face1].normal.dot(d[f.face2].normal)<=i){let p=h[f.index1];n.push(p.x,p.y,p.z),p=h[f.index2],n.push(p.x,p.y,p.z)}}this.setAttribute("position",new ge(n,3))}gl.prototype=Object.create(be.prototype);gl.prototype.constructor=gl;function Tr(e,t,n,i,r,s,o,a){Ce.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new Ji(e,t,n,i,r,s,o,a)),this.mergeVertices()}Tr.prototype=Object.create(Ce.prototype);Tr.prototype.constructor=Tr;function Ji(e,t,n,i,r,s,o,a){be.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};const c=this;e=e!==void 0?e:1,t=t!==void 0?t:1,n=n||1,i=Math.floor(i)||8,r=Math.floor(r)||1,s=s!==void 0?s:!1,o=o!==void 0?o:0,a=a!==void 0?a:Math.PI*2;const l=[],u=[],h=[],d=[];let f=0;const p=[],y=n/2;let _=0;m(),s===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(l),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function m(){const v=new L,b=new L;let x=0;const S=(t-e)/n;for(let w=0;w<=r;w++){const O=[],R=w/r,q=R*(t-e)+e;for(let H=0;H<=i;H++){const j=H/i,W=j*a+o,V=Math.sin(W),F=Math.cos(W);b.x=q*V,b.y=-R*n+y,b.z=q*F,u.push(b.x,b.y,b.z),v.set(V,S,F).normalize(),h.push(v.x,v.y,v.z),d.push(j,1-R),O.push(f++)}p.push(O)}for(let w=0;w<i;w++)for(let O=0;O<r;O++){const R=p[O][w],q=p[O+1][w],H=p[O+1][w+1],j=p[O][w+1];l.push(R,q,j),l.push(q,H,j),x+=6}c.addGroup(_,x,0),_+=x}function g(v){let b,x;const S=new oe,w=new L;let O=0;const R=v===!0?e:t,q=v===!0?1:-1;b=f;for(let H=1;H<=i;H++)u.push(0,y*q,0),h.push(0,q,0),d.push(.5,.5),f++;x=f;for(let H=0;H<=i;H++){const W=H/i*a+o,V=Math.cos(W),F=Math.sin(W);w.x=R*F,w.y=y*q,w.z=R*V,u.push(w.x,w.y,w.z),h.push(0,q,0),S.x=V*.5+.5,S.y=F*.5*q+.5,d.push(S.x,S.y),f++}for(let H=0;H<i;H++){const j=b+H,W=x+H;v===!0?l.push(W,W+1,j):l.push(W+1,W,j),O+=3}c.addGroup(_,O,v===!0?1:2),_+=O}}Ji.prototype=Object.create(be.prototype);Ji.prototype.constructor=Ji;function yl(e,t,n,i,r,s,o){Tr.call(this,0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}yl.prototype=Object.create(Tr.prototype);yl.prototype.constructor=yl;function _l(e,t,n,i,r,s,o){Ji.call(this,0,e,t,n,i,r,s,o),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}_l.prototype=Object.create(Ji.prototype);_l.prototype.constructor=_l;function vl(e,t,n,i){Ce.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new ra(e,t,n,i)),this.mergeVertices()}vl.prototype=Object.create(Ce.prototype);vl.prototype.constructor=vl;function ra(e,t,n,i){be.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||1,t=t!==void 0?Math.max(3,t):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;const r=[],s=[],o=[],a=[],c=new L,l=new oe;s.push(0,0,0),o.push(0,0,1),a.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(s[h]/e+1)/2,l.y=(s[h+1]/e+1)/2,a.push(l.x,l.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(a,2))}ra.prototype=Object.create(be.prototype);ra.prototype.constructor=ra;var qt=Object.freeze(Object.defineProperty({__proto__:null,WireframeGeometry:nl,ParametricGeometry:il,ParametricBufferGeometry:Xo,TetrahedronGeometry:sl,TetrahedronBufferGeometry:Yo,OctahedronGeometry:ol,OctahedronBufferGeometry:Es,IcosahedronGeometry:al,IcosahedronBufferGeometry:qo,DodecahedronGeometry:cl,DodecahedronBufferGeometry:Zo,PolyhedronGeometry:rl,PolyhedronBufferGeometry:pn,TubeGeometry:ll,TubeBufferGeometry:Ss,TorusKnotGeometry:ul,TorusKnotBufferGeometry:Jo,TorusGeometry:hl,TorusBufferGeometry:Ko,TextGeometry:fl,TextBufferGeometry:ta,SphereGeometry:dl,SphereBufferGeometry:As,RingGeometry:pl,RingBufferGeometry:na,PlaneGeometry:qc,PlaneBufferGeometry:wr,LatheGeometry:ml,LatheBufferGeometry:ia,ShapeGeometry:Rs,ShapeBufferGeometry:Ls,ExtrudeGeometry:Ts,ExtrudeBufferGeometry:yi,EdgesGeometry:gl,ConeGeometry:yl,ConeBufferGeometry:_l,CylinderGeometry:Tr,CylinderBufferGeometry:Ji,CircleGeometry:vl,CircleBufferGeometry:ra,BoxGeometry:bx,BoxBufferGeometry:xr},Symbol.toStringTag,{value:"Module"}));function Ps(e){Le.call(this),this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.setValues(e)}Ps.prototype=Object.create(Le.prototype);Ps.prototype.constructor=Ps;Ps.prototype.isShadowMaterial=!0;Ps.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this};function Ki(e){en.call(this,e),this.type="RawShaderMaterial"}Ki.prototype=Object.create(en.prototype);Ki.prototype.constructor=Ki;Ki.prototype.isRawShaderMaterial=!0;function Qt(e){Le.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}Qt.prototype=Object.create(Le.prototype);Qt.prototype.constructor=Qt;Qt.prototype.isMeshStandardMaterial=!0;Qt.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function _i(e){Qt.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}_i.prototype=Object.create(Qt.prototype);_i.prototype.constructor=_i;_i.prototype.isMeshPhysicalMaterial=!0;_i.prototype.copy=function(e){return Qt.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new de).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function Ln(e){Le.call(this),this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Ln.prototype=Object.create(Le.prototype);Ln.prototype.constructor=Ln;Ln.prototype.isMeshPhongMaterial=!0;Ln.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Cs(e){Le.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Cs.prototype=Object.create(Le.prototype);Cs.prototype.constructor=Cs;Cs.prototype.isMeshToonMaterial=!0;Cs.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Ds(e){Le.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Ds.prototype=Object.create(Le.prototype);Ds.prototype.constructor=Ds;Ds.prototype.isMeshNormalMaterial=!0;Ds.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Is(e){Le.call(this),this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Is.prototype=Object.create(Le.prototype);Is.prototype.constructor=Is;Is.prototype.isMeshLambertMaterial=!0;Is.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Os(e){Le.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Os.prototype=Object.create(Le.prototype);Os.prototype.constructor=Os;Os.prototype.isMeshMatcapMaterial=!0;Os.prototype.copy=function(e){return Le.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Fs(e){wt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Fs.prototype=Object.create(wt.prototype);Fs.prototype.constructor=Fs;Fs.prototype.isLineDashedMaterial=!0;Fs.prototype.copy=function(e){return wt.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var U1=Object.freeze(Object.defineProperty({__proto__:null,ShadowMaterial:Ps,SpriteMaterial:Sr,RawShaderMaterial:Ki,ShaderMaterial:en,PointsMaterial:qi,MeshPhysicalMaterial:_i,MeshStandardMaterial:Qt,MeshPhongMaterial:Ln,MeshToonMaterial:Cs,MeshNormalMaterial:Ds,MeshLambertMaterial:Is,MeshDepthMaterial:Mr,MeshDistanceMaterial:Er,MeshBasicMaterial:Wt,MeshMatcapMaterial:Os,LineDashedMaterial:Fs,LineBasicMaterial:wt,Material:Le},Symbol.toStringTag,{value:"Module"}));const ft={arraySlice:function(e,t,n){return ft.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let c=0;c!==t;++c)r[o++]=e[a+c]}return r},flattenJSON:function(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)},subclip:function(e,t,n,i,r){r=r||30;const s=e.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*r;if(!(p<n||p>=i)){h.push(l.times[f]);for(let y=0;y<u;++y)d.push(l.values[f*u+y])}}h.length!==0&&(l.times=ft.convertArray(h,l.times.constructor),l.values=ft.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(e,t,n,i){t===void 0&&(t=0),n===void 0&&(n=e),(i===void 0||i<=0)&&(i=30);const r=e.tracks.length,s=t/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=e.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;const u=a.getValueSize(),h=a.times.length-1;let d;if(s<=a.times[0])d=ft.arraySlice(a.values,0,a.valueSize);else if(s>=a.times[h]){const p=h*u;d=ft.arraySlice(a.values,p)}else{const p=a.createInterpolant();p.evaluate(s),d=p.resultBuffer}c==="quaternion"&&new At(d[0],d[1],d[2],d[3]).normalize().conjugate().toArray(d);const f=l.times.length;for(let p=0;p<f;++p){const y=p*u;if(c==="quaternion")At.multiplyQuaternionsFlat(l.values,y,d,0,l.values,y);else for(let _=0;_<u;++_)l.values[y+_]-=d[_]}}return e.blendMode=fg,e}};function rn(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(rn.prototype,{evaluate:function(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(rn.prototype,{beforeStart_:rn.prototype.copySampleValue_,afterEnd_:rn.prototype.copySampleValue_});function hh(e,t,n,i){rn.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}hh.prototype=Object.assign(Object.create(rn.prototype),{constructor:hh,DefaultSettings_:{endingStart:bs,endingEnd:bs},intervalChanged_:function(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case ss:r=e,o=2*t-n;break;case Xc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case ss:s=e,a=2*n-t;break;case Xc:s=1,a=n+i[1]-i[0];break;default:s=e-1,a=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(n-t)/(i-t),p=f*f,y=p*f,_=-h*y+2*h*p-h*f,m=(1+h)*y+(-1.5-2*h)*p+(-.5+h)*f+1,g=(-1-d)*y+(1.5+d)*p+.5*f,v=d*y-d*p;for(let b=0;b!==o;++b)r[b]=_*s[l+b]+m*s[c+b]+g*s[a+b]+v*s[u+b];return r}});function bl(e,t,n,i){rn.call(this,e,t,n,i)}bl.prototype=Object.assign(Object.create(rn.prototype),{constructor:bl,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=(n-t)/(i-t),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function fh(e,t,n,i){rn.call(this,e,t,n,i)}fh.prototype=Object.assign(Object.create(rn.prototype),{constructor:fh,interpolate_:function(e){return this.copySampleValue_(e-1)}});function Yt(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ft.convertArray(t,this.TimeBufferType),this.values=ft.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(Yt,{toJSON:function(e){const t=e.constructor;let n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:ft.convertArray(e.times,Array),values:ft.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}});Object.assign(Yt.prototype,{constructor:Yt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:ps,InterpolantFactoryMethodDiscrete:function(e){return new fh(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new bl(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new hh(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return ru}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ft.arraySlice(n,r,s),this.values=ft.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(i!==void 0&&ft.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e},optimize:function(){const e=ft.arraySlice(this.times),t=ft.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ru,r=e.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=e[o],l=e[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const u=o*n,h=u-n,d=u+n;for(let f=0;f!==n;++f){const p=t[u+f];if(p!==t[h+f]||p!==t[d+f]){a=!0;break}}}if(a){if(o!==s){e[s]=e[o];const u=o*n,h=s*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)t[a+c]=t[o+c];++s}return s!==e.length?(this.times=ft.arraySlice(e,0,s),this.values=ft.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this},clone:function(){const e=ft.arraySlice(this.times,0),t=ft.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function dh(e,t,n){Yt.call(this,e,t,n)}dh.prototype=Object.assign(Object.create(Yt.prototype),{constructor:dh,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Fo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ph(e,t,n,i){Yt.call(this,e,t,n,i)}ph.prototype=Object.assign(Object.create(Yt.prototype),{constructor:ph,ValueTypeName:"color"});function Ns(e,t,n,i){Yt.call(this,e,t,n,i)}Ns.prototype=Object.assign(Object.create(Yt.prototype),{constructor:Ns,ValueTypeName:"number"});function mh(e,t,n,i){rn.call(this,e,t,n,i)}mh.prototype=Object.assign(Object.create(rn.prototype),{constructor:mh,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let l=c+o;c!==l;c+=4)At.slerpFlat(r,0,s,c-o,s,c,a);return r}});function sa(e,t,n,i){Yt.call(this,e,t,n,i)}sa.prototype=Object.assign(Object.create(Yt.prototype),{constructor:sa,ValueTypeName:"quaternion",DefaultInterpolation:ps,InterpolantFactoryMethodLinear:function(e){return new mh(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function gh(e,t,n,i){Yt.call(this,e,t,n,i)}gh.prototype=Object.assign(Object.create(Yt.prototype),{constructor:gh,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Fo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function ks(e,t,n,i){Yt.call(this,e,t,n,i)}ks.prototype=Object.assign(Object.create(Yt.prototype),{constructor:ks,ValueTypeName:"vector"});function En(e,t,n,i){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.blendMode=i!==void 0?i:af,this.uuid=De.generateUUID(),this.duration<0&&this.resetDuration()}function H1(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ns;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return ph;case"quaternion":return sa;case"bool":case"boolean":return dh;case"string":return gh}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function z1(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=H1(e.type);if(e.times===void 0){const n=[],i=[];ft.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(En,{parse:function(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,s=n.length;r!==s;++r)t.push(z1(n[r]).scale(i));return new En(e.name,e.duration,t,e.blendMode)},toJSON:function(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Yt.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=ft.getKeyframeOrder(a);a=ft.sortedArray(a,1,l),c=ft.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new Ns(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new En(e,-1,s)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.name.match(r);if(l&&l.length>1){const u=l[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(En.CreateFromMorphTargetSequence(o,i[o],t,n));return s},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,d,f,p){if(d.length!==0){const y=[],_=[];ft.flattenJSON(d,y,_,f),y.length!==0&&p.push(new u(h,y,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let p=0;p<h[f].morphTargets.length;p++)d[h[f].morphTargets[p]]=-1;for(const p in d){const y=[],_=[];for(let m=0;m!==h[f].morphTargets.length;++m){const g=h[f];y.push(g.time),_.push(g.morphTarget===p?1:0)}i.push(new Ns(".morphTargetInfluence["+p+"]",y,_))}a=d.length*(s||1)}else{const d=".bones["+t[u].name+"]";n(ks,d+".position",h,"pos",i),n(sa,d+".quaternion",h,"rot",i),n(ks,d+".scale",h,"scl",i)}}return i.length===0?null:new En(r,a,i,o)}});Object.assign(En.prototype,{resetDuration:function(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new En(this.name,this.duration,e,this.blendMode)}});const Bs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ng(e,t,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}const G1=new Ng;function ze(e){this.manager=e!==void 0?e:G1,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(ze.prototype,{load:function(){},loadAsync:function(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});const On={};function on(e){ze.call(this,e)}on.prototype=Object.assign(Object.create(ze.prototype),{constructor:on,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Bs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d;const f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let _=0;_<h.length;_++)p[_]=h.charCodeAt(_);f==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(l){const u=this.response,h=On[e];if(delete On[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Bs.add(e,u);for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(e)}else{for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(l){const u=On[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=On[e];delete On[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(l){const u=On[e];delete On[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(e),c},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function gp(e){ze.call(this,e)}gp.prototype=Object.assign(Object.create(ze.prototype),{constructor:gp,load:function(e,t,n,i){const r=this,s=new on(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=[];for(let n=0;n<e.length;n++){const i=En.parse(e[n]);t.push(i)}return t}});function yp(e){ze.call(this,e)}yp.prototype=Object.assign(Object.create(ze.prototype),{constructor:yp,load:function(e,t,n,i){const r=this,s=[],o=new Wo;o.image=s;const a=new on(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader);let c=0;function l(u){a.load(e[u],function(h){const d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Ot),o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,h=e.length;u<h;++u)l(u);else a.load(e,function(u){const h=r.parse(u,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Ot),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}});function _p(e){ze.call(this,e)}_p.prototype=Object.assign(Object.create(ze.prototype),{constructor:_p,load:function(e,t,n,i){const r=this,s=new Ms,o=new on(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.load(e,function(a){const c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:Kt,s.wrapT=c.wrapT!==void 0?c.wrapT:Kt,s.magFilter=c.magFilter!==void 0?c.magFilter:Ot,s.minFilter=c.minFilter!==void 0?c.minFilter:Ot,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=vs),c.mipmapCount===1&&(s.minFilter=Ot),s.needsUpdate=!0,t&&t(s,c))},n,i),s}});function oa(e){ze.call(this,e)}oa.prototype=Object.assign(Object.create(ze.prototype),{constructor:oa,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Bs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),Bs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}});function yh(e){ze.call(this,e)}yh.prototype=Object.assign(Object.create(ze.prototype),{constructor:yh,load:function(e,t,n,i){const r=new Xi,s=new oa(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(e[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)a(c);return r}});function xl(e){ze.call(this,e)}xl.prototype=Object.assign(Object.create(ze.prototype),{constructor:xl,load:function(e,t,n,i){const r=new it,s=new oa(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o;const a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=a?mi:hn,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function Ae(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(Ae.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){const e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){const n=this.getLengths();let i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new oe:new L);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){const n=new L,i=[],r=[],s=[],o=new L,a=new Fe;for(let d=0;d<=e;d++){const f=d/e;i[d]=this.getTangentAt(f,new L),i[d].normalize()}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(De.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(De.clamp(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let f=1;f<=e;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function Pn(e,t,n,i,r,s,o,a){Ae.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Pn.prototype=Object.create(Ae.prototype);Pn.prototype.constructor=Pn;Pn.prototype.isEllipseCurve=!0;Pn.prototype.getPoint=function(e,t){const n=t||new oe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*u+this.aX,c=h*u+d*l+this.aY}return n.set(a,c)};Pn.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};Pn.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};Pn.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function aa(e,t,n,i,r,s){Pn.call(this,e,t,n,n,i,r,s),this.type="ArcCurve"}aa.prototype=Object.create(Pn.prototype);aa.prototype.constructor=aa;aa.prototype.isArcCurve=!0;function hf(){let e=0,t=0,n=0,i=0;function r(s,o,a,c){e=s,t=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const fc=new L,Lu=new hf,Pu=new hf,Cu=new hf;function mn(e,t,n,i){Ae.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}mn.prototype=Object.create(Ae.prototype);mn.prototype.constructor=mn;mn.prototype.isCatmullRomCurve3=!0;mn.prototype.getPoint=function(e,t){const n=t||new L,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l,u,h;if(this.closed||o>0?c=i[(o-1)%r]:(fc.subVectors(i[0],i[1]).add(i[0]),c=fc),l=i[o%r],u=i[(o+1)%r],this.closed||o+2<r?h=i[(o+2)%r]:(fc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(l),d),p=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(h),d);p<1e-4&&(p=1),f<1e-4&&(f=p),y<1e-4&&(y=p),Lu.initNonuniformCatmullRom(c.x,l.x,u.x,h.x,f,p,y),Pu.initNonuniformCatmullRom(c.y,l.y,u.y,h.y,f,p,y),Cu.initNonuniformCatmullRom(c.z,l.z,u.z,h.z,f,p,y)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(c.x,l.x,u.x,h.x,this.tension),Pu.initCatmullRom(c.y,l.y,u.y,h.y,this.tension),Cu.initCatmullRom(c.z,l.z,u.z,h.z,this.tension));return n.set(Lu.calc(a),Pu.calc(a),Cu.calc(a)),n};mn.prototype.copy=function(e){Ae.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};mn.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};mn.prototype.fromJSON=function(e){Ae.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function vp(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*e+n}function V1(e,t){const n=1-e;return n*n*t}function W1(e,t){return 2*(1-e)*e*t}function j1(e,t){return e*e*t}function Ao(e,t,n,i){return V1(e,t)+W1(e,n)+j1(e,i)}function X1(e,t){const n=1-e;return n*n*n*t}function Y1(e,t){const n=1-e;return 3*n*n*e*t}function q1(e,t){return 3*(1-e)*e*e*t}function Z1(e,t){return e*e*e*t}function Ro(e,t,n,i,r){return X1(e,t)+Y1(e,n)+q1(e,i)+Z1(e,r)}function ni(e,t,n,i){Ae.call(this),this.type="CubicBezierCurve",this.v0=e||new oe,this.v1=t||new oe,this.v2=n||new oe,this.v3=i||new oe}ni.prototype=Object.create(Ae.prototype);ni.prototype.constructor=ni;ni.prototype.isCubicBezierCurve=!0;ni.prototype.getPoint=function(e,t){const n=t||new oe,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ro(e,i.x,r.x,s.x,o.x),Ro(e,i.y,r.y,s.y,o.y)),n};ni.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};ni.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};ni.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function vi(e,t,n,i){Ae.call(this),this.type="CubicBezierCurve3",this.v0=e||new L,this.v1=t||new L,this.v2=n||new L,this.v3=i||new L}vi.prototype=Object.create(Ae.prototype);vi.prototype.constructor=vi;vi.prototype.isCubicBezierCurve3=!0;vi.prototype.getPoint=function(e,t){const n=t||new L,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ro(e,i.x,r.x,s.x,o.x),Ro(e,i.y,r.y,s.y,o.y),Ro(e,i.z,r.z,s.z,o.z)),n};vi.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};vi.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};vi.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function gn(e,t){Ae.call(this),this.type="LineCurve",this.v1=e||new oe,this.v2=t||new oe}gn.prototype=Object.create(Ae.prototype);gn.prototype.constructor=gn;gn.prototype.isLineCurve=!0;gn.prototype.getPoint=function(e,t){const n=t||new oe;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};gn.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};gn.prototype.getTangent=function(e,t){const n=t||new oe;return n.copy(this.v2).sub(this.v1).normalize(),n};gn.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};gn.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};gn.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function ii(e,t){Ae.call(this),this.type="LineCurve3",this.v1=e||new L,this.v2=t||new L}ii.prototype=Object.create(Ae.prototype);ii.prototype.constructor=ii;ii.prototype.isLineCurve3=!0;ii.prototype.getPoint=function(e,t){const n=t||new L;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};ii.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};ii.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};ii.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};ii.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function ri(e,t,n){Ae.call(this),this.type="QuadraticBezierCurve",this.v0=e||new oe,this.v1=t||new oe,this.v2=n||new oe}ri.prototype=Object.create(Ae.prototype);ri.prototype.constructor=ri;ri.prototype.isQuadraticBezierCurve=!0;ri.prototype.getPoint=function(e,t){const n=t||new oe,i=this.v0,r=this.v1,s=this.v2;return n.set(Ao(e,i.x,r.x,s.x),Ao(e,i.y,r.y,s.y)),n};ri.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};ri.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};ri.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function bi(e,t,n){Ae.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new L,this.v1=t||new L,this.v2=n||new L}bi.prototype=Object.create(Ae.prototype);bi.prototype.constructor=bi;bi.prototype.isQuadraticBezierCurve3=!0;bi.prototype.getPoint=function(e,t){const n=t||new L,i=this.v0,r=this.v1,s=this.v2;return n.set(Ao(e,i.x,r.x,s.x),Ao(e,i.y,r.y,s.y),Ao(e,i.z,r.z,s.z)),n};bi.prototype.copy=function(e){return Ae.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};bi.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};bi.prototype.fromJSON=function(e){return Ae.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function si(e){Ae.call(this),this.type="SplineCurve",this.points=e||[]}si.prototype=Object.create(Ae.prototype);si.prototype.constructor=si;si.prototype.isSplineCurve=!0;si.prototype.getPoint=function(e,t){const n=t||new oe,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(vp(o,a.x,c.x,l.x,u.x),vp(o,a.y,c.y,l.y,u.y)),n};si.prototype.copy=function(e){Ae.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this};si.prototype.toJSON=function(){const e=Ae.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e};si.prototype.fromJSON=function(e){Ae.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this};var _h=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:aa,CatmullRomCurve3:mn,CubicBezierCurve:ni,CubicBezierCurve3:vi,EllipseCurve:Pn,LineCurve:gn,LineCurve3:ii,QuadraticBezierCurve:ri,QuadraticBezierCurve3:bi,SplineCurve:si},Symbol.toStringTag,{value:"Module"}));function Bi(){Ae.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Bi.prototype=Object.assign(Object.create(Ae.prototype),{constructor:Bi,add:function(e){this.curves.push(e)},closePath:function(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new gn(t,e))},getPoint:function(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){Ae.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){const e=Ae.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){Ae.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _h[i.type]().fromJSON(i))}return this}});function Kn(e){Bi.call(this),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}Kn.prototype=Object.assign(Object.create(Bi.prototype),{constructor:Kn,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){const n=new gn(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){const r=new ri(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,s){const o=new ni(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(e){const t=[this.currentPoint.clone()].concat(e),n=new si(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,i,r,s),this},absarc:function(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this},ellipse:function(e,t,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,i,r,s,o,a),this},absellipse:function(e,t,n,i,r,s,o,a){const c=new Pn(e,t,n,i,r,s,o,a);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return Bi.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){const e=Bi.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Bi.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function _r(e){Kn.call(this,e),this.uuid=De.generateUUID(),this.type="Shape",this.holes=[]}_r.prototype=Object.assign(Object.create(Kn.prototype),{constructor:_r,getPointsHoles:function(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Kn.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){const e=Kn.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){Kn.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Kn().fromJSON(i))}return this}});function ut(e,t){pe.call(this),this.type="Light",this.color=new de(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}ut.prototype=Object.assign(Object.create(pe.prototype),{constructor:ut,isLight:!0,copy:function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){const t=pe.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function vh(e,t,n){ut.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(pe.DefaultUp),this.updateMatrix(),this.groundColor=new de(t)}vh.prototype=Object.assign(Object.create(ut.prototype),{constructor:vh,isHemisphereLight:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function xi(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}Object.assign(xi.prototype,{_projScreenMatrix:new Fe,_lightPositionWorld:new L,_lookTarget:new L,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){const t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(e.matrixWorld),t.position.copy(s),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function bh(){xi.call(this,new vt(50,1,.5,500))}bh.prototype=Object.assign(Object.create(xi.prototype),{constructor:bh,isSpotLightShadow:!0,updateMatrices:function(e){const t=this.camera,n=De.RAD2DEG*2*e.angle,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),xi.prototype.updateMatrices.call(this,e)}});function wl(e,t,n,i,r,s){ut.call(this,e,t),this.type="SpotLight",this.position.copy(pe.DefaultUp),this.updateMatrix(),this.target=new pe,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new bh}wl.prototype=Object.assign(Object.create(ut.prototype),{constructor:wl,isSpotLight:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function xh(){xi.call(this,new vt(90,1,.5,500)),this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}xh.prototype=Object.assign(Object.create(xi.prototype),{constructor:xh,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function ca(e,t,n,i){ut.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new xh}ca.prototype=Object.assign(Object.create(ut.prototype),{constructor:ca,isPointLight:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Us(e,t,n,i,r,s){gi.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}Us.prototype=Object.assign(Object.create(gi.prototype),{constructor:Us,isOrthographicCamera:!0,copy:function(e,t){return gi.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=pe.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function wh(){xi.call(this,new Us(-5,5,5,-5,.5,500))}wh.prototype=Object.assign(Object.create(xi.prototype),{constructor:wh,isDirectionalLightShadow:!0,updateMatrices:function(e){xi.prototype.updateMatrices.call(this,e)}});function la(e,t){ut.call(this,e,t),this.type="DirectionalLight",this.position.copy(pe.DefaultUp),this.updateMatrix(),this.target=new pe,this.shadow=new wh}la.prototype=Object.assign(Object.create(ut.prototype),{constructor:la,isDirectionalLight:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Ml(e,t){ut.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}Ml.prototype=Object.assign(Object.create(ut.prototype),{constructor:Ml,isAmbientLight:!0});function Mh(e,t,n,i){ut.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Mh.prototype=Object.assign(Object.create(ut.prototype),{constructor:Mh,isRectAreaLight:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){const t=ut.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});function ff(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}Object.assign(ff.prototype,{isSphericalHarmonics3:!0,set:function(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this},zero:function(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this},getAt:function(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t},getIrradianceAt:function(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t},add:function(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this},addScaledSH:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this},scale:function(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this},lerp:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this},equals:function(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0},copy:function(e){return this.set(e.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(e,t){t===void 0&&(t=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}});Object.assign(ff,{getBasisAt:function(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}});function Bn(e,t){ut.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new ff}Bn.prototype=Object.assign(Object.create(ut.prototype),{constructor:Bn,isLightProbe:!0,copy:function(e){return ut.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){const t=ut.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function Eh(e){ze.call(this,e),this.textures={}}Eh.prototype=Object.assign(Object.create(ze.prototype),{constructor:Eh,load:function(e,t,n,i){const r=this,s=new on(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new U1[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new de().setHex(e.sheen)),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new de().setHex(s.value);break;case"v2":i.uniforms[r].value=new oe().fromArray(s.value);break;case"v3":i.uniforms[r].value=new L().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Qe().fromArray(s.value);break;case"m3":i.uniforms[r].value=new $t().fromArray(s.value);case"m4":i.uniforms[r].value=new Fe().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new oe().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i},setTextures:function(e){return this.textures=e,this}});const fr={decodeText:function(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function El(){be.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}El.prototype=Object.assign(Object.create(be.prototype),{constructor:El,isInstancedBufferGeometry:!0,copy:function(e){return be.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e=be.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function Sh(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Re.call(this,e,t,n),this.meshPerAttribute=i||1}Sh.prototype=Object.assign(Object.create(Re.prototype),{constructor:Sh,isInstancedBufferAttribute:!0,copy:function(e){return Re.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){const e=Re.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function Th(e){ze.call(this,e)}Th.prototype=Object.assign(Object.create(ze.prototype),{constructor:Th,load:function(e,t,n,i){const r=this,s=new on(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t={},n={};function i(d,f){if(t[f]!==void 0)return t[f];const y=d.interleavedBuffers[f],_=r(d,y.buffer),m=new dc[y.type](_),g=new un(m,y.stride);return g.uuid=y.uuid,t[f]=g,g}function r(d,f){if(n[f]!==void 0)return n[f];const y=d.arrayBuffers[f],_=new Uint32Array(y).buffer;return n[f]=_,_}const s=e.isInstancedBufferGeometry?new El:new be,o=e.data.index;if(o!==void 0){const d=new dc[o.type](o.array);s.setIndex(new Re(d,1))}const a=e.data.attributes;for(const d in a){const f=a[d];let p;if(f.isInterleavedBufferAttribute){const y=i(e.data,f.data);p=new Yi(y,f.itemSize,f.offset,f.normalized)}else{const y=new dc[f.type](f.array),_=f.isInstancedBufferAttribute?Sh:Re;p=new _(y,f.itemSize,f.normalized)}f.name!==void 0&&(p.name=f.name),s.setAttribute(d,p)}const c=e.data.morphAttributes;if(c)for(const d in c){const f=c[d],p=[];for(let y=0,_=f.length;y<_;y++){const m=f[y];let g;if(m.isInterleavedBufferAttribute){const v=i(e.data,m.data);g=new Yi(v,m.itemSize,m.offset,m.normalized)}else{const v=new dc[m.type](m.array);g=new Re(v,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),p.push(g)}s.morphAttributes[d]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,f=u.length;d!==f;++d){const p=u[d];s.addGroup(p.start,p.count,p.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const d=new L;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new ai(d,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}});const dc={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ah(e){ze.call(this,e)}Ah.prototype=Object.assign(Object.create(ze.prototype),{constructor:Ah,load:function(e,t,n,i){const r=this,s=this.path===""?fr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new on(r.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.load(e,function(a){let c=null;try{c=JSON.parse(a)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const l=c.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)},parse:function(e,t){const n=this.parseShape(e.shapes),i=this.parseGeometries(e.geometries,n),r=this.parseImages(e.images,function(){t!==void 0&&t(a)}),s=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,s),a=this.parseObject(e.object,i,o);return e.animations&&(a.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(a),a},parseShape:function(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new _r().fromJSON(e[n]);t[r.uuid]=r}return t},parseGeometries:function(e,t){const n={};let i;if(e!==void 0){const r=new Th;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new qt[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":a=new qt[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":a=new qt[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":a=new qt[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":a=new qt[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":a=new qt[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":a=new qt[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":a=new qt[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":a=new qt[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":a=new qt[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":a=new qt[c.type](new _h[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":a=new qt[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":a=new qt[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let u=0,h=c.shapes.length;u<h;u++){const d=t[c.shapes[u]];i.push(d)}a=new qt[c.type](i,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let u=0,h=c.shapes.length;u<h;u++){const d=t[c.shapes[u]];i.push(d)}const l=c.options.extrudePath;l!==void 0&&(c.options.extrudePath=new _h[l.type]().fromJSON(l)),a=new qt[c.type](i,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),a.isBufferGeometry===!0&&c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n},parseMaterials:function(e,t){const n={},i={};if(e!==void 0){const r=new Eh;r.setTextures(t);for(let s=0,o=e.length;s<o;s++){const a=e[s];if(a.type==="MultiMaterial"){const c=[];for(let l=0;l<a.materials.length;l++){const u=a.materials[l];n[u.uuid]===void 0&&(n[u.uuid]=r.parse(u)),c.push(n[u.uuid])}i[a.uuid]=c}else n[a.uuid]===void 0&&(n[a.uuid]=r.parse(a)),i[a.uuid]=n[a.uuid]}}return i},parseAnimations:function(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n],r=En.parse(i);i.uuid!==void 0&&(r.uuid=i.uuid),t.push(r)}return t},parseImages:function(e,t){const n=this,i={};let r;function s(o){return n.manager.itemStart(o),r.load(o,function(){n.manager.itemEnd(o)},void 0,function(){n.manager.itemError(o),n.manager.itemEnd(o)})}if(e!==void 0&&e.length>0){const o=new Ng(t);r=new oa(o),r.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.url;if(Array.isArray(u)){i[l.uuid]=[];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;i[l.uuid].push(s(p))}}else{const h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.resourcePath+l.url;i[l.uuid]=s(h)}}}return i},parseTextures:function(e,t){function n(r,s){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const i={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let a;Array.isArray(t[o.image])?a=new Xi(t[o.image]):a=new it(t[o.image]),a.needsUpdate=!0,a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.mapping!==void 0&&(a.mapping=n(o.mapping,J1)),o.offset!==void 0&&a.offset.fromArray(o.offset),o.repeat!==void 0&&a.repeat.fromArray(o.repeat),o.center!==void 0&&a.center.fromArray(o.center),o.rotation!==void 0&&(a.rotation=o.rotation),o.wrap!==void 0&&(a.wrapS=n(o.wrap[0],bp),a.wrapT=n(o.wrap[1],bp)),o.format!==void 0&&(a.format=o.format),o.type!==void 0&&(a.type=o.type),o.encoding!==void 0&&(a.encoding=o.encoding),o.minFilter!==void 0&&(a.minFilter=n(o.minFilter,xp)),o.magFilter!==void 0&&(a.magFilter=n(o.magFilter,xp)),o.anisotropy!==void 0&&(a.anisotropy=o.anisotropy),o.flipY!==void 0&&(a.flipY=o.flipY),o.premultiplyAlpha!==void 0&&(a.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(a.unpackAlignment=o.unpackAlignment),i[o.uuid]=a}return i},parseObject:function(e,t,n){let i;function r(c){return t[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",c),t[c]}function s(c){if(c!==void 0){if(Array.isArray(c)){const l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),l.push(n[d])}return l}return n[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",c),n[c]}}let o,a;switch(e.type){case"Scene":i=new ko,e.background!==void 0&&Number.isInteger(e.background)&&(i.background=new de(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?i.fog=new Zc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(i.fog=new rh(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":i=new vt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(i.focus=e.focus),e.zoom!==void 0&&(i.zoom=e.zoom),e.filmGauge!==void 0&&(i.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(i.filmOffset=e.filmOffset),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"OrthographicCamera":i=new Us(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(i.zoom=e.zoom),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"AmbientLight":i=new Ml(e.color,e.intensity);break;case"DirectionalLight":i=new la(e.color,e.intensity);break;case"PointLight":i=new ca(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":i=new Mh(e.color,e.intensity,e.width,e.height);break;case"SpotLight":i=new wl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":i=new vh(e.color,e.groundColor,e.intensity);break;case"LightProbe":i=new Bn().fromJSON(e);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":o=r(e.geometry),a=s(e.material),i=new nt(o,a);break;case"InstancedMesh":o=r(e.geometry),a=s(e.material);const c=e.count,l=e.instanceMatrix;i=new ah(o,a,c),i.instanceMatrix=new Re(new Float32Array(l.array),16);break;case"LOD":i=new Jc;break;case"Line":i=new dn(r(e.geometry),s(e.material),e.mode);break;case"LineLoop":i=new $c(r(e.geometry),s(e.material));break;case"LineSegments":i=new Rt(r(e.geometry),s(e.material));break;case"PointCloud":case"Points":i=new el(r(e.geometry),s(e.material));break;case"Sprite":i=new sh(s(e.material));break;case"Group":i=new Qn;break;default:i=new pe}if(i.uuid=e.uuid,e.name!==void 0&&(i.name=e.name),e.matrix!==void 0?(i.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=e.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(e.position!==void 0&&i.position.fromArray(e.position),e.rotation!==void 0&&i.rotation.fromArray(e.rotation),e.quaternion!==void 0&&i.quaternion.fromArray(e.quaternion),e.scale!==void 0&&i.scale.fromArray(e.scale)),e.castShadow!==void 0&&(i.castShadow=e.castShadow),e.receiveShadow!==void 0&&(i.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(i.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(i.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(i.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(i.visible=e.visible),e.frustumCulled!==void 0&&(i.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(i.renderOrder=e.renderOrder),e.userData!==void 0&&(i.userData=e.userData),e.layers!==void 0&&(i.layers.mask=e.layers),e.children!==void 0){const c=e.children;for(let l=0;l<c.length;l++)i.add(this.parseObject(c[l],t,n))}if(e.type==="LOD"){e.autoUpdate!==void 0&&(i.autoUpdate=e.autoUpdate);const c=e.levels;for(let l=0;l<c.length;l++){const u=c[l],h=i.getObjectByProperty("uuid",u.object);h!==void 0&&i.addLevel(h,u.distance)}}return i}});const J1={UVMapping:tf,CubeReflectionMapping:nf,CubeRefractionMapping:rf,EquirectangularReflectionMapping:hg,EquirectangularRefractionMapping:sf,CubeUVReflectionMapping:_a,CubeUVRefractionMapping:Hl},bp={RepeatWrapping:yr,ClampToEdgeWrapping:Kt,MirroredRepeatWrapping:Io},xp={NearestFilter:Pt,NearestMipmapNearestFilter:Gc,NearestMipmapLinearFilter:Vc,LinearFilter:Ot,LinearMipmapNearestFilter:of,LinearMipmapLinearFilter:vs};function Rh(e){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),ze.call(this,e),this.options={premultiplyAlpha:"none"}}Rh.prototype=Object.assign(Object.create(ze.prototype),{constructor:Rh,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Bs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;fetch(e).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,r.options)}).then(function(o){Bs.add(e,o),t&&t(o),r.manager.itemEnd(e)}).catch(function(o){i&&i(o),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function kg(){this.type="ShapePath",this.color=new de,this.subPaths=[],this.currentPath=null}Object.assign(kg.prototype,{moveTo:function(e,t){return this.currentPath=new Kn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(m){const g=[];for(let v=0,b=m.length;v<b;v++){const x=m[v],S=new _r;S.curves=x.curves,g.push(S)}return g}function i(m,g){const v=g.length;let b=!1;for(let x=v-1,S=0;S<v;x=S++){let w=g[x],O=g[S],R=O.x-w.x,q=O.y-w.y;if(Math.abs(q)>Number.EPSILON){if(q<0&&(w=g[S],R=-R,O=g[x],q=-q),m.y<w.y||m.y>O.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const H=q*(m.x-w.x)-R*(m.y-w.y);if(H===0)return!0;if(H<0)continue;b=!b}}else{if(m.y!==w.y)continue;if(O.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=O.x)return!0}}return b}const r=Gi.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return n(s);let o,a,c,l=[];if(s.length===1)return a=s[0],c=new _r,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,y;d[p]=void 0,f[p]=[];for(let m=0,g=s.length;m<g;m++)a=s[m],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new _r,p:y},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:y[0]});if(!d[0])return n(s);if(d.length>1){let m=!1;const g=[];for(let v=0,b=d.length;v<b;v++)h[v]=[];for(let v=0,b=d.length;v<b;v++){const x=f[v];for(let S=0;S<x.length;S++){const w=x[S];let O=!0;for(let R=0;R<d.length;R++)i(w.p,d[R].p)&&(v!==R&&g.push({froms:v,tos:R,hole:S}),O?(O=!1,h[R].push(w)):m=!0);O&&h[v].push(w)}}g.length>0&&(m||(f=h))}let _;for(let m=0,g=d.length;m<g;m++){c=d[m].s,l.push(c),_=f[m];for(let v=0,b=_.length;v<b;v++)c.holes.push(_[v].h)}return l}});function Bg(e){this.type="Font",this.data=e}Object.assign(Bg.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);const n=[],i=K1(e,t,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function K1(e,t,n){const i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=s;else{const h=Q1(u,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function Q1(e,t,n,i,r){const s=r.glyphs[e]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const o=new kg;let a,c,l,u,h,d,f,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let _=0,m=y.length;_<m;)switch(y[_++]){case"m":a=y[_++]*t+n,c=y[_++]*t+i,o.moveTo(a,c);break;case"l":a=y[_++]*t+n,c=y[_++]*t+i,o.lineTo(a,c);break;case"q":l=y[_++]*t+n,u=y[_++]*t+i,h=y[_++]*t+n,d=y[_++]*t+i,o.quadraticCurveTo(h,d,l,u);break;case"b":l=y[_++]*t+n,u=y[_++]*t+i,h=y[_++]*t+n,d=y[_++]*t+i,f=y[_++]*t+n,p=y[_++]*t+i,o.bezierCurveTo(h,d,f,p,l,u);break}}return{offsetX:s.ha*t,path:o}}function wp(e){ze.call(this,e)}wp.prototype=Object.assign(Object.create(ze.prototype),{constructor:wp,load:function(e,t,n,i){const r=this,s=new on(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.load(e,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);t&&t(c)},n,i)},parse:function(e){return new Bg(e)}});let pc;const Ug={getContext:function(){return pc===void 0&&(pc=new(window.AudioContext||window.webkitAudioContext)),pc},setContext:function(e){pc=e}};function Lh(e){ze.call(this,e)}Lh.prototype=Object.assign(Object.create(ze.prototype),{constructor:Lh,load:function(e,t,n,i){const r=this,s=new on(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{const a=o.slice(0);Ug.getContext().decodeAudioData(a,function(l){t(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)}});function Mp(e,t,n){Bn.call(this,void 0,n);const i=new de().set(e),r=new de().set(t),s=new L(i.r,i.g,i.b),o=new L(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Mp.prototype=Object.assign(Object.create(Bn.prototype),{constructor:Mp,isHemisphereLightProbe:!0,copy:function(e){return Bn.prototype.copy.call(this,e),this},toJSON:function(e){return Bn.prototype.toJSON.call(this,e)}});function Ep(e,t){Bn.call(this,void 0,t);const n=new de().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Ep.prototype=Object.assign(Object.create(Bn.prototype),{constructor:Ep,isAmbientLightProbe:!0,copy:function(e){return Bn.prototype.copy.call(this,e),this},toJSON:function(e){return Bn.prototype.toJSON.call(this,e)}});const Sp=new Fe,Tp=new Fe;function $1(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new vt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new vt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign($1.prototype,{update:function(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(De.DEG2RAD*t.fov*.5)/t.zoom;let a,c;Tp.elements[12]=-r,Sp.elements[12]=r,a=-o*t.aspect+s,c=o*t.aspect+s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*t.aspect-s,c=o*t.aspect-s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Tp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Sp)}});function Hg(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Hg.prototype,{start:function(){this.startTime=(typeof performance=="undefined"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=(typeof performance=="undefined"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}});const sr=new L,Ap=new At,eS=new L,or=new L;function Rp(){pe.call(this),this.type="AudioListener",this.context=Ug.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Hg}Rp.prototype=Object.assign(Object.create(pe.prototype),{constructor:Rp,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this},updateMatrixWorld:function(e){pe.prototype.updateMatrixWorld.call(this,e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(sr,Ap,eS),or.set(0,0,-1).applyQuaternion(Ap),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(sr.x,i),t.positionY.linearRampToValueAtTime(sr.y,i),t.positionZ.linearRampToValueAtTime(sr.z,i),t.forwardX.linearRampToValueAtTime(or.x,i),t.forwardY.linearRampToValueAtTime(or.y,i),t.forwardZ.linearRampToValueAtTime(or.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(sr.x,sr.y,sr.z),t.setOrientation(or.x,or.y,or.z,n.x,n.y,n.z)}});function ua(e){pe.call(this),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}ua.prototype=Object.assign(Object.create(pe.prototype),{constructor:ua,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setMediaElementSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this},setMediaStreamSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},setDetune:function(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(e){return this.loopStart=e,this},setLoopEnd:function(e){return this.loopEnd=e,this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}});const ar=new L,Lp=new At,tS=new L,cr=new L;function Pp(e){ua.call(this,e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}Pp.prototype=Object.assign(Object.create(ua.prototype),{constructor:Pp,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){return this.panner.refDistance=e,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){return this.panner.rolloffFactor=e,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){return this.panner.distanceModel=e,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){return this.panner.maxDistance=e,this},setDirectionalCone:function(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(e){if(pe.prototype.updateMatrixWorld.call(this,e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ar,Lp,tS),cr.set(0,0,1).applyQuaternion(Lp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ar.x,n),t.positionY.linearRampToValueAtTime(ar.y,n),t.positionZ.linearRampToValueAtTime(ar.z,n),t.orientationX.linearRampToValueAtTime(cr.x,n),t.orientationY.linearRampToValueAtTime(cr.y,n),t.orientationZ.linearRampToValueAtTime(cr.z,n)}else t.setPosition(ar.x,ar.y,ar.z),t.setOrientation(cr.x,cr.y,cr.z)}});function zg(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(zg.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}});function Gg(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Gg.prototype,{accumulate:function(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){o.setValue(n,i);break}},saveOriginalState:function(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]},_slerp:function(e,t,n,i){At.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){const s=this._workIndex*r;At.multiplyQuaternionsFlat(e,s,e,t,e,n),At.slerpFlat(e,t,e,t,e,s,i)},_lerp:function(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]*s+e[n+o]*i}},_lerpAdditive:function(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}});const df="\\[\\]\\.:\\/",nS=new RegExp("["+df+"]","g"),pf="[^"+df+"]",iS="[^"+df.replace("\\.","")+"]",rS=/((?:WC+[\/:])*)/.source.replace("WC",pf),sS=/(WCOD+)?/.source.replace("WCOD",iS),oS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pf),aS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pf),cS=new RegExp("^"+rS+sS+oS+aS+"$"),lS=["material","materials","bones"];function Vg(e,t,n){const i=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Vg.prototype,{getValue:function(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function Xt(e,t,n){this.path=t,this.parsedPath=n||Xt.parseTrackName(t),this.node=Xt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(Xt,{Composite:Vg,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new Xt.Composite(e,t,n):new Xt(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(nS,"")},parseTrackName:function(e){const t=cS.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);lS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}});Object.assign(Xt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Xt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(Xt.prototype,{_getValue_unbound:Xt.prototype.getValue,_setValue_unbound:Xt.prototype.setValue});function uS(){this.uuid=De.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(uS.prototype,{isAnimationObjectGroup:!0,add:function(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=e.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){const h=arguments[l],d=h.uuid;let f=t[d];if(f===void 0){f=a++,t[d]=f,e.push(h);for(let p=0,y=s;p!==y;++p)r[p].push(new Xt(h,n[p],i[p]))}else if(f<c){o=e[f];const p=--c,y=e[p];t[y.uuid]=f,e[f]=y,t[d]=p,e[p]=h;for(let _=0,m=s;_!==m;++_){const g=r[_],v=g[p];let b=g[f];g[f]=v,b===void 0&&(b=new Xt(h,n[_],i[_])),g[p]=b}}else e[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=t[c];if(l!==void 0&&l>=r){const u=r++,h=e[u];t[h.uuid]=l,e[l]=h,t[c]=u,e[u]=a;for(let d=0,f=i;d!==f;++d){const p=n[d],y=p[u],_=p[l];p[l]=y,p[u]=_}}}this.nCachedObjects_=r},uncache:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0)if(delete t[l],u<r){const h=--r,d=e[h],f=--s,p=e[f];t[d.uuid]=u,e[u]=d,t[p.uuid]=h,e[h]=p,e.pop();for(let y=0,_=i;y!==_;++y){const m=n[y],g=m[h],v=m[f];m[u]=g,m[h]=v,m.pop()}}else{const h=--s,d=e[h];t[d.uuid]=u,e[u]=d,e.pop();for(let f=0,p=i;f!==p;++f){const y=n[f];y[u]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,s.push(e),o.push(t),r.push(u);for(let h=l,d=a.length;h!==d;++h){const f=a[h];u[h]=new Xt(f,e,t)}return u},unsubscribe_:function(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=e[o];t[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});function Wg(e,t,n,i){this._mixer=e,this._clip=t,this._localRoot=n||null,this.blendMode=i||t.blendMode;const r=t.tracks,s=r.length,o=new Array(s),a={endingStart:bs,endingEnd:bs};for(let c=0;c!==s;++c){const l=r[c].createInterpolant(null);o[c]=l,l.settings=a}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Kb,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(Wg.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,a[1]=r+n,c[0]=e/s,c[1]=t/s,this},stopWarping:function(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const a=(e-r)*n;if(a<0||n===0)return;this._startTime=null,t=n*a}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const a=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fg:for(let l=0,u=a.length;l!==u;++l)a[l].evaluate(s),c[l].accumulateAdditive(o);break;case af:default:for(let l=0,u=a.length;l!==u;++l)a[l].evaluate(s),c[l].accumulate(i,o)}}},_updateWeight:function(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t},_updateTime:function(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===Qb;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===Jb){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i},_setEndings:function(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(e?i.endingStart=this.zeroSlopeAtStart?ss:bs:i.endingStart=Xc,t?i.endingEnd=this.zeroSlopeAtEnd?ss:bs:i.endingEnd=Xc)},_scheduleFading:function(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,a=s.sampleValues;return o[0]=r,a[0]=t,o[1]=r+e,a[1]=n,this}});function Cp(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Cp.prototype=Object.assign(Object.create(Hn.prototype),{constructor:Cp,_bindAction:function(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){const h=i[u],d=h.name;let f=l[d];if(f!==void 0)s[u]=f;else{if(f=s[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,d));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;f=new Gg(Xt.create(n,d,p),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,d),s[u]=f}o[u].resultBuffer=f.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e},_removeInactiveAction:function(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new bl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?En.findByName(i,e):e;const o=s!==null?s.uuid:e;let a=this._actionsByClip[o],c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=af),a!==void 0){const u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new Wg(this,s,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?En.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,t[l]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function Ph(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}Ph.prototype.clone=function(){return new Ph(this.value.clone===void 0?this.value:this.value.clone())};function Dp(e,t,n){un.call(this,e,t),this.meshPerAttribute=n||1}Dp.prototype=Object.assign(Object.create(un.prototype),{constructor:Dp,isInstancedInterleavedBuffer:!0,copy:function(e){return un.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){const t=un.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){const t=un.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function Vl(e,t,n,i){this.ray=new qs(e,t),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ip(e,t){return e.distance-t.distance}function Ch(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let s=0,o=r.length;s<o;s++)Ch(r[s],t,n,!0)}}Object.assign(Vl.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,n){const i=n||[];return Ch(e,this,i,t),i.sort(Ip),i},intersectObjects:function(e,t,n){const i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=e.length;r<s;r++)Ch(e[r],this,i,t);return i.sort(Ip),i}});class Op{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(De.clamp(n/this.radius,-1,1))),this}}function hS(e,t,n){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=n!==void 0?n:0,this}Object.assign(hS.prototype,{set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}});const Fp=new oe;function jg(e,t){this.min=e!==void 0?e:new oe(1/0,1/0),this.max=t!==void 0?t:new oe(-1/0,-1/0)}Object.assign(jg.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){const n=Fp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new oe),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new oe),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new oe),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new oe),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return Fp.copy(e).clamp(this.min,this.max).sub(e).length()},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});const Np=new L,mc=new L;function Xg(e,t){this.start=e!==void 0?e:new L,this.end=t!==void 0?t:new L}Object.assign(Xg.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new L),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new L),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new L),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(e,t){Np.subVectors(e,this.start),mc.subVectors(this.end,this.start);const n=mc.dot(mc);let r=mc.dot(Np)/n;return t&&(r=De.clamp(r,0,1)),r},closestPointToPoint:function(e,t,n){const i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new L),this.delta(n).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}});function Sl(e){pe.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Sl.prototype=Object.create(pe.prototype);Sl.prototype.constructor=Sl;Sl.prototype.isImmediateRenderObject=!0;const kp=new L;function ha(e,t){pe.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new be,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,a=32;s<a;s++,o++){const c=s/a*Math.PI*2,l=o/a*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(l),Math.sin(l),1)}n.setAttribute("position",new ge(i,3));const r=new wt({fog:!1,toneMapped:!1});this.cone=new Rt(n,r),this.add(this.cone),this.update()}ha.prototype=Object.create(pe.prototype);ha.prototype.constructor=ha;ha.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};ha.prototype.update=function(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),kp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(kp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};const Di=new L,gc=new Fe,Du=new Fe;function Yg(e){const t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Yg(e.children[n]));return t}function Hs(e){const t=Yg(e),n=new be,i=[],r=[],s=new de(0,0,1),o=new de(0,1,0);for(let c=0;c<t.length;c++){const l=t[c];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new ge(i,3)),n.setAttribute("color",new ge(r,3));const a=new wt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});Rt.call(this,n,a),this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}Hs.prototype=Object.create(Rt.prototype);Hs.prototype.constructor=Hs;Hs.prototype.isSkeletonHelper=!0;Hs.prototype.updateMatrixWorld=function(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Du.getInverse(this.root.matrixWorld);for(let r=0,s=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(gc.multiplyMatrices(Du,o.matrixWorld),Di.setFromMatrixPosition(gc),i.setXYZ(s,Di.x,Di.y,Di.z),gc.multiplyMatrices(Du,o.parent.matrixWorld),Di.setFromMatrixPosition(gc),i.setXYZ(s+1,Di.x,Di.y,Di.z),s+=2)}n.getAttribute("position").needsUpdate=!0,pe.prototype.updateMatrixWorld.call(this,e)};function zs(e,t,n){this.light=e,this.light.updateMatrixWorld(),this.color=n;const i=new As(t,4,2),r=new Wt({wireframe:!0,fog:!1,toneMapped:!1});nt.call(this,i,r),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}zs.prototype=Object.create(nt.prototype);zs.prototype.constructor=zs;zs.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};zs.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};const fS=new L,Bp=new de,Up=new de;function fa(e,t,n){pe.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new Es(t);i.rotateY(Math.PI*.5),this.material=new Wt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),s=new Float32Array(r.count*3);i.setAttribute("color",new Re(s,3)),this.add(new nt(i,this.material)),this.update()}fa.prototype=Object.create(pe.prototype);fa.prototype.constructor=fa;fa.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};fa.prototype.update=function(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Bp.copy(this.light.color),Up.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Bp:Up;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(fS.setFromMatrixPosition(this.light.matrixWorld).negate())};function Tl(e,t,n,i){e=e||10,t=t||10,n=new de(n!==void 0?n:4473924),i=new de(i!==void 0?i:8947848);const r=t/2,s=e/t,o=e/2,a=[],c=[];for(let h=0,d=0,f=-o;h<=t;h++,f+=s){a.push(-o,0,f,o,0,f),a.push(f,0,-o,f,0,o);const p=h===r?n:i;p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3}const l=new be;l.setAttribute("position",new ge(a,3)),l.setAttribute("color",new ge(c,3));const u=new wt({vertexColors:!0,toneMapped:!1});Rt.call(this,l,u),this.type="GridHelper"}Tl.prototype=Object.create(Rt.prototype);Tl.prototype.constructor=Tl;function Dh(e,t,n,i,r,s){e=e||10,t=t||16,n=n||8,i=i||64,r=new de(r!==void 0?r:4473924),s=new de(s!==void 0?s:8947848);const o=[],a=[];for(let u=0;u<=t;u++){const h=u/t*(Math.PI*2),d=Math.sin(h)*e,f=Math.cos(h)*e;o.push(0,0,0),o.push(d,0,f);const p=u&1?r:s;a.push(p.r,p.g,p.b),a.push(p.r,p.g,p.b)}for(let u=0;u<=n;u++){const h=u&1?r:s,d=e-e/n*u;for(let f=0;f<i;f++){let p=f/i*(Math.PI*2),y=Math.sin(p)*d,_=Math.cos(p)*d;o.push(y,0,_),a.push(h.r,h.g,h.b),p=(f+1)/i*(Math.PI*2),y=Math.sin(p)*d,_=Math.cos(p)*d,o.push(y,0,_),a.push(h.r,h.g,h.b)}}const c=new be;c.setAttribute("position",new ge(o,3)),c.setAttribute("color",new ge(a,3));const l=new wt({vertexColors:!0,toneMapped:!1});Rt.call(this,c,l),this.type="PolarGridHelper"}Dh.prototype=Object.create(Rt.prototype);Dh.prototype.constructor=Dh;const Hp=new L,yc=new L,zp=new L;function Gs(e,t,n){pe.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new be;i.setAttribute("position",new ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new wt({fog:!1,toneMapped:!1});this.lightPlane=new dn(i,r),this.add(this.lightPlane),i=new be,i.setAttribute("position",new ge([0,0,0,0,0,1],3)),this.targetLine=new dn(i,r),this.add(this.targetLine),this.update()}Gs.prototype=Object.create(pe.prototype);Gs.prototype.constructor=Gs;Gs.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};Gs.prototype.update=function(){Hp.setFromMatrixPosition(this.light.matrixWorld),yc.setFromMatrixPosition(this.light.target.matrixWorld),zp.subVectors(yc,Hp),this.lightPlane.lookAt(yc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(yc),this.targetLine.scale.z=zp.length()};const _c=new L,yt=new gi;function da(e){const t=new be,n=new wt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},o=new de(16755200),a=new de(16711680),c=new de(43775),l=new de(16777215),u=new de(3355443);h("n1","n2",o),h("n2","n4",o),h("n4","n3",o),h("n3","n1",o),h("f1","f2",o),h("f2","f4",o),h("f4","f3",o),h("f3","f1",o),h("n1","f1",o),h("n2","f2",o),h("n3","f3",o),h("n4","f4",o),h("p","n1",a),h("p","n2",a),h("p","n3",a),h("p","n4",a),h("u1","u2",c),h("u2","u3",c),h("u3","u1",c),h("c","t",l),h("p","c",u),h("cn1","cn2",u),h("cn3","cn4",u),h("cf1","cf2",u),h("cf3","cf4",u);function h(f,p,y){d(f,y),d(p,y)}function d(f,p){i.push(0,0,0),r.push(p.r,p.g,p.b),s[f]===void 0&&(s[f]=[]),s[f].push(i.length/3-1)}t.setAttribute("position",new ge(i,3)),t.setAttribute("color",new ge(r,3)),Rt.call(this,t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}da.prototype=Object.create(Rt.prototype);da.prototype.constructor=da;da.prototype.update=function(){const e=this.geometry,t=this.pointMap,n=1,i=1;yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Et("c",t,e,yt,0,0,-1),Et("t",t,e,yt,0,0,1),Et("n1",t,e,yt,-n,-i,-1),Et("n2",t,e,yt,n,-i,-1),Et("n3",t,e,yt,-n,i,-1),Et("n4",t,e,yt,n,i,-1),Et("f1",t,e,yt,-n,-i,1),Et("f2",t,e,yt,n,-i,1),Et("f3",t,e,yt,-n,i,1),Et("f4",t,e,yt,n,i,1),Et("u1",t,e,yt,n*.7,i*1.1,-1),Et("u2",t,e,yt,-n*.7,i*1.1,-1),Et("u3",t,e,yt,0,i*2,-1),Et("cf1",t,e,yt,-n,0,1),Et("cf2",t,e,yt,n,0,1),Et("cf3",t,e,yt,0,-i,1),Et("cf4",t,e,yt,0,i,1),Et("cn1",t,e,yt,-n,0,-1),Et("cn2",t,e,yt,n,0,-1),Et("cn3",t,e,yt,0,-i,-1),Et("cn4",t,e,yt,0,i,-1),e.getAttribute("position").needsUpdate=!0};function Et(e,t,n,i,r,s,o){_c.set(r,s,o).unproject(i);const a=t[e];if(a!==void 0){const c=n.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],_c.x,_c.y,_c.z)}}const vc=new zn;function Vs(e,t){this.object=e,t===void 0&&(t=16776960);const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new be;r.setIndex(new Re(n,1)),r.setAttribute("position",new Re(i,3)),Rt.call(this,r,new wt({color:t,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}Vs.prototype=Object.create(Rt.prototype);Vs.prototype.constructor=Vs;Vs.prototype.update=function(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&vc.setFromObject(this.object),vc.isEmpty())return;const t=vc.min,n=vc.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()};Vs.prototype.setFromObject=function(e){return this.object=e,this.update(),this};Vs.prototype.copy=function(e){return Rt.prototype.copy.call(this,e),this.object=e.object,this};function Al(e,t){this.type="Box3Helper",this.box=e,t===void 0&&(t=16776960);const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new be;r.setIndex(new Re(n,1)),r.setAttribute("position",new ge(i,3)),Rt.call(this,r,new wt({color:t,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Al.prototype=Object.create(Rt.prototype);Al.prototype.constructor=Al;Al.prototype.updateMatrixWorld=function(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),pe.prototype.updateMatrixWorld.call(this,e))};function Rl(e,t,n){this.plane=e,this.size=t===void 0?1:t;const i=n!==void 0?n:16776960,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],s=new be;s.setAttribute("position",new ge(r,3)),s.computeBoundingSphere(),dn.call(this,s,new wt({color:i,toneMapped:!1})),this.type="PlaneHelper";const o=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],a=new be;a.setAttribute("position",new ge(o,3)),a.computeBoundingSphere(),this.add(new nt(a,new Wt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}Rl.prototype=Object.create(dn.prototype);Rl.prototype.constructor=Rl;Rl.prototype.updateMatrixWorld=function(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?It:Xs,this.lookAt(this.plane.normal),pe.prototype.updateMatrixWorld.call(this,e)};const Gp=new L;let bc,Iu;function Ar(e,t,n,i,r,s){pe.call(this),this.type="ArrowHelper",e===void 0&&(e=new L(0,0,1)),t===void 0&&(t=new L(0,0,0)),n===void 0&&(n=1),i===void 0&&(i=16776960),r===void 0&&(r=.2*n),s===void 0&&(s=.2*r),bc===void 0&&(bc=new be,bc.setAttribute("position",new ge([0,0,0,0,1,0],3)),Iu=new Ji(0,.5,1,5,1),Iu.translate(0,-.5,0)),this.position.copy(t),this.line=new dn(bc,new wt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new nt(Iu,new Wt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,s)}Ar.prototype=Object.create(pe.prototype);Ar.prototype.constructor=Ar;Ar.prototype.setDirection=function(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Gp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Gp,t)}};Ar.prototype.setLength=function(e,t,n){t===void 0&&(t=.2*e),n===void 0&&(n=.2*t),this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()};Ar.prototype.setColor=function(e){this.line.material.color.set(e),this.cone.material.color.set(e)};Ar.prototype.copy=function(e){return pe.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this};function Ih(e){e=e||1;const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new be;i.setAttribute("position",new ge(t,3)),i.setAttribute("color",new ge(n,3));const r=new wt({vertexColors:!0,toneMapped:!1});Rt.call(this,i,r),this.type="AxesHelper"}Ih.prototype=Object.create(Rt.prototype);Ih.prototype.constructor=Ih;const ms=4,Vi=8,Yn=Math.pow(2,Vi),qg=[.125,.215,.35,.446,.526,.582],Zg=Vi-ms+1+qg.length,is=20,$n={[sn]:0,[xs]:1,[lf]:2,[dg]:3,[pg]:4,[mg]:5,[cf]:6},Ou=new Us,{_lodPlanes:po,_sizeLods:Vp,_sigmas:xc}=pS();let Fu=null;const ur=(1+Math.sqrt(5))/2,es=1/ur,Wp=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ur,es),new L(0,ur,-es),new L(es,0,ur),new L(-es,0,ur),new L(ur,es,0),new L(-ur,es,0)];function jp(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=mS(is),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}jp.prototype={constructor:jp,fromScene:function(e,t=0,n=.1,i=100){Fu=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r},fromEquirectangular:function(e){return this._fromTexture(e)},fromCubemap:function(e){return this._fromTexture(e)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=qp(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=Yp(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<po.length;e++)po[e].dispose()},_cleanup:function(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Fu),e.scissorTest=!1,wc(e,0,0,e.width,e.height)},_fromTexture:function(e){Fu=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t},_allocateTargets:function(e){const t={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:va,format:db,encoding:dS(e)?e.encoding:lf,depthBuffer:!1,stencilBuffer:!1},n=Xp(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Xp(t),n},_compileMaterial:function(e){const t=new nt(po[0],e);this._renderer.compile(t,Ou)},_sceneToCubeUV:function(e,t,n,i){const o=new vt(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.outputEncoding,h=l.toneMapping,d=l.getClearColor(),f=l.getClearAlpha();l.toneMapping=fs,l.outputEncoding=sn;let p=e.background;if(p&&p.isColor){p.convertSRGBToLinear();const y=Math.max(p.r,p.g,p.b),_=Math.min(Math.max(Math.ceil(Math.log2(y)),-128),127);p=p.multiplyScalar(Math.pow(2,-_));const m=(_+128)/255;l.setClearColor(p,m),e.background=null}for(let y=0;y<6;y++){const _=y%3;_==0?(o.up.set(0,a[y],0),o.lookAt(c[y],0,0)):_==1?(o.up.set(0,0,a[y]),o.lookAt(0,c[y],0)):(o.up.set(0,a[y],0),o.lookAt(0,0,c[y])),wc(i,_*Yn,y>2?Yn:0,Yn,Yn),l.setRenderTarget(i),l.render(e,o)}l.toneMapping=h,l.outputEncoding=u,l.setClearColor(d,f)},_textureToCubeUV:function(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=qp()):this._equirectShader==null&&(this._equirectShader=Yp());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new nt(po[0],i),s=i.uniforms;s.envMap.value=e,e.isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),s.inputEncoding.value=$n[e.encoding],s.outputEncoding.value=$n[t.texture.encoding],wc(t,0,0,3*Yn,2*Yn),n.setRenderTarget(t),n.render(r,Ou)},_applyPMREM:function(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Zg;i++){const r=Math.sqrt(xc[i]*xc[i]-xc[i-1]*xc[i-1]),s=Wp[(i-1)%Wp.length];this._blur(e,i-1,i,r,s)}t.autoClear=n},_blur:function(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)},_halfBlur:function(e,t,n,i,r,s,o){const a=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new nt(po[i],c),h=c.uniforms,d=Vp[n]-1,f=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),p=r/f,y=isFinite(r)?1+Math.floor(l*p):is;y>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${is}`);const _=[];let m=0;for(let x=0;x<is;++x){const S=x/p,w=Math.exp(-S*S/2);_.push(w),x==0?m+=w:x<y&&(m+=2*w)}for(let x=0;x<_.length;x++)_[x]=_[x]/m;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=_,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o),h.dTheta.value=f,h.mipInt.value=Vi-n,h.inputEncoding.value=$n[e.texture.encoding],h.outputEncoding.value=$n[e.texture.encoding];const g=Vp[i],v=3*Math.max(0,Yn-2*g),b=(i===0?0:2*Yn)+2*g*(i>Vi-ms?i-Vi+ms:0);wc(t,v,b,3*g,2*g),a.setRenderTarget(t),a.render(u,Ou)}};function dS(e){return e===void 0||e.type!==va?!1:e.encoding===sn||e.encoding===xs||e.encoding===cf}function pS(){const e=[],t=[],n=[];let i=Vi;for(let r=0;r<Zg;r++){const s=Math.pow(2,i);t.push(s);let o=1/s;r>Vi-ms?o=qg[r-Vi+ms-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,p=2,y=1,_=new Float32Array(f*d*h),m=new Float32Array(p*d*h),g=new Float32Array(y*d*h);for(let b=0;b<h;b++){const x=b%3*2/3-1,S=b>2?0:-1,w=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];_.set(w,f*d*b),m.set(u,p*d*b);const O=[b,b,b,b,b,b];g.set(O,y*d*b)}const v=new be;v.setAttribute("position",new Re(_,f)),v.setAttribute("uv",new Re(m,p)),v.setAttribute("faceIndex",new Re(g,y)),e.push(v),i>ms&&i--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}function Xp(e){const t=new Tn(3*Yn,3*Yn,e);return t.texture.mapping=_a,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function wc(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function mS(e){const t=new Float32Array(e),n=new L(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:$n[sn]},outputEncoding:{value:$n[sn]}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${gf()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Yp(){const e=new oe(1,1);return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:e},inputEncoding:{value:$n[sn]},outputEncoding:{value:$n[sn]}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${gf()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function qp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:$n[sn]},outputEncoding:{value:$n[sn]}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${gf()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function mf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gf(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}Ae.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(Ae.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(Bi.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=new Ce;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.vertices.push(new L(r.x,r.y,r.z||0))}return t}});Object.assign(Kn.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});Object.create(mn.prototype);Object.create(mn.prototype);function Jg(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),mn.call(this,e),this.type="catmullrom"}Jg.prototype=Object.create(mn.prototype);Object.assign(Jg.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Tl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Hs.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(ze.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),fr.extractUrlBase(e)}});ze.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(Ah.prototype,{setTexturePath:function(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}});Object.assign(jg.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(zn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(ai.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});ba.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};Xg.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(De,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),De.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),De.ceilPowerOfTwo(e)}});Object.assign($t.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(Fe.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,s)}});Zn.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};At.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(qs.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(Bt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(Bt,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Bt.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Bt.getNormal(e,t,n,i)}});Object.assign(_r.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ts(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Rs(this,e)}});Object.assign(oe.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(L.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Qe.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ce.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(pe.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(pe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(nt.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(nt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),$b},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Jc.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Qc.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Kc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(Ae.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});vt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(ut.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(Re.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===No},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(No)}}});Object.assign(Re.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?No:zl),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(be.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new Re(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(be.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(El.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(Vl.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(un.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===No},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(un.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?No:zl),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(yi.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(Ph.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(Le.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new de}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===cg}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(Ln.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(_i.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}});Object.defineProperties(en.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(xa.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(xa.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?xs:sn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Rg.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Tn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(ua.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Lh().load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});zg.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ho.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};br.crossOrigin=void 0;br.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new xl;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};br.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new yh;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};br.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};br.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};(function(){function e(T){ze.call(this,T),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.pluginCallbacks=[],this.register(function(M){return new o(M)}),this.register(function(M){return new c(M)}),this.register(function(M){return new a(M)})}e.prototype=Object.assign(Object.create(ze.prototype),{constructor:e,load:function(T,M,P,C){var U=this,G;this.resourcePath!==""?G=this.resourcePath:this.path!==""?G=this.path:G=fr.extractUrlBase(T),U.manager.itemStart(T);var I=function(Y){C?C(Y):console.error(Y),U.manager.itemError(T),U.manager.itemEnd(T)},z=new on(U.manager);z.setPath(this.path),z.setResponseType("arraybuffer"),z.setRequestHeader(this.requestHeader),U.crossOrigin==="use-credentials"&&z.setWithCredentials(!0),z.load(T,function(Y){try{U.parse(Y,G,function(Q){M(Q),U.manager.itemEnd(T)},I)}catch(Q){I(Q)}},P,I)},setDRACOLoader:function(T){return this.dracoLoader=T,this},setDDSLoader:function(T){return this.ddsLoader=T,this},setKTX2Loader:function(T){return this.ktx2Loader=T,this},register:function(T){return this.pluginCallbacks.indexOf(T)===-1&&this.pluginCallbacks.push(T),this},unregister:function(T){return this.pluginCallbacks.indexOf(T)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(T),1),this},parse:function(T,M,P,C){var U,G={},I={};if(typeof T=="string")U=T;else{var z=fr.decodeText(new Uint8Array(T,0,4));if(z===l){try{G[n.KHR_BINARY_GLTF]=new d(T)}catch(Z){C&&C(Z);return}U=G[n.KHR_BINARY_GLTF].content}else U=fr.decodeText(new Uint8Array(T))}var Y=JSON.parse(U);if(Y.asset===void 0||Y.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}var Q=new ce(Y,{path:M||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader});Q.fileLoader.setRequestHeader(this.requestHeader);for(var J=0;J<this.pluginCallbacks.length;J++){var ie=this.pluginCallbacks[J](Q);I[ie.name]=ie,G[ie.name]=!0}if(Y.extensionsUsed)for(var J=0;J<Y.extensionsUsed.length;++J){var E=Y.extensionsUsed[J],A=Y.extensionsRequired||[];switch(E){case n.KHR_LIGHTS_PUNCTUAL:G[E]=new r(Y);break;case n.KHR_MATERIALS_UNLIT:G[E]=new s;break;case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:G[E]=new _;break;case n.KHR_DRACO_MESH_COMPRESSION:G[E]=new f(Y,this.dracoLoader);break;case n.MSFT_TEXTURE_DDS:G[E]=new i(this.ddsLoader);break;case n.KHR_TEXTURE_TRANSFORM:G[E]=new p;break;case n.KHR_MESH_QUANTIZATION:G[E]=new m;break;default:A.indexOf(E)>=0&&I[E]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+E+'".')}}Q.setExtensions(G),Q.setPlugins(I),Q.parse(P,C)}});function t(){var T={};return{get:function(M){return T[M]},add:function(M,P){T[M]=P},remove:function(M){delete T[M]},removeAll:function(){T={}}}}var n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function i(T){if(!T)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=n.MSFT_TEXTURE_DDS,this.ddsLoader=T}function r(T){this.name=n.KHR_LIGHTS_PUNCTUAL;var M=T.extensions&&T.extensions[n.KHR_LIGHTS_PUNCTUAL]||{};this.lightDefs=M.lights||[]}r.prototype.loadLight=function(T){var M=this.lightDefs[T],P,C=new de(16777215);M.color!==void 0&&C.fromArray(M.color);var U=M.range!==void 0?M.range:0;switch(M.type){case"directional":P=new la(C),P.target.position.set(0,0,-1),P.add(P.target);break;case"point":P=new ca(C),P.distance=U;break;case"spot":P=new wl(C),P.distance=U,M.spot=M.spot||{},M.spot.innerConeAngle=M.spot.innerConeAngle!==void 0?M.spot.innerConeAngle:0,M.spot.outerConeAngle=M.spot.outerConeAngle!==void 0?M.spot.outerConeAngle:Math.PI/4,P.angle=M.spot.outerConeAngle,P.penumbra=1-M.spot.innerConeAngle/M.spot.outerConeAngle,P.target.position.set(0,0,-1),P.add(P.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+M.type+'".')}return P.position.set(0,0,0),P.decay=2,M.intensity!==void 0&&(P.intensity=M.intensity),P.name=M.name||"light_"+T,Promise.resolve(P)};function s(){this.name=n.KHR_MATERIALS_UNLIT}s.prototype.getMaterialType=function(){return Wt},s.prototype.extendParams=function(T,M,P){var C=[];T.color=new de(1,1,1),T.opacity=1;var U=M.pbrMetallicRoughness;if(U){if(Array.isArray(U.baseColorFactor)){var G=U.baseColorFactor;T.color.fromArray(G),T.opacity=G[3]}U.baseColorTexture!==void 0&&C.push(P.assignTexture(T,"map",U.baseColorTexture))}return Promise.all(C)};function o(T){this.parser=T,this.name=n.KHR_MATERIALS_CLEARCOAT}o.prototype.getMaterialType=function(){return _i},o.prototype.extendMaterialParams=function(T,M){var P=this.parser,C=P.json.materials[T];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();var U=[],G=C.extensions[this.name];if(G.clearcoatFactor!==void 0&&(M.clearcoat=G.clearcoatFactor),G.clearcoatTexture!==void 0&&U.push(P.assignTexture(M,"clearcoatMap",G.clearcoatTexture)),G.clearcoatRoughnessFactor!==void 0&&(M.clearcoatRoughness=G.clearcoatRoughnessFactor),G.clearcoatRoughnessTexture!==void 0&&U.push(P.assignTexture(M,"clearcoatRoughnessMap",G.clearcoatRoughnessTexture)),G.clearcoatNormalTexture!==void 0&&(U.push(P.assignTexture(M,"clearcoatNormalMap",G.clearcoatNormalTexture)),G.clearcoatNormalTexture.scale!==void 0)){var I=G.clearcoatNormalTexture.scale;M.clearcoatNormalScale=new oe(I,I)}return Promise.all(U)};function a(T){this.parser=T,this.name=n.KHR_MATERIALS_TRANSMISSION}a.prototype.getMaterialType=function(){return _i},a.prototype.extendMaterialParams=function(T,M){var P=this.parser,C=P.json.materials[T];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();var U=[],G=C.extensions[this.name];return G.transmissionFactor!==void 0&&(M.transmission=G.transmissionFactor),G.transmissionTexture!==void 0&&U.push(P.assignTexture(M,"transmissionMap",G.transmissionTexture)),Promise.all(U)};function c(T){this.parser=T,this.name=n.KHR_TEXTURE_BASISU}c.prototype.loadTexture=function(T){var M=this.parser,P=M.json,C=P.textures[T];if(!C.extensions||!C.extensions[this.name])return null;var U=C.extensions[this.name],G=P.images[U.source],I=M.options.ktx2Loader;if(!I)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return M.loadTextureImage(T,G,I)};var l="glTF",u=12,h={JSON:1313821514,BIN:5130562};function d(T){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;var M=new DataView(T,0,u);if(this.header={magic:fr.decodeText(new Uint8Array(T.slice(0,4))),version:M.getUint32(4,!0),length:M.getUint32(8,!0)},this.header.magic!==l)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var P=new DataView(T,u),C=0;C<P.byteLength;){var U=P.getUint32(C,!0);C+=4;var G=P.getUint32(C,!0);if(C+=4,G===h.JSON){var I=new Uint8Array(T,u+C,U);this.content=fr.decodeText(I)}else if(G===h.BIN){var z=u+C;this.body=T.slice(z,z+U)}C+=U}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}function f(T,M){if(!M)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=T,this.dracoLoader=M,this.dracoLoader.preload()}f.prototype.decodePrimitive=function(T,M){var P=this.json,C=this.dracoLoader,U=T.extensions[this.name].bufferView,G=T.extensions[this.name].attributes,I={},z={},Y={};for(var Q in G){var J=O[Q]||Q.toLowerCase();I[J]=G[Q]}for(Q in T.attributes){var J=O[Q]||Q.toLowerCase();if(G[Q]!==void 0){var ie=P.accessors[T.attributes[Q]],E=b[ie.componentType];Y[J]=E,z[J]=ie.normalized===!0}}return M.getDependency("bufferView",U).then(function(A){return new Promise(function(Z){C.decodeDracoFile(A,function(K){for(var D in K.attributes){var ee=K.attributes[D],N=z[D];N!==void 0&&(ee.normalized=N)}Z(K)},I,Y)})})};function p(){this.name=n.KHR_TEXTURE_TRANSFORM}p.prototype.extendTexture=function(T,M){return T=T.clone(),M.offset!==void 0&&T.offset.fromArray(M.offset),M.rotation!==void 0&&(T.rotation=M.rotation),M.scale!==void 0&&T.repeat.fromArray(M.scale),M.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),T.needsUpdate=!0,T};function y(T){Qt.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var M=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),P=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),C=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),U=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),G=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor.rgb;"].join(`
`),I={specular:{value:new de().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=I,this.onBeforeCompile=function(z){for(var Y in I)z.uniforms[Y]=I[Y];z.fragmentShader=z.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;"),z.fragmentShader=z.fragmentShader.replace("uniform float metalness;","uniform float glossiness;"),z.fragmentShader=z.fragmentShader.replace("#include <roughnessmap_pars_fragment>",M),z.fragmentShader=z.fragmentShader.replace("#include <metalnessmap_pars_fragment>",P),z.fragmentShader=z.fragmentShader.replace("#include <roughnessmap_fragment>",C),z.fragmentShader=z.fragmentShader.replace("#include <metalnessmap_fragment>",U),z.fragmentShader=z.fragmentShader.replace("#include <lights_physical_fragment>",G)},Object.defineProperties(this,{specular:{get:function(){return I.specular.value},set:function(z){I.specular.value=z}},specularMap:{get:function(){return I.specularMap.value},set:function(z){I.specularMap.value=z}},glossiness:{get:function(){return I.glossiness.value},set:function(z){I.glossiness.value=z}},glossinessMap:{get:function(){return I.glossinessMap.value},set:function(z){I.glossinessMap.value=z,z?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_ROUGHNESSMAP=""):(delete this.defines.USE_ROUGHNESSMAP,delete this.defines.USE_GLOSSINESSMAP)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(T)}y.prototype=Object.create(Qt.prototype),y.prototype.constructor=y,y.prototype.copy=function(T){return Qt.prototype.copy.call(this,T),this.specularMap=T.specularMap,this.specular.copy(T.specular),this.glossinessMap=T.glossinessMap,this.glossiness=T.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this};function _(){return{name:n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return y},extendParams:function(T,M,P){var C=M.extensions[this.name];T.color=new de(1,1,1),T.opacity=1;var U=[];if(Array.isArray(C.diffuseFactor)){var G=C.diffuseFactor;T.color.fromArray(G),T.opacity=G[3]}if(C.diffuseTexture!==void 0&&U.push(P.assignTexture(T,"map",C.diffuseTexture)),T.emissive=new de(0,0,0),T.glossiness=C.glossinessFactor!==void 0?C.glossinessFactor:1,T.specular=new de(1,1,1),Array.isArray(C.specularFactor)&&T.specular.fromArray(C.specularFactor),C.specularGlossinessTexture!==void 0){var I=C.specularGlossinessTexture;U.push(P.assignTexture(T,"glossinessMap",I)),U.push(P.assignTexture(T,"specularMap",I))}return Promise.all(U)},createMaterial:function(T){var M=new y(T);return M.fog=!0,M.color=T.color,M.map=T.map===void 0?null:T.map,M.lightMap=null,M.lightMapIntensity=1,M.aoMap=T.aoMap===void 0?null:T.aoMap,M.aoMapIntensity=1,M.emissive=T.emissive,M.emissiveIntensity=1,M.emissiveMap=T.emissiveMap===void 0?null:T.emissiveMap,M.bumpMap=T.bumpMap===void 0?null:T.bumpMap,M.bumpScale=1,M.normalMap=T.normalMap===void 0?null:T.normalMap,M.normalMapType=Cr,T.normalScale&&(M.normalScale=T.normalScale),M.displacementMap=null,M.displacementScale=1,M.displacementBias=0,M.specularMap=T.specularMap===void 0?null:T.specularMap,M.specular=T.specular,M.glossinessMap=T.glossinessMap===void 0?null:T.glossinessMap,M.glossiness=T.glossiness,M.alphaMap=null,M.envMap=T.envMap===void 0?null:T.envMap,M.envMapIntensity=1,M.refractionRatio=.98,M}}}function m(){this.name=n.KHR_MESH_QUANTIZATION}function g(T,M,P,C){rn.call(this,T,M,P,C)}g.prototype=Object.create(rn.prototype),g.prototype.constructor=g,g.prototype.copySampleValue_=function(T){for(var M=this.resultBuffer,P=this.sampleValues,C=this.valueSize,U=T*C*3+C,G=0;G!==C;G++)M[G]=P[U+G];return M},g.prototype.beforeStart_=g.prototype.copySampleValue_,g.prototype.afterEnd_=g.prototype.copySampleValue_,g.prototype.interpolate_=function(T,M,P,C){for(var U=this.resultBuffer,G=this.sampleValues,I=this.valueSize,z=I*2,Y=I*3,Q=C-M,J=(P-M)/Q,ie=J*J,E=ie*J,A=T*Y,Z=A-Y,K=-2*E+3*ie,D=E-ie,ee=1-K,N=D-ie+J,se=0;se!==I;se++){var ae=G[Z+se+I],fe=G[Z+se+z]*Q,Ee=G[A+se+I],te=G[A+se]*Q;U[se]=ee*ae+N*fe+K*Ee+D*te}return U};var v={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},b={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},x={9728:Pt,9729:Ot,9984:Gc,9985:of,9986:Vc,9987:vs},S={33071:Kt,33648:Io,10497:yr},w={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},O={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},R={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},q={CUBICSPLINE:void 0,LINEAR:ps,STEP:Fo},H={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},j={"image/png":hn,"image/jpeg":mi};function W(T,M){return typeof T!="string"||T===""?"":(/^https?:\/\//i.test(M)&&/^\//.test(T)&&(M=M.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(T)||/^data:.*,.*$/i.test(T)||/^blob:.*$/i.test(T)?T:M+T)}function V(T){return T.DefaultMaterial===void 0&&(T.DefaultMaterial=new Qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xs})),T.DefaultMaterial}function F(T,M,P){for(var C in P.extensions)T[C]===void 0&&(M.userData.gltfExtensions=M.userData.gltfExtensions||{},M.userData.gltfExtensions[C]=P.extensions[C])}function B(T,M){M.extras!==void 0&&(typeof M.extras=="object"?Object.assign(T.userData,M.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+M.extras))}function X(T,M,P){for(var C=!1,U=!1,G=0,I=M.length;G<I;G++){var z=M[G];if(z.POSITION!==void 0&&(C=!0),z.NORMAL!==void 0&&(U=!0),C&&U)break}if(!C&&!U)return Promise.resolve(T);for(var Y=[],Q=[],G=0,I=M.length;G<I;G++){var z=M[G];if(C){var J=z.POSITION!==void 0?P.getDependency("accessor",z.POSITION):T.attributes.position;Y.push(J)}if(U){var J=z.NORMAL!==void 0?P.getDependency("accessor",z.NORMAL):T.attributes.normal;Q.push(J)}}return Promise.all([Promise.all(Y),Promise.all(Q)]).then(function(ie){var E=ie[0],A=ie[1];return C&&(T.morphAttributes.position=E),U&&(T.morphAttributes.normal=A),T.morphTargetsRelative=!0,T})}function ne(T,M){if(T.updateMorphTargets(),M.weights!==void 0)for(var P=0,C=M.weights.length;P<C;P++)T.morphTargetInfluences[P]=M.weights[P];if(M.extras&&Array.isArray(M.extras.targetNames)){var U=M.extras.targetNames;if(T.morphTargetInfluences.length===U.length){T.morphTargetDictionary={};for(var P=0,C=U.length;P<C;P++)T.morphTargetDictionary[U[P]]=P}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ue(T){var M=T.extensions&&T.extensions[n.KHR_DRACO_MESH_COMPRESSION],P;return M?P="draco:"+M.bufferView+":"+M.indices+":"+he(M.attributes):P=T.indices+":"+he(T.attributes)+":"+T.mode,P}function he(T){for(var M="",P=Object.keys(T).sort(),C=0,U=P.length;C<U;C++)M+=P[C]+":"+T[P[C]]+";";return M}function ce(T,M){this.json=T||{},this.extensions={},this.plugins={},this.options=M||{},this.cache=new t,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Rh(this.options.manager):this.textureLoader=new xl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new on(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}ce.prototype.setExtensions=function(T){this.extensions=T},ce.prototype.setPlugins=function(T){this.plugins=T},ce.prototype.parse=function(T,M){var P=this,C=this.json,U=this.extensions;this.cache.removeAll(),this._markDefs(),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then(function(G){var I={scene:G[0][C.scene||0],scenes:G[0],animations:G[1],cameras:G[2],asset:C.asset,parser:P,userData:{}};F(U,I,C),B(I,C),T(I)}).catch(M)},ce.prototype._markDefs=function(){for(var T=this.json.nodes||[],M=this.json.skins||[],P=this.json.meshes||[],C=0,U=M.length;C<U;C++)for(var G=M[C].joints,I=0,z=G.length;I<z;I++)T[G[I]].isBone=!0;for(var Y=0,Q=T.length;Y<Q;Y++){var J=T[Y];J.mesh!==void 0&&(this._addNodeRef(this.meshCache,J.mesh),J.skin!==void 0&&(P[J.mesh].isSkinnedMesh=!0)),J.camera!==void 0&&this._addNodeRef(this.cameraCache,J.camera),J.extensions&&J.extensions[n.KHR_LIGHTS_PUNCTUAL]&&J.extensions[n.KHR_LIGHTS_PUNCTUAL].light!==void 0&&this._addNodeRef(this.lightCache,J.extensions[n.KHR_LIGHTS_PUNCTUAL].light)}},ce.prototype._addNodeRef=function(T,M){M!==void 0&&(T.refs[M]===void 0&&(T.refs[M]=T.uses[M]=0),T.refs[M]++)},ce.prototype._getNodeRef=function(T,M,P){if(T.refs[M]<=1)return P;var C=P.clone();return C.name+="_instance_"+T.uses[M]++,C},ce.prototype._invokeOne=function(T){var M=Object.values(this.plugins);M.push(this);for(var P=0;P<M.length;P++){var C=T(M[P]);if(C)return C}},ce.prototype._invokeAll=function(T){var M=Object.values(this.plugins);M.unshift(this);for(var P=[],C=0;C<M.length;C++)P.push(T(M[C]));return Promise.all(P)},ce.prototype.getDependency=function(T,M){var P=T+":"+M,C=this.cache.get(P);if(!C){switch(T){case"scene":C=this.loadScene(M);break;case"node":C=this.loadNode(M);break;case"mesh":C=this._invokeOne(function(U){return U.loadMesh&&U.loadMesh(M)});break;case"accessor":C=this.loadAccessor(M);break;case"bufferView":C=this._invokeOne(function(U){return U.loadBufferView&&U.loadBufferView(M)});break;case"buffer":C=this.loadBuffer(M);break;case"material":C=this._invokeOne(function(U){return U.loadMaterial&&U.loadMaterial(M)});break;case"texture":C=this._invokeOne(function(U){return U.loadTexture&&U.loadTexture(M)});break;case"skin":C=this.loadSkin(M);break;case"animation":C=this.loadAnimation(M);break;case"camera":C=this.loadCamera(M);break;case"light":C=this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(M);break;default:throw new Error("Unknown type: "+T)}this.cache.add(P,C)}return C},ce.prototype.getDependencies=function(T){var M=this.cache.get(T);if(!M){var P=this,C=this.json[T+(T==="mesh"?"es":"s")]||[];M=Promise.all(C.map(function(U,G){return P.getDependency(T,G)})),this.cache.add(T,M)}return M},ce.prototype.loadBuffer=function(T){var M=this.json.buffers[T],P=this.fileLoader;if(M.type&&M.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+M.type+" buffer type is not supported.");if(M.uri===void 0&&T===0)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);var C=this.options;return new Promise(function(U,G){P.load(W(M.uri,C.path),U,void 0,function(){G(new Error('THREE.GLTFLoader: Failed to load buffer "'+M.uri+'".'))})})},ce.prototype.loadBufferView=function(T){var M=this.json.bufferViews[T];return this.getDependency("buffer",M.buffer).then(function(P){var C=M.byteLength||0,U=M.byteOffset||0;return P.slice(U,U+C)})},ce.prototype.loadAccessor=function(T){var M=this,P=this.json,C=this.json.accessors[T];if(C.bufferView===void 0&&C.sparse===void 0)return Promise.resolve(null);var U=[];return C.bufferView!==void 0?U.push(this.getDependency("bufferView",C.bufferView)):U.push(null),C.sparse!==void 0&&(U.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),U.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(U).then(function(G){var I=G[0],z=w[C.type],Y=b[C.componentType],Q=Y.BYTES_PER_ELEMENT,J=Q*z,ie=C.byteOffset||0,E=C.bufferView!==void 0?P.bufferViews[C.bufferView].byteStride:void 0,A=C.normalized===!0,Z,K;if(E&&E!==J){var D=Math.floor(ie/E),ee="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+D+":"+C.count,N=M.cache.get(ee);N||(Z=new Y(I,D*E,C.count*E/Q),N=new un(Z,E/Q),M.cache.add(ee,N)),K=new Yi(N,z,ie%E/Q,A)}else I===null?Z=new Y(C.count*z):Z=new Y(I,ie,C.count*z),K=new Re(Z,z,A);if(C.sparse!==void 0){var se=w.SCALAR,ae=b[C.sparse.indices.componentType],fe=C.sparse.indices.byteOffset||0,Ee=C.sparse.values.byteOffset||0,te=new ae(G[1],fe,C.sparse.count*se),xe=new Y(G[2],Ee,C.sparse.count*z);I!==null&&(K=new Re(K.array.slice(),K.itemSize,K.normalized));for(var we=0,Ue=te.length;we<Ue;we++){var Ge=te[we];if(K.setX(Ge,xe[we*z]),z>=2&&K.setY(Ge,xe[we*z+1]),z>=3&&K.setZ(Ge,xe[we*z+2]),z>=4&&K.setW(Ge,xe[we*z+3]),z>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return K})},ce.prototype.loadTexture=function(T){var M=this,P=this.json,C=this.options,U=P.textures[T],G=U.extensions||{},I;G[n.MSFT_TEXTURE_DDS]?I=P.images[G[n.MSFT_TEXTURE_DDS].source]:I=P.images[U.source];var z;return I.uri&&(z=C.manager.getHandler(I.uri)),z||(z=G[n.MSFT_TEXTURE_DDS]?M.extensions[n.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(T,I,z)},ce.prototype.loadTextureImage=function(T,M,P){var C=this,U=this.json,G=this.options,I=U.textures[T],z=self.URL||self.webkitURL,Y=M.uri,Q=!1;return M.bufferView!==void 0&&(Y=C.getDependency("bufferView",M.bufferView).then(function(J){Q=!0;var ie=new Blob([J],{type:M.mimeType});return Y=z.createObjectURL(ie),Y})),Promise.resolve(Y).then(function(J){return new Promise(function(ie,E){var A=ie;P.isImageBitmapLoader===!0&&(A=function(Z){ie(new jo(Z))}),P.load(W(J,G.path),A,void 0,E)})}).then(function(J){Q===!0&&z.revokeObjectURL(Y),J.flipY=!1,I.name&&(J.name=I.name),M.mimeType in j&&(J.format=j[M.mimeType]);var ie=U.samplers||{},E=ie[I.sampler]||{};return J.magFilter=x[E.magFilter]||Ot,J.minFilter=x[E.minFilter]||vs,J.wrapS=S[E.wrapS]||yr,J.wrapT=S[E.wrapT]||yr,C.associations.set(J,{type:"textures",index:T}),J})},ce.prototype.assignTexture=function(T,M,P){var C=this;return this.getDependency("texture",P.index).then(function(U){if(!U.isCompressedTexture)switch(M){case"aoMap":case"emissiveMap":case"metalnessMap":case"normalMap":case"roughnessMap":U.format=mi;break}if(P.texCoord!==void 0&&P.texCoord!=0&&!(M==="aoMap"&&P.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+P.texCoord+" for texture "+M+" not yet supported."),C.extensions[n.KHR_TEXTURE_TRANSFORM]){var G=P.extensions!==void 0?P.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(G){var I=C.associations.get(U);U=C.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(U,G),C.associations.set(U,I)}}T[M]=U})},ce.prototype.assignFinalMaterial=function(T){var M=T.geometry,P=T.material,C=M.attributes.tangent!==void 0,U=M.attributes.color!==void 0,G=M.attributes.normal===void 0,I=T.isSkinnedMesh===!0,z=Object.keys(M.morphAttributes).length>0,Y=z&&M.morphAttributes.normal!==void 0;if(T.isPoints){var Q="PointsMaterial:"+P.uuid,J=this.cache.get(Q);J||(J=new qi,Le.prototype.copy.call(J,P),J.color.copy(P.color),J.map=P.map,J.sizeAttenuation=!1,this.cache.add(Q,J)),P=J}else if(T.isLine){var Q="LineBasicMaterial:"+P.uuid,ie=this.cache.get(Q);ie||(ie=new wt,Le.prototype.copy.call(ie,P),ie.color.copy(P.color),this.cache.add(Q,ie)),P=ie}if(C||U||G||I||z){var Q="ClonedMaterial:"+P.uuid+":";P.isGLTFSpecularGlossinessMaterial&&(Q+="specular-glossiness:"),I&&(Q+="skinning:"),C&&(Q+="vertex-tangents:"),U&&(Q+="vertex-colors:"),G&&(Q+="flat-shading:"),z&&(Q+="morph-targets:"),Y&&(Q+="morph-normals:");var E=this.cache.get(Q);E||(E=P.clone(),I&&(E.skinning=!0),C&&(E.vertexTangents=!0),U&&(E.vertexColors=!0),G&&(E.flatShading=!0),z&&(E.morphTargets=!0),Y&&(E.morphNormals=!0),this.cache.add(Q,E),this.associations.set(E,this.associations.get(P))),P=E}P.aoMap&&M.attributes.uv2===void 0&&M.attributes.uv!==void 0&&M.setAttribute("uv2",M.attributes.uv),P.normalScale&&!C&&(P.normalScale.y=-P.normalScale.y),P.clearcoatNormalScale&&!C&&(P.clearcoatNormalScale.y=-P.clearcoatNormalScale.y),T.material=P},ce.prototype.getMaterialType=function(){return Qt},ce.prototype.loadMaterial=function(T){var M=this,P=this.json,C=this.extensions,U=P.materials[T],G,I={},z=U.extensions||{},Y=[];if(z[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var Q=C[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];G=Q.getMaterialType(),Y.push(Q.extendParams(I,U,M))}else if(z[n.KHR_MATERIALS_UNLIT]){var J=C[n.KHR_MATERIALS_UNLIT];G=J.getMaterialType(),Y.push(J.extendParams(I,U,M))}else{var ie=U.pbrMetallicRoughness||{};if(I.color=new de(1,1,1),I.opacity=1,Array.isArray(ie.baseColorFactor)){var E=ie.baseColorFactor;I.color.fromArray(E),I.opacity=E[3]}ie.baseColorTexture!==void 0&&Y.push(M.assignTexture(I,"map",ie.baseColorTexture)),I.metalness=ie.metallicFactor!==void 0?ie.metallicFactor:1,I.roughness=ie.roughnessFactor!==void 0?ie.roughnessFactor:1,ie.metallicRoughnessTexture!==void 0&&(Y.push(M.assignTexture(I,"metalnessMap",ie.metallicRoughnessTexture)),Y.push(M.assignTexture(I,"roughnessMap",ie.metallicRoughnessTexture))),G=this._invokeOne(function(Z){return Z.getMaterialType&&Z.getMaterialType(T)}),Y.push(this._invokeAll(function(Z){return Z.extendMaterialParams&&Z.extendMaterialParams(T,I)}))}U.doubleSided===!0&&(I.side=Ys);var A=U.alphaMode||H.OPAQUE;return A===H.BLEND?(I.transparent=!0,I.depthWrite=!1):(I.transparent=!1,A===H.MASK&&(I.alphaTest=U.alphaCutoff!==void 0?U.alphaCutoff:.5)),U.normalTexture!==void 0&&G!==Wt&&(Y.push(M.assignTexture(I,"normalMap",U.normalTexture)),I.normalScale=new oe(1,1),U.normalTexture.scale!==void 0&&I.normalScale.set(U.normalTexture.scale,U.normalTexture.scale)),U.occlusionTexture!==void 0&&G!==Wt&&(Y.push(M.assignTexture(I,"aoMap",U.occlusionTexture)),U.occlusionTexture.strength!==void 0&&(I.aoMapIntensity=U.occlusionTexture.strength)),U.emissiveFactor!==void 0&&G!==Wt&&(I.emissive=new de().fromArray(U.emissiveFactor)),U.emissiveTexture!==void 0&&G!==Wt&&Y.push(M.assignTexture(I,"emissiveMap",U.emissiveTexture)),Promise.all(Y).then(function(){var Z;return G===y?Z=C[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(I):Z=new G(I),U.name&&(Z.name=U.name),Z.map&&(Z.map.encoding=xs),Z.emissiveMap&&(Z.emissiveMap.encoding=xs),B(Z,U),M.associations.set(Z,{type:"materials",index:T}),U.extensions&&F(C,Z,U),Z})};function Me(T,M,P){var C=M.attributes,U=new zn;if(C.POSITION!==void 0){var G=P.json.accessors[C.POSITION],I=G.min,z=G.max;if(I!==void 0&&z!==void 0)U.set(new L(I[0],I[1],I[2]),new L(z[0],z[1],z[2]));else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;var Y=M.targets;if(Y!==void 0){for(var Q=new L,J=new L,ie=0,E=Y.length;ie<E;ie++){var A=Y[ie];if(A.POSITION!==void 0){var G=P.json.accessors[A.POSITION],I=G.min,z=G.max;I!==void 0&&z!==void 0?(J.setX(Math.max(Math.abs(I[0]),Math.abs(z[0]))),J.setY(Math.max(Math.abs(I[1]),Math.abs(z[1]))),J.setZ(Math.max(Math.abs(I[2]),Math.abs(z[2]))),Q.max(J)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}U.expandByVector(Q)}T.boundingBox=U;var Z=new ai;U.getCenter(Z.center),Z.radius=U.min.distanceTo(U.max)/2,T.boundingSphere=Z}function _e(T,M,P){var C=M.attributes,U=[];function G(Q,J){return P.getDependency("accessor",Q).then(function(ie){T.setAttribute(J,ie)})}for(var I in C){var z=O[I]||I.toLowerCase();z in T.attributes||U.push(G(C[I],z))}if(M.indices!==void 0&&!T.index){var Y=P.getDependency("accessor",M.indices).then(function(Q){T.setIndex(Q)});U.push(Y)}return B(T,M),Me(T,M,P),Promise.all(U).then(function(){return M.targets!==void 0?X(T,M.targets,P):T})}function Ie(T,M){var P=T.getIndex();if(P===null){var C=[],U=T.getAttribute("position");if(U!==void 0){for(var G=0;G<U.count;G++)C.push(G);T.setIndex(C),P=T.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),T}var I=P.count-2,z=[];if(M===Pd)for(var G=1;G<=I;G++)z.push(P.getX(0)),z.push(P.getX(G)),z.push(P.getX(G+1));else for(var G=0;G<I;G++)G%2===0?(z.push(P.getX(G)),z.push(P.getX(G+1)),z.push(P.getX(G+2))):(z.push(P.getX(G+2)),z.push(P.getX(G+1)),z.push(P.getX(G)));z.length/3!==I&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var Y=T.clone();return Y.setIndex(z),Y}return ce.prototype.loadGeometries=function(T){var M=this,P=this.extensions,C=this.primitiveCache;function U(E){return P[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(E,M).then(function(A){return _e(A,E,M)})}for(var G=[],I=0,z=T.length;I<z;I++){var Y=T[I],Q=ue(Y),J=C[Q];if(J)G.push(J.promise);else{var ie;Y.extensions&&Y.extensions[n.KHR_DRACO_MESH_COMPRESSION]?ie=U(Y):ie=_e(new be,Y,M),C[Q]={primitive:Y,promise:ie},G.push(ie)}}return Promise.all(G)},ce.prototype.loadMesh=function(T){for(var M=this,P=this.json,C=P.meshes[T],U=C.primitives,G=[],I=0,z=U.length;I<z;I++){var Y=U[I].material===void 0?V(this.cache):this.getDependency("material",U[I].material);G.push(Y)}return G.push(M.loadGeometries(U)),Promise.all(G).then(function(Q){for(var J=Q.slice(0,Q.length-1),ie=Q[Q.length-1],E=[],A=0,Z=ie.length;A<Z;A++){var K=ie[A],D=U[A],ee,N=J[A];if(D.mode===v.TRIANGLES||D.mode===v.TRIANGLE_STRIP||D.mode===v.TRIANGLE_FAN||D.mode===void 0)ee=C.isSkinnedMesh===!0?new Kc(K,N):new nt(K,N),ee.isSkinnedMesh===!0&&!ee.geometry.attributes.skinWeight.normalized&&ee.normalizeSkinWeights(),D.mode===v.TRIANGLE_STRIP?ee.geometry=Ie(ee.geometry,ex):D.mode===v.TRIANGLE_FAN&&(ee.geometry=Ie(ee.geometry,Pd));else if(D.mode===v.LINES)ee=new Rt(K,N);else if(D.mode===v.LINE_STRIP)ee=new dn(K,N);else if(D.mode===v.LINE_LOOP)ee=new $c(K,N);else if(D.mode===v.POINTS)ee=new el(K,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+D.mode);Object.keys(ee.geometry.morphAttributes).length>0&&ne(ee,C),ee.name=C.name||"mesh_"+T,ie.length>1&&(ee.name+="_"+A),B(ee,C),M.assignFinalMaterial(ee),E.push(ee)}if(E.length===1)return E[0];for(var se=new Qn,A=0,Z=E.length;A<Z;A++)se.add(E[A]);return se})},ce.prototype.loadCamera=function(T){var M,P=this.json.cameras[T],C=P[P.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return P.type==="perspective"?M=new vt(De.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):P.type==="orthographic"&&(M=new Us(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),P.name&&(M.name=P.name),B(M,P),Promise.resolve(M)},ce.prototype.loadSkin=function(T){var M=this.json.skins[T],P={joints:M.joints};return M.inverseBindMatrices===void 0?Promise.resolve(P):this.getDependency("accessor",M.inverseBindMatrices).then(function(C){return P.inverseBindMatrices=C,P})},ce.prototype.loadAnimation=function(T){for(var M=this.json,P=M.animations[T],C=[],U=[],G=[],I=[],z=[],Y=0,Q=P.channels.length;Y<Q;Y++){var J=P.channels[Y],ie=P.samplers[J.sampler],E=J.target,A=E.node!==void 0?E.node:E.id,Z=P.parameters!==void 0?P.parameters[ie.input]:ie.input,K=P.parameters!==void 0?P.parameters[ie.output]:ie.output;C.push(this.getDependency("node",A)),U.push(this.getDependency("accessor",Z)),G.push(this.getDependency("accessor",K)),I.push(ie),z.push(E)}return Promise.all([Promise.all(C),Promise.all(U),Promise.all(G),Promise.all(I),Promise.all(z)]).then(function(D){for(var ee=D[0],N=D[1],se=D[2],ae=D[3],fe=D[4],Ee=[],te=0,xe=ee.length;te<xe;te++){var we=ee[te],Ue=N[te],Ge=se[te],Js=ae[te],Ir=fe[te];if(we!==void 0){we.updateMatrix(),we.matrixAutoUpdate=!0;var Or;switch(R[Ir.path]){case R.weights:Or=Ns;break;case R.rotation:Or=sa;break;case R.position:case R.scale:default:Or=ks;break}var Ks=we.name?we.name:we.uuid,Wl=Js.interpolation!==void 0?q[Js.interpolation]:ps,Gn=[];R[Ir.path]===R.weights?we.traverse(function(k){k.isMesh===!0&&k.morphTargetInfluences&&Gn.push(k.name?k.name:k.uuid)}):Gn.push(Ks);var _n=Ge.array;if(Ge.normalized){var Mi;if(_n.constructor===Int8Array)Mi=1/127;else if(_n.constructor===Uint8Array)Mi=1/255;else if(_n.constructor==Int16Array)Mi=1/32767;else if(_n.constructor===Uint16Array)Mi=1/65535;else throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");for(var Qs=new Float32Array(_n.length),Ct=0,Fr=_n.length;Ct<Fr;Ct++)Qs[Ct]=_n[Ct]*Mi;_n=Qs}for(var Ct=0,Fr=Gn.length;Ct<Fr;Ct++){var $s=new Or(Gn[Ct]+"."+R[Ir.path],Ue.array,_n,Wl);Js.interpolation==="CUBICSPLINE"&&($s.createInterpolant=function(le){return new g(this.times,this.values,this.getValueSize()/3,le)},$s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),Ee.push($s)}}}var jl=P.name?P.name:"animation_"+T;return new En(jl,void 0,Ee)})},ce.prototype.loadNode=function(T){var M=this.json,P=this.extensions,C=this,U=M.nodes[T];return function(){var G=[];if(U.mesh!==void 0&&G.push(C.getDependency("mesh",U.mesh).then(function(z){var Y=C._getNodeRef(C.meshCache,U.mesh,z);return U.weights!==void 0&&Y.traverse(function(Q){if(!!Q.isMesh)for(var J=0,ie=U.weights.length;J<ie;J++)Q.morphTargetInfluences[J]=U.weights[J]}),Y})),U.camera!==void 0&&G.push(C.getDependency("camera",U.camera).then(function(z){return C._getNodeRef(C.cameraCache,U.camera,z)})),U.extensions&&U.extensions[n.KHR_LIGHTS_PUNCTUAL]&&U.extensions[n.KHR_LIGHTS_PUNCTUAL].light!==void 0){var I=U.extensions[n.KHR_LIGHTS_PUNCTUAL].light;G.push(C.getDependency("light",I).then(function(z){return C._getNodeRef(C.lightCache,I,z)}))}return Promise.all(G)}().then(function(G){var I;if(U.isBone===!0?I=new oh:G.length>1?I=new Qn:G.length===1?I=G[0]:I=new pe,I!==G[0])for(var z=0,Y=G.length;z<Y;z++)I.add(G[z]);if(U.name&&(I.userData.name=U.name,I.name=Xt.sanitizeNodeName(U.name)),B(I,U),U.extensions&&F(P,I,U),U.matrix!==void 0){var Q=new Fe;Q.fromArray(U.matrix),I.applyMatrix4(Q)}else U.translation!==void 0&&I.position.fromArray(U.translation),U.rotation!==void 0&&I.quaternion.fromArray(U.rotation),U.scale!==void 0&&I.scale.fromArray(U.scale);return C.associations.set(I,{type:"nodes",index:T}),I})},ce.prototype.loadScene=function(){function T(M,P,C,U){var G=C.nodes[M];return U.getDependency("node",M).then(function(I){if(G.skin===void 0)return I;var z;return U.getDependency("skin",G.skin).then(function(Y){z=Y;for(var Q=[],J=0,ie=z.joints.length;J<ie;J++)Q.push(U.getDependency("node",z.joints[J]));return Promise.all(Q)}).then(function(Y){return I.traverse(function(Q){if(!!Q.isMesh){for(var J=[],ie=[],E=0,A=Y.length;E<A;E++){var Z=Y[E];if(Z){J.push(Z);var K=new Fe;z.inverseBindMatrices!==void 0&&K.fromArray(z.inverseBindMatrices.array,E*16),ie.push(K)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',z.joints[E])}Q.bind(new Qc(J,ie),Q.matrixWorld)}}),I})}).then(function(I){P.add(I);var z=[];if(G.children)for(var Y=G.children,Q=0,J=Y.length;Q<J;Q++){var ie=Y[Q];z.push(T(ie,I,C,U))}return Promise.all(z)})}return function(P){var C=this.json,U=this.extensions,G=this.json.scenes[P],I=this,z=new Qn;G.name&&(z.name=G.name),B(z,G),G.extensions&&F(U,z,G);for(var Y=G.nodes||[],Q=[],J=0,ie=Y.length;J<ie;J++)Q.push(T(Y[J],z,C,I));return Promise.all(Q).then(function(){return z})}}(),e})();var wn=function(e){ze.call(this,e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}};wn.prototype=Object.assign(Object.create(ze.prototype),{constructor:wn,setDecoderPath:function(e){return this.decoderPath=e,this},setDecoderConfig:function(e){return this.decoderConfig=e,this},setWorkerLimit:function(e){return this.workerLimit=e,this},setVerbosity:function(){console.warn("THREE.DRACOLoader: The .setVerbosity() method has been removed.")},setDrawMode:function(){console.warn("THREE.DRACOLoader: The .setDrawMode() method has been removed.")},setSkipDequantization:function(){console.warn("THREE.DRACOLoader: The .setSkipDequantization() method has been removed.")},load:function(e,t,n,i){var r=new on(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),this.crossOrigin==="use-credentials"&&r.setWithCredentials(!0),r.load(e,s=>{var o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,o).then(t).catch(i)},n,i)},decodeDracoFile:function(e,t,n,i){var r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)},decodeGeometry:function(e,t){for(var n in t.attributeTypes){var i=t.attributeTypes[n];i.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[n]=i.name)}var r=JSON.stringify(t);if(wn.taskCache.has(e)){var s=wn.taskCache.get(e);if(s.key===r)return s.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}var o,a=this.workerNextTaskID++,c=e.byteLength,l=this._getWorker(a,c).then(u=>(o=u,new Promise((h,d)=>{o._callbacks[a]={resolve:h,reject:d},o.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(u=>this._createGeometry(u.geometry));return l.catch(()=>!0).then(()=>{o&&a&&this._releaseTask(o,a)}),wn.taskCache.set(e,{key:r,promise:l}),l},_createGeometry:function(e){var t=new be;e.index&&t.setIndex(new Re(e.index.array,1));for(var n=0;n<e.attributes.length;n++){var i=e.attributes[n],r=i.name,s=i.array,o=i.itemSize;t.setAttribute(r,new Re(s,o))}return t},_loadLibrary:function(e,t){var n=new on(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),new Promise((i,r)=>{n.load(e,i,void 0,r)})},preload:function(){return this._initDecoder(),this},_initDecoder:function(){if(this.decoderPending)return this.decoderPending;var e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{var i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);var r=wn.DRACOWorker.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending},_getWorker:function(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){var n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){var s=r.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});var n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})},_releaseTask:function(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]},debug:function(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))},dispose:function(){for(var e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}});wn.DRACOWorker=function(){var e,t;onmessage=function(r){var s=r.data;switch(s.type){case"init":e=s.decoderConfig,t=new Promise(function(c){e.onModuleLoaded=function(l){c({draco:l})},DracoDecoderModule(e)});break;case"decode":var o=s.buffer,a=s.taskConfig;t.then(c=>{var l=c.draco,u=new l.Decoder,h=new l.DecoderBuffer;h.Init(new Int8Array(o),o.byteLength);try{var d=n(l,u,h,a),f=d.attributes.map(p=>p.array.buffer);d.index&&f.push(d.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:d},f)}catch(p){console.error(p),self.postMessage({type:"error",id:s.id,error:p.message})}finally{l.destroy(h),l.destroy(u)}});break}};function n(r,s,o,a){var c=a.attributeIDs,l=a.attributeTypes,u,h,d=s.GetEncodedGeometryType(o);if(d===r.TRIANGULAR_MESH)u=new r.Mesh,h=s.DecodeBufferToMesh(o,u);else if(d===r.POINT_CLOUD)u=new r.PointCloud,h=s.DecodeBufferToPointCloud(o,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());var f={index:null,attributes:[]};for(var p in c){var y=self[l[p]],_,m;if(a.useUniqueIDs)m=c[p],_=s.GetAttributeByUniqueId(u,m);else{if(m=s.GetAttributeId(u,r[c[p]]),m===-1)continue;_=s.GetAttribute(u,m)}f.attributes.push(i(r,s,u,p,y,_))}if(d===r.TRIANGULAR_MESH){for(var g=u.num_faces(),v=g*3,b=new Uint32Array(v),x=new r.DracoInt32Array,S=0;S<g;++S){s.GetFaceFromMesh(u,S,x);for(var w=0;w<3;++w)b[S*3+w]=x.GetValue(w)}f.index={array:b,itemSize:1},r.destroy(x)}return r.destroy(u),f}function i(r,s,o,a,c,l){var u=l.num_components(),h=o.num_points(),d=h*u,f,p;switch(c){case Float32Array:f=new r.DracoFloat32Array,s.GetAttributeFloatForAllPoints(o,l,f),p=new Float32Array(d);break;case Int8Array:f=new r.DracoInt8Array,s.GetAttributeInt8ForAllPoints(o,l,f),p=new Int8Array(d);break;case Int16Array:f=new r.DracoInt16Array,s.GetAttributeInt16ForAllPoints(o,l,f),p=new Int16Array(d);break;case Int32Array:f=new r.DracoInt32Array,s.GetAttributeInt32ForAllPoints(o,l,f),p=new Int32Array(d);break;case Uint8Array:f=new r.DracoUInt8Array,s.GetAttributeUInt8ForAllPoints(o,l,f),p=new Uint8Array(d);break;case Uint16Array:f=new r.DracoUInt16Array,s.GetAttributeUInt16ForAllPoints(o,l,f),p=new Uint16Array(d);break;case Uint32Array:f=new r.DracoUInt32Array,s.GetAttributeUInt32ForAllPoints(o,l,f),p=new Uint32Array(d);break;default:throw new Error("THREE.DRACOLoader: Unexpected attribute type.")}for(var y=0;y<d;y++)p[y]=f.GetValue(y);return r.destroy(f),{name:a,array:p,itemSize:u}}};wn.taskCache=new WeakMap;wn.setDecoderPath=function(){console.warn("THREE.DRACOLoader: The .setDecoderPath() method has been removed. Use instance methods.")};wn.setDecoderConfig=function(){console.warn("THREE.DRACOLoader: The .setDecoderConfig() method has been removed. Use instance methods.")};wn.releaseDecoderModule=function(){console.warn("THREE.DRACOLoader: The .releaseDecoderModule() method has been removed. Use instance methods.")};wn.getDecoderModule=function(){console.warn("THREE.DRACOLoader: The .getDecoderModule() method has been removed. Use instance methods.")};var Ll=function(e,t){t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),a=o.NONE},this.update=function(){var N=new L,se=new At().setFromUnitVectors(e.up,new L(0,1,0)),ae=se.clone().inverse(),fe=new L,Ee=new At,te=2*Math.PI;return function(){var we=n.object.position;N.copy(we).sub(n.target),N.applyQuaternion(se),l.setFromVector3(N),n.autoRotate&&a===o.NONE&&R(w()),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);var Ue=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(Ue)&&isFinite(Ge)&&(Ue<-Math.PI?Ue+=te:Ue>Math.PI&&(Ue-=te),Ge<-Math.PI?Ge+=te:Ge>Math.PI&&(Ge-=te),Ue<Ge?l.theta=Math.max(Ue,Math.min(Ge,l.theta)):l.theta=l.theta>(Ue+Ge)/2?Math.max(Ue,l.theta):Math.min(Ge,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),N.setFromSpherical(l),N.applyQuaternion(ae),we.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),h=1,f||fe.distanceToSquared(n.object.position)>c||8*(1-Ee.dot(n.object.quaternion))>c?(n.dispatchEvent(i),fe.copy(n.object.position),Ee.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee,!1),n.domElement.removeEventListener("mousedown",Q,!1),n.domElement.removeEventListener("wheel",E,!1),n.domElement.removeEventListener("touchstart",Z,!1),n.domElement.removeEventListener("touchend",D,!1),n.domElement.removeEventListener("touchmove",K,!1),n.domElement.ownerDocument.removeEventListener("mousemove",J,!1),n.domElement.ownerDocument.removeEventListener("mouseup",ie,!1),n.domElement.removeEventListener("keydown",A,!1)};var n=this,i={type:"change"},r={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,l=new Op,u=new Op,h=1,d=new L,f=!1,p=new oe,y=new oe,_=new oe,m=new oe,g=new oe,v=new oe,b=new oe,x=new oe,S=new oe;function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function R(N){u.theta-=N}function q(N){u.phi-=N}var H=function(){var N=new L;return function(ae,fe){N.setFromMatrixColumn(fe,0),N.multiplyScalar(-ae),d.add(N)}}(),j=function(){var N=new L;return function(ae,fe){n.screenSpacePanning===!0?N.setFromMatrixColumn(fe,1):(N.setFromMatrixColumn(fe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ae),d.add(N)}}(),W=function(){var N=new L;return function(ae,fe){var Ee=n.domElement;if(n.object.isPerspectiveCamera){var te=n.object.position;N.copy(te).sub(n.target);var xe=N.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),H(2*ae*xe/Ee.clientHeight,n.object.matrix),j(2*fe*xe/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(ae*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),j(fe*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(N){n.object.isPerspectiveCamera?h/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(N){n.object.isPerspectiveCamera?h*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(N){p.set(N.clientX,N.clientY)}function X(N){b.set(N.clientX,N.clientY)}function ne(N){m.set(N.clientX,N.clientY)}function ue(N){y.set(N.clientX,N.clientY),_.subVectors(y,p).multiplyScalar(n.rotateSpeed);var se=n.domElement;R(2*Math.PI*_.x/se.clientHeight),q(2*Math.PI*_.y/se.clientHeight),p.copy(y),n.update()}function he(N){x.set(N.clientX,N.clientY),S.subVectors(x,b),S.y>0?V(O()):S.y<0&&F(O()),b.copy(x),n.update()}function ce(N){g.set(N.clientX,N.clientY),v.subVectors(g,m).multiplyScalar(n.panSpeed),W(v.x,v.y),m.copy(g),n.update()}function Me(N){N.deltaY<0?F(O()):N.deltaY>0&&V(O()),n.update()}function _e(N){var se=!1;switch(N.keyCode){case n.keys.UP:W(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:W(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:W(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:W(-n.keyPanSpeed,0),se=!0;break}se&&(N.preventDefault(),n.update())}function Ie(N){if(N.touches.length==1)p.set(N.touches[0].pageX,N.touches[0].pageY);else{var se=.5*(N.touches[0].pageX+N.touches[1].pageX),ae=.5*(N.touches[0].pageY+N.touches[1].pageY);p.set(se,ae)}}function T(N){if(N.touches.length==1)m.set(N.touches[0].pageX,N.touches[0].pageY);else{var se=.5*(N.touches[0].pageX+N.touches[1].pageX),ae=.5*(N.touches[0].pageY+N.touches[1].pageY);m.set(se,ae)}}function M(N){var se=N.touches[0].pageX-N.touches[1].pageX,ae=N.touches[0].pageY-N.touches[1].pageY,fe=Math.sqrt(se*se+ae*ae);b.set(0,fe)}function P(N){n.enableZoom&&M(N),n.enablePan&&T(N)}function C(N){n.enableZoom&&M(N),n.enableRotate&&Ie(N)}function U(N){if(N.touches.length==1)y.set(N.touches[0].pageX,N.touches[0].pageY);else{var se=.5*(N.touches[0].pageX+N.touches[1].pageX),ae=.5*(N.touches[0].pageY+N.touches[1].pageY);y.set(se,ae)}_.subVectors(y,p).multiplyScalar(n.rotateSpeed);var fe=n.domElement;R(2*Math.PI*_.x/fe.clientHeight),q(2*Math.PI*_.y/fe.clientHeight),p.copy(y)}function G(N){if(N.touches.length==1)g.set(N.touches[0].pageX,N.touches[0].pageY);else{var se=.5*(N.touches[0].pageX+N.touches[1].pageX),ae=.5*(N.touches[0].pageY+N.touches[1].pageY);g.set(se,ae)}v.subVectors(g,m).multiplyScalar(n.panSpeed),W(v.x,v.y),m.copy(g)}function I(N){var se=N.touches[0].pageX-N.touches[1].pageX,ae=N.touches[0].pageY-N.touches[1].pageY,fe=Math.sqrt(se*se+ae*ae);x.set(0,fe),S.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),V(S.y),b.copy(x)}function z(N){n.enableZoom&&I(N),n.enablePan&&G(N)}function Y(N){n.enableZoom&&I(N),n.enableRotate&&U(N)}function Q(N){if(n.enabled!==!1){N.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();var se;switch(N.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Ii.DOLLY:if(n.enableZoom===!1)return;X(N),a=o.DOLLY;break;case Ii.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ne(N),a=o.PAN}else{if(n.enableRotate===!1)return;B(N),a=o.ROTATE}break;case Ii.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;B(N),a=o.ROTATE}else{if(n.enablePan===!1)return;ne(N),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(n.domElement.ownerDocument.addEventListener("mousemove",J,!1),n.domElement.ownerDocument.addEventListener("mouseup",ie,!1),n.dispatchEvent(r))}}function J(N){if(n.enabled!==!1)switch(N.preventDefault(),a){case o.ROTATE:if(n.enableRotate===!1)return;ue(N);break;case o.DOLLY:if(n.enableZoom===!1)return;he(N);break;case o.PAN:if(n.enablePan===!1)return;ce(N);break}}function ie(N){n.enabled!==!1&&(n.domElement.ownerDocument.removeEventListener("mousemove",J,!1),n.domElement.ownerDocument.removeEventListener("mouseup",ie,!1),n.dispatchEvent(s),a=o.NONE)}function E(N){n.enabled===!1||n.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(N.preventDefault(),N.stopPropagation(),n.dispatchEvent(r),Me(N),n.dispatchEvent(s))}function A(N){n.enabled===!1||n.enableKeys===!1||n.enablePan===!1||_e(N)}function Z(N){if(n.enabled!==!1){switch(N.preventDefault(),N.touches.length){case 1:switch(n.touches.ONE){case Oi.ROTATE:if(n.enableRotate===!1)return;Ie(N),a=o.TOUCH_ROTATE;break;case Oi.PAN:if(n.enablePan===!1)return;T(N),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case Oi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(N),a=o.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;C(N),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(r)}}function K(N){if(n.enabled!==!1)switch(N.preventDefault(),N.stopPropagation(),a){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;U(N),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;G(N),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(N),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(N),n.update();break;default:a=o.NONE}}function D(N){n.enabled!==!1&&(n.dispatchEvent(s),a=o.NONE)}function ee(N){n.enabled!==!1&&N.preventDefault()}n.domElement.addEventListener("contextmenu",ee,!1),n.domElement.addEventListener("mousedown",Q,!1),n.domElement.addEventListener("wheel",E,!1),n.domElement.addEventListener("touchstart",Z,!1),n.domElement.addEventListener("touchend",D,!1),n.domElement.addEventListener("touchmove",K,!1),n.domElement.addEventListener("keydown",A,!1),n.domElement.tabIndex===-1&&(n.domElement.tabIndex=0),this.update()};Ll.prototype=Object.create(Hn.prototype);Ll.prototype.constructor=Ll;var Oh=function(e,t){Ll.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=Ii.PAN,this.mouseButtons.RIGHT=Ii.ROTATE,this.touches.ONE=Oi.PAN,this.touches.TWO=Oi.DOLLY_ROTATE};Oh.prototype=Object.create(Hn.prototype);Oh.prototype.constructor=Oh;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lv}}));function Lo(e){let t=!1;return e&&e.constructor===Array&&e.length===3&&(t=!0),t}function Kg(e){return e&&e.constructor===Array}function Qg(e){return e&&console.error("SVELTHREE > passing a Matrix4 as prop is not implemented yet!"),!1}class gr{constructor(t){this.obj=t,t.type?this.objTypeStr=t.type:(this.objTypeStr="",console.info("SVELTHREE TODO > UniversalPropIterator > constructor : obj has no 'type' property, probably of type 'Material[]' or WebGLRenderer",t)),this.dlTarget=void 0}setFromVector3OrArray(t){this.props[t].constructor===L?this.obj[t].copy(this.props[t]):Array.isArray(this.props[t])&&this.obj[t].set(this.props[t][0],this.props[t][1],this.props[t][2])}checkSetColor(t){Kg(this.props[t])?Lo(this.props[t])?this.obj[t]=new de(this.props[t][0],this.props[t][1],this.props[t][2]):console.error("SVELTHREE > UniversalPropIterator > checkSetColor : Prop should be an Array of three (3) values!",t):this.obj[t]=new de(this.props[t])}checkSetDlTarget(t){this.props[t]===void 0||(this.obj[t]=this.props[t].getEmpty())}tryPropsUpdate(t){if(this.props=t,this.obj)for(let n in this.props)this.obj.hasOwnProperty(n)?n==="scale"||n==="position"||n==="rotation"?this.setFromVector3OrArray(n):n==="color"?this.checkSetColor(n):n==="target"&&this.objTypeStr==="DirectionalLight"?this.checkSetDlTarget(n):this.obj[n]=this.props[n]:this.obj[n.toString()]?n==="lookAt"&&this.obj.lookAt&&(this.props[n].constructor===L?this.obj.lookAt(this.props[n]):Array.isArray(this.props[n])&&this.obj.lookAt(this.props[n][0],this.props[n][1],this.props[n][2])):console.error("SVELTHREE > "+this.objTypeStr+" : No such property in "+this.objTypeStr+"! : "+n.toString());this.objTypeStr.includes("Material")&&(this.obj.needsUpdate=!0)}}class Pl{constructor(t){this.obj=t}tryPosUpdate(t){this.obj&&(t.constructor===L?this.obj.position.copy(t):Array.isArray(t)&&t.length===3?this.obj.position.set(t[0],t[1],t[2]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be an Array(3) or valid THREE.Vector3!",{obj:this.obj,p:t}))}tryRotUpdate(t){this.obj&&(t.constructor===Dr?this.obj.rotation.copy(t):Array.isArray(t)&&t.length===3?this.obj.rotation.set(t[0],t[1],t[2]):Array.isArray(t)&&t.length===4?this.obj.rotation.set(t[0],t[1],t[2],t[3]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be Array(3 || 4) or valid THREE.Euler!",{obj:this.obj,p:t}))}tryScaleUpdate(t){this.obj&&(t.constructor===L?this.obj.scale.copy(t):Array.isArray(t)?this.obj.scale.set(t[0],t[1],t[2]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be an Array(3) or valid THREE.Vector3!",{obj:this.obj,p:t}))}tryLookAtUpdate(t){this.obj.lookAt&&(t.constructor===L?this.obj.lookAt(t):Array.isArray(t)&&t.length===3?this.obj.lookAt(t[0],t[1],t[2]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be an Array(3) or valid THREE.Vector3!",{obj:this.obj,p:t}))}}const ts=[];function Qi(e,t=kt){let n;const i=[];function r(a){if(Ft(e,a)&&(e=a,n)){const c=!ts.length;for(let l=0;l<i.length;l+=1){const u=i[l];u[1](),ts.push(u,e)}if(c){for(let l=0;l<ts.length;l+=2)ts[l][0](ts[l+1]);ts.length=0}}}function s(a){r(a(e))}function o(a,c=kt){const l=[a,c];return i.push(l),i.length===1&&(n=t(r)||kt),a(e),()=>{const u=i.indexOf(l);u!==-1&&i.splice(u,1),i.length===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}const et=Qi([]);class $g{constructor(t){this.fn=t}initiate(t,...n){let i;try{if(i=this.fn(t,n),!i.hasOwnProperty("onStart"))throw console.warn("SVELTHREE > Provided animation is missing 'onStart' function!",{animation:i}),new Error("SVELTHREE Exception (see warning above)");if(!i.hasOwnProperty("onDestroy"))throw console.warn("SVELTHREE > Provided animation has no 'onDestroy' function!",{animation:i}),new Error("SVELTHREE Exception (see warning above)")}catch(r){throw new Error("SVELTHREE Exception (see warning above), "+r)}return i}}class gS{constructor(t,n,i,r){this.animation=t,this.aniauto=n,this.obj=i,this.scene=r}handleCurrentSceneStatus(t){t?this.aniauto&&this.handleSceneActive():this.handleSceneInActive()}handleSceneActive(){this.animationInitiated()===!0?this.tryOnSceneReactivated():this.initiateAnimation()}initiateAnimation(){this.scene.userData.isActive||console.warn("SVELTHREE > SvelthreeAnimationManager : initiateAnimation : You're about to initiate an animation in an inactive Scene!"),this.animation=this.animation.initiate(this.obj,...arguments),console.info("SVELTHREE > SvelthreeAnimationManager > initiateAnimation : after initialization: this.animation:",this.animation);try{this.animation.onStart()}catch(t){throw new Error("SVELTHREE Exception, "+t)}}tryOnSceneReactivated(){this.animation.onSceneReactivated?this.animation.onSceneReactivated():console.warn("SVELTHREE > SvelthreeAnimationManager > tryOnSceneReactivated : Animation couldn't be started, missing 'onSceneReactivated' method!")}handleSceneInActive(){this.animationInitiated()}tryOnSceneDeactivated(){this.animation.onSceneDeactivated?this.animation.onSceneDeactivated():console.warn("SVELTHREE > SvelthreeAnimationManager > tryOnSceneDeactivated : Animation couldn't be stopped, missing 'onSceneDeactivated' method!")}startAni(){this.animationInitiated()===!1?this.initiateAnimation():console.warn("SVELTHREE > SvelthreeAnimationManager > startAni : animation has already been initiated! 'animation': ",this.animation)}destroyAnimation(){this.animation.hasOwnProperty("onDestroy")?this.animation.onDestroy():console.warn("SVELTHREE > SvelthreeAnimationManager > Unable to find 'onDestroy' method in 'animation': This may be a BUG in REPL and may be safe to ignore. Please check if your animation is running as intended and consider checking it in another environment. Contributions on this issue are welcome! : this.animation",this.animation)}animationInitiated(){if(this.animationIsAnimationProp())return!1;if(this.animationIsObject())return!0;throw console.warn("SVELTHREE > SvelthreeAnimationManager > animationInitiated? : 'animation': ",this.animation),new Error("SVELTHREE > SvelthreeAnimationManager > animationInitiated? : 'animation' prop is of unsupported type!")}animationIsAnimationProp(){return!!(this.animation&&this.animation instanceof $g)}animationIsObject(){return!!(this.animation&&typeof this.animation=="object")}getAnimation(){return this.animation}}function yS(e,t,n){let{animationEnabled:i=void 0}=t,{animation:r=void 0}=t,{aniauto:s=void 0}=t,{obj:o=void 0}=t,{scene:a=void 0}=t,c;function l(){c||(n(0,r=new $g(r)),n(9,c=new gS(r,s,o,a)))}let{currentSceneActive:u}=t;function h(){if(c)return c.getAnimation();console.error("SVELTHREE > SvelthreeAnimation > destroyAnimation : missing SvelthreeAnimationManager!",{aniManager:c})}function d(){c?c.destroyAnimation():r&&i&&console.error("SVELTHREE > SvelthreeAnimation > destroyAnimation : missing SvelthreeAnimationManager!",{aniManager:c})}function f(){c?c.startAni():console.error("SVELTHREE > SvelthreeAnimation > destroyAnimation : missing SvelthreeAnimationManager!",{aniManager:c})}return yn(()=>()=>{console.info("SVELTHREE > onDestroy : SvelthreeAnimation"),d()}),e.$$set=p=>{"animationEnabled"in p&&n(1,i=p.animationEnabled),"animation"in p&&n(0,r=p.animation),"aniauto"in p&&n(2,s=p.aniauto),"obj"in p&&n(3,o=p.obj),"scene"in p&&n(4,a=p.scene),"currentSceneActive"in p&&n(5,u=p.currentSceneActive)},e.$$.update=()=>{e.$$.dirty&3&&r&&i&&l(),e.$$.dirty&544&&u&&c&&c.handleCurrentSceneStatus(u)},[r,i,s,o,a,u,h,d,f,c]}class yf extends zt{constructor(t){super(),Ht(this,t,yS,null,Ft,{animationEnabled:1,animation:0,aniauto:2,obj:3,scene:4,currentSceneActive:5,getAnimation:6,destroyAnimation:7,startAni:8})}get getAnimation(){return this.$$.ctx[6]}get destroyAnimation(){return this.$$.ctx[7]}get startAni(){return this.$$.ctx[8]}}function _S(e){let t,n,i;function r(o){e[26](o)}let s={animationEnabled:e[6],animation:e[2],aniauto:e[3],obj:e[0],scene:e[1]};return e[5]!==void 0&&(s.currentSceneActive=e[5]),t=new yf({props:s}),e[25](t),An.push(()=>Hh(t,"currentSceneActive",r)),{c(){Ze(t.$$.fragment)},m(o,a){We(t,o,a),i=!0},p(o,[a]){const c={};a&64&&(c.animationEnabled=o[6]),a&4&&(c.animation=o[2]),a&8&&(c.aniauto=o[3]),a&1&&(c.obj=o[0]),a&2&&(c.scene=o[1]),!n&&a&32&&(n=!0,c.currentSceneActive=o[5],Uh(()=>n=!1)),t.$set(c)},i(o){i||(Se(t.$$.fragment,o),i=!0)},o(o){Pe(t.$$.fragment,o),i=!1},d(o){e[25](null),je(t,o)}}}function vS(){console.error("SVELTHREE > Camera : updating Matrix is not yet implemented!")}function bS(e,t,n){let i;lt(e,et,B=>n(24,i=B));let r,{scene:s}=t,o;if(s)if(s.type==="Scene")v();else throw console.warn("SVELTHREE > Camera : You have to provide a valid 'scene' prop of type 'Scene'!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");else throw console.warn("SVELTHREE > Camera : You have to provide a {scene} prop!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");let{animation:a=void 0}=t,{aniauto:c=void 0}=t,{id:l=void 0}=t,{cam:u}=t,h,d;if(u)h=new Pl(u),d=new gr(u);else throw console.warn("SVELTHREE > Camera : camera was not provided by parent component!",{cam:u}),new Error("SVELTHREE Exception (see warning above)");s.add(u),console.info("SVELTHREE > Camera : "+u.type+" was added to scene!",{cam:u,scene:s,total:s.children.length}),u.userData.id=l,u.userData.isActive=!1,u.userData.indexInCameras=i[o].cameras.length,i[o].cameras.push({camera:u,id:l,isActive:!1});let{pos:f=[0,0,2]}=t,{rot:p=[0,0,0]}=t,{lookAt:y=[0,0,0]}=t,{matrix:_=void 0}=t,{props:m=void 0}=t,{fnOnMount:g=void 0}=t;yn(g?()=>g(self):()=>(console.info("SVELTHREE > onMount : Camera"),()=>{console.info("SVELTHREE > onDestroy : Camera"),w()}));function v(){if(s.userData.sti>=0)n(21,o=s.userData.sti);else throw console.warn("SVELTHREE > Camera : Failed to set 'sti' from 'scene.userData.sti', 'sti' has to be >= 0!",{scene:s,userData:s.userData,sti:s.userData.sti}),new Error("SVELTHREE Exception (see warning above)")}function b(){i.orbitcontrols&&i.orbitcontrols.update()}let x=!1,S=!1;function w(){u.parent.remove(u)}function O(){return i[o].cameras[u.userData.indexInCameras].camera}function R(){return i[o].cameras[u.userData.indexInCameras].camera.userData.indexInCameras}function q(){return o}function H(){return s}function j(){return r.getAnimation()}function W(){r.startAni()}function V(B){An[B?"unshift":"push"](()=>{r=B,n(4,r)})}function F(B){x=B,n(5,x),n(24,i),n(21,o),n(1,s)}return e.$$set=B=>{"scene"in B&&n(1,s=B.scene),"animation"in B&&n(2,a=B.animation),"aniauto"in B&&n(3,c=B.aniauto),"id"in B&&n(7,l=B.id),"cam"in B&&n(0,u=B.cam),"pos"in B&&n(8,f=B.pos),"rot"in B&&n(9,p=B.rot),"lookAt"in B&&n(10,y=B.lookAt),"matrix"in B&&n(11,_=B.matrix),"props"in B&&n(12,m=B.props),"fnOnMount"in B&&n(13,g=B.fnOnMount)},e.$$.update=()=>{e.$$.dirty&4196608&&(_||(h.tryPosUpdate(f),b())),e.$$.dirty&4196864&&(_||h.tryRotUpdate(p)),e.$$.dirty&4197376&&(_||h.tryLookAtUpdate(y)),e.$$.dirty&2048&&Qg(_)&&(console.warn("SVELTHREE > Camera : Matrix provided, will ignore 'pos' or 'rot' props if any provided!"),vS()),e.$$.dirty&8392704&&m&&Object.keys(m).length>0&&d&&d.tryPropsUpdate(m),e.$$.dirty&18874370&&n(5,x=i[o].scenes[s.userData.indexInScenes].isActive),e.$$.dirty&4&&a&&n(6,S=!0)},[u,s,a,c,r,x,S,l,f,p,y,_,m,g,w,O,R,q,H,j,W,o,h,d,i,V,F]}class xS extends zt{constructor(t){super(),Ht(this,t,bS,_S,Ft,{scene:1,animation:2,aniauto:3,id:7,cam:0,pos:8,rot:9,lookAt:10,matrix:11,props:12,fnOnMount:13,removeCameraFromParent:14,getCamera:15,getIndexInCameras:16,getSTI:17,getScene:18,getAnimation:19,startAni:20})}get removeCameraFromParent(){return this.$$.ctx[14]}get getCamera(){return this.$$.ctx[15]}get getIndexInCameras(){return this.$$.ctx[16]}get getSTI(){return this.$$.ctx[17]}get getScene(){return this.$$.ctx[18]}get getAnimation(){return this.$$.ctx[19]}get startAni(){return this.$$.ctx[20]}}function wS(e){let t,n,i={scene:e[0],cam:e[9],id:e[1],pos:e[4],rot:e[5],lookAt:e[6],matrix:e[7],props:e[8],animation:e[2],aniauto:e[3]};return t=new xS({props:i}),e[19](t),{c(){Ze(t.$$.fragment)},m(r,s){We(t,r,s),n=!0},p(r,[s]){const o={};s&1&&(o.scene=r[0]),s&512&&(o.cam=r[9]),s&2&&(o.id=r[1]),s&16&&(o.pos=r[4]),s&32&&(o.rot=r[5]),s&64&&(o.lookAt=r[6]),s&128&&(o.matrix=r[7]),s&256&&(o.props=r[8]),s&4&&(o.animation=r[2]),s&8&&(o.aniauto=r[3]),t.$set(o)},i(r){n||(Se(t.$$.fragment,r),n=!0)},o(r){Pe(t.$$.fragment,r),n=!1},d(r){e[19](null),je(t,r)}}}function MS(e,t,n){let{scene:i}=t,{id:r=void 0}=t;if(!r)throw console.warn("SVELTHREE > PerspectiveCamera : you have to provide an 'id' prop (not empty String) for Cameras in order to assign them to a 'WebGLRenderer' component!",{id:r}),new Error("SVELTHREE Exception (see warning above)");let{animation:s=void 0}=t,{aniauto:o=!1}=t,{pos:a=void 0}=t,{rot:c=void 0}=t,{lookAt:l=void 0}=t,{matrix:u=void 0}=t,{config:h=void 0}=t,{props:d=void 0}=t,f;h&&h.length>0?f=new vt(...h):f=new vt;let{helper:p=!1}=t,y;yn(()=>(console.info("SVELTHREE > onMount : "+f.type),v(),()=>{console.info("SVELTHREE > onDestroy : "+f.type),b()}));function _(){n(18,y=new da(f)),i.add(y),n(18,y.visible=!1,y),console.info("SVELTHREE > "+f.type+" : HELPER added!",{camHelper:y,scene:i,total:i.children.length})}let m=!1,g=0;function v(){m=!0,g=requestAnimationFrame(x)}function b(){m=!1,cancelAnimationFrame(g)}function x(){m&&(y&&y.update(),requestAnimationFrame(x))}function S(){return y}function w(){return r}let O;function R(){return O.getCamera()}function q(){return O.getIndexInCameras()}function H(){return O.getSTI()}function j(W){An[W?"unshift":"push"](()=>{O=W,n(10,O)})}return e.$$set=W=>{"scene"in W&&n(0,i=W.scene),"id"in W&&n(1,r=W.id),"animation"in W&&n(2,s=W.animation),"aniauto"in W&&n(3,o=W.aniauto),"pos"in W&&n(4,a=W.pos),"rot"in W&&n(5,c=W.rot),"lookAt"in W&&n(6,l=W.lookAt),"matrix"in W&&n(7,u=W.matrix),"config"in W&&n(11,h=W.config),"props"in W&&n(8,d=W.props),"helper"in W&&n(12,p=W.helper)},e.$$.update=()=>{e.$$.dirty&266752&&!y&&f&&p&&_()},[i,r,s,o,a,c,l,u,d,f,O,h,p,S,w,R,q,H,y,j]}class ES extends zt{constructor(t){super(),Ht(this,t,MS,wS,Ft,{scene:0,id:1,animation:2,aniauto:3,pos:4,rot:5,lookAt:6,matrix:7,config:11,props:8,helper:12,getHelper:13,getId:14,getCamera:15,getIndexInCameras:16,getSTI:17})}get getHelper(){return this.$$.ctx[13]}get getId(){return this.$$.ctx[14]}get getCamera(){return this.$$.ctx[15]}get getIndexInCameras(){return this.$$.ctx[16]}get getSTI(){return this.$$.ctx[17]}}function Nu(e){return{pointerId:1976+e.pointerId,width:e.width,height:e.height,pressure:e.pressure,tangentialPressure:e.tangentialPressure,tiltX:e.tangentialPressure,tiltY:e.tiltY,twist:e.twist,pointerType:e.pointerType,isPrimary:e.isPrimary,altKey:e.altKey,button:e.button,buttons:e.buttons,clientX:e.clientX,clientY:e.clientY,ctrlKey:e.ctrlKey,metaKey:e.metaKey,movementX:e.movementX,movementY:e.movementY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,relatedTarget:e.relatedTarget,screenX:e.screenX,screenY:e.screenY,shiftKey:e.shiftKey,x:e.x,y:e.y}}function SS(e,t,n){let i;lt(e,et,X=>n(8,i=X));let{interactionEnabled:r}=t,{parent:s}=t,{sti:o}=t,{obj:a}=t,c,{dispatch:l}=t,u,h;function d(){u.addEventListener("click",y,!1),u.addEventListener("pointerup",y,!1),u.addEventListener("pointerdown",y,!1)}function f(){u.removeEventListener("click",y),u.removeEventListener("pointerup",y),u.removeEventListener("pointerdown",y)}let p={click:{check:x},pointerup:{check:x},pointerdown:{check:x},pointermove:{check:b}};function y(X){p.hasOwnProperty(X.type)&&p[X.type].check(X)}yn(()=>(console.info("SVELTHREE > onMount : SvelthreeInteraction"),()=>{console.info("SVELTHREE > onDestroy : SvelthreeInteraction"),n(0,a.userData.interact=!1,a),u&&(u.removeEventListener("pointermove",v),u.removeEventListener("click",y),u.removeEventListener("pointerup",y),u.removeEventListener("pointerdown",y),u.removeEventListener("pointermove",y))}));let _=!1,m=!0,g;function v(X){if(O()){if(!_){let ne=Nu(X);w("pointerenter",{type:"pointerenter",target:a,pointerData:ne,raycasterData:g},!!s.onPointerEnter),w("pointerover",{type:"pointerover",target:a,pointerData:ne,raycasterData:g},!!s.onPointerOver),_=!0,m=!1}}else if(!m){let ne=Nu(X);w("pointerout",{type:"pointerout",target:a,pointerData:ne,raycasterData:g},!!s.onPointerOut),w("pointerleave",{type:"pointerleave",target:a,pointerData:ne,raycasterData:g},!!s.onPointerLeave),m=!0,_=!1}}function b(X){Object.keys(s.$$.callbacks).includes("pointermove")&&l(X.type,{event:X,target:a,unprojected:i[o].pointer.unprojected}),s.onPointerMove&&B(new CustomEvent(X.type,{detail:{event:X,target:a,unprojected:i[o].pointer.unprojected}}))}function x(X){O()&&(X.type==="click"&&S(X,!!s.onClick),X.type==="pointerup"&&S(X,!!s.onPointerUp),X.type==="pointerdown"&&S(X,!!s.onPointerDown))}function S(X,ne){let ue=Nu(X);w(X.type,{type:X.type,target:a,pointerData:ue,raycasterData:g},ne)}function w(X,ne,ue){if(l(X,ne),ue){let he=new CustomEvent(X,{detail:ne});switch(X){case"click":s.onClick&&R(he);break;case"pointerup":s.onPointerUp&&q(he);break;case"pointerdown":s.onPointerDown&&H(he);break;case"pointerover":s.onPointerOver&&j(he);break;case"pointerout":s.onPointerOut&&W(he);break;case"pointerenter":s.onPointerOut&&V(he);break;case"pointerleave":s.onPointerLeave&&F(he);break}}}function O(){return i[o].allIntersections&&i[o].allIntersections.length>0&&i[o].allIntersections[0].object===a?(g={intersections:c.intersectObject(a),ray:c.ray,camera:c.camera,unprojectedPoint:new L(i[o].pointer.pos.x,i[o].pointer.pos.y,0).unproject(c.camera)},!0):!1}function R(X){console.info("SVELTHREE > SvelthreeInteraction :internal onClickAction!"),typeof s.onClick=="function"?s.onClick(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onClick' object is not a valid function!")}function q(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerUpAction!"),typeof s.onPointerUp=="function"?s.onPointerUp(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerUp' object is not a function!")}function H(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerDownAction!"),typeof s.onPointerDown=="function"?s.onPointerDown(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerDown' object is not a function!")}function j(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerOverAction!",X),typeof s.onPointerOver=="function"?s.onPointerOver(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerOver' object is not a function!")}function W(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerOutAction!",X),typeof s.onPointerOut=="function"?s.onPointerOut(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerOut' object is not a function!")}function V(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerEnterAction!",X),typeof s.onPointerEnter=="function"?s.onPointerEnter(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerEnter' object is not a function!")}function F(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerLeaveAction!",X),typeof s.onPointerLeave=="function"?s.onPointerLeave(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerLeave' object is not a function!")}function B(X){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerMoveAction!"),typeof s.onPointerMove=="function"?s.onPointerMove(X):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerMove' object is not a function!")}return e.$$set=X=>{"interactionEnabled"in X&&n(1,r=X.interactionEnabled),"parent"in X&&n(2,s=X.parent),"sti"in X&&n(3,o=X.sti),"obj"in X&&n(0,a=X.obj),"dispatch"in X&&n(4,l=X.dispatch)},e.$$.update=()=>{e.$$.dirty&264&&i[o].raycaster&&n(5,c=i[o].raycaster),e.$$.dirty&264&&i[o].canvas.dom&&n(6,u=i[o].canvas.dom),e.$$.dirty&67&&u&&(r&&a&&!a.userData.interact?(d(),n(0,a.userData.interact=!0,a)):!r&&a&&a.userData.interact&&(f(),n(0,a.userData.interact=!1,a))),e.$$.dirty&427&&(r?a&&c&&i[o].pointer.event!==h&&(n(7,h=i[o].pointer.event),v(h),y(h)):a&&a.userData.interact&&(n(0,a.userData.interact=!1,a),f()))},[a,r,s,o,l,c,u,h,i]}class TS extends zt{constructor(t){super(),Ht(this,t,SS,null,Ft,{interactionEnabled:1,parent:2,sti:3,obj:0,dispatch:4})}}const AS=e=>({scene:e[0]&4,parent:e[0]&2}),Zp=e=>({scene:e[2],parent:e[1]});function RS(e){let t,n,i,r,s,o;const a=e[49].default,c=kh(a,e,e[48],Zp);function l(h){e[51](h)}let u={animationEnabled:e[8],animation:e[4],aniauto:e[3],obj:e[0],scene:e[2]};return e[7]!==void 0&&(u.currentSceneActive=e[7]),n=new yf({props:u}),e[50](n),An.push(()=>Hh(n,"currentSceneActive",l)),s=new TS({props:{sti:e[5],dispatch:e[11],obj:e[0],parent:e[10],interactionEnabled:e[9]}}),{c(){c&&c.c(),t=Ye(),Ze(n.$$.fragment),r=Ye(),Ze(s.$$.fragment)},m(h,d){c&&c.m(h,d),Je(h,t,d),We(n,h,d),Je(h,r,d),We(s,h,d),o=!0},p(h,d){c&&c.p&&(!o||d[0]&6|d[1]&131072)&&Bh(c,a,h,h[48],d,AS,Zp);const f={};d[0]&256&&(f.animationEnabled=h[8]),d[0]&16&&(f.animation=h[4]),d[0]&8&&(f.aniauto=h[3]),d[0]&1&&(f.obj=h[0]),d[0]&4&&(f.scene=h[2]),!i&&d[0]&128&&(i=!0,f.currentSceneActive=h[7],Uh(()=>i=!1)),n.$set(f);const p={};d[0]&32&&(p.sti=h[5]),d[0]&1&&(p.obj=h[0]),d[0]&512&&(p.interactionEnabled=h[9]),s.$set(p)},i(h){o||(Se(c,h),Se(n.$$.fragment,h),Se(s.$$.fragment,h),o=!0)},o(h){Pe(c,h),Pe(n.$$.fragment,h),Pe(s.$$.fragment,h),o=!1},d(h){c&&c.d(h),h&&Ve(t),e[50](null),je(n,h),h&&Ve(r),je(s,h)}}}function LS(){console.error("SVELTHREE > Mesh : updating Matrix is not yet implemented!")}function PS(e,t,n){let i;lt(e,et,te=>n(47,i=te));let{$$slots:r={},$$scope:s}=t,o,a=Il(),c=my(),{name:l=void 0}=t,{parent:u=void 0}=t,{parentForSlot:h=void 0}=t,{parentForUs:d=void 0}=t,{scene:f}=t,{aniauto:p=void 0}=t,{interact:y=void 0}=t,_;if(f)if(f.type==="Scene")M();else throw console.warn("SVELTHREE > Mesh : You have to provide a valid 'scene' prop of type 'Scene'!",{scene:f}),new Error("SVELTHREE Exception (see warning above)");else throw console.warn("SVELTHREE > Mesh : You have to provide a {scene} prop!",{scene:f}),new Error("SVELTHREE Exception (see warning above)");let m,g=!1,{mesh:v=void 0}=t,b,x,S,{material:w=void 0}=t,{geometry:O=void 0}=t;v?(g=!1,R()):g=!0;function R(){v.type==="Mesh"&&(v.geometry&&n(13,O=v.geometry),v.material?n(12,w=v.material):console.warn("SVELTHREE > Mesh : Mesh provided, but has no material!",{mesh:v}),console.info("SVELTHREE > Mesh : Saved geometry:",{geometry:O}),console.info("SVELTHREE > Mesh : Saved material:",{material:w}),n(0,v.userData.initScale=v.scale.x,v),n(44,b=new Pl(v)),n(45,x=new gr(v)),w&&n(46,S=new gr(w)))}g||(u?u!==v&&(d=u,h=v):h=v);function q(){g&&(v&&!u?n(1,h=v):v?u&&u!==v&&(n(14,d=u),n(1,h=v)):console.error("SVELTHREE > Mesh : 'parent' check : no mesh provided yet!"))}let{userData:H=void 0}=t;function j(){v&&n(0,v.userData=Object.assign(Object.assign({},v.userData),H),v)}let{animation:W=void 0}=t,{mat:V=void 0}=t,{pos:F=void 0}=t,{rot:B=void 0}=t,{scale:X=void 0}=t,{castShadow:ne=void 0}=t,{receiveShadow:ue=void 0}=t,{matrix:he=void 0}=t,{props:ce=void 0}=t,Me=!1,_e=!1,Ie,{fnOnMount:T=void 0}=t;yn(T?()=>T(a):()=>(u?console.info("SVELTHREE > onMount : Mesh, parent: ",u):console.info("SVELTHREE > onMount : Mesh"),()=>{console.info("SVELTHREE > onDestroy : Mesh"),z()}));function M(){if(f.userData.sti>=0)n(5,_=f.userData.sti);else throw console.warn("SVELTHREE > Mesh : Failed to set 'sti' from 'scene.userData.sti', 'sti' has to be >= 0!",{scene:f,userData:f.userData,sti:f.userData.sti}),new Error("SVELTHREE Exception (see warning above)")}function P(){d?v.parent!==d&&(d.add(v),console.info("SVELTHREE > Mesh : "+O.type+" was added to parent!",{mesh:v,parent:d,scene:f,total:f.children.length})):v.parent!==f&&(f.add(v),console.info("SVELTHREE > Mesh : "+O.type+" was added to scene!",{mesh:v,scene:f,total:f.children.length}))}function C(){v&&(n(0,v.material=w,v),console.info("SVELTHREE > Mesh : Material updated!"),S&&S.tryPropsUpdate(V))}function U(){v&&(n(0,v.geometry=O,v),console.info("SVELTHREE > Mesh : Geometry updated!"))}function G(){v&&n(0,v.castShadow=ne,v)}function I(){v&&n(0,v.receiveShadow=ue,v)}function z(){v.parent.remove(v)}function Y(){return v}function Q(){return l}function J(){return f}function ie(){return o.getAnimation()}function E(){o.startAni()}let{onClick:A=void 0}=t,{onPointerUp:Z=void 0}=t,{onPointerDown:K=void 0}=t,{onPointerOver:D=void 0}=t,{onPointerOut:ee=void 0}=t,{onPointerEnter:N=void 0}=t,{onPointerLeave:se=void 0}=t,{onPointerMove:ae=void 0}=t;function fe(te){An[te?"unshift":"push"](()=>{o=te,n(6,o)})}function Ee(te){Me=te,n(7,Me),n(47,i),n(5,_),n(2,f)}return e.$$set=te=>{"name"in te&&n(15,l=te.name),"parent"in te&&n(16,u=te.parent),"parentForSlot"in te&&n(1,h=te.parentForSlot),"parentForUs"in te&&n(14,d=te.parentForUs),"scene"in te&&n(2,f=te.scene),"aniauto"in te&&n(3,p=te.aniauto),"interact"in te&&n(17,y=te.interact),"mesh"in te&&n(0,v=te.mesh),"material"in te&&n(12,w=te.material),"geometry"in te&&n(13,O=te.geometry),"userData"in te&&n(18,H=te.userData),"animation"in te&&n(4,W=te.animation),"mat"in te&&n(19,V=te.mat),"pos"in te&&n(20,F=te.pos),"rot"in te&&n(21,B=te.rot),"scale"in te&&n(22,X=te.scale),"castShadow"in te&&n(23,ne=te.castShadow),"receiveShadow"in te&&n(24,ue=te.receiveShadow),"matrix"in te&&n(25,he=te.matrix),"props"in te&&n(26,ce=te.props),"fnOnMount"in te&&n(27,T=te.fnOnMount),"onClick"in te&&n(34,A=te.onClick),"onPointerUp"in te&&n(35,Z=te.onPointerUp),"onPointerDown"in te&&n(36,K=te.onPointerDown),"onPointerOver"in te&&n(37,D=te.onPointerOver),"onPointerOut"in te&&n(38,ee=te.onPointerOut),"onPointerEnter"in te&&n(39,N=te.onPointerEnter),"onPointerLeave"in te&&n(40,se=te.onPointerLeave),"onPointerMove"in te&&n(41,ae=te.onPointerMove),"$$scope"in te&&n(48,s=te.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&32|e.$$.dirty[1]&65536&&n(42,m=i[_].canvas.interactive),e.$$.dirty[0]&45057|e.$$.dirty[1]&4096&&O&&w&&!v&&g&&(n(0,v=new nt(O,w)),n(0,v.name=l,v),n(0,v.userData.initScale=v.scale.x,v),console.info("SVELTHREE > Mesh : "+O.type+" created!",{mesh:v}),console.info("SVELTHREE > Mesh : saved 'geometry' (generated):",O),console.info("SVELTHREE > Mesh : saved 'material' (generated):",w),n(44,b=new Pl(v)),n(45,x=new gr(v))),e.$$.dirty[0]&37748737|e.$$.dirty[1]&8192&&(he||X&&Lo(X)&&(b.tryScaleUpdate(X),n(0,v.userData.initScale=v.scale.x,v))),e.$$.dirty[0]&1&&v&&q(),e.$$.dirty[0]&8192|e.$$.dirty[1]&4096&&O&&g&&(console.info("SVELTHREE > Mesh : Geometry provided!"),U()),e.$$.dirty[0]&4096|e.$$.dirty[1]&4096&&w&&g&&(console.info("SVELTHREE > Mesh : Material provided!"),n(46,S=new gr(w)),C()),e.$$.dirty[0]&8193|e.$$.dirty[1]&4096&&O&&!g&&O!==v.geometry&&U(),e.$$.dirty[0]&4097|e.$$.dirty[1]&4096&&w&&!g&&w!==v.material&&C(),e.$$.dirty[0]&1&&(v?P():console.error("SVELTHREE > Mesh : mesh was not created!")),e.$$.dirty[0]&262144&&H&&j(),e.$$.dirty[0]&34603008|e.$$.dirty[1]&8192&&(he||F&&Lo(F)&&b.tryPosUpdate(F)),e.$$.dirty[0]&35651584|e.$$.dirty[1]&8192&&(he||B&&Lo(B)&&b.tryRotUpdate(B)),e.$$.dirty[0]&33554432&&Qg(he)&&(console.warn("SVELTHREE > Mesh : Matrix provided, will ignore 'pos', 'rot' or 'scale' props if any provided!"),LS()),e.$$.dirty[0]&8388608&&ne&&G(),e.$$.dirty[0]&16777216&&ue&&I(),e.$$.dirty[0]&67108864|e.$$.dirty[1]&16384&&ce&&Object.keys(ce).length>0&&x&&x.tryPropsUpdate(ce),e.$$.dirty[0]&524288|e.$$.dirty[1]&32768&&V&&Object.keys(V).length>0&&S&&(console.info("SVELTHREE > Mesh : matPropIterator is true: ",V),S.tryPropsUpdate(V)),e.$$.dirty[0]&36|e.$$.dirty[1]&65536&&n(7,Me=i[_].scenes[f.userData.indexInScenes].isActive),e.$$.dirty[0]&16&&W&&n(8,_e=!0),e.$$.dirty[0]&131072|e.$$.dirty[1]&2048&&(m&&y?n(9,Ie=!0):n(9,Ie=!1))},[v,h,f,p,W,_,o,Me,_e,Ie,a,c,w,O,d,l,u,y,H,V,F,B,X,ne,ue,he,ce,T,z,Y,Q,J,ie,E,A,Z,K,D,ee,N,se,ae,m,g,b,x,S,i,s,r,fe,Ee]}class Rr extends zt{constructor(t){super(),Ht(this,t,PS,RS,Ft,{name:15,parent:16,parentForSlot:1,parentForUs:14,scene:2,aniauto:3,interact:17,mesh:0,material:12,geometry:13,userData:18,animation:4,mat:19,pos:20,rot:21,scale:22,castShadow:23,receiveShadow:24,matrix:25,props:26,fnOnMount:27,removeMeshFromParent:28,getMesh:29,getName:30,getScene:31,getAnimation:32,startAni:33,onClick:34,onPointerUp:35,onPointerDown:36,onPointerOver:37,onPointerOut:38,onPointerEnter:39,onPointerLeave:40,onPointerMove:41},[-1,-1])}get name(){return this.$$.ctx[15]}set name(t){this.$set({name:t}),Xe()}get parent(){return this.$$.ctx[16]}set parent(t){this.$set({parent:t}),Xe()}get parentForSlot(){return this.$$.ctx[1]}set parentForSlot(t){this.$set({parentForSlot:t}),Xe()}get parentForUs(){return this.$$.ctx[14]}set parentForUs(t){this.$set({parentForUs:t}),Xe()}get scene(){return this.$$.ctx[2]}set scene(t){this.$set({scene:t}),Xe()}get aniauto(){return this.$$.ctx[3]}set aniauto(t){this.$set({aniauto:t}),Xe()}get interact(){return this.$$.ctx[17]}set interact(t){this.$set({interact:t}),Xe()}get mesh(){return this.$$.ctx[0]}set mesh(t){this.$set({mesh:t}),Xe()}get material(){return this.$$.ctx[12]}set material(t){this.$set({material:t}),Xe()}get geometry(){return this.$$.ctx[13]}set geometry(t){this.$set({geometry:t}),Xe()}get userData(){return this.$$.ctx[18]}set userData(t){this.$set({userData:t}),Xe()}get animation(){return this.$$.ctx[4]}set animation(t){this.$set({animation:t}),Xe()}get mat(){return this.$$.ctx[19]}set mat(t){this.$set({mat:t}),Xe()}get pos(){return this.$$.ctx[20]}set pos(t){this.$set({pos:t}),Xe()}get rot(){return this.$$.ctx[21]}set rot(t){this.$set({rot:t}),Xe()}get scale(){return this.$$.ctx[22]}set scale(t){this.$set({scale:t}),Xe()}get castShadow(){return this.$$.ctx[23]}set castShadow(t){this.$set({castShadow:t}),Xe()}get receiveShadow(){return this.$$.ctx[24]}set receiveShadow(t){this.$set({receiveShadow:t}),Xe()}get matrix(){return this.$$.ctx[25]}set matrix(t){this.$set({matrix:t}),Xe()}get props(){return this.$$.ctx[26]}set props(t){this.$set({props:t}),Xe()}get fnOnMount(){return this.$$.ctx[27]}set fnOnMount(t){this.$set({fnOnMount:t}),Xe()}get removeMeshFromParent(){return this.$$.ctx[28]}get getMesh(){return this.$$.ctx[29]}get getName(){return this.$$.ctx[30]}get getScene(){return this.$$.ctx[31]}get getAnimation(){return this.$$.ctx[32]}get startAni(){return this.$$.ctx[33]}get onClick(){return this.$$.ctx[34]}set onClick(t){this.$set({onClick:t}),Xe()}get onPointerUp(){return this.$$.ctx[35]}set onPointerUp(t){this.$set({onPointerUp:t}),Xe()}get onPointerDown(){return this.$$.ctx[36]}set onPointerDown(t){this.$set({onPointerDown:t}),Xe()}get onPointerOver(){return this.$$.ctx[37]}set onPointerOver(t){this.$set({onPointerOver:t}),Xe()}get onPointerOut(){return this.$$.ctx[38]}set onPointerOut(t){this.$set({onPointerOut:t}),Xe()}get onPointerEnter(){return this.$$.ctx[39]}set onPointerEnter(t){this.$set({onPointerEnter:t}),Xe()}get onPointerLeave(){return this.$$.ctx[40]}set onPointerLeave(t){this.$set({onPointerLeave:t}),Xe()}get onPointerMove(){return this.$$.ctx[41]}set onPointerMove(t){this.$set({onPointerMove:t}),Xe()}}const CS=e=>({sti:e&16}),Jp=e=>({sti:e[4]});function DS(e){let t,n;const i=e[15].default,r=kh(i,e,e[14],Jp);return{c(){t=St("canvas"),r&&r.c(),$e(t,"width",e[0]),$e(t,"height",e[1]),$e(t,"style",e[2]),$e(t,"class",e[3])},m(s,o){Je(s,t,o),r&&r.m(t,null),e[16](t),n=!0},p(s,[o]){r&&r.p&&(!n||o&16400)&&Bh(r,i,s,s[14],o,CS,Jp),(!n||o&1)&&$e(t,"width",s[0]),(!n||o&2)&&$e(t,"height",s[1]),(!n||o&4)&&$e(t,"style",s[2]),(!n||o&8)&&$e(t,"class",s[3])},i(s){n||(Se(r,s),n=!0)},o(s){Pe(r,s),n=!1},d(s){s&&Ve(t),r&&r.d(s),e[16](null)}}}function IS(e,t,n){let i;lt(e,et,R=>n(13,i=R));let{$$slots:r={},$$scope:s}=t,{w:o}=t,{h:a}=t,{style:c=void 0}=t,{class:l=void 0}=t;const u={id:void 0,canvas:{dom:void 0,dim:{w:void 0,h:void 0},interactive:!1},scenes:[],cameras:[],activeCamera:void 0,renderer:void 0,raycaster:void 0,allIntersections:void 0,pointer:{pos:new oe(-1,-1),event:void 0,isOverCanvas:!1,unprojected:new L},orbitcontrols:void 0};u.canvas.dim.w=o,u.canvas.dim.h=a;let h;ve(et,i=[...i,u],i),h=i.length-1;let d;function f(){i[h].canvas.dom===void 0&&ve(et,i[h].canvas.dom=d,i)}let{interactive:p=!1}=t,y=!1,_,m;function g(){window.addEventListener("pointermove",v,!1)}function v(R){let q=d.getBoundingClientRect();ve(et,i[h].pointer.pos.x=(R.clientX-q.left)/(q.right-q.left)*2-1,i),ve(et,i[h].pointer.pos.y=-((R.clientY-q.top)/(q.bottom-q.top))*2+1,i),R.clientX>q.left&&R.clientX<q.right&&R.clientY>q.top&&R.clientY<q.bottom?ve(et,i[h].pointer.isOverCanvas=!0,i):ve(et,i[h].pointer.isOverCanvas=!1,i);let H=new L(i[h].pointer.pos.x,i[h].pointer.pos.y,.5),j=new L;H.unproject(i[h].activeCamera),H.sub(i[h].activeCamera.position).normalize();let W=-i[h].activeCamera.position.z/H.z;j.copy(i[h].activeCamera.position).add(H.multiplyScalar(W)),i[h].pointer.unprojected.copy(j),ve(et,i[h].pointer.event=R,i)}function b(){window.removeEventListener("pointermove",v)}yn(()=>(n(12,m=!0),console.info("SVELTHREE > onMount : Canvas, $svelthreeStores[sti]: ",i[h]),()=>{console.info("SVELTHREE > onDestroy : Canvas"),b()}));function x(){return i[h].canvas.dom}function S(){return{w:i[h].canvas.dom.width,h:i[h].canvas.dom.height}}function w(R,q){ve(et,i[h].canvas.dim={w:R,h:q},i)}function O(R){An[R?"unshift":"push"](()=>{d=R,n(5,d)})}return e.$$set=R=>{"w"in R&&n(0,o=R.w),"h"in R&&n(1,a=R.h),"style"in R&&n(2,c=R.style),"class"in R&&n(3,l=R.class),"interactive"in R&&n(6,p=R.interactive),"$$scope"in R&&n(14,s=R.$$scope)},e.$$.update=()=>{e.$$.dirty&32&&d&&f(),e.$$.dirty&4160&&m&&n(10,y=p),e.$$.dirty&11312&&y&&!_&&d&&(n(11,_=new Vl),ve(et,i[h].raycaster=_,i),ve(et,i[h].canvas.interactive=!0,i),g(),console.info("SVELTHREE > Canvas : after Raycaster creation, $svelthreeStores[sti]: ",i[h])),e.$$.dirty&11280&&!y&&_&&(ve(et,i[h].canvas.interactive=!1,i),ve(et,i[h].raycaster=void 0,i),n(11,_=null),b(),console.info("SVELTHREE > Canvas : after Raycaster remove, $svelthreeStores[sti]: ",i[h]))},[o,a,c,l,h,d,p,x,S,w,y,_,m,i,s,r,O]}class OS extends zt{constructor(t){super(),Ht(this,t,IS,DS,Ft,{w:0,h:1,style:2,class:3,interactive:6,getCanvas:7,getDimensions:8,doResize:9})}get getCanvas(){return this.$$.ctx[7]}get getDimensions(){return this.$$.ctx[8]}get doResize(){return this.$$.ctx[9]}}class FS{constructor(t){this.light=t}tryIntensityUpdate(t){console.info("SVELTHREE > LightUtils > tryIntensityUpdate ",t),this.light&&(this.light.intensity=t)}tryColorUpdate(t){console.info("color",t),this.light&&(Kg(t)?Lo(t)&&(this.light.color=new de(t[0],t[1],t[2])):this.light.color=new de(t))}tryShadowMapSizeUpdate(t){console.info("SVELTHREE > LightUtils > tryShadowMapSizeUpdate",t),this.light&&(this.light.shadow.mapSize.width=t,this.light.shadow.mapSize.height=t)}tryShadowBiasUpdate(t){console.info("SVELTHREE > LightUtils > tryShadowBiasUpdate",t),this.light&&(this.light.shadow.bias=t,this.light.shadow.bias=t)}tryCastShadowUpdate(t){console.info("SVELTHREE > LightUtils > tryCastShadowUpdate",t),this.light&&(this.light.castShadow=t)}}function NS(e){let t,n,i;function r(o){e[26](o)}let s={animationEnabled:e[6],animation:e[1],aniauto:e[2],obj:e[3],scene:e[0]};return e[5]!==void 0&&(s.currentSceneActive=e[5]),t=new yf({props:s}),e[25](t),An.push(()=>Hh(t,"currentSceneActive",r)),{c(){Ze(t.$$.fragment)},m(o,a){We(t,o,a),i=!0},p(o,[a]){const c={};a&64&&(c.animationEnabled=o[6]),a&2&&(c.animation=o[1]),a&4&&(c.aniauto=o[2]),a&8&&(c.obj=o[3]),a&1&&(c.scene=o[0]),!n&&a&32&&(n=!0,c.currentSceneActive=o[5],Uh(()=>n=!1)),t.$set(c)},i(o){i||(Se(t.$$.fragment,o),i=!0)},o(o){Pe(t.$$.fragment,o),i=!1},d(o){e[25](null),je(t,o)}}}function kS(e,t,n){let i;lt(e,et,B=>n(24,i=B));let r,{scene:s}=t,o;if(s)if(s.type==="Scene")a();else throw console.warn("SVELTHREE > Light : You have to provide a valid 'scene' prop of type 'Scene'!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");else throw console.warn("SVELTHREE > Light : You have to provide a {scene} prop!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");function a(){if(s.userData.sti>=0)n(20,o=s.userData.sti);else throw console.warn("SVELTHREE > Light : Failed to set 'sti' from 'scene.userData.sti', 'sti' has to be >= 0!",{scene:s,userData:s.userData,sti:s.userData.sti}),new Error("SVELTHREE Exception (see warning above)")}let{animation:c=void 0}=t,{aniauto:l=void 0}=t,{parent:u=void 0}=t,{parentForUs:h=void 0}=t,{light:d=void 0}=t,f,p,y;if(d)p=new Pl(d),y=new gr(d),f=new FS(d);else throw console.warn("SVELTHREE > Light : light was not provided by parent component!",{light:d}),new Error("SVELTHREE Exception (see warning above)");u&&u!==d&&(h=u),_();function _(){h?d.parent!==h&&(h.add(d),console.info("SVELTHREE > Light : "+d.type+" was added to parent!",{light:d,parent:h,scene:s,total:s.children.length})):d.parent!==s&&(s.add(d),console.info("SVELTHREE > Light : "+d.type+" was added to scene!",{light:d,scene:s,total:s.children.length}))}let{pos:m=[0,1,0]}=t,{color:g=void 0}=t,{intensity:v=0}=t,{shadowMapSize:b=void 0}=t,{shadowBias:x=void 0}=t,{castShadow:S=void 0}=t,{props:w=void 0}=t,O=!1,R=!1,{fnOnMount:q=void 0}=t;yn(q?()=>q(self):()=>(console.info("SVELTHREE > onMount : Light"),()=>{console.info("SVELTHREE > onDestroy : Light"),H()}));function H(){d.parent.remove(d)}function j(){return r.getAnimation()}function W(){r.startAni()}function V(B){An[B?"unshift":"push"](()=>{r=B,n(4,r)})}function F(B){O=B,n(5,O),n(24,i),n(20,o),n(0,s)}return e.$$set=B=>{"scene"in B&&n(0,s=B.scene),"animation"in B&&n(1,c=B.animation),"aniauto"in B&&n(2,l=B.aniauto),"parent"in B&&n(8,u=B.parent),"parentForUs"in B&&n(7,h=B.parentForUs),"light"in B&&n(3,d=B.light),"pos"in B&&n(9,m=B.pos),"color"in B&&n(10,g=B.color),"intensity"in B&&n(11,v=B.intensity),"shadowMapSize"in B&&n(12,b=B.shadowMapSize),"shadowBias"in B&&n(13,x=B.shadowBias),"castShadow"in B&&n(14,S=B.castShadow),"props"in B&&n(15,w=B.props),"fnOnMount"in B&&n(16,q=B.fnOnMount)},e.$$.update=()=>{e.$$.dirty&4194816&&m&&m.length>0&&p.tryPosUpdate(m),e.$$.dirty&2099200&&v&&f.tryIntensityUpdate(v),e.$$.dirty&2098176&&g&&f.tryColorUpdate(g),e.$$.dirty&2101248&&b&&f.tryShadowMapSizeUpdate(b),e.$$.dirty&2105344&&x&&f.tryShadowBiasUpdate(x),e.$$.dirty&2113536&&S&&f.tryCastShadowUpdate(S),e.$$.dirty&8421376&&w&&Object.keys(w).length>0&&y.tryPropsUpdate(w),e.$$.dirty&17825793&&n(5,O=i[o].scenes[s.userData.indexInScenes].isActive),e.$$.dirty&2&&c&&n(6,R=!0)},[s,c,l,d,r,O,R,h,u,m,g,v,b,x,S,w,q,H,j,W,o,f,p,y,i,V,F]}class _f extends zt{constructor(t){super(),Ht(this,t,kS,NS,Ft,{scene:0,animation:1,aniauto:2,parent:8,parentForUs:7,light:3,pos:9,color:10,intensity:11,shadowMapSize:12,shadowBias:13,castShadow:14,props:15,fnOnMount:16,removeLightFromParent:17,getAnimation:18,startAni:19})}get removeLightFromParent(){return this.$$.ctx[17]}get getAnimation(){return this.$$.ctx[18]}get startAni(){return this.$$.ctx[19]}}function BS(e){let t,n;return t=new _f({props:{scene:e[7],light:e[8],props:e[0],pos:e[1],color:e[2],intensity:e[3],shadowMapSize:e[4],shadowBias:e[5],castShadow:e[6]}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,[r]){const s={};r&128&&(s.scene=i[7]),r&1&&(s.props=i[0]),r&2&&(s.pos=i[1]),r&4&&(s.color=i[2]),r&8&&(s.intensity=i[3]),r&16&&(s.shadowMapSize=i[4]),r&32&&(s.shadowBias=i[5]),r&64&&(s.castShadow=i[6]),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function US(e,t,n){let{props:i=void 0}=t,{pos:r=void 0}=t,{color:s=void 0}=t,{intensity:o=void 0}=t,{shadowMapSize:a=void 0}=t,{shadowBias:c=void 0}=t,{castShadow:l=void 0}=t,{scene:u}=t,h=new la;function d(){return h}let{helper:f=void 0}=t,p;yn(()=>(console.info("SVELTHREE > onMount : DirectionalLight"),g(),()=>{console.info("SVELTHREE > onDestroy : DirectionalLight"),v()}));function y(){n(12,p=new Gs(h,.1,"aqua")),u.add(p),n(12,p.visible=!1,p),console.info("SVELTHREE > "+h.type+" HELPER added!",{lightHelper:p,scene:u,total:u.children.length})}let _=!1,m=0;function g(){_=!0,m=requestAnimationFrame(b)}function v(){_=!1,cancelAnimationFrame(m)}function b(){_&&(p&&p.update(),m=requestAnimationFrame(b))}function x(){return p}return e.$$set=S=>{"props"in S&&n(0,i=S.props),"pos"in S&&n(1,r=S.pos),"color"in S&&n(2,s=S.color),"intensity"in S&&n(3,o=S.intensity),"shadowMapSize"in S&&n(4,a=S.shadowMapSize),"shadowBias"in S&&n(5,c=S.shadowBias),"castShadow"in S&&n(6,l=S.castShadow),"scene"in S&&n(7,u=S.scene),"helper"in S&&n(10,f=S.helper)},e.$$.update=()=>{e.$$.dirty&5120&&!p&&h&&f&&y()},[i,r,s,o,a,c,l,u,h,d,f,x,p]}class Kp extends zt{constructor(t){super(),Ht(this,t,US,BS,Ft,{props:0,pos:1,color:2,intensity:3,shadowMapSize:4,shadowBias:5,castShadow:6,scene:7,getLight:9,helper:10,getHelper:11})}get getLight(){return this.$$.ctx[9]}get getHelper(){return this.$$.ctx[11]}}function HS(e){let t,n;return t=new _f({props:{scene:e[3],light:e[4],props:e[0],color:e[1],intensity:e[2]}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,[r]){const s={};r&8&&(s.scene=i[3]),r&1&&(s.props=i[0]),r&2&&(s.color=i[1]),r&4&&(s.intensity=i[2]),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function zS(e,t,n){let{props:i=void 0}=t,{color:r=void 0}=t,{intensity:s=void 0}=t,{scene:o}=t,a=new Ml;function c(){return a}return yn(()=>(console.info("SVELTHREE > onMount : AmbientLight"),()=>{console.info("SVELTHREE > onDestroy : AmbientLight!")})),e.$$set=l=>{"props"in l&&n(0,i=l.props),"color"in l&&n(1,r=l.color),"intensity"in l&&n(2,s=l.intensity),"scene"in l&&n(3,o=l.scene)},[i,r,s,o,a,c]}class GS extends zt{constructor(t){super(),Ht(this,t,zS,HS,Ft,{props:0,color:1,intensity:2,scene:3,getLight:5})}get getLight(){return this.$$.ctx[5]}}function VS(e){let t,n;return t=new _f({props:{scene:e[10],parent:e[1],light:e[11],props:e[0],pos:e[4],color:e[5],intensity:e[6],shadowMapSize:e[7],shadowBias:e[8],castShadow:e[9],animation:e[2],aniauto:e[3]}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,[r]){const s={};r&1024&&(s.scene=i[10]),r&2&&(s.parent=i[1]),r&2048&&(s.light=i[11]),r&1&&(s.props=i[0]),r&16&&(s.pos=i[4]),r&32&&(s.color=i[5]),r&64&&(s.intensity=i[6]),r&128&&(s.shadowMapSize=i[7]),r&256&&(s.shadowBias=i[8]),r&512&&(s.castShadow=i[9]),r&4&&(s.animation=i[2]),r&8&&(s.aniauto=i[3]),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function WS(e,t,n){let{props:i=void 0}=t,{parent:r=void 0}=t,{name:s=void 0}=t,{animation:o=void 0}=t,{aniauto:a=void 0}=t,{pos:c=void 0}=t,{color:l=void 0}=t,{intensity:u=void 0}=t,{shadowMapSize:h=void 0}=t,{shadowBias:d=void 0}=t,{castShadow:f=!1}=t,{scene:p}=t,y=new ca;y.name=s;let{helper:_=!1}=t,m;function g(){n(16,m=new zs(y,.1,"aqua")),p.add(m),n(16,m.visible=!0,m),console.info("SVELTHREE > "+y.type+" : HELPER added!",{lightHelper:m,scene:p,total:p.children.length})}yn(()=>(console.info("SVELTHREE > onMount : "+y.type),()=>{console.info("SVELTHREE > onDestroy : "+y.type)}));function v(){return y}function b(){return m}return e.$$set=x=>{"props"in x&&n(0,i=x.props),"parent"in x&&n(1,r=x.parent),"name"in x&&n(12,s=x.name),"animation"in x&&n(2,o=x.animation),"aniauto"in x&&n(3,a=x.aniauto),"pos"in x&&n(4,c=x.pos),"color"in x&&n(5,l=x.color),"intensity"in x&&n(6,u=x.intensity),"shadowMapSize"in x&&n(7,h=x.shadowMapSize),"shadowBias"in x&&n(8,d=x.shadowBias),"castShadow"in x&&n(9,f=x.castShadow),"scene"in x&&n(10,p=x.scene),"helper"in x&&n(13,_=x.helper)},e.$$.update=()=>{e.$$.dirty&75776&&!m&&y&&_&&g()},[i,r,o,a,c,l,u,h,d,f,p,y,s,_,v,b,m]}class jS extends zt{constructor(t){super(),Ht(this,t,WS,VS,Ft,{props:0,parent:1,name:12,animation:2,aniauto:3,pos:4,color:5,intensity:6,shadowMapSize:7,shadowBias:8,castShadow:9,scene:10,helper:13,getLight:14,getHelper:15})}get getLight(){return this.$$.ctx[14]}get getHelper(){return this.$$.ctx[15]}}const XS=e=>({scene:e&1}),Qp=e=>({scene:e[0]});function YS(e){let t;const n=e[7].default,i=kh(n,e,e[6],Qp);return{c(){i&&i.c()},m(r,s){i&&i.m(r,s),t=!0},p(r,[s]){i&&i.p&&(!t||s&65)&&Bh(i,n,r,r[6],s,XS,Qp)},i(r){t||(Se(i,r),t=!0)},o(r){Pe(i,r),t=!1},d(r){i&&i.d(r)}}}function qS(e,t,n){let i;lt(e,et,f=>n(8,i=f));let{$$slots:r={},$$scope:s}=t,{id:o=void 0}=t;if(!o)throw console.warn("SVELTHREE > Scene : You have to provide an 'id' prop (not empty String) for Scenes in order to assign them to a 'WebGLRenderer' component!",{id:o}),new Error("SVELTHREE Exception (see warning above)");let{props:a=void 0}=t,{sti:c}=t;if(c===void 0)throw console.warn("SVELTHREE > Scene : You have to provide a {sti} prop for the Scene!",{sti:c}),new Error("SVELTHREE Exception (see warning above)");const l=i[c];let u=new ko;u.userData.isActive=!1,u.userData.id=o,u.userData.sti=c,u.userData.animations=[],u.userData.indexInScenes=l.scenes.length,l.scenes.push({scene:u,id:o,isActive:!1}),yn(()=>{console.info("SVELTHREE > onMount : Scene",{sti:c});for(let f in a)switch(f){case"background":n(0,u[f]=new de(a[f]),u);break}return()=>{console.info("SVELTHREE > onDestroy : Scene")}});function h(){return u}function d(){return o}return e.$$set=f=>{"id"in f&&n(1,o=f.id),"props"in f&&n(2,a=f.props),"sti"in f&&n(3,c=f.sti),"$$scope"in f&&n(6,s=f.$$scope)},[u,o,a,c,h,d,s,r]}class ZS extends zt{constructor(t){super(),Ht(this,t,qS,YS,Ft,{id:1,props:2,sti:3,getScene:4,getId:5})}get getScene(){return this.$$.ctx[4]}get getId(){return this.$$.ctx[5]}}function JS(e,t,n){let i;lt(e,et,P=>n(20,i=P));let r,s,{config:o=void 0}=t,{props:a=void 0}=t,{enableShadowMap:c=!1}=t,{shadowMapType:l=ag}=t,{sceneId:u}=t,{camId:h}=t,d,f,p="",y="",_,{sti:m}=t;if(m===void 0)throw console.warn("SVELTHREE > Scene : You have to provide a {sti} prop for the WebGLRenderer component!",{sti:m}),new Error("SVELTHREE Exception (see warning above)");let g,v;yn(()=>(console.info("SVELTHREE > onMount : WebGLRenderer"),V(),()=>{console.info("SVELTHREE > onDestroy : WebGLRenderer"),F()}));function b(){console.info("SVELTHREE > WebGLRenderer : setCurrentCamActive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive}),n(14,f.userData.isActive=!0,f),ve(et,i[m].cameras[f.userData.indexInCameras].isActive=!0,i),ve(et,i[m].activeCamera=f,i),console.info("SVELTHREE > WebGLRenderer : setCurrentCamActive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive},"done!")}function x(){console.info("SVELTHREE > WebGLRenderer : setCurrentCamInactive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive}),n(14,f.userData.isActive=!1,f),ve(et,i[m].cameras[f.userData.indexInCameras].isActive=!1,i),console.info("SVELTHREE > WebGLRenderer : setCurrentCamInactive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive},"done!")}function S(P,C){console.info("SVELTHREE > WebGLRenderer : resizeRenderer!"),r&&r.setSize(P,C,!1)}function w(P,C){console.info("SVELTHREE > WebGLRenderer : updateCameraAspect!"),f&&(f.type==="PerspectiveCamera"&&n(14,f.aspect=P/C,f),f.updateProjectionMatrix())}function O(){if(console.info("SVELTHREE > WebGLRenderer : getSceneToRender!"),i[m].scenes.length>0){if(u===void 0)throw console.warn("SVELTHREE > WebGLRenderer : You have to provide the 'sceneId' prop!",{sceneId:u}),new Error("SVELTHREE Exception (see warning above)");for(let P=0;P<i[m].scenes.length;P++){let C=i[m].scenes[P];if(C.id===u)return n(15,p=u),C.scene}throw console.warn("SVELTHREE > WebGLRenderer : Scene with id '"+u+"' not found!",{scenes:i[m].scenes}),new Error("SVELTHREE Exception (see warning above)")}else throw console.warn("SVELTHREE > WebGLRenderer : getSceneToRender: No Scenes available!",{scenes:i[m].scenes}),new Error("SVELTHREE Exception (see warning above)")}function R(){if(console.info("SVELTHREE > WebGLRenderer : getCamToRender!"),i[m].cameras.length>0){if(h===void 0)throw console.warn("SVELTHREE > WebGLRenderer : You have to provide the 'camId' prop!",{camId:h}),new Error("SVELTHREE Exception (see warning above)");for(let P=0;P<i[m].cameras.length;P++){let C=i[m].cameras[P];if(C.id===h)return n(16,y=h),C.camera}throw console.warn("SVELTHREE > WebGLRenderer : Camera with id '"+h+"' not found!",{cameras:i[m].cameras}),new Error("SVELTHREE Exception (see warning above)")}else throw console.warn("SVELTHREE > WebGLRenderer : getCamToRender: No Cameras available! $svelthreeStores[sti].cameras:",{cameras:i[m].cameras}),new Error("SVELTHREE Exception (see warning above)")}function q(){d.userData.isActive===!0&&(n(13,d.userData.isActive=!1,d),ve(et,i[m].scenes[d.userData.indexInScenes].isActive=!1,i))}function H(){d.userData.isActive===!1?(n(13,d.userData.isActive=!0,d),ve(et,i[m].scenes[d.userData.indexInScenes].isActive=!0,i)):d.userData.isActive===void 0&&(console.info(d),n(13,d.userData.isActive=!0,d),ve(et,i[m].scenes[d.userData.indexInScenes].isActive=!0,i))}let j=!1,W;function V(){j=!0,W=requestAnimationFrame(_e)}function F(){j=!1,cancelAnimationFrame(W)}let B=!0,X=!1,ne;function ue(P){P&&i[m].allIntersections[0].object.userData.interact?document.body.style.cursor="pointer":i[m].orbitcontrols?document.body.style.cursor="all-scroll":document.body.style.cursor="default"}let he=!0;function ce(){i[m].pointer.isOverCanvas?(he=!1,i[m].allIntersections&&(i[m].allIntersections.length>0?ue(!0):ue(!1))):he||(he=!0,document.body.style.cursor="default")}let Me;function _e(){j&&(B&&(B=!1,console.info("SVELTHREE > WebGLRenderer > animate!",d,f,_)),X&&(ne.setFromCamera(i[m].pointer.pos,f),Me=d.children.filter(P=>P.type==="Mesh"),ve(et,i[m].allIntersections=ne.intersectObjects(Me,!0),i)),X&&ce(),i[m].orbitcontrols&&i[m].orbitcontrols.update(),r.render(d,f),W=requestAnimationFrame(_e))}function Ie(){return r}function T(){return f}function M(P={sceneId:"",camId:""}){n(0,u=P.sceneId),n(1,h=P.camId)}return e.$$set=P=>{"config"in P&&n(2,o=P.config),"props"in P&&n(3,a=P.props),"enableShadowMap"in P&&n(4,c=P.enableShadowMap),"shadowMapType"in P&&n(5,l=P.shadowMapType),"sceneId"in P&&n(0,u=P.sceneId),"camId"in P&&n(1,h=P.camId),"sti"in P&&n(6,m=P.sti)},e.$$.update=()=>{e.$$.dirty[0]&1050692&&(r||i[m].canvas.dom&&(n(11,r=new xa(Object.assign({canvas:i[m].canvas.dom},o))),n(17,_=i[m].canvas.dom),n(12,s=new gr(r)),ve(et,i[m].renderer=r,i))),e.$$.dirty[0]&2064&&r&&(c?n(11,r.shadowMap.enabled=!0,r):n(11,r.shadowMap.enabled=!1,r)),e.$$.dirty[0]&2080&&r&&r.shadowMap.enabled&&n(11,r.shadowMap.type=l,r),e.$$.dirty[0]&6152&&r&&a&&Object.keys(a).length>0&&s&&s.tryPropsUpdate(a),e.$$.dirty[0]&8193&&!d&&u&&(n(13,d=O()),H()),e.$$.dirty[0]&49152&&!f&&p&&(n(14,f=R()),b()),e.$$.dirty[0]&122883&&(u!==p&&d&&(q(),n(13,d=O()),H()),h!==y&&f&&f&&(x(),n(14,f=R()),b())),e.$$.dirty[0]&1048640&&n(18,g=i[m].canvas.dim.w),e.$$.dirty[0]&1048640&&n(19,v=i[m].canvas.dim.h),e.$$.dirty[0]&917504&&(g||v)&&_&&(console.info("SVELTHREE > WebGLRenderer : before resize renderer 1"),S(g,v),w(g,v)),e.$$.dirty[0]&1048640&&i[m].canvas.interactive&&(ne=i[m].raycaster,X=!0),e.$$.dirty[0]&1048640&&(i[m].canvas.interactive||(X=!1,ne=null))},[u,h,o,a,c,l,m,F,Ie,T,M,r,s,d,f,p,y,_,g,v,i]}class KS extends zt{constructor(t){super(),Ht(this,t,JS,null,Ft,{config:2,props:3,enableShadowMap:4,shadowMapType:5,sceneId:0,camId:1,sti:6,stopAnimating:7,getRenderer:8,getCurrentCamera:9,setRender:10},[-1,-1])}get stopAnimating(){return this.$$.ctx[7]}get getRenderer(){return this.$$.ctx[8]}get getCurrentCamera(){return this.$$.ctx[9]}get setRender(){return this.$$.ctx[10]}}function dr(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function wa(e){return e===1?e:1-Math.pow(2,-10*e)}function ey(e){return--e*e*e*e*e+1}function $p(e){return Object.prototype.toString.call(e)==="[object Date]"}function Fh(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((r,s)=>Fh(e[s],r));return r=>i.map(s=>s(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if($p(e)&&$p(t)){e=e.getTime(),t=t.getTime();const s=t-e;return o=>new Date(e+o*s)}const i=Object.keys(t),r={};return i.forEach(s=>{r[s]=Fh(e[s],t[s])}),s=>{const o={};return i.forEach(a=>{o[a]=r[a](s)}),o}}if(n==="number"){const i=t-e;return r=>e+r*i}throw new Error(`Cannot interpolate ${n} values`)}function tn(e,t={}){const n=Qi(e);let i,r=e;function s(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=i,l=!1,{delay:u=0,duration:h=400,easing:d=ny,interpolate:f=Fh}=ku(ku({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const p=oy()+u;let y;return i=ay(_=>{if(_<p)return!0;l||(y=f(e,o),typeof h=="function"&&(h=h(e,o)),l=!0),c&&(c.abort(),c=null);const m=_-p;return m>h?(n.set(e=o),!1):(n.set(e=y(d(m/h))),!0)}),i.promise}return{set:s,update:(o,a)=>s(o(r,e),a),subscribe:n.subscribe}}const Ac=tn(0,{duration:1e3,easing:wa}),Rc=tn(0,{duration:100,easing:wa}),em=tn(0,{duration:2e3,easing:wa}),tm=tn(5,{duration:2e3,easing:wa}),nm=tn(0,{duration:2e3,easing:wa}),mo=Qi([]),jn=Qi([]),Cl=Qi(""),xn=Qi([]),Lc=Qi(""),hr=Qi(""),Ma=5,qe=9,QS=Ma+.2,$S=Ma/qe*(qe+1.5)+.2,vr=Ma/qe,oi=(Ma-.8)/qe,Sn=.8/qe,Po=10;function Nh(e){const t=["varying vec3	vVertexWorldPosition;","varying vec3	vVertexNormal;","varying vec4	vFragColor;","void main(){","	vVertexNormal	= normalize(normalMatrix * normal);","	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;","	// set gl_Position","	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),n=["uniform vec3	glowColor;","uniform float	coeficient;","uniform float	power;","varying vec3	vVertexNormal;","varying vec3	vVertexWorldPosition;","varying vec4	vFragColor;","void main(){","	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;","	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;","	viewCameraToVertex	= normalize(viewCameraToVertex);","	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);","	gl_FragColor		= vec4(glowColor, intensity);","}"].join(`
`);return new en({uniforms:{coeficient:{type:"f",value:1.5},power:{type:"f",value:9},glowColor:{type:"c",value:new de(e)}},vertexShader:t,fragmentShader:n,transparent:!0,depthWrite:!1})}function im(e){let t,n;return t=new jS({props:{scene:e[0],pos:[e[11],e[12]+.1,e[13]],intensity:.25,color:e[1]?2984662:15549492,shadowMapSize:512*2,castShadow:!0}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&14336&&(s.pos=[i[11],i[12]+.1,i[13]]),r[0]&2&&(s.color=i[1]?2984662:15549492),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function eT(e){let t,n;return t=new Rr({props:{scene:e[0],geometry:e[19],material:e[3]?e[21]:e[22],mat:{color:16777215},pos:[e[11],e[12],e[13]],rot:[e[14],e[15],e[16]],scale:[Sn+oi*e[4]+.02,.52,Sn+.02],castShadow:!0,receiveShadow:!0}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&8&&(s.material=i[3]?i[21]:i[22]),r[0]&14336&&(s.pos=[i[11],i[12],i[13]]),r[0]&114688&&(s.rot=[i[14],i[15],i[16]]),r[0]&16&&(s.scale=[Sn+oi*i[4]+.02,.52,Sn+.02]),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function tT(e){let t,n;return t=new Rr({props:{scene:e[0],geometry:e[19],material:e[23],pos:[e[11],e[12],e[13]],rot:[e[14],e[15],e[16]],scale:[Sn+oi*e[4]+.02,.52,Sn+.02],castShadow:!0,receiveShadow:!0}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&14336&&(s.pos=[i[11],i[12],i[13]]),r[0]&114688&&(s.rot=[i[14],i[15],i[16]]),r[0]&16&&(s.scale=[Sn+oi*i[4]+.02,.52,Sn+.02]),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function nT(e){let t,n,i,r,s,o,a,c,l=!e[3]&&im(e);n=new Rr({props:{scene:e[0],castShadow:!0,receiveShadow:!0,name:e[2],geometry:e[19],material:e[20],pos:[e[11],e[12],e[13]],rot:[e[14],e[15],e[16]],scale:[Sn+oi*e[4],e[1]?.51:.5,Sn],mat:{color:e[1]?2984662:15549492},animation:null}});const u=[tT,eT],h=[];function d(f,p){return f[17]===f[2]?0:(p[0]&262148&&(r=!!f[18].includes(f[2])),r?1:-1)}return~(s=d(e,[-1]))&&(o=h[s]=u[s](e)),{c(){l&&l.c(),t=Ye(),Ze(n.$$.fragment),i=Ye(),o&&o.c(),a=js()},m(f,p){l&&l.m(f,p),Je(f,t,p),We(n,f,p),Je(f,i,p),~s&&h[s].m(f,p),Je(f,a,p),c=!0},p(f,p){f[3]?l&&(Wi(),Pe(l,1,1,()=>{l=null}),ji()):l?(l.p(f,p),p[0]&8&&Se(l,1)):(l=im(f),l.c(),Se(l,1),l.m(t.parentNode,t));const y={};p[0]&1&&(y.scene=f[0]),p[0]&4&&(y.name=f[2]),p[0]&14336&&(y.pos=[f[11],f[12],f[13]]),p[0]&114688&&(y.rot=[f[14],f[15],f[16]]),p[0]&18&&(y.scale=[Sn+oi*f[4],f[1]?.51:.5,Sn]),p[0]&2&&(y.mat={color:f[1]?2984662:15549492}),n.$set(y);let _=s;s=d(f,p),s===_?~s&&h[s].p(f,p):(o&&(Wi(),Pe(h[_],1,1,()=>{h[_]=null}),ji()),~s?(o=h[s],o?o.p(f,p):(o=h[s]=u[s](f),o.c()),Se(o,1),o.m(a.parentNode,a)):o=null)},i(f){c||(Se(l),Se(n.$$.fragment,f),Se(o),c=!0)},o(f){Pe(l),Pe(n.$$.fragment,f),Pe(o),c=!1},d(f){l&&l.d(f),f&&Ve(t),je(n,f),f&&Ve(i),~s&&h[s].d(f),f&&Ve(a)}}}function iT(e,t,n){let i,r=kt,s=()=>(r(),r=qn(T,I=>n(11,i=I)),T),o,a=kt,c=()=>(a(),a=qn(M,I=>n(12,o=I)),M),l,u=kt,h=()=>(u(),u=qn(P,I=>n(13,l=I)),P),d,f=kt,p=()=>(f(),f=qn(C,I=>n(14,d=I)),C),y,_=kt,m=()=>(_(),_=qn(U,I=>n(15,y=I)),U),g,v=kt,b=()=>(v(),v=qn(G,I=>n(16,g=I)),G),x,S;lt(e,Lc,I=>n(17,x=I)),lt(e,xn,I=>n(18,S=I)),e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>a()),e.$$.on_destroy.push(()=>u()),e.$$.on_destroy.push(()=>f()),e.$$.on_destroy.push(()=>_()),e.$$.on_destroy.push(()=>v());let{scene:w}=t,{position:O=[0,0]}=t,{vertical:R=!0}=t,{kaist:q}=t,{postech:H}=t,{id:j}=t,{place:W}=t,{length:V=2}=t;function F(I,z,Y=.25){return z<0||z>qe?[(z-qe/2+1)*vr,Y,(I-Po/2+.5)*(Ma/Po)]:[(z-qe/2+(R&&V/2))*vr,Y,(I-qe/2+(!R&&V/2))*vr]}let B=F(O[0],O[1],4),X=[0,R?0:Math.PI/2,0],ne=null,ue=R,he=new xr(1,1,1);const ce=new Ln({opacity:W?0:1,transparent:W}),Me=W?new Ln:null,_e=Nh(16777215),Ie=Nh(15590279),T=tn(B[0],{duration:800,easing:dr}),M=tn(B[1],{duration:3e3,easing:ey}),P=tn(B[2],{duration:800,easing:dr}),C=tn(0,{duration:1500,easing:dr}),U=tn(0,{duration:1500,easing:dr}),G=tn(0,{duration:1500,easing:dr});return b(),m(),p(),h(),c(),s(),e.$$set=I=>{"scene"in I&&n(0,w=I.scene),"position"in I&&n(24,O=I.position),"vertical"in I&&n(25,R=I.vertical),"kaist"in I&&n(1,q=I.kaist),"postech"in I&&n(26,H=I.postech),"id"in I&&n(2,j=I.id),"place"in I&&n(3,W=I.place),"length"in I&&n(4,V=I.length)},e.$$.update=()=>{e.$$.dirty[0]&553648128&&O!=ne&&(ne&&n(27,B=F((ne[0]*2+O[0])/3,(ne[1]*2+O[1])/3,4)),setTimeout(()=>{n(27,B=F(O[0],O[1],4)),n(29,ne=O),setTimeout(()=>{n(27,B=F(O[0],O[1]))},200)},100)),e.$$.dirty[0]&1107296256&&R!==ue&&(n(28,X=[0,ue?0:Math.PI/2,0]),setTimeout(()=>{n(28,X=[0,R?0:Math.PI/2,0]),n(30,ue=R)},100)),e.$$.dirty[0]&134217728&&(ve(T,i=B[0],i),ve(M,o=B[1],o),ve(P,l=B[2],l)),e.$$.dirty[0]&268435456&&(ve(C,d=X[0],d),ve(U,y=X[1],y),ve(G,g=X[2],g))},[w,q,j,W,V,T,M,P,C,U,G,i,o,l,d,y,g,x,S,he,ce,Me,_e,Ie,O,R,H,B,X,ne,ue]}class Dl extends zt{constructor(t){super(),Ht(this,t,iT,nT,Ft,{scene:0,position:24,vertical:25,kaist:1,postech:26,id:2,place:3,length:4,_pos1:5,_pos2:6,_pos3:7,_rot1:8,_rot2:9,_rot3:10},[-1,-1])}get _pos1(){return this.$$.ctx[5]}get _pos2(){return this.$$.ctx[6]}get _pos3(){return this.$$.ctx[7]}get _rot1(){return this.$$.ctx[8]}get _rot2(){return this.$$.ctx[9]}get _rot3(){return this.$$.ctx[10]}}function rm(e,t,n){const i=e.slice();return i[25]=t[n],i[27]=n,i}function sm(e,t,n){const i=e.slice();return i[25]=t[n],i[29]=n,i}function om(e,t,n){const i=e.slice();return i[30]=t[n],i[27]=n,i}function am(e,t,n){const i=e.slice();return i[32]=t[n],i[29]=n,i}function cm(e){let t,n;return t=new Rr({props:{scene:e[0],geometry:e[32],material:e[8][e[27]][e[29]],mat:{color:e[9].includes(`b_${e[27]}_${e[29]}`)?8947848:(e[1],14540253)},pos:[(e[27]-qe/2+.5)*vr,.1,(e[29]-qe/2+.5)*vr],rot:[0,0,0],scale:[oi,.2,oi],receiveShadow:!0,name:`b_${e[27]}_${e[29]}`}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&128&&(s.geometry=i[32]),r[0]&256&&(s.material=i[8][i[27]][i[29]]),r[0]&514&&(s.mat={color:i[9].includes(`b_${i[27]}_${i[29]}`)?8947848:(i[1],14540253)}),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function lm(e){let t,n,i,r=e[30],s=[];for(let a=0;a<r.length;a+=1)s[a]=cm(am(e,r,a));const o=a=>Pe(s[a],1,1,()=>{s[a]=null});return{c(){t=pr(`}\r
    `);for(let a=0;a<s.length;a+=1)s[a].c();n=js()},m(a,c){Je(a,t,c);for(let l=0;l<s.length;l+=1)s[l].m(a,c);Je(a,n,c),i=!0},p(a,c){if(c[0]&899){r=a[30];let l;for(l=0;l<r.length;l+=1){const u=am(a,r,l);s[l]?(s[l].p(u,c),Se(s[l],1)):(s[l]=cm(u),s[l].c(),Se(s[l],1),s[l].m(n.parentNode,n))}for(Wi(),l=r.length;l<s.length;l+=1)o(l);ji()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)Se(s[c]);i=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)Pe(s[c]);i=!1},d(a){a&&Ve(t),Pc(s,a),a&&Ve(n)}}}function um(e){let t,n,i,r;return t=new Dl({props:{scene:e[0],position:[e[27],e[29]],vertical:!0,place:!0,id:"c_v_"+e[27]+"_"+e[29]}}),i=new Dl({props:{scene:e[0],position:[e[29],e[27]],vertical:!1,place:!0,id:"c_h_"+e[27]+"_"+e[29]}}),{c(){Ze(t.$$.fragment),n=Ye(),Ze(i.$$.fragment)},m(s,o){We(t,s,o),Je(s,n,o),We(i,s,o),r=!0},p(s,o){const a={};o[0]&1&&(a.scene=s[0]),t.$set(a);const c={};o[0]&1&&(c.scene=s[0]),i.$set(c)},i(s){r||(Se(t.$$.fragment,s),Se(i.$$.fragment,s),r=!0)},o(s){Pe(t.$$.fragment,s),Pe(i.$$.fragment,s),r=!1},d(s){je(t,s),s&&Ve(n),je(i,s)}}}function hm(e){let t,n,i={length:qe-1},r=[];for(let o=0;o<i.length;o+=1)r[o]=um(sm(e,i,o));const s=o=>Pe(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();t=js()},m(o,a){for(let c=0;c<r.length;c+=1)r[c].m(o,a);Je(o,t,a),n=!0},p(o,a){if(a[0]&1){i={length:qe-1};let c;for(c=0;c<i.length;c+=1){const l=sm(o,i,c);r[c]?(r[c].p(l,a),Se(r[c],1)):(r[c]=um(l),r[c].c(),Se(r[c],1),r[c].m(t.parentNode,t))}for(Wi(),c=i.length;c<r.length;c+=1)s(c);ji()}},i(o){if(!n){for(let a=0;a<i.length;a+=1)Se(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)Pe(r[a]);n=!1},d(o){Pc(r,o),o&&Ve(t)}}}function rT(e){let t,n,i,r,s,o,a,c,l,u,h,d,f,p,y,_={scene:e[0],id:"cam1",pos:[e[2],e[3],e[4]],lookAt:e[5]};t=new ES({props:_}),e[20](t),i=new GS({props:{scene:e[0],intensity:.25,color:3355443}}),s=new Kp({props:{scene:e[0],pos:[3,5,1],color:15549492,intensity:.5,shadowMapSize:512*8,castShadow:!0}}),a=new Kp({props:{scene:e[0],pos:[-3,5,-1],color:2984662,intensity:.5,shadowMapSize:512*8,castShadow:!0}}),l=new Rr({props:{scene:e[0],geometry:e[10],material:e[11],mat:{roughness:.5,metalness:.4,side:Ys,color:16777215},pos:[0,-.501,0],rot:[De.degToRad(-90),0,0],scale:[100,100,100],castShadow:!0,receiveShadow:!0}}),h=new Rr({props:{scene:e[0],geometry:e[12],material:e[13],mat:{color:(e[1],4473924)},pos:[0,0,0],rot:[0,0,0],scale:[$S,.2,QS],castShadow:!0,receiveShadow:!0}});let m=e[7],g=[];for(let w=0;w<m.length;w+=1)g[w]=lm(om(e,m,w));const v=w=>Pe(g[w],1,1,()=>{g[w]=null});let b={length:qe+1},x=[];for(let w=0;w<b.length;w+=1)x[w]=hm(rm(e,b,w));const S=w=>Pe(x[w],1,1,()=>{x[w]=null});return{c(){Ze(t.$$.fragment),n=Ye(),Ze(i.$$.fragment),r=Ye(),Ze(s.$$.fragment),o=Ye(),Ze(a.$$.fragment),c=Ye(),Ze(l.$$.fragment),u=Ye(),Ze(h.$$.fragment),d=Ye();for(let w=0;w<g.length;w+=1)g[w].c();f=Ye();for(let w=0;w<x.length;w+=1)x[w].c();p=js()},m(w,O){We(t,w,O),Je(w,n,O),We(i,w,O),Je(w,r,O),We(s,w,O),Je(w,o,O),We(a,w,O),Je(w,c,O),We(l,w,O),Je(w,u,O),We(h,w,O),Je(w,d,O);for(let R=0;R<g.length;R+=1)g[R].m(w,O);Je(w,f,O);for(let R=0;R<x.length;R+=1)x[R].m(w,O);Je(w,p,O),y=!0},p(w,O){const R={};O[0]&1&&(R.scene=w[0]),O[0]&28&&(R.pos=[w[2],w[3],w[4]]),O[0]&32&&(R.lookAt=w[5]),t.$set(R);const q={};O[0]&1&&(q.scene=w[0]),i.$set(q);const H={};O[0]&1&&(H.scene=w[0]),s.$set(H);const j={};O[0]&1&&(j.scene=w[0]),a.$set(j);const W={};O[0]&1&&(W.scene=w[0]),l.$set(W);const V={};if(O[0]&1&&(V.scene=w[0]),O[0]&2&&(V.mat={color:(w[1],4473924)}),h.$set(V),O[0]&899){m=w[7];let F;for(F=0;F<m.length;F+=1){const B=om(w,m,F);g[F]?(g[F].p(B,O),Se(g[F],1)):(g[F]=lm(B),g[F].c(),Se(g[F],1),g[F].m(f.parentNode,f))}for(Wi(),F=m.length;F<g.length;F+=1)v(F);ji()}if(O[0]&1){b={length:qe+1};let F;for(F=0;F<b.length;F+=1){const B=rm(w,b,F);x[F]?(x[F].p(B,O),Se(x[F],1)):(x[F]=hm(B),x[F].c(),Se(x[F],1),x[F].m(p.parentNode,p))}for(Wi(),F=b.length;F<x.length;F+=1)S(F);ji()}},i(w){if(!y){Se(t.$$.fragment,w),Se(i.$$.fragment,w),Se(s.$$.fragment,w),Se(a.$$.fragment,w),Se(l.$$.fragment,w),Se(h.$$.fragment,w);for(let O=0;O<m.length;O+=1)Se(g[O]);for(let O=0;O<b.length;O+=1)Se(x[O]);y=!0}},o(w){Pe(t.$$.fragment,w),Pe(i.$$.fragment,w),Pe(s.$$.fragment,w),Pe(a.$$.fragment,w),Pe(l.$$.fragment,w),Pe(h.$$.fragment,w),g=g.filter(Boolean);for(let O=0;O<g.length;O+=1)Pe(g[O]);x=x.filter(Boolean);for(let O=0;O<x.length;O+=1)Pe(x[O]);y=!1},d(w){e[20](null),je(t,w),w&&Ve(n),je(i,w),w&&Ve(r),je(s,w),w&&Ve(o),je(a,w),w&&Ve(c),je(l,w),w&&Ve(u),je(h,w),w&&Ve(d),Pc(g,w),w&&Ve(f),Pc(x,w),w&&Ve(p)}}}function sT(e,t,n){let i,r,s,o,a,c,l,u;lt(e,Rc,H=>n(17,i=H)),lt(e,Ac,H=>n(18,r=H)),lt(e,em,H=>n(2,s=H)),lt(e,tm,H=>n(3,o=H)),lt(e,nm,H=>n(4,a=H)),lt(e,Cl,H=>n(21,c=H)),lt(e,hr,H=>n(19,l=H)),lt(e,xn,H=>n(9,u=H));let h=[],d=[0,0,0],f,p,{scene:y}=t,{active:_}=t,{cursor:m}=t;Nh(16777215);const g=new Vl;let v=new wr(4,4,1),b=new Qt,x=new xr(1,1,1),S=new Ln,w=[],O=[];for(let H=0;H<qe;H++){w[H]=[],O[H]=[];for(let j=0;j<qe;j++)w[H][j]=new xr(1,1,1),O[H][j]=new Ln}const R=setInterval(()=>{var H;try{n(16,p=(H=f==null?void 0:f.getCamera)==null?void 0:H.call(f)),clearInterval(R)}catch{}},200);function q(H){An[H?"unshift":"push"](()=>{f=H,n(6,f)})}return e.$$set=H=>{"scene"in H&&n(0,y=H.scene),"active"in H&&n(1,_=H.active),"cursor"in H&&n(14,m=H.cursor)},e.$$.update=()=>{var H;if(e.$$.dirty[0]&393216&&n(15,h=[7*Math.exp(-i)*Math.cos(r)+.2,-7.5+12*Math.exp(.5*Math.sin(i)),7*Math.exp(-i)*Math.sin(r)]),e.$$.dirty[0]&32768&&(ve(em,s=h[0],s),ve(tm,o=h[1],o),ve(nm,a=h[2],a)),e.$$.dirty[0]&28&&n(5,d=[0,0,0]),e.$$.dirty[0]&606209&&p&&m){let j=new oe;j.x=m.x/window.innerWidth*2-1,j.y=-(m.y/window.innerHeight)*2+1,g.setFromCamera(j,p);let W=g.intersectObjects(y.children);ve(Cl,c=(H=W.map(V=>V.object.name).filter(V=>(V==null?void 0:V[0])===l))==null?void 0:H[0],c)}},[y,_,s,o,a,d,f,w,O,u,v,b,x,S,m,h,p,i,r,l,q]}class oT extends zt{constructor(t){super(),Ht(this,t,sT,rT,Ft,{scene:0,active:1,cursor:14},[-1,-1])}}function aT(e){let t,n;return t=new Rr({props:{scene:e[0],castShadow:!0,receiveShadow:!0,geometry:e[8],material:e[9],pos:[e[5],e[6],e[7]],scale:[oi,.01,oi],mat:{color:e[1]?2984662:15549492}}}),{c(){Ze(t.$$.fragment)},m(i,r){We(t,i,r),n=!0},p(i,[r]){const s={};r&1&&(s.scene=i[0]),r&224&&(s.pos=[i[5],i[6],i[7]]),r&2&&(s.mat={color:i[1]?2984662:15549492}),t.$set(s)},i(i){n||(Se(t.$$.fragment,i),n=!0)},o(i){Pe(t.$$.fragment,i),n=!1},d(i){je(t,i)}}}function cT(e,t,n){let i,r=kt,s=()=>(r(),r=qn(b,w=>n(5,i=w)),b),o,a=kt,c=()=>(a(),a=qn(x,w=>n(6,o=w)),x),l,u=kt,h=()=>(u(),u=qn(S,w=>n(7,l=w)),S);e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>a()),e.$$.on_destroy.push(()=>u());const d=new Tr(.3,.3,2,32),f=new Ln;let{scene:p}=t,{position:y}=t,{kaist:_}=t,{postech:m}=t,g=[0,.22,0];function v(w,O,R=0){return[(O-qe/2+.5)*vr,R+.22,(w-qe/2+.5)*vr]}const b=tn(g[0],{duration:800,easing:dr}),x=tn(g[1],{duration:3e3,easing:ey}),S=tn(g[2],{duration:800,easing:dr});return h(),c(),s(),e.$$set=w=>{"scene"in w&&n(0,p=w.scene),"position"in w&&n(10,y=w.position),"kaist"in w&&n(1,_=w.kaist),"postech"in w&&n(11,m=w.postech)},e.$$.update=()=>{e.$$.dirty&1024&&n(12,g=v(y[0],y[1])),e.$$.dirty&4096&&(ve(b,i=g[0],i),ve(x,o=g[1],o),ve(S,l=g[2],l))},[p,_,b,x,S,i,o,l,d,f,y,m,g]}class fm extends zt{constructor(t){super(),Ht(this,t,cT,aT,Ft,{scene:0,position:10,kaist:1,postech:11,_pos1:2,_pos2:3,_pos3:4})}get _pos1(){return this.$$.ctx[2]}get _pos2(){return this.$$.ctx[3]}get _pos3(){return this.$$.ctx[4]}}var lT="/kaporido/assets/nupjuk.b1ce8176.png";function dm(e,t,n){const i=e.slice();return i[52]=t[n].position,i[53]=t[n].vertical,i[54]=t[n].length,i[55]=t[n].hide,i[56]=t[n].id,i}function pm(e,t,n){const i=e.slice();return i[52]=t[n].position,i[53]=t[n].vertical,i[54]=t[n].length,i[56]=t[n].id,i}function mm(e,t){let n,i,r;return i=new Dl({props:{scene:t[51],position:t[52],vertical:t[53],length:t[54],kaist:!0,id:t[56]}}),{key:e,first:null,c(){n=js(),Ze(i.$$.fragment),this.first=n},m(s,o){Je(s,n,o),We(i,s,o),r=!0},p(s,o){t=s;const a={};o[1]&1048576&&(a.scene=t[51]),o[0]&32&&(a.position=t[52]),o[0]&32&&(a.vertical=t[53]),o[0]&32&&(a.length=t[54]),o[0]&32&&(a.id=t[56]),i.$set(a)},i(s){r||(Se(i.$$.fragment,s),r=!0)},o(s){Pe(i.$$.fragment,s),r=!1},d(s){s&&Ve(n),je(i,s)}}}function gm(e,t){let n,i,r;return i=new Dl({props:{scene:t[51],position:t[52],vertical:t[53],length:t[54],postech:!0,id:t[56]}}),{key:e,first:null,c(){n=js(),Ze(i.$$.fragment),this.first=n},m(s,o){Je(s,n,o),We(i,s,o),r=!0},p(s,o){t=s;const a={};o[1]&1048576&&(a.scene=t[51]),o[0]&64&&(a.position=t[52]),o[0]&64&&(a.vertical=t[53]),o[0]&64&&(a.length=t[54]),o[0]&64&&(a.id=t[56]),i.$set(a)},i(s){r||(Se(i.$$.fragment,s),r=!0)},o(s){Pe(i.$$.fragment,s),r=!1},d(s){s&&Ve(n),je(i,s)}}}function uT(e){let t=[],n=new Map,i,r=[],s=new Map,o,a,c,l,u,h,d,f=e[5];const p=m=>m[56];for(let m=0;m<f.length;m+=1){let g=pm(e,f,m),v=p(g);n.set(v,t[m]=mm(v,g))}let y=e[6];const _=m=>m[56];for(let m=0;m<y.length;m+=1){let g=dm(e,y,m),v=_(g);s.set(v,r[m]=gm(v,g))}return a=new oT({props:{scene:e[51],active:!e[12],cursor:e[18]}}),l=new fm({props:{scene:e[51],kaist:!0,position:e[3]}}),h=new fm({props:{scene:e[51],postech:!0,position:e[4]}}),{c(){for(let m=0;m<t.length;m+=1)t[m].c();i=Ye();for(let m=0;m<r.length;m+=1)r[m].c();o=Ye(),Ze(a.$$.fragment),c=Ye(),Ze(l.$$.fragment),u=Ye(),Ze(h.$$.fragment)},m(m,g){for(let v=0;v<t.length;v+=1)t[v].m(m,g);Je(m,i,g);for(let v=0;v<r.length;v+=1)r[v].m(m,g);Je(m,o,g),We(a,m,g),Je(m,c,g),We(l,m,g),Je(m,u,g),We(h,m,g),d=!0},p(m,g){g[0]&32|g[1]&1048576&&(f=m[5],Wi(),t=Mf(t,g,p,1,m,f,n,i.parentNode,wf,mm,i,pm),ji()),g[0]&64|g[1]&1048576&&(y=m[6],Wi(),r=Mf(r,g,_,1,m,y,s,o.parentNode,wf,gm,o,dm),ji());const v={};g[1]&1048576&&(v.scene=m[51]),g[0]&4096&&(v.active=!m[12]),g[0]&262144&&(v.cursor=m[18]),a.$set(v);const b={};g[1]&1048576&&(b.scene=m[51]),g[0]&8&&(b.position=m[3]),l.$set(b);const x={};g[1]&1048576&&(x.scene=m[51]),g[0]&16&&(x.position=m[4]),h.$set(x)},i(m){if(!d){for(let g=0;g<f.length;g+=1)Se(t[g]);for(let g=0;g<y.length;g+=1)Se(r[g]);Se(a.$$.fragment,m),Se(l.$$.fragment,m),Se(h.$$.fragment,m),d=!0}},o(m){for(let g=0;g<t.length;g+=1)Pe(t[g]);for(let g=0;g<r.length;g+=1)Pe(r[g]);Pe(a.$$.fragment,m),Pe(l.$$.fragment,m),Pe(h.$$.fragment,m),d=!1},d(m){for(let g=0;g<t.length;g+=1)t[g].d(m);m&&Ve(i);for(let g=0;g<r.length;g+=1)r[g].d(m);m&&Ve(o),je(a,m),m&&Ve(c),je(l,m),m&&Ve(u),je(h,m)}}}function hT(e){let t,n,i,r;return t=new ZS({props:{sti:e[50],id:"scene1",props:{background:0,fog:e[24]},$$slots:{default:[uT,({scene:s})=>({51:s}),({scene:s})=>[0,s?1048576:0]]},$$scope:{ctx:e}}}),i=new KS({props:{sti:e[50],sceneId:"scene1",camId:"cam1",config:{antialias:!0,alpha:!0},shadowmap:!0}}),{c(){Ze(t.$$.fragment),n=Ye(),Ze(i.$$.fragment)},m(s,o){We(t,s,o),Je(s,n,o),We(i,s,o),r=!0},p(s,o){const a={};o[1]&524288&&(a.sti=s[50]),o[0]&266360|o[1]&1074790400&&(a.$$scope={dirty:o,ctx:s}),t.$set(a);const c={};o[1]&524288&&(c.sti=s[50]),i.$set(c)},i(s){r||(Se(t.$$.fragment,s),Se(i.$$.fragment,s),r=!0)},o(s){Pe(t.$$.fragment,s),Pe(i.$$.fragment,s),r=!1},d(s){je(t,s),s&&Ve(n),je(i,s)}}}function ym(e){let t,n,i;return{c(){t=St("span"),t.textContent="\uBE14\uB85D \uB193\uAE30",$e(t,"class","button svelte-1jgv6p"),_t(t,"active",e[2]==="block")},m(r,s){Je(r,t,s),n||(i=Zt(t,"click",e[31]),n=!0)},p(r,s){s[0]&4&&_t(t,"active",r[2]==="block")},d(r){r&&Ve(t),n=!1,i()}}}function _m(e){let t,n,i;return{c(){t=St("span"),t.textContent="\uD310 \uB3CC\uB9AC\uAE30",$e(t,"class","button svelte-1jgv6p"),_t(t,"active",e[2]==="turn")},m(r,s){Je(r,t,s),n||(i=Zt(t,"click",e[32]),n=!0)},p(r,s){s[0]&4&&_t(t,"active",r[2]==="turn")},d(r){r&&Ve(t),n=!1,i()}}}function fT(e){let t,n,i,r,s,o,a,c,l,u,h,d,f,p,y,_,m,g,v,b,x,S,w,O,R,q,H,j,W,V,F,B,X,ne,ue,he,ce,Me,_e,Ie={w:e[7],h:e[8],$$slots:{default:[hT,({sti:P})=>({50:P}),({sti:P})=>[0,P?524288:0]]},$$scope:{ctx:e}};n=new OS({props:Ie}),e[29](n);let T=e[21]&&ym(e),M=e[20]&&_m(e);return{c(){t=St("main"),Ze(n.$$.fragment),i=Ye(),r=St("div"),r.innerHTML='Made with <span class="svelte-1jgv6p">\u2764</span> by <a href="https://seo-rii.github.io" class="svelte-1jgv6p">@seo-rii</a>',s=Ye(),o=St("div"),o.textContent="\uC544\uBB34 \uACF3\uC774\uB098 \uB20C\uB7EC\uC11C \uAC8C\uC784\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",a=Ye(),c=St("div"),c.textContent="\uB2E4\uC74C\uC73C\uB85C",l=Ye(),u=St("div"),u.textContent="\uC218\uB97C \uCC3E\uB294 \uC911...",h=Ye(),d=St("div"),f=St("span"),f.textContent="\uB9D0 \uC774\uB3D9\uD558\uAE30",p=Ye(),T&&T.c(),y=Ye(),M&&M.c(),_=Ye(),m=St("div"),g=St("div"),v=St("img"),x=Ye(),S=St("span"),S.textContent="KAIST",w=Ye(),O=St("div"),O.innerHTML=`<img src="https://w.namu.la/s/006a9fbc14a31c4be81260b185c92483c23c35aac49903a99e6ff20f3e7556fbba9cf64c357da20fa50794492d3658349494db25efba04ab03a91ae9179ec5512d9d7be9d3266304fdf2d5cdd108b1aa2435b0d31feb62fcf5647619f09e372a" class="svelte-1jgv6p"/> 
            <span class="svelte-1jgv6p">POSTECH</span>`,R=Ye(),q=St("div"),H=St("h1"),j=pr(e[19]),W=pr("\uC758 \uC2B9\uB9AC!"),V=Ye(),F=St("h3"),B=pr(e[19]),X=pr("\uC774(\uAC00) \uC2B9\uB9AC\uD588\uC5B4\uC694."),ne=Ye(),ue=St("div"),ue.textContent="\uB2E4\uC2DC \uD50C\uB808\uC774",$e(r,"class","toolbar credit button svelte-1jgv6p"),$e(o,"class","toolbar back button svelte-1jgv6p"),_t(o,"hide",!e[12]),$e(c,"class","toolbar next button svelte-1jgv6p"),_t(c,"hide",e[12]||!e[17]||e[1]),$e(u,"class","toolbar load button svelte-1jgv6p"),_t(u,"hide",e[12]||e[17]),$e(f,"class","button svelte-1jgv6p"),_t(f,"active",e[2]==="move"),$e(d,"class","toolbar action svelte-1jgv6p"),_t(d,"hide",e[12]||!e[17]||!e[1]),v.src!==(b=lT)&&$e(v,"src",b),$e(v,"class","svelte-1jgv6p"),$e(S,"class","svelte-1jgv6p"),xf(g,"background","#1487C888"),$e(g,"class","svelte-1jgv6p"),_t(g,"active",e[0]%2),xf(O,"background","#C8015088"),$e(O,"class","svelte-1jgv6p"),_t(O,"active",(e[0]+1)%2),$e(m,"class","toolbar turn svelte-1jgv6p"),_t(m,"hide",e[12]),$e(H,"class","svelte-1jgv6p"),$e(F,"class","svelte-1jgv6p"),$e(ue,"class","button svelte-1jgv6p"),$e(q,"class","toolbar winner svelte-1jgv6p"),_t(q,"hide",!e[19]),$e(t,"class","svelte-1jgv6p"),Ic(()=>e[34].call(t))},m(P,C){Je(P,t,C),We(n,t,null),He(t,i),He(t,r),He(t,s),He(t,o),He(t,a),He(t,c),He(t,l),He(t,u),He(t,h),He(t,d),He(d,f),He(d,p),T&&T.m(d,null),He(d,y),M&&M.m(d,null),He(t,_),He(t,m),He(m,g),He(g,v),He(g,x),He(g,S),He(m,w),He(m,O),He(t,R),He(t,q),He(q,H),He(H,j),He(H,W),He(q,V),He(q,F),He(F,B),He(F,X),He(q,ne),He(q,ue),he=fy(t,e[34].bind(t)),ce=!0,Me||(_e=[Zt(c,"click",e[26]),Zt(f,"click",e[30]),Zt(ue,"click",e[33]),Zt(t,"mousedown",e[35]),Zt(t,"mousemove",e[36]),Zt(t,"mousemove",e[37]),Zt(t,"mousemove",e[38]),Zt(t,"mousemove",e[39]),Zt(t,"mouseup",e[40]),Zt(t,"mouseup",e[41]),Zt(t,"click",e[25])],Me=!0)},p(P,C){const U={};C[0]&128&&(U.w=P[7]),C[0]&256&&(U.h=P[8]),C[0]&266360|C[1]&1074266112&&(U.$$scope={dirty:C,ctx:P}),n.$set(U),C[0]&4096&&_t(o,"hide",!P[12]),C[0]&135170&&_t(c,"hide",P[12]||!P[17]||P[1]),C[0]&135168&&_t(u,"hide",P[12]||P[17]),C[0]&4&&_t(f,"active",P[2]==="move"),P[21]?T?T.p(P,C):(T=ym(P),T.c(),T.m(d,y)):T&&(T.d(1),T=null),P[20]?M?M.p(P,C):(M=_m(P),M.c(),M.m(d,null)):M&&(M.d(1),M=null),C[0]&135170&&_t(d,"hide",P[12]||!P[17]||!P[1]),C[0]&1&&_t(g,"active",P[0]%2),C[0]&1&&_t(O,"active",(P[0]+1)%2),C[0]&4096&&_t(m,"hide",P[12]),(!ce||C[0]&524288)&&bf(j,P[19]),(!ce||C[0]&524288)&&bf(B,P[19]),C[0]&524288&&_t(q,"hide",!P[19])},i(P){ce||(Se(n.$$.fragment,P),ce=!0)},o(P){Pe(n.$$.fragment,P),ce=!1},d(P){P&&Ve(t),e[29](null),je(n),T&&T.d(),M&&M.d(),he(),Me=!1,Ws(_e)}}}function vm(e,t,n,i){for(const r of e)if(t[0]-1===n){if(r.position[0]===t[0]&&r.position[1]===t[1]&&r.vertical||r.position[0]===t[0]&&r.position[1]===t[1]-1&&r.length===2&&r.vertical)return!0}else if(t[0]+1===n){if(r.position[0]===t[0]+1&&r.position[1]===t[1]&&r.vertical||r.position[0]===t[0]+1&&r.position[1]===t[1]+1&&r.length===2&&r.vertical)return!0}else if(t[1]-1===i){if(r.position[0]===t[0]&&r.position[1]===t[1]&&!r.vertical||r.position[0]===t[0]-1&&r.position[1]===t[1]&&r.length===2&&!r.vertical)return!0}else if(t[1]+1===i&&(r.position[0]===t[0]&&r.position[1]===t[1]+1&&!r.vertical||r.position[0]===t[0]-1&&r.position[1]===t[1]+1&&r.length===2&&!r.vertical))return!0;return!1}function bm(e,t,n,i){for(const r of e)if(r.vertical&&t){if(r.position[0]===n&&(i<=r.position[1]&&i+1>=r.position[1]||r.position[1]<=i&&r.position[1]+r.length-1>=i))return!1}else if(!r.vertical&&!t){if(r.position[1]===i&&(n<=r.position[0]&&n+1>=r.position[0]||r.position[0]<=n&&r.position[0]+r.length-1>=n))return!1}else if(r.length===2){if(r.vertical&&!t){if(r.position[0]-1===n&&r.position[1]+1===i)return!1}else if(r.position[0]+1===n&&r.position[1]-1===i)return!1}return!0}function dT(e,t,n){let i,r,s,o,a,c,l,u;lt(e,mo,E=>n(5,i=E)),lt(e,jn,E=>n(6,r=E)),lt(e,Ac,E=>n(22,s=E)),lt(e,Rc,E=>n(23,o=E)),lt(e,Lc,E=>n(27,a=E)),lt(e,Cl,E=>n(28,c=E)),lt(e,hr,E=>n(43,l=E)),lt(e,xn,E=>n(44,u=E));const h=new Zc(0,.1,1);let d,f,p,y=0,_=!1,m=!1,g=!1,v,b,x,S,w=!0,O,R=!1;yn(()=>{window.addEventListener("resize",q),q(),setTimeout(()=>{let E=[];for(let A=0;A<Po;A++)E.push({position:[A,-2.2],vertical:!0,length:2,id:"k_"+A});ve(mo,i=E,i)},0),setTimeout(()=>{let E=[];for(let A=Po-1;A>=0;A--)E.push({position:[A,qe+.2],vertical:!0,length:2,id:"p_"+(Po-A-1)});ve(jn,r=E,r)},0)}),py(()=>{window.removeEventListener("resize",q)});function q(E){setTimeout(()=>p.doResize(d,f))}let H=0,j,W=new Set,V=new Set,F=[Math.floor(qe/2),0],B=[Math.floor(qe/2),qe-1];function X(E,A,Z){return E[0]-1===A&&E[1]===Z||E[0]+1===A&&E[1]===Z||E[0]===A&&E[1]-1===Z||E[0]===A&&E[1]+1===Z?!(F[0]===A&&F[1]===Z||B[0]===A&&B[1]===Z||vm(i,E,A,Z)||vm(r,E,A,Z)):!1}function ne(E,A,Z){let K=[];for(const D of E)if(D.position[1]>=0&&D.position[1]<=qe&&(D.vertical&&D.length===2&&A<=D.position[0]&&D.position[0]<=A+4&&Z-1===D.position[1]?(K.push({length:1,vertical:!0,position:[D.position[0],D.position[1]],id:D.id+"_"}),D.position=[D.position[0],D.position[1]+1],D.length=1):D.vertical&&D.length===2&&A<=D.position[0]&&D.position[0]<=A+4&&Z+3===D.position[1]?(K.push({length:1,vertical:!0,position:[D.position[0],D.position[1]+1],id:D.id+"_"}),D.position=[D.position[0],D.position[1]],D.length=1):!D.vertical&&D.length===2&&Z<=D.position[1]&&D.position[1]<=Z+4&&A-1===D.position[0]?(K.push({length:1,vertical:!1,position:[D.position[0],D.position[1]],id:D.id+"_"}),D.position=[D.position[0]+1,D.position[1]],D.length=1):!D.vertical&&D.length===2&&Z<=D.position[1]&&D.position[1]<=Z+4&&A+3===D.position[0]&&(K.push({length:1,vertical:!1,position:[D.position[0]+1,D.position[1]],id:D.id+"_"}),D.position=[D.position[0],D.position[1]],D.length=1),D.vertical&&A<=D.position[0]&&D.position[0]<=A+4&&Z<=D.position[1]&&D.position[1]<=Z+3||!D.vertical&&Z<=D.position[1]&&D.position[1]<=Z+4&&A<=D.position[0]&&D.position[0]<=A+3)){let[ee,N]=D.position;ee-=A+2,N-=Z+2;let se=N,ae=-ee;ee=se+A+2,N=ae+Z+2-(D.vertical?0:D.length),D.vertical=!D.vertical,D.position=[ee,N]}return[...E,...K]}async function ue(){if(!(!c||!_)){if(j==="block"){if(!u.length)return;if(!a)ve(Lc,a=c,a);else{const[E,A,Z,K]=c.split("_");let D=parseInt(Z),ee=parseInt(K),N=A==="v";if(y%2){const se=i.findIndex(ae=>ae.id===a);ve(mo,i[se].position=N?[D,ee]:[ee,D],i),ve(mo,i[se].vertical=N,i),W.add(a),W.add(a+"_")}else{const se=r.findIndex(ae=>ae.id===a);console.log(se),ve(jn,r[se].position=N?[D,ee]:[ee,D],r),ve(jn,r[se].vertical=N,r),V.add(a),W.add(a+"_")}ce()}}if(j==="turn"){const[E,A,Z]=c.split("_");let K=parseInt(Z),D=parseInt(A);K=Math.min(K,qe-4),D=Math.min(D,qe-4);let ee=y%2?i:r;for(let N=0;N<2;N++)for(let se=0;se<ee.length;se++)if(ee[se].position[1]<0||ee[se].position[1]>qe){ee.splice(se,1);break}ve(mo,i=ne(i,K,D),i),ve(jn,r=ne(r,K,D),r),ce()}if(j==="move"){if(!u.length)return;const[E,A,Z]=c.split("_");let K=parseInt(Z),D=parseInt(A);y%2?n(3,F=[K,D]):n(4,B=[K,D]),ce()}}}let he="";async function ce(){n(2,j=""),++H,R||(n(17,w=!1),await new Promise(E=>setTimeout(E,10)),H===1&&(ve(jn,r[0].position=[7,7],r),ve(jn,r[0].vertical=!1,r)),H===3&&ve(jn,r[1].position=[3,2],r),H===5&&(ve(jn,r[2].position=[2,2],r),ve(jn,r[2].vertical=!1,r))),B[1]===0?n(19,he="\uD3EC\uC2A4\uD14D"):F[1]===qe-1?n(19,he="\uCE74\uC774\uC2A4\uD2B8"):setTimeout(()=>{n(0,y++,y),n(17,w=!0)},2e3)}let Me,_e;function Ie(E){An[E?"unshift":"push"](()=>{p=E,n(9,p)})}const T=()=>n(2,j="move"),M=()=>n(2,j="block"),P=()=>n(2,j="turn"),C=()=>location.reload();function U(){d=this.clientWidth,f=this.clientHeight,n(7,d),n(8,f)}const G=E=>(n(10,_=!0),n(11,m=!0),n(13,v=E.clientX),n(14,b=E.clientY),n(15,x=E.clientX),n(16,S=E.clientY)),I=E=>m&&(Math.abs(x-E.clientX)>10||Math.abs(S-E.clientY)>10)&&(n(10,_=!1),n(12,g=!0)),z=E=>m&&ve(Ac,s+=(E.clientX-v)/100,s)&&n(13,v=E.clientX),Y=E=>n(18,O={x:E.clientX,y:E.clientY}),Q=E=>m&&ve(Rc,o=Math.min(Math.max(o+(E.clientY-b)/50,0),Math.PI*.85),o)&&n(14,b=E.clientY)&&n(12,g=!0),J=()=>_&&g&&(n(0,++y),n(12,g=!1)||n(0,--y)),ie=()=>n(11,m=!1);return e.$$.update=()=>{if(e.$$.dirty[0]&1&&(ve(Ac,s=y*Math.PI,s),ve(Rc,o=0,o)),e.$$.dirty[0]&4&&(ve(Lc,a="",a),ve(Cl,c="",c),ve(hr,l="",l),ve(xn,u=[],u)),e.$$.dirty[0]&134217733&&(j==="move"&&ve(hr,l="b",l),j==="block"&&(a?ve(hr,l="c",l):ve(hr,l=y%2?"k":"p",l)),j==="turn"&&ve(hr,l="b",l)),e.$$.dirty[0]&402653309){if(j==="block"&&c)if(!a)y%2&&W.has(c)?ve(xn,u=[],u):!(y%2)&&V.has(c)?ve(xn,u=[],u):ve(xn,u=[c],u);else{const[E,A,Z,K]=c.split("_");let D=parseInt(Z),ee=parseInt(K),N=A==="v";if(!N){let se=D;D=ee,ee=se}bm(i,N,D,ee)&&bm(r,N,D,ee)?ve(xn,u=[c],u):ve(xn,u=[],u)}if(j==="turn"&&c){let[E,A,Z]=c.split("_"),K=parseInt(A),D=parseInt(Z);K=Math.min(K,qe-4),D=Math.min(D,qe-4);let ee=[];for(let N=0;N<4;N++)for(let se=0;se<4;se++)ee.push(`b_${K+N}_${D+se}`);ve(xn,u=ee,u)}if(j==="move"&&c){let[E,A,Z]=c.split("_"),K=parseInt(Z),D=parseInt(A);X(y%2?F:B,K,D)?ve(xn,u=[`b_${D}_${K}`],u):ve(xn,u=[],u)}}if(e.$$.dirty[0]&2&&(R||ce()),e.$$.dirty[0]&97){const E=(y%2?i:r).filter(A=>A.position[1]<0||A.position[1]>qe).length;n(20,Me=E>=2),n(21,_e=E>=1)}},n(1,R=!0),[y,R,j,F,B,i,r,d,f,p,_,m,g,v,b,x,S,w,O,he,Me,_e,s,o,h,ue,ce,a,c,Ie,T,M,P,C,U,G,I,z,Y,Q,J,ie]}class pT extends zt{constructor(t){super(),Ht(this,t,dT,fT,Ft,{},[-1,-1])}}function mT(e){let t,n,i,r;return n=new pT({}),{c(){t=St("main"),Ze(n.$$.fragment),i=Ye(),$e(t,"class","svelte-oc9kaa"),document.title="\uCE74\uD3EC\uB9AC\uB3C4"},m(s,o){Je(s,t,o),We(n,t,null),Je(s,i,o),r=!0},p:kt,i(s){r||(Se(n.$$.fragment,s),r=!0)},o(s){Pe(n.$$.fragment,s),r=!1},d(s){s&&Ve(t),je(n),s&&Ve(i)}}}class gT extends zt{constructor(t){super(),Ht(this,t,null,mT,Ft,{})}}new gT({target:document.getElementById("app")});
