import React, { useState } from 'react';
import { Modal, AutoComplete, Button, Icon } from 'antd';
import { transliterate as tr } from 'transliteration';
import './style.sass';
import cities from '../../cities.json';

const WeatherAdd = ({ addCity }) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    addCity(tr(value));
    setValue('');
    setIsOpen(false);
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onChange = value => {
    setValue(value);
  };

  const option = cities.map(city => (
    <AutoComplete.Option key={city.title} value={city.title}>
      {city.title}
    </AutoComplete.Option>
  ));

  const filterOption = (inputValue, option) => {
    return (
      option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) !==
      -1
    );
  };

  return (
    <div className='add_wrapper'>
      <div className='add'>
        <Icon type='plus-circle' onClick={onClick} title='Добавить город' />
      </div>
      <Modal visible={isOpen} onOk={onClick} onCancel={onClick} centered>
        <form className='form' onSubmit={onSubmit}>
          <AutoComplete
            dataSource={option}
            onChange={onChange}
            placeholder='Введите город'
            value={value}
            filterOption={filterOption}></AutoComplete>
          <Button type='primary' onClick={onSubmit} disabled={!value}>
            Добавить
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default WeatherAdd;
