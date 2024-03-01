import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./navBar/components/navbar";
import { AlertList } from "./AlertList/components/AlertList";
import Filter from "./Filter/components/Filter";
import { Search } from "./Search/components/search";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="subContainer">
          {/* add search component */}
          <Search />
          <AlertList />
        </div>
        {/* add filter component */}
        <Filter />
      </div>
    </Router>
  );
};

export default App;
