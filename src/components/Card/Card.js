import React from 'react';
import './Card.css';
import Pill from '../Pill/Pill';

class Card extends React.Component {
    render() {
        return (
            <div className="Card w-full bg-white rounded-md overflow-hidden mb-10">
                <div className="sm:flex">
                    <div className="img-container sm:flex-shrink-0 h-48 w-full sm:w-auto align-middle border border-gray-600 border-opacity-20">
                        <div className="img-background sm:hidden "></div>
                        <img
                            className="mx-auto h-full"
                            src="https://dummyimage.com/200"
                            alt="Man looking at item at a store"
                        />
                    </div>

                    <div className="flex flex-grow flex-col p-5">
                        <div className="flex flex-grow">
                            <div className="title flex-grow mb-3">
                                <h3>Title</h3>
                                <p>Album - Year</p>
                                <p>Artist</p>
                                <p className="text-xs">Popularity</p>
                            </div>
                            <div className="icon flex-none">
                                <span className="fas fa-star text-primary-darker">
                                    [x]
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3 flex-wrap">
                            <Pill text="Genre1" />
                            <Pill text="Genre2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
