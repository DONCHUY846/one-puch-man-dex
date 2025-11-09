const cardStyle = {
  border: '4px solid #ee00bfff', // Borde rojo para villanos
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  width: '200px',
  color: '#000',
  backgroundColor: '#fff0f0',
};

const AClass = ({ character }) => {
  return (
    <div style={cardStyle}>
      <h4>{character.name} Clase A</h4>
      <p>Rank: {character.rank}</p>
      
      
    </div>
  );
};

export default AClass;