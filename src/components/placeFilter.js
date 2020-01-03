import React from "react";
import { useContext } from "react";
import { PlaceContext } from "../context";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
const PlaceFilter = ({ places }) => {
  const context = useContext(PlaceContext);
  console.log(context);
  const { handleChange, type, price, minPrice, maxPrice, food, pets } = context;

  // get unique type
  let types = getUnique(places, "type");

  // add all type
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <form className="filter-form">
        <div>
          <lable htmlFor="type"> country </lable>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
};

export default PlaceFilter;
