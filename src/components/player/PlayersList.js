import React from 'react'
import { getPlayersApiCall} from "../../apiCalls/playerApiCalls"
import { Link } from "react-router-dom"
import PlayerListTable from "./PlayerListTable";

class PlayerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            players: []
        }
    }

    fetchPlayerList = () => {
        getPlayersApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        players: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchPlayerList()
    }

    render() {
        const { error, isLoaded, players } = this.state
        let content;

        if (error) {
            content = <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading players' details...</p>
        } else {
            content = <PlayerListTable playersList={players} />
        }

        return (
            <main>
                <h2>List of players</h2>
                { content}
                <p className="section-buttons">
                    <Link to="/players/add" className="button-add">Add new player</Link>
                </p>
            </main >
        )
    }
} export default PlayerList
