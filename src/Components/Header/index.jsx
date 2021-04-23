import React from 'react';
import { Col, Layout, Row,Input,Badge  } from 'antd';
import kmalogo from './assets/icon/kma.png';
import bell from './assets/icon/awesome-bell.png';
import home from './assets/icon/awesome-home.png';
import user from './assets/icon/user-graduate.png';
import caretdown from './assets/icon/caret-down.png';
import './assets/css/Header.css';
import { SearchOutlined } from '@ant-design/icons';


function Header(props) {
    return (
        <Layout className="header-layout" style={{ backgroundColor: "#FFF", lineHeight : "50px" }}>
            <Row className="bg-white container">
                <Col span={1}>
                    <img  src={kmalogo} />
                </Col>
                <Col span={8}>
                    <Input placeholder="Search" className="header-input" prefix={<SearchOutlined />}/>
                </Col>
                <Col span={4} offset={5}>
                    <div className="d-flex">
                        <div className="header-wrap-badge">
                                <img  src={home} />
                            <p className="header-icon">Trang chủ</p>
                        </div>

                        <div className="header-wrap-badge" style={{ marginLeft:"45px" }}>
                            <Badge size="small" count={5}>
                                <img  src={bell} />
                            </Badge>
                            <p className="header-icon">Thông báo</p>
                        </div>
                    </div>
                </Col>
                <Col span={5} offset={1} className="border-left bg-border">
                    <div className="d-flex">
                        <div style={{ marginLeft:"20px" }}>
                                <img  src={user} />
                        </div>
                        <div className="header-user-infomation">
                                <p className="student-name">
                                    Nguyễn Đức Tùng
                                </p>
                                <p className="student-class">
                                    AT13i
                                </p>
                        </div>
                        <div style={{ marginLeft:"47px" }}>
                                <img  src={caretdown} />
                        </div>
                    </div>
                </Col>
            </Row> 
        </Layout>
    );
}

export default Header;