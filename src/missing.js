import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <div className="missing-page">
       <h2>Post not Found</h2>
            <p>Well, that's Disappointing.</p>
            <p>
              <Link to={"/"}>Visit our Homepage</Link>
            </p>
    </div>
  )
}

export default Missing
