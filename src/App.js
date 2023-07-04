import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState("");
  const [show, setShow] = useState(false);

  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=7gZhbUqgeISI01wX_83EXryVDOSJAP-89VQTcaJw9Qk&query=${value}&page=${page}&per_page=12`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResults(data.results);
      });
  };

  useEffect(fetchImage, [page]);

  let selectPrev = page === 1 ? true : false;
  let selectNext = page === 8 ? true : false;

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const nextPage = () => {
    setPage(page + 1);
    goToTop();
  };

  const prevPage = () => {
    setPage(page - 1);
    goToTop();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchImage();
    setPage(1);
    setShow(true);
  };

  return (
    <React.Fragment>
      <header className="navbar">
        <form onSubmit={submitHandler}>
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
      {show && (
        <main>
          <div className="gallery">
            {results.map((result) => {
              return <img key={result.id} src={result.urls.regular} alt="" />;
            })}
          </div>
          <div className="btns">
            <button disabled={selectPrev} onClick={prevPage}>
              &lt; prev page
            </button>
            <p>{page}</p>
            <button disabled={selectNext} onClick={nextPage}>
              next page &gt;
            </button>
          </div>
        </main>
      )}
    </React.Fragment>
  );
}

export default App;
