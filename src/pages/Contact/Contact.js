import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CustomInput from '../../components/CustomInput/CustomInput';

import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { useFormik, useField } from 'formik';

import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle  } from "react-icons/bi";

import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from '../../components/Meta/Meta';

import Container from "../../components/Container/Container";
import './Contact.css';

import { createQuery } from '../../features/contact/ContactSlice';

const Contact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    let schema = Yup.object().shape({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().email("Email Should be Valid").required("Email is Required"),
        mobile: Yup.number().required("Mobile Number is Required"),
        comments: Yup.string().required("Comments is Required"),
    });

    const contactState = useSelector((state) => state.contact?.contacts);
    // console.log('contactState -> ', contactState);

    const formik = useFormik({
        initialValues: {
        name: '',
        email: '',
        mobile: '',
        comments: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(createQuery(values));
            formik.resetForm();

        alert(JSON.stringify(values, null, 2));
        },
    });

    const nameError = formik.touched.name && formik.errors.name ? (
        <div className='error'>
            {formik.errors.name}
        </div>
    ) : null;

    const emailError = formik.touched.email && formik.errors.email ? (
        <div className='error'>
            {formik.errors.email}
        </div>
    ) : null;

    const mobileError = formik.touched.mobile && formik.errors.mobile ? (
        <div className='error'>
            {formik.errors.mobile}
        </div>
    ) : null;

    const commentsError = formik.touched.comments && formik.errors.comments ? (
        <div className='error'>
            {formik.errors.comments}
        </div>
    ) : null;

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
                                <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                    <div>
                                        <CustomInput
                                            type='text'
                                            label='Your Full Name'
                                            name='name'
                                            onChange={ formik.handleChange("name") }
                                            onBlur={ formik.handleChange("name") }
                                            value={ formik.values.name }
                                            />
                                        { nameError }
                                        {/* <input type='text' className='form-control' placeholder='Name' /> */}
                                    </div>

                                    <div>
                                        <CustomInput
                                            type='text'
                                            label='Enter Valid Email'
                                            name='email'
                                            onChange={ formik.handleChange("email") }
                                            onBlur={ formik.handleChange("email") }
                                            value={ formik.values.email }
                                            />
                                        { emailError }
                                        {/* <input type='email' className='form-control' placeholder='Email' /> */}
                                    </div>

                                    <div>
                                        <CustomInput
                                            type='tel'
                                            label='Enter Mobile Number'
                                            name='mobile'
                                            onChange={ formik.handleChange("mobile") }
                                            onBlur={ formik.handleChange("mobile") }
                                            value={ formik.values.mobile }
                                            />
                                        { mobileError }
                                        {/* <input type='tel' className='form-control' placeholder='Mobile Number' /> */}
                                    </div>

                                    <div>
                                        <label htmlFor='comments' className='mb-1'>Type Your Comments</label>

                                        <textarea
                                            cols='30'
                                            rows='4'
                                            id='comments'
                                            type='text'
                                            name='comments'
                                            className='w-100 form-control'
                                            onChange={ formik.handleChange("comments") }
                                            onBlur={ formik.handleChange("comments") }
                                            value={ formik.values.comments }
                                        />
                                        { commentsError }
                                        {/* <textarea name='' id='' cols='30' rows='4' className='w-100' placeholder='Coments' /> */}
                                    </div>

                                    <div>
                                            <button className='button border-0' type='submit'>Submit</button>
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