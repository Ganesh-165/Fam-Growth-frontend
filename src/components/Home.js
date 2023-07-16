import React, { Fragment } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom';
import { DataProvier } from '../Context/AccessContext';

const Home = () => {
  return (
    <Fragment>
      <SideBar/>
      <Outlet/>
    </Fragment>    
  )
}

export default Home