import React, { Component } from 'react'
import axios from 'axios';
import parse from "html-react-parser";


import styles from './Post.module.css'

export class Post extends Component {
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
       
       return (
           
        <div className="container">
             
               <div className={styles.post}>
                
               
               {posts.map(post => <>
                {post.slug==this.props.slug ? 
                    <div>
                       <h2>{post.title.rendered}</h2>
                       {post.featured_media ?
							<img src={post._embedded['wp:featuredmedia'][0].media_details.sizes["large"].source_url} />
						: null}
                       {parse(post.content.rendered)}
                    </div>
                : null}
               </>
               )}
               </div>
           </div>
       );
   }
}
export default Post