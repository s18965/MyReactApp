import {getPlayerByIdApiCall} from "../../apiCalls/playerApiCalls";
import PlayerDetailsData from "../player/PlayerDetailsData";
import {Link} from "react-router-dom";
import React from 'react'
import {getMatchByIdApiCall} from "../../apiCalls/matchApiCalls";
import MatchDetailsData from "./MatchDetailsData";

class MatchDetails extends React.Component{

    constructor(props) {
        super(props)
        let { matchId } = props.match.params
        this.state = {
            matchId: matchId,
            player: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }

    fetchMatchDetails = () => {
        getMatchByIdApiCall(this.state.matchId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            match: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            match: data,
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
        this.fetchMatchDetails()
    }

    render() {
        const { match, error, isLoaded, message } = this.state
        let content;

        if (error) {
            content = <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading matches's data</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <MatchDetailsData matchData={match} />
        }
        return (
            <main>
                <h2>Match's details</h2>
                {content}
                <div className="section-buttons">
                    <Link to="/matches" className="button-back">Return</Link>
                </div>
            </main>
        )
    }
} export default MatchDetails