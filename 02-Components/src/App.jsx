import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {

  const user = "Akshhat"

  return (
    <div>
      <Card/>
      <Card/>
      <Navbar/>
      {Card()}
    </div>
  )
}

export default App