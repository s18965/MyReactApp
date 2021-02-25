import React from 'react'
import {Link} from "react-router-dom";
import { getCoachesApiCall} from "../../apiCalls/coachApiCalls";
import CoachListTable from "./CoachListTable";

class CoachesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            coaches: []
        }
    }

    fetchCoachesList = () => {
        getCoachesApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        coaches: data
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
        this.fetchCoachesList()
    }

    render() {
        const { error, isLoaded, coaches } = this.state
        let content;

        if (error) {
            content = <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading coaches' details...</p>
        } else {
            content = <CoachListTable coachesList={coaches} />
        }

        return (
            <main>
                <h2>List of coaches</h2>
                { content}
                <p className="section-buttons">
                    <Link to="/coaches/add" className="button-add">Add new coach</Link>
                </p>
            </main >
        )
    }
} export default CoachesList