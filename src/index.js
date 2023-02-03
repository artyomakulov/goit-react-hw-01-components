
import ReactDOM from 'react-dom';
import App from './App'
// const elem1 = <span>zalupa</span>
// const elem2 = <span>ssanaya</span>

// const element = <div>{elem1}{elem2}</div>

// console.log(element)


// ReactDOM.render(element, document.querySelector('#root'))

////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// userName={user.username} 
//   tag={user.tag} 
//   location={user.location} 
//   profileUrl={user.avatar} 
//   userFollowers={user.stats.followers} 
//   userViews={user.stats.views}
//   userLikes={user.stats.likes}
  
// function Profile(props) {
//   const {userName, tag, location, profileUrl, userFollowers, userViews, userLikes} = props
//   return (
//     <div>
//     <div class="profile">
//     <div class="description">
//       <img
//         src={profileUrl}
//         alt={userName}
//         class="avatar"
//       />
//       <p class="name">{userName}</p>
//       <p class="tag">{tag}</p>
//       <p class="location">{location}</p>
//     </div>
    
//     <ul class="stats">
//       <li>
//         <span class="label">{userFollowers}</span>
//         <span class="quantity">1000</span>
//       </li>
//       <li>
//         <span class="label">{userViews}</span>
//         <span class="quantity">2000</span>
//       </li>
//       <li>
//         <span class="label">{userLikes}</span>
//         <span class="quantity">3000</span>
//       </li>
//     </ul>
//     </div>
//     </div>
//     )

// }


// const profile = (
// <div>
// <div class="profile">
// <div class="description">
//   <img
//     src={user.avatar}
//     alt={user.username}
//     class="avatar"
//   />
//   <p class="name">{user.username}</p>
//   <p class="tag">{user.tag}</p>
//   <p class="location">{user.location}</p>
// </div>

// <ul class="stats">
//   <li>
//     <span class="label">{user.stats.followers}</span>
//     <span class="quantity">1000</span>
//   </li>
//   <li>
//     <span class="label">{user.stats.views}</span>
//     <span class="quantity">2000</span>
//   </li>
//   <li>
//     <span class="label">{user.stats.likes}</span>
//     <span class="quantity">3000</span>
//   </li>
// </ul>
// </div>
// </div>
// )



  //     "username": "Jacques Gluke",
  //     "tag": "jgluke",
  //     "location": "Ocho Rios, Jamaica",
  //     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  //     "stats": {
  //       "followers": 5603,
  //       "views": 4827,
  //       "likes": 1308
  //     }

ReactDOM.render(
<App
  />, 
document.querySelector('#root'))