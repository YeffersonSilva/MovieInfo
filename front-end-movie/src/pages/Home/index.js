import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("movie/now_playing", {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "pt-BR",
            page: 1,
          },
        });
        setFilmes(response.data.results.slice(0, 10));
        console.log(response.data.results);
      } catch (error) {
        console.error("Request failed with status code", error.response.status);
      }
    }
    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="listaFilmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
