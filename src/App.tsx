import React, { useState } from 'react';
import './App.css';
import { AutoComplete } from "antd";
import 'antd/lib/auto-complete/style/css'

const mockVal = (str: string, repeatNum = 1) => {
  return {
    value: str.repeat(repeatNum),
  }
}

type Options = {
  value: string;
}


const App: React.FC = () => {
  // const options = ['1','2','3']
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<Options[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onChange = (data: string) => {
    setValue(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AutoComplete 
          style={{width: 200}}
          options={options}
          onChange={onChange}
          onSearch={onSearch}
          value={value}
        />
      </header>
    </div>
  );
}

export default App;
