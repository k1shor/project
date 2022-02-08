import React from 'react';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav';

const Contact = () => {
    return <div>
        <Nav />
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 mx-auto">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Ghar Jagga Pvt. Ltd. </h1>
                    <p className="col-lg-10 fs-4">Kathmandu, Nepal.<br/>
                        Phone No.: +977-9851012345, <br/>Email: info@gharjagga.com <br/>
                            website: www.gharjagga.com</p>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.276892025526!2d85.29111314602403!3d27.709031933628154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1644315514555!5m2!1sen!2snp" width="100%" height="450" style={{'border':'0'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <Footer />
            </div>;
            
};

            export default Contact;
