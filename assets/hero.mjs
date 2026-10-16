const story=document.querySelector('.sun-story'),chapters=[...document.querySelectorAll('.chapter')],brands=[...document.querySelectorAll('.story-brand')],steps=[...document.querySelectorAll('[data-step]')],insights=[...document.querySelectorAll('[data-insight]')];
const mobile=matchMedia('(max-width:960px), (pointer:coarse)').matches;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;let target=0,progress=0,sunriseProgress=0,active=-1,storyVisible=true;
// Cache geometry on resize; scrolling only supplies position to the next paint.
let storyTop=0,storyHeight=1,viewportHeight=1,geometryDirty=true,frameId=0,lastWrittenRise='',lastWrittenDay='';
const stage=story.querySelector('.scene-sticky');
function scheduleFrame(){if(!frameId&&!document.hidden)frameId=requestAnimationFrame(frame)}
function readScroll(){scheduleFrame()}
function invalidateGeometry(){geometryDirty=true;scheduleFrame()}
addEventListener('scroll',readScroll,{passive:true});
addEventListener('resize',invalidateGeometry,{passive:true});
new ResizeObserver(invalidateGeometry).observe(story);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frameId);frameId=0}else{last=0;invalidateGeometry()}});
steps.forEach(b=>b.addEventListener('click',()=>{const start=scrollY+story.getBoundingClientRect().top;scrollTo({top:start+(story.offsetHeight-innerHeight)*(Number(b.dataset.step)+.12)/4,behavior:reduced?'instant':'smooth'})}));
let renderer,scene,camera,sun,rays,clock,last=0;
scheduleFrame();
try{
 const THREE=await import('./vendor-347e1848e209.mjs');window.ADIT_THREE=THREE;
 renderer=new THREE.WebGLRenderer({alpha:true,antialias:!mobile,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1:1.5));renderer.setClearColor(0x000000,0);document.querySelector('#scene').appendChild(renderer.domElement);document.body.classList.add('webgl-ready');
 scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(38,innerWidth/innerHeight,.1,80);camera.position.z=9;
 const light=new THREE.DirectionalLight(0xffe6c7,4);light.position.set(-3,6,6);scene.add(light,new THREE.AmbientLight(0x758eaf,2));
 const sunMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uRise:{value:0}},vertexShader:`varying vec3 vNormal;void main(){vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vNormal;uniform float uRise;void main(){float limb=pow(max(vNormal.z,0.),.38);vec3 edge=mix(vec3(1.,.22,.045),vec3(1.,.64,.24),uRise);vec3 center=mix(vec3(1.,.61,.25),vec3(1.,.89,.63),uRise);gl_FragColor=vec4(mix(edge,center,limb),1.);}`});
 sun=new THREE.Mesh(new THREE.SphereGeometry(.98,mobile?32:64,mobile?24:48),sunMaterial);scene.add(sun);
 const atmosphereMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{uRise:{value:0},uTime:{value:0}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform float uRise;uniform float uTime;void main(){vec2 p=(vUv-.5)*2.;float r=length(p);float a=atan(p.y,p.x);float halo=exp(-r*r*14.)*.19;float beam=pow(max(0.,sin(a*9.+sin(a*4.)*.7)),10.);float wide=pow(max(0.,sin(a*5.-.6)),5.);float fade=smoothstep(.08,.2,r)*(1.-smoothstep(.3,.97,r));float horizon=smoothstep(-.23,.32,p.y);float mist=.95+.05*sin(p.x*7.+p.y*5.+uTime*.06);float scattered=(beam*.052+wide*.024)*fade*horizon*(.25+.75*uRise);float alpha=(halo+scattered)*mist;gl_FragColor=vec4(mix(vec3(1.,.39,.12),vec3(1.,.72,.4),uRise),alpha);}`});
 rays=new THREE.Mesh(new THREE.PlaneGeometry(9,9),atmosphereMaterial);rays.position.z=-.12;sun.add(rays);
 const points=[];for(let i=0;i<160;i++)points.push((Math.random()-.5)*22,(Math.random()-.5)*12,-3-Math.random()*10);const stars=new THREE.BufferGeometry();stars.setAttribute('position',new THREE.Float32BufferAttribute(points,3));scene.add(new THREE.Points(stars,new THREE.PointsMaterial({color:0x9cabbc,size:.012,transparent:true,opacity:.6})));
 let renderWidth=0,renderHeight=0;function resize(){if(!renderer)return;const w=stage.clientWidth,h=stage.clientHeight;if(w===renderWidth&&h===renderHeight)return;renderWidth=w;renderHeight=h;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();invalidateGeometry()}resize();new ResizeObserver(resize).observe(stage);
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();document.body.classList.remove('webgl-ready');renderer=null});clock=new THREE.Clock();
}catch(error){console.warn('3D is unavailable; the scroll sunrise fallback remains active.',error)}
function frame(time){
 frameId=0;if(document.hidden)return;
 const y=scrollY;
 if(geometryDirty){const rect=story.getBoundingClientRect();storyTop=rect.top+y;storyHeight=story.offsetHeight;viewportHeight=stage.clientHeight||innerHeight;geometryDirty=false}
 storyVisible=y+viewportHeight>storyTop&&y<storyTop+storyHeight;
 target=Math.max(0,Math.min(1,(y-storyTop)/Math.max(1,storyHeight-viewportHeight)));
 document.body.classList.toggle('story-finished',y>=storyTop+storyHeight);
 const dt=last?Math.min((time-last)/1000,.05):1/60;last=time;
 progress=reduced?target:progress+(target-progress)*(1-Math.exp(-dt*10));
 if(Math.abs(target-progress)<.00005)progress=target;
 sunriseProgress=Math.max(sunriseProgress,progress);
 const rise=sunriseProgress.toFixed(5);if(rise!==lastWrittenRise){document.documentElement.style.setProperty('--sun-progress',rise);lastWrittenRise=rise}
 const dawn=Math.max(0,Math.min(1,(sunriseProgress-.035)/.205));const daylight=dawn*dawn*(3-2*dawn);
 const day=daylight.toFixed(5);if(day!==lastWrittenDay){document.documentElement.style.setProperty('--daylight',day);document.body.classList.toggle('daylight-theme',daylight>.4);lastWrittenDay=day}
 const index=Math.min(3,Math.floor(progress*4));if(index!==active){active=index;chapters.forEach((x,i)=>{x.classList.toggle('current',i===index);x.setAttribute('aria-hidden',String(i!==index))});brands.forEach((x,i)=>x.classList.toggle('current',i===index));insights.forEach((x,i)=>{x.classList.toggle('current',i===index);x.setAttribute('aria-hidden',String(i!==index))});steps.forEach((x,i)=>{x.classList.toggle('selected',i===index);x.setAttribute('aria-current',String(i===index))});document.querySelector('#story-counter').textContent=`0${index+1} / 04`}
 if(renderer&&!document.hidden&&storyVisible){const mobile=innerWidth<961;const t=reduced?0:clock.getElapsedTime();const first=Math.min(sunriseProgress/.24,1);const lift=first*first*(3-2*first);sun.position.set(mobile?1.25:2,-2.7+lift*(mobile?1.4:1.5),-1.4);sun.scale.setScalar((mobile?.78:1)*(1-Math.max(0,sunriseProgress-.30)*.25));sun.material.uniforms.uRise.value=lift;rays.material.uniforms.uRise.value=lift;rays.material.uniforms.uTime.value=t;renderer.render(scene,camera)}
 if(Math.abs(target-progress)>.00005)scheduleFrame();else last=0;
}
scheduleFrame();

