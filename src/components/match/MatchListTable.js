import React from 'react';
import MatchListTableRow from './MatchListTableRow'

function MatchListTable(props) {
    const matches = props.matchesList
    return (
        <table className="table-list" >
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
            {matches.map(match =>
                <MatchListTableRow matchData={match} key={match.id} />
            )}
            </tbody>
        </table >
    )
}

export default MatchListTable