import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(props => (
        <li key={props.id} className='list-group-item'>
          <div>
            <img src={props.img} alt={props.title} />
            <div className="title-card">
              <h2>{props.title}</h2>
            </div>
            <div>
              <p>{props.description}</p>
            </div>
          </div>

        </li>
      ))}
    </ul>
  );
};

export default Posts;