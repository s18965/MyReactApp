import React from "react"
import { Link } from "react-router-dom"

class PlayerForm extends React.Component {
    render() {
        return (
            <main>
                <h2>New Player</h2>
                <form className="form">
                    <label htmlFor="firstName">First Name:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="firstName" id="firstName" placeholder="2-60 signs" value="" />
                    <span id="errorFirstName" className="errors-text"></span>
                    <label htmlFor="lastName">Last Name:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="lastName" id="lastName" placeholder="2-60 signs" value="" />
                    <span id="errorLastName" className="errors-text"></span>
                    <label htmlFor="birthDate">Birthdate:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="date" name="birthDate" id="birthDate" placeholder="yyyy-mm-dd" value="" />
                    <span id="errorBirthDate" className="errors-text"></span>
                    <label htmlFor="country">Country:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="country" id="country" placeholder="2-60 signs" value="" />
                    <span id="errorBirthDate" className="errors-text"></span>
                    <label htmlFor="email">Email:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="email" name="email" id="email" placeholder="np. name@domain.com" value="" />
                    <span id="errorEmail" className="errors-text"></span>
                    <div className="form-buttons">
                        <p id="errorsSummary" className="errors-text"></p>
                        <input className="form-button-submit" type="submit" value="Add" />
                        <Link to="/players" className="form-button-cancel">Cancel</Link>
                    </div>
                </form>
            </main >
        )
    }
}

export default PlayerForm