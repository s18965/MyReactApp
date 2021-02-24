// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { getCoachByIdApiCall } from '../../apiCalls/coachApiCalls'
// import { getFormattedDate } from '../../helpers/dateHelper'
//
// function CoachDetails() {
//     let { coachId } = useParams()
//     coachId = parseInt(coachId)
//     const coach = getCoachByIdApiCall(coachId)
//
//     return (
//         <main>
//             <h2>Coach's details</h2>
//             <p>First: {coach.firstName}</p>
//             <p>Name: {coach.lastName} </p>
//             <p>Country: {coach.country} </p>
//             <p>Player: {coach.players.firstName + ' ' + coach.players.lastName} </p>
//
//             <h2>Player</h2>
//             <table className="table-list">
//                 <thead>
//                 <tr>
//                     <th>Departament</th>
//                     <th>Pensja</th>
//                     <th>Data od</th>
//                     <th>Data do</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {player.matches.map(
//                     match =>
//                         <tr key={match.id}>
//                             <td>{match.player.name}</td>
//                             <td>{match.date}</td>
//                             <td>{match.court}</td>
//                             <td>{match.idWinner}</td>
//                         </tr>
//                 )}
//                 </tbody>
//             </table>
//             <div className="section-buttons">
//                 <Link to="/players" className="button-back">Return</Link>
//             </div>
//         </main>
//     )
// }
// export default CoachDetails