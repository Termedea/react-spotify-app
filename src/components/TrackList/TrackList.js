import React from 'react';
import TrackListItem from '../TrackListItem/TrackListItem';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <main className="TrackList mr-5">
                <h2>Track List</h2>
                <p className="bg-white apply p-3 rounded-md shadow-md">
                    Recently played by Termedea
                </p>
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
