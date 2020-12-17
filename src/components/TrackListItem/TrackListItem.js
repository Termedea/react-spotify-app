import React from 'react';
import './TrackListItem.css';

const getTrackDuration = (timestamp) => {
    let minutes = Math.floor(timestamp / 60000);
    let seconds = Math.floor((timestamp % 60000) / 1000);

    return (
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds)
    );
};

const getArtistString = (artists) => {
    if (artists.length > 1) {
        return artists.map((artist) => {
            return <a href={artist.url}> {artist.name}</a> + ', ';
        });
    } else {
        return <a href={artists[0].url}> {artists[0].name}</a>;
    }
};

const TrackListItem = ({ track, album, artists }) => {
    console.log(track, artists, album);
    return (
        <div className="TrackListItem semi-transparent-item flex items-center justify-left gap-3 rounded-md mb-2">
            <div className="flex-shrink ">
                <img src="https://dummyimage.com/40" alt="" />
            </div>

            <div className="align-left justify-self-start  flex-grow md:w-72 md:flex-none xl:flex-grow">
                <span className="md:hidden xl:inline">
                    {getArtistString(artists)} -&nbsp;
                </span>
                <span className="hidden md:inline xl:hidden">
                    [{track.trackNumber}] -&nbsp;
                </span>
                <span>
                    <a href={track.url}>{track.name}</a>
                </span>
            </div>
            <div className="hidden md:block xl:hidden ">
                <span>
                    <a href={album.url}>{album.name}</a>
                </span>
            </div>
            <div className="text-right flex-grow hidden md:block xl:hidden ">
                <span>
                    by <a href="">{getArtistString(artists)}</a>
                </span>
            </div>
            <div className="mr-3">
                <span>{getTrackDuration(track.duration)}</span>
            </div>
        </div>
    );
};

export default TrackListItem;
