import './App.css';
import React, {useState} from "react"
import FavoriteSongs from "./FavoriteSongs"
import AddSong from './AddSong'
import SongList from './SongList'

function App() {
const url = "https://songs-329-tunr-backend.herokuapp.com"


function App() {



  const emptySong = { 
    title: "", 
    artist: "", 
    time: "", 
    favorite: false
  }
const [songs, setSongs] = useState([emptySong])

  // handleCreate - function for when create is submitted
const handleCreate = (newSong) => { 
  fetch(url + '/songs', { 
    method: "POST", 
    headers: { 
      "Content-type": "application/json"
    }, 
    body: JSON.stringify(newSong)
  })
  .then(() => getSongs())
}

  return (
    <div className="App">
      <SongList songs={songs}/>
      <FavoriteSongs songs={songs}/> 
      {/* <FavoriteSongs songs={[{title:"Purple Rain"}, {artist:"Prince"}, {time:"6:66"}]}/> */}

      <AddSong song={emptySong} label="create" handleSubmit={handleCreate}/>
    </div>
  );
}

export default App;
