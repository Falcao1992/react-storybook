import React from 'react';

import Input from './Input';

export default {
    component: Input,
    title: 'Input',
  };
  
  const Template = args => <Input {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    task: {
      type: 'text',
      value: 'Test Task',
      isRequiredInput: 'true',
    },
  };
  

  
  