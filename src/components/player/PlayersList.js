import React from 'react'
import {Link} from "react-router-dom";
import { getPlayersApiCall} from "../../apiCalls/playerApiCalls";


function PlayerList() {
    const playerList = getPlayersApiCall()

    return (
        <main>
            <h2>List of Players</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {playerList.map(player => (
                    <tr key={player.id}>
                        <td>{player.firstName}</td>
                        <td>{player.lastName}</td>
                        <td>{player.country}</td>
                        <td>
                            <ul className="list-actions">
                                <li><Link to={`players/details/${player.id}`} className="list-actions-button-details">Details</Link></li>
                                <li><Link to={`players/edit/${player.id}`} className="list-actions-button-edit">Edit</Link></li>
                                <li><Link to={`players/delete/${player.id}`} className="list-actions-button-delete">Delete</Link></li>
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to={`players/add`} className="button-add">Add new Player</Link>
            </p>
        </main>
    )
}

export default PlayerList