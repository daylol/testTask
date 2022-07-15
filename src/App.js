import React, { useState } from 'react';
import { Orders } from './components/orders/Orders';
import { RequestForm } from './components/requestForm/RequestForm';

import 'antd/dist/antd.css';
import './App.css'
import { Header } from './components/header/Header';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div className='App'>
      <Header showModal={showModal} />

      <Orders />

      {isModalVisible && <RequestForm setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />}

    </div>
  );
}

export default App;
