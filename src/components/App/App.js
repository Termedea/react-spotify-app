import React from 'react';
import TrackList from '../TrackList/TrackList';
import TrackDetail from '../TrackDetail/TrackDetail';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="App container mx-auto my-20">
                    <UserProfile />

                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-gradient-to-br from-red-500 to-acc-pink rounded-md main-component">
                        <div className="col-span-5">
                            <TrackList />
                        </div>
                        <div className="col-span-7 xl:mt-0 mt-3">
                            <TrackDetail />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;