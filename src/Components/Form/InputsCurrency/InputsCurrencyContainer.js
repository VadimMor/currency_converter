import { connect } from "react-redux";
import { onChangeValue, onChangeCurrency } from "../../../redux/conversionReduser";
import InputsCurrency from "./InputsCurrency";

let mapStateToProps = (state, classes) => ({
    currency: state.conversionReduser.currency,
    from: state.conversionReduser.from,
    to: state.conversionReduser.to,
    valueCurrencyFrom: state.conversionReduser.valueCurrencyFrom,
    valueCurrencyTo: state.conversionReduser.valueCurrencyTo,
    classes: classes.classes
})

const InputsCurrencyContainer = connect(mapStateToProps, { onChangeValue, onChangeCurrency })(InputsCurrency);

export default InputsCurrencyContainer;