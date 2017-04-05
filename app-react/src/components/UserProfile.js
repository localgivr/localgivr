import React from 'react'
import './css/profile.css'

class UserProfile extends React.Component {
    render() {
        return <div>
            <div className="row">
                <div className="col-sm-5">
                    <ul className="list-unstyled text-center" id="user-profile-box">
                        <li><img className="center-block" id="profile-picture" src="https://unsplash.it/g/200/200?blur" alt="Profile Picture" /></li> <br/>
                        <li className="text-uppercase text-center" id="username"><strong>John Doe</strong></li><br/>
                        <li className="text-uppercase text-center" id="location">Indianapolis, IN</li><br/>
                        <li><button type="button" className="btn btn-success btn-sm edit-profile">Edit Profile</button>
                        <button type="button" className="btn btn-danger btn-sm delete-profile">Delete Profile</button></li>
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
                        <div className="col-sm-6 ">
                            <div className="thumbnail">
                                <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                                <div className="caption">
                                    <h3>Title of Request</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="thumbnail">
                                <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                                <div className="caption">
                                    <h3>Title of Request</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                       
                </div>
            </div>
        </div>
    }
}

export default UserProfile 