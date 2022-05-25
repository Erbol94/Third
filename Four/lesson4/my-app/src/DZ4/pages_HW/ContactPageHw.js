import React from "react";

class ContactPageHw extends React.Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                name: ''
            }
        )
        this.inputText = this.inputText.bind(this)
        this.subMit = this.subMit.bind(this)
    }

    inputText (e){
        this.setState({[e.target.name]: e.target.value})
    }
    subMit(e){
        e.preventDefault()
        {console.log(this.state)}
    }

    render() {
        return (
            <div style={{marginBottom:'50px'}}>
                <form onSubmit={this.subMit}>
                    <input type="text" value={this.state.name} onChange={this.inputText} name='name' placeholder='Введите имя'/>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        )
    }
}

export default ContactPageHw;