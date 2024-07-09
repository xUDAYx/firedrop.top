import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeProps {
  amount: number;
}

const QRCodeGen: React.FC<QRCodeProps> = ({ amount }) => {
  const payeeVPA = process.env.UPI_ID;
  const aid = process.env.UPI_AID;
  console.log(aid);

  // const value = `upi://pay?pa=${payeeVPA}&pn=Uday%20Jawheri&am=${amount.toFixed(2)}&cu=INR&aid=${aid}`;
  const value = `upi://pay?pa=jawheriuday-1@okaxis&pn=Uday%20Jawheri&am=100.00&cu=INR&aid=uGICAgICdzajtEA`;

  return <QRCode value={value} size={200} className="mx-auto" />;
};

export default QRCodeGen;
