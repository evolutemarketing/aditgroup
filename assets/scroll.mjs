// Ease mouse-wheel notches; leave touch, trackpads, keyboard and zoom native.
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
let raf=0,current=scrollY,goal=current,last=0,maxScroll=0;
function stop(){cancelAnimationFrame(raf);raf=0;current=goal=scrollY;last=0}
function nativeScrollArea(target,delta){
 for(let el=target instanceof Element?target:null;el&&el!==document.body&&el!==document.documentElement;el=el.parentElement){
  if(el.matches('textarea,select,[contenteditable="true"],[data-native-scroll]'))return true;
  if(el.scrollHeight>el.clientHeight+1&&/(auto|scroll|overlay)/.test(getComputedStyle(el).overflowY)){
   if((delta>0&&el.scrollTop+el.clientHeight<el.scrollHeight-1)||(delta<0&&el.scrollTop>0))return true;
  }
 }
 return false;
}
function frame(now){
 if(document.hidden||reduced.matches||!fine.matches){stop();return}
 const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
 current+=(goal-current)*(1-Math.exp(-dt*13));
 if(Math.abs(goal-current)<.25)current=goal;
 scrollTo({top:current,behavior:'instant'});
 if(current!==goal)raf=requestAnimationFrame(frame);else{raf=0;last=0}
}
addEventListener('wheel',event=>{
 if(event.defaultPrevented||reduced.matches||!fine.matches||event.ctrlKey||event.metaKey||event.shiftKey||!event.deltaY||Math.abs(event.deltaX)>Math.abs(event.deltaY)){stop();return}
 // Fine trackpad deltas already have OS momentum.
 if(event.deltaMode===0&&Math.abs(event.deltaY)<50){stop();return}
 if(nativeScrollArea(event.target,event.deltaY)){stop();return}
 const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
 if(!raf){current=goal=scrollY;maxScroll=Math.max(0,document.documentElement.scrollHeight-innerHeight)}
 const next=Math.max(0,Math.min(maxScroll,goal+delta));
 if(next===goal&&!raf)return;
 event.preventDefault();goal=next;
 if(!raf){last=0;raf=requestAnimationFrame(frame)}
},{passive:false});
for(const name of ['pointerdown','touchstart','keydown','resize','hashchange','visibilitychange'])addEventListener(name,stop,{passive:true});
reduced.addEventListener('change',stop);fine.addEventListener('change',stop);
