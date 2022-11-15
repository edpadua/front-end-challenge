import React, { Component } from 'react';
import withRouter from './withRouter';
import { useParams } from 'react-router-dom';
import Post from './Post';

function User(){
    
        let { id } = useParams();
        return (
            <>
               
               <Post slug={ id } />
            </>
            
            
        );
    
}
export default User;