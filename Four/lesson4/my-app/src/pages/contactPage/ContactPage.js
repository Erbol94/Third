import React from "react";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                name: "",
                age: 0
            })
        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeInput (e){
        this.setState({[e.target.name]: e.target.value })

        // console.log(e.target.name)
    }

    onSubmit(e){
        e.preventDefault()
        {console.log(this.state)}
    }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} onChange={this.onChangeInput} placeholder='Text' name='name'/>
                    <input type="number" value={this.state.age} onChange={this.onChangeInput} placeholder='0' name='age'/>
                    <button type="submit">Send</button>

                </form>
            </div>
        )
    }
}
export default ContactPage;