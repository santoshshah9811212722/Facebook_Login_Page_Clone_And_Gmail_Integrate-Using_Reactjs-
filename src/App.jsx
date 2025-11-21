// import React from 'react'
import Feature from './components/Footer_section/Feature'
import Languages from './components/Footer_section/Languages'
import Form from './components/Form'
import Header from './components/Header'

const App = () => {
  return (
    <div className='container'>
      <div className='headerform'>
        <Header/>
        <Form/>
      </div>
        
      <div className='footer'>
         <Languages/>
         <Feature/>
      </div>
    </div>
  )
}

export default App