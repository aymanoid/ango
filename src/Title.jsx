import React from 'react';
import { Heading, useColorMode } from '@chakra-ui/core';

const Title = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Heading
      as="h1"
      size="2xl"
      userSelect="none"
      style={{ margin: '20px 20px' }}
      onClick={toggleColorMode}
    >
      ANGŌ
    </Heading>
  );
};

export default Title;
