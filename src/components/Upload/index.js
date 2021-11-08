import React, { useState } from 'react';
import { Upload, Input, Tooltip, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import style from './index.module.scss';
import SvgIcon from '../svgIcon/index';
const { TextArea } = Input;

function UploadCom(props) {
  const {
    placeholder,
    Comments,
    type = 0,
    totipTetx,
    beforeLimit = false,
    uploadText,
    limitSize,
    multipleBoolean
  } = props;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const UploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
    }
  };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      return;
    }
    return isJpgOrPng && isLt5M;
  };
  return (
    <div className={style.upload}>
      <div className={style.upload_content}>
        <span>{Comments || 'Comments'}</span>
        <span>{value.length}/5000</span>
      </div>
      <div className={style.upload_box}>
        <TextArea
          maxLength={5000}
          placeholder={placeholder || 'Your comments will help FS respond more quickly.'}
          placerholderstyle={style.upload_placeholderStyle}
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <div className={style.upload_box_item}>
          <Upload
            beforeUpload={beforeLimit && beforeUpload}
            onChange={handleChange}
            multiple={multipleBoolean}>
            {type === 0 ? (
              <div className={style.upload_box_item_repeat}>
                <SvgIcon iconName="repeat" svgClassName={"repeat"}/>
                <div className={style.upload_box_item_uploadText}>
                  {uploadText || 'Upload File'}
                </div>
              </div>
            ) : (
              <UploadButton />
            )}
          </Upload>
          <Tooltip
            placement="right"
            trigger={'click'}
            color={'white'}
            title={
              totipTetx ||
              'Please use a PDF, JPG, PNG, DOC, DOCX, XLS, XLSX or TXT file.Maximum file size 5M.'
            }>
            <div className={style.totipClass}>i</div>
          </Tooltip>
        </div>
        {limitSize && (
          <div className={style.limitSize}>{`Maximum file size ${limitSize || 5}M.`}</div>
        )}
      </div>
    </div>
  );
}

export default UploadCom;
