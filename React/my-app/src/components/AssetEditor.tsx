import React from "react";

type Asset = {
  name: string;
  symbol: string;
  value: number;
  change: number;
};

type Props = {
  onUpdate: (asset: Asset) => void;
};

type State = {
  name: string;
  symbol: string;
  value: number;
  change: number;
};

class AssetEditor extends React.Component<Props, State> {

  state: State = {
    name: "",
    symbol: "",
    value: 0,
    change: 0
  };

  // Simple input handlers
  handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  handleSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ symbol: e.target.value });
  };

  handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: Number(e.target.value) });
  };

  handleChangePercent = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ change: Number(e.target.value) });
  };

  // Submit function
  submit = () => {

    const asset: Asset = {
      name: this.state.name,
      symbol: this.state.symbol,
      value: this.state.value,
      change: this.state.change
    };

    // Send to parent
    this.props.onUpdate(asset);

    // Reset form
    this.setState({
      name: "",
      symbol: "",
      value: 0,
      change: 0
    });
  };

  render() {
    return (
      <div>

        <h2>Asset Editor</h2>

        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleName}
        />

        <input
          placeholder="Symbol"
          value={this.state.symbol}
          onChange={this.handleSymbol}
        />

        <input
          type="number"
          placeholder="Value"
          value={this.state.value}
          onChange={this.handleValue}
        />

        <input
          type="number"
          placeholder="Change %"
          value={this.state.change}
          onChange={this.handleChangePercent}
        />

        <button onClick={this.submit}>
          Submit
        </button>

      </div>
    );
  }
}

export default AssetEditor;
