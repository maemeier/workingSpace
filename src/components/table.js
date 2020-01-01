import React from "react";
import Banner from "../components/banner";

const TableList = () => {
  return (
    <>
      <Banner title="Why Choose us" />
      <div className="table1">
        <div>
          <img className="food" src="./img/food.jpg" />
        </div>

        <table className="ui celled table">
          <thead>
            <tr>
              <th>Facilities</th>
              <th>Our Places</th>
              <th>Another CoWorking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ultra Hispeed Internet</td>
              <td className="positive">
                <i className="icon checkmark"></i>Included
              </td>
              <td className="negative">None</td>
            </tr>
            <tr>
              <td>Food and Drink</td>
              <td className="positive">
                <i className="icon checkmark"></i>Included
              </td>
              <td>None</td>
            </tr>
            <tr>
              <td>Private Desk</td>
              <td className="positive">
                <i className="icon checkmark"></i>Included for gold member
              </td>
              <td className="positive">
                <i className="icon close"></i> Requires call
              </td>
            </tr>
            <tr>
              <td>Open 24 Hours</td>
              <td className="positive">Included Kitchen</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Locker</td>
              <td className="positive">Finger Scan</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
