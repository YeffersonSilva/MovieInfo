import api from "../../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key:process.env.REACT_APP_API_KEY,
            language: "pt-BR",
            page: 1,
          },
        });
          setFilmes(response.data.results);
          console.log(response.data.results);
      } catch (error) {
        console.error("Request failed with status code", error.response.status);
      }
    }
    loadFilmes();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {filmes.map(filme => (
        <div key={filme.id}>
          <h3>{filme.title}</h3>
          <p>{filme.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
