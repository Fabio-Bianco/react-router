import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams(); // Otteniamo l'id dalla URL
  const navigate = useNavigate(); // Per navigare ai post successivi o precedenti

  const [post, setPost] = useState(null); // Stato per il post
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  // Convertiamo id in numero per poter fare operazioni matematiche
  const currentId = Number(id);
  console.log("🧮 ID attuale:", currentId);

  useEffect(() => {
    console.log("📡 Inizio fetch del post...");

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log("✅ Post ricevuto:", response.data);
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("❌ Errore nel fetch:", error);
        setLoading(false);
      });
  }, [id]); // Ricarica il post ogni volta che cambia l'id

  if (loading) {
    return <p>Caricamento...</p>;
  }

  // Funzione per andare al post precedente
  const goToPreviousPost = () => {
    navigate(`/posts/${currentId - 1}`);
  };

  // Funzione per andare al post successivo
  const goToNextPost = () => {
    navigate(`/posts/${currentId + 1}`);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      {/* Bottoni di navigazione */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={goToPreviousPost}>◀ Post Precedente</button>
        <button onClick={goToNextPost}>Post Successivo ▶</button>
      </div>
    </div>
  );
};

export default PostDetail;
