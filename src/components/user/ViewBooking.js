import React, { useEffect, useState } from 'react';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import { isAuthenticated } from '../auth';
import { getBooking } from '../admin/apiAdmin';

const ViewBooking = ({ match }) => {
    const { token } = isAuthenticated()
    const [values, setValues] = useState({
        title: '',
        owner:'',
        location: '',
        availability: true,
        price: '',
        desc: '',
        listing_type: '',
        image: '',
        categories: [],
        category: '',
        success: false,
    })

    const { title, owner, location, availability, price, desc, listing_type, image, categories, category } = values
    

    useEffect(() => {
        //find booking
        //find booking
        console.log(match.params.id)
        getBooking(token, match.params.id)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({
                        ...values,
                        title: data.property_title,
                        owner: data.property_owner,
                        location: data.property_location,
                        availability: data.property_availability,
                        price: data.property_price,
                        desc: data.property_desc,
                        listing_ype: data.listing_type,
                        image: data.property_image,
                        category: data.category,
                        error: '',
                        success: false,
                    })
                    // console.log("getting data")
                    // console.log(current)
                }
            })
            .catch(err => console.log(err))
    }, [])


    return <>
        <Nav />
        <div className='container w-50 shadow-lg p-5'>
            <main className="form-signin">
              
                <form>

                    <div className="text-primary fw-bold">

                        <h4>Booking Info:</h4><br />
                        <img src={`http://localhost:5000/${image}`} alt={title} style={{ 'width': '100%' }} /><br />

                        Title:{title}<br />
                        Owner:{ }<br />
                        Location:{location}<br />
                        Price:Rs.{price}<br />
                        Availablity:{availability ? "Yes" : "No"}<br />


                    </div>             
                    <a href='/user/mybookings' className="w-100 btn btn-lg btn-primary" >Go Back</a>
                </form>
            </main>
        </div>
        <Footer />
    </>;
};

export default ViewBooking;
