import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Select } from 'antd';

const Option = Select.Option; 


function onSelected(value){
	console.log(value);
}

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <Select 
		    labelInValue
		    mode="combobox"
        placeholder="combobox mode with labelInValue bug"
		    onSelect={onSelected}
        style={{width:100}}
		    >
		    <Option key="1">key-1</Option>
		    <Option key="2">key-2</Option>
		    <Option key="3">key-3</Option>
		</Select>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
