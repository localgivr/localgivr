import React from 'react'
//import { browserHistory } from 'react-router'
import GiveCard from './GiveCard'
import './css/give.css'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.getFeed = this.getFeed.bind(this)

        this.state = {
            needs: []
        }
    }

    getFeed() {
        fetch('/api/users/1')
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res => this.setState({needs: res.needs}))
    }

    componentDidMount() {
        this.getFeed()
    }

    render() {
        let UserCards = this.state.needs.map((need, i) => {
            return <GiveCard {...need}  key={i} /> 
        })
        return <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <ul className="list-unstyled text-center" id="user-profile-box">
                        <li><img className="center-block" id="profile-picture" src="https://unsplash.it/g/200/200?blur" alt="Profile Picture" /></li> <br/>
                        <li className="text-uppercase text-center" id="username"><strong>{this.props.first_name}</strong></li><br/>
                        <li className="text-uppercase text-center" id="location">Indianapolis, IN</li><br/>
                        {/*<li>
                        <button type="button" className="btn btn-danger btn-sm delete-profile">Delete Profile</button></li>*/}
                    </ul>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="user-stats" id="gives">
                            <h6 className="text-center text-uppercase">Needs Met</h6> <hr/>
                            <h1 className="text-center" id="needs-met">##</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div> {UserCards}</div>
                </div>
            </div>
        </div>
    </div>
    }
}

export default UserProfile 