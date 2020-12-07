export const CleanTrackList = (trackList) => {
    return trackList.map((item) => {
        let artists = item.track.artists.map((artist) => {
            return {
                id: artist.id,
                name: artist.name,
                url: artist.external_urls.spotify
            };
        });
        return {
            track: {
                id: item.track.id,
                trackNumber: item.track.track_number,
                name: item.track.name,
                played: item.played_at,
                url: item.track.external_urls.spotify,
                duration: item.track.duration_ms
            },
            album: {
                id: item.track.album.id,
                name: item.track.album.name,
                images: {
                    64: item.track.album.images[2].url,
                    300: item.track.album.images[1].url,
                    640: item.track.album.images[0].url
                },
                releaseDate: item.track.album.release_date,
                url: item.track.album.external_urls.spotify
            },
            artists: artists
        };
    });
};

export default CleanTrackList;
