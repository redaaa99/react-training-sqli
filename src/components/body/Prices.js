import React, {Component} from 'react';
import PriceCard from './PriceCard';

class Prices extends Component {
    render() {
        const data = [
            {
                type: 'Free',
                price: 0,
                characteristics: ["10 users included","2 GB of storage","Email support", "Help center access"],
                buttonText: 'Sign up for free'
            },
            {
                type: 'Pro',
                price: 15,
                characteristics: ["20 users included","10 GB of storage","Priority email support", "Help center access"],
                buttonText: 'Get started'
            },
            {
                type: 'Enterprise',
                price: 29,
                characteristics: ["30 users included","15 GB of storage","Phone and email support", "Help center access"],
                buttonText: 'Contact us'
            }
        ];
        return (
            <div className={"card-deck mb-3 text-center"}>
                { data.map((element,index)=>(<PriceCard key={index} infos={element} />) )}
            </div>
        );
    }
}

export default Prices;