/** @format */

import AutoComplete, {OptionType} from './index';
import React, {useState} from 'react';

const mockVal = (str: string, repeatNum = 1) => {
  return {
    value: str.repeat(repeatNum),
  };
};

const AutoCompleteDemo: React.FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<OptionType[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return <AutoComplete style={{width: 200}} options={options} value={value} onSearch={onSearch} onChange={onChange} />;
};

export default AutoCompleteDemo;
