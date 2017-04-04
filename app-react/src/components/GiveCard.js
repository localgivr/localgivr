import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class GiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.close = this.close.bind(this)
        this.open = this.open.bind(this)

        this.state = {
            showModal: false
        }

    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return <div>
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                <div className="caption">
                    <h3>Title of Request</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                    <p><a href="#" className="btn btn-default" role="button" onClick={this.open}>Learn More</a></p>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>stuff</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </div>
    </div>
    }
}

export default GiveCard