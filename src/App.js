import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'; 

@connect((store) => {
    return {
        nav: store.reducer.nav
    }
})
export default class LeftNav extends Component {
    static propTypes = {
      backgroundColor: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      items: PropTypes.string.isRequired,
    }

    componentDidUpdate() {
        if (this.props.nav === true) {
            document.querySelector('.sidenav').style.width = "250px";
            document.querySelector('.sidenav-container').style.marginRight = "250px";
            document.querySelector('#overlay').style.display = 'block'
            document.querySelector('.navbar-fixed').style.right = '250px'
            
        } else {
            document.querySelector('.sidenav').style.width = "0";
            document.querySelector('.sidenav-container').style.marginRight= "0";
            document.querySelector('#overlay').style.display = 'none';
            document.querySelector('.navbar-fixed').style.right = '0';
        }
    }

  render() {
    let items = this.props.items.map((e) => {
        return <li><Link to={e.anchor}><i className={e.fontawesome}></i>e.title</Link></li>
    })
    return (
      <div className='sidenav' style={{backgroundColor: this.props.backgroundColor}}>
        <div className='sidenav-logo'>
            <img src={this.props.logo} alt='Company Logo' />
        </div>
        <div className='sidenav-content'>
           <ul>
             {items}
            </ul>
        </div>
        <div className='sidenav-footer'>
        
        </div>  
      </div>   
    );
  }
}

