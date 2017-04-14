import React from 'react'
// import browserHistory from 'react-router'
import { Modal, Button } from 'react-bootstrap'
import './css/give.css'

class GiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.donate = this.donate.bind(this)
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.getNeeds = this.getNeeds.bind(this)

        this.state = {
            showModal: false,
          //  needs: []
        }
    }

    componentDidMount() {
        this.getNeeds()
    }

    getNeeds() {
        fetch('/api/needs')
        .then(res => res.json())
        .then(res => this.setState({needs: res}))
        .then(blah => console.log(this.props))
    }

    donate() {
        window.open(this.props.link, '_blank')
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return <div className="col-sm-6"> 
            <div className="thumbnail">
                <div className="thumbnail-house text-center">
                    <img className="thumbnail-img center-block" src={this.props.img_url} alt={this.props.title} />
                </div>
                <div className="caption">
                    <h3 className="text-uppercase">{this.props.title}</h3>
                    <div className="badge badge-success text-uppercase location"><span className="glyphicon glyphicon-map-marker"></span> {this.props.org.city}, {this.props.org.state}</div> <br/><br/>
                    <p>{this.props.story.slice(0, 60)}...</p>
                    <p><a href="#" className="btn btn-default" role="button" onClick={this.open}>Learn More</a></p>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton className="modal-header">
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h3>{this.props.org.name}</h3>
                            <p>{this.props.story}</p><br />
                            <p><strong>Amount Needed: </strong> {this.props.amount}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="donate-button" onClick={this.donate}>Donate</Button>
                            <Button className="close-button" onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </div>
    }
}

export default GiveCard