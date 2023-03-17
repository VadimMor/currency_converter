import Form from "./Form";
import { connect } from "react-redux";
import { getFirtstInitial, onClickReverse, onClickSubmit } from "../../redux/conversionReduser";

let mapStateToProps = (state) => ({
    from: state.conversionReduser.from,
    valueCurrencyFrom: state.conversionReduser.valueCurrencyFrom,
    valueCurrencyTo: state.conversionReduser.valueCurrencyTo,
})

const FormContainer = connect(mapStateToProps, { getFirtstInitial, onClickReverse, onClickSubmit })(Form);

export default FormContainer;
