import React from "react";

export function Work02(pkg) {
    const style = pkg.theme
    const isDark = pkg.color
    const wbIcon = './assets/icons/wabisabi.png'

    return(
        <>
         <div className='experiences-container'>
            <div className='experience-header'>
                <div className='experience-icon' style={style.container}>
                    <img className='experience-icon-img-2' src={wbIcon} alt='icon'></img>
                </div>
                <div className='experience-header-vdivider' style={style.block}></div>
                <div className='experience-header-text'>
                    <p className='experience-role' style={style.color}>Mobile App Developer</p>
                    <p className='experience-company' style={style.color}>Wabisabi Sushi Bar - General Trias, Cavite</p>  
                    <p className='experience-date' style={style.color}>June 2022 - Feb 2023</p>
                </div>
                
            </div>
            <div className='experience-header-hdivider' style={style.block}></div>
            <div className='experience-divider'></div>
            <p className='experience-category' style={style.color}>Job Description</p>
            <p className='experience-description' style={style.color}>
                Test
                </p>
            <p className='experience-category' style={style.color}>Responsibilities</p>
            <ul className='experience-responsibilities-list'>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Test</p>
                    </div>
                </li>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Test</p>
                    </div>
                </li>
                <li className='experience-responsibilities-item'>
                    <div className='experience-responsibilities-item-container'>
                    <div className='experience-responsibilities-item-bullet' style={style.block}></div>
                    <p className='experience-responsibilities-item-text' style={style.color}>Test</p>
                    </div>
                </li>

            </ul>
        </div>
        </>
       
    )
}