import React, { useState } from 'react';
import person3 from './assets/images/person3.png';
import person4 from './assets/images/person4.png';
import thumbsup from './assets/images/thumbsup.png';
import thumbedsup from './assets/images/thumbsedup.png';
import comment from './assets/images/comment.png';
import noavatar from './assets/images/noavatar.png';
import send from './assets/images/send.png';
import PhotoPost from './PhotoPost';
import { Input } from 'antd';
const { TextArea } = Input;

Posts.propTypes = {
    
};

function Posts(props) {
    const [value, setValue] = useState()
    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="general-post">
            <div className="author-info d-flex">
                <div className="author-avatar">
                    <img src={person3} alt=""/>
                </div>
                <div className="author-indi">
                    <p className="author-indi-name">Nguyễn Lê Na đã đăng trong <a href="">AT13I</a></p>
                    <p className="author-indi-role">Sinh viên</p>
                    <p className="created-at">17:45</p>
                </div>
            </div>
            <PhotoPost/>
            <div className="react-post-action">
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
                <div className="border"></div>
            </div>
            <div className="comment-section">
                <div className="your-comment d-flex">
                    <img src={noavatar} alt=""/>
                    <TextArea
                        className="textarea-bg"
                        value={value}
                        onChange={(e) => onChange(e)}
                        placeholder="Nhập bình luận"
                        autoSize={{ minRows: 1, maxRows: 3 }}
                    />
                    <img src={send} alt="" style={{
                            width: '25px',
                            height: '25px',
                            marginTop: '10px'
                    }}/>
                </div>
                <div className="friends-comment root-comment d-flex">
                    <img className="friend-avatar" src={person4} alt=""/>
                    <div className="parent-comment" style={{ width: '100%'}}>
                        <div className="content-comment">
                            <div className="info-friends">
                                <p className="mb-1">Nguyễn Đức Tùng - Sinh viên</p>
                            </div>
                            <div className="content">
                                Chúc mừng sinh nhật bạn nhé
                            </div>
                        </div>
                        <div className="react-comment-action">
                            <div className="quantity-react-action d-flex">
                                <div className="like">
                                    <img src={thumbedsup} />
                                    <span>2</span>
                                </div>
                                <div className="comment">
                                   Reply 0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="friends-comment child-comment d-flex">
                    <img className="friend-avatar" src={person4} alt=""/>
                    <div className="parent-comment" style={{ width: '100%'}}>
                        <div className="content-comment">
                            <div className="info-friends">
                                <p className="mb-1">Nguyễn Đức Tùng - Sinh viên</p>
                            </div>
                            <div className="content">
                                Chúc mừng sinh nhật bạn nhé
                            </div>
                        </div>
                        <div className="react-comment-action">
                            <div className="quantity-react-action d-flex">
                                <div className="like">
                                    <img src={thumbedsup} />
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="friends-comment child-comment d-flex">
                    <img className="friend-avatar" src={person4} alt=""/>
                    <div className="parent-comment" style={{ width: '100%'}}>
                        <div className="content-comment">
                            <div className="info-friends">
                                <p className="mb-1">Nguyễn Đức Tùng - Sinh viên</p>
                            </div>
                            <div className="content">
                                Chúc mừng sinh nhật bạn nhé
                            </div>
                        </div>
                        <div className="react-comment-action">
                            <div className="quantity-react-action d-flex">
                                <div className="like">
                                    <img src={thumbedsup} />
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="friends-comment child-comment d-flex">
                    <img className="friend-avatar" src={person4} alt=""/>
                    <div className="parent-comment" style={{ width: '100%'}}>
                        <div className="content-comment">
                            <div className="info-friends">
                                <p className="mb-1">Nguyễn Đức Tùng - Sinh viên</p>
                            </div>
                            <div className="content">
                                Chúc mừng sinh nhật bạn nhé
                            </div>
                        </div>
                        <div className="react-comment-action">
                            <div className="quantity-react-action d-flex">
                                <div className="like">
                                    <img src={thumbedsup} />
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Posts;