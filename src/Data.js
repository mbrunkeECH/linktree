//images - quite unorthidox but means I do not pollute the components
import applemusic from "../src/assets/icons/applemusic.svg";
import Spotify from "../src/assets/icons/spotify.svg";
import SoundCloud from "../src/assets/icons/soundcloud.svg";
import YouTube from "../src/assets/icons/youtube.svg";
import Deezer from "../src/assets/icons/deezer.svg";
import Tidal from "../src/assets/icons/tidal.svg";
import Bandcamp from "../src/assets/icons/bandcamp.svg";
import userImage from "../src/assets/profile-picture.png";

export const User = {
  userName: "mitchbrunke",
  primaryLinkColor: '#39E09B',
  primaryTextColor: '#263238',
  profilePic: userImage,
};

export const Shows = {
  upcoming: [
    { date: 'Apr 01 2019', location: 'The Forum, Melbourne', soldOut: false, url: 'https://linktr.ee/' },
    { date: 'Apr 02 2019', location: 'Parliment House, Canberra', soldOut: true, url: 'https://linktr.ee/' },
    { date: 'Apr 03 2019', location: '32 Wallaby Way, Sydney', soldOut: false, url: 'https://linktr.ee/' },
    { date: 'Apr 04 2019', location: 'The PowerHouse, Brisbane', soldOut: false, url: 'https://linktr.ee/' },
  ],
};

export const Platforms = {
  platforms: [
    { name: "Spotify", logo: Spotify, url: 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC' },
    { name: "Apple Music", logo: applemusic, url: 'https://music.apple.com/au/album/never-gonna-give-you-up/1478168215?i=1478168518' },
    { name: "Soundcloud", logo: SoundCloud, url: 'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4' },
    { name: "Youtube Music", logo: YouTube, url: 'https://music.youtube.com/watch?v=lYBUbBu4W08&list=RDAMVMlYBUbBu4W08' },
    { name: "Deezer", logo: Deezer, url: 'https://www.deezer.com/en/track/781592622?autoplay=true' },
  ]
}
