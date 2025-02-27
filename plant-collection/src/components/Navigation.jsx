import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/details">Détails de la plante</Link>
    </nav>
  );
}

export default Navigation;
