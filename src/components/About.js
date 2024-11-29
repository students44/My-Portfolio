import React, { useEffect, useState } from 'react'

import "./About.css"
import Profile from './Profile'
import Skill from './Skill'
import Button from './Button'
import { toast } from 'react-toastify'
import axios from 'axios'
import SERVER_URl from '../utils/apiURl'
import { useSelector } from 'react-redux'

// CV
// import cv from "../assets/img/muneeb-cv.pdf"
import myCV from '../assets/doc/muneeb-cv.pdf';

import profile from "../assets/img/muneeb-khan.jpg"

const About = () => {
    
    const user = useSelector(state => state.user.user);
    const skill = useSelector(state => state.skills.skills);

    // console.log(skill)
    const [admin, setAdmin] = useState();
    const [cv, setCv] = useState();
    const [skills, setSkills] = useState([]);
  
   
    const getCv = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URl}/get-cv`);
            if (data.success) {
                setCv(data.cv.name);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        setAdmin(user);
        setSkills(skill)
        getCv();

    }, [user, skill])
    return (
        <>
            <section id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-10 col-md-12 mx-auto'>
                            <div data-aos="zoom-in">
                                <h6 className='sm-heading'>About</h6>
                                <h2 className='lg-heading'>Let me introduce myself.</h2>
                            </div>

                            <div className='row align-items-center profile-detail' data-aos="fade-up">
                                <div className='col-md-3' data-aos="fade-right">
                                    <img src={profile} alt='' width="100%" />
                                </div>

                                <div className='col-md-9  ' data-aos="fade-left">
                                    {/* <p className=' text-justify '>{admin?.about}</p> */}
                                    <p className=' text-justify '> I am Muneeb khan, i am professional web developer, I will create innovate, scalable web applications using technologies such as JavaScript and React. I am a team player with strong problem-solving skills and a desire to improve my craft continuously. I am dedicated to delivering high-quality, user-centric software that meets the needs of my clients and end-users.</p>
                                </div>

                            </div>


                            <div className='row' data-aos="zoom-out">
                                <div className='col-sm-6'>
                                    <Profile user={admin} />
                                </div>
                                <div className='col-sm-6 '>
                                    <Skill skill={skills} />
                                </div>
                            </div>

                            <div className='about-btns d-flex justify-content-center flex-wrap ' >
                                <Button cls="btn--outline" text="Contact Me" link="#contact" />
                                <a href={myCV} target={"_blank"} download="Muneeb CV" className={"p-btn btn-dark"}>
                                    Download CV
                                </a>
                                {/* <Button cls="btn-dark" text="Download CV" link={cv} new={true} /> */}
                                {/* <a href={} download={`${SERVER_URl}/${cv}`} target='_blank' >
                                    <Button cls="btn-dark" text="Download CV" url="cv" />

                                </a> */}

                            </div>


                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default About
