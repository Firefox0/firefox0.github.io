(()=>{var e,t,n;let o,a,r,l,c,s,i;let u=document.getElementById("title");function d(e){u.innerText=`Garen Ult Trainer (${function(e){switch(e){case 0:return"Easy\uD83D\uDE03";case 1:return"Medium\uD83D\uDE0C";case 2:return"Hard\uD83D\uDE10";case 3:return"Extreme\uD83D\uDE21";case 4:return"Insane\uD83D\uDE08";default:return""}}(e)})`}function m(e){return new Animation(new KeyframeEffect(e,[{transform:"translateY(0px)"},{transform:"translateY(-10px)"},{transform:"translateY(0px)"}],{duration:200}),document.timeline)}let g="highscore-",f="cursor",b="difficulty",k="theme";function y(e){let t=localStorage.getItem(e);return null===t?null:Number(t)}function h(e,t){var n;n=String(t),localStorage.setItem(e,n)}function v(){h(b,o)}(o=Number(y(b)))>=0||(o=1),d(o);let B=document.getElementById("highscore"),p=document.getElementById("resetHighscoreButton"),E=document.getElementById("score"),I=0,C=0,L=null,M=null;function w(){let e=y(g+o);null===e&&(e=0),D(e)}function A(e){C=e,E.innerText=String(e),L.play()}function D(e){void 0===e&&(e=C)<I||(I=e,B.innerText=String(e),M.play(),I>0?p.removeAttribute("disabled"):p.setAttribute("disabled",""),h(g+o,e))}function G(e,t){return Math.trunc(e+Math.random()*(t+1-e))}document.getElementById("resetHighscoreButton").onclick=()=>void(0!==I&&D(0)),L=m(E),M=m(B),w();let x=0,T=document.getElementsByClassName("circle");function H(e,t){let n;switch(x){case 1:n=150+.25*(t-e);break;case 2:n=300+.3*(t-e);break;case 3:n=450+.35*(t-e);break;default:return 0}return Math.trunc(n)}function N(){for(let e=0;e<T.length;e++)T[e].setAttribute("src","../img/UltimateCircles/black_circle_color.svg")}function S(){for(let e=0;e<x;e++)T[e].setAttribute("src","../img/UltimateCircles/yellow_circle_color.svg")}let R=0,U=0,W=document.getElementById("hpBar"),F=W.getContext("2d");function $(){W.classList.add("d-none")}function q(e,t,n,o,a){F.fillStyle=a,F.fillRect(e,t,n,o)}(t=e||(e={}))[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",c=parseFloat((l=getComputedStyle(W)).borderLeftWidth)+parseFloat(l.borderRightWidth),s=parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),W.width=W.offsetWidth-c,W.height=W.offsetHeight-s,F.rect(0,0,W.offsetWidth,W.offsetHeight),$();let P=document.getElementById("timerBar"),_=100,Y=!1,X=5,K=null;function O(){null!==K&&cancelAnimationFrame(K),Y=!0}function V(){_=100,P.style.width="100%"}function j(){i=void 0,X=5,V()}P.style.transition="none";let z=document.getElementsByTagName("body")[0],J=document.getElementsByClassName("card"),Q=document.getElementsByClassName("btn-primary"),Z=document.getElementById("ultImage"),ee=document.getElementById("progressBar"),et=["../img/GarenBackground/default.png","../img/GarenBackground/sanguine.png","../img/GarenBackground/deserttrooper.png","../img/GarenBackground/commando.png","../img/GarenBackground/dreadknight.png","../img/GarenBackground/rugged.png","../img/GarenBackground/steellegion.png","../img/GarenBackground/rogueadmiral.png","../img/GarenBackground/warringkingdoms.png","../img/GarenBackground/godking.png","../img/GarenBackground/demaciavice.png","../img/GarenBackground/mechakingdoms.png","../img/GarenBackground/prestigemechakingdoms.png","../img/GarenBackground/battleacademia.png","../img/GarenBackground/mythmaker.png"];function en(e){switch(e){case 0:eo(e,"#c6936f","#314598");break;case 1:eo(e,"#c33d0f","#3d3935");break;case 2:eo(e,"#9c5d33","#86a4ad");break;case 3:eo(e,"#41512b","#bea028");break;case 4:eo(e,"#708bb6","#9a6b7e");break;case 5:eo(e,"#4e5862","#836b54");break;case 6:eo(e,"#373737","#744a30");break;case 7:eo(e,"#503221","#2d2231");break;case 8:eo(e,"#a26331","#da4040");break;case 9:eo(e,"#5c4744","#51a7bc");break;case 10:eo(e,"#10c3e5","#e442ee");break;case 11:eo(e,"#685c4d","#5ea4e5");break;case 12:eo(e,"#685449","#f6a15f");break;case 13:eo(e,"#1c263f","#f92136");break;case 14:eo(e,"#d45256","#948c9b");break;default:return}a=e}function eo(e,t,n){z.style.backgroundImage="url('"+et[e]+"')",W.style.borderColor=t,Z.style.outlineColor=n,P.style.backgroundColor=n,ee.style.borderColor=t,function(e,t){for(let n=0;n<J.length;n++)J[n].style.backgroundColor=e,J[n].style.borderColor=t}(t,n),function(e,t){for(let n=0;n<Q.length;n++){let o=Q[n];o.style.backgroundColor=e,o.style.borderColor=t,o.addEventListener("mouseenter",()=>{let n=el(e,50);o.style.backgroundColor=n,o.style.borderColor=t}),o.addEventListener("mousedown",()=>{let n=el(e,-50);o.style.backgroundColor=n,o.style.borderColor=t}),o.addEventListener("mouseleave",()=>{o.style.backgroundColor=e,o.style.borderColor=t})}}(n,t)}function ea(e){return parseInt("0x"+e)}function er(e,t){let n=Math.max(0,Math.round(Math.min(255,e+t)));return n<10?"0"+n:n.toString(16)}function el(e,t){let n=(e=e.slice(1)).slice(0,2),o=e.slice(2,4),a=e.slice(4,6),r=ea(n),l=ea(o),c=ea(a);return"#"+er(r,t)+er(l,t)+er(c,t)}en(a=y(k)??0);let ec=document.getElementsByTagName("body")[0],es=document.getElementsByClassName("btn");function ei(e){let t;switch(e){case 0:t="../cursors/legacy.cur";break;case 1:t="../cursors/modern.cur";break;default:return}let n="cursor: url('"+t+"'), auto;";ec.style.cssText+=n;for(let e=0;e<es.length;e++)es[e].onmouseenter=()=>{es[e].style.cssText+=n};r=e}ei(r=y(f)??1);let eu=document.getElementById("exampleModal"),ed=document.getElementById("modalCloseButton"),em=document.getElementById("modalApplyButton"),eg=document.querySelectorAll("div#themeButtons img"),ef=document.querySelectorAll("div#difficultyButtons img"),eb=document.querySelectorAll("div#cursorButtons img"),ek={value:-1},ey={value:-1},eh={value:-1},ev=[];function eB(){eu.classList.remove("show"),eu.style.display=""}function ep(e,t,n){for(let o=0;o<e.length;o++)e[o].onclick=()=>{eI(e,t.value),eE(e,o),t.value=o,n()}}function eE(e,t){e[t].style.borderColor="white"}function eI(e,t){e[t].style.borderColor=""}function eC(){ev=[ek.value,ey.value,eh.value]}function eL(){en(ek.value)}function eM(){d(ey.value),h(b,o=ey.value)}function ew(){ei(eh.value)}ek.value=a,ey.value=o,eh.value=r,eE(eg,ek.value),eE(ef,ey.value),eE(eb,eh.value),eC(),ed.onclick=()=>{eI(eg,ek.value),eI(ef,ey.value),eI(eb,eh.value),[ek.value,ey.value,eh.value]=ev,eE(eg,ek.value),eE(ef,ey.value),eE(eb,eh.value),eL(),eM(),ew(),eB()},em.onclick=()=>{h(k,a),h(b,o),h(f,r),eC(),w(),eB()},ep(eg,ek,()=>{eL()}),ep(ef,ey,()=>{eM()}),ep(eb,eh,()=>{ew()});let eA=document.getElementById("helpModal"),eD=document.getElementById("helpModalClose"),eG=document.getElementById("helpModalCloseButton");function ex(){eA.classList.remove("show"),eA.style.display=""}eD.onclick=()=>{ex()},eG.onclick=()=>{ex()};let eT=document.getElementById("yes"),eH=document.getElementById("no"),eN=document.getElementById("startButton"),eS=document.getElementById("backButton"),eR=document.getElementById("footer"),eU=document.getElementById("settingsButton"),eW=document.getElementById("helpButton"),eF=document.getElementById("explanationButton"),e$=document.getElementById("explanationRow"),eq=document.getElementById("explanationText");function eP(){e$.classList.add("d-none")}function e_(){eT.setAttribute("disabled",""),eH.setAttribute("disabled","")}function eY(){A(0),eV(!0),j(),eK()}function eX(e){O();let t=R,n=H(t,U);n>=t===e?((X-=.25)<1.5&&(X=1.5),V(),A(C+1),eK()):eO(n)}function eK(){var e;let t=o;!function e(){let t=G(1,3);if(t===x){e();return}x=t,N(),S()}(),function(e){let t,n;switch(e){case 0:t=200,n=250;break;case 1:t=150,n=200;break;case 2:t=100,n=150;break;case 3:t=50,n=100;break;case 4:t=25,n=50;break;default:return}let o=G(t,n);switch(0===Math.trunc(2*Math.random())&&(o*=-1),x){case 1:U=G(1250,2250);break;case 2:U=G(2250,3250);break;case 3:U=G(3250,6e3)}R=function(e,t){let n;switch(x){case 1:n=(150+.25*e+t)/1.25;break;case 2:n=(300+.3*e+t)/1.3;break;case 3:n=(450+.35*e+t)/1.35;break;default:return 0}return Math.trunc(n)}(U,o)}(t),function(){if(R>U)return;let e=R/100,t=Math.trunc(e),n=Math.trunc(U/100),o=Math.trunc(W.offsetWidth/n),a=(t+e%1)*o,r=W.offsetWidth-a;(function(e,t,n,o,a,r){let l=null;l=F.createLinearGradient(0,0,0,o);for(let e=0;e<a.length;e++)l.addColorStop(e/(a.length-1),a[e]);q(0,0,n,o,l)})(0,0,a,W.offsetHeight,["#f48d84","#c64135","#8e0b00"],0),q(a,0,r,W.offsetHeight,"black"),function(e,t){F.beginPath();for(let n=1;n<=e;n++){let e=n*t;F.moveTo(e,1),n%10==0?q(e-2,0,4,W.offsetHeight,"black"):q(e-1,0,2,W.offsetHeight/2,"black")}F.closePath(),F.stroke()}(t,o)}(),e=()=>eO(H(R,U)),Y=!1,requestAnimationFrame(t=>(function e(t,n){if(void 0===i&&(i=t),_-=(t-i)/(10*X),P.style.width=_+"%",i=t,!Y){if(_<=0){P.style.width="0%",n();return}K=requestAnimationFrame(t=>e(t,n))}})(t,e))}function eO(e){var t,n,o;eV(!1),t=R,n=U,o=`CORRECT ANSWER: <span>${e>=t?"\uD83D\uDC4D":"\uD83D\uDC4E"}</span><br>
            MAXIMUM HP: <span>${Math.trunc(n)}</span><br>
            CURRENT HP: <span>${t}</span><br>
            ULT DAMAGE: <span>${Math.trunc(e)}</span><br>
            REMAINING HP: <span>${Math.trunc(t-e)}</span>`,eq.innerHTML=o,e$.classList.remove("d-none")}function eV(e){e?(eT.removeAttribute("disabled"),eH.removeAttribute("disabled")):e_()}e_(),eT.onclick=()=>void(eT.hasAttribute("disabled")||eX(!0)),eH.onclick=()=>void(eH.hasAttribute("disabled")||eX(!1)),eN.onclick=()=>void(eR.classList.add("d-none"),eN.classList.add("d-none"),eS.classList.remove("d-none"),eU.classList.add("invisible"),eW.classList.add("d-none"),W.classList.remove("d-none"),eY()),eS.onclick=()=>void(eR.classList.remove("d-none"),eS.classList.add("d-none"),eN.classList.remove("d-none"),eU.classList.remove("invisible"),eW.classList.remove("d-none"),O(),V(),A(0),eV(!1),$(),eP(),x=0,N(),S()),eU.onclick=()=>void(eu.classList.add("show"),eu.style.display="block"),eW.onclick=()=>void(eA.classList.add("show"),eA.style.display="block"),eF.onclick=()=>void(eP(),D(),A(0),j(),eY()),(()=>{for(let e=0;e<et.length;e++)new Image().src=et[e]})(),n={1:()=>{eT.click()},2:()=>void eH.click(),Enter:()=>{eN.classList.contains("d-none")?e$.classList.contains("d-none")||eF.click():eN.click()},r:()=>{D(0)}},document.onkeydown=e=>{for(let t in n)e.key===t&&n[t]()},function e(t,n){let o="";document.onkeyup=a=>{(o+=a.key).length>t.length&&(o=o.substring(o.length-t.length)),o===t&&(n(),e(t,n))}}("demacia",()=>D(Number.MAX_VALUE))})();
//# sourceMappingURL=controller.js.map
