import React from 'react';
import TrackListItem from '../TrackListItem/TrackListItem';

const TrackList = ({ tracks, title, description }) => {
    return (
        <aside className="TrackList mt-4 ">
            <h2 className="section-header">{title}</h2>
            <p className="paragraph-description">{description}</p>
            <ul>
                {tracks &&
                    tracks.map((track, i) => {
                        return (
                            <li key={track.track.id + i}>
                                <TrackListItem {...track} />
                            </li>
                        );
                    })}
            </ul>
        </aside>
    );
};

export default TrackList;
