import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    render() {
        return (
            <div className={css.options}>
                <h2 className={css.title}>Please leave feedback</h2>
                <ul className={css.buttonsList}>
                    <li>
                        <button className={`${css.button} ${css.buttonGood}`} type="button" onClick={() => this.props.onLeaveFeedback(this.props.options[0])}>Good</button>
                    </li>
                    <li>
                        <button className={`${css.button} ${css.buttonNeutral}`} type="button" onClick={() => this.props.onLeaveFeedback(this.props.options[1])}>Neutral</button>
                    </li>
                    <li>
                        <button className={`${css.button} ${css.buttonBad}`} type="button" onClick={() => this.props.onLeaveFeedback(this.props.options[2])}>Bad</button>
                    </li>
                </ul>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array
}

export default FeedbackOptions