(()=>{var e,t,n;let o,a,r,l,c,d,u;let i=document.getElementById("title");function s(e){i.innerText=`Garen Ult Trainer (${function(e){switch(e){case 0:return"Easy\uD83D\uDE03";case 1:return"Medium\uD83D\uDE0C";case 2:return"Hard\uD83D\uDE10";case 3:return"Extreme\uD83D\uDE21";case 4:return"Insane\uD83D\uDE08";default:return""}}(e)})`}function m(e){return new Animation(new KeyframeEffect(e,[{transform:"translateY(0px)"},{transform:"translateY(-10px)"},{transform:"translateY(0px)"}],{duration:200}),document.timeline)}let g="highscore-",f="cursor",y="difficulty",b="theme";function h(e){let t=localStorage.getItem(e);return null===t?null:Number(t)}function k(e,t){var n;n=String(t),localStorage.setItem(e,n)}function B(){k(y,o)}(o=Number(h(y)))>=0||(o=1),s(o);let E=document.getElementById("highscore"),v=document.getElementById("resetHighscoreButton"),I=document.getElementById("score"),p=0,C=0,G=null,L=null;function D(){let e=h(g+o);null===e&&(e=0),M(e)}function w(e){C=e,I.innerText=String(e),G.play()}function M(e){void 0===e&&(e=C)<p||(p=e,E.innerText=String(e),L.play(),p>0?v.removeAttribute("disabled"):v.setAttribute("disabled",""),k(g+o,e))}function x(e,t){return Math.trunc(e+Math.random()*(t+1-e))}document.getElementById("resetHighscoreButton").onclick=()=>void(0!==p&&M(0)),G=m(I),L=m(E),D();let A=0,H=document.getElementsByClassName("circle");function T(e,t){let n;switch(A){case 1:n=150+.25*(t-e);break;case 2:n=300+.3*(t-e);break;case 3:n=450+.35*(t-e);break;default:return 0}return Math.trunc(n)}function S(){for(let e=0;e<H.length;e++)H[e].setAttribute("src","../img/UltimateCircles/black_circle_color.svg")}function N(){for(let e=0;e<A;e++)H[e].setAttribute("src","../img/UltimateCircles/yellow_circle_color.svg")}let W=0,R=0,F=document.getElementById("hpBar"),U=F.getContext("2d");function P(){F.classList.add("d-none")}function $(e,t,n,o,a){U.fillStyle=a,U.fillRect(e,t,n,o)}(t=e||(e={}))[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",c=parseFloat((l=getComputedStyle(F)).borderLeftWidth)+parseFloat(l.borderRightWidth),d=parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),F.width=F.offsetWidth-c,F.height=F.offsetHeight-d,U.rect(0,0,F.offsetWidth,F.offsetHeight),P();let _=document.getElementById("timerBar"),Y=100,q=!1,K=5,V=null;function X(){null!==V&&cancelAnimationFrame(V),q=!0}function j(){Y=100,_.style.width="100%"}function z(){u=void 0,K=5,j()}_.style.transition="none";let J=document.getElementsByTagName("body")[0],O=document.getElementsByClassName("card"),Q=document.getElementsByClassName("btn-primary"),Z=document.getElementById("ultImage"),ee=document.getElementById("progressBar"),et=["../img/GarenBackground/default.png","../img/GarenBackground/sanguine.png","../img/GarenBackground/deserttrooper.png","../img/GarenBackground/commando.png","../img/GarenBackground/dreadknight.png","../img/GarenBackground/rugged.png","../img/GarenBackground/steellegion.png","../img/GarenBackground/rogueadmiral.png","../img/GarenBackground/warringkingdoms.png","../img/GarenBackground/godking.png","../img/GarenBackground/demaciavice.png","../img/GarenBackground/mechakingdoms.png","../img/GarenBackground/prestigemechakingdoms.png","../img/GarenBackground/battleacademia.png","../img/GarenBackground/mythmaker.png"];function en(e){switch(e){case 0:eo(e,"#c6936f","#314598");break;case 1:eo(e,"#c33d0f","#3d3935");break;case 2:eo(e,"#9c5d33","#86a4ad");break;case 3:eo(e,"#41512b","#bea028");break;case 4:eo(e,"#708bb6","#9a6b7e");break;case 5:eo(e,"#4e5862","#836b54");break;case 6:eo(e,"#373737","#744a30");break;case 7:eo(e,"#503221","#2d2231");break;case 8:eo(e,"#a26331","#da4040");break;case 9:eo(e,"#5c4744","#51a7bc");break;case 10:eo(e,"#10c3e5","#e442ee");break;case 11:eo(e,"#685c4d","#5ea4e5");break;case 12:eo(e,"#685449","#f6a15f");break;case 13:eo(e,"#1c263f","#f92136");break;case 14:eo(e,"#d45256","#948c9b");break;default:return}a=e}function eo(e,t,n){J.style.backgroundImage="url('"+et[e]+"')",F.style.borderColor=t,Z.style.outlineColor=n,_.style.backgroundColor=n,ee.style.borderColor=t,function(e,t){for(let n=0;n<O.length;n++)O[n].style.backgroundColor=e,O[n].style.borderColor=t}(t,n),function(e,t){for(let n=0;n<Q.length;n++){let o=Q[n];o.style.backgroundColor=e,o.style.borderColor=t,o.addEventListener("mouseenter",()=>{let n=el(e,50);o.style.backgroundColor=n,o.style.borderColor=t}),o.addEventListener("mousedown",()=>{let n=el(e,-50);o.style.backgroundColor=n,o.style.borderColor=t}),o.addEventListener("mouseleave",()=>{o.style.backgroundColor=e,o.style.borderColor=t})}}(n,t)}function ea(e){return parseInt("0x"+e)}function er(e,t){let n=Math.max(0,Math.round(Math.min(255,e+t)));return n<10?"0"+n:n.toString(16)}function el(e,t){let n=(e=e.slice(1)).slice(0,2),o=e.slice(2,4),a=e.slice(4,6),r=ea(n),l=ea(o),c=ea(a);return"#"+er(r,t)+er(l,t)+er(c,t)}en(a=h(b)??0);let ec=document.getElementsByTagName("body")[0],ed=document.getElementsByClassName("btn");function eu(e){let t;switch(e){case 0:t="../misc/legacy.cur";break;case 1:t="../misc/modern.cur";break;default:return}let n="cursor: url('"+t+"'), auto;";ec.style.cssText+=n;for(let e=0;e<ed.length;e++)ed[e].onmouseenter=()=>{ed[e].style.cssText+=n};r=e}eu(r=h(f)??1);let ei=document.getElementById("exampleModal"),es=document.getElementById("modalCloseButton"),em=document.getElementById("modalApplyButton"),eg={value:-1},ef={value:-1},ey={value:-1},eb=[],eh=[document.getElementById("difficultyEasyButton"),document.getElementById("difficultyMediumButton"),document.getElementById("difficultyHardButton"),document.getElementById("difficultyExtremeButton"),document.getElementById("difficultyInsaneButton")],ek=[document.getElementById("themeGarenDefault"),document.getElementById("themeGarenSanguine"),document.getElementById("themeGarenDeserttrooper"),document.getElementById("themeGarenCommando"),document.getElementById("themeGarenDreadknight"),document.getElementById("themeGarenRugged"),document.getElementById("themeGarenSteellegion"),document.getElementById("themeGarenRogueadmiral"),document.getElementById("themeGarenWarringkingdoms"),document.getElementById("themeGarenGodking"),document.getElementById("themeGarenDemaciavice"),document.getElementById("themeGarenMechakingdoms"),document.getElementById("themeGarenPrestige"),document.getElementById("themeGarenBattleacademia"),document.getElementById("themeGarenMythmaker")],eB=[document.getElementById("cursorLegacy"),document.getElementById("cursorModern")];function eE(){ei.classList.remove("show"),ei.style.display=""}function ev(e,t,n){for(let o=0;o<e.length;o++)e[o].onclick=()=>{ep(e,t.value),eI(e,o),t.value=o,n()}}function eI(e,t){e[t].style.borderColor="white"}function ep(e,t){e[t].style.borderColor=""}function eC(){eb=[eg.value,ef.value,ey.value]}function eG(){en(eg.value)}function eL(){s(ef.value),k(y,o=ef.value)}function eD(){eu(ey.value)}eg.value=a,eI(ek,eg.value),ef.value=o,eI(eh,ef.value),ey.value=r,eI(eB,ey.value),eC(),es.onclick=()=>{ep(ek,eg.value),ep(eh,ef.value),ep(eB,ey.value),[eg.value,ef.value,ey.value]=eb,eI(ek,eg.value),eI(eh,ef.value),eI(eB,ey.value),eG(),eL(),eD(),eE()},em.onclick=()=>{k(b,a),k(y,o),k(f,r),eC(),D(),eE()},ev(ek,eg,()=>{eG()}),ev(eh,ef,()=>{eL()}),ev(eB,ey,()=>{eD()});let ew=document.getElementById("helpModal"),eM=document.getElementById("helpModalClose"),ex=document.getElementById("helpModalCloseButton");function eA(){ew.classList.remove("show"),ew.style.display=""}eM.onclick=()=>{eA()},ex.onclick=()=>{eA()};let eH=document.getElementById("yes"),eT=document.getElementById("no"),eS=document.getElementById("startButton"),eN=document.getElementById("backButton"),eW=document.getElementById("footer"),eR=document.getElementById("settingsButton"),eF=document.getElementById("helpButton"),eU=document.getElementById("explanationButton"),eP=document.getElementById("explanationRow"),e$=document.getElementById("explanationText");function e_(){eP.classList.add("d-none")}function eY(){eH.setAttribute("disabled",""),eT.setAttribute("disabled","")}function eq(){w(0),ej(!0),z(),eV()}function eK(e){X();let t=W,n=T(t,R);n>=t===e?((K-=.25)<1.5&&(K=1.5),j(),w(C+1),eV()):eX(n)}function eV(){var e;let t=o;!function e(){let t=x(1,3);if(t===A){e();return}A=t,S(),N()}(),function(e){let t,n;switch(e){case 0:t=200,n=250;break;case 1:t=150,n=200;break;case 2:t=100,n=150;break;case 3:t=50,n=100;break;case 4:t=25,n=50;break;default:return}let o=x(t,n);switch(0===Math.trunc(2*Math.random())&&(o*=-1),A){case 1:R=x(1250,2250);break;case 2:R=x(2250,3250);break;case 3:R=x(3250,6e3)}W=function(e,t){let n;switch(A){case 1:n=(150+.25*e+t)/1.25;break;case 2:n=(300+.3*e+t)/1.3;break;case 3:n=(450+.35*e+t)/1.35;break;default:return 0}return Math.trunc(n)}(R,o)}(t),function(){if(W>R)return;let e=W/100,t=Math.trunc(e),n=Math.trunc(R/100),o=Math.trunc(F.offsetWidth/n),a=(t+e%1)*o,r=F.offsetWidth-a;(function(e,t,n,o,a,r){let l=null;l=U.createLinearGradient(0,0,0,o);for(let e=0;e<a.length;e++)l.addColorStop(e/(a.length-1),a[e]);$(0,0,n,o,l)})(0,0,a,F.offsetHeight,["#f48d84","#c64135","#8e0b00"],0),$(a,0,r,F.offsetHeight,"black"),function(e,t){U.beginPath();for(let n=1;n<=e;n++){let e=n*t;U.moveTo(e,1),n%10==0?$(e-2,0,4,F.offsetHeight,"black"):$(e-1,0,2,F.offsetHeight/2,"black")}U.closePath(),U.stroke()}(t,o)}(),e=()=>eX(T(W,R)),q=!1,requestAnimationFrame(t=>(function e(t,n){if(void 0===u&&(u=t),Y-=(t-u)/(10*K),_.style.width=Y+"%",u=t,!q){if(Y<=0){_.style.width="0%",n();return}V=requestAnimationFrame(t=>e(t,n))}})(t,e))}function eX(e){var t,n,o;ej(!1),t=W,n=R,o=`Correct Answer: ${e>=t?"\uD83D\uDC4D":"\uD83D\uDC4E"} <br>
            Maximum HP: ${Math.trunc(n)} <br>
            Current HP: ${t} <br>
            Ult Damage: ${Math.trunc(e)} <br>
            Remaining HP: ${Math.trunc(t-e)}`,e$.innerHTML=o,eP.classList.remove("d-none")}function ej(e){e?(eH.removeAttribute("disabled"),eT.removeAttribute("disabled")):eY()}eY(),eH.onclick=()=>void(eH.hasAttribute("disabled")||eK(!0)),eT.onclick=()=>void(eT.hasAttribute("disabled")||eK(!1)),eS.onclick=()=>void(eW.classList.add("d-none"),eS.classList.add("d-none"),eN.classList.remove("d-none"),eR.classList.add("invisible"),eF.classList.add("d-none"),F.classList.remove("d-none"),eq()),eN.onclick=()=>void(eW.classList.remove("d-none"),eN.classList.add("d-none"),eS.classList.remove("d-none"),eR.classList.remove("invisible"),eF.classList.remove("d-none"),X(),j(),w(0),ej(!1),P(),e_(),A=0,S(),N()),eR.onclick=()=>void(ei.classList.add("show"),ei.style.display="block"),eF.onclick=()=>void(ew.classList.add("show"),ew.style.display="block"),eU.onclick=()=>void(e_(),M(),w(0),z(),eq()),(()=>{for(let e=0;e<et.length;e++)new Image().src=et[e]})(),n={1:()=>{eH.click()},2:()=>void eT.click(),Enter:()=>{eS.classList.contains("d-none")?eP.classList.contains("d-none")||eU.click():eS.click()},r:()=>{M(0)}},document.onkeydown=e=>{for(let t in n)e.key===t&&n[t]()},function e(t,n){let o="";document.onkeyup=a=>{(o+=a.key).length>t.length&&(o=o.substring(o.length-t.length)),o===t&&(n(),e(t,n))}}("demacia",()=>M(Number.MAX_VALUE))})();
//# sourceMappingURL=controller.js.map
