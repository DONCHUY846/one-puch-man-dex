import AClass from "../components/a_class";
import SClass from "../components/s_class";
import ShinyBorderDecorator from "../components/decorators/shy_border_decorator";
import { Caramel } from "next/font/google";



const UnknownCard = ({ character }) => (
  <div style={{ border: '2px dashed #ccc', padding: '16px', margin: '8px' }}>
    <p>Tipo de carta desconocido para: {character.name}</p>
  </div>
);

// OUR Factory Method
function createCard(character) {
  let cardComponent;

  switch (character.class) {
    case 'A':
     
      cardComponent =  <AClass key={character.id} character={character} />;
      break;
    case 'S':
      cardComponent =  <SClass key={character.id} character={character} />;
      break;
    default:
      cardComponent =  <UnknownCard key={character.id} character={character} />;
      break;
  }

  if (character.class === 'A') {
    return (
        <ShinyBorderDecorator>
          {cardComponent}
        </ShinyBorderDecorator>
      );
  }
  return cardComponent;
}

export const CharacterCardFactory = {
  createCard,
};