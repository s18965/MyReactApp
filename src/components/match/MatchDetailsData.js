import React from 'react';
import { getFormattedDate } from '../../helpers/dateHelper';
import {Link} from "react-router-dom";

function MatchDetailsData(props) {
    const match = props.matchData
    return (
        <React.Fragment>
            <p>Player: {match.player}</p>
            <p>Rival: {match.rival} </p>
            <p>Player's score: {match.scorePlayer1} </p>
            <p>Rival's score: {match.scorePlayer2} </p>
            <p>Date: {match.date} </p>
            <p>Court: {match.court} </p>
            <p>Round: {match.roundNumber} </p>
            <p>Winner: {match.winner} </p>

            <h2>Players</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {match.players.map(
                    player =>
                        <tr key={player.id}>
                            <td>{player.player}</td>
                            <td>{player.country}</td>
                            <td>
                                <ul className="list-actions">
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
} export default MatchDetailsData