import React from 'react';
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from './Container';

const ShippingPolicy = () => {
  return (
    <div>
    <Meta title={"Shipping Policy"} />
    <BreadCrumb title="Shipping Policy" />
    <Container class1="policy-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                <h1>Shipping Speeds and Charges</h1>
We display shipping speeds and charges based on the items in your cart and the delivery address.<br/>

Fulfilled by Amazon and Prime Eligible Items<br/>
For certain products sold on Amazon.in, the customer will have an option of Guaranteed Morning, Same-Day, One/Two-Day Delivery. The Guaranteed Delivery options are available on Prime Eligible items in select cities. To learn more, go to Terms and Conditions for Guaranteed Delivery and Guaranteed Shipping Speeds and Delivery Charges.<br/>

Amazon provides you a variety of delivery options to fulfill customer needs. Here is a list of Amazon delivery options and charges applicable.<br/>

Note:<br/>
Shipping speeds cannot be expedited.<br/>
Once an order is placed, you cannot change the shipping address.<br/>
These charges apply only on Prime eligible and Fulfilled by Amazon items.<br/>

Shipping Speed	Charge Per Item***: Prime Members	Charge Per Item***: Prime Lite Members	Charge Per Item***: Non-Prime Members<br/>
Same-Day Delivery*	Free	₹175	₹175<br/>
Morning Delivery*	₹50	₹175	₹175<br/>
One-Day Delivery	Free	₹150	₹150<br/>
Two-Day Delivery	Free	Free	₹120<br/>
No-Rush Delivery	Free	Free	N.A<br/>
Standard Delivery**	Free	Free	₹40<br/>
*You can only choose Morning delivery and Same-Day delivery for residential addresses.<br/>
*We deliver by 11 am for Morning delivery and by 10 pm for Same-Day delivery.<br/>
**Standard Delivery charges are free for non-Prime members for orders that cost ₹499 or more.<br/>
**We deliver orders placed with Standard Delivery in two or more days after they ship. You see the estimated delivery date before you place the order.<br/>
***The applicable delivery charge will be levied even for multiple quantities of the same product. The ship fee per item structure is limited to standard and fast track speeds for Prime and non-Prime customers mentioned in the above table.<br/>
Disclaimer: There is no prime offering for international customers. International customers will be charged shipping fees when purchasing a product from Amazon India. The shipping charges are calculated basis the weight of the product being ordered and is mentioned on the detail page of the product.<br/>
Seller Fulfilled Items that Aren't Prime Eligible<br/>
The seller ships these items directly. The shipping speeds and charges for these items vary depending on the seller. You see the speeds and charges before you place the order.<br/>

Delivery charges (if any) on these items apply for both Prime and non-Prime members. To know about your orders and delivery, Contact a Marketplace Seller.<br/>

Disclaimer<br/>
There is no prime offering for international customers. International customers will be charged shipping fees when purchasing a product from Amazon India. The shipping charges are calculated basis the weight of the product being ordered and is mentioned on the detail page of the product.<br/>
                </p>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default ShippingPolicy