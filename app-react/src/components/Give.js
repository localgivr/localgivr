import React from 'react'
import { browserHistory } from 'react-router'
import GiveCard from './GiveCard'
import './css/give.css'


class Give extends React.Component {
    constructor(props) {
        super(props)

        this.getNeeds = this.getNeeds.bind(this)
        this.kickNeed = this.kickNeed.bind(this)

        this.state = {
           needs: []
        }
    }

    componentDidMount() {
        this.getNeeds()
    }

    getNeeds() {
        fetch('/api/needs')
        .then(res => res.json())
       // .then(res => console.log(res.needs))
        .then(res => this.setState({needs: res.needs}))
    }

    kickNeed(index) {
      //remove element with id/index from needs array
      var arr = this.state.needs
      arr.splice(index, 1)
      this.setState({needs: arr})
    }

    render() {
        let GiveCards = this.state.needs.map((need, i) => {
            return <GiveCard {...need}  key={i} kickNeed={this.kickNeed} index={i}/>
        })

        return <div className="givePage">
        <div className="row" id="give-header">
            <h1>Give back to your community.</h1>
            <p>Want to give outside your local neighborhood? Search our full collection of need requests and start giving with the click of a button.  </p><br /> <br />
        </div>

        <div className="container-fluid">
            <div className="row">
                <div>
                    {GiveCards}
                </div>
            </div>
        </div>
    </div>
    }
}

export default Give
