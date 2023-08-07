import React, { useState, useEffect } from "react";
import Sound1 from "./Sounds/t1.mp3";
import Sound2 from "./Sounds/t2.mp3";
import Sound3 from "./Sounds/t3.mp3";
import Sound4 from "./Sounds/t4.mp3";
import Sound5 from "./Sounds/t5.mp3";


import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillStopFill,
  BsFillSkipEndFill,
} from "react-icons/bs";

import { RxSpeakerLoud } from "react-icons/rx";

const MyAudioPlayer = () => {
  const audioFiles = [Sound1, Sound2, Sound3, Sound4,Sound5];
  const [index, setIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio(audioFiles[index]));
  const [play, setPlay] = useState("");

  const onPlay = () => {
    audio.play();
    audio.onended = () => {
      // update the audio index to play the next audio file
      setIndex(index + 1);
      onNext();
    };
    document.title = "Playing...";
    setPlay("Playing...");
  };

  const onPause = () => {
    audio.pause();
    document.title = "Audio Paused.";
    setPlay("Paused!");
  };

  const onStop = () => {
    audio.pause();
    audio.currentTime = 0;

    document.title = "Audio Stop";
    setPlay("Stoped!");
  };
  const onNext = () => {
    audio.pause();
    audio.currentTime = 0;

    if (index === audioFiles.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    const newAudio = new Audio(audioFiles[index]); // create new audio object with updated index
    setAudio(newAudio);

    setTimeout(() => {
      setPlay("Playing...");
    }, 400);
    setPlay("Next");
    newAudio.play(); // play new audio object
  };






  useEffect(() => {

    if (audio.currentTime === 0) {
      setPlay("stop");
     
    }
  }, []);

  return (
    <div className="absolute  gap-0 justify-center  text-white bottom-0 left-0 mx-4 my-4  cursor-pointer dark:bg-gray-800/[.4] bg-slate-50/[.4] p-2 rounded-md">
      <div className="flex gap-2 justify-start items-center">
        
        <RxSpeakerLoud  className="text-lg"/>
      </div>
      <div className="flex justify-center text-gray-700  dark:text-white">
        <h2>{play}</h2>
        {/* <audio src={Sound} controls  /> */}
      </div>
      <div className="text-5xl flex text-slate-100 dark:text-white ">
        <div>
          <BsFillPauseFill
            className=" p-2 flex items-center m-3 cursor-pointer hover:text-gray-400 hover:bg-slate-500 bg-slate-700 rounded-full "
            onClick={onPause}
          />
        </div>
        <div>
          <BsFillPlayFill
            className=" p-2 flex items-center m-3 cursor-pointer hover:text-gray-400 hover:bg-slate-500 bg-slate-700 rounded-full "
            onClick={onPlay}
          />
        </div>
        <div>
          {" "}
          <BsFillStopFill
            className=" p-2 flex items-center m-3 cursor-pointer hover:text-gray-400 hover:bg-slate-500 bg-slate-700 rounded-full "
            onClick={onStop}
          />
        </div>{" "}
        <div>
          <BsFillSkipEndFill
            className=" p-2 flex items-center m-3 cursor-pointer hover:text-gray-400 hover:bg-slate-500 bg-slate-700 rounded-full "
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAudioPlayer;
