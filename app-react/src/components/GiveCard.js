import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './css/give.css'



class GiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.donate = this.donate.bind(this)
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        // this.getNeeds = this.getNeeds.bind(this)

        this.state = {
            showModal: false,
            // needs: []
        }
    }

    donate() {

        // send post to backend that need has been filled.
        console.log("LOOK AN ID: "+this.props.id)
        console.log("look a key: "+this.props.index)

        // trigger re-render without the clicked need
        this.fillNeed()
        // try and fill with database
        // if success, open link in new page
        // if not, show error
        console.log(this.state)
        this.props.kickNeed(this.props.index)
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
      .then( res => res.json() )
      .then( res => {
        console.log(res)
        if (res[0].error) {
          alert(res[0].error)
        } else {
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
                    <h3 className="text-uppercase text-center">{this.props.title}</h3>  
                    
                <div className="caption">
                    <div className="background-white">
                        <div className="badge badge-success text-uppercase location"><span className="glyphicon glyphicon-map-marker"></span> {this.props.city}, {this.props.state}</div> <br/><br/>
                        <p>{this.props.story.slice(0, 60)}...</p>
                        <p className="text-center"><a href="#" className="btn btn-default  modal-button" role="button" onClick={this.open}>Learn More</a></p> 
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
