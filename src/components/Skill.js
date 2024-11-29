import React from 'react'

const Skill = (props) => {

    let skills = [
        {
            "name": "HTML",
            "percentage" : 90
        },
        {
            "name": "CSS",
            "percentage": 85
        },
        {
            "name": "JavaScript",
            "percentage": 80
        },
        {
            "name": "Jquery",
            "percentage": 70
        },

    ]
    
    return (
        <>
            <div className='profile'>
                <h3>Skills</h3>

                {
                    skills.map((e, i) => {
                        const value = e.percentage;
                        return (
                            <div className='skill-wrap' key={i}>
                                <h4>{e.name}</h4>
                                <div className='skill-bar'>
                                    <div className='skill-bar-inner' style={{ width: value + "%" }}>
                                        <div className='skill-bar-value'>
                                            {`${value}%`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }





            </div>
        </>
    )
}

export default Skill
