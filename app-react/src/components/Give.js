import React from 'react'
import GiveCard from './GiveCard'

class Give extends React.Component {
        // contstructor(props) {
        //     super(props)

        //     this.getNeeds = this.getNeeds.bind(this)

        //     this.state = {
        //         needs:[]
        //     }
        // }

        // componentDidMount() {
        //     this.getNeeds()
        // }    

        // getNeeds() {
        //     fetch('/api/needs')
        //     .then(res => res.json())
        //     .then(res => this.setState({needs: res}))
        //     .then(res => console.log(this.state.needs))
        // }


    render() {
        // var Needs = this.state.needs.map((need, i) => {
        //     return <GiveCard need = {need} key={i} />
        // })

        return <div>
            <h1>Give back to your community.</h1> <br /> <br />
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                        <div className="caption">
                            <h3>Title of Request</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                            <p><a href="#" className="btn btn-default" role="button">Learn More</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                        <div className="caption">
                            <h3>Title of Request</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                            <p><a href="#" className="btn btn-default" role="button">Learn More</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="https://unsplash.it/200/200/?blur" alt="Cool image!" />
                        <div className="caption">
                            <h3>Title of Request</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magni est voluptate.</p>
                            <p><a href="#" className="btn btn-default" role="button">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Give