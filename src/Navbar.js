import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div>
        <Link className="logo" to="/">Bienvenu dans mon blog</Link>
      </div>
      <ul className="liens">
        <li>
          <Link to="/" className="lien">Accueil</Link>
        </li>
        <li>
          <Link to="/ajouter" className="lien buttonArticle">Créer un article</Link>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;