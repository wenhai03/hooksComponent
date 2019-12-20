import React from 'react';
import { Spin } from 'antd';
import { useAPI } from '@umijs/hooks';

export default () => {
  const { data, loading } = useAPI({
    url: 'https://helloacm.com/api/random/?n=8&x=4',
  });
  
  return (
    <div>
      
      sssfsdf
    </div>
  );
};