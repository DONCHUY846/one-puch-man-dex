// Este objeto será nuestro "Sujeto" (Subject)
class FavoritesService {
  constructor() {
    this.favorites = []; // El estado que gestionamos
    this.observers = []; // La lista de observadores (componentes)
  }

  // Método para que los observadores se suscriban
  subscribe(callback) {
    this.observers.push(callback);
    console.log("Observador suscrito. Total:", this.observers.length);
  }

  // Método para que los observadores se des-suscriban (¡muy importante en React!)
  unsubscribe(callback) {
    this.observers = this.observers.filter(obs => obs !== callback);
    console.log("Observador des-suscrito. Total:", this.observers.length);
  }

  // Método que notifica a TODOS los observadores
  notify() {
    console.log("Notificando a todos los observadores...");
    // Llama a cada función (callback) que se suscribió
    this.observers.forEach(callback => callback(this.favorites));
  }

  // Lógica de negocio
  addFavorite(character) {
    if (!this.isFavorite(character.id)) {
      this.favorites.push(character);
      this.notify(); // Notificamos el cambio
    }
  }

  removeFavorite(characterId) {
    this.favorites = this.favorites.filter(char => char.id !== characterId);
    this.notify(); // Notificamos el cambio
  }

  isFavorite(characterId) {
    return this.favorites.some(char => char.id === characterId);
  }
  
  getFavorites() {
    return this.favorites;
  }
}

// Exportamos UNA SOLA INSTANCIA para que toda la app la comparta
const favoritesService = new FavoritesService();
export default favoritesService;