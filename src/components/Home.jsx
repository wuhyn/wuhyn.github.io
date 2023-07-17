import * as React from 'react';
import Navbar from './Navbar';
import Content from './Content';

function Home() {
  return (
    <>
    <Navbar/>
    <Content heading="I'm Hong." paragraph="I'm a software engineer based in Melbourne, Australia."/>
    </>
  );
}

export default Home