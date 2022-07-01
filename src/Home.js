import BlogList from './BlogList';
import useRecuperation from "./useRecuperation";

const Home = () => {

  const {data: blogs, isLoading, error} = useRecuperation('http://localhost:8000/blogs?_sort=id&_order=desc');

  return ( 
    <div className="home">
      {error && <div style ={{'color': 'salmon'}} >{error}</div>}
      {isLoading && <div>En cours de chargement ...</div>}
      { blogs && <BlogList blogs={blogs} title = "Liste des Blogs" />}     
    </div>
   );
}
 
export default Home;