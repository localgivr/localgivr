import React from 'react'
import { browserHistory } from 'react-router'
import './css/request.css'

class Request extends React.Component {
    constructor(props) {
        super(props)

        this.postRequest = this.postRequest.bind(this)
        this.getCats = this.getCats.bind(this)
        this.toggleCause = this.toggleCause.bind(this)

        this.state = {
            title: '',
            story: '',
            type_id: '',
            amount: '',
            expiration: '',
            link: '',
            img_url: '',
            zip: '',
            cats: [],
            lookupCats: []
           // token: ''
        }
    }

    postRequest() {
        var token = sessionStorage.getItem('token')
        fetch('/api/needs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                token: token,
                need: {
                    title: this.state.title,
                    story: this.state.story,
                    type_id: this.state.type_id,
                    amount: this.state.amount,
                    expiration: this.state.expiration,
                    link: this.state.link,
                    img_url: this.state.img_url,
                    zip: this.state.zip,
                    cats: this.state.cats 
                }
                
            })
        })

        .then(response => response.json()) 
        .then(function(response) {
            browserHistory.push('/give')
        })
    }

    toggleCause(e, i) {
        if (e.target.checked) {
            let cats = this.state.cats
            cats.push(Number(e.target.value))
            this.setState({cats: cats})
        }
        else {
           let cats = this.state.cats
           cats = cats.filter(cat => cat !== Number(e.target.value)) 
           this.setState({cats: cats})
        }
    }

    getCats() {
        var token = sessionStorage.getItem('token')
        fetch('/api/cats?token=' + token)
            .then(res => res.json())
            .then(res => this.setState({ lookupCats: res.cats }))
    }

     componentDidMount() {
        this.getCats()
    }

    render() {
        let cats = this.state.lookupCats.map((cat, i) => <div className="checkbox" key={cat.id}>
                <label>
                    <input type="checkbox" value={cat.id} onChange={(e) => this.toggleCause(e, i)} checked={this.state.cats.includes(cat.id)} /> {cat.name}
                </label>
            </div>
        )

        return <div>
        <div className="request-header">
        <h1>How can your community lend a hand?</h1>
        <p></p> <br/> <br/>
        </div>   
        <div className="container"> 
            <div className="request-form">
                <div className="row">
                    <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="title" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" placeholder="Title of Request" onChange={(e) => this.setState({title: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="story" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" id="story" rows="5" placeholder="Description of your request and what the donations will go towards." onChange={(e) => this.setState({story: e.target.value})}></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip" className="col-sm-2 control-label">Request Zip Code</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="zip" placeholder="Zip Code" onChange={(e) => this.setState({zip: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="type" className="col-sm-2 control-label">Type of Request</label>
                        <div className="col-sm-10">
                        <div className="radio">
                            <label>
                                <input type="radio" name="type" id="money" value="1" onClick={(e) => this.setState({type_id: e.target.value})} />
                                Monetary Funding
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input type="radio" name="type" id="supplies" value="2" onClick={(e) => this.setState({type_id: e.target.value})} />
                                Supplies
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input type="radio" name="type" id="volunteer" value="3" onClick={(e) => this.setState({type_id: e.target.value})} />
                                Volunteer Opportunity
                            </label>
                            </div>
                        </div>
                    </div>
                     <div className="form-group">
                        <label htmlFor="cats" className="col-sm-2 control-label">Category of Request</label>
                        <div className="col-sm-10">
                            {cats}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount" className="col-sm-2 control-label">Amount Needed</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" id="amount" placeholder="$ Amount or Quantity" onChange={(e) => this.setState({amount: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiration" className="col-sm-2 control-label">Expiration</label>
                        <div className="col-sm-10">
                        <input type="date" className="form-control" id="expiration" placeholder="MM/DD/YYYY" onChange={(e) => this.setState({expiration: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="link" className="col-sm-2 control-label">Donation Link</label>
                        <div className="col-sm-10">
                        <input type="url" className="form-control" id="link" placeholder="http://" onChange={(e) => this.setState({link: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="img_url" className="col-sm-2 control-label">Image URL</label>
                        <div className="col-sm-10">
                        <input type="img_url" className="form-control" id="link" placeholder="http://" onChange={(e) => this.setState({img_url: e.target.value})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default" onClick={this.postRequest}>Submit Request</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}

export default Request