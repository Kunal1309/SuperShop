import React, { useState } from 'react';
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import {AiOutlineHome} from "react-icons/ai";
import {AiFillMail} from "react-icons/ai";
import {MdWifiCalling3} from "react-icons/md";
import {BsInfoCircle} from "react-icons/bs";
import Container from './Container';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comments, setComments] = useState("");

  function contactForm(e){
    e.preventDefault();
    if(name.length>=1 && email.length>=1 && number.length>=1 && comments.length>=1){
        alert (`Mr. ${name}, Thanks For Contact Us. Our Team Will Contact You on ${number} or on ${email} very soon!`);
        setName("");
        setEmail("");
        setNumber("");
        setComments("");
    }
    else{
      alert("Please fill all details!")
    }
  }

  return (
    <div>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <iframe title='kunal' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d497.7400291202273!2d79.3807998295093!3d20.499221880214865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680458784807!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='form-control' placeholder='name'/>
                    </div>
                    <div>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control' placeholder='email'/>
                    </div>
                    <div>
                      <input value={number} onChange={(e)=>setNumber(e.target.value)} type="tel" className='form-control' placeholder='mobile number'/>
                    </div>
                    <div>
                      <textarea value={comments} onChange={(e)=>setComments(e.target.value)} name='' id='' cols="30" className='w-100 form-control' rows="4" placeholder='comments'></textarea>
                    </div>
                    <div><button onClick={contactForm} className='button border-0'>Submit</button></div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>Rajiv Gandhi Colony, Chimur, Dist:-Chandrapur, Maharashtra, INDIA - 442903</address>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <MdWifiCalling3 className='fs-5'/>
                        <a href='tel:+91 6202745560'>(+91) 6202745560</a>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiFillMail className='fs-5'/>
                        <a href='mailto:titarekunal@gmail.com'>titarekunal@gmail</a>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday from 10AM - 8PM</p>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Contact