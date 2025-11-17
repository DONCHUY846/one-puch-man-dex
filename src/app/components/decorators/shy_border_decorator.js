import React from 'react';

/**
 * Este es un componente Decorator.
 * No sabe ni le importa qué componente está "envolviendo".
 * Su único trabajo es tomar 'children' y renderizarlos
 * dentro de un div con estilos especiales.
 */
const ShinyBorderDecorator = ({ children }) => {
  // 'children' es la prop especial de React que contiene
  // cualquier cosa que pongas dentro de este componente
  
  return (
    <div className="shiny-border-decorator">
      {children}
    </div>
  );
};

export default ShinyBorderDecorator;