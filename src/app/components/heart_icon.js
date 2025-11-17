'use client';

import { useState, useEffect } from 'react';
import favoritesService from '../services/favorites_service';

// Recibe el personaje completo para saber a quién añadir/quitar
export default function IconoDeCorazon({ character }) {
  // Estado local para saber si ESTA carta es favorita
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // 1. Sincronizar el estado inicial al montar
    setIsFav(favoritesService.isFavorite(character.id));

    // 2. Definir el callback de actualización
    const handleUpdate = () => {
      // Cada icono revisa si sigue siendo (o no) favorito
      setIsFav(favoritesService.isFavorite(character.id));
    };

    // 3. Suscribirse
    favoritesService.subscribe(handleUpdate);

    // 4. Des-suscribirse
    return () => {
      favoritesService.unsubscribe(handleUpdate);
    };
  }, [character.id]); // Se suscribe/des-suscribe si el personaje cambia

  // Esta es la acción que DISPARA el evento
  const handleClick = () => {
    if (isFav) {
      favoritesService.removeFavorite(character.id);
    } else {
      favoritesService.addFavorite(character);
    }
    // No necesitamos llamar a setIsFav aquí, 
    // ¡el servicio notificará y el useEffect se encargará!
  };

  return (
    <button onClick={handleClick} className="heart-icon">
      {isFav ? '❤️' : '🤍'}
    </button>
  );
}