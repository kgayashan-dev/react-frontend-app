import React from 'react'
import Player from './Player'

const AudioPlayList = () => {


  return (
    <div>
        
        <Player audioFiles={["./Sounds/t1.mp3", "./Sounds/t2.mp3", "./Sounds/t3.mp3"]} />

    </div>
    
  )
}

export default AudioPlayList