import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const PostDetail = () =>{

    const { id } = useParams(); // Otteniamo l'id dal URL
    const [post, setPost] = useState(null); // Stato per il post
    const [loading, setLoading] = useState(true); // Stato per il caricamento

    useEffect(() => {
        console.log("📡 Inizio fetch del post...");

        // Chiamata GET all'API esterna
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log("✅ Post ricevuto:", response.data);
                setPost(response.data); // Salviamo il post nello stato
                setLoading(false); //  fine caricamento
            })
            .catch(error => {
                console.error("❌ Errore nel fetch:", error);
                setLoading(false); //  fine caricamento anche in caso di errore
            });
    }, [id]); // Ricarica quando l'id cambia

    if (loading) {
        return <p>Caricamento...</p>; // Mostra un messaggio di caricamento
    }

    return (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>

);
    

};

export default PostDetail;  