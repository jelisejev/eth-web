import * as React from 'react';

interface Props {
  balance: string;
  account: string;
}

const Address = ({account, balance}: Props) => {
  return (
    <div>
      <strong>{account}</strong> - {balance} Wei
    </div>
  )
}

export default Address;
