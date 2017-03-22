import React from 'react';

const UserCard = (props) => {
  if (props.type === 'user-card') {
    return (
      <div className='box'>
        <div className={props.type}>
          <figure className='user-image'>
            <img
              src={props.user.image_url}
              className='user-headshot' />
            <figcaption>{props.user.username}</figcaption>
          </figure>
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
            <figcaption>{props.host.username}</figcaption>
          </figure>
        </div>
      </div>
    )
  }
}

export default UserCard;
