import React from 'react';
import IconListItem from '../IconList/IconListItem';
import './UserProfile.css';

class UserProfile extends React.Component {
    state = {
        userInfo: [],
        topTracks: [],
        topArtists: [],
        topGenres: []
    };
    //Async get user info
    userInfo = {
        display_name: 'termedea',
        external_urls: {
            spotify: 'https://open.spotify.com/user/termedea'
        },
        followers: {
            href: null,
            total: 4
        },
        href: 'https://api.spotify.com/v1/users/termedea',
        id: 'termedea',
        images: [
            {
                height: null,
                url:
                    'https://i.scdn.co/image/ab6775700000ee8536d398249846caf2eb0f82d6',
                width: null
            }
        ],
        type: 'user',
        uri: 'spotify:user:termedea'
    };
    //Async get user top 5 tracks
    topTracks = [
        {
            disc_number: 1,
            duration_ms: 317920,
            explicit: false,
            external_ids: {
                isrc: 'ushm90998729'
            },
            external_urls: {
                spotify: 'https://open.spotify.com/track/1jPpsFajsr7BveVXQglJZr'
            },
            href: 'https://api.spotify.com/v1/tracks/1jPpsFajsr7BveVXQglJZr',
            id: '1jPpsFajsr7BveVXQglJZr',
            is_local: false,
            name: 'Feathergun in the Garden of the Sun',
            popularity: 48,
            preview_url:
                'https://p.scdn.co/mp3-preview/bb1fcc23448653da5e987a17d3df551980e4da1a?cid=774b29d4f13844c495f206cafdad9c86',
            track_number: 7,
            type: 'track',
            uri: 'spotify:track:1jPpsFajsr7BveVXQglJZr'
        },
        {
            disc_number: 1,
            duration_ms: 373586,
            explicit: false,
            external_ids: {
                isrc: 'QM9AA1484115'
            },
            external_urls: {
                spotify: 'https://open.spotify.com/track/0nMKVMCXCmRplsKKLt1TTh'
            },
            href: 'https://api.spotify.com/v1/tracks/0nMKVMCXCmRplsKKLt1TTh',
            id: '0nMKVMCXCmRplsKKLt1TTh',
            is_local: false,
            name: 'Landmines',
            popularity: 33,
            preview_url:
                'https://p.scdn.co/mp3-preview/c38cb4e03bfdef214edf74aa51a87c9deffd5447?cid=774b29d4f13844c495f206cafdad9c86',
            track_number: 2,
            type: 'track',
            uri: 'spotify:track:0nMKVMCXCmRplsKKLt1TTh'
        },
        {
            disc_number: 1,
            duration_ms: 382186,
            explicit: false,
            external_ids: {
                isrc: 'QM9AA1484121'
            },
            external_urls: {
                spotify: 'https://open.spotify.com/track/5j86XAMtRZk9UrpdOrHU1T'
            },
            href: 'https://api.spotify.com/v1/tracks/5j86XAMtRZk9UrpdOrHU1T',
            id: '5j86XAMtRZk9UrpdOrHU1T',
            is_local: false,
            name: 'Just a Ride',
            popularity: 40,
            preview_url:
                'https://p.scdn.co/mp3-preview/6a01741c1cf9a4f2f938e29dd1e1616651d07e85?cid=774b29d4f13844c495f206cafdad9c86',
            track_number: 8,
            type: 'track',
            uri: 'spotify:track:5j86XAMtRZk9UrpdOrHU1T'
        },
        {
            disc_number: 1,
            duration_ms: 493413,
            explicit: false,
            external_ids: {
                isrc: 'ushm90998728'
            },
            external_urls: {
                spotify: 'https://open.spotify.com/track/5tH6I20aXNFCLfewWaIaS2'
            },
            href: 'https://api.spotify.com/v1/tracks/5tH6I20aXNFCLfewWaIaS2',
            id: '5tH6I20aXNFCLfewWaIaS2',
            is_local: false,
            name: 'Downhill',
            popularity: 29,
            preview_url:
                'https://p.scdn.co/mp3-preview/221f5a400acfad87065545565d27480b88362845?cid=774b29d4f13844c495f206cafdad9c86',
            track_number: 6,
            type: 'track',
            uri: 'spotify:track:5tH6I20aXNFCLfewWaIaS2'
        },
        {
            disc_number: 1,
            duration_ms: 313626,
            explicit: false,
            external_ids: {
                isrc: 'ushm90998727'
            },
            external_urls: {
                spotify: 'https://open.spotify.com/track/27DfNyuUYShNmaRxwoKEEa'
            },
            href: 'https://api.spotify.com/v1/tracks/27DfNyuUYShNmaRxwoKEEa',
            id: '27DfNyuUYShNmaRxwoKEEa',
            is_local: false,
            name: 'Keyhole in the Sky',
            popularity: 30,
            preview_url:
                'https://p.scdn.co/mp3-preview/943d1a8f05ce6c3a32fd34309c5e4223b4d19d4c?cid=774b29d4f13844c495f206cafdad9c86',
            track_number: 5,
            type: 'track',
            uri: 'spotify:track:27DfNyuUYShNmaRxwoKEEa'
        }
    ];
    //Async get user top 5 artists
    topArtists = [
        {
            genres: [
                'alternative metal',
                'gothenburg metal',
                'melodic death metal',
                'melodic metalcore',
                'metal',
                'nu metal',
                'swedish death metal',
                'swedish metal'
            ],
            href: 'https://api.spotify.com/v1/artists/57ylwQTnFnIhJh4nu4rxCs',
            id: '57ylwQTnFnIhJh4nu4rxCs',

            name: 'In Flames',
            popularity: 67,
            type: 'artist',
            uri: 'spotify:artist:57ylwQTnFnIhJh4nu4rxCs'
        },
        {
            genres: ['alternative metal', 'progressive metal'],
            href: 'https://api.spotify.com/v1/artists/1l2cyuwystFDLEnXr254a1',
            id: '1l2cyuwystFDLEnXr254a1',

            name: 'Rishloo',
            popularity: 43,
            type: 'artist',
            uri: 'spotify:artist:1l2cyuwystFDLEnXr254a1'
        },
        {
            genres: [
                'alternative metal',
                'progressive metal',
                'swedish progressive metal'
            ],
            href: 'https://api.spotify.com/v1/artists/38uWD5h115pdz278q4rwZW',
            id: '38uWD5h115pdz278q4rwZW',

            name: 'Soen',
            popularity: 53,
            type: 'artist',
            uri: 'spotify:artist:38uWD5h115pdz278q4rwZW'
        },
        {
            genres: [
                'metal',
                'neo classical metal',
                'power metal',
                'progressive metal',
                'rock'
            ],
            href: 'https://api.spotify.com/v1/artists/2aaLAng2L2aWD2FClzwiep',
            id: '2aaLAng2L2aWD2FClzwiep',

            name: 'Dream Theater',
            popularity: 65,
            type: 'artist',
            uri: 'spotify:artist:2aaLAng2L2aWD2FClzwiep'
        },
        {
            genres: [
                'art rock',
                'neo-progressive',
                'polish prog',
                'prog metal',
                'progressive metal',
                'progressive rock',
                'symphonic rock'
            ],
            href: 'https://api.spotify.com/v1/artists/5yjbUO1Jocui7RKE30zfLT',
            id: '5yjbUO1Jocui7RKE30zfLT',

            name: 'Riverside',
            popularity: 50,
            type: 'artist',
            uri: 'spotify:artist:5yjbUO1Jocui7RKE30zfLT'
        }
    ];

