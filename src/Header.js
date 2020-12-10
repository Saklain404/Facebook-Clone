import React from 'react'
import "./Header.css";
import facebook from './img/facebook.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Header() {
    return (
        <div className='header'>
            <div className='header__left' >

                <img
                    src={facebook}
                    alt='GGg'
                />
                <div className='header__input'>
                  <SearchIcon/>
                    <input placeholder="Search Facebook" type="text" />
                </div>

            
            </div>
            <div className="header__middle" >
                <div className='header__options header__options--active'>
                    <HomeIcon fontSize='large'/>
                </div>

                <div className='header__options'>
                    < FlagIcon fontSize='large'/>
                </div>
                <div className='header__options'>
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='header__options'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>

            

            <div className='header__right' >

                <div className='header__info'>

                    <Avatar />
                    <h4>Khaid aziz</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>


        </div>
    )
}

export default Header;
