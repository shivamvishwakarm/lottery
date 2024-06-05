'use client'
import axios from 'axios';
import { message } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import { Form, Input, Button } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import Index from './Index';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [ticketno, setTicketno] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/getDataByNumber', {
        params: {
          mobile,
          _: new Date().getTime(), // add a timestamp as a query parameter
        },
      });

      const data = response.data;
      // redirect to home page
      if (data) {
        console.log(data); // Log the 'name', 'mobileno', and 'ticket' properties
        setName(data.name);
        setMobileno(data.mobileno);
        setTicketno(data.ticket);
        setDate(data.date);
        setIsLoggedIn(true);
        // router.push('/');
      } else {
        message.error('Mobile number not found!');
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  //  if (isLoggedIn) {
  //   return <Index data={data} />;
  // }

    return (
      isLoggedIn ? (
        <Index name={name} mobileno={mobileno} ticket={ticketno} date={date} />
      ) : (
        <div className='login_bg '>
          <div className='content rounded flex flex-col justify-center	items-center w-2/6	h-auto	bg-white p-8 m-8 z-10'>
            <Image className='z-10 p-4 ' src="/logo.jpg" alt="logo" width={500} height={500} />
            <h3 className='z-10 text-center text-base	font-bold underline text-pink-700		'>Login With Your Registered Mobile Number</h3>
            <Form onFinish={handleSubmit} className='bg-white border-blue-500 z-10 p-4'>
              <Form.Item
                name="mobile"
                rules={[
                  { required: true, message: 'Please input your mobile number!' },
                  { pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: 'Please enter a valid mobile number' }
                ]}
              >
                <Input
                  className='text-lg w-full	 mt-4'
                  prefix={<MobileOutlined />}
                  placeholder="Mobile Number"
                  type="tel"
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button className="bg-red-700 w-6/12 h-3/6" type="primary" htmlType="submit" loading={loading}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )
    );


  }
export default Login;
