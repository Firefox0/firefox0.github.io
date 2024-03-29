(()=>{var e,t,n;let l,o,c;function a(e,t){return Math.floor(e+Math.random()*(t-e))}function u(e){return new Animation(new KeyframeEffect(e,[{transform:"translateY(0px)"},{transform:"translateY(-10px)"},{transform:"translateY(0px)"}],{duration:200}),document.timeline)}let i=document.getElementById("ultLevel"),s=0,r=null;function d(e,t){switch(s){case 1:return 150+.25*(t-e);case 2:return 300+.3*(t-e);case 3:return 450+.35*(t-e);default:return 0}}function m(e){s=e,i.innerText=String(e),r.play()}r=u(i);let f=document.getElementById("timerBar"),g=null,y=100,h=1;function b(){h=1,y=100,f.style.width="100%"}function v(){null!==g&&(clearInterval(g),g=null)}f.style.transition="none";let B="highscore-",E="cursor",k="difficulty",I="theme";function L(e){let t=localStorage.getItem(e);return null===t?null:Number(t)}function p(e,t){var n;n=String(t),localStorage.setItem(e,n)}let w=document.getElementById("title");function M(e){w.innerText=`Garen Ult Trainer (${function(e){switch(e){case 0:return"QMaxGaren";case 1:return"Medium";case 2:return"Riste";case 3:return"Erislash";default:return""}}(e)})`}function x(){p(k,l)}(l=Number(L(k)))>=0||(l=1),M(l);let A=document.getElementById("highscore"),T=document.getElementById("resetHighscoreButton"),C=document.getElementById("score"),N=0,R=0,S=null,H=null;function $(){let e=L(B+l);(null===e||0==e)&&(e=0),U(e)}function P(e){R=e,C.innerText=String(e),S.play()}function U(e){void 0===e&&(e=R),N=e,A.innerText=String(e),H.play(),N>0?T.removeAttribute("disabled"):T.setAttribute("disabled",""),p(B+l,e)}document.getElementById("resetHighscoreButton").onclick=()=>void(0!==N&&U(0)),S=u(C),H=u(A),$();let Y=0,D=0,G=document.getElementById("hpBar"),K=G.getContext("2d");function Q(e,t,n,l,o){K.fillStyle=o,K.fillRect(e,t,n,l)}(t=e||(e={}))[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",G.width=750,G.height=150,K.rect(0,0,750,150);let V=document.getElementById("explanationButton"),X=document.getElementById("explanationText"),_=document.getElementById("explanationRow");function j(){_.classList.add("d-none")}let q=document.getElementsByTagName("body")[0],z=document.getElementsByClassName("card-body"),F=document.getElementById("startButton");function J(e){switch(e){case 0:q.style.backgroundColor="#434c5e",O("#4c566a"),F.style.backgroundColor="";break;case 1:q.style.backgroundColor="#2e3440",O("#3b4252");break;default:return}o=e}function O(e){for(let t=0;t<z.length;t++)z[t].style.backgroundColor=e}J(o=L(I)??0);let W=document.getElementsByTagName("body")[0],Z=document.getElementsByClassName("btn");function ee(e){let t;switch(e){case 0:t="../misc/legacy.cur";break;case 1:t="../misc/modern.cur";break;default:t=""}let n="cursor: url('"+t+"'), auto;";W.style.cssText+=n;for(let e=0;e<Z.length;e++)Z[e].onmouseenter=()=>{Z[e].style.cssText+=n}}ee(c=L(E)??1);let et=document.getElementById("settingsButton"),en=document.getElementById("exampleModal"),el=document.getElementById("modalCloseButton"),eo=document.getElementById("modalApplyButton"),ec={value:-1},ea={value:-1},eu={value:-1},ei=[],es=[document.getElementById("difficultyEasyButton"),document.getElementById("difficultyMediumButton"),document.getElementById("difficultyHardButton"),document.getElementById("difficultyRisteButton")],er=[document.getElementById("themeNordRegular"),document.getElementById("themeNordDark")],ed=[document.getElementById("cursorLegacy"),document.getElementById("cursorModern")];function em(){en.classList.remove("show"),en.style.display=""}function ef(e,t,n){for(let l=0;l<e.length;l++)e[l].onclick=()=>{ey(e,t.value),eg(e,l),t.value=l,n()}}function eg(e,t){e[t].classList.add("btn-chosen")}function ey(e,t){e[t].classList.remove("btn-chosen")}function eh(){ei=[ec.value,ea.value,eu.value]}function eb(){J(ec.value)}function ev(){M(ea.value),p(k,l=ea.value)}function eB(){ee(eu.value)}ec.value=o,eg(er,ec.value),ea.value=l,eg(es,ea.value),eu.value=c,eg(ed,eu.value),eh(),et.onclick=()=>{en.classList.add("show"),en.style.display="block"},el.onclick=()=>{ey(er,ec.value),ey(es,ea.value),ey(ed,eu.value),[ec.value,ea.value,eu.value]=ei,eg(er,ec.value),eg(es,ea.value),eg(ed,eu.value),eb(),ev(),eB(),em()},eo.onclick=()=>{$(),eh(),p(I,o),p(k,l),p(E,c),em()},ef(er,ec,()=>{eb()}),ef(es,ea,()=>{ev()}),ef(ed,eu,()=>{eB()});let eE=document.getElementById("helpButton"),ek=document.getElementById("helpModal"),eI=document.getElementById("helpModalClose"),eL=document.getElementById("helpModalCloseButton");function ep(){ek.classList.remove("show"),ek.style.display=""}eE.onclick=()=>{ek.classList.add("show"),ek.style.display="block"},eI.onclick=()=>{ep()},eL.onclick=()=>{ep()};let ew=document.getElementById("yes"),eM=document.getElementById("no"),ex=document.getElementById("startButton"),eA=document.getElementById("backButton"),eT=document.getElementById("footer");function eC(e){v();let t=Y,n=d(t,D);n>=t===e?(P(R+1),eN()):eS(n)}function eN(){var e;let t=l;!function e(){let t=a(1,3);if(t===s){e();return}m(t)}(),function(e){let t=0;e++;let n=a(Math.floor(1e3/(e*=2)),Math.floor(2e3/e));switch(0===Math.floor(2*Math.random())&&(n*=-1),s){case 1:t=a(500,2e3);break;case 2:t=a(1e3,2500);break;case 3:t=a(1500,3e3)}D=function(e,t){switch(s){case 1:return(e-t-150)/.25+e;case 2:return(e-t-300)/.3+e;case 3:return(e-t-450)/3.5+e;default:return 0}}(Y=t,n)}(t),function(){if(Y>D)return;let e=Math.trunc(Y/100),t=Math.trunc(D/100),n=G.width/t;(function(e,t,n,l,o,c){let a=null;a=K.createLinearGradient(0,0,0,l);for(let e=0;e<o.length;e++)a.addColorStop(e/(o.length-1),o[e]);Q(0,1,n,l,a)})(0,0,e*n,G.height,["#bf616a","#dd4f52","#870a0e"],0),Q(e*n,1,(t-e)*n,150,"black"),function(e,t){K.beginPath();for(let n=1;n<=e;n++){let e=n*t;K.moveTo(e,2),n%10==0?K.lineTo(e,G.height):K.lineTo(e,G.height/2)}K.closePath(),K.stroke()}(e,n)}(),b(),e=()=>eS(d(Y,D)),g=setInterval(()=>{y-=h,f.style.width=y+"%",y<=0&&(v(),e())},1e3/60)}function eR(){P(0),eH(!0),eN()}function eS(e){var t,n;eH(!1),t=Y,n=D,X.innerHTML=`Correct answer: ${e>=t?"Yes":"No"} <br>
                                        Enemy current HP: ${t} <br>
                                        Enemy maximum HP: ${Math.trunc(n)} <br>
                                        Ult damage: ${Math.trunc(e)} <br>
                                        Remaining HP: ${Math.trunc(t-e)}`,_.classList.remove("d-none")}function eH(e){e?(ew.removeAttribute("disabled"),eM.removeAttribute("disabled")):(ew.setAttribute("disabled",""),eM.setAttribute("disabled",""))}eA.classList.add("invisible"),ew.setAttribute("disabled",""),eM.setAttribute("disabled",""),ew.onclick=()=>{ew.hasAttribute("disabled")||eC(!0)},eM.onclick=()=>{eM.hasAttribute("disabled")||eC(!1)},ex.onclick=()=>{eE.classList.add("d-none"),et.classList.add("invisible"),eT.classList.add("d-none"),ex.classList.add("d-none"),G.classList.remove("d-none"),eA.classList.remove("invisible"),eR()},eA.onclick=()=>{eE.classList.remove("d-none"),eT.classList.remove("d-none"),v(),b(),P(0),eA.classList.add("invisible"),ex.classList.remove("d-none"),et.classList.remove("invisible"),eH(!1),G.classList.add("d-none"),j(),m(0)},V.onclick=()=>{j(),U(),eR()},n={1:()=>{ew.click()},2:()=>void eM.click(),Enter:()=>{ex.click(),V.click()},r:()=>{U(0)}},document.onkeydown=e=>{for(let t in n)e.key===t&&n[t]()},function e(t,n){let l="";document.onkeyup=o=>{(l+=o.key).length>t.length&&(l=l.substring(l.length-t.length)),l===t&&(n(),e(t,n))}}("demacia",()=>U(Number.MAX_VALUE))})();
//# sourceMappingURL=keyboard.js.map
