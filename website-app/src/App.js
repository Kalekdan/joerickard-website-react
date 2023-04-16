import { Home } from "./Home";
import "./App.css";
import { Navbar } from "./Navbar";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState([<Home></Home>]);

  return (
    <div>
      <Navbar setPage={setPage}></Navbar>
      <div class={"content"}>{page.map((item, i) => (
          <div class={"scene"} key={i}>
            {item}
          </div>
        ))}</div>
    </div>
  );
}

export default App;
