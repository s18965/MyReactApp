import React from 'react'
import { Link } from 'react-router-dom'
import { getCoachByIdApiCall } from '../../apiCalls/coachApiCalls'
import { getFormattedDate } from '../../helpers/dateHelper'
import CoachDetailsData from "./CoachDetailsData";


class CoachDetails extends React.Component{

    constructor(props) {
        super(props)
        let { coachId } = props.match.params
        this.state = {
            coachId: coachId,
            coach: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }

    fetchCoachDetails = () => {
        getCoachByIdApiCall(this.state.coachId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            coach: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            coach: data,
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
        this.fetchCoachDetails()
    }

    render() {
        const { coach, error, isLoaded, message } = this.state
        let content;

        if (error) {
            content = <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading coach's data</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <CoachDetailsData coachData={coach} />
        }
        return (
            <main>
                <h2>Coach's details</h2>
                {content}
                <div className="section-buttons">
                    <Link to="/coaches" className="button-back">Return</Link>
                </div>
            </main>
        )
    }
} export default CoachDetails