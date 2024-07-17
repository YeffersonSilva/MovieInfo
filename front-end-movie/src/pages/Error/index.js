import { Link } from "react-router-dom";
import './erro.css';

function Error() {
  return (
    <div className="notFound">
      <h1>404</h1>
          <h2>Pagina no encontrada</h2>
            <Link to="/">Volver al inicio   </Link>
    </div>
  );
}

export default Error;