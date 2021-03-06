import React from 'react';


function SpotifyLogin() {
  const handleClick = (e) => {
    e.preventDefault();
    // to get account info for users: user-read-email
    // to save playlist: playlist-modify-public
    // to stream in player: streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state
    // to show the favorite button: user-library-read user-library-modify
    // also in there for some reason: user-read-currently-playing
    const scopes = 'user-read-email playlist-modify-public streaming user-read-private user-read-playback-state user-modify-playback-state user-library-read user-library-modify user-read-currently-playing';
    const callbackurl = window.location.origin + '/callback';
    window.location.href='https://accounts.spotify.com/authorize?response_type=code' +
    '&client_id=8e55de46675c4563830a205d05fc767a' +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(callbackurl);
  };

  return (
    <button className="btn-actions justify-content-center flex-nowrap" onClick={e => { handleClick(e) }}><i className="fab fa-spotify fa-2x"></i>
    <span>Login with Spotify</span></button>
  )
}



export default SpotifyLogin;
