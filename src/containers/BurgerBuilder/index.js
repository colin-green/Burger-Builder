import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.4,
	cheese: 0.5,
	meat: 1,
	bacon: 0.75,
};

class BurgerBuilder extends Component {
	// constructor(props) {
	//     super(props);
	//     this.state = {...}
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 1,
		purchasable: false,
		purchasing: false,
	};

	updatePurchasable(ingredients) {
		const notPurchasable = Object.values(ingredients).every(
			quant => quant === 0
		);
		this.setState({
			purchasable: !notPurchasable,
		});
	}

	purchasingHandler = () => {
		this.setState({ purchasing: true });
	};

	cancelPurchaseHandler = () => {
		this.setState({ purchasing: false });
	};

	continuePurchaseHandler = () => {
		alert('You continue!');
	};

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchasable(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceSubtraction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceSubtraction;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients,
		});
		this.updatePurchasable(updatedIngredients);
	};

	render() {
		let disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Auxilary>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.cancelPurchaseHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCancelled={this.cancelPurchaseHandler}
						purchaseContinued={this.continuePurchaseHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					ordered={this.purchasingHandler}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
				/>
			</Auxilary>
		);
	}
}

export default BurgerBuilder;
