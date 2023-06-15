import React, { useState } from 'react';
import Button from './Button';
import './calculator.css';

function Calculator() {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <div className="output">{value}</div>
      <div className="buttons">
        <Button type="button" label="AC" />
        <Button type="button" label="+/-" />
        <Button type="button" label="%" />
        <Button type="button" className="operator" label="÷" />
        <Button type="button" label="7" />
        <Button type="button" label="8" />
        <Button type="button" label="9" />
        <Button type="button" className="operator" label="x" />
        <Button type="button" label="4" />
        <Button type="button" label="5" />
        <Button type="button" label="6" />
        <Button type="button" className="operator" label="-" />
        <Button type="button" label="1" />
        <Button type="button" label="2" />
        <Button type="button" label="3" />
        <Button type="button" className="operator" label="+" />
        <Button type="button" className="span-2" label="0" />
        <Button type="button" label="." />
        <Button
          type="button"
          className="operator"
          label="="
          onClick={() => setValue(value)}
        />
      </div>
    </div>
  );
}

export default Calculator;
