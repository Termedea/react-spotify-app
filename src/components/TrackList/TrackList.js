import React from 'react';
import TrackListItem from '../TrackListItem/TrackListItem';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <main className="TrackList xl:mr-5 mr-0 pt-3 ">
                <h2>Recently played</h2>

                <TrackListItem />
                <TrackListItem />
                <TrackListItem />
                <TrackListItem />
                <TrackListItem />
            </main>
        );
    }
}

export default TrackList;
