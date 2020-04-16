import React, { Fragment } from "react";
import Header from "./pages/common-components/header/Header";
import './App.scss'
import Home from "./pages/home/Home";


const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="content-wrap">
        <Home />
      </div>
    </Fragment>
  );
};

export default App;