// Become this page to  "Client Component"
// It's necesary to use 'useState' and 'useEffect' hooks
'use client';

import { useState, useEffect, use } from 'react';

export default function Home() {

  // Starts the controller of the component with useState

  // Manages the state of the view 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {

    const fetchCharacters = async () => {

      try{

        setLoading(true);
        const respose = await fetch('/api/characters');

        if(!respose.ok){
          throw new Error('Failed to fetch characters');
        }
        
        const data = await respose.json();
        setCharacters(data); // Update state and view with fetched data



      }catch(e){
        setError(e.message); // Update state and view with error message
      } finally{
        setLoading(false); // Update state to indicate loading is finished
      }

    }
    fetchCharacters();
  }, []); // Empty dependency array means this effect runs once on mount
  //End of the controller of the component

  // Starts the view of the component

  if(loading){
    return <div>Loading...</div>;
  }

  if(error){
    return console.error('Error loading characters:', error);
  }
  return (
    <main>
      <h1>One Punch Man Characters</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
       {characters.map(char => (
          <div key={char.id} style={{ border: '1px solid #ccc', padding: '16px' }}>
            <h2>{char.name}</h2> 
            <p>{char.class}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
