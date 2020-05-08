import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

const ConvertText = (mode, inputText) => {
  switch (mode) {
    case 'Base64': {
      return Base64.stringify(Utf8.parse(inputText));
    }
    default:
      return 'None';
  }
};

export default ConvertText;
