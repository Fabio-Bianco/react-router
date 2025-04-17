import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('🏠 Home montata!');
  }, []); // Mantra: eseguito solo al mount del componente

  return (
    <div>
      <h1>Pagina Home</h1>
      <p>Benvenuto nel nostro blog React!</p>
    </div>
  );
};

export default Home;
