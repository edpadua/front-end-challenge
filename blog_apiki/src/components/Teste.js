import React, { Component } from 'react'
import axios from 'axios';
import parse from "html-react-parser";


import styles from './Post.module.css'

export class Teste extends Component {
   state = {
       posts: [],
       isLoaded: false
   }

   

 componentDidMount () {
 axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }


   render() {
       const {posts, isLoaded} = this.state;
       const { slug } = this.props.match.params;
       return (
           
           <div >
               { slug }
               <h1>Teste</h1> 
           </div>
       );
   }
}
export default Teste