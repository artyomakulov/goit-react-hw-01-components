import PropTypes from 'prop-types';
import css from './FriendList.module.css'


export default function FriendList({friends}) {
return (
<ul className={css.friend_list}>
{friends.map(({avatar, name, isOnline, id}) => {
  return (
    <li className={css.item} key={id}>
    <span className={isOnline ? css.statusOn : css.statusOf}></span>     
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}
)}
</ul>
    )
}

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}


