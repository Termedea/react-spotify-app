import React from 'react';

const TrackListItem = () => {
    return (
        <div className="TrackListItem flex items-center gap-2 p-3 mt-2 bg-white rounded-md shadow-md text-sm">
            <div className="item-column flex-none">
                <span>[1]</span>
            </div>
            <div className="item-column flex-grow">
                <span className="md:hidden xl:inline">[Artist] - </span>
                <span>[Track Name]</span>
            </div>
            <div className="item-column flex-grow hidden md:block xl:hidden">
                <span>[Album]</span>
            </div>
            <div className="item-column flex-grow hidden md:block xl:hidden">
                <span>[Artist]</span>
            </div>
            <div className="item-column flex-none">
                <span>[24:00]</span>
            </div>
        </div>
    );
};

export default TrackListItem;
