import React, { useEffect, useState } from 'react';
import Nav from '../layout/Nav';
import Footer from '../layout/Footer';
import { isAuthenticated } from '../auth';
import { getBooking, getContract } from '../admin/apiAdmin';

const Contract = ({ match }) => {
    const { token } = isAuthenticated()
    const [values, setValues] = useState({
        title: '',
        owner: '',
        location: '',
        availability: true,
        price: '',
        listing_type: '',
        image: '',
        categories: [],
        category: '',
        booked_by: '',
        success: false,
    })

    const { title, owner, location, availability, price, desc, listing_type, image, categories, category, booked_by } = values


    useEffect(() => {
        //find booking
        //find booking
        console.log(match.params.id)
        getContract(token, match.params.id)
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
                        listing_type: data.listing_type,
                        image: data.property_image,
                        category: data.category,
                        booked_by: data.booked_by,
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

                        <h4>Contract Info:</h4><br />
                        <img src={`http://localhost:5000/${image}`} alt={title} style={{ 'width': '100%' }} /><br />

                        Title:{title}<br />
                        Location:{location}<br />
                        Price:Rs.{price}<br />
                        {listing_type == "RENT" ?
                            <>Owner:{owner}<br />
                                <h4 className='text-warning'>This property has been provided on lease to </h4>
                                <h5 className='text-decoration-underline text-warning'>{booked_by}</h5> for a period of 1 year.
                            </>
                        :
                        
                        <>
                        <h4 className='text-warning'> This property has been sold to </h4>
                        <h5 className='text-decoration-underline text-warning'>{booked_by}</h5> by 
                        <h5 className='text-decoration-underline text-warning'>{owner}</h5>
                        </>}

                    </div>
                    <a href='/admin/contracts' className="w-100 btn btn-lg btn-primary" >Go Back</a>
                </form>
            </main>
        </div>
        <Footer />
    </>;
};

export default Contract;
