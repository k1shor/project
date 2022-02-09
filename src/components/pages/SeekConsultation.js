import React from 'react';
import { isAuthenticated } from '../auth';
import { propertyDetails } from '../uiapi';
import { useState, useEffect } from 'react';
const BookNow = (props) => {
    const user = isAuthenticated()
    const [values, setValues] = useState({
        property_title: 'props.property_title',
        property_location: 'props.property_location',
        property_availability: true,
        property_price: 'props.property_price',
        property_status: '',
        property_image:'props.property_image',
        listing_type:'props.listing_type',
        category: 'props.category',
        booked_by:'user.email',
        error: '',
        choice:'',
        success: false,
        formData: ''
    })
    const { property_title, property_location, property_availability, property_price, property_status, property_image, listing_type, category, error, choice, success, formData } = values

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
    
    const handleChange=name=>event=>{
        const value=name==='property_image'? event.target.files[0]:event.target.value
        formData.set(name, value)
        console.log(value)
        setValues({...values,[name]:value})
    }
  return <div>
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
                        <select className="form-control" onChange={handleChange('choice')} >
                                        <option value={"on site"}>On Site</option>
                                        <option value={"off site"}>Off Site</option>
                                        
                                        </select>
                        <div class='btn-group'>
                        <button className="btn btn-primary" onClick={()=>{
                            
                        }}>Seek Consulation</button>
                        </div>
                    </div>
                </div>
            </div>

  </div>;
};

export default BookNow;
