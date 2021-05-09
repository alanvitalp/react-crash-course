import React from 'react';
import StyledPlaylistItems from '../../styles/StyledPlaylistItems';
import PlaylistItem from '../PlaylistItem';



const PlaylistItems = ({ videos, active }) => {
  return (
    <>
      <StyledPlaylistItems>
        {videos.map(video => {
          <PlaylistItem
            key={video.id}
            video={video}
            active={video.id === active.id ? true : false}
            played={video.played}
          />
        })}
      </StyledPlaylistItems>
    </>
  )
}

export default PlaylistItems;