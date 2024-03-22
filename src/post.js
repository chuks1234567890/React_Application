import { Link } from "react-router-dom"
const Post = ({post}) => {
  return (
   <div className="article">
      <Link to={`/post/${post.id}`}>
        <h4>{(post.title).length <=60? post.title:`${(post.title).slice(0,50)}...`}</h4>
        <p className="post-date">{post.datetime}</p>
      </Link>
      <p className="post-body">
        {
            (post.body).length <=25 ? post.body:`${(post.body).slice(0,50)}...`
        }
      </p>
    </div >
  )
}

export default Post
