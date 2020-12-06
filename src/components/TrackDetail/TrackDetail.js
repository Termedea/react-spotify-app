import React from 'react';
import SummaryGrid from '../SummaryGrid/SummaryGrid';
import Card from '../Card/Card';
import TrackList from '../TrackList/TrackList';

class TrackDetail extends React.Component {
    tracks = [
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
    render() {
        return (
            <main className="TrackDetail p-4 rounded-xl bg-gradient-to-t from-primary-darker to to-black shadow-md">
                <h2 className="section-header">Track details</h2>

                <Card />

                <TrackList title="Recommended songs" tracks={this.tracks} />
                <div className="flex justify-around flex-wrap gap-5 mt-7 ">
                    <SummaryGrid list={[1, 2, 3, 4]} title="More Albums" />

                    <SummaryGrid list={[1, 2, 3, 4]} title="More Artists" />
                </div>
            </main>
        );
    }
}

export default TrackDetail;
