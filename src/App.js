
import React from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList.jsx"
import Fantasy from "./data/fantasy.json"
import WarningSign from "./components/WarningSign.jsx"
import SingleBook from "./components/SingleBook.jsx"
import MyBadge from "./components/MyBadge"



function App() {
  return (

    <div className="App">
      <WarningSign title="This is the top of the page" />
      <BookList />
      <MyBadge />
      <WarningSign title="This is the end of the page" />

    </div>
  );
}

export default App;
