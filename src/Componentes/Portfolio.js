import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Datos del portafolio
  const portfolioData = {
    informacionPersonal: {
      nombre: "Tu Nombre",
      foto: "https://via.placeholder.com/150",
      correo: "tuemail@example.com",
      telefono: "+1234567890",
      linkedin: "https://linkedin.com/in/tunombre",
      sitioWeb: "https://tusitio.com"
    },
    resumen: "Profesional con X años de experiencia en [tu área]. Apasionado por [intereses profesionales] y comprometido con la excelencia en cada proyecto.",
    objetivo: "Buscar oportunidades desafiantes donde pueda aplicar mis habilidades y seguir creciendo profesionalmente.",
    habilidades: {
      tecnicas: ["React", "JavaScript", "CSS", "HTML", "Node.js"],
      blandas: ["Comunicación", "Trabajo en equipo", "Liderazgo", "Resolución de problemas"],
      idiomas: ["Español (nativo)", "Inglés (intermedio)"],
      herramientas: ["Figma", "Adobe Photoshop", "Git", "VS Code"]
    },
    experiencia: [
      {
        empresa: "Nombre de la Empresa",
        puesto: "Tu Puesto",
        periodo: "2020 - Presente",
        funciones: ["Función 1", "Función 2", "Función 3"],
        logros: ["Logro 1", "Logro 2"]
      }
    ],
    formacion: [
      {
        titulo: "Título Obtenido",
        institucion: "Nombre de la Institución",
        periodo: "2016 - 2020"
      }
    ],
    certificaciones: [
      {
        nombre: "Certificación en React",
        entidad: "Plataforma de Cursos",
        fecha: "2023"
      }
    ],
    proyectos: [
      {
        nombre: "Nombre del Proyecto",
        descripcion: "Breve descripción del proyecto",
        tecnologias: ["React", "CSS"],
        enlace: "#",
        imagen: "https://via.placeholder.com/300x200"
      }
    ],
    logros: [
      "Premio al Mejor Desempeño 2023",
      "Reconocimiento por Excelencia en Proyectos"
    ],
    referencias: [
      {
        nombre: "Nombre de la Referencia",
        puesto: "Puesto",
        empresa: "Empresa",
        contacto: "referencia@empresa.com"
      }
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
        return (
          <div className="section inicio">
            <div className="perfil-container">
              <img src={portfolioData.informacionPersonal.foto} alt="Foto de perfil" className="foto-perfil" />
              <div className="info-personal">
                <h1>{portfolioData.informacionPersonal.nombre}</h1>
                <p><strong>Email:</strong> {portfolioData.informacionPersonal.correo}</p>
                <p><strong>Teléfono:</strong> {portfolioData.informacionPersonal.telefono}</p>
                <div className="redes-sociales">
                  <a href={portfolioData.informacionPersonal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {portfolioData.informacionPersonal.sitioWeb && (
                    <a href={portfolioData.informacionPersonal.sitioWeb} target="_blank" rel="noopener noreferrer">Sitio Web</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'resumen':
        return (
          <div className="section">
            <h2>Resumen Profesional</h2>
            <p>{portfolioData.resumen}</p>
            <h3>Objetivo Profesional</h3>
            <p>{portfolioData.objetivo}</p>
          </div>
        );
      
      case 'habilidades':
        return (
          <div className="section habilidades">
            <h2>Habilidades</h2>
            <div className="habilidades-grid">
              <div className="habilidad-categoria">
                <h3>Técnicas</h3>
                <ul>
                  {portfolioData.habilidades.tecnicas.map((habilidad, index) => (
                    <li key={index}>{habilidad}</li>
                  ))}
                </ul>
              </div>
              <div className="habilidad-categoria">
                <h3>Blandas</h3>
                <ul>
                  {portfolioData.habilidades.blandas.map((habilidad, index) => (
                    <li key={index}>{habilidad}</li>
                  ))}
                </ul>
              </div>
              <div className="habilidad-categoria">
                <h3>Idiomas</h3>
                <ul>
                  {portfolioData.habilidades.idiomas.map((idioma, index) => (
                    <li key={index}>{idioma}</li>
                  ))}
                </ul>
              </div>
              <div className="habilidad-categoria">
                <h3>Herramientas</h3>
                <ul>
                  {portfolioData.habilidades.herramientas.map((herramienta, index) => (
                    <li key={index}>{herramienta}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'experiencia':
        return (
          <div className="section">
            <h2>Experiencia Laboral</h2>
            {portfolioData.experiencia.map((exp, index) => (
              <div key={index} className="experiencia-item">
                <h3>{exp.puesto}</h3>
                <h4>{exp.empresa} - {exp.periodo}</h4>
                <h5>Funciones:</h5>
                <ul>
                  {exp.funciones.map((funcion, i) => (
                    <li key={i}>{funcion}</li>
                  ))}
                </ul>
                <h5>Logros:</h5>
                <ul>
                  {exp.logros.map((logro, i) => (
                    <li key={i}>{logro}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      
      case 'formacion':
        return (
          <div className="section">
            <h2>Formación Académica</h2>
            {portfolioData.formacion.map((form, index) => (
              <div key={index} className="formacion-item">
                <h3>{form.titulo}</h3>
                <h4>{form.institucion} - {form.periodo}</h4>
                <h3>{form.titulo}</h3>
                <h4>{form.institucion} - {form.periodo}</h4>
              </div>
            ))}
          </div>
        );
      
      case 'proyectos':
        return (
          <div className="section proyectos">
            <h2>Proyectos Destacados</h2>
            <div className="proyectos-grid">
              {portfolioData.proyectos.map((proyecto, index) => (
                <div key={index} className="proyecto-card">
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
                  <h3>{proyecto.nombre}</h3>
                  <p>{proyecto.descripcion}</p>
                  <p><strong>Tecnologías:</strong> {proyecto.tecnologias.join(', ')}</p>
                  <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'certificaciones':
        return (
          <div className="section">
            <h2>Certificaciones y Cursos</h2>
            {portfolioData.certificaciones.map((cert, index) => (
              <div key={index} className="certificacion-item">
                <h3>{cert.nombre}</h3>
                <h4>{cert.entidad} - {cert.fecha}</h4>
              </div>
            ))}
          </div>
        );
      
      case 'logros':
        return (
          <div className="section">
            <h2>Logros y Reconocimientos</h2>
            <ul>
              {portfolioData.logros.map((logro, index) => (
                <li key={index}>{logro}</li>
              ))}
            </ul>
          </div>
        );
      
      case 'referencias':
        return (
          <div className="section">
            <h2>Referencias Profesionales</h2>
            {portfolioData.referencias.map((ref, index) => (
              <div key={index} className="referencia-item">
                <h3>{ref.nombre}</h3>
                <h4>{ref.puesto} - {ref.empresa}</h4>
                <p>Contacto: {ref.contacto}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return <div className="section">Sección no encontrada</div>;
    }
  };

  return (
    <div className="portfolio-container">
      <nav className="portfolio-nav">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <main className="portfolio-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default Portfolio;