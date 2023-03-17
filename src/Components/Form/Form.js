import React from "react";
import axios from "axios";
import classes from "./Form.module.css";
import InputsCurrencyContainer from "./InputsCurrency/InputsCurrencyContainer";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.onClickReverse = this.onClickReverse.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`https://v6.exchangerate-api.com/v6/c4e1893f1af8fd9263190e31/codes`)
            .then(result => this.props.getFirtstInitial(result.data.supported_codes))
    }

    onClickReverse() {
        this.props.onClickReverse()
    }

    onClickSubmit(event) {
        event.preventDefault();

        axios.get(`https://v6.exchangerate-api.com/v6/c4e1893f1af8fd9263190e31/pair/${this.props.valueCurrencyFrom}/${this.props.valueCurrencyTo}/${this.props.from}`)
            .then(result => {
                this.props.onClickSubmit(result.data.conversion_result)
            })
    }

    render() {
        return (
            <form className={ classes.form } onSubmit={ this.onClickSubmit }>
                <InputsCurrencyContainer classes="from" />
                <button 
                    type="button"
                    className={ classes.reverse + " icon-reverse"}
                    onClick={ this.onClickReverse }
                />
                <InputsCurrencyContainer classes="to" />
                <input 
                    type="submit"
                    value="conversion"
                    className={ classes.submit }
                />
            </form>
        )
    }
}

export default Form;