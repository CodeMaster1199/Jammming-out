let token = '';
let expiresIN = '';
const clientID = 'b19f6f80371f400b8435e3c0e3b7b00a';
const redirectURI = 'http://localhost:3000';

const spotify = {
  getAccessToken: () => {
    if (token) {
      return token;
    }

    // extract access token from URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

    // extract expiry time from URL
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      token = accessTokenMatch[1];
      expiresIN = Number(expiresInMatch[1]);
      window.setTimeout(() => token = '', expiresIN * 1000);
      window.history.pushState('Access Token', null, '/');
      return token;
    }
    else {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${ClientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location.href=accessURL;
    }
  }
}

const search = (term) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}` 
      }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artist.name,
        album: track.album.name,
        uri: track.uri
      })
      )
    }
    throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
  }
};

const savePlaylist = async (name, trackURIs) => {
  if (!name || !trackURIs) {
    return;
  }
  let token = spotify.getAccessToken();
  let header = { Authorization: `Bearer ${token}`};
  let userID = '';

  
  try {
    const response = await fetch('https://api.spotify.com/v1/me', {
    headers: header
  });
  if (response.ok) {
    const jsonResponse = await response.json();
    userID = jsonResponse.id;
  }
  throw new Error('Request failed!');
  } catch (error) {
  console.log(error);
  }

  try {
    const response = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      headers: header,
      method: POST,
      body: JSON.stringify({name: name})});
    if (response.ok) {
      const jsonResponse = await response.json()
      let playlistID = jsonResponse.id;
    } 
    else {
      throw new Error('Request failed!');
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
      headers: header,
      method: POST,
      body: JSON.stringify({uris: trackURIs})
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error('Request failed!');
    }
  } catch (error) {
    console.log(error);
  }
}
  

export default spotify;
