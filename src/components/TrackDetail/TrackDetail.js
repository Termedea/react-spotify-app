import React from 'react';
import './TrackDetail.css';
import SummaryGrid from '../SummaryGrid/SummaryGrid';
import Card from '../Card/Card';

class TrackDetail extends React.Component {
    render() {
        return (
            <aside className="TrackDetail p-3 rounded-xl bg-primary-darker">
                <h2>Track details</h2>

                <Card />

                <div className="flex justify-evenly flex-wrap gap-5 ">
                    <SummaryGrid title="More Songs" />

                    <SummaryGrid title="More Albums" />

                    <SummaryGrid title="More Artists" />
                </div>
            </aside>
        );
    }
}

export default TrackDetail;
