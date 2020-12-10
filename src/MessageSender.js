import React, {useState}  from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSender() {
    const [input, setInput] = useState("");
    const [ImageUrl, setImageUrl] = useState("");

   
  const  handelSubmit = (e) => {
        e.PreventDefault();
    }
    return (
        <div className='messageSender'>

            <div className='messageSender__top'>
                <Avatar />
                <form>
                    <input
                        value={input}
        
                        onChange={(e)=> setInput(e.target.value)}
                        className='messageSender__input'
                      placeholder='whats on your mind' />
                    <input
                        value={ImageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='ImageUrl optional' />
                    <button onClick={handelSubmit} type='submit' >
                        Hidden button
                        </button>
                </form>

            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live video</h3>

                </div>

                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>

                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'yellow' }} />
                    <h3>Emoji/Activity</h3>

                </div>


            </div>

            
        </div>
    )
}

export default MessageSender;
