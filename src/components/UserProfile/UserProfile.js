import React from 'react';

class UserProfile extends React.Component {
    state = {
        userInfo: null,
        topTracks: null,
        topArtists: null,
        recentlyPlayed: null,
        topGenres: null
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

    //Async get user 5 recently played
    recentlyPlayed = [
        {
            track: {
                disc_number: 1,
                duration_ms: 419013,
                explicit: true,
                external_ids: {
                    isrc: 'US1BR1400154'
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/53xxkFhxoEiAhcv8lTJFR9'
                },
                href:
                    'https://api.spotify.com/v1/tracks/53xxkFhxoEiAhcv8lTJFR9',
                id: '53xxkFhxoEiAhcv8lTJFR9',
                is_local: false,
                name: 'Human',
                popularity: 3,
                preview_url:
                    'https://p.scdn.co/mp3-preview/02b69470ffd6d7ca3e8375e7f9378f7605fdde7d?cid=774b29d4f13844c495f206cafdad9c86',
                track_number: 10,
                type: 'track',
                uri: 'spotify:track:53xxkFhxoEiAhcv8lTJFR9'
            },
            played_at: '2020-12-05T14:53:44.821Z'
        },
        {
            track: {
                disc_number: 1,
                duration_ms: 303312,
                explicit: false,
                external_ids: {
                    isrc: 'GBCQV2000472'
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/2v9kZ80wXd9NrbdjV9RoYF'
                },
                href:
                    'https://api.spotify.com/v1/tracks/2v9kZ80wXd9NrbdjV9RoYF',
                id: '2v9kZ80wXd9NrbdjV9RoYF',
                is_local: false,
                name: 'Oblivion',
                popularity: 27,
                preview_url:
                    'https://p.scdn.co/mp3-preview/cc461619470415f3cb756dbac58eeae4b36b0e31?cid=774b29d4f13844c495f206cafdad9c86',
                track_number: 4,
                type: 'track',
                uri: 'spotify:track:2v9kZ80wXd9NrbdjV9RoYF'
            },
            played_at: '2020-12-05T14:46:45.329Z'
        },
        {
            track: {
                disc_number: 1,
                duration_ms: 293500,
                explicit: false,
                external_ids: {
                    isrc: 'SEYIJ1900402'
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/5YpmgUyrrEEywYsOBuWv1L'
                },
                href:
                    'https://api.spotify.com/v1/tracks/5YpmgUyrrEEywYsOBuWv1L',
                id: '5YpmgUyrrEEywYsOBuWv1L',
                is_local: false,
                name: 'Rite',
                popularity: 14,
                preview_url:
                    'https://p.scdn.co/mp3-preview/f41571e965a7be2768d0ddd86098f0de24708e00?cid=774b29d4f13844c495f206cafdad9c86',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:5YpmgUyrrEEywYsOBuWv1L'
            },
            played_at: '2020-12-05T14:41:41.535Z'
        },
        {
            track: {
                disc_number: 1,
                duration_ms: 211183,
                explicit: false,
                external_ids: {
                    isrc: 'NLVZ22000070'
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/72rxlFMxu0AdwsZZJ1Jszo'
                },
                href:
                    'https://api.spotify.com/v1/tracks/72rxlFMxu0AdwsZZJ1Jszo',
                id: '72rxlFMxu0AdwsZZJ1Jszo',
                is_local: false,
                name: 'The Song of a Dying Memory',
                popularity: 22,
                preview_url:
                    'https://p.scdn.co/mp3-preview/774e6eea974beaf0933830d8906b6f12946fd324?cid=774b29d4f13844c495f206cafdad9c86',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:72rxlFMxu0AdwsZZJ1Jszo'
            },
            played_at: '2020-12-05T14:36:47.588Z'
        },
        {
            track: {
                disc_number: 1,
                duration_ms: 230773,
                explicit: false,
                external_ids: {
                    isrc: 'GBDHC2019209'
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/4gtEvfy4lAnsAcQ0hOTV8T'
                },
                href:
                    'https://api.spotify.com/v1/tracks/4gtEvfy4lAnsAcQ0hOTV8T',
                id: '4gtEvfy4lAnsAcQ0hOTV8T',
                is_local: false,
                name: 'Eyes of the World',
                popularity: 50,
                preview_url:
                    'https://p.scdn.co/mp3-preview/8075513d2afe6408d27e54a728e6d7e19620d931?cid=774b29d4f13844c495f206cafdad9c86',
                track_number: 9,
                type: 'track',
                uri: 'spotify:track:4gtEvfy4lAnsAcQ0hOTV8T'
            },
            played_at: '2020-12-05T14:33:15.909Z'
        }
    ];

    componentDidMount() {
        this.getTopGenres();
    }
    //calculate top genres
    getTopGenres() {
        let topGenres = this.topArtists
            .map((artist) => {
                return artist.genres;
            })
            .flat();

        let genreCount = {};

        topGenres.forEach((genre) => {
            genreCount[genre] = (genreCount[genre] || 0) + 1;
        });

        let genreCountSortable = [];
        for (let genre in genreCount) {
            genreCountSortable.push([genre, genreCount[genre]]);
        }

        this.setState({
            topGenres: genreCountSortable
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
        });
    }

    render() {
        console.log(this.state.topGenres);
        return (
            <div className="UserProfile  main-component bg-gradient-to-tr from-green-600 to-acc-green rounded-xl">
                <h2>
                    User profile:&nbsp;
                    <a
                        href={this.userInfo.external_urls.spotify}
                        className="font-extrabold hover:underline hover:text-acc-pink-lighter"
                    >
                        {this.userInfo.display_name}
                    </a>
                </h2>
                <div className="flex gap-8">
                    <img
                        src="https://dummyimage.com/200"
                        alt="User Profile Picture"
                        className="rounded-md"
                    />
                    <div>
                        <h3>Top 5 tracks</h3>
                        <ul></ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
