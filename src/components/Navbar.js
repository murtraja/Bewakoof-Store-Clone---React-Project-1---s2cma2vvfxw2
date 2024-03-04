import { useEffect, useState } from "react";
import { getCategories } from "../api/api";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

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
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" />
          <div className="navMenu">
            <div>
              <span className="menuOpen">≡</span>
              <span className="menuClose">X</span> Menu
            </div>
            <div className="categoryDropdown">
              {categories.map((category, index) => (
                <div key={index} className="categoryItem">
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div className="navSearch">
            <input type="text" placeholder="What are you looking for?" />
            <div>🔍</div>
          </div>
        </div>
        <div className="navRight">
          <div className="navAddress">
            <div>📌</div>
            <div>New Delhi, 110009</div>
            <div className="navAddressPencil">🖉</div>
          </div>
          <div>👤</div>
          <div className="navCart">🛒</div>
        </div>
      </div>
    </nav>
  );
}
