import React from 'react'
import './css/text.css'
import '../helpers/helps.js'
import {handleErrors} from '../helpers/helps.js'

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
      console.log("params:")
      console.log(this.props.params)

      fetch('/api/needs/' + id)
      .then(res => res.json())
      .then(res => {
        this.setState({needs: res.need})
      })
    }

    donate() {
      let id = this.props.params.id
      let token = this.props.params.token
      console.log(token)
      fetch('/api/needs/'+ id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          token: token
        })
      })
      .then( res => res.json())
      .then( res => {
        console.log(res)
        if (res.errors) {
          var errors = handleErrors(res.errors)
          alert(errors)
        } else {
          window.open(this.props.link, '_blank')
        }
      })
    }

     componentDidMount() {
        this.textFeed()
    }

    render() {
        return <div className="text">
        <div className="container text-center">
            <div className="text-card">
                <h1>{this.state.needs.title}</h1>
                <h1>{"hi"}</h1>
                <br/>
                <img src={this.state.needs.img_url} alt={this.state.needs.title} />
                <br/>
                <h3>{this.state.needs.org ? this.state.needs.org.name : ''}</h3>
                <p>{this.state.needs.story}</p>
                <br/>
                <p><strong>Category: </strong>{this.state.needs.cats}</p>
                <p><strong>Amount Needed: </strong>{this.state.needs.amount}</p>
                <br/>
                <button type="button" className="btn donate-button-text" onClick={this.donate}>Donate</button>
            </div>
        </div>
    </div>
    }
}

export default Text
