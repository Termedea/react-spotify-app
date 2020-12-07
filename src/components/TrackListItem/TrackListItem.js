import React from 'react';

const TrackListItem = ({ track, album, artists }) => {
    let artistString;
    if (artists.length > 1) {
        artistString = artists.map((artist) => {
            return artist.name + ', ';
        });
    } else {
        artistString = artists[0].name;
    }

    return (
        <div className="TrackListItem flex items-center xl:justify-between gap-2 p-1 mt-2  rounded-md shadow-md text-sm semi-transparent-item">
            <div className="item-column flex-none">
                <img src="https://dummyimage.com/40" alt="" />
            </div>

            <div className="item-column flex-grow">
                <span className="md:hidden xl:inline">{artistString} - </span>
                <span>{track.name}</span>
            </div>
            <div className="item-column hidden md:block xl:hidden">
                <span>{album.name}</span>
            </div>
            <div className="item-column  hidden md:block xl:hidden">
                <span>{artistString}</span>
            </div>
            <div className="item-column flex-shrink">
                <span>[24:00]</span>
            </div>
        </div>
    );
};

export default TrackListItem;
