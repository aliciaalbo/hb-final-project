import React from 'react';
import useStickyState from "./useStickyState";

// props: access_token, webplayer, playerstate
function SpotPlayer(props) {
    const [playbackToggle, setPlaybackToggle] = useStickyState('no', "playbackToggle");

    console.log('spotplayer:',props);
    const deviceId = props.webplayer.player._options.id;
    function play(e) {
        e.preventDefault();
        const body = JSON.stringify({ uris: props.playstate.uris, offset: { position: props.playstate.offset } });

        setPlaybackToggle('yes');

        return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            body: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.access_token}`
            },
        });
    }	
    function pause(e) {
        e.preventDefault();
        props.webplayer.player.togglePlay().then(() => {
            console.log('Toggled playback!');
          });
    }
    function prev(e) {
        e.preventDefault();
        props.webplayer.player.previousTrack().then(() => {
        console.log('Set to previous track!');
      });
    }
    function next(e) {
    e.preventDefault();
    props.webplayer.player.nextTrack().then(() => {
    console.log('Set to previous track!');
        });
    }   

    return (
        <section>
            {playbackToggle === 'yes' ? <button onClick={e => { pause(e) }}>play/Pause</button> : <button onClick={e => { play(e) }}>Play</button>}
            
            
            <button onClick={e => { prev(e) }}>Previous</button>
            <button onClick={e => { next(e) }}>Next</button>
        </section>
    )
}

export default SpotPlayer;