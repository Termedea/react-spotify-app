import React from 'react';
import TrackList from '../TrackList/TrackList';
import TrackDetail from '../TrackDetail/TrackDetail';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import Search from '../Search/Search';

class App extends React.Component {
    handleSearch = (event) => {
        console.log(event.target.value);
    };
    state = {
        searchTerm: ''
    };
    render() {
        return (
            <div className="App">
                <Header />
                <div className="max-w-9xl mx-auto">
                    <UserProfile />

                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-gradient-to-br from-red-500 to-acc-pink rounded-md main-component">
                        <div className="col-span-5">
                            <div className="xl:mr-5 mr-0pt-3 ">
                                <Search
                                    value="searchTerm"
                                    onChange={this.handleSearch}
                                />
                                <TrackList />
                            </div>
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
