import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Tab } from 'mdb-react-ui-kit';

const Header = () => {
    return(
        <>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page"><a href="#">Data</a></li>
      </ol>
    </nav>
  </div>
</nav>
        </>
    )
}

export default Header;