import React ,{useEffect} from 'react'
import Header from '../Common/Header'
import img from '../../Assets/breakfast.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
export default function ResturantDetails() {
  //first hooks
  let {rname}=useParams();
  //console.log(rname)
  const [resturant, setResturant] = useState({})

  //hook:useEffect why? it creats componentDidMOUNT and update functionality in rfc
  useEffect(()=>{
    fetch(`http://localhost:9095/resturants/${rname}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>setResturant(data.data[0]))
  },[])//this syntax will behave like componentDidmount
   
  
  //useEffect(()=>{
    
  //},[someone])//this syntax will behave like componentDidupdate
  //useEffect(()=>{
    //return()=>{}
    
  //},[someone])//this syntax will behave like unmount
  
  const{name,thumb,cost,address,Cuisine}=resturant
  const cusineList=!(Cuisine==undefined) && Cuisine.length && <ul>{Cuisine.map(item=><li key={item.name}>{item.name}</li>)}</ul>
  
  
  return (
    <div>
      <Header/>

      <div>
        <img src={thumb } width="1130px"height= "352px" className='rounded m-5 border border-primary'></img>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
      
  <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Contect</Tab>
    </TabList>

    <TabPanel>
      <div>About the place</div>
      <div>Cuisine</div>
      {cusineList}
      <div>Averge cost</div>
      <div>&#8377;{cost}</div>


    </TabPanel>
    <TabPanel>
      <div>Phone number</div>
      <div>+91-353544</div>
      <div>{address}</div>
    </TabPanel>
  </Tabs>

      </div>
    </div>
   
  )
}

