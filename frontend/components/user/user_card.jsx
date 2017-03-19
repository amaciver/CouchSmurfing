import React from 'react';

const UserCard = (props) => {
  if (props.type === 'user-card') {
    return (
      <div className={props.type}>
        <figure className='user-image'>
          <img
            src={props.user.image_url}
            className='user-headshot' />
          <figcaption>{props.user.username}</figcaption>
        </figure>
      </div>
    );
  } else {
    return (
      <div className={props.type}>
        <figure className='user-image'>
          <img
            src={props.host.image_url}
            className='user-headshot' />
          <figcaption>{props.host.name}</figcaption>
        </figure>
      </div>
    )
  }
}

export default UserCard;
