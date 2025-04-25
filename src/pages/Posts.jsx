import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("📡 Inizio fetch dei post...");
    setLoading(true);

    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log("✅ Post ricevuti:", response.data);
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("❌ Errore nel fetch:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <p>Benvenuto nella pagina dei post!</p>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <ul>
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
