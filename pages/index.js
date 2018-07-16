import React from 'react'
import HomeContainer from '../components/homeContainer.js'
//import stylesheet from 'styles/index.css'
import homeStyle from '../components/vendorStyle/homeStyle'

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: homeStyle }} />
    <HomeContainer />
  </div>
