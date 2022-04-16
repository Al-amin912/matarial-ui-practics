

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';
import MediaCard from './components/Use/Use';





function App() {
  const [articles, setArticles] = useState([]);
// useEffect(() => {
//   const url=' https://newsapi.org/v2/top-headlines?country=us&apiKey=f8ca6fd9bf7043358828ef28d7cefda0'

  
//   fetch(url)
//   .then(res=>res.json())
//   .then(data=>setArticles(data.articles))
// }, [])

useEffect(() => {
  const url=' https://newsapi.org/v2/top-headlines?country=us&apiKey=f8ca6fd9bf7043358828ef28d7cefda0'
   axios(url)
   .then(data=>setArticles(data.data.articles))
},[])

  return (
    <div className="App">

      <h2>headlines:{articles.length}</h2>
    {
      articles.map(article=> <MediaCard article={article}></MediaCard>)
    }

    <News></News>
   
    </div>
  );
}

export default App;
