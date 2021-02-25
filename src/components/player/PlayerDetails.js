import React from 'react'
import { Link} from 'react-router-dom'
import { getPlayerByIdApiCall } from '../../apiCalls/playerApiCalls'
import { getFormattedDate } from '../../helpers/dateHelper'
import PlayerDetailsData from "./PlayerDetailsData";

class PlayerDetails extends React.Component{

    constructor(props) {
        super(props)
        let { playerId } = props.match.params
        this.state = {
            playerId: playerId,
            player: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }

    fetchPlayerDetails = () => {
        getPlayerByIdApiCall(this.state.playerId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            player: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            player: data,
                            message: null
                        })
                    }
                    this.setState({
                        isLoaded: true,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    componentDidMount() {
        this.fetchPlayerDetails()
    }

    render() {
        const { player, error, isLoaded, message } = this.state
        let content;

        if (error) {
            content = <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading player's data</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <PlayerDetailsData playerData={player} />
        }
        return (
            <main>
                <h2>Player's details</h2>
                {content}
                <div className="section-buttons">
                    <Link to="/players" className="button-back">Return</Link>
                </div>
            </main>
        )
    }
} export default PlayerDetails