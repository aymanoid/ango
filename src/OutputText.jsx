import React from 'react';
import PropTypes from 'prop-types';
import { useClipboard, Flex, Input, Button } from '@chakra-ui/core';
import ConvertText from './ConvertText';

const OutputText = ({ mode, inputText }) => {
  const convertedText = ConvertText(mode, inputText);
  const { onCopy, hasCopied } = useClipboard(convertedText);

  return (
    <Flex mb={2}>
      <Input
        variant="flushed"
        value={convertedText}
        isReadOnly
        placeholder={mode}
      />
      <Button onClick={onCopy} ml={2}>
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
    </Flex>
  );
};

OutputText.propTypes = {
  mode: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default OutputText;
