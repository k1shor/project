import React from 'react';
import { isAuthenticated } from '../auth';
import { propertyDetails } from '../uiapi';
import { useState, useEffect } from 'react';
import { createbooking } from '../admin/apiAdmin';
import { Redirect } from 'react-router-dom';

const BookNow = (props) => {
    const user = isAuthenticated()
    const [redirect, setRedirect] = useState('')
    const [values, setValues] = useState({
        property_title: props.property_title,
        property_owner: props.property_owner,
        property_location: props.property_location,
        property_availability: true,
        property_price: props.property_price,
        property_status: 'booked',
        property_image: props.property_image,
        listing_type: props.listing_type,
        category: props.category,
        booked_by: user.email,
        error: '',
        success: false,

    })
    const { property_title, property_owner, property_location, property_availability, property_price, property_status, property_image, listing_type, category, error, success, formData } = values

    const [property, setProperty] = useState({})

    const loadSingleProduct = propertyId => {
        propertyDetails(propertyId).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setProperty(data)
            }
        })
    }
    useEffect(() => {
        const propertyId = props.match.params.id
        loadSingleProduct(propertyId)
    }, [props])

    const clickSubmit = event => {
        event.preventDefault()
        // console.log(user.user.email)
        setValues({
            ...values,
            property_title: property.property_title,
            property_owner: property.added_by,
            property_location: property.property_location,
            property_availability: false,
            property_price: property.property_price,
            property_status: 'booked',
            property_image: property.property_image,
            listing_type: property.listing_type,
            category: property.category,
            booked_by: user.user.email,
            success:true,
            error: ''
        })
        console.log(values)
console.log(user)

        createbooking(user, values)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setRedirect(true)
                }
            })
    }
    const redirectTo = () => {
        if (redirect) {

            return <Redirect to={`/bookingdone`} />

        }
    }
    //to show error msg
    const showError = () => (
        <div className="alert-alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    )
    return <div>
        {showError()}
        {redirectTo()}
        <div className='container-fluid my-5 mx-auto'>
            <div className='row align-items-center'>
                <div className='col col-md-7 text-center'>
                    <img src={`http://localhost:5000/${property.property_image}`} className="image-fluid rounded-start" alt={property.property_name} style={{ 'width': '80%' }} />
                </div>
                <div className='col col-md-5'>
                    <h5 className="card-title h1">{property.property_title}</h5>
                    <h5 className="card-title h3">Location:{property.property_location}</h5>

                    <h5 className="card-title">{property.property_name}</h5>
                    <h5 className="card-text">Price: Rs.{property.property_price}</h5>
                    <p className="card-text  text-dark">Description:<b>{property.property_desc}</b></p>

                    {property.property_availability ?
                        <div class='btn-group'>
                            <button className="btn btn-success" onClick={clickSubmit}>Confirm Booking</button>

                        </div>
                        : "This listing is not available at the moment."}


                </div>
            </div>
        </div>
    </div>


};

export default BookNow;
