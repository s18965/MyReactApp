import React from 'react'
import {Link} from "react-router-dom";
import { getCoachesApiCall} from "../../apiCalls/coachApiCalls";


function CoachesList() {
    const coachList = getCoachesApiCall()

    return (
        <main>
            <h2>List of Coaches</h2>
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
                {coachList.map(coach => (
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
                ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to={`coaches/add`} className="button-add">Add new Coach</Link>
            </p>
        </main>
    )
}

export default CoachesList