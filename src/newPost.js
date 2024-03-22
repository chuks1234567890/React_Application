const NewPost = ({handleSubmit,setPostTitle,postTitle,postBody,setPostBody}) => {
  return (
    <div className="newpost-page">
      <form className="form-page" onSubmit={handleSubmit}>
        <h2>Add a new Post</h2>
        <div className="form-element">
          <label htmlFor="postTitle">Title :</label>
          <input 
            type="text"
            id="postTitle"
            required
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)}
            
          ></input>
        </div>
        <div className="form-element">
          <label htmlFor="description">Description :</label>
          <textarea spellCheck={false} id="description" required value={postBody} onChange={e=>setPostBody(e.target.value)}>

          </textarea>
        </div>
        <button className="create" type="submit">Create &nbsp;<i className="fa-solid fa-plus"></i></button>
      </form>
    </div>
  )
}

export default NewPost
