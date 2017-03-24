import React from 'react';
import { Link } from 'react-router';

const UserCard = (props) => {
  if (props.type === 'user-card') {
    return (
      <div className='box'>
        <div className={props.type}>
          <figure className='user-image'>
            <img
              src={props.user.image_url}
              className='user-headshot' />
          </figure>
          <figcaption className='username'>{props.user.username}</figcaption>
        </div>
      </div>
    );
  } else {
    return (
      <div className='box'>
        <div className={props.type}>
          <figure className='user-image'>
            <img
              src={props.host.image_url}
              className='user-headshot' />
          </figure>
          <figcaption className='username'>{props.host.name}</figcaption>
          <Link to={`/cities/${props.host.city_id}`}>{props.host.city}</Link>

        </div>
      </div>
    )
  }
}

export default UserCard;
