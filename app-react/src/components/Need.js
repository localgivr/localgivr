import React from 'react'
import { browserHistory } from 'react-router'

class Need extends React.Component {
    render() {
        return <li className="list-group-item" onClick={() => browserHistory.push('/need/' + this.props.id)}>{this.props.title}</li>
    }
}

export default Need