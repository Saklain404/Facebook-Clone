import React from 'react'
import "./Feed.css";
import StoryReels from './StoryReels';
import MessageSender from './MessageSender';
import Post from './Post';
import mine from './img/mine.jpeg';
import panting from './img/panting.jpeg';

function Feed() {
    return (
        <div className="feed">
            
            <StoryReels />
            <MessageSender />

            <Post
                profilePic={mine}
                
                username="Khalid Aziz"
                timestamp="this is time stamp"
                message="wow this is work"
                image={panting}
             />
        

        </div>
    )
}

export default Feed
