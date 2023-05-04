import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    render() {
        return (
            <div className={css.options}>
                <h2 className={css.title}>Please leave feedback</h2>
                <ul className={css.buttonsList}>
                    <li>
                        <button className={`${css.button} ${css.buttonGood}`} type="button" onClick={this.props.onLeaveFeedback}>Good</button>
                    </li>
                    <li>
                        <button className={`${css.button} ${css.buttonNeutral}`} type="button" onClick={this.props.onLeaveFeedback}>Neutral</button>
                    </li>
                    <li>
                        <button className={`${css.button} ${css.buttonBad}`} type="button" onClick={this.props.onLeaveFeedback}>Bad</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FeedbackOptions