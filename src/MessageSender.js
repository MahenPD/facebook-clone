import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        setImageUrl("");
        setInput("");
    }

    return (
        <div className="messageSender" >
            <div class="messageSender__top">
                <Avatar /> 
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} className="messageSender__input" placeholder="What's on your mind?" />
                    <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)}  placeholder="Image URL(optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div class="messageSender__bottom">
                <div class="messageSender__option">
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div class="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div class="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "yellow"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
