import React from 'react';
import { getFormattedDate } from '../../helpers/dateHelper';
import {Link} from "react-router-dom";

function PlayerDetailsData(props) {
    const player = props.playerData
    return (
        <React.Fragment>
            <p>First: {player.firstName}</p>
            <p>Name: {player.lastName} </p>
            <p>Birth date: {player.birthDate} </p>
            <p>Country: {player.country} </p>

            <h2>Coaches</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {player.coaches.map(
                    coach =>
                        <tr key={coach.id}>
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
                )}
                </tbody>
            </table>

            <h2>Matches</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Rival</th>
                    <th>Winner</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {player.matches.map(
                    match =>
                        <tr key={match.id}>
                            <td>{match.rival}</td>
                            <td>{match.winner}</td>
                            <td>{match.date}</td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link to={`matches/details/${match.id}`} className="list-actions-button-details">Details</Link></li>
                                    <li><Link to={`matches/edit/${match.id}`} className="list-actions-button-edit">Edit</Link></li>
                                    <li><Link to={`matches/delete/${match.id}`} className="list-actions-button-delete">Delete</Link></li>
                                </ul>
                            </td>
                        </tr>
                )}
                </tbody>
            </table>
        </React.Fragment>
    )
} export default PlayerDetailsData