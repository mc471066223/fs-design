import React, { useState, useEffect, useRef } from 'react';
import style from './index.module.scss';
import { Input } from 'antd';
const { TextArea } = Input;

function InputCom(props) {
  const [textValue, setTextValue] = useState('');
  const InputRef = useRef('');
  const {
    type = 0,
    textType = 0,
    areaType = 0,
    inputType,
    text,
    disabled,
    placeholder,
    inputfocus,
    limtboolean
  } = props;
  useEffect(() => {
    Boolean(inputfocus) && InputRef.current.focus();
  }, [inputfocus]);

  useEffect(() => {
    setTextValue(text);
  }, [text]);
  return (
    <React.Fragment>
      {type === 0 ? (
        <div className={style.inpu_box}>
          <div
            className={[
              textType === 0 && style.title_text_extra,
              style.title_text,
              disabled ? style.title_text_disabled : ''
            ].join(' ')}>
            {text}
          </div>
          <Input
            {...props}
            className={[inputType === 0 && style.input_width, style.input].join(' ')}
            ref={InputRef}
            onChange={e => {
              setTextValue(e.target.value);
            }}
          />
          {Boolean(limtboolean) && textValue.length === 0 && (
            <div className={style.input_limtText}>Please enter a valid email address.</div>
          )}
        </div>
      ) : (
        <div className={areaType === 0 ? style.areaType_text : style.areaType_upload}>
          <div className={textValue && textValue.length === 5000 ? style.areaType_text_max : ''}>
            <span>{(textValue && textValue.length) || 0}</span>/5000
          </div>
          <TextArea
            className={style.textArea_input}
            maxLength={5000}
            value={textValue}
            placeholderstyle={style.areaType_text_placeholder}
            placeholder={placeholder || 'Tell us you need to apply for a sample product ID'}
            onChange={e => {
              setTextValue(e.target.value);
            }}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default InputCom;
