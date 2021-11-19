import Users from '../Internal/components/Users'
import DataUser from '../Internal/components/DataUser'
import './index.scss'


const App = () => {
  return (
    <div className='content-users'>
      <Users />
      <DataUser />
    </div>
  );
}

export default App;