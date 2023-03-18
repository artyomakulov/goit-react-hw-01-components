import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export default function FriendListItem({avatar, name, isOnline, id}) {
    return (
        <li className={css.item} key={id}>
    <span className={isOnline ? css.statusOn : css.statusOf}></span>     
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}