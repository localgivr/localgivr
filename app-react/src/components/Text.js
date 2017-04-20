import React from 'react'
import './css/text.css'

class Text extends React.Component {
    constructor(props) {
        super(props)
        this.textFeed = this.textFeed.bind(this)
        this.donate = this.donate.bind(this)

        this.state = {
            needs: []
        }
    }

    textFeed(e, i) {
       // let id = e.target.getAttribute('value')
       let id = this.props.params.id 

        fetch('/api/needs/' + id)
        .then(res => res.json())
        //.then(res => console.log(res))
        .then(res => this.setState({needs: res.need}))
    }

    donate() {
        window.open(this.state.needs.link, '_blank')
    }

     componentDidMount() {
        this.textFeed()
    }

    render() {

        return <div className="text">
        <div className="container text-center">
            <div className="text-card">
                <h1>{this.state.needs.title}</h1>
                <br/>
                <img src={this.state.needs.img_url} alt={this.state.needs.title} />
                <br/>
                <h3>name!</h3>    
                <p>{this.state.needs.story}</p>    
                <br/>
                <p><strong>Category: </strong>{this.state.needs.cats}</p>
                <p><strong>Amount Needed: </strong>{this.state.needs.amount}</p>
                <br/>
                <button type="button" className="btn donate-button" onClick={this.donate}>Donate</button>
            </div>
        </div>   
    </div>
    }
}

export default Text