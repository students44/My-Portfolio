import React from 'react'

const HeaderData = (props) => {
    return (
        <>
            <header id='header' >
                <div></div>
                <div className='header-content' data-aos="fade-left">
                    <h5>HELLO, WORLD.</h5>
                    <h1>I'm Muneeb Khan.</h1>
                    <p><span>
                        Frontend Developer
                    </span>
                    </p>

                    <a href='#about' >
                        <button className='h-btn btn--ouline  '>
                            MORE ABOUT ME <i className="fa-solid fa-angle-down"></i>
                        </button>
                    </a>

                </div>

                <div className='header-social-icon w-100' data-aos="fade-down">
                    <ul className=' d-flex align-items-center mb-0 justify-content-center pl-0'>

                        <li><a href="https://www.facebook.com/dsdklasfafhkasfhkadlakfhkas?rdid=9gfoJHoJx1rlTj1U&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15SBWya6Gz%2F" target='_blank'><i className={"fa-brands fa-facebook-f"}></i></a></li>
                        <li><a href="https://www.linkedin.com/in/muneeb-khan-95a860263/" target='_blank'><i className={"fa-brands fa-linkedin"}></i></a></li>
                        {/* <li><a href="" target='_blank'><i className={"fa-brands fa-github"}></i></a></li> */}


                    </ul>
                </div>

            </header>
        </>
    )
}

export default HeaderData
