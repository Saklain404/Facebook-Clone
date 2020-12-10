import React from 'react';
import './StoryReels.css';
import Story from './Story';
import naeem from './img/naeem.jpeg';
import pandit from './img/pandit.jpeg';
import skln from './img/skln.jpeg';
import zaid from './img/zaid.jpeg';
import mine from "./img/mine.jpeg";


function StoryReels() {
    return (
        <div className='storyReels'>

            <Story image={mine} ProfileSrc={mine} title="Khalid Aziz" />
            <Story image={naeem} ProfileSrc={naeem} title="Naeem Ahmad" />
            <Story image={pandit} ProfileSrc={pandit}  title="Piyush sharma" />
            <Story image={skln} ProfileSrc={skln}  title="Saqlain" />
            <Story image={zaid} ProfileSrc={zaid} title="Dazzling zaid" />
            
            

            
        </div>
    )
}

export default StoryReels;
 