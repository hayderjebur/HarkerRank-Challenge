import React from 'react';

function Articles({ articl }) {
  console.log('this is Article from Article Component', articl);
  return (
    <div className='card w-50 mx-auto'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Date</th>
        </tr>
      </thead>
      {articl.map((art) => (
        <table>
          <tbody>
            <tr data-testid='article' key='article-index'>
              <td data-testid='article-title'>{art.title}</td>
              <td data-testid='article-upvotes'>{art.upvotes}</td>
              <td data-testid='article-date'>{art.date}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Articles;
