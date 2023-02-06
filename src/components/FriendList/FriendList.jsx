import PropTypes from 'prop-types';


export default function FriendList({friends}) {
    return (
<ul className="friend-list">
{friends.map(({avatar, name, isOnline, id}) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}
)}
</ul>
    )
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}


