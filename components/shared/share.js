import { useState } from 'react';
import QRCode from 'react-qr-code';

const Share = (props) => {
  console.log(props);
  return (
    <div>
      <QRCode size={256} value="sarthak" viewBox={`0 0 256 256`} />
    </div>
  );
};

export default Share;
