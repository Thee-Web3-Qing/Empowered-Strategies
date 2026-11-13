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
 '<p>Education systems are at a defining moment. We help governments, institutions and education leaders navigate change, strengthen institutional capacity and build learning environments ready for the future.</p>',
 '<div class="hf-actions">'+cta('/contact','Request a Strategic Consultation','hf-primary')+cta('/what-we-do','Explore What We Do','hf-secondary')+'</div>',
 '</div><aside class="hf-hero-side" aria-label="Our education priorities"><div class="hf-side-intro">',
 '<div class="hf-campus-photo">'+img('campus','','solution-systems.svg')+'</div>',
 '<p>Evidence-led strategy, institutional capacity and meaningful transformation in education.</p></div>',
 '<div class="hf-two-priorities"><div><span>01</span><p>Stronger<br>institutions.</p></div><div><span>02</span><p>Better learning<br>outcomes.</p></div></div>',
 '</aside></div><div class="hf-hero-footer"><span>EMPOWERED STRATEGIES / RESHAPING EDUCATION’S FUTURE</span><span>ADVISE. EQUIP. TRANSFORM.</span></div>',
 '</section>',
 '<section class="hf-services" aria-labelledby="hf-services-heading">',
 '<div class="hf-service-intro"><span class="hf-kicker">01 / WHAT WE DO</span><h2 id="hf-services-heading">ADVISE.<br>EQUIP.<br>TRANSFORM.</h2>',
 '<p><span class="hf-red-star" aria-hidden="true"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 0v36M0 18h36M5.3 5.3l25.4 25.4M30.7 5.3 5.3 30.7"/></svg></span>A strategic partner for education systems, institutions and the people who lead them.</p></div>',
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
 if(page==='partnerships'){image='<div class="z-page-photo z-partners-photo"><img src="/assets/partnerships-hero.webp" alt="African leaders collaborating on education initiatives" loading="eager"></div>';}
 if(page==='research'){image='<div class="z-page-photo z-research-photo">'+img('research','','education-profile.svg')+'</div>';}
 if(page==='contact'){image='<div class="z-page-photo z-contact-photo">'+img('team','','partnerships-people.svg')+'</div>';}
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
 var areas=[["Education Strategy & Systems Transformation","layers","We support governments and education institutions in designing strategies, strengthening education systems and implementing meaningful reform.",["Education policy and strategy development","Institutional strategic planning","Education systems transformation","Curriculum and learning systems advisory","Education sector assessments","Education reform programme design","Digital education strategy"]],["Research, MEL & Evidence Use","chart","We generate and translate evidence to support better education decisions, stronger programmes and measurable impact.",["Education research and policy analysis","Monitoring, Evaluation and Learning","Baseline and endline assessments","Programme and impact evaluations","Learning outcome measurement","Research dissemination","Evidence-to-policy advisory"]],["Training & Capacity Building","book","We develop the knowledge, professional skills and institutional capabilities needed to improve education delivery.",["AI literacy for educators","Teacher professional development","Education leadership programmes","Digital pedagogy","Instructional leadership","Research and evidence literacy","Training of Trainers"]],["Leadership & Board Advisory","people","We strengthen education governance and equip institutional leaders to navigate complexity, lead change and build high-performing institutions.",["School board advisory","University governance","Executive leadership development","Institutional performance reviews","Leadership coaching","Organisational change management","Governance and accountability frameworks"]],["Partnership Brokering & Mediation","school","We connect stakeholders, facilitate collaboration and support partnerships that advance education outcomes.",["Institutional partnership development","Stakeholder engagement","Strategic collaboration","Education programme partnerships","Multi-institutional coordination","Partnership facilitation and mediation"]],["AI Literacy & Future of Learning","laptop","We help education institutions and professionals understand, adopt and responsibly integrate artificial intelligence into education.",["Institutional AI readiness assessments","AI literacy for educators","AI adoption strategies","Responsible AI policies","AI-enabled teaching and learning","Education technology integration","Future skills development"]]];
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
 var cards=areas.map(function(a,i){return '<a class="ww-service" href="#service-'+(i+1)+'"><span class="ww-service-icon">'+pict(a[1])+'</span><span class="ww-service-name">'+a[0]+'</span><span class="ww-service-arrow">'+arrow()+'</span></a>';}).join('');
 var detail=areas.map(function(a,i){return '<details id="service-'+(i+1)+'" class="ww-detailed-service"><summary><span>0'+(i+1)+'</span><strong>'+a[0]+'</strong><span>+</span></summary><div><p>'+a[2]+'</p><ul>'+a[3].map(function(t){return '<li>'+t+'</li>';}).join('')+'</ul><a href="/contact?subject='+encodeURIComponent(a[0])+'">Discuss this service '+arrow()+'</a></div></details>';}).join('');
 main.innerHTML=[
 '<section class="ww-intro"><div class="ww-intro-copy"><span class="ww-kicker">OUR WORK IN FOCUS</span><div class="ww-intro-row"><h1>We turn<br>strategy into<br><em>measurable<br>change.</em></h1><p>A suite of services that strengthen education from policy to practice.</p></div></div><div class="ww-intro-photo">'+img('learning','','academy-workshop.svg')+'</div></section>',
 '<section class="ww-services" aria-label="Six areas of expertise">'+cards+'</section>',
 '<section class="ww-statement"><div><span class="ww-kicker">WHAT WE DO</span><h2>Practical solutions<br>for stronger<br><em>education systems.</em></h2></div><p>We work with governments, institutions and education leaders to design, implement and strengthen the systems, people and programmes that drive better learning and lasting impact.</p></section>',
 '<section class="ww-approach"><div class="ww-approach-photo">'+img('leadership','','solution-leadership.svg')+'</div><div class="ww-approach-copy"><span class="ww-kicker">OUR APPROACH</span><h2>How We Create<br><em>Impact.</em></h2><div class="ww-principles"><div>'+pict('target')+'<p>Evidence-led<br>and practical.</p></div><div>'+pict('layers')+'<p>Context-driven<br>and sustainable.</p></div><div>'+pict('people')+'<p>People and<br>systems focused.</p></div></div></div></section>',
 '<section class="ww-reach"><div class="ww-reach-heading"><span class="ww-kicker">OUR REACH</span><h2>Across the<br>education<br><em>journey.</em></h2></div><div class="ww-reach-steps"><div>'+pict('school')+'<span>Policy &<br>Planning</span></div><b>→</b><div>'+pict('people')+'<span>Institutional<br>Strengthening</span></div><b>→</b><div>'+pict('school')+'<span>People &<br>Capability</span></div><b>→</b><div>'+pict('sliders')+'<span>Implementation<br>& Scale</span></div></div></section>',
 '<section class="ww-details"><span class="ww-kicker">SIX AREAS OF EXPERTISE</span><h2>Explore our services.</h2><div class="ww-details-grid">'+detail+'</div></section>',
 '<section class="ww-bottom"><h2>Let’s build stronger<br>education <em>together.</em></h2><a class="ww-bottom-cta" href="/contact">Request a Consultation <span>↗</span></a><img src="/assets/home-solutions-building.webp" alt="Contemporary African institutional architecture" loading="lazy"></section>'
 ].join('');
}
function redesignSolutions(main){
 var iconPaths={
  layers:'<path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5"/>',
  school:'<path d="m2 10 10-7 10 7-10 7-10-7Zm4 4v5c4 3 8 3 12 0v-5M22 10v7"/>',
  people:'<circle cx="8" cy="8" r="4"/><circle cx="18" cy="9" r="3"/><path d="M1 22v-2c0-5 3-7 7-7s7 2 7 7v2M16 14c4 0 7 2 7 6v2"/>',
  book:'<path d="M12 6C9 3 5 3 2 4v16c4-1 8-1 10 2 2-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v16"/>',
  chart:'<path d="M2 22h20M4 14h4v8H4zM10 9h4v13h-4zM16 3h4v19h-4z"/>',
  laptop:'<rect x="4" y="3" width="16" height="13" rx="1"/><path d="m1 21 3-5h16l3 5H1Z"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M10 2h4l.6 2.5 2.2.9 2.2-1.3 2.8 2.8-1.3 2.2.9 2.2L24 12l-2.6.7-.9 2.2 1.3 2.2-2.8 2.8-2.2-1.3-2.2.9L14 22h-4l-.6-2.5-2.2-.9-2.2 1.3-2.8-2.8 1.3-2.2-.9-2.2L0 12l2.6-.7.9-2.2-1.3-2.2L5 4.1l2.2 1.3 2.2-.9L10 2Z"/>'
 };
 function svg(name){return '<svg aria-hidden="true" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">'+(iconPaths[name]||iconPaths.layers)+'</svg>';}
 var offerings=[{"title":"The AI-Ready<br>Education Institution","description":"A complete pathway to responsible AI adoption, institutional readiness, governance and educator training.","photo":"strategy","icon":"laptop","link":"/solutions/ai-ready-education-institution"},{"title":"Education Institutional<br>Transformation","description":"Institutional diagnostics, transformation roadmaps, leadership alignment and implementation support.","photo":"institute","icon":"school","link":"/solutions/institutional-transformation"},{"title":"Education Leadership<br>Excellence","description":"Developing leaders who can shape the future of education and strengthen governance.","photo":"leadership","icon":"people","link":"/solutions/education-leadership"},{"title":"Research &amp;<br>Impact Measurement","description":"Research design, monitoring, evaluation, learning and practical evidence for better decisions.","photo":"analysis","icon":"chart","link":"/solutions/research-mel"},{"title":"Educator Professional<br>Development","description":"Structured learning in AI literacy, digital pedagogy, assessment and professional effectiveness.","photo":"workshop","icon":"book","link":"/learning-academy"},{"title":"Education Partnership<br>Development","description":"Partnership mapping, stakeholder engagement and collaboration frameworks.","photo":"team","icon":"layers","link":"/partnerships"}];
 var cards=offerings.map(function(c,i){
  return '<a class="sol-card" href="'+c.link+'" aria-label="'+c.title.replace(/<[^>]*>/g,'')+'"><div class="sol-card-image">'+img(c.photo,'','solution-systems.svg')+'</div><div class="sol-card-shade"></div><div class="sol-card-content"><span class="sol-card-icon">'+svg(c.icon)+'</span><h3>'+c.title+'</h3><p>'+c.description+'</p></div><span class="sol-card-arrow">'+arrow()+'</span></a>';
 }).join('');
 var process=[
  {label:'Discover',description:'Understand needs and opportunities.',icon:'compass'},
  {label:'Design',description:'Develop practical, contextual solutions.',icon:'layers'},
  {label:'Implement',description:'Work with partners to bring solutions to life.',icon:'settings'},
  {label:'Measure',description:'Track progress and drive lasting impact.',icon:'chart'}
 ].map(function(p,i){return (i?'<span class="sol-process-connector" aria-hidden="true">'+arrow()+'</span>':'')+'<div class="sol-process-step">'+svg(p.icon)+'<h3>'+p.label+'</h3><p>'+p.description+'</p></div>';}).join('');
 main.innerHTML=[
 '<section class="sol-hero"><div class="sol-hero-copy"><span class="sol-kicker">SOLUTIONS</span><h1>Practical solutions<br>for stronger<br><em>education systems.</em></h1>',
 '<p>We design and implement evidence-based solutions that strengthen learning, build institutional capacity and create lasting change across Africa.</p>',
 '<div class="sol-hero-actions"><a href="/contact" class="sol-button sol-button-light">Request a Consultation '+arrow()+'</a><a href="/what-we-do" class="sol-button sol-button-outline">Explore Our Work '+arrow()+'</a></div></div>',
 '<div class="sol-hero-photo"><div class="sol-red-orbit"></div>'+img('learning','','education-profile.svg')+'</div></section>',
 '<section class="sol-offerings"><div class="sol-intro"><div><span class="sol-kicker">OUR SOLUTIONS</span><h2>What<br>We <em>Offer.</em></h2></div><p>We turn complex education challenges into structured programmes, institutional solutions and practical pathways for change. Our solutions help education organisations assess their current position, strengthen capabilities and achieve clearly defined objectives.</p></div>',
 '<div class="sol-grid">'+cards+'</div></section>',
 '<section class="sol-process"><div class="sol-process-intro"><span class="sol-kicker">OUR PROCESS</span><div><h2>How We<br><em>Work.</em></h2><p>A collaborative, evidence-led process that turns complex education challenges into practical, scalable solutions.</p></div></div><div class="sol-process-flow">'+process+'</div></section>',
 '<section class="sol-closing"><h2>Let’s build stronger<br>education <em>together.</em></h2><a href="/contact" class="sol-button sol-button-light">Request a Consultation '+arrow()+'</a><img src="/assets/home-solutions-building.webp" alt="" loading="lazy"></section>'
 ].join('');
}
function redesignAcademy(main){
 var oldCards=Array.from(main.querySelectorAll('.academy-list details'));
 var pictures=['solutions-ai.webp','home-academy-learning.webp','home-solutions-building.webp','home-purpose-researcher.webp','about-leadership.webp','solutions-research.webp','about-hero-team.webp','home-purpose-educator.webp'];
 var cards=oldCards.map(function(card,i){
  var title=card.querySelector('h3')?.textContent?.trim()||'Programme';
  var body=card.querySelector('.academy-body')?.innerHTML||'';
  return '<details class="la-programme"><summary><div class="la-programme-cover"><img src="/assets/'+pictures[i]+'" alt="" loading="lazy"><span>'+String(i+1).padStart(2,'0')+'</span></div><div class="la-programme-title"><h3>'+title+'</h3><span class="la-programme-action" aria-hidden="true">'+arrow()+'</span></div></summary><div class="la-programme-detail">'+body+'</div></details>';
 }).join('');
 var routes=[
  ['Open Enrolment Programmes','Individual professionals can enrol in selected scheduled programmes.','people'],
  ['Institutional Cohorts','Organisations can commission customised programmes for their teams.','school'],
  ['Executive Workshops','Short, focused professional learning experiences for institutional leaders.','calendar'],
  ['Customised Learning Programmes','Learning experiences aligned with specific institutional objectives.','layers']
 ];
 function pict(n){
  var d={
   people:'<circle cx="8" cy="8" r="4"/><circle cx="18" cy="9" r="3"/><path d="M1 22v-2c0-5 3-7 7-7s7 2 7 7v2M16 14c4 0 7 2 7 6v2"/>',
   school:'<path d="m2 9 10-6 10 6-10 6-10-6Zm4 5v6h12v-6M2 21h20"/>',
   calendar:'<rect x="3" y="5" width="18" height="17" rx="2"/><path d="M7 2v6M17 2v6M3 10h18M8 14h2M14 14h2"/>',
   layers:'<path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5"/>'
  };return '<svg viewBox="0 0 24 24" width="31" height="31" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d[n]+'</svg>';
 }
 var ways=routes.map(function(r,i){return '<div class="la-route">'+pict(r[2])+'<div><h3><em>'+String(i+1).padStart(2,'0')+'</em> '+r[0]+'</h3><p>'+r[1]+'</p></div></div>';}).join('');
 main.innerHTML=[
 '<section class="la-hero"><div class="la-hero-copy"><div class="la-breadcrumb"><a href="/">HOME</a><span>/</span> LEARNING ACADEMY</div><span class="la-kicker">THE EMPOWERED LEARNING ACADEMY</span><h1>Advancing the knowledge,<br>skills and leadership of<br><em>education professionals.</em></h1>',
 '<p>The future of education depends on the capabilities of the people who shape it. The EmpowerED Learning Academy provides structured professional development for educators, school leaders, university professionals and individuals working across the education sector.</p><strong class="la-brandline">ADVISE / EQUIP / TRANSFORM</strong></div>',
 '<div class="la-hero-art"><span class="la-orbit" aria-hidden="true"></span><img src="/assets/home-approach-classroom.webp" alt="African student focused on classroom learning" fetchpriority="high"><span class="la-hero-note">INSTITUTIONAL TRANSFORMATION<br>THROUGH EVIDENCE</span></div></section>',
 '<section class="la-philosophy"><div><span class="la-kicker">OUR LEARNING PHILOSOPHY</span><h2>Learning must<br>translate into <em>practice.</em></h2></div><p>Professional development should go beyond attending workshops or completing online modules. Our learning experiences emphasise practical application, relevant professional contexts, evidence-informed content, interactive learning, professional reflection and continuous development.</p><a class="la-button" href="/contact?subject=Academy%20Application">Enquire about a Programme '+arrow()+'</a></section>',
 '<section class="la-catalogue"><span class="la-kicker">PROGRAMME CATALOGUE</span><h2>Choose what you want to learn.</h2><p>Explore each programme to see its subjects, intended audience and learning focus.</p><div class="la-programme-grid">'+cards+'</div></section>',
 '<section class="la-ways"><span class="la-kicker">HOW TO LEARN WITH US</span><h2>Four ways to participate.</h2><div class="la-routes">'+ways+'</div>',
 '<div class="la-cert"><svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/></svg><strong>Certification:</strong><p>Participants who complete eligible programmes may receive certificates of completion or professional development, subject to programme requirements. Any professional accreditation, external recognition or formal qualification will be clearly identified against the relevant programme. Participation alone does not confer a professional licence or academic qualification.</p></div></section>',
 '<section class="la-end"><h2>Let us work together.</h2><div><strong>Develop the people who shape learning.</strong><p>Enquire about an individual programme, an institutional cohort or customised training.</p></div><a href="/contact?subject=Academy%20Application" class="la-button">Request a Consultation '+arrow()+'</a></section>'
 ].join('');
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
 '<p>EmpowerED Strategies is an education strategy, research and transformation firm committed to reshaping the future of education through evidence, innovation, leadership and institutional capacity building.</p>',
 '<div class="ab-actions"><a href="#our-story">Our Approach <span class="ab-arrow">↗</span></a><a href="/what-we-do">Our Work <span class="ab-arrow">↗</span></a></div></div>',
 '<div class="ab-collage" aria-label="Education and institutional leadership"><div class="ab-red-ring" aria-hidden="true"></div>',
 '<div class="ab-frame ab-frame-main">'+img('learning','','education-profile.svg')+'</div>',
 '<div class="ab-frame ab-frame-building"><img src="/assets/home-solutions-building.webp" alt="Modern institutional building in dramatic red light" loading="eager"></div>',
 '<div class="ab-frame ab-frame-leader"><img src="/assets/solutions-leadership.webp" alt="African education leader speaking at a professional discussion" loading="eager"></div>',
 '</div></div></section>',
 '<section class="ab-foundation" aria-label="Our mission, vision and values">',
 '<div><span class="ab-foundation-icon">◎</span><div><h2>OUR MISSION</h2><p>To strengthen education systems and institutions through evidence-led strategy, research, leadership development, professional learning and responsible innovation.</p></div></div>',
 '<div><span class="ab-foundation-icon">◉</span><div><h2>OUR VISION</h2><p>An education landscape where every institution has the leadership, knowledge, systems and capabilities to deliver meaningful learning opportunities and prepare people for the future.</p></div></div>',
 '<div><span class="ab-foundation-icon">◇</span><div><h2>OUR VALUES</h2><p>Evidence, excellence, people, integrity, collaboration, purposeful innovation and inclusion.</p><details class="ab-values-details"><summary>Read our seven values</summary><ul><li>Evidence Before Assumptions</li><li>Excellence in Practice</li><li>Human-Centred Transformation</li><li>Integrity and Accountability</li><li>Collaboration and Partnership</li><li>Innovation with Purpose</li><li>Inclusion and Equity</li></ul></details><p class="ab-values-tail"</p></div></div>',
 '</section>',
 '<section class="ab-story" id="our-story"><div class="ab-story-photo"><img src="/assets/home-hero-campus.webp" alt="Students walking into a contemporary African university" loading="lazy"></div>',
 '<div class="ab-story-copy"><span class="ab-eyebrow">OUR STORY</span><h2>From insight to<br>real, <em>sustained change.</em></h2>',
 '<p>Education is fundamental to economic development, social progress and human potential. Yet gaps remain between the aspirations of education policies and the realities experienced by institutions, educators and learners.</p>',
 '<p>We connect strategy, evidence, people and implementation, listening to each institution’s distinct objectives, resources and challenges before developing practical solutions.</p></div></section>',
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

/* Remaining editorial chapters. Read the existing page content before composing
 * so approved labels, descriptions and service scopes are not replaced. */
function chEscape(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function chImage(src,alt,extra){return '<img src="/assets/'+src+'" alt="'+chEscape(alt)+'" loading="'+(extra?'eager':'lazy')+'" decoding="async">';}
function chArrow(){return '<svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19 19 5M8 5h11v11"/></svg>';}
function chLink(url,title,outline){return '<a href="'+url+'" class="ch-link'+(outline?' ch-link--outline':'')+'">'+chEscape(title)+chArrow()+'</a>';}
function chKicker(label){return '<span class="ch-kicker">'+chEscape(label)+'</span>';}
function chText(el,selector,fallback){var x=el.querySelector(selector);return x?x.textContent.trim():(fallback||'');}
function chTitle(el,selector,fallback){var x=el.querySelector(selector);return x?x.innerHTML:(fallback||'');}
function chHero(options){
 return '<section class="ch-hero ch-hero--'+options.kind+'">'+
 '<div class="ch-hero__copy"><div class="ch-crumb"><a href="/">HOME</a><span>/</span>'+chEscape(options.breadcrumb)+'</div>'+
 chKicker(options.kicker)+'<h1>'+options.title+'</h1><p>'+chEscape(options.description)+'</p>'+
 (options.action||'')+'</div><div class="ch-hero__media">'+
 '<span class="ch-hero__arc" aria-hidden="true"></span>'+chImage(options.image,options.alt||'',true)+
 (options.caption?'<span class="ch-hero__caption">'+chEscape(options.caption)+'</span>':'')+
 '</div></section>';
}
function chClosing(title,desc,label,url){
 return '<section class="ch-closing"><div><span class="ch-kicker">LET US WORK TOGETHER</span><h2>'+title+'</h2><p>'+chEscape(desc)+'</p></div>'+chLink(url||'/contact',label||'Request a Consultation')+
 '<div class="ch-closing__image" aria-hidden="true">'+chImage('home-solutions-building.webp','')+'</div></section>';
}
function chOriginal(main){
 return {title:chTitle(main,'.z-page-cover h1'),description:chText(main,'.z-page-cover p')};
}
function chapterResearch(main){
 var o=chOriginal(main);
 var topics=Array.from(main.querySelectorAll('.topic-grid article')).map(function(el){
  return {name:chText(el,'h3'),desc:chText(el,'p')};
 });
 var publications=Array.from(main.querySelectorAll('.showcase article')).map(function(el){
  return {name:chText(el,'h3'),desc:chText(el,'p')};
 });
 var forum=main.querySelector('.research-letter');
 var forumTitle=forum?chText(forum,'h3'):'Where evidence meets the people shaping education.';
 var forumPs=forum?Array.from(forum.querySelectorAll('p')).map(function(p){return p.textContent.trim();}):[];
 var closing=main.querySelector('.cta-band');
 main.innerHTML=[
 chHero({kind:'research',breadcrumb:'Research & Insights',kicker:'RESEARCH & INSIGHTS / EDITION 06',
  title:o.title,description:o.description,
  image:'research-editorial.webp',alt:'African researcher carefully examining research findings',
  caption:'RESEARCH  /  EVIDENCE  /  INSIGHT',
  action:chLink('/contact?subject=Research%20Enquiry','Discuss a Research Project')}),
 '<section class="ch-research-intro"><div>'+chKicker('RESEARCH PRIORITIES')+'<h2>The questions<br>worth <em>asking.</em></h2></div><p>Seven interconnected areas of enquiry across education systems, leadership, inclusion and the future of learning.</p></section>',
 '<section class="ch-research-index"><div class="ch-research-index__list">'+topics.map(function(t,i){
   return '<article class="ch-research-topic"><span class="ch-count">0'+(i+1)+'</span><div><h3>'+chEscape(t.name)+'</h3><p>'+chEscape(t.desc)+'</p></div>'+chArrow()+'</article>';
  }).join('')+'</div><div class="ch-research-index__visual">'+chImage('home-purpose-researcher.webp','Education researcher reviewing documents beside a laptop')+
 '<span>KNOWLEDGE THAT<br>INFORMS ACTION.</span></div></section>',
 '<section class="ch-publications"><div class="ch-publications__head">'+chKicker('RESEARCH & PUBLISHING')+'<div><h2>Our publication<br><em>series.</em></h2><p>Planned editorial series and research formats. Publication dates and reports will appear here when verified material is ready.</p></div></div>',
 '<div class="ch-publications__grid">'+publications.map(function(p,i){
   return '<article class="ch-publication"><div class="ch-publication__top"><span>'+String(i+1).padStart(2,'0')+'</span><span>PLANNED SERIES</span></div><div><h3>'+chEscape(p.name)+'</h3><p>'+chEscape(p.desc)+'</p></div><span class="ch-publication__line"></span></article>';
  }).join('')+'</div><p class="ch-integrity-note">No unpublished research articles, fabricated reports or unconfirmed publication dates are presented as published work.</p></section>',
 '<section class="ch-forum"><div class="ch-forum__media">'+chImage('about-hero-team.webp','African education leaders discussing plans together')+'</div><div class="ch-forum__copy">'+chKicker('THE FUTURE OF LEARNING FORUM / PROPOSED INITIATIVE')+
 '<h2>'+chEscape(forumTitle)+'</h2>'+forumPs.map(function(p){return '<p>'+chEscape(p)+'</p>';}).join('')+
 chLink('/contact?subject=Forum%20Enquiry','Discuss the Forum')+'</div></section>',
 chClosing(chTitle(closing,'h2','Make better decisions with better evidence.'),chText(closing,'p','We collaborate on research and evaluation.'),'Discuss a Research Project','/contact?subject=Research%20Enquiry')
 ].join('');
}
function chapterImpact(main){
 var o=chOriginal(main);
 var list=Array.from(main.querySelectorAll('.impact-list article')).map(function(el){return{name:chText(el,'h3'),desc:chText(el,'p')};});
 var note=main.querySelector('.notice');
 main.innerHTML=[
 chHero({kind:'impact',breadcrumb:'Our Impact',kicker:'OUR IMPACT / EDITION 07',title:o.title,description:o.description,
 image:'home-impact-portrait.webp',alt:'African professional in a thoughtful editorial portrait',caption:'STRONGER INSTITUTIONS. / BETTER OUTCOMES.'}),
 '<section class="ch-impact-intro"><div>'+chKicker('WHAT WE MEASURE')+'<h2>Progress you can<br><em>recognise.</em></h2></div><p>Our approach focuses on changes in institutional capability, professional readiness, evidence use and lasting improvement.</p></section>',
 '<section class="ch-impact-list">'+list.map(function(item,i){return '<article class="ch-impact-item"><span class="ch-count">0'+(i+1)+'</span><div><h3>'+chEscape(item.name)+'</h3><p>'+chEscape(item.desc)+'</p></div><span class="ch-impact-item__ray" aria-hidden="true"></span></article>';}).join('')+'</section>',
 '<section class="ch-impact-story"><div class="ch-impact-story__photo">'+chImage('home-hero-campus.webp','Two students walking up the steps of a modern African university campus')+'</div><div class="ch-impact-story__copy">'+chKicker('PROJECTS & CASE STUDIES')+
 '<h2>Turning strategy into<br><em>demonstrable progress.</em></h2><p>Our case study library will document approved engagements through their challenge, approach, deliverables, outcomes and lessons.</p>'+
 '<div class="ch-proof"><strong>Evidence matters.</strong><p>'+chEscape(note?note.textContent.replace(/^Evidence matters\.\s*/,'').trim():'Verified engagements and measurable outcomes will be published when approved.')+'</p></div>'+
 chLink('/contact','Discuss a Similar Engagement')+'</div></section>',
 '<section class="ch-proof-steps">'+['Challenge','Approach','Deliverables','Outcomes','Lessons'].map(function(t,i){return '<div><span>0'+(i+1)+'</span><strong>'+t+'</strong></div>';}).join('')+'</section>',
 chClosing('Stronger institutions.<br>Greater opportunities.','Tell us about the outcomes your institution is working towards.','Start a Conversation','/contact')
 ].join('');
}
function chapterPartners(main){
 var o=chOriginal(main);
 var partners=Array.from(main.querySelectorAll('.topic-grid article')).map(function(el){return{name:chText(el,'h3'),desc:chText(el,'p')};});
 var opportunities=Array.from(main.querySelectorAll('.deep-section li')).map(function(el){return el.textContent.trim();});
 var closing=main.querySelector('.cta-band');
 main.innerHTML=[
 chHero({kind:'partners',breadcrumb:'Partnerships',kicker:'PARTNERSHIPS / EDITION 08',title:o.title,description:o.description,
 image:'partnerships-hero.webp',alt:'African professionals working together on an education strategy',
 caption:'COLLABORATION / IMPLEMENTATION / IMPACT',
 action:chLink('/contact?subject=Partnerships','Explore a Partnership')}),
 '<section class="ch-partners-intro"><div>'+chKicker('WHO WE PARTNER WITH')+'<h2>Connected by a<br><em>shared ambition.</em></h2></div><p>Partnerships draw together institutional perspectives, complementary expertise and a commitment to education outcomes.</p></section>',
 '<section class="ch-partners-grid">'+partners.map(function(partner,i){
  return '<article class="ch-partner"><span class="ch-count">'+String(i+1).padStart(2,'0')+'</span><div><h3>'+chEscape(partner.name)+'</h3><p>'+chEscape(partner.desc)+'</p></div></article>';
 }).join('')+'</section>',
 '<section class="ch-partners-feature"><div class="ch-partners-feature__photo">'+chImage('about-hero-team.webp','Diverse African education leadership team meeting around a table')+'</div>'+
 '<div class="ch-partners-feature__statement">'+chKicker('PARTNERSHIP OPPORTUNITIES')+
 '<h2>Building what no single organisation can do <em>alone.</em></h2><p>Explore where shared priorities, knowledge and implementation capabilities can meet.</p></div></section>',
 '<section class="ch-opportunities"><div class="ch-opportunities__head"><span>OUR COLLABORATION AREAS</span><span>01 / '+String(opportunities.length).padStart(2,'0')+'</span></div>'+
 '<div class="ch-opportunities__grid">'+opportunities.map(function(t,i){return '<div class="ch-opportunity"><span>'+String(i+1).padStart(2,'0')+'</span><h3>'+chEscape(t)+'</h3>'+chArrow()+'</div>';}).join('')+'</div></section>',
 chClosing(chTitle(closing,'h2','Let’s build something that makes a difference.'),chText(closing,'p','Tell us about your institutional priorities.'),'Explore a Partnership','/contact?subject=Partnerships')
 ].join('');
}
function chapterContact(main){
 var o=chOriginal(main);
 var form=main.querySelector('#enquiry-form');
 if(!form)return;
 var info=main.querySelector('.contact-layout .info');
 var details=info?info.innerHTML:'';
 var categories=main.querySelector('.section.quote-wash');
 var categoryTitle=categories?chText(categories,'h2'):'Find the right conversation.';
 var categoryIntro=categories?chText(categories,'p'):'Education strategy, research and professional development enquiries.';
 main.innerHTML=[
 chHero({kind:'contact',breadcrumb:'Contact',kicker:'CONTACT / EDITION 09',title:o.title,description:o.description,
 image:'about-hero-team.webp',alt:'African education leaders gathered for an institutional meeting',caption:'LET’S TALK ABOUT WHAT COMES NEXT.'}),
 '<section class="ch-contact-main"><div class="ch-contact-aside">'+chKicker('GET IN TOUCH')+
 '<div class="ch-contact-aside__image">'+chImage('home-purpose-educator.webp','African education professional in an editorial portrait')+'</div>'+
 '<div class="ch-contact-aside__details">'+details+'</div></div>',
 '<div class="ch-contact-form-panel">'+chKicker('INSTITUTIONAL ENQUIRY')+'<h2>Tell us about<br><em>your priorities.</em></h2>'+
 '<p>Share a few details to prepare your enquiry email. Your message is sent using your email application.</p><div id="ch-contact-form-slot"></div></div></section>',
 '<section class="ch-contact-categories"><span>FIND THE RIGHT CONVERSATION</span><h2>'+chEscape(categoryTitle)+'</h2><p>'+chEscape(categoryIntro)+'</p></section>'
 ].join('');
 var slot=main.querySelector('#ch-contact-form-slot');
 if(slot)slot.replaceWith(form);
 var submit=form.querySelector('button[type="submit"]');
 if(submit)submit.innerHTML='Compose Enquiry Email '+chArrow();
}
function chapterProduct(main){
 var o=chOriginal(main);
 var original=main.querySelector('.split.split-center');
 var why=original?chText(original,'.lead'):'';
 var support=original?Array.from(original.querySelectorAll('ul li')).map(function(li){return li.textContent.trim();}):[];
 var steps=Array.from(main.querySelectorAll('.numbered article')).map(function(article){
  return {title:chText(article,'h3'),desc:chText(article,'p')};
 });
 var audience=Array.from(main.querySelectorAll('.pills .pill')).map(function(x){return x.textContent.trim();});
 var key=window.location.pathname.split('/').filter(Boolean).pop();
 var map={
  'ai-ready-education-institution':{title:'The AI-Ready Education Institution',image:'solutions-ai.webp',supportImage:'home-purpose-educator.webp',tag:'AI READINESS'},
  'institutional-transformation':{title:'Education Institutional Transformation',image:'home-solutions-building.webp',supportImage:'about-hero-team.webp',tag:'INSTITUTIONAL TRANSFORMATION'},
  'education-leadership':{title:'Education Leadership Excellence',image:'solutions-leadership.webp',supportImage:'about-leadership.webp',tag:'LEADERSHIP'},
  'research-mel':{title:'Research & Impact Measurement',image:'solutions-research.webp',supportImage:'home-purpose-researcher.webp',tag:'RESEARCH & MEL'}
 };
 var c=map[key];if(!c)return;
 main.innerHTML=[
 chHero({kind:'product',breadcrumb:'Solutions / '+c.title,kicker:c.tag, title:o.title,description:o.description,
  image:c.image,alt:c.title+' programme imagery',
  caption:'ADVISE / EQUIP / TRANSFORM',action:chLink('/contact?subject='+encodeURIComponent(c.title),'Request a Consultation')}),
 '<section class="ch-product-thesis"><div>'+chKicker('WHY THIS MATTERS')+
 '<h2>From institutional challenge to <em>meaningful improvement.</em></h2><p>'+chEscape(why)+'</p></div>'+
 '<div class="ch-product-thesis__photo">'+chImage(c.supportImage,'African education professionals and institutional surroundings')+'</div></section>',
 '<section class="ch-product-support"><div class="ch-product-support__head">'+chKicker('OUR AREAS OF SUPPORT')+
 '<h2>What this engagement<br><em>can address.</em></h2></div><div class="ch-product-support__list">'+support.map(function(s,i){
 return '<div class="ch-product-support__item"><span>'+String(i+1).padStart(2,'0')+'</span><p>'+chEscape(s)+'</p>'+chArrow()+'</div>';
 }).join('')+'</div></section>',
 '<section class="ch-product-path"><div class="ch-product-path__head">'+chKicker('OUR ENGAGEMENT PATHWAY')+'<h2>How we work.</h2><p>Each stage builds towards practical, measurable institutional progress.</p></div>'+
 '<div class="ch-product-path__steps">'+steps.map(function(step,i){
 return '<article><span>'+String(i+1).padStart(2,'0')+'</span><h3>'+chEscape(step.title)+'</h3><p>'+chEscape(step.desc)+'</p></article>';
 }).join('')+'</div></section>',
 (audience.length?'<section class="ch-product-audience">'+chKicker('WHO THIS IS FOR')+'<h2>Designed for the people<br><em>shaping education.</em></h2><div class="ch-product-audience__list">'+audience.map(function(s){
 return '<span>'+chEscape(s)+'</span>';
 }).join('')+'</div></section>':''),
 chClosing('Let’s design the right<br>engagement <em>together.</em>','Tell us about your priorities and explore a practical next step with EmpowerED Strategies.','Request a Consultation','/contact?subject='+encodeURIComponent(c.title))
 ].join('');
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
  if(page==='product')chapterProduct(main);
  if(page==='research')chapterResearch(main);
  if(page==='about')redesignAbout(main);
  if(page==='impact')chapterImpact(main);
  if(page==='partnerships')chapterPartners(main);
  if(page==='contact')chapterContact(main);
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
