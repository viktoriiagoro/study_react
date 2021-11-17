import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import External from './pages/External'
import Internal from './pages/Internal'
import Line from './components/Line'


const App = () => {
  return (
    <Layout className="App">
      <Sidebar />
      <Layout className='section' >
        <Header />
        <Line />
        <Layout.Content>
          <Routes>
            <Route exact path="/" element={<External />} />
            <Route path="/internal" element={<Internal />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;