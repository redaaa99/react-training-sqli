import React, {Component} from 'react';

import FooterColumn from './FooterColumn';


class Footer extends Component {
    render() {
        const links = [
            {
                title: 'Features',
                links: ['Cool stuff','Random feature','Team feature','Stuff for developers','Another one','Last time']
            },
            {
                title: 'Resources',
                links: ['Resource','Resource name','Another resource','Final resource']
            },
            {
                title: 'About',
                links: ['Team','Locations','Privacy','Terms']
            }
        ];
        return (
            <div className="container">
                <div className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                                 alt="" width="24" height="24"/>
                                <small className="d-block mb-3 text-muted">© 2017-2018</small>
                        </div>
                        {
                            links.map((element,index)=>(
                                <div key={index} className="col-6 col-md">
                                <h5>{element.title}</h5>
                                <ul className="list-unstyled text-small">
                                    {
                                        element.links.map((element,index)=>(
                                            <li><a key={index} className="text-muted" href="#">{element}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            ))
                        }
                        <FooterColumn/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;