function y(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function D(){return Object.create(null)}function x(t){t.forEach(q)}function P(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function _t(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function R(t){return Object.keys(t).length===0}function W(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(W(e,n))}function ht(t,e,n,i){if(t){const r=z(t,e,n,i);return t[0](r)}}function z(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function mt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function pt(t,e,n,i,r,s){if(r){const c=z(e,n,i,s);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const B=typeof window<"u";let gt=B?()=>window.performance.now():()=>Date.now(),H=B?t=>requestAnimationFrame(t):y;const m=new Set;function L(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&H(L)}function xt(t){let e;return m.size===0&&H(L),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let v=!1;function U(){v=!0}function V(){v=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:X(1,r,b=>e[n[b]].claim_order,u))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const s=[],c=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(s.push(e[o-1]);l>=o;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);s.reverse(),c.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<c.length;o++){for(;u<s.length&&c[o].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[o],a)}}function Z(t,e){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function wt(){return j(" ")}function $t(){return j("")}function Et(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){rt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function F(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||s.push(l.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Nt(t,e,n){return F(t,e,n,et)}function At(t,e,n){return F(t,e,n,nt)}function ct(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function St(t){return ct(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Dt(t,e){return new t(e)}let g;function p(t){g=t}function G(){if(!g)throw new Error("Function called outside component initialization");return g}function Mt(t){G().$$.on_mount.push(t)}function kt(t){G().$$.after_update.push(t)}const h=[],M=[],$=[],k=[],I=Promise.resolve();let A=!1;function J(){A||(A=!0,I.then(K))}function qt(){return J(),I}function S(t){$.push(t)}const N=new Set;let d=0;function K(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),ot(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];N.has(n)||(N.add(n),n())}$.length=0}while(h.length);for(;k.length;)k.pop()();A=!1,N.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const E=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function zt(){_.r||x(_.c),_=_.p}function ut(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ht(t){t&&t.c()}function Lt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(q).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),s.forEach(S)}function st(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ot(t,e,n,i,r,s,c,l=[-1]){const o=g;p(t);const u=t.$$={fragment:null,ctx:[],props:s,update:y,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:D(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};c&&c(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,b,...C)=>{const T=C.length?C[0]:b;return u.ctx&&r(u.ctx[f],u.ctx[f]=T)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](T),a&&ft(t,f)),b}):[],u.update(),a=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){U();const f=it(e.target);u.fragment&&u.fragment.l(f),f.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&ut(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),V(),K()}p(o)}class Ft{$destroy(){st(this,1),this.$destroy=y}$on(e,n){if(!P(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as A,qt as B,y as C,nt as D,At as E,_t as F,Z as G,Et as H,dt as I,ht as J,pt as K,yt as L,mt as M,gt as N,xt as O,x as P,Tt as Q,Ft as S,wt as a,bt as b,St as c,zt as d,$t as e,ut as f,Pt as g,tt as h,Ot as i,kt as j,et as k,Nt as l,it as m,vt as n,Mt as o,Ct as p,j as q,ct as r,at as s,Bt as t,jt as u,M as v,Dt as w,Ht as x,Lt as y,lt as z};