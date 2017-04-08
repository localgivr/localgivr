import React from 'react'

class Needs extends React.Component {
    render() {
        let = listNeeds = this.props.needs.map(function(need, key) {
            return <li className="list-group-item" key={key} onClick={() => browserHistory.push('/need/ + need.id')}>{need.name}</li>
        })

        return <div>
            <ul className="list-group">
                {listNeeds}
            </ul>
        </div>

    }
}

export default Needs