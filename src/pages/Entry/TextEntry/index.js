import React from 'react';
import TextInput from './component/textInput';
import TextArea from './component/textArea';
import Search from './component/search';

export default function index() {
  return (
    <div>
      <TextInput />
      <TextArea />
      <Search />
    </div>
  );
}
