import React from 'react';
import { Link } from 'react-router-dom';

function PlayerListTableRow(props) {
    const player = props.playerData
    return (
        <tr>
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
    )
}

export default PlayerListTableRow