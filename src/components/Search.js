import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { DATA } from "./SearchCategories";
import "./Search.css";

const Search = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchType, setSearchType] = useState("DRINK_TYPES");
  //   useEffect();
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  const handleSubmit = e => {
    if (selectedOption) {
      // setSearch(true);
      props.history.push(e);
    } else alert("You need to select an option");
    console.log(selectedOption);
  };
  const handleSearch = e => {
    setSearchType(e.target.value);
    console.log(e.target.value);
    console.log(DATA[searchType]);
  };
  return (
    <div className="search">
      <h3>Search By</h3>
      <div className="searchType">
        <label>
          <input
            type="radio"
            value="DRINK_TYPES"
            checked={searchType === "DRINK_TYPES"}
            onChange={handleSearch}
          />{" "}
          Drink Types
        </label>
        <label>
          <input
            type="radio"
            value="CATEGORIES"
            checked={searchType === "CATEGORIES"}
            onChange={handleSearch}
          />{" "}
          Categories
        </label>
      </div>
      <div className="searchForm">
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={DATA[searchType]}
        />
        <br />
        <button
          onClick={() =>
            handleSubmit(
              `/cocktails/${
                searchType === "CATEGORIES" ? "c" : "a"
              }/${selectedOption}`
            )
          }>
          SEARCH
        </button>
      </div>
    </div>
  );
};

const Select = ({ value, onChange, options }) => {
  const optionsEl = options.map(m => {
    return (
      <option key={m.value} value={m.value}>
        {m.label}
      </option>
    );
  });
  const handleChange = e => {
    console.log(e.target.value);
    onChange(e.target.value);
  };
  return (
    <select defaultValue="" value={value} onChange={handleChange} required>
      <option value="" disabled>
        Select an option
      </option>
      {optionsEl}
    </select>
  );
};

export default withRouter(Search);
