import React, { useEffect, useState } from 'react'
import ResumeDetail from './ResumeDetail'
import "./Resume.css"
import { useSelector } from 'react-redux'
const Resume = () => {
    const education = useSelector(state => state.edu.edu);
    const experience = useSelector(state => state.exp.exp);

    const [edu, setEdu] = useState([]);
    const [exp, setExp] = useState([]);


    useEffect(() => {
        setEdu(education);
        setExp(experience)
    }, [education, experience])

    return (
        <>
            <section id='resume'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-10 col-md-12  mx-auto'>
                            <div className='sec-heading' data-aos="zoom-in">
                                <h5>Resume</h5>
                                <h2>More of my credentials.</h2>
                            </div>


                            {/* EXPERIENCE */}
                            <div className='resume-detail py-5'>
                                <h3>Experience</h3>

                                <div className='resume-detail-wrap'>

                                    <div className='row  r-d '>

                                        <div className='col-lg-4 col-md-4 text-md-right ' data-aos="fade-down-right">
                                            <div className='p-heading'>
                                                <h4>Frontend Developer at Code soft</h4>
                                                <p>25- April- 2024 -  25-May-2024</p>

                                                <div className='graduation-icon'>
                                                    <i className="fa-solid fa-briefcase"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='col-lg-7 col-md-7 offset-md-1  ' data-aos="fade-down-left">
                                            <div className='p-detail'>
                                                <h5>Code Soft</h5>
                                                <p>I successfully completed a 2-month Frontend Development internship at code soft remotely Internship. During this time, I actively applied my knowledge of HTML, CSS, Bootstrap, and JavaScript to real-world projects. This hands-on experience allowed me to refine my skills in crafting interactive and visually appealing user interfaces. I am now eager to bring this practical experience and enthusiasm for frontend development to new challenges and projects.</p>
                                            </div>
                                        </div>
                                    </div>

                                       <div className='row  r-d '>

                                        <div className='col-lg-4 col-md-4 text-md-right ' data-aos="fade-down-right">
                                            <div className='p-heading'>
                                                <h4>Frontend Developer at KpITB</h4>
                                                <p>1 August -To November</p>

                                                <div className='graduation-icon'>
                                                    <i className="fa-solid fa-briefcase"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className='col-lg-7 col-md-7 offset-md-1  ' data-aos="fade-down-left">
                                            <div className='p-detail'>
                                                <h5>KPITB</h5>
                                                <p>I've been working at KpITB for the past three months in front-end technology to gain experience from my seniors and improve my code structure. </p>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>



                            </div >


                            {/* EDUCATION */}
                            <div className='resume-detail py-5'>
                                <h3>EDUCATION</h3>

                                <div className='resume-detail-wrap'>

                                    <div className='row  r-d '>

                                        <div className='col-lg-4 col-md-4 text-md-right ' data-aos="fade-down-right">
                                            <div className='p-heading'>
                                                <h4>FSC</h4>
                                                <p> 2018</p>

                                                <div className='graduation-icon'>
                                                    <i className="fa-solid fa-graduation-cap"></i>
                                                </div>
                                                

                                            </div>
                                        </div>

                                        <div className='col-lg-7 col-md-7 offset-md-1  ' data-aos="fade-down-left">
                                            <div className='p-detail'>
                                                <h5>Government Degree College Dagger Buner</h5>
                                                <p>I successfully completed my college  education from Government Degree college dagger Buner in the years 2016 to 2018. During this time, I gained valuable knowledge and skills in various subjects and developed a strong foundation for my future academic pursuits.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row  r-d '>

                                <div className='col-lg-4 col-md-4 text-md-right ' data-aos="fade-down-right">
                                    <div className='p-heading'>
                                        <h4>Bachelor</h4>
                                        <p> 2020 To 2024</p>

                                        <div className='graduation-icon'>
                                            <i className="fa-solid fa-graduation-cap"></i>
                                        </div>
                                        

                                    </div>
                                </div>

                                <div className='col-lg-7 col-md-7 offset-md-1  ' data-aos="fade-down-left">
                                    <div className='p-detail'>
                                        <h5>Agriculture University peshawar</h5>
                                        <p>I graduated from Agriculture University Peshawar in 2024, completing my studies from 2020 to 2024. During this period, I acquired extensive knowledge and skills across various disciplines, establishing a solid foundation for my academic and professional growth.</p>
                                    </div>
                                </div>
                                </div>  

                                </div>



                            </div >


                            {/* <ResumeDetail jobIcon heading={"Experience"} data={exp} />
                            <ResumeDetail heading={"Education"} data={edu} /> */}


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
