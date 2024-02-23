import "../styles/App.css";

function App() {
  return (
    <div>
      <nav>
        <div className="nav">
          <div className="navLeft">
            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" />
            <div>
              <span>≡</span> Menu
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
    </div>
  );
}

export default App;
