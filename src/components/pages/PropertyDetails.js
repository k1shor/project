import React from 'react'
import Nav from '../layout/Nav'
import Footer from '../layout/Footer'

import { propertyDetails, listRelated } from '../uiapi'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PropertyDetails = (props) => {
    const [property,setProperty]=useState({})
    const [error,setError]=useState(false)
    const [relatedProperty,setRelatedProperty] = useState([])


    const loadSingleProduct=propertyId=>{
        propertyDetails(propertyId).then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setProperty(data)
                //after fetching single product then fetch related products in same category 
                listRelated(data._id).then(data=>{
                    if(data.error){
                        setError(data.error)
                    }
                    else{
                        setRelatedProperty(data)
                    }
                })
            }
        })
    }

    useEffect(()=>{
        const propertyId=props.match.params.id
        // console.log(propertyId)
        // loadSingleProduct(propertyId)
    },[props])

    
    return (
        <>
            <Nav />

            <ToastContainer position="top-center" theme="colored"/>
                <div className="card shadow-lg mb-3 mt-4 offset-md-3" style={{maxWidth:'800px'}}>
                    <div className="row g-0">
                        <div className="col-md-6 mt-3 mb-3 p-3">
                            <img src={`http://localhost:5000/${property.property_image}`} className="image-fluid rounded-start" alt={property.property_name}/>
                        </div>
                        <div className="col-md-6 mt-4 mb-3">
                            <div className="card-body">
                            <h5 className="card-title">{property.property_name}</h5>
                            <h5 className="card-text">Rs. {property.property_price}</h5>
                            <p className="card-text  text-dark">{property.property_desc}</p>
                            <button className="btn btn-success" onClick={<></>}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                {relatedProperty.length>0 && (
                    <div className="container mt-3 mb-3">
                        <center><h2 className="mb-2 mt-1">Related Products</h2></center>
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {relatedProperty.map((product,i)=>(
                                <div class="col">
                                <div class="card">
                                    <img style={{ 'height': '200px' }} src={`http://localhost:5000/${product.property_image}`} class="card-img-top" alt={``} />
                                    <div class="card-body">
                                        <h4 class="card-title">{product.property_title}
                                        </h4>
                                        <h6 className='card-title'>{product.property_price}</h6>
                                        <h6 className='card-title'>Availablity:
                                            {product.property_availability ? "YES" : "NO"}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                                
                            ))}

                        </div>
                    </div>
                )}


            <Footer />
        </>
    )
}

export default PropertyDetails
