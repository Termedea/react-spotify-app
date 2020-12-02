import React from 'react';
import './TrackDetail.css';
import SummaryGrid from '../SummaryGrid/SummaryGrid';

class TrackDetail extends React.Component {
    render() {
        return (
            <aside className="TrackDetail">
                <h2>TrackDetail Works!</h2>
                <div>
                    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden mb-10">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img
                                    className="h-48 w-full object-cover md:w-48"
                                    src="https://dummyimage.com/200"
                                    alt="Man looking at item at a store"
                                />
                            </div>
                            <div className="flex flex-grow flex-col p-5">
                                <div className="flex flex-grow">
                                    <div className="title flex-grow">
                                        <h3>Title</h3>
                                    </div>
                                    <div className="icon flex-none">
                                        <span className="fas fa-star text-primary-darker">
                                            [x]
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="rounded-sm bg-primary-light p-1 mr-1">
                                        Genre 1
                                    </span>
                                    <span className="rounded-sm bg-primary-light p-1">
                                        Genre 2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap align-middle">
                        <div className=" flex-auto min-w-30">
                            <h3>Recommended tracks</h3>
                            <SummaryGrid />
                        </div>
                        <div className=" flex-auto min-w-30">
                            <h3>More by artist</h3>
                            <SummaryGrid />
                        </div>
                        <div className=" flex-auto min-w-30">
                            <h3>Similar artists</h3>
                            <SummaryGrid />
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default TrackDetail;
