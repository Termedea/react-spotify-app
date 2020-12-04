import React from 'react';
import SummaryGrid from '../SummaryGrid/SummaryGrid';
import Card from '../Card/Card';

class TrackDetail extends React.Component {
    render() {
        return (
            <main className="TrackDetail p-4 rounded-xl bg-primary-darker shadow-md">
                <h2>Track details</h2>

                <Card />

                <div className="flex justify-around flex-wrap gap-5 ">
                    <SummaryGrid list={[1, 2, 3, 4, 5, 6]} title="More Songs" />

                    <SummaryGrid
                        list={[1, 2, 3, 4, 5, 6]}
                        title="More Albums"
                    />

                    <SummaryGrid list={[1, 2, 3, 4]} title="More Artists" />
                </div>
            </main>
        );
    }
}

export default TrackDetail;
