import React, { useEffect, useState } from 'react'
import "./Contact.css"


import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';
import { useSelector } from 'react-redux';

const Contact = () => {
    const users = useSelector(state => state.user.user);
    const [user, setUser] = useState({});
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""

    })

    const inputHanlder = (e) => {
        const { name, value } = e.target;

        setInput(preVal => {
            return {
                ...preVal,
                [name]: value
            }
        })

    }


    const handleForm = async (e) => {
        e.preventDefault();
        try {
            


            async function res() {
                const res = await axios.post(`${SERVER_URl}/contact`, input);
                setInput({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
    
    
                })
                return res
            }
            toast.promise(
                res,
                {
                    pending: 'Please Wait! Message Sending...',
                    success: 'Thanks for Contacting me, I will reach you soon!',
                    error: 'Opps something goes wrong! 🤯'
                }
            )


        } catch (error) {
            // alert(error.response.data.message)
            toast.error(error.response.data.message);
        }

    }


    useEffect(()=>{
        setUser(users)
    },[users])

    return (
        <>
            <section id='contact'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <div className='sec-heading' data-aos="zoom-in">
                                <h5>CONTACT</h5>
                                <h2>I'd Love To Hear From You.</h2>
                            </div>

                            {/* <div className='contact-form'>
                                <form onSubmit={handleForm} autoComplete='off'>
                                    <div data-aos="fade-right">
                                        <input type="text" placeholder='Name' name='name' value={input.name} onChange={inputHanlder} required />
                                        <span></span>
                                    </div>
                                    <div data-aos="fade-left">
                                        <input type="email" placeholder='Email' name='email' value={input.email} onChange={inputHanlder} required />
                                        <span></span>
                                    </div>
                                    <div data-aos="zoom-in">

                                        <input type="text" placeholder='Subject' name='subject' value={input.subject} onChange={inputHanlder} required />
                                        <span></span>

                                    </div>
                                    <div data-aos="fade-up">
                                        <textarea rows="5" placeholder='Message' name='message' value={input.message} onChange={inputHanlder} required></textarea>
                                        <span></span>

                                    </div>
                                    <div className='c-btn' data-aos="zoom-in">
                                        <button>SUBMIT</button>
                                    </div>
                                </form>
                            </div> */}


                            <div className='row text-center contact-box-wrap'>

                                <div className='col-md-4' data-aos="fade-right">
                                    <div className='contact-box'>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <h4>WHERE TO FIND ME</h4>
                                        <p>Pir Baba district Buneer</p>
                                    </div>
                                </div>

                                <div className='col-md-4' data-aos="fade-down">
                                    <div className='contact-box'>
                                        <i className="fa-sharp fa-regular fa-envelope"></i>
                                        <h4>EMAIL ME AT</h4>
                                        <p>itstudents005@gmail.com</p>
                                    </div>
                                </div>

                                <div className='col-md-4' data-aos="fade-left">
                                    <div className='contact-box'>
                                        <i className="fa-solid fa-phone"></i>
                                        <h4>CALL ME AT</h4>
                                        <p>03452645064</p>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
