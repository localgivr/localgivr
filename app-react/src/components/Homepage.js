import React from 'react'

class Homepage extends React.Component {

  constructor(props) {
      super(props)

      this.getStuff = this.getStuff.bind(this)
      this.addAttr = this.addAttr.bind(this)
      this.state = {
        user: {},
        test: "hello"
      }
  }

  getStuff() {
    var token = "FKvqzBN4mDawVZauadSHynVm"
    fetch('/api/users/profile?token=' + token)
    .then(res => res.json())
    .then(res => {this.setState({user: res.user})})

  }

  addAttr(key, value) {
    this.setState({
      [key]: value
    })
  }

  componentDidMount() {
      this.getStuff()
  }

    render() {
        console.log(this.state)
        // this.addAttr("test", "pass?") //this is bad - lots of looping errors
        const {user} = this.state

        return <div className="container">
            <h1>Hello homepage.</h1>
            <h2>{user.first_name} {user.last_name}</h2>
        </div>
    }
}
export default Homepage;
