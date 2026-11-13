
(function(){
'use strict';
var EMAIL='hello@empoweredstrategies.ai';
var ROOT='https://www.empoweredstrategies.ai';
// Approved brand asset maintained in the Think Tank partner library.
var BRAND_ASSET='https://www.thinktankcircle.org/images/partners/empowered-strategies.webp';
var PHOTO_1='/assets/cover-portrait.svg';
var PHOTO_2='/assets/education-profile.svg';
var PHOTO_3='/assets/academy-workshop.svg';
var NAV=[
 ['About Us','/about-us'],['What We Do','/what-we-do'],['Solutions','/solutions'],
 ['Learning Academy','/learning-academy'],['Research & Insights','/research-insights'],
 ['Our Impact','/our-impact'],['Partnerships','/partnerships']
];
var SERVICES=[
 {title:'Education Strategy & Systems Transformation',intro:'We support governments and education institutions in designing strategies, strengthening education systems and implementing meaningful reform.',bullets:['Education policy and strategy development','Institutional strategic planning','Education systems transformation','Curriculum and learning systems advisory','Education sector assessments','Education reform programme design','Digital education strategy']},
 {title:'Research, MEL & Evidence Use',intro:'We generate and translate evidence to support better education decisions, stronger programmes and measurable impact.',bullets:['Education research and policy analysis','Monitoring, Evaluation and Learning','Baseline and endline assessments','Programme and impact evaluations','Learning outcome measurement','Research dissemination','Evidence-to-policy advisory']},
 {title:'Training & Capacity Building',intro:'We develop the knowledge, professional skills and institutional capabilities needed to improve education delivery.',bullets:['AI literacy for educators','Teacher professional development','Education leadership programmes','Digital pedagogy','Instructional leadership','Research and evidence literacy','Training of Trainers']},
 {title:'Leadership & Board Advisory',intro:'We strengthen education governance and equip institutional leaders to navigate complexity, lead change and build high-performing institutions.',bullets:['School board advisory','University governance','Executive leadership development','Institutional performance reviews','Leadership coaching','Organisational change management','Governance and accountability frameworks']},
 {title:'Partnership Brokering & Mediation',intro:'We connect stakeholders, facilitate collaboration and support partnerships that advance education outcomes.',bullets:['Institutional partnership development','Stakeholder engagement','Strategic collaboration','Education programme partnerships','Multi-institutional coordination','Partnership facilitation and mediation']},
 {title:'AI Literacy & Future of Learning',intro:'We help education institutions and professionals understand, adopt and responsibly integrate artificial intelligence into education.',bullets:['Institutional AI readiness assessments','AI literacy for educators','AI adoption strategies','Responsible AI policies','AI-enabled teaching and learning','Education technology integration','Future skills development']}
];
var SOLUTIONS=[
 {title:'The AI-Ready Education Institution',strap:'A complete pathway to responsible AI adoption.',intro:'A structured transformation pathway to help schools, universities and education organisations assess readiness, build capabilities and integrate AI responsibly.',url:'/solutions/ai-ready-education-institution',items:['Institutional AI readiness assessment','Leadership and stakeholder consultation','Institutional AI strategy','AI governance and policy development','Educator and administrator training','Practical AI integration','Monitoring and evaluation']},
 {title:'Education Institutional Transformation',strap:'From strategic intent to implementation.',intro:'A structured engagement for strengthening institutional performance, governance and capacity, with a practical roadmap for improvement.',url:'/solutions/institutional-transformation',items:['Institutional diagnostic assessment','Strategic planning and review','Stakeholder consultation','Governance and leadership assessment','Operational improvement recommendations','Digital transformation advisory','Institutional capacity development','Performance measurement framework']},
 {title:'Education Leadership Excellence',strap:'Developing leaders who shape education.',intro:'Practical leadership development for school leaders, university executives, board members and education managers.',url:'/solutions/education-leadership',items:['Strategic leadership','Institutional governance','Education management','Financial and resource stewardship','Performance management','Organisational change','AI and digital leadership','Institutional accountability']},
 {title:'Research & Impact Measurement',strap:'Know what works. Understand why.',intro:'Support across the programme evidence cycle, from research design and baseline studies to evaluation and impact reporting.',url:'/solutions/research-mel',items:['Research design','Baseline and endline studies','MEL frameworks','Theory of Change development','Logical frameworks','Indicator development','Data collection and analysis','Programme evaluations','Impact assessments','Research reporting']},
 {title:'Educator Professional Development',strap:'Invest in the people who shape learning.',intro:'Relevant and practical professional learning for teachers, lecturers, trainers and education professionals.',url:'/learning-academy',items:['AI literacy','Digital pedagogy','Teaching innovation','Assessment design','Learning design','Professional effectiveness','Research and evidence use']},
 {title:'Education Partnership Development',strap:'Building partnerships that deliver more together.',intro:'Collaborative programmes that connect institutions and stakeholders around shared education goals.',url:'/partnerships',items:['Partnership mapping','Opportunity identification','Programme design','Stakeholder engagement','Collaboration frameworks']}
];
var PROGRAMMES=[
 {title:'AI Literacy for Educators',intro:'Understanding artificial intelligence and its implications for modern education.',audience:'Teachers, lecturers, trainers and education professionals.',items:['Foundations of AI','Generative AI in education','AI-assisted lesson planning','AI-powered learning resources','Assessment and feedback','Responsible AI use','Academic integrity','Educator productivity']},
 {title:'AI Practitioner for Education Professionals',intro:'A practical programme for integrating AI into everyday professional work.',audience:'Educators, administrators, trainers and education consultants.',items:['AI tools and workflows','Prompting and effective AI interaction','Research and information synthesis','Learning content creation','Administrative productivity','AI-supported professional practice','Responsible application']},
 {title:'AI Leadership for School Leaders',intro:'Preparing leaders to make informed decisions about AI and institutional transformation.',audience:'Principals, school directors, heads of departments and education executives.',items:['AI and the changing education landscape','Institutional AI readiness','AI strategy development','Responsible AI governance','Staff capacity building','Change management','Measuring AI adoption']},
 {title:'Digital Pedagogy & Learning Design',intro:'Developing contemporary approaches to teaching, learning and instructional design.',audience:'Teachers, lecturers, instructional designers and trainers.',items:['Digital learning principles','Learning experience design','Digital teaching methodologies','Online and blended learning','Assessment innovation','Learning engagement','Education technology integration']},
 {title:'Education Leadership & Institutional Management',intro:'Strengthening the capabilities of professionals responsible for managing education institutions.',audience:'School leaders, university administrators and education managers.',items:['Strategic education leadership','Institutional planning','Performance management','Team development','Resource management','Change leadership','Institutional accountability']},
 {title:'Monitoring, Evaluation & Learning',intro:'Developing practical competencies in programme monitoring, evaluation and evidence use.',audience:'Education programme managers, researchers, NGO professionals and development practitioners.',items:['Results-based management','Theory of Change','Logical frameworks','Indicator development','Data collection','Programme monitoring','Evaluation methodologies','Reporting and learning']},
 {title:'Education Governance & Board Development',intro:'Strengthening governance, accountability and institutional oversight.',audience:'Education board members, school owners and institutional executives.',items:['Governance principles','Board responsibilities','Strategic oversight','Risk management','Institutional performance','Accountability','Board effectiveness']},
 {title:'Training of Trainers',intro:'Equipping professionals to design, facilitate and deliver effective learning programmes.',audience:'Trainers, education consultants, lecturers and capacity-building professionals.',items:['Adult learning principles','Training needs analysis','Curriculum and session design','Facilitation techniques','Learning assessment','Training evaluation','Professional facilitation']}
];
var VALUES=[
 ['Evidence Before Assumptions','Credible research, reliable information and informed decision-making.'],
 ['Excellence in Practice','High standards in thinking, professional engagement and delivery.'],
 ['Human-Centred Transformation','Education exists to develop people and expand human potential.'],
 ['Integrity and Accountability','Transparency, professional responsibility and respect.'],
 ['Collaboration and Partnership','Sustainable transformation requires diverse expertise and collective action.'],
 ['Innovation with Purpose','Technology and new ideas should meaningfully improve education.'],
 ['Inclusion and Equity','Education systems should recognise diverse learner needs and opportunities.']
];
var RESEARCH=[
 ['Education Systems & Policy','How education systems are structured, governed, financed and transformed.'],
 ['Artificial Intelligence & Education','Opportunities, risks and institutional implications of AI adoption.'],
 ['The Future of Teaching','How educator roles, pedagogy and professional capabilities are changing.'],
 ['Education Leadership & Governance','Leadership, accountability and institutional effectiveness.'],
 ['Digital Learning & Innovation','Technology and its effect on access, learning and performance.'],
 ['Equity & Inclusion','Approaches that support accessible and equitable opportunities.'],
 ['Education Programme Effectiveness','Using evidence to understand and improve interventions.']
];
var PUBLICATIONS=[
 ['The EmpowerED Education Brief','Education developments, emerging research, policy discussions and future learning.'],
 ['African Education Outlook','An annual examination of trends, policy developments and challenges across Africa.'],
 ['AI in Education Monitor','Recurring intelligence on AI adoption, educator readiness and governance.'],
 ['Future of Learning Report','How technology, economics and workforce needs are reshaping learning.'],
 ['Education Policy & Practice Papers','Research-informed contributions to policy discussion and institutional practice.'],
 ['Research Reports & Commissioned Studies','Research and evaluation outputs produced through approved engagements.']
];
var IMPACT=[
 ['Institutional Strengthening','Stronger governance, clearer strategies and more capable institutional systems.'],
 ['Educator Empowerment','Improved knowledge, confidence, teaching capabilities and professional readiness.'],
 ['Evidence-Informed Decisions','Better use of data, evaluation and research to guide programmes and policies.'],
 ['Responsible Innovation','Thoughtful adoption of digital technologies and AI in education.'],
 ['Sustainable Transformation','Institutional capacity that supports progress beyond individual projects.']
];
var PARTNERS=[
 ['Government & Public Institutions','Education strategy, policy development and systems transformation.'],
 ['Foundations & Development Partners','Programme design, research, implementation and impact measurement.'],
 ['Universities & Research Institutions','Research, professional learning and knowledge exchange.'],
 ['Schools & Education Networks','Educator development, leadership and future-ready learning.'],
 ['Technology & Innovation Partners','Responsible technology adoption and education innovation.'],
 ['Civil Society & Community Organisations','Access, inclusion and community participation.']
];
function l(path,label,cls){return '<a class="'+(cls||'text-link')+'" href="'+path+'">'+label+' <span class="arrow" aria-hidden="true">↗</span></a>'}
function btn(path,label,cls){return l(path,label,'btn '+(cls||'btn-primary'))}
function eyebrow(s,light){return '<div class="mini eyebrow'+(light?' light':'')+'">'+s+'</div>'}
function inner(content,cls){return '<div class="container'+(cls?' '+cls:'')+'">'+content+'</div>'}
function section(content,cls){return '<section class="'+(cls||'section')+'">'+inner(content)+'</section>'}
function list(items,cls){return '<ul class="'+(cls||'list-plain')+'">'+items.map(function(a){return '<li>'+a+'</li>'}).join('')+'</ul>'}
function pageHero(kicker,title,desc,light){
 var illustrations={
  '/about-us':['/assets/education-profile.svg','Education professionals gathered together'],
  '/partnerships':['/assets/partnerships-people.svg','Professionals collaborating in a meeting']
 };
 var art=illustrations[window.location.pathname];
 var visual=art?'<div class="page-art"><img src="'+art[0]+'" alt="" loading="eager" decoding="async"></div>':'';
 return '<section class="page-hero'+(light?' product-hero':'')+'">'+visual+inner('<div class="breadcrumb"><a href="/">Home</a><span>/</span>'+kicker+'</div>'+eyebrow(kicker,light)+'<h1>'+title+'</h1><p class="lead">'+desc+'</p>')+'</section>';
}
function bigCta(title,desc,alt){return '<section class="section cta-band">'+inner(eyebrow('Let us work together',true)+'<h2>'+title+'</h2><p style="max-width:720px">'+desc+'</p><div class="actions">'+btn('/contact','Request a Consultation')+(alt?btn('/partnerships','Explore Partnerships','btn-outline-light'):'')+'</div>')+'</section>'}
function brand(){return '<img class="brand-logo" src="'+BRAND_ASSET+'" alt="" decoding="async"><span class="brand-label">EMPOWER<b>ED</b><small>STRATEGIES</small></span>'}
function header(path){
 var links=NAV.map(function(x){return '<a href="'+x[1]+'"'+(path===x[1]?' aria-current="page"':'')+'>'+x[0]+'</a>'}).join('');
 return '<header class="site-header"><div class="site-utility"><div class="container utility-row"><span>Education strategy · Research · Institutional transformation</span><span>ADVISE / EQUIP / TRANSFORM</span></div></div><div class="container header-row"><a href="/" class="brand" aria-label="EmpowerED Strategies home">'+brand()+'</a><nav aria-label="Main navigation" class="desktop-nav">'+links+'</nav>'+btn('/contact','Request a Consultation','btn-dark header-cta')+'<button class="menu-toggle" aria-controls="mobile-nav" aria-expanded="false" aria-label="Open navigation">☰</button></div><nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation"><div class="mobile-nav-inner">'+links+'<a href="/contact">Contact</a>'+btn('/contact','Request a Consultation','btn-primary')+'</div></nav></header>'
}
function footer(){return '<footer class="footer">'+inner('<div class="footer-top"><div><a href="/" class="brand">'+brand()+'</a><div class="tagline">Reshaping Education’s Future.</div><p>We connect evidence, strategy, leadership and innovation to help education institutions build stronger systems and better learning outcomes.</p><div class="mini light">ADVISE. EQUIP. TRANSFORM.</div></div><div><h4>Explore</h4><div class="footer-links"><a href="/about-us">About Us</a><a href="/what-we-do">What We Do</a><a href="/solutions">Solutions</a><a href="/learning-academy">Learning Academy</a><a href="/our-impact">Our Impact</a></div></div><div><h4>Knowledge & Partnership</h4><div class="footer-links"><a href="/research-insights">Research & Insights</a><a href="/partnerships">Partnerships</a><a href="/solutions/ai-ready-education-institution">AI-Ready Institution</a><a href="/contact">Contact Us</a></div></div><div><h4>Stay informed</h4><p>Research, education developments and perspectives on the future of learning.</p><a class="text-link" href="mailto:'+EMAIL+'?subject=Subscribe%20to%20the%20EmpowerED%20Education%20Brief">Request newsletter updates <span class="arrow">↗</span></a><p style="margin-top:23px"><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></p></div></div><div class="footer-bottom"><span>© '+new Date().getFullYear()+' EmpowerED Strategies. All rights reserved.</span><span>Evidence-led strategy. Empowered institutions. A better future for every learner.</span></div>')+'</footer>'}
function home(){
 var services=SERVICES.map(function(s,i){return '<a href="/what-we-do#service-'+(i+1)+'" class="service-item"><span class="index">0'+(i+1)+'</span><h3>'+s.title+'</h3><p>'+s.intro+'</p><span class="arrow" aria-hidden="true">↗</span></a>'}).join('');
 var steps=[['Understand','Research, assessments and stakeholder engagement.'],['Strategise','Practical strategies, policies and transformation roadmaps.'],['Equip','Learning for educators, leaders, boards and institutions.'],['Implement','Guidance to move plans into purposeful action.'],['Measure & Improve','Monitoring, evaluation and continuous learning.']].map(function(x,i){return '<div class="pathway-step"><div class="number">0'+(i+1)+'</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>'}).join('');
 var academy=PROGRAMMES.slice(0,4).map(function(p,i){return '<article class="programme-entry"><div class="index">0'+(i+1)+' / ACADEMY</div><h3>'+p.title+'</h3><p>'+p.intro+'</p></article>'}).join('');
 return '<section class="hero">'+inner('<div class="hero-grid"><div class="hero-copy">'+eyebrow('Reshaping education’s future · Issue 001')+'<h1>The future of <span class="italic">learning</span> starts here.</h1><p class="lead">We help governments, institutions and education leaders navigate change, strengthen capacity and build learning environments ready for the future.</p><div class="actions">'+btn('/contact','Request a Strategic Consultation')+btn('/what-we-do','Explore What We Do','btn-outline')+'</div></div><div class="hero-visual"><div class="hero-ellipse"></div><div class="orbit"></div><img class="hero-photo" src="'+PHOTO_1+'" alt="Editorial image placeholder for a cinematic education portrait" fetchpriority="high"><div class="hero-stamp">ADVISE.<br>EQUIP.<br>TRANSFORM.</div><div class="hero-vertical">ADVISE · EQUIP · TRANSFORM</div></div></div>')+'</section>'+
 '<div class="ribbon"><div class="container ribbon-track"><span>Evidence</span><span>Strategy</span><span>Leadership</span><span>Innovation</span><span>Better outcomes for every learner</span></div></div>'+
 section('<div class="split split-center"><div>'+eyebrow('Why we exist')+'<h2 class="offset-title">Education is changing. Institutions must evolve.</h2></div><div class="prose"><p class="lead">Artificial intelligence, evolving workforce demands and changing learning expectations are reshaping education.</p><p>Meaningful transformation takes more than new technology. It takes informed leadership, effective policies, capable educators and decisions grounded in evidence. We connect strategy with implementation, and research with practical institutional progress.</p>'+l('/about-us','Discover EmpowerED Strategies')+'</div></div>')+
 '<section class="section pathway">'+inner(eyebrow('Our approach',true)+'<h2>From evidence to action.<br><span style="color:var(--rose)">From action to transformation.</span></h2><div class="pathway-steps">'+steps+'</div>')+'</section>'+
 section('<div class="section-head"><div>'+eyebrow('Strategic expertise')+'<h2>What we do.</h2></div><p>Six interconnected areas of expertise. One goal: stronger education systems and institutions.</p></div><div class="service-list">'+services+'</div>')+
 '<section class="section signature">'+inner('<div class="split split-center"><div>'+eyebrow('Signature institutional solution')+'<h2>Is your institution ready for the <span class="italic">AI era?</span></h2><p class="lead">Move from AI experimentation to structured, responsible and strategic adoption.</p><div class="actions">'+btn('/solutions/ai-ready-education-institution','Explore the AI-Ready Pathway','btn-dark')+'</div></div><div><h3>What the programme addresses</h3>'+list(['Institutional AI readiness assessments','AI strategy and governance development','Educator and leadership capacity building','AI integration and implementation support','Monitoring and continuous improvement'])+'</div></div>')+'</section>'+
 section('<div class="section-head"><div>'+eyebrow('EmpowerED Learning Academy')+'<h2>Learning that turns into <span class="italic">practice.</span></h2></div><p>Professional development for educators, education leaders and people shaping the sector.</p></div><div class="programme-strip">'+academy+'</div><div style="margin-top:20px">'+l('/learning-academy','Explore all eight programmes')+'</div>')+
 '<section class="section quote-wash">'+inner('<div class="publication"><div class="art" aria-label="The EmpowerED Education Brief editorial graphic"><span>Ideas.<br>Evidence.<br>Progress.</span></div><div>'+eyebrow('Research & intelligence')+'<h2>Knowledge to shape better decisions.</h2><p class="lead">Explore the policies, developments and questions influencing education in Africa and beyond.</p><p>Our Research & Insights platform is designed for research briefs, policy papers, institutional perspectives, and analysis of emerging education trends.</p>'+l('/research-insights','Explore Research & Insights')+'</div></div>')+'</section>'+
 bigCta('Let’s shape the future of education, together.','Whether you are developing education strategy, preparing for AI transformation or strengthening institutional leadership, we are ready to explore how we can work together.',true);
}
function about(){
 return pageHero('About Us','We believe the future of education can be <span class="italic">better designed.</span>','EmpowerED Strategies exists to strengthen education systems, empower professionals and support institutions navigating the future of learning.')+
 section('<div class="feature-split"><div>'+eyebrow('Who we are')+'<h2>Connecting research with practice.</h2><p class="lead">Transforming education requires more than new policies, technologies or training programmes.</p><p>We work with governments, institutions, foundations, universities, schools and education professionals to connect evidence with implementation, and innovation with meaningful outcomes.</p><p>Every institution has a different context. We begin by listening, researching and understanding, then collaborate to build relevant and sustainable solutions.</p></div><div><img src="'+PHOTO_2+'" alt="Editorial image placeholder for education leadership" loading="lazy"></div></div>')+
 '<section class="section deep-section">'+inner('<div class="split"><div>'+eyebrow('Our vision',true)+'<h2>Learning opportunities that prepare people for the future.</h2><p class="lead">An education landscape where every institution has the leadership, knowledge, systems and capabilities to deliver meaningful learning opportunities.</p></div><div>'+eyebrow('Our mission',true)+'<h2>Stronger systems through evidence and leadership.</h2><p class="lead">To strengthen education systems and institutions through evidence-led strategy, research, leadership development, professional learning and responsible innovation.</p></div></div>')+'</section>'+
 section(eyebrow('The principles behind our work')+'<h2>Our core values.</h2><div class="values-grid">'+VALUES.map(function(v,i){return '<article><div class="value-number">0'+(i+1)+'</div><h3>'+v[0]+'</h3><p>'+v[1]+'</p></article>'}).join('')+'</div>')+
 '<section class="section quote-wash">'+inner('<div class="split"><div>'+eyebrow('Leadership')+'<h2>Guided by knowledge. Driven by purpose.</h2><h3>Eva Nderu</h3><p class="mini">Founder · Education strategist · Researcher</p><p>Eva represents the intellectual and strategic leadership behind EmpowerED Strategies. Her work is centred on strengthening education systems through research, strategy and institutional collaboration. Her professional interests include education strategy, research, institutional leadership, transformation and the future of learning.</p><p class="not-fake">An approved biography and verified credentials will be added when provided.</p>'+l('/contact?subject=Speaking%20Invitation','Invite Eva to Speak')+'</div><div>'+eyebrow('Our philosophy')+'<h2>Transformation is not an event. It is an institutional journey.</h2><p>We do not believe in one-size-fits-all education solutions. We listen, research, assess, strategise and collaborate to build strategies that institutions can implement and sustain.</p>'+l('/contact','Work with our team')+'</div></div>')+'</section>'+
 bigCta('Help us build stronger education systems.','Explore a conversation about your institution, programme or partnership.');
}
function expertise(){
 return pageHero('What We Do','Strategic expertise for a changing <span class="italic">education world.</span>','We help education stakeholders navigate complexity, strengthen performance and prepare for what comes next through six areas of expertise.')+
 section('<div class="detail-collection">'+SERVICES.map(function(s,i){return '<article id="service-'+(i+1)+'" class="detail-group"><div><div class="detail-index">0'+(i+1)+' / OUR EXPERTISE</div><h2>'+s.title+'</h2><p class="lead">'+s.intro+'</p>'+l('/contact','Discuss this service')+'</div><div><h3>How we can help</h3>'+list(s.bullets)+'</div></article>'}).join('')+'</div>')+
 bigCta('Your context shapes the strategy.','Tell us what your institution is working towards, and we will explore the right engagement together.');
}
function solutions(){
 return pageHero('Solutions','Practical solutions. Meaningful education <span class="italic">transformation.</span>','Structured programmes and institutional engagements that translate complex education challenges into practical improvement.')+
 section('<div class="section-head"><div>'+eyebrow('Signature solutions')+'<h2>Built for the challenges institutions face.</h2></div><p>Every engagement is designed around institutional priorities, capabilities and context.</p></div><div class="showcase">'+SOLUTIONS.map(function(x,i){var photos=[
 '/assets/solution-ai.svg',
 '/assets/solution-systems.svg',
 '/assets/solution-leadership.svg',
 '/assets/solution-research.svg',
 '/assets/solution-educators.svg',
 '/assets/solution-partnership.svg'
 ];return '<article><div class="solution-image"><img src="'+photos[i]+'" alt="" loading="lazy" decoding="async"><span>0'+(i+1)+'</span></div><div class="index">0'+(i+1)+' / SOLUTION</div><h3>'+x.title+'</h3><p class="mini" style="letter-spacing:.06em">'+x.strap+'</p><p>'+x.intro+'</p>'+l(x.url,'Explore the solution')+'</article>'}).join('')+'</div>')+
 '<section class="section deep-section">'+inner('<div class="split"><div>'+eyebrow('How engagement works',true)+'<h2>A practical pathway from assessment to improvement.</h2></div><div>'+list(['Understand the institutional challenge and its context','Define priorities, outcomes and a realistic plan','Build the capabilities needed to deliver','Support implementation and continuous improvement','Use evidence to evaluate progress'])+'<div class="actions">'+btn('/contact','Discuss an Engagement')+'</div></div></div>')+'</section>';
}
function academy(){
 return pageHero('Learning Academy','Advancing the knowledge, skills and leadership of <span class="italic">education professionals.</span>','The EmpowerED Learning Academy offers structured professional learning designed to bridge the gap between knowledge and practical application.')+
 section('<div class="feature-split"><div>'+eyebrow('Learning philosophy')+'<h2>Learning must translate into practice.</h2><p class="lead">Professional development goes beyond attending workshops or completing modules.</p><p>Our learning experiences focus on practical application, real professional contexts, evidence-informed content, interactive learning, reflection and continuous development.</p>'+l('/contact?subject=Academy%20Application','Enquire about a programme')+'</div><div><img src="'+PHOTO_3+'" alt="Editorial image placeholder for a professional learning workshop" loading="lazy"></div></div>')+
 section('<div class="section-head"><div>'+eyebrow('Programme catalogue')+'<h2>Choose what you want to learn.</h2></div><p>Open a programme to explore its subjects and intended audience.</p></div><div class="academy-list">'+PROGRAMMES.map(function(p,i){return '<details><summary><span class="index">0'+(i+1)+'</span><h3>'+p.title+'</h3><span class="plus" aria-hidden="true">+</span></summary><div class="academy-body"><p>'+p.intro+'</p><p><b>For:</b> '+p.audience+'</p>'+list(p.items)+'<div class="actions">'+btn('/contact?subject=Academy%20Application','Apply or Request Details','btn-dark')+'</div></div></details>'}).join('')+'</div>')+
 '<section class="section quote-wash">'+inner(eyebrow('How to learn with us')+'<h2>Four ways to participate.</h2><div class="showcase">'+[['Open Enrolment Programmes','Individual professionals can enrol in selected scheduled programmes.'],['Institutional Cohorts','Organisations can commission learning for their teams.'],['Executive Workshops','Short, focused experiences for institutional leaders.'],['Customised Learning Programmes','Training aligned with specific institutional objectives.']].map(function(x,i){return '<article><div class="index">0'+(i+1)+'</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>'}).join('')+'</div><div class="notice"><b>Certification:</b> Participants who complete eligible programmes may receive certificates of completion or professional development, subject to programme requirements. Any external accreditation will be clearly identified for the relevant programme.</div>')+'</section>'+
 bigCta('Develop the people who shape learning.','Enquire about an individual programme, an institutional cohort or customised training.');
}
function research(){
 return pageHero('Research & Insights','Evidence that informs. Insights that <span class="italic">transform.</span>','Our Research & Insights platform examines the opportunities and challenges shaping education in Africa and around the world.')+
 section(eyebrow('Research priorities')+'<h2>The questions worth asking.</h2><div class="topic-grid">'+RESEARCH.map(function(x,i){return '<article><div class="mini">0'+(i+1)+'</div><h3>'+x[0]+'</h3><p>'+x[1]+'</p></article>'}).join('')+'</div>')+
 '<section class="section quote-wash">'+inner('<div class="section-head"><div>'+eyebrow('Research & publishing')+'<h2>Our publication series.</h2></div><p>Planned editorial series and research formats. Publication dates and reports will appear here when verified material is ready.</p></div><div class="showcase">'+PUBLICATIONS.map(function(p,i){return '<article><div class="index">0'+(i+1)+' / PUBLICATION SERIES</div><h3>'+p[0]+'</h3><p>'+p[1]+'</p></article>'}).join('')+'</div><div class="notice">No unpublished research articles, fabricated reports or made-up publication dates are displayed.</div>')+'</section>'+
 '<section class="section">'+inner('<div class="research-letter"><div><div class="folio">The Future of Learning Forum / Proposed initiative</div><h3>Where evidence meets the people shaping education.</h3></div><div><p class="editorial-lede">The Future of Learning Forum brings education leaders, researchers, policymakers, development partners and educators into conversation.</p><p>Its proposed formats include an annual conference, leadership roundtables, policy dialogues, research dissemination events, masterclasses and institutional innovation showcases. Dates and speakers will be published once confirmed.</p>'+l('/contact?subject=Forum%20Enquiry','Discuss the Forum')+'</div></div>')+'</section>'+
 bigCta('Make better decisions with better evidence.','We collaborate on research, evaluation, education intelligence and evidence synthesis for specific institutional and sector questions.');
}
function impact(){
 return pageHero('Our Impact','Meaningful change. Stronger institutions. Better <span class="italic">education outcomes.</span>','We measure success by the difference transformation makes to institutions, professionals and learners.')+
 section(eyebrow('Our approach to impact')+'<h2>What meaningful progress looks like.</h2><div class="impact-list">'+IMPACT.map(function(v,i){return '<article><div class="mini">0'+(i+1)+'</div><h3>'+v[0]+'</h3><p>'+v[1]+'</p></article>'}).join('')+'</div>')+
 '<section class="section quote-wash">'+inner('<div class="split"><div>'+eyebrow('Projects & case studies')+'<h2>Turning strategy into demonstrable progress.</h2><p class="lead">Our case study library will document approved engagements through their challenge, approach, deliverables, outcomes and lessons.</p></div><div><div class="notice"><b>Evidence matters.</b> Verified projects, approved partners and measurable results will be published here as they become available. We do not present illustrative cases as real client engagements.</div><div class="actions">'+btn('/contact','Discuss a Similar Engagement','btn-dark')+'</div></div></div>')+'</section>';
}
function partnerships(){
 return pageHero('Partnerships','Transformation happens when the right people <span class="italic">work together.</span>','We build relationships across governments, foundations, education institutions, civil society and technology to advance shared education outcomes.')+
 section(eyebrow('Who we partner with')+'<h2>Connected by a shared ambition.</h2><div class="topic-grid">'+PARTNERS.map(function(v,i){return '<article><div class="mini">0'+(i+1)+'</div><h3>'+v[0]+'</h3><p>'+v[1]+'</p></article>'}).join('')+'</div>')+
 '<section class="section deep-section">'+inner('<div class="split"><div>'+eyebrow('Partnership opportunities',true)+'<h2>Building what no single organisation can do alone.</h2></div><div>'+list(['Joint education research','Education innovation projects','Professional development partnerships','Institutional transformation initiatives','AI literacy programmes','Programme implementation','Research and evaluation assignments','Multi-stakeholder education initiatives','Conferences and knowledge-sharing events'])+'</div></div>')+'</section>'+
 bigCta('Let’s build something that makes a difference.','Tell us about your institutional priorities and explore where our work might connect.',false);
}
function contact(){
 var category=['Education Strategy & Advisory','Research, MEL & Evaluation','Institutional Transformation','AI Readiness & Education Innovation','Training & Capacity Building','Leadership & Board Advisory','Partnerships','Other'];
 function field(label,name,type,required,span){return '<div class="field'+(span?' full':'')+'"><label for="'+name+'">'+label+'</label><input id="'+name+'" name="'+name+'" type="'+(type||'text')+'"'+(required?' required':'')+' autocomplete="on"></div>'}
 return pageHero('Contact','Let’s start a conversation about the <span class="italic">future of education.</span>','Whether you need strategic advisory, research support, professional learning or a partnership, we would be pleased to hear from you.')+
 section('<div class="contact-layout"><div class="info">'+eyebrow('Get in touch')+'<h2>Tell us what you are working on.</h2><p>Share your institution, your challenge and your goals. We will help identify the best next conversation.</p><h3>Email</h3><p><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></p><h3>Website</h3><p>www.empoweredstrategies.ai</p><p class="not-fake">Official telephone and office details will be published when verified.</p></div><div><h3 style="margin-bottom:25px">Institutional enquiry</h3><form class="form" id="enquiry-form">'+field('Full name','name','text',true)+field('Work email','email','email',true)+field('Organisation','organisation','text',true)+field('Professional role','role','text',false)+field('Telephone number','phone','tel',false)+field('Country','country','text',false)+'<div class="field full"><label for="category">Area of interest</label><select id="category" name="category" required><option value="">Select an area</option>'+category.map(function(x){return '<option>'+x+'</option>'}).join('')+'</select></div><div class="field full"><label for="message">Briefly describe your needs</label><textarea id="message" name="message" required minlength="10" placeholder="Your goals, challenges and any helpful context"></textarea></div><div class="field full"><label for="contact-method">Preferred contact method</label><select id="contact-method" name="contact-method"><option>Email</option><option>Phone</option></select></div><div class="submit"><button type="submit" class="btn btn-primary">Compose Enquiry Email <span class="arrow">↗</span></button><small>This opens your email app with the details. It does not submit your information to a server.</small></div></form></div></div>')+
 '<section class="section quote-wash">'+inner('<div class="section-head"><div>'+eyebrow('Enquiry categories')+'<h2>Find the right conversation.</h2></div><p>Education strategy, research and MEL, professional development, AI transformation, partnerships and general enquiries.</p></div>')+'</section>';
}
function product(path){
 var index={'/solutions/ai-ready-education-institution':0,'/solutions/institutional-transformation':1,'/solutions/education-leadership':2,'/solutions/research-mel':3}[path],p=SOLUTIONS[index];
 if(!p)return notfound();
 var custom={
 0:{heading:'Is your institution ready for the AI era?',desc:'Artificial intelligence is reshaping teaching, learning, governance and operations. The institutions that prepare today will be better positioned to navigate tomorrow.',why:'Successful AI adoption requires more than access to technology. It calls for clear priorities, informed leadership, capability development, responsible governance and a practical implementation framework.',stages:[['Assess','Examine readiness across leadership, workforce capability, infrastructure and policy.'],['Strategise','Develop an adoption roadmap aligned with the institutional mission and priorities.'],['Equip','Deliver professional development for educators and leadership teams.'],['Implement','Support responsible integration of appropriate AI practices and workflows.'],['Evaluate','Assess progress and improve what comes next.']],audience:['Primary and secondary schools','Universities and colleges','TVET and teacher training institutions','Education NGOs','Ministries and education agencies']},
 1:{heading:'Stronger institutions. Clearer strategies. Sustainable progress.',desc:'A structured approach to understanding institutional challenges, setting priorities and creating practical pathways to improvement.',why:'Every education institution has a responsibility to examine performance, strengthen its systems and prepare for changing demands. Our engagements are customised to your objectives and operating context.',stages:[['Diagnose','Understand operational, leadership and institutional realities.'],['Consult','Engage key stakeholders and identify shared priorities.'],['Plan','Build a practical transformation roadmap.'],['Implement','Support leadership alignment and institutional improvement.'],['Measure','Track progress using an appropriate performance framework.']]},
 2:{heading:'The future of education needs stronger leadership.',desc:'Build the strategic understanding and practical capabilities to guide education institutions through a changing world.',why:'School leaders, university executives, board members and education managers face changing expectations, greater institutional pressures and increasing accountability.',stages:[['Understand','Explore institutional leadership responsibilities and priorities.'],['Govern','Strengthen governance and strategic oversight.'],['Develop','Build capabilities in management, finance and people development.'],['Adapt','Lead organisational change and digital transformation.'],['Account','Use evidence to improve performance and accountability.']],audience:['School principals and directors','University executives','Education board members','Department heads','Education programme managers']},
 3:{heading:'Make better decisions with better evidence.',desc:'Research, Monitoring, Evaluation and Learning that helps programmes understand progress, identify gaps and improve their contribution to educational change.',why:'Education organisations need credible evidence throughout programme design, implementation and evaluation. We combine methodological rigour with contextual understanding and practical decision support.',stages:[['Design','Define research questions and a suitable methodology.'],['Establish','Conduct baseline studies and build MEL frameworks.'],['Monitor','Collect, interpret and review programme data.'],['Evaluate','Understand outcomes, impacts and opportunities for improvement.'],['Translate','Produce reporting and learning that informs better decisions.']]}
 };
 var c=custom[index];
 return pageHero('Solutions / '+p.title,c.heading,c.desc,true)+
 section('<div class="split split-center"><div>'+eyebrow('Why this matters')+'<h2>From institutional challenge to meaningful improvement.</h2><p class="lead">'+c.why+'</p><div class="actions">'+btn('/contact?subject='+encodeURIComponent(p.title),'Request a Consultation','btn-dark')+'</div></div><div><h3>Our areas of support</h3>'+list(p.items)+'</div></div>')+
 '<section class="section quote-wash">'+inner(eyebrow('Our engagement pathway')+'<h2>How we work.</h2><div class="numbered">'+c.stages.map(function(x,i){return '<article><div class="index">0'+(i+1)+'</div><div><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div></article>'}).join('')+'</div>')+'</section>'+
 (c.audience?section(eyebrow('Who this is for')+'<h2>Designed for the people shaping education.</h2><div class="pills">'+c.audience.map(function(x){return '<span class="pill">'+x+'</span>'}).join('')+'</div>','section-tight'):'')+
 bigCta('Let’s design the right engagement for your institution.','Tell us about your priorities and explore a practical next step with EmpowerED Strategies.');
}
function notfound(){return pageHero('Page not found','That page is not here.','Explore the site or return to the homepage.')+section(btn('/','Go to Homepage','btn-dark'))}
var titles={
 '/':'The Future of Learning Starts Here',
 '/about-us':'About Us',
 '/what-we-do':'What We Do',
 '/solutions':'Education Transformation Solutions',
 '/learning-academy':'Learning Academy',
 '/research-insights':'Research & Insights',
 '/our-impact':'Our Impact',
 '/partnerships':'Partnerships',
 '/contact':'Contact Us',
 '/solutions/ai-ready-education-institution':'AI-Ready Education Institution',
 '/solutions/institutional-transformation':'Education Institutional Transformation',
 '/solutions/research-mel':'Education Research & MEL',
 '/solutions/education-leadership':'Education Leadership Excellence'
};
function routePath(){var path=window.location.pathname.replace(/\/+$/,'')||'/';return path}
function render(){
 var p=routePath();
 var pageTypes={'/':'home','/about-us':'about','/what-we-do':'services','/solutions':'solutions','/learning-academy':'academy','/research-insights':'research','/our-impact':'impact','/partnerships':'partnerships','/contact':'contact'};
 document.body.dataset.page=pageTypes[p]||(p.indexOf('/solutions/')===0?'product':'other');
 var body=p==='/'?home():p==='/about-us'?about():p==='/what-we-do'?expertise():p==='/solutions'?solutions():p==='/learning-academy'?academy():p==='/research-insights'?research():p==='/our-impact'?impact():p==='/partnerships'?partnerships():p==='/contact'?contact():p.indexOf('/solutions/')===0?product(p):notfound();
 document.getElementById('app').innerHTML=header(p)+'<main id="main">'+body+'</main>'+footer();
 document.querySelectorAll('.brand-logo').forEach(function(img){
   function loaded(){img.closest('.brand').classList.add('asset-loaded')}
   if(img.complete&&img.naturalWidth>0){loaded()}
   else{img.addEventListener('load',loaded,{once:true});img.addEventListener('error',function(){img.remove()},{once:true})}
 });
 var title=titles[p]||'Page Not Found';
 document.title=title+' | EmpowerED Strategies';
 var description='EmpowerED Strategies: evidence-led education strategy, research, institutional transformation, leadership and professional learning.';
 if(p==='/learning-academy')description='Explore eight professional development programmes for educators, education leaders and institutional teams.';
 if(p==='/contact')description='Request strategic consultation, research support, education training or an institutional partnership with EmpowerED Strategies.';
 document.querySelector('meta[name="description"]').setAttribute('content',description);
 var canonical=document.querySelector('link[rel="canonical"]');canonical.setAttribute('href',ROOT+p);
 document.querySelector('meta[property="og:title"]').setAttribute('content',title+' | EmpowerED Strategies');
 document.querySelector('meta[property="og:description"]').setAttribute('content',description);
 document.querySelector('meta[property="og:url"]').setAttribute('content',ROOT+p);
 var t=document.querySelector('.menu-toggle');
 t.addEventListener('click',function(){
  var n=document.querySelector('.mobile-nav'),opening=!n.classList.contains('open');
  n.classList.toggle('open',opening);t.setAttribute('aria-expanded',String(opening));t.setAttribute('aria-label',opening?'Close navigation':'Open navigation');
 });
 var f=document.getElementById('enquiry-form');
 if(f)f.addEventListener('submit',function(event){
  event.preventDefault();
  if(!f.reportValidity())return;
  var d=new FormData(f),subject='EmpowerED Website Enquiry: '+d.get('category');
  var labels=[['Full Name','name'],['Organisation','organisation'],['Professional Role','role'],['Work Email','email'],['Telephone','phone'],['Country','country'],['Area of Interest','category'],['Preferred Contact','contact-method'],['Requirements','message']];
  var message=labels.map(function(x){return x[0]+': '+(d.get(x[1])||'Not provided')}).join('\n\n');
  window.location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(message);
 });
 var params=new URLSearchParams(window.location.search);
 if(p==='/contact'&&params.has('subject')){
  var x=document.getElementById('category');
  if(x){var s=params.get('subject').toLowerCase();if(s.indexOf('academy')>=0)x.value='Training & Capacity Building';else if(s.indexOf('research')>=0)x.value='Research, MEL & Evaluation';else if(s.indexOf('ai')>=0)x.value='AI Readiness & Education Innovation';}
 }
 if(window.location.hash){var target=document.getElementById(window.location.hash.slice(1));if(target)target.scrollIntoView();}
}
document.addEventListener('click',function(e){
 var a=e.target.closest('a[href]');if(!a)return;
 var u;
 try{u=new URL(a.href,window.location.origin)}catch(err){return}
 if(u.origin!==window.location.origin||a.hasAttribute('download')||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||a.target==='_blank')return;
 if(u.pathname===window.location.pathname&&u.search===window.location.search&&u.hash){return}
 e.preventDefault();history.pushState(null,'',u.pathname+u.search+u.hash);render();window.scrollTo(0,0);
});
window.addEventListener('popstate',function(){render();window.scrollTo(0,0)});
render();
})();
