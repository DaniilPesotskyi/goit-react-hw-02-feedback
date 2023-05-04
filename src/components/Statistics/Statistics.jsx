import React, { Component } from "react";
import css from './Statistics.module.css';

class Statistics extends Component {
    render() {
        return (
            <>
                <h2 className={css.title}>Statistics</h2>
                <div className={css.statWrap}>
                    <ul className={css.statList}>
                        <li className={css.statItem}>Good: {}</li>
                        <li className={css.statItem}>Neutral: {}</li>
                        <li className={css.statItem}>Bad: {}</li>
                    </ul>
                </div>
                <p className={css.addData}>Total: {}</p>
                <p className={css.addData}>Positive feedback: {}</p>
            </>
        )
    }
}

export default Statistics