import { AiOutlineHome, AiOutlineMail  } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle  } from "react-icons/bi";

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from '../../components/Meta/Meta';

import Container from "../../components/Container/Container";
import './Contact.css';

const Contact = () => {
    return (
        <>
            {/* <div>Contact</div> */ }

            <Meta title='DGC | Contact US' />
            <BreadCrumb title='Contact US' />

            <Container className='home-wrapper-2 py-2 contact-wrapper'>
                <div className='row'>
                    <div className='col-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1818.0723715748024!2d91.72371728588263!3d24.306585818249708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x37517a6662754a1f%3A0x3d38a617e5566fa4!2zU3JlZW1hbmdhbCBJbm4gSG90ZWwgYW5kIFJlc3RhdXJhbnQg4Ka24KeN4Kaw4KeA4Kau4KaZ4KeN4KaX4KayIOCmh-CmqCDgprngp4vgpp_gp4fgprIg4KaP4Kao4KeN4KahIOCmsOCnh-CmuOCnjeCmn-CngeCmsOCnh-CmqOCnjeCmnywgTmVhciBQb2xsaWJpZGR1dCBPZmZpY2UsIERoYWthLU1vdWx2aWJhemFyIEhpZ2h3YXksIFN5bGhldCAzMjEw!3m2!1d24.305849499999997!2d91.7224134!5e0!3m2!1sen!2sbd!4v1704601449934!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>

                    <div className='col-12 mt-5'>
                        <div className='contact-inner-wrapper d-flex justify-content-around'>
                            <div>
                                <h3 className='contact-title mb-4'>Contact</h3>
                                <form className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' className='form-control' placeholder='Name' />
                                    </div>
                                    <div>
                                        <input type='email' className='form-control' placeholder='Email' />
                                    </div>
                                    <div>
                                        <input type='tel' className='form-control' placeholder='Mobile Number' />
                                    </div>
                                    <div>
                                        <textarea name='' id='' cols='30' rows='4' className='w-100' placeholder='Coments' />
                                    </div>
                                    <div>
                                            <button className='button border-0'>Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div>
                                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <AiOutlineHome className="fs-5" />
                                            <address className="mb-0">Hno:277, Near village chopal, Mandaura, Sonipat, Haryana</address>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <BiPhoneCall className="fs-5" />
                                            <a href="tel:+91 8264954234">+91 8264954234</a>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <AiOutlineMail className="fs-5" />
                                            <a href='mailto:heypeople.mern@gmail.com'>heypeople.mern@gmail.com</a>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-15">
                                            <BiInfoCircle className="fs-5" />
                                            <p className="mb-0">Monday 10 AM - 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact;