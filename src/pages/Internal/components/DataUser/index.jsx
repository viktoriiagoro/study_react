import './index.scss'
import done from '../../../Internal/img/done.png'
import document1 from '../../../Internal/img/document1.png'
import document2 from '../../../Internal/img/document2.png'
import { Input } from 'antd';
import { Row, Col, Form } from 'antd';

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
                
                <Form layout="vertical">
                    <Row gutter={21}>
                        <Col span={6}>
                            <Form.Item label="Фамилия">
                                <Input className='input' size='large' placeholder="Беляев" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Имя">
                                <Input className='input' size='large' placeholder="Дмитрий" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Отчество">
                                <Input className='input' size='large' placeholder="Юрьевич" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Гражданство">
                                <Input className='input' size='large' placeholder="Росийское" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={21}>
                        <Col span={18}>
                            <Row gutter={21}>
                                <Col span={8}>
                                    <Form.Item label="Дата рождения">
                                         <Input className='input' size='large' placeholder="10.05.1989" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Пол">
                                         <Input className='input' size='large' placeholder="Мужской" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Серия и номер документа">
                                         <Input className='input' size='large' placeholder="34-45-124344" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={21}>
                                <Col span={16}>
                                    <Form.Item label="Орган выдачи">
                                         <Input className='input' size='large' placeholder="Федеральная миграционная служба 24-001" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Дата выдачи">
                                         <Input className='input' size='large' placeholder="10.05.2015" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <div className='info-personal'>Документы</div>
                            <div className='input-doc'>
                                <div className='document-chek'>
                                    <img  src={document1} alt='done' />
                                    <img  src={document2} alt='done' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>

    )
}
export default DataUser