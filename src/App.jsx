import Profile from './components/Profile'
// import Section from 'components/Section';
import user from './user.json';



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
  {/* <Section title="xz sho" /> */}
    </div>
  );
};
