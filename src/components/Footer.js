import React, { useEffect, useState } from 'react'
import "./Footer.css"
import axios from 'axios';
import SERVER_URl from '../utils/apiURl';
import { toast } from 'react-toastify';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    const [data, setData] = useState();

    const getUser = async(req, res)=>{
        try {
            const {data} = await axios.get(`${SERVER_URl}/admin/admin`);
            if(data.success){
                setData(data.admin);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(()=>{
        getUser();
    },[])

    return (
        <>
            <footer id='footer'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-10 mx-auto'>
                            <div className=' d-flex align-items-center justify-content-around flex-wrap '>

                                <div className='ft-left mb-5' data-aos="fade-right">
                                    <p>© Copyright {year}.</p>
                                </div>

                                <div className='ft-right ' data-aos="fade-left">
                                    <div className="header-social-icon w-100">
                                        <ul className=" d-flex align-items-center mb-0 justify-content-center ">
                                            <li><a href="https://www.facebook.com/dsdklasfafhkasfhkadlakfhkas?rdid=9gfoJHoJx1rlTj1U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15SBWya6Gz%2F" target='_blank'><i className={"fa-brands fa-facebook-f"}></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/muneeb-khan-95a860263/" target='_blank'><i className={"fa-brands fa-linkedin"}></i></a></li>
                                            {/* <li><a href="" target='_blank'><i className={"fa-brands fa-github"}></i></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
