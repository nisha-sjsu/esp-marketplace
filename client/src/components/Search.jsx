import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [searchKey, setSearchKey] = useState("");
  function handleChange(e) {
    //TODO:autocomplete functionality here

    setSearchKey(e.target.value);
    console.log(searchKey);
  }

  function searchItems() {
    console.log("fetch items with search key in name from db");
  }

  return (
    <>
      <input
        type="search"
        className="form-control"
        onChange={handleChange}
        placeholder="Find Items"
        id="search-bar"
      />
      <a type="submit" onClick={searchItems} className="search-icon">
        <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
      </a>
    </>
  );
}
