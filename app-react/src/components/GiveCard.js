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
        <div className="col-sm-6">
            <div className="thumbnail">
                <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                <div className="caption">
                    <h3>Title of Request</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                    <p><a href="#" className="btn btn-default" role="button" onClick={this.open}>Learn More</a></p>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Name of Request</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea optio nulla, quae, et totam hic dolorum soluta deserunt, deleniti ducimus aspernatur illo accusamus, vel maiores nobis facilis maxime dignissimos quam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolorum qui ex animi perspiciatis debitis facere quisquam, eos maxime provident repellat numquam dolorem natus, sunt, temporibus sit rem ratione magnam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, laboriosam minima quas. Eaque dolorum, omnis animi ducimus tenetur, quidem soluta repudiandae velit! Cupiditate officia earum itaque obcaecati quae, dolores quaerat.</p>
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