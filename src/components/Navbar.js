import { useEffect, useState } from "react";
import { getCategories } from "../api/api";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const categories = await getCategories();
      setCategories(categories);
    }
    getData();
  }, []);
  return (
    <nav>
      <div className="nav">
        <div className="navLeft">
          <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" />
          <div className="navMenu">
            <div onClick={() => setMenuOpen(!menuOpen)}>
              Menu
              <span className="menuOpen">{menuOpen ? "x" : "≡"}</span>
            </div>
            {menuOpen ? (
              <div className="categoryDropdown">
                {categories.map((category, index) => (
                  <div key={index} className="categoryItem">
                    {category}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="navSearch">
            <input type="text" placeholder="Find you favorite products" />
            <div>🔍</div>
          </div>
        </div>
        <div className="navRight">
          <div className="navAddress navRightItem">
            <div>📌</div>
            <div>Enter your pin code</div>
          </div>
          <div className="navRightItem">
            <div className="navCart">🛒</div>
            <div>Cart</div>
          </div>
          <div className="navRightItem">
            <div>👤</div>
            <div>Login</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
