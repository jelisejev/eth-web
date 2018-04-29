import * as React from 'react';
import {Web3Consumer} from './Web3';
import Address from './Address';

interface Props {
  web3: any;
}

interface State {
  balance: string;
  account: string;
  contractAddress: string;
  contractBalance: string;
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      balance: '',
      account: '',
      contractAddress: '',
      contractBalance: ''
    };
  }

  render() {
    const {balance, account, contractAddress, contractBalance} = this.state;

    return (
      <React.Fragment>
        <Address balance={balance} account={account} />
        <Address balance={contractBalance} account={contractAddress} />
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.loadBalance();
    this.loadContractBalance();
  }

  async loadBalance() {
    const {web3} = this.props;
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);

    this.setState({
      account: accounts[0],
      balance
    });
  }

  async loadContractBalance() {
    const {web3} = this.props;

    const contractAddress = '0xc866613547e8882710342c686c2bd46daf0724c1';
    const contractBalance = await web3.eth.getBalance(contractAddress);
    console.log(contractBalance);

    this.setState({
      contractAddress,
      contractBalance
    });
  }

}

export default Web3Consumer(Dashboard);
