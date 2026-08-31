/* ============================================================
   Help & Solutions — main.js
   i18n (ES default / EN), mobile nav, navbar scroll, reveals
   ============================================================ */

const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',

    // Hero
    'hero.eyebrow': 'Consultoría empresarial · Bogotá, Colombia',
    'hero.title': 'Decisiones claras. Empresas que crecen.',
    'hero.subtitle': 'Consultoría contable, tributaria, financiera y tecnológica para empresas que operan en Colombia y en el mundo.',
    'hero.cta1': 'Hablemos',
    'hero.cta2': 'Conozca nuestros servicios',

    // Intro
    'intro.eyebrow': 'Quiénes somos',
    'intro.statement': 'Combinamos rigor técnico, ética profesional y tecnología para que su empresa tome mejores decisiones.',
    'intro.f1': 'líneas de servicio integradas en un solo aliado',
    'intro.f2': 'sectores estratégicos: financiero, seguros y salud',
    'intro.f3': 'atención bilingüe, con alcance nacional e internacional',

    // Services / practices
    'services.tag': 'Servicios',
    'services.title': 'Tres prácticas, una sola firma',
    'services.subtitle': 'Un portafolio integral que cubre las finanzas, las personas, las operaciones y la tecnología de su empresa.',
    'areas.a1.title': 'Finanzas y cumplimiento',
    'areas.a1.desc': 'Información financiera confiable y cumplimiento normativo para decidir con seguridad.',
    'areas.a2.title': 'Personas y operaciones',
    'areas.a2.desc': 'Talento humano y procesos externalizados que liberan a su empresa para crecer.',
    'areas.a3.title': 'Tecnología e innovación',
    'areas.a3.desc': 'Estrategia y soluciones digitales para transformar su operación.',
    'services.s1.title': 'Servicios contables',
    'services.s1.desc': 'Contabilidad completa y confiable, con información oportuna para la toma de decisiones.',
    'services.s2.title': 'Asesoría tributaria',
    'services.s2.desc': 'Planeación y cumplimiento de obligaciones fiscales dentro del marco legal.',
    'services.s3.title': 'Servicios financieros',
    'services.s3.desc': 'Análisis, proyecciones y estudios de factibilidad financiera.',
    'services.s4.title': 'Gestión empresarial',
    'services.s4.desc': 'Constitución, fusión, escisión, disolución y liquidación de empresas.',
    'services.s5.title': 'Recursos humanos',
    'services.s5.desc': 'Selección, contratación, capacitación y administración de personal.',
    'services.s6.title': 'Software empresarial',
    'services.s6.desc': 'Diseño, implementación y soporte de programas administrativos, financieros, tributarios y contables.',
    'services.s7.title': 'Asesoría en contratos',
    'services.s7.desc': 'Negociación, revisión y elaboración de contratos, incluidos sus aspectos jurídicos.',
    'services.s8.title': 'BPO & Offshoring',
    'services.s8.desc': 'Call center, mesa de ayuda, cobranza, televentas y atención al cliente, nacional e internacional.',
    'services.s9.title': 'Consultoría tecnológica',
    'services.s9.desc': 'Consultoría en estrategia e innovación tecnológica para hacer crecer su negocio.',

    // Values
    'values.tag': 'Nuestros principios',
    'values.title': 'Principios que guían nuestro trabajo',
    'values.v1': 'Calidad',
    'values.v1d': 'En cada entregable y en cada interacción.',
    'values.v2': 'Ética profesional',
    'values.v2d': 'Actuamos con integridad y transparencia.',
    'values.v3': 'Eficacia',
    'values.v3d': 'Resultados que cumplen lo prometido.',
    'values.v4': 'Eficiencia',
    'values.v4d': 'Procesos que optimizan tiempo y recursos.',
    'values.v5': 'Honestidad',
    'values.v5d': 'Relaciones basadas en la confianza.',
    'values.v6': 'Cumplimiento',
    'values.v6d': 'Rigor normativo y compromiso con los plazos.',

    // About
    'about.tag': 'Nosotros',
    'about.title': 'Su aliado estratégico en Colombia y el mundo',
    'about.p1': 'En Help & Solutions prestamos servicios contables, de asesoría tributaria, financieros y de gestión empresarial, así como servicios de BPO&O (Business Process Outsourcing & Offshoring) a nivel nacional e internacional.',
    'about.p2': 'Contribuimos al crecimiento de la profesión a través de la actualización, capacitación e investigación constante, logrando pleno equilibrio entre rentabilidad y beneficio para nuestros clientes.',
    'about.p3': 'Atendemos inicialmente los sectores financiero, de seguros y de salud, con capacidad de extender nuestros servicios a otros sectores.',
    'about.b1': 'Sector financiero',
    'about.b2': 'Sector seguros',
    'about.b3': 'Sector salud',
    'about.b4': 'Alcance internacional',

    // Contact
    'contact.tag': 'Contacto',
    'contact.title': '¿Listo para impulsar su empresa?',
    'contact.subtitle': 'Escríbanos y uno de nuestros asesores le atenderá lo antes posible. Estamos aquí para ayudarle.',
    'contact.whatsapp': 'Escríbenos por WhatsApp',
    'contact.email': 'Envíanos un correo',
    'contact.note': 'También puede escribirnos directamente a',

    // Footer
    'footer.about': 'Servicios contables, tributarios, financieros, de gestión empresarial, BPO&O y consultoría tecnológica.',
    'footer.links': 'Enlaces',
    'footer.legal': 'Legal',
    'footer.policy': 'Política de tratamiento de datos personales',
    'footer.rights': 'Todos los derechos reservados.',

    // Policy page
    'policy.title': 'Política de Tratamiento de Datos Personales',
    'policy.subtitle': 'En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes de la República de Colombia.',
    'policy.back': 'Volver al inicio',
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About us',
    'nav.contact': 'Contact',

    // Hero
    'hero.eyebrow': 'Business consulting · Bogotá, Colombia',
    'hero.title': 'Clear decisions. Growing businesses.',
    'hero.subtitle': 'Accounting, tax, financial and technology consulting for companies operating in Colombia and worldwide.',
    'hero.cta1': "Let's talk",
    'hero.cta2': 'Explore our services',

    // Intro
    'intro.eyebrow': 'Who we are',
    'intro.statement': 'We combine technical rigor, professional ethics and technology so your business makes better decisions.',
    'intro.f1': 'service lines integrated in a single partner',
    'intro.f2': 'strategic sectors: financial, insurance and healthcare',
    'intro.f3': 'bilingual service, with national and international reach',

    // Services / practices
    'services.tag': 'Services',
    'services.title': 'Three practices, one firm',
    'services.subtitle': "A comprehensive portfolio covering your company's finances, people, operations and technology.",
    'areas.a1.title': 'Finance & compliance',
    'areas.a1.desc': 'Reliable financial information and regulatory compliance to decide with confidence.',
    'areas.a2.title': 'People & operations',
    'areas.a2.desc': 'Human talent and outsourced processes that free your company to grow.',
    'areas.a3.title': 'Technology & innovation',
    'areas.a3.desc': 'Strategy and digital solutions to transform your operation.',
    'services.s1.title': 'Accounting services',
    'services.s1.desc': 'Complete and reliable accounting, with timely information for decision making.',
    'services.s2.title': 'Tax advisory',
    'services.s2.desc': 'Planning and compliance of tax obligations within the legal framework.',
    'services.s3.title': 'Financial services',
    'services.s3.desc': 'Analysis, projections and financial feasibility studies.',
    'services.s4.title': 'Business management',
    'services.s4.desc': 'Incorporation, merger, spin-off, dissolution and liquidation of companies.',
    'services.s5.title': 'Human resources',
    'services.s5.desc': 'Recruitment, hiring, training and personnel administration.',
    'services.s6.title': 'Business software',
    'services.s6.desc': 'Design, implementation and support of administrative, financial, tax and accounting software.',
    'services.s7.title': 'Contract advisory',
    'services.s7.desc': 'Negotiation, review and drafting of contracts, including their legal aspects.',
    'services.s8.title': 'BPO & Offshoring',
    'services.s8.desc': 'Call center, help desk, collections, telesales and customer service, nationally and internationally.',
    'services.s9.title': 'Technology consulting',
    'services.s9.desc': 'Technology strategy and innovation consulting to grow your business.',

    // Values
    'values.tag': 'Our principles',
    'values.title': 'Principles that guide our work',
    'values.v1': 'Quality',
    'values.v1d': 'In every deliverable and every interaction.',
    'values.v2': 'Professional ethics',
    'values.v2d': 'We act with integrity and transparency.',
    'values.v3': 'Effectiveness',
    'values.v3d': 'Results that deliver on our promises.',
    'values.v4': 'Efficiency',
    'values.v4d': 'Processes that optimize time and resources.',
    'values.v5': 'Honesty',
    'values.v5d': 'Relationships built on trust.',
    'values.v6': 'Compliance',
    'values.v6d': 'Regulatory rigor and commitment to deadlines.',

    // About
    'about.tag': 'About us',
    'about.title': 'Your strategic partner in Colombia and worldwide',
    'about.p1': 'At Help & Solutions we provide accounting, tax advisory, financial and business management services, as well as BPO&O (Business Process Outsourcing & Offshoring) services nationally and internationally.',
    'about.p2': 'We contribute to the growth of the profession through constant updating, training and research, achieving full balance between profitability and benefit for our clients.',
    'about.p3': 'We initially serve the financial, insurance and healthcare sectors, with the capacity to extend our services to other industries.',
    'about.b1': 'Financial sector',
    'about.b2': 'Insurance sector',
    'about.b3': 'Healthcare sector',
    'about.b4': 'International reach',

    // Contact
    'contact.tag': 'Contact',
    'contact.title': 'Ready to boost your business?',
    'contact.subtitle': 'Write to us and one of our advisors will assist you as soon as possible. We are here to help.',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.email': 'Send us an email',
    'contact.note': 'You can also write to us directly at',

    // Footer
    'footer.about': 'Accounting, tax, financial, business management, BPO&O and technology consulting services.',
    'footer.links': 'Links',
    'footer.legal': 'Legal',
    'footer.policy': 'Personal data processing policy',
    'footer.rights': 'All rights reserved.',

    // Policy page
    'policy.title': 'Personal Data Processing Policy',
    'policy.subtitle': 'In compliance with Law 1581 of 2012, Decree 1377 of 2013 and other applicable regulations of the Republic of Colombia.',
    'policy.back': 'Back to home',
  },
};

const LANG_KEY = 'hs-lang';

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === 'en' ? 'en' : 'es'; // Spanish by default
}

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Language-specific content blocks (used on the policy page)
  document.querySelectorAll('[data-lang-block]').forEach((el) => {
    el.hidden = el.getAttribute('data-lang-block') !== lang;
  });

  // Toggle label shows the language you can switch TO
  document.querySelectorAll('.lang-toggle .lang-label').forEach((el) => {
    el.textContent = lang === 'es' ? 'EN' : 'ES';
  });

  localStorage.setItem(LANG_KEY, lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // i18n init + toggle
  applyLang(getLang());
  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLang(getLang() === 'es' ? 'en' : 'es');
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }
});
