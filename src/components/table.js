import React from "react";

const TableList = () => {
  return (
    <>
      <h1>-WHY CHOOSE US-</h1>
      <div className="table1">
        <div>
          <img className="food" src="./img/food.jpg" />
        </div>

        <table class="ui celled table">
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
              <td class="positive">
                <i class="icon checkmark"></i>Included
              </td>
              <td class="negative">None</td>
            </tr>
            <tr>
              <td>Food and Drink</td>
              <td class="positive">
                <i class="icon checkmark"></i>Included
              </td>
              <td>None</td>
            </tr>
            <tr>
              <td>Private Desk</td>
              <td class="positive">
                <i class="icon checkmark"></i>Included for gold member
              </td>
              <td class="positive">
                <i class="icon close"></i> Requires call
              </td>
            </tr>
            <tr>
              <td>Open 24 Hours</td>
              <td class="positive">Included Kitchen</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Locker</td>
              <td class="positive">Finger Scan</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