    componentDidMount() {
        this.setState({
            topTracks: this.topTracks,
            topArtists: this.topArtists,
            topGenres: this.getTopGenres()
        });
    }

    //calculate top genres
    getTopGenres() {
        let genreCount = [];
        let prevGenre;

        //getting genres from artists, flatten, sorting, and looping through...
        this.topArtists
            .map((artist) => {
                return artist.genres;
            })
            .flat()
            .sort()
            .forEach((genre) => {
                //...to save unique instances of the genre in genreCount.
                if (genre !== prevGenre) {
                    genreCount.push([genre, 1]);
                } else {
                    genreCount.find((item) => {
                        //if the genre exists, add to its count.
                        if (item[0] === genre) {
                            item[1]++;
                        }
                    });
                }
                prevGenre = genre;
            });

        //set the state to top 5 genres from genreCount.
        return genreCount.sort((a, b) => b[1] - a[1]).splice(0, 5);
    }
    showList(list, type) {
        if (type === 'genres') this.showTopGenres();
        else {
            if (list.length > 0) {
                return list.map((item) => (
                    <IconListItem
                        key={item.id}
                        text={item.name}
                        icon={
                            (type === 'tracks' ? 'music' : '') ||
                            (type === 'artists' ? 'record-vinyl' : '')
                        }
                    />
                ));
            }
        }

        return <p>Loading...</p>;
    }

    showTopGenres() {
        if (this.state.topGenres.length > 0)
            return this.state.topGenres.map((genre, i) => (
                <IconListItem text={genre[0]} key={i} icon="folder" />
            ));
    }
    render() {
        return (
            <div className="UserProfile  main-component bg-gradient-to-bl from-yellow-400  to-acc-green rounded-xl">
                <h2 className="section-header text-acc-green-darker">
                    Finding best match
                </h2>
                <p className="text-acc-green-darker">
                    By using top tracks, artists and genres as seeds, perfect
                    recommendations are made based on selected song.
                </p>
                <div className="mt-7 p-4 rounded-xl bg-gradient-to-t from-primary-darker to to-black shadow-md">
                    <h3 className="mb-3 sub-header sub-header-acc-green">
                        Current user:&nbsp;
                        <a
                            href={this.userInfo.external_urls.spotify}
                            className="text-white hover:underline hover:text-acc-green-lighter"
                        >
                            {this.userInfo.display_name}
                        </a>
                    </h3>
                    <div className="flex gap-8 flex-wrap justify-center items-center  ">
                        <img
                            src="https://dummyimage.com/100"
                            alt="User Profile Picture"
                            className="rounded-md"
                        />
                        <div>
                            <h4>Top 5 tracks</h4>
                            <ul>
                                {this.showList(this.state.topTracks, 'tracks')}
                            </ul>
                        </div>
                        <div>
                            <h4>Top 5 Genres</h4>
                            <ul>{this.showTopGenres()}</ul>
                        </div>
                        <div>
                            <h4>Top 5 artists</h4>
                            <ul>
                                {this.showList(
                                    this.state.topArtists,
                                    'artists'
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
