import React from 'react'
import GiveCard from './GiveCard'


class Give extends React.Component {

    render() {


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