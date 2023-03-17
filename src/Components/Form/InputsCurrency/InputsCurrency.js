import React from "react";
import classes from "./InputsCurrency.module.css";

class InputsCurrency extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput = (el) => {
        this.props.onChangeValue(el.target.value, this.props.classes)
    }

    handleChangeCurrency = (el) => {
        this.props.onChangeCurrency(el.target.value, this.props.classes)
    }

    render() {
        let readonly = this.props.classes !== "from";

        return (
            <>
                <input 
                    type="number"
                    placeholder="0.00"
                    className={ classes.value }
                    onChange = { this.handleChangeInput }
                    value = { this.props.classes === "from" ? this.props.from : this.props.to.toFixed(2) }
                    readOnly = { readonly }
                />

                <select 
                    className={ classes.currency }
                    onChange={ this.handleChangeCurrency }
                    value={ this.props.classes === "from" ? this.props.valueCurrencyFrom : this.props.valueCurrencyTo }
                >
                    { this.props.currency ? this.props.currency.map((el, key) => {
                        return <option value={ el[0] } key={ key } >{ el[0] }</option>
                    }) : null }
                </select>
            </>
        )
    }
}

export default InputsCurrency;