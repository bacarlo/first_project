import { useHistory, useParams } from "react-router-dom";
import useRecuperation from "./useRecuperation";

const BlogDetail = () => {
  const { id } = useParams();
  const {data: blogs, isLoading, error} = useRecuperation('http://localhost:8000/blogs/'+id);
  const history = useHistory();

  const HandleDelete = ()=> {
    fetch('http://localhost:8000/blogs/'+id, {
      method: 'Delete'
    }).then ( () => {
      history.push('/');
      console.log('Supprimer avec succés');
    })
  }

  return ( 
    <div className="">
      { isLoading && <div>Encours de traitement... </div> }
      {error && <div style ={{'color': 'salmon'}}>{error}</div>}
      { blogs &&  (
        <div className="blog">
          <h2 className="blog-titre">{blogs.title}</h2>
          <small className="blog-publication-date">{`Publier par: ${blogs.date}`}</small>
          <p className="blog-body">{blogs.body}</p>
          <p className="blog-author">{`Publier par: ${blogs.author}`}</p>
          <button onClick={HandleDelete}>Supprimer</button>
        </div>
      )}
    </div>
   );
}
 
export default BlogDetail;