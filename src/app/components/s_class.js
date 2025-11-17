import { IconFactory } from "../factories/icon_factory";

const cardStyle = {

    border: '4px solid #ff0000ff', // Borde azul para héroes
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  width: '200px',
  color: '#000',
  backgroundColor: '#f0f8ff',

};

const SClass = ({ character}) => {
    return (
        <div style={cardStyle}>
      <h4>{character.name} Clase S</h4>
      <p>Rank: {character.rank}</p>
      <p>Gender :{IconFactory.getIcon(character.gender)} </p>
    </div>
    )

}

export default SClass;