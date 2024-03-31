(()=>{var e,t,n;let l,o,c,a;function i(e,t){return Math.floor(e+Math.random()*(t+1-e))}let u=0,s=document.getElementsByClassName("circle");function r(e,t){switch(u){case 1:return 150+.25*(t-e);case 2:return 300+.3*(t-e);case 3:return 450+.35*(t-e);default:return 0}}function d(){for(let e=0;e<s.length;e++)s[e].style.backgroundColor="black"}function m(){for(let e=0;e<u;e++)s[e].style.backgroundColor="#fcfc00"}let f=document.getElementById("timerBar"),g=100,y=!1,h=5,b=null;function B(){null!==b&&cancelAnimationFrame(b),y=!0}function v(){g=100,f.style.width="100%"}function E(){a=void 0,h=5,v()}function k(e){return new Animation(new KeyframeEffect(e,[{transform:"translateY(0px)"},{transform:"translateY(-10px)"},{transform:"translateY(0px)"}],{duration:200}),document.timeline)}f.style.transition="none";let I="highscore-",L="cursor",p="difficulty",M="theme";function w(e){let t=localStorage.getItem(e);return null===t?null:Number(t)}function A(e,t){var n;n=String(t),localStorage.setItem(e,n)}let x=document.getElementById("title");function C(e){x.innerText=`Garen Ult Trainer (${function(e){switch(e){case 0:return"QMaxGaren";case 1:return"Medium";case 2:return"Riste";case 3:return"Erislash";default:return""}}(e)})`}function H(){A(p,l)}(l=Number(w(p)))>=0||(l=1),C(l);let T=document.getElementById("highscore"),N=document.getElementById("resetHighscoreButton"),R=document.getElementById("score"),S=0,$=0,P=null,U=null;function Y(){let e=w(I+l);null===e&&(e=0),F(e)}function D(e){$=e,R.innerText=String(e),P.play()}function F(e){void 0===e&&(e=$)<S||(S=e,T.innerText=String(e),U.play(),S>0?N.removeAttribute("disabled"):N.setAttribute("disabled",""),A(I+l,e))}document.getElementById("resetHighscoreButton").onclick=()=>void(0!==S&&F(0)),P=k(R),U=k(T),Y();let G=0,W=0,q=document.getElementById("hpBar"),K=q.getContext("2d");function Q(e,t,n,l,o){K.fillStyle=o,K.fillRect(e,t,n,l)}(t=e||(e={}))[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",q.width=q.offsetWidth,q.height=q.offsetHeight,K.rect(0,0,q.offsetWidth,q.offsetHeight);let V=document.getElementById("explanationButton"),X=document.getElementById("explanationText"),_=document.getElementById("explanationRow");function j(){_.classList.add("d-none")}let z=document.getElementsByTagName("body")[0],J=document.getElementsByClassName("card-body"),O=document.getElementById("startButton");function Z(e){switch(e){case 0:z.style.backgroundColor="#434c5e",ee("#4c566a"),O.style.backgroundColor="";break;case 1:z.style.backgroundColor="#2e3440",ee("#3b4252");break;default:return}o=e}function ee(e){for(let t=0;t<J.length;t++)J[t].style.backgroundColor=e}Z(o=w(M)??0);let et=document.getElementsByTagName("body")[0],en=document.getElementsByClassName("btn");function el(e){let t;switch(e){case 0:t="../misc/legacy.cur";break;case 1:t="../misc/modern.cur";break;default:t=""}let n="cursor: url('"+t+"'), auto;";et.style.cssText+=n;for(let e=0;e<en.length;e++)en[e].onmouseenter=()=>{en[e].style.cssText+=n}}el(c=w(L)??1);let eo=document.getElementById("settingsButton"),ec=document.getElementById("exampleModal"),ea=document.getElementById("modalCloseButton"),ei=document.getElementById("modalApplyButton"),eu={value:-1},es={value:-1},er={value:-1},ed=[],em=[document.getElementById("difficultyEasyButton"),document.getElementById("difficultyMediumButton"),document.getElementById("difficultyHardButton"),document.getElementById("difficultyRisteButton")],ef=[document.getElementById("themeNordRegular"),document.getElementById("themeNordDark")],eg=[document.getElementById("cursorLegacy"),document.getElementById("cursorModern")];function ey(){ec.classList.remove("show"),ec.style.display=""}function eh(e,t,n){for(let l=0;l<e.length;l++)e[l].onclick=()=>{eB(e,t.value),eb(e,l),t.value=l,n()}}function eb(e,t){e[t].classList.add("btn-chosen")}function eB(e,t){e[t].classList.remove("btn-chosen")}function ev(){ed=[eu.value,es.value,er.value]}function eE(){Z(eu.value)}function ek(){C(es.value),A(p,l=es.value)}function eI(){el(er.value)}eu.value=o,eb(ef,eu.value),es.value=l,eb(em,es.value),er.value=c,eb(eg,er.value),ev(),eo.onclick=()=>{ec.classList.add("show"),ec.style.display="block"},ea.onclick=()=>{eB(ef,eu.value),eB(em,es.value),eB(eg,er.value),[eu.value,es.value,er.value]=ed,eb(ef,eu.value),eb(em,es.value),eb(eg,er.value),eE(),ek(),eI(),ey()},ei.onclick=()=>{A(M,o),A(p,l),A(L,c),ev(),Y(),ey()},eh(ef,eu,()=>{eE()}),eh(em,es,()=>{ek()}),eh(eg,er,()=>{eI()});let eL=document.getElementById("helpButton"),ep=document.getElementById("helpModal"),eM=document.getElementById("helpModalClose"),ew=document.getElementById("helpModalCloseButton");function eA(){ep.classList.remove("show"),ep.style.display=""}eL.onclick=()=>{ep.classList.add("show"),ep.style.display="block"},eM.onclick=()=>{eA()},ew.onclick=()=>{eA()};let ex=document.getElementById("yes"),eC=document.getElementById("no"),eH=document.getElementById("startButton"),eT=document.getElementById("backButton"),eN=document.getElementById("footer");function eR(){D(0),eU(!0),E(),e$()}function eS(e){B();let t=G,n=r(t,W);n>=t===e?((h-=.25)<1&&(h=1),v(),D($+1),e$()):eP(n)}function e$(){var e;let t=l;!function e(){let t=i(1,3);if(t===u){e();return}u=t,d(),m()}(),function(e){let t=0,n=i(Math.floor(400/(e=Math.pow(2,e))),Math.floor(800/e));switch(0===Math.floor(2*Math.random())&&(n*=-1),u){case 1:t=i(500,2e3);break;case 2:t=i(1e3,2500);break;case 3:t=i(1500,3e3)}W=function(e,t){switch(u){case 1:return(e-t-150)/.25+e;case 2:return(e-t-300)/.3+e;case 3:return(e-t-450)/.35+e;default:return 0}}(G=t+n,n)}(t),function(){if(G>W)return;let e=Math.trunc(G/100),t=Math.trunc(W/100),n=q.offsetWidth/t;(function(e,t,n,l,o,c){let a=null;a=K.createLinearGradient(0,0,0,l);for(let e=0;e<o.length;e++)a.addColorStop(e/(o.length-1),o[e]);Q(0,1,n,l,a)})(0,0,e*n,q.offsetHeight,["#bf616a","#dd4f52","#870a0e"],0),Q(e*n,1,(t-e)*n,q.offsetHeight,"black"),function(e,t){K.beginPath();for(let n=1;n<=e;n++){let e=n*t;K.moveTo(e,2),n%10==0?K.lineTo(e,q.offsetHeight):K.lineTo(e,q.offsetHeight/2)}K.closePath(),K.stroke()}(e,n)}(),e=()=>eP(r(G,W)),y=!1,requestAnimationFrame(t=>(function e(t,n){if(void 0===a&&(a=t),g-=(t-a)/(10*h),f.style.width=g+"%",a=t,!y){if(g<=0){n();return}b=requestAnimationFrame(t=>e(t,n))}})(t,e))}function eP(e){var t,n;eU(!1),t=G,n=W,X.innerHTML=`Correct answer: ${e>=t?"Yes":"No"} <br>
                                        Enemy current HP: ${t} <br>
                                        Enemy maximum HP: ${Math.trunc(n)} <br>
                                        Ult damage: ${Math.trunc(e)} <br>
                                        Remaining HP: ${Math.trunc(t-e)}`,_.classList.remove("d-none")}function eU(e){e?(ex.removeAttribute("disabled"),eC.removeAttribute("disabled")):(ex.setAttribute("disabled",""),eC.setAttribute("disabled",""))}ex.setAttribute("disabled",""),eC.setAttribute("disabled",""),ex.onclick=()=>{ex.hasAttribute("disabled")||eS(!0)},eC.onclick=()=>{eC.hasAttribute("disabled")||eS(!1)},eH.onclick=()=>{eL.classList.add("d-none"),eo.classList.add("invisible"),eN.classList.add("d-none"),eH.classList.add("d-none"),q.classList.remove("d-none"),eT.classList.remove("d-none"),eR()},eT.onclick=()=>{eL.classList.remove("d-none"),eN.classList.remove("d-none"),B(),v(),D(0),eT.classList.add("d-none"),eH.classList.remove("d-none"),eo.classList.remove("invisible"),eU(!1),q.classList.add("d-none"),j(),u=0,d(),m()},V.onclick=()=>{j(),F(),D(0),E(),eR()},n={1:()=>{ex.click()},2:()=>void eC.click(),Enter:()=>{eH.classList.contains("d-none")?_.classList.contains("d-none")||V.click():eH.click()},r:()=>{F(0)}},document.onkeydown=e=>{for(let t in n)e.key===t&&n[t]()},function e(t,n){let l="";document.onkeyup=o=>{(l+=o.key).length>t.length&&(l=l.substring(l.length-t.length)),l===t&&(n(),e(t,n))}}("demacia",()=>F(Number.MAX_VALUE))})();
//# sourceMappingURL=keyboard.js.map
