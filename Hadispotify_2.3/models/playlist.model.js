let playlist = [
    {
      id: 1,
      title: "The Great War",
      artists: ["Taylor Swift"],
      songUrl:
        "https://open.spotify.com/track/3UMrglJeju5yWyYIW6o99b?si=qbi5LbGqRuWOiPCxMweANw&utm_source=copy-link",
      playedCount: 1,
    },
    {
      id: 2,
      title: "Apllause",
      artists: ["Lady Gaga"],
      songUrl:
        "https://open.spotify.com/track/5ka2ajep9OAvU5Sgduhiex?si=luk5Qcp0TkSQ_VGTxd1cjA&utm_source=copy-link",
      playedCount: 1,
    },
  ];
  
  const getPlaylist = () => {
    return playlist;
  };
  
  const sortPlaylistByPlayedCount = () => {
    return playlist.sort((a, b) => {
      if (a.playedCount > b.playedCount) {
        return -1;
      } else if (a.playedCount < b.playedCount) {
        return 1;
      }
      return 0;
    });
  };
  
  const findSongById = (songId) => {
    return playlist.find((song) => song.id === parseInt(songId));
  };
  
  const addPlayedCount = (songId) => {
    const song = findSongById(songId);
    song.playedCount++;
  };
  
  const addNewSong = (songTitle, songArtists, songUrl) => {
    playlist.push({
      id: playlist.length + 1,
      songTitle,
      songArtists,
      songUrl,
      playedCount: 0,
    });
    return playlist[playlist.length - 1];
  };
  
  module.exports = {
    getPlaylist,
    sortPlaylistByPlayedCount,
    findSongById,
    addPlayedCount,
    addNewSong,
  };
  