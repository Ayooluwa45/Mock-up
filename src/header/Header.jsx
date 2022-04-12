import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="comments">Comments</div>
      <div className="createComment">
        <Link to="/create-comment">Create Comment</Link>
      </div>
    </header>
  );
}

export default Header;
