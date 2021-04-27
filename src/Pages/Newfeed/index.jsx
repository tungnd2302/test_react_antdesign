import React from 'react';
import { Col, Layout, Row } from 'antd';
import './assets/css/Newfeed.css';
import PostAction from './PostAction';
import Posts from './Posts';


function Newfeed(props) {
    return (
        <Layout className="newfeed-background on-top-header">
            <Row className="newfeed-background container" >
                <Col span={5} className="bordered">
                    <div className="profife-brief">
                        <div className="profile-image">
                            <div className="profile-cover-image">
                                    
                            </div>
                            <div className="profile-avatar-image">

                            </div>
                        </div>
                        <div className="profile-intro text-center">
                            <p className="sayhi">Xin chào, Nguyễn Đức Tùng</p>
                            <a href="">Trang cá nhân</a>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                   <div className="newfeed-main">
                        <PostAction/>
                        <Posts/>
                        <Posts/>
                        <Posts/>
                        
                   </div>
                </Col>
                <Col span={7}>
                    
                </Col>
            </Row>
        </Layout>
    );
}

export default Newfeed;