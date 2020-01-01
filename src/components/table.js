import React from "react";
import Banner from "../components/banner";

const TableList = () => {
  return (
    <>
      <Banner title="Why Choose us" />
      <div className="table1">
        <div>
          <img className="food" src="./img/food.jpg" alt="food" />
        </div>

        <div class="ui vertical  steps">
          <div class="completed step">
            <i class=" icon"></i>
            <div class="content">
              <div class="title">Central Location</div>
            </div>
          </div>
          <div class="completed step">
            <i class="credit card icon"></i>
            <div class="content">
              <div class="title">Kitchen & Cleaning</div>
            </div>
          </div>
          <div class="completed step">
            <i class="info icon"></i>
            <div class="content">
              <div class="title">Top Quality Furniture</div>
            </div>
          </div>
          <div class="completed step">
            <i class="info icon"></i>
            <div class="content">
              <div class="title">Personal Service</div>
              <div class="description">Verify order details</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableList;
