import './index.scss'
import attention from '../../../Internal/img/attention.png'

const Additional = () => {
    return (
        <div className='additional-data'>
            <div className='attention'>
                <div className='text-attention'>
                    <img  src={attention} alt='attention' />
                    <div className='add-text'>Добавьте данные вашего адреса и банковской карты для получения договоров по приобретенным лотам и вывода дохода на вашу карту. </div>
                    <div>
                        <button className='button-attention'>
                            <div className='text-button'>Добавить адрес и банковскую карту</div>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Additional