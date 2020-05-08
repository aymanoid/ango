import React from 'react';
import { Input, Stack, Flex } from '@chakra-ui/core';
import Title from './Title';
import OutputText from './OutputText';

function App() {
  const [inputText, setInputText] = React.useState('');
  const handleChange = (event) => setInputText(event.target.value);

  return (
    <>
      <Stack spacing={4} align="center">
        <Title />
        <Flex>
          <Input
            autoFocus
            value={inputText}
            onChange={handleChange}
            placeholder="Input Text"
            size="lg"
          />
        </Flex>
        <OutputText mode="Base64" inputText={inputText} />
      </Stack>
    </>
  );
}

export default App;
