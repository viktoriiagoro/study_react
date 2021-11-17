import './index.scss'
import { Layout } from 'antd';
import x100 from '../../img/x100.png'
import windows from '../../img/windows.png'
import basket from '../../img/basket.png'
import baggage from '../../img/baggage.png'
import info from '../../img/info.png'
import list from '../../img/list.png'
import canculator from '../../img/canculator.png'
import { Link, useLocation } from "react-router-dom";


const NAVIGATION = [
    {
        icon: windows,
        path: '/',
        isActive: true
    },
    {
        icon: basket,
        path: '/internal',
        isActive: false
    },
    {
        icon: baggage,
        path: '/productive',
        isActive: false
    },
    {
        icon: info,
        path: '/info-products',
        isActive: false
    },
    {
        icon: list,
        path: '/list-products',
        isActive: false
    },
]

const Sidebar = () => {
    const location = useLocation()

    return (
        <Layout.Sider className='sidebar'>
            <div className='sidebare-wrapper'>
                <div>
                    <div className='sidebar-icon'>
                        <img src={x100} alt='x100' width='46px' height='30px' />
                    </div>
                    <div className='navigation-wrap'>
                        {NAVIGATION.map(item => (
                            <Link className={'icon-sidebar' + (location.pathname === item.path ? ' active' : '')} key={item.path} to={item.path}>
                                <img src={item.icon} alt='Vector' width='22' height='22' />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='container'>
                    <div className='container-end'>
                        <img className='container-end_image' src={canculator} alt='canculator' />
                    </div>
                </div>
            </div>
        </Layout.Sider>
    )
}

export default Sidebar