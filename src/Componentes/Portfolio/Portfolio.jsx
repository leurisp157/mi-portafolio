import React, { useState } from 'react';
import PortfolioNav from './PortfolioNav';
import InicioSection from './sections/InicioSection';
import ResumenSection from './sections/ResumenSection';
import HabilidadesSection from './sections/HabilidadesSection';
import ExperienciaSection from './sections/ExperienciaSection';
import FormacionSection from './sections/FormacionSection';
import ProyectosSection from './sections/ProyectosSection';
import CertificacionesSection from './sections/CertificacionesSection';
import LogrosSection from './sections/LogrosSection';
import ReferenciasSection from './sections/ReferenciasSection';
import './Portfolio.css';

import imagenLeurisPP from '../Imagenes/LeurisPP.png';
import imagenLeurisConGuitarra from '../Imagenes/LeuriscConGuitarra.jpg'
import imagenOMB from '../Imagenes/Proyectos/OperacionesMatemáticasBásicas.png';
import imagenNaturalezaApp from '../Imagenes/Proyectos/NaturalezaApp.png';
import imagenAprendeIngles from '../Imagenes/Proyectos/AprendeIngles.png';
import imagenTeoremaDePitagoras from '../Imagenes/Proyectos/TeoremaDePitagoras.png';
import imagenFormulaCuadratica from '../Imagenes/Proyectos/FormulaCuadratica.png';
import imagenInteresSimple from '../Imagenes/Proyectos/InteresSimple.png';
import imagenAdivinaElNumero from '../Imagenes/Proyectos/AdivinaElNúmero.png';
import imagenAreaPerimetroCirculo from '../Imagenes/Proyectos/AreaYPerimetroDelCírculo.png';
import imagenEstadisticaBasica from '../Imagenes/Proyectos/EstadisticaBasica.png';
import imagenRegresionLinealSimple from '../Imagenes/Proyectos/RegresionLinealSimple.png';
import imagenCorrelacionPearson from '../Imagenes/Proyectos/CorrelacionDePearson.png';
import imagenEstadoDeResultados from '../Imagenes/Proyectos/EstadoDeResultados.png';
import imagenLibroDiarioContable from '../Imagenes/Proyectos/LibroDiarioContable.png';

