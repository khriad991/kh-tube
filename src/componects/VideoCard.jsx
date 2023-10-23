import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {
    demoChannelUrl,
    demoThumbnailUrl,
    demoVideoTitle,
    demoVideoUrl
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{width:{md:"320px", xs:'100%'}, boxShadow:"none", borderRadius:0}}>
            <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{width:"100%", height:180}}
                >
                 </CardMedia>
            </Link>
            <CardContent sx={{backgroundColor:"#1e1e1e", height:"106px"}}>
                <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight='bold' color="#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/video/${snippet?.channelId}`:demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight='bold' color="gray">
                        {snippet?.channelTitle || demoVideoTitle}
                    </Typography>
                </Link>
            </CardContent>

            VideoCard
        </Card>
    );
};

export default VideoCard;