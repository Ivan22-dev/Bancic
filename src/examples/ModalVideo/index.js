import ModalVideo from "react-modal-video";
import {useState } from "react";

export function MyModalVideo({channel,videoId }) {
const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
        <ModalVideo
            channel={channel}
            isOpen={isOpen}
            videoId={videoId}
            onClose={() =>setIsOpen( false )}
         />  
        <div className="player" onClick={()=>setIsOpen(true)}><span>Play</span></div>
    </>
  )
};


