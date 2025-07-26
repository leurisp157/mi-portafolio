import React from 'react';

const PortfolioNav = ({ sections, activeSection, onSectionChange }) => {
  return (
    <nav className="portfolio-nav">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => onSectionChange(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PortfolioNav;