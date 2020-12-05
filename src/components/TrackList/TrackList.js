import React from 'react';
import TrackListItem from '../TrackListItem/TrackListItem';

const TrackList = ({ trackList }) => {
    return (
        <aside className="TrackList ">
            <h2>Search results</h2>
            <TrackListItem />
            <TrackListItem />
            <TrackListItem />
            <TrackListItem />
            <TrackListItem />
        </aside>
    );
};

export default TrackList;
