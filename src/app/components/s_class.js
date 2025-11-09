

const cardStyle = {

    border: '2px solid #007bff', // Borde azul para héroes
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  width: '200px',
  backgroundColor: '#f0f8ff',

};

const SClass = ({ character}) => {
    return (
        <div style={cardStyle}>
      <h4>{character.name} Clase S</h4>
      <p>Rank: {character.rank}</p>
      
    </div>
    )

}