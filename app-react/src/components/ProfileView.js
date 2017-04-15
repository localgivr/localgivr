import React from 'react'

class ProfileView extends React.Component {
constructor(props) {
        super(props)
        this.getProfile = this.getProfile.bind(this)

        this.state = {
            user: {
                first_name: '',
                zip: ''
            }
        }
    }

     getProfile() {
        var token = sessionStorage.getItem('token')
        fetch('api/users/profile?token=' + token)
        .then(res => res.json())
       // .then(res => console.log(res)) 
        .then(res => this.setState({user: res.user}))
    }

    componentDidMount() {
        this.getProfile()
    }

    render() {
        return  <div>
                    <ul className="list-unstyled text-center" id="user-profile-box">
                        <li><img className="center-block" id="profile-picture" src="https://unsplash.it/g/200/200?blur" alt="Profile Picture" /></li> <br/>
                        <li className="text-uppercase text-center" id="username"><strong>{this.props.first_name}</strong></li><br/>
                        <li className="text-uppercase text-center" id="location">{this.props.zip}</li><br/>
                        {/*<li>
                        <button type="button" className="btn btn-danger btn-sm delete-profile">Delete Profile</button></li>*/}
                    </ul>
                </div>
    }
}

export default ProfileView