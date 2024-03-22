import './App.css';
import {Routes, Route,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import About from './about';
import Home from './home';
import Missing from './missing';
import NewPost from './newPost';
import PostPage from './postPage';
import Layout from './layout';
import { format } from 'date-fns'; 
import api from './api/post'
import EditPost from './editPost';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';
function App() {
  const [search ,setSearch]=useState("")
  const [searchResult,setsearchResult] =useState("")
  const [postTitle,setPostTitle]=useState("")
  const [postBody,setPostBody]=useState("")
  const [editTitle,setEditTitle]=useState("")
  const [editBody,setEditBody]=useState("")
  const [posts,setPosts]=useState([])
  const navigator=useNavigate()
  const {width}=useWindowSize()
  const {data,fetchError,isLoading}=useAxiosFetch("http://localhost:3000/posts")
  useEffect(()=>{
    setPosts(data)
  },[data])
  useEffect(()=>{
   const filteredResult=posts.filter(item=>((item.body).toLowerCase()).includes(search.toLowerCase()) || ((item.title).toLowerCase()).includes(search.toLowerCase()) )
   setsearchResult(filteredResult.reverse())
   
  },[posts,search])

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const id= posts.length ? posts[posts.length -1].id +1 :1
    const datetime=format(new Date() ,"MMMM dd, yyyy pp")
    const newPost={id,title:postTitle,datetime,body:postBody}
    try{
      const response =await api.post("/posts",newPost)
      const allPost=[...posts ,response.data]
      setPostTitle("")
      setPostBody("")
      setPosts(allPost)
      navigator("/")
    }catch(err){
      alert(err.message)
    }
  }
  const handleDelete= async (id)=>{
    try {
      await api.delete(`/posts/${id}`)
      const postList = posts.filter(post => post.id !== id)
      setPosts(postList)
      navigator('/') 
      
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleEdit= async (id)=>{
    const datetime=format(new Date() ,"MMMM dd, yyyy pp")
    const updatePost={id,title:editTitle,datetime,body:editBody}
    try {
      const response =await api.put(`/posts/${id}`,updatePost)
      setPosts(posts.map(item=>item.id===id ? {...response.data} :item))
      setEditTitle("")
      setEditBody("")
      navigator("/")
    } catch (err) {
      console.log(err.message)  
    }
  }
  return (
    <Routes>
      <Route path="/React_Application/" element={< Layout search={search} setSearch={setSearch} width={width}/>}>
        <Route index element={<Home posts={searchResult} fetchError={fetchError} isLoading={isLoading}/>}/>
        <Route path='post'>
          <Route index element={<NewPost  handleSubmit={handleSubmit} setPostTitle={setPostTitle} postTitle={postTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
          <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}  />} />
        </Route> 
        <Route path='edit/:id'>
          <Route index element={<EditPost posts={posts} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle} />} />
        </Route> 
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing/>} />
      </Route>
    </Routes>
  );
}

export default App;
