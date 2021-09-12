import React from 'react';


class Search extends React.Component {

    // here we will initialise the state
    // this is controlled form. because we are storing data in state which we can handle. that's why this is called controlled form.
    state = { term: " " } // this convention of defining state is as equal to constructor method.


    // This callback function will call when user enter something in input. 
    // event parameter always take value of input. event.target.value
    // onChangeInput(event){ 
    //     console.log(event.target.value)
    // }


    onFormSubmit = (event) => {
        event.preventDefault() // Disable default behaviour of form.
        this.props.onSearch(this.state.term)

    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>

                        {/* Alternate way to define a callback function inside the input. This is as same as the above function*/}
                        {/*<input type="text" onChange={(e)=> console.log(e.target.value)}></input>*/}
                        {/* password validation:-{this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}*/}
                        <input type="text"
                            placeholder="search here"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default Search;