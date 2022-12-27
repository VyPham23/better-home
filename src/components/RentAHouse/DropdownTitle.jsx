import React from 'react';
import { Dropdown, Space } from 'antd';
import './Rent.css'
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const Dropdowntitle = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className='dropdown_element'>
        VINHOUSE CENTRAL PARK
      </Space>
    </a>
  </Dropdown>
);
export default Dropdowntitle;