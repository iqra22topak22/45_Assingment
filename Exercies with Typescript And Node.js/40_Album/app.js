"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('artis 1', 'album title 1');
console.log(album1);
const album2 = make_album('artis 2', 'album title 2');
console.log(album2);
const album3 = make_album('artis 3', 'album title 3', 12);
console.log(album3);
