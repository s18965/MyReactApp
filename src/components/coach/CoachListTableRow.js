import React from 'react';
import { Link } from 'react-router-dom';

function CoachListTableRow(props) {
    const coach = props.coachData
    return (
        <tr>
            <td>{coach.firstName}</td>
            <td>{coach.lastName}</td>
            <td>{coach.country}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`coaches/details/${coach.id}`} className="list-actions-button-details">Details</Link></li>
                    <li><Link to={`coaches/edit/${coach.id}`} className="list-actions-button-edit">Edit</Link></li>
                    <li><Link to={`coaches/delete/${coach.id}`} className="list-actions-button-delete">Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}
export default CoachListTableRow