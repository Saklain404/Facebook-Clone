import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'

import mine from "./img/mine.jpeg";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={mine} title="khalid aziz" />
            <SidebarRow Icon={LocalHospitalIcon} title="covid 19 related information" />
            <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Message" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />





            

            

        </div>
    )
}

export default Sidebar
