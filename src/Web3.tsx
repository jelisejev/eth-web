import * as React from 'react';
import Web3 from 'web3';

declare global {
    interface Window {
        web3: any;
    }
}

const Web3Context = React.createContext(window.web3);

interface State {
  web3: any;
}

class Web3Provider extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      web3: new Web3(window.web3.currentProvider)
    };
  }

  render() {
    return <Web3Context.Provider value={this.state.web3}>{this.props.children}</Web3Context.Provider>;
  }
};

const Web3Consumer = (Component: any) => {
    return (props: any) => <Web3Context.Consumer>{context => <Component {...props} web3={context}/>}</Web3Context.Consumer>
}

export {
    Web3Provider,
    Web3Consumer
}
