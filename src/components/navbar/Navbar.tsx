import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";

function Navbar() {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between items-center gap-7">
          <ul className="flex gap-7">
            <li className="ml-4">
              <Link className="font-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="ml-4">
              <Link className="font-semibold" to="/store">
                Store
              </Link>
            </li>
          </ul>

          <div>
            <Link to={"/cart"}>
              <button>🛒</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
