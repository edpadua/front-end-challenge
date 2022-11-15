import React, { Component } from 'react'
import axios from 'axios';
import parse from "html-react-parser";
import { Link } from 'react-router-dom';

import styles from './Postlist.module.css'

export class Postlist extends Component {
   state = {
       posts: [],
       isLoaded: false,
       page: 0
   }

 componentDidMount () {
 axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518')
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true,
           page: 1
       }))
       .catch(err => console.log(err))
   }

   


   render() {
       const {posts, isLoaded, page} = this.state;
       return (
           <div className={styles.container_posts}>
             <ul className={styles.post_boxes}>
               {posts.map(post => 
               <><li className={styles.post_box}>
                        <div className={styles.post_title}>
                           <h4>{post.title.rendered}</h4>
                        </div>
                        {post.featured_media ?
							    <a href={post.link}><img src={post._embedded['wp:featuredmedia'][0].media_details.sizes["medium"].source_url} /></a>
						: null}
                        
                        <div className={styles.post_info}>
                           {post.excerpt.rendered ?
							<div className="excerpt" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}} />
						   : null}

                       

                           
                            
                             <Link to={`user/${post.slug}`}>{post.slug}</Link> 
                         
                         </div>
                    </li>
               </>
               )}
               </ul>
           </div>
       );
   }
}
export default Postlist