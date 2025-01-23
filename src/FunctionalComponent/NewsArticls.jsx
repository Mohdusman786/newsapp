
import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsArticls(props){
    return (
        <div className="card">
           <img src={props.pic?props.pic:"/images/download.png"} className="card-img-top" alt="..."/>
           <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <div className='card-source'>
                   <p>{props.source}</p>
                   <p>{new Date(props.date).toLocaleDateString()}</p>
               </div>
               <hr className='hr' />
               
               <p className="card-text">{props.description}</p>
              <Link to={props.url} target='_blank' rel='noreferrer' className="btn btn-primary text-dark">Read Full Article</Link>
           </div>
        </div>
    )
}
