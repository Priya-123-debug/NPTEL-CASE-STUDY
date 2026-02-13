// Implement a PromotionSystem observer that announces special offers to customers when a drink is served.

// Add it to the DrinkOrder notification list and test it.


interface user{
	update(drink:string):void;
}
class drinkname{
	private  list:user[]=[];
	adduser(user:user){
		this.list.push(user);

	}
	notify(drinkjuice:string):void{
		console.log(`new drink made is drinkjuice`);
		this.list.forEach(element => {
			element.update(drinkjuice);
		});
	}

	serverdrink(drinkjuice:string):void{
		console.log(`served juice is ${drinkjuice}`);
		this.notify(drinkjuice);
	}
}
class PromotionSystem implements user {
  update(drinkName: string): void {
    console.log(
      ` Special Offer: Get 20% off on snacks with your ${drinkName}!`
    );
  }
}

const order = new drinkname();
const promo = new PromotionSystem();

order.adduser(promo);
order.serverdrink("Latte");