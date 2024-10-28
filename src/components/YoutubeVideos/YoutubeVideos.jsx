import React, { useEffect, useState } from 'react'
const YoutubeVideos = () => {
    const [youTubeVideos, setYouTubeVideos] = useState([]);
    useEffect(()=>{
        const ApiKey = import.meta.env.VITE_API_KEY;
        const YoutubeId = import.meta.env.VITE_YOUTUBE_CHANNEL;
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${YoutubeId}&maxResults=9&order=date&key=${ApiKey}`)
        .then((res)=> res.json())
        .then((data)=>{
            setYouTubeVideos(data.items);
        })
    }, []);
    return (
        <>
            <section className="youtubeVideosWrapper">
                <div className="allVideosWrapper">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12">
                                <div className="title-wrapper">
                                    <br />
                                    <h1>Latest Videos</h1>
                                    <br />
                                </div>
                            </div>
                            {
                                youTubeVideos?.map((singleVideo, i)=>{
                                    let vidId = singleVideo.id.videoId;
                                    let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                                    let videoWrapper = (
                                        <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="singleVideoWrapper">
                                                <div className="videoThumbnail">
                                                    <a href={vidLink} target='_blank' rel='noreferrer'>
                                                        <img src={singleVideo.snippet.thumbnails.high.url} alt="thumbnails" />
                                                    </a>
                                                </div>
                                                <div className="videoInfoWrapper">
                                                    <div className="videoTitle">
                                                        {/* <div>{singleVideo.snippet.publishedAt}</div> */}
                                                        <a href={vidLink} target="_blank" rel="noreferrer">
                                                            {singleVideo.snippet.title}
                                                        </a>
                                                    </div>
                                                    <div className="videoDesc">
                                                        {singleVideo.snippet.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    return videoWrapper;
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YoutubeVideos
