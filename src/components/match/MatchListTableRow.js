import React from 'react';
import { Link } from 'react-router-dom';

function MatchListTableRow(props) {
    const match = props.matchData
    return (
        <tr>
            <td>{match.player1FistName +' ' +match.player1LastName}</td>
            <td>{ match.firstName + ' ' +match.lastName}</td>
            <td>{ match.date}</td>
            <td>{ match.winnerFirstName + ' ' + match.winnerLastName}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`matches/details/${match.id}`} className="list-actions-button-details">Details</Link></li>
                    <li><Link to={`matches/edit/${match.id}`} className="list-actions-button-edit">Edit</Link></li>
                    <li><Link to={`matches/delete/${match.id}`} className="list-actions-button-delete">Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default MatchListTableRow