import imagenLIstaDeTaeasWeb from '../Imagenes/Proyectos/Pagina_web/ListaDeTarea.png';
import imagenAdivinaElNumeroWeb from '../Imagenes/Proyectos/Pagina_web/AdivinaElNumero.png';
import imagenConversorDeUnidadesWeb from '../Imagenes/Proyectos/Pagina_web/ConversorDeUnidades.png';
import imgaenCalculadoraMatematicaWeb from '../Imagenes/Proyectos/Pagina_web/CalculadoraMatematica.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Datos del portafolio
  const portfolioData = {
    informacionPersonal: {
      nombre: "Leuris Peña Polonia",
      foto: imagenLeurisPP,
      correo: "leuirip157@gmail.com",
      telefono: "829-792-0986",
      linkedin: "https://www.linkedin.com/in/leuris-pe%C3%B1a-polonia/",
      sitioWeb: "https://github.com/leurisp157"
    },
    resumen: "Soy un apasionado desarrollador tecnológico con una sólida formación académica en informática y una amplia experiencia técnica en múltiples lenguajes de programación. Mi carrera combina habilidades técnicas avanzadas con una excelente capacidad de trabajo en equipo y liderazgo situacional.",
    objetivo: "Destaco por mi adaptabilidad, pensamiento crítico y orientación al cliente, lo que me permite abordar proyectos complejos con soluciones creativas e innovadoras. Mi experiencia previa en gestión documental me ha dotado de una excelente atención al detalle y capacidad de organización que aplico en cada proyecto tecnológico.",
    habilidades: {
      tecnicas: ["React", "JavaScript", "CSS", "HTML", "Node.js","SQL (MySQL, PostgreSQL)","Python","Git y GitHub","MongoDB","Diseño y UX/UI","Lenguajes de Programación c",
        "Lenguajes de Programación c++","Lenguajes de Programación c#", "Lenguajes de Programación Java","Lenguajes de Programación PHP","Lenguajes de Programación Python",
        "Lenguajes de Programación Dart","Lenguajes de Programación Kotlin","Lenguajes de Programación Swift"],

      blandas: ["Comunicación", "Trabajo en equipo", "Liderazgo", "Resolución de problemas", "Adaptabilidad", "Pensamiento crítico", "Creatividad", "Gestión del tiempo",
         "Atención al detalle", "Liderazgo situacional", "Empatía", "Negociación", "Toma de decisiones", "Pensamiento estratégico", "Orientación al cliente", "Habilidades interpersonales"],


      idiomas: ["Español (nativo)", "Inglés (muy basico)",],
      herramientas: ["Figma (diseño de interfaces, prototipado, colaboración en tiempo real)", "Adobe Photoshop (edición de imágenes, diseño gráfico)", "Adobe Illustrator (gráficos vectoriales)",
         "Sketch (diseño de interfaces, macOS)", "Adobe XD (diseño y prototipado UX/UI)", "Visual Studio Code (extensiones, debugging, integración Git)", "Sublime Text (edición de código, personalización)",
         "Git (control de versiones, colaboración en proyectos)", "GitHub (almacenamiento de código, colaboración, gestión de proyectos)", "Postman (pruebas de API, documentación)",]
    },
    experiencia: [
      {
        empresa: "INSTITUTO ONCOLÓGICO Y DE ESPECIALIDADES DEL NORDESTE",
        puesto: "Auxiliar de archivo",
        periodo: "2018 - 2022",

        funciones: ["Clasificación y organización de documentos según sistemas establecidos", "Codificación de archivos para fácil identificación y recuperación",
           "Digitalización de documentos físicos", "Mantenimiento de la confidencialidad de la información", "Colaboración con otros departamentos para asegurar el flujo de información",
           "Ubicación adecuada de documentos en estanterías y carpetas", "Mantenimiento de condiciones óptimas de conservación de los archivos", "Control de acceso y seguridad de los archivos"],

        logros: ["permanecer intachable", "Respectar a mi superiores", "Mantener un ambiente de trabajo positivo",
           "Colaborar con el equipo de trabajo", "Mantener la confidencialidad de la información",
            "Cumplir con las políticas y procedimientos de la empresa", "Contribuir al éxito del equipo"
        ]
      }
    ],
     formacion: [
      {
        titulo: "Licenciatura en Informática",
        institucion: "Universidad Autónoma de Santo Domingo",
        periodo: "2019 - Actualidad",
        comentario: "Solo flata hacer la tesis para graduarme"
      },
      {
        titulo: "Tecnico en Informatica",
        institucion: "VICENTE AQUILINO SANTOS",
        periodo: "2015 - 2018",
      },
      
      {
        titulo: "Bachillerato",
        institucion: "Liceo Coronel Rafael Tomás Fernández Domínguez",
        periodo: "2014 - 2015"
      },
      {
        titulo: "Primaria",
        institucion: "San Francisco",
        periodo: "2005 - 2014"
      },
      {
        titulo: "Programa del centro de desarrollo infantil Maestro de Galilea",
        institucion: "Concilio Biblico Cristiano",
        periodo: "2003 - 2021",
        diploma: "Diploma en educación infantil"
      }
    ],
     certificaciones: [
      {
        nombre: "Curador de datos",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/19Z0Y7JPJCqa3iFc2-hSCsCAUO34Wtfv_/view?usp=sharing"
      },
      {
        nombre: "ETICA LABORAL",
        entidad: "INFOTEP",
        fecha: "2020",
        enlace: "https://drive.google.com/file/d/1oMaDAMiQOhuKvF_k_Jv5Saq3oyRCsTvt/view?usp=sharing"
      },
      {
        nombre: "Finder",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/11W4SC6eTMK2ErEGpibYa--srPE-E3fMM/view?usp=sharing"
      },
      {
        nombre: "INTELIGENCIA FINANCIERA",
        entidad: "INFOTEP",
        fecha: "2019",
        enlace: "https://drive.google.com/file/d/1V2Vz9fOucqVAAayoLgqZL_3zWVnDDUIw/view?usp=sharing"
      },
      {
        nombre: "Programador (orientado a objetos)",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1HEGFzMaeFQjbpV1PyArGjvNcmM1O1LBy/view?usp=sharing"
      },
      {
        nombre: "MANEJO DE CONFLICTOS EN CONTEXTOS LABORALES",
        entidad: "INFOTEP",
        fecha: "2019",
        enlace: "https://drive.google.com/file/d/1f4jy-v1cBx8EqHguluKYvGGCsvv4Iv2g/view?usp=sharing"
      },
      {
        nombre: "Analista de necesidades de formación",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1QhK_dc9YfW2yGUbbXzRsomSmZRURZgAN/view?usp=sharing"
      },
      {
        nombre: "MANEJO DE EXPEDIENTES CLINICOS",
        entidad: "INFOTEP",
        fecha: "2018",
        enlace: "https://drive.google.com/file/d/14dyNUmWWJDap_pQO8irfCMsv7NGmtgAt/view?usp=sharing"
      },
      {
        nombre: "Administrador de plataformas digitales de aprendizaje",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1qfTNEcvlSfk5kC0PCT1m7FhBfKLOonPb/view?usp=sharing"
      },
      {
        nombre: "ORTOGRAFIA Y REDACCION DE INFORMES TECNICOS",
        entidad: "INFOTEP",
        fecha: "2020",
        enlace: "https://drive.google.com/file/d/1dG7_-90qlc3yH9xwpDrP9Ivqdvuvycrg/view?usp=sharing"
      },
      {
        nombre: "Cómputo básico",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1q2cfujMuw9-DjwmxZVQvmxGIyGlR7HoC/view?usp=sharing"
      },
      {
        nombre: "SENSIBILIZACION DE LOS SERVICIOS DE SALUD",
        entidad: "INFOTEP",
        fecha: "2018",
        enlace: "https://drive.google.com/file/d/1dhJXwE4KpANi_ft10tbUWHn4VaW2lHHB/view?usp=sharing"
      },
      {
        nombre: "Prácticas de ofimática",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/10hneBvHks6Kb4TbVV8SmWARLWI28KYkD/view?usp=sharing"
      },
      {
        nombre: "TRABAJO EN EQUIPO",
        entidad: "INFOTEP",
        fecha: "2018",
        enlace: "https://drive.google.com/file/d/1kyftvvgojvyGsWRUKy5eyTqCxPpGxE8D/view?usp=sharing"
      },
      {
        nombre: "Prácticas de mecanografía",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1VIsdB7Yo2jWZnWxr1ZY5_DOP6fas3yih/view?usp=sharing"
      },
      {
        nombre: "Técnico en informática (Ofimática)",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1hxqrZEA72ooF2ypq2Ht2SxZyElomjRBB/view?usp=sharing"
      },
      {
        nombre: "Tu negocio en Internet",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1qAeVWLfAom9T1k9OBzXDeolbgyS-IOBY/view?usp=sharing"
      },
      {
        nombre: "Conexión a internet en el hogar",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1RkGxjccF6iOMN6FFLqhKVjbGpeGWGTWP/view?usp=sharing"
      },
      {
        nombre: "Manejo ético de la información y datos",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1zI24-mprFm6cUL_bwb3zxW7nykr4q1JO/view?usp=sharing"
      },
      {
        nombre: "Fundamentos de inteligencia artificial",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/1i5SlHptYoyiOQaWZa-Er3gPhjIp7XhvD/view?usp=sharing"
      },
      {
        nombre: "Creación de físicas e interfaz con C# para RV y RA",
        entidad: "Fundacion Carlos Slim",
        fecha: "2025",
        enlace: "https://drive.google.com/file/d/19mnF2e1bPwFnEISxBqmdCwWQR5o0UyRH/view?usp=sharing"
      },
  
    ],
    //.......................................................................................................................
    proyectos: [
      {
        nombre: "Calculadora Matemática Web",
        descripcion: "Calculadora Matemática Web es una aplicación interactiva que permite realizar operaciones aritméticas básicas como suma, resta, multiplicación y división. Su diseño intuitivo y funcionalidad sencilla la hacen ideal para usuarios que buscan una herramienta rápida y eficiente para resolver cálculos matemáticos cotidianos.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: "",
        imagen: imgaenCalculadoraMatematicaWeb
      },
       {
        nombre: "Conversor de Unidades",
        descripcion: "Conversor de Unidades es una herramienta web práctica y fácil de usar que permite transformar valores entre diferentes sistemas de medida",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: "https://animated-mandazi-f6ca55.netlify.app/",
        imagen: imagenConversorDeUnidadesWeb
      },
      {
        nombre: "Adivina el Numero (1 al 100)",
        descripcion: "Adivina el Número (1 al 100) es un juego interactivo desarrollado con HTML, CSS y JavaScript que desafía al usuario a adivinar un número secreto generado aleatoriamente entre 1 y 100. Con cada intento, el jugador recibe pistas que indican si el número ingresado es mayor o menor al correcto, lo que permite acercarse estratégicamente a la solución.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: "https://lucky-phoenix-73708a.netlify.app",
        imagen: imagenAdivinaElNumeroWeb
      },

      /*
       {
        nombre: "Lista de Tareas",
        descripcion: "",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: "",
        imagen: imagenLIstaDeTaeas
      },
      */
      {
        nombre: "Lista de Tareas",
        descripcion: "La lista de tareas es una herramienta esencial para mejorar la productividad y mantener el orden en el día a día. Permite organizar actividades pendientes de forma clara y visual, facilitando la planificación personal, académica o laboral.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: "https://cosmic-elf-82d79a.netlify.app",
        imagen: imagenLIstaDeTaeasWeb
      },
      {
        nombre: "Calculadora Matemática Básica",
        descripcion: "Programa interactivo que realiza operaciones aritméticas simples. Ideal para practicar matemáticas básicas y aprender estructuras de control en programación de forma sencilla y efectiva.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1zqCzzj5xTOaDt1ishq34GTFRdxKsSwbL?usp=sharing",
        imagen: imagenOMB
      },
      {
        nombre: "Descubre la Naturaleza",
        descripcion: "Aplicación educativa que enseña curiosidades sobre bosques, océanos y animales. Fomenta el conocimiento del medio ambiente mediante un menú interactivo y dinámico.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/15C2mMfF_b-PmKwQ5Fi-ZLJDa50NzvCyP?usp=sharing",
        imagen: imagenNaturalezaApp 

      },
      {
        nombre: "Aprende Inglés - Juego de Traducción",
        descripcion: "Juego que ayuda a practicar vocabulario básico del inglés. El usuario traduce palabras y recibe retroalimentación inmediata, reforzando el aprendizaje de forma lúdica.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1p5_LO16_aSsQf55sxE8jGaUZ1Kifj_N1?usp=sharing",
        imagen: imagenAprendeIngles
      },
      {
        nombre: "Teorema de Pitágoras",
        descripcion: "Herramienta que calcula la hipotenusa de un triángulo rectángulo. Combina geometría y programación, útil para estudiantes que aprenden aplicaciones prácticas de las matemáticas.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1uZHUkqjOue8qIz0RScFcYED-4mZSuADX?usp=sharing",
        imagen: imagenTeoremaDePitagoras
      },
      {
        nombre: "Fórmula Cuadrática",
        descripcion: "Resuelve ecuaciones de segundo grado mostrando soluciones reales o complejas. Ayuda a entender el comportamiento de funciones cuadráticas mediante un enfoque práctico y visual.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1-fgynTXdup8Vt5e59bF8CjMAf25Pbwvi?usp=sharing",
        imagen: imagenFormulaCuadratica
      },
      {
        nombre: "Interés Simple",
        descripcion: "Calcula ganancias o costos financieros en préstamos o inversiones. Introduce conceptos básicos de finanzas personales de manera clara y aplicable al mundo real.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1vT_rRY9i4fhhSeMZcF_x4MWXDr18zNLv?usp=sharing",
        imagen: imagenInteresSimple
      },

      {
        nombre: "Adivina el Número (1 al 100)",
        descripcion: "Juego divertido donde el usuario adivina un número secreto. Desarrolla lógica y uso de bucles, ideal para aprender programación de forma entretenida y progresiva.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1IvdyEDetljB3kJWmbIeVsWSymSEeRg0M?usp=sharing",
        imagen: imagenAdivinaElNumero
      },
      {
        nombre: "Área y Perímetro del Círculo",
        descripcion: "Calcula medidas de un círculo a partir del radio. Enseña geometría básica y validación de datos, útil para estudiantes de matemáticas y programación inicial.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1gEH9DYnUJxP4Wp3S_m1R7dMGrQ6V1CKs?usp=sharing",
        imagen: imagenAreaPerimetroCirculo
      },
            
      
      //---------------------------------------------------------------------------------------------------------------


      {
        nombre: "Estadística Básica",
        descripcion: "Analiza un conjunto de datos calculando media, mediana, moda y desviación. Introduce conceptos clave de estadística con un enfoque práctico y fácil de entender.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1LXDe-7Gq-lY-KuRd4Hgnkh-hftz3XW_p?usp=sharing",
        imagen: imagenEstadisticaBasica
      },
      {
        nombre: "Regresión Lineal Simple",
        descripcion: "Encuentra la tendencia entre dos variables mediante una recta. Útil para análisis de datos y predicciones, ideal en proyectos escolares o investigaciones simples.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1aYvF75l5ZRuvw8VUGsVIByA_TpKa-gY5?usp=sharing",
        imagen: imagenRegresionLinealSimple 

      },
      {
        nombre: "Correlación de Pearson",
        descripcion: "Mide qué tan relacionadas están dos variables. Ofrece una interpretación clara del resultado, ayudando a comprender relaciones en datos de forma intuitiva y educativa.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1CZwwiPVIAdXtDG-WmMV8Q9xmuZb64DMq?usp=sharing",
        imagen: imagenCorrelacionPearson
      },
      {
        nombre: "Estado de Resultados",
        descripcion: "Simula un informe contable que muestra ingresos, costos y utilidad. Enseña finanzas básicas de empresas, perfecto para estudiantes de contabilidad o emprendedores principiantes.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1haOJ4Q3y7DtuKkRPhRokWGsORWhh9id5?usp=sharing",
        imagen: imagenEstadoDeResultados
      },
      {
        nombre: "Libro Diario Contable",
        descripcion: "Registra movimientos contables validando que débitos igualen créditos. Introduce el principio de partida doble, ideal para aprender contabilidad con ejemplos prácticos.",
        tecnologias: ["C#"],
        enlace: "https://drive.google.com/drive/folders/1NiH-wDheOLLFi64grD7qZvzXBx12RNB_?usp=sharing",
        imagen: imagenLibroDiarioContable
      },
      /*
      {
        nombre: "Nombre del Proyecto",
        descripcion: "Breve descripción del proyecto",
        tecnologias: ["C#"],
        enlace: "#",
        imagen: "https://via.placeholder.com/300x200"
      },
     */
    ],
    
    //.......................................................................................................................
    logros: [
      {
        titulo: "Logros profesionales",
        primerLogro: "Mantenimiento intachable de sistemas de archivo durante 4 años en Instituto Oncológico",
        segundoLogro: "Cumplimiento perfecto de políticas de confidencialidad en entorno médico",
        tercerLogro: "Colaboración efectiva interdepartamental facilitando flujo óptimo de información",
        cuartoLogro: "Contribución al éxito del equipo médico mediante organización eficiente",
      },
      {
        titulo: "Logros Académicos",
        primerLogro: "Próximo a graduarse de Licenciatura en Informática (falta solo tesis)",
        segundoLogro: "10+ certificaciones técnicas obtenidas en Fundación Carlos Slim 2025",
        tercerLogro: "Formación completa en programación orientada a objetos",
        cuartoLogro: "Especialización en tecnologías emergentes (Realidad Virtual/Aumentada, IA)",
      },
      {
        titulo: "Reconocimientos",
        primerLogro: "Reconocimiento por excelencia en mantenimiento de archivos médicos",
        segundoLogro: "Evaluaciones sobresalientes por trabajo en equipo y profesionalismo",
        tercerLogro: "Certificaciones validadas en múltiples áreas tecnológicas",
        cuartoLogro: "Permanencia intachable durante 4 años de servicio continuo",
      },
      {
        titulo: "Logros Técnicos",
        primerLogro: "Dominio de 10+ lenguajes de programación diferentes",
        segundoLogro: "Habilidades completas de diseño UX/UI con herramientas profesionales",
        tercerLogro: "Preparación full stack para desarrollo web y móvil",
        cuartoLogro: "Fundamentos sólidos en inteligencia artificial y realidad virtual",
      }
    ],
    referencias: [
      {
        nombre: "Robinzon Michel Gabino Fernández",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Freelance",
        contacto: "(849) 375-6581"
      },
      {
        nombre: "Carolina De Jesús Reinoso",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Segretaria de un buffet de abogados",
        contacto: "(829) 513-0342"
      },
       {
        nombre: "Marcos Miguel Gómez Camilo",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Freelance",
        contacto: "(829) 336-5035"
      }, 
      {
        nombre: "Joel Vargas Almanzar",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Freelance",
        contacto: "(809) 235-6357"
      },
      {
        nombre: "Luis Miguel Poloanco Gomez",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Alministrador de una tienda de electonicas",
        contacto: "(849) 407-9151"
      },
      {
        nombre: "Frailyn Martinez Santos",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Tecnico en Claro",
        contacto: "(849) 428-3455"
      },
      {
        nombre: "Bismar Henriquez Salazar",
        titulo: "Estudiante de Licenciatura en Informática",
        puesto: "Freelance",
        contacto: "(849) 477-4789"
      },
/*
      {
        nombre: "Nombre de la Referencia",
        titulo: "Titulo",
        puesto: "Puesto",
        contacto: "referencia@empresa.com"
      },
 */     
    ]
  };

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'resumen', label: 'Resumen' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'formacion', label: 'Formación' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'logros', label: 'Logros' },
    { id: 'referencias', label: 'Referencias' }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'inicio':
        return <InicioSection data={portfolioData.informacionPersonal} />;
      case 'resumen':
        return <ResumenSection resumen={portfolioData.resumen} objetivo={portfolioData.objetivo} />;
      case 'habilidades':
        return <HabilidadesSection habilidades={portfolioData.habilidades} />;
      case 'experiencia':
        return <ExperienciaSection experiencia={portfolioData.experiencia} />;
      case 'formacion':
        return <FormacionSection formacion={portfolioData.formacion} />;
      case 'proyectos':
        return <ProyectosSection proyectos={portfolioData.proyectos} />;
      case 'certificaciones':
        return <CertificacionesSection certificaciones={portfolioData.certificaciones} />;
      case 'logros':
        return <LogrosSection logros={portfolioData.logros} />;
      case 'referencias':
        return <ReferenciasSection referencias={portfolioData.referencias} />;
      default:
        return <div className="section">Sección no encontrada</div>;
    }
  };

  return (
    <div className="portfolio-container">
      <PortfolioNav 
        sections={sections} 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="portfolio-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;