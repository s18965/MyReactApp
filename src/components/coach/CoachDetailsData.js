import React from 'react';
import { getFormattedDate } from '../../helpers/dateHelper';
import {Link} from "react-router-dom";
import CoachDetails from "./CoachDetails";

function CoachDetailsData(props) {
    const coach = props.coachData
    return (
        <React.Fragment>
            <p>First: {coach.firstName}</p>
            <p>Name: {coach.lastName} </p>
            <p>Country: {coach.country} </p>

            <h2>Player</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {coach.player.map(
                    player =>
                <tr key={player.id}>
                    <td>{player.firstName + " " + player.lastName}</td>
                    <td>{player.country}</td>
                    <td><ul className="list-actions">
                        <li><Link to={`players/details/${player.id}`} className="list-actions-button-details">Details</Link></li>
                        <li><Link to={`players/edit/${player.id}`} className="list-actions-button-edit">Edit</Link></li>
                        <li><Link to={`players/delete/${player.id}`} className="list-actions-button-delete">Delete</Link></li>
                    </ul>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
        </React.Fragment>
    )
} export default CoachDetailsData
