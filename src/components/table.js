import React from "react";
import Banner from "../components/banner";

const TableList = () => {
  return (
    <>
      <Banner title="Why Choose us" />
      <div className="table1">
        <div>
          <img className="food" src="./img/place11.png" alt="food" />
        </div>

        <div>
          <div class="ui cards">
            <div class="card">
              <div class="content">
                <div class="header">Central Location</div>
                <div class="meta">Friend</div>
                <div class="description">
                  10 mins from train station or subway
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="header">Kitchen & Cleaning</div>
                <div class="meta">Friend</div>
                <div class="description">
                  Elliot Fu is a film-maker from New York.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="header">Top Quality Furniture</div>
                <div class="meta">Friend</div>
                <div class="description">Modern and nice Furniture</div>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="header">Always avaliable</div>
                <div class="meta">Friend</div>
                <div class="description">Open 24 hours with staffs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableList;
