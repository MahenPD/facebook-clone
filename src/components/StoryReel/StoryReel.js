import React from 'react'
import Story from './Story/Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story title="Mahen Dunu" profileSrc={"https://i.pinimg.com/236x/a4/a6/43/a4a6430b557982c69b50bcf174c6077f.jpg"} image="https://images5.alphacoders.com/105/1057377.jpg"/>
            <Story title="Hiruni Perera" profileSrc={"https://pm1.narvii.com/6013/2121c8d72480b5ba99212a915ac0656f66a3a723_hq.jpg"} image="https://c4.wallpaperflare.com/wallpaper/607/108/992/anime-kaneki-ken-tokyo-ghoul-wings-wallpaper-preview.jpg"/>
            <Story title="Wishva Peries" profileSrc={"https://cutewallpaper.org/21/anime-profile-pictures-boy/cartoon-and-anime-profile-pics-toon.pfps-Instagram-Profile-.jpg"} image="https://wallpaperaccess.com/download/bungou-stray-dogs-1428474"/>
            <Story title="Arshad Hannan" profileSrc={"https://www.wallpapertip.com/wmimgs/11-113508_luffy-one-piece-wallpaper-iphone.jpg"} image="https://media.comicbook.com/2019/03/one-piece-reverie-arc-anime-poster-1164566.jpeg?auto=webp&width=696&height=390&crop=696:390,smart" />
        </div>
    )
}

export default StoryReel
