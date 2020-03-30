/** @format */

import React, {useState, ChangeEvent} from 'react';
import './index.scss';

export type OptionType = {
  value: string;
};

type PropsType = {
  options?: OptionType[];
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: Function; // 选中option，或input的value变化时，触发此函数
  onSelect?: Function; // 被选中时调用，参数为选中项的value值
  onSearch?: Function; // 搜索补全项的时候调用
  style?: {};
};

const AutoComplete: React.FC<PropsType> = (props: PropsType) => {
  const {
    options = [],
    autoFocus = false,
    disabled = false,
    placeholder = '',
    value: val = '',
    onChange,
    onSearch,
    onSelect,
    style = {},
  } = props;

  const [value, setValue] = useState(val);
  const [showOptions, setShowOptions] = useState(false);

  const onInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setShowOptions(true);
    window.onclick = () => {
      setShowOptions(false);
    };
  };

  const onSelectOption = (value: string) => () => {
    setShowOptions(false);
    onSelect && onSelect(value);
    onChange && onChange(value);
    setValue(value);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    e.stopPropagation();
    setShowOptions(true);
    setValue(text);
    onSearch && onSearch(text);
    onChange && onChange(text);
  };

  return (
    <div className="auto-complete" style={style}>
      <input
        className="auto-complete-input"
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onInputChange}
        onClick={onInputClick}
        data-testid="input"
      />
      <ul className="auto-complete-select" hidden={!showOptions || options.length === 0} data-testid="ul">
        {options.map(option => (
          <li className="auto-complete-select-option" key={option.value} onClick={onSelectOption(option.value)}>
            {option.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
