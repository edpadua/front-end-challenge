import React, { Component } from 'react'
import axios from 'axios';
import parse from "html-react-parser";
import { Link } from 'react-router-dom';
import styles from './Postlist.module.css'

import { useState } from 'react';
import {useEffect} from 'react';

function Postlists(){
   const[posts,setPosts]=useState([])
   const[isLoaded,setIsLoaded]=useState(false)
   const[page,setPage]=useState(1)
   const[totalPages,setTotalPages]=useState(1)
   const[morePages,setMorePages]=useState(true)
   const [disable, setDisable] = useState(false)
   const [baseURL,setBaseURL] = useState("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&"+page)

     useEffect(() => {
        getPosts();
      }, [disable]);


    const getPosts = () => {
        axios
          .get(baseURL)
          .then((res) => {
              
              setPosts(res.data);
              
              const pagesum =  page + 1;
              const total_pages = res.headers["x-wp-totalpages"];
              setTotalPages(total_pages);
              setPage(pagesum);
              console.log("Page");
              console.log(page);
              console.log("Pagesum");
              console.log(pagesum);
              
              setMorePages(page < total_pages ? true : false);
              
              if (pagesum <= total_pages) {
                setDisable(false)
                setBaseURL("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page="+pagesum);
                console.log("alterou");
              } else 
              {
                setDisable(true)
              }


              setIsLoaded(true);
              console.log("Disable");
              console.log(disable);
              console.log("More pages");
              console.log(morePages);

              
              console.log(totalPages);
             
              
              console.log(baseURL);

              
          })
          .catch((error) => {
            console.log(error);
          });
      };


    
      const carregarPosts = (e) => {
        console.log('value', e.target.value); // output: “value somevalue”
        getPosts();
        
        
      }
   
      
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
                         : ' '}
                         <div className={styles.post_info}>
                            
                        
 
                            
                             
                              <Link to={`user/${post.slug}`}>{post.slug}</Link> 
                          
                          </div>
                     </li>
                </>
                )}
                  
                   <div className={styles.btn_container}>
                      <button  disabled={disable} className={styles.btn} onClick={carregarPosts}>
                         Carregar Mais
                      </button>
                   </div>
                   
               </ul>
               
           </div>
       );
   
}
export default Postlists