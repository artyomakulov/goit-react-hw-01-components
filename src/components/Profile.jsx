
export default function Profile({userName, tag, location, profileUrl, userFollowers, userViews, userLikes}) {

    return (
      <div>
      <div class="profile">
      <div class="description">
        <img
          src={profileUrl}
          alt={userName}
          class="avatar"
        />
        <p class="name">{userName}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>
      
      <ul class="stats">
        <li>
          <span class="label">{userFollowers}</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">{userViews}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">{userLikes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
      </div>
      </div>
      )
  }