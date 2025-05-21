import {Component} from "react";
import React from "react"

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: "List of ingredients here",
          ingredients: []
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /*handleSubmit(event){
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        this.setState((prevState)=> ({
                ingredients: [...prevState.ingredients, newIngredient]
            })
        )
    }*/

    handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        if(newIngredient){
            this.setState((prevState)=> ({
                    ingredients: [...prevState.ingredients, newIngredient]
                })
            )
        }
    }
    render(){
        const ingredientsList = this.state.ingredients.map((ingredient)=>{
            return <li key={ingredient}>{ingredient}</li>;
        })
    
        return (
        <div className="ingredientClass">
            <form className="add-ingredient-form" action={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
                {ingredientsList.length > 0 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>
        </div>
        )
    }
}