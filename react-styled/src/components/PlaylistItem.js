import React from 'react';
import StyledPlaylistItem from '../styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => {
  return (
    <div>
      <StyledPlaylistItem active={active} played={played} >
        <div classname="wbn-player__video-nr">{video.num}</div>
        <div classname="wbn-player__video-name">{video.title}</div>
        <div classname="wbn-player__video-ntime">{video.duration}</div>
      </StyledPlaylistItem>
    </div>
  )
}

export default PlaylistItem;