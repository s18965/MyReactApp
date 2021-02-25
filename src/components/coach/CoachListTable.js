import React from 'react';
import CoachListTableRow from './CoachListTableRow'

function CoachListTable(props) {
    const coaches = props.coachesList
    return (
        <table className="table-list" >
            <thead>
            <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {coaches.map(coach =>
                <CoachListTableRow coachData={coach} key={coach.id} />
            )}
            </tbody>
        </table >
    )
}

export default CoachListTable