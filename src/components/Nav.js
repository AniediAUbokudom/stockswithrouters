
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      {/* The function of the link tags is to change the URL bar to match the "to" prop. We don't us an <a> tag b/c clicking on one woul dmake the browser make a request to refresh teh page, which will break the router since ther eis no server to respond to the browser's request. The URL is merely a simulation of multiple pages. Anchor tags make things refresh and we don't want that, so we use Link. */}
        <nav>
        <Link to="/">
          <div>Home</div>
        </Link>

        <Link to="/about">
          <div>About</div>
        </Link>

        <Link to="/dashboard">
          <div>Dashboard</div>
        </Link>
        <Link to="/stock">
          <div>Stock</div>
        </Link>
      </nav>
    </div>
  );
}
export default Nav;
