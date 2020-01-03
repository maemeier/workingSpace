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
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">Central Location</div>
                <div className="meta">Friend</div>
                <div className="description">
                  10 mins from train station or subway
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="header">Kitchen & Cleaning</div>
                <div className="meta">Friend</div>
                <div className="description">
                  Elliot Fu is a film-maker from New York.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="header">Top Quality Furniture</div>
                <div className="meta">Friend</div>
                <div className="description">Modern and nice Furniture</div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="header">Always avaliable</div>
                <div className="meta">Friend</div>
                <div className="description">Open 24 hours with staffs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableList;
