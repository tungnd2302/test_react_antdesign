import React, { useState } from 'react';
import { Input } from 'antd';
import { EditFilled } from '@ant-design/icons';
import newspaper from './assets/images/newspaper.png';
import document from './assets/images/document.png';

const { TextArea } = Input;

PostAction.propTypes = {
    
};


function PostAction(props) {
    const [value, setValue] = useState()
    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="post-action">
            <TextArea
                prefix={<EditFilled />}
                className="textarea-bg"
                value={value}
                onChange={(e) => onChange(e)}
                placeholder="Nhập trạng thái của bạn"
                autoSize={{ minRows: 1, maxRows: 3 }}
            />

            <div className="type-post-action d-flex">
                <div className="share-post">
                    <img src={newspaper} alt=""/>
                    <span>Bài chia sẻ</span>
                </div>

                <div className="document-post">
                    <img src={document} alt=""/>
                    <span>Tài liệu</span>
                </div>
            </div>

        </div>
    );
}

export default PostAction;