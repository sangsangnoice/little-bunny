export const KEY='little-bunny-v1';
export const DECOR=[
 {id:'cushion',at:8,name:'草莓软垫',note:'一个可以放心打滚的角落。',icon:'🍓'},
 {id:'garland',at:20,name:'纸星星挂串',note:'把一起度过的小事，串成星光。',icon:'✧'},
 {id:'flowers',at:38,name:'野花小瓶',note:'今天的好心情，也分给花一点。',icon:'❀'},
 {id:'picture',at:60,name:'我们的画像',note:'原来，家是有你在的地方。',icon:'♡'},
 {id:'moon',at:85,name:'月亮小夜灯',note:'晚安。明天也会有温柔的事。',icon:'☾'}
];
const clamp=n=>Math.max(0,Math.min(100,n));
export const dayKey=(now)=>{const d=new Date(now);return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;};
export function fresh(now=Date.now()) {return {version:1,stats:{hunger:72,mood:76,energy:80,affection:0},unlocked:[],hidden:[],events:[],journal:[],stars:0,care:[],actions:0,sleeping:false,lastTick:now,lastVisit:now,created:now,lastDay:'',cooldowns:{},settings:{name:'米米',theme:'auto',motion:true},visits:0};}
export function restore(raw,now=Date.now()){
 let v;try{v=JSON.parse(raw);}catch{}if(!v||v.version!==1)return fresh(now);
 const s=fresh(now);for(const k of Object.keys(s.stats))if(Number.isFinite(v.stats?.[k]))s.stats[k]=clamp(v.stats[k]);
 for(const k of ['unlocked','hidden'])s[k]=Array.isArray(v[k])?[...new Set(v[k].filter(id=>DECOR.some(d=>d.id===id)))]:[];
 s.events=Array.isArray(v.events)?v.events.filter(x=>typeof x==='string').slice(-100):[];
 s.journal=Array.isArray(v.journal)?v.journal.filter(x=>typeof x?.text==='string'&&Number.isFinite(x.time)).slice(0,40):[];
 s.stars=Number.isFinite(v.stars)?Math.max(0,Math.floor(v.stars)):0;s.actions=Number.isFinite(v.actions)?Math.max(0,v.actions):0;
 s.care=Array.isArray(v.care)?v.care.filter(x=>['feed','pet','play'].includes(x)):[];
 for(const k of ['lastTick','lastVisit','created'])if(Number.isFinite(v[k]))s[k]=Math.min(now,v[k]);
 s.sleeping=v.sleeping===true;s.lastDay=typeof v.lastDay==='string'?v.lastDay:'';s.visits=Number.isFinite(v.visits)?v.visits:0;
 for(const k of ['feed','pet','play'])if(Number.isFinite(v.cooldowns?.[k]))s.cooldowns[k]=Math.min(now,v.cooldowns[k]);
 s.settings.name=typeof v.settings?.name==='string'?v.settings.name.trim().slice(0,12)||'米米':'米米';s.settings.theme=['auto','day','night'].includes(v.settings?.theme)?v.settings.theme:'auto';s.settings.motion=v.settings?.motion!==false;
 return s;
}
export function tick(s,now=Date.now()){
 // Absence is gentle: at most 12 hours of decay, no affection loss or pet death.
 const hours=Math.min(12,Math.max(0,(now-s.lastTick)/3600000));s.lastTick=now;
 s.stats.hunger=clamp(s.stats.hunger-hours*2);s.stats.mood=clamp(s.stats.mood-hours*(s.stats.hunger<25?1.4:.65));s.stats.energy=clamp(s.stats.energy+hours*(s.sleeping?25:-1.2));
 if(s.sleeping&&s.stats.energy>=100)s.sleeping=false;
}
export function record(s,id,text,now=Date.now(),star=false){if(s.events.includes(id))return false;s.events.push(id);s.journal.unshift({text,time:now,star});s.journal=s.journal.slice(0,40);if(star)s.stars++;return true;}
export function unlock(s,now=Date.now()){const added=[];for(const d of DECOR)if(s.stats.affection>=d.at&&!s.unlocked.includes(d.id)){s.unlocked.push(d.id);added.push(d);record(s,'decor-'+d.id,`搬进房间：${d.name}。${d.note}`,now);}return added;}
export function visit(s,now=Date.now()){
 tick(s,now);s.visits++;s.lastVisit=now;const day=dayKey(now);if(s.lastDay!==day){s.lastDay=day;record(s,'day-'+day,'又一个有你陪伴的日子。窗台上留着一颗小星星。',now,true);}unlock(s,now);
}
export function night(s,now=Date.now()){const h=new Date(now).getHours();return s.settings.theme==='night'||s.settings.theme==='auto'&&(h<7||h>=19);}
export function temperament(s,now=Date.now()){if(s.sleeping)return {id:'sleep',label:'正在做一个软软的梦',line:'呼……把今天的疲倦，交给小枕头。'};if(s.stats.hunger<28)return {id:'hungry',label:'肚子在小声咕噜',line:'如果现在有一片脆脆的菜叶就好了。'};if(s.stats.energy<25)return {id:'tired',label:'眼皮有一点点重',line:'还想陪你，不过……可以先眯一会儿吗？'};if(s.stats.mood<35)return {id:'shy',label:'想要一点温柔的陪伴',line:'不用说话，坐在旁边也很好。'};if(s.stats.mood>88)return {id:'happy',label:'快乐得耳朵都翘起来了',line:'今天好像有很多值得蹦一下的小事！'};if(night(s,now))return {id:'night',label:'陪你收好今天的月光',line:'夜已经安静下来啦。你今天过得好吗？'};return {id:'calm',label:'在自己的小世界里放松',line:'你来啦。刚刚留了一小块阳光给你。'};}
export const COOLDOWN={feed:45000,pet:15000,play:35000};
export function act(s,type,now=Date.now()){
 tick(s,now);if(type==='rest'){s.sleeping=!s.sleeping;return {ok:true,pose:s.sleeping?'sleep':'wake',text:s.sleeping?'小被子盖好。你在这里，梦也会温柔一点。':'伸一个长长的懒腰……我醒啦！',added:[]};}
 if(s.sleeping)return {ok:false,text:'它正睡得香甜。让它再做一会儿梦，或先轻轻叫醒它。'};
 const wait=COOLDOWN[type]-(now-(s.cooldowns[type]??-Infinity));if(wait>0)return {ok:false,text:`刚刚的快乐还在回味，${Math.ceil(wait/1000)} 秒后再试试吧。`};
 if(type==='feed'&&s.stats.hunger>94)return {ok:false,text:'小肚子已经圆圆的啦，下一片菜叶留到饿的时候。'};
 if(type==='play'&&(s.stats.energy<18||s.stats.hunger<15))return {ok:false,text:s.stats.energy<18?'玩耍要留一点力气，先让它休息一下吧。':'先吃一点东西，再一起玩，好吗？'};
 const changes={feed:[19,4,2,2],pet:[0,10,1,3],play:[-7,16,-13,4]}[type];if(!changes)return {ok:false,text:''};
 Object.keys(s.stats).forEach((k,i)=>s.stats[k]=clamp(s.stats[k]+changes[i]));s.cooldowns[type]=now;s.actions++;s.care=[...new Set([...s.care,type])];
 const lines={feed:['咔嚓、咔嚓……这一口，是幸福的味道。','两只小爪抱住菜叶，认真得像在做大事。','吃完还舔了舔嘴巴，偷偷向你靠近一点。'],pet:['耳朵慢慢放松，把脑袋往你的手心蹭了蹭。','嗯……就是这里。小兔子舒服得眯起了眼。','摸摸头以后，世界好像变得更柔软了。'],play:['追着小球绕了一圈，又把它推回你的脚边。','扑通！没接住球，倒是接住了一整份快乐。','小尾巴一抖：再陪我坐一会儿嘛。']};
 let text=lines[type][s.actions%3];if(s.care.length===3&&record(s,'care-circle','吃得饱饱、被温柔摸摸、一起玩耍。我们的第一个完整小日子。',now,true))text+=' 你们一起收集到一颗陪伴星星！';
 if(s.actions>=5)record(s,'plant','今天发现：窗边的植物长出了新叶。我们也在慢慢长大。',now,true);
 let pose=type;if(s.stats.mood>=90&&s.actions%4===0){pose='binky';text+=' 开心藏不住了，送你一个兔兔旋转跳！';record(s,'binky','第一次看见它开心到蹦起来，像一朵小小的云。',now,true);}
 return {ok:true,text,pose,added:unlock(s,now)};
}
