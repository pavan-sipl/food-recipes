import React from 'react'

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-1"><i className="material-icons brand-icon">
                fastfood
            </i>Food Recipes</h1>
            <div class="input-group w-50 mx-auto ">
  <input type="text" class="form-control" placeholder="Enter Your Recipe..." value={props.search} onChange={props.onInputChange}/>
  <button className="btn btn-dark " onClick={props.onSearchClick}>Search Recipe</button>
</div>
        </div>
    )
}

export default Header
