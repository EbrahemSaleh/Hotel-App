import React, { Component } from 'react';
import {FaCocktail , FaHiking , FaShuttleVan , FaBeer} from 'react-icons/fa';
import Title from './Title';


 class Services extends Component {
   state={
     services:[
       {
         icon:<FaCocktail/>,
         title:"Free Cocktail",
         info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
       }, {
         icon: <FaHiking/> ,
         title: "Endless Hiking",
         info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
       }, {
         icon: <FaShuttleVan/> ,
         title: "Free shuttle",
         info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
       }, {
         icon: <FaBeer/> ,
         title: "Strongest Beer",
         info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
       }
     ]
   }
  render() {
    return (
      <section className="services">
       <Title title="services" />
       <div className="services-center">

         {this.state.services.map((item , index) =>{
           return( <article className="service" key={index}>
             <span>{item.icon}</span>
         <h5>{item.title}</h5>
         <p>{item.info}</p>
           </article>)
         })}
       </div>

       </section>
       
      
    )
  }
}


export default Services