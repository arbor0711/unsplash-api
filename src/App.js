import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <React.Fragment>
      <header className="navbar">
        <form>
          <label htmlFor="search">Search high-resolution images</label>
          <input
            type="search"
            id="search"
            name="find"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button>
            <RiSearch2Line />
          </button>
        </form>
      </header>
      <main>
        <h2 className="title">
          Results for: <span>{value}</span>
        </h2>
        <div className="gallery">
          <img
            src="https://images.unsplash.com/flagged/photo-1578240358966-610647316c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90b2N5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/flagged/photo-1578240358966-610647316c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90b2N5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/flagged/photo-1578240358966-610647316c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90b2N5Y2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
