import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/questionMarkStyles.module.css'; //css module

export class QuestionMark extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             render: false
        }
    }

    toggleRender = () => {
        this.setState({render: !this.state.render})
    }
    
    render() {
        return (
            <div className={styles.qmark}>
                <FontAwesomeIcon onMouseEnter={this.toggleRender} onMouseLeave={this.toggleRender} icon={faQuestionCircle} className={styles.qmark_icon} />
                {this.state.render && <p className={styles.qmark_text}>{this.props.number}: {this.props.examples}</p>}
            </div>  
        )
    }
}

export default QuestionMark
