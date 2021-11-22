import Users from '../Internal/components/Users'
import DataUser from '../Internal/components/DataUser'
import Additional from '../Internal/components/Additional'
import './index.scss'


const App = () => {
  return (
    <div className='content-users'>
      <Users />
      <div className='content-user-add'>
        <DataUser />
        <Additional />
      </div>
      
    </div>
  );
}

export default App;