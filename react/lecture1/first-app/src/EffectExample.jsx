import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

function EffectExample() {

    const [playVideo, setPlayVideo] = useState(false);
    const onBtnClicked = () => {
        // change playViedo value...
        setPlayVideo(!playVideo);
    }

    return (
        <div>
            <button onClick={onBtnClicked}>Play/Pause</button>
            <VideoPlayer
                shouldPlay={playVideo}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    )
}

function VideoPlayer({ src, shouldPlay }) {

    // I need a side effect????
    const foo = useRef(undefined);
    console.log(foo);
    const someCb = () => {
        //play and pause the video...
        console.log("effect");
        if (shouldPlay) {
            // video.play()
            foo.current.play();
        } else {
            foo.current.pause();
        }
    };

    useEffect(someCb, [shouldPlay]); // dependency array
    
    return <>
        {/* <img src='' alt="Some image" /> */}
        <video
        ref={foo} 
        src={src}
        height={200}
        width={200}
        loop
        playsInline
    /></>
}

export default EffectExample;