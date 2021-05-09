import React from 'react';
import StyledPlaylist from '../../styles/StyledPlaylist';

import NightMode from '../NightMode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => {
  return (
    <StyledPlaylist>
      <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}/>
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems video={videos} active={active} />
    </StyledPlaylist>
  )
}

export default Playlist;