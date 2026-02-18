import React from 'react'
type assets={
	value:number;
	change:number;
}
type props={
	assets:assets[];
}
function PortfolioSummary({assets}:props) {
	let l=assets.length;

	function count(){
			let c=0;
		for(let i=0; i<l; i++){
			c+=assets[i].value;
		}
		return c;
	}

	function avg(){
			let avgval=0;
		for(let i=0; i<l; i++){
			let val=assets[i].value;
			let change=assets[i].change;
		
			avgval+=change

		}
		if(l>0){
			avgval=avgval/l;
		}
		return avgval;
	}
	return (
		<div>
			<h1>
				Total count is {count()}
			</h1>
				<h1>
			avg change is {avg()}
			</h1>
			
		</div>
	)
}

export default PortfolioSummary
