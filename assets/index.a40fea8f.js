var sy=Object.defineProperty;var oy=(e,t,n)=>t in e?sy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Jl=(e,t,n)=>(oy(e,typeof t!="symbol"?t+"":t,n),n);const ay=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};ay();function zt(){}const cy=e=>e;function zu(e,t){for(const n in t)e[n]=t[n];return e}function Mm(e){return e()}function Mf(){return Object.create(null)}function Zs(e){e.forEach(Mm)}function ly(e){return typeof e=="function"}function Ut(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function uy(e){return Object.keys(e).length===0}function Kn(e,...t){if(e==null)return zt;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function dt(e,t,n){e.$$.on_destroy.push(Kn(t,n))}function zh(e,t,n,i){if(e){const r=Em(e,t,n,i);return e[0](r)}}function Em(e,t,n,i){return e[1]&&i?zu(n.ctx.slice(),e[1](i(t))):n.ctx}function hy(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(t.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=t.dirty[a]|r[a];return s}return t.dirty|r}return t.dirty}function Gh(e,t,n,i,r,s,o){const a=hy(t,i,r,s);if(a){const c=Em(t,n,i,o);e.p(c,a)}}function be(e,t,n=t){return e.set(n),t}const Sm=typeof window!="undefined";let fy=Sm?()=>window.performance.now():()=>Date.now(),Tm=Sm?e=>requestAnimationFrame(e):zt;const ms=new Set;function Am(e){ms.forEach(t=>{t.c(e)||(ms.delete(t),t.f())}),ms.size!==0&&Tm(Am)}function dy(e){let t;return ms.size===0&&Tm(Am),{promise:new Promise(n=>{ms.add(t={c:e,f:n})}),abort(){ms.delete(t)}}}let ya=!1;const Oo=new Set;function py(){ya=!0}function my(){ya=!1;for(const e of Oo)e.parentNode.removeChild(e);Oo.clear()}function Le(e,t){ya&&Oo.delete(t),t.parentNode!==e&&e.appendChild(t)}function $e(e,t,n){ya&&Oo.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function Ye(e){ya?Oo.add(e):e.parentNode&&e.parentNode.removeChild(e)}function Oc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Xe(e){return document.createElement(e)}function _i(e){return document.createTextNode(e)}function Ve(){return _i(" ")}function Fr(){return _i("")}function Dt(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Ue(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function gy(e){return Array.from(e.childNodes)}function La(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function hn(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}let Pa;function yy(){if(Pa===void 0){Pa=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{Pa=!0}}return Pa}function _y(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=Xe("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=yy();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=Dt(window,"message",o=>{o.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{s=Dt(i.contentWindow,"resize",t)}),Le(e,i),()=>{(r||s&&i.contentWindow)&&s(),Ye(i)}}function ct(e,t,n){e.classList[n?"add":"remove"](t)}function vy(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}let Fc;function Nc(e){Fc=e}function Nl(){if(!Fc)throw new Error("Function called outside component initialization");return Fc}function wn(e){Nl().$$.on_mount.push(e)}function by(e){Nl().$$.on_destroy.push(e)}function xy(){const e=Nl();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const r=vy(t,n);i.slice().forEach(s=>{s.call(e,r)})}}}const vo=[],Cn=[],Rc=[],Gu=[],Rm=Promise.resolve();let Vu=!1;function Lm(){Vu||(Vu=!0,Rm.then(Qe))}function Ca(){return Lm(),Rm}function kc(e){Rc.push(e)}function Vh(e){Gu.push(e)}let Kl=!1;const Ql=new Set;function Qe(){if(!Kl){Kl=!0;do{for(let e=0;e<vo.length;e+=1){const t=vo[e];Nc(t),wy(t.$$)}for(Nc(null),vo.length=0;Cn.length;)Cn.pop()();for(let e=0;e<Rc.length;e+=1){const t=Rc[e];Ql.has(t)||(Ql.add(t),t())}Rc.length=0}while(vo.length);for(;Gu.length;)Gu.pop()();Vu=!1,Kl=!1,Ql.clear()}}function wy(e){if(e.fragment!==null){e.update(),Zs(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(kc)}}const Lc=new Set;let xr;function Ki(){xr={r:0,c:[],p:xr}}function Qi(){xr.r||Zs(xr.c),xr=xr.p}function Re(e,t){e&&e.i&&(Lc.delete(e),e.i(t))}function Oe(e,t,n,i){if(e&&e.o){if(Lc.has(e))return;Lc.add(e),xr.c.push(()=>{Lc.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function Ef(e,t){Oe(e,1,1,()=>{t.delete(e.key)})}function Sf(e,t,n,i,r,s,o,a,c,l,u,h){let d=e.length,f=s.length,p=d;const y={};for(;p--;)y[e[p].key]=p;const _=[],m=new Map,g=new Map;for(p=f;p--;){const E=h(r,s,p),w=n(E);let P=o.get(w);P?i&&P.p(E,t):(P=l(w,E),P.c()),m.set(w,_[p]=P),w in y&&g.set(w,Math.abs(p-y[w]))}const v=new Set,b=new Set;function x(E){Re(E,1),E.m(a,u),o.set(E.key,E),u=E.first,f--}for(;d&&f;){const E=_[f-1],w=e[d-1],P=E.key,A=w.key;E===w?(u=E.first,d--,f--):m.has(A)?!o.has(P)||v.has(P)?x(E):b.has(A)?d--:g.get(P)>g.get(A)?(b.add(P),x(E)):(v.add(A),d--):(c(w,o),d--)}for(;d--;){const E=e[d];m.has(E.key)||c(E,o)}for(;f;)x(_[f-1]);return _}function Wh(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function et(e){e&&e.c()}function Je(e,t,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=e.$$;r&&r.m(t,n),i||kc(()=>{const c=s.map(Mm).filter(ly);o?o.push(...c):Zs(c),e.$$.on_mount=[]}),a.forEach(kc)}function Ke(e,t){const n=e.$$;n.fragment!==null&&(Zs(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function My(e,t){e.$$.dirty[0]===-1&&(vo.push(e),Lm(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Wt(e,t,n,i,r,s,o=[-1]){const a=Fc;Nc(e);const c=e.$$={fragment:null,ctx:null,props:s,update:zt,not_equal:r,bound:Mf(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:t.context||[]),callbacks:Mf(),dirty:o,skip_bound:!1};let l=!1;if(c.ctx=n?n(e,t.props||{},(u,h,...d)=>{const f=d.length?d[0]:h;return c.ctx&&r(c.ctx[u],c.ctx[u]=f)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](f),l&&My(e,u)),h}):[],c.update(),l=!0,Zs(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){py();const u=gy(t.target);c.fragment&&c.fragment.l(u),u.forEach(Ye)}else c.fragment&&c.fragment.c();t.intro&&Re(e.$$.fragment),Je(e,t.target,t.anchor,t.customElement),my(),Qe()}Nc(a)}class jt{$destroy(){Ke(this,1),this.$destroy=zt}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!uy(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */function lt(e){return e===null||typeof e=="undefined"}function Rt(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ut(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}const Vt=e=>(typeof e=="number"||e instanceof Number)&&isFinite(+e);function Sn(e,t){return Vt(e)?e:t}function tt(e,t){return typeof e=="undefined"?t:e}const Ey=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:e/t,Pm=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function qt(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function en(e,t,n,i){let r,s,o;if(Rt(e))if(s=e.length,i)for(r=s-1;r>=0;r--)t.call(n,e[r],r);else for(r=0;r<s;r++)t.call(n,e[r],r);else if(ut(e))for(o=Object.keys(e),s=o.length,r=0;r<s;r++)t.call(n,e[o[r]],o[r])}function Tf(e,t){let n,i,r,s;if(!e||!t||e.length!==t.length)return!1;for(n=0,i=e.length;n<i;++n)if(r=e[n],s=t[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function Bc(e){if(Rt(e))return e.map(Bc);if(ut(e)){const t=Object.create(null),n=Object.keys(e),i=n.length;let r=0;for(;r<i;++r)t[n[r]]=Bc(e[n[r]]);return t}return e}function Cm(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Sy(e,t,n,i){if(!Cm(e))return;const r=t[e],s=n[e];ut(r)&&ut(s)?Fo(r,s,i):t[e]=Bc(s)}function Fo(e,t,n){const i=Rt(t)?t:[t],r=i.length;if(!ut(e))return e;n=n||{};const s=n.merger||Sy;for(let o=0;o<r;++o){if(t=i[o],!ut(t))continue;const a=Object.keys(t);for(let c=0,l=a.length;c<l;++c)s(a[c],e,t,n)}return e}function Im(e,t){return Fo(e,t,{merger:Ty})}function Ty(e,t,n){if(!Cm(e))return;const i=t[e],r=n[e];ut(i)&&ut(r)?Im(i,r):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Bc(r))}const Af={"":e=>e,x:e=>e.x,y:e=>e.y};function xs(e,t){return(Af[t]||(Af[t]=Ay(t)))(e)}function Ay(e){const t=Ry(e);return n=>{for(const i of t){if(i==="")break;n=n&&n[i]}return n}}function Ry(e){const t=e.split("."),n=[];let i="";for(const r of t)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function Dm(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Om=e=>typeof e!="undefined",Et=Math.PI,rt=2*Et,Ly=rt+Et,Py=Et/180,Mt=Et/2,io=Et/4,Rf=Et*2/3,An=Math.log10,ii=Math.sign;function Lf(e){const t=Math.round(e);e=Mo(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(An(e))),i=e/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function Cy(e){const t=[],n=Math.sqrt(e);let i;for(i=1;i<n;i++)e%i===0&&(t.push(i),t.push(e/i));return n===(n|0)&&t.push(n),t.sort((r,s)=>r-s).pop(),t}function ws(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Mo(e,t,n){return Math.abs(e-t)<n}function Iy(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Fm(e,t,n){let i,r,s;for(i=0,r=e.length;i<r;i++)s=e[i][n],isNaN(s)||(t.min=Math.min(t.min,s),t.max=Math.max(t.max,s))}function zn(e){return e*(Et/180)}function jh(e){return e*(180/Et)}function Pf(e){if(!Vt(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Dy(e,t){const n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*Et&&(s+=rt),{angle:s,distance:r}}function Wu(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Oy(e,t){return(e-t+Ly)%rt-Et}function Hn(e){return(e%rt+rt)%rt}function Uc(e,t,n,i){const r=Hn(e),s=Hn(t),o=Hn(n),a=Hn(s-r),c=Hn(o-r),l=Hn(r-s),u=Hn(r-o);return r===s||r===o||i&&s===o||a>c&&l<u}function Jt(e,t,n){return Math.max(t,Math.min(n,e))}function Fy(e){return Jt(e,-32768,32767)}function Hc(e,t,n,i=1e-6){return e>=Math.min(t,n)-i&&e<=Math.max(t,n)+i}function Nm(e,t,n){n=n||(o=>e[o]<t);let i=e.length-1,r=0,s;for(;i-r>1;)s=r+i>>1,n(s)?r=s:i=s;return{lo:r,hi:i}}const ls=(e,t,n,i)=>Nm(e,n,i?r=>e[r][t]<=n:r=>e[r][t]<n);function Ny(e,t,n){let i=0,r=e.length;for(;i<r&&e[i]<t;)i++;for(;r>i&&e[r-1]>n;)r--;return i>0||r<e.length?e.slice(i,r):e}const km=["push","pop","shift","splice","unshift"];function ky(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),km.forEach(n=>{const i="_onData"+Dm(n),r=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...s){const o=r.apply(this,s);return e._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...s)}),o}})})}function Cf(e,t){const n=e._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(t);r!==-1&&i.splice(r,1),!(i.length>0)&&(km.forEach(s=>{delete e[s]}),delete e._chartjs)}function Bm(e){const t=new Set;let n,i;for(n=0,i=e.length;n<i;++n)t.add(e[n]);return t.size===i?e:Array.from(t)}const By=function(){return typeof window=="undefined"?function(e){return e()}:window.requestAnimationFrame}(),Uy=e=>e==="start"?"left":e==="end"?"right":"center",If=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2;function Um(e,t,n){const i=t.length;let r=0,s=i;if(e._sorted){const{iScale:o,_parsed:a}=e,c=o.axis,{min:l,max:u,minDefined:h,maxDefined:d}=o.getUserBounds();h&&(r=Jt(Math.min(ls(a,o.axis,l).lo,n?i:ls(t,c,o.getPixelForValue(l)).lo),0,i-1)),d?s=Jt(Math.max(ls(a,o.axis,u,!0).hi+1,n?0:ls(t,c,o.getPixelForValue(u),!0).hi+1),r,i)-r:s=i-r}return{start:r,count:s}}function Hm(e){const{xScale:t,yScale:n,_scaleRanges:i}=e,r={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!i)return e._scaleRanges=r,!0;const s=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}const Ia=e=>e===0||e===1,Df=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*rt/n)),Of=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*rt/n)+1,Eo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Mt)+1,easeOutSine:e=>Math.sin(e*Mt),easeInOutSine:e=>-.5*(Math.cos(Et*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ia(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ia(e)?e:Df(e,.075,.3),easeOutElastic:e=>Ia(e)?e:Of(e,.075,.3),easeInOutElastic(e){return Ia(e)?e:e<.5?.5*Df(e*2,.1125,.45):.5+.5*Of(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Eo.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Eo.easeInBounce(e*2)*.5:Eo.easeOutBounce(e*2-1)*.5+.5};/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function _a(e){return e+.5|0}const Vi=(e,t,n)=>Math.max(Math.min(e,n),t);function bo(e){return Vi(_a(e*2.55),0,255)}function Xi(e){return Vi(_a(e*255),0,255)}function vi(e){return Vi(_a(e/2.55)/100,0,1)}function Ff(e){return Vi(_a(e*100),0,100)}const En={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ju=[..."0123456789ABCDEF"],Hy=e=>ju[e&15],zy=e=>ju[(e&240)>>4]+ju[e&15],Da=e=>(e&240)>>4===(e&15),Gy=e=>Da(e.r)&&Da(e.g)&&Da(e.b)&&Da(e.a);function Vy(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&En[e[1]]*17,g:255&En[e[2]]*17,b:255&En[e[3]]*17,a:t===5?En[e[4]]*17:255}:(t===7||t===9)&&(n={r:En[e[1]]<<4|En[e[2]],g:En[e[3]]<<4|En[e[4]],b:En[e[5]]<<4|En[e[6]],a:t===9?En[e[7]]<<4|En[e[8]]:255})),n}const Wy=(e,t)=>e<255?t(e):"";function jy(e){var t=Gy(e)?Hy:zy;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Wy(e.a,t):void 0}const Xy=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function zm(e,t,n){const i=t*Math.min(n,1-n),r=(s,o=(s+e/30)%12)=>n-i*Math.max(Math.min(o-3,9-o,1),-1);return[r(0),r(8),r(4)]}function Yy(e,t,n){const i=(r,s=(r+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function qy(e,t,n){const i=zm(e,1,.5);let r;for(t+n>1&&(r=1/(t+n),t*=r,n*=r),r=0;r<3;r++)i[r]*=1-t-n,i[r]+=t;return i}function Zy(e,t,n,i,r){return e===r?(t-n)/i+(t<n?6:0):t===r?(n-e)/i+2:(e-t)/i+4}function Xh(e){const n=e.r/255,i=e.g/255,r=e.b/255,s=Math.max(n,i,r),o=Math.min(n,i,r),a=(s+o)/2;let c,l,u;return s!==o&&(u=s-o,l=a>.5?u/(2-s-o):u/(s+o),c=Zy(n,i,r,u,s),c=c*60+.5),[c|0,l||0,a]}function Yh(e,t,n,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,i)).map(Xi)}function qh(e,t,n){return Yh(zm,e,t,n)}function Jy(e,t,n){return Yh(qy,e,t,n)}function Ky(e,t,n){return Yh(Yy,e,t,n)}function Gm(e){return(e%360+360)%360}function Qy(e){const t=Xy.exec(e);let n=255,i;if(!t)return;t[5]!==i&&(n=t[6]?bo(+t[5]):Xi(+t[5]));const r=Gm(+t[2]),s=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=Jy(r,s,o):t[1]==="hsv"?i=Ky(r,s,o):i=qh(r,s,o),{r:i[0],g:i[1],b:i[2],a:n}}function $y(e,t){var n=Xh(e);n[0]=Gm(n[0]+t),n=qh(n),e.r=n[0],e.g=n[1],e.b=n[2]}function e0(e){if(!e)return;const t=Xh(e),n=t[0],i=Ff(t[1]),r=Ff(t[2]);return e.a<255?`hsla(${n}, ${i}%, ${r}%, ${vi(e.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const Nf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},kf={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function t0(){const e={},t=Object.keys(kf),n=Object.keys(Nf);let i,r,s,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],r=0;r<n.length;r++)s=n[r],a=a.replace(s,Nf[s]);s=parseInt(kf[o],16),e[a]=[s>>16&255,s>>8&255,s&255]}return e}let Oa;function n0(e){Oa||(Oa=t0(),Oa.transparent=[0,0,0,0]);const t=Oa[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const i0=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function r0(e){const t=i0.exec(e);let n=255,i,r,s;if(!!t){if(t[7]!==i){const o=+t[7];n=t[8]?bo(o):Vi(o*255,0,255)}return i=+t[1],r=+t[3],s=+t[5],i=255&(t[2]?bo(i):Vi(i,0,255)),r=255&(t[4]?bo(r):Vi(r,0,255)),s=255&(t[6]?bo(s):Vi(s,0,255)),{r:i,g:r,b:s,a:n}}}function s0(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${vi(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const $l=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,zr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function o0(e,t,n){const i=zr(vi(e.r)),r=zr(vi(e.g)),s=zr(vi(e.b));return{r:Xi($l(i+n*(zr(vi(t.r))-i))),g:Xi($l(r+n*(zr(vi(t.g))-r))),b:Xi($l(s+n*(zr(vi(t.b))-s))),a:e.a+n*(t.a-e.a)}}function Fa(e,t,n){if(e){let i=Xh(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*n,t===0?360:1)),i=qh(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function Vm(e,t){return e&&Object.assign(t||{},e)}function Bf(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Xi(e[3]))):(t=Vm(e,{r:0,g:0,b:0,a:1}),t.a=Xi(t.a)),t}function a0(e){return e.charAt(0)==="r"?r0(e):Qy(e)}class zc{constructor(t){if(t instanceof zc)return t;const n=typeof t;let i;n==="object"?i=Bf(t):n==="string"&&(i=Vy(t)||n0(t)||a0(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Vm(this._rgb);return t&&(t.a=vi(t.a)),t}set rgb(t){this._rgb=Bf(t)}rgbString(){return this._valid?s0(this._rgb):void 0}hexString(){return this._valid?jy(this._rgb):void 0}hslString(){return this._valid?e0(this._rgb):void 0}mix(t,n){if(t){const i=this.rgb,r=t.rgb;let s;const o=n===s?.5:n,a=2*o-1,c=i.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;s=1-l,i.r=255&l*i.r+s*r.r+.5,i.g=255&l*i.g+s*r.g+.5,i.b=255&l*i.b+s*r.b+.5,i.a=o*i.a+(1-o)*r.a,this.rgb=i}return this}interpolate(t,n){return t&&(this._rgb=o0(this._rgb,t._rgb,n)),this}clone(){return new zc(this.rgb)}alpha(t){return this._rgb.a=Xi(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=_a(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Fa(this._rgb,2,t),this}darken(t){return Fa(this._rgb,2,-t),this}saturate(t){return Fa(this._rgb,1,t),this}desaturate(t){return Fa(this._rgb,1,-t),this}rotate(t){return $y(this._rgb,t),this}}function Wm(e){return new zc(e)}function jm(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Uf(e){return jm(e)?e:Wm(e)}function eu(e){return jm(e)?e:Wm(e).saturate(.5).darken(.1).hexString()}const Xm=Object.create(null),c0=Object.create(null);function So(e,t){if(!t)return e;const n=t.split(".");for(let i=0,r=n.length;i<r;++i){const s=n[i];e=e[s]||(e[s]=Object.create(null))}return e}function tu(e,t,n){return typeof t=="string"?Fo(So(e,t),n):Fo(So(e,""),t)}class l0{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=n=>n.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(n,i)=>eu(i.backgroundColor),this.hoverBorderColor=(n,i)=>eu(i.borderColor),this.hoverColor=(n,i)=>eu(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,n){return tu(this,t,n)}get(t){return So(this,t)}describe(t,n){return tu(c0,t,n)}override(t,n){return tu(Xm,t,n)}route(t,n,i,r){const s=So(this,t),o=So(this,i),a="_"+n;Object.defineProperties(s,{[a]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[a],l=o[r];return ut(c)?Object.assign({},l,c):tt(c,l)},set(c){this[a]=c}}})}}var ht=new l0({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function u0(e){return!e||lt(e.size)||lt(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Gc(e,t,n,i,r){let s=t[r];return s||(s=t[r]=e.measureText(r).width,n.push(r)),s>i&&(i=s),i}function h0(e,t,n,i){i=i||{};let r=i.data=i.data||{},s=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(r=i.data={},s=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let o=0;const a=n.length;let c,l,u,h,d;for(c=0;c<a;c++)if(h=n[c],h!=null&&Rt(h)!==!0)o=Gc(e,r,s,o,h);else if(Rt(h))for(l=0,u=h.length;l<u;l++)d=h[l],d!=null&&!Rt(d)&&(o=Gc(e,r,s,o,d));e.restore();const f=s.length/2;if(f>n.length){for(c=0;c<f;c++)delete r[s[c]];s.splice(0,f)}return o}function or(e,t,n){const i=e.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((t-r)*i)/i+r}function Xu(e,t,n,i){f0(e,t,n,i,null)}function f0(e,t,n,i,r){let s,o,a,c,l,u;const h=t.pointStyle,d=t.rotation,f=t.radius;let p=(d||0)*Py;if(h&&typeof h=="object"&&(s=h.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){e.save(),e.translate(n,i),e.rotate(p),e.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),e.restore();return}if(!(isNaN(f)||f<=0)){switch(e.beginPath(),h){default:r?e.ellipse(n,i,r/2,f,0,0,rt):e.arc(n,i,f,0,rt),e.closePath();break;case"triangle":e.moveTo(n+Math.sin(p)*f,i-Math.cos(p)*f),p+=Rf,e.lineTo(n+Math.sin(p)*f,i-Math.cos(p)*f),p+=Rf,e.lineTo(n+Math.sin(p)*f,i-Math.cos(p)*f),e.closePath();break;case"rectRounded":l=f*.516,c=f-l,o=Math.cos(p+io)*c,a=Math.sin(p+io)*c,e.arc(n-o,i-a,l,p-Et,p-Mt),e.arc(n+a,i-o,l,p-Mt,p),e.arc(n+o,i+a,l,p,p+Mt),e.arc(n-a,i+o,l,p+Mt,p+Et),e.closePath();break;case"rect":if(!d){c=Math.SQRT1_2*f,u=r?r/2:c,e.rect(n-u,i-c,2*u,2*c);break}p+=io;case"rectRot":o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+a,i-o),e.lineTo(n+o,i+a),e.lineTo(n-a,i+o),e.closePath();break;case"crossRot":p+=io;case"cross":o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a),e.moveTo(n+a,i-o),e.lineTo(n-a,i+o);break;case"star":o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a),e.moveTo(n+a,i-o),e.lineTo(n-a,i+o),p+=io,o=Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a),e.moveTo(n+a,i-o),e.lineTo(n-a,i+o);break;case"line":o=r?r/2:Math.cos(p)*f,a=Math.sin(p)*f,e.moveTo(n-o,i-a),e.lineTo(n+o,i+a);break;case"dash":e.moveTo(n,i),e.lineTo(n+Math.cos(p)*f,i+Math.sin(p)*f);break}e.fill(),t.borderWidth>0&&e.stroke()}}function Yu(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function d0(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function p0(e){e.restore()}function m0(e,t,n,i,r){if(!t)return e.lineTo(n.x,n.y);if(r==="middle"){const s=(t.x+n.x)/2;e.lineTo(s,t.y),e.lineTo(s,n.y)}else r==="after"!=!!i?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function g0(e,t,n,i){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function Vc(e,t,n,i,r,s={}){const o=Rt(t)?t:[t],a=s.strokeWidth>0&&s.strokeColor!=="";let c,l;for(e.save(),e.font=r.string,y0(e,s),c=0;c<o.length;++c)l=o[c],a&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),lt(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(l,n,i,s.maxWidth)),e.fillText(l,n,i,s.maxWidth),_0(e,n,i,l,s),i+=r.lineHeight;e.restore()}function y0(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),lt(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function _0(e,t,n,i,r){if(r.strikethrough||r.underline){const s=e.measureText(i),o=t-s.actualBoundingBoxLeft,a=t+s.actualBoundingBoxRight,c=n-s.actualBoundingBoxAscent,l=n+s.actualBoundingBoxDescent,u=r.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=r.decorationWidth||2,e.moveTo(o,u),e.lineTo(a,u),e.stroke()}}function Wc(e,t){const{x:n,y:i,w:r,h:s,radius:o}=t;e.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-Mt,Et,!0),e.lineTo(n,i+s-o.bottomLeft),e.arc(n+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,Et,Mt,!0),e.lineTo(n+r-o.bottomRight,i+s),e.arc(n+r-o.bottomRight,i+s-o.bottomRight,o.bottomRight,Mt,0,!0),e.lineTo(n+r,i+o.topRight),e.arc(n+r-o.topRight,i+o.topRight,o.topRight,0,-Mt,!0),e.lineTo(n+o.topLeft,i)}const v0=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),b0=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function x0(e,t){const n=(""+e).match(v0);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const w0=e=>+e||0;function Zh(e,t){const n={},i=ut(t),r=i?Object.keys(t):t,s=ut(e)?i?o=>tt(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of r)n[o]=w0(s(o));return n}function Ym(e){return Zh(e,{top:"y",right:"x",bottom:"y",left:"x"})}function gs(e){return Zh(e,["topLeft","topRight","bottomLeft","bottomRight"])}function ri(e){const t=Ym(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function pn(e,t){e=e||{},t=t||ht.font;let n=tt(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let i=tt(e.style,t.style);i&&!(""+i).match(b0)&&(console.warn('Invalid font style specified: "'+i+'"'),i="");const r={family:tt(e.family,t.family),lineHeight:x0(tt(e.lineHeight,t.lineHeight),n),size:n,style:i,weight:tt(e.weight,t.weight),string:""};return r.string=u0(r),r}function Na(e,t,n,i){let r=!0,s,o,a;for(s=0,o=e.length;s<o;++s)if(a=e[s],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),r=!1),n!==void 0&&Rt(a)&&(a=a[n%a.length],r=!1),a!==void 0))return i&&!r&&(i.cacheable=!1),a}function M0(e,t,n){const{min:i,max:r}=e,s=Pm(t,(r-i)/2),o=(a,c)=>n&&a===0?0:a+c;return{min:o(i,-Math.abs(s)),max:o(r,s)}}function Nr(e,t){return Object.assign(Object.create(e),t)}function qm(e,t,n,i){const{iScale:r}=e,{key:s="r"}=this._parsing,o=new Array(i);let a,c,l,u;for(a=0,c=i;a<c;++a)l=a+n,u=t[l],o[a]={r:r.parse(xs(u,s),l)};return o}const E0=Number.EPSILON||1e-14,Ms=(e,t)=>t<e.length&&!e[t].skip&&e[t],Zm=e=>e==="x"?"y":"x";function S0(e,t,n,i){const r=e.skip?t:e,s=t,o=n.skip?t:n,a=Wu(s,r),c=Wu(o,s);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=i*l,d=i*u;return{previous:{x:s.x-h*(o.x-r.x),y:s.y-h*(o.y-r.y)},next:{x:s.x+d*(o.x-r.x),y:s.y+d*(o.y-r.y)}}}function T0(e,t,n){const i=e.length;let r,s,o,a,c,l=Ms(e,0);for(let u=0;u<i-1;++u)if(c=l,l=Ms(e,u+1),!(!c||!l)){if(Mo(t[u],0,E0)){n[u]=n[u+1]=0;continue}r=n[u]/t[u],s=n[u+1]/t[u],a=Math.pow(r,2)+Math.pow(s,2),!(a<=9)&&(o=3/Math.sqrt(a),n[u]=r*o*t[u],n[u+1]=s*o*t[u])}}function A0(e,t,n="x"){const i=Zm(n),r=e.length;let s,o,a,c=Ms(e,0);for(let l=0;l<r;++l){if(o=a,a=c,c=Ms(e,l+1),!a)continue;const u=a[n],h=a[i];o&&(s=(u-o[n])/3,a[`cp1${n}`]=u-s,a[`cp1${i}`]=h-s*t[l]),c&&(s=(c[n]-u)/3,a[`cp2${n}`]=u+s,a[`cp2${i}`]=h+s*t[l])}}function R0(e,t="x"){const n=Zm(t),i=e.length,r=Array(i).fill(0),s=Array(i);let o,a,c,l=Ms(e,0);for(o=0;o<i;++o)if(a=c,c=l,l=Ms(e,o+1),!!c){if(l){const u=l[t]-c[t];r[o]=u!==0?(l[n]-c[n])/u:0}s[o]=a?l?ii(r[o-1])!==ii(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}T0(e,r,s),A0(e,s,t)}function ka(e,t,n){return Math.max(Math.min(e,n),t)}function L0(e,t){let n,i,r,s,o,a=Yu(e[0],t);for(n=0,i=e.length;n<i;++n)o=s,s=a,a=n<i-1&&Yu(e[n+1],t),s&&(r=e[n],o&&(r.cp1x=ka(r.cp1x,t.left,t.right),r.cp1y=ka(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=ka(r.cp2x,t.left,t.right),r.cp2y=ka(r.cp2y,t.top,t.bottom)))}function P0(e,t,n,i,r){let s,o,a,c;if(t.spanGaps&&(e=e.filter(l=>!l.skip)),t.cubicInterpolationMode==="monotone")R0(e,r);else{let l=i?e[e.length-1]:e[0];for(s=0,o=e.length;s<o;++s)a=e[s],c=S0(l,a,e[Math.min(s+1,o-(i?0:1))%o],t.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,l=a}t.capBezierPoints&&L0(e,n)}(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e})();function gr(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function C0(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:i==="middle"?n<.5?e.y:t.y:i==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function I0(e,t,n,i){const r={x:e.cp2x,y:e.cp2y},s={x:t.cp1x,y:t.cp1y},o=gr(e,r,n),a=gr(r,s,n),c=gr(s,t,n),l=gr(o,a,n),u=gr(a,c,n);return gr(l,u,n)}const Hf=new Map;function D0(e,t){t=t||{};const n=e+JSON.stringify(t);let i=Hf.get(n);return i||(i=new Intl.NumberFormat(e,t),Hf.set(n,i)),i}function va(e,t,n){return D0(t,n).format(e)}const O0=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},F0=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function nu(e,t,n){return e?O0(t,n):F0()}function N0(e,t){let n,i;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=i)}function k0(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function Jm(e){return e==="angle"?{between:Uc,compare:Oy,normalize:Hn}:{between:Hc,compare:(t,n)=>t-n,normalize:t=>t}}function zf({start:e,end:t,count:n,loop:i,style:r}){return{start:e%n,end:t%n,loop:i&&(t-e+1)%n===0,style:r}}function B0(e,t,n){const{property:i,start:r,end:s}=n,{between:o,normalize:a}=Jm(i),c=t.length;let{start:l,end:u,loop:h}=e,d,f;if(h){for(l+=c,u+=c,d=0,f=c;d<f&&o(a(t[l%c][i]),r,s);++d)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:h,style:e.style}}function U0(e,t,n){if(!n)return[e];const{property:i,start:r,end:s}=n,o=t.length,{compare:a,between:c,normalize:l}=Jm(i),{start:u,end:h,loop:d,style:f}=B0(e,t,n),p=[];let y=!1,_=null,m,g,v;const b=()=>c(r,v,m)&&a(r,v)!==0,x=()=>a(s,m)===0||c(s,v,m),E=()=>y||b(),w=()=>!y||x();for(let P=u,A=u;P<=h;++P)g=t[P%o],!g.skip&&(m=l(g[i]),m!==v&&(y=c(m,r,s),_===null&&E()&&(_=a(m,r)===0?P:A),_!==null&&w()&&(p.push(zf({start:_,end:P,loop:d,count:o,style:f})),_=null),A=P,v=m));return _!==null&&p.push(zf({start:_,end:h,loop:d,count:o,style:f})),p}function H0(e,t){const n=[],i=e.segments;for(let r=0;r<i.length;r++){const s=U0(i[r],e.points,t);s.length&&n.push(...s)}return n}function z0(e,t,n,i){let r=0,s=t-1;if(n&&!i)for(;r<t&&!e[r].skip;)r++;for(;r<t&&e[r].skip;)r++;for(r%=t,n&&(s+=r);s>r&&e[s%t].skip;)s--;return s%=t,{start:r,end:s}}function G0(e,t,n,i){const r=e.length,s=[];let o=t,a=e[t],c;for(c=t+1;c<=n;++c){const l=e[c%r];l.skip||l.stop?a.skip||(i=!1,s.push({start:t%r,end:(c-1)%r,loop:i}),t=o=l.stop?c:null):(o=c,a.skip&&(t=c)),a=l}return o!==null&&s.push({start:t%r,end:o%r,loop:i}),s}function V0(e,t){const n=e.points,i=e.options.spanGaps,r=n.length;if(!r)return[];const s=!!e._loop,{start:o,end:a}=z0(n,r,s,i);if(i===!0)return Gf(e,[{start:o,end:a,loop:s}],n,t);const c=a<o?a+r:a,l=!!e._fullLoop&&o===0&&a===r-1;return Gf(e,G0(n,o,c,l),n,t)}function Gf(e,t,n,i){return!i||!i.setContext||!n?t:W0(e,t,n,i)}function W0(e,t,n,i){const r=e._chart.getContext(),s=Vf(e.options),{_datasetIndex:o,options:{spanGaps:a}}=e,c=n.length,l=[];let u=s,h=t[0].start,d=h;function f(p,y,_,m){const g=a?-1:1;if(p!==y){for(p+=c;n[p%c].skip;)p-=g;for(;n[y%c].skip;)y+=g;p%c!==y%c&&(l.push({start:p%c,end:y%c,loop:_,style:m}),u=m,h=y%c)}}for(const p of t){h=a?h:p.start;let y=n[h%c],_;for(d=h+1;d<=p.end;d++){const m=n[d%c];_=Vf(i.setContext(Nr(r,{type:"segment",p0:y,p1:m,p0DataIndex:(d-1)%c,p1DataIndex:d%c,datasetIndex:o}))),j0(_,u)&&f(h,d-1,p.loop,u),y=m,u=_}h<d-1&&f(h,d-1,p.loop,u)}return l}function Vf(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function j0(e,t){return t&&JSON.stringify(e)!==JSON.stringify(t)}/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */class X0{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,i,r){const s=n.listeners[r],o=n.duration;s.forEach(a=>a({chart:t,initial:n.initial,numSteps:o,currentStep:Math.min(i-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=By.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let o=s.length-1,a=!1,c;for(;o>=0;--o)c=s[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(t),a=!0):(s[o]=s[s.length-1],s.pop());a&&(r.draw(),this._notify(r,i,t,"progress")),s.length||(i.running=!1,this._notify(r,i,t,"complete"),i.initial=!1),n+=s.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let i=n.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,i)),i}listen(t,n,i){this._getAnims(t).listeners[n].push(i)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);!n||(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Y0=new X0;const Wf="transparent",q0={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const i=Uf(e||Wf),r=i.valid&&Uf(t||Wf);return r&&r.valid?r.mix(i,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class Z0{constructor(t,n,i,r){const s=n[i];r=Na([t.to,r,s,t.from]);const o=Na([t.from,s,r]);this._active=!0,this._fn=t.fn||q0[t.type||typeof o],this._easing=Eo[t.easing]||Eo.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=i,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],s=i-this._start,o=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=Na([t.to,n,r,t.from]),this._from=Na([t.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,i=this._duration,r=this._prop,s=this._from,o=this._loop,a=this._to;let c;if(this._active=s!==a&&(o||n<i),!this._active){this._target[r]=a,this._notify(!0);return}if(n<0){this._target[r]=s;return}c=n/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[r]=this._fn(s,a,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,i)=>{t.push({res:n,rej:i})})}_notify(t){const n=t?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}const J0=["x","y","borderWidth","radius","tension"],K0=["color","borderColor","backgroundColor"];ht.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const Q0=Object.keys(ht.animation);ht.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"});ht.set("animations",{colors:{type:"color",properties:K0},numbers:{type:"number",properties:J0}});ht.describe("animations",{_fallback:"animation"});ht.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}});class Km{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!ut(t))return;const n=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!ut(r))return;const s={};for(const o of Q0)s[o]=r[o];(Rt(r.properties)&&r.properties||[i]).forEach(o=>{(o===i||!n.has(o))&&n.set(o,s)})})}_animateOptions(t,n){const i=n.options,r=e_(t,i);if(!r)return[];const s=this._createAnimations(r,i);return i.$shared&&$0(t.options.$animations,i).then(()=>{t.options=i},()=>{}),s}_createAnimations(t,n){const i=this._properties,r=[],s=t.$animations||(t.$animations={}),o=Object.keys(n),a=Date.now();let c;for(c=o.length-1;c>=0;--c){const l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){r.push(...this._animateOptions(t,n));continue}const u=n[l];let h=s[l];const d=i.get(l);if(h)if(d&&h.active()){h.update(d,u,a);continue}else h.cancel();if(!d||!d.duration){t[l]=u;continue}s[l]=h=new Z0(d,t,l,u),r.push(h)}return r}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const i=this._createAnimations(t,n);if(i.length)return Y0.add(this._chart,i),!0}}function $0(e,t){const n=[],i=Object.keys(t);for(let r=0;r<i.length;r++){const s=e[i[r]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function e_(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function jf(e,t){const n=e&&e.options||{},i=n.reverse,r=n.min===void 0?t:0,s=n.max===void 0?t:0;return{start:i?s:r,end:i?r:s}}function t_(e,t,n){if(n===!1)return!1;const i=jf(e,n),r=jf(t,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function n_(e){let t,n,i,r;return ut(e)?(t=e.top,n=e.right,i=e.bottom,r=e.left):t=n=i=r=e,{top:t,right:n,bottom:i,left:r,disabled:e===!1}}function Qm(e,t){const n=[],i=e._getSortedDatasetMetas(t);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function Xf(e,t,n,i={}){const r=e.keys,s=i.mode==="single";let o,a,c,l;if(t!==null){for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===n){if(i.all)continue;break}l=e.values[c],Vt(l)&&(s||t===0||ii(t)===ii(l))&&(t+=l)}return t}}function i_(e){const t=Object.keys(e),n=new Array(t.length);let i,r,s;for(i=0,r=t.length;i<r;++i)s=t[i],n[i]={x:s,y:e[s]};return n}function Yf(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function r_(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function s_(e){const{min:t,max:n,minDefined:i,maxDefined:r}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function o_(e,t,n){const i=e[t]||(e[t]={});return i[n]||(i[n]={})}function qf(e,t,n,i){for(const r of t.getMatchingVisibleMetas(i).reverse()){const s=e[r.index];if(n&&s>0||!n&&s<0)return r.index}return null}function Zf(e,t){const{chart:n,_cachedMeta:i}=e,r=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=i,c=s.axis,l=o.axis,u=r_(s,o,i),h=t.length;let d;for(let f=0;f<h;++f){const p=t[f],{[c]:y,[l]:_}=p,m=p._stacks||(p._stacks={});d=m[l]=o_(r,u,y),d[a]=_,d._top=qf(d,o,!0,i.type),d._bottom=qf(d,o,!1,i.type)}}function iu(e,t){const n=e.scales;return Object.keys(n).filter(i=>n[i].axis===t).shift()}function a_(e,t){return Nr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function c_(e,t,n){return Nr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function ro(e,t){const n=e.controller.index,i=e.vScale&&e.vScale.axis;if(!!i){t=t||e._parsed;for(const r of t){const s=r._stacks;if(!s||s[i]===void 0||s[i][n]===void 0)return;delete s[i][n]}}}const ru=e=>e==="reset"||e==="none",Jf=(e,t)=>t?e:Object.assign({},e),l_=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:Qm(n,!0),values:null};class Vn{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Yf(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&ro(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(h,d,f,p)=>h==="x"?d:h==="r"?p:f,s=n.xAxisID=tt(i.xAxisID,iu(t,"x")),o=n.yAxisID=tt(i.yAxisID,iu(t,"y")),a=n.rAxisID=tt(i.rAxisID,iu(t,"r")),c=n.indexAxis,l=n.iAxisID=r(c,s,o,a),u=n.vAxisID=r(c,o,s,a);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(l),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Cf(this._data,this),t._stacked&&ro(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),i=this._data;if(ut(n))this._data=i_(n);else if(i!==n){if(i){Cf(i,this);const r=this._cachedMeta;ro(r),r._parsed=[]}n&&Object.isExtensible(n)&&ky(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const s=n._stacked;n._stacked=Yf(n.vScale,n),n.stack!==i.stack&&(r=!0,ro(n),n.stack=i.stack),this._resyncElements(t),(r||s!==n._stacked)&&Zf(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:i,_data:r}=this,{iScale:s,_stacked:o}=i,a=s.axis;let c=t===0&&n===r.length?!0:i._sorted,l=t>0&&i._parsed[t-1],u,h,d;if(this._parsing===!1)i._parsed=r,i._sorted=!0,d=r;else{Rt(r[t])?d=this.parseArrayData(i,r,t,n):ut(r[t])?d=this.parseObjectData(i,r,t,n):d=this.parsePrimitiveData(i,r,t,n);const f=()=>h[a]===null||l&&h[a]<l[a];for(u=0;u<n;++u)i._parsed[u+t]=h=d[u],c&&(f()&&(c=!1),l=h);i._sorted=c}o&&Zf(this,d)}parsePrimitiveData(t,n,i,r){const{iScale:s,vScale:o}=t,a=s.axis,c=o.axis,l=s.getLabels(),u=s===o,h=new Array(r);let d,f,p;for(d=0,f=r;d<f;++d)p=d+i,h[d]={[a]:u||s.parse(l[p],p),[c]:o.parse(n[p],p)};return h}parseArrayData(t,n,i,r){const{xScale:s,yScale:o}=t,a=new Array(r);let c,l,u,h;for(c=0,l=r;c<l;++c)u=c+i,h=n[u],a[c]={x:s.parse(h[0],u),y:o.parse(h[1],u)};return a}parseObjectData(t,n,i,r){const{xScale:s,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(r);let u,h,d,f;for(u=0,h=r;u<h;++u)d=u+i,f=n[d],l[u]={x:s.parse(xs(f,a),d),y:o.parse(xs(f,c),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,i){const r=this.chart,s=this._cachedMeta,o=n[t.axis],a={keys:Qm(r,!0),values:n._stacks[t.axis]};return Xf(a,o,s.index,{mode:i})}updateRangeFromParsed(t,n,i,r){const s=i[n.axis];let o=s===null?NaN:s;const a=r&&i._stacks[n.axis];r&&a&&(r.values=a,o=Xf(r,s,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,n){const i=this._cachedMeta,r=i._parsed,s=i._sorted&&t===i.iScale,o=r.length,a=this._getOtherScale(t),c=l_(n,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=s_(a);let d,f;function p(){f=r[d];const y=f[a.axis];return!Vt(f[t.axis])||u>y||h<y}for(d=0;d<o&&!(!p()&&(this.updateRangeFromParsed(l,t,f,c),s));++d);if(s){for(d=o-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(l,t,f,c);break}}return l}getAllParsedValues(t){const n=this._cachedMeta._parsed,i=[];let r,s,o;for(r=0,s=n.length;r<s;++r)o=n[r][t.axis],Vt(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,i=n.iScale,r=n.vScale,s=this.getParsed(t);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=n_(tt(this.options.clip,t_(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],s=n.chartArea,o=[],a=this._drawStart||0,c=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(t,s,a,c),u=a;u<a+c;++u){const h=r[u];h.hidden||(h.active&&l?o.push(h):h.draw(t,s))}for(u=0;u<o.length;++u)o[u].draw(t,s)}getStyle(t,n){const i=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,n,i){const r=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];s=o.$context||(o.$context=c_(this.getContext(),t,o)),s.parsed=this.getParsed(t),s.raw=r.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=a_(this.chart.getContext(),this.index)),s.dataset=r,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=i,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",i){const r=n==="active",s=this._cachedDataOpts,o=t+"-"+n,a=s[o],c=this.enableOptionSharing&&Om(i);if(a)return Jf(a,c);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,t),h=r?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),u),f=Object.keys(ht.elements[t]),p=()=>this.getContext(i,r),y=l.resolveNamedOptions(d,f,p,h);return y.$shared&&(y.$shared=c,s[o]=Object.freeze(Jf(y,c))),y}_resolveAnimations(t,n,i){const r=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,a=s[o];if(a)return a;let c;if(r.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),d=u.getOptionScopes(this.getDataset(),h);c=u.createResolver(d,this.getContext(t,i,n))}const l=new Km(r,c&&c.animations);return c&&c._cacheable&&(s[o]=Object.freeze(l)),l}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||ru(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const i=this.resolveDataElementOptions(t,n),r=this._sharedOptions,s=this.getSharedOptions(i),o=this.includeOptions(n,s)||s!==r;return this.updateSharedOptions(s,n,i),{sharedOptions:s,includeOptions:o}}updateElement(t,n,i,r){ru(r)?Object.assign(t,i):this._resolveAnimations(n,r).update(t,i)}updateSharedOptions(t,n,i){t&&!ru(n)&&this._resolveAnimations(void 0,n).update(t,i)}_setStyle(t,n,i,r){t.active=r;const s=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(t,{options:!r&&this.getSharedOptions(s)||s})}removeHoverStyle(t,n,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,n,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,i=this._cachedMeta.data;for(const[a,c,l]of this._syncList)this[a](c,l);this._syncList=[];const r=i.length,s=n.length,o=Math.min(s,r);o&&this.parse(0,o),s>r?this._insertElements(r,s-r,t):s<r&&this._removeElements(s,r-s)}_insertElements(t,n,i=!0){const r=this._cachedMeta,s=r.data,o=t+n;let a;const c=l=>{for(l.length+=n,a=l.length-1;a>=o;a--)l[a]=l[a-n]};for(c(s),a=t;a<o;++a)s[a]=new this.dataElementType;this._parsing&&c(r._parsed),this.parse(t,n),i&&this.updateElements(s,t,n,"reset")}updateElements(t,n,i,r){}_removeElements(t,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(t,n);i._stacked&&ro(i,r)}i.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,i,r]=t;this[n](i,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Vn.defaults={};Vn.prototype.datasetElementType=null;Vn.prototype.dataElementType=null;function u_(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let i=[];for(let r=0,s=n.length;r<s;r++)i=i.concat(n[r].controller.getAllParsedValues(e));e._cache.$bar=Bm(i.sort((r,s)=>r-s))}return e._cache.$bar}function h_(e){const t=e.iScale,n=u_(t,e.type);let i=t._length,r,s,o,a;const c=()=>{o===32767||o===-32768||(Om(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(r=0,s=n.length;r<s;++r)o=t.getPixelForValue(n[r]),c();for(a=void 0,r=0,s=t.ticks.length;r<s;++r)o=t.getPixelForTick(r),c();return i}function f_(e,t,n,i){const r=n.barThickness;let s,o;return lt(r)?(s=t.min*n.categoryPercentage,o=n.barPercentage):(s=r*i,o=1),{chunk:s/i,ratio:o,start:t.pixels[e]-s/2}}function d_(e,t,n,i){const r=t.pixels,s=r[e];let o=e>0?r[e-1]:null,a=e<r.length-1?r[e+1]:null;const c=n.categoryPercentage;o===null&&(o=s-(a===null?t.end-t.start:a-s)),a===null&&(a=s+s-o);const l=s-(s-Math.min(o,a))/2*c;return{chunk:Math.abs(a-o)/2*c/i,ratio:n.barPercentage,start:l}}function p_(e,t,n,i){const r=n.parse(e[0],i),s=n.parse(e[1],i),o=Math.min(r,s),a=Math.max(r,s);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:r,end:s,min:o,max:a}}function $m(e,t,n,i){return Rt(e)?p_(e,t,n,i):t[n.axis]=n.parse(e,i),t}function Kf(e,t,n,i){const r=e.iScale,s=e.vScale,o=r.getLabels(),a=r===s,c=[];let l,u,h,d;for(l=n,u=n+i;l<u;++l)d=t[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push($m(d,h,s,l));return c}function su(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function m_(e,t,n){return e!==0?ii(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function g_(e){let t,n,i,r,s;return e.horizontal?(t=e.base>e.x,n="left",i="right"):(t=e.base<e.y,n="bottom",i="top"),t?(r="end",s="start"):(r="start",s="end"),{start:n,end:i,reverse:t,top:r,bottom:s}}function y_(e,t,n,i){let r=t.borderSkipped;const s={};if(!r){e.borderSkipped=s;return}if(r===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:c,top:l,bottom:u}=g_(e);r==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===i?r=l:(n._bottom||0)===i?r=u:(s[Qf(u,o,a,c)]=!0,r=l)),s[Qf(r,o,a,c)]=!0,e.borderSkipped=s}function Qf(e,t,n,i){return i?(e=__(e,t,n),e=$f(e,n,t)):e=$f(e,t,n),e}function __(e,t,n){return e===t?n:e===n?t:e}function $f(e,t,n){return e==="start"?t:e==="end"?n:e}function v_(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Jh extends Vn{parsePrimitiveData(t,n,i,r){return Kf(t,n,i,r)}parseArrayData(t,n,i,r){return Kf(t,n,i,r)}parseObjectData(t,n,i,r){const{iScale:s,vScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=s.axis==="x"?a:c,u=o.axis==="x"?a:c,h=[];let d,f,p,y;for(d=i,f=i+r;d<f;++d)y=n[d],p={},p[s.axis]=s.parse(xs(y,l),d),h.push($m(xs(y,u),p,o,d));return h}updateRangeFromParsed(t,n,i,r){super.updateRangeFromParsed(t,n,i,r);const s=i._custom;s&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,s.min),t.max=Math.max(t.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:i,vScale:r}=n,s=this.getParsed(t),o=s._custom,a=su(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(s[r.axis]);return{label:""+i.getLabelForValue(s[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,i,r){const s=r==="reset",{index:o,_cachedMeta:{vScale:a}}=this,c=a.getBasePixel(),l=a.isHorizontal(),u=this._getRuler(),{sharedOptions:h,includeOptions:d}=this._getSharedOptions(n,r);for(let f=n;f<n+i;f++){const p=this.getParsed(f),y=s||lt(p[a.axis])?{base:c,head:c}:this._calculateBarValuePixels(f),_=this._calculateBarIndexPixels(f,u),m=(p._stacks||{})[a.axis],g={horizontal:l,base:y.base,enableBorderRadius:!m||su(p._custom)||o===m._top||o===m._bottom,x:l?y.head:_.center,y:l?_.center:y.head,height:l?_.size:Math.abs(y.size),width:l?Math.abs(y.size):_.size};d&&(g.options=h||this.resolveDataElementOptions(f,t[f].active?"active":r));const v=g.options||t[f].options;y_(g,v,m,o),v_(g,v,u.ratio),this.updateElement(t[f],f,g,r)}}_getStacks(t,n){const{iScale:i}=this._cachedMeta,r=i.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),s=i.options.stacked,o=[],a=c=>{const l=c.controller.getParsed(n),u=l&&l[c.vScale.axis];if(lt(u)||isNaN(u))return!0};for(const c of r)if(!(n!==void 0&&a(c))&&((s===!1||o.indexOf(c.stack)===-1||s===void 0&&c.stack===void 0)&&o.push(c.stack),c.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,i){const r=this._getStacks(t,i),s=n!==void 0?r.indexOf(n):-1;return s===-1?r.length-1:s}_getRuler(){const t=this.options,n=this._cachedMeta,i=n.iScale,r=[];let s,o;for(s=0,o=n.data.length;s<o;++s)r.push(i.getPixelForValue(this.getParsed(s)[i.axis],s));const a=t.barThickness;return{min:a||h_(n),pixels:r,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:i},options:{base:r,minBarLength:s}}=this,o=r||0,a=this.getParsed(t),c=a._custom,l=su(c);let u=a[n.axis],h=0,d=i?this.applyStack(n,a,i):u,f,p;d!==u&&(h=d-u,d=u),l&&(u=c.barStart,d=c.barEnd-c.barStart,u!==0&&ii(u)!==ii(c.barEnd)&&(h=0),h+=u);const y=!lt(r)&&!l?r:h;let _=n.getPixelForValue(y);if(this.chart.getDataVisibility(t)?f=n.getPixelForValue(h+d):f=_,p=f-_,Math.abs(p)<s){p=m_(p,n,o)*s,u===o&&(_-=p/2);const m=n.getPixelForDecimal(0),g=n.getPixelForDecimal(1),v=Math.min(m,g),b=Math.max(m,g);_=Math.max(Math.min(_,b),v),f=_+p}if(_===n.getPixelForValue(o)){const m=ii(p)*n.getLineWidthForValue(o)/2;_+=m,p-=m}return{size:p,base:_,head:f,center:f+p/2}}_calculateBarIndexPixels(t,n){const i=n.scale,r=this.options,s=r.skipNull,o=tt(r.maxBarThickness,1/0);let a,c;if(n.grouped){const l=s?this._getStackCount(t):n.stackCount,u=r.barThickness==="flex"?d_(t,n,r,l):f_(t,n,r,l),h=this._getStackIndex(this.index,this._cachedMeta.stack,s?t:void 0);a=u.start+u.chunk*h+u.chunk/2,c=Math.min(o,u.chunk*u.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),c=Math.min(o,n.min*n.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this._cachedMeta,n=t.vScale,i=t.data,r=i.length;let s=0;for(;s<r;++s)this.getParsed(s)[n.axis]!==null&&i[s].draw(this._ctx)}}Jh.id="bar";Jh.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};Jh.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Kh extends Vn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,i,r){const s=super.parsePrimitiveData(t,n,i,r);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+i).radius;return s}parseArrayData(t,n,i,r){const s=super.parseArrayData(t,n,i,r);for(let o=0;o<s.length;o++){const a=n[i+o];s[o]._custom=tt(a[2],this.resolveDataElementOptions(o+i).radius)}return s}parseObjectData(t,n,i,r){const s=super.parseObjectData(t,n,i,r);for(let o=0;o<s.length;o++){const a=n[i+o];s[o]._custom=tt(a&&a.r&&+a.r,this.resolveDataElementOptions(o+i).radius)}return s}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let i=t.length-1;i>=0;--i)n=Math.max(n,t[i].size(this.resolveDataElementOptions(i))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,{xScale:i,yScale:r}=n,s=this.getParsed(t),o=i.getLabelForValue(s.x),a=r.getLabelForValue(s.y),c=s._custom;return{label:n.label,value:"("+o+", "+a+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,i,r){const s=r==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:c,includeOptions:l}=this._getSharedOptions(n,r),u=o.axis,h=a.axis;for(let d=n;d<n+i;d++){const f=t[d],p=!s&&this.getParsed(d),y={},_=y[u]=s?o.getPixelForDecimal(.5):o.getPixelForValue(p[u]),m=y[h]=s?a.getBasePixel():a.getPixelForValue(p[h]);y.skip=isNaN(_)||isNaN(m),l&&(y.options=c||this.resolveDataElementOptions(d,f.active?"active":r),s&&(y.options.radius=0)),this.updateElement(f,d,y,r)}}resolveDataElementOptions(t,n){const i=this.getParsed(t);let r=super.resolveDataElementOptions(t,n);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const s=r.radius;return n!=="active"&&(r.radius=0),r.radius+=tt(i&&i._custom,s),r}}Kh.id="bubble";Kh.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};Kh.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function b_(e,t,n){let i=1,r=1,s=0,o=0;if(t<rt){const a=e,c=a+t,l=Math.cos(a),u=Math.sin(a),h=Math.cos(c),d=Math.sin(c),f=(v,b,x)=>Uc(v,a,c,!0)?1:Math.max(b,b*n,x,x*n),p=(v,b,x)=>Uc(v,a,c,!0)?-1:Math.min(b,b*n,x,x*n),y=f(0,l,h),_=f(Mt,u,d),m=p(Et,l,h),g=p(Et+Mt,u,d);i=(y-m)/2,r=(_-g)/2,s=-(y+m)/2,o=-(_+g)/2}return{ratioX:i,ratioY:r,offsetX:s,offsetY:o}}class ba extends Vn{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const i=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=i;else{let s=c=>+i[c];if(ut(i[t])){const{key:c="value"}=this._parsing;s=l=>+xs(i[l],c)}let o,a;for(o=t,a=t+n;o<a;++o)r._parsed[o]=s(o)}}_getRotation(){return zn(this.options.rotation-90)}_getCircumference(){return zn(this.options.circumference)}_getRotationExtents(){let t=rt,n=-rt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const r=this.chart.getDatasetMeta(i).controller,s=r._getRotation(),o=r._getCircumference();t=Math.min(t,s),n=Math.max(n,s+o)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:i}=n,r=this._cachedMeta,s=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(Ey(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:u,rotation:h}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:p,offsetY:y}=b_(h,u,c),_=(i.width-o)/d,m=(i.height-o)/f,g=Math.max(Math.min(_,m)/2,0),v=Pm(this.options.radius,g),b=Math.max(v*c,0),x=(v-b)/this._getVisibleDatasetWeightTotal();this.offsetX=p*v,this.offsetY=y*v,r.total=this.calculateTotal(),this.outerRadius=v-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*l,0),this.updateElements(s,0,s.length,t)}_circumference(t,n){const i=this.options,r=this._cachedMeta,s=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*s/rt)}updateElements(t,n,i,r){const s=r==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,u=(a.left+a.right)/2,h=(a.top+a.bottom)/2,d=s&&l.animateScale,f=d?0:this.innerRadius,p=d?0:this.outerRadius,{sharedOptions:y,includeOptions:_}=this._getSharedOptions(n,r);let m=this._getRotation(),g;for(g=0;g<n;++g)m+=this._circumference(g,s);for(g=n;g<n+i;++g){const v=this._circumference(g,s),b=t[g],x={x:u+this.offsetX,y:h+this.offsetY,startAngle:m,endAngle:m+v,circumference:v,outerRadius:p,innerRadius:f};_&&(x.options=y||this.resolveDataElementOptions(g,b.active?"active":r)),m+=v,this.updateElement(b,g,x,r)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let i=0,r;for(r=0;r<n.length;r++){const s=t._parsed[r];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(r)&&!n[r].hidden&&(i+=Math.abs(s))}return i}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?rt*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],s=va(n._parsed[t],i.options.locale);return{label:r[t]||"",value:s}}getMaxBorderWidth(t){let n=0;const i=this.chart;let r,s,o,a,c;if(!t){for(r=0,s=i.data.datasets.length;r<s;++r)if(i.isDatasetVisible(r)){o=i.getDatasetMeta(r),t=o.data,a=o.controller;break}}if(!t)return 0;for(r=0,s=t.length;r<s;++r)c=a.resolveDataElementOptions(r),c.borderAlign!=="inner"&&(n=Math.max(n,c.borderWidth||0,c.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let i=0,r=t.length;i<r;++i){const s=this.resolveDataElementOptions(i);n=Math.max(n,s.offset||0,s.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(t){return Math.max(tt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}ba.id="doughnut";ba.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};ba.descriptors={_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"};ba.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n}}=e.legend.options;return t.labels.map((i,r)=>{const o=e.getDatasetMeta(0).controller.getStyle(r);return{text:i,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(r),index:r}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(e){let t=e.label;const n=": "+e.formattedValue;return Rt(t)?(t=t.slice(),t[0]+=n):t+=n,t}}}}};class Qh extends Vn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:a,count:c}=Um(n,r,o);this._drawStart=a,this._drawCount=c,Hm(n)&&(a=0,c=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(r,a,c,t)}updateElements(t,n,i,r){const s=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,r),d=o.axis,f=a.axis,{spanGaps:p,segment:y}=this.options,_=ws(p)?p:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||s||r==="none";let g=n>0&&this.getParsed(n-1);for(let v=n;v<n+i;++v){const b=t[v],x=this.getParsed(v),E=m?b:{},w=lt(x[f]),P=E[d]=o.getPixelForValue(x[d],v),A=E[f]=s||w?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,x,c):x[f],v);E.skip=isNaN(P)||isNaN(A)||w,E.stop=v>0&&Math.abs(x[d]-g[d])>_,y&&(E.parsed=x,E.raw=l.data[v]),h&&(E.options=u||this.resolveDataElementOptions(v,b.active?"active":r)),m||this.updateElement(b,v,E,r),g=x}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,i=n.options&&n.options.borderWidth||0,r=t.data||[];if(!r.length)return i;const s=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,s,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Qh.id="line";Qh.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};Qh.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class $h extends Vn{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],s=va(n._parsed[t].r,i.options.locale);return{label:r[t]||"",value:s}}parseObjectData(t,n,i,r){return qm.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,r)=>{const s=this.getParsed(r).r;!isNaN(s)&&this.chart.getDataVisibility(r)&&(s<n.min&&(n.min=s),s>n.max&&(n.max=s))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,i=t.options,r=Math.min(n.right-n.left,n.bottom-n.top),s=Math.max(r/2,0),o=Math.max(i.cutoutPercentage?s/100*i.cutoutPercentage:1,0),a=(s-o)/t.getVisibleDatasetCount();this.outerRadius=s-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,n,i,r){const s=r==="reset",o=this.chart,c=o.options.animation,l=this._cachedMeta.rScale,u=l.xCenter,h=l.yCenter,d=l.getIndexAngle(0)-.5*Et;let f=d,p;const y=360/this.countVisibleElements();for(p=0;p<n;++p)f+=this._computeAngle(p,r,y);for(p=n;p<n+i;p++){const _=t[p];let m=f,g=f+this._computeAngle(p,r,y),v=o.getDataVisibility(p)?l.getDistanceFromCenterForValue(this.getParsed(p).r):0;f=g,s&&(c.animateScale&&(v=0),c.animateRotate&&(m=g=d));const b={x:u,y:h,innerRadius:0,outerRadius:v,startAngle:m,endAngle:g,options:this.resolveDataElementOptions(p,_.active?"active":r)};this.updateElement(_,p,b,r)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((i,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&n++}),n}_computeAngle(t,n,i){return this.chart.getDataVisibility(t)?zn(this.resolveDataElementOptions(t,n).angle||i):0}}$h.id="polarArea";$h.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};$h.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:n}}=e.legend.options;return t.labels.map((i,r)=>{const o=e.getDatasetMeta(0).controller.getStyle(r);return{text:i,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(r),index:r}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(e){return e.chart.data.labels[e.dataIndex]+": "+e.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class eg extends ba{}eg.id="pie";eg.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class ef extends Vn{getLabelAndValue(t){const n=this._cachedMeta.vScale,i=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(t,n,i,r){return qm.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta,i=n.dataset,r=n.data||[],s=n.iScale.getLabels();if(i.points=r,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:s.length===r.length,options:o};this.updateElement(i,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,n,i,r){const s=this._cachedMeta.rScale,o=r==="reset";for(let a=n;a<n+i;a++){const c=t[a],l=this.resolveDataElementOptions(a,c.active?"active":r),u=s.getPointPositionForValue(a,this.getParsed(a).r),h=o?s.xCenter:u.x,d=o?s.yCenter:u.y,f={x:h,y:d,angle:u.angle,skip:isNaN(h)||isNaN(d),options:l};this.updateElement(c,a,f,r)}}}ef.id="radar";ef.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};ef.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Ai{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}hasValue(){return ws(this.x)&&ws(this.y)}getProps(t,n){const i=this.$animations;if(!n||!i)return this;const r={};return t.forEach(s=>{r[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),r}}Ai.defaults={};Ai.defaultRoutes=void 0;const tg={values(e){return Rt(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const i=this.chart.options.locale;let r,s=e;if(n.length>1){const l=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(l<1e-4||l>1e15)&&(r="scientific"),s=x_(e,n)}const o=An(Math.abs(s)),a=Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),va(e,i,c)},logarithmic(e,t,n){if(e===0)return"0";const i=e/Math.pow(10,Math.floor(An(e)));return i===1||i===2||i===5?tg.numeric.call(this,e,t,n):""}};function x_(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var kl={formatters:tg};ht.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:kl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});ht.route("scale.ticks","color","","color");ht.route("scale.grid","color","","borderColor");ht.route("scale.grid","borderColor","","borderColor");ht.route("scale.title","color","","color");ht.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"});ht.describe("scales",{_fallback:"scale"});ht.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"});function w_(e,t){const n=e.options.ticks,i=n.maxTicksLimit||M_(e),r=n.major.enabled?S_(t):[],s=r.length,o=r[0],a=r[s-1],c=[];if(s>i)return T_(t,c,r,s/i),c;const l=E_(r,t,i);if(s>0){let u,h;const d=s>1?Math.round((a-o)/(s-1)):null;for(Ba(t,c,l,lt(d)?0:o-d,o),u=0,h=s-1;u<h;u++)Ba(t,c,l,r[u],r[u+1]);return Ba(t,c,l,a,lt(d)?t.length:a+d),c}return Ba(t,c,l),c}function M_(e){const t=e.options.offset,n=e._tickSize(),i=e._length/n+(t?0:1),r=e._maxLength/n;return Math.floor(Math.min(i,r))}function E_(e,t,n){const i=A_(e),r=t.length/n;if(!i)return Math.max(r,1);const s=Cy(i);for(let o=0,a=s.length-1;o<a;o++){const c=s[o];if(c>r)return c}return Math.max(r,1)}function S_(e){const t=[];let n,i;for(n=0,i=e.length;n<i;n++)e[n].major&&t.push(n);return t}function T_(e,t,n,i){let r=0,s=n[0],o;for(i=Math.ceil(i),o=0;o<e.length;o++)o===s&&(t.push(e[o]),r++,s=n[r*i])}function Ba(e,t,n,i,r){const s=tt(i,0),o=Math.min(tt(r,e.length),e.length);let a=0,c,l,u;for(n=Math.ceil(n),r&&(c=r-i,n=c/Math.floor(c/n)),u=s;u<0;)a++,u=Math.round(s+a*n);for(l=Math.max(s,0);l<o;l++)l===u&&(t.push(e[l]),a++,u=Math.round(s+a*n))}function A_(e){const t=e.length;let n,i;if(t<2)return!1;for(i=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==i)return!1;return i}const R_=e=>e==="left"?"right":e==="right"?"left":e,ed=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n;function td(e,t){const n=[],i=e.length/t,r=e.length;let s=0;for(;s<r;s+=i)n.push(e[Math.floor(s)]);return n}function L_(e,t,n){const i=e.ticks.length,r=Math.min(t,i-1),s=e._startPixel,o=e._endPixel,a=1e-6;let c=e.getPixelForTick(r),l;if(!(n&&(i===1?l=Math.max(c-s,o-c):t===0?l=(e.getPixelForTick(1)-c)/2:l=(c-e.getPixelForTick(r-1))/2,c+=r<t?l:-l,c<s-a||c>o+a)))return c}function P_(e,t){en(e,n=>{const i=n.gc,r=i.length/2;let s;if(r>t){for(s=0;s<r;++s)delete n.data[i[s]];i.splice(0,r)}})}function so(e){return e.drawTicks?e.tickLength:0}function nd(e,t){if(!e.display)return 0;const n=pn(e.font,t),i=ri(e.padding);return(Rt(e.text)?e.text.length:1)*n.lineHeight+i.height}function C_(e,t){return Nr(e,{scale:t,type:"scale"})}function I_(e,t,n){return Nr(e,{tick:n,index:t,type:"tick"})}function D_(e,t,n){let i=Uy(e);return(n&&t!=="right"||!n&&t==="right")&&(i=R_(i)),i}function O_(e,t,n,i){const{top:r,left:s,bottom:o,right:a,chart:c}=e,{chartArea:l,scales:u}=c;let h=0,d,f,p;const y=o-r,_=a-s;if(e.isHorizontal()){if(f=If(i,s,a),ut(n)){const m=Object.keys(n)[0],g=n[m];p=u[m].getPixelForValue(g)+y-t}else n==="center"?p=(l.bottom+l.top)/2+y-t:p=ed(e,n,t);d=a-s}else{if(ut(n)){const m=Object.keys(n)[0],g=n[m];f=u[m].getPixelForValue(g)-_+t}else n==="center"?f=(l.left+l.right)/2-_+t:f=ed(e,n,t);p=If(i,o,r),h=n==="left"?-Mt:Mt}return{titleX:f,titleY:p,maxWidth:d,rotation:h}}class kr extends Ai{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return t=Sn(t,Number.POSITIVE_INFINITY),n=Sn(n,Number.NEGATIVE_INFINITY),i=Sn(i,Number.POSITIVE_INFINITY),r=Sn(r,Number.NEGATIVE_INFINITY),{min:Sn(t,i),max:Sn(n,r),minDefined:Vt(t),maxDefined:Vt(n)}}getMinMax(t){let{min:n,max:i,minDefined:r,maxDefined:s}=this.getUserBounds(),o;if(r&&s)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)o=a[c].controller.getMinMax(this,t),r||(n=Math.min(n,o.min)),s||(i=Math.max(i,o.max));return n=s&&n>i?i:n,i=r&&n>i?n:i,{min:Sn(n,Sn(i,n)),max:Sn(i,Sn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){qt(this.options.beforeUpdate,[this])}update(t,n,i){const{beginAtZero:r,grace:s,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=M0(this,s,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?td(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=w_(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,t=!t),this._startPixel=n,this._endPixel=i,this._reversePixels=t,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){qt(this.options.afterUpdate,[this])}beforeSetDimensions(){qt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){qt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),qt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){qt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i],s.label=qt(n.callback,[s.value,i,t],this)}afterTickToLabelConversion(){qt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){qt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,i=this.ticks.length,r=n.minRotation||0,s=n.maxRotation;let o=r,a,c,l;if(!this._isVisible()||!n.display||r>=s||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const u=this._getLabelSizes(),h=u.widest.width,d=u.highest.height,f=Jt(this.chart.width-h,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),h+6>a&&(a=f/(i-(t.offset?.5:1)),c=this.maxHeight-so(t.grid)-n.padding-nd(t.title,this.chart.options.font),l=Math.sqrt(h*h+d*d),o=jh(Math.min(Math.asin(Jt((u.highest.height+6)/a,-1,1)),Math.asin(Jt(c/l,-1,1))-Math.asin(Jt(d/l,-1,1)))),o=Math.max(r,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){qt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){qt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const c=nd(r,n.options.font);if(a?(t.width=this.maxWidth,t.height=so(s)+c):(t.height=this.maxHeight,t.width=so(s)+c),i.display&&this.ticks.length){const{first:l,last:u,widest:h,highest:d}=this._getLabelSizes(),f=i.padding*2,p=zn(this.labelRotation),y=Math.cos(p),_=Math.sin(p);if(a){const m=i.mirror?0:_*h.width+y*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{const m=i.mirror?0:y*h.width+_*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(l,u,_,y)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,i,r){const{ticks:{align:s,padding:o},position:a}=this.options,c=this.labelRotation!==0,l=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;c?l?(d=r*t.width,f=i*n.height):(d=i*t.height,f=r*n.width):s==="start"?f=n.width:s==="end"?d=t.width:s!=="inner"&&(d=t.width/2,f=n.width/2),this.paddingLeft=Math.max((d-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=t.height/2;s==="start"?(u=0,h=t.height):s==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){qt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,i;for(n=0,i=t.length;n<i;n++)lt(t[n].label)&&(t.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=td(i,n)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,n){const{ctx:i,_longestTextCache:r}=this,s=[],o=[];let a=0,c=0,l,u,h,d,f,p,y,_,m,g,v;for(l=0;l<n;++l){if(d=t[l].label,f=this._resolveTickFontOptions(l),i.font=p=f.string,y=r[p]=r[p]||{data:{},gc:[]},_=f.lineHeight,m=g=0,!lt(d)&&!Rt(d))m=Gc(i,y.data,y.gc,m,d),g=_;else if(Rt(d))for(u=0,h=d.length;u<h;++u)v=d[u],!lt(v)&&!Rt(v)&&(m=Gc(i,y.data,y.gc,m,v),g+=_);s.push(m),o.push(g),a=Math.max(m,a),c=Math.max(g,c)}P_(r,n);const b=s.indexOf(a),x=o.indexOf(c),E=w=>({width:s[w]||0,height:o[w]||0});return{first:E(0),last:E(n-1),widest:E(b),highest:E(x),widths:s,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return Fy(this._alignToPixels?or(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const i=n[t];return i.$context||(i.$context=I_(this.getContext(),t,i))}return this.$context||(this.$context=C_(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=zn(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=t.autoSkipPadding||0,a=s?s.widest.width+o:0,c=s?s.highest.height+o:0;return this.isHorizontal()?c*i>a*r?a/i:c/r:c*r<a*i?c/i:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,i=this.chart,r=this.options,{grid:s,position:o}=r,a=s.offset,c=this.isHorizontal(),u=this.ticks.length+(a?1:0),h=so(s),d=[],f=s.setContext(this.getContext()),p=f.drawBorder?f.borderWidth:0,y=p/2,_=function(I){return or(i,I,p)};let m,g,v,b,x,E,w,P,A,Z,k,X;if(o==="top")m=_(this.bottom),E=this.bottom-h,P=m-y,Z=_(t.top)+y,X=t.bottom;else if(o==="bottom")m=_(this.top),Z=t.top,X=_(t.bottom)-y,E=m+y,P=this.top+h;else if(o==="left")m=_(this.right),x=this.right-h,w=m-y,A=_(t.left)+y,k=t.right;else if(o==="right")m=_(this.left),A=t.left,k=_(t.right)-y,x=m+y,w=this.left+h;else if(n==="x"){if(o==="center")m=_((t.top+t.bottom)/2+.5);else if(ut(o)){const I=Object.keys(o)[0],B=o[I];m=_(this.chart.scales[I].getPixelForValue(B))}Z=t.top,X=t.bottom,E=m+y,P=E+h}else if(n==="y"){if(o==="center")m=_((t.left+t.right)/2);else if(ut(o)){const I=Object.keys(o)[0],B=o[I];m=_(this.chart.scales[I].getPixelForValue(B))}x=m-y,w=x-h,A=t.left,k=t.right}const G=tt(r.ticks.maxTicksLimit,u),V=Math.max(1,Math.ceil(u/G));for(g=0;g<u;g+=V){const I=s.setContext(this.getContext(g)),B=I.lineWidth,j=I.color,ie=I.borderDash||[],me=I.borderDashOffset,ge=I.tickWidth,fe=I.tickColor,Ae=I.tickBorderDash||[],ve=I.tickBorderDashOffset;v=L_(this,g,a),v!==void 0&&(b=or(i,v,B),c?x=w=A=k=b:E=P=Z=X=b,d.push({tx1:x,ty1:E,tx2:w,ty2:P,x1:A,y1:Z,x2:k,y2:X,width:B,color:j,borderDash:ie,borderDashOffset:me,tickWidth:ge,tickColor:fe,tickBorderDash:Ae,tickBorderDashOffset:ve}))}return this._ticksLength=u,this._borderValue=m,d}_computeLabelItems(t){const n=this.axis,i=this.options,{position:r,ticks:s}=i,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:u,mirror:h}=s,d=so(i.grid),f=d+u,p=h?-u:f,y=-zn(this.labelRotation),_=[];let m,g,v,b,x,E,w,P,A,Z,k,X,G="middle";if(r==="top")E=this.bottom-p,w=this._getXAxisLabelAlignment();else if(r==="bottom")E=this.top+p,w=this._getXAxisLabelAlignment();else if(r==="left"){const I=this._getYAxisLabelAlignment(d);w=I.textAlign,x=I.x}else if(r==="right"){const I=this._getYAxisLabelAlignment(d);w=I.textAlign,x=I.x}else if(n==="x"){if(r==="center")E=(t.top+t.bottom)/2+f;else if(ut(r)){const I=Object.keys(r)[0],B=r[I];E=this.chart.scales[I].getPixelForValue(B)+f}w=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")x=(t.left+t.right)/2-f;else if(ut(r)){const I=Object.keys(r)[0],B=r[I];x=this.chart.scales[I].getPixelForValue(B)}w=this._getYAxisLabelAlignment(d).textAlign}n==="y"&&(c==="start"?G="top":c==="end"&&(G="bottom"));const V=this._getLabelSizes();for(m=0,g=a.length;m<g;++m){v=a[m],b=v.label;const I=s.setContext(this.getContext(m));P=this.getPixelForTick(m)+s.labelOffset,A=this._resolveTickFontOptions(m),Z=A.lineHeight,k=Rt(b)?b.length:1;const B=k/2,j=I.color,ie=I.textStrokeColor,me=I.textStrokeWidth;let ge=w;o?(x=P,w==="inner"&&(m===g-1?ge=this.options.reverse?"left":"right":m===0?ge=this.options.reverse?"right":"left":ge="center"),r==="top"?l==="near"||y!==0?X=-k*Z+Z/2:l==="center"?X=-V.highest.height/2-B*Z+Z:X=-V.highest.height+Z/2:l==="near"||y!==0?X=Z/2:l==="center"?X=V.highest.height/2-B*Z:X=V.highest.height-k*Z,h&&(X*=-1)):(E=P,X=(1-k)*Z/2);let fe;if(I.showLabelBackdrop){const Ae=ri(I.backdropPadding),ve=V.heights[m],De=V.widths[m];let T=E+X-Ae.top,M=x-Ae.left;switch(G){case"middle":T-=ve/2;break;case"bottom":T-=ve;break}switch(w){case"center":M-=De/2;break;case"right":M-=De;break}fe={left:M,top:T,width:De+Ae.width,height:ve+Ae.height,color:I.backdropColor}}_.push({rotation:y,label:b,font:A,color:j,strokeColor:ie,strokeWidth:me,textOffset:X,textAlign:ge,textBaseline:G,translation:[x,E],backdrop:fe})}return _}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-zn(this.labelRotation))return t==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=this.options,o=this._getLabelSizes(),a=t+s,c=o.widest.width;let l,u;return n==="left"?r?(u=this.right+s,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u+=c)):(u=this.right-a,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u=this.left)):n==="right"?r?(u=this.left+s,i==="near"?l="right":i==="center"?(l="center",u-=c/2):(l="left",u-=c)):(u=this.left+a,i==="near"?l="left":i==="center"?(l="center",u+=c/2):(l="right",u=this.right)):l="right",{textAlign:l,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:i,top:r,width:s,height:o}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(i,r,s,o),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(s=>s.value===t);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,o;const a=(c,l,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(n.display)for(s=0,o=r.length;s<o;++s){const c=r[s];n.drawOnChartArea&&a({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&a({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{grid:i}}=this,r=i.setContext(this.getContext()),s=i.drawBorder?r.borderWidth:0;if(!s)return;const o=i.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let c,l,u,h;this.isHorizontal()?(c=or(t,this.left,s)-s/2,l=or(t,this.right,o)+o/2,u=h=a):(u=or(t,this.top,s)-s/2,h=or(t,this.bottom,o)+o/2,c=l=a),n.save(),n.lineWidth=r.borderWidth,n.strokeStyle=r.borderColor,n.beginPath(),n.moveTo(c,u),n.lineTo(l,h),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&d0(i,r);const s=this._labelItems||(this._labelItems=this._computeLabelItems(t));let o,a;for(o=0,a=s.length;o<a;++o){const c=s[o],l=c.font,u=c.label;c.backdrop&&(i.fillStyle=c.backdrop.color,i.fillRect(c.backdrop.left,c.backdrop.top,c.backdrop.width,c.backdrop.height));let h=c.textOffset;Vc(i,u,0,h,l,c)}r&&p0(i)}drawTitle(){const{ctx:t,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const s=pn(i.font),o=ri(i.padding),a=i.align;let c=s.lineHeight/2;n==="bottom"||n==="center"||ut(n)?(c+=o.bottom,Rt(i.text)&&(c+=s.lineHeight*(i.text.length-1))):c+=o.top;const{titleX:l,titleY:u,maxWidth:h,rotation:d}=O_(this,c,n,a);Vc(t,i.text,0,0,s,{color:i.color,maxWidth:h,rotation:d,textAlign:D_(a,n,r),textBaseline:"middle",translation:[l,u]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,i=tt(t.grid&&t.grid.z,-1);return!this._isVisible()||this.draw!==kr.prototype.draw?[{z:n,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:n,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let s,o;for(s=0,o=n.length;s<o;++s){const a=n[s];a[i]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return pn(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ua{constructor(t,n,i){this.type=t,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let i;k_(n)&&(i=this.register(n));const r=this.items,s=t.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in r||(r[s]=t,F_(t,o,i),this.override&&ht.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const n=this.items,i=t.id,r=this.scope;i in n&&delete n[i],r&&i in ht[r]&&(delete ht[r][i],this.override&&delete Xm[i])}}function F_(e,t,n){const i=Fo(Object.create(null),[n?ht.get(n):{},ht.get(t),e.defaults]);ht.set(t,i),e.defaultRoutes&&N_(t,e.defaultRoutes),e.descriptors&&ht.describe(t,e.descriptors)}function N_(e,t){Object.keys(t).forEach(n=>{const i=n.split("."),r=i.pop(),s=[e].concat(i).join("."),o=t[n].split("."),a=o.pop(),c=o.join(".");ht.route(s,r,c,a)})}function k_(e){return"id"in e&&"defaults"in e}class B_{constructor(){this.controllers=new Ua(Vn,"datasets",!0),this.elements=new Ua(Ai,"elements"),this.plugins=new Ua(Object,"plugins"),this.scales=new Ua(kr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,i){[...n].forEach(r=>{const s=i||this._getRegistryForType(r);i||s.isForType(r)||s===this.plugins&&r.id?this._exec(t,s,r):en(r,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,n,i){const r=Dm(t);qt(i["before"+r],[],i),n[t](i),qt(i["after"+r],[],i)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(t))return i}return this.plugins}_get(t,n,i){const r=n.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return r}}var U_=new B_;class tf extends Vn{update(t){const n=this._cachedMeta,{data:i=[]}=n,r=this.chart._animationsDisabled;let{start:s,count:o}=Um(n,i,r);if(this._drawStart=s,this._drawCount=o,Hm(n)&&(s=0,o=i.length),this.options.showLine){const{dataset:a,_dataset:c}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!c._decimated,a.points=i;const l=this.resolveDatasetElementOptions(t);l.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:l},t)}this.updateElements(i,s,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=U_.getElement("line")),super.addElements()}updateElements(t,n,i,r){const s=r==="reset",{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,u=this.resolveDataElementOptions(n,r),h=this.getSharedOptions(u),d=this.includeOptions(r,h),f=o.axis,p=a.axis,{spanGaps:y,segment:_}=this.options,m=ws(y)?y:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||s||r==="none";let v=n>0&&this.getParsed(n-1);for(let b=n;b<n+i;++b){const x=t[b],E=this.getParsed(b),w=g?x:{},P=lt(E[p]),A=w[f]=o.getPixelForValue(E[f],b),Z=w[p]=s||P?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,E,c):E[p],b);w.skip=isNaN(A)||isNaN(Z)||P,w.stop=b>0&&Math.abs(E[f]-v[f])>m,_&&(w.parsed=E,w.raw=l.data[b]),d&&(w.options=h||this.resolveDataElementOptions(b,x.active?"active":r)),g||this.updateElement(x,b,w,r),v=E}this.updateSharedOptions(h,r,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let a=0;for(let c=n.length-1;c>=0;--c)a=Math.max(a,n[c].size(this.resolveDataElementOptions(c))/2);return a>0&&a}const i=t.dataset,r=i.options&&i.options.borderWidth||0;if(!n.length)return r;const s=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(r,s,o)/2}}tf.id="scatter";tf.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};tf.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(e){return"("+e.label+", "+e.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function ar(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class qu{constructor(t){this.options=t||{}}init(t){}formats(){return ar()}parse(t,n){return ar()}format(t,n){return ar()}add(t,n,i){return ar()}diff(t,n,i){return ar()}startOf(t,n,i){return ar()}endOf(t,n){return ar()}}qu.override=function(e){Object.assign(qu.prototype,e)};var H_={_date:qu};ht.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});function ng(e,t,n){const{startAngle:i,pixelMargin:r,x:s,y:o,outerRadius:a,innerRadius:c}=t;let l=r/a;e.beginPath(),e.arc(s,o,a,i-l,n+l),c>r?(l=r/c,e.arc(s,o,c,n+l,i-l,!0)):e.arc(s,o,r,n+Mt,i-Mt),e.closePath(),e.clip()}function z_(e){return Zh(e,["outerStart","outerEnd","innerStart","innerEnd"])}function G_(e,t,n,i){const r=z_(e.options.borderRadius),s=(n-t)/2,o=Math.min(s,i*t/2),a=c=>{const l=(n-Math.min(s,c))*i/2;return Jt(c,0,Math.min(s,l))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:Jt(r.innerStart,0,o),innerEnd:Jt(r.innerEnd,0,o)}}function Gr(e,t,n,i){return{x:n+e*Math.cos(t),y:i+e*Math.sin(t)}}function Zu(e,t,n,i,r,s){const{x:o,y:a,startAngle:c,pixelMargin:l,innerRadius:u}=t,h=Math.max(t.outerRadius+i+n-l,0),d=u>0?u+i+n+l:0;let f=0;const p=r-c;if(i){const I=u>0?u-i:0,B=h>0?h-i:0,j=(I+B)/2,ie=j!==0?p*j/(j+i):p;f=(p-ie)/2}const y=Math.max(.001,p*h-n/Et)/h,_=(p-y)/2,m=c+_+f,g=r-_-f,{outerStart:v,outerEnd:b,innerStart:x,innerEnd:E}=G_(t,d,h,g-m),w=h-v,P=h-b,A=m+v/w,Z=g-b/P,k=d+x,X=d+E,G=m+x/k,V=g-E/X;if(e.beginPath(),s){if(e.arc(o,a,h,A,Z),b>0){const j=Gr(P,Z,o,a);e.arc(j.x,j.y,b,Z,g+Mt)}const I=Gr(X,g,o,a);if(e.lineTo(I.x,I.y),E>0){const j=Gr(X,V,o,a);e.arc(j.x,j.y,E,g+Mt,V+Math.PI)}if(e.arc(o,a,d,g-E/d,m+x/d,!0),x>0){const j=Gr(k,G,o,a);e.arc(j.x,j.y,x,G+Math.PI,m-Mt)}const B=Gr(w,m,o,a);if(e.lineTo(B.x,B.y),v>0){const j=Gr(w,A,o,a);e.arc(j.x,j.y,v,m-Mt,A)}}else{e.moveTo(o,a);const I=Math.cos(A)*h+o,B=Math.sin(A)*h+a;e.lineTo(I,B);const j=Math.cos(Z)*h+o,ie=Math.sin(Z)*h+a;e.lineTo(j,ie)}e.closePath()}function V_(e,t,n,i,r){const{fullCircles:s,startAngle:o,circumference:a}=t;let c=t.endAngle;if(s){Zu(e,t,n,i,o+rt,r);for(let l=0;l<s;++l)e.fill();isNaN(a)||(c=o+a%rt,a%rt===0&&(c+=rt))}return Zu(e,t,n,i,c,r),e.fill(),c}function W_(e,t,n){const{x:i,y:r,startAngle:s,pixelMargin:o,fullCircles:a}=t,c=Math.max(t.outerRadius-o,0),l=t.innerRadius+o;let u;for(n&&ng(e,t,s+rt),e.beginPath(),e.arc(i,r,l,s+rt,s,!0),u=0;u<a;++u)e.stroke();for(e.beginPath(),e.arc(i,r,c,s,s+rt),u=0;u<a;++u)e.stroke()}function j_(e,t,n,i,r,s){const{options:o}=t,{borderWidth:a,borderJoinStyle:c}=o,l=o.borderAlign==="inner";!a||(l?(e.lineWidth=a*2,e.lineJoin=c||"round"):(e.lineWidth=a,e.lineJoin=c||"bevel"),t.fullCircles&&W_(e,t,l),l&&ng(e,t,r),Zu(e,t,n,i,r,s),e.stroke())}class nf extends Ai{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,n,i){const r=this.getProps(["x","y"],i),{angle:s,distance:o}=Dy(r,{x:t,y:n}),{startAngle:a,endAngle:c,innerRadius:l,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=this.options.spacing/2,p=tt(h,c-a)>=rt||Uc(s,a,c),y=Hc(o,l+d,u+d);return p&&y}getCenterPoint(t){const{x:n,y:i,startAngle:r,endAngle:s,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:c,spacing:l}=this.options,u=(r+s)/2,h=(o+a+l+c)/2;return{x:n+Math.cos(u)*h,y:i+Math.sin(u)*h}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:n,circumference:i}=this,r=(n.offset||0)/2,s=(n.spacing||0)/2,o=n.circular;if(this.pixelMargin=n.borderAlign==="inner"?.33:0,this.fullCircles=i>rt?Math.floor(i/rt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=0;if(r){a=r/2;const l=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(l)*a,Math.sin(l)*a),this.circumference>=Et&&(a=r)}t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor;const c=V_(t,this,a,s,o);j_(t,this,a,s,c,o),t.restore()}}nf.id="arc";nf.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};nf.defaultRoutes={backgroundColor:"backgroundColor"};function ig(e,t,n=t){e.lineCap=tt(n.borderCapStyle,t.borderCapStyle),e.setLineDash(tt(n.borderDash,t.borderDash)),e.lineDashOffset=tt(n.borderDashOffset,t.borderDashOffset),e.lineJoin=tt(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=tt(n.borderWidth,t.borderWidth),e.strokeStyle=tt(n.borderColor,t.borderColor)}function X_(e,t,n){e.lineTo(n.x,n.y)}function Y_(e){return e.stepped?m0:e.tension||e.cubicInterpolationMode==="monotone"?g0:X_}function rg(e,t,n={}){const i=e.length,{start:r=0,end:s=i-1}=n,{start:o,end:a}=t,c=Math.max(r,o),l=Math.min(s,a),u=r<o&&s<o||r>a&&s>a;return{count:i,start:c,loop:t.loop,ilen:l<c&&!u?i+l-c:l-c}}function q_(e,t,n,i){const{points:r,options:s}=t,{count:o,start:a,loop:c,ilen:l}=rg(r,n,i),u=Y_(s);let{move:h=!0,reverse:d}=i||{},f,p,y;for(f=0;f<=l;++f)p=r[(a+(d?l-f:f))%o],!p.skip&&(h?(e.moveTo(p.x,p.y),h=!1):u(e,y,p,d,s.stepped),y=p);return c&&(p=r[(a+(d?l:0))%o],u(e,y,p,d,s.stepped)),!!c}function Z_(e,t,n,i){const r=t.points,{count:s,start:o,ilen:a}=rg(r,n,i),{move:c=!0,reverse:l}=i||{};let u=0,h=0,d,f,p,y,_,m;const g=b=>(o+(l?a-b:b))%s,v=()=>{y!==_&&(e.lineTo(u,_),e.lineTo(u,y),e.lineTo(u,m))};for(c&&(f=r[g(0)],e.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=r[g(d)],f.skip)continue;const b=f.x,x=f.y,E=b|0;E===p?(x<y?y=x:x>_&&(_=x),u=(h*u+b)/++h):(v(),e.lineTo(b,x),p=E,h=0,y=_=x),m=x}v()}function Ju(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?Z_:q_}function J_(e){return e.stepped?C0:e.tension||e.cubicInterpolationMode==="monotone"?I0:gr}function K_(e,t,n,i){let r=t._path;r||(r=t._path=new Path2D,t.path(r,n,i)&&r.closePath()),ig(e,t.options),e.stroke(r)}function Q_(e,t,n,i){const{segments:r,options:s}=t,o=Ju(t);for(const a of r)ig(e,s,a.style),e.beginPath(),o(e,t,a,{start:n,end:n+i-1})&&e.closePath(),e.stroke()}const $_=typeof Path2D=="function";function ev(e,t,n,i){$_&&!t.options.segment?K_(e,t,n,i):Q_(e,t,n,i)}class Bl extends Ai{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;P0(this._points,i,t,r,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=V0(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,i=t.length;return i&&n[t[i-1].end]}interpolate(t,n){const i=this.options,r=t[n],s=this.points,o=H0(this,{property:n,start:r,end:r});if(!o.length)return;const a=[],c=J_(i);let l,u;for(l=0,u=o.length;l<u;++l){const{start:h,end:d}=o[l],f=s[h],p=s[d];if(f===p){a.push(f);continue}const y=Math.abs((r-f[n])/(p[n]-f[n])),_=c(f,p,y,i.stepped);_[n]=t[n],a.push(_)}return a.length===1?a[0]:a}pathSegment(t,n,i){return Ju(this)(t,this,n,i)}path(t,n,i){const r=this.segments,s=Ju(this);let o=this._loop;n=n||0,i=i||this.points.length-n;for(const a of r)o&=s(t,this,a,{start:n,end:n+i-1});return!!o}draw(t,n,i,r){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(t.save(),ev(t,this,i,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Bl.id="line";Bl.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};Bl.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};Bl.descriptors={_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"};function id(e,t,n,i){const r=e.options,{[n]:s}=e.getProps([n],i);return Math.abs(t-s)<r.radius+r.hitRadius}class rf extends Ai{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,n,i){const r=this.options,{x:s,y:o}=this.getProps(["x","y"],i);return Math.pow(t-s,2)+Math.pow(n-o,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,n){return id(this,t,"x",n)}inYRange(t,n){return id(this,t,"y",n)}getCenterPoint(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}size(t){t=t||this.options||{};let n=t.radius||0;n=Math.max(n,n&&t.hoverRadius||0);const i=n&&t.borderWidth||0;return(n+i)*2}draw(t,n){const i=this.options;this.skip||i.radius<.1||!Yu(this,n,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Xu(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}rf.id="point";rf.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};rf.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function sg(e,t){const{x:n,y:i,base:r,width:s,height:o}=e.getProps(["x","y","base","width","height"],t);let a,c,l,u,h;return e.horizontal?(h=o/2,a=Math.min(n,r),c=Math.max(n,r),l=i-h,u=i+h):(h=s/2,a=n-h,c=n+h,l=Math.min(i,r),u=Math.max(i,r)),{left:a,top:l,right:c,bottom:u}}function Wi(e,t,n,i){return e?0:Jt(t,n,i)}function tv(e,t,n){const i=e.options.borderWidth,r=e.borderSkipped,s=Ym(i);return{t:Wi(r.top,s.top,0,n),r:Wi(r.right,s.right,0,t),b:Wi(r.bottom,s.bottom,0,n),l:Wi(r.left,s.left,0,t)}}function nv(e,t,n){const{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),r=e.options.borderRadius,s=gs(r),o=Math.min(t,n),a=e.borderSkipped,c=i||ut(r);return{topLeft:Wi(!c||a.top||a.left,s.topLeft,0,o),topRight:Wi(!c||a.top||a.right,s.topRight,0,o),bottomLeft:Wi(!c||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:Wi(!c||a.bottom||a.right,s.bottomRight,0,o)}}function iv(e){const t=sg(e),n=t.right-t.left,i=t.bottom-t.top,r=tv(e,n/2,i/2),s=nv(e,n/2,i/2);return{outer:{x:t.left,y:t.top,w:n,h:i,radius:s},inner:{x:t.left+r.l,y:t.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,s.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(r.b,r.r))}}}}function ou(e,t,n,i){const r=t===null,s=n===null,a=e&&!(r&&s)&&sg(e,i);return a&&(r||Hc(t,a.left,a.right))&&(s||Hc(n,a.top,a.bottom))}function rv(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function sv(e,t){e.rect(t.x,t.y,t.w,t.h)}function au(e,t,n={}){const i=e.x!==n.x?-t:0,r=e.y!==n.y?-t:0,s=(e.x+e.w!==n.x+n.w?t:0)-i,o=(e.y+e.h!==n.y+n.h?t:0)-r;return{x:e.x+i,y:e.y+r,w:e.w+s,h:e.h+o,radius:e.radius}}class sf extends Ai{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:i,backgroundColor:r}}=this,{inner:s,outer:o}=iv(this),a=rv(o.radius)?Wc:sv;t.save(),(o.w!==s.w||o.h!==s.h)&&(t.beginPath(),a(t,au(o,n,s)),t.clip(),a(t,au(s,-n,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,au(s,n)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,n,i){return ou(this,t,n,i)}inXRange(t,n){return ou(this,t,null,n)}inYRange(t,n){return ou(this,null,t,n)}getCenterPoint(t){const{x:n,y:i,base:r,horizontal:s}=this.getProps(["x","y","base","horizontal"],t);return{x:s?(n+r)/2:n,y:s?i:(i+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}sf.id="bar";sf.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};sf.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};const Pc={average(e){if(!e.length)return!1;let t,n,i=0,r=0,s=0;for(t=0,n=e.length;t<n;++t){const o=e[t].element;if(o&&o.hasValue()){const a=o.tooltipPosition();i+=a.x,r+=a.y,++s}}return{x:i/s,y:r/s}},nearest(e,t){if(!e.length)return!1;let n=t.x,i=t.y,r=Number.POSITIVE_INFINITY,s,o,a;for(s=0,o=e.length;s<o;++s){const c=e[s].element;if(c&&c.hasValue()){const l=c.getCenterPoint(),u=Wu(t,l);u<r&&(r=u,a=c)}}if(a){const c=a.tooltipPosition();n=c.x,i=c.y}return{x:n,y:i}}};function Zn(e,t){return t&&(Rt(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function gi(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function ov(e,t){const{element:n,datasetIndex:i,index:r}=t,s=e.getDatasetMeta(i).controller,{label:o,value:a}=s.getLabelAndValue(r);return{chart:e,label:o,parsed:s.getParsed(r),raw:e.data.datasets[i].data[r],formattedValue:a,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function rd(e,t){const n=e.chart.ctx,{body:i,footer:r,title:s}=e,{boxWidth:o,boxHeight:a}=t,c=pn(t.bodyFont),l=pn(t.titleFont),u=pn(t.footerFont),h=s.length,d=r.length,f=i.length,p=ri(t.padding);let y=p.height,_=0,m=i.reduce((b,x)=>b+x.before.length+x.lines.length+x.after.length,0);if(m+=e.beforeBody.length+e.afterBody.length,h&&(y+=h*l.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),m){const b=t.displayColors?Math.max(a,c.lineHeight):c.lineHeight;y+=f*b+(m-f)*c.lineHeight+(m-1)*t.bodySpacing}d&&(y+=t.footerMarginTop+d*u.lineHeight+(d-1)*t.footerSpacing);let g=0;const v=function(b){_=Math.max(_,n.measureText(b).width+g)};return n.save(),n.font=l.string,en(e.title,v),n.font=c.string,en(e.beforeBody.concat(e.afterBody),v),g=t.displayColors?o+2+t.boxPadding:0,en(i,b=>{en(b.before,v),en(b.lines,v),en(b.after,v)}),g=0,n.font=u.string,en(e.footer,v),n.restore(),_+=p.width,{width:_,height:y}}function av(e,t){const{y:n,height:i}=t;return n<i/2?"top":n>e.height-i/2?"bottom":"center"}function cv(e,t,n,i){const{x:r,width:s}=i,o=n.caretSize+n.caretPadding;if(e==="left"&&r+s+o>t.width||e==="right"&&r-s-o<0)return!0}function lv(e,t,n,i){const{x:r,width:s}=n,{width:o,chartArea:{left:a,right:c}}=e;let l="center";return i==="center"?l=r<=(a+c)/2?"left":"right":r<=s/2?l="left":r>=o-s/2&&(l="right"),cv(l,e,t,n)&&(l="center"),l}function sd(e,t,n){const i=n.yAlign||t.yAlign||av(e,n);return{xAlign:n.xAlign||t.xAlign||lv(e,t,n,i),yAlign:i}}function uv(e,t){let{x:n,width:i}=e;return t==="right"?n-=i:t==="center"&&(n-=i/2),n}function hv(e,t,n){let{y:i,height:r}=e;return t==="top"?i+=n:t==="bottom"?i-=r+n:i-=r/2,i}function od(e,t,n,i){const{caretSize:r,caretPadding:s,cornerRadius:o}=e,{xAlign:a,yAlign:c}=n,l=r+s,{topLeft:u,topRight:h,bottomLeft:d,bottomRight:f}=gs(o);let p=uv(t,a);const y=hv(t,c,l);return c==="center"?a==="left"?p+=l:a==="right"&&(p-=l):a==="left"?p-=Math.max(u,d)+r:a==="right"&&(p+=Math.max(h,f)+r),{x:Jt(p,0,i.width-t.width),y:Jt(y,0,i.height-t.height)}}function Ha(e,t,n){const i=ri(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function ad(e){return Zn([],gi(e))}function fv(e,t,n){return Nr(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function cd(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}class dv extends Ai{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new Km(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=fv(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:i}=n,r=i.beforeTitle.apply(this,[t]),s=i.title.apply(this,[t]),o=i.afterTitle.apply(this,[t]);let a=[];return a=Zn(a,gi(r)),a=Zn(a,gi(s)),a=Zn(a,gi(o)),a}getBeforeBody(t,n){return ad(n.callbacks.beforeBody.apply(this,[t]))}getBody(t,n){const{callbacks:i}=n,r=[];return en(t,s=>{const o={before:[],lines:[],after:[]},a=cd(i,s);Zn(o.before,gi(a.beforeLabel.call(this,s))),Zn(o.lines,a.label.call(this,s)),Zn(o.after,gi(a.afterLabel.call(this,s))),r.push(o)}),r}getAfterBody(t,n){return ad(n.callbacks.afterBody.apply(this,[t]))}getFooter(t,n){const{callbacks:i}=n,r=i.beforeFooter.apply(this,[t]),s=i.footer.apply(this,[t]),o=i.afterFooter.apply(this,[t]);let a=[];return a=Zn(a,gi(r)),a=Zn(a,gi(s)),a=Zn(a,gi(o)),a}_createItems(t){const n=this._active,i=this.chart.data,r=[],s=[],o=[];let a=[],c,l;for(c=0,l=n.length;c<l;++c)a.push(ov(this.chart,n[c]));return t.filter&&(a=a.filter((u,h,d)=>t.filter(u,h,d,i))),t.itemSort&&(a=a.sort((u,h)=>t.itemSort(u,h,i))),en(a,u=>{const h=cd(t.callbacks,u);r.push(h.labelColor.call(this,u)),s.push(h.labelPointStyle.call(this,u)),o.push(h.labelTextColor.call(this,u))}),this.labelColors=r,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=a,a}update(t,n){const i=this.options.setContext(this.getContext()),r=this._active;let s,o=[];if(!r.length)this.opacity!==0&&(s={opacity:0});else{const a=Pc[i.position].call(this,r,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const c=this._size=rd(this,i),l=Object.assign({},a,c),u=sd(this.chart,i,l),h=od(i,l,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,i,r){const s=this.getCaretPosition(t,i,r);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(t,n,i){const{xAlign:r,yAlign:s}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:c,topRight:l,bottomLeft:u,bottomRight:h}=gs(a),{x:d,y:f}=t,{width:p,height:y}=n;let _,m,g,v,b,x;return s==="center"?(b=f+y/2,r==="left"?(_=d,m=_-o,v=b+o,x=b-o):(_=d+p,m=_+o,v=b-o,x=b+o),g=_):(r==="left"?m=d+Math.max(c,u)+o:r==="right"?m=d+p-Math.max(l,h)-o:m=this.caretX,s==="top"?(v=f,b=v-o,_=m-o,g=m+o):(v=f+y,b=v+o,_=m+o,g=m-o),x=v),{x1:_,x2:m,x3:g,y1:v,y2:b,y3:x}}drawTitle(t,n,i){const r=this.title,s=r.length;let o,a,c;if(s){const l=nu(i.rtl,this.x,this.width);for(t.x=Ha(this,i.titleAlign,i),n.textAlign=l.textAlign(i.titleAlign),n.textBaseline="middle",o=pn(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=o.string,c=0;c<s;++c)n.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===s&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,n,i,r,s){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:c,boxWidth:l,boxPadding:u}=s,h=pn(s.bodyFont),d=Ha(this,"left",s),f=r.x(d),p=c<h.lineHeight?(h.lineHeight-c)/2:0,y=n.y+p;if(s.usePointStyle){const _={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=r.leftForLtr(f,l)+l/2,g=y+c/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,Xu(t,_,m,g),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Xu(t,_,m,g)}else{t.lineWidth=ut(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=r.leftForLtr(f,l-u),m=r.leftForLtr(r.xPlus(f,1),l-u-2),g=gs(o.borderRadius);Object.values(g).some(v=>v!==0)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,Wc(t,{x:_,y,w:l,h:c,radius:g}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Wc(t,{x:m,y:y+1,w:l-2,h:c-2,radius:g}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(_,y,l,c),t.strokeRect(_,y,l,c),t.fillStyle=o.backgroundColor,t.fillRect(m,y+1,l-2,c-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,n,i){const{body:r}=this,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:u}=i,h=pn(i.bodyFont);let d=h.lineHeight,f=0;const p=nu(i.rtl,this.x,this.width),y=function(P){n.fillText(P,p.x(t.x+f),t.y+d/2),t.y+=d+s},_=p.textAlign(o);let m,g,v,b,x,E,w;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,t.x=Ha(this,_,i),n.fillStyle=i.bodyColor,en(this.beforeBody,y),f=a&&_!=="right"?o==="center"?l/2+u:l+2+u:0,b=0,E=r.length;b<E;++b){for(m=r[b],g=this.labelTextColors[b],n.fillStyle=g,en(m.before,y),v=m.lines,a&&v.length&&(this._drawColorBox(n,t,b,p,i),d=Math.max(h.lineHeight,c)),x=0,w=v.length;x<w;++x)y(v[x]),d=h.lineHeight;en(m.after,y)}f=0,d=h.lineHeight,en(this.afterBody,y),t.y-=s}drawFooter(t,n,i){const r=this.footer,s=r.length;let o,a;if(s){const c=nu(i.rtl,this.x,this.width);for(t.x=Ha(this,i.footerAlign,i),t.y+=i.footerMarginTop,n.textAlign=c.textAlign(i.footerAlign),n.textBaseline="middle",o=pn(i.footerFont),n.fillStyle=i.footerColor,n.font=o.string,a=0;a<s;++a)n.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,n,i,r){const{xAlign:s,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:u}=i,{topLeft:h,topRight:d,bottomLeft:f,bottomRight:p}=gs(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(a+h,c),o==="top"&&this.drawCaret(t,n,i,r),n.lineTo(a+l-d,c),n.quadraticCurveTo(a+l,c,a+l,c+d),o==="center"&&s==="right"&&this.drawCaret(t,n,i,r),n.lineTo(a+l,c+u-p),n.quadraticCurveTo(a+l,c+u,a+l-p,c+u),o==="bottom"&&this.drawCaret(t,n,i,r),n.lineTo(a+f,c+u),n.quadraticCurveTo(a,c+u,a,c+u-f),o==="center"&&s==="left"&&this.drawCaret(t,n,i,r),n.lineTo(a,c+h),n.quadraticCurveTo(a,c,a+h,c),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,i=this.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const o=Pc[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=rd(this,t),c=Object.assign({},o,this._size),l=sd(n,t,c),u=od(t,c,l,n);(r._to!==u.x||s._to!==u.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=ri(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(s,t,r,n),N0(t,n.textDirection),s.y+=o.top,this.drawTitle(s,t,n),this.drawBody(s,t,n),this.drawFooter(s,t,n),k0(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const i=this._active,r=t.map(({datasetIndex:a,index:c})=>{const l=this.chart.getDatasetMeta(a);if(!l)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:l.data[c],index:c}}),s=!Tf(i,r),o=this._positionChanged(r,n);(s||o)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,s=this._active||[],o=this._getActiveElements(t,s,n,i),a=this._positionChanged(o,t),c=n||!Tf(o,s)||a;return c&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),c}_getActiveElements(t,n,i,r){const s=this.options;if(t.type==="mouseout")return[];if(!r)return n;const o=this.chart.getElementsAtEventForMode(t,s.mode,s,i);return s.reverse&&o.reverse(),o}_positionChanged(t,n){const{caretX:i,caretY:r,options:s}=this,o=Pc[s.position].call(this,t,n);return o!==!1&&(i!==o.x||r!==o.y)}}dv.positioners=Pc;const pv=(e,t,n,i)=>(typeof t=="string"?(n=e.push(t)-1,i.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function mv(e,t,n,i){const r=e.indexOf(t);if(r===-1)return pv(e,t,n,i);const s=e.lastIndexOf(t);return r!==s?n:r}const gv=(e,t)=>e===null?null:Jt(Math.round(e),0,t);class Ku extends kr{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:s}of n)i[r]===s&&i.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(lt(t))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===t?n:mv(i,t,tt(n,t),this._addedLabels),gv(n,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const t=this.min,n=this.max,i=this.options.offset,r=[];let s=this.getLabels();s=t===0&&n===s.length-1?s:s.slice(t,n+1),this._valueRange=Math.max(s.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=n;o++)r.push({value:o});return r}getLabelForValue(t){const n=this.getLabels();return t>=0&&t<n.length?n[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}Ku.id="category";Ku.defaults={ticks:{callback:Ku.prototype.getLabelForValue}};function yv(e,t){const n=[],{bounds:r,step:s,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:d}=e,f=s||1,p=u-1,{min:y,max:_}=t,m=!lt(o),g=!lt(a),v=!lt(l),b=(_-y)/(h+1);let x=Lf((_-y)/p/f)*f,E,w,P,A;if(x<1e-14&&!m&&!g)return[{value:y},{value:_}];A=Math.ceil(_/x)-Math.floor(y/x),A>p&&(x=Lf(A*x/p/f)*f),lt(c)||(E=Math.pow(10,c),x=Math.ceil(x*E)/E),r==="ticks"?(w=Math.floor(y/x)*x,P=Math.ceil(_/x)*x):(w=y,P=_),m&&g&&s&&Iy((a-o)/s,x/1e3)?(A=Math.round(Math.min((a-o)/x,u)),x=(a-o)/A,w=o,P=a):v?(w=m?o:w,P=g?a:P,A=l-1,x=(P-w)/A):(A=(P-w)/x,Mo(A,Math.round(A),x/1e3)?A=Math.round(A):A=Math.ceil(A));const Z=Math.max(Pf(x),Pf(w));E=Math.pow(10,lt(c)?Z:c),w=Math.round(w*E)/E,P=Math.round(P*E)/E;let k=0;for(m&&(d&&w!==o?(n.push({value:o}),w<o&&k++,Mo(Math.round((w+k*x)*E)/E,o,ld(o,b,e))&&k++):w<o&&k++);k<A;++k)n.push({value:Math.round((w+k*x)*E)/E});return g&&d&&P!==a?n.length&&Mo(n[n.length-1].value,a,ld(a,b,e))?n[n.length-1].value=a:n.push({value:a}):(!g||P===a)&&n.push({value:P}),n}function ld(e,t,{horizontal:n,minRotation:i}){const r=zn(i),s=(n?Math.sin(r):Math.cos(r))||.001,o=.75*t*(""+e).length;return Math.min(t/s,o)}class jc extends kr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return lt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:s}=this;const o=c=>r=n?r:c,a=c=>s=i?s:c;if(t){const c=ii(r),l=ii(s);c<0&&l<0?a(0):c>0&&l>0&&o(0)}if(r===s){let c=1;(s>=Number.MAX_SAFE_INTEGER||r<=Number.MIN_SAFE_INTEGER)&&(c=Math.abs(s*.05)),a(s+c),t||o(r-c)}this.min=r,this.max=s}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=t,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=yv(r,s);return t.bounds==="ticks"&&Fm(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const r=(i-n)/Math.max(t.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(t){return va(t,this.chart.options.locale,this.options.ticks.format)}}class og extends jc{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Vt(t)?t:0,this.max=Vt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,i=zn(this.options.ticks.minRotation),r=(t?Math.sin(i):Math.cos(i))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}og.id="linear";og.defaults={ticks:{callback:kl.formatters.numeric}};function ud(e){return e/Math.pow(10,Math.floor(An(e)))===1}function _v(e,t){const n=Math.floor(An(t.max)),i=Math.ceil(t.max/Math.pow(10,n)),r=[];let s=Sn(e.min,Math.pow(10,Math.floor(An(t.min)))),o=Math.floor(An(s)),a=Math.floor(s/Math.pow(10,o)),c=o<0?Math.pow(10,Math.abs(o)):1;do r.push({value:s,major:ud(s)}),++a,a===10&&(a=1,++o,c=o>=0?1:c),s=Math.round(a*Math.pow(10,o)*c)/c;while(o<n||o===n&&a<i);const l=Sn(e.max,s);return r.push({value:l,major:ud(s)}),r}class ag extends kr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const i=jc.prototype.parse.apply(this,[t,n]);if(i===0){this._zero=!0;return}return Vt(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Vt(t)?Math.max(0,t):null,this.max=Vt(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let i=this.min,r=this.max;const s=c=>i=t?i:c,o=c=>r=n?r:c,a=(c,l)=>Math.pow(10,Math.floor(An(c))+l);i===r&&(i<=0?(s(1),o(10)):(s(a(i,-1)),o(a(r,1)))),i<=0&&s(a(r,-1)),r<=0&&o(a(i,1)),this._zero&&this.min!==this._suggestedMin&&i===a(this.min,0)&&s(a(i,-1)),this.min=i,this.max=r}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},i=_v(n,this);return t.bounds==="ticks"&&Fm(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":va(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=An(t),this._valueRange=An(this.max)-An(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(An(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}ag.id="logarithmic";ag.defaults={ticks:{callback:kl.formatters.logarithmic,major:{enabled:!0}}};function Qu(e){const t=e.ticks;if(t.display&&e.display){const n=ri(t.backdropPadding);return tt(t.font&&t.font.size,ht.font.size)+n.height}return 0}function vv(e,t,n){return n=Rt(n)?n:[n],{w:h0(e,t.string,n),h:n.length*t.lineHeight}}function hd(e,t,n,i,r){return e===i||e===r?{start:t-n/2,end:t+n/2}:e<i||e>r?{start:t-n,end:t}:{start:t,end:t+n}}function bv(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),i=[],r=[],s=e._pointLabels.length,o=e.options.pointLabels,a=o.centerPointLabels?Et/s:0;for(let c=0;c<s;c++){const l=o.setContext(e.getPointLabelContext(c));r[c]=l.padding;const u=e.getPointPosition(c,e.drawingArea+r[c],a),h=pn(l.font),d=vv(e.ctx,h,e._pointLabels[c]);i[c]=d;const f=Hn(e.getIndexAngle(c)+a),p=Math.round(jh(f)),y=hd(p,u.x,d.w,0,180),_=hd(p,u.y,d.h,90,270);xv(n,t,f,y,_)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=wv(e,i,r)}function xv(e,t,n,i,r){const s=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n));let a=0,c=0;i.start<t.l?(a=(t.l-i.start)/s,e.l=Math.min(e.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/s,e.r=Math.max(e.r,t.r+a)),r.start<t.t?(c=(t.t-r.start)/o,e.t=Math.min(e.t,t.t-c)):r.end>t.b&&(c=(r.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function wv(e,t,n){const i=[],r=e._pointLabels.length,s=e.options,o=Qu(s)/2,a=e.drawingArea,c=s.pointLabels.centerPointLabels?Et/r:0;for(let l=0;l<r;l++){const u=e.getPointPosition(l,a+o+n[l],c),h=Math.round(jh(Hn(u.angle+Mt))),d=t[l],f=Sv(u.y,d.h,h),p=Mv(h),y=Ev(u.x,d.w,p);i.push({x:u.x,y:f,textAlign:p,left:y,top:f,right:y+d.w,bottom:f+d.h})}return i}function Mv(e){return e===0||e===180?"center":e<180?"left":"right"}function Ev(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function Sv(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function Tv(e,t){const{ctx:n,options:{pointLabels:i}}=e;for(let r=t-1;r>=0;r--){const s=i.setContext(e.getPointLabelContext(r)),o=pn(s.font),{x:a,y:c,textAlign:l,left:u,top:h,right:d,bottom:f}=e._pointLabelItems[r],{backdropColor:p}=s;if(!lt(p)){const y=gs(s.borderRadius),_=ri(s.backdropPadding);n.fillStyle=p;const m=u-_.left,g=h-_.top,v=d-u+_.width,b=f-h+_.height;Object.values(y).some(x=>x!==0)?(n.beginPath(),Wc(n,{x:m,y:g,w:v,h:b,radius:y}),n.fill()):n.fillRect(m,g,v,b)}Vc(n,e._pointLabels[r],a,c+o.lineHeight/2,o,{color:s.color,textAlign:l,textBaseline:"middle"})}}function cg(e,t,n,i){const{ctx:r}=e;if(n)r.arc(e.xCenter,e.yCenter,t,0,rt);else{let s=e.getPointPosition(0,t);r.moveTo(s.x,s.y);for(let o=1;o<i;o++)s=e.getPointPosition(o,t),r.lineTo(s.x,s.y)}}function Av(e,t,n,i){const r=e.ctx,s=t.circular,{color:o,lineWidth:a}=t;!s&&!i||!o||!a||n<0||(r.save(),r.strokeStyle=o,r.lineWidth=a,r.setLineDash(t.borderDash),r.lineDashOffset=t.borderDashOffset,r.beginPath(),cg(e,n,s,i),r.closePath(),r.stroke(),r.restore())}function Rv(e,t,n){return Nr(e,{label:n,index:t,type:"pointLabel"})}class Ul extends jc{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ri(Qu(this.options)/2),n=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Vt(t)&&!isNaN(t)?t:0,this.max=Vt(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Qu(this.options))}generateTickLabels(t){jc.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,i)=>{const r=qt(this.options.pointLabels.callback,[n,i],this);return r||r===0?r:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?bv(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,i,r){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,i,r))}getIndexAngle(t){const n=rt/(this._pointLabels.length||1),i=this.options.startAngle||0;return Hn(t*n+zn(i))}getDistanceFromCenterForValue(t){if(lt(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(lt(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const i=n[t];return Rv(this.getContext(),t,i)}}getPointPosition(t,n,i=0){const r=this.getIndexAngle(t)-Mt+i;return{x:Math.cos(r)*n+this.xCenter,y:Math.sin(r)*n+this.yCenter,angle:r}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:i,right:r,bottom:s}=this._pointLabelItems[t];return{left:n,top:i,right:r,bottom:s}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),cg(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:i,grid:r}=n,s=this._pointLabels.length;let o,a,c;if(n.pointLabels.display&&Tv(this,s),r.display&&this.ticks.forEach((l,u)=>{if(u!==0){a=this.getDistanceFromCenterForValue(l.value);const h=r.setContext(this.getContext(u-1));Av(this,h,a,s)}}),i.display){for(t.save(),o=s-1;o>=0;o--){const l=i.setContext(this.getPointLabelContext(o)),{color:u,lineWidth:h}=l;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(l.borderDash),t.lineDashOffset=l.borderDashOffset,a=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const r=this.getIndexAngle(0);let s,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,c)=>{if(c===0&&!n.reverse)return;const l=i.setContext(this.getContext(c)),u=pn(l.font);if(s=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){t.font=u.string,o=t.measureText(a.label).width,t.fillStyle=l.backdropColor;const h=ri(l.backdropPadding);t.fillRect(-o/2-h.left,-s-u.size/2-h.top,o+h.width,u.size+h.height)}Vc(t,a.label,0,-s,u,{color:l.color})}),t.restore()}drawTitle(){}}Ul.id="radialLinear";Ul.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:kl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};Ul.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};Ul.descriptors={angleLines:{_fallback:"grid"}};const Hl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},an=Object.keys(Hl);function Lv(e,t){return e-t}function fd(e,t){if(lt(t))return null;const n=e._adapter,{parser:i,round:r,isoWeekday:s}=e._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),Vt(o)||(o=typeof i=="string"?n.parse(o,i):n.parse(o)),o===null?null:(r&&(o=r==="week"&&(ws(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,r)),+o)}function dd(e,t,n,i){const r=an.length;for(let s=an.indexOf(e);s<r-1;++s){const o=Hl[an[s]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-t)/(a*o.size))<=i)return an[s]}return an[r-1]}function Pv(e,t,n,i,r){for(let s=an.length-1;s>=an.indexOf(n);s--){const o=an[s];if(Hl[o].common&&e._adapter.diff(r,i,o)>=t-1)return o}return an[n?an.indexOf(n):0]}function Cv(e){for(let t=an.indexOf(e)+1,n=an.length;t<n;++t)if(Hl[an[t]].common)return an[t]}function pd(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:i,hi:r}=Nm(n,t),s=n[i]>=t?n[i]:n[r];e[s]=!0}}function Iv(e,t,n,i){const r=e._adapter,s=+r.startOf(t[0].value,i),o=t[t.length-1].value;let a,c;for(a=s;a<=o;a=+r.add(a,1,i))c=n[a],c>=0&&(t[c].major=!0);return t}function md(e,t,n){const i=[],r={},s=t.length;let o,a;for(o=0;o<s;++o)a=t[o],r[a]=o,i.push({value:a,major:!1});return s===0||!n?i:Iv(e,i,r,n)}class zl extends kr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n){const i=t.time||(t.time={}),r=this._adapter=new H_._date(t.adapters.date);r.init(n),Im(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:fd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,i=t.time.unit||"day";let{min:r,max:s,minDefined:o,maxDefined:a}=this.getUserBounds();function c(l){!o&&!isNaN(l.min)&&(r=Math.min(r,l.min)),!a&&!isNaN(l.max)&&(s=Math.max(s,l.max))}(!o||!a)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),r=Vt(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=Vt(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,s-1),this.max=Math.max(r+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],i=t[t.length-1]),{min:n,max:i}}buildTicks(){const t=this.options,n=t.time,i=t.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const s=this.min,o=this.max,a=Ny(r,s,o);return this._unit=n.unit||(i.autoSkip?dd(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):Pv(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Cv(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),md(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t){let n=0,i=0,r,s;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?n=1-r:n=(this.getDecimalForValue(t[1])-r)/2,s=this.getDecimalForValue(t[t.length-1]),t.length===1?i=s:i=(s-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;n=Jt(n,0,o),i=Jt(i,0,o),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const t=this._adapter,n=this.min,i=this.max,r=this.options,s=r.time,o=s.unit||dd(s.minUnit,n,i,this._getLabelCapacity(n)),a=tt(s.stepSize,1),c=o==="week"?s.isoWeekday:!1,l=ws(c)||c===!0,u={};let h=n,d,f;if(l&&(h=+t.startOf(h,"isoWeek",c)),h=+t.startOf(h,l?"day":o),t.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p=r.ticks.source==="data"&&this.getDataTimestamps();for(d=h,f=0;d<i;d=+t.add(d,a,o),f++)pd(u,d,p);return(d===i||r.bounds==="ticks"||f===1)&&pd(u,d,p),Object.keys(u).sort((y,_)=>y-_).map(y=>+y)}getLabelForValue(t){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(t,i.tooltipFormat):n.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,n,i,r){const s=this.options,o=s.time.displayFormats,a=this._unit,c=this._majorUnit,l=a&&o[a],u=c&&o[c],h=i[n],d=c&&u&&h&&h.major,f=this._adapter.format(t,r||(d?u:l)),p=s.ticks.callback;return p?qt(p,[f,n,i],this):f}generateTickLabels(t){let n,i,r;for(n=0,i=t.length;n<i;++n)r=t[n],r.label=this._tickFormatFunction(r.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,i=this.ctx.measureText(t).width,r=zn(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*s+a*o,h:i*o+a*s}}_getLabelCapacity(t){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=this._tickFormatFunction(t,0,md(this,[t],this._majorUnit),r),o=this._getLabelSize(s),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,i;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)t=t.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,i;if(t.length)return t;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)t.push(fd(this,r[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Bm(t.sort(Lv))}}zl.id="time";zl.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function za(e,t,n){let i=0,r=e.length-1,s,o,a,c;n?(t>=e[i].pos&&t<=e[r].pos&&({lo:i,hi:r}=ls(e,"pos",t)),{pos:s,time:a}=e[i],{pos:o,time:c}=e[r]):(t>=e[i].time&&t<=e[r].time&&({lo:i,hi:r}=ls(e,"time",t)),{time:s,pos:a}=e[i],{time:o,pos:c}=e[r]);const l=o-s;return l?a+(c-a)*(t-s)/l:a}class lg extends zl{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=za(n,this.min),this._tableRange=za(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:i}=this,r=[],s=[];let o,a,c,l,u;for(o=0,a=t.length;o<a;++o)l=t[o],l>=n&&l<=i&&r.push(l);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(o=0,a=r.length;o<a;++o)u=r[o+1],c=r[o-1],l=r[o],Math.round((u+c)/2)!==l&&s.push({time:l,pos:o/(a-1)});return s}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?t=this.normalize(n.concat(i)):t=n.length?n:i,t=this._cache.all=t,t}getDecimalForValue(t){return(za(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return za(this._table,i*this._tableRange+this._minPos,!0)}}lg.id="timeseries";lg.defaults=zl.defaults;Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});Math.sign===void 0&&(Math.sign=function(e){return e<0?-1:e>0?1:+e});"name"in Function.prototype||Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(e){if(e==null)throw new TypeError("Cannot convert undefined or null to object");const t=Object(e);for(let n=1;n<arguments.length;n++){const i=arguments[n];if(i!=null)for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t});const Dv="119",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ov=0,gd=1,Fv=2,ug=1,hg=2,xo=3,Js=0,kt=1,Ks=2,fg=1,Yi=0,To=1,yd=2,_d=3,vd=4,Nv=5,as=100,kv=101,Bv=102,bd=103,xd=104,Uv=200,Hv=201,zv=202,Gv=203,dg=204,pg=205,Vv=206,Wv=207,jv=208,Xv=209,Yv=210,qv=0,Zv=1,Jv=2,$u=3,Kv=4,Qv=5,$v=6,eb=7,Gl=0,tb=1,nb=2,ys=0,ib=1,rb=2,sb=3,ob=4,ab=5,of=300,af=301,cf=302,mg=303,lf=304,xa=306,Vl=307,Mr=1e3,tn=1001,No=1002,Ot=1003,Xc=1004,Yc=1005,Bt=1006,uf=1007,Es=1008,wa=1009,cb=1010,lb=1011,qc=1012,ub=1013,Cc=1014,Gi=1015,Zc=1016,hb=1017,fb=1018,db=1019,Ao=1020,pb=1021,bi=1022,gn=1023,mb=1024,gb=1025,yb=gn,_s=1026,ko=1027,_b=1028,vb=1029,bb=1030,xb=1031,wb=1032,Mb=1033,wd=33776,Md=33777,Ed=33778,Sd=33779,Td=35840,Ad=35841,Rd=35842,Ld=35843,Eb=36196,Pd=37492,Cd=37496,Sb=37808,Tb=37809,Ab=37810,Rb=37811,Lb=37812,Pb=37813,Cb=37814,Ib=37815,Db=37816,Ob=37817,Fb=37818,Nb=37819,kb=37820,Bb=37821,Ub=36492,Hb=37840,zb=37841,Gb=37842,Vb=37843,Wb=37844,jb=37845,Xb=37846,Yb=37847,qb=37848,Zb=37849,Jb=37850,Kb=37851,Qb=37852,$b=37853,ex=2200,tx=2201,nx=2202,Bo=2300,vs=2301,cu=2302,Ss=2400,us=2401,Jc=2402,hf=2500,gg=2501,ix=0,rx=1,Id=2,ln=3e3,Ts=3001,ff=3007,df=3002,sx=3003,yg=3004,_g=3005,vg=3006,ox=3200,ax=3201,Br=0,cx=1,lu=7680,lx=519,Wl=35044,Uo=35048;function Wn(){}Object.assign(Wn.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}},dispatchEvent:function(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e)}}});const Ht=[];for(let e=0;e<256;e++)Ht[e]=(e<16?"0":"")+e.toString(16);let Ga=1234567;const ke={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[e&255]+Ht[e>>8&255]+Ht[e>>16&255]+Ht[e>>24&255]+"-"+Ht[t&255]+Ht[t>>8&255]+"-"+Ht[t>>16&15|64]+Ht[t>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(Ga=e%2147483647),Ga=Ga*16807%2147483647,(Ga-1)/2147483646},degToRad:function(e){return e*ke.DEG2RAD},radToDeg:function(e){return e*ke.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),p=o((i-t)/2);switch(r){case"XYX":e.set(a*u,c*h,c*d,a*l);break;case"YZY":e.set(c*d,a*u,c*h,a*l);break;case"ZXZ":e.set(c*h,c*d,a*u,a*l);break;case"XZX":e.set(a*u,c*p,c*f,a*l);break;case"YXY":e.set(c*f,a*u,c*p,a*l);break;case"ZYZ":e.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};function ae(e=0,t=0){this.x=e,this.y=t}Object.defineProperties(ae.prototype,{width:{get:function(){return this.x},set:function(e){this.x=e}},height:{get:function(){return this.y},set:function(e){this.y=e}}});Object.assign(ae.prototype,{isVector2:!0,set:function(e,t){return this.x=e,this.y=t,this},setScalar:function(e){return this.x=e,this.y=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(e){return this.x=e.x,this.y=e.y,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)},addScalar:function(e){return this.x+=e,this.y+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)},subScalar:function(e){return this.x-=e,this.y-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this},multiply:function(e){return this.x*=e.x,this.y*=e.y,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this},divide:function(e){return this.x/=e.x,this.y/=e.y,this},divideScalar:function(e){return this.multiplyScalar(1/e)},applyMatrix3:function(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(e){return this.x*e.x+this.y*e.y},cross:function(e){return this.x*e.y-this.y*e.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this},rotateAround:function(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function rn(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(rn.prototype,{isMatrix3:!0,set:function(e,t,n,i,r,s,o,a,c){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=r,l[5]=a,l[6]=n,l[7]=s,l[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this},extractBasis:function(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this},setFromMatrix4:function(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this},multiply:function(e){return this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],a=n[6],c=n[1],l=n[4],u=n[7],h=n[2],d=n[5],f=n[8],p=i[0],y=i[3],_=i[6],m=i[1],g=i[4],v=i[7],b=i[2],x=i[5],E=i[8];return r[0]=s*p+o*m+a*b,r[3]=s*y+o*g+a*x,r[6]=s*_+o*v+a*E,r[1]=c*p+l*m+u*b,r[4]=c*y+l*g+u*x,r[7]=c*_+l*v+u*E,r[2]=h*p+d*m+f*b,r[5]=h*y+d*g+f*x,r[8]=h*_+d*v+f*E,this},multiplyScalar:function(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this},determinant:function(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],a=e[6],c=e[7],l=e[8];return t*s*l-t*o*c-n*r*l+n*o*a+i*r*c-i*s*a},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const n=e.elements,i=this.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],f=d*c-l*h,p=l*u-d*a,y=h*a-c*u,_=r*f+s*p+o*y;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return i[0]=f*m,i[1]=(o*h-d*s)*m,i[2]=(l*s-o*c)*m,i[3]=p*m,i[4]=(d*r-o*u)*m,i[5]=(o*a-l*r)*m,i[6]=y*m,i[7]=(s*u-h*r)*m,i[8]=(c*r-s*a)*m,this},transpose:function(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this},getNormalMatrix:function(e){return this.setFromMatrix4(e).getInverse(this).transpose()},transposeIntoArray:function(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this},setUvTransform:function(e,t,n,i,r,s,o){const a=Math.cos(r),c=Math.sin(r);this.set(n*a,n*c,-n*(a*s+c*o)+s+e,-i*c,i*a,-i*(-c*s+a*o)+o+t,0,0,1)},scale:function(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this},rotate:function(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],o=i[6],a=i[1],c=i[4],l=i[7];return i[0]=t*r+n*a,i[3]=t*s+n*c,i[6]=t*o+n*l,i[1]=-n*r+t*a,i[4]=-n*s+t*c,i[7]=-n*o+t*l,this},translate:function(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this},equals:function(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}});let Vr;const Tr={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Vr.width=e.width,Vr.height=e.height;const n=Vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}};let ux=0;function ot(e,t,n,i,r,s,o,a,c,l){Object.defineProperty(this,"id",{value:ux++}),this.uuid=ke.generateUUID(),this.name="",this.image=e!==void 0?e:ot.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=t!==void 0?t:ot.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:tn,this.wrapT=i!==void 0?i:tn,this.magFilter=r!==void 0?r:Bt,this.minFilter=s!==void 0?s:Es,this.anisotropy=c!==void 0?c:1,this.format=o!==void 0?o:gn,this.internalFormat=null,this.type=a!==void 0?a:wa,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:ln,this.version=0,this.onUpdate=null}ot.DEFAULT_IMAGE=void 0;ot.DEFAULT_MAPPING=of;ot.prototype=Object.assign(Object.create(Wn.prototype),{constructor:ot,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=ke.generateUUID()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)r.push(Tr.getDataURL(i[s]))}else r=Tr.getDataURL(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(ot.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function nt(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}Object.defineProperties(nt.prototype,{width:{get:function(){return this.z},set:function(e){this.z=e}},height:{get:function(){return this.w},set:function(e){this.w=e}}});Object.assign(nt.prototype,{isVector4:!0,set:function(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this.w=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setW:function(e){return this.w=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},applyMatrix4:function(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this},divideScalar:function(e){return this.multiplyScalar(1/e)},setAxisAngleFromQuaternion:function(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this},setAxisAngleFromRotationMatrix:function(e){let t,n,i,r;const a=e.elements,c=a[0],l=a[4],u=a[8],h=a[1],d=a[5],f=a[9],p=a[2],y=a[6],_=a[10];if(Math.abs(l-h)<.01&&Math.abs(u-p)<.01&&Math.abs(f-y)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+p)<.1&&Math.abs(f+y)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,v=(d+1)/2,b=(_+1)/2,x=(l+h)/4,E=(u+p)/4,w=(f+y)/4;return g>v&&g>b?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=x/n,r=E/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=x/i,r=w/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=w/r),this.set(n,i,r,t),this}let m=Math.sqrt((y-f)*(y-f)+(u-p)*(u-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(y-f)/m,this.y=(u-p)/m,this.z=(h-l)/m,this.w=Math.acos((c+d+_-1)/2),this},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Pn(e,t,n){this.width=e,this.height=t,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t),n=n||{},this.texture=new ot(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!0,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Pn.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Pn,isWebGLRenderTarget:!0,setSize:function(e,t){(this.width!==e||this.height!==t)&&(this.width=e,this.height=t,this.texture.image.width=e,this.texture.image.height=t,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.width=e.width,this.height=e.height,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function Dd(e,t,n){Pn.call(this,e,t,n),this.samples=4}Dd.prototype=Object.assign(Object.create(Pn.prototype),{constructor:Dd,isWebGLMultisampleRenderTarget:!0,copy:function(e){return Pn.prototype.copy.call(this,e),this.samples=e.samples,this}});function Pt(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}Object.assign(Pt,{slerp:function(e,t,n,i){return n.copy(e).slerp(t,i)},slerpFlat:function(e,t,n,i,r,s,o){let a=n[i+0],c=n[i+1],l=n[i+2],u=n[i+3];const h=r[s+0],d=r[s+1],f=r[s+2],p=r[s+3];if(u!==p||a!==h||c!==d||l!==f){let y=1-o,_=a*h+c*d+l*f+u*p,m=_>=0?1:-1,g=1-_*_;if(g>Number.EPSILON){const b=Math.sqrt(g),x=Math.atan2(b,_*m);y=Math.sin(y*x)/b,o=Math.sin(o*x)/b}const v=o*m;if(a=a*y+h*v,c=c*y+d*v,l=l*y+f*v,u=u*y+p*v,y===1-o){const b=1/Math.sqrt(a*a+c*c+l*l+u*u);a*=b,c*=b,l*=b,u*=b}}e[t]=a,e[t+1]=c,e[t+2]=l,e[t+3]=u},multiplyQuaternionsFlat:function(e,t,n,i,r,s){const o=n[i],a=n[i+1],c=n[i+2],l=n[i+3],u=r[s],h=r[s+1],d=r[s+2],f=r[s+3];return e[t]=o*f+l*u+a*d-c*h,e[t+1]=a*f+l*h+c*u-o*d,e[t+2]=c*f+l*d+o*h-a*u,e[t+3]=l*f-o*u-a*h-c*d,e}});Object.defineProperties(Pt.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(e){this._w=e,this._onChangeCallback()}}});Object.assign(Pt.prototype,{isQuaternion:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this},setFromEuler:function(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e.order,o=Math.cos,a=Math.sin,c=o(n/2),l=o(i/2),u=o(r/2),h=a(n/2),d=a(i/2),f=a(r/2);switch(s){case"XYZ":this._x=h*l*u+c*d*f,this._y=c*d*u-h*l*f,this._z=c*l*f+h*d*u,this._w=c*l*u-h*d*f;break;case"YXZ":this._x=h*l*u+c*d*f,this._y=c*d*u-h*l*f,this._z=c*l*f-h*d*u,this._w=c*l*u+h*d*f;break;case"ZXY":this._x=h*l*u-c*d*f,this._y=c*d*u+h*l*f,this._z=c*l*f+h*d*u,this._w=c*l*u-h*d*f;break;case"ZYX":this._x=h*l*u-c*d*f,this._y=c*d*u+h*l*f,this._z=c*l*f-h*d*u,this._w=c*l*u+h*d*f;break;case"YZX":this._x=h*l*u+c*d*f,this._y=c*d*u+h*l*f,this._z=c*l*f-h*d*u,this._w=c*l*u-h*d*f;break;case"XZY":this._x=h*l*u-c*d*f,this._y=c*d*u-h*l*f,this._z=c*l*f+h*d*u,this._w=c*l*u+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this},setFromRotationMatrix:function(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10],h=n+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(l-a)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(l-a)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(a+l)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(a+l)/d,this._z=.25*d}return this._onChangeCallback(),this},setFromUnitVectors:function(e,t){let i=e.dot(t)+1;return i<1e-6?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()},angleTo:function(e){return 2*Math.acos(Math.abs(ke.clamp(this.dot(e),-1,1)))},rotateTowards:function(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this},identity:function(){return this.set(0,0,0,1)},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)},premultiply:function(e){return this.multiplyQuaternions(e,this)},multiplyQuaternions:function(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,a=t._y,c=t._z,l=t._w;return this._x=n*l+s*o+i*c-r*a,this._y=i*l+s*a+r*o-n*c,this._z=r*l+s*c+n*a-i*o,this._w=s*l-n*o-i*a-r*c,this._onChangeCallback(),this},slerp:function(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const a=1-o*o;if(a<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,h=Math.sin(t*l)/c;return this._w=s*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w},fromArray:function(e,t){return t===void 0&&(t=0),this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e},fromBufferAttribute:function(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});const uu=new R,Od=new Pt;function R(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}Object.assign(R.prototype,{isVector3:!0,set:function(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this},setScalar:function(e){return this.x=e,this.y=e,this.z=e,this},setX:function(e){return this.x=e,this},setY:function(e){return this.y=e,this},setZ:function(e){return this.z=e,this},setComponent:function(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this},getComponent:function(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this},add:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)},addScalar:function(e){return this.x+=e,this.y+=e,this.z+=e,this},addVectors:function(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this},addScaledVector:function(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this},sub:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)},subScalar:function(e){return this.x-=e,this.y-=e,this.z-=e,this},subVectors:function(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)},multiplyScalar:function(e){return this.x*=e,this.y*=e,this.z*=e,this},multiplyVectors:function(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this},applyEuler:function(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Od.setFromEuler(e))},applyAxisAngle:function(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))},applyMatrix3:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this},applyNormalMatrix:function(e){return this.applyMatrix3(e).normalize()},applyMatrix4:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this},applyQuaternion:function(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,a=e.w,c=a*t+s*i-o*n,l=a*n+o*t-r*i,u=a*i+r*n-s*t,h=-r*t-s*n-o*i;return this.x=c*a+h*-r+l*-o-u*-s,this.y=l*a+h*-s+u*-r-c*-o,this.z=u*a+h*-o+c*-s-l*-r,this},project:function(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)},unproject:function(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)},transformDirection:function(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()},divide:function(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this},divideScalar:function(e){return this.multiplyScalar(1/e)},min:function(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this},max:function(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this},clamp:function(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this},clampScalar:function(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this},clampLength:function(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(e){return this.x*e.x+this.y*e.y+this.z*e.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(e){return this.normalize().multiplyScalar(e)},lerp:function(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this},lerpVectors:function(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this},cross:function(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)},crossVectors:function(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,a=t.z;return this.x=i*a-r*o,this.y=r*s-n*a,this.z=n*o-i*s,this},projectOnVector:function(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)},projectOnPlane:function(e){return uu.copy(this).projectOnVector(e),this.sub(uu)},reflect:function(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))},angleTo:function(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke.clamp(n,-1,1))},distanceTo:function(e){return Math.sqrt(this.distanceToSquared(e))},distanceToSquared:function(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i},manhattanDistanceTo:function(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)},setFromSpherical:function(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)},setFromSphericalCoords:function(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this},setFromCylindrical:function(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)},setFromCylindricalCoords:function(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this},setFromMatrixPosition:function(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this},setFromMatrixScale:function(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this},setFromMatrixColumn:function(e,t){return this.fromArray(e.elements,t*4)},setFromMatrix3Column:function(e,t){return this.fromArray(e.elements,t*3)},equals:function(e){return e.x===this.x&&e.y===this.y&&e.z===this.z},fromArray:function(e,t){return t===void 0&&(t=0),this.x=e[t],this.y=e[t+1],this.z=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e},fromBufferAttribute:function(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});const Wr=new R,Nn=new ze,hx=new R(0,0,0),fx=new R(1,1,1),Pi=new R,Va=new R,fn=new R;function ze(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(ze.prototype,{isMatrix4:!0,set:function(e,t,n,i,r,s,o,a,c,l,u,h,d,f,p,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=o,_[13]=a,_[2]=c,_[6]=l,_[10]=u,_[14]=h,_[3]=d,_[7]=f,_[11]=p,_[15]=y,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new ze().fromArray(this.elements)},copy:function(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this},copyPosition:function(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this},extractBasis:function(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this},extractRotation:function(e){const t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),s=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromEuler:function(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=s*l,d=s*u,f=o*l,p=o*u;t[0]=a*l,t[4]=-a*u,t[8]=c,t[1]=d+f*c,t[5]=h-p*c,t[9]=-o*a,t[2]=p-h*c,t[6]=f+d*c,t[10]=s*a}else if(e.order==="YXZ"){const h=a*l,d=a*u,f=c*l,p=c*u;t[0]=h+p*o,t[4]=f*o-d,t[8]=s*c,t[1]=s*u,t[5]=s*l,t[9]=-o,t[2]=d*o-f,t[6]=p+h*o,t[10]=s*a}else if(e.order==="ZXY"){const h=a*l,d=a*u,f=c*l,p=c*u;t[0]=h-p*o,t[4]=-s*u,t[8]=f+d*o,t[1]=d+f*o,t[5]=s*l,t[9]=p-h*o,t[2]=-s*c,t[6]=o,t[10]=s*a}else if(e.order==="ZYX"){const h=s*l,d=s*u,f=o*l,p=o*u;t[0]=a*l,t[4]=f*c-d,t[8]=h*c+p,t[1]=a*u,t[5]=p*c+h,t[9]=d*c-f,t[2]=-c,t[6]=o*a,t[10]=s*a}else if(e.order==="YZX"){const h=s*a,d=s*c,f=o*a,p=o*c;t[0]=a*l,t[4]=p-h*u,t[8]=f*u+d,t[1]=u,t[5]=s*l,t[9]=-o*l,t[2]=-c*l,t[6]=d*u+f,t[10]=h-p*u}else if(e.order==="XZY"){const h=s*a,d=s*c,f=o*a,p=o*c;t[0]=a*l,t[4]=-u,t[8]=c*l,t[1]=h*u+p,t[5]=s*l,t[9]=d*u-f,t[2]=f*u-d,t[6]=o*l,t[10]=p*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this},makeRotationFromQuaternion:function(e){return this.compose(hx,e,fx)},lookAt:function(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Pi.crossVectors(n,fn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Pi.crossVectors(n,fn)),Pi.normalize(),Va.crossVectors(fn,Pi),i[0]=Pi.x,i[4]=Va.x,i[8]=fn.x,i[1]=Pi.y,i[5]=Va.y,i[9]=fn.y,i[2]=Pi.z,i[6]=Va.z,i[10]=fn.z,this},multiply:function(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)},premultiply:function(e){return this.multiplyMatrices(e,this)},multiplyMatrices:function(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],a=n[8],c=n[12],l=n[1],u=n[5],h=n[9],d=n[13],f=n[2],p=n[6],y=n[10],_=n[14],m=n[3],g=n[7],v=n[11],b=n[15],x=i[0],E=i[4],w=i[8],P=i[12],A=i[1],Z=i[5],k=i[9],X=i[13],G=i[2],V=i[6],I=i[10],B=i[14],j=i[3],ie=i[7],me=i[11],ge=i[15];return r[0]=s*x+o*A+a*G+c*j,r[4]=s*E+o*Z+a*V+c*ie,r[8]=s*w+o*k+a*I+c*me,r[12]=s*P+o*X+a*B+c*ge,r[1]=l*x+u*A+h*G+d*j,r[5]=l*E+u*Z+h*V+d*ie,r[9]=l*w+u*k+h*I+d*me,r[13]=l*P+u*X+h*B+d*ge,r[2]=f*x+p*A+y*G+_*j,r[6]=f*E+p*Z+y*V+_*ie,r[10]=f*w+p*k+y*I+_*me,r[14]=f*P+p*X+y*B+_*ge,r[3]=m*x+g*A+v*G+b*j,r[7]=m*E+g*Z+v*V+b*ie,r[11]=m*w+g*k+v*I+b*me,r[15]=m*P+g*X+v*B+b*ge,this},multiplyScalar:function(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this},determinant:function(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],a=e[9],c=e[13],l=e[2],u=e[6],h=e[10],d=e[14],f=e[3],p=e[7],y=e[11],_=e[15];return f*(+r*a*u-i*c*u-r*o*h+n*c*h+i*o*d-n*a*d)+p*(+t*a*d-t*c*h+r*s*h-i*s*d+i*c*l-r*a*l)+y*(+t*c*u-t*o*d-r*s*u+n*s*d+r*o*l-n*c*l)+_*(-i*o*l-t*a*u+t*o*h+i*s*u-n*s*h+n*a*l)},transpose:function(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this},getInverse:function(e,t){t!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const n=this.elements,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],p=i[10],y=i[11],_=i[12],m=i[13],g=i[14],v=i[15],b=f*g*h-m*p*h+m*u*y-l*g*y-f*u*v+l*p*v,x=_*p*h-d*g*h-_*u*y+c*g*y+d*u*v-c*p*v,E=d*m*h-_*f*h+_*l*y-c*m*y-d*l*v+c*f*v,w=_*f*u-d*m*u-_*l*p+c*m*p+d*l*g-c*f*g,P=r*b+s*x+o*E+a*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return n[0]=b*A,n[1]=(m*p*a-f*g*a-m*o*y+s*g*y+f*o*v-s*p*v)*A,n[2]=(l*g*a-m*u*a+m*o*h-s*g*h-l*o*v+s*u*v)*A,n[3]=(f*u*a-l*p*a-f*o*h+s*p*h+l*o*y-s*u*y)*A,n[4]=x*A,n[5]=(d*g*a-_*p*a+_*o*y-r*g*y-d*o*v+r*p*v)*A,n[6]=(_*u*a-c*g*a-_*o*h+r*g*h+c*o*v-r*u*v)*A,n[7]=(c*p*a-d*u*a+d*o*h-r*p*h-c*o*y+r*u*y)*A,n[8]=E*A,n[9]=(_*f*a-d*m*a-_*s*y+r*m*y+d*s*v-r*f*v)*A,n[10]=(c*m*a-_*l*a+_*s*h-r*m*h-c*s*v+r*l*v)*A,n[11]=(d*l*a-c*f*a-d*s*h+r*f*h+c*s*y-r*l*y)*A,n[12]=w*A,n[13]=(d*m*o-_*f*o+_*s*p-r*m*p-d*s*g+r*f*g)*A,n[14]=(_*l*o-c*m*o-_*s*u+r*m*u+c*s*g-r*l*g)*A,n[15]=(c*f*o-d*l*o+d*s*u-r*f*u-c*s*p+r*l*p)*A,this},scale:function(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this},getMaxScaleOnAxis:function(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))},makeTranslation:function(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this},makeRotationX:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this},makeRotationY:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this},makeRotationZ:function(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,a=e.z,c=r*s,l=r*o;return this.set(c*s+n,c*o-i*a,c*a+i*o,0,c*o+i*a,l*o+n,l*a-i*s,0,c*a-i*o,l*a+i*s,r*a*a+n,0,0,0,0,1),this},makeScale:function(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this},makeShear:function(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this},compose:function(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,a=t._w,c=r+r,l=s+s,u=o+o,h=r*c,d=r*l,f=r*u,p=s*l,y=s*u,_=o*u,m=a*c,g=a*l,v=a*u,b=n.x,x=n.y,E=n.z;return i[0]=(1-(p+_))*b,i[1]=(d+v)*b,i[2]=(f-g)*b,i[3]=0,i[4]=(d-v)*x,i[5]=(1-(h+_))*x,i[6]=(y+m)*x,i[7]=0,i[8]=(f+g)*E,i[9]=(y-m)*E,i[10]=(1-(h+p))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this},decompose:function(e,t,n){const i=this.elements;let r=Wr.set(i[0],i[1],i[2]).length(),s=Wr.set(i[4],i[5],i[6]).length(),o=Wr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const c=1/r,l=1/s,u=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=l,Nn.elements[5]*=l,Nn.elements[6]*=l,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=r,n.y=s,n.z=o,this},makePerspective:function(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,a=2*r/(t-e),c=2*r/(n-i),l=(t+e)/(t-e),u=(n+i)/(n-i),h=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=a,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(e,t,n,i,r,s){const o=this.elements,a=1/(t-e),c=1/(n-i),l=1/(s-r),u=(t+e)*a,h=(n+i)*c,d=(s+r)*l;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0},fromArray:function(e,t){t===void 0&&(t=0);for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}});const Fd=new ze,Nd=new Pt;function Ur(e=0,t=0,n=0,i=Ur.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}Ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];Ur.DefaultOrder="XYZ";Object.defineProperties(Ur.prototype,{x:{get:function(){return this._x},set:function(e){this._x=e,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(e){this._y=e,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(e){this._z=e,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(e){this._order=e,this._onChangeCallback()}}});Object.assign(Ur.prototype,{isEuler:!0,set:function(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this},setFromRotationMatrix:function(e,t,n){const i=ke.clamp,r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(i(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-i(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(i(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(i(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-i(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(e,t,n){return Fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fd,t,n)},setFromVector3:function(e,t){return this.set(e.x,e.y,e.z,t||this._order)},reorder:function(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)},equals:function(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order},fromArray:function(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e},toVector3:function(e){return e?e.set(this._x,this._y,this._z):new R(this._x,this._y,this._z)},_onChange:function(e){return this._onChangeCallback=e,this},_onChangeCallback:function(){}});function pf(){this.mask=1}Object.assign(pf.prototype,{set:function(e){this.mask=1<<e|0},enable:function(e){this.mask|=1<<e|0},enableAll:function(){this.mask=-1},toggle:function(e){this.mask^=1<<e|0},disable:function(e){this.mask&=~(1<<e|0)},disableAll:function(){this.mask=0},test:function(e){return(this.mask&e.mask)!==0}});let dx=0;const kd=new R,jr=new Pt,fi=new ze,Wa=new R,oo=new R,px=new R,mx=new Pt,Bd=new R(1,0,0),Ud=new R(0,1,0),Hd=new R(0,0,1),gx={type:"added"},yx={type:"removed"};function xe(){Object.defineProperty(this,"id",{value:dx++}),this.uuid=ke.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DefaultUp.clone();const e=new R,t=new Ur,n=new Pt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new rn}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}xe.DefaultUp=new R(0,1,0);xe.DefaultMatrixAutoUpdate=!0;xe.prototype=Object.assign(Object.create(Wn.prototype),{constructor:xe,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this},rotateOnWorldAxis:function(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this},rotateX:function(e){return this.rotateOnAxis(Bd,e)},rotateY:function(e){return this.rotateOnAxis(Ud,e)},rotateZ:function(e){return this.rotateOnAxis(Hd,e)},translateOnAxis:function(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(Bd,e)},translateY:function(e){return this.translateOnAxis(Ud,e)},translateZ:function(e){return this.translateOnAxis(Hd,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(fi.getInverse(this.matrixWorld))},lookAt:function(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(oo,Wa,this.up):fi.lookAt(Wa,oo,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(fi),this.quaternion.premultiply(jr.inverse()))},add:function(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yx)),this},attach:function(e){return this.updateWorldMatrix(!0,!1),fi.getInverse(this.matrixWorld),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new R),this.updateMatrixWorld(!0),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Pt),this.updateMatrixWorld(!0),this.matrixWorld.decompose(oo,e,px),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new R),this.updateMatrixWorld(!0),this.matrixWorld.decompose(oo,mx,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new R),this.updateMatrixWorld(!0);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)},traverseAncestors:function(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(e.shapes,u)}else r(e.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(e.materials,this.material[a]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(t){const o=s(e.geometries),a=s(e.materials),c=s(e.textures),l=s(e.images),u=s(e.shapes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}});function Ho(){xe.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ho.prototype=Object.assign(Object.create(xe.prototype),{constructor:Ho,isScene:!0,copy:function(e,t){return xe.prototype.copy.call(this,e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this},toJSON:function(e){const t=xe.prototype.toJSON.call(this,e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t},dispose:function(){this.dispatchEvent({type:"dispose"})}});const di=[new R,new R,new R,new R,new R,new R,new R,new R],ao=new R,hu=new jn,Xr=new R,Yr=new R,qr=new R,Ci=new R,Ii=new R,cr=new R,co=new R,ja=new R,Xa=new R,lr=new R;function jn(e,t){this.min=e!==void 0?e:new R(1/0,1/0,1/0),this.max=t!==void 0?t:new R(-1/0,-1/0,-1/0)}Object.assign(jn.prototype,{isBox3:!0,set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromArray:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let a=0,c=e.length;a<c;a+=3){const l=e[a],u=e[a+1],h=e[a+2];l<t&&(t=l),u<n&&(n=u),h<i&&(i=h),l>r&&(r=l),u>s&&(s=u),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,s,o),this},setFromBufferAttribute:function(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let a=0,c=e.count;a<c;a++){const l=e.getX(a),u=e.getY(a),h=e.getZ(a);l<t&&(t=l),u<n&&(n=u),h<i&&(i=h),l>r&&(r=l),u>s&&(s=u),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,s,o),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){const n=ao.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},setFromObject:function(e){return this.makeEmpty(),this.expandByObject(e)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new R),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new R),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},expandByObject:function(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),hu.copy(t.boundingBox),hu.applyMatrix4(e.matrixWorld),this.union(hu));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new R),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)},intersectsSphere:function(e){return this.clampPoint(e.center,ao),ao.distanceToSquared(e.center)<=e.radius*e.radius},intersectsPlane:function(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant},intersectsTriangle:function(e){if(this.isEmpty())return!1;this.getCenter(co),ja.subVectors(this.max,co),Xr.subVectors(e.a,co),Yr.subVectors(e.b,co),qr.subVectors(e.c,co),Ci.subVectors(Yr,Xr),Ii.subVectors(qr,Yr),cr.subVectors(Xr,qr);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-cr.z,cr.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,cr.z,0,-cr.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-cr.y,cr.x,0];return!fu(t,Xr,Yr,qr,ja)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,Xr,Yr,qr,ja))?!1:(Xa.crossVectors(Ci,Ii),t=[Xa.x,Xa.y,Xa.z],fu(t,Xr,Yr,qr,ja))},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new R),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return ao.copy(e).clamp(this.min,this.max).sub(e).length()},getBoundingSphere:function(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(ao).length()*.5,e},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},applyMatrix4:function(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});function fu(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){lr.fromArray(e,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=t.dot(lr),l=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _x=new jn;function ui(e,t){this.center=e!==void 0?e:new R,this.radius=t!==void 0?t:-1}Object.assign(ui.prototype,{set:function(e,t){return this.center.copy(e),this.radius=t,this},setFromPoints:function(e,t){const n=this.center;t!==void 0?n.copy(t):_x.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.center.copy(e.center),this.radius=e.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(e){return e.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(e){return e.distanceTo(this.center)-this.radius},intersectsSphere:function(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t},intersectsBox:function(e){return e.intersectsSphere(this)},intersectsPlane:function(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius},clampPoint:function(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new R),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t},getBoundingBox:function(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new jn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)},applyMatrix4:function(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this},translate:function(e){return this.center.add(e),this},equals:function(e){return e.center.equals(this.center)&&e.radius===this.radius}});const pi=new R,du=new R,Ya=new R,Di=new R,pu=new R,qa=new R,mu=new R;function Qs(e,t){this.origin=e!==void 0?e:new R,this.direction=t!==void 0?t:new R(0,0,-1)}Object.assign(Qs.prototype,{set:function(e,t){return this.origin.copy(e),this.direction.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this},at:function(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new R),t.copy(this.direction).multiplyScalar(e).add(this.origin)},lookAt:function(e){return this.direction.copy(e).sub(this.origin).normalize(),this},recast:function(e){return this.origin.copy(this.at(e,pi)),this},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new R),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)},distanceToPoint:function(e){return Math.sqrt(this.distanceSqToPoint(e))},distanceSqToPoint:function(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.direction).multiplyScalar(t).add(this.origin),pi.distanceToSquared(e))},distanceSqToSegment:function(e,t,n,i){du.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(du);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ya),o=Di.dot(this.direction),a=-Di.dot(Ya),c=Di.lengthSq(),l=Math.abs(1-s*s);let u,h,d,f;if(l>0)if(u=s*a-o,h=s*o-a,f=r*l,u>=0)if(h>=-f)if(h<=f){const p=1/l;u*=p,h*=p,d=u*(u+s*h+2*o)+h*(s*u+h+2*a)+c}else h=r,u=Math.max(0,-(s*h+o)),d=-u*u+h*(h+2*a)+c;else h=-r,u=Math.max(0,-(s*h+o)),d=-u*u+h*(h+2*a)+c;else h<=-f?(u=Math.max(0,-(-s*r+o)),h=u>0?-r:Math.min(Math.max(-r,-a),r),d=-u*u+h*(h+2*a)+c):h<=f?(u=0,h=Math.min(Math.max(-r,-a),r),d=h*(h+2*a)+c):(u=Math.max(0,-(s*r+o)),h=u>0?r:Math.min(Math.max(-r,-a),r),d=-u*u+h*(h+2*a)+c);else h=s>0?-r:r,u=Math.max(0,-(s*h+o)),d=-u*u+h*(h+2*a)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ya).multiplyScalar(h).add(du),d},intersectSphere:function(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,a=n+s;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)},intersectsSphere:function(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius},distanceToPlane:function(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null},intersectPlane:function(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)},intersectsPlane:function(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0},intersectBox:function(e,t){let n,i,r,s,o,a;const c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),l>=0?(r=(e.min.y-h.y)*l,s=(e.max.y-h.y)*l):(r=(e.max.y-h.y)*l,s=(e.min.y-h.y)*l),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),u>=0?(o=(e.min.z-h.z)*u,a=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,a=(e.min.z-h.z)*u),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)},intersectsBox:function(e){return this.intersectBox(e,pi)!==null},intersectTriangle:function(e,t,n,i,r){pu.subVectors(t,e),qa.subVectors(n,e),mu.crossVectors(pu,qa);let s=this.direction.dot(mu),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Di.subVectors(this.origin,e);const a=o*this.direction.dot(qa.crossVectors(Di,qa));if(a<0)return null;const c=o*this.direction.dot(pu.cross(Di));if(c<0||a+c>s)return null;const l=-o*Di.dot(mu);return l<0?null:this.at(l/s,r)},applyMatrix4:function(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this},equals:function(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}});const gu=new R,vx=new R,bx=new rn;function Qn(e,t){this.normal=e!==void 0?e:new R(1,0,0),this.constant=t!==void 0?t:0}Object.assign(Qn.prototype,{isPlane:!0,set:function(e,t){return this.normal.copy(e),this.constant=t,this},setComponents:function(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this},setFromCoplanarPoints:function(e,t,n){const i=gu.subVectors(n,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.normal.copy(e.normal),this.constant=e.constant,this},normalize:function(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(e){return this.normal.dot(e)+this.constant},distanceToSphere:function(e){return this.distanceToPoint(e.center)-e.radius},projectPoint:function(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new R),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)},intersectLine:function(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new R);const n=e.delta(gu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const r=-(e.start.dot(this.normal)+this.constant)/i;if(!(r<0||r>1))return t.copy(n).multiplyScalar(r).add(e.start)},intersectsLine:function(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0},intersectsBox:function(e){return e.intersectsPlane(this)},intersectsSphere:function(e){return e.intersectsPlane(this)},coplanarPoint:function(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new R),e.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(e,t){const n=t||bx.getNormalMatrix(e),i=this.coplanarPoint(gu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this},translate:function(e){return this.constant-=e.dot(this.normal),this},equals:function(e){return e.normal.equals(this.normal)&&e.constant===this.constant}});const Un=new R,yi=new R,yu=new R,mi=new R,Zr=new R,Jr=new R,zd=new R,_u=new R,vu=new R,bu=new R;function Gt(e,t,n){this.a=e!==void 0?e:new R,this.b=t!==void 0?t:new R,this.c=n!==void 0?n:new R}Object.assign(Gt,{getNormal:function(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new R),i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)},getBarycoord:function(e,t,n,i,r){Un.subVectors(i,t),yi.subVectors(n,t),yu.subVectors(e,t);const s=Un.dot(Un),o=Un.dot(yi),a=Un.dot(yu),c=yi.dot(yi),l=yi.dot(yu),u=s*c-o*o;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new R),u===0)return r.set(-2,-1,-1);const h=1/u,d=(c*a-o*l)*h,f=(s*l-o*a)*h;return r.set(1-d-f,f,d)},containsPoint:function(e,t,n,i){return Gt.getBarycoord(e,t,n,i,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1},getUV:function(e,t,n,i,r,s,o,a){return this.getBarycoord(e,t,n,i,mi),a.set(0,0),a.addScaledVector(r,mi.x),a.addScaledVector(s,mi.y),a.addScaledVector(o,mi.z),a},isFrontFacing:function(e,t,n,i){return Un.subVectors(n,t),yi.subVectors(e,t),Un.cross(yi).dot(i)<0}});Object.assign(Gt.prototype,{set:function(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this},setFromPointsAndIndices:function(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this},getArea:function(){return Un.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Un.cross(yi).length()*.5},getMidpoint:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new R),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(e){return Gt.getNormal(this.a,this.b,this.c,e)},getPlane:function(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Qn),e.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)},getUV:function(e,t,n,i,r){return Gt.getUV(e,this.a,this.b,this.c,t,n,i,r)},containsPoint:function(e){return Gt.containsPoint(e,this.a,this.b,this.c)},isFrontFacing:function(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)},intersectsBox:function(e){return e.intersectsTriangle(this)},closestPointToPoint:function(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new R);const n=this.a,i=this.b,r=this.c;let s,o;Zr.subVectors(i,n),Jr.subVectors(r,n),_u.subVectors(e,n);const a=Zr.dot(_u),c=Jr.dot(_u);if(a<=0&&c<=0)return t.copy(n);vu.subVectors(e,i);const l=Zr.dot(vu),u=Jr.dot(vu);if(l>=0&&u<=l)return t.copy(i);const h=a*u-l*c;if(h<=0&&a>=0&&l<=0)return s=a/(a-l),t.copy(n).addScaledVector(Zr,s);bu.subVectors(e,r);const d=Zr.dot(bu),f=Jr.dot(bu);if(f>=0&&d<=f)return t.copy(r);const p=d*c-a*f;if(p<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Jr,o);const y=l*f-d*u;if(y<=0&&u-l>=0&&d-f>=0)return zd.subVectors(r,i),o=(u-l)/(u-l+(d-f)),t.copy(i).addScaledVector(zd,o);const _=1/(y+p+h);return s=p*_,o=h*_,t.copy(n).addScaledVector(Zr,s).addScaledVector(Jr,o)},equals:function(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}});const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Za={h:0,s:0,l:0};function _e(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}function xu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function wu(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Mu(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}Object.assign(_e.prototype,{isColor:!0,r:1,g:1,b:1,set:function(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this},setScalar:function(e){return this.r=e,this.g=e,this.b=e,this},setHex:function(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this},setRGB:function(e,t,n){return this.r=e,this.g=t,this.b=n,this},setHSL:function(e,t,n){if(e=ke.euclideanModulo(e,1),t=ke.clamp(t,0,1),n=ke.clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=xu(r,i,e+1/3),this.g=xu(r,i,e),this.b=xu(r,i,e-1/3)}return this},setStyle:function(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let i;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(i=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[5]),this;if(i=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[5]),this;break;case"hsl":case"hsla":if(i=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(s)){const o=parseFloat(i[1])/360,a=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[5]),this.setHSL(o,a,c)}break}}else if(n=/^\#([A-Fa-f0-9]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this},setColorName:function(e){const t=bg[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(e){return this.r=e.r,this.g=e.g,this.b=e.b,this},copyGammaToLinear:function(e,t){return t===void 0&&(t=2),this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this},copyLinearToGamma:function(e,t){t===void 0&&(t=2);const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this},convertGammaToLinear:function(e){return this.copyGammaToLinear(this,e),this},convertLinearToGamma:function(e){return this.copyLinearToGamma(this,e),this},copySRGBToLinear:function(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this},copyLinearToSRGB:function(e){return this.r=Mu(e.r),this.g=Mu(e.g),this.b=Mu(e.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),s=Math.min(t,n,i);let o,a;const c=(s+r)/2;if(s===r)o=0,a=0;else{const l=r-s;switch(a=c<=.5?l/(r+s):l/(2-r-s),r){case t:o=(n-i)/l+(n<i?6:0);break;case n:o=(i-t)/l+2;break;case i:o=(t-n)/l+4;break}o/=6}return e.h=o,e.s=a,e.l=c,e},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(e,t,n){return this.getHSL(kn),kn.h+=e,kn.s+=t,kn.l+=n,this.setHSL(kn.h,kn.s,kn.l),this},add:function(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this},addColors:function(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this},addScalar:function(e){return this.r+=e,this.g+=e,this.b+=e,this},sub:function(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this},multiply:function(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this},multiplyScalar:function(e){return this.r*=e,this.g*=e,this.b*=e,this},lerp:function(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this},lerpHSL:function(e,t){this.getHSL(kn),e.getHSL(Za);const n=ke.lerp(kn.h,Za.h,t),i=ke.lerp(kn.s,Za.s,t),r=ke.lerp(kn.l,Za.l,t);return this.setHSL(n,i,r),this},equals:function(e){return e.r===this.r&&e.g===this.g&&e.b===this.b},fromArray:function(e,t){return t===void 0&&(t=0),this.r=e[t],this.g=e[t+1],this.b=e[t+2],this},toArray:function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=0),e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e},fromBufferAttribute:function(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});_e.NAMES=bg;function Kc(e,t,n,i,r,s){this.a=e,this.b=t,this.c=n,this.normal=i&&i.isVector3?i:new R,this.vertexNormals=Array.isArray(i)?i:[],this.color=r&&r.isColor?r:new _e,this.vertexColors=Array.isArray(r)?r:[],this.materialIndex=s!==void 0?s:0}Object.assign(Kc.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,n=e.vertexNormals.length;t<n;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,n=e.vertexColors.length;t<n;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}});let xx=0;function Fe(){Object.defineProperty(this,"id",{value:xx++}),this.uuid=ke.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=To,this.side=Js,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dg,this.blendDst=pg,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lu,this.stencilZFail=lu,this.stencilZPass=lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Fe.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Fe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===fg;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}},toJSON:function(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==Js&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Fe.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function Zt(e){Fe.call(this),this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}Zt.prototype=Object.create(Fe.prototype);Zt.prototype.constructor=Zt;Zt.prototype.isMeshBasicMaterial=!0;Zt.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};const at=new R,Ja=new ae;function Ie(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Wl,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ie.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(Ie.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new _e),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this},copyVector2sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new ae),t[n++]=s.x,t[n++]=s.y}return this},copyVector3sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new R),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this},copyVector4sArray:function(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new nt),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this},applyMatrix4:function(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this},applyNormalMatrix:function(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this},transformDirection:function(e){for(let t=0,n=this.count;t<n;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function eh(e,t,n){Ie.call(this,new Int8Array(e),t,n)}eh.prototype=Object.create(Ie.prototype);eh.prototype.constructor=eh;function th(e,t,n){Ie.call(this,new Uint8Array(e),t,n)}th.prototype=Object.create(Ie.prototype);th.prototype.constructor=th;function nh(e,t,n){Ie.call(this,new Uint8ClampedArray(e),t,n)}nh.prototype=Object.create(Ie.prototype);nh.prototype.constructor=nh;function ih(e,t,n){Ie.call(this,new Int16Array(e),t,n)}ih.prototype=Object.create(Ie.prototype);ih.prototype.constructor=ih;function zo(e,t,n){Ie.call(this,new Uint16Array(e),t,n)}zo.prototype=Object.create(Ie.prototype);zo.prototype.constructor=zo;function rh(e,t,n){Ie.call(this,new Int32Array(e),t,n)}rh.prototype=Object.create(Ie.prototype);rh.prototype.constructor=rh;function Go(e,t,n){Ie.call(this,new Uint32Array(e),t,n)}Go.prototype=Object.create(Ie.prototype);Go.prototype.constructor=Go;function Me(e,t,n){Ie.call(this,new Float32Array(e),t,n)}Me.prototype=Object.create(Ie.prototype);Me.prototype.constructor=Me;function sh(e,t,n){Ie.call(this,new Float64Array(e),t,n)}sh.prototype=Object.create(Ie.prototype);sh.prototype.constructor=sh;function xg(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(xg.prototype,{computeGroups:function(e){const t=[];let n,i,r;const s=e.faces;for(i=0;i<s.length;i++){const o=s[i];o.materialIndex!==r&&(r=o.materialIndex,n!==void 0&&(n.count=i*3-n.start,t.push(n)),n={start:i*3,materialIndex:r})}n!==void 0&&(n.count=i*3-n.start,t.push(n)),this.groups=t},fromGeometry:function(e){const t=e.faces,n=e.vertices,i=e.faceVertexUvs,r=i[0]&&i[0].length>0,s=i[1]&&i[1].length>0,o=e.morphTargets,a=o.length;let c;if(a>0){c=[];for(let _=0;_<a;_++)c[_]={name:o[_].name,data:[]};this.morphTargets.position=c}const l=e.morphNormals,u=l.length;let h;if(u>0){h=[];for(let _=0;_<u;_++)h[_]={name:l[_].name,data:[]};this.morphTargets.normal=h}const d=e.skinIndices,f=e.skinWeights,p=d.length===n.length,y=f.length===n.length;n.length>0&&t.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let _=0;_<t.length;_++){const m=t[_];this.vertices.push(n[m.a],n[m.b],n[m.c]);const g=m.vertexNormals;if(g.length===3)this.normals.push(g[0],g[1],g[2]);else{const b=m.normal;this.normals.push(b,b,b)}const v=m.vertexColors;if(v.length===3)this.colors.push(v[0],v[1],v[2]);else{const b=m.color;this.colors.push(b,b,b)}if(r===!0){const b=i[0][_];b!==void 0?this.uvs.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",_),this.uvs.push(new ae,new ae,new ae))}if(s===!0){const b=i[1][_];b!==void 0?this.uvs2.push(b[0],b[1],b[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",_),this.uvs2.push(new ae,new ae,new ae))}for(let b=0;b<a;b++){const x=o[b].vertices;c[b].data.push(x[m.a],x[m.b],x[m.c])}for(let b=0;b<u;b++){const x=l[b].vertexNormals[_];h[b].data.push(x.a,x.b,x.c)}p&&this.skinIndices.push(d[m.a],d[m.b],d[m.c]),y&&this.skinWeights.push(f[m.a],f[m.b],f[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}});function wg(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,i=e.length;n<i;++n)e[n]>t&&(t=e[n]);return t}let wx=1;const Yn=new ze,Eu=new xe,Kr=new R,dn=new jn,lo=new jn,Nt=new R;function Te(){Object.defineProperty(this,"id",{value:wx+=2}),this.uuid=ke.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Te.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Te,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){Array.isArray(e)?this.index=new(wg(e)>65535?Go:zo)(e,1):this.index=e},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},addGroup:function(e,t,n){this.groups.push({start:e,count:t,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this},rotateY:function(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this},rotateZ:function(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this},translate:function(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this},scale:function(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this},lookAt:function(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this},setFromObject:function(e){const t=e.geometry;if(e.isPoints||e.isLine){const n=new Me(t.vertices.length*3,3),i=new Me(t.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(t.vertices)),this.setAttribute("color",i.copyColorsArray(t.colors)),t.lineDistances&&t.lineDistances.length===t.vertices.length){const r=new Me(t.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(t.lineDistances))}t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone())}else e.isMesh&&t&&t.isGeometry&&this.fromGeometry(t);return this},setFromPoints:function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(t,3)),this},updateFromObject:function(e){let t=e.geometry;if(e.isMesh){let n=t.__directGeometry;if(t.elementsNeedUpdate===!0&&(n=void 0,t.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(t);n.verticesNeedUpdate=t.verticesNeedUpdate,n.normalsNeedUpdate=t.normalsNeedUpdate,n.colorsNeedUpdate=t.colorsNeedUpdate,n.uvsNeedUpdate=t.uvsNeedUpdate,n.groupsNeedUpdate=t.groupsNeedUpdate,t.verticesNeedUpdate=!1,t.normalsNeedUpdate=!1,t.colorsNeedUpdate=!1,t.uvsNeedUpdate=!1,t.groupsNeedUpdate=!1,t=n}if(t.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(t.vertices),n.needsUpdate=!0),t.verticesNeedUpdate=!1}if(t.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(t.normals),n.needsUpdate=!0),t.normalsNeedUpdate=!1}if(t.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(t.colors),n.needsUpdate=!0),t.colorsNeedUpdate=!1}if(t.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(t.uvs),n.needsUpdate=!0),t.uvsNeedUpdate=!1}if(t.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(t.lineDistances),n.needsUpdate=!0),t.lineDistancesNeedUpdate=!1}return t.groupsNeedUpdate&&(t.computeGroups(e.geometry),this.groups=t.groups,t.groupsNeedUpdate=!1),this},fromGeometry:function(e){return e.__directGeometry=new xg().fromGeometry(e),this.fromDirectGeometry(e.__directGeometry)},fromDirectGeometry:function(e){const t=new Float32Array(e.vertices.length*3);if(this.setAttribute("position",new Ie(t,3).copyVector3sArray(e.vertices)),e.normals.length>0){const n=new Float32Array(e.normals.length*3);this.setAttribute("normal",new Ie(n,3).copyVector3sArray(e.normals))}if(e.colors.length>0){const n=new Float32Array(e.colors.length*3);this.setAttribute("color",new Ie(n,3).copyColorsArray(e.colors))}if(e.uvs.length>0){const n=new Float32Array(e.uvs.length*2);this.setAttribute("uv",new Ie(n,2).copyVector2sArray(e.uvs))}if(e.uvs2.length>0){const n=new Float32Array(e.uvs2.length*2);this.setAttribute("uv2",new Ie(n,2).copyVector2sArray(e.uvs2))}this.groups=e.groups;for(const n in e.morphTargets){const i=[],r=e.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new Me(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(e.skinIndices.length>0){const n=new Me(e.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(e.skinIndices))}if(e.skinWeights.length>0){const n=new Me(e.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(e.skinWeights))}return e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];lo.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(dn.min,lo.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,lo.max),dn.expandByPoint(Nt)):(dn.expandByPoint(lo.min),dn.expandByPoint(lo.max))}dn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Nt.fromBufferAttribute(o,c),a&&(Kr.fromBufferAttribute(e,c),Nt.add(Kr)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new R,r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,u=new R;if(e)for(let h=0,d=e.count;h<d;h+=3){const f=e.getX(h+0),p=e.getX(h+1),y=e.getX(h+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,y),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,o=e.attributes[i],a=o.array,c=o.itemSize*t,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)},toNonIndexed:function(){function e(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let d=0,f=0;for(let p=0,y=a.length;p<y;p++){d=a[p]*l;for(let _=0;_<l;_++)h[f++]=c[d++]}return new Ie(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const t=new Te,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=e(a,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],d=e(h,n);a.push(d)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t},toJSON:function(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(e[c]=a[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(e.data);c.name!==""&&(l.name=c.name),e.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=d.toJSON(e.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e},clone:function(){return new Te().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Gd=new ze,ur=new Qs,Su=new ui,Oi=new R,Fi=new R,Ni=new R,Tu=new R,Au=new R,Ru=new R,Ka=new R,Qa=new R,$a=new R,hs=new ae,fs=new ae,ds=new ae,Ro=new R,ec=new R;function st(e,t){xe.call(this),this.type="Mesh",this.geometry=e!==void 0?e:new Te,this.material=t!==void 0?t:new Zt,this.updateMorphTargets()}st.prototype=Object.assign(Object.create(xe.prototype),{constructor:st,isMesh:!0,copy:function(e){return xe.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Su.copy(n.boundingSphere),Su.applyMatrix4(r),e.ray.intersectsSphere(Su)===!1)||(Gd.getInverse(r),ur.copy(e.ray).applyMatrix4(Gd),n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const _=d[p],m=i[_.materialIndex],g=Math.max(_.start,f.start),v=Math.min(_.start+_.count,f.start+f.count);for(let b=g,x=v;b<x;b+=3){const E=o.getX(b),w=o.getX(b+1),P=o.getX(b+2);s=tc(this,m,e,ur,a,c,l,u,h,E,w,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let _=p,m=y;_<m;_+=3){const g=o.getX(_),v=o.getX(_+1),b=o.getX(_+2);s=tc(this,i,e,ur,a,c,l,u,h,g,v,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=d.length;p<y;p++){const _=d[p],m=i[_.materialIndex],g=Math.max(_.start,f.start),v=Math.min(_.start+_.count,f.start+f.count);for(let b=g,x=v;b<x;b+=3){const E=b,w=b+1,P=b+2;s=tc(this,m,e,ur,a,c,l,u,h,E,w,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let _=p,m=y;_<m;_+=3){const g=_,v=_+1,b=_+2;s=tc(this,i,e,ur,a,c,l,u,h,g,v,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const u=n.faceVertexUvs[0];u.length>0&&(l=u);for(let h=0,d=c.length;h<d;h++){const f=c[h],p=o?i[f.materialIndex]:i;if(p===void 0)continue;const y=a[f.a],_=a[f.b],m=a[f.c];if(s=Mg(this,p,e,ur,y,_,m,Ro),s){if(l&&l[h]){const g=l[h];hs.copy(g[0]),fs.copy(g[1]),ds.copy(g[2]),s.uv=Gt.getUV(Ro,y,_,m,hs,fs,ds,new ae)}s.face=f,s.faceIndex=h,t.push(s)}}}}});function Mg(e,t,n,i,r,s,o,a){let c;if(t.side===kt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side!==Ks,a),c===null)return null;ec.copy(a),ec.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(ec);return l<n.near||l>n.far?null:{distance:l,point:ec.clone(),object:e}}function tc(e,t,n,i,r,s,o,a,c,l,u,h){Oi.fromBufferAttribute(r,l),Fi.fromBufferAttribute(r,u),Ni.fromBufferAttribute(r,h);const d=e.morphTargetInfluences;if(t.morphTargets&&s&&d){Ka.set(0,0,0),Qa.set(0,0,0),$a.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const _=d[p],m=s[p];_!==0&&(Tu.fromBufferAttribute(m,l),Au.fromBufferAttribute(m,u),Ru.fromBufferAttribute(m,h),o?(Ka.addScaledVector(Tu,_),Qa.addScaledVector(Au,_),$a.addScaledVector(Ru,_)):(Ka.addScaledVector(Tu.sub(Oi),_),Qa.addScaledVector(Au.sub(Fi),_),$a.addScaledVector(Ru.sub(Ni),_)))}Oi.add(Ka),Fi.add(Qa),Ni.add($a)}e.isSkinnedMesh&&(e.boneTransform(l,Oi),e.boneTransform(u,Fi),e.boneTransform(h,Ni));const f=Mg(e,t,n,i,Oi,Fi,Ni,Ro);if(f){a&&(hs.fromBufferAttribute(a,l),fs.fromBufferAttribute(a,u),ds.fromBufferAttribute(a,h),f.uv=Gt.getUV(Ro,Oi,Fi,Ni,hs,fs,ds,new ae)),c&&(hs.fromBufferAttribute(c,l),fs.fromBufferAttribute(c,u),ds.fromBufferAttribute(c,h),f.uv2=Gt.getUV(Ro,Oi,Fi,Ni,hs,fs,ds,new ae));const p=new Kc(l,u,h);Gt.getNormal(Oi,Fi,Ni,p.normal),f.face=p}return f}let Mx=0;const qn=new ze,Lu=new xe,nc=new R;function Ne(){Object.defineProperty(this,"id",{value:Mx+=2}),this.uuid=ke.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Ne.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Ne,isGeometry:!0,applyMatrix4:function(e){const t=new rn().getNormalMatrix(e);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(e);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(t).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(t).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this},rotateY:function(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this},rotateZ:function(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this},translate:function(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this},scale:function(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this},lookAt:function(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this},fromBufferGeometry:function(e){const t=this,n=e.index!==null?e.index:void 0,i=e.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)t.vertices.push(new R().fromBufferAttribute(r,h)),o!==void 0&&t.colors.push(new _e().fromBufferAttribute(o,h));function l(h,d,f,p){const y=o===void 0?[]:[t.colors[h].clone(),t.colors[d].clone(),t.colors[f].clone()],_=s===void 0?[]:[new R().fromBufferAttribute(s,h),new R().fromBufferAttribute(s,d),new R().fromBufferAttribute(s,f)],m=new Kc(h,d,f,_,y,p);t.faces.push(m),a!==void 0&&t.faceVertexUvs[0].push([new ae().fromBufferAttribute(a,h),new ae().fromBufferAttribute(a,d),new ae().fromBufferAttribute(a,f)]),c!==void 0&&t.faceVertexUvs[1].push([new ae().fromBufferAttribute(c,h),new ae().fromBufferAttribute(c,d),new ae().fromBufferAttribute(c,f)])}const u=e.groups;if(u.length>0)for(let h=0;h<u.length;h++){const d=u[h],f=d.start,p=d.count;for(let y=f,_=f+p;y<_;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),d.materialIndex):l(y,y+1,y+2,d.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(nc).negate(),this.translate(nc.x,nc.y,nc.z),this},normalize:function(){this.computeBoundingSphere();const e=this.boundingSphere.center,t=this.boundingSphere.radius,n=t===0?1:1/t,i=new ze;return i.set(n,0,0,-n*e.x,0,n,0,-n*e.y,0,0,n,-n*e.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const e=new R,t=new R;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];e.subVectors(a,o),t.subVectors(s,o),e.cross(t),e.normalize(),r.normal.copy(e)}},computeVertexNormals:function(e){e===void 0&&(e=!0);const t=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)t[n]=new R;if(e){const n=new R,i=new R;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),t[o.a].add(n),t[o.b].add(n),t[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];t[r.a].add(r.normal),t[r.b].add(r.normal),t[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)t[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(t[r.a]),s[1].copy(t[r.b]),s[2].copy(t[r.c])):(s[0]=t[r.a].clone(),s[1]=t[r.b].clone(),s[2]=t[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let e=0,t=this.faces.length;e<t;e++){const n=this.faces[e],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const e=new Ne;e.faces=this.faces;for(let t=0,n=this.morphTargets.length;t<n;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];const r=this.morphNormals[t].faceNormals,s=this.morphNormals[t].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new R,l={a:new R,b:new R,c:new R};r.push(c),s.push(l)}}const i=this.morphNormals[t];e.vertices=this.morphTargets[t].vertices,e.computeFaceNormals(),e.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let t=0,n=this.faces.length;t<n;t++){const i=this.faces[t];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.setFromPoints(this.vertices)},merge:function(e,t,n){if(!(e&&e.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",e);return}let i,r=this.vertices.length,s=this.vertices,o=e.vertices,a=this.faces,c=e.faces,l=this.colors,u=e.colors;n===void 0&&(n=0),t!==void 0&&(i=new rn().getNormalMatrix(t));for(let h=0,d=o.length;h<d;h++){const p=o[h].clone();t!==void 0&&p.applyMatrix4(t),s.push(p)}for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone());for(let h=0,d=c.length;h<d;h++){let f=c[h],p,y,_,m=f.vertexNormals,g=f.vertexColors;p=new Kc(f.a+r,f.b+r,f.c+r),p.normal.copy(f.normal),i!==void 0&&p.normal.applyMatrix3(i).normalize();for(let v=0,b=m.length;v<b;v++)y=m[v].clone(),i!==void 0&&y.applyMatrix3(i).normalize(),p.vertexNormals.push(y);p.color.copy(f.color);for(let v=0,b=g.length;v<b;v++)_=g[v],p.vertexColors.push(_.clone());p.materialIndex=f.materialIndex+n,a.push(p)}for(let h=0,d=e.faceVertexUvs.length;h<d;h++){const f=e.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=f.length;p<y;p++){const _=f[p],m=[];for(let g=0,v=_.length;g<v;g++)m.push(_[g].clone());this.faceVertexUvs[h].push(m)}}},mergeMesh:function(e){if(!(e&&e.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",e);return}e.matrixAutoUpdate&&e.updateMatrix(),this.merge(e.geometry,e.matrix)},mergeVertices:function(){const e={},t=[],n=[],r=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],u=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);e[u]===void 0?(e[u]=a,t.push(this.vertices[a]),n[a]=t.length-1):n[a]=n[e[u]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];const u=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(u[h]===u[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,u=this.faceVertexUvs.length;l<u;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-t.length;return this.vertices=t,o},setFromPoints:function(e){this.vertices=[];for(let t=0,n=e.length;t<n;t++){const i=e[t];this.vertices.push(new R(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const e=this.faces,t=e.length;for(let a=0;a<t;a++)e[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}e.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===t&&(s=[]),r&&r.length===t&&(o=[]);for(let a=0;a<t;a++){const c=e[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}const t=[];for(let f=0;f<this.vertices.length;f++){const p=this.vertices[f];t.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let f=0;f<this.faces.length;f++){const p=this.faces[f],y=!0,_=!1,m=this.faceVertexUvs[0][f]!==void 0,g=p.normal.length()>0,v=p.vertexNormals.length>0,b=p.color.r!==1||p.color.g!==1||p.color.b!==1,x=p.vertexColors.length>0;let E=0;if(E=l(E,0,0),E=l(E,1,y),E=l(E,2,_),E=l(E,3,m),E=l(E,4,g),E=l(E,5,v),E=l(E,6,b),E=l(E,7,x),n.push(E),n.push(p.a,p.b,p.c),n.push(p.materialIndex),m){const w=this.faceVertexUvs[0][f];n.push(d(w[0]),d(w[1]),d(w[2]))}if(g&&n.push(u(p.normal)),v){const w=p.vertexNormals;n.push(u(w[0]),u(w[1]),u(w[2]))}if(b&&n.push(h(p.color)),x){const w=p.vertexColors;n.push(h(w[0]),h(w[1]),h(w[2]))}}function l(f,p,y){return y?f|1<<p:f&~(1<<p)}function u(f){const p=f.x.toString()+f.y.toString()+f.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(f.x,f.y,f.z)),r[p]}function h(f){const p=f.r.toString()+f.g.toString()+f.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(f.getHex())),o[p]}function d(f){const p=f.x.toString()+f.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(f.x,f.y)),c[p]}return e.data={},e.data.vertices=t,e.data.normals=i,s.length>0&&(e.data.colors=s),a.length>0&&(e.data.uvs=[a]),e.data.faces=n,e},clone:function(){return new Ne().copy(this)},copy:function(e){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name;const t=e.vertices;for(let h=0,d=t.length;h<d;h++)this.vertices.push(t[h].clone());const n=e.colors;for(let h=0,d=n.length;h<d;h++)this.colors.push(n[h].clone());const i=e.faces;for(let h=0,d=i.length;h<d;h++)this.faces.push(i[h].clone());for(let h=0,d=e.faceVertexUvs.length;h<d;h++){const f=e.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=f.length;p<y;p++){const _=f[p],m=[];for(let g=0,v=_.length;g<v;g++){const b=_[g];m.push(b.clone())}this.faceVertexUvs[h].push(m)}}const r=e.morphTargets;for(let h=0,d=r.length;h<d;h++){const f={};if(f.name=r[h].name,r[h].vertices!==void 0){f.vertices=[];for(let p=0,y=r[h].vertices.length;p<y;p++)f.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){f.normals=[];for(let p=0,y=r[h].normals.length;p<y;p++)f.normals.push(r[h].normals[p].clone())}this.morphTargets.push(f)}const s=e.morphNormals;for(let h=0,d=s.length;h<d;h++){const f={};if(s[h].vertexNormals!==void 0){f.vertexNormals=[];for(let p=0,y=s[h].vertexNormals.length;p<y;p++){const _=s[h].vertexNormals[p],m={};m.a=_.a.clone(),m.b=_.b.clone(),m.c=_.c.clone(),f.vertexNormals.push(m)}}if(s[h].faceNormals!==void 0){f.faceNormals=[];for(let p=0,y=s[h].faceNormals.length;p<y;p++)f.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(f)}const o=e.skinWeights;for(let h=0,d=o.length;h<d;h++)this.skinWeights.push(o[h].clone());const a=e.skinIndices;for(let h=0,d=a.length;h<d;h++)this.skinIndices.push(a[h].clone());const c=e.lineDistances;for(let h=0,d=c.length;h<d;h++)this.lineDistances.push(c[h]);const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.elementsNeedUpdate=e.elementsNeedUpdate,this.verticesNeedUpdate=e.verticesNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.lineDistancesNeedUpdate=e.lineDistancesNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class Ex extends Ne{constructor(t,n,i,r,s,o){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o},this.fromBufferGeometry(new Ar(t,n,i,r,s,o)),this.mergeVertices()}}class Ar extends Te{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,n,t,o,s,0),p("z","y","x",1,-1,i,n,-t,o,s,1),p("x","z","y",1,1,t,i,n,r,o,2),p("x","z","y",1,-1,t,i,-n,r,o,3),p("x","y","z",1,-1,t,n,i,r,s,4),p("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function p(y,_,m,g,v,b,x,E,w,P,A){const Z=b/w,k=x/P,X=b/2,G=x/2,V=E/2,I=w+1,B=P+1;let j=0,ie=0;const me=new R;for(let ge=0;ge<B;ge++){const fe=ge*k-G;for(let Ae=0;Ae<I;Ae++){const ve=Ae*Z-X;me[y]=ve*g,me[_]=fe*v,me[m]=V,l.push(me.x,me.y,me.z),me[y]=0,me[_]=0,me[m]=E>0?1:-1,u.push(me.x,me.y,me.z),h.push(Ae/w),h.push(1-ge/P),j+=1}}for(let ge=0;ge<P;ge++)for(let fe=0;fe<w;fe++){const Ae=d+fe+I*ge,ve=d+fe+I*(ge+1),De=d+(fe+1)+I*(ge+1),T=d+(fe+1)+I*ge;c.push(Ae,ve,T),c.push(ve,De,T),ie+=6}a.addGroup(f,ie,A),f+=ie,d+=j}}}function As(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Xt(e){const t={};for(let n=0;n<e.length;n++){const i=As(e[n]);for(const r in i)t[r]=i[r]}return t}const Sx={clone:As,merge:Xt};var Tx=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Ax=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;function sn(e){Fe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Tx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}sn.prototype=Object.create(Fe.prototype);sn.prototype.constructor=sn;sn.prototype.isShaderMaterial=!0;sn.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this};sn.prototype.toJSON=function(e){const t=Fe.prototype.toJSON.call(this,e);t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t};function xi(){xe.call(this),this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze}xi.prototype=Object.assign(Object.create(xe.prototype),{constructor:xi,isCamera:!0,copy:function(e,t){return xe.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new R),this.updateMatrixWorld(!0);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){xe.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(e,t){xe.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function wt(e,t,n,i){xi.call(this),this.type="PerspectiveCamera",this.fov=e!==void 0?e:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=t!==void 0?t:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}wt.prototype=Object.assign(Object.create(xi.prototype),{constructor:wt,isPerspectiveCamera:!0,copy:function(e,t){return xi.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){const t=.5*this.getFilmHeight()/e;this.fov=ke.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){const e=Math.tan(ke.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return ke.RAD2DEG*2*Math.atan(Math.tan(ke.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let e=this.near,t=e*Math.tan(ke.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,t-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=xe.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});const Qr=90,$r=1;function Vo(e,t,n){if(xe.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new wt(Qr,$r,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new wt(Qr,$r,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const s=new wt(Qr,$r,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new R(0,1,0)),this.add(s);const o=new wt(Qr,$r,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const a=new wt(Qr,$r,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new R(0,0,1)),this.add(a);const c=new wt(Qr,$r,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c),this.update=function(l,u){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,d=l.getRenderTarget();l.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(u,i),l.setRenderTarget(n,1),l.render(u,r),l.setRenderTarget(n,2),l.render(u,s),l.setRenderTarget(n,3),l.render(u,o),l.setRenderTarget(n,4),l.render(u,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(u,c),l.setRenderTarget(d),l.xr.enabled=h},this.clear=function(l,u,h,d){const f=l.getRenderTarget();for(let p=0;p<6;p++)l.setRenderTarget(n,p),l.clear(u,h,d);l.setRenderTarget(f)}}Vo.prototype=Object.create(xe.prototype);Vo.prototype.constructor=Vo;function Wo(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),Pn.call(this,e,e,t)}Wo.prototype=Object.create(Pn.prototype);Wo.prototype.constructor=Wo;Wo.prototype.isWebGLCubeRenderTarget=!0;Wo.prototype.fromEquirectangularTexture=function(e,t){this.texture.type=t.type,this.texture.format=gn,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n=new Ho,i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},r=new sn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Yi});r.uniforms.tEquirect.value=t;const s=new st(new Ar(5,5,5),r);return n.add(s),new Vo(1,10,this).update(e,n),s.geometry.dispose(),s.material.dispose(),this};function Rs(e,t,n,i,r,s,o,a,c,l,u,h){ot.call(this,null,s,o,a,c,l,i,r,u,h),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:Ot,this.minFilter=l!==void 0?l:Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Rs.prototype=Object.create(ot.prototype);Rs.prototype.constructor=Rs;Rs.prototype.isDataTexture=!0;const es=new ui,ic=new R;function Ma(e,t,n,i,r,s){this.planes=[e!==void 0?e:new Qn,t!==void 0?t:new Qn,n!==void 0?n:new Qn,i!==void 0?i:new Qn,r!==void 0?r:new Qn,s!==void 0?s:new Qn]}Object.assign(Ma.prototype,{set:function(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this},setFromProjectionMatrix:function(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],a=n[4],c=n[5],l=n[6],u=n[7],h=n[8],d=n[9],f=n[10],p=n[11],y=n[12],_=n[13],m=n[14],g=n[15];return t[0].setComponents(o-i,u-a,p-h,g-y).normalize(),t[1].setComponents(o+i,u+a,p+h,g+y).normalize(),t[2].setComponents(o+r,u+c,p+d,g+_).normalize(),t[3].setComponents(o-r,u-c,p-d,g-_).normalize(),t[4].setComponents(o-s,u-l,p-f,g-m).normalize(),t[5].setComponents(o+s,u+l,p+f,g+m).normalize(),this},intersectsObject:function(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(es)},intersectsSprite:function(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)},intersectsSphere:function(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0},intersectsBox:function(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ic.x=i.normal.x>0?e.max.x:e.min.x,ic.y=i.normal.y>0?e.max.y:e.min.y,ic.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ic)<0)return!1}return!0},containsPoint:function(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}});const we={common:{diffuse:{value:new _e(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new _e(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new rn}},sprite:{diffuse:{value:new _e(15658734)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new rn}}};function Eg(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Rx(e,t){const n=t.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,f=e.createBuffer();e.bindBuffer(u,f),e.bufferData(u,h,d),l.onUploadCallback();let p=e.FLOAT;return h instanceof Float32Array?p=e.FLOAT:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?p=e.UNSIGNED_SHORT:h instanceof Int16Array?p=e.SHORT:h instanceof Uint32Array?p=e.UNSIGNED_INT:h instanceof Int32Array?p=e.INT:h instanceof Int8Array?p=e.BYTE:h instanceof Uint8Array&&(p=e.UNSIGNED_BYTE),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,f=u.updateRange;e.bindBuffer(h,l),f.count===-1?e.bufferSubData(h,0,d):(n?e.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):e.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(e.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}function Qc(e,t,n,i){Ne.call(this),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},this.fromBufferGeometry(new Rr(e,t,n,i)),this.mergeVertices()}Qc.prototype=Object.create(Ne.prototype);Qc.prototype.constructor=Qc;function Rr(e,t,n,i){Te.call(this),this.type="PlaneBufferGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i},e=e||1,t=t||1;const r=e/2,s=t/2,o=Math.floor(n)||1,a=Math.floor(i)||1,c=o+1,l=a+1,u=e/o,h=t/a,d=[],f=[],p=[],y=[];for(let _=0;_<l;_++){const m=_*h-s;for(let g=0;g<c;g++){const v=g*u-r;f.push(v,-m,0),p.push(0,0,1),y.push(g/o),y.push(1-_/a)}}for(let _=0;_<a;_++)for(let m=0;m<o;m++){const g=m+c*_,v=m+c*(_+1),b=m+1+c*(_+1),x=m+1+c*_;d.push(g,v,x),d.push(v,b,x)}this.setIndex(d),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(y,2))}Rr.prototype=Object.create(Te.prototype);Rr.prototype.constructor=Rr;var Lx=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Px=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Cx=`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`,Ix=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );

	#endif

#endif
`,Dx=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Ox=`
vec3 transformed = vec3( position );
`,Fx=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Nx=`

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
`,kx=`
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
`,Bx=`
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
`,Ux=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Hx=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,zx=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Gx=`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`,Vx=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`,Wx=`
#ifdef USE_COLOR

	varying vec3 vColor;

#endif
`,jx=`
#ifdef USE_COLOR

	vColor.xyz = color.xyz;

#endif
`,Xx=`
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
`,Yx=`
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
`,qx=`
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
`,Zx=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Jx=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Kx=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Qx=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,$x=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,ew=`
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
`,tw=`
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
`,nw=`
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
`,iw=`
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
`,rw=`
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
`,sw=`
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
`,ow=`
#ifdef USE_FOG

	fogDepth = - mvPosition.z;

#endif
`,aw=`
#ifdef USE_FOG

	varying float fogDepth;

#endif
`,cw=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,lw=`
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
`,uw=`

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
`,hw=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage

#endif
`,fw=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,dw=`
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
`,pw=`
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
`,mw=`
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
`,gw=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,yw=`
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
`,_w=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,vw=`
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
`,bw=`
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
`,xw=`
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
`,ww=`
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
`,Mw=`
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
`,Ew=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,Sw=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,Tw=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Aw=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Rw=`
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
`,Lw=`
#ifdef USE_MAP

	vec4 texelColor = texture2D( map, vUv );

	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;

#endif
`,Pw=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,Cw=`
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
`,Iw=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Dw=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Ow=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Fw=`
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
`,Nw=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifndef USE_MORPHNORMALS

		uniform float morphTargetInfluences[ 8 ];

	#else

		uniform float morphTargetInfluences[ 4 ];

	#endif

#endif
`,kw=`
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
`,Bw=`
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

`,Uw=`

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
`,Hw=`
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
`,zw=`
#ifdef CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Gw=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );

	#endif

#endif
`,Vw=`

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
`,Ww=`
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
`,jw=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,Xw=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Yw=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,qw=`
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
`,Zw=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,Jw=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Kw=`
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
`,Qw=`
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
`,$w=`
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
`,eM=`
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
`,tM=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,nM=`
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
`,iM=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,rM=`
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
`,sM=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,oM=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,aM=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,cM=`
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
`,lM=`
#ifdef USE_TRANSMISSIONMAP

	totalTransmission *= texture2D( transmissionMap, vUv ).r;

#endif
`,uM=`
#ifdef USE_TRANSMISSIONMAP

	uniform sampler2D transmissionMap;

#endif
`,hM=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,fM=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,dM=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,pM=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,mM=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,gM=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,yM=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,_M=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	gl_FragColor = mapTexelToLinear( texColor );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,vM=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,bM=`
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
`,xM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,wM=`
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
`,MM=`
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
`,EM=`
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
`,SM=`
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
`,TM=`
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
`,AM=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,RM=`
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
`,LM=`
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
`,PM=`
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
`,CM=`
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
`,IM=`
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
`,DM=`
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
`,OM=`
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
`,FM=`
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
`,NM=`
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
`,kM=`
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
`,BM=`
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
`,UM=`
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
`,HM=`
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
`,zM=`
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
`,GM=`
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
`,VM=`
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
`,WM=`
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
`,jM=`
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
`,XM=`
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
`,YM=`
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
`,qM=`
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
`,ZM=`
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
`;const We={alphamap_fragment:Lx,alphamap_pars_fragment:Px,alphatest_fragment:Cx,aomap_fragment:Ix,aomap_pars_fragment:Dx,begin_vertex:Ox,beginnormal_vertex:Fx,bsdfs:Nx,bumpmap_pars_fragment:kx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:zx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:Wx,color_vertex:jx,common:Xx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Zx,displacementmap_vertex:Jx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Qx,encodings_fragment:$x,encodings_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:nw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:sw,fog_vertex:ow,fog_pars_vertex:aw,fog_fragment:cw,fog_pars_fragment:lw,gradientmap_pars_fragment:uw,lightmap_fragment:hw,lightmap_pars_fragment:fw,lights_lambert_vertex:dw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:yw,lights_phong_fragment:_w,lights_phong_pars_fragment:vw,lights_physical_fragment:bw,lights_physical_pars_fragment:xw,lights_fragment_begin:ww,lights_fragment_maps:Mw,lights_fragment_end:Ew,logdepthbuf_fragment:Sw,logdepthbuf_pars_fragment:Tw,logdepthbuf_pars_vertex:Aw,logdepthbuf_vertex:Rw,map_fragment:Lw,map_pars_fragment:Pw,map_particle_fragment:Cw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Dw,metalnessmap_pars_fragment:Ow,morphnormal_vertex:Fw,morphtarget_pars_vertex:Nw,morphtarget_vertex:kw,normal_fragment_begin:Bw,normal_fragment_maps:Uw,normalmap_pars_fragment:Hw,clearcoat_normal_fragment_begin:zw,clearcoat_normal_fragment_maps:Gw,clearcoat_pars_fragment:Vw,packing:Ww,premultiplied_alpha_fragment:jw,project_vertex:Xw,dithering_fragment:Yw,dithering_pars_fragment:qw,roughnessmap_fragment:Zw,roughnessmap_pars_fragment:Jw,shadowmap_pars_fragment:Kw,shadowmap_pars_vertex:Qw,shadowmap_vertex:$w,shadowmask_pars_fragment:eM,skinbase_vertex:tM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:rM,specularmap_fragment:sM,specularmap_pars_fragment:oM,tonemapping_fragment:aM,tonemapping_pars_fragment:cM,transmissionmap_fragment:lM,transmissionmap_pars_fragment:uM,uv_pars_fragment:hM,uv_pars_vertex:fM,uv_vertex:dM,uv2_pars_fragment:pM,uv2_pars_vertex:mM,uv2_vertex:gM,worldpos_vertex:yM,background_frag:_M,background_vert:vM,cube_frag:bM,cube_vert:xM,depth_frag:wM,depth_vert:MM,distanceRGBA_frag:EM,distanceRGBA_vert:SM,equirect_frag:TM,equirect_vert:AM,linedashed_frag:RM,linedashed_vert:LM,meshbasic_frag:PM,meshbasic_vert:CM,meshlambert_frag:IM,meshlambert_vert:DM,meshmatcap_frag:OM,meshmatcap_vert:FM,meshtoon_frag:NM,meshtoon_vert:kM,meshphong_frag:BM,meshphong_vert:UM,meshphysical_frag:HM,meshphysical_vert:zM,normal_frag:GM,normal_vert:VM,points_frag:WM,points_vert:jM,shadow_frag:XM,shadow_vert:YM,sprite_frag:qM,sprite_vert:ZM},$n={basic:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.fog,we.lights,{emissive:{value:new _e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Xt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Xt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new _e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Xt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Xt([we.points,we.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Xt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Xt([we.common,we.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Xt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:We.normal_vert,fragmentShader:We.normal_frag},sprite:{uniforms:Xt([we.sprite,we.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null}},vertexShader:We.background_vert,fragmentShader:We.background_frag},cube:{uniforms:Xt([we.envmap,{opacity:{value:1}}]),vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Xt([we.common,we.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Xt([we.lights,we.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};$n.physical={uniforms:Xt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ae(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new _e(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};function JM(e,t,n,i){const r=new _e(0);let s=0,o,a,c=null,l=0,u=null;function h(f,p,y,_){let m=p.isScene===!0?p.background:null;const g=e.xr,v=g.getSession&&g.getSession();if(v&&v.environmentBlendMode==="additive"&&(m=null),m===null?d(r,s):m&&m.isColor&&(d(m,1),_=!0),(e.autoClear||_)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===xa)){a===void 0&&(a=new st(new Ar(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:As($n.cube.uniforms),vertexShader:$n.cube.vertexShader,fragmentShader:$n.cube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(x,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a));const b=m.isWebGLCubeRenderTarget?m.texture:m;a.material.uniforms.envMap.value=b,a.material.uniforms.flipEnvMap.value=b.isCubeTexture?-1:1,(c!==m||l!==b.version||u!==e.toneMapping)&&(a.material.needsUpdate=!0,c=m,l=b.version,u=e.toneMapping),f.unshift(a,a.geometry,a.material,0,0,null)}else m&&m.isTexture&&(o===void 0&&(o=new st(new Rr(2,2),new sn({name:"BackgroundMaterial",uniforms:As($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||l!==m.version||u!==e.toneMapping)&&(o.material.needsUpdate=!0,c=m,l=m.version,u=e.toneMapping),f.unshift(o,o.geometry,o.material,0,0,null))}function d(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,i)}return{getClearColor:function(){return r},setClearColor:function(f,p){r.set(f),s=p!==void 0?p:1,d(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(f){s=f,d(r,s)},render:h}}function KM(e,t,n,i){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function u(G,V,I,B,j){let ie=!1;if(o){const me=p(B,I,V);l!==me&&(l=me,d(l.object)),ie=_(B),ie&&m(B)}else{const me=V.wireframe===!0;(l.geometry!==B.id||l.program!==I.id||l.wireframe!==me)&&(l.geometry=B.id,l.program=I.id,l.wireframe=me,ie=!0)}G.isInstancedMesh===!0&&(ie=!0),j!==null&&n.update(j,e.ELEMENT_ARRAY_BUFFER),ie&&(w(G,V,I,B),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(j).buffer))}function h(){return i.isWebGL2?e.createVertexArray():s.createVertexArrayOES()}function d(G){return i.isWebGL2?e.bindVertexArray(G):s.bindVertexArrayOES(G)}function f(G){return i.isWebGL2?e.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function p(G,V,I){const B=I.wireframe===!0;let j=a[G.id];j===void 0&&(j={},a[G.id]=j);let ie=j[V.id];ie===void 0&&(ie={},j[V.id]=ie);let me=ie[B];return me===void 0&&(me=y(h()),ie[B]=me),me}function y(G){const V=[],I=[],B=[];for(let j=0;j<r;j++)V[j]=0,I[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:I,attributeDivisors:B,object:G,attributes:{}}}function _(G){const V=l.attributes,I=G.attributes;if(Object.keys(V).length!==Object.keys(I).length)return!0;for(const B in I){const j=V[B],ie=I[B];if(j.attribute!==ie||j.data!==ie.data)return!0}return!1}function m(G){const V={},I=G.attributes;for(const B in I){const j=I[B],ie={};ie.attribute=j,j.data&&(ie.data=j.data),V[B]=ie}l.attributes=V}function g(){const G=l.newAttributes;for(let V=0,I=G.length;V<I;V++)G[V]=0}function v(G){b(G,0)}function b(G,V){const I=l.newAttributes,B=l.enabledAttributes,j=l.attributeDivisors;I[G]=1,B[G]===0&&(e.enableVertexAttribArray(G),B[G]=1),j[G]!==V&&((i.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,V),j[G]=V)}function x(){const G=l.newAttributes,V=l.enabledAttributes;for(let I=0,B=V.length;I<B;I++)V[I]!==G[I]&&(e.disableVertexAttribArray(I),V[I]=0)}function E(G,V,I,B,j,ie){i.isWebGL2===!0&&(I===e.INT||I===e.UNSIGNED_INT)?e.vertexAttribIPointer(G,V,I,j,ie):e.vertexAttribPointer(G,V,I,B,j,ie)}function w(G,V,I,B){if(i.isWebGL2===!1&&(G.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const j=B.attributes,ie=I.getAttributes(),me=V.defaultAttributeValues;for(const ge in ie){const fe=ie[ge];if(fe>=0){const Ae=j[ge];if(Ae!==void 0){const ve=Ae.normalized,De=Ae.itemSize,T=n.get(Ae);if(T===void 0)continue;const M=T.buffer,O=T.type,C=T.bytesPerElement;if(Ae.isInterleavedBufferAttribute){const U=Ae.data,z=U.stride,L=Ae.offset;U&&U.isInstancedInterleavedBuffer?(b(fe,U.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=U.meshPerAttribute*U.count)):v(fe),e.bindBuffer(e.ARRAY_BUFFER,M),E(fe,De,O,ve,z*C,L*C)}else Ae.isInstancedBufferAttribute?(b(fe,Ae.meshPerAttribute),B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ae.meshPerAttribute*Ae.count)):v(fe),e.bindBuffer(e.ARRAY_BUFFER,M),E(fe,De,O,ve,0,0)}else if(ge==="instanceMatrix"){const ve=n.get(G.instanceMatrix);if(ve===void 0)continue;const De=ve.buffer,T=ve.type;b(fe+0,1),b(fe+1,1),b(fe+2,1),b(fe+3,1),e.bindBuffer(e.ARRAY_BUFFER,De),e.vertexAttribPointer(fe+0,4,T,!1,64,0),e.vertexAttribPointer(fe+1,4,T,!1,64,16),e.vertexAttribPointer(fe+2,4,T,!1,64,32),e.vertexAttribPointer(fe+3,4,T,!1,64,48)}else if(me!==void 0){const ve=me[ge];if(ve!==void 0)switch(ve.length){case 2:e.vertexAttrib2fv(fe,ve);break;case 3:e.vertexAttrib3fv(fe,ve);break;case 4:e.vertexAttrib4fv(fe,ve);break;default:e.vertexAttrib1fv(fe,ve)}}}}x()}function P(){k();for(const G in a){const V=a[G];for(const I in V){const B=V[I];for(const j in B)f(B[j].object),delete B[j];delete V[I]}delete a[G]}}function A(G){if(a[G.id]===void 0)return;const V=a[G.id];for(const I in V){const B=V[I];for(const j in B)f(B[j].object),delete B[j];delete V[I]}delete a[G.id]}function Z(G){for(const V in a){const I=a[V];if(I[G.id]===void 0)continue;const B=I[G.id];for(const j in B)f(B[j].object),delete B[j];delete I[G.id]}}function k(){X(),l!==c&&(l=c,d(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:k,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:Z,initAttributes:g,enableAttribute:v,disableUnusedAttributes:x}}function QM(e,t,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){e.drawArrays(s,l,u),n.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=e,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),n.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function $M(e,t,n){let i;function r(){if(i!==void 0)return i;const E=t.get("EXT_texture_filter_anisotropic");return E!==null?i=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(E){if(E==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&e instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,v=o||!!t.get("OES_texture_float"),b=g&&v,x=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:x}}function eE(){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Qn,o=new rn,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,d){const f=u.length!==0||h||n!==0||i;return i=h,t=l(u,d,0),n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,h,d,f,p,y){if(!i||u===null||u.length===0||r&&!d)r?l(null):c();else{const _=r?0:n,m=_*4;let g=p.clippingState||null;a.value=g,g=l(u,f,m,y);for(let v=0;v!==m;++v)g[v]=t[v];p.clippingState=g,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function c(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,h,d,f){let p=u!==null?u.length:0,y=null;if(p!==0){if(y=a.value,f!==!0||y===null){const _=d+p*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(y===null||y.length<_)&&(y=new Float32Array(_));for(let g=0,v=d;g!==p;++g,v+=4)s.copy(u[g]).applyMatrix4(m,o),s.normal.toArray(y,v),y[v+3]=s.constant}a.value=y,a.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,y}}function tE(e){const t={};return{has:function(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,!!i},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),t[n]}}}function nE(e,t,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const d=h.target,f=r.get(d);f.index!==null&&t.remove(f.index);for(const y in f.attributes)t.remove(f.attributes[y]);d.removeEventListener("dispose",o),r.delete(d);const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){let f=r.get(d);return f||(d.addEventListener("dispose",o),d.isBufferGeometry?f=d:d.isGeometry&&(d._bufferGeometry===void 0&&(d._bufferGeometry=new Te().setFromObject(h)),f=d._bufferGeometry),r.set(d,f),n.memory.geometries++,f)}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],e.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const y=f[p];for(let _=0,m=y.length;_<m;_++)t.update(y[_],e.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let y=0;if(f!==null){const g=f.array;y=f.version;for(let v=0,b=g.length;v<b;v+=3){const x=g[v+0],E=g[v+1],w=g[v+2];d.push(x,E,E,w,w,x)}}else{const g=p.array;y=p.version;for(let v=0,b=g.length/3-1;v<b;v+=3){const x=v+0,E=v+1,w=v+2;d.push(x,E,E,w,w,x)}}const _=new(wg(d)>65535?Go:zo)(d,1);_.version=y;const m=s.get(h);m&&t.remove(m),s.set(h,_)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function iE(e,t,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){e.drawElements(s,f,a,d*c),n.update(f,s,1)}function h(d,f,p){if(p===0)return;let y,_;if(r)y=e,_="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,f,a,d*c,p),n.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function rE(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sE(e,t){return e[0]-t[0]}function oE(e,t){return Math.abs(t[1])-Math.abs(e[1])}function aE(e){const t={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=t[o.id];if(h===void 0){h=[];for(let _=0;_<u;_++)h[_]=[_,0];t[o.id]=h}for(let _=0;_<u;_++){const m=h[_];m[0]=_,m[1]=l[_]}h.sort(oE);for(let _=0;_<8;_++)_<u&&h[_][1]?(i[_][0]=h[_][0],i[_][1]=h[_][1]):(i[_][0]=Number.MAX_SAFE_INTEGER,i[_][1]=0);i.sort(sE);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const m=i[_],g=m[0],v=m[1];g!==Number.MAX_SAFE_INTEGER&&v?(d&&o.getAttribute("morphTarget"+_)!==d[g]&&o.setAttribute("morphTarget"+_,d[g]),f&&o.getAttribute("morphNormal"+_)!==f[g]&&o.setAttribute("morphNormal"+_,f[g]),n[_]=v,p+=v):(d&&o.getAttribute("morphTarget"+_)!==void 0&&o.deleteAttribute("morphTarget"+_),f&&o.getAttribute("morphNormal"+_)!==void 0&&o.deleteAttribute("morphNormal"+_),n[_]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:r}}function cE(e,t,n,i){let r=new WeakMap;function s(a){const c=i.render.frame,l=a.geometry,u=t.get(a,l);return r.get(u)!==c&&(l.isGeometry&&u.updateFromObject(a),t.update(u),r.set(u,c)),a.isInstancedMesh&&n.update(a.instanceMatrix,e.ARRAY_BUFFER),u}function o(){r=new WeakMap}return{update:s,dispose:o}}function $i(e,t,n,i,r,s,o,a,c,l){e=e!==void 0?e:[],t=t!==void 0?t:af,o=o!==void 0?o:bi,ot.call(this,e,t,n,i,r,s,o,a,c,l),this.flipY=!1}$i.prototype=Object.create(ot.prototype);$i.prototype.constructor=$i;$i.prototype.isCubeTexture=!0;Object.defineProperty($i.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});function jo(e,t,n,i){ot.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}jo.prototype=Object.create(ot.prototype);jo.prototype.constructor=jo;jo.prototype.isDataTexture2DArray=!0;function Xo(e,t,n,i){ot.call(this,null),this.image={data:e||null,width:t||1,height:n||1,depth:i||1},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Xo.prototype=Object.create(ot.prototype);Xo.prototype.constructor=Xo;Xo.prototype.isDataTexture3D=!0;const Sg=new ot,lE=new jo,uE=new Xo,Tg=new $i,Vd=[],Wd=[],jd=new Float32Array(16),Xd=new Float32Array(9),Yd=new Float32Array(4);function $s(e,t,n){const i=e[0];if(i<=0||i>0)return e;let r=t*n,s=Vd[r];if(s===void 0&&(s=new Float32Array(r),Vd[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function In(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function yn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ag(e,t){let n=Wd[t];n===void 0&&(n=new Int32Array(t),Wd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function hE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function fE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(In(n,t))return;e.uniform2fv(this.addr,t),yn(n,t)}}function dE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(In(n,t))return;e.uniform3fv(this.addr,t),yn(n,t)}}function pE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(In(n,t))return;e.uniform4fv(this.addr,t),yn(n,t)}}function mE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(In(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(In(n,i))return;Yd.set(i),e.uniformMatrix2fv(this.addr,!1,Yd),yn(n,i)}}function gE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(In(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(In(n,i))return;Xd.set(i),e.uniformMatrix3fv(this.addr,!1,Xd),yn(n,i)}}function yE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(In(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(In(n,i))return;jd.set(i),e.uniformMatrix4fv(this.addr,!1,jd),yn(n,i)}}function _E(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(t||Sg,r)}function vE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||lE,r)}function bE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||uE,r)}function xE(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(t||Tg,r)}function wE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ME(e,t){const n=this.cache;In(n,t)||(e.uniform2iv(this.addr,t),yn(n,t))}function EE(e,t){const n=this.cache;In(n,t)||(e.uniform3iv(this.addr,t),yn(n,t))}function SE(e,t){const n=this.cache;In(n,t)||(e.uniform4iv(this.addr,t),yn(n,t))}function TE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function AE(e){switch(e){case 5126:return hE;case 35664:return fE;case 35665:return dE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return yE;case 5124:case 35670:return wE;case 35667:case 35671:return ME;case 35668:case 35672:return EE;case 35669:case 35673:return SE;case 5125:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return vE}}function RE(e,t){e.uniform1fv(this.addr,t)}function LE(e,t){e.uniform1iv(this.addr,t)}function PE(e,t){e.uniform2iv(this.addr,t)}function CE(e,t){e.uniform3iv(this.addr,t)}function IE(e,t){e.uniform4iv(this.addr,t)}function DE(e,t){const n=$s(t,this.size,2);e.uniform2fv(this.addr,n)}function OE(e,t){const n=$s(t,this.size,3);e.uniform3fv(this.addr,n)}function FE(e,t){const n=$s(t,this.size,4);e.uniform4fv(this.addr,n)}function NE(e,t){const n=$s(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kE(e,t){const n=$s(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function BE(e,t){const n=$s(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function UE(e,t,n){const i=t.length,r=Ag(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(t[s]||Sg,r[s])}function HE(e,t,n){const i=t.length,r=Ag(n,i);e.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(t[s]||Tg,r[s])}function zE(e){switch(e){case 5126:return RE;case 35664:return DE;case 35665:return OE;case 35666:return FE;case 35674:return NE;case 35675:return kE;case 35676:return BE;case 5124:case 35670:return LE;case 35667:case 35671:return PE;case 35668:case 35672:return CE;case 35669:case 35673:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35680:case 36300:case 36308:case 36293:return HE}}function GE(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=AE(t.type)}function Rg(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zE(t.type)}Rg.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),yn(t,e)};function Lg(e){this.id=e,this.seq=[],this.map={}}Lg.prototype.setValue=function(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}};const Pu=/([\w\d_]+)(\])?(\[|\.)?/g;function qd(e,t){e.seq.push(t),e.map[t.id]=t}function VE(e,t,n){const i=e.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),o=Pu.lastIndex;let a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){qd(n,l===void 0?new GE(a,e,t):new Rg(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new Lg(a),qd(n,h)),n=h}}}function qi(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);VE(r,s,this)}}qi.prototype.setValue=function(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)};qi.prototype.setOptional=function(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)};qi.upload=function(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}};qi.seqWithValue=function(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n};function Zd(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}let WE=0;function jE(e){const t=e.split(`
`);for(let n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Pg(e){switch(e){case ln:return["Linear","( value )"];case Ts:return["sRGB","( value )"];case df:return["RGBE","( value )"];case yg:return["RGBM","( value, 7.0 )"];case _g:return["RGBM","( value, 16.0 )"];case vg:return["RGBD","( value, 256.0 )"];case ff:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case sx:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Jd(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+jE(s)}function uo(e,t){const n=Pg(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function XE(e,t){const n=Pg(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function YE(e,t){let n;switch(t){case ib:n="Linear";break;case rb:n="Reinhard";break;case sb:n="OptimizedCineon";break;case ob:n="ACESFilmic";break;case ab:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qE(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wo).join(`
`)}function ZE(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function JE(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(t,r).name;n[o]=e.getAttribLocation(t,o)}return n}function wo(e){return e!==""}function Kd(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KE=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(e){return e.replace(KE,QE)}function QE(e,t){const n=We[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return oh(n)}const $E=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,e1=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function $d(e){return e.replace(e1,Cg).replace($E,t1)}function t1(e,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cg(e,t,n,i)}function Cg(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[ i \]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ep(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function n1(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ug?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===hg?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===xo&&(t="SHADOWMAP_TYPE_VSM"),t}function i1(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case af:case cf:t="ENVMAP_TYPE_CUBE";break;case xa:case Vl:t="ENVMAP_TYPE_CUBE_UV";break;case mg:case lf:t="ENVMAP_TYPE_EQUIREC";break}return t}function r1(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case cf:case lf:case Vl:t="ENVMAP_MODE_REFRACTION";break}return t}function s1(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case tb:t="ENVMAP_BLENDING_MIX";break;case nb:t="ENVMAP_BLENDING_ADD";break}return t}function o1(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=n1(n),l=i1(n),u=r1(n),h=s1(n),d=e.gammaFactor>0?e.gammaFactor:1,f=n.isWebGL2?"":qE(n),p=ZE(s),y=r.createProgram();let _,m;n.isRawShaderMaterial?(_=[p].filter(wo).join(`
`),_.length>0&&(_+=`
`),m=[f,p].filter(wo).join(`
`),m.length>0&&(m+=`
`)):(_=[ep(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),m=[f,ep(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ys?"#define TONE_MAPPING":"",n.toneMapping!==ys?We.tonemapping_pars_fragment:"",n.toneMapping!==ys?YE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",We.encodings_pars_fragment,n.map?uo("mapTexelToLinear",n.mapEncoding):"",n.matcap?uo("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?uo("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?uo("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?uo("lightMapTexelToLinear",n.lightMapEncoding):"",XE("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wo).join(`
`)),o=oh(o),o=Kd(o,n),o=Qd(o,n),a=oh(a),a=Kd(a,n),a=Qd(a,n),o=$d(o),a=$d(a),n.isWebGL2&&!n.isRawShaderMaterial&&(_=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=[`#version 300 es
`,"#define varying in","out highp vec4 pc_fragColor;","#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=_+o,v=m+a,b=Zd(r,r.VERTEX_SHADER,g),x=Zd(r,r.FRAGMENT_SHADER,v);if(r.attachShader(y,b),r.attachShader(y,x),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),e.debug.checkShaderErrors){const P=r.getProgramInfoLog(y).trim(),A=r.getShaderInfoLog(b).trim(),Z=r.getShaderInfoLog(x).trim();let k=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1){k=!1;const G=Jd(r,b,"vertex"),V=Jd(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"gl.VALIDATE_STATUS",r.getProgramParameter(y,r.VALIDATE_STATUS),"gl.getProgramInfoLog",P,G,V)}else P!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",P):(A===""||Z==="")&&(X=!1);X&&(this.diagnostics={runnable:k,programLog:P,vertexShader:{log:A,prefix:_},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(b),r.deleteShader(x);let E;this.getUniforms=function(){return E===void 0&&(E=new qi(r,y)),E};let w;return this.getAttributes=function(){return w===void 0&&(w=JE(r,y)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=WE++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=x,this}function a1(e,t,n,i){const r=[],s=n.isWebGL2,o=n.logarithmicDepthBuffer,a=n.floatVertexTextures,c=n.maxVertexUniforms,l=n.vertexTextures;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},d=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function f(b){const E=b.skeleton.bones;if(a)return 1024;{const P=Math.floor((c-20)/4),A=Math.min(P,E.length);return A<E.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+E.length+" bones. This GPU supports "+A+"."),0):A}}function p(b){let x;return b?b.isTexture?x=b.encoding:b.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),x=b.texture.encoding):x=ln,x}function y(b,x,E,w,P,A,Z){const k=w.fog,X=b.isMeshStandardMaterial?w.environment:null,G=b.envMap||X,V=h[b.type],I=Z.isSkinnedMesh?f(Z):0;b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let B,j;if(V){const ge=$n[V];B=ge.vertexShader,j=ge.fragmentShader}else B=b.vertexShader,j=b.fragmentShader;const ie=e.getRenderTarget();return{isWebGL2:s,shaderID:V,shaderName:b.type,vertexShader:B,fragmentShader:j,defines:b.defines,isRawShaderMaterial:b.isRawShaderMaterial,isShaderMaterial:b.isShaderMaterial,precision:u,instancing:Z.isInstancedMesh===!0,supportsVertexTextures:l,outputEncoding:ie!==null?p(ie.texture):e.outputEncoding,map:!!b.map,mapEncoding:p(b.map),matcap:!!b.matcap,matcapEncoding:p(b.matcap),envMap:!!G,envMapMode:G&&G.mapping,envMapEncoding:p(G),envMapCubeUV:!!G&&(G.mapping===xa||G.mapping===Vl),lightMap:!!b.lightMap,lightMapEncoding:p(b.lightMap),aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:p(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===cx,tangentSpaceNormalMap:b.normalMapType===Br,clearcoatMap:!!b.clearcoatMap,clearcoatRoughnessMap:!!b.clearcoatRoughnessMap,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,transmissionMap:!!b.transmissionMap,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.transmissionMap)&&!!b.displacementMap,fog:!!k,useFog:b.fog,fogExp2:k&&k.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:o,skinning:b.skinning&&I>0,maxBones:I,useVertexTexture:a,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numClippingPlanes:P,numClipIntersection:A,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&E.length>0,shadowMapType:e.shadowMap.type,toneMapping:b.toneMapped?e.toneMapping:ys,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:b.side===Ks,flipSided:b.side===kt,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||t.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:s||t.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:s||t.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:b.customProgramCacheKey()}}function _(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.fragmentShader),x.push(b.vertexShader)),b.defines!==void 0)for(const E in b.defines)x.push(E),x.push(b.defines[E]);if(b.isRawShaderMaterial===void 0){for(let E=0;E<d.length;E++)x.push(b[d[E]]);x.push(e.outputEncoding),x.push(e.gammaFactor)}return x.push(b.customProgramCacheKey),x.join()}function m(b){const x=h[b.type];let E;if(x){const w=$n[x];E=Sx.clone(w.uniforms)}else E=b.uniforms;return E}function g(b,x){let E;for(let w=0,P=r.length;w<P;w++){const A=r[w];if(A.cacheKey===x){E=A,++E.usedTimes;break}}return E===void 0&&(E=new o1(e,x,b,i),r.push(E)),E}function v(b){if(--b.usedTimes===0){const x=r.indexOf(b);r[x]=r[r.length-1],r.pop(),b.destroy()}}return{getParameters:y,getProgramCacheKey:_,getUniforms:m,acquireProgram:g,releaseProgram:v,programs:r}}function c1(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function l1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function u1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function tp(e){const t=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(d,f,p,y,_,m){let g=t[n];const v=e.get(p);return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,program:v.program||s,groupOrder:y,renderOrder:d.renderOrder,z:_,group:m},t[n]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.program=v.program||s,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=_,g.group=m),n++,g}function c(d,f,p,y,_,m){const g=a(d,f,p,y,_,m);(p.transparent===!0?r:i).push(g)}function l(d,f,p,y,_,m){const g=a(d,f,p,y,_,m);(p.transparent===!0?r:i).unshift(g)}function u(d,f){i.length>1&&i.sort(d||l1),r.length>1&&r.sort(f||u1)}function h(){for(let d=n,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function h1(e){let t=new WeakMap;function n(s){const o=s.target;o.removeEventListener("dispose",n),t.delete(o)}function i(s,o){const a=t.get(s);let c;return a===void 0?(c=new tp(e),t.set(s,new WeakMap),t.get(s).set(o,c),s.addEventListener("dispose",n)):(c=a.get(o),c===void 0&&(c=new tp(e),a.set(o,c))),c}function r(){t=new WeakMap}return{get:i,dispose:r}}function f1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new R,color:new _e};break;case"SpotLight":n={position:new R,direction:new R,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new _e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":n={color:new _e,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function d1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let p1=0;function m1(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function g1(){const e=new f1,t=d1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)n.probe.push(new R);const i=new R,r=new ze,s=new ze;function o(a,c,l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,y=0,_=0,m=0,g=0,v=0,b=0;const x=l.matrixWorldInverse;a.sort(m1);for(let w=0,P=a.length;w<P;w++){const A=a[w],Z=A.color,k=A.intensity,X=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=Z.r*k,h+=Z.g*k,d+=Z.b*k;else if(A.isLightProbe)for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],k);else if(A.isDirectionalLight){const V=e.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),V.direction.sub(i),V.direction.transformDirection(x),A.castShadow){const I=A.shadow,B=t.get(A);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=A.shadow.matrix,g++}n.directional[f]=V,f++}else if(A.isSpotLight){const V=e.get(A);if(V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(x),V.color.copy(Z).multiplyScalar(k),V.distance=X,V.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),V.direction.sub(i),V.direction.transformDirection(x),V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,A.castShadow){const I=A.shadow,B=t.get(A);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,n.spotShadow[y]=B,n.spotShadowMap[y]=G,n.spotShadowMatrix[y]=A.shadow.matrix,b++}n.spot[y]=V,y++}else if(A.isRectAreaLight){const V=e.get(A);V.color.copy(Z).multiplyScalar(k),V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(x),s.identity(),r.copy(A.matrixWorld),r.premultiply(x),s.extractRotation(r),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),V.halfWidth.applyMatrix4(s),V.halfHeight.applyMatrix4(s),n.rectArea[_]=V,_++}else if(A.isPointLight){const V=e.get(A);if(V.position.setFromMatrixPosition(A.matrixWorld),V.position.applyMatrix4(x),V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){const I=A.shadow,B=t.get(A);B.shadowBias=I.bias,B.shadowNormalBias=I.normalBias,B.shadowRadius=I.radius,B.shadowMapSize=I.mapSize,B.shadowCameraNear=I.camera.near,B.shadowCameraFar=I.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=A.shadow.matrix,v++}n.point[p]=V,p++}else if(A.isHemisphereLight){const V=e.get(A);V.direction.setFromMatrixPosition(A.matrixWorld),V.direction.transformDirection(x),V.direction.normalize(),V.skyColor.copy(A.color).multiplyScalar(k),V.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[m]=V,m++}}n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==y||E.rectAreaLength!==_||E.hemiLength!==m||E.numDirectionalShadows!==g||E.numPointShadows!==v||E.numSpotShadows!==b)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=_,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=v,n.spotShadowMatrix.length=b,E.directionalLength=f,E.pointLength=p,E.spotLength=y,E.rectAreaLength=_,E.hemiLength=m,E.numDirectionalShadows=g,E.numPointShadows=v,E.numSpotShadows=b,n.version=p1++)}return{setup:o,state:n}}function np(){const e=new g1,t=[],n=[];function i(){t.length=0,n.length=0}function r(c){t.push(c)}function s(c){n.push(c)}function o(c){e.setup(t,n,c)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e},setupLights:o,pushLight:r,pushShadow:s}}function y1(){let e=new WeakMap;function t(r){const s=r.target;s.removeEventListener("dispose",t),e.delete(s)}function n(r,s){let o;return e.has(r)===!1?(o=new np,e.set(r,new WeakMap),e.get(r).set(s,o),r.addEventListener("dispose",t)):e.get(r).has(s)===!1?(o=new np,e.get(r).set(s,o)):o=e.get(r).get(s),o}function i(){e=new WeakMap}return{get:n,dispose:i}}function Lr(e){Fe.call(this),this.type="MeshDepthMaterial",this.depthPacking=ox,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}Lr.prototype=Object.create(Fe.prototype);Lr.prototype.constructor=Lr;Lr.prototype.isMeshDepthMaterial=!0;Lr.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function Pr(e){Fe.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}Pr.prototype=Object.create(Fe.prototype);Pr.prototype.constructor=Pr;Pr.prototype.isMeshDistanceMaterial=!0;Pr.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var _1=`
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
`,v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`;function Ig(e,t,n){let i=new Ma;const r=new ae,s=new ae,o=new nt,a=[],c=[],l={},u={0:kt,1:Js,2:Ks},h=new sn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:v1,fragmentShader:_1}),d=h.clone();d.defines.HORIZONAL_PASS=1;const f=new Te;f.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new st(f,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug,this.render=function(x,E,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||x.length===0)return;const P=e.getRenderTarget(),A=e.getActiveCubeFace(),Z=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Yi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let X=0,G=x.length;X<G;X++){const V=x[X],I=V.shadow;if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;if(I===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}r.copy(I.mapSize);const B=I.getFrameExtents();if(r.multiply(B),s.copy(I.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/B.x),r.x=s.x*B.x,I.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/B.y),r.y=s.y*B.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===xo){const ie={minFilter:Bt,magFilter:Bt,format:gn,stencilBuffer:!1};I.map=new Pn(r.x,r.y,ie),I.map.texture.name=V.name+".shadowMap",I.mapPass=new Pn(r.x,r.y,ie),I.camera.updateProjectionMatrix()}if(I.map===null){const ie={minFilter:Ot,magFilter:Ot,format:gn,stencilBuffer:!1};I.map=new Pn(r.x,r.y,ie),I.map.texture.name=V.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();const j=I.getViewportCount();for(let ie=0;ie<j;ie++){const me=I.getViewport(ie);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),k.viewport(o),I.updateMatrices(V,ie),i=I.getFrustum(),b(E,w,I.camera,V,this.type)}!I.isPointLightShadow&&this.type===xo&&_(I,w),I.needsUpdate=!1}y.needsUpdate=!1,e.setRenderTarget(P,A,Z)};function _(x,E){const w=t.update(p);h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(E,null,w,h,p,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(E,null,w,d,p,null)}function m(x,E,w){const P=x<<0|E<<1|w<<2;let A=a[P];return A===void 0&&(A=new Lr({depthPacking:ax,morphTargets:x,skinning:E}),a[P]=A),A}function g(x,E,w){const P=x<<0|E<<1|w<<2;let A=c[P];return A===void 0&&(A=new Pr({morphTargets:x,skinning:E}),c[P]=A),A}function v(x,E,w,P,A,Z,k){let X=null,G=m,V=x.customDepthMaterial;if(P.isPointLight===!0&&(G=g,V=x.customDistanceMaterial),V===void 0){let I=!1;w.morphTargets===!0&&(I=E.morphAttributes&&E.morphAttributes.position&&E.morphAttributes.position.length>0);let B=!1;x.isSkinnedMesh===!0&&(w.skinning===!0?B=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",x));const j=x.isInstancedMesh===!0;X=G(I,B,j)}else X=V;if(e.localClippingEnabled&&w.clipShadows===!0&&w.clippingPlanes.length!==0){const I=X.uuid,B=w.uuid;let j=l[I];j===void 0&&(j={},l[I]=j);let ie=j[B];ie===void 0&&(ie=X.clone(),j[B]=ie),X=ie}return X.visible=w.visible,X.wireframe=w.wireframe,k===xo?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:u[w.side],X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,P.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(P.matrixWorld),X.nearDistance=A,X.farDistance=Z),X}function b(x,E,w,P,A){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===xo)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const X=t.update(x),G=x.material;if(Array.isArray(G)){const V=X.groups;for(let I=0,B=V.length;I<B;I++){const j=V[I],ie=G[j.materialIndex];if(ie&&ie.visible){const me=v(x,X,ie,P,w.near,w.far,A);e.renderBufferDirect(w,null,X,me,x,j)}}}else if(G.visible){const V=v(x,X,G,P,w.near,w.far,A);e.renderBufferDirect(w,null,X,V,x,null)}}const k=x.children;for(let X=0,G=k.length;X<G;X++)b(k[X],E,w,P,A)}}function b1(e,t,n){const i=n.isWebGL2;function r(){let W=!1;const oe=new nt;let N=null;const le=new nt(0,0,0,0);return{setMask:function(ce){N!==ce&&!W&&(e.colorMask(ce,ce,ce,ce),N=ce)},setLocked:function(ce){W=ce},setClear:function(ce,ye,re,q,de){de===!0&&(ce*=q,ye*=q,re*=q),oe.set(ce,ye,re,q),le.equals(oe)===!1&&(e.clearColor(ce,ye,re,q),le.copy(oe))},reset:function(){W=!1,N=null,le.set(-1,0,0,0)}}}function s(){let W=!1,oe=null,N=null,le=null;return{setTest:function(ce){ce?ge(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(ce){oe!==ce&&!W&&(e.depthMask(ce),oe=ce)},setFunc:function(ce){if(N!==ce){if(ce)switch(ce){case qv:e.depthFunc(e.NEVER);break;case Zv:e.depthFunc(e.ALWAYS);break;case Jv:e.depthFunc(e.LESS);break;case $u:e.depthFunc(e.LEQUAL);break;case Kv:e.depthFunc(e.EQUAL);break;case Qv:e.depthFunc(e.GEQUAL);break;case $v:e.depthFunc(e.GREATER);break;case eb:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}else e.depthFunc(e.LEQUAL);N=ce}},setLocked:function(ce){W=ce},setClear:function(ce){le!==ce&&(e.clearDepth(ce),le=ce)},reset:function(){W=!1,oe=null,N=null,le=null}}}function o(){let W=!1,oe=null,N=null,le=null,ce=null,ye=null,re=null,q=null,de=null;return{setTest:function(pe){W||(pe?ge(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(pe){oe!==pe&&!W&&(e.stencilMask(pe),oe=pe)},setFunc:function(pe,$,he){(N!==pe||le!==$||ce!==he)&&(e.stencilFunc(pe,$,he),N=pe,le=$,ce=he)},setOp:function(pe,$,he){(ye!==pe||re!==$||q!==he)&&(e.stencilOp(pe,$,he),ye=pe,re=$,q=he)},setLocked:function(pe){W=pe},setClear:function(pe){de!==pe&&(e.clearStencil(pe),de=pe)},reset:function(){W=!1,oe=null,N=null,le=null,ce=null,ye=null,re=null,q=null,de=null}}}const a=new r,c=new s,l=new o;let u={},h=null,d=null,f=null,p=null,y=null,_=null,m=null,g=null,v=null,b=!1,x=null,E=null,w=null,P=null,A=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL\ ([0-9])/.exec(G)[1]),k=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(G)[1]),k=X>=2);let V=null,I={};const B=new nt,j=new nt;function ie(W,oe,N){const le=new Uint8Array(4),ce=e.createTexture();e.bindTexture(W,ce),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ye=0;ye<N;ye++)e.texImage2D(oe+ye,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,le);return ce}const me={};me[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),me[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ge(e.DEPTH_TEST),c.setFunc($u),O(!1),C(gd),ge(e.CULL_FACE),T(Yi);function ge(W){u[W]!==!0&&(e.enable(W),u[W]=!0)}function fe(W){u[W]!==!1&&(e.disable(W),u[W]=!1)}function Ae(W){return h!==W?(e.useProgram(W),h=W,!0):!1}const ve={[as]:e.FUNC_ADD,[kv]:e.FUNC_SUBTRACT,[Bv]:e.FUNC_REVERSE_SUBTRACT};if(i)ve[bd]=e.MIN,ve[xd]=e.MAX;else{const W=t.get("EXT_blend_minmax");W!==null&&(ve[bd]=W.MIN_EXT,ve[xd]=W.MAX_EXT)}const De={[Uv]:e.ZERO,[Hv]:e.ONE,[zv]:e.SRC_COLOR,[dg]:e.SRC_ALPHA,[Yv]:e.SRC_ALPHA_SATURATE,[jv]:e.DST_COLOR,[Vv]:e.DST_ALPHA,[Gv]:e.ONE_MINUS_SRC_COLOR,[pg]:e.ONE_MINUS_SRC_ALPHA,[Xv]:e.ONE_MINUS_DST_COLOR,[Wv]:e.ONE_MINUS_DST_ALPHA};function T(W,oe,N,le,ce,ye,re,q){if(W===Yi){d&&(fe(e.BLEND),d=!1);return}if(d||(ge(e.BLEND),d=!0),W!==Nv){if(W!==f||q!==b){if((p!==as||m!==as)&&(e.blendEquation(e.FUNC_ADD),p=as,m=as),q)switch(W){case To:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case yd:e.blendFunc(e.ONE,e.ONE);break;case _d:e.blendFuncSeparate(e.ZERO,e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ONE_MINUS_SRC_ALPHA);break;case vd:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case To:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case yd:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case _d:e.blendFunc(e.ZERO,e.ONE_MINUS_SRC_COLOR);break;case vd:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,_=null,g=null,v=null,f=W,b=q}return}ce=ce||oe,ye=ye||N,re=re||le,(oe!==p||ce!==m)&&(e.blendEquationSeparate(ve[oe],ve[ce]),p=oe,m=ce),(N!==y||le!==_||ye!==g||re!==v)&&(e.blendFuncSeparate(De[N],De[le],De[ye],De[re]),y=N,_=le,g=ye,v=re),f=W,b=null}function M(W,oe){W.side===Ks?fe(e.CULL_FACE):ge(e.CULL_FACE);let N=W.side===kt;oe&&(N=!N),O(N),W.blending===To&&W.transparent===!1?T(Yi):T(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const le=W.stencilWrite;l.setTest(le),le&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits)}function O(W){x!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),x=W)}function C(W){W!==Ov?(ge(e.CULL_FACE),W!==E&&(W===gd?e.cullFace(e.BACK):W===Fv?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):fe(e.CULL_FACE),E=W}function U(W){W!==w&&(k&&e.lineWidth(W),w=W)}function z(W,oe,N){W?(ge(e.POLYGON_OFFSET_FILL),(P!==oe||A!==N)&&(e.polygonOffset(oe,N),P=oe,A=N)):fe(e.POLYGON_OFFSET_FILL)}function L(W){W?ge(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function H(W){W===void 0&&(W=e.TEXTURE0+Z-1),V!==W&&(e.activeTexture(W),V=W)}function Y(W,oe){V===null&&H();let N=I[V];N===void 0&&(N={type:void 0,texture:void 0},I[V]=N),(N.type!==W||N.texture!==oe)&&(e.bindTexture(W,oe||me[W]),N.type=W,N.texture=oe)}function K(){const W=I[V];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ne(){try{e.texImage2D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function S(){try{e.texImage3D.apply(e,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function D(W){B.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),B.copy(W))}function Q(W){j.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function ee(){u={},V=null,I={},h=null,f=null,x=null,E=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ge,disable:fe,useProgram:Ae,setBlending:T,setMaterial:M,setFlipSided:O,setCullFace:C,setLineWidth:U,setPolygonOffset:z,setScissorTest:L,activeTexture:H,bindTexture:Y,unbindTexture:K,compressedTexImage2D:J,texImage2D:ne,texImage3D:S,scissor:D,viewport:Q,reset:ee}}function x1(e,t,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,D){return p?new OffscreenCanvas(S,D):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function _(S,D,Q,ee){let W=1;if((S.width>ee||S.height>ee)&&(W=ee/Math.max(S.width,S.height)),W<1||D===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const oe=D?ke.floorPowerOfTwo:Math.floor,N=oe(W*S.width),le=oe(W*S.height);f===void 0&&(f=y(N,le));const ce=Q?y(N,le):f;return ce.width=N,ce.height=le,ce.getContext("2d").drawImage(S,0,0,N,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+N+"x"+le+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return ke.isPowerOfTwo(S.width)&&ke.isPowerOfTwo(S.height)}function g(S){return a?!1:S.wrapS!==tn||S.wrapT!==tn||S.minFilter!==Ot&&S.minFilter!==Bt}function v(S,D){return S.generateMipmaps&&D&&S.minFilter!==Ot&&S.minFilter!==Bt}function b(S,D,Q,ee){e.generateMipmap(S);const W=i.get(D);W.__maxMipLevel=Math.log(Math.max(Q,ee))*Math.LOG2E}function x(S,D,Q){if(a===!1)return D;if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ee=D;return D===e.RED&&(Q===e.FLOAT&&(ee=e.R32F),Q===e.HALF_FLOAT&&(ee=e.R16F),Q===e.UNSIGNED_BYTE&&(ee=e.R8)),D===e.RGB&&(Q===e.FLOAT&&(ee=e.RGB32F),Q===e.HALF_FLOAT&&(ee=e.RGB16F),Q===e.UNSIGNED_BYTE&&(ee=e.RGB8)),D===e.RGBA&&(Q===e.FLOAT&&(ee=e.RGBA32F),Q===e.HALF_FLOAT&&(ee=e.RGBA16F),Q===e.UNSIGNED_BYTE&&(ee=e.RGBA8)),(ee===e.R16F||ee===e.R32F||ee===e.RGBA16F||ee===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ee}function E(S){return S===Ot||S===Xc||S===Yc?e.NEAREST:e.LINEAR}function w(S){const D=S.target;D.removeEventListener("dispose",w),A(D),D.isVideoTexture&&d.delete(D),o.memory.textures--}function P(S){const D=S.target;D.removeEventListener("dispose",P),Z(D),o.memory.textures--}function A(S){const D=i.get(S);D.__webglInit!==void 0&&(e.deleteTexture(D.__webglTexture),i.remove(S))}function Z(S){const D=i.get(S),Q=i.get(S.texture);if(!!S){if(Q.__webglTexture!==void 0&&e.deleteTexture(Q.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)e.deleteFramebuffer(D.__webglFramebuffer[ee]),D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer[ee]);else e.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&e.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&e.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer&&e.deleteRenderbuffer(D.__webglColorRenderbuffer),D.__webglDepthRenderbuffer&&e.deleteRenderbuffer(D.__webglDepthRenderbuffer);i.remove(S.texture),i.remove(S)}}let k=0;function X(){k=0}function G(){const S=k;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),k+=1,S}function V(S,D){const Q=i.get(S);if(S.isVideoTexture&&H(S),S.version>0&&Q.__version!==S.version){const ee=S.image;if(ee===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(Q,S,D);return}}n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_2D,Q.__webglTexture)}function I(S,D){const Q=i.get(S);if(S.version>0&&Q.__version!==S.version){ve(Q,S,D);return}n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_2D_ARRAY,Q.__webglTexture)}function B(S,D){const Q=i.get(S);if(S.version>0&&Q.__version!==S.version){ve(Q,S,D);return}n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_3D,Q.__webglTexture)}function j(S,D){if(S.image.length!==6)return;const Q=i.get(S);if(S.version>0&&Q.__version!==S.version){Ae(Q,S),n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY);const ee=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),W=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let de=0;de<6;de++)!ee&&!W?oe[de]=_(S.image[de],!1,!0,l):oe[de]=W?S.image[de].image:S.image[de];const N=oe[0],le=m(N)||a,ce=s.convert(S.format),ye=s.convert(S.type),re=x(S.internalFormat,ce,ye);fe(e.TEXTURE_CUBE_MAP,S,le);let q;if(ee){for(let de=0;de<6;de++){q=oe[de].mipmaps;for(let pe=0;pe<q.length;pe++){const $=q[pe];S.format!==gn&&S.format!==bi?ce!==null?n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe,re,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe,re,$.width,$.height,0,ce,ye,$.data)}}Q.__maxMipLevel=q.length-1}else{q=S.mipmaps;for(let de=0;de<6;de++)if(W){n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe[de].width,oe[de].height,0,ce,ye,oe[de].data);for(let pe=0;pe<q.length;pe++){const he=q[pe].image[de].image;n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe+1,re,he.width,he.height,0,ce,ye,he.data)}}else{n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,ce,ye,oe[de]);for(let pe=0;pe<q.length;pe++){const $=q[pe];n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe+1,re,ce,ye,$.image[de])}}Q.__maxMipLevel=q.length}v(S,le)&&b(e.TEXTURE_CUBE_MAP,S,N.width,N.height),Q.__version=S.version,S.onUpdate&&S.onUpdate(S)}else n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture)}function ie(S,D){n.activeTexture(e.TEXTURE0+D),n.bindTexture(e.TEXTURE_CUBE_MAP,i.get(S).__webglTexture)}const me={[Mr]:e.REPEAT,[tn]:e.CLAMP_TO_EDGE,[No]:e.MIRRORED_REPEAT},ge={[Ot]:e.NEAREST,[Xc]:e.NEAREST_MIPMAP_NEAREST,[Yc]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[uf]:e.LINEAR_MIPMAP_NEAREST,[Es]:e.LINEAR_MIPMAP_LINEAR};function fe(S,D,Q){Q?(e.texParameteri(S,e.TEXTURE_WRAP_S,me[D.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,me[D.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,me[D.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,ge[D.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,ge[D.minFilter])):(e.texParameteri(S,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(S,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(D.wrapS!==tn||D.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(S,e.TEXTURE_MAG_FILTER,E(D.magFilter)),e.texParameteri(S,e.TEXTURE_MIN_FILTER,E(D.minFilter)),D.minFilter!==Ot&&D.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const ee=t.get("EXT_texture_filter_anisotropic");if(ee){if(D.type===Gi&&t.get("OES_texture_float_linear")===null||D.type===Zc&&(a||t.get("OES_texture_half_float_linear"))===null)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(e.texParameterf(S,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function Ae(S,D){S.__webglInit===void 0&&(S.__webglInit=!0,D.addEventListener("dispose",w),S.__webglTexture=e.createTexture(),o.memory.textures++)}function ve(S,D,Q){let ee=e.TEXTURE_2D;D.isDataTexture2DArray&&(ee=e.TEXTURE_2D_ARRAY),D.isDataTexture3D&&(ee=e.TEXTURE_3D),Ae(S,D),n.activeTexture(e.TEXTURE0+Q),n.bindTexture(ee,S.__webglTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,D.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,D.unpackAlignment);const W=g(D)&&m(D.image)===!1,oe=_(D.image,W,!1,u),N=m(oe)||a,le=s.convert(D.format);let ce=s.convert(D.type),ye=x(D.internalFormat,le,ce);fe(ee,D,N);let re;const q=D.mipmaps;if(D.isDepthTexture)ye=e.DEPTH_COMPONENT,a?D.type===Gi?ye=e.DEPTH_COMPONENT32F:D.type===Cc?ye=e.DEPTH_COMPONENT24:D.type===Ao?ye=e.DEPTH24_STENCIL8:ye=e.DEPTH_COMPONENT16:D.type===Gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===_s&&ye===e.DEPTH_COMPONENT&&D.type!==qc&&D.type!==Cc&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=qc,ce=s.convert(D.type)),D.format===ko&&ye===e.DEPTH_COMPONENT&&(ye=e.DEPTH_STENCIL,D.type!==Ao&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Ao,ce=s.convert(D.type))),n.texImage2D(e.TEXTURE_2D,0,ye,oe.width,oe.height,0,le,ce,null);else if(D.isDataTexture)if(q.length>0&&N){for(let de=0,pe=q.length;de<pe;de++)re=q[de],n.texImage2D(e.TEXTURE_2D,de,ye,re.width,re.height,0,le,ce,re.data);D.generateMipmaps=!1,S.__maxMipLevel=q.length-1}else n.texImage2D(e.TEXTURE_2D,0,ye,oe.width,oe.height,0,le,ce,oe.data),S.__maxMipLevel=0;else if(D.isCompressedTexture){for(let de=0,pe=q.length;de<pe;de++)re=q[de],D.format!==gn&&D.format!==bi?le!==null?n.compressedTexImage2D(e.TEXTURE_2D,de,ye,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(e.TEXTURE_2D,de,ye,re.width,re.height,0,le,ce,re.data);S.__maxMipLevel=q.length-1}else if(D.isDataTexture2DArray)n.texImage3D(e.TEXTURE_2D_ARRAY,0,ye,oe.width,oe.height,oe.depth,0,le,ce,oe.data),S.__maxMipLevel=0;else if(D.isDataTexture3D)n.texImage3D(e.TEXTURE_3D,0,ye,oe.width,oe.height,oe.depth,0,le,ce,oe.data),S.__maxMipLevel=0;else if(q.length>0&&N){for(let de=0,pe=q.length;de<pe;de++)re=q[de],n.texImage2D(e.TEXTURE_2D,de,ye,le,ce,re);D.generateMipmaps=!1,S.__maxMipLevel=q.length-1}else n.texImage2D(e.TEXTURE_2D,0,ye,le,ce,oe),S.__maxMipLevel=0;v(D,N)&&b(ee,D,oe.width,oe.height),S.__version=D.version,D.onUpdate&&D.onUpdate(D)}function De(S,D,Q,ee){const W=s.convert(D.texture.format),oe=s.convert(D.texture.type),N=x(D.texture.internalFormat,W,oe);n.texImage2D(ee,0,N,D.width,D.height,0,W,oe,null),e.bindFramebuffer(e.FRAMEBUFFER,S),e.framebufferTexture2D(e.FRAMEBUFFER,Q,ee,i.get(D.texture).__webglTexture,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function T(S,D,Q){if(e.bindRenderbuffer(e.RENDERBUFFER,S),D.depthBuffer&&!D.stencilBuffer){let ee=e.DEPTH_COMPONENT16;if(Q){const W=D.depthTexture;W&&W.isDepthTexture&&(W.type===Gi?ee=e.DEPTH_COMPONENT32F:W.type===Cc&&(ee=e.DEPTH_COMPONENT24));const oe=L(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,oe,ee,D.width,D.height)}else e.renderbufferStorage(e.RENDERBUFFER,ee,D.width,D.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,S)}else if(D.depthBuffer&&D.stencilBuffer){if(Q){const ee=L(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,e.DEPTH24_STENCIL8,D.width,D.height)}else e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,D.width,D.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,S)}else{const ee=s.convert(D.texture.format),W=s.convert(D.texture.type),oe=x(D.texture.internalFormat,ee,W);if(Q){const N=L(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,N,oe,D.width,D.height)}else e.renderbufferStorage(e.RENDERBUFFER,oe,D.width,D.height)}e.bindRenderbuffer(e.RENDERBUFFER,null)}function M(S,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(e.FRAMEBUFFER,S),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),V(D.depthTexture,0);const ee=i.get(D.depthTexture).__webglTexture;if(D.depthTexture.format===_s)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,ee,0);else if(D.depthTexture.format===ko)e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function O(S){const D=i.get(S),Q=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");M(D.__webglFramebuffer,S)}else if(Q){D.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)e.bindFramebuffer(e.FRAMEBUFFER,D.__webglFramebuffer[ee]),D.__webglDepthbuffer[ee]=e.createRenderbuffer(),T(D.__webglDepthbuffer[ee],S,!1)}else e.bindFramebuffer(e.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=e.createRenderbuffer(),T(D.__webglDepthbuffer,S,!1);e.bindFramebuffer(e.FRAMEBUFFER,null)}function C(S){const D=i.get(S),Q=i.get(S.texture);S.addEventListener("dispose",P),Q.__webglTexture=e.createTexture(),o.memory.textures++;const ee=S.isWebGLCubeRenderTarget===!0,W=S.isWebGLMultisampleRenderTarget===!0,oe=m(S)||a;if(a&&S.texture.format===bi&&(S.texture.type===Gi||S.texture.type===Zc)&&(S.texture.format=gn,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ee){D.__webglFramebuffer=[];for(let N=0;N<6;N++)D.__webglFramebuffer[N]=e.createFramebuffer()}else if(D.__webglFramebuffer=e.createFramebuffer(),W)if(a){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer);const N=s.convert(S.texture.format),le=s.convert(S.texture.type),ce=x(S.texture.internalFormat,N,le),ye=L(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,ce,S.width,S.height),e.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,D.__webglColorRenderbuffer),e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),T(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(e.FRAMEBUFFER,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ee){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),fe(e.TEXTURE_CUBE_MAP,S.texture,oe);for(let N=0;N<6;N++)De(D.__webglFramebuffer[N],S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+N);v(S.texture,oe)&&b(e.TEXTURE_CUBE_MAP,S.texture,S.width,S.height),n.bindTexture(e.TEXTURE_CUBE_MAP,null)}else n.bindTexture(e.TEXTURE_2D,Q.__webglTexture),fe(e.TEXTURE_2D,S.texture,oe),De(D.__webglFramebuffer,S,e.COLOR_ATTACHMENT0,e.TEXTURE_2D),v(S.texture,oe)&&b(e.TEXTURE_2D,S.texture,S.width,S.height),n.bindTexture(e.TEXTURE_2D,null);S.depthBuffer&&O(S)}function U(S){const D=S.texture,Q=m(S)||a;if(v(D,Q)){const ee=S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,W=i.get(D).__webglTexture;n.bindTexture(ee,W),b(ee,D,S.width,S.height),n.bindTexture(ee,null)}}function z(S){if(S.isWebGLMultisampleRenderTarget)if(a){const D=i.get(S);e.bindFramebuffer(e.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,D.__webglFramebuffer);const Q=S.width,ee=S.height;let W=e.COLOR_BUFFER_BIT;S.depthBuffer&&(W|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&(W|=e.STENCIL_BUFFER_BIT),e.blitFramebuffer(0,0,Q,ee,0,0,Q,ee,W,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function L(S){return a&&S.isWebGLMultisampleRenderTarget?Math.min(h,S.samples):0}function H(S){const D=o.render.frame;d.get(S)!==D&&(d.set(S,D),S.update())}let Y=!1,K=!1;function J(S,D){S&&S.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),S=S.texture),V(S,D)}function ne(S,D){S&&S.isWebGLCubeRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),K=!0),S=S.texture),S&&S.isCubeTexture||Array.isArray(S.image)&&S.image.length===6?j(S,D):ie(S,D)}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=V,this.setTexture2DArray=I,this.setTexture3D=B,this.setTextureCube=j,this.setTextureCubeDynamic=ie,this.setupRenderTarget=C,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=z,this.safeSetTexture2D=J,this.safeSetTextureCube=ne}function w1(e,t,n){const i=n.isWebGL2;function r(s){let o;if(s===wa)return e.UNSIGNED_BYTE;if(s===hb)return e.UNSIGNED_SHORT_4_4_4_4;if(s===fb)return e.UNSIGNED_SHORT_5_5_5_1;if(s===db)return e.UNSIGNED_SHORT_5_6_5;if(s===cb)return e.BYTE;if(s===lb)return e.SHORT;if(s===qc)return e.UNSIGNED_SHORT;if(s===ub)return e.INT;if(s===Cc)return e.UNSIGNED_INT;if(s===Gi)return e.FLOAT;if(s===Zc)return i?e.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===pb)return e.ALPHA;if(s===bi)return e.RGB;if(s===gn)return e.RGBA;if(s===mb)return e.LUMINANCE;if(s===gb)return e.LUMINANCE_ALPHA;if(s===_s)return e.DEPTH_COMPONENT;if(s===ko)return e.DEPTH_STENCIL;if(s===_b)return e.RED;if(s===vb)return e.RED_INTEGER;if(s===bb)return e.RG;if(s===xb)return e.RG_INTEGER;if(s===wb)return e.RGB_INTEGER;if(s===Mb)return e.RGBA_INTEGER;if(s===wd||s===Md||s===Ed||s===Sd)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===wd)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Md)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ed)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sd)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Td||s===Ad||s===Rd||s===Ld)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Td)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ad)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ld)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eb)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Pd||s===Cd)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Pd)return o.COMPRESSED_RGB8_ETC2;if(s===Cd)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Sb||s===Tb||s===Ab||s===Rb||s===Lb||s===Pb||s===Cb||s===Ib||s===Db||s===Ob||s===Fb||s===Nb||s===kb||s===Bb||s===Hb||s===zb||s===Gb||s===Vb||s===Wb||s===jb||s===Xb||s===Yb||s===qb||s===Zb||s===Jb||s===Kb||s===Qb||s===$b)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Ub)return o=t.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Ao)return i?e.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function ah(e){wt.call(this),this.cameras=e||[]}ah.prototype=Object.assign(Object.create(wt.prototype),{constructor:ah,isArrayCamera:!0});function ti(){xe.call(this),this.type="Group"}ti.prototype=Object.assign(Object.create(xe.prototype),{constructor:ti,isGroup:!0});function Lo(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Lo.prototype,{constructor:Lo,getHandSpace:function(){if(this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let e=0;e<=window.XRHand.LITTLE_PHALANX_TIP;e++){let t=new ti;t.matrixAutoUpdate=!1,t.visible=!1,this._hand.joints.push(t),this._hand.add(t)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(e)if(e.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(e.hand[l]){let u=t.getJointPose(e.hand[l],n);const h=c.joints[l];u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=u.radius),h.visible=u!==null;const d=c.joints[window.XRHand.INDEX_PHALANX_TIP],f=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=d.position.distanceTo(f.position),y=.02,_=.005;c.inputState.pinching&&p>y+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=y-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}}else o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Dg(e,t){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new wt;u.layers.enable(1),u.viewport=new nt;const h=new wt;h.layers.enable(2),h.viewport=new nt;const d=[u,h],f=new ah;f.layers.enable(1),f.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=c[k];return X===void 0&&(X=new Lo,c[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=c[k];return X===void 0&&(X=new Lo,c[k]=X),X.getGripSpace()},this.getHand=function(k){let X=c[k];return X===void 0&&(X=new Lo,c[k]=X),X.getHandSpace()};function _(k){const X=l.get(k.inputSource);X&&X.dispatchEvent({type:k.type})}function m(){l.forEach(function(k,X){k.disconnect(X)}),l.clear(),e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function g(k){s=k,Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(k){if(i=k,i!==null){i.addEventListener("select",_),i.addEventListener("selectstart",_),i.addEventListener("selectend",_),i.addEventListener("squeeze",_),i.addEventListener("squeezestart",_),i.addEventListener("squeezeend",_),i.addEventListener("end",m);const X=t.getContextAttributes();X.xrCompatible!==!0&&t.makeXRCompatible();const G={antialias:X.antialias,alpha:X.alpha,depth:X.depth,stencil:X.stencil,framebufferScaleFactor:r},V=new XRWebGLLayer(i,t,G);i.updateRenderState({baseLayer:V}),i.requestReferenceSpace(o).then(g),i.addEventListener("inputsourceschange",v)}};function v(k){const X=i.inputSources;for(let G=0;G<c.length;G++)l.set(X[G],c[G]);for(let G=0;G<k.removed.length;G++){const V=k.removed[G],I=l.get(V);I&&(I.dispatchEvent({type:"disconnected",data:V}),l.delete(V))}for(let G=0;G<k.added.length;G++){const V=k.added[G],I=l.get(V);I&&I.dispatchEvent({type:"connected",data:V})}}const b=new R,x=new R;function E(k,X,G){b.setFromMatrixPosition(X.matrixWorld),x.setFromMatrixPosition(G.matrixWorld);const V=b.distanceTo(x),I=X.projectionMatrix.elements,B=G.projectionMatrix.elements,j=I[14]/(I[10]-1),ie=I[14]/(I[10]+1),me=(I[9]+1)/I[5],ge=(I[9]-1)/I[5],fe=(I[8]-1)/I[0],Ae=(B[8]+1)/B[0],ve=j*fe,De=j*Ae,T=V/(-fe+Ae),M=T*-fe;X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(M),k.translateZ(T),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.getInverse(k.matrixWorld);const O=j+T,C=ie+T,U=ve-M,z=De+(V-M),L=me*ie/C*O,H=ge*ie/C*O;k.projectionMatrix.makePerspective(U,z,L,H,O,C)}function w(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.getInverse(k.matrixWorld)}this.getCamera=function(k){f.near=h.near=u.near=k.near,f.far=h.far=u.far=k.far,(p!==f.near||y!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,y=f.far);const X=k.parent,G=f.cameras;w(f,X);for(let I=0;I<G.length;I++)w(G[I],X);k.matrixWorld.copy(f.matrixWorld);const V=k.children;for(let I=0,B=V.length;I<B;I++)V[I].updateMatrixWorld(!0);return G.length===2?E(f,u,h):f.projectionMatrix.copy(u.projectionMatrix),f};let P=null;function A(k,X){if(a=X.getViewerPose(s),a!==null){const V=a.views,I=i.renderState.baseLayer;e.setFramebuffer(I.framebuffer);let B=!1;V.length!==f.cameras.length&&(f.cameras.length=0,B=!0);for(let j=0;j<V.length;j++){const ie=V[j],me=I.getViewport(ie),ge=d[j];ge.matrix.fromArray(ie.transform.matrix),ge.projectionMatrix.fromArray(ie.projectionMatrix),ge.viewport.set(me.x,me.y,me.width,me.height),j===0&&f.matrix.copy(ge.matrix),B===!0&&f.cameras.push(ge)}}const G=i.inputSources;for(let V=0;V<c.length;V++){const I=c[V],B=G[V];I.update(B,X,s)}P&&P(k,X)}const Z=new Eg;Z.setAnimationLoop(A),this.setAnimationLoop=function(k){P=k},this.dispose=function(){}}Object.assign(Dg.prototype,Wn.prototype);function M1(e){function t(m,g){m.fogColor.value.copy(g.color),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,x){g.isMeshBasicMaterial?i(m,g):g.isMeshLambertMaterial?(i(m,g),c(m,g)):g.isMeshToonMaterial?(i(m,g),u(m,g)):g.isMeshPhongMaterial?(i(m,g),l(m,g)):g.isMeshStandardMaterial?(i(m,g,v),g.isMeshPhysicalMaterial?d(m,g,v):h(m,g,v)):g.isMeshMatcapMaterial?(i(m,g),f(m,g)):g.isMeshDepthMaterial?(i(m,g),p(m,g)):g.isMeshDistanceMaterial?(i(m,g),y(m,g)):g.isMeshNormalMaterial?(i(m,g),_(m,g)):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&s(m,g)):g.isPointsMaterial?o(m,g,b,x):g.isSpriteMaterial?a(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function i(m,g,v){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.specularMap&&(m.specularMap.value=g.specularMap);const b=g.envMap||v;if(b){m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture?-1:1,m.reflectivity.value=g.reflectivity,m.refractionRatio.value=g.refractionRatio;var x=e.get(b).__maxMipLevel;x!==void 0&&(m.maxMipLevel.value=x)}g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let E;g.map?E=g.map:g.specularMap?E=g.specularMap:g.displacementMap?E=g.displacementMap:g.normalMap?E=g.normalMap:g.bumpMap?E=g.bumpMap:g.roughnessMap?E=g.roughnessMap:g.metalnessMap?E=g.metalnessMap:g.alphaMap?E=g.alphaMap:g.emissiveMap&&(E=g.emissiveMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix));let w;g.aoMap?w=g.aoMap:g.lightMap&&(w=g.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function s(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let x;g.map?x=g.map:g.alphaMap&&(x=g.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap);let v;g.map?v=g.map:g.alphaMap&&(v=g.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,g){g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap)}function l(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function h(m,g,v){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),(g.envMap||v)&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){h(m,g,v),m.reflectivity.value=g.reflectivity,m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.sheen&&m.sheen.value.copy(g.sheen),g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===kt&&m.clearcoatNormalScale.value.negate()),m.transmission.value=g.transmission,g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap)}function f(m,g){g.matcap&&(m.matcap.value=g.matcap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function p(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}function y(m,g){g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}function _(m,g){g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===kt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===kt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ea(e){e=e||{};const t=e.canvas!==void 0?e.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=e.context!==void 0?e.context:null,i=e.alpha!==void 0?e.alpha:!1,r=e.depth!==void 0?e.depth:!0,s=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,a=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,c=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,l=e.powerPreference!==void 0?e.powerPreference:"default",u=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1;let h=null,d=null;this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ln,this.physicallyCorrectLights=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const f=this;let p=!1,y=null,_=0,m=0,g=null,v=null,b=-1,x=null,E=null;const w=new nt,P=new nt;let A=null,Z=t.width,k=t.height,X=1,G=null,V=null;const I=new nt(0,0,Z,k),B=new nt(0,0,Z,k);let j=!1;const ie=new Ma,me=new eE;let ge=!1,fe=!1;const Ae=new ze,ve=new R,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function T(){return g===null?X:1}let M=n;function O(F,se){for(let te=0;te<F.length;te++){const ue=F[te],Se=t.getContext(ue,se);if(Se!==null)return Se}return null}try{const F={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",$,!1),M===null){const se=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&se.shift(),M=O(se,F),M===null)throw O(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let C,U,z,L,H,Y,K,J,ne,S,D,Q,ee,W,oe,N,le,ce,ye;function re(){C=new tE(M),U=new $M(M,C,e),U.isWebGL2===!1&&(C.get("WEBGL_depth_texture"),C.get("OES_texture_float"),C.get("OES_texture_half_float"),C.get("OES_texture_half_float_linear"),C.get("OES_standard_derivatives"),C.get("OES_element_index_uint"),C.get("OES_vertex_array_object"),C.get("ANGLE_instanced_arrays")),C.get("OES_texture_float_linear"),ce=new w1(M,C,U),z=new b1(M,C,U),z.scissor(P.copy(B).multiplyScalar(X).floor()),z.viewport(w.copy(I).multiplyScalar(X).floor()),L=new rE(M),H=new c1,Y=new x1(M,C,z,H,U,ce,L),K=new Rx(M,U),ye=new KM(M,C,K,U),J=new nE(M,K,L,ye),ne=new cE(M,J,K,L),oe=new aE(M),S=new a1(f,C,U,ye),D=new M1(H),Q=new h1(H),ee=new y1,W=new JM(f,z,ne,a),N=new QM(M,C,L,U),le=new iE(M,C,L,U),L.programs=S.programs,f.capabilities=U,f.extensions=C,f.properties=H,f.renderLists=Q,f.state=z,f.info=L}re();const q=new Dg(f,M);this.xr=q;const de=new Ig(f,ne,U.maxTextureSize);this.shadowMap=de,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const F=C.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=C.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(Z,k,!1))},this.getSize=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),F=new ae),F.set(Z,k)},this.setSize=function(F,se,te){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=F,k=se,t.width=Math.floor(F*X),t.height=Math.floor(se*X),te!==!1&&(t.style.width=F+"px",t.style.height=se+"px"),this.setViewport(0,0,F,se)},this.getDrawingBufferSize=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),F=new ae),F.set(Z*X,k*X).floor()},this.setDrawingBufferSize=function(F,se,te){Z=F,k=se,X=te,t.width=Math.floor(F*te),t.height=Math.floor(se*te),this.setViewport(0,0,F,se)},this.getCurrentViewport=function(F){return F===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),F=new nt),F.copy(w)},this.getViewport=function(F){return F.copy(I)},this.setViewport=function(F,se,te,ue){F.isVector4?I.set(F.x,F.y,F.z,F.w):I.set(F,se,te,ue),z.viewport(w.copy(I).multiplyScalar(X).floor())},this.getScissor=function(F){return F.copy(B)},this.setScissor=function(F,se,te,ue){F.isVector4?B.set(F.x,F.y,F.z,F.w):B.set(F,se,te,ue),z.scissor(P.copy(B).multiplyScalar(X).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(F){z.setScissorTest(j=F)},this.setOpaqueSort=function(F){G=F},this.setTransparentSort=function(F){V=F},this.getClearColor=function(){return W.getClearColor()},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(F,se,te){let ue=0;(F===void 0||F)&&(ue|=M.COLOR_BUFFER_BIT),(se===void 0||se)&&(ue|=M.DEPTH_BUFFER_BIT),(te===void 0||te)&&(ue|=M.STENCIL_BUFFER_BIT),M.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",$,!1),Q.dispose(),ee.dispose(),H.dispose(),ne.dispose(),ye.dispose(),q.dispose(),Xn.stop()};function pe(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,re()}function he(F){const se=F.target;se.removeEventListener("dispose",he),Ee(se)}function Ee(F){Ze(F),H.remove(F)}function Ze(F){const se=H.get(F).program;se!==void 0&&S.releaseProgram(se)}function Lt(F,se){F.render(function(te){f.renderBufferImmediate(te,se)})}this.renderBufferImmediate=function(F,se){ye.initAttributes();const te=H.get(F);F.hasPositions&&!te.position&&(te.position=M.createBuffer()),F.hasNormals&&!te.normal&&(te.normal=M.createBuffer()),F.hasUvs&&!te.uv&&(te.uv=M.createBuffer()),F.hasColors&&!te.color&&(te.color=M.createBuffer());const ue=se.getAttributes();F.hasPositions&&(M.bindBuffer(M.ARRAY_BUFFER,te.position),M.bufferData(M.ARRAY_BUFFER,F.positionArray,M.DYNAMIC_DRAW),ye.enableAttribute(ue.position),M.vertexAttribPointer(ue.position,3,M.FLOAT,!1,0,0)),F.hasNormals&&(M.bindBuffer(M.ARRAY_BUFFER,te.normal),M.bufferData(M.ARRAY_BUFFER,F.normalArray,M.DYNAMIC_DRAW),ye.enableAttribute(ue.normal),M.vertexAttribPointer(ue.normal,3,M.FLOAT,!1,0,0)),F.hasUvs&&(M.bindBuffer(M.ARRAY_BUFFER,te.uv),M.bufferData(M.ARRAY_BUFFER,F.uvArray,M.DYNAMIC_DRAW),ye.enableAttribute(ue.uv),M.vertexAttribPointer(ue.uv,2,M.FLOAT,!1,0,0)),F.hasColors&&(M.bindBuffer(M.ARRAY_BUFFER,te.color),M.bufferData(M.ARRAY_BUFFER,F.colorArray,M.DYNAMIC_DRAW),ye.enableAttribute(ue.color),M.vertexAttribPointer(ue.color,3,M.FLOAT,!1,0,0)),ye.disableUnusedAttributes(),M.drawArrays(M.TRIANGLES,0,F.count),F.count=0},this.renderBufferDirect=function(F,se,te,ue,Se,je){se===null&&(se=De);const Ge=Se.isMesh&&Se.matrixWorld.determinant()<0,Pe=Hr(F,se,ue,Se);z.setMaterial(ue,Ge);let _t=te.index;const vt=te.attributes.position;if(_t===null){if(vt===void 0||vt.count===0)return}else if(_t.count===0)return;let mt=1;ue.wireframe===!0&&(_t=J.getWireframeAttribute(te),mt=2),(ue.morphTargets||ue.morphNormals)&&oe.update(Se,te,ue,Pe),ye.setup(Se,ue,Pe,te,_t);let Tt,Be=N;_t!==null&&(Tt=K.get(_t),Be=le,Be.setIndex(Tt));const bt=_t!==null?_t.count:vt.count,It=te.drawRange.start*mt,ft=te.drawRange.count*mt,Aa=je!==null?je.start*mt:0,Fn=je!==null?je.count*mt:1/0,Li=Math.max(It,Aa),Zl=Math.min(bt,It+ft,Aa+Fn)-1,Ra=Math.max(0,Zl-Li+1);if(Ra!==0){if(Se.isMesh)ue.wireframe===!0?(z.setLineWidth(ue.wireframeLinewidth*T()),Be.setMode(M.LINES)):Be.setMode(M.TRIANGLES);else if(Se.isLine){let no=ue.linewidth;no===void 0&&(no=1),z.setLineWidth(no*T()),Se.isLineSegments?Be.setMode(M.LINES):Se.isLineLoop?Be.setMode(M.LINE_LOOP):Be.setMode(M.LINE_STRIP)}else Se.isPoints?Be.setMode(M.POINTS):Se.isSprite&&Be.setMode(M.TRIANGLES);if(Se.isInstancedMesh)Be.renderInstances(Li,Ra,Se.count);else if(te.isInstancedBufferGeometry){const no=Math.min(te.instanceCount,te._maxInstanceCount);Be.renderInstances(Li,Ra,no)}else Be.render(Li,Ra)}},this.compile=function(F,se){d=ee.get(F,se),d.init(),F.traverse(function(ue){ue.isLight&&(d.pushLight(ue),ue.castShadow&&d.pushShadow(ue))}),d.setupLights(se);const te=new WeakMap;F.traverse(function(ue){let Se=ue.material;if(Se)if(Array.isArray(Se))for(let je=0;je<Se.length;je++){let Ge=Se[je];te.has(Ge)===!1&&(Ft(Ge,F,ue),te.set(Ge))}else te.has(Se)===!1&&(Ft(Se,F,ue),te.set(Se))})};let hi=null;function Yl(F){q.isPresenting||hi&&hi(F)}const Xn=new Eg;Xn.setAnimationLoop(Yl),typeof window!="undefined"&&Xn.setContext(window),this.setAnimationLoop=function(F){hi=F,q.setAnimationLoop(F),F===null?Xn.stop():Xn.start()},this.render=function(F,se){let te,ue;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),te=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),ue=arguments[3]),se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;ye.resetDefaultState(),b=-1,x=null,F.autoUpdate===!0&&F.updateMatrixWorld(),se.parent===null&&se.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(se=q.getCamera(se)),F.isScene===!0&&F.onBeforeRender(f,F,se,te||g),d=ee.get(F,se),d.init(),Ae.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),ie.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,ge=me.init(this.clippingPlanes,fe,se),h=Q.get(F,se),h.init(),Mn(F,se,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(G,V),ge===!0&&me.beginShadows();const Se=d.state.shadowsArray;de.render(Se,F,se),d.setupLights(se),ge===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),te!==void 0&&this.setRenderTarget(te),W.render(h,F,se,ue);const je=h.opaque,Ge=h.transparent;je.length>0&&Ri(je,F,se),Ge.length>0&&Ri(Ge,F,se),F.isScene===!0&&F.onAfterRender(f,F,se),g!==null&&(Y.updateRenderTargetMipmap(g),Y.updateMultisampleRenderTarget(g)),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1),h=null,d=null};function Mn(F,se,te,ue){if(F.visible===!1)return;if(F.layers.test(se.layers)){if(F.isGroup)te=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(se);else if(F.isLight)d.pushLight(F),F.castShadow&&d.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||ie.intersectsSprite(F)){ue&&ve.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ae);const Ge=ne.update(F),Pe=F.material;Pe.visible&&h.push(F,Ge,Pe,te,ve.z,null)}}else if(F.isImmediateRenderObject)ue&&ve.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ae),h.push(F,null,F.material,te,ve.z,null);else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==L.render.frame&&(F.skeleton.update(),F.skeleton.frame=L.render.frame),!F.frustumCulled||ie.intersectsObject(F))){ue&&ve.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Ae);const Ge=ne.update(F),Pe=F.material;if(Array.isArray(Pe)){const _t=Ge.groups;for(let vt=0,mt=_t.length;vt<mt;vt++){const Tt=_t[vt],Be=Pe[Tt.materialIndex];Be&&Be.visible&&h.push(F,Ge,Be,te,ve.z,Tt)}}else Pe.visible&&h.push(F,Ge,Pe,te,ve.z,null)}}const je=F.children;for(let Ge=0,Pe=je.length;Ge<Pe;Ge++)Mn(je[Ge],se,te,ue)}function Ri(F,se,te){const ue=se.isScene===!0?se.overrideMaterial:null;for(let Se=0,je=F.length;Se<je;Se++){const Ge=F[Se],Pe=Ge.object,_t=Ge.geometry,vt=ue===null?Ge.material:ue,mt=Ge.group;if(te.isArrayCamera){E=te;const Tt=te.cameras;for(let Be=0,bt=Tt.length;Be<bt;Be++){const It=Tt[Be];Pe.layers.test(It.layers)&&(z.viewport(w.copy(It.viewport)),d.setupLights(It),eo(Pe,se,It,_t,vt,mt))}}else E=null,eo(Pe,se,te,_t,vt,mt)}}function eo(F,se,te,ue,Se,je){if(F.onBeforeRender(f,se,te,ue,Se,je),d=ee.get(se,E||te),F.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),F.isImmediateRenderObject){const Ge=Hr(te,se,Se,F);z.setMaterial(Se),ye.reset(),Lt(F,Ge)}else f.renderBufferDirect(te,se,ue,Se,F,je);F.onAfterRender(f,se,te,ue,Se,je),d=ee.get(se,E||te)}function Ft(F,se,te){se.isScene!==!0&&(se=De);const ue=H.get(F),Se=d.state.lights,je=d.state.shadowsArray,Ge=Se.state.version,Pe=S.getParameters(F,Se.state,je,se,me.numPlanes,me.numIntersection,te),_t=S.getProgramCacheKey(Pe);let vt=ue.program,mt=!0;if(vt===void 0)F.addEventListener("dispose",he);else if(vt.cacheKey!==_t)Ze(F);else if(ue.lightsStateVersion!==Ge)ue.lightsStateVersion=Ge,mt=!1;else{if(Pe.shaderID!==void 0)return;mt=!1}mt&&(Pe.uniforms=S.getUniforms(F,Pe),F.onBeforeCompile(Pe,f),vt=S.acquireProgram(Pe,_t),ue.program=vt,ue.uniforms=Pe.uniforms,ue.outputEncoding=Pe.outputEncoding);const Tt=vt.getAttributes();if(F.morphTargets){F.numSupportedMorphTargets=0;for(let ft=0;ft<f.maxMorphTargets;ft++)Tt["morphTarget"+ft]>=0&&F.numSupportedMorphTargets++}if(F.morphNormals){F.numSupportedMorphNormals=0;for(let ft=0;ft<f.maxMorphNormals;ft++)Tt["morphNormal"+ft]>=0&&F.numSupportedMorphNormals++}const Be=ue.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ue.numClippingPlanes=me.numPlanes,ue.numIntersection=me.numIntersection,Be.clippingPlanes=me.uniform),ue.environment=F.isMeshStandardMaterial?se.environment:null,ue.fog=se.fog,ue.needsLights=ql(F),ue.lightsStateVersion=Ge,ue.needsLights&&(Be.ambientLightColor.value=Se.state.ambient,Be.lightProbe.value=Se.state.probe,Be.directionalLights.value=Se.state.directional,Be.directionalLightShadows.value=Se.state.directionalShadow,Be.spotLights.value=Se.state.spot,Be.spotLightShadows.value=Se.state.spotShadow,Be.rectAreaLights.value=Se.state.rectArea,Be.pointLights.value=Se.state.point,Be.pointLightShadows.value=Se.state.pointShadow,Be.hemisphereLights.value=Se.state.hemi,Be.directionalShadowMap.value=Se.state.directionalShadowMap,Be.directionalShadowMatrix.value=Se.state.directionalShadowMatrix,Be.spotShadowMap.value=Se.state.spotShadowMap,Be.spotShadowMatrix.value=Se.state.spotShadowMatrix,Be.pointShadowMap.value=Se.state.pointShadowMap,Be.pointShadowMatrix.value=Se.state.pointShadowMatrix);const bt=ue.program.getUniforms(),It=qi.seqWithValue(bt.seq,Be);ue.uniformsList=It}function Hr(F,se,te,ue){se.isScene!==!0&&(se=De),Y.resetTextureUnits();const Se=se.fog,je=te.isMeshStandardMaterial?se.environment:null,Ge=g===null?f.outputEncoding:g.texture.encoding,Pe=H.get(te),_t=d.state.lights;if(ge===!0&&(fe===!0||F!==x)){const ft=F===x&&te.id===b;me.setState(te.clippingPlanes,te.clipIntersection,te.clipShadows,F,Pe,ft)}te.version===Pe.__version?(Pe.program===void 0||te.fog&&Pe.fog!==Se||Pe.environment!==je||Pe.needsLights&&Pe.lightsStateVersion!==_t.state.version||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==me.numPlanes||Pe.numIntersection!==me.numIntersection)||Pe.outputEncoding!==Ge)&&Ft(te,se,ue):(Ft(te,se,ue),Pe.__version=te.version);let vt=!1,mt=!1,Tt=!1;const Be=Pe.program,bt=Be.getUniforms(),It=Pe.uniforms;if(z.useProgram(Be.program)&&(vt=!0,mt=!0,Tt=!0),te.id!==b&&(b=te.id,mt=!0),vt||x!==F){if(bt.setValue(M,"projectionMatrix",F.projectionMatrix),U.logarithmicDepthBuffer&&bt.setValue(M,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),x!==F&&(x=F,mt=!0,Tt=!0),te.isShaderMaterial||te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshStandardMaterial||te.envMap){const ft=bt.map.cameraPosition;ft!==void 0&&ft.setValue(M,ve.setFromMatrixPosition(F.matrixWorld))}(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&bt.setValue(M,"isOrthographic",F.isOrthographicCamera===!0),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial||te.isShadowMaterial||te.skinning)&&bt.setValue(M,"viewMatrix",F.matrixWorldInverse)}if(te.skinning){bt.setOptional(M,ue,"bindMatrix"),bt.setOptional(M,ue,"bindMatrixInverse");const ft=ue.skeleton;if(ft){const Aa=ft.bones;if(U.floatVertexTextures){if(ft.boneTexture===void 0){let Fn=Math.sqrt(Aa.length*4);Fn=ke.ceilPowerOfTwo(Fn),Fn=Math.max(Fn,4);const Li=new Float32Array(Fn*Fn*4);Li.set(ft.boneMatrices);const Zl=new Rs(Li,Fn,Fn,gn,Gi);ft.boneMatrices=Li,ft.boneTexture=Zl,ft.boneTextureSize=Fn}bt.setValue(M,"boneTexture",ft.boneTexture,Y),bt.setValue(M,"boneTextureSize",ft.boneTextureSize)}else bt.setOptional(M,ft,"boneMatrices")}}return(mt||Pe.receiveShadow!==ue.receiveShadow)&&(Pe.receiveShadow=ue.receiveShadow,bt.setValue(M,"receiveShadow",ue.receiveShadow)),mt&&(bt.setValue(M,"toneMappingExposure",f.toneMappingExposure),Pe.needsLights&&to(It,Tt),Se&&te.fog&&D.refreshFogUniforms(It,Se),D.refreshMaterialUniforms(It,te,je,X,k),It.ltc_1!==void 0&&(It.ltc_1.value=we.LTC_1),It.ltc_2!==void 0&&(It.ltc_2.value=we.LTC_2),qi.upload(M,Pe.uniformsList,It,Y)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(qi.upload(M,Pe.uniformsList,It,Y),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&bt.setValue(M,"center",ue.center),bt.setValue(M,"modelViewMatrix",ue.modelViewMatrix),bt.setValue(M,"normalMatrix",ue.normalMatrix),bt.setValue(M,"modelMatrix",ue.matrixWorld),Be}function to(F,se){F.ambientLightColor.needsUpdate=se,F.lightProbe.needsUpdate=se,F.directionalLights.needsUpdate=se,F.directionalLightShadows.needsUpdate=se,F.pointLights.needsUpdate=se,F.pointLightShadows.needsUpdate=se,F.spotLights.needsUpdate=se,F.spotLightShadows.needsUpdate=se,F.rectAreaLights.needsUpdate=se,F.hemisphereLights.needsUpdate=se}function ql(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.setFramebuffer=function(F){y!==F&&g===null&&M.bindFramebuffer(M.FRAMEBUFFER,F),y=F},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return g},this.setRenderTarget=function(F,se,te){g=F,_=se,m=te,F&&H.get(F).__webglFramebuffer===void 0&&Y.setupRenderTarget(F);let ue=y,Se=!1;if(F){const je=H.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(ue=je[se||0],Se=!0):F.isWebGLMultisampleRenderTarget?ue=H.get(F).__webglMultisampledFramebuffer:ue=je,w.copy(F.viewport),P.copy(F.scissor),A=F.scissorTest}else w.copy(I).multiplyScalar(X).floor(),P.copy(B).multiplyScalar(X).floor(),A=j;if(v!==ue&&(M.bindFramebuffer(M.FRAMEBUFFER,ue),v=ue),z.viewport(w),z.scissor(P),z.setScissorTest(A),Se){const je=H.get(F.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+(se||0),je.__webglTexture,te||0)}},this.readRenderTargetPixels=function(F,se,te,ue,Se,je,Ge){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=H.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ge!==void 0&&(Pe=Pe[Ge]),Pe){let _t=!1;Pe!==v&&(M.bindFramebuffer(M.FRAMEBUFFER,Pe),_t=!0);try{const vt=F.texture,mt=vt.format,Tt=vt.type;if(mt!==gn&&ce.convert(mt)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt!==wa&&ce.convert(Tt)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Tt===Gi&&(U.isWebGL2||C.get("OES_texture_float")||C.get("WEBGL_color_buffer_float")))&&!(Tt===Zc&&(U.isWebGL2?C.get("EXT_color_buffer_float"):C.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M.checkFramebufferStatus(M.FRAMEBUFFER)===M.FRAMEBUFFER_COMPLETE?se>=0&&se<=F.width-ue&&te>=0&&te<=F.height-Se&&M.readPixels(se,te,ue,Se,ce.convert(mt),ce.convert(Tt),je):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{_t&&M.bindFramebuffer(M.FRAMEBUFFER,v)}}},this.copyFramebufferToTexture=function(F,se,te){te===void 0&&(te=0);const ue=Math.pow(2,-te),Se=Math.floor(se.image.width*ue),je=Math.floor(se.image.height*ue),Ge=ce.convert(se.format);Y.setTexture2D(se,0),M.copyTexImage2D(M.TEXTURE_2D,te,Ge,F.x,F.y,Se,je,0),z.unbindTexture()},this.copyTextureToTexture=function(F,se,te,ue){ue===void 0&&(ue=0);const Se=se.image.width,je=se.image.height,Ge=ce.convert(te.format),Pe=ce.convert(te.type);Y.setTexture2D(te,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,te.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,te.unpackAlignment),se.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,ue,F.x,F.y,Se,je,Ge,Pe,se.image.data):se.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,ue,F.x,F.y,se.mipmaps[0].width,se.mipmaps[0].height,Ge,se.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,ue,F.x,F.y,Ge,Pe,se.image),ue===0&&te.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),z.unbindTexture()},this.initTexture=function(F){Y.setTexture2D(F,0),z.unbindTexture()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function ip(e){Ea.call(this,e)}ip.prototype=Object.assign(Object.create(Ea.prototype),{constructor:ip,isWebGL1Renderer:!0});function ch(e,t){this.name="",this.color=new _e(e),this.density=t!==void 0?t:25e-5}Object.assign(ch.prototype,{isFogExp2:!0,clone:function(){return new ch(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function $c(e,t,n){this.name="",this.color=new _e(e),this.near=t!==void 0?t:1,this.far=n!==void 0?n:1e3}Object.assign($c.prototype,{isFog:!0,clone:function(){return new $c(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function mn(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ke.generateUUID()}Object.defineProperty(mn.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(mn.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ke.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new mn(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ke.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const hr=new R;function er(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}Object.defineProperties(er.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}});Object.assign(er.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(let t=0,n=this.data.count;t<n;t++)hr.x=this.getX(t),hr.y=this.getY(t),hr.z=this.getZ(t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this},setXYZW:function(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ie(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Cr(e){Fe.call(this),this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Cr.prototype=Object.create(Fe.prototype);Cr.prototype.constructor=Cr;Cr.prototype.isSpriteMaterial=!0;Cr.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};let ts;const ho=new R,ns=new R,is=new R,rs=new ae,fo=new ae,Og=new ze,rc=new R,po=new R,sc=new R,rp=new ae,Cu=new ae,sp=new ae;function lh(e){if(xe.call(this),this.type="Sprite",ts===void 0){ts=new Te;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mn(t,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new er(n,3,0,!1)),ts.setAttribute("uv",new er(n,2,3,!1))}this.geometry=ts,this.material=e!==void 0?e:new Cr,this.center=new ae(.5,.5)}lh.prototype=Object.assign(Object.create(xe.prototype),{constructor:lh,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Og.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;oc(rc.set(-.5,-.5,0),is,s,ns,i,r),oc(po.set(.5,-.5,0),is,s,ns,i,r),oc(sc.set(.5,.5,0),is,s,ns,i,r),rp.set(0,0),Cu.set(1,0),sp.set(1,1);let o=e.ray.intersectTriangle(rc,po,sc,!1,ho);if(o===null&&(oc(po.set(-.5,.5,0),is,s,ns,i,r),Cu.set(0,1),o=e.ray.intersectTriangle(rc,sc,po,!1,ho),o===null))return;const a=e.ray.origin.distanceTo(ho);a<e.near||a>e.far||t.push({distance:a,point:ho.clone(),uv:Gt.getUV(ho,rc,po,sc,rp,Cu,sp,new ae),face:null,object:this})},copy:function(e){return xe.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function oc(e,t,n,i,r,s){rs.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(fo.x=s*rs.x-r*rs.y,fo.y=r*rs.x+s*rs.y):fo.copy(rs),e.copy(t),e.x+=fo.x,e.y+=fo.y,e.applyMatrix4(Og)}const ac=new R,op=new R;function el(){xe.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}el.prototype=Object.assign(Object.create(xe.prototype),{constructor:el,isLOD:!0,copy:function(e){xe.prototype.copy.call(this,e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){if(this.levels.length>0){ac.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(ac);this.getObjectForDistance(i).raycast(e,t)}},update:function(e){const t=this.levels;if(t.length>1){ac.setFromMatrixPosition(e.matrixWorld),op.setFromMatrixPosition(this.matrixWorld);const n=ac.distanceTo(op)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}},toJSON:function(e){const t=xe.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}});function tl(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),st.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ze,this.bindMatrixInverse=new ze}tl.prototype=Object.assign(Object.create(st.prototype),{constructor:tl,isSkinnedMesh:!0,copy:function(e){return st.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){st.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){const e=new R,t=new nt,n=new nt,i=new R,r=new ze;return function(s,o){const a=this.skeleton,c=this.geometry;t.fromBufferAttribute(c.attributes.skinIndex,s),n.fromBufferAttribute(c.attributes.skinWeight,s),e.fromBufferAttribute(c.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let l=0;l<4;l++){const u=n.getComponent(l);if(u!==0){const h=t.getComponent(l);r.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),o.addScaledVector(i.copy(e).applyMatrix4(r),u)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const ap=new ze,E1=new ze;function nl(e,t){if(e=e||[],this.bones=e.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,t===void 0)this.calculateInverses();else if(this.bones.length===t.length)this.boneInverses=t.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}Object.assign(nl.prototype,{calculateInverses:function(){this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.getInverse(this.bones[e].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.getInverse(this.boneInverses[e])}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:E1;ap.multiplyMatrices(o,t[r]),ap.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new nl(this.bones,this.boneInverses)},getBoneByName:function(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function uh(){xe.call(this),this.type="Bone"}uh.prototype=Object.assign(Object.create(xe.prototype),{constructor:uh,isBone:!0});const cp=new ze,lp=new ze,cc=[],mo=new st;function hh(e,t,n){st.call(this,e,t),this.instanceMatrix=new Ie(new Float32Array(n*16),16),this.count=n,this.frustumCulled=!1}hh.prototype=Object.assign(Object.create(st.prototype),{constructor:hh,isInstancedMesh:!0,copy:function(e){return st.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),this.count=e.count,this},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){const n=this.matrixWorld,i=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,cp),lp.multiplyMatrices(n,cp),mo.matrixWorld=lp,mo.raycast(e,cc);for(let s=0,o=cc.length;s<o;s++){const a=cc[s];a.instanceId=r,a.object=this,t.push(a)}cc.length=0}},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){}});function St(e){Fe.call(this),this.type="LineBasicMaterial",this.color=new _e(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}St.prototype=Object.create(Fe.prototype);St.prototype.constructor=St;St.prototype.isLineBasicMaterial=!0;St.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};const up=new R,hp=new R,fp=new ze,lc=new Qs,uc=new ui;function _n(e,t,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),xe.call(this),this.type="Line",this.geometry=e!==void 0?e:new Te,this.material=t!==void 0?t:new St,this.updateMorphTargets()}_n.prototype=Object.assign(Object.create(xe.prototype),{constructor:_n,isLine:!0,copy:function(e){return xe.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)up.fromBufferAttribute(t,i-1),hp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=up.distanceTo(hp);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;n[0]=0;for(let i=1,r=t.length;i<r;i++)n[i]=n[i-1],n[i]+=t[i-1].distanceTo(t[i])}return this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(i),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;fp.getInverse(i),lc.copy(e.ray).applyMatrix4(fp);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new R,c=new R,l=new R,u=new R,h=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){const d=n.index,p=n.attributes.position.array;if(d!==null){const y=d.array;for(let _=0,m=y.length-1;_<m;_+=h){const g=y[_],v=y[_+1];if(a.fromArray(p,g*3),c.fromArray(p,v*3),lc.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(u);x<e.near||x>e.far||t.push({distance:x,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else for(let y=0,_=p.length/3-1;y<_;y+=h){if(a.fromArray(p,3*y),c.fromArray(p,3*y+3),lc.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(u);g<e.near||g>e.far||t.push({distance:g,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const d=n.vertices,f=d.length;for(let p=0;p<f-1;p+=h){if(lc.distanceSqToSegment(d[p],d[p+1],u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const hc=new R,fc=new R;function Ct(e,t){_n.call(this,e,t),this.type="LineSegments"}Ct.prototype=Object.assign(Object.create(_n.prototype),{constructor:Ct,isLineSegments:!0,computeLineDistances:function(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hc.fromBufferAttribute(t,i),fc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hc.distanceTo(fc);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(e.isGeometry){const t=e.vertices,n=e.lineDistances;for(let i=0,r=t.length;i<r;i+=2)hc.copy(t[i]),fc.copy(t[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hc.distanceTo(fc)}return this}});function il(e,t){_n.call(this,e,t),this.type="LineLoop"}il.prototype=Object.assign(Object.create(_n.prototype),{constructor:il,isLineLoop:!0});function tr(e){Fe.call(this),this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}tr.prototype=Object.create(Fe.prototype);tr.prototype.constructor=tr;tr.prototype.isPointsMaterial=!0;tr.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};const dp=new ze,fh=new Qs,dc=new ui,pc=new R;function rl(e,t){xe.call(this),this.type="Points",this.geometry=e!==void 0?e:new Te,this.material=t!==void 0?t:new tr,this.updateMorphTargets()}rl.prototype=Object.assign(Object.create(xe.prototype),{constructor:rl,isPoints:!0,copy:function(e){return xe.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(i),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;dp.getInverse(i),fh.copy(e.ray).applyMatrix4(dp);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position.array;if(a!==null){const u=a.array;for(let h=0,d=u.length;h<d;h++){const f=u[h];pc.fromArray(l,f*3),Iu(pc,f,o,i,e,t,this)}}else for(let u=0,h=l.length/3;u<h;u++)pc.fromArray(l,u*3),Iu(pc,u,o,i,e,t,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)Iu(a[c],c,o,i,e,t,this)}},updateMorphTargets:function(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Iu(e,t,n,i,r,s,o){const a=fh.distanceSqToPoint(e);if(a<n){const c=new R;fh.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}function pp(e,t,n,i,r,s,o,a,c){ot.call(this,e,t,n,i,r,s,o,a,c),this.format=o!==void 0?o:bi,this.minFilter=s!==void 0?s:Bt,this.magFilter=r!==void 0?r:Bt,this.generateMipmaps=!1;const l=this;function u(){l.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}pp.prototype=Object.assign(Object.create(ot.prototype),{constructor:pp,isVideoTexture:!0,update:function(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Yo(e,t,n,i,r,s,o,a,c,l,u,h){ot.call(this,null,s,o,a,c,l,i,r,u,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}Yo.prototype=Object.create(ot.prototype);Yo.prototype.constructor=Yo;Yo.prototype.isCompressedTexture=!0;function qo(e,t,n,i,r,s,o,a,c){ot.call(this,e,t,n,i,r,s,o,a,c),this.needsUpdate=!0}qo.prototype=Object.create(ot.prototype);qo.prototype.constructor=qo;qo.prototype.isCanvasTexture=!0;function sl(e,t,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:_s,l!==_s&&l!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===_s&&(n=qc),n===void 0&&l===ko&&(n=Ao),ot.call(this,null,i,r,s,o,a,l,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=a!==void 0?a:Ot,this.flipY=!1,this.generateMipmaps=!1}sl.prototype=Object.create(ot.prototype);sl.prototype.constructor=sl;sl.prototype.isDepthTexture=!0;function ol(e){Te.call(this),this.type="WireframeGeometry";const t=[],n=[0,0],i={},r=["a","b","c"];if(e&&e.isGeometry){const s=e.faces;for(let o=0,a=s.length;o<a;o++){const c=s[o];for(let l=0;l<3;l++){const u=c[r[l]],h=c[r[(l+1)%3]];n[0]=Math.min(u,h),n[1]=Math.max(u,h);const d=n[0]+","+n[1];i[d]===void 0&&(i[d]={index1:n[0],index2:n[1]})}}for(const o in i){const a=i[o];let c=e.vertices[a.index1];t.push(c.x,c.y,c.z),c=e.vertices[a.index2],t.push(c.x,c.y,c.z)}}else if(e&&e.isBufferGeometry){let s=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let p=d,y=d+f;p<y;p+=3)for(let _=0;_<3;_++){const m=a.getX(p+_),g=a.getX(p+(_+1)%3);n[0]=Math.min(m,g),n[1]=Math.max(m,g);const v=n[0]+","+n[1];i[v]===void 0&&(i[v]={index1:n[0],index2:n[1]})}}for(const l in i){const u=i[l];s.fromBufferAttribute(o,u.index1),t.push(s.x,s.y,s.z),s.fromBufferAttribute(o,u.index2),t.push(s.x,s.y,s.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l;s.fromBufferAttribute(o,u),t.push(s.x,s.y,s.z);const h=3*a+(l+1)%3;s.fromBufferAttribute(o,h),t.push(s.x,s.y,s.z)}}}this.setAttribute("position",new Me(t,3))}ol.prototype=Object.create(Te.prototype);ol.prototype.constructor=ol;function al(e,t,n){Ne.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n},this.fromBufferGeometry(new Zo(e,t,n)),this.mergeVertices()}al.prototype=Object.create(Ne.prototype);al.prototype.constructor=al;function Zo(e,t,n){Te.call(this),this.type="ParametricBufferGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new R,l=new R,u=new R,h=new R,d=new R;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const f=t+1;for(let p=0;p<=n;p++){const y=p/n;for(let _=0;_<=t;_++){const m=_/t;e(m,y,l),r.push(l.x,l.y,l.z),m-a>=0?(e(m-a,y,u),h.subVectors(l,u)):(e(m+a,y,u),h.subVectors(u,l)),y-a>=0?(e(m,y-a,u),d.subVectors(l,u)):(e(m,y+a,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(m,y)}}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=p*f+y,m=p*f+y+1,g=(p+1)*f+y+1,v=(p+1)*f+y;i.push(_,m,v),i.push(m,g,v)}this.setIndex(i),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(o,2))}Zo.prototype=Object.create(Te.prototype);Zo.prototype.constructor=Zo;function cl(e,t,n,i){Ne.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},this.fromBufferGeometry(new vn(e,t,n,i)),this.mergeVertices()}cl.prototype=Object.create(Ne.prototype);cl.prototype.constructor=cl;function vn(e,t,n,i){Te.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i},n=n||1,i=i||0;const r=[],s=[];o(i),c(n),l(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const g=new R,v=new R,b=new R;for(let x=0;x<t.length;x+=3)d(t[x+0],g),d(t[x+1],v),d(t[x+2],b),a(g,v,b,m)}function a(m,g,v,b){const x=Math.pow(2,b),E=[];for(let w=0;w<=x;w++){E[w]=[];const P=m.clone().lerp(v,w/x),A=g.clone().lerp(v,w/x),Z=x-w;for(let k=0;k<=Z;k++)k===0&&w===x?E[w][k]=P:E[w][k]=P.clone().lerp(A,k/Z)}for(let w=0;w<x;w++)for(let P=0;P<2*(x-w)-1;P++){const A=Math.floor(P/2);P%2===0?(h(E[w][A+1]),h(E[w+1][A]),h(E[w][A])):(h(E[w][A+1]),h(E[w+1][A+1]),h(E[w+1][A]))}}function c(m){const g=new R;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(m),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function l(){const m=new R;for(let g=0;g<r.length;g+=3){m.x=r[g+0],m.y=r[g+1],m.z=r[g+2];const v=y(m)/2/Math.PI+.5,b=_(m)/Math.PI+.5;s.push(v,1-b)}f(),u()}function u(){for(let m=0;m<s.length;m+=6){const g=s[m+0],v=s[m+2],b=s[m+4],x=Math.max(g,v,b),E=Math.min(g,v,b);x>.9&&E<.1&&(g<.2&&(s[m+0]+=1),v<.2&&(s[m+2]+=1),b<.2&&(s[m+4]+=1))}}function h(m){r.push(m.x,m.y,m.z)}function d(m,g){const v=m*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function f(){const m=new R,g=new R,v=new R,b=new R,x=new ae,E=new ae,w=new ae;for(let P=0,A=0;P<r.length;P+=9,A+=6){m.set(r[P+0],r[P+1],r[P+2]),g.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),x.set(s[A+0],s[A+1]),E.set(s[A+2],s[A+3]),w.set(s[A+4],s[A+5]),b.copy(m).add(g).add(v).divideScalar(3);const Z=y(b);p(x,A+0,m,Z),p(E,A+2,g,Z),p(w,A+4,v,Z)}}function p(m,g,v,b){b<0&&m.x===1&&(s[g]=m.x-1),v.x===0&&v.z===0&&(s[g]=b/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function _(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}vn.prototype=Object.create(Te.prototype);vn.prototype.constructor=vn;function ll(e,t){Ne.call(this),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Jo(e,t)),this.mergeVertices()}ll.prototype=Object.create(Ne.prototype);ll.prototype.constructor=ll;function Jo(e,t){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];vn.call(this,n,i,e,t),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:t}}Jo.prototype=Object.create(vn.prototype);Jo.prototype.constructor=Jo;function ul(e,t){Ne.call(this),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ls(e,t)),this.mergeVertices()}ul.prototype=Object.create(Ne.prototype);ul.prototype.constructor=ul;function Ls(e,t){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];vn.call(this,n,i,e,t),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ls.prototype=Object.create(vn.prototype);Ls.prototype.constructor=Ls;function hl(e,t){Ne.call(this),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Ko(e,t)),this.mergeVertices()}hl.prototype=Object.create(Ne.prototype);hl.prototype.constructor=hl;function Ko(e,t){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];vn.call(this,i,r,e,t),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:t}}Ko.prototype=Object.create(vn.prototype);Ko.prototype.constructor=Ko;function fl(e,t){Ne.call(this),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t},this.fromBufferGeometry(new Qo(e,t)),this.mergeVertices()}fl.prototype=Object.create(Ne.prototype);fl.prototype.constructor=fl;function Qo(e,t){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];vn.call(this,r,s,e,t),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:t}}Qo.prototype=Object.create(vn.prototype);Qo.prototype.constructor=Qo;function dl(e,t,n,i,r,s){Ne.call(this),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},s!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");const o=new Ps(e,t,n,i,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals,this.fromBufferGeometry(o),this.mergeVertices()}dl.prototype=Object.create(Ne.prototype);dl.prototype.constructor=dl;function Ps(e,t,n,i,r){Te.call(this),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r},t=t||64,n=n||1,i=i||8,r=r||!1;const s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new R,a=new R,c=new ae;let l=new R;const u=[],h=[],d=[],f=[];p(),this.setIndex(f),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function p(){for(let g=0;g<t;g++)y(g);y(r===!1?t:0),m(),_()}function y(g){l=e.getPointAt(g/t,l);const v=s.normals[g],b=s.binormals[g];for(let x=0;x<=i;x++){const E=x/i*Math.PI*2,w=Math.sin(E),P=-Math.cos(E);a.x=P*v.x+w*b.x,a.y=P*v.y+w*b.y,a.z=P*v.z+w*b.z,a.normalize(),h.push(a.x,a.y,a.z),o.x=l.x+n*a.x,o.y=l.y+n*a.y,o.z=l.z+n*a.z,u.push(o.x,o.y,o.z)}}function _(){for(let g=1;g<=t;g++)for(let v=1;v<=i;v++){const b=(i+1)*(g-1)+(v-1),x=(i+1)*g+(v-1),E=(i+1)*g+v,w=(i+1)*(g-1)+v;f.push(b,x,w),f.push(x,E,w)}}function m(){for(let g=0;g<=t;g++)for(let v=0;v<=i;v++)c.x=g/t,c.y=v/i,d.push(c.x,c.y)}}Ps.prototype=Object.create(Te.prototype);Ps.prototype.constructor=Ps;Ps.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e};function pl(e,t,n,i,r,s,o){Ne.call(this),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},o!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new $o(e,t,n,i,r,s)),this.mergeVertices()}pl.prototype=Object.create(Ne.prototype);pl.prototype.constructor=pl;function $o(e,t,n,i,r,s){Te.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},e=e||1,t=t||.4,n=Math.floor(n)||64,i=Math.floor(i)||8,r=r||2,s=s||3;const o=[],a=[],c=[],l=[],u=new R,h=new R,d=new R,f=new R,p=new R,y=new R,_=new R;for(let g=0;g<=n;++g){const v=g/n*r*Math.PI*2;m(v,r,s,e,d),m(v+.01,r,s,e,f),y.subVectors(f,d),_.addVectors(f,d),p.crossVectors(y,_),_.crossVectors(p,y),p.normalize(),_.normalize();for(let b=0;b<=i;++b){const x=b/i*Math.PI*2,E=-t*Math.cos(x),w=t*Math.sin(x);u.x=d.x+(E*_.x+w*p.x),u.y=d.y+(E*_.y+w*p.y),u.z=d.z+(E*_.z+w*p.z),a.push(u.x,u.y,u.z),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(g/n),l.push(b/i)}}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){const b=(i+1)*(g-1)+(v-1),x=(i+1)*g+(v-1),E=(i+1)*g+v,w=(i+1)*(g-1)+v;o.push(b,x,w),o.push(x,E,w)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2));function m(g,v,b,x,E){const w=Math.cos(g),P=Math.sin(g),A=b/v*g,Z=Math.cos(A);E.x=x*(2+Z)*.5*w,E.y=x*(2+Z)*P*.5,E.z=x*Math.sin(A)*.5}}$o.prototype=Object.create(Te.prototype);$o.prototype.constructor=$o;function ml(e,t,n,i,r){Ne.call(this),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},this.fromBufferGeometry(new ea(e,t,n,i,r)),this.mergeVertices()}ml.prototype=Object.create(Ne.prototype);ml.prototype.constructor=ml;function ea(e,t,n,i,r){Te.call(this),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},e=e||1,t=t||.4,n=Math.floor(n)||8,i=Math.floor(i)||6,r=r||Math.PI*2;const s=[],o=[],a=[],c=[],l=new R,u=new R,h=new R;for(let d=0;d<=n;d++)for(let f=0;f<=i;f++){const p=f/i*r,y=d/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(p),u.y=(e+t*Math.cos(y))*Math.sin(p),u.z=t*Math.sin(y),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),h.subVectors(u,l).normalize(),a.push(h.x,h.y,h.z),c.push(f/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=i;f++){const p=(i+1)*d+f-1,y=(i+1)*(d-1)+f-1,_=(i+1)*(d-1)+f,m=(i+1)*d+f;s.push(p,y,m),s.push(y,_,m)}this.setIndex(s),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}ea.prototype=Object.create(Te.prototype);ea.prototype.constructor=ea;const S1={triangulate:function(e,t,n){n=n||2;let i=t&&t.length,r=i?t[0]*n:e.length,s=Fg(e,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=P1(e,t,s,n)),e.length>80*n){a=l=e[0],c=u=e[1];for(let p=n;p<r;p+=n)h=e[p],d=e[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return ta(s,o,n,a,c,f),o}};function Fg(e,t,n,i,r){let s,o;if(r===z1(e,t,n,i)>0)for(s=t;s<n;s+=i)o=mp(s,e[s],e[s+1],o);else for(s=n-i;s>=t;s-=i)o=mp(s,e[s],e[s+1],o);return o&&jl(o,o.next)&&(ia(o),o=o.next),o}function nr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(jl(n,n.next)||yt(n.prev,n,n.next)===0)){if(ia(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function ta(e,t,n,i,r,s,o){if(!e)return;!o&&s&&F1(e,i,r,s);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,s?A1(e,i,r,s):T1(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),ia(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=R1(nr(e),t,n),ta(e,t,n,i,r,s,2)):o===2&&L1(e,t,n,i,r,s):ta(nr(e),t,n,i,r,s,1);break}}}function T1(e){let t=e.prev,n=e,i=e.next;if(yt(t,n,i)>=0)return!1;let r=e.next.next;for(;r!==e.prev;){if(ps(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&yt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function A1(e,t,n,i){let r=e.prev,s=e,o=e.next;if(yt(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=dh(a,c,t,n,i),d=dh(l,u,t,n,i),f=e.prevZ,p=e.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==e.prev&&f!==e.next&&ps(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&yt(f.prev,f,f.next)>=0||(f=f.prevZ,p!==e.prev&&p!==e.next&&ps(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&yt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&ps(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&yt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==e.prev&&p!==e.next&&ps(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function R1(e,t,n){let i=e;do{let r=i.prev,s=i.next.next;!jl(r,s)&&Ng(r,i,i.next,s)&&na(r,s)&&na(s,r)&&(t.push(r.i/n),t.push(i.i/n),t.push(s.i/n),ia(i),ia(i.next),i=e=s),i=i.next}while(i!==e);return nr(i)}function L1(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&B1(o,a)){let c=kg(o,a);o=nr(o,o.next),c=nr(c,c.next),ta(o,t,n,i,r,s),ta(c,t,n,i,r,s);return}a=a.next}o=o.next}while(o!==e)}function P1(e,t,n,i){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*i,c=s<o-1?t[s+1]*i:e.length,l=Fg(e,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(k1(l));for(r.sort(C1),s=0;s<r.length;s++)I1(r[s],n),n=nr(n,n.next);return n}function C1(e,t){return e.x-t.x}function I1(e,t){if(t=D1(e,t),t){const n=kg(t,e);nr(t,t.next),nr(n,n.next)}}function D1(e,t){let n=t,i=e.x,r=e.y,s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s){if(s=d,d===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,u=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&ps(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),na(n,e)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&O1(o,n)))&&(o=n,u=h)),n=n.next;while(n!==a);return o}function O1(e,t){return yt(e.prev,e,t.prev)<0&&yt(t.next,e,e.next)<0}function F1(e,t,n,i){let r=e;do r.z===null&&(r.z=dh(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,N1(r)}function N1(e){let t,n,i,r,s,o,a,c,l=1;do{for(n=e,e=null,s=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return e}function dh(e,t,n,i,r){return e=32767*(e-n)*r,t=32767*(t-i)*r,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function k1(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ps(e,t,n,i,r,s,o,a){return(r-o)*(t-a)-(e-o)*(s-a)>=0&&(e-o)*(i-a)-(n-o)*(t-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function B1(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!U1(e,t)&&(na(e,t)&&na(t,e)&&H1(e,t)&&(yt(e.prev,e,t.prev)||yt(e,t.prev,t))||jl(e,t)&&yt(e.prev,e,e.next)>0&&yt(t.prev,t,t.next)>0)}function yt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function jl(e,t){return e.x===t.x&&e.y===t.y}function Ng(e,t,n,i){const r=gc(yt(e,t,n)),s=gc(yt(e,t,i)),o=gc(yt(n,i,e)),a=gc(yt(n,i,t));return!!(r!==s&&o!==a||r===0&&mc(e,n,t)||s===0&&mc(e,i,t)||o===0&&mc(n,e,i)||a===0&&mc(n,t,i))}function mc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function gc(e){return e>0?1:e<0?-1:0}function U1(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ng(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function na(e,t){return yt(e.prev,e,e.next)<0?yt(e,t,e.next)>=0&&yt(e,e.prev,t)>=0:yt(e,t,e.prev)<0||yt(e,e.next,t)<0}function H1(e,t){let n=e,i=!1,r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function kg(e,t){let n=new ph(e.i,e.x,e.y),i=new ph(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function mp(e,t,n,i){const r=new ph(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ia(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ph(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z1(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}const Zi={area:function(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5},isClockWise:function(e){return Zi.area(e)<0},triangulateShape:function(e,t){const n=[],i=[],r=[];gp(e),yp(n,e);let s=e.length;t.forEach(gp);for(let a=0;a<t.length;a++)i.push(s),s+=t[a].length,yp(n,t[a]);const o=S1.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function gp(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function yp(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function Cs(e,t){Ne.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},this.fromBufferGeometry(new wi(e,t)),this.mergeVertices()}Cs.prototype=Object.create(Ne.prototype);Cs.prototype.constructor=Cs;Cs.prototype.toJSON=function(){const e=Ne.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Bg(t,n,e)};function wi(e,t){Te.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];s(c)}this.setAttribute("position",new Me(i,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function s(o){const a=[],c=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,f=t.bevelSize!==void 0?t.bevelSize:d-2,p=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:G1;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let g,v=!1,b,x,E,w;_&&(g=_.getSpacedPoints(l),v=!0,h=!1,b=_.computeFrenetFrames(l,!1),x=new R,E=new R,w=new R),h||(y=0,d=0,f=0,p=0);const P=o.extractPoints(c);let A=P.shape;const Z=P.holes;if(!Zi.isClockWise(A)){A=A.reverse();for(let L=0,H=Z.length;L<H;L++){const Y=Z[L];Zi.isClockWise(Y)&&(Z[L]=Y.reverse())}}const X=Zi.triangulateShape(A,Z),G=A;for(let L=0,H=Z.length;L<H;L++){const Y=Z[L];A=A.concat(Y)}function V(L,H,Y){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().multiplyScalar(Y).add(L)}const I=A.length,B=X.length;function j(L,H,Y){let K,J,ne;const S=L.x-H.x,D=L.y-H.y,Q=Y.x-L.x,ee=Y.y-L.y,W=S*S+D*D,oe=S*ee-D*Q;if(Math.abs(oe)>Number.EPSILON){const N=Math.sqrt(W),le=Math.sqrt(Q*Q+ee*ee),ce=H.x-D/N,ye=H.y+S/N,re=Y.x-ee/le,q=Y.y+Q/le,de=((re-ce)*ee-(q-ye)*Q)/(S*ee-D*Q);K=ce+S*de-L.x,J=ye+D*de-L.y;const pe=K*K+J*J;if(pe<=2)return new ae(K,J);ne=Math.sqrt(pe/2)}else{let N=!1;S>Number.EPSILON?Q>Number.EPSILON&&(N=!0):S<-Number.EPSILON?Q<-Number.EPSILON&&(N=!0):Math.sign(D)===Math.sign(ee)&&(N=!0),N?(K=-D,J=S,ne=Math.sqrt(W)):(K=S,J=D,ne=Math.sqrt(W/2))}return new ae(K/ne,J/ne)}const ie=[];for(let L=0,H=G.length,Y=H-1,K=L+1;L<H;L++,Y++,K++)Y===H&&(Y=0),K===H&&(K=0),ie[L]=j(G[L],G[Y],G[K]);const me=[];let ge,fe=ie.concat();for(let L=0,H=Z.length;L<H;L++){const Y=Z[L];ge=[];for(let K=0,J=Y.length,ne=J-1,S=K+1;K<J;K++,ne++,S++)ne===J&&(ne=0),S===J&&(S=0),ge[K]=j(Y[K],Y[ne],Y[S]);me.push(ge),fe=fe.concat(ge)}for(let L=0;L<y;L++){const H=L/y,Y=d*Math.cos(H*Math.PI/2),K=f*Math.sin(H*Math.PI/2)+p;for(let J=0,ne=G.length;J<ne;J++){const S=V(G[J],ie[J],K);M(S.x,S.y,-Y)}for(let J=0,ne=Z.length;J<ne;J++){const S=Z[J];ge=me[J];for(let D=0,Q=S.length;D<Q;D++){const ee=V(S[D],ge[D],K);M(ee.x,ee.y,-Y)}}}const Ae=f+p;for(let L=0;L<I;L++){const H=h?V(A[L],fe[L],Ae):A[L];v?(E.copy(b.normals[0]).multiplyScalar(H.x),x.copy(b.binormals[0]).multiplyScalar(H.y),w.copy(g[0]).add(E).add(x),M(w.x,w.y,w.z)):M(H.x,H.y,0)}for(let L=1;L<=l;L++)for(let H=0;H<I;H++){const Y=h?V(A[H],fe[H],Ae):A[H];v?(E.copy(b.normals[L]).multiplyScalar(Y.x),x.copy(b.binormals[L]).multiplyScalar(Y.y),w.copy(g[L]).add(E).add(x),M(w.x,w.y,w.z)):M(Y.x,Y.y,u/l*L)}for(let L=y-1;L>=0;L--){const H=L/y,Y=d*Math.cos(H*Math.PI/2),K=f*Math.sin(H*Math.PI/2)+p;for(let J=0,ne=G.length;J<ne;J++){const S=V(G[J],ie[J],K);M(S.x,S.y,u+Y)}for(let J=0,ne=Z.length;J<ne;J++){const S=Z[J];ge=me[J];for(let D=0,Q=S.length;D<Q;D++){const ee=V(S[D],ge[D],K);v?M(ee.x,ee.y+g[l-1].y,g[l-1].x+Y):M(ee.x,ee.y,u+Y)}}}ve(),De();function ve(){const L=i.length/3;if(h){let H=0,Y=I*H;for(let K=0;K<B;K++){const J=X[K];O(J[2]+Y,J[1]+Y,J[0]+Y)}H=l+y*2,Y=I*H;for(let K=0;K<B;K++){const J=X[K];O(J[0]+Y,J[1]+Y,J[2]+Y)}}else{for(let H=0;H<B;H++){const Y=X[H];O(Y[2],Y[1],Y[0])}for(let H=0;H<B;H++){const Y=X[H];O(Y[0]+I*l,Y[1]+I*l,Y[2]+I*l)}}n.addGroup(L,i.length/3-L,0)}function De(){const L=i.length/3;let H=0;T(G,H),H+=G.length;for(let Y=0,K=Z.length;Y<K;Y++){const J=Z[Y];T(J,H),H+=J.length}n.addGroup(L,i.length/3-L,1)}function T(L,H){let Y=L.length;for(;--Y>=0;){const K=Y;let J=Y-1;J<0&&(J=L.length-1);for(let ne=0,S=l+y*2;ne<S;ne++){const D=I*ne,Q=I*(ne+1),ee=H+K+D,W=H+J+D,oe=H+J+Q,N=H+K+Q;C(ee,W,oe,N)}}}function M(L,H,Y){a.push(L),a.push(H),a.push(Y)}function O(L,H,Y){U(L),U(H),U(Y);const K=i.length/3,J=m.generateTopUV(n,i,K-3,K-2,K-1);z(J[0]),z(J[1]),z(J[2])}function C(L,H,Y,K){U(L),U(H),U(K),U(H),U(Y),U(K);const J=i.length/3,ne=m.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);z(ne[0]),z(ne[1]),z(ne[3]),z(ne[1]),z(ne[2]),z(ne[3])}function U(L){i.push(a[L*3+0]),i.push(a[L*3+1]),i.push(a[L*3+2])}function z(L){r.push(L.x),r.push(L.y)}}}wi.prototype=Object.create(Te.prototype);wi.prototype.constructor=wi;wi.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Bg(t,n,e)};const G1={generateTopUV:function(e,t,n,i,r){const s=t[n*3],o=t[n*3+1],a=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new ae(s,o),new ae(a,c),new ae(l,u)]},generateSideWallUV:function(e,t,n,i,r,s){const o=t[n*3],a=t[n*3+1],c=t[n*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[r*3],f=t[r*3+1],p=t[r*3+2],y=t[s*3],_=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<.01?[new ae(o,1-c),new ae(l,1-h),new ae(d,1-p),new ae(y,1-m)]:[new ae(a,1-c),new ae(u,1-h),new ae(f,1-p),new ae(_,1-m)]}};function Bg(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function gl(e,t){Ne.call(this),this.type="TextGeometry",this.parameters={text:e,parameters:t},this.fromBufferGeometry(new ra(e,t)),this.mergeVertices()}gl.prototype=Object.create(Ne.prototype);gl.prototype.constructor=gl;function ra(e,t){t=t||{};const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ne;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),wi.call(this,i,t),this.type="TextBufferGeometry"}ra.prototype=Object.create(wi.prototype);ra.prototype.constructor=ra;function yl(e,t,n,i,r,s,o){Ne.call(this),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new Is(e,t,n,i,r,s,o)),this.mergeVertices()}yl.prototype=Object.create(Ne.prototype);yl.prototype.constructor=yl;function Is(e,t,n,i,r,s,o){Te.call(this),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},e=e||1,t=Math.max(3,Math.floor(t)||8),n=Math.max(2,Math.floor(n)||6),i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2,s=s!==void 0?s:0,o=o!==void 0?o:Math.PI;const a=Math.min(s+o,Math.PI);let c=0;const l=[],u=new R,h=new R,d=[],f=[],p=[],y=[];for(let _=0;_<=n;_++){const m=[],g=_/n;let v=0;_==0&&s==0?v=.5/t:_==n&&a==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const x=b/t;u.x=-e*Math.cos(i+x*r)*Math.sin(s+g*o),u.y=e*Math.cos(s+g*o),u.z=e*Math.sin(i+x*r)*Math.sin(s+g*o),f.push(u.x,u.y,u.z),h.copy(u).normalize(),p.push(h.x,h.y,h.z),y.push(x+v,1-g),m.push(c++)}l.push(m)}for(let _=0;_<n;_++)for(let m=0;m<t;m++){const g=l[_][m+1],v=l[_][m],b=l[_+1][m],x=l[_+1][m+1];(_!==0||s>0)&&d.push(g,v,x),(_!==n-1||a<Math.PI)&&d.push(v,b,x)}this.setIndex(d),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(y,2))}Is.prototype=Object.create(Te.prototype);Is.prototype.constructor=Is;function _l(e,t,n,i,r,s){Ne.call(this),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},this.fromBufferGeometry(new sa(e,t,n,i,r,s)),this.mergeVertices()}_l.prototype=Object.create(Ne.prototype);_l.prototype.constructor=_l;function sa(e,t,n,i,r,s){Te.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},e=e||.5,t=t||1,r=r!==void 0?r:0,s=s!==void 0?s:Math.PI*2,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?Math.max(1,i):1;const o=[],a=[],c=[],l=[];let u=e;const h=(t-e)/i,d=new R,f=new ae;for(let p=0;p<=i;p++){for(let y=0;y<=n;y++){const _=r+y/n*s;d.x=u*Math.cos(_),d.y=u*Math.sin(_),a.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/t+1)/2,f.y=(d.y/t+1)/2,l.push(f.x,f.y)}u+=h}for(let p=0;p<i;p++){const y=p*(n+1);for(let _=0;_<n;_++){const m=_+y,g=m,v=m+n+1,b=m+n+2,x=m+1;o.push(g,v,x),o.push(v,b,x)}}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}sa.prototype=Object.create(Te.prototype);sa.prototype.constructor=sa;function vl(e,t,n,i){Ne.call(this),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},this.fromBufferGeometry(new oa(e,t,n,i)),this.mergeVertices()}vl.prototype=Object.create(Ne.prototype);vl.prototype.constructor=vl;function oa(e,t,n,i){Te.call(this),this.type="LatheBufferGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t)||12,n=n||0,i=i||Math.PI*2,i=ke.clamp(i,0,Math.PI*2);const r=[],s=[],o=[],a=1/t,c=new R,l=new ae;for(let u=0;u<=t;u++){const h=n+u*a*i,d=Math.sin(h),f=Math.cos(h);for(let p=0;p<=e.length-1;p++)c.x=e[p].x*d,c.y=e[p].y,c.z=e[p].x*f,s.push(c.x,c.y,c.z),l.x=u/t,l.y=p/(e.length-1),o.push(l.x,l.y)}for(let u=0;u<t;u++)for(let h=0;h<e.length-1;h++){const d=h+u*e.length,f=d,p=d+e.length,y=d+e.length+1,_=d+1;r.push(f,p,_),r.push(p,y,_)}if(this.setIndex(r),this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(o,2)),this.computeVertexNormals(),i===Math.PI*2){const u=this.attributes.normal.array,h=new R,d=new R,f=new R,p=t*e.length*3;for(let y=0,_=0;y<e.length;y++,_+=3)h.x=u[_+0],h.y=u[_+1],h.z=u[_+2],d.x=u[p+_+0],d.y=u[p+_+1],d.z=u[p+_+2],f.addVectors(h,d).normalize(),u[_+0]=u[p+_+0]=f.x,u[_+1]=u[p+_+1]=f.y,u[_+2]=u[p+_+2]=f.z}}oa.prototype=Object.create(Te.prototype);oa.prototype.constructor=oa;function Ds(e,t){Ne.call(this),this.type="ShapeGeometry",typeof t=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),t=t.curveSegments),this.parameters={shapes:e,curveSegments:t},this.fromBufferGeometry(new Os(e,t)),this.mergeVertices()}Ds.prototype=Object.create(Ne.prototype);Ds.prototype.constructor=Ds;Ds.prototype.toJSON=function(){const e=Ne.prototype.toJSON.call(this),t=this.parameters.shapes;return Ug(t,e)};function Os(e,t){Te.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:t},t=t||12;const n=[],i=[],r=[],s=[];let o=0,a=0;if(Array.isArray(e)===!1)c(e);else for(let l=0;l<e.length;l++)c(e[l]),this.addGroup(o,a,l),o+=a,a=0;this.setIndex(n),this.setAttribute("position",new Me(i,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(s,2));function c(l){const u=i.length/3,h=l.extractPoints(t);let d=h.shape;const f=h.holes;Zi.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,_=f.length;y<_;y++){const m=f[y];Zi.isClockWise(m)===!0&&(f[y]=m.reverse())}const p=Zi.triangulateShape(d,f);for(let y=0,_=f.length;y<_;y++){const m=f[y];d=d.concat(m)}for(let y=0,_=d.length;y<_;y++){const m=d[y];i.push(m.x,m.y,0),r.push(0,0,1),s.push(m.x,m.y)}for(let y=0,_=p.length;y<_;y++){const m=p[y],g=m[0]+u,v=m[1]+u,b=m[2]+u;n.push(g,v,b),a+=3}}}Os.prototype=Object.create(Te.prototype);Os.prototype.constructor=Os;Os.prototype.toJSON=function(){const e=Te.prototype.toJSON.call(this),t=this.parameters.shapes;return Ug(t,e)};function Ug(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function bl(e,t){Te.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1;const n=[],i=Math.cos(ke.DEG2RAD*t),r=[0,0],s={};let o,a,c;const l=["a","b","c"];let u;e.isBufferGeometry?(u=new Ne,u.fromBufferGeometry(e)):u=e.clone(),u.mergeVertices(),u.computeFaceNormals();const h=u.vertices,d=u.faces;for(let f=0,p=d.length;f<p;f++){const y=d[f];for(let _=0;_<3;_++)o=y[l[_]],a=y[l[(_+1)%3]],r[0]=Math.min(o,a),r[1]=Math.max(o,a),c=r[0]+","+r[1],s[c]===void 0?s[c]={index1:r[0],index2:r[1],face1:f,face2:void 0}:s[c].face2=f}for(c in s){const f=s[c];if(f.face2===void 0||d[f.face1].normal.dot(d[f.face2].normal)<=i){let p=h[f.index1];n.push(p.x,p.y,p.z),p=h[f.index2],n.push(p.x,p.y,p.z)}}this.setAttribute("position",new Me(n,3))}bl.prototype=Object.create(Te.prototype);bl.prototype.constructor=bl;function Ir(e,t,n,i,r,s,o,a){Ne.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new ir(e,t,n,i,r,s,o,a)),this.mergeVertices()}Ir.prototype=Object.create(Ne.prototype);Ir.prototype.constructor=Ir;function ir(e,t,n,i,r,s,o,a){Te.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a};const c=this;e=e!==void 0?e:1,t=t!==void 0?t:1,n=n||1,i=Math.floor(i)||8,r=Math.floor(r)||1,s=s!==void 0?s:!1,o=o!==void 0?o:0,a=a!==void 0?a:Math.PI*2;const l=[],u=[],h=[],d=[];let f=0;const p=[],y=n/2;let _=0;m(),s===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(l),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function m(){const v=new R,b=new R;let x=0;const E=(t-e)/n;for(let w=0;w<=r;w++){const P=[],A=w/r,Z=A*(t-e)+e;for(let k=0;k<=i;k++){const X=k/i,G=X*a+o,V=Math.sin(G),I=Math.cos(G);b.x=Z*V,b.y=-A*n+y,b.z=Z*I,u.push(b.x,b.y,b.z),v.set(V,E,I).normalize(),h.push(v.x,v.y,v.z),d.push(X,1-A),P.push(f++)}p.push(P)}for(let w=0;w<i;w++)for(let P=0;P<r;P++){const A=p[P][w],Z=p[P+1][w],k=p[P+1][w+1],X=p[P][w+1];l.push(A,Z,X),l.push(Z,k,X),x+=6}c.addGroup(_,x,0),_+=x}function g(v){let b,x;const E=new ae,w=new R;let P=0;const A=v===!0?e:t,Z=v===!0?1:-1;b=f;for(let k=1;k<=i;k++)u.push(0,y*Z,0),h.push(0,Z,0),d.push(.5,.5),f++;x=f;for(let k=0;k<=i;k++){const G=k/i*a+o,V=Math.cos(G),I=Math.sin(G);w.x=A*I,w.y=y*Z,w.z=A*V,u.push(w.x,w.y,w.z),h.push(0,Z,0),E.x=V*.5+.5,E.y=I*.5*Z+.5,d.push(E.x,E.y),f++}for(let k=0;k<i;k++){const X=b+k,G=x+k;v===!0?l.push(G,G+1,X):l.push(G+1,G,X),P+=3}c.addGroup(_,P,v===!0?1:2),_+=P}}ir.prototype=Object.create(Te.prototype);ir.prototype.constructor=ir;function xl(e,t,n,i,r,s,o){Ir.call(this,0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}xl.prototype=Object.create(Ir.prototype);xl.prototype.constructor=xl;function wl(e,t,n,i,r,s,o){ir.call(this,0,e,t,n,i,r,s,o),this.type="ConeBufferGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}wl.prototype=Object.create(ir.prototype);wl.prototype.constructor=wl;function Ml(e,t,n,i){Ne.call(this),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},this.fromBufferGeometry(new aa(e,t,n,i)),this.mergeVertices()}Ml.prototype=Object.create(Ne.prototype);Ml.prototype.constructor=Ml;function aa(e,t,n,i){Te.call(this),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},e=e||1,t=t!==void 0?Math.max(3,t):8,n=n!==void 0?n:0,i=i!==void 0?i:Math.PI*2;const r=[],s=[],o=[],a=[],c=new R,l=new ae;s.push(0,0,0),o.push(0,0,1),a.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),s.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(s[h]/e+1)/2,l.y=(s[h+1]/e+1)/2,a.push(l.x,l.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(a,2))}aa.prototype=Object.create(Te.prototype);aa.prototype.constructor=aa;var $t=Object.freeze(Object.defineProperty({__proto__:null,WireframeGeometry:ol,ParametricGeometry:al,ParametricBufferGeometry:Zo,TetrahedronGeometry:ll,TetrahedronBufferGeometry:Jo,OctahedronGeometry:ul,OctahedronBufferGeometry:Ls,IcosahedronGeometry:hl,IcosahedronBufferGeometry:Ko,DodecahedronGeometry:fl,DodecahedronBufferGeometry:Qo,PolyhedronGeometry:cl,PolyhedronBufferGeometry:vn,TubeGeometry:dl,TubeBufferGeometry:Ps,TorusKnotGeometry:pl,TorusKnotBufferGeometry:$o,TorusGeometry:ml,TorusBufferGeometry:ea,TextGeometry:gl,TextBufferGeometry:ra,SphereGeometry:yl,SphereBufferGeometry:Is,RingGeometry:_l,RingBufferGeometry:sa,PlaneGeometry:Qc,PlaneBufferGeometry:Rr,LatheGeometry:vl,LatheBufferGeometry:oa,ShapeGeometry:Ds,ShapeBufferGeometry:Os,ExtrudeGeometry:Cs,ExtrudeBufferGeometry:wi,EdgesGeometry:bl,ConeGeometry:xl,ConeBufferGeometry:wl,CylinderGeometry:Ir,CylinderBufferGeometry:ir,CircleGeometry:Ml,CircleBufferGeometry:aa,BoxGeometry:Ex,BoxBufferGeometry:Ar},Symbol.toStringTag,{value:"Module"}));function Fs(e){Fe.call(this),this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.setValues(e)}Fs.prototype=Object.create(Fe.prototype);Fs.prototype.constructor=Fs;Fs.prototype.isShadowMaterial=!0;Fs.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this};function rr(e){sn.call(this,e),this.type="RawShaderMaterial"}rr.prototype=Object.create(sn.prototype);rr.prototype.constructor=rr;rr.prototype.isRawShaderMaterial=!0;function nn(e){Fe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}nn.prototype=Object.create(Fe.prototype);nn.prototype.constructor=nn;nn.prototype.isMeshStandardMaterial=!0;nn.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function Mi(e){nn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}Mi.prototype=Object.create(nn.prototype);Mi.prototype.constructor=Mi;Mi.prototype.isMeshPhysicalMaterial=!0;Mi.prototype.copy=function(e){return nn.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new _e).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function Dn(e){Fe.call(this),this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Dn.prototype=Object.create(Fe.prototype);Dn.prototype.constructor=Dn;Dn.prototype.isMeshPhongMaterial=!0;Dn.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Ns(e){Fe.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Ns.prototype=Object.create(Fe.prototype);Ns.prototype.constructor=Ns;Ns.prototype.isMeshToonMaterial=!0;Ns.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function ks(e){Fe.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}ks.prototype=Object.create(Fe.prototype);ks.prototype.constructor=ks;ks.prototype.isMeshNormalMaterial=!0;ks.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Bs(e){Fe.call(this),this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Bs.prototype=Object.create(Fe.prototype);Bs.prototype.constructor=Bs;Bs.prototype.isMeshLambertMaterial=!0;Bs.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Us(e){Fe.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Us.prototype=Object.create(Fe.prototype);Us.prototype.constructor=Us;Us.prototype.isMeshMatcapMaterial=!0;Us.prototype.copy=function(e){return Fe.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Hs(e){St.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Hs.prototype=Object.create(St.prototype);Hs.prototype.constructor=Hs;Hs.prototype.isLineDashedMaterial=!0;Hs.prototype.copy=function(e){return St.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var V1=Object.freeze(Object.defineProperty({__proto__:null,ShadowMaterial:Fs,SpriteMaterial:Cr,RawShaderMaterial:rr,ShaderMaterial:sn,PointsMaterial:tr,MeshPhysicalMaterial:Mi,MeshStandardMaterial:nn,MeshPhongMaterial:Dn,MeshToonMaterial:Ns,MeshNormalMaterial:ks,MeshLambertMaterial:Bs,MeshDepthMaterial:Lr,MeshDistanceMaterial:Pr,MeshBasicMaterial:Zt,MeshMatcapMaterial:Us,LineDashedMaterial:Hs,LineBasicMaterial:St,Material:Fe},Symbol.toStringTag,{value:"Module"}));const gt={arraySlice:function(e,t,n){return gt.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(r,s){return e[r]-e[s]}const n=e.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i},sortedArray:function(e,t,n){const i=e.length,r=new e.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*t;for(let c=0;c!==t;++c)r[o++]=e[a+c]}return r},flattenJSON:function(e,t,n,i){let r=1,s=e[0];for(;s!==void 0&&s[i]===void 0;)s=e[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),n.push.apply(n,o)),s=e[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(n,n.length)),s=e[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),n.push(o)),s=e[r++];while(s!==void 0)},subclip:function(e,t,n,i,r){r=r||30;const s=e.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*r;if(!(p<n||p>=i)){h.push(l.times[f]);for(let y=0;y<u;++y)d.push(l.values[f*u+y])}}h.length!==0&&(l.times=gt.convertArray(h,l.times.constructor),l.values=gt.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(e,t,n,i){t===void 0&&(t=0),n===void 0&&(n=e),(i===void 0||i<=0)&&(i=30);const r=e.tracks.length,s=t/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=e.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(l===void 0)continue;const u=a.getValueSize(),h=a.times.length-1;let d;if(s<=a.times[0])d=gt.arraySlice(a.values,0,a.valueSize);else if(s>=a.times[h]){const p=h*u;d=gt.arraySlice(a.values,p)}else{const p=a.createInterpolant();p.evaluate(s),d=p.resultBuffer}c==="quaternion"&&new Pt(d[0],d[1],d[2],d[3]).normalize().conjugate().toArray(d);const f=l.times.length;for(let p=0;p<f;++p){const y=p*u;if(c==="quaternion")Pt.multiplyQuaternionsFlat(l.values,y,d,0,l.values,y);else for(let _=0;_<u;++_)l.values[y+_]-=d[_]}}return e.blendMode=gg,e}};function cn(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(cn.prototype,{evaluate:function(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===a)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(cn.prototype,{beforeStart_:cn.prototype.copySampleValue_,afterEnd_:cn.prototype.copySampleValue_});function mh(e,t,n,i){cn.call(this,e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}mh.prototype=Object.assign(Object.create(cn.prototype),{constructor:mh,DefaultSettings_:{endingStart:Ss,endingEnd:Ss},intervalChanged_:function(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case us:r=e,o=2*t-n;break;case Jc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case us:s=e,a=2*n-t;break;case Jc:s=1,a=n+i[1]-i[0];break;default:s=e-1,a=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(n-t)/(i-t),p=f*f,y=p*f,_=-h*y+2*h*p-h*f,m=(1+h)*y+(-1.5-2*h)*p+(-.5+h)*f+1,g=(-1-d)*y+(1.5+d)*p+.5*f,v=d*y-d*p;for(let b=0;b!==o;++b)r[b]=_*s[l+b]+m*s[c+b]+g*s[a+b]+v*s[u+b];return r}});function El(e,t,n,i){cn.call(this,e,t,n,i)}El.prototype=Object.assign(Object.create(cn.prototype),{constructor:El,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=e*o,c=a-o,l=(n-t)/(i-t),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function gh(e,t,n,i){cn.call(this,e,t,n,i)}gh.prototype=Object.assign(Object.create(cn.prototype),{constructor:gh,interpolate_:function(e){return this.copySampleValue_(e-1)}});function Qt(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gt.convertArray(t,this.TimeBufferType),this.values=gt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(Qt,{toJSON:function(e){const t=e.constructor;let n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:gt.convertArray(e.times,Array),values:gt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}});Object.assign(Qt.prototype,{constructor:Qt,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:vs,InterpolantFactoryMethodDiscrete:function(e){return new gh(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new El(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new mh(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case vs:t=this.InterpolantFactoryMethodLinear;break;case cu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return cu}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this},scale:function(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this},trim:function(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=gt.arraySlice(n,r,s),this.values=gt.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),e=!1;break}s=a}if(i!==void 0&&gt.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e},optimize:function(){const e=gt.arraySlice(this.times),t=gt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===cu,r=e.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=e[o],l=e[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const u=o*n,h=u-n,d=u+n;for(let f=0;f!==n;++f){const p=t[u+f];if(p!==t[h+f]||p!==t[d+f]){a=!0;break}}}if(a){if(o!==s){e[s]=e[o];const u=o*n,h=s*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)t[a+c]=t[o+c];++s}return s!==e.length?(this.times=gt.arraySlice(e,0,s),this.values=gt.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this},clone:function(){const e=gt.arraySlice(this.times,0),t=gt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}});function yh(e,t,n){Qt.call(this,e,t,n)}yh.prototype=Object.assign(Object.create(Qt.prototype),{constructor:yh,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Bo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function _h(e,t,n,i){Qt.call(this,e,t,n,i)}_h.prototype=Object.assign(Object.create(Qt.prototype),{constructor:_h,ValueTypeName:"color"});function zs(e,t,n,i){Qt.call(this,e,t,n,i)}zs.prototype=Object.assign(Object.create(Qt.prototype),{constructor:zs,ValueTypeName:"number"});function vh(e,t,n,i){cn.call(this,e,t,n,i)}vh.prototype=Object.assign(Object.create(cn.prototype),{constructor:vh,interpolate_:function(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let c=e*o;for(let l=c+o;c!==l;c+=4)Pt.slerpFlat(r,0,s,c-o,s,c,a);return r}});function ca(e,t,n,i){Qt.call(this,e,t,n,i)}ca.prototype=Object.assign(Object.create(Qt.prototype),{constructor:ca,ValueTypeName:"quaternion",DefaultInterpolation:vs,InterpolantFactoryMethodLinear:function(e){return new vh(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function bh(e,t,n,i){Qt.call(this,e,t,n,i)}bh.prototype=Object.assign(Object.create(Qt.prototype),{constructor:bh,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Bo,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Gs(e,t,n,i){Qt.call(this,e,t,n,i)}Gs.prototype=Object.assign(Object.create(Qt.prototype),{constructor:Gs,ValueTypeName:"vector"});function Rn(e,t,n,i){this.name=e,this.tracks=n,this.duration=t!==void 0?t:-1,this.blendMode=i!==void 0?i:hf,this.uuid=ke.generateUUID(),this.duration<0&&this.resetDuration()}function W1(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Gs;case"color":return _h;case"quaternion":return ca;case"bool":case"boolean":return yh;case"string":return bh}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function j1(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=W1(e.type);if(e.times===void 0){const n=[],i=[];gt.flattenJSON(e.keys,n,i,"value"),e.times=n,e.values=i}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(Rn,{parse:function(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,s=n.length;r!==s;++r)t.push(j1(n[r]).scale(i));return new Rn(e.name,e.duration,t,e.blendMode)},toJSON:function(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Qt.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=gt.getKeyframeOrder(a);a=gt.sortedArray(a,1,l),c=gt.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new zs(".morphTargetInfluences["+t[o].name+"]",a,c).scale(1/n))}return new Rn(e,-1,s)},findByName:function(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.name.match(r);if(l&&l.length>1){const u=l[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Rn.CreateFromMorphTargetSequence(o,i[o],t,n));return s},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,d,f,p){if(d.length!==0){const y=[],_=[];gt.flattenJSON(d,y,_,f),y.length!==0&&p.push(new u(h,y,_))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let a=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let p=0;p<h[f].morphTargets.length;p++)d[h[f].morphTargets[p]]=-1;for(const p in d){const y=[],_=[];for(let m=0;m!==h[f].morphTargets.length;++m){const g=h[f];y.push(g.time),_.push(g.morphTarget===p?1:0)}i.push(new zs(".morphTargetInfluence["+p+"]",y,_))}a=d.length*(s||1)}else{const d=".bones["+t[u].name+"]";n(Gs,d+".position",h,"pos",i),n(ca,d+".quaternion",h,"rot",i),n(Gs,d+".scale",h,"scl",i)}}return i.length===0?null:new Rn(r,a,i,o)}});Object.assign(Rn.prototype,{resetDuration:function(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this},trim:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new Rn(this.name,this.duration,e,this.blendMode)}});const Vs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Hg(e,t,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}const X1=new Hg;function qe(e){this.manager=e!==void 0?e:X1,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(qe.prototype,{load:function(){},loadAsync:function(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});const Bn={};function un(e){qe.call(this,e)}un.prototype=Object.assign(Object.create(qe.prototype),{constructor:un,load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=e.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d;const f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let _=0;_<h.length;_++)p[_]=h.charCodeAt(_);f==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),r.manager.itemEnd(e)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(l){const u=this.response,h=Bn[e];if(delete Bn[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Vs.add(e,u);for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(e)}else{for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(l){const u=Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=Bn[e];delete Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),c.addEventListener("abort",function(l){const u=Bn[e];delete Bn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(e),c},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this}});function _p(e){qe.call(this,e)}_p.prototype=Object.assign(Object.create(qe.prototype),{constructor:_p,load:function(e,t,n,i){const r=this,s=new un(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=[];for(let n=0;n<e.length;n++){const i=Rn.parse(e[n]);t.push(i)}return t}});function vp(e){qe.call(this,e)}vp.prototype=Object.assign(Object.create(qe.prototype),{constructor:vp,load:function(e,t,n,i){const r=this,s=[],o=new Yo;o.image=s;const a=new un(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader);let c=0;function l(u){a.load(e[u],function(h){const d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Bt),o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,h=e.length;u<h;++u)l(u);else a.load(e,function(u){const h=r.parse(u,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Bt),o.format=h.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}});function bp(e){qe.call(this,e)}bp.prototype=Object.assign(Object.create(qe.prototype),{constructor:bp,load:function(e,t,n,i){const r=this,s=new Rs,o=new un(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.load(e,function(a){const c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:tn,s.wrapT=c.wrapT!==void 0?c.wrapT:tn,s.magFilter=c.magFilter!==void 0?c.magFilter:Bt,s.minFilter=c.minFilter!==void 0?c.minFilter:Bt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Es),c.mipmapCount===1&&(s.minFilter=Bt),s.needsUpdate=!0,t&&t(s,c))},n,i),s}});function la(e){qe.call(this,e)}la.prototype=Object.assign(Object.create(qe.prototype),{constructor:la,load:function(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),Vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}});function xh(e){qe.call(this,e)}xh.prototype=Object.assign(Object.create(qe.prototype),{constructor:xh,load:function(e,t,n,i){const r=new $i,s=new la(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(e[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)a(c);return r}});function Sl(e){qe.call(this,e)}Sl.prototype=Object.assign(Object.create(qe.prototype),{constructor:Sl,load:function(e,t,n,i){const r=new ot,s=new la(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o;const a=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=a?bi:gn,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}});function Ce(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(Ce.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){const e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){const n=this.getLengths();let i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=t||(s.isVector2?new ae:new R);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){const n=new R,i=[],r=[],s=[],o=new R,a=new ze;for(let d=0;d<=e;d++){const f=d/e;i[d]=this.getTangentAt(f,new R),i[d].normalize()}r[0]=new R,s[0]=new R;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(ke.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(ke.clamp(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let f=1;f<=e;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function On(e,t,n,i,r,s,o,a){Ce.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}On.prototype=Object.create(Ce.prototype);On.prototype.constructor=On;On.prototype.isEllipseCurve=!0;On.prototype.getPoint=function(e,t){const n=t||new ae,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=a-this.aX,d=c-this.aY;a=h*l-d*u+this.aX,c=h*u+d*l+this.aY}return n.set(a,c)};On.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};On.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};On.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function ua(e,t,n,i,r,s){On.call(this,e,t,n,n,i,r,s),this.type="ArcCurve"}ua.prototype=Object.create(On.prototype);ua.prototype.constructor=ua;ua.prototype.isArcCurve=!0;function mf(){let e=0,t=0,n=0,i=0;function r(s,o,a,c){e=s,t=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const yc=new R,Du=new mf,Ou=new mf,Fu=new mf;function bn(e,t,n,i){Ce.call(this),this.type="CatmullRomCurve3",this.points=e||[],this.closed=t||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}bn.prototype=Object.create(Ce.prototype);bn.prototype.constructor=bn;bn.prototype.isCatmullRomCurve3=!0;bn.prototype.getPoint=function(e,t){const n=t||new R,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l,u,h;if(this.closed||o>0?c=i[(o-1)%r]:(yc.subVectors(i[0],i[1]).add(i[0]),c=yc),l=i[o%r],u=i[(o+1)%r],this.closed||o+2<r?h=i[(o+2)%r]:(yc.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=yc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(l),d),p=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(h),d);p<1e-4&&(p=1),f<1e-4&&(f=p),y<1e-4&&(y=p),Du.initNonuniformCatmullRom(c.x,l.x,u.x,h.x,f,p,y),Ou.initNonuniformCatmullRom(c.y,l.y,u.y,h.y,f,p,y),Fu.initNonuniformCatmullRom(c.z,l.z,u.z,h.z,f,p,y)}else this.curveType==="catmullrom"&&(Du.initCatmullRom(c.x,l.x,u.x,h.x,this.tension),Ou.initCatmullRom(c.y,l.y,u.y,h.y,this.tension),Fu.initCatmullRom(c.z,l.z,u.z,h.z,this.tension));return n.set(Du.calc(a),Ou.calc(a),Fu.calc(a)),n};bn.prototype.copy=function(e){Ce.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};bn.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};bn.prototype.fromJSON=function(e){Ce.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function xp(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,c=e*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*e+n}function Y1(e,t){const n=1-e;return n*n*t}function q1(e,t){return 2*(1-e)*e*t}function Z1(e,t){return e*e*t}function Po(e,t,n,i){return Y1(e,t)+q1(e,n)+Z1(e,i)}function J1(e,t){const n=1-e;return n*n*n*t}function K1(e,t){const n=1-e;return 3*n*n*e*t}function Q1(e,t){return 3*(1-e)*e*e*t}function $1(e,t){return e*e*e*t}function Co(e,t,n,i,r){return J1(e,t)+K1(e,n)+Q1(e,i)+$1(e,r)}function si(e,t,n,i){Ce.call(this),this.type="CubicBezierCurve",this.v0=e||new ae,this.v1=t||new ae,this.v2=n||new ae,this.v3=i||new ae}si.prototype=Object.create(Ce.prototype);si.prototype.constructor=si;si.prototype.isCubicBezierCurve=!0;si.prototype.getPoint=function(e,t){const n=t||new ae,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Co(e,i.x,r.x,s.x,o.x),Co(e,i.y,r.y,s.y,o.y)),n};si.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};si.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};si.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function Ei(e,t,n,i){Ce.call(this),this.type="CubicBezierCurve3",this.v0=e||new R,this.v1=t||new R,this.v2=n||new R,this.v3=i||new R}Ei.prototype=Object.create(Ce.prototype);Ei.prototype.constructor=Ei;Ei.prototype.isCubicBezierCurve3=!0;Ei.prototype.getPoint=function(e,t){const n=t||new R,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Co(e,i.x,r.x,s.x,o.x),Co(e,i.y,r.y,s.y,o.y),Co(e,i.z,r.z,s.z,o.z)),n};Ei.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};Ei.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};Ei.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function xn(e,t){Ce.call(this),this.type="LineCurve",this.v1=e||new ae,this.v2=t||new ae}xn.prototype=Object.create(Ce.prototype);xn.prototype.constructor=xn;xn.prototype.isLineCurve=!0;xn.prototype.getPoint=function(e,t){const n=t||new ae;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};xn.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};xn.prototype.getTangent=function(e,t){const n=t||new ae;return n.copy(this.v2).sub(this.v1).normalize(),n};xn.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};xn.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};xn.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function oi(e,t){Ce.call(this),this.type="LineCurve3",this.v1=e||new R,this.v2=t||new R}oi.prototype=Object.create(Ce.prototype);oi.prototype.constructor=oi;oi.prototype.isLineCurve3=!0;oi.prototype.getPoint=function(e,t){const n=t||new R;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};oi.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};oi.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};oi.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};oi.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function ai(e,t,n){Ce.call(this),this.type="QuadraticBezierCurve",this.v0=e||new ae,this.v1=t||new ae,this.v2=n||new ae}ai.prototype=Object.create(Ce.prototype);ai.prototype.constructor=ai;ai.prototype.isQuadraticBezierCurve=!0;ai.prototype.getPoint=function(e,t){const n=t||new ae,i=this.v0,r=this.v1,s=this.v2;return n.set(Po(e,i.x,r.x,s.x),Po(e,i.y,r.y,s.y)),n};ai.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};ai.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};ai.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Si(e,t,n){Ce.call(this),this.type="QuadraticBezierCurve3",this.v0=e||new R,this.v1=t||new R,this.v2=n||new R}Si.prototype=Object.create(Ce.prototype);Si.prototype.constructor=Si;Si.prototype.isQuadraticBezierCurve3=!0;Si.prototype.getPoint=function(e,t){const n=t||new R,i=this.v0,r=this.v1,s=this.v2;return n.set(Po(e,i.x,r.x,s.x),Po(e,i.y,r.y,s.y),Po(e,i.z,r.z,s.z)),n};Si.prototype.copy=function(e){return Ce.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Si.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Si.prototype.fromJSON=function(e){return Ce.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function ci(e){Ce.call(this),this.type="SplineCurve",this.points=e||[]}ci.prototype=Object.create(Ce.prototype);ci.prototype.constructor=ci;ci.prototype.isSplineCurve=!0;ci.prototype.getPoint=function(e,t){const n=t||new ae,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(xp(o,a.x,c.x,l.x,u.x),xp(o,a.y,c.y,l.y,u.y)),n};ci.prototype.copy=function(e){Ce.prototype.copy.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this};ci.prototype.toJSON=function(){const e=Ce.prototype.toJSON.call(this);e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e};ci.prototype.fromJSON=function(e){Ce.prototype.fromJSON.call(this,e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this};var wh=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:ua,CatmullRomCurve3:bn,CubicBezierCurve:si,CubicBezierCurve3:Ei,EllipseCurve:On,LineCurve:xn,LineCurve3:oi,QuadraticBezierCurve:ai,QuadraticBezierCurve3:Si,SplineCurve:ci},Symbol.toStringTag,{value:"Module"}));function ji(){Ce.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}ji.prototype=Object.assign(Object.create(Ce.prototype),{constructor:ji,add:function(e){this.curves.push(e)},closePath:function(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new xn(t,e))},getPoint:function(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e=e||12;const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){Ce.prototype.copy.call(this,e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){const e=Ce.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e},fromJSON:function(e){Ce.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new wh[i.type]().fromJSON(i))}return this}});function ei(e){ji.call(this),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}ei.prototype=Object.assign(Object.create(ji.prototype),{constructor:ei,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){const n=new xn(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,i){const r=new ai(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(e,t,n,i,r,s){const o=new si(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(e){const t=[this.currentPoint.clone()].concat(e),n=new ci(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,i,r,s),this},absarc:function(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this},ellipse:function(e,t,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,i,r,s,o,a),this},absellipse:function(e,t,n,i,r,s,o,a){const c=new On(e,t,n,i,r,s,o,a);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(e){return ji.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){const e=ji.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return ji.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function Er(e){ei.call(this,e),this.uuid=ke.generateUUID(),this.type="Shape",this.holes=[]}Er.prototype=Object.assign(Object.create(ei.prototype),{constructor:Er,getPointsHoles:function(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){ei.prototype.copy.call(this,e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this},toJSON:function(){const e=ei.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e},fromJSON:function(e){ei.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ei().fromJSON(i))}return this}});function pt(e,t){xe.call(this),this.type="Light",this.color=new _e(e),this.intensity=t!==void 0?t:1,this.receiveShadow=void 0}pt.prototype=Object.assign(Object.create(xe.prototype),{constructor:pt,isLight:!0,copy:function(e){return xe.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){const t=xe.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function Mh(e,t,n){pt.call(this,e,n),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(xe.DefaultUp),this.updateMatrix(),this.groundColor=new _e(t)}Mh.prototype=Object.assign(Object.create(pt.prototype),{constructor:Mh,isHemisphereLight:!0,copy:function(e){return pt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function Ti(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}Object.assign(Ti.prototype,{_projScreenMatrix:new ze,_lightPositionWorld:new R,_lookTarget:new R,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){const t=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(e.matrixWorld),t.position.copy(s),r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r),t.updateMatrixWorld(),i.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function Eh(){Ti.call(this,new wt(50,1,.5,500))}Eh.prototype=Object.assign(Object.create(Ti.prototype),{constructor:Eh,isSpotLightShadow:!0,updateMatrices:function(e){const t=this.camera,n=ke.RAD2DEG*2*e.angle,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),Ti.prototype.updateMatrices.call(this,e)}});function Tl(e,t,n,i,r,s){pt.call(this,e,t),this.type="SpotLight",this.position.copy(xe.DefaultUp),this.updateMatrix(),this.target=new xe,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new Eh}Tl.prototype=Object.assign(Object.create(pt.prototype),{constructor:Tl,isSpotLight:!0,copy:function(e){return pt.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Sh(){Ti.call(this,new wt(90,1,.5,500)),this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}Sh.prototype=Object.assign(Object.create(Ti.prototype),{constructor:Sh,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(e.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function ha(e,t,n,i){pt.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new Sh}ha.prototype=Object.assign(Object.create(pt.prototype),{constructor:ha,isPointLight:!0,copy:function(e){return pt.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Ws(e,t,n,i,r,s){xi.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e!==void 0?e:-1,this.right=t!==void 0?t:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}Ws.prototype=Object.assign(Object.create(xi.prototype),{constructor:Ws,isOrthographicCamera:!0,copy:function(e,t){return xi.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(e){const t=xe.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function Th(){Ti.call(this,new Ws(-5,5,5,-5,.5,500))}Th.prototype=Object.assign(Object.create(Ti.prototype),{constructor:Th,isDirectionalLightShadow:!0,updateMatrices:function(e){Ti.prototype.updateMatrices.call(this,e)}});function fa(e,t){pt.call(this,e,t),this.type="DirectionalLight",this.position.copy(xe.DefaultUp),this.updateMatrix(),this.target=new xe,this.shadow=new Th}fa.prototype=Object.assign(Object.create(pt.prototype),{constructor:fa,isDirectionalLight:!0,copy:function(e){return pt.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function Al(e,t){pt.call(this,e,t),this.type="AmbientLight",this.castShadow=void 0}Al.prototype=Object.assign(Object.create(pt.prototype),{constructor:Al,isAmbientLight:!0});function Ah(e,t,n,i){pt.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}Ah.prototype=Object.assign(Object.create(pt.prototype),{constructor:Ah,isRectAreaLight:!0,copy:function(e){return pt.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){const t=pt.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});function gf(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}Object.assign(gf.prototype,{isSphericalHarmonics3:!0,set:function(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this},zero:function(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this},getAt:function(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t},getIrradianceAt:function(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t},add:function(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this},addScaledSH:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this},scale:function(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this},lerp:function(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this},equals:function(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0},copy:function(e){return this.set(e.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(e,t){t===void 0&&(t=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this},toArray:function(e,t){e===void 0&&(e=[]),t===void 0&&(t=0);const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}});Object.assign(gf,{getBasisAt:function(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}});function Gn(e,t){pt.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new gf}Gn.prototype=Object.assign(Object.create(pt.prototype),{constructor:Gn,isLightProbe:!0,copy:function(e){return pt.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){const t=pt.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function Rh(e){qe.call(this,e),this.textures={}}Rh.prototype=Object.assign(Object.create(qe.prototype),{constructor:Rh,load:function(e,t,n,i){const r=this,s=new un(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new V1[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new _e().setHex(e.sheen)),e.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new _e().setHex(s.value);break;case"v2":i.uniforms[r].value=new ae().fromArray(s.value);break;case"v3":i.uniforms[r].value=new R().fromArray(s.value);break;case"v4":i.uniforms[r].value=new nt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new rn().fromArray(s.value);case"m4":i.uniforms[r].value=new ze().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ae().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i},setTextures:function(e){return this.textures=e,this}});const vr={decodeText:function(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function Rl(){Te.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Rl.prototype=Object.assign(Object.create(Te.prototype),{constructor:Rl,isInstancedBufferGeometry:!0,copy:function(e){return Te.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const e=Te.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function Lh(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ie.call(this,e,t,n),this.meshPerAttribute=i||1}Lh.prototype=Object.assign(Object.create(Ie.prototype),{constructor:Lh,isInstancedBufferAttribute:!0,copy:function(e){return Ie.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){const e=Ie.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function Ph(e){qe.call(this,e)}Ph.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ph,load:function(e,t,n,i){const r=this,s=new un(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)},parse:function(e){const t={},n={};function i(d,f){if(t[f]!==void 0)return t[f];const y=d.interleavedBuffers[f],_=r(d,y.buffer),m=new _c[y.type](_),g=new mn(m,y.stride);return g.uuid=y.uuid,t[f]=g,g}function r(d,f){if(n[f]!==void 0)return n[f];const y=d.arrayBuffers[f],_=new Uint32Array(y).buffer;return n[f]=_,_}const s=e.isInstancedBufferGeometry?new Rl:new Te,o=e.data.index;if(o!==void 0){const d=new _c[o.type](o.array);s.setIndex(new Ie(d,1))}const a=e.data.attributes;for(const d in a){const f=a[d];let p;if(f.isInterleavedBufferAttribute){const y=i(e.data,f.data);p=new er(y,f.itemSize,f.offset,f.normalized)}else{const y=new _c[f.type](f.array),_=f.isInstancedBufferAttribute?Lh:Ie;p=new _(y,f.itemSize,f.normalized)}f.name!==void 0&&(p.name=f.name),s.setAttribute(d,p)}const c=e.data.morphAttributes;if(c)for(const d in c){const f=c[d],p=[];for(let y=0,_=f.length;y<_;y++){const m=f[y];let g;if(m.isInterleavedBufferAttribute){const v=i(e.data,m.data);g=new er(v,m.itemSize,m.offset,m.normalized)}else{const v=new _c[m.type](m.array);g=new Ie(v,m.itemSize,m.normalized)}m.name!==void 0&&(g.name=m.name),p.push(g)}s.morphAttributes[d]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,f=u.length;d!==f;++d){const p=u[d];s.addGroup(p.start,p.count,p.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const d=new R;h.center!==void 0&&d.fromArray(h.center),s.boundingSphere=new ui(d,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}});const _c={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ch(e){qe.call(this,e)}Ch.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ch,load:function(e,t,n,i){const r=this,s=this.path===""?vr.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new un(r.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.load(e,function(a){let c=null;try{c=JSON.parse(a)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const l=c.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)},parse:function(e,t){const n=this.parseShape(e.shapes),i=this.parseGeometries(e.geometries,n),r=this.parseImages(e.images,function(){t!==void 0&&t(a)}),s=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,s),a=this.parseObject(e.object,i,o);return e.animations&&(a.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&t!==void 0&&t(a),a},parseShape:function(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Er().fromJSON(e[n]);t[r.uuid]=r}return t},parseGeometries:function(e,t){const n={};let i;if(e!==void 0){const r=new Ph;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":a=new $t[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":a=new $t[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":a=new $t[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":a=new $t[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":a=new $t[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":a=new $t[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":a=new $t[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":a=new $t[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":a=new $t[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":a=new $t[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":a=new $t[c.type](new wh[c.path.type]().fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":a=new $t[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":a=new $t[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let u=0,h=c.shapes.length;u<h;u++){const d=t[c.shapes[u]];i.push(d)}a=new $t[c.type](i,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let u=0,h=c.shapes.length;u<h;u++){const d=t[c.shapes[u]];i.push(d)}const l=c.options.extrudePath;l!==void 0&&(c.options.extrudePath=new wh[l.type]().fromJSON(l)),a=new $t[c.type](i,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":a=r.parse(c);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),a.isBufferGeometry===!0&&c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n},parseMaterials:function(e,t){const n={},i={};if(e!==void 0){const r=new Rh;r.setTextures(t);for(let s=0,o=e.length;s<o;s++){const a=e[s];if(a.type==="MultiMaterial"){const c=[];for(let l=0;l<a.materials.length;l++){const u=a.materials[l];n[u.uuid]===void 0&&(n[u.uuid]=r.parse(u)),c.push(n[u.uuid])}i[a.uuid]=c}else n[a.uuid]===void 0&&(n[a.uuid]=r.parse(a)),i[a.uuid]=n[a.uuid]}}return i},parseAnimations:function(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n],r=Rn.parse(i);i.uuid!==void 0&&(r.uuid=i.uuid),t.push(r)}return t},parseImages:function(e,t){const n=this,i={};let r;function s(o){return n.manager.itemStart(o),r.load(o,function(){n.manager.itemEnd(o)},void 0,function(){n.manager.itemError(o),n.manager.itemEnd(o)})}if(e!==void 0&&e.length>0){const o=new Hg(t);r=new la(o),r.setCrossOrigin(this.crossOrigin);for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.url;if(Array.isArray(u)){i[l.uuid]=[];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:n.resourcePath+f;i[l.uuid].push(s(p))}}else{const h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:n.resourcePath+l.url;i[l.uuid]=s(h)}}}return i},parseTextures:function(e,t){function n(r,s){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const i={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let a;Array.isArray(t[o.image])?a=new $i(t[o.image]):a=new ot(t[o.image]),a.needsUpdate=!0,a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.mapping!==void 0&&(a.mapping=n(o.mapping,eS)),o.offset!==void 0&&a.offset.fromArray(o.offset),o.repeat!==void 0&&a.repeat.fromArray(o.repeat),o.center!==void 0&&a.center.fromArray(o.center),o.rotation!==void 0&&(a.rotation=o.rotation),o.wrap!==void 0&&(a.wrapS=n(o.wrap[0],wp),a.wrapT=n(o.wrap[1],wp)),o.format!==void 0&&(a.format=o.format),o.type!==void 0&&(a.type=o.type),o.encoding!==void 0&&(a.encoding=o.encoding),o.minFilter!==void 0&&(a.minFilter=n(o.minFilter,Mp)),o.magFilter!==void 0&&(a.magFilter=n(o.magFilter,Mp)),o.anisotropy!==void 0&&(a.anisotropy=o.anisotropy),o.flipY!==void 0&&(a.flipY=o.flipY),o.premultiplyAlpha!==void 0&&(a.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(a.unpackAlignment=o.unpackAlignment),i[o.uuid]=a}return i},parseObject:function(e,t,n){let i;function r(c){return t[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",c),t[c]}function s(c){if(c!==void 0){if(Array.isArray(c)){const l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),l.push(n[d])}return l}return n[c]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",c),n[c]}}let o,a;switch(e.type){case"Scene":i=new Ho,e.background!==void 0&&Number.isInteger(e.background)&&(i.background=new _e(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?i.fog=new $c(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(i.fog=new ch(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":i=new wt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(i.focus=e.focus),e.zoom!==void 0&&(i.zoom=e.zoom),e.filmGauge!==void 0&&(i.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(i.filmOffset=e.filmOffset),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"OrthographicCamera":i=new Ws(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(i.zoom=e.zoom),e.view!==void 0&&(i.view=Object.assign({},e.view));break;case"AmbientLight":i=new Al(e.color,e.intensity);break;case"DirectionalLight":i=new fa(e.color,e.intensity);break;case"PointLight":i=new ha(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":i=new Ah(e.color,e.intensity,e.width,e.height);break;case"SpotLight":i=new Tl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":i=new Mh(e.color,e.groundColor,e.intensity);break;case"LightProbe":i=new Gn().fromJSON(e);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":o=r(e.geometry),a=s(e.material),i=new st(o,a);break;case"InstancedMesh":o=r(e.geometry),a=s(e.material);const c=e.count,l=e.instanceMatrix;i=new hh(o,a,c),i.instanceMatrix=new Ie(new Float32Array(l.array),16);break;case"LOD":i=new el;break;case"Line":i=new _n(r(e.geometry),s(e.material),e.mode);break;case"LineLoop":i=new il(r(e.geometry),s(e.material));break;case"LineSegments":i=new Ct(r(e.geometry),s(e.material));break;case"PointCloud":case"Points":i=new rl(r(e.geometry),s(e.material));break;case"Sprite":i=new lh(s(e.material));break;case"Group":i=new ti;break;default:i=new xe}if(i.uuid=e.uuid,e.name!==void 0&&(i.name=e.name),e.matrix!==void 0?(i.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=e.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(e.position!==void 0&&i.position.fromArray(e.position),e.rotation!==void 0&&i.rotation.fromArray(e.rotation),e.quaternion!==void 0&&i.quaternion.fromArray(e.quaternion),e.scale!==void 0&&i.scale.fromArray(e.scale)),e.castShadow!==void 0&&(i.castShadow=e.castShadow),e.receiveShadow!==void 0&&(i.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(i.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(i.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(i.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(i.visible=e.visible),e.frustumCulled!==void 0&&(i.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(i.renderOrder=e.renderOrder),e.userData!==void 0&&(i.userData=e.userData),e.layers!==void 0&&(i.layers.mask=e.layers),e.children!==void 0){const c=e.children;for(let l=0;l<c.length;l++)i.add(this.parseObject(c[l],t,n))}if(e.type==="LOD"){e.autoUpdate!==void 0&&(i.autoUpdate=e.autoUpdate);const c=e.levels;for(let l=0;l<c.length;l++){const u=c[l],h=i.getObjectByProperty("uuid",u.object);h!==void 0&&i.addLevel(h,u.distance)}}return i}});const eS={UVMapping:of,CubeReflectionMapping:af,CubeRefractionMapping:cf,EquirectangularReflectionMapping:mg,EquirectangularRefractionMapping:lf,CubeUVReflectionMapping:xa,CubeUVRefractionMapping:Vl},wp={RepeatWrapping:Mr,ClampToEdgeWrapping:tn,MirroredRepeatWrapping:No},Mp={NearestFilter:Ot,NearestMipmapNearestFilter:Xc,NearestMipmapLinearFilter:Yc,LinearFilter:Bt,LinearMipmapNearestFilter:uf,LinearMipmapLinearFilter:Es};function Ih(e){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),qe.call(this,e),this.options={premultiplyAlpha:"none"}}Ih.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ih,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;fetch(e).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,r.options)}).then(function(o){Vs.add(e,o),t&&t(o),r.manager.itemEnd(e)}).catch(function(o){i&&i(o),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}});function zg(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}Object.assign(zg.prototype,{moveTo:function(e,t){return this.currentPath=new ei,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this},bezierCurveTo:function(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(m){const g=[];for(let v=0,b=m.length;v<b;v++){const x=m[v],E=new Er;E.curves=x.curves,g.push(E)}return g}function i(m,g){const v=g.length;let b=!1;for(let x=v-1,E=0;E<v;x=E++){let w=g[x],P=g[E],A=P.x-w.x,Z=P.y-w.y;if(Math.abs(Z)>Number.EPSILON){if(Z<0&&(w=g[E],A=-A,P=g[x],Z=-Z),m.y<w.y||m.y>P.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const k=Z*(m.x-w.x)-A*(m.y-w.y);if(k===0)return!0;if(k<0)continue;b=!b}}else{if(m.y!==w.y)continue;if(P.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=P.x)return!0}}return b}const r=Zi.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return n(s);let o,a,c,l=[];if(s.length===1)return a=s[0],c=new Er,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,y;d[p]=void 0,f[p]=[];for(let m=0,g=s.length;m<g;m++)a=s[m],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!u&&d[p]&&p++,d[p]={s:new Er,p:y},d[p].s.curves=a.curves,u&&p++,f[p]=[]):f[p].push({h:a,p:y[0]});if(!d[0])return n(s);if(d.length>1){let m=!1;const g=[];for(let v=0,b=d.length;v<b;v++)h[v]=[];for(let v=0,b=d.length;v<b;v++){const x=f[v];for(let E=0;E<x.length;E++){const w=x[E];let P=!0;for(let A=0;A<d.length;A++)i(w.p,d[A].p)&&(v!==A&&g.push({froms:v,tos:A,hole:E}),P?(P=!1,h[A].push(w)):m=!0);P&&h[v].push(w)}}g.length>0&&(m||(f=h))}let _;for(let m=0,g=d.length;m<g;m++){c=d[m].s,l.push(c),_=f[m];for(let v=0,b=_.length;v<b;v++)c.holes.push(_[v].h)}return l}});function Gg(e){this.type="Font",this.data=e}Object.assign(Gg.prototype,{isFont:!0,generateShapes:function(e,t){t===void 0&&(t=100);const n=[],i=tS(e,t,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function tS(e,t,n){const i=Array.from?Array.from(e):String(e).split(""),r=t/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=s;else{const h=nS(u,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function nS(e,t,n,i,r){const s=r.glyphs[e]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const o=new zg;let a,c,l,u,h,d,f,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let _=0,m=y.length;_<m;)switch(y[_++]){case"m":a=y[_++]*t+n,c=y[_++]*t+i,o.moveTo(a,c);break;case"l":a=y[_++]*t+n,c=y[_++]*t+i,o.lineTo(a,c);break;case"q":l=y[_++]*t+n,u=y[_++]*t+i,h=y[_++]*t+n,d=y[_++]*t+i,o.quadraticCurveTo(h,d,l,u);break;case"b":l=y[_++]*t+n,u=y[_++]*t+i,h=y[_++]*t+n,d=y[_++]*t+i,f=y[_++]*t+n,p=y[_++]*t+i,o.bezierCurveTo(h,d,f,p,l,u);break}}return{offsetX:s.ha*t,path:o}}function Ep(e){qe.call(this,e)}Ep.prototype=Object.assign(Object.create(qe.prototype),{constructor:Ep,load:function(e,t,n,i){const r=this,s=new un(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.load(e,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);t&&t(c)},n,i)},parse:function(e){return new Gg(e)}});let vc;const Vg={getContext:function(){return vc===void 0&&(vc=new(window.AudioContext||window.webkitAudioContext)),vc},setContext:function(e){vc=e}};function Dh(e){qe.call(this,e)}Dh.prototype=Object.assign(Object.create(qe.prototype),{constructor:Dh,load:function(e,t,n,i){const r=this,s=new un(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.load(e,function(o){try{const a=o.slice(0);Vg.getContext().decodeAudioData(a,function(l){t(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(e)}},n,i)}});function Sp(e,t,n){Gn.call(this,void 0,n);const i=new _e().set(e),r=new _e().set(t),s=new R(i.r,i.g,i.b),o=new R(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}Sp.prototype=Object.assign(Object.create(Gn.prototype),{constructor:Sp,isHemisphereLightProbe:!0,copy:function(e){return Gn.prototype.copy.call(this,e),this},toJSON:function(e){return Gn.prototype.toJSON.call(this,e)}});function Tp(e,t){Gn.call(this,void 0,t);const n=new _e().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}Tp.prototype=Object.assign(Object.create(Gn.prototype),{constructor:Tp,isAmbientLightProbe:!0,copy:function(e){return Gn.prototype.copy.call(this,e),this},toJSON:function(e){return Gn.prototype.toJSON.call(this,e)}});const Ap=new ze,Rp=new ze;function iS(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new wt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new wt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(iS.prototype,{update:function(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(ke.DEG2RAD*t.fov*.5)/t.zoom;let a,c;Rp.elements[12]=-r,Ap.elements[12]=r,a=-o*t.aspect+s,c=o*t.aspect+s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*t.aspect-s,c=o*t.aspect-s,i.elements[0]=2*t.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Rp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Ap)}});function Wg(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Wg.prototype,{start:function(){this.startTime=(typeof performance=="undefined"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=(typeof performance=="undefined"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}});const fr=new R,Lp=new Pt,rS=new R,dr=new R;function Pp(){xe.call(this),this.type="AudioListener",this.context=Vg.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Wg}Pp.prototype=Object.assign(Object.create(xe.prototype),{constructor:Pp,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this},updateMatrixWorld:function(e){xe.prototype.updateMatrixWorld.call(this,e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(fr,Lp,rS),dr.set(0,0,-1).applyQuaternion(Lp),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(fr.x,i),t.positionY.linearRampToValueAtTime(fr.y,i),t.positionZ.linearRampToValueAtTime(fr.z,i),t.forwardX.linearRampToValueAtTime(dr.x,i),t.forwardY.linearRampToValueAtTime(dr.y,i),t.forwardZ.linearRampToValueAtTime(dr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(fr.x,fr.y,fr.z),t.setOrientation(dr.x,dr.y,dr.z,n.x,n.y,n.z)}});function da(e){xe.call(this),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}da.prototype=Object.assign(Object.create(xe.prototype),{constructor:da,getOutput:function(){return this.gain},setNodeSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this},setMediaElementSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this},setMediaStreamSource:function(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this},setBuffer:function(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(e){return e||(e=[]),this.isPlaying===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this},setDetune:function(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(e){return this.setFilters(e?[e]:[])},setPlaybackRate:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(e){return this.loopStart=e,this},setLoopEnd:function(e){return this.loopEnd=e,this},getVolume:function(){return this.gain.gain.value},setVolume:function(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}});const pr=new R,Cp=new Pt,sS=new R,mr=new R;function Ip(e){da.call(this,e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}Ip.prototype=Object.assign(Object.create(da.prototype),{constructor:Ip,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(e){return this.panner.refDistance=e,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(e){return this.panner.rolloffFactor=e,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(e){return this.panner.distanceModel=e,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(e){return this.panner.maxDistance=e,this},setDirectionalCone:function(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this},updateMatrixWorld:function(e){if(xe.prototype.updateMatrixWorld.call(this,e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(pr,Cp,sS),mr.set(0,0,1).applyQuaternion(Cp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(pr.x,n),t.positionY.linearRampToValueAtTime(pr.y,n),t.positionZ.linearRampToValueAtTime(pr.z,n),t.orientationX.linearRampToValueAtTime(mr.x,n),t.orientationY.linearRampToValueAtTime(mr.y,n),t.orientationZ.linearRampToValueAtTime(mr.z,n)}else t.setPosition(pr.x,pr.y,pr.z),t.setOrientation(mr.x,mr.y,mr.z)}});function jg(e,t){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t!==void 0?t:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}Object.assign(jg.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}});function Xg(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Xg.prototype,{accumulate:function(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,c=t+t;a!==c;++a)if(n[a]!==n[a+t]){o.setValue(n,i);break}},saveOriginalState:function(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]},_slerp:function(e,t,n,i){Pt.slerpFlat(e,t,e,t,e,n,i)},_slerpAdditive:function(e,t,n,i,r){const s=this._workIndex*r;Pt.multiplyQuaternionsFlat(e,s,e,t,e,n),Pt.slerpFlat(e,t,e,t,e,s,i)},_lerp:function(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]*s+e[n+o]*i}},_lerpAdditive:function(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}});const yf="\\[\\]\\.:\\/",oS=new RegExp("["+yf+"]","g"),_f="[^"+yf+"]",aS="[^"+yf.replace("\\.","")+"]",cS=/((?:WC+[\/:])*)/.source.replace("WC",_f),lS=/(WCOD+)?/.source.replace("WCOD",aS),uS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),hS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),fS=new RegExp("^"+cS+lS+uS+hS+"$"),dS=["material","materials","bones"];function Yg(e,t,n){const i=n||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}Object.assign(Yg.prototype,{getValue:function(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)},setValue:function(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)},bind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function Kt(e,t,n){this.path=t,this.parsedPath=n||Kt.parseTrackName(t),this.node=Kt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(Kt,{Composite:Yg,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new Kt.Composite(e,t,n):new Kt(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(oS,"")},parseTrackName:function(e){const t=fS.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);dS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}});Object.assign(Kt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[n++]=i[r]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++]},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Kt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===c){c=l;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(Kt.prototype,{_getValue_unbound:Kt.prototype.getValue,_setValue_unbound:Kt.prototype.setValue});function pS(){this.uuid=ke.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}Object.assign(pS.prototype,{isAnimationObjectGroup:!0,add:function(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=e.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){const h=arguments[l],d=h.uuid;let f=t[d];if(f===void 0){f=a++,t[d]=f,e.push(h);for(let p=0,y=s;p!==y;++p)r[p].push(new Kt(h,n[p],i[p]))}else if(f<c){o=e[f];const p=--c,y=e[p];t[y.uuid]=f,e[f]=y,t[d]=p,e[p]=h;for(let _=0,m=s;_!==m;++_){const g=r[_],v=g[p];let b=g[f];g[f]=v,b===void 0&&(b=new Kt(h,n[_],i[_])),g[p]=b}}else e[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=t[c];if(l!==void 0&&l>=r){const u=r++,h=e[u];t[h.uuid]=l,e[l]=h,t[c]=u,e[u]=a;for(let d=0,f=i;d!==f;++d){const p=n[d],y=p[u],_=p[l];p[l]=y,p[u]=_}}}this.nCachedObjects_=r},uncache:function(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0)if(delete t[l],u<r){const h=--r,d=e[h],f=--s,p=e[f];t[d.uuid]=u,e[u]=d,t[p.uuid]=h,e[h]=p,e.pop();for(let y=0,_=i;y!==_;++y){const m=n[y],g=m[h],v=m[f];m[u]=g,m[h]=v,m.pop()}}else{const h=--s,d=e[h];t[d.uuid]=u,e[u]=d,e.pop();for(let f=0,p=i;f!==p;++f){const y=n[f];y[u]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,s.push(e),o.push(t),r.push(u);for(let h=l,d=a.length;h!==d;++h){const f=a[h];u[h]=new Kt(f,e,t)}return u},unsubscribe_:function(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=e[o];t[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});function qg(e,t,n,i){this._mixer=e,this._clip=t,this._localRoot=n||null,this.blendMode=i||t.blendMode;const r=t.tracks,s=r.length,o=new Array(s),a={endingStart:Ss,endingEnd:Ss};for(let c=0;c!==s;++c){const l=r[c].createInterpolant(null);o[c]=l,l.settings=a}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(qg.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(e){return this._startTime=e,this},setLoop:function(e,t){return this.loop=e,this.repetitions=t,this},setEffectiveWeight:function(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(e){return this._scheduleFading(e,0,1)},fadeOut:function(e){return this._scheduleFading(e,1,0)},crossFadeFrom:function(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this},crossFadeTo:function(e,t,n){return e.crossFadeFrom(this,t,n)},stopFading:function(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},setEffectiveTimeScale:function(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(e){return this.timeScale=this._clip.duration/e,this.stopWarping()},syncWith:function(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()},halt:function(e){return this.warp(this._effectiveTimeScale,0,e)},warp:function(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,a[1]=r+n,c[0]=e/s,c[1]=t/s,this},stopWarping:function(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const a=(e-r)*n;if(a<0||n===0)return;this._startTime=null,t=n*a}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const a=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gg:for(let l=0,u=a.length;l!==u;++l)a[l].evaluate(s),c[l].accumulateAdditive(o);break;case hf:default:for(let l=0,u=a.length;l!==u;++l)a[l].evaluate(s),c[l].accumulate(i,o)}}},_updateWeight:function(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t},_updateTimeScale:function(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t},_updateTime:function(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===nx;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===ex){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(a===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i},_setEndings:function(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=us,i.endingEnd=us):(e?i.endingStart=this.zeroSlopeAtStart?us:Ss:i.endingStart=Jc,t?i.endingEnd=this.zeroSlopeAtEnd?us:Ss:i.endingEnd=Jc)},_scheduleFading:function(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,a=s.sampleValues;return o[0]=r,a[0]=t,o[1]=r+e,a[1]=n,this}});function Dp(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Dp.prototype=Object.assign(Object.create(Wn.prototype),{constructor:Dp,_bindAction:function(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let u=0;u!==r;++u){const h=i[u],d=h.name;let f=l[d];if(f!==void 0)s[u]=f;else{if(f=s[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,d));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;f=new Xg(Kt.create(n,d,p),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,d),s[u]=f}o[u].resultBuffer=f.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e},_removeInactiveAction:function(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackAction:function(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_addInactiveBinding:function(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)},_removeInactiveBinding:function(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=t[t.length-1],c=e._cacheIndex;a._cacheIndex=c,t[c]=a,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_takeBackBinding:function(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r},_lendControlInterpolant:function(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new El(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?Rn.findByName(i,e):e;const o=s!==null?s.uuid:e;let a=this._actionsByClip[o],c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=hf),a!==void 0){const u=a.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new qg(this,s,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Rn.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=l,t[l]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});function Oh(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}Oh.prototype.clone=function(){return new Oh(this.value.clone===void 0?this.value:this.value.clone())};function Op(e,t,n){mn.call(this,e,t),this.meshPerAttribute=n||1}Op.prototype=Object.assign(Object.create(mn.prototype),{constructor:Op,isInstancedInterleavedBuffer:!0,copy:function(e){return mn.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){const t=mn.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){const t=mn.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function Xl(e,t,n,i){this.ray=new Qs(e,t),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new pf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Fp(e,t){return e.distance-t.distance}function Fh(e,t,n,i){if(e.layers.test(t.layers)&&e.raycast(t,n),i===!0){const r=e.children;for(let s=0,o=r.length;s<o;s++)Fh(r[s],t,n,!0)}}Object.assign(Xl.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(e,t,n){const i=n||[];return Fh(e,this,i,t),i.sort(Fp),i},intersectObjects:function(e,t,n){const i=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=e.length;r<s;r++)Fh(e[r],this,i,t);return i.sort(Fp),i}});class Np{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ke.clamp(n/this.radius,-1,1))),this}}function mS(e,t,n){return this.radius=e!==void 0?e:1,this.theta=t!==void 0?t:0,this.y=n!==void 0?n:0,this}Object.assign(mS.prototype,{set:function(e,t,n){return this.radius=e,this.theta=t,this.y=n,this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this},setFromVector3:function(e){return this.setFromCartesianCoords(e.x,e.y,e.z)},setFromCartesianCoords:function(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}});const kp=new ae;function Zg(e,t){this.min=e!==void 0?e:new ae(1/0,1/0),this.max=t!==void 0?t:new ae(-1/0,-1/0)}Object.assign(Zg.prototype,{set:function(e,t){return this.min.copy(e),this.max.copy(t),this},setFromPoints:function(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this},setFromCenterAndSize:function(e,t){const n=kp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.min.copy(e.min),this.max.copy(e.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new ae),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new ae),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)},expandByPoint:function(e){return this.min.min(e),this.max.max(e),this},expandByVector:function(e){return this.min.sub(e),this.max.add(e),this},expandByScalar:function(e){return this.min.addScalar(-e),this.max.addScalar(e),this},containsPoint:function(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)},containsBox:function(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y},getParameter:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new ae),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)},clampPoint:function(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new ae),t.copy(e).clamp(this.min,this.max)},distanceToPoint:function(e){return kp.copy(e).clamp(this.min,this.max).sub(e).length()},intersect:function(e){return this.min.max(e.min),this.max.min(e.max),this},union:function(e){return this.min.min(e.min),this.max.max(e.max),this},translate:function(e){return this.min.add(e),this.max.add(e),this},equals:function(e){return e.min.equals(this.min)&&e.max.equals(this.max)}});const Bp=new R,bc=new R;function Jg(e,t){this.start=e!==void 0?e:new R,this.end=t!==void 0?t:new R}Object.assign(Jg.prototype,{set:function(e,t){return this.start.copy(e),this.end.copy(t),this},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.start.copy(e.start),this.end.copy(e.end),this},getCenter:function(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new R),e.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new R),e.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new R),this.delta(t).multiplyScalar(e).add(this.start)},closestPointToPointParameter:function(e,t){Bp.subVectors(e,this.start),bc.subVectors(this.end,this.start);const n=bc.dot(bc);let r=bc.dot(Bp)/n;return t&&(r=ke.clamp(r,0,1)),r},closestPointToPoint:function(e,t,n){const i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new R),this.delta(n).multiplyScalar(i).add(this.start)},applyMatrix4:function(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this},equals:function(e){return e.start.equals(this.start)&&e.end.equals(this.end)}});function Ll(e){xe.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Ll.prototype=Object.create(xe.prototype);Ll.prototype.constructor=Ll;Ll.prototype.isImmediateRenderObject=!0;const Up=new R;function pa(e,t){xe.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new Te,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,a=32;s<a;s++,o++){const c=s/a*Math.PI*2,l=o/a*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(l),Math.sin(l),1)}n.setAttribute("position",new Me(i,3));const r=new St({fog:!1,toneMapped:!1});this.cone=new Ct(n,r),this.add(this.cone),this.update()}pa.prototype=Object.create(xe.prototype);pa.prototype.constructor=pa;pa.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};pa.prototype.update=function(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Up.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Up),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};const ki=new R,xc=new ze,Nu=new ze;function Kg(e){const t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Kg(e.children[n]));return t}function js(e){const t=Kg(e),n=new Te,i=[],r=[],s=new _e(0,0,1),o=new _e(0,1,0);for(let c=0;c<t.length;c++){const l=t[c];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Me(i,3)),n.setAttribute("color",new Me(r,3));const a=new St({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});Ct.call(this,n,a),this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}js.prototype=Object.create(Ct.prototype);js.prototype.constructor=js;js.prototype.isSkeletonHelper=!0;js.prototype.updateMatrixWorld=function(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Nu.getInverse(this.root.matrixWorld);for(let r=0,s=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(xc.multiplyMatrices(Nu,o.matrixWorld),ki.setFromMatrixPosition(xc),i.setXYZ(s,ki.x,ki.y,ki.z),xc.multiplyMatrices(Nu,o.parent.matrixWorld),ki.setFromMatrixPosition(xc),i.setXYZ(s+1,ki.x,ki.y,ki.z),s+=2)}n.getAttribute("position").needsUpdate=!0,xe.prototype.updateMatrixWorld.call(this,e)};function Xs(e,t,n){this.light=e,this.light.updateMatrixWorld(),this.color=n;const i=new Is(t,4,2),r=new Zt({wireframe:!0,fog:!1,toneMapped:!1});st.call(this,i,r),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}Xs.prototype=Object.create(st.prototype);Xs.prototype.constructor=Xs;Xs.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};Xs.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};const gS=new R,Hp=new _e,zp=new _e;function ma(e,t,n){xe.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new Ls(t);i.rotateY(Math.PI*.5),this.material=new Zt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),s=new Float32Array(r.count*3);i.setAttribute("color",new Ie(s,3)),this.add(new st(i,this.material)),this.update()}ma.prototype=Object.create(xe.prototype);ma.prototype.constructor=ma;ma.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};ma.prototype.update=function(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Hp.copy(this.light.color),zp.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Hp:zp;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(gS.setFromMatrixPosition(this.light.matrixWorld).negate())};function Pl(e,t,n,i){e=e||10,t=t||10,n=new _e(n!==void 0?n:4473924),i=new _e(i!==void 0?i:8947848);const r=t/2,s=e/t,o=e/2,a=[],c=[];for(let h=0,d=0,f=-o;h<=t;h++,f+=s){a.push(-o,0,f,o,0,f),a.push(f,0,-o,f,0,o);const p=h===r?n:i;p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3,p.toArray(c,d),d+=3}const l=new Te;l.setAttribute("position",new Me(a,3)),l.setAttribute("color",new Me(c,3));const u=new St({vertexColors:!0,toneMapped:!1});Ct.call(this,l,u),this.type="GridHelper"}Pl.prototype=Object.create(Ct.prototype);Pl.prototype.constructor=Pl;function Nh(e,t,n,i,r,s){e=e||10,t=t||16,n=n||8,i=i||64,r=new _e(r!==void 0?r:4473924),s=new _e(s!==void 0?s:8947848);const o=[],a=[];for(let u=0;u<=t;u++){const h=u/t*(Math.PI*2),d=Math.sin(h)*e,f=Math.cos(h)*e;o.push(0,0,0),o.push(d,0,f);const p=u&1?r:s;a.push(p.r,p.g,p.b),a.push(p.r,p.g,p.b)}for(let u=0;u<=n;u++){const h=u&1?r:s,d=e-e/n*u;for(let f=0;f<i;f++){let p=f/i*(Math.PI*2),y=Math.sin(p)*d,_=Math.cos(p)*d;o.push(y,0,_),a.push(h.r,h.g,h.b),p=(f+1)/i*(Math.PI*2),y=Math.sin(p)*d,_=Math.cos(p)*d,o.push(y,0,_),a.push(h.r,h.g,h.b)}}const c=new Te;c.setAttribute("position",new Me(o,3)),c.setAttribute("color",new Me(a,3));const l=new St({vertexColors:!0,toneMapped:!1});Ct.call(this,c,l),this.type="PolarGridHelper"}Nh.prototype=Object.create(Ct.prototype);Nh.prototype.constructor=Nh;const Gp=new R,wc=new R,Vp=new R;function Ys(e,t,n){xe.call(this),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new Te;i.setAttribute("position",new Me([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new St({fog:!1,toneMapped:!1});this.lightPlane=new _n(i,r),this.add(this.lightPlane),i=new Te,i.setAttribute("position",new Me([0,0,0,0,0,1],3)),this.targetLine=new _n(i,r),this.add(this.targetLine),this.update()}Ys.prototype=Object.create(xe.prototype);Ys.prototype.constructor=Ys;Ys.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};Ys.prototype.update=function(){Gp.setFromMatrixPosition(this.light.matrixWorld),wc.setFromMatrixPosition(this.light.target.matrixWorld),Vp.subVectors(wc,Gp),this.lightPlane.lookAt(wc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(wc),this.targetLine.scale.z=Vp.length()};const Mc=new R,xt=new xi;function ga(e){const t=new Te,n=new St({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},o=new _e(16755200),a=new _e(16711680),c=new _e(43775),l=new _e(16777215),u=new _e(3355443);h("n1","n2",o),h("n2","n4",o),h("n4","n3",o),h("n3","n1",o),h("f1","f2",o),h("f2","f4",o),h("f4","f3",o),h("f3","f1",o),h("n1","f1",o),h("n2","f2",o),h("n3","f3",o),h("n4","f4",o),h("p","n1",a),h("p","n2",a),h("p","n3",a),h("p","n4",a),h("u1","u2",c),h("u2","u3",c),h("u3","u1",c),h("c","t",l),h("p","c",u),h("cn1","cn2",u),h("cn3","cn4",u),h("cf1","cf2",u),h("cf3","cf4",u);function h(f,p,y){d(f,y),d(p,y)}function d(f,p){i.push(0,0,0),r.push(p.r,p.g,p.b),s[f]===void 0&&(s[f]=[]),s[f].push(i.length/3-1)}t.setAttribute("position",new Me(i,3)),t.setAttribute("color",new Me(r,3)),Ct.call(this,t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}ga.prototype=Object.create(Ct.prototype);ga.prototype.constructor=ga;ga.prototype.update=function(){const e=this.geometry,t=this.pointMap,n=1,i=1;xt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),At("c",t,e,xt,0,0,-1),At("t",t,e,xt,0,0,1),At("n1",t,e,xt,-n,-i,-1),At("n2",t,e,xt,n,-i,-1),At("n3",t,e,xt,-n,i,-1),At("n4",t,e,xt,n,i,-1),At("f1",t,e,xt,-n,-i,1),At("f2",t,e,xt,n,-i,1),At("f3",t,e,xt,-n,i,1),At("f4",t,e,xt,n,i,1),At("u1",t,e,xt,n*.7,i*1.1,-1),At("u2",t,e,xt,-n*.7,i*1.1,-1),At("u3",t,e,xt,0,i*2,-1),At("cf1",t,e,xt,-n,0,1),At("cf2",t,e,xt,n,0,1),At("cf3",t,e,xt,0,-i,1),At("cf4",t,e,xt,0,i,1),At("cn1",t,e,xt,-n,0,-1),At("cn2",t,e,xt,n,0,-1),At("cn3",t,e,xt,0,-i,-1),At("cn4",t,e,xt,0,i,-1),e.getAttribute("position").needsUpdate=!0};function At(e,t,n,i,r,s,o){Mc.set(r,s,o).unproject(i);const a=t[e];if(a!==void 0){const c=n.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Mc.x,Mc.y,Mc.z)}}const Ec=new jn;function qs(e,t){this.object=e,t===void 0&&(t=16776960);const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Te;r.setIndex(new Ie(n,1)),r.setAttribute("position",new Ie(i,3)),Ct.call(this,r,new St({color:t,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}qs.prototype=Object.create(Ct.prototype);qs.prototype.constructor=qs;qs.prototype.update=function(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ec.setFromObject(this.object),Ec.isEmpty())return;const t=Ec.min,n=Ec.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()};qs.prototype.setFromObject=function(e){return this.object=e,this.update(),this};qs.prototype.copy=function(e){return Ct.prototype.copy.call(this,e),this.object=e.object,this};function Cl(e,t){this.type="Box3Helper",this.box=e,t===void 0&&(t=16776960);const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Te;r.setIndex(new Ie(n,1)),r.setAttribute("position",new Me(i,3)),Ct.call(this,r,new St({color:t,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Cl.prototype=Object.create(Ct.prototype);Cl.prototype.constructor=Cl;Cl.prototype.updateMatrixWorld=function(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),xe.prototype.updateMatrixWorld.call(this,e))};function Il(e,t,n){this.plane=e,this.size=t===void 0?1:t;const i=n!==void 0?n:16776960,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],s=new Te;s.setAttribute("position",new Me(r,3)),s.computeBoundingSphere(),_n.call(this,s,new St({color:i,toneMapped:!1})),this.type="PlaneHelper";const o=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],a=new Te;a.setAttribute("position",new Me(o,3)),a.computeBoundingSphere(),this.add(new st(a,new Zt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}Il.prototype=Object.create(_n.prototype);Il.prototype.constructor=Il;Il.prototype.updateMatrixWorld=function(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?kt:Js,this.lookAt(this.plane.normal),xe.prototype.updateMatrixWorld.call(this,e)};const Wp=new R;let Sc,ku;function Dr(e,t,n,i,r,s){xe.call(this),this.type="ArrowHelper",e===void 0&&(e=new R(0,0,1)),t===void 0&&(t=new R(0,0,0)),n===void 0&&(n=1),i===void 0&&(i=16776960),r===void 0&&(r=.2*n),s===void 0&&(s=.2*r),Sc===void 0&&(Sc=new Te,Sc.setAttribute("position",new Me([0,0,0,0,1,0],3)),ku=new ir(0,.5,1,5,1),ku.translate(0,-.5,0)),this.position.copy(t),this.line=new _n(Sc,new St({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new st(ku,new Zt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,s)}Dr.prototype=Object.create(xe.prototype);Dr.prototype.constructor=Dr;Dr.prototype.setDirection=function(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Wp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Wp,t)}};Dr.prototype.setLength=function(e,t,n){t===void 0&&(t=.2*e),n===void 0&&(n=.2*t),this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()};Dr.prototype.setColor=function(e){this.line.material.color.set(e),this.cone.material.color.set(e)};Dr.prototype.copy=function(e){return xe.prototype.copy.call(this,e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this};function kh(e){e=e||1;const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Te;i.setAttribute("position",new Me(t,3)),i.setAttribute("color",new Me(n,3));const r=new St({vertexColors:!0,toneMapped:!1});Ct.call(this,i,r),this.type="AxesHelper"}kh.prototype=Object.create(Ct.prototype);kh.prototype.constructor=kh;const bs=4,Ji=8,Jn=Math.pow(2,Ji),Qg=[.125,.215,.35,.446,.526,.582],$g=Ji-bs+1+Qg.length,cs=20,ni={[ln]:0,[Ts]:1,[df]:2,[yg]:3,[_g]:4,[vg]:5,[ff]:6},Bu=new Ws,{_lodPlanes:go,_sizeLods:jp,_sigmas:Tc}=_S();let Uu=null;const yr=(1+Math.sqrt(5))/2,ss=1/yr,Xp=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,yr,ss),new R(0,yr,-ss),new R(ss,0,yr),new R(-ss,0,yr),new R(yr,ss,0),new R(-yr,ss,0)];function Yp(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=vS(cs),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}Yp.prototype={constructor:Yp,fromScene:function(e,t=0,n=.1,i=100){Uu=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r},fromEquirectangular:function(e){return this._fromTexture(e)},fromCubemap:function(e){return this._fromTexture(e)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=Jp(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=Zp(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<go.length;e++)go[e].dispose()},_cleanup:function(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Uu),e.scissorTest=!1,Ac(e,0,0,e.width,e.height)},_fromTexture:function(e){Uu=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t},_allocateTargets:function(e){const t={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:wa,format:yb,encoding:yS(e)?e.encoding:df,depthBuffer:!1,stencilBuffer:!1},n=qp(t);return n.depthBuffer=!e,this._pingPongRenderTarget=qp(t),n},_compileMaterial:function(e){const t=new st(go[0],e);this._renderer.compile(t,Bu)},_sceneToCubeUV:function(e,t,n,i){const o=new wt(90,1,t,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.outputEncoding,h=l.toneMapping,d=l.getClearColor(),f=l.getClearAlpha();l.toneMapping=ys,l.outputEncoding=ln;let p=e.background;if(p&&p.isColor){p.convertSRGBToLinear();const y=Math.max(p.r,p.g,p.b),_=Math.min(Math.max(Math.ceil(Math.log2(y)),-128),127);p=p.multiplyScalar(Math.pow(2,-_));const m=(_+128)/255;l.setClearColor(p,m),e.background=null}for(let y=0;y<6;y++){const _=y%3;_==0?(o.up.set(0,a[y],0),o.lookAt(c[y],0,0)):_==1?(o.up.set(0,0,a[y]),o.lookAt(0,c[y],0)):(o.up.set(0,a[y],0),o.lookAt(0,0,c[y])),Ac(i,_*Jn,y>2?Jn:0,Jn,Jn),l.setRenderTarget(i),l.render(e,o)}l.toneMapping=h,l.outputEncoding=u,l.setClearColor(d,f)},_textureToCubeUV:function(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Jp()):this._equirectShader==null&&(this._equirectShader=Zp());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new st(go[0],i),s=i.uniforms;s.envMap.value=e,e.isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),s.inputEncoding.value=ni[e.encoding],s.outputEncoding.value=ni[t.texture.encoding],Ac(t,0,0,3*Jn,2*Jn),n.setRenderTarget(t),n.render(r,Bu)},_applyPMREM:function(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<$g;i++){const r=Math.sqrt(Tc[i]*Tc[i]-Tc[i-1]*Tc[i-1]),s=Xp[(i-1)%Xp.length];this._blur(e,i-1,i,r,s)}t.autoClear=n},_blur:function(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)},_halfBlur:function(e,t,n,i,r,s,o){const a=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new st(go[i],c),h=c.uniforms,d=jp[n]-1,f=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),p=r/f,y=isFinite(r)?1+Math.floor(l*p):cs;y>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${cs}`);const _=[];let m=0;for(let x=0;x<cs;++x){const E=x/p,w=Math.exp(-E*E/2);_.push(w),x==0?m+=w:x<y&&(m+=2*w)}for(let x=0;x<_.length;x++)_[x]=_[x]/m;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=_,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o),h.dTheta.value=f,h.mipInt.value=Ji-n,h.inputEncoding.value=ni[e.texture.encoding],h.outputEncoding.value=ni[e.texture.encoding];const g=jp[i],v=3*Math.max(0,Jn-2*g),b=(i===0?0:2*Jn)+2*g*(i>Ji-bs?i-Ji+bs:0);Ac(t,v,b,3*g,2*g),a.setRenderTarget(t),a.render(u,Bu)}};function yS(e){return e===void 0||e.type!==wa?!1:e.encoding===ln||e.encoding===Ts||e.encoding===ff}function _S(){const e=[],t=[],n=[];let i=Ji;for(let r=0;r<$g;r++){const s=Math.pow(2,i);t.push(s);let o=1/s;r>Ji-bs?o=Qg[r-Ji+bs-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,p=2,y=1,_=new Float32Array(f*d*h),m=new Float32Array(p*d*h),g=new Float32Array(y*d*h);for(let b=0;b<h;b++){const x=b%3*2/3-1,E=b>2?0:-1,w=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];_.set(w,f*d*b),m.set(u,p*d*b);const P=[b,b,b,b,b,b];g.set(P,y*d*b)}const v=new Te;v.setAttribute("position",new Ie(_,f)),v.setAttribute("uv",new Ie(m,p)),v.setAttribute("faceIndex",new Ie(g,y)),e.push(v),i>bs&&i--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}function qp(e){const t=new Pn(3*Jn,3*Jn,e);return t.texture.mapping=xa,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function Ac(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function vS(e){const t=new Float32Array(e),n=new R(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:ni[ln]},outputEncoding:{value:ni[ln]}},vertexShader:vf(),fragmentShader:`

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

			${bf()}

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Zp(){const e=new ae(1,1);return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:e},inputEncoding:{value:ni[ln]},outputEncoding:{value:ni[ln]}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${bf()}

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Jp(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:ni[ln]},outputEncoding:{value:ni[ln]}},vertexShader:vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${bf()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function vf(){return`

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
	`}function bf(){return`

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
	`}Ce.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(Ce.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(ji.prototype,{createPointsGeometry:function(e){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getPoints(e);return this.createGeometry(t)},createSpacedPointsGeometry:function(e){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=this.getSpacedPoints(e);return this.createGeometry(t)},createGeometry:function(e){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const t=new Ne;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.vertices.push(new R(r.x,r.y,r.z||0))}return t}});Object.assign(ei.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});Object.create(bn.prototype);Object.create(bn.prototype);function ey(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),bn.call(this,e),this.type="catmullrom"}ey.prototype=Object.create(bn.prototype);Object.assign(ey.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Pl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};js.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(qe.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),vr.extractUrlBase(e)}});qe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(Ch.prototype,{setTexturePath:function(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}});Object.assign(Zg.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(jn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(ui.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});Ma.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};Jg.prototype.center=function(e){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(e)};Object.assign(ke,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),ke.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),ke.ceilPowerOfTwo(e)}});Object.assign(rn.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(ze.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,i,n,r,s)}});Qn.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};Pt.prototype.multiplyVector3=function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)};Object.assign(Qs.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(Gt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(Gt,{barycoordFromPoint:function(e,t,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Gt.getBarycoord(e,t,n,i,r)},normal:function(e,t,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Gt.getNormal(e,t,n,i)}});Object.assign(Er.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Cs(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ds(this,e)}});Object.assign(ae.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(R.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(nt.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ne.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(e){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.assign(xe.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(xe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(st.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(st.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),ix},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(el.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(nl.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});tl.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(Ce.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});wt.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(pt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(Ie.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Uo},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Uo)}}});Object.assign(Ie.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Uo:Wl),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Te.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new Ie(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(Te.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Rl.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(Xl.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(mn.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Uo},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(mn.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Uo:Wl),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(wi.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(Oh.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(Fe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new _e}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===fg}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(Dn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Mi.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}});Object.defineProperties(sn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(Ea.prototype,{clearTarget:function(e,t,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,i)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Ea.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?Ts:ln}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Ig.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Pn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(da.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Dh().load(e,function(i){t.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});jg.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Vo.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};Tr.crossOrigin=void 0;Tr.loadTexture=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Sl;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};Tr.loadTextureCube=function(e,t,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new xh;r.setCrossOrigin(this.crossOrigin);const s=r.load(e,n,void 0,i);return t&&(s.mapping=t),s};Tr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Tr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};(function(){function e(T){qe.call(this,T),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.pluginCallbacks=[],this.register(function(M){return new o(M)}),this.register(function(M){return new c(M)}),this.register(function(M){return new a(M)})}e.prototype=Object.assign(Object.create(qe.prototype),{constructor:e,load:function(T,M,O,C){var U=this,z;this.resourcePath!==""?z=this.resourcePath:this.path!==""?z=this.path:z=vr.extractUrlBase(T),U.manager.itemStart(T);var L=function(Y){C?C(Y):console.error(Y),U.manager.itemError(T),U.manager.itemEnd(T)},H=new un(U.manager);H.setPath(this.path),H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),U.crossOrigin==="use-credentials"&&H.setWithCredentials(!0),H.load(T,function(Y){try{U.parse(Y,z,function(K){M(K),U.manager.itemEnd(T)},L)}catch(K){L(K)}},O,L)},setDRACOLoader:function(T){return this.dracoLoader=T,this},setDDSLoader:function(T){return this.ddsLoader=T,this},setKTX2Loader:function(T){return this.ktx2Loader=T,this},register:function(T){return this.pluginCallbacks.indexOf(T)===-1&&this.pluginCallbacks.push(T),this},unregister:function(T){return this.pluginCallbacks.indexOf(T)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(T),1),this},parse:function(T,M,O,C){var U,z={},L={};if(typeof T=="string")U=T;else{var H=vr.decodeText(new Uint8Array(T,0,4));if(H===l){try{z[n.KHR_BINARY_GLTF]=new d(T)}catch(Q){C&&C(Q);return}U=z[n.KHR_BINARY_GLTF].content}else U=vr.decodeText(new Uint8Array(T))}var Y=JSON.parse(U);if(Y.asset===void 0||Y.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}var K=new fe(Y,{path:M||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader});K.fileLoader.setRequestHeader(this.requestHeader);for(var J=0;J<this.pluginCallbacks.length;J++){var ne=this.pluginCallbacks[J](K);L[ne.name]=ne,z[ne.name]=!0}if(Y.extensionsUsed)for(var J=0;J<Y.extensionsUsed.length;++J){var S=Y.extensionsUsed[J],D=Y.extensionsRequired||[];switch(S){case n.KHR_LIGHTS_PUNCTUAL:z[S]=new r(Y);break;case n.KHR_MATERIALS_UNLIT:z[S]=new s;break;case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:z[S]=new _;break;case n.KHR_DRACO_MESH_COMPRESSION:z[S]=new f(Y,this.dracoLoader);break;case n.MSFT_TEXTURE_DDS:z[S]=new i(this.ddsLoader);break;case n.KHR_TEXTURE_TRANSFORM:z[S]=new p;break;case n.KHR_MESH_QUANTIZATION:z[S]=new m;break;default:D.indexOf(S)>=0&&L[S]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+S+'".')}}K.setExtensions(z),K.setPlugins(L),K.parse(O,C)}});function t(){var T={};return{get:function(M){return T[M]},add:function(M,O){T[M]=O},remove:function(M){delete T[M]},removeAll:function(){T={}}}}var n={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function i(T){if(!T)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=n.MSFT_TEXTURE_DDS,this.ddsLoader=T}function r(T){this.name=n.KHR_LIGHTS_PUNCTUAL;var M=T.extensions&&T.extensions[n.KHR_LIGHTS_PUNCTUAL]||{};this.lightDefs=M.lights||[]}r.prototype.loadLight=function(T){var M=this.lightDefs[T],O,C=new _e(16777215);M.color!==void 0&&C.fromArray(M.color);var U=M.range!==void 0?M.range:0;switch(M.type){case"directional":O=new fa(C),O.target.position.set(0,0,-1),O.add(O.target);break;case"point":O=new ha(C),O.distance=U;break;case"spot":O=new Tl(C),O.distance=U,M.spot=M.spot||{},M.spot.innerConeAngle=M.spot.innerConeAngle!==void 0?M.spot.innerConeAngle:0,M.spot.outerConeAngle=M.spot.outerConeAngle!==void 0?M.spot.outerConeAngle:Math.PI/4,O.angle=M.spot.outerConeAngle,O.penumbra=1-M.spot.innerConeAngle/M.spot.outerConeAngle,O.target.position.set(0,0,-1),O.add(O.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+M.type+'".')}return O.position.set(0,0,0),O.decay=2,M.intensity!==void 0&&(O.intensity=M.intensity),O.name=M.name||"light_"+T,Promise.resolve(O)};function s(){this.name=n.KHR_MATERIALS_UNLIT}s.prototype.getMaterialType=function(){return Zt},s.prototype.extendParams=function(T,M,O){var C=[];T.color=new _e(1,1,1),T.opacity=1;var U=M.pbrMetallicRoughness;if(U){if(Array.isArray(U.baseColorFactor)){var z=U.baseColorFactor;T.color.fromArray(z),T.opacity=z[3]}U.baseColorTexture!==void 0&&C.push(O.assignTexture(T,"map",U.baseColorTexture))}return Promise.all(C)};function o(T){this.parser=T,this.name=n.KHR_MATERIALS_CLEARCOAT}o.prototype.getMaterialType=function(){return Mi},o.prototype.extendMaterialParams=function(T,M){var O=this.parser,C=O.json.materials[T];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();var U=[],z=C.extensions[this.name];if(z.clearcoatFactor!==void 0&&(M.clearcoat=z.clearcoatFactor),z.clearcoatTexture!==void 0&&U.push(O.assignTexture(M,"clearcoatMap",z.clearcoatTexture)),z.clearcoatRoughnessFactor!==void 0&&(M.clearcoatRoughness=z.clearcoatRoughnessFactor),z.clearcoatRoughnessTexture!==void 0&&U.push(O.assignTexture(M,"clearcoatRoughnessMap",z.clearcoatRoughnessTexture)),z.clearcoatNormalTexture!==void 0&&(U.push(O.assignTexture(M,"clearcoatNormalMap",z.clearcoatNormalTexture)),z.clearcoatNormalTexture.scale!==void 0)){var L=z.clearcoatNormalTexture.scale;M.clearcoatNormalScale=new ae(L,L)}return Promise.all(U)};function a(T){this.parser=T,this.name=n.KHR_MATERIALS_TRANSMISSION}a.prototype.getMaterialType=function(){return Mi},a.prototype.extendMaterialParams=function(T,M){var O=this.parser,C=O.json.materials[T];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();var U=[],z=C.extensions[this.name];return z.transmissionFactor!==void 0&&(M.transmission=z.transmissionFactor),z.transmissionTexture!==void 0&&U.push(O.assignTexture(M,"transmissionMap",z.transmissionTexture)),Promise.all(U)};function c(T){this.parser=T,this.name=n.KHR_TEXTURE_BASISU}c.prototype.loadTexture=function(T){var M=this.parser,O=M.json,C=O.textures[T];if(!C.extensions||!C.extensions[this.name])return null;var U=C.extensions[this.name],z=O.images[U.source],L=M.options.ktx2Loader;if(!L)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return M.loadTextureImage(T,z,L)};var l="glTF",u=12,h={JSON:1313821514,BIN:5130562};function d(T){this.name=n.KHR_BINARY_GLTF,this.content=null,this.body=null;var M=new DataView(T,0,u);if(this.header={magic:vr.decodeText(new Uint8Array(T.slice(0,4))),version:M.getUint32(4,!0),length:M.getUint32(8,!0)},this.header.magic!==l)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var O=new DataView(T,u),C=0;C<O.byteLength;){var U=O.getUint32(C,!0);C+=4;var z=O.getUint32(C,!0);if(C+=4,z===h.JSON){var L=new Uint8Array(T,u+C,U);this.content=vr.decodeText(L)}else if(z===h.BIN){var H=u+C;this.body=T.slice(H,H+U)}C+=U}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}function f(T,M){if(!M)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=n.KHR_DRACO_MESH_COMPRESSION,this.json=T,this.dracoLoader=M,this.dracoLoader.preload()}f.prototype.decodePrimitive=function(T,M){var O=this.json,C=this.dracoLoader,U=T.extensions[this.name].bufferView,z=T.extensions[this.name].attributes,L={},H={},Y={};for(var K in z){var J=P[K]||K.toLowerCase();L[J]=z[K]}for(K in T.attributes){var J=P[K]||K.toLowerCase();if(z[K]!==void 0){var ne=O.accessors[T.attributes[K]],S=b[ne.componentType];Y[J]=S,H[J]=ne.normalized===!0}}return M.getDependency("bufferView",U).then(function(D){return new Promise(function(Q){C.decodeDracoFile(D,function(ee){for(var W in ee.attributes){var oe=ee.attributes[W],N=H[W];N!==void 0&&(oe.normalized=N)}Q(ee)},L,Y)})})};function p(){this.name=n.KHR_TEXTURE_TRANSFORM}p.prototype.extendTexture=function(T,M){return T=T.clone(),M.offset!==void 0&&T.offset.fromArray(M.offset),M.rotation!==void 0&&(T.rotation=M.rotation),M.scale!==void 0&&T.repeat.fromArray(M.scale),M.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),T.needsUpdate=!0,T};function y(T){nn.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var M=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),O=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),C=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),U=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),z=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb;","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor.rgb;"].join(`
`),L={specular:{value:new _e().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=L,this.onBeforeCompile=function(H){for(var Y in L)H.uniforms[Y]=L[Y];H.fragmentShader=H.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;"),H.fragmentShader=H.fragmentShader.replace("uniform float metalness;","uniform float glossiness;"),H.fragmentShader=H.fragmentShader.replace("#include <roughnessmap_pars_fragment>",M),H.fragmentShader=H.fragmentShader.replace("#include <metalnessmap_pars_fragment>",O),H.fragmentShader=H.fragmentShader.replace("#include <roughnessmap_fragment>",C),H.fragmentShader=H.fragmentShader.replace("#include <metalnessmap_fragment>",U),H.fragmentShader=H.fragmentShader.replace("#include <lights_physical_fragment>",z)},Object.defineProperties(this,{specular:{get:function(){return L.specular.value},set:function(H){L.specular.value=H}},specularMap:{get:function(){return L.specularMap.value},set:function(H){L.specularMap.value=H}},glossiness:{get:function(){return L.glossiness.value},set:function(H){L.glossiness.value=H}},glossinessMap:{get:function(){return L.glossinessMap.value},set:function(H){L.glossinessMap.value=H,H?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_ROUGHNESSMAP=""):(delete this.defines.USE_ROUGHNESSMAP,delete this.defines.USE_GLOSSINESSMAP)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(T)}y.prototype=Object.create(nn.prototype),y.prototype.constructor=y,y.prototype.copy=function(T){return nn.prototype.copy.call(this,T),this.specularMap=T.specularMap,this.specular.copy(T.specular),this.glossinessMap=T.glossinessMap,this.glossiness=T.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this};function _(){return{name:n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return y},extendParams:function(T,M,O){var C=M.extensions[this.name];T.color=new _e(1,1,1),T.opacity=1;var U=[];if(Array.isArray(C.diffuseFactor)){var z=C.diffuseFactor;T.color.fromArray(z),T.opacity=z[3]}if(C.diffuseTexture!==void 0&&U.push(O.assignTexture(T,"map",C.diffuseTexture)),T.emissive=new _e(0,0,0),T.glossiness=C.glossinessFactor!==void 0?C.glossinessFactor:1,T.specular=new _e(1,1,1),Array.isArray(C.specularFactor)&&T.specular.fromArray(C.specularFactor),C.specularGlossinessTexture!==void 0){var L=C.specularGlossinessTexture;U.push(O.assignTexture(T,"glossinessMap",L)),U.push(O.assignTexture(T,"specularMap",L))}return Promise.all(U)},createMaterial:function(T){var M=new y(T);return M.fog=!0,M.color=T.color,M.map=T.map===void 0?null:T.map,M.lightMap=null,M.lightMapIntensity=1,M.aoMap=T.aoMap===void 0?null:T.aoMap,M.aoMapIntensity=1,M.emissive=T.emissive,M.emissiveIntensity=1,M.emissiveMap=T.emissiveMap===void 0?null:T.emissiveMap,M.bumpMap=T.bumpMap===void 0?null:T.bumpMap,M.bumpScale=1,M.normalMap=T.normalMap===void 0?null:T.normalMap,M.normalMapType=Br,T.normalScale&&(M.normalScale=T.normalScale),M.displacementMap=null,M.displacementScale=1,M.displacementBias=0,M.specularMap=T.specularMap===void 0?null:T.specularMap,M.specular=T.specular,M.glossinessMap=T.glossinessMap===void 0?null:T.glossinessMap,M.glossiness=T.glossiness,M.alphaMap=null,M.envMap=T.envMap===void 0?null:T.envMap,M.envMapIntensity=1,M.refractionRatio=.98,M}}}function m(){this.name=n.KHR_MESH_QUANTIZATION}function g(T,M,O,C){cn.call(this,T,M,O,C)}g.prototype=Object.create(cn.prototype),g.prototype.constructor=g,g.prototype.copySampleValue_=function(T){for(var M=this.resultBuffer,O=this.sampleValues,C=this.valueSize,U=T*C*3+C,z=0;z!==C;z++)M[z]=O[U+z];return M},g.prototype.beforeStart_=g.prototype.copySampleValue_,g.prototype.afterEnd_=g.prototype.copySampleValue_,g.prototype.interpolate_=function(T,M,O,C){for(var U=this.resultBuffer,z=this.sampleValues,L=this.valueSize,H=L*2,Y=L*3,K=C-M,J=(O-M)/K,ne=J*J,S=ne*J,D=T*Y,Q=D-Y,ee=-2*S+3*ne,W=S-ne,oe=1-ee,N=W-ne+J,le=0;le!==L;le++){var ce=z[Q+le+L],ye=z[Q+le+H]*K,re=z[D+le+L],q=z[D+le]*K;U[le]=oe*ce+N*ye+ee*re+W*q}return U};var v={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},b={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},x={9728:Ot,9729:Bt,9984:Xc,9985:uf,9986:Yc,9987:Es},E={33071:tn,33648:No,10497:Mr},w={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},P={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},A={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z={CUBICSPLINE:void 0,LINEAR:vs,STEP:Bo},k={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},X={"image/png":gn,"image/jpeg":bi};function G(T,M){return typeof T!="string"||T===""?"":(/^https?:\/\//i.test(M)&&/^\//.test(T)&&(M=M.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(T)||/^data:.*,.*$/i.test(T)||/^blob:.*$/i.test(T)?T:M+T)}function V(T){return T.DefaultMaterial===void 0&&(T.DefaultMaterial=new nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Js})),T.DefaultMaterial}function I(T,M,O){for(var C in O.extensions)T[C]===void 0&&(M.userData.gltfExtensions=M.userData.gltfExtensions||{},M.userData.gltfExtensions[C]=O.extensions[C])}function B(T,M){M.extras!==void 0&&(typeof M.extras=="object"?Object.assign(T.userData,M.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+M.extras))}function j(T,M,O){for(var C=!1,U=!1,z=0,L=M.length;z<L;z++){var H=M[z];if(H.POSITION!==void 0&&(C=!0),H.NORMAL!==void 0&&(U=!0),C&&U)break}if(!C&&!U)return Promise.resolve(T);for(var Y=[],K=[],z=0,L=M.length;z<L;z++){var H=M[z];if(C){var J=H.POSITION!==void 0?O.getDependency("accessor",H.POSITION):T.attributes.position;Y.push(J)}if(U){var J=H.NORMAL!==void 0?O.getDependency("accessor",H.NORMAL):T.attributes.normal;K.push(J)}}return Promise.all([Promise.all(Y),Promise.all(K)]).then(function(ne){var S=ne[0],D=ne[1];return C&&(T.morphAttributes.position=S),U&&(T.morphAttributes.normal=D),T.morphTargetsRelative=!0,T})}function ie(T,M){if(T.updateMorphTargets(),M.weights!==void 0)for(var O=0,C=M.weights.length;O<C;O++)T.morphTargetInfluences[O]=M.weights[O];if(M.extras&&Array.isArray(M.extras.targetNames)){var U=M.extras.targetNames;if(T.morphTargetInfluences.length===U.length){T.morphTargetDictionary={};for(var O=0,C=U.length;O<C;O++)T.morphTargetDictionary[U[O]]=O}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function me(T){var M=T.extensions&&T.extensions[n.KHR_DRACO_MESH_COMPRESSION],O;return M?O="draco:"+M.bufferView+":"+M.indices+":"+ge(M.attributes):O=T.indices+":"+ge(T.attributes)+":"+T.mode,O}function ge(T){for(var M="",O=Object.keys(T).sort(),C=0,U=O.length;C<U;C++)M+=O[C]+":"+T[O[C]]+";";return M}function fe(T,M){this.json=T||{},this.extensions={},this.plugins={},this.options=M||{},this.cache=new t,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Ih(this.options.manager):this.textureLoader=new Sl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new un(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}fe.prototype.setExtensions=function(T){this.extensions=T},fe.prototype.setPlugins=function(T){this.plugins=T},fe.prototype.parse=function(T,M){var O=this,C=this.json,U=this.extensions;this.cache.removeAll(),this._markDefs(),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then(function(z){var L={scene:z[0][C.scene||0],scenes:z[0],animations:z[1],cameras:z[2],asset:C.asset,parser:O,userData:{}};I(U,L,C),B(L,C),T(L)}).catch(M)},fe.prototype._markDefs=function(){for(var T=this.json.nodes||[],M=this.json.skins||[],O=this.json.meshes||[],C=0,U=M.length;C<U;C++)for(var z=M[C].joints,L=0,H=z.length;L<H;L++)T[z[L]].isBone=!0;for(var Y=0,K=T.length;Y<K;Y++){var J=T[Y];J.mesh!==void 0&&(this._addNodeRef(this.meshCache,J.mesh),J.skin!==void 0&&(O[J.mesh].isSkinnedMesh=!0)),J.camera!==void 0&&this._addNodeRef(this.cameraCache,J.camera),J.extensions&&J.extensions[n.KHR_LIGHTS_PUNCTUAL]&&J.extensions[n.KHR_LIGHTS_PUNCTUAL].light!==void 0&&this._addNodeRef(this.lightCache,J.extensions[n.KHR_LIGHTS_PUNCTUAL].light)}},fe.prototype._addNodeRef=function(T,M){M!==void 0&&(T.refs[M]===void 0&&(T.refs[M]=T.uses[M]=0),T.refs[M]++)},fe.prototype._getNodeRef=function(T,M,O){if(T.refs[M]<=1)return O;var C=O.clone();return C.name+="_instance_"+T.uses[M]++,C},fe.prototype._invokeOne=function(T){var M=Object.values(this.plugins);M.push(this);for(var O=0;O<M.length;O++){var C=T(M[O]);if(C)return C}},fe.prototype._invokeAll=function(T){var M=Object.values(this.plugins);M.unshift(this);for(var O=[],C=0;C<M.length;C++)O.push(T(M[C]));return Promise.all(O)},fe.prototype.getDependency=function(T,M){var O=T+":"+M,C=this.cache.get(O);if(!C){switch(T){case"scene":C=this.loadScene(M);break;case"node":C=this.loadNode(M);break;case"mesh":C=this._invokeOne(function(U){return U.loadMesh&&U.loadMesh(M)});break;case"accessor":C=this.loadAccessor(M);break;case"bufferView":C=this._invokeOne(function(U){return U.loadBufferView&&U.loadBufferView(M)});break;case"buffer":C=this.loadBuffer(M);break;case"material":C=this._invokeOne(function(U){return U.loadMaterial&&U.loadMaterial(M)});break;case"texture":C=this._invokeOne(function(U){return U.loadTexture&&U.loadTexture(M)});break;case"skin":C=this.loadSkin(M);break;case"animation":C=this.loadAnimation(M);break;case"camera":C=this.loadCamera(M);break;case"light":C=this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(M);break;default:throw new Error("Unknown type: "+T)}this.cache.add(O,C)}return C},fe.prototype.getDependencies=function(T){var M=this.cache.get(T);if(!M){var O=this,C=this.json[T+(T==="mesh"?"es":"s")]||[];M=Promise.all(C.map(function(U,z){return O.getDependency(T,z)})),this.cache.add(T,M)}return M},fe.prototype.loadBuffer=function(T){var M=this.json.buffers[T],O=this.fileLoader;if(M.type&&M.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+M.type+" buffer type is not supported.");if(M.uri===void 0&&T===0)return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);var C=this.options;return new Promise(function(U,z){O.load(G(M.uri,C.path),U,void 0,function(){z(new Error('THREE.GLTFLoader: Failed to load buffer "'+M.uri+'".'))})})},fe.prototype.loadBufferView=function(T){var M=this.json.bufferViews[T];return this.getDependency("buffer",M.buffer).then(function(O){var C=M.byteLength||0,U=M.byteOffset||0;return O.slice(U,U+C)})},fe.prototype.loadAccessor=function(T){var M=this,O=this.json,C=this.json.accessors[T];if(C.bufferView===void 0&&C.sparse===void 0)return Promise.resolve(null);var U=[];return C.bufferView!==void 0?U.push(this.getDependency("bufferView",C.bufferView)):U.push(null),C.sparse!==void 0&&(U.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),U.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(U).then(function(z){var L=z[0],H=w[C.type],Y=b[C.componentType],K=Y.BYTES_PER_ELEMENT,J=K*H,ne=C.byteOffset||0,S=C.bufferView!==void 0?O.bufferViews[C.bufferView].byteStride:void 0,D=C.normalized===!0,Q,ee;if(S&&S!==J){var W=Math.floor(ne/S),oe="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+W+":"+C.count,N=M.cache.get(oe);N||(Q=new Y(L,W*S,C.count*S/K),N=new mn(Q,S/K),M.cache.add(oe,N)),ee=new er(N,H,ne%S/K,D)}else L===null?Q=new Y(C.count*H):Q=new Y(L,ne,C.count*H),ee=new Ie(Q,H,D);if(C.sparse!==void 0){var le=w.SCALAR,ce=b[C.sparse.indices.componentType],ye=C.sparse.indices.byteOffset||0,re=C.sparse.values.byteOffset||0,q=new ce(z[1],ye,C.sparse.count*le),de=new Y(z[2],re,C.sparse.count*H);L!==null&&(ee=new Ie(ee.array.slice(),ee.itemSize,ee.normalized));for(var pe=0,$=q.length;pe<$;pe++){var he=q[pe];if(ee.setX(he,de[pe*H]),H>=2&&ee.setY(he,de[pe*H+1]),H>=3&&ee.setZ(he,de[pe*H+2]),H>=4&&ee.setW(he,de[pe*H+3]),H>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return ee})},fe.prototype.loadTexture=function(T){var M=this,O=this.json,C=this.options,U=O.textures[T],z=U.extensions||{},L;z[n.MSFT_TEXTURE_DDS]?L=O.images[z[n.MSFT_TEXTURE_DDS].source]:L=O.images[U.source];var H;return L.uri&&(H=C.manager.getHandler(L.uri)),H||(H=z[n.MSFT_TEXTURE_DDS]?M.extensions[n.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(T,L,H)},fe.prototype.loadTextureImage=function(T,M,O){var C=this,U=this.json,z=this.options,L=U.textures[T],H=self.URL||self.webkitURL,Y=M.uri,K=!1;return M.bufferView!==void 0&&(Y=C.getDependency("bufferView",M.bufferView).then(function(J){K=!0;var ne=new Blob([J],{type:M.mimeType});return Y=H.createObjectURL(ne),Y})),Promise.resolve(Y).then(function(J){return new Promise(function(ne,S){var D=ne;O.isImageBitmapLoader===!0&&(D=function(Q){ne(new qo(Q))}),O.load(G(J,z.path),D,void 0,S)})}).then(function(J){K===!0&&H.revokeObjectURL(Y),J.flipY=!1,L.name&&(J.name=L.name),M.mimeType in X&&(J.format=X[M.mimeType]);var ne=U.samplers||{},S=ne[L.sampler]||{};return J.magFilter=x[S.magFilter]||Bt,J.minFilter=x[S.minFilter]||Es,J.wrapS=E[S.wrapS]||Mr,J.wrapT=E[S.wrapT]||Mr,C.associations.set(J,{type:"textures",index:T}),J})},fe.prototype.assignTexture=function(T,M,O){var C=this;return this.getDependency("texture",O.index).then(function(U){if(!U.isCompressedTexture)switch(M){case"aoMap":case"emissiveMap":case"metalnessMap":case"normalMap":case"roughnessMap":U.format=bi;break}if(O.texCoord!==void 0&&O.texCoord!=0&&!(M==="aoMap"&&O.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+O.texCoord+" for texture "+M+" not yet supported."),C.extensions[n.KHR_TEXTURE_TRANSFORM]){var z=O.extensions!==void 0?O.extensions[n.KHR_TEXTURE_TRANSFORM]:void 0;if(z){var L=C.associations.get(U);U=C.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(U,z),C.associations.set(U,L)}}T[M]=U})},fe.prototype.assignFinalMaterial=function(T){var M=T.geometry,O=T.material,C=M.attributes.tangent!==void 0,U=M.attributes.color!==void 0,z=M.attributes.normal===void 0,L=T.isSkinnedMesh===!0,H=Object.keys(M.morphAttributes).length>0,Y=H&&M.morphAttributes.normal!==void 0;if(T.isPoints){var K="PointsMaterial:"+O.uuid,J=this.cache.get(K);J||(J=new tr,Fe.prototype.copy.call(J,O),J.color.copy(O.color),J.map=O.map,J.sizeAttenuation=!1,this.cache.add(K,J)),O=J}else if(T.isLine){var K="LineBasicMaterial:"+O.uuid,ne=this.cache.get(K);ne||(ne=new St,Fe.prototype.copy.call(ne,O),ne.color.copy(O.color),this.cache.add(K,ne)),O=ne}if(C||U||z||L||H){var K="ClonedMaterial:"+O.uuid+":";O.isGLTFSpecularGlossinessMaterial&&(K+="specular-glossiness:"),L&&(K+="skinning:"),C&&(K+="vertex-tangents:"),U&&(K+="vertex-colors:"),z&&(K+="flat-shading:"),H&&(K+="morph-targets:"),Y&&(K+="morph-normals:");var S=this.cache.get(K);S||(S=O.clone(),L&&(S.skinning=!0),C&&(S.vertexTangents=!0),U&&(S.vertexColors=!0),z&&(S.flatShading=!0),H&&(S.morphTargets=!0),Y&&(S.morphNormals=!0),this.cache.add(K,S),this.associations.set(S,this.associations.get(O))),O=S}O.aoMap&&M.attributes.uv2===void 0&&M.attributes.uv!==void 0&&M.setAttribute("uv2",M.attributes.uv),O.normalScale&&!C&&(O.normalScale.y=-O.normalScale.y),O.clearcoatNormalScale&&!C&&(O.clearcoatNormalScale.y=-O.clearcoatNormalScale.y),T.material=O},fe.prototype.getMaterialType=function(){return nn},fe.prototype.loadMaterial=function(T){var M=this,O=this.json,C=this.extensions,U=O.materials[T],z,L={},H=U.extensions||{},Y=[];if(H[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var K=C[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];z=K.getMaterialType(),Y.push(K.extendParams(L,U,M))}else if(H[n.KHR_MATERIALS_UNLIT]){var J=C[n.KHR_MATERIALS_UNLIT];z=J.getMaterialType(),Y.push(J.extendParams(L,U,M))}else{var ne=U.pbrMetallicRoughness||{};if(L.color=new _e(1,1,1),L.opacity=1,Array.isArray(ne.baseColorFactor)){var S=ne.baseColorFactor;L.color.fromArray(S),L.opacity=S[3]}ne.baseColorTexture!==void 0&&Y.push(M.assignTexture(L,"map",ne.baseColorTexture)),L.metalness=ne.metallicFactor!==void 0?ne.metallicFactor:1,L.roughness=ne.roughnessFactor!==void 0?ne.roughnessFactor:1,ne.metallicRoughnessTexture!==void 0&&(Y.push(M.assignTexture(L,"metalnessMap",ne.metallicRoughnessTexture)),Y.push(M.assignTexture(L,"roughnessMap",ne.metallicRoughnessTexture))),z=this._invokeOne(function(Q){return Q.getMaterialType&&Q.getMaterialType(T)}),Y.push(this._invokeAll(function(Q){return Q.extendMaterialParams&&Q.extendMaterialParams(T,L)}))}U.doubleSided===!0&&(L.side=Ks);var D=U.alphaMode||k.OPAQUE;return D===k.BLEND?(L.transparent=!0,L.depthWrite=!1):(L.transparent=!1,D===k.MASK&&(L.alphaTest=U.alphaCutoff!==void 0?U.alphaCutoff:.5)),U.normalTexture!==void 0&&z!==Zt&&(Y.push(M.assignTexture(L,"normalMap",U.normalTexture)),L.normalScale=new ae(1,1),U.normalTexture.scale!==void 0&&L.normalScale.set(U.normalTexture.scale,U.normalTexture.scale)),U.occlusionTexture!==void 0&&z!==Zt&&(Y.push(M.assignTexture(L,"aoMap",U.occlusionTexture)),U.occlusionTexture.strength!==void 0&&(L.aoMapIntensity=U.occlusionTexture.strength)),U.emissiveFactor!==void 0&&z!==Zt&&(L.emissive=new _e().fromArray(U.emissiveFactor)),U.emissiveTexture!==void 0&&z!==Zt&&Y.push(M.assignTexture(L,"emissiveMap",U.emissiveTexture)),Promise.all(Y).then(function(){var Q;return z===y?Q=C[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(L):Q=new z(L),U.name&&(Q.name=U.name),Q.map&&(Q.map.encoding=Ts),Q.emissiveMap&&(Q.emissiveMap.encoding=Ts),B(Q,U),M.associations.set(Q,{type:"materials",index:T}),U.extensions&&I(C,Q,U),Q})};function Ae(T,M,O){var C=M.attributes,U=new jn;if(C.POSITION!==void 0){var z=O.json.accessors[C.POSITION],L=z.min,H=z.max;if(L!==void 0&&H!==void 0)U.set(new R(L[0],L[1],L[2]),new R(H[0],H[1],H[2]));else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;var Y=M.targets;if(Y!==void 0){for(var K=new R,J=new R,ne=0,S=Y.length;ne<S;ne++){var D=Y[ne];if(D.POSITION!==void 0){var z=O.json.accessors[D.POSITION],L=z.min,H=z.max;L!==void 0&&H!==void 0?(J.setX(Math.max(Math.abs(L[0]),Math.abs(H[0]))),J.setY(Math.max(Math.abs(L[1]),Math.abs(H[1]))),J.setZ(Math.max(Math.abs(L[2]),Math.abs(H[2]))),K.max(J)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}U.expandByVector(K)}T.boundingBox=U;var Q=new ui;U.getCenter(Q.center),Q.radius=U.min.distanceTo(U.max)/2,T.boundingSphere=Q}function ve(T,M,O){var C=M.attributes,U=[];function z(K,J){return O.getDependency("accessor",K).then(function(ne){T.setAttribute(J,ne)})}for(var L in C){var H=P[L]||L.toLowerCase();H in T.attributes||U.push(z(C[L],H))}if(M.indices!==void 0&&!T.index){var Y=O.getDependency("accessor",M.indices).then(function(K){T.setIndex(K)});U.push(Y)}return B(T,M),Ae(T,M,O),Promise.all(U).then(function(){return M.targets!==void 0?j(T,M.targets,O):T})}function De(T,M){var O=T.getIndex();if(O===null){var C=[],U=T.getAttribute("position");if(U!==void 0){for(var z=0;z<U.count;z++)C.push(z);T.setIndex(C),O=T.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),T}var L=O.count-2,H=[];if(M===Id)for(var z=1;z<=L;z++)H.push(O.getX(0)),H.push(O.getX(z)),H.push(O.getX(z+1));else for(var z=0;z<L;z++)z%2===0?(H.push(O.getX(z)),H.push(O.getX(z+1)),H.push(O.getX(z+2))):(H.push(O.getX(z+2)),H.push(O.getX(z+1)),H.push(O.getX(z)));H.length/3!==L&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var Y=T.clone();return Y.setIndex(H),Y}return fe.prototype.loadGeometries=function(T){var M=this,O=this.extensions,C=this.primitiveCache;function U(S){return O[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(S,M).then(function(D){return ve(D,S,M)})}for(var z=[],L=0,H=T.length;L<H;L++){var Y=T[L],K=me(Y),J=C[K];if(J)z.push(J.promise);else{var ne;Y.extensions&&Y.extensions[n.KHR_DRACO_MESH_COMPRESSION]?ne=U(Y):ne=ve(new Te,Y,M),C[K]={primitive:Y,promise:ne},z.push(ne)}}return Promise.all(z)},fe.prototype.loadMesh=function(T){for(var M=this,O=this.json,C=O.meshes[T],U=C.primitives,z=[],L=0,H=U.length;L<H;L++){var Y=U[L].material===void 0?V(this.cache):this.getDependency("material",U[L].material);z.push(Y)}return z.push(M.loadGeometries(U)),Promise.all(z).then(function(K){for(var J=K.slice(0,K.length-1),ne=K[K.length-1],S=[],D=0,Q=ne.length;D<Q;D++){var ee=ne[D],W=U[D],oe,N=J[D];if(W.mode===v.TRIANGLES||W.mode===v.TRIANGLE_STRIP||W.mode===v.TRIANGLE_FAN||W.mode===void 0)oe=C.isSkinnedMesh===!0?new tl(ee,N):new st(ee,N),oe.isSkinnedMesh===!0&&!oe.geometry.attributes.skinWeight.normalized&&oe.normalizeSkinWeights(),W.mode===v.TRIANGLE_STRIP?oe.geometry=De(oe.geometry,rx):W.mode===v.TRIANGLE_FAN&&(oe.geometry=De(oe.geometry,Id));else if(W.mode===v.LINES)oe=new Ct(ee,N);else if(W.mode===v.LINE_STRIP)oe=new _n(ee,N);else if(W.mode===v.LINE_LOOP)oe=new il(ee,N);else if(W.mode===v.POINTS)oe=new rl(ee,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+W.mode);Object.keys(oe.geometry.morphAttributes).length>0&&ie(oe,C),oe.name=C.name||"mesh_"+T,ne.length>1&&(oe.name+="_"+D),B(oe,C),M.assignFinalMaterial(oe),S.push(oe)}if(S.length===1)return S[0];for(var le=new ti,D=0,Q=S.length;D<Q;D++)le.add(S[D]);return le})},fe.prototype.loadCamera=function(T){var M,O=this.json.cameras[T],C=O[O.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return O.type==="perspective"?M=new wt(ke.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):O.type==="orthographic"&&(M=new Ws(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),O.name&&(M.name=O.name),B(M,O),Promise.resolve(M)},fe.prototype.loadSkin=function(T){var M=this.json.skins[T],O={joints:M.joints};return M.inverseBindMatrices===void 0?Promise.resolve(O):this.getDependency("accessor",M.inverseBindMatrices).then(function(C){return O.inverseBindMatrices=C,O})},fe.prototype.loadAnimation=function(T){for(var M=this.json,O=M.animations[T],C=[],U=[],z=[],L=[],H=[],Y=0,K=O.channels.length;Y<K;Y++){var J=O.channels[Y],ne=O.samplers[J.sampler],S=J.target,D=S.node!==void 0?S.node:S.id,Q=O.parameters!==void 0?O.parameters[ne.input]:ne.input,ee=O.parameters!==void 0?O.parameters[ne.output]:ne.output;C.push(this.getDependency("node",D)),U.push(this.getDependency("accessor",Q)),z.push(this.getDependency("accessor",ee)),L.push(ne),H.push(S)}return Promise.all([Promise.all(C),Promise.all(U),Promise.all(z),Promise.all(L),Promise.all(H)]).then(function(W){for(var oe=W[0],N=W[1],le=W[2],ce=W[3],ye=W[4],re=[],q=0,de=oe.length;q<de;q++){var pe=oe[q],$=N[q],he=le[q],Ee=ce[q],Ze=ye[q];if(pe!==void 0){pe.updateMatrix(),pe.matrixAutoUpdate=!0;var Lt;switch(A[Ze.path]){case A.weights:Lt=zs;break;case A.rotation:Lt=ca;break;case A.position:case A.scale:default:Lt=Gs;break}var hi=pe.name?pe.name:pe.uuid,Yl=Ee.interpolation!==void 0?Z[Ee.interpolation]:vs,Xn=[];A[Ze.path]===A.weights?pe.traverse(function(F){F.isMesh===!0&&F.morphTargetInfluences&&Xn.push(F.name?F.name:F.uuid)}):Xn.push(hi);var Mn=he.array;if(he.normalized){var Ri;if(Mn.constructor===Int8Array)Ri=1/127;else if(Mn.constructor===Uint8Array)Ri=1/255;else if(Mn.constructor==Int16Array)Ri=1/32767;else if(Mn.constructor===Uint16Array)Ri=1/65535;else throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");for(var eo=new Float32Array(Mn.length),Ft=0,Hr=Mn.length;Ft<Hr;Ft++)eo[Ft]=Mn[Ft]*Ri;Mn=eo}for(var Ft=0,Hr=Xn.length;Ft<Hr;Ft++){var to=new Lt(Xn[Ft]+"."+A[Ze.path],$.array,Mn,Yl);Ee.interpolation==="CUBICSPLINE"&&(to.createInterpolant=function(ue){return new g(this.times,this.values,this.getValueSize()/3,ue)},to.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),re.push(to)}}}var ql=O.name?O.name:"animation_"+T;return new Rn(ql,void 0,re)})},fe.prototype.loadNode=function(T){var M=this.json,O=this.extensions,C=this,U=M.nodes[T];return function(){var z=[];if(U.mesh!==void 0&&z.push(C.getDependency("mesh",U.mesh).then(function(H){var Y=C._getNodeRef(C.meshCache,U.mesh,H);return U.weights!==void 0&&Y.traverse(function(K){if(!!K.isMesh)for(var J=0,ne=U.weights.length;J<ne;J++)K.morphTargetInfluences[J]=U.weights[J]}),Y})),U.camera!==void 0&&z.push(C.getDependency("camera",U.camera).then(function(H){return C._getNodeRef(C.cameraCache,U.camera,H)})),U.extensions&&U.extensions[n.KHR_LIGHTS_PUNCTUAL]&&U.extensions[n.KHR_LIGHTS_PUNCTUAL].light!==void 0){var L=U.extensions[n.KHR_LIGHTS_PUNCTUAL].light;z.push(C.getDependency("light",L).then(function(H){return C._getNodeRef(C.lightCache,L,H)}))}return Promise.all(z)}().then(function(z){var L;if(U.isBone===!0?L=new uh:z.length>1?L=new ti:z.length===1?L=z[0]:L=new xe,L!==z[0])for(var H=0,Y=z.length;H<Y;H++)L.add(z[H]);if(U.name&&(L.userData.name=U.name,L.name=Kt.sanitizeNodeName(U.name)),B(L,U),U.extensions&&I(O,L,U),U.matrix!==void 0){var K=new ze;K.fromArray(U.matrix),L.applyMatrix4(K)}else U.translation!==void 0&&L.position.fromArray(U.translation),U.rotation!==void 0&&L.quaternion.fromArray(U.rotation),U.scale!==void 0&&L.scale.fromArray(U.scale);return C.associations.set(L,{type:"nodes",index:T}),L})},fe.prototype.loadScene=function(){function T(M,O,C,U){var z=C.nodes[M];return U.getDependency("node",M).then(function(L){if(z.skin===void 0)return L;var H;return U.getDependency("skin",z.skin).then(function(Y){H=Y;for(var K=[],J=0,ne=H.joints.length;J<ne;J++)K.push(U.getDependency("node",H.joints[J]));return Promise.all(K)}).then(function(Y){return L.traverse(function(K){if(!!K.isMesh){for(var J=[],ne=[],S=0,D=Y.length;S<D;S++){var Q=Y[S];if(Q){J.push(Q);var ee=new ze;H.inverseBindMatrices!==void 0&&ee.fromArray(H.inverseBindMatrices.array,S*16),ne.push(ee)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',H.joints[S])}K.bind(new nl(J,ne),K.matrixWorld)}}),L})}).then(function(L){O.add(L);var H=[];if(z.children)for(var Y=z.children,K=0,J=Y.length;K<J;K++){var ne=Y[K];H.push(T(ne,L,C,U))}return Promise.all(H)})}return function(O){var C=this.json,U=this.extensions,z=this.json.scenes[O],L=this,H=new ti;z.name&&(H.name=z.name),B(H,z),z.extensions&&I(U,H,z);for(var Y=z.nodes||[],K=[],J=0,ne=Y.length;J<ne;J++)K.push(T(Y[J],H,C,L));return Promise.all(K).then(function(){return H})}}(),e})();var Tn=function(e){qe.call(this,e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}};Tn.prototype=Object.assign(Object.create(qe.prototype),{constructor:Tn,setDecoderPath:function(e){return this.decoderPath=e,this},setDecoderConfig:function(e){return this.decoderConfig=e,this},setWorkerLimit:function(e){return this.workerLimit=e,this},setVerbosity:function(){console.warn("THREE.DRACOLoader: The .setVerbosity() method has been removed.")},setDrawMode:function(){console.warn("THREE.DRACOLoader: The .setDrawMode() method has been removed.")},setSkipDequantization:function(){console.warn("THREE.DRACOLoader: The .setSkipDequantization() method has been removed.")},load:function(e,t,n,i){var r=new un(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),this.crossOrigin==="use-credentials"&&r.setWithCredentials(!0),r.load(e,s=>{var o={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,o).then(t).catch(i)},n,i)},decodeDracoFile:function(e,t,n,i){var r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)},decodeGeometry:function(e,t){for(var n in t.attributeTypes){var i=t.attributeTypes[n];i.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[n]=i.name)}var r=JSON.stringify(t);if(Tn.taskCache.has(e)){var s=Tn.taskCache.get(e);if(s.key===r)return s.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}var o,a=this.workerNextTaskID++,c=e.byteLength,l=this._getWorker(a,c).then(u=>(o=u,new Promise((h,d)=>{o._callbacks[a]={resolve:h,reject:d},o.postMessage({type:"decode",id:a,taskConfig:t,buffer:e},[e])}))).then(u=>this._createGeometry(u.geometry));return l.catch(()=>!0).then(()=>{o&&a&&this._releaseTask(o,a)}),Tn.taskCache.set(e,{key:r,promise:l}),l},_createGeometry:function(e){var t=new Te;e.index&&t.setIndex(new Ie(e.index.array,1));for(var n=0;n<e.attributes.length;n++){var i=e.attributes[n],r=i.name,s=i.array,o=i.itemSize;t.setAttribute(r,new Ie(s,o))}return t},_loadLibrary:function(e,t){var n=new un(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),new Promise((i,r)=>{n.load(e,i,void 0,r)})},preload:function(){return this._initDecoder(),this},_initDecoder:function(){if(this.decoderPending)return this.decoderPending;var e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{var i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);var r=Tn.DRACOWorker.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending},_getWorker:function(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){var n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){var s=r.data;switch(s.type){case"decode":n._callbacks[s.id].resolve(s);break;case"error":n._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});var n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})},_releaseTask:function(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]},debug:function(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))},dispose:function(){for(var e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}});Tn.DRACOWorker=function(){var e,t;onmessage=function(r){var s=r.data;switch(s.type){case"init":e=s.decoderConfig,t=new Promise(function(c){e.onModuleLoaded=function(l){c({draco:l})},DracoDecoderModule(e)});break;case"decode":var o=s.buffer,a=s.taskConfig;t.then(c=>{var l=c.draco,u=new l.Decoder,h=new l.DecoderBuffer;h.Init(new Int8Array(o),o.byteLength);try{var d=n(l,u,h,a),f=d.attributes.map(p=>p.array.buffer);d.index&&f.push(d.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:d},f)}catch(p){console.error(p),self.postMessage({type:"error",id:s.id,error:p.message})}finally{l.destroy(h),l.destroy(u)}});break}};function n(r,s,o,a){var c=a.attributeIDs,l=a.attributeTypes,u,h,d=s.GetEncodedGeometryType(o);if(d===r.TRIANGULAR_MESH)u=new r.Mesh,h=s.DecodeBufferToMesh(o,u);else if(d===r.POINT_CLOUD)u=new r.PointCloud,h=s.DecodeBufferToPointCloud(o,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());var f={index:null,attributes:[]};for(var p in c){var y=self[l[p]],_,m;if(a.useUniqueIDs)m=c[p],_=s.GetAttributeByUniqueId(u,m);else{if(m=s.GetAttributeId(u,r[c[p]]),m===-1)continue;_=s.GetAttribute(u,m)}f.attributes.push(i(r,s,u,p,y,_))}if(d===r.TRIANGULAR_MESH){for(var g=u.num_faces(),v=g*3,b=new Uint32Array(v),x=new r.DracoInt32Array,E=0;E<g;++E){s.GetFaceFromMesh(u,E,x);for(var w=0;w<3;++w)b[E*3+w]=x.GetValue(w)}f.index={array:b,itemSize:1},r.destroy(x)}return r.destroy(u),f}function i(r,s,o,a,c,l){var u=l.num_components(),h=o.num_points(),d=h*u,f,p;switch(c){case Float32Array:f=new r.DracoFloat32Array,s.GetAttributeFloatForAllPoints(o,l,f),p=new Float32Array(d);break;case Int8Array:f=new r.DracoInt8Array,s.GetAttributeInt8ForAllPoints(o,l,f),p=new Int8Array(d);break;case Int16Array:f=new r.DracoInt16Array,s.GetAttributeInt16ForAllPoints(o,l,f),p=new Int16Array(d);break;case Int32Array:f=new r.DracoInt32Array,s.GetAttributeInt32ForAllPoints(o,l,f),p=new Int32Array(d);break;case Uint8Array:f=new r.DracoUInt8Array,s.GetAttributeUInt8ForAllPoints(o,l,f),p=new Uint8Array(d);break;case Uint16Array:f=new r.DracoUInt16Array,s.GetAttributeUInt16ForAllPoints(o,l,f),p=new Uint16Array(d);break;case Uint32Array:f=new r.DracoUInt32Array,s.GetAttributeUInt32ForAllPoints(o,l,f),p=new Uint32Array(d);break;default:throw new Error("THREE.DRACOLoader: Unexpected attribute type.")}for(var y=0;y<d;y++)p[y]=f.GetValue(y);return r.destroy(f),{name:a,array:p,itemSize:u}}};Tn.taskCache=new WeakMap;Tn.setDecoderPath=function(){console.warn("THREE.DRACOLoader: The .setDecoderPath() method has been removed. Use instance methods.")};Tn.setDecoderConfig=function(){console.warn("THREE.DRACOLoader: The .setDecoderConfig() method has been removed. Use instance methods.")};Tn.releaseDecoderModule=function(){console.warn("THREE.DRACOLoader: The .releaseDecoderModule() method has been removed. Use instance methods.")};Tn.getDecoderModule=function(){console.warn("THREE.DRACOLoader: The .getDecoderModule() method has been removed. Use instance methods.")};var Dl=function(e,t){t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),a=o.NONE},this.update=function(){var N=new R,le=new Pt().setFromUnitVectors(e.up,new R(0,1,0)),ce=le.clone().inverse(),ye=new R,re=new Pt,q=2*Math.PI;return function(){var pe=n.object.position;N.copy(pe).sub(n.target),N.applyQuaternion(le),l.setFromVector3(N),n.autoRotate&&a===o.NONE&&A(w()),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);var $=n.minAzimuthAngle,he=n.maxAzimuthAngle;return isFinite($)&&isFinite(he)&&($<-Math.PI?$+=q:$>Math.PI&&($-=q),he<-Math.PI?he+=q:he>Math.PI&&(he-=q),$<he?l.theta=Math.max($,Math.min(he,l.theta)):l.theta=l.theta>($+he)/2?Math.max($,l.theta):Math.min(he,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),N.setFromSpherical(l),N.applyQuaternion(ce),pe.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),h=1,f||ye.distanceToSquared(n.object.position)>c||8*(1-re.dot(n.object.quaternion))>c?(n.dispatchEvent(i),ye.copy(n.object.position),re.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",oe,!1),n.domElement.removeEventListener("mousedown",K,!1),n.domElement.removeEventListener("wheel",S,!1),n.domElement.removeEventListener("touchstart",Q,!1),n.domElement.removeEventListener("touchend",W,!1),n.domElement.removeEventListener("touchmove",ee,!1),n.domElement.ownerDocument.removeEventListener("mousemove",J,!1),n.domElement.ownerDocument.removeEventListener("mouseup",ne,!1),n.domElement.removeEventListener("keydown",D,!1)};var n=this,i={type:"change"},r={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,l=new Np,u=new Np,h=1,d=new R,f=!1,p=new ae,y=new ae,_=new ae,m=new ae,g=new ae,v=new ae,b=new ae,x=new ae,E=new ae;function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function A(N){u.theta-=N}function Z(N){u.phi-=N}var k=function(){var N=new R;return function(ce,ye){N.setFromMatrixColumn(ye,0),N.multiplyScalar(-ce),d.add(N)}}(),X=function(){var N=new R;return function(ce,ye){n.screenSpacePanning===!0?N.setFromMatrixColumn(ye,1):(N.setFromMatrixColumn(ye,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(ce),d.add(N)}}(),G=function(){var N=new R;return function(ce,ye){var re=n.domElement;if(n.object.isPerspectiveCamera){var q=n.object.position;N.copy(q).sub(n.target);var de=N.length();de*=Math.tan(n.object.fov/2*Math.PI/180),k(2*ce*de/re.clientHeight,n.object.matrix),X(2*ye*de/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(ce*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),X(ye*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(N){n.object.isPerspectiveCamera?h/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(N){n.object.isPerspectiveCamera?h*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(N){p.set(N.clientX,N.clientY)}function j(N){b.set(N.clientX,N.clientY)}function ie(N){m.set(N.clientX,N.clientY)}function me(N){y.set(N.clientX,N.clientY),_.subVectors(y,p).multiplyScalar(n.rotateSpeed);var le=n.domElement;A(2*Math.PI*_.x/le.clientHeight),Z(2*Math.PI*_.y/le.clientHeight),p.copy(y),n.update()}function ge(N){x.set(N.clientX,N.clientY),E.subVectors(x,b),E.y>0?V(P()):E.y<0&&I(P()),b.copy(x),n.update()}function fe(N){g.set(N.clientX,N.clientY),v.subVectors(g,m).multiplyScalar(n.panSpeed),G(v.x,v.y),m.copy(g),n.update()}function Ae(N){N.deltaY<0?I(P()):N.deltaY>0&&V(P()),n.update()}function ve(N){var le=!1;switch(N.keyCode){case n.keys.UP:G(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:G(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:G(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:G(-n.keyPanSpeed,0),le=!0;break}le&&(N.preventDefault(),n.update())}function De(N){if(N.touches.length==1)p.set(N.touches[0].pageX,N.touches[0].pageY);else{var le=.5*(N.touches[0].pageX+N.touches[1].pageX),ce=.5*(N.touches[0].pageY+N.touches[1].pageY);p.set(le,ce)}}function T(N){if(N.touches.length==1)m.set(N.touches[0].pageX,N.touches[0].pageY);else{var le=.5*(N.touches[0].pageX+N.touches[1].pageX),ce=.5*(N.touches[0].pageY+N.touches[1].pageY);m.set(le,ce)}}function M(N){var le=N.touches[0].pageX-N.touches[1].pageX,ce=N.touches[0].pageY-N.touches[1].pageY,ye=Math.sqrt(le*le+ce*ce);b.set(0,ye)}function O(N){n.enableZoom&&M(N),n.enablePan&&T(N)}function C(N){n.enableZoom&&M(N),n.enableRotate&&De(N)}function U(N){if(N.touches.length==1)y.set(N.touches[0].pageX,N.touches[0].pageY);else{var le=.5*(N.touches[0].pageX+N.touches[1].pageX),ce=.5*(N.touches[0].pageY+N.touches[1].pageY);y.set(le,ce)}_.subVectors(y,p).multiplyScalar(n.rotateSpeed);var ye=n.domElement;A(2*Math.PI*_.x/ye.clientHeight),Z(2*Math.PI*_.y/ye.clientHeight),p.copy(y)}function z(N){if(N.touches.length==1)g.set(N.touches[0].pageX,N.touches[0].pageY);else{var le=.5*(N.touches[0].pageX+N.touches[1].pageX),ce=.5*(N.touches[0].pageY+N.touches[1].pageY);g.set(le,ce)}v.subVectors(g,m).multiplyScalar(n.panSpeed),G(v.x,v.y),m.copy(g)}function L(N){var le=N.touches[0].pageX-N.touches[1].pageX,ce=N.touches[0].pageY-N.touches[1].pageY,ye=Math.sqrt(le*le+ce*ce);x.set(0,ye),E.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),V(E.y),b.copy(x)}function H(N){n.enableZoom&&L(N),n.enablePan&&z(N)}function Y(N){n.enableZoom&&L(N),n.enableRotate&&U(N)}function K(N){if(n.enabled!==!1){N.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();var le;switch(N.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Ui.DOLLY:if(n.enableZoom===!1)return;j(N),a=o.DOLLY;break;case Ui.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;ie(N),a=o.PAN}else{if(n.enableRotate===!1)return;B(N),a=o.ROTATE}break;case Ui.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;B(N),a=o.ROTATE}else{if(n.enablePan===!1)return;ie(N),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(n.domElement.ownerDocument.addEventListener("mousemove",J,!1),n.domElement.ownerDocument.addEventListener("mouseup",ne,!1),n.dispatchEvent(r))}}function J(N){if(n.enabled!==!1)switch(N.preventDefault(),a){case o.ROTATE:if(n.enableRotate===!1)return;me(N);break;case o.DOLLY:if(n.enableZoom===!1)return;ge(N);break;case o.PAN:if(n.enablePan===!1)return;fe(N);break}}function ne(N){n.enabled!==!1&&(n.domElement.ownerDocument.removeEventListener("mousemove",J,!1),n.domElement.ownerDocument.removeEventListener("mouseup",ne,!1),n.dispatchEvent(s),a=o.NONE)}function S(N){n.enabled===!1||n.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(N.preventDefault(),N.stopPropagation(),n.dispatchEvent(r),Ae(N),n.dispatchEvent(s))}function D(N){n.enabled===!1||n.enableKeys===!1||n.enablePan===!1||ve(N)}function Q(N){if(n.enabled!==!1){switch(N.preventDefault(),N.touches.length){case 1:switch(n.touches.ONE){case Hi.ROTATE:if(n.enableRotate===!1)return;De(N),a=o.TOUCH_ROTATE;break;case Hi.PAN:if(n.enablePan===!1)return;T(N),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(n.touches.TWO){case Hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(N),a=o.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;C(N),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&n.dispatchEvent(r)}}function ee(N){if(n.enabled!==!1)switch(N.preventDefault(),N.stopPropagation(),a){case o.TOUCH_ROTATE:if(n.enableRotate===!1)return;U(N),n.update();break;case o.TOUCH_PAN:if(n.enablePan===!1)return;z(N),n.update();break;case o.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(N),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(N),n.update();break;default:a=o.NONE}}function W(N){n.enabled!==!1&&(n.dispatchEvent(s),a=o.NONE)}function oe(N){n.enabled!==!1&&N.preventDefault()}n.domElement.addEventListener("contextmenu",oe,!1),n.domElement.addEventListener("mousedown",K,!1),n.domElement.addEventListener("wheel",S,!1),n.domElement.addEventListener("touchstart",Q,!1),n.domElement.addEventListener("touchend",W,!1),n.domElement.addEventListener("touchmove",ee,!1),n.domElement.addEventListener("keydown",D,!1),n.domElement.tabIndex===-1&&(n.domElement.tabIndex=0),this.update()};Dl.prototype=Object.create(Wn.prototype);Dl.prototype.constructor=Dl;var Bh=function(e,t){Dl.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=Ui.PAN,this.mouseButtons.RIGHT=Ui.ROTATE,this.touches.ONE=Hi.PAN,this.touches.TWO=Hi.DOLLY_ROTATE};Bh.prototype=Object.create(Wn.prototype);Bh.prototype.constructor=Bh;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dv}}));function Io(e){let t=!1;return e&&e.constructor===Array&&e.length===3&&(t=!0),t}function ty(e){return e&&e.constructor===Array}function ny(e){return e&&console.error("SVELTHREE > passing a Matrix4 as prop is not implemented yet!"),!1}class wr{constructor(t){this.obj=t,t.type?this.objTypeStr=t.type:(this.objTypeStr="",console.info("SVELTHREE TODO > UniversalPropIterator > constructor : obj has no 'type' property, probably of type 'Material[]' or WebGLRenderer",t)),this.dlTarget=void 0}setFromVector3OrArray(t){this.props[t].constructor===R?this.obj[t].copy(this.props[t]):Array.isArray(this.props[t])&&this.obj[t].set(this.props[t][0],this.props[t][1],this.props[t][2])}checkSetColor(t){ty(this.props[t])?Io(this.props[t])?this.obj[t]=new _e(this.props[t][0],this.props[t][1],this.props[t][2]):console.error("SVELTHREE > UniversalPropIterator > checkSetColor : Prop should be an Array of three (3) values!",t):this.obj[t]=new _e(this.props[t])}checkSetDlTarget(t){this.props[t]===void 0||(this.obj[t]=this.props[t].getEmpty())}tryPropsUpdate(t){if(this.props=t,this.obj)for(let n in this.props)this.obj.hasOwnProperty(n)?n==="scale"||n==="position"||n==="rotation"?this.setFromVector3OrArray(n):n==="color"?this.checkSetColor(n):n==="target"&&this.objTypeStr==="DirectionalLight"?this.checkSetDlTarget(n):this.obj[n]=this.props[n]:this.obj[n.toString()]?n==="lookAt"&&this.obj.lookAt&&(this.props[n].constructor===R?this.obj.lookAt(this.props[n]):Array.isArray(this.props[n])&&this.obj.lookAt(this.props[n][0],this.props[n][1],this.props[n][2])):console.error("SVELTHREE > "+this.objTypeStr+" : No such property in "+this.objTypeStr+"! : "+n.toString());this.objTypeStr.includes("Material")&&(this.obj.needsUpdate=!0)}}class Ol{constructor(t){this.obj=t}tryPosUpdate(t){this.obj&&(t.constructor===R?this.obj.position.copy(t):Array.isArray(t)&&t.length===3?this.obj.position.set(t[0],t[1],t[2]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be an Array(3) or valid THREE.Vector3!",{obj:this.obj,p:t}))}tryRotUpdate(t){this.obj&&(t.constructor===Ur?this.obj.rotation.copy(t):Array.isArray(t)&&t.length===3?this.obj.rotation.set(t[0],t[1],t[2]):Array.isArray(t)&&t.length===4?this.obj.rotation.set(t[0],t[1],t[2],t[3]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be Array(3 || 4) or valid THREE.Euler!",{obj:this.obj,p:t}))}tryScaleUpdate(t){this.obj&&(t.constructor===R?this.obj.scale.copy(t):Array.isArray(t)?this.obj.scale.set(t[0],t[1],t[2]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be an Array(3) or valid THREE.Vector3!",{obj:this.obj,p:t}))}tryLookAtUpdate(t){this.obj.lookAt&&(t.constructor===R?this.obj.lookAt(t):Array.isArray(t)&&t.length===3?this.obj.lookAt(t[0],t[1],t[2]):console.error("SVELTHREE > Object3DUtils > prop "+t.toString()+" has to be an Array(3) or valid THREE.Vector3!",{obj:this.obj,p:t}))}}const os=[];function sr(e,t=zt){let n;const i=[];function r(a){if(Ut(e,a)&&(e=a,n)){const c=!os.length;for(let l=0;l<i.length;l+=1){const u=i[l];u[1](),os.push(u,e)}if(c){for(let l=0;l<os.length;l+=2)os[l][0](os[l+1]);os.length=0}}}function s(a){r(a(e))}function o(a,c=zt){const l=[a,c];return i.push(l),i.length===1&&(n=t(r)||zt),a(e),()=>{const u=i.indexOf(l);u!==-1&&i.splice(u,1),i.length===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}const it=sr([]);class iy{constructor(t){this.fn=t}initiate(t,...n){let i;try{if(i=this.fn(t,n),!i.hasOwnProperty("onStart"))throw console.warn("SVELTHREE > Provided animation is missing 'onStart' function!",{animation:i}),new Error("SVELTHREE Exception (see warning above)");if(!i.hasOwnProperty("onDestroy"))throw console.warn("SVELTHREE > Provided animation has no 'onDestroy' function!",{animation:i}),new Error("SVELTHREE Exception (see warning above)")}catch(r){throw new Error("SVELTHREE Exception (see warning above), "+r)}return i}}class bS{constructor(t,n,i,r){this.animation=t,this.aniauto=n,this.obj=i,this.scene=r}handleCurrentSceneStatus(t){t?this.aniauto&&this.handleSceneActive():this.handleSceneInActive()}handleSceneActive(){this.animationInitiated()===!0?this.tryOnSceneReactivated():this.initiateAnimation()}initiateAnimation(){this.scene.userData.isActive||console.warn("SVELTHREE > SvelthreeAnimationManager : initiateAnimation : You're about to initiate an animation in an inactive Scene!"),this.animation=this.animation.initiate(this.obj,...arguments),console.info("SVELTHREE > SvelthreeAnimationManager > initiateAnimation : after initialization: this.animation:",this.animation);try{this.animation.onStart()}catch(t){throw new Error("SVELTHREE Exception, "+t)}}tryOnSceneReactivated(){this.animation.onSceneReactivated?this.animation.onSceneReactivated():console.warn("SVELTHREE > SvelthreeAnimationManager > tryOnSceneReactivated : Animation couldn't be started, missing 'onSceneReactivated' method!")}handleSceneInActive(){this.animationInitiated()}tryOnSceneDeactivated(){this.animation.onSceneDeactivated?this.animation.onSceneDeactivated():console.warn("SVELTHREE > SvelthreeAnimationManager > tryOnSceneDeactivated : Animation couldn't be stopped, missing 'onSceneDeactivated' method!")}startAni(){this.animationInitiated()===!1?this.initiateAnimation():console.warn("SVELTHREE > SvelthreeAnimationManager > startAni : animation has already been initiated! 'animation': ",this.animation)}destroyAnimation(){this.animation.hasOwnProperty("onDestroy")?this.animation.onDestroy():console.warn("SVELTHREE > SvelthreeAnimationManager > Unable to find 'onDestroy' method in 'animation': This may be a BUG in REPL and may be safe to ignore. Please check if your animation is running as intended and consider checking it in another environment. Contributions on this issue are welcome! : this.animation",this.animation)}animationInitiated(){if(this.animationIsAnimationProp())return!1;if(this.animationIsObject())return!0;throw console.warn("SVELTHREE > SvelthreeAnimationManager > animationInitiated? : 'animation': ",this.animation),new Error("SVELTHREE > SvelthreeAnimationManager > animationInitiated? : 'animation' prop is of unsupported type!")}animationIsAnimationProp(){return!!(this.animation&&this.animation instanceof iy)}animationIsObject(){return!!(this.animation&&typeof this.animation=="object")}getAnimation(){return this.animation}}function xS(e,t,n){let{animationEnabled:i=void 0}=t,{animation:r=void 0}=t,{aniauto:s=void 0}=t,{obj:o=void 0}=t,{scene:a=void 0}=t,c;function l(){c||(n(0,r=new iy(r)),n(9,c=new bS(r,s,o,a)))}let{currentSceneActive:u}=t;function h(){if(c)return c.getAnimation();console.error("SVELTHREE > SvelthreeAnimation > destroyAnimation : missing SvelthreeAnimationManager!",{aniManager:c})}function d(){c?c.destroyAnimation():r&&i&&console.error("SVELTHREE > SvelthreeAnimation > destroyAnimation : missing SvelthreeAnimationManager!",{aniManager:c})}function f(){c?c.startAni():console.error("SVELTHREE > SvelthreeAnimation > destroyAnimation : missing SvelthreeAnimationManager!",{aniManager:c})}return wn(()=>()=>{console.info("SVELTHREE > onDestroy : SvelthreeAnimation"),d()}),e.$$set=p=>{"animationEnabled"in p&&n(1,i=p.animationEnabled),"animation"in p&&n(0,r=p.animation),"aniauto"in p&&n(2,s=p.aniauto),"obj"in p&&n(3,o=p.obj),"scene"in p&&n(4,a=p.scene),"currentSceneActive"in p&&n(5,u=p.currentSceneActive)},e.$$.update=()=>{e.$$.dirty&3&&r&&i&&l(),e.$$.dirty&544&&u&&c&&c.handleCurrentSceneStatus(u)},[r,i,s,o,a,u,h,d,f,c]}class xf extends jt{constructor(t){super(),Wt(this,t,xS,null,Ut,{animationEnabled:1,animation:0,aniauto:2,obj:3,scene:4,currentSceneActive:5,getAnimation:6,destroyAnimation:7,startAni:8})}get getAnimation(){return this.$$.ctx[6]}get destroyAnimation(){return this.$$.ctx[7]}get startAni(){return this.$$.ctx[8]}}function wS(e){let t,n,i;function r(o){e[26](o)}let s={animationEnabled:e[6],animation:e[2],aniauto:e[3],obj:e[0],scene:e[1]};return e[5]!==void 0&&(s.currentSceneActive=e[5]),t=new xf({props:s}),e[25](t),Cn.push(()=>Wh(t,"currentSceneActive",r)),{c(){et(t.$$.fragment)},m(o,a){Je(t,o,a),i=!0},p(o,[a]){const c={};a&64&&(c.animationEnabled=o[6]),a&4&&(c.animation=o[2]),a&8&&(c.aniauto=o[3]),a&1&&(c.obj=o[0]),a&2&&(c.scene=o[1]),!n&&a&32&&(n=!0,c.currentSceneActive=o[5],Vh(()=>n=!1)),t.$set(c)},i(o){i||(Re(t.$$.fragment,o),i=!0)},o(o){Oe(t.$$.fragment,o),i=!1},d(o){e[25](null),Ke(t,o)}}}function MS(){console.error("SVELTHREE > Camera : updating Matrix is not yet implemented!")}function ES(e,t,n){let i;dt(e,it,B=>n(24,i=B));let r,{scene:s}=t,o;if(s)if(s.type==="Scene")v();else throw console.warn("SVELTHREE > Camera : You have to provide a valid 'scene' prop of type 'Scene'!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");else throw console.warn("SVELTHREE > Camera : You have to provide a {scene} prop!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");let{animation:a=void 0}=t,{aniauto:c=void 0}=t,{id:l=void 0}=t,{cam:u}=t,h,d;if(u)h=new Ol(u),d=new wr(u);else throw console.warn("SVELTHREE > Camera : camera was not provided by parent component!",{cam:u}),new Error("SVELTHREE Exception (see warning above)");s.add(u),console.info("SVELTHREE > Camera : "+u.type+" was added to scene!",{cam:u,scene:s,total:s.children.length}),u.userData.id=l,u.userData.isActive=!1,u.userData.indexInCameras=i[o].cameras.length,i[o].cameras.push({camera:u,id:l,isActive:!1});let{pos:f=[0,0,2]}=t,{rot:p=[0,0,0]}=t,{lookAt:y=[0,0,0]}=t,{matrix:_=void 0}=t,{props:m=void 0}=t,{fnOnMount:g=void 0}=t;wn(g?()=>g(self):()=>(console.info("SVELTHREE > onMount : Camera"),()=>{console.info("SVELTHREE > onDestroy : Camera"),w()}));function v(){if(s.userData.sti>=0)n(21,o=s.userData.sti);else throw console.warn("SVELTHREE > Camera : Failed to set 'sti' from 'scene.userData.sti', 'sti' has to be >= 0!",{scene:s,userData:s.userData,sti:s.userData.sti}),new Error("SVELTHREE Exception (see warning above)")}function b(){i.orbitcontrols&&i.orbitcontrols.update()}let x=!1,E=!1;function w(){u.parent.remove(u)}function P(){return i[o].cameras[u.userData.indexInCameras].camera}function A(){return i[o].cameras[u.userData.indexInCameras].camera.userData.indexInCameras}function Z(){return o}function k(){return s}function X(){return r.getAnimation()}function G(){r.startAni()}function V(B){Cn[B?"unshift":"push"](()=>{r=B,n(4,r)})}function I(B){x=B,n(5,x),n(24,i),n(21,o),n(1,s)}return e.$$set=B=>{"scene"in B&&n(1,s=B.scene),"animation"in B&&n(2,a=B.animation),"aniauto"in B&&n(3,c=B.aniauto),"id"in B&&n(7,l=B.id),"cam"in B&&n(0,u=B.cam),"pos"in B&&n(8,f=B.pos),"rot"in B&&n(9,p=B.rot),"lookAt"in B&&n(10,y=B.lookAt),"matrix"in B&&n(11,_=B.matrix),"props"in B&&n(12,m=B.props),"fnOnMount"in B&&n(13,g=B.fnOnMount)},e.$$.update=()=>{e.$$.dirty&4196608&&(_||(h.tryPosUpdate(f),b())),e.$$.dirty&4196864&&(_||h.tryRotUpdate(p)),e.$$.dirty&4197376&&(_||h.tryLookAtUpdate(y)),e.$$.dirty&2048&&ny(_)&&(console.warn("SVELTHREE > Camera : Matrix provided, will ignore 'pos' or 'rot' props if any provided!"),MS()),e.$$.dirty&8392704&&m&&Object.keys(m).length>0&&d&&d.tryPropsUpdate(m),e.$$.dirty&18874370&&n(5,x=i[o].scenes[s.userData.indexInScenes].isActive),e.$$.dirty&4&&a&&n(6,E=!0)},[u,s,a,c,r,x,E,l,f,p,y,_,m,g,w,P,A,Z,k,X,G,o,h,d,i,V,I]}class SS extends jt{constructor(t){super(),Wt(this,t,ES,wS,Ut,{scene:1,animation:2,aniauto:3,id:7,cam:0,pos:8,rot:9,lookAt:10,matrix:11,props:12,fnOnMount:13,removeCameraFromParent:14,getCamera:15,getIndexInCameras:16,getSTI:17,getScene:18,getAnimation:19,startAni:20})}get removeCameraFromParent(){return this.$$.ctx[14]}get getCamera(){return this.$$.ctx[15]}get getIndexInCameras(){return this.$$.ctx[16]}get getSTI(){return this.$$.ctx[17]}get getScene(){return this.$$.ctx[18]}get getAnimation(){return this.$$.ctx[19]}get startAni(){return this.$$.ctx[20]}}function TS(e){let t,n,i={scene:e[0],cam:e[9],id:e[1],pos:e[4],rot:e[5],lookAt:e[6],matrix:e[7],props:e[8],animation:e[2],aniauto:e[3]};return t=new SS({props:i}),e[19](t),{c(){et(t.$$.fragment)},m(r,s){Je(t,r,s),n=!0},p(r,[s]){const o={};s&1&&(o.scene=r[0]),s&512&&(o.cam=r[9]),s&2&&(o.id=r[1]),s&16&&(o.pos=r[4]),s&32&&(o.rot=r[5]),s&64&&(o.lookAt=r[6]),s&128&&(o.matrix=r[7]),s&256&&(o.props=r[8]),s&4&&(o.animation=r[2]),s&8&&(o.aniauto=r[3]),t.$set(o)},i(r){n||(Re(t.$$.fragment,r),n=!0)},o(r){Oe(t.$$.fragment,r),n=!1},d(r){e[19](null),Ke(t,r)}}}function AS(e,t,n){let{scene:i}=t,{id:r=void 0}=t;if(!r)throw console.warn("SVELTHREE > PerspectiveCamera : you have to provide an 'id' prop (not empty String) for Cameras in order to assign them to a 'WebGLRenderer' component!",{id:r}),new Error("SVELTHREE Exception (see warning above)");let{animation:s=void 0}=t,{aniauto:o=!1}=t,{pos:a=void 0}=t,{rot:c=void 0}=t,{lookAt:l=void 0}=t,{matrix:u=void 0}=t,{config:h=void 0}=t,{props:d=void 0}=t,f;h&&h.length>0?f=new wt(...h):f=new wt;let{helper:p=!1}=t,y;wn(()=>(console.info("SVELTHREE > onMount : "+f.type),v(),()=>{console.info("SVELTHREE > onDestroy : "+f.type),b()}));function _(){n(18,y=new ga(f)),i.add(y),n(18,y.visible=!1,y),console.info("SVELTHREE > "+f.type+" : HELPER added!",{camHelper:y,scene:i,total:i.children.length})}let m=!1,g=0;function v(){m=!0,g=requestAnimationFrame(x)}function b(){m=!1,cancelAnimationFrame(g)}function x(){m&&(y&&y.update(),requestAnimationFrame(x))}function E(){return y}function w(){return r}let P;function A(){return P.getCamera()}function Z(){return P.getIndexInCameras()}function k(){return P.getSTI()}function X(G){Cn[G?"unshift":"push"](()=>{P=G,n(10,P)})}return e.$$set=G=>{"scene"in G&&n(0,i=G.scene),"id"in G&&n(1,r=G.id),"animation"in G&&n(2,s=G.animation),"aniauto"in G&&n(3,o=G.aniauto),"pos"in G&&n(4,a=G.pos),"rot"in G&&n(5,c=G.rot),"lookAt"in G&&n(6,l=G.lookAt),"matrix"in G&&n(7,u=G.matrix),"config"in G&&n(11,h=G.config),"props"in G&&n(8,d=G.props),"helper"in G&&n(12,p=G.helper)},e.$$.update=()=>{e.$$.dirty&266752&&!y&&f&&p&&_()},[i,r,s,o,a,c,l,u,d,f,P,h,p,E,w,A,Z,k,y,X]}class RS extends jt{constructor(t){super(),Wt(this,t,AS,TS,Ut,{scene:0,id:1,animation:2,aniauto:3,pos:4,rot:5,lookAt:6,matrix:7,config:11,props:8,helper:12,getHelper:13,getId:14,getCamera:15,getIndexInCameras:16,getSTI:17})}get getHelper(){return this.$$.ctx[13]}get getId(){return this.$$.ctx[14]}get getCamera(){return this.$$.ctx[15]}get getIndexInCameras(){return this.$$.ctx[16]}get getSTI(){return this.$$.ctx[17]}}function Hu(e){return{pointerId:1976+e.pointerId,width:e.width,height:e.height,pressure:e.pressure,tangentialPressure:e.tangentialPressure,tiltX:e.tangentialPressure,tiltY:e.tiltY,twist:e.twist,pointerType:e.pointerType,isPrimary:e.isPrimary,altKey:e.altKey,button:e.button,buttons:e.buttons,clientX:e.clientX,clientY:e.clientY,ctrlKey:e.ctrlKey,metaKey:e.metaKey,movementX:e.movementX,movementY:e.movementY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,relatedTarget:e.relatedTarget,screenX:e.screenX,screenY:e.screenY,shiftKey:e.shiftKey,x:e.x,y:e.y}}function LS(e,t,n){let i;dt(e,it,j=>n(8,i=j));let{interactionEnabled:r}=t,{parent:s}=t,{sti:o}=t,{obj:a}=t,c,{dispatch:l}=t,u,h;function d(){u.addEventListener("click",y,!1),u.addEventListener("pointerup",y,!1),u.addEventListener("pointerdown",y,!1)}function f(){u.removeEventListener("click",y),u.removeEventListener("pointerup",y),u.removeEventListener("pointerdown",y)}let p={click:{check:x},pointerup:{check:x},pointerdown:{check:x},pointermove:{check:b}};function y(j){p.hasOwnProperty(j.type)&&p[j.type].check(j)}wn(()=>(console.info("SVELTHREE > onMount : SvelthreeInteraction"),()=>{console.info("SVELTHREE > onDestroy : SvelthreeInteraction"),n(0,a.userData.interact=!1,a),u&&(u.removeEventListener("pointermove",v),u.removeEventListener("click",y),u.removeEventListener("pointerup",y),u.removeEventListener("pointerdown",y),u.removeEventListener("pointermove",y))}));let _=!1,m=!0,g;function v(j){if(P()){if(!_){let ie=Hu(j);w("pointerenter",{type:"pointerenter",target:a,pointerData:ie,raycasterData:g},!!s.onPointerEnter),w("pointerover",{type:"pointerover",target:a,pointerData:ie,raycasterData:g},!!s.onPointerOver),_=!0,m=!1}}else if(!m){let ie=Hu(j);w("pointerout",{type:"pointerout",target:a,pointerData:ie,raycasterData:g},!!s.onPointerOut),w("pointerleave",{type:"pointerleave",target:a,pointerData:ie,raycasterData:g},!!s.onPointerLeave),m=!0,_=!1}}function b(j){Object.keys(s.$$.callbacks).includes("pointermove")&&l(j.type,{event:j,target:a,unprojected:i[o].pointer.unprojected}),s.onPointerMove&&B(new CustomEvent(j.type,{detail:{event:j,target:a,unprojected:i[o].pointer.unprojected}}))}function x(j){P()&&(j.type==="click"&&E(j,!!s.onClick),j.type==="pointerup"&&E(j,!!s.onPointerUp),j.type==="pointerdown"&&E(j,!!s.onPointerDown))}function E(j,ie){let me=Hu(j);w(j.type,{type:j.type,target:a,pointerData:me,raycasterData:g},ie)}function w(j,ie,me){if(l(j,ie),me){let ge=new CustomEvent(j,{detail:ie});switch(j){case"click":s.onClick&&A(ge);break;case"pointerup":s.onPointerUp&&Z(ge);break;case"pointerdown":s.onPointerDown&&k(ge);break;case"pointerover":s.onPointerOver&&X(ge);break;case"pointerout":s.onPointerOut&&G(ge);break;case"pointerenter":s.onPointerOut&&V(ge);break;case"pointerleave":s.onPointerLeave&&I(ge);break}}}function P(){return i[o].allIntersections&&i[o].allIntersections.length>0&&i[o].allIntersections[0].object===a?(g={intersections:c.intersectObject(a),ray:c.ray,camera:c.camera,unprojectedPoint:new R(i[o].pointer.pos.x,i[o].pointer.pos.y,0).unproject(c.camera)},!0):!1}function A(j){console.info("SVELTHREE > SvelthreeInteraction :internal onClickAction!"),typeof s.onClick=="function"?s.onClick(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onClick' object is not a valid function!")}function Z(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerUpAction!"),typeof s.onPointerUp=="function"?s.onPointerUp(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerUp' object is not a function!")}function k(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerDownAction!"),typeof s.onPointerDown=="function"?s.onPointerDown(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerDown' object is not a function!")}function X(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerOverAction!",j),typeof s.onPointerOver=="function"?s.onPointerOver(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerOver' object is not a function!")}function G(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerOutAction!",j),typeof s.onPointerOut=="function"?s.onPointerOut(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerOut' object is not a function!")}function V(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerEnterAction!",j),typeof s.onPointerEnter=="function"?s.onPointerEnter(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerEnter' object is not a function!")}function I(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerLeaveAction!",j),typeof s.onPointerLeave=="function"?s.onPointerLeave(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerLeave' object is not a function!")}function B(j){console.info("SVELTHREE > SvelthreeInteraction : internal onPointerMoveAction!"),typeof s.onPointerMove=="function"?s.onPointerMove(j):console.error("SVELTHREE > SvelthreeInteraction : provided 'onPointerMove' object is not a function!")}return e.$$set=j=>{"interactionEnabled"in j&&n(1,r=j.interactionEnabled),"parent"in j&&n(2,s=j.parent),"sti"in j&&n(3,o=j.sti),"obj"in j&&n(0,a=j.obj),"dispatch"in j&&n(4,l=j.dispatch)},e.$$.update=()=>{e.$$.dirty&264&&i[o].raycaster&&n(5,c=i[o].raycaster),e.$$.dirty&264&&i[o].canvas.dom&&n(6,u=i[o].canvas.dom),e.$$.dirty&67&&u&&(r&&a&&!a.userData.interact?(d(),n(0,a.userData.interact=!0,a)):!r&&a&&a.userData.interact&&(f(),n(0,a.userData.interact=!1,a))),e.$$.dirty&427&&(r?a&&c&&i[o].pointer.event!==h&&(n(7,h=i[o].pointer.event),v(h),y(h)):a&&a.userData.interact&&(n(0,a.userData.interact=!1,a),f()))},[a,r,s,o,l,c,u,h,i]}class PS extends jt{constructor(t){super(),Wt(this,t,LS,null,Ut,{interactionEnabled:1,parent:2,sti:3,obj:0,dispatch:4})}}const CS=e=>({scene:e[0]&4,parent:e[0]&2}),Kp=e=>({scene:e[2],parent:e[1]});function IS(e){let t,n,i,r,s,o;const a=e[49].default,c=zh(a,e,e[48],Kp);function l(h){e[51](h)}let u={animationEnabled:e[8],animation:e[4],aniauto:e[3],obj:e[0],scene:e[2]};return e[7]!==void 0&&(u.currentSceneActive=e[7]),n=new xf({props:u}),e[50](n),Cn.push(()=>Wh(n,"currentSceneActive",l)),s=new PS({props:{sti:e[5],dispatch:e[11],obj:e[0],parent:e[10],interactionEnabled:e[9]}}),{c(){c&&c.c(),t=Ve(),et(n.$$.fragment),r=Ve(),et(s.$$.fragment)},m(h,d){c&&c.m(h,d),$e(h,t,d),Je(n,h,d),$e(h,r,d),Je(s,h,d),o=!0},p(h,d){c&&c.p&&(!o||d[0]&6|d[1]&131072)&&Gh(c,a,h,h[48],d,CS,Kp);const f={};d[0]&256&&(f.animationEnabled=h[8]),d[0]&16&&(f.animation=h[4]),d[0]&8&&(f.aniauto=h[3]),d[0]&1&&(f.obj=h[0]),d[0]&4&&(f.scene=h[2]),!i&&d[0]&128&&(i=!0,f.currentSceneActive=h[7],Vh(()=>i=!1)),n.$set(f);const p={};d[0]&32&&(p.sti=h[5]),d[0]&1&&(p.obj=h[0]),d[0]&512&&(p.interactionEnabled=h[9]),s.$set(p)},i(h){o||(Re(c,h),Re(n.$$.fragment,h),Re(s.$$.fragment,h),o=!0)},o(h){Oe(c,h),Oe(n.$$.fragment,h),Oe(s.$$.fragment,h),o=!1},d(h){c&&c.d(h),h&&Ye(t),e[50](null),Ke(n,h),h&&Ye(r),Ke(s,h)}}}function DS(){console.error("SVELTHREE > Mesh : updating Matrix is not yet implemented!")}function OS(e,t,n){let i;dt(e,it,q=>n(47,i=q));let{$$slots:r={},$$scope:s}=t,o,a=Nl(),c=xy(),{name:l=void 0}=t,{parent:u=void 0}=t,{parentForSlot:h=void 0}=t,{parentForUs:d=void 0}=t,{scene:f}=t,{aniauto:p=void 0}=t,{interact:y=void 0}=t,_;if(f)if(f.type==="Scene")M();else throw console.warn("SVELTHREE > Mesh : You have to provide a valid 'scene' prop of type 'Scene'!",{scene:f}),new Error("SVELTHREE Exception (see warning above)");else throw console.warn("SVELTHREE > Mesh : You have to provide a {scene} prop!",{scene:f}),new Error("SVELTHREE Exception (see warning above)");let m,g=!1,{mesh:v=void 0}=t,b,x,E,{material:w=void 0}=t,{geometry:P=void 0}=t;v?(g=!1,A()):g=!0;function A(){v.type==="Mesh"&&(v.geometry&&n(13,P=v.geometry),v.material?n(12,w=v.material):console.warn("SVELTHREE > Mesh : Mesh provided, but has no material!",{mesh:v}),console.info("SVELTHREE > Mesh : Saved geometry:",{geometry:P}),console.info("SVELTHREE > Mesh : Saved material:",{material:w}),n(0,v.userData.initScale=v.scale.x,v),n(44,b=new Ol(v)),n(45,x=new wr(v)),w&&n(46,E=new wr(w)))}g||(u?u!==v&&(d=u,h=v):h=v);function Z(){g&&(v&&!u?n(1,h=v):v?u&&u!==v&&(n(14,d=u),n(1,h=v)):console.error("SVELTHREE > Mesh : 'parent' check : no mesh provided yet!"))}let{userData:k=void 0}=t;function X(){v&&n(0,v.userData=Object.assign(Object.assign({},v.userData),k),v)}let{animation:G=void 0}=t,{mat:V=void 0}=t,{pos:I=void 0}=t,{rot:B=void 0}=t,{scale:j=void 0}=t,{castShadow:ie=void 0}=t,{receiveShadow:me=void 0}=t,{matrix:ge=void 0}=t,{props:fe=void 0}=t,Ae=!1,ve=!1,De,{fnOnMount:T=void 0}=t;wn(T?()=>T(a):()=>(u?console.info("SVELTHREE > onMount : Mesh, parent: ",u):console.info("SVELTHREE > onMount : Mesh"),()=>{console.info("SVELTHREE > onDestroy : Mesh"),H()}));function M(){if(f.userData.sti>=0)n(5,_=f.userData.sti);else throw console.warn("SVELTHREE > Mesh : Failed to set 'sti' from 'scene.userData.sti', 'sti' has to be >= 0!",{scene:f,userData:f.userData,sti:f.userData.sti}),new Error("SVELTHREE Exception (see warning above)")}function O(){d?v.parent!==d&&(d.add(v),console.info("SVELTHREE > Mesh : "+P.type+" was added to parent!",{mesh:v,parent:d,scene:f,total:f.children.length})):v.parent!==f&&(f.add(v),console.info("SVELTHREE > Mesh : "+P.type+" was added to scene!",{mesh:v,scene:f,total:f.children.length}))}function C(){v&&(n(0,v.material=w,v),console.info("SVELTHREE > Mesh : Material updated!"),E&&E.tryPropsUpdate(V))}function U(){v&&(n(0,v.geometry=P,v),console.info("SVELTHREE > Mesh : Geometry updated!"))}function z(){v&&n(0,v.castShadow=ie,v)}function L(){v&&n(0,v.receiveShadow=me,v)}function H(){v.parent.remove(v)}function Y(){return v}function K(){return l}function J(){return f}function ne(){return o.getAnimation()}function S(){o.startAni()}let{onClick:D=void 0}=t,{onPointerUp:Q=void 0}=t,{onPointerDown:ee=void 0}=t,{onPointerOver:W=void 0}=t,{onPointerOut:oe=void 0}=t,{onPointerEnter:N=void 0}=t,{onPointerLeave:le=void 0}=t,{onPointerMove:ce=void 0}=t;function ye(q){Cn[q?"unshift":"push"](()=>{o=q,n(6,o)})}function re(q){Ae=q,n(7,Ae),n(47,i),n(5,_),n(2,f)}return e.$$set=q=>{"name"in q&&n(15,l=q.name),"parent"in q&&n(16,u=q.parent),"parentForSlot"in q&&n(1,h=q.parentForSlot),"parentForUs"in q&&n(14,d=q.parentForUs),"scene"in q&&n(2,f=q.scene),"aniauto"in q&&n(3,p=q.aniauto),"interact"in q&&n(17,y=q.interact),"mesh"in q&&n(0,v=q.mesh),"material"in q&&n(12,w=q.material),"geometry"in q&&n(13,P=q.geometry),"userData"in q&&n(18,k=q.userData),"animation"in q&&n(4,G=q.animation),"mat"in q&&n(19,V=q.mat),"pos"in q&&n(20,I=q.pos),"rot"in q&&n(21,B=q.rot),"scale"in q&&n(22,j=q.scale),"castShadow"in q&&n(23,ie=q.castShadow),"receiveShadow"in q&&n(24,me=q.receiveShadow),"matrix"in q&&n(25,ge=q.matrix),"props"in q&&n(26,fe=q.props),"fnOnMount"in q&&n(27,T=q.fnOnMount),"onClick"in q&&n(34,D=q.onClick),"onPointerUp"in q&&n(35,Q=q.onPointerUp),"onPointerDown"in q&&n(36,ee=q.onPointerDown),"onPointerOver"in q&&n(37,W=q.onPointerOver),"onPointerOut"in q&&n(38,oe=q.onPointerOut),"onPointerEnter"in q&&n(39,N=q.onPointerEnter),"onPointerLeave"in q&&n(40,le=q.onPointerLeave),"onPointerMove"in q&&n(41,ce=q.onPointerMove),"$$scope"in q&&n(48,s=q.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&32|e.$$.dirty[1]&65536&&n(42,m=i[_].canvas.interactive),e.$$.dirty[0]&45057|e.$$.dirty[1]&4096&&P&&w&&!v&&g&&(n(0,v=new st(P,w)),n(0,v.name=l,v),n(0,v.userData.initScale=v.scale.x,v),console.info("SVELTHREE > Mesh : "+P.type+" created!",{mesh:v}),console.info("SVELTHREE > Mesh : saved 'geometry' (generated):",P),console.info("SVELTHREE > Mesh : saved 'material' (generated):",w),n(44,b=new Ol(v)),n(45,x=new wr(v))),e.$$.dirty[0]&37748737|e.$$.dirty[1]&8192&&(ge||j&&Io(j)&&(b.tryScaleUpdate(j),n(0,v.userData.initScale=v.scale.x,v))),e.$$.dirty[0]&1&&v&&Z(),e.$$.dirty[0]&8192|e.$$.dirty[1]&4096&&P&&g&&(console.info("SVELTHREE > Mesh : Geometry provided!"),U()),e.$$.dirty[0]&4096|e.$$.dirty[1]&4096&&w&&g&&(console.info("SVELTHREE > Mesh : Material provided!"),n(46,E=new wr(w)),C()),e.$$.dirty[0]&8193|e.$$.dirty[1]&4096&&P&&!g&&P!==v.geometry&&U(),e.$$.dirty[0]&4097|e.$$.dirty[1]&4096&&w&&!g&&w!==v.material&&C(),e.$$.dirty[0]&1&&(v?O():console.error("SVELTHREE > Mesh : mesh was not created!")),e.$$.dirty[0]&262144&&k&&X(),e.$$.dirty[0]&34603008|e.$$.dirty[1]&8192&&(ge||I&&Io(I)&&b.tryPosUpdate(I)),e.$$.dirty[0]&35651584|e.$$.dirty[1]&8192&&(ge||B&&Io(B)&&b.tryRotUpdate(B)),e.$$.dirty[0]&33554432&&ny(ge)&&(console.warn("SVELTHREE > Mesh : Matrix provided, will ignore 'pos', 'rot' or 'scale' props if any provided!"),DS()),e.$$.dirty[0]&8388608&&ie&&z(),e.$$.dirty[0]&16777216&&me&&L(),e.$$.dirty[0]&67108864|e.$$.dirty[1]&16384&&fe&&Object.keys(fe).length>0&&x&&x.tryPropsUpdate(fe),e.$$.dirty[0]&524288|e.$$.dirty[1]&32768&&V&&Object.keys(V).length>0&&E&&(console.info("SVELTHREE > Mesh : matPropIterator is true: ",V),E.tryPropsUpdate(V)),e.$$.dirty[0]&36|e.$$.dirty[1]&65536&&n(7,Ae=i[_].scenes[f.userData.indexInScenes].isActive),e.$$.dirty[0]&16&&G&&n(8,ve=!0),e.$$.dirty[0]&131072|e.$$.dirty[1]&2048&&(m&&y?n(9,De=!0):n(9,De=!1))},[v,h,f,p,G,_,o,Ae,ve,De,a,c,w,P,d,l,u,y,k,V,I,B,j,ie,me,ge,fe,T,H,Y,K,J,ne,S,D,Q,ee,W,oe,N,le,ce,m,g,b,x,E,i,s,r,ye,re]}class Or extends jt{constructor(t){super(),Wt(this,t,OS,IS,Ut,{name:15,parent:16,parentForSlot:1,parentForUs:14,scene:2,aniauto:3,interact:17,mesh:0,material:12,geometry:13,userData:18,animation:4,mat:19,pos:20,rot:21,scale:22,castShadow:23,receiveShadow:24,matrix:25,props:26,fnOnMount:27,removeMeshFromParent:28,getMesh:29,getName:30,getScene:31,getAnimation:32,startAni:33,onClick:34,onPointerUp:35,onPointerDown:36,onPointerOver:37,onPointerOut:38,onPointerEnter:39,onPointerLeave:40,onPointerMove:41},[-1,-1])}get name(){return this.$$.ctx[15]}set name(t){this.$set({name:t}),Qe()}get parent(){return this.$$.ctx[16]}set parent(t){this.$set({parent:t}),Qe()}get parentForSlot(){return this.$$.ctx[1]}set parentForSlot(t){this.$set({parentForSlot:t}),Qe()}get parentForUs(){return this.$$.ctx[14]}set parentForUs(t){this.$set({parentForUs:t}),Qe()}get scene(){return this.$$.ctx[2]}set scene(t){this.$set({scene:t}),Qe()}get aniauto(){return this.$$.ctx[3]}set aniauto(t){this.$set({aniauto:t}),Qe()}get interact(){return this.$$.ctx[17]}set interact(t){this.$set({interact:t}),Qe()}get mesh(){return this.$$.ctx[0]}set mesh(t){this.$set({mesh:t}),Qe()}get material(){return this.$$.ctx[12]}set material(t){this.$set({material:t}),Qe()}get geometry(){return this.$$.ctx[13]}set geometry(t){this.$set({geometry:t}),Qe()}get userData(){return this.$$.ctx[18]}set userData(t){this.$set({userData:t}),Qe()}get animation(){return this.$$.ctx[4]}set animation(t){this.$set({animation:t}),Qe()}get mat(){return this.$$.ctx[19]}set mat(t){this.$set({mat:t}),Qe()}get pos(){return this.$$.ctx[20]}set pos(t){this.$set({pos:t}),Qe()}get rot(){return this.$$.ctx[21]}set rot(t){this.$set({rot:t}),Qe()}get scale(){return this.$$.ctx[22]}set scale(t){this.$set({scale:t}),Qe()}get castShadow(){return this.$$.ctx[23]}set castShadow(t){this.$set({castShadow:t}),Qe()}get receiveShadow(){return this.$$.ctx[24]}set receiveShadow(t){this.$set({receiveShadow:t}),Qe()}get matrix(){return this.$$.ctx[25]}set matrix(t){this.$set({matrix:t}),Qe()}get props(){return this.$$.ctx[26]}set props(t){this.$set({props:t}),Qe()}get fnOnMount(){return this.$$.ctx[27]}set fnOnMount(t){this.$set({fnOnMount:t}),Qe()}get removeMeshFromParent(){return this.$$.ctx[28]}get getMesh(){return this.$$.ctx[29]}get getName(){return this.$$.ctx[30]}get getScene(){return this.$$.ctx[31]}get getAnimation(){return this.$$.ctx[32]}get startAni(){return this.$$.ctx[33]}get onClick(){return this.$$.ctx[34]}set onClick(t){this.$set({onClick:t}),Qe()}get onPointerUp(){return this.$$.ctx[35]}set onPointerUp(t){this.$set({onPointerUp:t}),Qe()}get onPointerDown(){return this.$$.ctx[36]}set onPointerDown(t){this.$set({onPointerDown:t}),Qe()}get onPointerOver(){return this.$$.ctx[37]}set onPointerOver(t){this.$set({onPointerOver:t}),Qe()}get onPointerOut(){return this.$$.ctx[38]}set onPointerOut(t){this.$set({onPointerOut:t}),Qe()}get onPointerEnter(){return this.$$.ctx[39]}set onPointerEnter(t){this.$set({onPointerEnter:t}),Qe()}get onPointerLeave(){return this.$$.ctx[40]}set onPointerLeave(t){this.$set({onPointerLeave:t}),Qe()}get onPointerMove(){return this.$$.ctx[41]}set onPointerMove(t){this.$set({onPointerMove:t}),Qe()}}const FS=e=>({sti:e&16}),Qp=e=>({sti:e[4]});function NS(e){let t,n;const i=e[15].default,r=zh(i,e,e[14],Qp);return{c(){t=Xe("canvas"),r&&r.c(),Ue(t,"width",e[0]),Ue(t,"height",e[1]),Ue(t,"style",e[2]),Ue(t,"class",e[3])},m(s,o){$e(s,t,o),r&&r.m(t,null),e[16](t),n=!0},p(s,[o]){r&&r.p&&(!n||o&16400)&&Gh(r,i,s,s[14],o,FS,Qp),(!n||o&1)&&Ue(t,"width",s[0]),(!n||o&2)&&Ue(t,"height",s[1]),(!n||o&4)&&Ue(t,"style",s[2]),(!n||o&8)&&Ue(t,"class",s[3])},i(s){n||(Re(r,s),n=!0)},o(s){Oe(r,s),n=!1},d(s){s&&Ye(t),r&&r.d(s),e[16](null)}}}function kS(e,t,n){let i;dt(e,it,A=>n(13,i=A));let{$$slots:r={},$$scope:s}=t,{w:o}=t,{h:a}=t,{style:c=void 0}=t,{class:l=void 0}=t;const u={id:void 0,canvas:{dom:void 0,dim:{w:void 0,h:void 0},interactive:!1},scenes:[],cameras:[],activeCamera:void 0,renderer:void 0,raycaster:void 0,allIntersections:void 0,pointer:{pos:new ae(-1,-1),event:void 0,isOverCanvas:!1,unprojected:new R},orbitcontrols:void 0};u.canvas.dim.w=o,u.canvas.dim.h=a;let h;be(it,i=[...i,u],i),h=i.length-1;let d;function f(){i[h].canvas.dom===void 0&&be(it,i[h].canvas.dom=d,i)}let{interactive:p=!1}=t,y=!1,_,m;function g(){window.addEventListener("pointermove",v,!1)}function v(A){let Z=d.getBoundingClientRect();be(it,i[h].pointer.pos.x=(A.clientX-Z.left)/(Z.right-Z.left)*2-1,i),be(it,i[h].pointer.pos.y=-((A.clientY-Z.top)/(Z.bottom-Z.top))*2+1,i),A.clientX>Z.left&&A.clientX<Z.right&&A.clientY>Z.top&&A.clientY<Z.bottom?be(it,i[h].pointer.isOverCanvas=!0,i):be(it,i[h].pointer.isOverCanvas=!1,i);let k=new R(i[h].pointer.pos.x,i[h].pointer.pos.y,.5),X=new R;k.unproject(i[h].activeCamera),k.sub(i[h].activeCamera.position).normalize();let G=-i[h].activeCamera.position.z/k.z;X.copy(i[h].activeCamera.position).add(k.multiplyScalar(G)),i[h].pointer.unprojected.copy(X),be(it,i[h].pointer.event=A,i)}function b(){window.removeEventListener("pointermove",v)}wn(()=>(n(12,m=!0),console.info("SVELTHREE > onMount : Canvas, $svelthreeStores[sti]: ",i[h]),()=>{console.info("SVELTHREE > onDestroy : Canvas"),b()}));function x(){return i[h].canvas.dom}function E(){return{w:i[h].canvas.dom.width,h:i[h].canvas.dom.height}}function w(A,Z){be(it,i[h].canvas.dim={w:A,h:Z},i)}function P(A){Cn[A?"unshift":"push"](()=>{d=A,n(5,d)})}return e.$$set=A=>{"w"in A&&n(0,o=A.w),"h"in A&&n(1,a=A.h),"style"in A&&n(2,c=A.style),"class"in A&&n(3,l=A.class),"interactive"in A&&n(6,p=A.interactive),"$$scope"in A&&n(14,s=A.$$scope)},e.$$.update=()=>{e.$$.dirty&32&&d&&f(),e.$$.dirty&4160&&m&&n(10,y=p),e.$$.dirty&11312&&y&&!_&&d&&(n(11,_=new Xl),be(it,i[h].raycaster=_,i),be(it,i[h].canvas.interactive=!0,i),g(),console.info("SVELTHREE > Canvas : after Raycaster creation, $svelthreeStores[sti]: ",i[h])),e.$$.dirty&11280&&!y&&_&&(be(it,i[h].canvas.interactive=!1,i),be(it,i[h].raycaster=void 0,i),n(11,_=null),b(),console.info("SVELTHREE > Canvas : after Raycaster remove, $svelthreeStores[sti]: ",i[h]))},[o,a,c,l,h,d,p,x,E,w,y,_,m,i,s,r,P]}class BS extends jt{constructor(t){super(),Wt(this,t,kS,NS,Ut,{w:0,h:1,style:2,class:3,interactive:6,getCanvas:7,getDimensions:8,doResize:9})}get getCanvas(){return this.$$.ctx[7]}get getDimensions(){return this.$$.ctx[8]}get doResize(){return this.$$.ctx[9]}}class US{constructor(t){this.light=t}tryIntensityUpdate(t){console.info("SVELTHREE > LightUtils > tryIntensityUpdate ",t),this.light&&(this.light.intensity=t)}tryColorUpdate(t){console.info("color",t),this.light&&(ty(t)?Io(t)&&(this.light.color=new _e(t[0],t[1],t[2])):this.light.color=new _e(t))}tryShadowMapSizeUpdate(t){console.info("SVELTHREE > LightUtils > tryShadowMapSizeUpdate",t),this.light&&(this.light.shadow.mapSize.width=t,this.light.shadow.mapSize.height=t)}tryShadowBiasUpdate(t){console.info("SVELTHREE > LightUtils > tryShadowBiasUpdate",t),this.light&&(this.light.shadow.bias=t,this.light.shadow.bias=t)}tryCastShadowUpdate(t){console.info("SVELTHREE > LightUtils > tryCastShadowUpdate",t),this.light&&(this.light.castShadow=t)}}function HS(e){let t,n,i;function r(o){e[26](o)}let s={animationEnabled:e[6],animation:e[1],aniauto:e[2],obj:e[3],scene:e[0]};return e[5]!==void 0&&(s.currentSceneActive=e[5]),t=new xf({props:s}),e[25](t),Cn.push(()=>Wh(t,"currentSceneActive",r)),{c(){et(t.$$.fragment)},m(o,a){Je(t,o,a),i=!0},p(o,[a]){const c={};a&64&&(c.animationEnabled=o[6]),a&2&&(c.animation=o[1]),a&4&&(c.aniauto=o[2]),a&8&&(c.obj=o[3]),a&1&&(c.scene=o[0]),!n&&a&32&&(n=!0,c.currentSceneActive=o[5],Vh(()=>n=!1)),t.$set(c)},i(o){i||(Re(t.$$.fragment,o),i=!0)},o(o){Oe(t.$$.fragment,o),i=!1},d(o){e[25](null),Ke(t,o)}}}function zS(e,t,n){let i;dt(e,it,B=>n(24,i=B));let r,{scene:s}=t,o;if(s)if(s.type==="Scene")a();else throw console.warn("SVELTHREE > Light : You have to provide a valid 'scene' prop of type 'Scene'!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");else throw console.warn("SVELTHREE > Light : You have to provide a {scene} prop!",{scene:s}),new Error("SVELTHREE Exception (see warning above)");function a(){if(s.userData.sti>=0)n(20,o=s.userData.sti);else throw console.warn("SVELTHREE > Light : Failed to set 'sti' from 'scene.userData.sti', 'sti' has to be >= 0!",{scene:s,userData:s.userData,sti:s.userData.sti}),new Error("SVELTHREE Exception (see warning above)")}let{animation:c=void 0}=t,{aniauto:l=void 0}=t,{parent:u=void 0}=t,{parentForUs:h=void 0}=t,{light:d=void 0}=t,f,p,y;if(d)p=new Ol(d),y=new wr(d),f=new US(d);else throw console.warn("SVELTHREE > Light : light was not provided by parent component!",{light:d}),new Error("SVELTHREE Exception (see warning above)");u&&u!==d&&(h=u),_();function _(){h?d.parent!==h&&(h.add(d),console.info("SVELTHREE > Light : "+d.type+" was added to parent!",{light:d,parent:h,scene:s,total:s.children.length})):d.parent!==s&&(s.add(d),console.info("SVELTHREE > Light : "+d.type+" was added to scene!",{light:d,scene:s,total:s.children.length}))}let{pos:m=[0,1,0]}=t,{color:g=void 0}=t,{intensity:v=0}=t,{shadowMapSize:b=void 0}=t,{shadowBias:x=void 0}=t,{castShadow:E=void 0}=t,{props:w=void 0}=t,P=!1,A=!1,{fnOnMount:Z=void 0}=t;wn(Z?()=>Z(self):()=>(console.info("SVELTHREE > onMount : Light"),()=>{console.info("SVELTHREE > onDestroy : Light"),k()}));function k(){d.parent.remove(d)}function X(){return r.getAnimation()}function G(){r.startAni()}function V(B){Cn[B?"unshift":"push"](()=>{r=B,n(4,r)})}function I(B){P=B,n(5,P),n(24,i),n(20,o),n(0,s)}return e.$$set=B=>{"scene"in B&&n(0,s=B.scene),"animation"in B&&n(1,c=B.animation),"aniauto"in B&&n(2,l=B.aniauto),"parent"in B&&n(8,u=B.parent),"parentForUs"in B&&n(7,h=B.parentForUs),"light"in B&&n(3,d=B.light),"pos"in B&&n(9,m=B.pos),"color"in B&&n(10,g=B.color),"intensity"in B&&n(11,v=B.intensity),"shadowMapSize"in B&&n(12,b=B.shadowMapSize),"shadowBias"in B&&n(13,x=B.shadowBias),"castShadow"in B&&n(14,E=B.castShadow),"props"in B&&n(15,w=B.props),"fnOnMount"in B&&n(16,Z=B.fnOnMount)},e.$$.update=()=>{e.$$.dirty&4194816&&m&&m.length>0&&p.tryPosUpdate(m),e.$$.dirty&2099200&&v&&f.tryIntensityUpdate(v),e.$$.dirty&2098176&&g&&f.tryColorUpdate(g),e.$$.dirty&2101248&&b&&f.tryShadowMapSizeUpdate(b),e.$$.dirty&2105344&&x&&f.tryShadowBiasUpdate(x),e.$$.dirty&2113536&&E&&f.tryCastShadowUpdate(E),e.$$.dirty&8421376&&w&&Object.keys(w).length>0&&y.tryPropsUpdate(w),e.$$.dirty&17825793&&n(5,P=i[o].scenes[s.userData.indexInScenes].isActive),e.$$.dirty&2&&c&&n(6,A=!0)},[s,c,l,d,r,P,A,h,u,m,g,v,b,x,E,w,Z,k,X,G,o,f,p,y,i,V,I]}class wf extends jt{constructor(t){super(),Wt(this,t,zS,HS,Ut,{scene:0,animation:1,aniauto:2,parent:8,parentForUs:7,light:3,pos:9,color:10,intensity:11,shadowMapSize:12,shadowBias:13,castShadow:14,props:15,fnOnMount:16,removeLightFromParent:17,getAnimation:18,startAni:19})}get removeLightFromParent(){return this.$$.ctx[17]}get getAnimation(){return this.$$.ctx[18]}get startAni(){return this.$$.ctx[19]}}function GS(e){let t,n;return t=new wf({props:{scene:e[7],light:e[8],props:e[0],pos:e[1],color:e[2],intensity:e[3],shadowMapSize:e[4],shadowBias:e[5],castShadow:e[6]}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,[r]){const s={};r&128&&(s.scene=i[7]),r&1&&(s.props=i[0]),r&2&&(s.pos=i[1]),r&4&&(s.color=i[2]),r&8&&(s.intensity=i[3]),r&16&&(s.shadowMapSize=i[4]),r&32&&(s.shadowBias=i[5]),r&64&&(s.castShadow=i[6]),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function VS(e,t,n){let{props:i=void 0}=t,{pos:r=void 0}=t,{color:s=void 0}=t,{intensity:o=void 0}=t,{shadowMapSize:a=void 0}=t,{shadowBias:c=void 0}=t,{castShadow:l=void 0}=t,{scene:u}=t,h=new fa;function d(){return h}let{helper:f=void 0}=t,p;wn(()=>(console.info("SVELTHREE > onMount : DirectionalLight"),g(),()=>{console.info("SVELTHREE > onDestroy : DirectionalLight"),v()}));function y(){n(12,p=new Ys(h,.1,"aqua")),u.add(p),n(12,p.visible=!1,p),console.info("SVELTHREE > "+h.type+" HELPER added!",{lightHelper:p,scene:u,total:u.children.length})}let _=!1,m=0;function g(){_=!0,m=requestAnimationFrame(b)}function v(){_=!1,cancelAnimationFrame(m)}function b(){_&&(p&&p.update(),m=requestAnimationFrame(b))}function x(){return p}return e.$$set=E=>{"props"in E&&n(0,i=E.props),"pos"in E&&n(1,r=E.pos),"color"in E&&n(2,s=E.color),"intensity"in E&&n(3,o=E.intensity),"shadowMapSize"in E&&n(4,a=E.shadowMapSize),"shadowBias"in E&&n(5,c=E.shadowBias),"castShadow"in E&&n(6,l=E.castShadow),"scene"in E&&n(7,u=E.scene),"helper"in E&&n(10,f=E.helper)},e.$$.update=()=>{e.$$.dirty&5120&&!p&&h&&f&&y()},[i,r,s,o,a,c,l,u,h,d,f,x,p]}class $p extends jt{constructor(t){super(),Wt(this,t,VS,GS,Ut,{props:0,pos:1,color:2,intensity:3,shadowMapSize:4,shadowBias:5,castShadow:6,scene:7,getLight:9,helper:10,getHelper:11})}get getLight(){return this.$$.ctx[9]}get getHelper(){return this.$$.ctx[11]}}function WS(e){let t,n;return t=new wf({props:{scene:e[3],light:e[4],props:e[0],color:e[1],intensity:e[2]}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,[r]){const s={};r&8&&(s.scene=i[3]),r&1&&(s.props=i[0]),r&2&&(s.color=i[1]),r&4&&(s.intensity=i[2]),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function jS(e,t,n){let{props:i=void 0}=t,{color:r=void 0}=t,{intensity:s=void 0}=t,{scene:o}=t,a=new Al;function c(){return a}return wn(()=>(console.info("SVELTHREE > onMount : AmbientLight"),()=>{console.info("SVELTHREE > onDestroy : AmbientLight!")})),e.$$set=l=>{"props"in l&&n(0,i=l.props),"color"in l&&n(1,r=l.color),"intensity"in l&&n(2,s=l.intensity),"scene"in l&&n(3,o=l.scene)},[i,r,s,o,a,c]}class XS extends jt{constructor(t){super(),Wt(this,t,jS,WS,Ut,{props:0,color:1,intensity:2,scene:3,getLight:5})}get getLight(){return this.$$.ctx[5]}}function YS(e){let t,n;return t=new wf({props:{scene:e[10],parent:e[1],light:e[11],props:e[0],pos:e[4],color:e[5],intensity:e[6],shadowMapSize:e[7],shadowBias:e[8],castShadow:e[9],animation:e[2],aniauto:e[3]}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,[r]){const s={};r&1024&&(s.scene=i[10]),r&2&&(s.parent=i[1]),r&2048&&(s.light=i[11]),r&1&&(s.props=i[0]),r&16&&(s.pos=i[4]),r&32&&(s.color=i[5]),r&64&&(s.intensity=i[6]),r&128&&(s.shadowMapSize=i[7]),r&256&&(s.shadowBias=i[8]),r&512&&(s.castShadow=i[9]),r&4&&(s.animation=i[2]),r&8&&(s.aniauto=i[3]),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function qS(e,t,n){let{props:i=void 0}=t,{parent:r=void 0}=t,{name:s=void 0}=t,{animation:o=void 0}=t,{aniauto:a=void 0}=t,{pos:c=void 0}=t,{color:l=void 0}=t,{intensity:u=void 0}=t,{shadowMapSize:h=void 0}=t,{shadowBias:d=void 0}=t,{castShadow:f=!1}=t,{scene:p}=t,y=new ha;y.name=s;let{helper:_=!1}=t,m;function g(){n(16,m=new Xs(y,.1,"aqua")),p.add(m),n(16,m.visible=!0,m),console.info("SVELTHREE > "+y.type+" : HELPER added!",{lightHelper:m,scene:p,total:p.children.length})}wn(()=>(console.info("SVELTHREE > onMount : "+y.type),()=>{console.info("SVELTHREE > onDestroy : "+y.type)}));function v(){return y}function b(){return m}return e.$$set=x=>{"props"in x&&n(0,i=x.props),"parent"in x&&n(1,r=x.parent),"name"in x&&n(12,s=x.name),"animation"in x&&n(2,o=x.animation),"aniauto"in x&&n(3,a=x.aniauto),"pos"in x&&n(4,c=x.pos),"color"in x&&n(5,l=x.color),"intensity"in x&&n(6,u=x.intensity),"shadowMapSize"in x&&n(7,h=x.shadowMapSize),"shadowBias"in x&&n(8,d=x.shadowBias),"castShadow"in x&&n(9,f=x.castShadow),"scene"in x&&n(10,p=x.scene),"helper"in x&&n(13,_=x.helper)},e.$$.update=()=>{e.$$.dirty&75776&&!m&&y&&_&&g()},[i,r,o,a,c,l,u,h,d,f,p,y,s,_,v,b,m]}class ZS extends jt{constructor(t){super(),Wt(this,t,qS,YS,Ut,{props:0,parent:1,name:12,animation:2,aniauto:3,pos:4,color:5,intensity:6,shadowMapSize:7,shadowBias:8,castShadow:9,scene:10,helper:13,getLight:14,getHelper:15})}get getLight(){return this.$$.ctx[14]}get getHelper(){return this.$$.ctx[15]}}const JS=e=>({scene:e&1}),em=e=>({scene:e[0]});function KS(e){let t;const n=e[7].default,i=zh(n,e,e[6],em);return{c(){i&&i.c()},m(r,s){i&&i.m(r,s),t=!0},p(r,[s]){i&&i.p&&(!t||s&65)&&Gh(i,n,r,r[6],s,JS,em)},i(r){t||(Re(i,r),t=!0)},o(r){Oe(i,r),t=!1},d(r){i&&i.d(r)}}}function QS(e,t,n){let i;dt(e,it,f=>n(8,i=f));let{$$slots:r={},$$scope:s}=t,{id:o=void 0}=t;if(!o)throw console.warn("SVELTHREE > Scene : You have to provide an 'id' prop (not empty String) for Scenes in order to assign them to a 'WebGLRenderer' component!",{id:o}),new Error("SVELTHREE Exception (see warning above)");let{props:a=void 0}=t,{sti:c}=t;if(c===void 0)throw console.warn("SVELTHREE > Scene : You have to provide a {sti} prop for the Scene!",{sti:c}),new Error("SVELTHREE Exception (see warning above)");const l=i[c];let u=new Ho;u.userData.isActive=!1,u.userData.id=o,u.userData.sti=c,u.userData.animations=[],u.userData.indexInScenes=l.scenes.length,l.scenes.push({scene:u,id:o,isActive:!1}),wn(()=>{console.info("SVELTHREE > onMount : Scene",{sti:c});for(let f in a)switch(f){case"background":n(0,u[f]=new _e(a[f]),u);break}return()=>{console.info("SVELTHREE > onDestroy : Scene")}});function h(){return u}function d(){return o}return e.$$set=f=>{"id"in f&&n(1,o=f.id),"props"in f&&n(2,a=f.props),"sti"in f&&n(3,c=f.sti),"$$scope"in f&&n(6,s=f.$$scope)},[u,o,a,c,h,d,s,r]}class $S extends jt{constructor(t){super(),Wt(this,t,QS,KS,Ut,{id:1,props:2,sti:3,getScene:4,getId:5})}get getScene(){return this.$$.ctx[4]}get getId(){return this.$$.ctx[5]}}function eT(e,t,n){let i;dt(e,it,O=>n(20,i=O));let r,s,{config:o=void 0}=t,{props:a=void 0}=t,{enableShadowMap:c=!1}=t,{shadowMapType:l=hg}=t,{sceneId:u}=t,{camId:h}=t,d,f,p="",y="",_,{sti:m}=t;if(m===void 0)throw console.warn("SVELTHREE > Scene : You have to provide a {sti} prop for the WebGLRenderer component!",{sti:m}),new Error("SVELTHREE Exception (see warning above)");let g,v;wn(()=>(console.info("SVELTHREE > onMount : WebGLRenderer"),V(),()=>{console.info("SVELTHREE > onDestroy : WebGLRenderer"),I()}));function b(){console.info("SVELTHREE > WebGLRenderer : setCurrentCamActive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive}),n(14,f.userData.isActive=!0,f),be(it,i[m].cameras[f.userData.indexInCameras].isActive=!0,i),be(it,i[m].activeCamera=f,i),console.info("SVELTHREE > WebGLRenderer : setCurrentCamActive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive},"done!")}function x(){console.info("SVELTHREE > WebGLRenderer : setCurrentCamInactive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive}),n(14,f.userData.isActive=!1,f),be(it,i[m].cameras[f.userData.indexInCameras].isActive=!1,i),console.info("SVELTHREE > WebGLRenderer : setCurrentCamInactive",{currentCam:f.type,uuid:f.uuid,isActive:f.userData.isActive},"done!")}function E(O,C){console.info("SVELTHREE > WebGLRenderer : resizeRenderer!"),r&&r.setSize(O,C,!1)}function w(O,C){console.info("SVELTHREE > WebGLRenderer : updateCameraAspect!"),f&&(f.type==="PerspectiveCamera"&&n(14,f.aspect=O/C,f),f.updateProjectionMatrix())}function P(){if(console.info("SVELTHREE > WebGLRenderer : getSceneToRender!"),i[m].scenes.length>0){if(u===void 0)throw console.warn("SVELTHREE > WebGLRenderer : You have to provide the 'sceneId' prop!",{sceneId:u}),new Error("SVELTHREE Exception (see warning above)");for(let O=0;O<i[m].scenes.length;O++){let C=i[m].scenes[O];if(C.id===u)return n(15,p=u),C.scene}throw console.warn("SVELTHREE > WebGLRenderer : Scene with id '"+u+"' not found!",{scenes:i[m].scenes}),new Error("SVELTHREE Exception (see warning above)")}else throw console.warn("SVELTHREE > WebGLRenderer : getSceneToRender: No Scenes available!",{scenes:i[m].scenes}),new Error("SVELTHREE Exception (see warning above)")}function A(){if(console.info("SVELTHREE > WebGLRenderer : getCamToRender!"),i[m].cameras.length>0){if(h===void 0)throw console.warn("SVELTHREE > WebGLRenderer : You have to provide the 'camId' prop!",{camId:h}),new Error("SVELTHREE Exception (see warning above)");for(let O=0;O<i[m].cameras.length;O++){let C=i[m].cameras[O];if(C.id===h)return n(16,y=h),C.camera}throw console.warn("SVELTHREE > WebGLRenderer : Camera with id '"+h+"' not found!",{cameras:i[m].cameras}),new Error("SVELTHREE Exception (see warning above)")}else throw console.warn("SVELTHREE > WebGLRenderer : getCamToRender: No Cameras available! $svelthreeStores[sti].cameras:",{cameras:i[m].cameras}),new Error("SVELTHREE Exception (see warning above)")}function Z(){d.userData.isActive===!0&&(n(13,d.userData.isActive=!1,d),be(it,i[m].scenes[d.userData.indexInScenes].isActive=!1,i))}function k(){d.userData.isActive===!1?(n(13,d.userData.isActive=!0,d),be(it,i[m].scenes[d.userData.indexInScenes].isActive=!0,i)):d.userData.isActive===void 0&&(console.info(d),n(13,d.userData.isActive=!0,d),be(it,i[m].scenes[d.userData.indexInScenes].isActive=!0,i))}let X=!1,G;function V(){X=!0,G=requestAnimationFrame(ve)}function I(){X=!1,cancelAnimationFrame(G)}let B=!0,j=!1,ie;function me(O){O&&i[m].allIntersections[0].object.userData.interact?document.body.style.cursor="pointer":i[m].orbitcontrols?document.body.style.cursor="all-scroll":document.body.style.cursor="default"}let ge=!0;function fe(){i[m].pointer.isOverCanvas?(ge=!1,i[m].allIntersections&&(i[m].allIntersections.length>0?me(!0):me(!1))):ge||(ge=!0,document.body.style.cursor="default")}let Ae;function ve(){X&&(B&&(B=!1,console.info("SVELTHREE > WebGLRenderer > animate!",d,f,_)),j&&(ie.setFromCamera(i[m].pointer.pos,f),Ae=d.children.filter(O=>O.type==="Mesh"),be(it,i[m].allIntersections=ie.intersectObjects(Ae,!0),i)),j&&fe(),i[m].orbitcontrols&&i[m].orbitcontrols.update(),r.render(d,f),G=requestAnimationFrame(ve))}function De(){return r}function T(){return f}function M(O={sceneId:"",camId:""}){n(0,u=O.sceneId),n(1,h=O.camId)}return e.$$set=O=>{"config"in O&&n(2,o=O.config),"props"in O&&n(3,a=O.props),"enableShadowMap"in O&&n(4,c=O.enableShadowMap),"shadowMapType"in O&&n(5,l=O.shadowMapType),"sceneId"in O&&n(0,u=O.sceneId),"camId"in O&&n(1,h=O.camId),"sti"in O&&n(6,m=O.sti)},e.$$.update=()=>{e.$$.dirty[0]&1050692&&(r||i[m].canvas.dom&&(n(11,r=new Ea(Object.assign({canvas:i[m].canvas.dom},o))),n(17,_=i[m].canvas.dom),n(12,s=new wr(r)),be(it,i[m].renderer=r,i))),e.$$.dirty[0]&2064&&r&&(c?n(11,r.shadowMap.enabled=!0,r):n(11,r.shadowMap.enabled=!1,r)),e.$$.dirty[0]&2080&&r&&r.shadowMap.enabled&&n(11,r.shadowMap.type=l,r),e.$$.dirty[0]&6152&&r&&a&&Object.keys(a).length>0&&s&&s.tryPropsUpdate(a),e.$$.dirty[0]&8193&&!d&&u&&(n(13,d=P()),k()),e.$$.dirty[0]&49152&&!f&&p&&(n(14,f=A()),b()),e.$$.dirty[0]&122883&&(u!==p&&d&&(Z(),n(13,d=P()),k()),h!==y&&f&&f&&(x(),n(14,f=A()),b())),e.$$.dirty[0]&1048640&&n(18,g=i[m].canvas.dim.w),e.$$.dirty[0]&1048640&&n(19,v=i[m].canvas.dim.h),e.$$.dirty[0]&917504&&(g||v)&&_&&(console.info("SVELTHREE > WebGLRenderer : before resize renderer 1"),E(g,v),w(g,v)),e.$$.dirty[0]&1048640&&i[m].canvas.interactive&&(ie=i[m].raycaster,j=!0),e.$$.dirty[0]&1048640&&(i[m].canvas.interactive||(j=!1,ie=null))},[u,h,o,a,c,l,m,I,De,T,M,r,s,d,f,p,y,_,g,v,i]}class tT extends jt{constructor(t){super(),Wt(this,t,eT,null,Ut,{config:2,props:3,enableShadowMap:4,shadowMapType:5,sceneId:0,camId:1,sti:6,stopAnimating:7,getRenderer:8,getCurrentCamera:9,setRender:10},[-1,-1])}get stopAnimating(){return this.$$.ctx[7]}get getRenderer(){return this.$$.ctx[8]}get getCurrentCamera(){return this.$$.ctx[9]}get setRender(){return this.$$.ctx[10]}}function br(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function Sa(e){return e===1?e:1-Math.pow(2,-10*e)}function ry(e){return--e*e*e*e*e+1}function tm(e){return Object.prototype.toString.call(e)==="[object Date]"}function Uh(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((r,s)=>Uh(e[s],r));return r=>i.map(s=>s(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(tm(e)&&tm(t)){e=e.getTime(),t=t.getTime();const s=t-e;return o=>new Date(e+o*s)}const i=Object.keys(t),r={};return i.forEach(s=>{r[s]=Uh(e[s],t[s])}),s=>{const o={};return i.forEach(a=>{o[a]=r[a](s)}),o}}if(n==="number"){const i=t-e;return r=>e+r*i}throw new Error(`Cannot interpolate ${n} values`)}function on(e,t={}){const n=sr(e);let i,r=e;function s(o,a){if(e==null)return n.set(e=o),Promise.resolve();r=o;let c=i,l=!1,{delay:u=0,duration:h=400,easing:d=cy,interpolate:f=Uh}=zu(zu({},t),a);if(h===0)return c&&(c.abort(),c=null),n.set(e=r),Promise.resolve();const p=fy()+u;let y;return i=dy(_=>{if(_<p)return!0;l||(y=f(e,o),typeof h=="function"&&(h=h(e,o)),l=!0),c&&(c.abort(),c=null);const m=_-p;return m>h?(n.set(e=o),!1):(n.set(e=y(d(m/h))),!0)}),i.promise}return{set:s,update:(o,a)=>s(o(r,e),a),subscribe:n.subscribe}}const Ic=on(0,{duration:1e3,easing:Sa}),Dc=on(0,{duration:100,easing:Sa}),nm=on(0,{duration:2e3,easing:Sa}),im=on(5,{duration:2e3,easing:Sa}),rm=on(0,{duration:2e3,easing:Sa}),yo=sr([]),_o=sr([]),zi=sr(""),Yt=sr([]),Bi=sr(""),_r=sr(""),Ta=5,He=9,nT=Ta+.2,iT=Ta/He*(He+1.5)+.2,Sr=Ta/He,li=(Ta-.8)/He,Ln=.8/He,Do=10;function Hh(e){const t=["varying vec3	vVertexWorldPosition;","varying vec3	vVertexNormal;","varying vec4	vFragColor;","void main(){","	vVertexNormal	= normalize(normalMatrix * normal);","	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;","	// set gl_Position","	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),n=["uniform vec3	glowColor;","uniform float	coeficient;","uniform float	power;","varying vec3	vVertexNormal;","varying vec3	vVertexWorldPosition;","varying vec4	vFragColor;","void main(){","	vec3 worldCameraToVertex= vVertexWorldPosition - cameraPosition;","	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;","	viewCameraToVertex	= normalize(viewCameraToVertex);","	float intensity		= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);","	gl_FragColor		= vec4(glowColor, intensity);","}"].join(`
`);return new sn({uniforms:{coeficient:{type:"f",value:1.5},power:{type:"f",value:9},glowColor:{type:"c",value:new _e(e)}},vertexShader:t,fragmentShader:n,transparent:!0,depthWrite:!1})}function sm(e){let t,n;return t=new ZS({props:{scene:e[0],pos:[e[11],e[12]+.1,e[13]],intensity:.25,color:e[1]?2984662:15549492,shadowMapSize:512*2,castShadow:!0}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&14336&&(s.pos=[i[11],i[12]+.1,i[13]]),r[0]&2&&(s.color=i[1]?2984662:15549492),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function rT(e){let t,n;return t=new Or({props:{scene:e[0],geometry:e[19],material:e[3]?e[21]:e[22],mat:{color:16777215},pos:[e[11],e[12],e[13]],rot:[e[14],e[15],e[16]],scale:[Ln+li*e[4]+.02,.52,Ln+.02],castShadow:!0,receiveShadow:!0}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&8&&(s.material=i[3]?i[21]:i[22]),r[0]&14336&&(s.pos=[i[11],i[12],i[13]]),r[0]&114688&&(s.rot=[i[14],i[15],i[16]]),r[0]&16&&(s.scale=[Ln+li*i[4]+.02,.52,Ln+.02]),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function sT(e){let t,n;return t=new Or({props:{scene:e[0],geometry:e[19],material:e[23],pos:[e[11],e[12],e[13]],rot:[e[14],e[15],e[16]],scale:[Ln+li*e[4]+.02,.52,Ln+.02],castShadow:!0,receiveShadow:!0}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&14336&&(s.pos=[i[11],i[12],i[13]]),r[0]&114688&&(s.rot=[i[14],i[15],i[16]]),r[0]&16&&(s.scale=[Ln+li*i[4]+.02,.52,Ln+.02]),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function oT(e){let t,n,i,r,s,o,a,c,l=!e[3]&&sm(e);n=new Or({props:{scene:e[0],castShadow:!0,receiveShadow:!0,name:e[2],geometry:e[19],material:e[20],pos:[e[11],e[12],e[13]],rot:[e[14],e[15],e[16]],scale:[Ln+li*e[4],e[1]?.51:.5,Ln],mat:{color:e[1]?2984662:15549492},animation:null}});const u=[sT,rT],h=[];function d(f,p){return f[17]===f[2]?0:(p[0]&262148&&(r=!!f[18].includes(f[2])),r?1:-1)}return~(s=d(e,[-1]))&&(o=h[s]=u[s](e)),{c(){l&&l.c(),t=Ve(),et(n.$$.fragment),i=Ve(),o&&o.c(),a=Fr()},m(f,p){l&&l.m(f,p),$e(f,t,p),Je(n,f,p),$e(f,i,p),~s&&h[s].m(f,p),$e(f,a,p),c=!0},p(f,p){f[3]?l&&(Ki(),Oe(l,1,1,()=>{l=null}),Qi()):l?(l.p(f,p),p[0]&8&&Re(l,1)):(l=sm(f),l.c(),Re(l,1),l.m(t.parentNode,t));const y={};p[0]&1&&(y.scene=f[0]),p[0]&4&&(y.name=f[2]),p[0]&14336&&(y.pos=[f[11],f[12],f[13]]),p[0]&114688&&(y.rot=[f[14],f[15],f[16]]),p[0]&18&&(y.scale=[Ln+li*f[4],f[1]?.51:.5,Ln]),p[0]&2&&(y.mat={color:f[1]?2984662:15549492}),n.$set(y);let _=s;s=d(f,p),s===_?~s&&h[s].p(f,p):(o&&(Ki(),Oe(h[_],1,1,()=>{h[_]=null}),Qi()),~s?(o=h[s],o?o.p(f,p):(o=h[s]=u[s](f),o.c()),Re(o,1),o.m(a.parentNode,a)):o=null)},i(f){c||(Re(l),Re(n.$$.fragment,f),Re(o),c=!0)},o(f){Oe(l),Oe(n.$$.fragment,f),Oe(o),c=!1},d(f){l&&l.d(f),f&&Ye(t),Ke(n,f),f&&Ye(i),~s&&h[s].d(f),f&&Ye(a)}}}function aT(e,t,n){let i,r=zt,s=()=>(r(),r=Kn(T,L=>n(11,i=L)),T),o,a=zt,c=()=>(a(),a=Kn(M,L=>n(12,o=L)),M),l,u=zt,h=()=>(u(),u=Kn(O,L=>n(13,l=L)),O),d,f=zt,p=()=>(f(),f=Kn(C,L=>n(14,d=L)),C),y,_=zt,m=()=>(_(),_=Kn(U,L=>n(15,y=L)),U),g,v=zt,b=()=>(v(),v=Kn(z,L=>n(16,g=L)),z),x,E;dt(e,Bi,L=>n(17,x=L)),dt(e,Yt,L=>n(18,E=L)),e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>a()),e.$$.on_destroy.push(()=>u()),e.$$.on_destroy.push(()=>f()),e.$$.on_destroy.push(()=>_()),e.$$.on_destroy.push(()=>v());let{scene:w}=t,{position:P=[0,0]}=t,{vertical:A=!0}=t,{kaist:Z}=t,{postech:k}=t,{id:X}=t,{place:G}=t,{length:V=2}=t;function I(L,H,Y=.25){return H<0||H>He?[(H-He/2+1)*Sr,Y,(L-Do/2+.5)*(Ta/Do)]:[(H-He/2+(A&&V/2))*Sr,Y,(L-He/2+(!A&&V/2))*Sr]}let B=I(P[0],P[1],4),j=[0,A?0:Math.PI/2,0],ie=null,me=A,ge=new Ar(1,1,1);const fe=new Dn({opacity:G?0:1,transparent:G}),Ae=G?new Dn:null,ve=Hh(16777215),De=Hh(15590279),T=on(B[0],{duration:800,easing:br}),M=on(B[1],{duration:3e3,easing:ry}),O=on(B[2],{duration:800,easing:br}),C=on(0,{duration:1500,easing:br}),U=on(0,{duration:1500,easing:br}),z=on(0,{duration:1500,easing:br});return b(),m(),p(),h(),c(),s(),e.$$set=L=>{"scene"in L&&n(0,w=L.scene),"position"in L&&n(24,P=L.position),"vertical"in L&&n(25,A=L.vertical),"kaist"in L&&n(1,Z=L.kaist),"postech"in L&&n(26,k=L.postech),"id"in L&&n(2,X=L.id),"place"in L&&n(3,G=L.place),"length"in L&&n(4,V=L.length)},e.$$.update=()=>{e.$$.dirty[0]&553648128&&P!=ie&&(ie&&n(27,B=I((ie[0]*2+P[0])/3,(ie[1]*2+P[1])/3,4)),setTimeout(()=>{n(27,B=I(P[0],P[1],4)),n(29,ie=P),setTimeout(()=>{n(27,B=I(P[0],P[1]))},200)},100)),e.$$.dirty[0]&1107296256&&A!==me&&(n(28,j=[0,me?0:Math.PI/2,0]),setTimeout(()=>{n(28,j=[0,A?0:Math.PI/2,0]),n(30,me=A)},100)),e.$$.dirty[0]&134217728&&(be(T,i=B[0],i),be(M,o=B[1],o),be(O,l=B[2],l)),e.$$.dirty[0]&268435456&&(be(C,d=j[0],d),be(U,y=j[1],y),be(z,g=j[2],g))},[w,Z,X,G,V,T,M,O,C,U,z,i,o,l,d,y,g,x,E,ge,fe,Ae,ve,De,P,A,k,B,j,ie,me]}class Fl extends jt{constructor(t){super(),Wt(this,t,aT,oT,Ut,{scene:0,position:24,vertical:25,kaist:1,postech:26,id:2,place:3,length:4,_pos1:5,_pos2:6,_pos3:7,_rot1:8,_rot2:9,_rot3:10},[-1,-1])}get _pos1(){return this.$$.ctx[5]}get _pos2(){return this.$$.ctx[6]}get _pos3(){return this.$$.ctx[7]}get _rot1(){return this.$$.ctx[8]}get _rot2(){return this.$$.ctx[9]}get _rot3(){return this.$$.ctx[10]}}function om(e,t,n){const i=e.slice();return i[25]=t[n],i[27]=n,i}function am(e,t,n){const i=e.slice();return i[25]=t[n],i[29]=n,i}function cm(e,t,n){const i=e.slice();return i[30]=t[n],i[27]=n,i}function lm(e,t,n){const i=e.slice();return i[32]=t[n],i[29]=n,i}function um(e){let t,n;return t=new Or({props:{scene:e[0],geometry:e[32],material:e[8][e[27]][e[29]],mat:{color:e[9].includes(`b_${e[27]}_${e[29]}`)?8947848:(e[1],14540253)},pos:[(e[27]-He/2+.5)*Sr,.1,(e[29]-He/2+.5)*Sr],rot:[0,0,0],scale:[li,.2,li],receiveShadow:!0,name:`b_${e[27]}_${e[29]}`}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,r){const s={};r[0]&1&&(s.scene=i[0]),r[0]&128&&(s.geometry=i[32]),r[0]&256&&(s.material=i[8][i[27]][i[29]]),r[0]&514&&(s.mat={color:i[9].includes(`b_${i[27]}_${i[29]}`)?8947848:(i[1],14540253)}),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function hm(e){let t,n,i,r=e[30],s=[];for(let a=0;a<r.length;a+=1)s[a]=um(lm(e,r,a));const o=a=>Oe(s[a],1,1,()=>{s[a]=null});return{c(){t=_i(`}
    `);for(let a=0;a<s.length;a+=1)s[a].c();n=Fr()},m(a,c){$e(a,t,c);for(let l=0;l<s.length;l+=1)s[l].m(a,c);$e(a,n,c),i=!0},p(a,c){if(c[0]&899){r=a[30];let l;for(l=0;l<r.length;l+=1){const u=lm(a,r,l);s[l]?(s[l].p(u,c),Re(s[l],1)):(s[l]=um(u),s[l].c(),Re(s[l],1),s[l].m(n.parentNode,n))}for(Ki(),l=r.length;l<s.length;l+=1)o(l);Qi()}},i(a){if(!i){for(let c=0;c<r.length;c+=1)Re(s[c]);i=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)Oe(s[c]);i=!1},d(a){a&&Ye(t),Oc(s,a),a&&Ye(n)}}}function cT(e){let t,n,i,r;return t=new Fl({props:{scene:e[0],position:[e[27],e[29]],vertical:!0,place:!0,id:"c_v_"+e[27]+"_"+e[29]}}),i=new Fl({props:{scene:e[0],position:[e[29],e[27]],vertical:!1,place:!0,id:"c_h_"+e[27]+"_"+e[29]}}),{c(){et(t.$$.fragment),n=Ve(),et(i.$$.fragment)},m(s,o){Je(t,s,o),$e(s,n,o),Je(i,s,o),r=!0},p(s,o){const a={};o[0]&1&&(a.scene=s[0]),t.$set(a);const c={};o[0]&1&&(c.scene=s[0]),i.$set(c)},i(s){r||(Re(t.$$.fragment,s),Re(i.$$.fragment,s),r=!0)},o(s){Oe(t.$$.fragment,s),Oe(i.$$.fragment,s),r=!1},d(s){Ke(t,s),s&&Ye(n),Ke(i,s)}}}function fm(e){let t,n,i=e[27]>0&&e[27]<He&&cT(e);return{c(){i&&i.c(),t=Fr()},m(r,s){i&&i.m(r,s),$e(r,t,s),n=!0},p(r,s){r[27]>0&&r[27]<He&&i.p(r,s)},i(r){n||(Re(i),n=!0)},o(r){Oe(i),n=!1},d(r){i&&i.d(r),r&&Ye(t)}}}function dm(e){let t,n,i={length:He-1},r=[];for(let o=0;o<i.length;o+=1)r[o]=fm(am(e,i,o));const s=o=>Oe(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();t=Fr()},m(o,a){for(let c=0;c<r.length;c+=1)r[c].m(o,a);$e(o,t,a),n=!0},p(o,a){if(a[0]&1){i={length:He-1};let c;for(c=0;c<i.length;c+=1){const l=am(o,i,c);r[c]?(r[c].p(l,a),Re(r[c],1)):(r[c]=fm(l),r[c].c(),Re(r[c],1),r[c].m(t.parentNode,t))}for(Ki(),c=i.length;c<r.length;c+=1)s(c);Qi()}},i(o){if(!n){for(let a=0;a<i.length;a+=1)Re(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)Oe(r[a]);n=!1},d(o){Oc(r,o),o&&Ye(t)}}}function lT(e){let t,n,i,r,s,o,a,c,l,u,h,d,f,p,y,_={scene:e[0],id:"cam1",pos:[e[2],e[3],e[4]],lookAt:e[5]};t=new RS({props:_}),e[20](t),i=new XS({props:{scene:e[0],intensity:.25,color:3355443}}),s=new $p({props:{scene:e[0],pos:[3,5,1],color:15549492,intensity:.5,shadowMapSize:512*8,castShadow:!0}}),a=new $p({props:{scene:e[0],pos:[-3,5,-1],color:2984662,intensity:.5,shadowMapSize:512*8,castShadow:!0}}),l=new Or({props:{scene:e[0],geometry:e[10],material:e[11],mat:{roughness:.5,metalness:.4,side:Ks,color:16777215},pos:[0,-.501,0],rot:[ke.degToRad(-90),0,0],scale:[100,100,100],castShadow:!0,receiveShadow:!0}}),h=new Or({props:{scene:e[0],geometry:e[12],material:e[13],mat:{color:(e[1],4473924)},pos:[0,0,0],rot:[0,0,0],scale:[iT,.2,nT],castShadow:!0,receiveShadow:!0}});let m=e[7],g=[];for(let w=0;w<m.length;w+=1)g[w]=hm(cm(e,m,w));const v=w=>Oe(g[w],1,1,()=>{g[w]=null});let b={length:He+1},x=[];for(let w=0;w<b.length;w+=1)x[w]=dm(om(e,b,w));const E=w=>Oe(x[w],1,1,()=>{x[w]=null});return{c(){et(t.$$.fragment),n=Ve(),et(i.$$.fragment),r=Ve(),et(s.$$.fragment),o=Ve(),et(a.$$.fragment),c=Ve(),et(l.$$.fragment),u=Ve(),et(h.$$.fragment),d=Ve();for(let w=0;w<g.length;w+=1)g[w].c();f=Ve();for(let w=0;w<x.length;w+=1)x[w].c();p=Fr()},m(w,P){Je(t,w,P),$e(w,n,P),Je(i,w,P),$e(w,r,P),Je(s,w,P),$e(w,o,P),Je(a,w,P),$e(w,c,P),Je(l,w,P),$e(w,u,P),Je(h,w,P),$e(w,d,P);for(let A=0;A<g.length;A+=1)g[A].m(w,P);$e(w,f,P);for(let A=0;A<x.length;A+=1)x[A].m(w,P);$e(w,p,P),y=!0},p(w,P){const A={};P[0]&1&&(A.scene=w[0]),P[0]&28&&(A.pos=[w[2],w[3],w[4]]),P[0]&32&&(A.lookAt=w[5]),t.$set(A);const Z={};P[0]&1&&(Z.scene=w[0]),i.$set(Z);const k={};P[0]&1&&(k.scene=w[0]),s.$set(k);const X={};P[0]&1&&(X.scene=w[0]),a.$set(X);const G={};P[0]&1&&(G.scene=w[0]),l.$set(G);const V={};if(P[0]&1&&(V.scene=w[0]),P[0]&2&&(V.mat={color:(w[1],4473924)}),h.$set(V),P[0]&899){m=w[7];let I;for(I=0;I<m.length;I+=1){const B=cm(w,m,I);g[I]?(g[I].p(B,P),Re(g[I],1)):(g[I]=hm(B),g[I].c(),Re(g[I],1),g[I].m(f.parentNode,f))}for(Ki(),I=m.length;I<g.length;I+=1)v(I);Qi()}if(P[0]&1){b={length:He+1};let I;for(I=0;I<b.length;I+=1){const B=om(w,b,I);x[I]?(x[I].p(B,P),Re(x[I],1)):(x[I]=dm(B),x[I].c(),Re(x[I],1),x[I].m(p.parentNode,p))}for(Ki(),I=b.length;I<x.length;I+=1)E(I);Qi()}},i(w){if(!y){Re(t.$$.fragment,w),Re(i.$$.fragment,w),Re(s.$$.fragment,w),Re(a.$$.fragment,w),Re(l.$$.fragment,w),Re(h.$$.fragment,w);for(let P=0;P<m.length;P+=1)Re(g[P]);for(let P=0;P<b.length;P+=1)Re(x[P]);y=!0}},o(w){Oe(t.$$.fragment,w),Oe(i.$$.fragment,w),Oe(s.$$.fragment,w),Oe(a.$$.fragment,w),Oe(l.$$.fragment,w),Oe(h.$$.fragment,w),g=g.filter(Boolean);for(let P=0;P<g.length;P+=1)Oe(g[P]);x=x.filter(Boolean);for(let P=0;P<x.length;P+=1)Oe(x[P]);y=!1},d(w){e[20](null),Ke(t,w),w&&Ye(n),Ke(i,w),w&&Ye(r),Ke(s,w),w&&Ye(o),Ke(a,w),w&&Ye(c),Ke(l,w),w&&Ye(u),Ke(h,w),w&&Ye(d),Oc(g,w),w&&Ye(f),Oc(x,w),w&&Ye(p)}}}function uT(e,t,n){let i,r,s,o,a,c,l,u;dt(e,Dc,k=>n(17,i=k)),dt(e,Ic,k=>n(18,r=k)),dt(e,nm,k=>n(2,s=k)),dt(e,im,k=>n(3,o=k)),dt(e,rm,k=>n(4,a=k)),dt(e,zi,k=>n(21,c=k)),dt(e,_r,k=>n(19,l=k)),dt(e,Yt,k=>n(9,u=k));let h=[],d=[0,0,0],f,p,{scene:y}=t,{active:_}=t,{cursor:m}=t;Hh(16777215);const g=new Xl;let v=new Rr(4,4,1),b=new nn,x=new Ar(1,1,1),E=new Dn,w=[],P=[];for(let k=0;k<He;k++){w[k]=[],P[k]=[];for(let X=0;X<He;X++)w[k][X]=new Ar(1,1,1),P[k][X]=new Dn}const A=setInterval(()=>{var k;try{n(16,p=(k=f==null?void 0:f.getCamera)==null?void 0:k.call(f)),clearInterval(A)}catch{}},200);function Z(k){Cn[k?"unshift":"push"](()=>{f=k,n(6,f)})}return e.$$set=k=>{"scene"in k&&n(0,y=k.scene),"active"in k&&n(1,_=k.active),"cursor"in k&&n(14,m=k.cursor)},e.$$.update=()=>{var k;if(e.$$.dirty[0]&393216&&n(15,h=[7*Math.exp(-i)*Math.cos(r)+.2,-7.5+12*Math.exp(.5*Math.sin(i)),7*Math.exp(-i)*Math.sin(r)]),e.$$.dirty[0]&32768&&(be(nm,s=h[0],s),be(im,o=h[1],o),be(rm,a=h[2],a)),e.$$.dirty[0]&28&&n(5,d=[0,0,0]),e.$$.dirty[0]&606209&&p&&m){let X=new ae;X.x=m.x/window.innerWidth*2-1,X.y=-(m.y/window.innerHeight)*2+1,g.setFromCamera(X,p);let G=g.intersectObjects(y.children);be(zi,c=(k=G.map(V=>V.object.name).filter(V=>(V==null?void 0:V[0])===l))==null?void 0:k[0],c)}},[y,_,s,o,a,d,f,w,P,u,v,b,x,E,m,h,p,i,r,l,Z]}class hT extends jt{constructor(t){super(),Wt(this,t,uT,lT,Ut,{scene:0,active:1,cursor:14},[-1,-1])}}function fT(e){let t,n;return t=new Or({props:{scene:e[0],castShadow:!0,receiveShadow:!0,geometry:e[8],material:e[9],pos:[e[5],e[6],e[7]],scale:[li,.01,li],mat:{color:e[1]?2984662:15549492}}}),{c(){et(t.$$.fragment)},m(i,r){Je(t,i,r),n=!0},p(i,[r]){const s={};r&1&&(s.scene=i[0]),r&224&&(s.pos=[i[5],i[6],i[7]]),r&2&&(s.mat={color:i[1]?2984662:15549492}),t.$set(s)},i(i){n||(Re(t.$$.fragment,i),n=!0)},o(i){Oe(t.$$.fragment,i),n=!1},d(i){Ke(t,i)}}}function dT(e,t,n){let i,r=zt,s=()=>(r(),r=Kn(b,w=>n(5,i=w)),b),o,a=zt,c=()=>(a(),a=Kn(x,w=>n(6,o=w)),x),l,u=zt,h=()=>(u(),u=Kn(E,w=>n(7,l=w)),E);e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>a()),e.$$.on_destroy.push(()=>u());const d=new Ir(.3,.3,2,32),f=new Dn;let{scene:p}=t,{position:y}=t,{kaist:_}=t,{postech:m}=t,g=[0,.22,0];function v(w,P,A=0){return[(P-He/2+.5)*Sr,A+.22,(w-He/2+.5)*Sr]}const b=on(g[0],{duration:800,easing:br}),x=on(g[1],{duration:3e3,easing:ry}),E=on(g[2],{duration:800,easing:br});return h(),c(),s(),e.$$set=w=>{"scene"in w&&n(0,p=w.scene),"position"in w&&n(10,y=w.position),"kaist"in w&&n(1,_=w.kaist),"postech"in w&&n(11,m=w.postech)},e.$$.update=()=>{e.$$.dirty&1024&&n(12,g=v(y[0],y[1])),e.$$.dirty&4096&&(be(b,i=g[0],i),be(x,o=g[1],o),be(E,l=g[2],l))},[p,_,b,x,E,i,o,l,d,f,y,m,g]}class pm extends jt{constructor(t){super(),Wt(this,t,dT,fT,Ut,{scene:0,position:10,kaist:1,postech:11,_pos1:2,_pos2:3,_pos3:4})}get _pos1(){return this.$$.ctx[2]}get _pos2(){return this.$$.ctx[3]}get _pos3(){return this.$$.ctx[4]}}var pT="/kaporido/assets/nupjuk.b1ce8176.png";class mT{constructor(t,n=null){Jl(this,"ws");Jl(this,"buffer",[]);this.ws=new WebSocket(t),this.ws.onmessage=i=>{this.buffer.push(i.data)},this.ws.onclose=n,this.ws.onerror=n}async*get(){for(;;){if(!this.buffer.length){await new Promise(t=>setTimeout(t,100));continue}yield this.buffer.shift()}}send(t){console.log(t),this.ws.send(t)}disconnect(){this.ws.close()}}function mm(e,t,n){const i=e.slice();return i[63]=t[n].position,i[64]=t[n].vertical,i[65]=t[n].length,i[66]=t[n].hide,i[67]=t[n].id,i}function gm(e,t,n){const i=e.slice();return i[63]=t[n].position,i[64]=t[n].vertical,i[65]=t[n].length,i[67]=t[n].id,i}function ym(e,t){let n,i,r;return i=new Fl({props:{scene:t[62],position:t[63],vertical:t[64],length:t[65],kaist:!0,id:t[67]}}),{key:e,first:null,c(){n=Fr(),et(i.$$.fragment),this.first=n},m(s,o){$e(s,n,o),Je(i,s,o),r=!0},p(s,o){t=s;const a={};o[2]&1&&(a.scene=t[62]),o[0]&64&&(a.position=t[63]),o[0]&64&&(a.vertical=t[64]),o[0]&64&&(a.length=t[65]),o[0]&64&&(a.id=t[67]),i.$set(a)},i(s){r||(Re(i.$$.fragment,s),r=!0)},o(s){Oe(i.$$.fragment,s),r=!1},d(s){s&&Ye(n),Ke(i,s)}}}function _m(e,t){let n,i,r;return i=new Fl({props:{scene:t[62],position:t[63],vertical:t[64],length:t[65],postech:!0,id:t[67]}}),{key:e,first:null,c(){n=Fr(),et(i.$$.fragment),this.first=n},m(s,o){$e(s,n,o),Je(i,s,o),r=!0},p(s,o){t=s;const a={};o[2]&1&&(a.scene=t[62]),o[0]&128&&(a.position=t[63]),o[0]&128&&(a.vertical=t[64]),o[0]&128&&(a.length=t[65]),o[0]&128&&(a.id=t[67]),i.$set(a)},i(s){r||(Re(i.$$.fragment,s),r=!0)},o(s){Oe(i.$$.fragment,s),r=!1},d(s){s&&Ye(n),Ke(i,s)}}}function gT(e){let t=[],n=new Map,i,r=[],s=new Map,o,a,c,l,u,h,d,f=e[6];const p=m=>m[67];for(let m=0;m<f.length;m+=1){let g=gm(e,f,m),v=p(g);n.set(v,t[m]=ym(v,g))}let y=e[7];const _=m=>m[67];for(let m=0;m<y.length;m+=1){let g=mm(e,y,m),v=_(g);s.set(v,r[m]=_m(v,g))}return a=new hT({props:{scene:e[62],active:!e[13],cursor:e[19]}}),l=new pm({props:{scene:e[62],kaist:!0,position:e[4]}}),h=new pm({props:{scene:e[62],postech:!0,position:e[5]}}),{c(){for(let m=0;m<t.length;m+=1)t[m].c();i=Ve();for(let m=0;m<r.length;m+=1)r[m].c();o=Ve(),et(a.$$.fragment),c=Ve(),et(l.$$.fragment),u=Ve(),et(h.$$.fragment)},m(m,g){for(let v=0;v<t.length;v+=1)t[v].m(m,g);$e(m,i,g);for(let v=0;v<r.length;v+=1)r[v].m(m,g);$e(m,o,g),Je(a,m,g),$e(m,c,g),Je(l,m,g),$e(m,u,g),Je(h,m,g),d=!0},p(m,g){g[0]&64|g[2]&1&&(f=m[6],Ki(),t=Sf(t,g,p,1,m,f,n,i.parentNode,Ef,ym,i,gm),Qi()),g[0]&128|g[2]&1&&(y=m[7],Ki(),r=Sf(r,g,_,1,m,y,s,o.parentNode,Ef,_m,o,mm),Qi());const v={};g[2]&1&&(v.scene=m[62]),g[0]&8192&&(v.active=!m[13]),g[0]&524288&&(v.cursor=m[19]),a.$set(v);const b={};g[2]&1&&(b.scene=m[62]),g[0]&16&&(b.position=m[4]),l.$set(b);const x={};g[2]&1&&(x.scene=m[62]),g[0]&32&&(x.position=m[5]),h.$set(x)},i(m){if(!d){for(let g=0;g<f.length;g+=1)Re(t[g]);for(let g=0;g<y.length;g+=1)Re(r[g]);Re(a.$$.fragment,m),Re(l.$$.fragment,m),Re(h.$$.fragment,m),d=!0}},o(m){for(let g=0;g<t.length;g+=1)Oe(t[g]);for(let g=0;g<r.length;g+=1)Oe(r[g]);Oe(a.$$.fragment,m),Oe(l.$$.fragment,m),Oe(h.$$.fragment,m),d=!1},d(m){for(let g=0;g<t.length;g+=1)t[g].d(m);m&&Ye(i);for(let g=0;g<r.length;g+=1)r[g].d(m);m&&Ye(o),Ke(a,m),m&&Ye(c),Ke(l,m),m&&Ye(u),Ke(h,m)}}}function yT(e){let t,n,i,r;return t=new $S({props:{sti:e[61],id:"scene1",props:{background:0,fog:e[26]},$$slots:{default:[gT,({scene:s})=>({62:s}),({scene:s})=>[0,0,s?1:0]]},$$scope:{ctx:e}}}),i=new tT({props:{sti:e[61],sceneId:"scene1",camId:"cam1",config:{antialias:!0,alpha:!0},shadowmap:!0}}),{c(){et(t.$$.fragment),n=Ve(),et(i.$$.fragment)},m(s,o){Je(t,s,o),$e(s,n,o),Je(i,s,o),r=!0},p(s,o){const a={};o[1]&1073741824&&(a.sti=s[61]),o[0]&532720|o[2]&1025&&(a.$$scope={dirty:o,ctx:s}),t.$set(a);const c={};o[1]&1073741824&&(c.sti=s[61]),i.$set(c)},i(s){r||(Re(t.$$.fragment,s),Re(i.$$.fragment,s),r=!0)},o(s){Oe(t.$$.fragment,s),Oe(i.$$.fragment,s),r=!1},d(s){Ke(t,s),s&&Ye(n),Ke(i,s)}}}function vm(e){let t,n,i;return{c(){t=Xe("span"),t.textContent="\uBE14\uB85D \uB193\uAE30",Ue(t,"class","button svelte-1pfcgnx"),ct(t,"active",e[3]==="block")},m(r,s){$e(r,t,s),n||(i=Dt(t,"click",e[35]),n=!0)},p(r,s){s[0]&8&&ct(t,"active",r[3]==="block")},d(r){r&&Ye(t),n=!1,i()}}}function bm(e){let t,n,i;return{c(){t=Xe("span"),t.textContent="\uD310 \uB3CC\uB9AC\uAE30",Ue(t,"class","button svelte-1pfcgnx"),ct(t,"active",e[3]==="turn")},m(r,s){$e(r,t,s),n||(i=Dt(t,"click",e[36]),n=!0)},p(r,s){s[0]&8&&ct(t,"active",r[3]==="turn")},d(r){r&&Ye(t),n=!1,i()}}}function _T(e){let t,n,i,r,s,o,a,c,l,u,h,d,f,p,y,_,m,g,v,b,x,E,w=e[2]==="e2e"?"AI":"KAIST",P,A,Z,k,X,G,V,I=e[2]==="e2e"||e[2]==="p2e"?"AI":"POSTECH",B,j,ie,me,ge,fe,Ae,ve,De,T,M,O,C,U,z,L,H,Y,K,J,ne,S,D,Q,ee,W,oe,N,le,ce,ye,re,q,de={w:e[8],h:e[9],$$slots:{default:[yT,({sti:he})=>({61:he}),({sti:he})=>[0,he?1073741824:0]]},$$scope:{ctx:e}};n=new BS({props:de}),e[32](n);let pe=e[23]&&vm(e),$=e[22]&&bm(e);return{c(){t=Xe("main"),et(n.$$.fragment),i=Ve(),r=Xe("div"),r.innerHTML='Made with <span class="svelte-1pfcgnx">\u2764</span> by <a href="https://seo-rii.github.io" class="svelte-1pfcgnx">@seo-rii</a>',s=Ve(),o=Xe("div"),o.textContent="\uC544\uBB34 \uACF3\uC774\uB098 \uB20C\uB7EC\uC11C \uAC8C\uC784\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",a=Ve(),c=Xe("div"),c.textContent="\uB2E4\uC74C\uC73C\uB85C",l=Ve(),u=Xe("div"),u.textContent="\uC218\uB97C \uCC3E\uB294 \uC911...",h=Ve(),d=Xe("div"),f=Xe("span"),f.textContent="\uB9D0 \uC774\uB3D9\uD558\uAE30",p=Ve(),pe&&pe.c(),y=Ve(),$&&$.c(),_=Ve(),m=Xe("div"),g=Xe("div"),v=Xe("img"),x=Ve(),E=Xe("span"),P=_i(w),A=Ve(),Z=Xe("div"),k=Xe("img"),G=Ve(),V=Xe("span"),B=_i(I),j=Ve(),ie=Xe("div"),me=Xe("h1"),ge=_i(e[20]),fe=_i("\uC758 \uC2B9\uB9AC!"),Ae=Ve(),ve=Xe("h3"),De=_i(e[20]),T=_i("\uC774(\uAC00) \uC2B9\uB9AC\uD588\uC5B4\uC694."),M=Ve(),O=Xe("div"),C=Xe("div"),C.textContent="\uB2E4\uC2DC \uD50C\uB808\uC774",U=Ve(),z=Xe("div"),L=Xe("h1"),L.textContent="\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC5B4\uC694.",H=Ve(),Y=Xe("div"),K=Xe("div"),K.textContent="\uB2E4\uC2DC \uD50C\uB808\uC774",J=Ve(),ne=Xe("div"),S=Xe("h1"),S.textContent="Puoribor",D=Ve(),Q=Xe("div"),ee=Xe("div"),ee.textContent="1 vs 1",W=Ve(),oe=Xe("div"),oe.textContent="1 vs AI",N=Ve(),le=Xe("div"),le.textContent="AI vs AI",Ue(r,"class","toolbar credit button svelte-1pfcgnx"),Ue(o,"class","toolbar back button svelte-1pfcgnx"),ct(o,"hide",!e[13]),Ue(c,"class","toolbar next button svelte-1pfcgnx"),ct(c,"hide",e[13]||!e[18]||e[1]),Ue(u,"class","toolbar load button svelte-1pfcgnx"),ct(u,"hide",e[13]||e[18]),Ue(f,"class","button svelte-1pfcgnx"),ct(f,"active",e[3]==="move"),Ue(d,"class","toolbar action svelte-1pfcgnx"),ct(d,"hide",e[13]||!e[18]||!e[1]),v.src!==(b=pT)&&Ue(v,"src",b),Ue(v,"class","svelte-1pfcgnx"),Ue(E,"class","svelte-1pfcgnx"),hn(g,"background","#1487C888"),Ue(g,"class","svelte-1pfcgnx"),ct(g,"active",e[0]%2),k.src!==(X="https://w.namu.la/s/006a9fbc14a31c4be81260b185c92483c23c35aac49903a99e6ff20f3e7556fbba9cf64c357da20fa50794492d3658349494db25efba04ab03a91ae9179ec5512d9d7be9d3266304fdf2d5cdd108b1aa2435b0d31feb62fcf5647619f09e372a")&&Ue(k,"src",X),Ue(k,"class","svelte-1pfcgnx"),Ue(V,"class","svelte-1pfcgnx"),hn(Z,"background","#C8015088"),Ue(Z,"class","svelte-1pfcgnx"),ct(Z,"active",(e[0]+1)%2),Ue(m,"class","toolbar turn svelte-1pfcgnx"),ct(m,"hide",e[13]),Ue(me,"class","svelte-1pfcgnx"),Ue(ve,"class","svelte-1pfcgnx"),Ue(C,"class","button svelte-1pfcgnx"),hn(C,"margin","0 5px"),hn(O,"display","flex"),hn(O,"flex-direction","row"),Ue(O,"class","svelte-1pfcgnx"),Ue(ie,"class","toolbar fullscreen svelte-1pfcgnx"),ct(ie,"hide",!e[20]),Ue(L,"class","svelte-1pfcgnx"),Ue(K,"class","button svelte-1pfcgnx"),hn(K,"margin","0 5px"),hn(Y,"display","flex"),hn(Y,"flex-direction","row"),Ue(Y,"class","svelte-1pfcgnx"),Ue(z,"class","toolbar fullscreen svelte-1pfcgnx"),ct(z,"hide",!e[21]),Ue(S,"class","svelte-1pfcgnx"),Ue(ee,"class","button svelte-1pfcgnx"),hn(ee,"margin","0 5px"),Ue(oe,"class","button svelte-1pfcgnx"),hn(oe,"margin","0 5px"),Ue(le,"class","button svelte-1pfcgnx"),hn(le,"margin","0 5px"),hn(Q,"display","flex"),hn(Q,"flex-direction","row"),Ue(Q,"class","svelte-1pfcgnx"),Ue(ne,"class","toolbar fullscreen svelte-1pfcgnx"),ct(ne,"hide",e[2]),Ue(t,"class","svelte-1pfcgnx"),kc(()=>e[42].call(t))},m(he,Ee){$e(he,t,Ee),Je(n,t,null),Le(t,i),Le(t,r),Le(t,s),Le(t,o),Le(t,a),Le(t,c),Le(t,l),Le(t,u),Le(t,h),Le(t,d),Le(d,f),Le(d,p),pe&&pe.m(d,null),Le(d,y),$&&$.m(d,null),Le(t,_),Le(t,m),Le(m,g),Le(g,v),Le(g,x),Le(g,E),Le(E,P),Le(m,A),Le(m,Z),Le(Z,k),Le(Z,G),Le(Z,V),Le(V,B),Le(t,j),Le(t,ie),Le(ie,me),Le(me,ge),Le(me,fe),Le(ie,Ae),Le(ie,ve),Le(ve,De),Le(ve,T),Le(ie,M),Le(ie,O),Le(O,C),Le(t,U),Le(t,z),Le(z,L),Le(z,H),Le(z,Y),Le(Y,K),Le(t,J),Le(t,ne),Le(ne,S),Le(ne,D),Le(ne,Q),Le(Q,ee),Le(Q,W),Le(Q,oe),Le(Q,N),Le(Q,le),ce=_y(t,e[42].bind(t)),ye=!0,re||(q=[Dt(c,"click",e[33]),Dt(f,"click",e[34]),Dt(C,"click",e[37]),Dt(K,"click",e[38]),Dt(ee,"click",e[39]),Dt(oe,"click",e[40]),Dt(le,"click",e[41]),Dt(t,"mousedown",e[43]),Dt(t,"mousemove",e[44]),Dt(t,"mousemove",e[45]),Dt(t,"mousemove",e[46]),Dt(t,"mousemove",e[47]),Dt(t,"mouseup",e[48]),Dt(t,"mouseup",e[49]),Dt(t,"click",e[27])],re=!0)},p(he,Ee){const Ze={};Ee[0]&256&&(Ze.w=he[8]),Ee[0]&512&&(Ze.h=he[9]),Ee[0]&532720|Ee[1]&1073741824|Ee[2]&1024&&(Ze.$$scope={dirty:Ee,ctx:he}),n.$set(Ze),Ee[0]&8192&&ct(o,"hide",!he[13]),Ee[0]&270338&&ct(c,"hide",he[13]||!he[18]||he[1]),Ee[0]&270336&&ct(u,"hide",he[13]||he[18]),Ee[0]&8&&ct(f,"active",he[3]==="move"),he[23]?pe?pe.p(he,Ee):(pe=vm(he),pe.c(),pe.m(d,y)):pe&&(pe.d(1),pe=null),he[22]?$?$.p(he,Ee):($=bm(he),$.c(),$.m(d,null)):$&&($.d(1),$=null),Ee[0]&270338&&ct(d,"hide",he[13]||!he[18]||!he[1]),(!ye||Ee[0]&4)&&w!==(w=he[2]==="e2e"?"AI":"KAIST")&&La(P,w),Ee[0]&1&&ct(g,"active",he[0]%2),(!ye||Ee[0]&4)&&I!==(I=he[2]==="e2e"||he[2]==="p2e"?"AI":"POSTECH")&&La(B,I),Ee[0]&1&&ct(Z,"active",(he[0]+1)%2),Ee[0]&8192&&ct(m,"hide",he[13]),(!ye||Ee[0]&1048576)&&La(ge,he[20]),(!ye||Ee[0]&1048576)&&La(De,he[20]),Ee[0]&1048576&&ct(ie,"hide",!he[20]),Ee[0]&2097152&&ct(z,"hide",!he[21]),Ee[0]&4&&ct(ne,"hide",he[2])},i(he){ye||(Re(n.$$.fragment,he),ye=!0)},o(he){Oe(n.$$.fragment,he),ye=!1},d(he){he&&Ye(t),e[32](null),Ke(n),pe&&pe.d(),$&&$.d(),ce(),re=!1,Zs(q)}}}function xm(e,t,n,i){for(const r of e)if(t[0]-1===n){if(r.position[0]===t[0]&&r.position[1]===t[1]&&r.vertical||r.position[0]===t[0]&&r.position[1]===t[1]-1&&r.length===2&&r.vertical)return!0}else if(t[0]+1===n){if(r.position[0]===t[0]+1&&r.position[1]===t[1]&&r.vertical||r.position[0]===t[0]+1&&r.position[1]===t[1]+1&&r.length===2&&r.vertical)return!0}else if(t[1]-1===i){if(r.position[0]===t[0]&&r.position[1]===t[1]&&!r.vertical||r.position[0]===t[0]-1&&r.position[1]===t[1]&&r.length===2&&!r.vertical)return!0}else if(t[1]+1===i&&(r.position[0]===t[0]&&r.position[1]===t[1]+1&&!r.vertical||r.position[0]===t[0]-1&&r.position[1]===t[1]+1&&r.length===2&&!r.vertical))return!0;return!1}function wm(e,t,n,i){for(const r of e)if(r.vertical&&t){if(r.position[0]===n&&(i<=r.position[1]&&i+1>=r.position[1]||r.position[1]<=i&&r.position[1]+r.length-1>=i))return!1}else if(!r.vertical&&!t){if(r.position[1]===i&&(n<=r.position[0]&&n+1>=r.position[0]||r.position[0]<=n&&r.position[0]+r.length-1>=n))return!1}else if(r.length===2){if(r.vertical&&!t){if(r.position[0]-1===n&&r.position[1]+1===i)return!1}else if(r.position[0]+1===n&&r.position[1]-1===i)return!1}return!0}function vT(e,t,n){let i,r,s,o,a,c,l,u;dt(e,yo,re=>n(6,i=re)),dt(e,_o,re=>n(7,r=re)),dt(e,Ic,re=>n(24,s=re)),dt(e,Dc,re=>n(25,o=re)),dt(e,Bi,re=>n(30,a=re)),dt(e,zi,re=>n(31,c=re)),dt(e,_r,re=>n(54,l=re)),dt(e,Yt,re=>n(55,u=re));const h=new $c(0,.1,1);let d,f,p,y=-1,_=!1,m=!1,g=!1,v,b,x,E,w=!0,P,A=!1,Z="",k;wn(()=>{window.addEventListener("resize",X),X(),setTimeout(()=>{let re=[];for(let q=0;q<Do;q++)re.push({position:[q,-2.2],vertical:!0,length:2,id:"k_"+q});be(yo,i=re,i)},0),setTimeout(()=>{let re=[];for(let q=Do-1;q>=0;q--)re.push({position:[q,He+.2],vertical:!0,length:2,id:"p_"+(Do-q-1)});be(_o,r=re,r)},0)}),by(()=>{window.removeEventListener("resize",X)});function X(re){setTimeout(()=>p.doResize(d,f))}let G,V=new Set,I=new Set,B=[Math.floor(He/2),0],j=[Math.floor(He/2),He-1];function ie(re,q,de){return re[0]-1===q&&re[1]===de||re[0]+1===q&&re[1]===de||re[0]===q&&re[1]-1===de||re[0]===q&&re[1]+1===de?!(B[0]===q&&B[1]===de||j[0]===q&&j[1]===de||xm(i,re,q,de)||xm(r,re,q,de)):!1}function me(re,q,de){let pe=[];for(const $ of re)if($.position[1]>=0&&$.position[1]<=He&&($.vertical&&$.length===2&&q<=$.position[0]&&$.position[0]<=q+4&&de-1===$.position[1]?(pe.push({length:1,vertical:!0,position:[$.position[0],$.position[1]],id:$.id+"_"}),$.position=[$.position[0],$.position[1]+1],$.length=1):$.vertical&&$.length===2&&q<=$.position[0]&&$.position[0]<=q+4&&de+3===$.position[1]?(pe.push({length:1,vertical:!0,position:[$.position[0],$.position[1]+1],id:$.id+"_"}),$.position=[$.position[0],$.position[1]],$.length=1):!$.vertical&&$.length===2&&de<=$.position[1]&&$.position[1]<=de+4&&q-1===$.position[0]?(pe.push({length:1,vertical:!1,position:[$.position[0],$.position[1]],id:$.id+"_"}),$.position=[$.position[0]+1,$.position[1]],$.length=1):!$.vertical&&$.length===2&&de<=$.position[1]&&$.position[1]<=de+4&&q+3===$.position[0]&&(pe.push({length:1,vertical:!1,position:[$.position[0]+1,$.position[1]],id:$.id+"_"}),$.position=[$.position[0],$.position[1]],$.length=1),$.vertical&&q<=$.position[0]&&$.position[0]<=q+4&&de<=$.position[1]&&$.position[1]<=de+3||!$.vertical&&de<=$.position[1]&&$.position[1]<=de+4&&q<=$.position[0]&&$.position[0]<=q+3)){let[he,Ee]=$.position;he-=q+2,Ee-=de+2;let Ze=Ee,Lt=-he;he=Ze+q+2,Ee=Lt+de+2-($.vertical?0:$.length),$.vertical=!$.vertical,$.position=[he,Ee]}return[...re,...pe]}let ge=" ";async function fe(re=!0){if(!(!c||!_)){if(G==="block"){if(!u.length)return;if(!a)be(Bi,a=c,a);else{const[q,de,pe,$]=c.split("_");let he=parseInt(pe),Ee=parseInt($),Ze=de==="v";if(y%2){const Lt=i.findIndex(hi=>hi.id===a);be(yo,i[Lt].position=Ze?[he,Ee]:[Ee,he],i),be(yo,i[Lt].vertical=Ze,i),V.add(a),V.add(a+"_")}else{const Lt=r.findIndex(hi=>hi.id===a);be(_o,r[Lt].position=Ze?[he,Ee]:[Ee,he],r),be(_o,r[Lt].vertical=Ze,r),I.add(a),V.add(a+"_")}re&&(ge=Ze?`2 ${He-he-1} ${Ee}`:`1 ${He-Ee-2} ${he-1}`,M())}}if(G==="turn"){const[q,de,pe]=c.split("_");let $=parseInt(pe),he=parseInt(de);$=Math.min($,He-4),he=Math.min(he,He-4);let Ee=y%2?i:r;for(let Ze=0;Ze<2;Ze++)for(let Lt=0;Lt<Ee.length;Lt++)if(Ee[Lt].position[1]<0||Ee[Lt].position[1]>He){Ee.splice(Lt,1);break}be(yo,i=me(i,$,he),i),be(_o,r=me(r,$,he),r),re&&(ge=`3 ${He-$-4} ${he}`,M())}if(G==="move"){if(!u.length)return;const[q,de,pe]=c.split("_");let $=parseInt(pe),he=parseInt(de);y%2?n(4,B=[$,he]):n(5,j=[$,he]),re&&(ge=`0 ${He-$-1} ${he}`,M(800))}}}let Ae="",ve=0,De=0,T=null;async function M(re=1800){var q,de,pe,$,he;if(n(3,G=""),k&&k.send(ge),ge=" ",A)await((he=($=await((pe=k==null?void 0:k.get)==null?void 0:pe.call(k)))==null?void 0:$.next)==null?void 0:he.call($));else{n(18,w=!1),await new Promise(Ze=>setTimeout(Ze,1e3));const Ee=k&&(await((de=(q=await k.get())==null?void 0:q.next)==null?void 0:de.call(q))).value.trim().split(" ").map(Ze=>parseInt(Ze));console.log(Ee),Ee[0]===0&&(n(3,G="move"),await Ca(),be(zi,c=`b_${Ee[2]}_${He-Ee[1]-1}`,c),be(Yt,u=[""],u)),Ee[0]===1&&(n(3,G="block"),await Ca(),y%2?(be(Bi,a=`k_${De}`,a),De++):(be(Bi,a=`p_${ve}`,a),ve++),be(zi,c=`c_h_${Ee[2]+1}_${He-Ee[1]-2}`,c),be(Yt,u=[""],u)),Ee[0]===2&&(n(3,G="block"),await Ca(),y%2?(be(Bi,a=`k_${De}`,a),De++):(be(Bi,a=`p_${ve}`,a),ve++),be(zi,c=`c_v_${He-Ee[1]-1}_${Ee[2]}`,c),be(Yt,u=[""],u)),Ee[0]===3&&(n(3,G="turn"),await Ca(),y%2?(De++,De++):(ve++,ve++),be(zi,c=`b_${Ee[2]}_${He-4-Ee[1]}`,c),be(Yt,u=[""],u)),fe(!1),n(3,G="")}j[1]===0?n(20,Ae="\uD3EC\uC2A4\uD14D"):B[1]===He-1?n(20,Ae="\uCE74\uC774\uC2A4\uD2B8"):setTimeout(()=>{n(0,y++,y),n(18,w=!0)},re)}let O,C;function U(re){Cn[re?"unshift":"push"](()=>{p=re,n(10,p)})}const z=()=>M(1800),L=()=>n(3,G="move"),H=()=>n(3,G="block"),Y=()=>n(3,G="turn"),K=()=>location.reload(),J=()=>location.reload(),ne=()=>{n(2,Z="p2p")},S=()=>{n(2,Z="p2e")},D=()=>{n(2,Z="e2e")};function Q(){d=this.clientWidth,f=this.clientHeight,n(8,d),n(9,f)}const ee=re=>(n(11,_=!0),n(12,m=!0),n(14,v=re.clientX),n(15,b=re.clientY),n(16,x=re.clientX),n(17,E=re.clientY)),W=re=>m&&(Math.abs(x-re.clientX)>10||Math.abs(E-re.clientY)>10)&&(n(11,_=!1),n(13,g=!0)),oe=re=>m&&be(Ic,s+=(re.clientX-v)/100,s)&&n(14,v=re.clientX),N=re=>n(19,P={x:re.clientX,y:re.clientY}),le=re=>m&&be(Dc,o=Math.min(Math.max(o+(re.clientY-b)/50,0),Math.PI*.85),o)&&n(15,b=re.clientY)&&n(13,g=!0),ce=()=>_&&g&&(n(0,++y),n(13,g=!1)||n(0,--y)),ye=()=>n(12,m=!1);return e.$$.update=()=>{if(e.$$.dirty[0]&1&&(be(Ic,s=y*Math.PI,s),be(Dc,o=.35,o)),e.$$.dirty[0]&5&&(n(1,A=!0),Z==="p2p"&&n(1,A=!0),Z==="p2e"&&n(1,A=y%2),Z==="e2e"&&n(1,A=!1)),e.$$.dirty[0]&536870916&&Z&&Z!=="p2p"&&!k&&n(29,k=new mT(`ws://localhost:5500/game/${Z}`,()=>n(21,T=!0))),e.$$.dirty[0]&8&&(be(Bi,a="",a),be(zi,c="",c),be(_r,l="",l),be(Yt,u=[],u)),e.$$.dirty[0]&1073741833&&(G==="move"&&be(_r,l="b",l),G==="block"&&(a?be(_r,l="c",l):be(_r,l=y%2?"k":"p",l)),G==="turn"&&be(_r,l="b",l)),e.$$.dirty[0]&1073742073|e.$$.dirty[1]&1){if(G==="block"&&c)if(!a)y%2&&V.has(c)?be(Yt,u=[],u):!(y%2)&&I.has(c)?be(Yt,u=[],u):be(Yt,u=[c],u);else{const[re,q,de,pe]=c.split("_");let $=parseInt(de),he=parseInt(pe),Ee=q==="v";if(!Ee){let Ze=$;$=he,he=Ze}wm(i,Ee,$,he)&&wm(r,Ee,$,he)?be(Yt,u=[c],u):be(Yt,u=[],u)}if(G==="turn"&&c){let[re,q,de]=c.split("_"),pe=parseInt(q),$=parseInt(de);pe=Math.min(pe,He-4),$=Math.min($,He-4);let he=[];for(let Ee=0;Ee<4;Ee++)for(let Ze=0;Ze<4;Ze++)he.push(`b_${pe+Ee}_${$+Ze}`);be(Yt,u=he,u)}if(G==="move"&&c){let[re,q,de]=c.split("_"),pe=parseInt(de),$=parseInt(q);ie(y%2?B:j,pe,$)?be(Yt,u=[`b_${$}_${pe}`],u):be(Yt,u=[],u)}}if(e.$$.dirty[0]&6&&!A&&(Z==="p2e"||Z==="e2e")&&M(),e.$$.dirty[0]&193){const re=(y%2?i:r).filter(q=>q.position[1]<0||q.position[1]>He).length;n(22,O=re>=2),n(23,C=re>=1)}},[y,A,Z,G,B,j,i,r,d,f,p,_,m,g,v,b,x,E,w,P,Ae,T,O,C,s,o,h,fe,M,k,a,c,U,z,L,H,Y,K,J,ne,S,D,Q,ee,W,oe,N,le,ce,ye]}class bT extends jt{constructor(t){super(),Wt(this,t,vT,_T,Ut,{},[-1,-1,-1])}}function xT(e){let t,n,i,r;return n=new bT({}),{c(){t=Xe("main"),et(n.$$.fragment),i=Ve(),Ue(t,"class","svelte-oc9kaa"),document.title="\uCE74\uD3EC\uB9AC\uB3C4"},m(s,o){$e(s,t,o),Je(n,t,null),$e(s,i,o),r=!0},p:zt,i(s){r||(Re(n.$$.fragment,s),r=!0)},o(s){Oe(n.$$.fragment,s),r=!1},d(s){s&&Ye(t),Ke(n),s&&Ye(i)}}}class wT extends jt{constructor(t){super(),Wt(this,t,null,xT,Ut,{})}}new wT({target:document.getElementById("app")});
