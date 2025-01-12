import React from 'react'

import Banner from '../component/banner.js'
import Body from '../component/body';
import Get_in_touch from '../component/get_in_touch.js';
import PopupForm from '../component/popupPage.js';


const Home = () => {
  return (
    <>

      <Banner />
      <PopupForm />
      <Body />
      <Get_in_touch />


    </>
  )
}

export default Home;