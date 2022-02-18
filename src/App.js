import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
function App() {
  const [footerLinks,setFooterLinks]=useState([])
const [headerLinks,setHeaderLinks]=useState(["Home"])
const AddHeaderLinks=(link)=>{
  setHeaderLinks([...headerLinks,link]);
}
  return (

    <div>
    <Header headerLinks={headerLinks}/>
    <Banner AddHeaderLinks={AddHeaderLinks}/>
    <Footer/>
    </div>
  );
}

export default App;
