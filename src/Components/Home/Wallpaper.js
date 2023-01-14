import React, { Component } from 'react'
import wallpaper from'../../Assets/homepageimg.png'
import {Link} from 'react-router-dom';
export default class Wallpaper extends Component {
    constructor(){
        super();
        this.state={
            locations:[],
            resturants:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:9095/location',{method:'GET'})
        .then(response=>response.json())
        .then(data=>this.setState({locations:data.data}))
    }

    fetchResturants=(event)=>{
        //console.log(event.target.value)
        fetch(`http://localhost:9095/resturants/city/${event.target.value}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState({resturants:data.data}))
    }
  render() {
    let resturantList=this.state.resturants.length && <ul>{this.state.resturants.map(item=><li  key={item.name}><Link to={`/details/${item.name}`}>{item.name}</Link>{item.name}</li>)}</ul>
    let locationList=this.state.locations.length && this.state.locations.map(item=><option key={item.name} value={item.city_id} >{item.name}</option>)

    return (
      <div>
    <img src={wallpaper} width="100%" height="450"/>
    <div>
        
        <div className="logo">
            <p>e!</p>
        </div>
        
        <div className="headings">
            Find the best restaurants, cafes, bars
        </div>
        
        <div className="locationSelector">
            <select className="locationDropdown" onChange={this.fetchResturants}>
                <option value="0" defaultValue="selected" disabled>Select</option>
                {locationList}
            </select>
            <div  id ="notebooks"className="table-primary">
                <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" />
               
               <span className="glyphicon glyphicon-search search"></span>
               {resturantList }        
            </div>
        </div>
    </div>


      </div>
    )
  }
}
