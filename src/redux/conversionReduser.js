const GETFIRTSINITIAL = "GET_FIRTS_INITIAL";
const ONCHANGEVALUE = "ON_CHANGE_VALUE";
const ONCHANGECURRENCY = "ON_CHANGE_CURRENCY";
const ONCLICKREVERSE = "ON_CLICK_REVERSE";
const ONCLICKSUBMIT = "ON_CLICK_SUMBIT";

const initialState = {
    currency: undefined,
    from: "",
    to: "",
    valueCurrencyFrom: "AED",
    valueCurrencyTo: "AED",
}

function conversionReduser(state = initialState, action) {
    switch (action.type) {
        case GETFIRTSINITIAL:
            return {
                ...state,
                currency: action.currency
            };
        case ONCHANGEVALUE:
            if (action.classes === "from") {
                return {
                    ...state,
                    from: action.value
                }
            } else {
                return {
                    ...state,
                    to: action.value
                }
            };
        case ONCHANGECURRENCY:
            if (action.classes === "from") {
                return {
                    ...state,
                    valueCurrencyFrom: action.value
                }
            } else {
                return {
                    ...state,
                    valueCurrencyTo: action.value
                }
            };
        case ONCLICKREVERSE:
            let temporary = state.valueCurrencyFrom;

            return {
                ...state,
                valueCurrencyFrom: state.valueCurrencyTo,
                valueCurrencyTo: temporary
            };
        case ONCLICKSUBMIT:
            console.log(action.value)
            return {
                ...state,
                to: action.value
            }
        default:
            return state
    }
}

export const getFirtstInitial = (currency) => ({
    type: GETFIRTSINITIAL,
    currency
});

export const onChangeValue = (value, classes) => ({
    type: ONCHANGEVALUE,
    value, 
    classes
});

export const onChangeCurrency = (value, classes) => ({
    type: ONCHANGECURRENCY,
    value, 
    classes
});

export const onClickReverse = () => ({
    type: ONCLICKREVERSE
});

export const onClickSubmit = (value) => ({
    type: ONCLICKSUBMIT,
    value
})

export default conversionReduser;