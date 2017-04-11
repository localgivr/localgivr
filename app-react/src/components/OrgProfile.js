import React from 'react'
import './css/profile.css'
import GiveCard from './GiveCard'

class OrgProfile extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <ul className="list-unstyled text-center" id="user-profile-box">
                        <li className="text-uppercase text-center" id="username"><strong><h3>Humane Society of Indianapolis</h3></strong></li><br/>
                        <li className="text-uppercase text-center" id="location">Indianapolis, IN</li><br/>
                        <li><button type="button" className="btn btn-success btn-sm edit-profile">Edit Profile</button>
                        <button type="button" className="btn btn-danger btn-sm delete-profile">Delete Profile</button></li>
                    </ul>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="user-stats" id="gives">
                            <h6 className="text-center text-uppercase">Needs Fulfilled</h6> <hr/>
                            <h1 className="text-center" id="needs-met">##</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 requests">
                    <div className="row">
                        <h2>Open Requests</h2>
                        <GiveCard />
                    </div>    
                    <div className="row">    
                        <h2>Fulfilled Requests</h2>
                        <GiveCard /> <GiveCard />
                    </div>
                </div>
            </div>
        </div>    
    }
}

export default OrgProfile