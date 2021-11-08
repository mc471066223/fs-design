import React, { useState } from 'react';
import style from './index.module.scss';
import { Input } from 'antd';
const { TextArea } = Input;

function InputCom(props) {
  const [textValue, setTextValue] = useState('');
  const {
    type = 0,
    textType,
    inputType,
    text,
    disabled,
    width,
    placeholder,
    placerholderstyle,
    value,
    focus = false,
    limtBoolean
  } = props;
  return (
    <React.Fragment>
      {type === 0 ? (
        <div>
          <div className={[textType === 0 && style.title_text_extra, style.title_text].join(' ')}>
            {text}
          </div>
          <Input
            {...props}
            className={[inputType === 0 && style.input_width, style.input].join(' ')}
          />
          {limtBoolean && (
            <div className={style.input_limtText}>Please enter a valid email address.</div>
          )}
        </div>
      ) : (
        <div>
          <div>{textValue.length}/5000</div>
          <TextArea
            maxLength={5000}
            value={textValue}
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
