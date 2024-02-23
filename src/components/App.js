import "../styles/App.css";

function App() {
  return (
    <div>
      <nav>
        <div className="nav">
          <div className="logoNav">
            <img src="https://www.thesouledstore.com/static/img/300x157-twitter.png" />
          </div>
          <div className="topBottomNav">
            <div className="topNav">
              <div className="topNavLeft">
                <span>WOMEN</span>
                <span>MEN</span>
                <span>KIDS</span>
              </div>
              <div className="topNavRight">
                <span>TRACK ORDER</span>
                <span>CONTACT US</span>
                <span>DOWNLOAD APP</span>
              </div>
            </div>
            <div className="bottomNav">
              <div className="bottomNavLeft">
                <div className="categoryParent">
                  <span>TOPWEAR</span>
                  {/* <div className="categoryUnderline" /> */}
                </div>
                <div className="categoryParent">
                  <span>BOTTOMWEAR</span>
                  {/* <div className="categoryUnderline" /> */}
                </div>
                <div className="categoryParent">
                  <span>SNEAKERS</span>
                  {/* <div className="categoryUnderline" /> */}
                </div>
              </div>
              <div className="bottomNavRight">
                <span>S</span>
                <span>P</span>
                <span>W</span>
                <span>C</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
