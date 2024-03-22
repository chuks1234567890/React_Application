import Nav from "./nav"
const Header = ({search,setSearch,width}) => {
  return (
    <header className="Main-Header">
        <span className="device" style={{color:"white"}}>
          {width <= 568 ? <p><i className="fa-solid fa-mobile"></i> Phone</p>
            : width <= 992 ? <p> <i className="fa-solid fa-tablet"></i> Tablet</p> 
              : <p> <i className="fa-solid fa-desktop"></i> Desktop</p>}
        </span>
        <div className="Input-Filter">
          <form className="form " onSubmit={(e)=>e.preventDefault()}>
            <input 
              placeholder="Looking for a Post ....."
              id="search"
              value={search}
              onChange={(e)=>setSearch(e.target.value) }
            />
          </form>
        </div>
      <Nav/>
    </header>
  )
}

export default Header
