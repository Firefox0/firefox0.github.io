(()=>{var e,t,n;let o,a,l,r,c,d,i;let u=document.getElementById("title");function s(e){u.innerText=`Garen Ult Trainer (${function(e){switch(e){case 0:return"Easy";case 1:return"Medium";case 2:return"Hard";case 3:return"Extreme";default:return""}}(e)})`}function m(e){return new Animation(new KeyframeEffect(e,[{transform:"translateY(0px)"},{transform:"translateY(-10px)"},{transform:"translateY(0px)"}],{duration:200}),document.timeline)}let g="highscore-",f="cursor",y="difficulty",h="theme";function b(e){let t=localStorage.getItem(e);return null===t?null:Number(t)}function k(e,t){var n;n=String(t),localStorage.setItem(e,n)}function B(){k(y,o)}(o=Number(b(y)))>=0||(o=1),s(o);let v=document.getElementById("highscore"),E=document.getElementById("resetHighscoreButton"),p=document.getElementById("score"),I=0,G=0,L=null,M=null;function C(){let e=b(g+o);null===e&&(e=0),x(e)}function w(e){G=e,p.innerText=String(e),L.play()}function x(e){void 0===e&&(e=G)<I||(I=e,v.innerText=String(e),M.play(),I>0?E.removeAttribute("disabled"):E.setAttribute("disabled",""),k(g+o,e))}function A(e,t){return Math.trunc(e+Math.random()*(t+1-e))}document.getElementById("resetHighscoreButton").onclick=()=>void(0!==I&&x(0)),L=m(p),M=m(v),C();let H=0,T=document.getElementsByClassName("rounded-circle");function S(e,t){let n;switch(H){case 1:n=150+.25*(t-e);break;case 2:n=300+.3*(t-e);break;case 3:n=450+.35*(t-e);break;default:return 0}return Math.trunc(n)}function N(){for(let e=0;e<T.length;e++)T[e].style.backgroundColor="black"}function W(){for(let e=0;e<H;e++)T[e].style.background="linear-gradient(#e5e1bc, #bc934b, #af8528)"}let R=0,F=0,D=document.getElementById("hpBar"),P=D.getContext("2d");function $(){D.classList.add("d-none")}function U(e,t,n,o,a){P.fillStyle=a,P.fillRect(e,t,n,o)}(t=e||(e={}))[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",c=parseFloat((r=getComputedStyle(D)).borderLeftWidth)+parseFloat(r.borderRightWidth),d=parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),D.width=D.offsetWidth-c,D.height=D.offsetHeight-d,P.rect(0,0,D.offsetWidth,D.offsetHeight),$();let Y=document.getElementsByTagName("body")[0],q=document.getElementsByClassName("card"),K=document.getElementsByClassName("btn-primary"),V=document.getElementById("ultImage"),X=["../img/GarenBackground/default.png","../img/GarenBackground/sanguine.png","../img/GarenBackground/deserttrooper.png","../img/GarenBackground/commando.png","../img/GarenBackground/dreadknight.png","../img/GarenBackground/rugged.png","../img/GarenBackground/steellegion.png","../img/GarenBackground/rogueadmiral.png","../img/GarenBackground/warringkingdoms.png","../img/GarenBackground/godking.png","../img/GarenBackground/demaciavice.png","../img/GarenBackground/mechakingdoms.png","../img/GarenBackground/prestigemechakingdoms.png","../img/GarenBackground/battleacademia.png","../img/GarenBackground/mythmaker.png"];function _(e){switch(e){case 0:j(e,"#c6936f","#314598");break;case 1:j(e,"#c33d0f","#55452e");break;case 2:j(e,"#9c5d33","#86a4ad");break;case 3:j(e,"#41512b","#bea028");break;case 4:j(e,"#708bb6","#9a6b7e");break;case 5:j(e,"#4e5862","#836b54");break;case 6:j(e,"#373737","#744a30");break;case 7:j(e,"#503221","#2d2231");break;case 8:j(e,"#a26331","#da4040");break;case 9:j(e,"#5c4744","#8bc4d3");break;case 10:j(e,"#10c3e5","#e442ee");break;case 11:j(e,"#685c4d","#70b6f9");break;case 12:j(e,"#685449","#f6a15f");break;case 13:j(e,"#1c263f","#f92136");break;case 14:j(e,"#d45256","#948c9b");break;default:return}a=e}function j(e,t,n){Y.style.backgroundImage="url('"+X[e]+"')",D.style.borderColor=t,V.style.outlineColor=n,function(e,t){for(let n=0;n<q.length;n++)q[n].style.backgroundColor=e,q[n].style.borderColor=t}(t,n),function(e,t){for(let n=0;n<K.length;n++){let o=K[n];o.style.backgroundColor=e,o.style.borderColor=t,o.addEventListener("mouseenter",()=>{let n=O(e,50);o.style.backgroundColor=n,o.style.borderColor=t}),o.addEventListener("mousedown",()=>{let n=O(e,-50);o.style.backgroundColor=n,o.style.borderColor=t}),o.addEventListener("mouseleave",()=>{o.style.backgroundColor=e,o.style.borderColor=t})}}(n,t)}function z(e){return parseInt("0x"+e)}function J(e,t){let n=Math.max(0,Math.round(Math.min(255,e+t)));return 0===n?"00":n.toString(16)}function O(e,t){let n=(e=e.slice(1)).slice(0,2),o=e.slice(2,4),a=e.slice(4,6),l=z(n),r=z(o),c=z(a);return"#"+J(l,t)+J(r,t)+J(c,t)}_(a=b(h)??0);let Q=document.getElementsByTagName("body")[0],Z=document.getElementsByClassName("btn");function ee(e){let t;switch(e){case 0:t="../misc/legacy.cur";break;case 1:t="../misc/modern.cur";break;default:t=""}let n="cursor: url('"+t+"'), auto;";Q.style.cssText+=n;for(let e=0;e<Z.length;e++)Z[e].onmouseenter=()=>{Z[e].style.cssText+=n}}ee(l=b(f)??1);let et=document.getElementById("exampleModal"),en=document.getElementById("modalCloseButton"),eo=document.getElementById("modalApplyButton"),ea={value:-1},el={value:-1},er={value:-1},ec=[],ed=[document.getElementById("difficultyEasyButton"),document.getElementById("difficultyMediumButton"),document.getElementById("difficultyHardButton"),document.getElementById("difficultyExtremeButton")],ei=[document.getElementById("themeGarenDefault"),document.getElementById("themeGarenSanguine"),document.getElementById("themeGarenDeserttrooper"),document.getElementById("themeGarenCommando"),document.getElementById("themeGarenDreadknight"),document.getElementById("themeGarenRugged"),document.getElementById("themeGarenSteellegion"),document.getElementById("themeGarenRogueadmiral"),document.getElementById("themeGarenWarringkingdoms"),document.getElementById("themeGarenGodking"),document.getElementById("themeGarenDemaciavice"),document.getElementById("themeGarenMechakingdoms"),document.getElementById("themeGarenPrestige"),document.getElementById("themeGarenBattleacademia"),document.getElementById("themeGarenMythmaker")],eu=[document.getElementById("cursorLegacy"),document.getElementById("cursorModern")];function es(){et.classList.remove("show"),et.style.display=""}function em(e,t,n){for(let o=0;o<e.length;o++)e[o].onclick=()=>{ef(e,t.value),eg(e,o),t.value=o,n()}}function eg(e,t){e[t].classList.add("btn-chosen")}function ef(e,t){e[t].classList.remove("btn-chosen")}function ey(){ec=[ea.value,el.value,er.value]}function eh(){_(ea.value)}function eb(){s(el.value),k(y,o=el.value)}function ek(){ee(er.value)}ea.value=a,eg(ei,ea.value),el.value=o,eg(ed,el.value),er.value=l,eg(eu,er.value),ey(),en.onclick=()=>{ef(ei,ea.value),ef(ed,el.value),ef(eu,er.value),[ea.value,el.value,er.value]=ec,eg(ei,ea.value),eg(ed,el.value),eg(eu,er.value),eh(),eb(),ek(),es()},eo.onclick=()=>{k(h,a),k(y,o),k(f,l),ey(),C(),es()},em(ei,ea,()=>{eh()}),em(ed,el,()=>{eb()}),em(eu,er,()=>{ek()});let eB=document.getElementById("helpModal"),ev=document.getElementById("helpModalClose"),eE=document.getElementById("helpModalCloseButton");function ep(){eB.classList.remove("show"),eB.style.display=""}ev.onclick=()=>{ep()},eE.onclick=()=>{ep()};let eI=document.getElementById("yes"),eG=document.getElementById("no"),eL=document.getElementById("startButton"),eM=document.getElementById("backButton"),eC=document.getElementById("footer"),ew=document.getElementById("settingsButton"),ex=document.getElementById("helpButton"),eA=document.getElementById("explanationButton"),eH=document.getElementById("explanationRow"),eT=document.getElementById("explanationText");function eS(){eH.classList.add("d-none")}function eN(){eI.setAttribute("disabled",""),eG.setAttribute("disabled","")}eN(),eI.onclick=()=>void(eI.hasAttribute("disabled")||eK(!0)),eG.onclick=()=>void(eG.hasAttribute("disabled")||eK(!1)),eL.onclick=()=>void(eC.classList.add("d-none"),eL.classList.add("d-none"),eM.classList.remove("d-none"),ew.classList.add("invisible"),ex.classList.add("d-none"),D.classList.remove("d-none"),eq()),eM.onclick=()=>void(eC.classList.remove("d-none"),eM.classList.add("d-none"),eL.classList.remove("d-none"),ew.classList.remove("invisible"),ex.classList.remove("d-none"),e$(),eU(),w(0),e_(!1),$(),eS(),H=0,N(),W()),ew.onclick=()=>void(et.classList.add("show"),et.style.display="block"),ex.onclick=()=>void(eB.classList.add("show"),eB.style.display="block"),eA.onclick=()=>void(eS(),x(),w(0),eY(),eq());let eW=document.getElementById("timerBar"),eR=100,eF=!1,eD=5,eP=null;function e$(){null!==eP&&cancelAnimationFrame(eP),eF=!0}function eU(){eR=100,eW.style.width="100%"}function eY(){i=void 0,eD=5,eU()}function eq(){w(0),e_(!0),eY(),eV()}function eK(e){e$();let t=R,n=S(t,F);n>=t===e?((eD-=.25)<1&&(eD=1),eU(),w(G+1),eV()):eX(n)}function eV(){var e;let t=o;!function e(){let t=A(1,3);if(t===H){e();return}H=t,N(),W()}(),function(e){let t=0,n=A(Math.floor(400/(e=Math.pow(2,e))),Math.floor(800/e));switch(0===Math.trunc(2*Math.random())&&(n*=-1),H){case 1:t=A(500,2e3);break;case 2:t=A(1e3,2500);break;case 3:t=A(1500,3e3)}F=function(e,t){let n;switch(H){case 1:n=(e-t-150)/.25+e;break;case 2:n=(e-t-300)/.3+e;break;case 3:n=(e-t-450)/.35+e;break;default:return 0}return Math.trunc(n)}(R=t+n,n)}(t),function(){if(R>F)return;let e=R/100,t=Math.trunc(e),n=e%1,o=Math.trunc(F/100),a=Math.trunc(D.offsetWidth/o);(function(e,t,n){let o=Math.trunc(e/10),a=e*t+5*o+(e-o)*2+t*n,l=D.offsetWidth-a;(function(e,t,n,o,a,l){let r=null;r=P.createLinearGradient(0,0,0,o);for(let e=0;e<a.length;e++)r.addColorStop(e/(a.length-1),a[e]);U(0,0,n,o,r)})(0,0,a,D.offsetHeight,["#f48d84","#c64135","#8e0b00"],0),U(a,0,l,D.offsetHeight,"black")})(t,a,n),function(e,t){P.beginPath();let n=0,o=0;for(let a=1;a<=e;a++){let e=a*t+5*n+2*o;P.moveTo(e+.5,1),a%10==0?(U(e,0,5,D.offsetHeight,"black"),n++):(U(e,0,2,D.offsetHeight/2,"black"),o++)}P.closePath(),P.stroke()}(t,a)}(),e=()=>eX(S(R,F)),eF=!1,requestAnimationFrame(t=>(function e(t,n){if(void 0===i&&(i=t),eR-=(t-i)/(10*eD),eW.style.width=eR+"%",i=t,!eF){if(eR<=0){n();return}eP=requestAnimationFrame(t=>e(t,n))}})(t,e))}function eX(e){var t,n,o;e_(!1),t=R,n=F,o=`Correct answer: ${e>=t?"Yes":"No"} <br>
            Enemy current HP: ${t} <br>
            Enemy maximum HP: ${Math.trunc(n)} <br>
            Ult damage: ${Math.trunc(e)} <br>
            Remaining HP: ${Math.trunc(t-e)}`,eT.innerHTML=o,eH.classList.remove("d-none")}function e_(e){e?(eI.removeAttribute("disabled"),eG.removeAttribute("disabled")):eN()}eW.style.transition="none",(()=>{for(let e=0;e<X.length;e++)new Image().src=X[e]})(),n={1:()=>{eI.click()},2:()=>void eG.click(),Enter:()=>{eL.classList.contains("d-none")?eH.classList.contains("d-none")||eA.click():eL.click()},r:()=>{x(0)}},document.onkeydown=e=>{for(let t in n)e.key===t&&n[t]()},function e(t,n){let o="";document.onkeyup=a=>{(o+=a.key).length>t.length&&(o=o.substring(o.length-t.length)),o===t&&(n(),e(t,n))}}("demacia",()=>x(Number.MAX_VALUE))})();
//# sourceMappingURL=controller.js.map
