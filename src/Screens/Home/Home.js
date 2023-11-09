import React from 'react';
import { Outlet } from 'react-router';
import Principal from './Principal';


function Home() {
  return (
    <Principal>
       <Outlet></Outlet>
    </Principal>
  );
}

export default Home;