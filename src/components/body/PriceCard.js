import React, {Component} from 'react';

class PriceCard extends Component {
    render() {
        return (
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{this.props.infos.title}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">${this.props.infos.price} <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        {
                            this.props.infos.characteristics.map((element,index)=>(<li>{element}</li>))
                        }
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">{this.props.infos.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default PriceCard;