import React, { Component } from 'react';




class OwnersView extends Component {
    render() {
        return (
        <>
            <div>
                <h5>Dashboard</h5>
                <h5>Manage</h5>

            </div>
            <div>
                <h4>Add Owner</h4>
                <input placeholder='Owner Name'></input> 
                <button>Submit</button>
            </div>
            <div>
                <table >
                    <thead className='table'>
                        <th>Name</th>
                        <th>Number of Pets</th>
                        <th>Actions</th>
                    </thead>
                </table>
            </div>
        </>
  );
    }
}

export default OwnersView;
