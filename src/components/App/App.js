import React from 'react';
import TrackList from '../TrackList/TrackList';
import TrackDetail from '../TrackDetail/TrackDetail';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="max-w-9xl mx-auto">
                    <UserProfile />

                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-gradient-to-br from-red-500 to-acc-pink rounded-md main-component">
                        <div className="col-span-6">
                            <TrackList />
                        </div>
                        <div className="col-span-6 xl:mt-0 mt-3">
                            <TrackDetail />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
