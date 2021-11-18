import './index.scss'
import kurator from '../../../Internal/img/kurator.png'
import email from '../../../Internal/img/email.png'
import iphone from '../../../Internal/img/iphone.png'
import sent from '../../../Internal/img/sent.png'

const Card = () => {
    return (
        <div className='card-navigation'>
            <div className='info-navigation-card'>
                <div className='my-curator'>Мой куратор</div>
                <div className='info-curator'>
                    <div><img className='kurator' src={kurator} alt='kurator' /></div>
                    <div className='info-director'>
                        <div className='id-director'>1592399358 Director 3</div>
                        <div className='name-director'>Долгий Сергей Петрович</div>
                    </div>
                </div>
                <div className='info-user-date'>
                    <div className='user-date'>
                        <div className='wrapper-img'><img src={email} alt='email' width='16' height='13' /></div>
                        <div className='users-contacts'>sergey_131411@mail.u</div>
                    </div>
                    <div className='user-date'>
                        <div className='wrapper-img'><img src={iphone} alt='iphone' width='11' height='18' /></div>
                        <div className='users-contacts'>8-978-453-34-34</div>
                    </div>
                    <div className='user-date'>
                        <div className='wrapper-img'><img src={sent} alt='sent' width='16' height='14' /></div>
                        <div className='users-contacts'>sergey424</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card