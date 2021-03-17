import React from 'react';
class Input extends React.Component{   state={email:""}
    setChange=(e)=>
    {
        this.setState({email:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.submit(this.state.email);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}> 
                    <input type="email" onChange={this.setChange}/>
                    <button type="submit">submit</button>
                </form>
            </div>)
    }
}
export default Input