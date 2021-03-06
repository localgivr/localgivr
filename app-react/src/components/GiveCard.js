import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './css/give.css'
import {handleErrors} from '../helpers/helps.js'



class GiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.donate = this.donate.bind(this)
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.state = {
            showModal: false,
            // needs: []
        }
    }

    donate() {

        // trigger re-render without the clicked need
        this.fillNeed()
        // try and fill with database
        // if success, open link in new page
        // if not, show error
        console.log(this.state)
        this.setState({ showModal: false });
    }

    fillNeed() {
      var token = sessionStorage.getItem('token')
      console.log(token)
      fetch('/api/needs/'+this.props.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          token: token
        })
      })
      .then( res => {
        res.status === 418 && this.props.kickNeed(this.props.index)
        return res.json()
      } )
      .then( res => {
        console.log(res)
        if (res.errors) {
          var errors = handleErrors(res.errors)
          alert(errors)
        } else {
          this.props.kickNeed(this.props.index)
          window.open(this.props.link, '_blank')
        }
      })
    }


    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
       let categories = this.props.cats.map((cat, i) => {
           return <span key={i}>{cat}</span>
        })

        return <div className="col-sm-4">
            <div className="thumbnail">
                    <div className="thumbnail-house text-center">
                        <img className="thumbnail-img center-block" src={this.props.img_url} alt={this.props.title} />
                    </div>

                <div className="caption">
                    <div className="background-white text-center">
                        <h3 className="text-uppercase text-center">{this.props.title}</h3>
                        <div className="badge badge-success text-uppercase location"><span className="glyphicon glyphicon-map-marker"></span> {this.props.city}, {this.props.state}</div> <br/><br/>
                        <p className="text-left">{this.props.story.slice(0, 35)}...</p>
                        <p className="text-center"><button type="button" className="btn btn-default" onClick={this.open}>Learn More</button></p>


                    </div>


                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton className="modal-header">
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={this.props.img_url} alt={this.props.title} />
                            <h3>{this.props.org.name}</h3>
                            <p>{this.props.story}</p><br />
                            <p><strong>Category: </strong>{categories}</p>

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
