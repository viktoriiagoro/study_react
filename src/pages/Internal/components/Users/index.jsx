import './index.scss'
import group from '../../../Internal/img/group.png'
import pencel from '../../../Internal/img/pencel.png'
import profill from '../../img/profill.png'
import mastercard from '../../img/mastercard.png'
import verification from '../../img/verification.png'
import settings from '../../img/settings.png'
import signoftheaccount from '../../img/signoftheaccount.png'
import Card from '../Card'
import time from '../../img/time.png'
import desktop from '../../img/desktop.png'


const LIST = [
    {
      img: profill,
      path: '/profile',
      texData: 'Контактные данные',
    },
    {
      img: mastercard,
      path: '/mastercard',
      texData: 'Банковские карты и счета',
    },
    {
      img: verification,
      path: '/verification',
      texData: 'Пароли и безопасность',
    },
    {
      img: settings,
      path: '/settings',
      texData: 'Настройка уведомлений',
    },
    {
      img: signoftheaccount,
      path: '/signoftheaccount',
      texData: 'Выйти из аккаунта',
    },
  ]

const Users = () => {
    return (
        <div className='users'>
            <div className='content-profile'>
                <diV>
                    <div className='content-profile-image'>
                        <div className='group'><img src={group} alt='profill' /></div>
                    </div>
                </diV>
                <div className='info-users-name'>
                    <div className='id-user'>ID 1592399358</div>
                    <div className='user-name'>Дмитрий Беляев</div>
                    <div className='pseudonym'>
                        <div className='pseudonym-name'>Псевдоним</div>
                        <div><img className='pensel' src={pencel} alt='pencel' /></div>
                    </div>
                </div>

            </div>
            <div className='wrapper-content-navigation'>
                <div className='navigation-button'>
                    <div className='img-profile'><img src={profill} alt='profile' width='16px' height='20px' /></div>
                    <div className='description-info'>Личные данные и адреса</div>
                </div>
                {LIST.map(item => (
                    <div className='navigation'>
                        <div className='img-profile'><img  src={item.img} alt={item.path} /></div>
                        <div className='description-info-user'>{item.texData}</div>
                    </div>
                ))}
            </div>
            <Card />
            <div className='footer'>
                <div className='footer-info'>
                    <img src={time} alt='time' width='12px' height='12px' />
                    <div className='footer-date'>Последний вход: 23 февраля 14:45</div>
                </div>
                <div className='footer-info'>
                    <img src={desktop} alt='desktop' />
                    <div className='footer-date'>Chrome Windows. DESKTOP-0452ERT</div>
                </div>
            </div>
        </div>
    )
}
export default Users