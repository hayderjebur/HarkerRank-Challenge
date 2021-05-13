import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [articl, setArticles] = useState(articles);

  const sortArt = () => {
    let sortItems = articles.sort((a, b) => b.upvotes - a.upvotes);
    setArticles([...sortItems]);
    console.log('Sortttt', sortItems);
  };

  const sortDate = () => {
    setArticles(
      articles.sort((a, b) => {
        let da = new Date(a.date),
          db = new Date(b.date);
        return db - da;
      })
    );
    console.log(articl);
  };
  useEffect(() => {
    console.log('render please');
  }, [articl]);
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          onClick={sortArt}
          data-testid='most-upvoted-link'
          className='small'
        >
          Most Upvoted
        </button>
        <button
          onClick={sortDate}
          data-testid='most-recent-link'
          className='small'
        >
          Most Recent
        </button>
      </div>
      <Articles articl={articl} />
    </div>
  );
}

export default App;
