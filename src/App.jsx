import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends.json';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import transactions from './components/TransactionHistory/transactions.json';


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
          title={"Upload stats"} 
          stats={data}
          />
      <FriendList 
      friends={friends} />
      <TransactionHistory 
      items={transactions} />
    </div>
  );
};
