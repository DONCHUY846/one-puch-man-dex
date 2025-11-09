import AClass from "../components/a_class";
import SClass from "../components/s_class";

const UnknownCard = ({ character }) => (
  <div style={{ border: '2px dashed #ccc', padding: '16px', margin: '8px' }}>
    <p>Tipo de carta desconocido para: {character.name}</p>
  </div>
);

// OUR Factory Method
function createCard(character) {

  switch (character.class) {
    case 'A':
     
      return <AClass key={character.id} character={character} />;
    case 'S':
      return <SClass key={character.id} character={character} />;
    default:
      return <UnknownCard key={character.id} character={character} />;
  }
}

export const CharacterCardFactory = {
  createCard,
};