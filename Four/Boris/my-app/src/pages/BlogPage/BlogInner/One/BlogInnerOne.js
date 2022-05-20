import React from "react";
import './bloginnerone.css';

export default class BlogInnerOne extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button className='btn' onClick={()=> this.setState({isOpen: true})}>start planning you corporate event</button>
                {this.state.isOpen && (<div className='blog'>
                    <div className='blog-body'>
                        <h3>corporate & social catering</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laboriosam molestiae nihil quod! Eius, necessitatibus nihil quos veniam voluptas voluptatibus!</p>
                        <p>Our Full Service Party Package is a one-stop, party planning solution that is ideal for clients and guest looking for a more full service event experience with food, event staff. The Party Package includes:</p>
                        <ul>
                            <li>Six hors d’oeuvres to be passed for up to 1.5 hours OR one appetizer station</li>
                            <li>Event staff to set up, serve & clean up</li>
                            <li>Passing platters, napkins & supplies</li>
                            <li>Event administration & delivery fees included</li>
                            <li>Option to add dinner service and bar & beverage</li>
                            <li>Up to 3 hour event </li>
                            <p>Not included: NYS sales tax and staff gratuity, rentals such as guest tables, chairs & linens

                                Pricing starts at $75 per guest, 35 guest minimum</p>
                            <button className='btn_inner'>order</button>
                            <button className='btn_inner' onClick={()=> this.setState({isOpen:false})}>Close</button>
                        </ul>
                    </div>
                </div> )}
            </React.Fragment>
        )
    }

}