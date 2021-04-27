import React, { useState } from 'react';
import { Carousel, Col, Modal, Row } from 'antd';
import happybirthday from './assets/images/happybirthday.png';
import subhappybirthday from './assets/images/subhappybirthday.png';
import person3 from './assets/images/person3.png';
import close from './assets/images/close.png';
import thumbsup from './assets/images/thumbsup.png';
import comment from './assets/images/comment.png';

function PhotoPost(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    return (
        <div className="post-content">
            <p className="content-text">
                Chúc mừng sinh nhật bạn A
            </p>
            <div className="photos-post">
                <div className="main-photo-post" onClick={showModal}>
                    <img src={happybirthday} alt="" className="img-fluid"/>
                </div>
                <div className="sub-photo-post d-flex">
                    <div class="flex-fill"><img src={subhappybirthday} alt="" className="flex-fill img-fluid"/></div>
                    <div class="flex-fill"><img src={subhappybirthday} alt="" className="flex-fill img-fluid"/></div>
                    <div class="flex-fill"><img src={subhappybirthday} alt="" className="flex-fill img-fluid"/></div>
                </div>
            </div>
            <Modal title={false}
                visible={isModalVisible} 
                footer={false} 
                onCancel={handleCancel} 
                width={800}
                closable={false}
                className="my-modal"
                
               
            >
               <Row>
                   <Col span={14}>
                        <Row style ={{ 
                                minHeight: '550px',
                                alignItems: 'center',
                                background: '#000'
                         }}>
                            <Col span={24}>
                                <div className="image-slider">
                                    <Carousel
                                        dots={false}
                                        draggable={true}
                                        arrows={true}
                                    >
                                        <div className="image-item-slider">
                                            <img src={happybirthday} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="image-item-slider">
                                            <img src={subhappybirthday} className="img-fluid" alt=""/>   
                                        </div>
                                        <div className="image-item-slider">
                                            <img src={happybirthday} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="image-item-slider">
                                            <img src={subhappybirthday} className="img-fluid" alt=""/>
                                        </div>
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                   </Col>
                   <Col span={10}>
                        <Row style ={{ 
                            padding:"20px 22px"                              
                         }}>
                            <Col span={24}>
                                <div className="d-flex justify-content-between">
                                    <div className="detail-post">
                                        <div className="author-info d-flex p-0">
                                            <div className="author-avatar">
                                                <img src={person3} alt=""/>
                                            </div>
                                            <div className="author-indi">
                                                <p className="author-indi-name">Nguyễn Lê Na đã đăng trong <a href="">AT13I</a></p>
                                                <p className="author-indi-role">Sinh viên</p>
                                                <p className="created-at">17:45</p>
                                            </div>
                                        </div>
                                        <p className="content-text mb-0 mt-2">
                                            Chúc mừng sinh nhật bạn A
                                        </p>
                                    </div>
                                    <div onClick={handleCancel}>
                                        <img src={close} alt="" width="18px" height="18px"/>
                                    </div>
                                </div>
                                <div className="react-post-action p-0">
                                    <div className="border" style={{ 
                                        marginBottom: "2px"
                                     }}></div>
                                    <div className="quantity-react-action d-flex">
                                        <div className="like">
                                            <img src={thumbsup} />
                                            <span>32</span>
                                        </div>
                                        <div className="comment">
                                            <img src={comment} />
                                            <span>32</span>
                                        </div>
                                    </div>
                                    <div className="border" style={{ 
                                        marginTop: "2px"
                                     }}></div>
                                </div>
                            </Col>
                        </Row>
                   </Col>
               </Row>
            </Modal>
        </div>
    );
}

export default PhotoPost;