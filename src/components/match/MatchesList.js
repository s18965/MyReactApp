import React from 'react'
import {Link} from "react-router-dom";
import { getMatchesApiCall} from "../../apiCalls/matchApiCalls";


function MatchesList() {
    const matchList = getMatchesApiCall()

    return (
        <main>
            <h2>List of Matches</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>Player</th>
                    <th>Rival</th>
                    <th>Date</th>
                    <th>Winner</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {matchList.map(match => (
                    <tr key={match.id}>
                        <td>{match.idPlayer}</td>
                        <td>{match.idRival}</td>
                        <td>{match.date}</td>
                        <td>{match.idWinner}</td>
                        <td>
                            <ul className="list-actions">
                                <li><Link to={`matches/details/${match.id}`} className="list-actions-button-details">Details</Link></li>
                                <li><Link to={`matches/edit/${match.id}`} className="list-actions-button-edit">Edit</Link></li>
                                <li><Link to={`matches/delete/${match.id}`} className="list-actions-button-delete">Delete</Link></li>
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to={`matches/add`} className="button-add">Add new Match</Link>
            </p>
        </main>
    )
}

export default MatchesList