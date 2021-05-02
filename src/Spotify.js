// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
// const clientId = "a8899d0b89fe4fec94995b8bd62eb128";
const clientId = "dc048b5e6e874cb5ba068998c3e9bd03";
// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-clone-6f0d8.web.app/"; // make sure to add redirect uri to spotify dashboard app
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    console.log("Hash >>> ", window.location.hash)
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;