
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsArticls extends Component {
  render() {
    return (
        <div className="card">
           <img src={this.props.pic?this.props.pic:"/images/download.png"} className="card-img-top" alt="..."/>
           <div className="card-body">
               <h5 className="card-title">{this.props.title}</h5>
               <div className='card-source'>
                   <p>{this.props.source}</p>
                   <p>{new Date(this.props.date).toLocaleDateString()}</p>
               </div>
               <hr className='hr' />
               
               <p className="card-text">{this.props.description}</p>
              <Link to={this.props.url} target='_blank' className="btn btn-primary text-dark">Read Full Article</Link>
           </div>
        </div>
    )
  }
}
