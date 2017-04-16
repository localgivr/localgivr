import React from 'react'

class Homepage extends React.Component {

  constructor(props) {
      super(props)

      this.getStuff.bind(this)

      this.state = {
        obj: {}
      }
  }

  getStuff() {
    var token = "FKvqzBN4mDawVZauadSHynVm"
    fetch('/api/users/profile?token='+token)
    .then(res => res.json())
    .then(res => obj: res)

  }

  componentDidMount() {
      this.getStuff()
  }

    render() {
        // console.log(obj)
        return <div className="container">
            <h1>Hello homepage.</h1>
            // <h2>this.state.obj</h2>
        </div>
    }
}
export default Homepage;
