import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json'


export default function App() {
  return (
    <div>
      <Profile 
  userName={user.username} 
  tag={user.tag} 
  location={user.location} 
  profileUrl={user.avatar} 
  userFollowers={user.stats.followers} 
  userViews={user.stats.views}
  userLikes={user.stats.likes}
  />
  <Statistics 
  id={data.id}
  label={data.label}
  percent={data.percentage}
  
  />
    </div>
  );
};
