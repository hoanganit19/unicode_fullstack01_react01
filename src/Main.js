import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Assets/Styles/Reset.scss'; //Reset CSS
import './Assets/Styles/Fonts.scss'; //Fonts CSS
import './Assets/Styles/Base.scss'; //Base CSS
import './Assets/Styles/Grid.scss';
import Headers from './Components/Headers/Headers'
import Banner from './Components/Banner/Banner';
import WhyUs from './Components/WhyUs/WhyUs';

export default function Main() {
  return (
   <>
    <Headers />
    <Banner />
    <WhyUs />
   </>
  )
}
