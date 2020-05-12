import React from 'react'
import "./videos.css"


export default props => {
    
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${props.videoID}`).then(async (response) => {
        const data = await response.json();
        console.log(data)
    })

    /* MEU SONHO É TIRAR ESSE JSON DAQUI MEU DEUS DO CÉU, talvez eu deva reestruturar como classe... tenho que pensar nisso. */

    let videoGo = `https://www.youtube.com/watch?v=${props.videoID}`
    let videoIDSrc = `http://i3.ytimg.com/vi/${props.videoID}/maxresdefault.jpg`
    
  
    return (
        <div className="videoframes" >
            <div className="videoframe">
                <a href={videoGo}><img src={videoIDSrc} alt="" />
                </a>

            </div>
            <div className="videotitle"><h4>{props.title}</h4></div>
        </div>
    )
}

    
    







