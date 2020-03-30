/** @format */

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import AutoComplete from '../index';

test('test options render correctly', () => {
  const options = [{value: '1'}];
  render(<AutoComplete options={options} />);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('test style render correctly', () => {
  const style = {width: 200};
  const {getByTestId} = render(<AutoComplete style={style} />);
  expect(getByTestId('input')).toHaveStyle('width: 200');
  expect(getByTestId('ul')).toHaveStyle('width: 200');
});

test('test placeholder props render correctly', () => {
  const placeholder = 'input here';
  const {getByTestId} = render(<AutoComplete placeholder={placeholder} />);
  expect(getByTestId('input')).toHaveAttribute('placeholder', placeholder);
});

test('test autoFocus props render correctly', () => {
  const autoFocus = true;
  const {getByTestId} = render(<AutoComplete autoFocus={autoFocus} />);
  expect(getByTestId('input')).toHaveFocus();
});

test('test disabled props render correctly', () => {
  const disabled = false;
  const {getByTestId} = render(<AutoComplete disabled={disabled} />);
  expect(getByTestId('input')).toBeEnabled();
});

test('test value props render correctly', () => {
  const value = 'init value';
  const {getByTestId} = render(<AutoComplete value={value} />);
  expect(getByTestId('input')).toHaveValue(value);
});

test('test show options when click input', () => {
  const options = [{value: '1'}];
  const {getByTestId} = render(<AutoComplete options={options} />);
  const input = getByTestId('input');
  const ul = getByTestId('ul');
  fireEvent.click(input);
  expect(ul).toBeVisible();
});
