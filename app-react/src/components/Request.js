import React from 'react'
import './css/request.css'

class Request extends React.Component {
    render() {
        return <div>
            <h1>How can your community lend a hand?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur saepe, architecto animi doloribus enim impedit deserunt, illum placeat atque corrupti incidunt odit officiis veritatis fugit eum. Quam hic quisquam cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptate placeat veritatis porro ducimus consequuntur adipisci expedita nulla error, consequatur, autem laboriosam beatae corrupti voluptatum ullam saepe ab, deserunt quasi.</p> <br/> <br/>
            
            <div className="request-form">
                <div className="row">
                    <div className="form-horizontal">
                    <div className="form-group">
                        <label for="title" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" placeholder="Title of Request" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                        <textarea className="form-control" id="description" rows="5" placeholder="Description of your request and what the donations will go towards."></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="type" className="col-sm-2 control-label">Type of Request</label>
                        <div className="col-sm-10">
                        <div className="radio">
                            <label>
                                <input type="radio" name="type" id="money" value="money" />
                                Monetary Funding
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input type="radio" name="type" id="supplies" value="supplies" />
                                Supplies
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="amount" className="col-sm-2 control-label">Amount Needed</label>
                        <div className="col-sm-10">
                        <input type="number" className="form-control" id="amount" placeholder="$ Amount or Quantity" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="expiration" className="col-sm-2 control-label">Expiration</label>
                        <div className="col-sm-10">
                        <input type="date" className="form-control" id="expiration" placeholder="MM/DD/YYYY" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="link" className="col-sm-2 control-label">Donation Link</label>
                        <div className="col-sm-10">
                        <input type="url" className="form-control" id="link" placeholder="http://" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default">Submit Request</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Request