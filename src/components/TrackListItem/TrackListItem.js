import React from 'react';
import './TrackListItem.css';

class TrackListItem extends React.Component {
    render() {
        return (
            <div className="TrackListItem flex items-center gap-2 p-3 mt-2 bg-white rounded-md shadow-md">
                <div className="item-column flex-none">
                    <img src="https://dummyimage.com/20" alt="Album image" />
                </div>
                <div className="item-column flex-none">
                    <span>[1]</span>
                </div>
                <div className="item-column flex-grow">
                    <span>[Track Name]</span>
                </div>
                <div className="item-column flex-grow hidden sm:block">
                    <span>[Album]</span>
                </div>
                <div className="item-column flex-grow hidden sm:block">
                    <span>[Artist]</span>
                </div>
                <div className="item-column flex-none">
                    <span>[24:00]</span>
                </div>
            </div>
        );
    }
}
export default TrackListItem;
