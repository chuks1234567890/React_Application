import { Link } from "react-router-dom"
import Feed from "./feed"
const Home = ({posts ,fetchError,isLoading}) => {
  return (
      <div className="home-page">
       <div className="article-holder">
          {isLoading && <svg className='spinner' viewBox='0 0 50 50'>
              <circle className='path' cx="25" cy="25" r="20" fill='none' strokeWidth="5"></circle>
            </svg>}
          {!isLoading && fetchError && <p style={{color:"red"}}>{fetchError}</p>}
          {!isLoading && !fetchError && (posts.length ?
              <Feed posts={posts}/>
            :
              <div className="empty-holder">
                <div className="empty-display">
                
                </div>
                <p>Unfortunately there is no post to display...</p>
                <button><Link to={"/post"} style={{color:"black"}}>Create one</Link></button>
              </div>
            )}
       </div>
      </div>
  )
}

export default Home
