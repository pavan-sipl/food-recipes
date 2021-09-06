import React from 'react'

function Recipes(props) {
    const { recipes } = props;
    return (
        <div className="row">
            {recipes.map((recipe) => {
                return (
                    <div className="col-md-3">
                        <div className="card-columns">
                            <div className="card py-2 my-5 text-center">
                                <img
                                    src={recipe.recipe.image}
                                    className="img-fluid w-50 mx-auto rounded-circle" />
                                <div className="card-body">
                                    <h5>{recipe.recipe.label}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {recipe.recipe.ingredientLines.map(ingredient => (
                                        <li className="list-group-item">{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Recipes
