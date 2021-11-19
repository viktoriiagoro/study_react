import './index.scss'
import done from '../../../Internal/img/done.png'
import { Input } from 'antd';
import { Row, Col } from 'antd';

const DataUser = () => {
    return (
        <div className='data-user'>
            <div className='wrapper-data'>
                <div className='change-data'>
                    <div className='verification-info'>
                        <div className='personal-data'>Личные данные</div>
                        <div className='done'><img  src={done} alt='done' width='16' height='16' /></div>
                        <div className='done-personal-data'>Подтверждено</div>
                    </div>
                    <div className='change-data-user'>Изменить данные</div>
                </div>
                <Row>
                    <Col span={6}>
                        <div className='info-personal'>Фамилия</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div className='info-personal'>Имя</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div className='info-personal'>Отчество</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div className='info-personal'>Гражданство</div>
                        <input />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div>Фамилия</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Имя</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Отчество</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Гражданство</div>
                        <input />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div>Фамилия</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Имя</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Отчество</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Гражданство</div>
                        <input />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div>Фамилия</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Имя</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Отчество</div>
                        <input />
                    </Col>
                    <Col span={6}>
                        <div>Гражданство</div>
                        <input />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default DataUser