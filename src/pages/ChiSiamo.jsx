import { useEffect } from 'react';

const ChiSiamo = () => {
  useEffect(() => {
    console.log('📄 Sono la pagina ChiSiamo');
  }, []);

  return (
    <div>
      <h1>Chi siamo</h1>
      <p>Siamo la pagina Chi siamo!</p>
    </div>
  );
};

export default ChiSiamo;
