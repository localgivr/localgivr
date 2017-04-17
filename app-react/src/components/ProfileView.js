import React from 'react'
import { browserHistory } from 'react-router'

class ProfileView extends React.Component {
constructor(props) {
        super(props)
        this.getProfile = this.getProfile.bind(this)

        this.state = {
            user: {}
        }
    }

     getProfile() {
        var token = sessionStorage.getItem('token')
        fetch('api/users/profile?token=' + token)
        .then(res => res.json())
       // .then(res => console.log(res)) 
        .then(res => {this.setState({user: res.user})})
    }

    componentDidMount() {
        this.getProfile()
    }

    viewOnboarding() {
        browserHistory.push('/causes')
    }

    render() {
        return  <div>
                    <ul className="list-unstyled text-center" id="user-profile-box">
                        <li><img className="center-block" id="profile-picture" src={this.state.user.img_url} alt="Profile Picture" /></li> <br/>
                        <li className="text-uppercase text-center" id="username"><strong>{this.state.user.first_name}</strong></li><br/>
                        <li className="text-uppercase text-center" id="location">{this.state.user.zip}</li><br/>
                        <li>
                        <button type="button" className="btn btn-danger btn-sm edit-causes" onClick={this.viewOnboarding}>Update Preferences</button></li>
                    </ul>
                </div>
    }
}

export default ProfileView