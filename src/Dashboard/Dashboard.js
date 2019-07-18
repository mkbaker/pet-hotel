import React, { Component } from "react";
import "./Dashboard.css";


class Dashboard extends Component {
    render() {
        return (
          <div>
            <h5>Dashboard</h5>

            {/* form for add pet */}
            <div className="addPetDiv">
              <h4>Add Pet</h4>
              <form>
                <input type="text" placeholder="Pet Name" />
                <input type="text" placeholder="Pet Color" />
                <input type="text" placeholder="Pet Breed" />
                <select>
                  <option value="Owner 1">Owner 1</option>
                </select>
                <button>Submit</button>
              </form>
            </div>

            <div className="historyDiv">
              <h4>History</h4>
              <center>
                <table className="historyTable">
                  <thead>
                    <th>Owner</th>
                    <th>Pet</th>
                    <th>Breed</th>
                    <th>Color</th>
                    <th>Checked in</th>
                    <th>Actions</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Stefanie</td>
                      <td>Freddy</td>
                      <td>Dachshund</td>
                      <td>Brown</td>
                      <td>no</td>
                      <td>
                        <button>Delete</button>
                        <button>Check In</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </div>
          </div>
        );
    }
}

export default Dashboard;