import React from 'react'
import GiveCard from './GiveCard'


class Give extends React.Component {

    render() {

        return <div>

            <h1>Give back to your community.</h1> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fugit molestias doloribus optio ipsam debitis voluptas dolorem nihil, maxime sequi veritatis sunt atque asperiores assumenda reiciendis velit ad iusto tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis, id quae a in accusantium, molestias amet deserunt. Ipsam, quas cumque, fuga officiis reprehenderit soluta est. Voluptas, unde totam quidem! </p><br /> <br />

            <h1>Give back to your community.</h1> <br /> <br />

            <div className="row">
                <GiveCard />
                <GiveCard />
                <GiveCard />
            </div>
        </div>
    }
}

export default Give
