import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  // Stato per salvare i post ricevuti dall'API
  const [posts, setPosts] = useState([]);

  // Questo useEffect viene eseguito SOLO una volta (al mount del componente)
  useEffect(() => {
    console.log("📡 Inizio fetch dei post...");

    // Chiamata GET all'API esterna
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log("✅ Post ricevuti:", response.data);
        setPosts(response.data); // Salviamo i dati nello stato
      })
      .catch(error => {
        console.error("❌ Errore nel fetch:", error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <p>Benvenuto nella pagina dei post!</p>

      {/* Se non ci sono post ancora → loading */}
      {posts.length === 0 ? (
        <p>Caricamento...</p>
      ) : (
        <ul>
          {/* Stampiamo ogni post */}
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
