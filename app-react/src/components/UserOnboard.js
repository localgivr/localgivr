import React from 'react'
import { browserHistory } from 'react-router'
import { Button } from 'react-bootstrap'

class UserOnboard extends React.Component {
    constructor(props) {
        super(props)
        this.viewProfile = this.viewProfile.bind(this)
        this.getOrgs = this.getOrgs.bind(this)
        this.getCats = this.getCats.bind(this)
        this.getTypes = this.getTypes.bind(this)
        this.toggleCausesFollow = this.toggleCausesFollow.bind(this)
        this.toggleOrgsFollow = this.toggleOrgsFollow.bind(this)
        this.toggleTypeFollow = this.toggleTypeFollow.bind(this)

        this.state = {
            orgs: [],
            cats: [],
            types: [],
            name: ''
            // user: {}
        }
    }

    getOrgs() {
        var token = sessionStorage.getItem('token')
        fetch('/api/orgs?token=' + token)
            .then(res => res.json())
            .then(res => this.setState({ orgs: res.orgs }))
    }

    getCats() {
        var token = sessionStorage.getItem('token')
        fetch('/api/cats?token=' + token)
            .then(res => res.json())
            .then(res => this.setState({ cats: res.cats }))
    }

    getTypes() {
        var token = sessionStorage.getItem('token')
        fetch('/api/types?token=' + token)
            .then(res => res.json())
            .then(res => this.setState({ types: res.types}))
    }

    toggleCausesFollow(e, i) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('value')

        fetch('/api/cats/' + id + '/follow?token=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
            let cats = this.state.cats
            cats[i].followed = (response.message === 'followed')
            this.setState({cats: cats})
        })
    }

    toggleOrgsFollow(e, i) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('value')

        fetch('/api/orgs/' + id + '/follow?token=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
            let orgs = this.state.orgs
            orgs[i].followed = (response.message === 'followed')
            this.setState({orgs: orgs})
        })
    }

    toggleTypeFollow(e, i) {
        let token = sessionStorage.getItem('token')
        let id = e.target.getAttribute('value')

        fetch('/api/types/' + id + '/follow?token=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                id: id
            })
        })
        .then(res => res.json())
        //.then(response => console.log(response))
        .then(res => {
            let types = this.state.types
            types[i].followed = (res.message === 'followed')
            this.setState({types: types})
        })
    }

    viewProfile() {
        browserHistory.push('/profile')
    }

    componentDidMount() {
        this.getOrgs()
        this.getCats()
        this.getTypes()
    }

    render() {
        console.log(this.state.types)
        let orgs = this.state.orgs.map((org, i) => <li key={i}>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={org.id} onChange={(e) => this.toggleOrgsFollow(e, i)} checked={org.followed} /> {org.name}
                </label></div></li>)

        let cats = this.state.cats.map((cat, i) => <li key={i}>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={cat.id} onChange={(e) => this.toggleCausesFollow(e, i)} checked={cat.followed} /> {cat.name}
                </label>
            </div>
        </li>)

        let types = this.state.types.map((type, i) => <li key={i}>
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={type.id} onChange={(e) => this.toggleTypeFollow(e, i)} checked={type.followed} /> {type.name}
                </label>
            </div>
        </li>)

        return <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h3>What causes are meaningful to you? </h3> <br />
                    <ul className="list-unstyled">
                        {cats}
                    </ul>
                </div>
                <div className="col-sm-4">
                    <h3>What organizations are meaningful to you?</h3> <br />
                    <ul className="list-unstyled">
                        {orgs}
                    </ul>
                </div>
                 <div className="col-sm-4">
                    <h3>What type of contribution do you wish to make?</h3> <br />
                    <ul className="list-unstyled">
                        {types}
                    </ul>
                </div>

            </div>
            <br /><br /><br />
            <div className="row text-center give-button">
                <Button bsStyle="default" bsSize="large" onClick={this.viewProfile}>Start Giving</Button>
            </div>
            <br /><br />

        </div>
    }
}

export default UserOnboard