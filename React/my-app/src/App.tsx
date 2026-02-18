import { useState } from "react";
import AssetEditor from "./components/AssetEditor";
import PortfolioSummary from "./components/PortfolioSummary"
type Asset = {
  name: string;
  symbol: string;
  value: number;
  change: number;
};

let assets: Asset[] = [
  {
    name: "Apple",
    symbol: "AAPL",
    value: 2000,
    change: 2.5
  },
  {
    name: "Google",
    symbol: "GOOGL",
    value: 1500,
    change: -1.2
  }
];
const [assetsState, setAssets] = useState<Asset[]>(assets);
let onUpdate = (asset: Asset) => {
  // console.log("Asset updated:", asset);
    setAssets([...assetsState, asset]);
    console.log("Asset updated:", asset);
    
};


function App() {
  return (
    <div>
    
      <PortfolioSummary assets={assets} />
      <AssetEditor onUpdate={onUpdate}/>
    </div>
  )
}

export default App
