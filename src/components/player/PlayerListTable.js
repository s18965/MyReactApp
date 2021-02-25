import React from 'react';
import PlayerListTableRow from './PlayerListTableRow'

function PlayerListTable(props) {
    const players = props.playersList
    return (
        <table className="table-list" >
            <thead>
            <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {players.map(player =>
                <PlayerListTableRow playerData={player} key={player.id} />
            )}
            </tbody>
        </table >
    )
}

export default PlayerListTable