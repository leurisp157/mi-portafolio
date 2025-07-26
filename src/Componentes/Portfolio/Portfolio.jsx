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

import imagenLeurisConGuitarra from '../Imagenes/LeuriscConGuitarra.jpg'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Datos del portafolio
  const portfolioData = {
    informacionPersonal: {
      nombre: "Leuris Peña Polonia",
      foto: imagenLeurisConGuitarra,
      correo: "leuirip157@gmail.com",
      telefono: "829-792-0986",
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