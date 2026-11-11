/* Language switch (English <-> Spanish).
   The page is written in English. Each pair below is [English, Spanish].
   To change a translation, edit the Spanish text (second item) of its pair. */
(() => {
  const PAIRS = [
    // Meta / accessibility
    ["Gabriel Ortega — Portfolio", "Gabriel Ortega — Portafolio"],
    ["Gabriel Ortega's personal portfolio: technology, projects, skills, and continuous learning.", "Portafolio personal de Gabriel Ortega: tecnología, proyectos, habilidades y aprendizaje continuo."],
    ["Student developer. Projects, skills, and certifications.", "Estudiante desarrollador. Proyectos, habilidades y certificaciones."],
    ["Portrait of Gabriel Ortega next to his name and the text student developer", "Retrato de Gabriel Ortega junto a su nombre y el texto estudiante desarrollador"],
    ["Go to home", "Ir al inicio"],
    ["Open menu", "Abrir menú"],
    ["Main navigation", "Navegación principal"],
    ["Find me online", "Encuéntrame en línea"],
    ["GitHub profile", "Perfil de GitHub"],
    ["LinkedIn profile", "Perfil de LinkedIn"],
    ["Send an email", "Enviar un correo"],
    ["Professional portrait of Gabriel Ortega", "Retrato profesional de Gabriel Ortega"],
    ["Portfolio highlights", "Datos destacados del portafolio"],
    ["Filter projects", "Filtrar proyectos"],
    ["Watch the Voces de ayuda demo video on YouTube", "Ver el video demo de Voces de ayuda en YouTube"],
    ["Strong skills", "Habilidades fuertes"],
    ["Intermediate skills", "Habilidades intermedias"],
    ["Basic skills", "Habilidades básicas"],
    ["View Excel Associate certificate (PDF)", "Ver certificado de Excel Associate (PDF)"],
    ["Verify Excel Associate certificate on Certiport", "Verificar certificado de Excel Associate en Certiport"],
    ["View Excel Expert certificate (PDF)", "Ver certificado de Excel Expert (PDF)"],
    ["Verify Excel Expert certificate on Certiport", "Verificar certificado de Excel Expert en Certiport"],
    ["View Basic Personal Finance Course certificate (PDF)", "Ver certificado del Curso Básico de Finanzas Personales (PDF)"],
    ["View English Conversation Club certificate (PDF)", "Ver certificado del Club de Conversación en Inglés (PDF)"],
    ["Contact links", "Enlaces de contacto"],
    ["Back to top", "Volver arriba"],
    ["Switch language to Spanish", "Cambiar el idioma a inglés"],

    // Navigation
    ["Home", "Inicio"],
    ["About me", "Sobre mí"],
    ["Projects", "Proyectos"],
    ["Skills", "Habilidades"],
    ["Contact", "Contacto"],

    // Hero
    ["STUDENT · TECHNOLOGY · CURIOSITY", "ESTUDIANTE · TECNOLOGÍA · CURIOSIDAD"],
    ["Hello, I'm", "Hola, soy"],
    ["I am a", "Soy"],
    ["Driven by curiosity.", "Impulsado por la curiosidad."],
    ["Inspired by purpose.", "Inspirado por el propósito."],
    ["Built for the future.", "Hecho para el futuro."],
    ["I enjoy learning, creating solutions, and discovering how technology can open new possibilities.", "Disfruto aprender, crear soluciones y descubrir cómo la tecnología puede abrir nuevas posibilidades."],
    ["Explore my projects", "Explora mis proyectos"],
    ["Get to know me", "Conóceme"],
    ["Email", "Correo"],
    ["PERSONAL PORTFOLIO", "PORTAFOLIO PERSONAL"],
    ["PROFILE / 2026", "PERFIL / 2026"],
    ["CREATIVE MINDSET ↗", "MENTE CREATIVA ↗"],
    ["Always", "Siempre"],
    ["learning", "aprendiendo"],
    ["CURIOSITY IN MOTION", "CURIOSIDAD EN MOVIMIENTO"],
    ["SCROLL TO EXPLORE", "DESLIZA PARA EXPLORAR"],
    ["WEB PROJECTS", "PROYECTOS WEB"],
    ["OFFICE TOOLS", "HERRAMIENTAS DE OFICINA"],
    ["WILLINGNESS TO LEARN", "GANAS DE APRENDER"],

    // About
    ["02 — ABOUT ME", "02 — SOBRE MÍ"],
    ["Learning is the", "Aprender es el"],
    ["first step.", "primer paso."],
    ["My journey into technology began with an opportunity that sparked my curiosity and encouraged me to keep growing.", "Mi camino en la tecnología comenzó con una oportunidad que despertó mi curiosidad y me animó a seguir creciendo."],
    ["How I got into technology", "Cómo llegué a la tecnología"],
    ["I discovered the world of technology through the ¡Supérate! ADOC scholarship program. There, I started learning computer science and exploring different digital tools that have helped me develop new skills and expand my knowledge.", "Descubrí el mundo de la tecnología gracias al programa de becas ¡Supérate! ADOC. Ahí empecé a aprender informática y a explorar distintas herramientas digitales que me han ayudado a desarrollar nuevas habilidades y ampliar mis conocimientos."],
    ["MY BEGINNING", "MI COMIENZO"],
    ["What motivates me", "Lo que me motiva"],
    ["I am motivated by the way technology makes our daily activities easier and helps us find new ways to solve problems. It is always changing, so I believe it is important to adapt, keep learning, and use new ideas to help society grow.", "Me motiva la forma en que la tecnología facilita nuestras actividades diarias y nos ayuda a encontrar nuevas maneras de resolver problemas. Cambia constantemente, así que creo que es importante adaptarse, seguir aprendiendo y usar nuevas ideas para ayudar a que la sociedad crezca."],
    ["MY MOTIVATION", "MI MOTIVACIÓN"],
    ["My future goals", "Mis metas a futuro"],
    ["In the future, I would like to become a psychologist and use technology as a tool to help people. After building projects like Voces de ayuda and HandBridge, I\u2019ve seen how digital solutions can reach those who need support. I want to keep growing, stay active through sports, and strengthen teamwork, empathy, and communication along the way.", "En el futuro, me gustaría convertirme en psicólogo y usar la tecnología como herramienta para ayudar a las personas. Después de crear proyectos como Voces de ayuda y HandBridge, he visto cómo las soluciones digitales pueden llegar a quienes necesitan apoyo. Quiero seguir creciendo, mantenerme activo a través del deporte y fortalecer el trabajo en equipo, la empatía y la comunicación en el camino."],
    ["MY NEXT CHAPTER", "MI SIGUIENTE CAPÍTULO"],

    // Projects
    ["03 — PROJECTS", "03 — PROYECTOS"],
    ["Ideas taking", "Ideas tomando"],
    ["shape.", "forma."],
    ["Here are some projects where I have practiced what I have learned and explored different ways to create with technology.", "Estos son algunos proyectos donde he practicado lo que he aprendido y explorado distintas formas de crear con tecnología."],
    ["05 PROJECTS", "05 PROYECTOS"],
    ["BUILT WITH PURPOSE", "HECHO CON PROPÓSITO"],
    ["All projects", "Todos los proyectos"],
    ["Environment", "Medio ambiente"],
    ["Digital safety", "Seguridad digital"],
    ["Community", "Comunidad"],
    ["SMALL ACTIONS · BIG IMPACT", "PEQUEÑAS ACCIONES · GRAN IMPACTO"],
    ["THINK BEFORE YOU CLICK", "PIENSA ANTES DE HACER CLIC"],
    ["SORT SMART · RECYCLE BETTER", "CLASIFICA BIEN · RECICLA MEJOR"],
    ["YOUR HELP IN ONE CLICK", "TU AYUDA EN UN CLIC"],
    ["ONE TAP · THE HELP YOU NEED", "UN TOQUE · LA AYUDA QUE NECESITAS"],
    ["01 / WEB PROJECT", "01 / PROYECTO WEB"],
    ["02 / WEB PROJECT", "02 / PROYECTO WEB"],
    ["03 / WEB PROJECT", "03 / PROYECTO WEB"],
    ["04 / WEB PROJECT", "04 / PROYECTO WEB"],
    ["An educational website that raises awareness about environmental care, explains major environmental problems, and shares simple tips to protect our planet.", "Un sitio web educativo que crea conciencia sobre el cuidado del medio ambiente, explica los principales problemas ambientales y comparte consejos sencillos para proteger nuestro planeta."],
    ["What I practiced", "Lo que practiqué"],
    ["Building an educational layout, organizing information, and presenting practical environmental tips.", "Crear un diseño educativo, organizar información y presentar consejos ambientales prácticos."],
    ["Explore project", "Explorar proyecto"],
    ["View code", "Ver código"],
    ["An educational platform about digital safety. It helps users recognize online threats and learn how to protect their personal information.", "Una plataforma educativa sobre seguridad digital. Ayuda a los usuarios a reconocer amenazas en línea y a aprender cómo proteger su información personal."],
    ["Explaining digital risks in a clear way and organizing useful information for online safety.", "Explicar los riesgos digitales de forma clara y organizar información útil para la seguridad en línea."],
    ["A web-based recycling assistant that uses image recognition to classify materials into paper, cardboard, plastic, glass, and non-recyclable items.", "Un asistente de reciclaje web que usa reconocimiento de imágenes para clasificar materiales en papel, cartón, plástico, vidrio y residuos no reciclables."],
    ["Designing a web experience focused on identifying recyclable materials and making recycling easier to understand.", "Diseñar una experiencia web enfocada en identificar materiales reciclables y hacer más fácil entender el reciclaje."],
    ["A volunteering platform that connects people with foundations working on beach cleanups, children's homes, animal shelters, and elder care. Built with my team during the scholarship; the login is a visual prototype.", "Una plataforma de voluntariado que conecta a las personas con fundaciones que trabajan en limpiezas de playas, hogares de niños, refugios de animales y cuidado de adultos mayores. Creada con mi equipo durante la beca; el inicio de sesión es un prototipo visual."],
    ["Working as a team, making sure the code ran without errors, and keeping an open mind when something failed.", "Trabajar en equipo, asegurar que el código funcionara sin errores y mantener la mente abierta cuando algo fallaba."],
    ["05 / POWER APPS", "05 / POWER APPS"],
    ["A Power Apps app for older adults with limited resources or who need support. Users choose the kind of help they need, such as food, medicine, or other resources. Created for a hackathon project at Centro ¡Supérate! ADOC.", "Una aplicación de Power Apps para adultos mayores con recursos limitados o que necesitan apoyo. Los usuarios eligen el tipo de ayuda que necesitan, como alimentos, medicinas u otros recursos. Creada para un proyecto de hackatón del Centro ¡Supérate! ADOC."],
    ["Building an app with buttons and connected screens, and creating a list in SharePoint.", "Crear una aplicación con botones y pantallas conectadas, y crear una lista en SharePoint."],
    ["Watch demo", "Ver demo"],

    // Skills
    ["04 — SKILLS", "04 — HABILIDADES"],
    ["Tools to keep", "Herramientas para"],
    ["growing.", "seguir creciendo."],
    ["CERTIFICATIONS", "CERTIFICACIONES"],
    ["TECHNICAL SKILLS", "HABILIDADES TÉCNICAS"],
    ["STRONG", "FUERTE"],
    ["INTERMEDIATE", "INTERMEDIO"],
    ["BASIC", "BÁSICO"],
    ["PERSONAL SKILLS", "HABILIDADES PERSONALES"],
    ["Teamwork", "Trabajo en equipo"],
    ["Leadership", "Liderazgo"],
    ["Communication", "Comunicación"],
    ["Empathy", "Empatía"],
    ["Solidarity", "Solidaridad"],
    ["Problem-solving", "Resolución de problemas"],
    ["Continuous learning", "Aprendizaje continuo"],
    ["Credential ID: cnc3-uSze", "ID de credencial: cnc3-uSze"],
    ["Credential ID: y4uQ-DkNp", "ID de credencial: y4uQ-DkNp"],
    ["NOVEMBER 2025", "NOVIEMBRE 2025"],
    ["MARCH 2026", "MARZO 2026"],
    ["APRIL 2026", "ABRIL 2026"],
    ["OCTOBER 2026", "OCTUBRE 2026"],
    ["View PDF", "Ver PDF"],
    ["Verify", "Verificar"],
    ["Basic Personal Finance Course", "Curso Básico de Finanzas Personales"],
    ["English Conversation Club", "Club de Conversación en Inglés"],
    ["TELUS Digital · Certificate of participation", "TELUS Digital · Certificado de participación"],
    ["KEEP LEARNING.", "SIGUE APRENDIENDO."],
    ["KEEP BUILDING.", "SIGUE CONSTRUYENDO."],
    ["KEEP MOVING.", "SIGUE AVANZANDO."],

    // Contact + footer
    ["05 — CONTACT", "05 — CONTACTO"],
    ["Have an idea, an opportunity, or just want to connect?", "¿Tienes una idea, una oportunidad o solo quieres conectar?"],
    ["OPEN TO LEARNING AND COLLABORATION", "ABIERTO A APRENDER Y COLABORAR"],
    ["Let's make", "Hagamos que"],
    ["something", "algo"],
    ["happen.", "suceda."],
    ["Email me", "Escríbeme"],
    ["Open to learning, collaborating, and creating.", "Abierto a aprender, colaborar y crear."],
    ["DESIGNED WITH CURIOSITY · 2026", "DISEÑADO CON CURIOSIDAD · 2026"],
    ["BACK TO TOP ↑", "VOLVER ARRIBA ↑"]
  ];

  const toEs = new Map(PAIRS);
  const toEn = new Map(PAIRS.map(([en, es]) => [es, en]));
  const SKIP = 'script,style,svg,[data-no-i18n],#typedRole';
  const STORAGE_KEY = 'portfolio-language';
  const toggle = document.querySelector('.lang-toggle');

  const translateValue = (value, lang) => {
    const map = lang === 'es' ? toEs : toEn;
    const trimmed = value.trim();
    return map.has(trimmed) ? value.replace(trimmed, () => map.get(trimmed)) : value;
  };

  const translatePage = lang => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!node.nodeValue.trim() || node.parentElement?.closest(SKIP)) return;
      node.nodeValue = translateValue(node.nodeValue, lang);
    });
    document.querySelectorAll('[aria-label],[alt]').forEach(el => {
      ['aria-label', 'alt'].forEach(attr => {
        if (el.hasAttribute(attr)) el.setAttribute(attr, translateValue(el.getAttribute(attr), lang));
      });
    });
    document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"]').forEach(meta => {
      meta.setAttribute('content', translateValue(meta.getAttribute('content') || '', lang));
    });
    document.title = translateValue(document.title, lang);
  };

  const setLanguage = (lang, remember = true) => {
    document.documentElement.lang = lang;
    translatePage(lang);
    if (toggle) {
      toggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar el idioma a inglés' : 'Switch language to Spanish');
      toggle.setAttribute('aria-pressed', String(lang === 'es'));
      toggle.querySelectorAll('[data-lang]').forEach(option => option.classList.toggle('is-on', option.dataset.lang === lang));
    }
    if (remember) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* storage can be blocked */ }
    }
    document.dispatchEvent(new CustomEvent('portfolio:language', { detail: { lang } }));
  };

  toggle?.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'es' ? 'en' : 'es');
  });

  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (error) { /* ignore */ }
  if (saved === 'es') setLanguage('es', false);
})();
