/* EmpowerED editorial site rebuild.
 * The original site.js continues to own copy, routing, contact validation and navigation.
 * This module changes the page composition rather than recolouring its components.
 */
(function(){
'use strict';
var A='/assets/';
var PH={
 hero:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1300&q=86',
 learning:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1300&q=85',
 team:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
 graduate:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85',
 strategy:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85',
 research:'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1100&q=85',
 institute:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85',
 workshop:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85',
 students:'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1100&q=85'
};
var ALTS={
 hero:'Illustrative editorial portrait representing the people shaping education',
 learning:'Illustrative photograph of a classroom learning environment',
 team:'Illustrative image of a professional collaboration',
 graduate:'Illustrative image of graduating students',
 strategy:'Illustrative image of students collaborating',
 research:'Illustrative image of learning and research',
 institute:'Illustrative photograph of an institutional environment',
 workshop:'Illustrative photograph of education professionals working together',
 students:'Illustrative photograph of an academic learning environment'
};
function img(key,css,fallback){return '<img class="'+(css||'')+'" src="'+PH[key]+'" alt="'+ALTS[key]+'" decoding="async" loading="'+(key==='hero'?'eager':'lazy')+'" data-fallback="'+A+(fallback||'education-profile.svg')+'">';}
function small(t){return '<span class="z-kicker">'+t+'</span>';}
function arrow(){return '<span aria-hidden="true">↗</span>';}
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
 '<div class="hf-campus-photo">'+img('institute','','solution-systems.svg')+'</div>',
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
 var collection=main.querySelector('.detail-collection');if(!collection)return;
 var groups=Array.from(collection.querySelectorAll('.detail-group'));
 var rows=groups.map(function(group,i){
  var title=group.querySelector('h2')?.textContent||'';
  var intro=group.querySelector('.lead')?.textContent||'';
  var detail=group.querySelectorAll('li');
  var n=String(i+1).padStart(2,'0');
  return '<details class="z-expert-item" id="service-'+(i+1)+'"'+(i===0?' open':'')+'><summary>'+
  '<span class="z-index">['+n+']</span><h2>'+title+'</h2><span class="z-expert-plus" aria-hidden="true">↗</span></summary>'+
  '<div class="z-expert-inner"><p>'+intro+'</p><div class="z-expert-meta">'+Array.from(detail).map(function(li){return '<span>'+li.textContent+'</span>';}).join('')+'</div>'+
  cta('/contact','Discuss This Service','z-btn-dark')+'</div></details>';
 }).join('');
 collection.closest('section').outerHTML='<section class="z-expertise-layout"><div class="z-expertise-top">'+small('THE SERVICE INDEX / 01—06')+
 '<p>Our services are interconnected, but every engagement begins by understanding your institutional context.</p></div>'+
 '<div class="z-expertise-grid"><aside><div class="z-expertise-aside">'+img('strategy','','academy-workshop.svg')+
 '<span>EDUCATION. EVIDENCE. POSSIBILITY.</span><div class="z-expertise-deco">06</div></div></aside>'+
 '<div class="z-expertise-rows">'+rows+'</div></div></section>';
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
 var split=main.querySelector('.feature-split');
 if(split){split.closest('section')?.classList.add('z-about-story');}
 var values=main.querySelector('.values-grid');
 if(values)values.closest('section')?.classList.add('z-values-section');
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
 document.body.classList.add('journal-ready');
}
var root=document.getElementById('app');
if(root){
 var observer=new MutationObserver(function(){enhance();});
 observer.observe(root,{childList:true});
 enhance();
}
})();
