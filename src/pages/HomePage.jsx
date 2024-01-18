import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import Dashboard from '../components/Dashboard'

const HomePage = () => {
  return (
    <HOME>
        <SideBar/>
        <Dashboard/>
    </HOME>
  )
}

export default HomePage

const HOME=styled.div`
    display: flex;
`