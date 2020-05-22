import React, { useRef } from 'react';

import Form, { FormRef } from './Form';

const AppHandle: React.FC = () => {
  const formRef = useRef<FormRef>(null);

  function handleSubmit() {
    formRef.current?.handleSubmit()
  }

  return (
    <Form ref={formRef} />
  );
}

export default AppHandle;