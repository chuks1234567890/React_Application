import { useEffect } from "react"
import { useParams,Link} from "react-router-dom"
const EditPost = ({posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle}) => {
    const {id}=useParams()
    const post=posts.find(post=>(post.id).toString()===id)
    useEffect(()=>{
        if (post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post,setEditTitle,setEditBody])
  return (
    <div className="newpost-page">
      {editTitle && 
        <form className="form-page" onSubmit={(e)=>e.preventDefault()}>
            <h2>Edit Post</h2>
            <div className="form-element">
            <label htmlFor="postTitle">Title :</label>
            <input 
                type="text"
                id="postTitle"
                required
                value={editTitle}
                onChange={(e)=>setEditTitle(e.target.value)}
                
            ></input>
            </div>
            <div className="form-element">
            <label htmlFor="description">Description :</label>
            <textarea id="description" spellCheck={false} required value={editBody} onChange={e=>setEditBody(e.target.value)}>

            </textarea>
            </div>
            <button className="create" type="submit" onClick={()=>handleEdit(post.id)}>Update Post &nbsp;<i className="fa-solid fa-pen"></i></button>
        </form>
      }
      {!editTitle &&
        <div className="missing-page">
        <h2>No Post to Edit</h2>
             <p>Well, that's Disappointing.</p>
             <p>
               <Link to={"/"}>Visit our Homepage</Link>
             </p>
     </div>
      }
    </div>
  )
}

export default EditPost
