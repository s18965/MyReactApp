import React from 'react'
import {Link} from "react-router-dom";
import { getMatchesApiCall} from "../../apiCalls/matchApiCalls";
import MatchListTable from "./MatchListTable";

class MatchesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            matches: []
        }
    }

    fetchPlayerList = () => {
        getMatchesApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        matches: data
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
        const { error, isLoaded, matches } = this.state
        let content;

        if (error) {
            content = <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading matches' details...</p>
        } else {
            content = <MatchListTable matchesList={matches} />
        }

        return (
            <main>
                <h2>List of matches</h2>
                { content}
                <p className="section-buttons">
                    <Link to="/matches/add" className="button-add">Add new match</Link>
                </p>
            </main >
        )
    }
} export default MatchesList