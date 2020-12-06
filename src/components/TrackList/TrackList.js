import React from 'react';
import TrackListItem from '../TrackListItem/TrackListItem';

const TrackList = ({ tracks, title }) => {
    return (
        <aside className="TrackList mt-4 ">
            <h2 className="section-header">{title}</h2>
            <TrackListItem />
            <TrackListItem />
            <TrackListItem />
            <TrackListItem />
            <TrackListItem />
        </aside>
    );
};

export default TrackList;
