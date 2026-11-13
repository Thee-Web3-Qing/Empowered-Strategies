/* EmpowerED editorial site rebuild.
 * The original site.js continues to own copy, routing, contact validation and navigation.
 * This module changes the page composition rather than recolouring its components.
 */
(function(){
'use strict';
var A='/assets/';
var PH={
 hero:'/assets/home-impact-portrait.webp',
 campus:'/assets/home-hero-campus.webp',
 learning:'/assets/home-approach-classroom.webp',
 team:'/assets/about-hero-team.webp',
 graduate:'/assets/home-purpose-student.webp',
 strategy:'/assets/home-purpose-educator.webp',
 research:'/assets/research-editorial.webp',
 institute:'/assets/home-solutions-building.webp',
 workshop:'/assets/home-academy-learning.webp',
 students:'/assets/home-purpose-student.webp',
 leadership:'/assets/solutions-leadership.webp',
 analysis:'/assets/home-purpose-researcher.webp'
};
var ALTS={
 hero:'African education leader in a burgundy-lit editorial portrait',
 campus:'Two students climbing the steps of a contemporary African university campus',
 learning:'African secondary school student listening attentively in a classroom',
 team:'African education leaders working together in a strategy meeting',
 graduate:'African secondary school student in a burgundy school uniform',
 strategy:'African education professional in a studio portrait',
 research:'Education researcher reviewing evidence and evaluation documents',
 institute:'Modern educational institution photographed under red architectural lighting',
 workshop:'Young African learner taking notes beside a laptop',
 students:'African secondary school student focused on a lesson',
 leadership:'African education leader speaking at a professional meeting',
 analysis:'Education professional reading and analysing research'
};
function img(key,css,fallback){return '<img class="'+(css||'')+'" src="'+PH[key]+'" alt="'+ALTS[key]+'" decoding="async" loading="'+(key==='hero'?'eager':'lazy')+'" data-fallback="'+A+(fallback||'education-profile.svg')+'">';}
function small(t){return '<span class="z-kicker">'+t+'</span>';}
function arrow(){return '<svg class="ed-icon-arrow" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19 19 5M8 5h11v11"/></svg>';}
function cta(href,text,style){return '<a class="z-btn '+(style||'')+'" href="'+href+'">'+text+' '+arrow()+'</a>';}
function media(key,css,fallback){return '<div class="z-media '+(css||'')+'">'+img(key,'',fallback)+'</div>';}
function servicesFrom(main){
 return Array.from(main.querySelectorAll('.service-item')).map(function(e,i){
  return {n:String(i+1).padStart(2,'0'),name:e.querySelector('h3')?.textContent||'',description:e.querySelector('p')?.textContent||'',url:e.getAttribute('href')||'/what-we-do'};
 });
}
function programmesFrom(main){
 return Array.from(main.querySelectorAll('.programme-entry')).map(function(e,i){
  return {n:String(i+1).padStart(2,'0'),name:e.querySelector('h3')?.textContent||'',description:e.querySelector('p')?.textContent||''};
 });
}
function serviceLedger(rows){
 return rows.map(function(s,i){
  return '<a class="z-ledger-row" href="'+s.url+'"><span class="z-index">['+s.n+']</span><h3>'+s.name+'</h3><p>'+s.description+'</p><span class="z-row-arrow" aria-hidden="true">↗</span></a>';
 }).join('');
}
function home(main){
 var services=servicesFrom(main);
 var rows=services.map(function(s,i){
  return '<a href="'+s.url+'" class="hf-service-row" aria-label="'+s.name+': '+s.description+'"><span class="hf-num">['+String(i+1).padStart(2,'0')+']</span><span class="hf-service-name">'+s.name+'</span><span class="hf-arrow" aria-hidden="true">↗</span></a>';
 }).join('');
 main.innerHTML=[
 '<section class="hf-hero" aria-labelledby="home-heading">',
 '<img class="hf-hero-art" src="/assets/home-hero-editorial.png" alt="Cinematic editorial portrait of an African woman in burgundy, positioned in front of oversized EDUCATION lettering" fetchpriority="high" decoding="async">',
 '<div class="hf-hero-vignette"></div>',
 '<div class="hf-hero-inner"><div class="hf-hero-copy">',
 '<span class="hf-kicker">EDUCATION STRATEGY / RESEARCH / LEADERSHIP / TRANSFORMATION</span>',
 '<h1 id="home-heading">The future of <em>learning</em> starts <strong>here.</strong></h1>',
 '<p>We help governments, institutions and education leaders navigate change, strengthen capacity and build learning environments ready for the future.</p>',
 '<div class="hf-actions">'+cta('/contact','Request a Strategic Consultation','hf-primary')+cta('/learning-academy','Explore Our Programmes','hf-secondary')+'</div>',
 '</div><aside class="hf-hero-side" aria-label="Our education priorities"><div class="hf-side-intro">',
 '<div class="hf-campus-photo">'+img('campus','','solution-systems.svg')+'</div>',
 '<p>Evidence-led strategy, institutional capacity and meaningful transformation in education.</p></div>',
 '<div class="hf-two-priorities"><div><span>01</span><p>Stronger<br>institutions.</p></div><div><span>02</span><p>Better learning<br>outcomes.</p></div></div>',
 '</aside></div><div class="hf-hero-footer"><span>EMPOWERED STRATEGIES / RESHAPING EDUCATION’S FUTURE</span><span>ADVISE. EQUIP. TRANSFORM.</span></div>',
 '</section>',
 '<section class="hf-services" aria-labelledby="hf-services-heading">',
 '<div class="hf-service-intro"><span class="hf-kicker">01 / WHAT WE DO</span><h2 id="hf-services-heading">ADVISE.<br>EQUIP.<br>TRANSFORM.</h2>',
 '<p><span class="hf-red-star" aria-hidden="true">✳</span>A strategic partner for education systems, institutions and the people who lead them.</p></div>',
 '<div class="hf-service-list">'+rows+'</div></section>',
 '<section class="hf-approach" aria-labelledby="hf-approach-heading">',
 '<div class="hf-approach-photo">'+img('learning','','academy-workshop.svg')+'</div>',
 '<div class="hf-approach-content"><span class="hf-kicker">02 / OUR APPROACH</span>',
 '<h2 id="hf-approach-heading">EVIDENCE INTO<br><strong>ACTION.</strong></h2>',
 '<p>We connect research, strategic thinking, leadership development and practical implementation to help education institutions deliver meaningful and sustainable change.</p>',
 cta('/about-us','Learn About Our Approach','hf-primary'),'</div>',
 '<div class="hf-approach-steps" aria-label="Our approach"><span>RESEARCH</span><span>INSIGHT</span><span>CAPACITY</span><span>IMPLEMENTATION</span><span>IMPACT</span></div>',
 '</section>',
 '<section class="hf-solutions" aria-labelledby="hf-solutions-heading">',
 '<div class="hf-solutions-intro"><span class="hf-kicker">03 / OUR SOLUTIONS</span>',
 '<h2 id="hf-solutions-heading">Targeted solutions for <em>real education challenges.</em></h2>',
 '<p>Practical programmes and institutional solutions shaped around the context, priorities and needs of each institution.</p>',
 '<a class="hf-inline-arrow" href="/solutions" aria-label="Explore all solutions">↗</a></div>',
 '<a href="/solutions/ai-ready-education-institution" class="hf-solution-card">',
 img('institute','','solution-systems.svg'),
 '<div class="hf-card-copy"><span>INSTITUTIONAL SOLUTIONS / 01</span><h3>Solutions for<br>Institutions.</h3>',
 '<p>From institutional diagnostics to responsible AI adoption and transformation.</p><span class="hf-circle">↗</span></div></a>',
 '<a href="/learning-academy" class="hf-solution-card">',
 img('workshop','','academy-workshop.svg'),
 '<div class="hf-card-copy"><span>PROFESSIONAL LEARNING / 02</span><h3>Learning<br>Academy.</h3>',
 '<p>Professional development for educators, leaders and education professionals.</p><span class="hf-circle">↗</span></div></a>',
 '</section>',
 '<section class="hf-impact" aria-labelledby="hf-impact-heading">',
 '<div class="hf-impact-portrait">'+img('hero','','education-profile.svg')+'</div>',
 '<div class="hf-impact-main"><span class="hf-kicker">04 / OUR IMPACT</span>',
 '<h2 id="hf-impact-heading">Stronger Institutions.<br>Greater Opportunities.<br><em>A Better Future.</em></h2>',
 '<p>We work with education stakeholders to strengthen systems, build leadership capacity and improve learning outcomes through informed, practical action.</p>',
 '<a href="/our-impact" class="hf-inline-arrow hf-light-arrow" aria-label="Explore our approach to impact">↗</a></div>',
 '<div class="hf-impact-notes"><p>Institutions equipped for a changing world.</p><p>Educators and leaders empowered.</p><p>Practical solutions and measurable progress.</p></div>',
 '</section>'
 ].join('');
}
function bespokeHero(main,page){
 var old=main.querySelector('.page-hero');if(!old)return;
 var headline=old.querySelector('h1')?.innerHTML||'';
 var description=old.querySelector('.lead')?.innerHTML||'';
 var kicker=old.querySelector('.mini')?.textContent?.trim()||'EMPOWERED STRATEGIES';
 var issue={about:'02',services:'03',solutions:'04',academy:'05',research:'06',impact:'07',partnerships:'08',contact:'09',product:'P'}[page]||'01';
 var image='';
 if(page==='about'){image='<div class="z-page-photo z-about-photo">'+img('team','','partnerships-people.svg')+'</div>';}
 if(page==='partnerships'){image='<div class="z-page-photo z-partners-photo">'+img('team','','partnerships-people.svg')+'</div>';}
 if(page==='academy'){image='<div class="z-page-photo z-academy-photo">'+img('learning','','academy-workshop.svg')+'</div>';}
 if(page==='impact'){image='<div class="z-page-photo z-impact-photo">'+img('graduate','','education-profile.svg')+'</div>';}
 if(page==='product'){image='<div class="z-page-photo z-product-photo">'+img('institute','','solution-systems.svg')+'</div>';}
 old.outerHTML='<section class="z-page-cover z-page-'+page+'">'+
 '<div class="z-page-ghost" aria-hidden="true">'+({about:'ABOUT',services:'EXPERTISE',solutions:'SOLUTIONS',academy:'LEARNING',research:'INSIGHTS',impact:'IMPACT',partnerships:'TOGETHER',contact:'HELLO',product:'SOLUTIONS'}[page]||'EDUCATION')+'</div>'+image+
 '<div class="z-page-cover-inner"><a class="z-breadcrumb" href="/">HOME</a><span class="z-breadcrumb-sep">/</span><span class="z-breadcrumb">'+kicker+'</span>'+
 '<div class="z-page-issue">EMPOWERED STRATEGIES / EDITION '+issue+'</div><h1>'+headline+'</h1><p>'+description+'</p>'+
 '<div class="z-page-bottom"><span>ADVISE / EQUIP / TRANSFORM</span><span>INSTITUTIONAL TRANSFORMATION THROUGH EVIDENCE</span></div></div></section>';
}
function redesignServices(main){
 var areas=[
  ['Education Strategy & Policy','/what-we-do#service-1','layers','Policy design, strategic planning and education systems advisory.'],
  ['Institutional Transformation','/what-we-do#service-2','school','Diagnostics, governance and institutional improvement.'],
  ['Leadership Development','/what-we-do#service-3','people','Leadership and board advisory for stronger institutions.'],
  ['Professional Learning','/what-we-do#service-4','book','Educator development, professional learning and capacity building.'],
  ['Research & Evidence','/what-we-do#service-5','chart','Research, evaluation, monitoring and evidence use.'],
  ['Digital Learning & Innovation','/what-we-do#service-6','laptop','Responsible AI, digital education and future-ready learning.']
 ];
 function pict(kind){
  var paths={
   layers:'<path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5"/>',
   school:'<path d="M2 10 12 3l10 7-10 7L2 10Zm4 4v5c4 3 8 3 12 0v-5M22 10v7"/>',
   people:'<circle cx="8" cy="8" r="4"/><circle cx="18" cy="9" r="3"/><path d="M1 22v-2c0-5 3-7 7-7s7 2 7 7v2M16 14c4 0 7 2 7 6v2"/>',
   book:'<path d="M12 6C9 3 5 3 2 4v16c4-1 8-1 10 2 2-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v16"/>',
   chart:'<path d="M2 22h20M4 14h4v8H4zM10 9h4v13h-4zM16 3h4v19h-4z"/>',
   laptop:'<rect x="4" y="3" width="16" height="13" rx="1"/><path d="m1 21 3-5h16l3 5H1Z"/>',
   target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m12 12 9-10"/>',
   sliders:'<path d="M3 5h18M3 12h18M3 19h18"/><circle cx="9" cy="5" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="7" cy="19" r="2"/>'
  };
  return '<svg viewBox="0 0 24 24" width="37" height="37" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[kind]||paths.layers)+'</svg>';
 }
 var cards=areas.map(function(a,i){return '<a id="service-'+(i+1)+'" class="ww-service" href="'+a[1]+'" aria-label="'+a[0]+': '+a[3]+'"><span class="ww-service-icon">'+pict(a[2])+'</span><span class="ww-service-name">'+a[0]+'</span><span class="ww-service-arrow">↗</span></a>';}).join('');
 main.innerHTML=[
 '<section class="ww-intro"><div class="ww-intro-copy"><span class="ww-kicker">OUR WORK IN FOCUS</span><div class="ww-intro-row"><h1>We turn<br>strategy into<br><em>measurable<br>change.</em></h1><p>A suite of services that strengthen education from policy to practice.</p></div></div><div class="ww-intro-photo">'+img('learning','','academy-workshop.svg')+'</div></section>',
 '<section class="ww-services" aria-label="Six areas of expertise">'+cards+'</section>',
 '<section class="ww-statement"><div><span class="ww-kicker">WHAT WE DO</span><h2>Practical solutions<br>for stronger<br><em>education systems.</em></h2></div><p>We work with governments, institutions and education leaders to design, implement and strengthen the systems, people and programmes that drive better learning and lasting impact.</p></section>',
 '<section class="ww-approach"><div class="ww-approach-photo">'+img('leadership','','solution-leadership.svg')+'</div><div class="ww-approach-copy"><span class="ww-kicker">OUR APPROACH</span><h2>How We Create<br><em>Impact.</em></h2><div class="ww-principles"><div>'+pict('target')+'<p>Evidence-led<br>and practical.</p></div><div>'+pict('layers')+'<p>Context-driven<br>and sustainable.</p></div><div>'+pict('people')+'<p>People and<br>systems focused.</p></div></div></div></section>',
 '<section class="ww-reach"><div class="ww-reach-heading"><span class="ww-kicker">OUR REACH</span><h2>Across the<br>education<br><em>journey.</em></h2></div><div class="ww-reach-steps"><div>'+pict('school')+'<span>Policy &<br>Planning</span></div><b>→</b><div>'+pict('people')+'<span>Institutional<br>Strengthening</span></div><b>→</b><div>'+pict('school')+'<span>People &<br>Capability</span></div><b>→</b><div>'+pict('sliders')+'<span>Implementation<br>& Scale</span></div></div></section>',
 '<section class="ww-bottom"><h2>Let’s build stronger<br>education <em>together.</em></h2><a class="ww-bottom-cta" href="/contact">Request a Consultation <span>↗</span></a><img src="/assets/home-solutions-building.webp" alt="Contemporary African institutional architecture" loading="lazy"></section>'
 ].join('');
}
function redesignSolutions(main){
 var sec=main.querySelector('.showcase')?.closest('section');if(!sec)return;
 var articles=Array.from(sec.querySelectorAll('.showcase article'));
 var keys=['institute','strategy','team','research','learning','workshop'];
 var falls=['solution-ai.svg','solution-systems.svg','solution-leadership.svg','solution-research.svg','solution-educators.svg','solution-partnership.svg'];
 var blocks=articles.map(function(e,i){
  var title=e.querySelector('h3')?.textContent||'';
  var ps=Array.from(e.querySelectorAll('p'));
  var desc=ps[ps.length-1]?.textContent||'';
  var href=e.querySelector('a')?.getAttribute('href')||'/contact';
  return '<a class="z-solution-entry z-solution-entry-'+(i+1)+'" href="'+href+'">'+img(keys[i]||'team','',falls[i]||'solution-ai.svg')+
  '<div class="z-solution-overlay"><span class="z-index">0'+(i+1)+' / SOLUTION</span><h3>'+title+'</h3><p>'+desc+'</p><span class="z-circle-arrow">↗</span></div></a>';
 }).join('');
 sec.outerHTML='<section class="z-solution-catalogue"><div class="z-catalogue-heading">'+small('INSTITUTIONAL OFFERINGS')+
 '<h2>Structure meets <em>possibility.</em></h2><p>Choose an area to explore how we can help strengthen your institution.</p></div><div class="z-solution-grid">'+blocks+'</div></section>';
}
function redesignAcademy(main){
 var top=main.querySelector('.feature-split');
 if(top){
  top.closest('section').outerHTML='<section class="z-academy-story"><div class="z-academy-story-image">'+img('learning','','academy-workshop.svg')+
   '<span>PEOPLE / SKILLS / PRACTICE</span></div><div class="z-academy-story-text">'+small('PROFESSIONAL DEVELOPMENT / OUR PHILOSOPHY')+
   '<h2>Learning must become <em>practice.</em></h2><p>Professional development goes beyond attending workshops or completing modules. Our programmes emphasise real-world application, reflection, evidence-informed content, interactive learning and continuous improvement.</p>'+
   cta('/contact?subject=Academy%20Application','Enquire about a Programme','z-btn-dark')+'</div></section>';
 }
 var list=main.querySelector('.academy-list');
 if(list){
  list.classList.add('z-academy-directory');
  list.closest('section')?.classList.add('z-academy-section');
  var details=Array.from(list.querySelectorAll('details'));
  details.forEach(function(d,i){d.dataset.course=String(i+1).padStart(2,'0');});
 }
}
function redesignResearch(main){
 var topics=main.querySelector('.topic-grid');
 if(topics){
  topics.classList.add('z-research-topics');
  topics.closest('section')?.classList.add('z-research-section');
 }
 var publications=main.querySelector('.showcase');
 if(publications){
  publications.classList.add('z-publications');
  publications.closest('section')?.classList.add('z-publication-section');
 }
 var extra=main.querySelector('.research-letter');
 if(extra)extra.closest('section')?.classList.add('z-research-forum');
}
function redesignAbout(main){
 main.innerHTML=[
 '<section class="ab-hero" aria-labelledby="ab-hero-title"><div class="ab-hero-inner">',
 '<div class="ab-hero-copy"><span class="ab-eyebrow">ABOUT US</span><h1 id="ab-hero-title">Education<br>systems that<br><em>work for Africa.</em></h1>',
 '<p>EmpowerED Strategies is an education strategy, research and implementation partner working with institutions, governments and education leaders across Africa.</p>',
 '<div class="ab-actions"><a href="#our-story">Our Approach <span class="ab-arrow">↗</span></a><a href="/what-we-do">Our Work <span class="ab-arrow">↗</span></a></div></div>',
 '<div class="ab-collage" aria-label="Education and institutional leadership"><div class="ab-red-ring" aria-hidden="true"></div>',
 '<div class="ab-frame ab-frame-main">'+img('learning','','education-profile.svg')+'</div>',
 '<div class="ab-frame ab-frame-building"><img src="/assets/home-solutions-building.webp" alt="Modern institutional building in dramatic red light" loading="eager"></div>',
 '<div class="ab-frame ab-frame-leader"><img src="/assets/solutions-leadership.webp" alt="African education leader speaking at a professional discussion" loading="eager"></div>',
 '</div></div></section>',
 '<section class="ab-foundation" aria-label="Our mission, vision and values">',
 '<div><span class="ab-foundation-icon">◎</span><div><h2>OUR MISSION</h2><p>To strengthen education systems through evidence, strategy and practical implementation.</p></div></div>',
 '<div><span class="ab-foundation-icon">◉</span><div><h2>OUR VISION</h2><p>An Africa where people, institutions and systems enable quality learning and equitable opportunities for all.</p></div></div>',
 '<div><span class="ab-foundation-icon">◇</span><div><h2>OUR VALUES</h2><p>Evidence-led <span>•</span> Collaborative<br>Contextual <span>•</span> Practical <span>•</span> Lasting Impact</p></div></div>',
 '</section>',
 '<section class="ab-story" id="our-story"><div class="ab-story-photo"><img src="/assets/home-hero-campus.webp" alt="Students walking into a contemporary African university" loading="lazy"></div>',
 '<div class="ab-story-copy"><span class="ab-eyebrow">OUR STORY</span><h2>From insight to<br>real, <em>sustained change.</em></h2>',
 '<p>We were founded on a simple belief: that education can be a powerful lever for people, institutions and societies to thrive.</p>',
 '<p>Today, we work at the intersection of strategy, research and implementation to turn that belief into measurable results across Africa.</p></div></section>',
 '<section class="ab-difference"><span class="ab-eyebrow">WHAT SETS US APART</span>',
 '<div class="ab-difference-grid"><article><span class="ab-difference-icon">▥</span><h3>Evidence-Led</h3><p>We ground our work in research, data and real-world insight.</p></article>',
 '<article><span class="ab-difference-icon">◇</span><h3>Practical &amp; Contextual</h3><p>Solutions designed for Africa’s diverse education realities.</p></article>',
 '<article><span class="ab-difference-icon">♧</span><h3>People-Centred</h3><p>We work with and for educators, learners and communities.</p></article></div></section>',
 '<section class="ab-final"><h2>Let’s strengthen<br>education <em>together.</em></h2><a href="/contact">Request a Consultation <span class="ab-arrow">↗</span></a>',
 '<img src="/assets/home-solutions-building.webp" alt="" loading="lazy"></section>'
 ].join('');
}
function redesignImpact(main){
 var x=main.querySelector('.impact-list');
 if(x)x.closest('section')?.classList.add('z-impact-section');
}
function redesignPartners(main){
 var t=main.querySelector('.topic-grid');
 if(t)t.closest('section')?.classList.add('z-partnership-section');
}
function redesignContact(main){
 var form=main.querySelector('.contact-layout');
 if(form)form.closest('section')?.classList.add('z-contact-section');
}
function cleanArrows(){
 var arrowSVG='<svg class="ed-icon-arrow" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19 19 5M8 5h11v11"/></svg>';
 var selectors='.hf-arrow,.hf-circle,.hf-inline-arrow,.ww-service-arrow,.ww-bottom-cta span,.ab-arrow,.z-row-arrow,.header-cta .arrow,.btn .arrow,.text-link .arrow';
 document.querySelectorAll(selectors).forEach(function(el){if(el.dataset.edIcon)return;if(el.textContent.trim()==='↗'||el.textContent.trim()==='→'){el.innerHTML=arrowSVG;el.dataset.edIcon='true';}});
}
function fixImages(main){
 Array.from(main.querySelectorAll('img')).forEach(function(im){
  if(im.dataset.fallback){
   im.addEventListener('error',function(){if(im.getAttribute('src')!==im.dataset.fallback){im.src=im.dataset.fallback;}else{im.style.opacity='0';}},{passive:true});
  }
 });
}
function enhance(){
 var main=document.querySelector('#app #main');if(!main||main.dataset.journal==='3')return;
 var page=document.body.dataset.page||'other';
 main.dataset.journal='3';
 if(page==='home'){home(main);}
 else{
  bespokeHero(main,page);
  if(page==='services')redesignServices(main);
  if(page==='solutions')redesignSolutions(main);
  if(page==='academy')redesignAcademy(main);
  if(page==='research')redesignResearch(main);
  if(page==='about')redesignAbout(main);
  if(page==='impact')redesignImpact(main);
  if(page==='partnerships')redesignPartners(main);
  if(page==='contact')redesignContact(main);
 }
 fixImages(main);
 cleanArrows();
 document.body.classList.add('journal-ready');
}
var root=document.getElementById('app');
if(root){
 var observer=new MutationObserver(function(){enhance();});
 observer.observe(root,{childList:true});
 enhance();
}
})();
