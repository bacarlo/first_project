import { Link } from "react-router-dom";

const blogList = ({blogs, title}) => {
  
  return ( 
    <div className="bloglist">
      <h1>{title}</h1>
      {
        blogs.map( (blog) => (
          <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
            <small className="blog-description-date">Publié le: {blog.date}</small>
            <p className="blog-author">Publié par: {blog.author}</p>
          </div>
        ))
      }
    </div>
   );
}
 
export default blogList;