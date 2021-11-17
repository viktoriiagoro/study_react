import './index.scss'
import profill from '../../../Internal/img/profill.png'
import pencel from '../../../Internal/img/pencel.png'
import profile from '../../img/profile.png'
import mastercard from '../../img/mastercard.png'
import verification from '../../img/verification.png'
import settings from '../../img/settings.png'
import signoftheaccount from '../../img/signoftheaccount.png'

const LIST = [
    {
      img: profile,
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
                        <div className='profill'><img src={profill} alt='profill' /></div>
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
            <div>
            <div className='navigation-button'>
                <div className='img-profile'><img src={profile} alt='profile' width='16px' height='20px' /></div>
                <div className='description-info'>Личные данные</div>
            </div>
                {LIST.map(item => (
                    <div className='navigation'>
                        <img className='img-profile' src={item.img} alt={item.path} />
                        <div className='description-info-user'>{item.texData}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Users