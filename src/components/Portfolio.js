    import React, { useEffect, useState } from 'react'


    import "./Portfolio.css"

    import SERVER_URl from '../utils/apiURl';
    import { useSelector } from 'react-redux';

    // IMPORT IMAGES
    import image1 from "../assets/img/join-it.PNG";
    import image2 from "../assets/img/todo-list.PNG";
    import image3 from "../assets/img/defince.PNG";
    import image4 from "../assets/img/crypto.PNG";
    import image5 from "../assets/img/ecommerece.PNG";
    import image6 from "../assets/img/insaf.PNG";
    import image7 from "../assets/img/insurance-hub.PNG";
    import image8 from "../assets/img/agri.PNG";


    const Portfolio = () => {
        const project = [
            {
                "image": image1,
                "name": "Join IT",
                "use": "Join It is an online platform designed to engage the younger generation and provide opportunities for fresh graduate students.",
                "live": "https://joinit.kp.gov.pk/"
            },
            {
                "image": image2,
                "name": "To-do list",
                "use": "A to-do list is a simple tool for organizing tasks and activities. It helps you plan, prioritize, and track what needs to be done, ensuring better productivity and time management.",
                "live": "https://students44.github.io/to-Dolist_app/"
            },
            {
                "image": image3,
                "name": "Definance",
                "use": "Html, css ,js",
                "live": "https://students44.github.io/Definance/"
            },
            {
                "image": image4,
                "name": "crypto Exchange",
                "use": "Cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible to counterfeit or double-spend. It operates on decentralized blockchain technology,",
                "live": "https://students44.github.io/crypto-curency/"
            },
            {
                "image": image5,
                "name": "E-commerce",
                "use": "this is one of the best online platform to buy the latest products and clothes ",
                "live": " https://students44.github.io/maze-london/"
            },
            {
                "image": image6,
                "name": "Kp Insaf Youth",
                "use": "The Insaf Rozgar Scheme is a government initiative in Pakistan aimed at promoting self-employment by providing interest-free loans to unemployed individuals, especially in underprivileged areas.",
                "live": " https://students44.github.io/KPYouth/"
            },
            {
                "image": image7,
                "name": "Insurance Hub",
                "use": "Insurance Hub is a centralized platform offering a wide range of insurance services, including health, life, auto, and property coverage. It simplifies the process of comparing, selecting, and managing insurance plans",
                "live": "https://students44.github.io/Insurance-hub/"
            },
            {
                "image": image8,
                "name": " Integrated Farmer Registry",
                "use": "The Integrated Farmer Registry is a centralized digital platform designed to record and manage detailed information about farmers, their landholdings, and agricultural activities",
                "live": "https://kissan.kp.gov.pk/"
            }
        ]

        return (
            <>
                <section className='portfolio'>
                    
                    <div className='container'>
                        <div className="row ">
                            <div className="col-lg-10 mx-auto">
                                <div className='sec-heading text-center' data-aos="zoom-in">
                                    <h5>PORTFOLIO</h5>
                                    <h2>Check Out Some of My Works.</h2>
                                </div>


                                <div className='row gx-3 '>


                                    {
                                        project?.map((e, i) => {
                                            return (
                                                <div className='col-xl-4 col-sm-6' key={i} data-aos={e.aos} >
                                                    <div className='potfolio-card simple bg-light'>
                                                        <img src={e.image} width="100%" />

                                                        <div className='f-overlay'>
                                                            <h3>{e.name}</h3>
                                                            <p>{e.use}</p>
                                                            <div className='f-btns'>
                                                                {/* <a href={e.github} target='_blank'>
                                                                    <i className="fa-brands fa-github" ></i>Github
                                                                </a> */}
                                                                <a href={e.live} target='_blank'>
                                                                    <i className="fa-regular fa-eye"></i> View
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })

                                    }




                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    export default Portfolio
