import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li title="React home"><Link to={"/React_Application"}><i className="fa-solid fa-home"></i></Link></li>
        <li title="React Add blogs"><Link to={"/React_Application/post"}><i className="fa-solid fa-circle-plus"></i></Link></li>
        <li title="React about us"><Link to={"/React_Application/about"}><i className="fa-solid fa-circle-info"></i></Link></li>
      </ul>
    </nav>
  )
}

export default Nav
