import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importiamo il pacchetto axios per le chiamate API

import axios from "axios";

const Posts = () => {
  // Stato per salvare i post ricevuti dall'API
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Questo useEffect viene eseguito SOLO una volta (al mount del componente)
  useEffect(() => {
    console.log("📡 Inizio fetch dei post...");
    setLoading(true); //  inizio caricamento

    // Chiamata GET all'API esterna
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log("✅ Post ricevuti:", response.data);
        setPosts(response.data); // Salviamo i dati nello stato
        setLoading(false); //  fine caricamento
      })

      .catch(error => {
        console.error("❌ Errore nel fetch:", error);
        setLoading(false); //  fine caricamento anche in caso di errore
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <p>Benvenuto nella pagina dei post!</p>

      {/* Se non ci sono post ancora → loading */}
      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <ul>
          {/* Stampiamo ogni post */}
          {posts.map(post => (
             <li key={post.id}>
              <h3>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
