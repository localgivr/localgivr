import React from 'react'
import { browserHistory } from 'react-router'
import GiveCard from './GiveCard'
import './css/give.css'


class Give extends React.Component {
    constructor(props) {
        super(props)

        this.getNeeds = this.getNeeds.bind(this)

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
        //.then(res => this.setState({needs: res}))
        //.then(res => console.log(this.state.needs))
    }

    render() {
        var GiveCards = this.state.needs.map((need, i) => {
            return <GiveCard {...need}  key={i} />
        })

        return <div className="givePage">

            <h1>Give back to your community.</h1> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fugit molestias doloribus optio ipsam debitis voluptas dolorem nihil, maxime sequi veritatis sunt atque asperiores assumenda reiciendis velit ad iusto tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis, id quae a in accusantium, molestias amet deserunt. Ipsam, quas cumque, fuga officiis reprehenderit soluta est. Voluptas, unde totam quidem! </p><br /> <br />

            <div className="row">
                {GiveCards}
            </div>
        </div>
    }
}

export default Give
