import React from 'react'
import { browserHistory } from 'react-router'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

// pull from phil's array 
// set setState on onClick for checkboxes 

class UserOnboard extends React.Component {
    constructor(props) {
        super(props)
        this.give = this.give.bind(this)
    }

     give() {
        browserHistory.push('/give')
    }

    render() {
        return <div>
    <div className="row">
    <div className="col-sm-6">
        <h3>What causes are meaningful to you? </h3>

        <div className="checkbox">
            <label>
                <input type="checkbox" value="animal" />
                Animal Rights
            </label>
        </div>
        <div className="checkbox">
            <label>
                <input type="checkbox" value="education" />
                Education
            </label>
        </div>
        <div className="checkbox">
            <label>
                <input type="checkbox" value="community" />
                Community
            </label>
        </div>  
        <div className="checkbox">
            <label>
                <input type="checkbox" value="health" />
                Health 
            </label>
        </div>   
        <div className="checkbox">
            <label>
                <input type="checkbox" value="environment" />
                Environment
            </label>
        </div> 
        <div className="checkbox">
            <label>
                <input type="checkbox" value="social" />
                Social Justice
            </label>
        </div> 
    </div>
    <div className="col-sm-6">
        <h3>What organizations are meaningful to you?</h3> <br/><br/>

        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                <option value="humane_indy">Humane Society of Indianapolis</option>
                <option value="indy_beautiful">Keep Indy Beautiful</option>
                <option value="reads">Indy Reads</option>
            </FormControl>
        </FormGroup>
    </div>     
    </div> 
    <br/><br/><br/>
    <div className="row text-center give-button">
        <Button bsStyle="success" bsSize="large" onClick={this.give}>Start Giving</Button>        
    </div>
    <br/><br/>               
            
        </div>
    }
}

export default UserOnboard