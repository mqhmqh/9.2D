import React, { Component } from 'react'
import Header from './Header';
import { Navigate } from "react-router-dom";

import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import StripePaymentForm from './StripePaymentForm';


export default class Plans extends Component {


  constructor() {
    super();
    this.state = {
      Signup: false,
      free: false,
      paying: localStorage.getItem("paying") === 'true'
    };
  }


  redirect_home = () => {
    this.setState({ free: true });
  };

  setPay = () => {
    this.setState({ Signup: true });
  };


  render() {

    if (this.state.free) {
      return <Navigate to={'/'} />;
    }


    return (


      <div>
        <Header />
        {this.state.paying && <PricingTable >

          <PricingSlot highlighted shouldDisplayButton={false} buttonText='Pay' title='PURCHASE' priceText='Congratulations' >

            <PricingDetail>
              you are already a paid member! You can access...
            </PricingDetail>
              <PricingDetail> <b>Talk</b> to Tutorial</PricingDetail>
              <PricingDetail bgcolor='black'> <b>Dashboard</b></PricingDetail>
          </PricingSlot>
        </PricingTable>}

        {!this.state.paying && <div>
          {!this.state.Signup && <PricingTable >
            <PricingSlot onClick={this.redirect_home} buttonText='For FREE' title='FREE' priceText='¥0' >
              <PricingDetail> <b>See</b> Tutorial Info</PricingDetail>
              <PricingDetail> <b>See</b> Articles</PricingDetail>
              <PricingDetail bgcolor='black'> <b>Dashboard</b></PricingDetail>
            </PricingSlot>
            <PricingSlot highlighted onClick={this.setPay} buttonText='Pay' title='PURCHASE' priceText='¥100' bgcolor='#0124f2'>
              <PricingDetail> <b>View</b> Questions</PricingDetail>
              <PricingDetail> <b>Post</b> Articles</PricingDetail>
              <PricingDetail > <b>Themes</b></PricingDetail>
              <PricingDetail > <b>Dashboard</b></PricingDetail>
            </PricingSlot>
          </PricingTable>}


          {this.state.Signup &&

            <StripePaymentForm />

          }
        </div>
        }


      </div>


    )
  }
}