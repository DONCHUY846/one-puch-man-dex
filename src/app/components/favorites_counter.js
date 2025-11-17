'use client';

import { useState, useEffect } from 'react';
import favoritesService from '../services/favorites_service';

export default function ContadorDeFavoritos() {
  // Estado local del componente
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Definimos el callback que el Sujeto debe ejecutar
    const handleUpdate = (favorites) => {
      setCount(favorites.length);
    };

    // 2. Nos suscribimos al servicio
    favoritesService.subscribe(handleUpdate);

    // Llamamos inmediatamente con el estado actual para mostrar el contador
    // (evita que el contador aparezca vacío hasta que cambien los favoritos)
    handleUpdate(favoritesService.getFavorites());

    // 3. (IMPORTANTE) Nos des-suscribimos cuando el componente se destruye
    // para evitar fugas de memoria.
    return () => {
      favoritesService.unsubscribe(handleUpdate);
    };
  }, []); // El array vacío asegura que esto solo se ejecute al montar/desmontar

  return (
    <div className="favorites-counter">
      Favoritos: {count}
    </div>
  );
}