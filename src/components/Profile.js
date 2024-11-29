import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import SERVER_URl from '../utils/apiURl';

const Profile = ({user}) => {
    return (
        <>
            <div className='profile mb-5 pb-5'>
                <h3>Profile</h3>

                <div className='profile-content'>
                    <h4>FULLNAME:</h4>
                    <p>Muneeb Khan</p>
                </div>

                <div className='profile-content'>
                    <h4>BIRTH DATE:</h4>
                    <p>02-04-2000</p>
                </div>

                <div className='profile-content'>
                    <h4>EMAIL:</h4>
                    <p>itstudents005@gmail.com</p>
                </div>

                <div className='profile-content'>
                    <h4>Phone:</h4>
                    <p>03452645064</p>
                </div>

                <div className='profile-content'>
                    <h4>Address:</h4>
                    <p>Pir baba district Buneer</p>
                </div>

            </div>
        </>
    )
}

export default Profile
