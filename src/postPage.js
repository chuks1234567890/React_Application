import { useParams,Link } from "react-router-dom"
const PostPage = ({posts ,handleDelete}) => {
  const {id} =useParams()
  const post= posts.find(post =>(post.id).toString()===id)
  return (
    <div className="post-page">
      <article >
        {post && 
          <>
            <h2 style={{padding:"10px 0px"}}>{post.title}</h2>
            <p className="post-date">{post.datetime}</p>
            <p className="post-body" style={{padding:"10px 0px"}}>{post.body}</p>
            <div className="button">
              <button onClick={()=>handleDelete(post.id)}>
                Delete Post &nbsp; <i className="fa-solid fa-trash-can"></i>
              </button>
              <button> <Link to={`/edit/${post.id}`}>Edit Post &nbsp; <i className="fa-solid fa-pen"></i></Link></button>
            </div>
          </ >
        }
        {!post && 
          <>
            <h2>Post not Found</h2>
            <p>Well, that's Disappointing.</p>
            <p>
              <Link to={"/"}>Visit our Homepage</Link>
            </p>
          </>
        }
      </article>
    </div>
  ) 
}

export default PostPage
