import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="404">
      <h2>Ooooops...</h2>
      <p>La page est introuvable</p>
      <Link to='/'>Veuillez vous rendre à la page d'accueil</Link>
    </div>
   );
}
 
export default NotFound;