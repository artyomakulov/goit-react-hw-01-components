import PropTypes from 'prop-types';
import css from './Profile.module.css'


export default function Profile({userName, tag, location, profileUrl, userFollowers, userViews, userLikes}) {

    return (
      <div>
      <div className={css.profile}>
      <div className={css.description}>
        <img
          src={profileUrl}
          alt={userName}
          className={css.avatar}
        />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{userFollowers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{userViews}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{userLikes}</span>
        </li>
      </ul>
      </div>
      </div>
      )
  }


  Profile.propTypes = {
    userName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    profileUrl: PropTypes.string,
    userFollowers: PropTypes.number,
    userViews: PropTypes.number,
    userLikes: PropTypes.number,
  }


  