import React from 'react';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav';

const Contact = () => {
    return <div>
        <Nav />
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 mx-auto">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Sydney Software Co. </h1>
                    <p className="col-lg-10 fs-4">Melbourne, Australia.<br/>
                        Phone No.: +61-123456789, <br/>Email: abc@sydneysoftware.com.au <br/>
                            website: www.sydneysoftware.com</p>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <form className="p-4 p-md-5 border rounded-3 bg-light">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>

                                <textarea rows="5" className="form-control" id="floatingPassword" placeholder="Message"></textarea>


                                <div className="checkbox mb-3">

                                </div>
                                <hr className="my-4" />
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Send Email</button>


                            </form>
                        </div>
                    </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8269463854826!2d144.96187521510214!3d-37.817522242031025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b47e85bb77%3A0xa1e8202aedcf419c!2sVictoria%20University%3A%20City%20Flinders%20Lane%20Campus!5e0!3m2!1sen!2snp!4v1644204375507!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <Footer />
            </div>;
            
};

            export default Contact;
