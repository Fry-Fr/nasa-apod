import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apod, setApod] = useState({});
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${'DEMO_KEY'}`)
      .then(res => {
        setApod(res.data)
      })
      .catch(err => console.log(err))
  },[]);
console.log(apod)
  return (
    <>
    <header>
      <h1>{apod.title}</h1>
      <h3>{apod.date}</h3>
    </header>
    <main>
      <h4>{apod.copyright}</h4>
      {apod.media_type === 'image'
       ? <img src={apod.url} alt={apod.title} />
       : <></>}
      {apod.media_type === 'video'
       ? <iframe src={apod.url + '&mute=1'} width='1220px' height='720px' title={apod.title} />
       : <></>}
      <p>{apod.explanation}</p>
    </main>
    </>
  );
}

export default App;
