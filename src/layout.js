import { Outlet } from "react-router-dom"
import Header from "./header"

const Layout = ({search ,setSearch,width}) => {
  return (
    
    <div className="App">
      
          <div className="App-header">
            <Header search={search} setSearch={setSearch} width={width}/>
          </div>
          <main>
            <Outlet/>
          </main>
        
    </div>
    
  )
}

export default Layout
