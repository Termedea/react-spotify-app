import React from 'react';
import TrackList from '../TrackList/TrackList';
import TrackDetail from '../TrackDetail/TrackDetail';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import Search from '../Search/Search';
import CleanTrackList from '../../helpers/Common.js';

class App extends React.Component {
    state = {
        searchTerm: '',
        recentTracks: null,
        searchResult: null,
        chosenSong: {
            artist: 'Rishloo',
            title: 'Just a Ride',
            popularity: '100',
            genres: ['Progressive metal', 'Art metal']
        }
    };
    requestRecentTracks() {
        return {
            items: [
                {
                    track: {
                        album: {
                            album_type: 'album',
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            'https://open.spotify.com/artist/3121AQETMztJVu59OKAnFJ'
                                    },
                                    href:
                                        'https://api.spotify.com/v1/artists/3121AQETMztJVu59OKAnFJ',
                                    id: '3121AQETMztJVu59OKAnFJ',
                                    name: 'Mother of Millions',
                                    type: 'artist',
                                    uri: 'spotify:artist:3121AQETMztJVu59OKAnFJ'
                                }
                            ],

                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/album/3YeVcAYZ0G8i09aok7f8C2'
                            },
                            href:
                                'https://api.spotify.com/v1/albums/3YeVcAYZ0G8i09aok7f8C2',
                            id: '3YeVcAYZ0G8i09aok7f8C2',
                            images: [
                                {
                                    height: 640,
                                    url:
                                        'https://i.scdn.co/image/ab67616d0000b273260ef14a4be856ff11a49f4b',
                                    width: 640
                                },
                                {
                                    height: 300,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00001e02260ef14a4be856ff11a49f4b',
                                    width: 300
                                },
                                {
                                    height: 64,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00004851260ef14a4be856ff11a49f4b',
                                    width: 64
                                }
                            ],
                            name: 'Artifacts',
                            release_date: '2019-03-22',
                            release_date_precision: 'day',
                            total_tracks: 7,
                            type: 'album',
                            uri: 'spotify:album:3YeVcAYZ0G8i09aok7f8C2'
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        'https://open.spotify.com/artist/3121AQETMztJVu59OKAnFJ'
                                },
                                href:
                                    'https://api.spotify.com/v1/artists/3121AQETMztJVu59OKAnFJ',
                                id: '3121AQETMztJVu59OKAnFJ',
                                name: 'Mother of Millions',
                                type: 'artist',
                                uri: 'spotify:artist:3121AQETMztJVu59OKAnFJ'
                            }
                        ],
                        disc_number: 1,
                        duration_ms: 369000,
                        explicit: false,
                        external_ids: {
                            isrc: 'SEYIJ1900401'
                        },
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/track/3jNeK7mJZD8V7PzeBSz2eR'
                        },
                        href:
                            'https://api.spotify.com/v1/tracks/3jNeK7mJZD8V7PzeBSz2eR',
                        id: '3jNeK7mJZD8V7PzeBSz2eR',
                        is_local: false,
                        name: 'Amber',
                        popularity: 16,
                        preview_url:
                            'https://p.scdn.co/mp3-preview/69b44562c979d2719ddfd477b6b5ba2b79870911?cid=774b29d4f13844c495f206cafdad9c86',
                        track_number: 1,
                        type: 'track',
                        uri: 'spotify:track:3jNeK7mJZD8V7PzeBSz2eR'
                    },
                    played_at: '2020-12-07T11:52:47.425Z',
                    context: {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/playlist/2RCEagXndEALQLhtDtt5zv'
                        },
                        href:
                            'https://api.spotify.com/v1/playlists/2RCEagXndEALQLhtDtt5zv',
                        type: 'playlist',
                        uri: 'spotify:playlist:2RCEagXndEALQLhtDtt5zv'
                    }
                },
                {
                    track: {
                        album: {
                            album_type: 'album',
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            'https://open.spotify.com/artist/3121AQETMztJVu59OKAnFJ'
                                    },
                                    href:
                                        'https://api.spotify.com/v1/artists/3121AQETMztJVu59OKAnFJ',
                                    id: '3121AQETMztJVu59OKAnFJ',
                                    name: 'Mother of Millions',
                                    type: 'artist',
                                    uri: 'spotify:artist:3121AQETMztJVu59OKAnFJ'
                                }
                            ],
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/album/3YeVcAYZ0G8i09aok7f8C2'
                            },
                            href:
                                'https://api.spotify.com/v1/albums/3YeVcAYZ0G8i09aok7f8C2',
                            id: '3YeVcAYZ0G8i09aok7f8C2',
                            images: [
                                {
                                    height: 640,
                                    url:
                                        'https://i.scdn.co/image/ab67616d0000b273260ef14a4be856ff11a49f4b',
                                    width: 640
                                },
                                {
                                    height: 300,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00001e02260ef14a4be856ff11a49f4b',
                                    width: 300
                                },
                                {
                                    height: 64,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00004851260ef14a4be856ff11a49f4b',
                                    width: 64
                                }
                            ],
                            name: 'Artifacts',
                            release_date: '2019-03-22',
                            release_date_precision: 'day',
                            total_tracks: 7,
                            type: 'album',
                            uri: 'spotify:album:3YeVcAYZ0G8i09aok7f8C2'
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        'https://open.spotify.com/artist/3121AQETMztJVu59OKAnFJ'
                                },
                                href:
                                    'https://api.spotify.com/v1/artists/3121AQETMztJVu59OKAnFJ',
                                id: '3121AQETMztJVu59OKAnFJ',
                                name: 'Mother of Millions',
                                type: 'artist',
                                uri: 'spotify:artist:3121AQETMztJVu59OKAnFJ'
                            }
                        ],
                        disc_number: 1,
                        duration_ms: 369000,
                        explicit: false,
                        external_ids: {
                            isrc: 'SEYIJ1900401'
                        },
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/track/3jNeK7mJZD8V7PzeBSz2eR'
                        },
                        href:
                            'https://api.spotify.com/v1/tracks/3jNeK7mJZD8V7PzeBSz2eR',
                        id: '3jNeK7mJZD8V7PzeBSz2eR',
                        is_local: false,
                        name: 'Amber',
                        popularity: 16,
                        preview_url:
                            'https://p.scdn.co/mp3-preview/69b44562c979d2719ddfd477b6b5ba2b79870911?cid=774b29d4f13844c495f206cafdad9c86',
                        track_number: 1,
                        type: 'track',
                        uri: 'spotify:track:3jNeK7mJZD8V7PzeBSz2eR'
                    },
                    played_at: '2020-12-07T11:49:14.168Z',
                    context: {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/playlist/2RCEagXndEALQLhtDtt5zv'
                        },
                        href:
                            'https://api.spotify.com/v1/playlists/2RCEagXndEALQLhtDtt5zv',
                        type: 'playlist',
                        uri: 'spotify:playlist:2RCEagXndEALQLhtDtt5zv'
                    }
                },
                {
                    track: {
                        album: {
                            album_type: 'album',
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            'https://open.spotify.com/artist/3121AQETMztJVu59OKAnFJ'
                                    },
                                    href:
                                        'https://api.spotify.com/v1/artists/3121AQETMztJVu59OKAnFJ',
                                    id: '3121AQETMztJVu59OKAnFJ',
                                    name: 'Mother of Millions',
                                    type: 'artist',
                                    uri: 'spotify:artist:3121AQETMztJVu59OKAnFJ'
                                }
                            ],
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/album/7ccSrhJVd79Th2LcfdO1Ls'
                            },
                            href:
                                'https://api.spotify.com/v1/albums/7ccSrhJVd79Th2LcfdO1Ls',
                            id: '7ccSrhJVd79Th2LcfdO1Ls',
                            images: [
                                {
                                    height: 640,
                                    url:
                                        'https://i.scdn.co/image/ab67616d0000b2736816695541a6fcf9519cd331',
                                    width: 640
                                },
                                {
                                    height: 300,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00001e026816695541a6fcf9519cd331',
                                    width: 300
                                },
                                {
                                    height: 64,
                                    url:
                                        'https://i.scdn.co/image/ab67616d000048516816695541a6fcf9519cd331',
                                    width: 64
                                }
                            ],
                            name: 'Human',
                            release_date: '2014-02-25',
                            release_date_precision: 'day',
                            total_tracks: 10,
                            type: 'album',
                            uri: 'spotify:album:7ccSrhJVd79Th2LcfdO1Ls'
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        'https://open.spotify.com/artist/3121AQETMztJVu59OKAnFJ'
                                },
                                href:
                                    'https://api.spotify.com/v1/artists/3121AQETMztJVu59OKAnFJ',
                                id: '3121AQETMztJVu59OKAnFJ',
                                name: 'Mother of Millions',
                                type: 'artist',
                                uri: 'spotify:artist:3121AQETMztJVu59OKAnFJ'
                            }
                        ],
                        disc_number: 1,
                        duration_ms: 313000,
                        explicit: true,
                        external_ids: {
                            isrc: 'US1BR1400145'
                        },
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/track/3gbave8Y6F2oATwnNlAWDb'
                        },
                        href:
                            'https://api.spotify.com/v1/tracks/3gbave8Y6F2oATwnNlAWDb',
                        id: '3gbave8Y6F2oATwnNlAWDb',
                        is_local: false,
                        name: 'Orientation',
                        popularity: 4,
                        preview_url:
                            'https://p.scdn.co/mp3-preview/688f2489dbd7fb909075ca8d9853cea4cb582578?cid=774b29d4f13844c495f206cafdad9c86',
                        track_number: 1,
                        type: 'track',
                        uri: 'spotify:track:3gbave8Y6F2oATwnNlAWDb'
                    },
                    played_at: '2020-12-07T11:46:40.572Z',
                    context: {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/playlist/2RCEagXndEALQLhtDtt5zv'
                        },
                        href:
                            'https://api.spotify.com/v1/playlists/2RCEagXndEALQLhtDtt5zv',
                        type: 'playlist',
                        uri: 'spotify:playlist:2RCEagXndEALQLhtDtt5zv'
                    }
                },
                {
                    track: {
                        album: {
                            album_type: 'album',
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            'https://open.spotify.com/artist/1Joel9mDWSEZfHPE2KooW3'
                                    },
                                    href:
                                        'https://api.spotify.com/v1/artists/1Joel9mDWSEZfHPE2KooW3',
                                    id: '1Joel9mDWSEZfHPE2KooW3',
                                    name: 'Gazpacho',
                                    type: 'artist',
                                    uri: 'spotify:artist:1Joel9mDWSEZfHPE2KooW3'
                                }
                            ],
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/album/0ZNcRst0nrHnz9t9gAOfFS'
                            },
                            href:
                                'https://api.spotify.com/v1/albums/0ZNcRst0nrHnz9t9gAOfFS',
                            id: '0ZNcRst0nrHnz9t9gAOfFS',
                            images: [
                                {
                                    height: 640,
                                    url:
                                        'https://i.scdn.co/image/ab67616d0000b2730af1bf712d9e885e18154340',
                                    width: 640
                                },
                                {
                                    height: 300,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00001e020af1bf712d9e885e18154340',
                                    width: 300
                                },
                                {
                                    height: 64,
                                    url:
                                        'https://i.scdn.co/image/ab67616d000048510af1bf712d9e885e18154340',
                                    width: 64
                                }
                            ],
                            name: 'Fireworker',
                            release_date: '2020-09-18',
                            release_date_precision: 'day',
                            total_tracks: 5,
                            type: 'album',
                            uri: 'spotify:album:0ZNcRst0nrHnz9t9gAOfFS'
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        'https://open.spotify.com/artist/1Joel9mDWSEZfHPE2KooW3'
                                },
                                href:
                                    'https://api.spotify.com/v1/artists/1Joel9mDWSEZfHPE2KooW3',
                                id: '1Joel9mDWSEZfHPE2KooW3',
                                name: 'Gazpacho',
                                type: 'artist',
                                uri: 'spotify:artist:1Joel9mDWSEZfHPE2KooW3'
                            }
                        ],
                        disc_number: 1,
                        duration_ms: 922353,
                        explicit: false,
                        external_ids: {
                            isrc: 'GBCQV2000072'
                        },
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/track/1r4qG0JB8Q5YVvbT0MAqAf'
                        },
                        href:
                            'https://api.spotify.com/v1/tracks/1r4qG0JB8Q5YVvbT0MAqAf',
                        id: '1r4qG0JB8Q5YVvbT0MAqAf',
                        is_local: false,
                        name: 'Sapien',
                        popularity: 27,
                        preview_url:
                            'https://p.scdn.co/mp3-preview/e8f42c8709ec7bcb338bf3c38aa8039d59b72898?cid=774b29d4f13844c495f206cafdad9c86',
                        track_number: 5,
                        type: 'track',
                        uri: 'spotify:track:1r4qG0JB8Q5YVvbT0MAqAf'
                    },
                    played_at: '2020-12-07T11:41:27.369Z',
                    context: {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/playlist/2RCEagXndEALQLhtDtt5zv'
                        },
                        href:
                            'https://api.spotify.com/v1/playlists/2RCEagXndEALQLhtDtt5zv',
                        type: 'playlist',
                        uri: 'spotify:playlist:2RCEagXndEALQLhtDtt5zv'
                    }
                },
                {
                    track: {
                        album: {
                            album_type: 'album',
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            'https://open.spotify.com/artist/1Joel9mDWSEZfHPE2KooW3'
                                    },
                                    href:
                                        'https://api.spotify.com/v1/artists/1Joel9mDWSEZfHPE2KooW3',
                                    id: '1Joel9mDWSEZfHPE2KooW3',
                                    name: 'Gazpacho',
                                    type: 'artist',
                                    uri: 'spotify:artist:1Joel9mDWSEZfHPE2KooW3'
                                }
                            ],
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/album/0ZNcRst0nrHnz9t9gAOfFS'
                            },
                            href:
                                'https://api.spotify.com/v1/albums/0ZNcRst0nrHnz9t9gAOfFS',
                            id: '0ZNcRst0nrHnz9t9gAOfFS',
                            images: [
                                {
                                    height: 640,
                                    url:
                                        'https://i.scdn.co/image/ab67616d0000b2730af1bf712d9e885e18154340',
                                    width: 640
                                },
                                {
                                    height: 300,
                                    url:
                                        'https://i.scdn.co/image/ab67616d00001e020af1bf712d9e885e18154340',
                                    width: 300
                                },
                                {
                                    height: 64,
                                    url:
                                        'https://i.scdn.co/image/ab67616d000048510af1bf712d9e885e18154340',
                                    width: 64
                                }
                            ],
                            name: 'Fireworker',
                            release_date: '2020-09-18',
                            release_date_precision: 'day',
                            total_tracks: 5,
                            type: 'album',
                            uri: 'spotify:album:0ZNcRst0nrHnz9t9gAOfFS'
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        'https://open.spotify.com/artist/1Joel9mDWSEZfHPE2KooW3'
                                },
                                href:
                                    'https://api.spotify.com/v1/artists/1Joel9mDWSEZfHPE2KooW3',
                                id: '1Joel9mDWSEZfHPE2KooW3',
                                name: 'Gazpacho',
                                type: 'artist',
                                uri: 'spotify:artist:1Joel9mDWSEZfHPE2KooW3'
                            }
                        ],
                        disc_number: 1,
                        duration_ms: 384026,
                        explicit: false,
                        external_ids: {
                            isrc: 'GBCQV2000071'
                        },
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/track/20s50i2xeEUWclbKWgXxgZ'
                        },
                        href:
                            'https://api.spotify.com/v1/tracks/20s50i2xeEUWclbKWgXxgZ',
                        id: '20s50i2xeEUWclbKWgXxgZ',
                        is_local: false,
                        name: 'Antique',
                        popularity: 28,
                        preview_url:
                            'https://p.scdn.co/mp3-preview/5ab0a6d9464d462b7a3e0897792f8c990be94b9b?cid=774b29d4f13844c495f206cafdad9c86',
                        track_number: 4,
                        type: 'track',
                        uri: 'spotify:track:20s50i2xeEUWclbKWgXxgZ'
                    },
                    played_at: '2020-12-07T11:22:37.887Z',
                    context: {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/playlist/2RCEagXndEALQLhtDtt5zv'
                        },
                        href:
                            'https://api.spotify.com/v1/playlists/2RCEagXndEALQLhtDtt5zv',
                        type: 'playlist',
                        uri: 'spotify:playlist:2RCEagXndEALQLhtDtt5zv'
                    }
                }
            ]
        };
    }
    componentDidMount() {
        this.setState({
            recentTracks: CleanTrackList(this.requestRecentTracks().items)
        });
    }

    selectSong(event) {
        console.log(event);
    }

    handleSearch = (event) => {
        //async fetch list
        //set state tracks.
    };
    render() {
        return (
            <div className="App">
                <Header />
                <div className="max-w-screen-2xl mx-auto">
                    <UserProfile />

                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-gradient-to-br from-red-500 via-purple-400 to-acc-pink rounded-xl main-component">
                        <div className="col-span-5">
                            <div className="xl:mr-5 mr-0pt-3 ">
                                <Search
                                    value="searchTerm"
                                    onChange={this.handleSearch}
                                    description="Search song to base recommendations from."
                                />

                                {this.state.searchResult && (
                                    <TrackList
                                        title="Search Results"
                                        tracks={this.state.searchResult}
                                        onClick={this.selectSong}
                                    />
                                )}
                                {this.state.recentTracks && (
                                    <TrackList
                                        title="Recent tracks"
                                        description="Or chose from recently played tracks."
                                        tracks={this.state.recentTracks}
                                        onClick={this.selectSong}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-span-7 xl:mt-0 mt-3">
                            <TrackDetail {...this.state.chosenSong} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
