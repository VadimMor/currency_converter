import React from "react";
import classes from "./Main.module.css";
import FormContainer from "./../Form/FormContainer";

class Main extends React.Component {
    render() {
        return (
            <div className={ classes.main }>
                <FormContainer />

                <h1 className={ classes.title }>Currency Converter</h1>
            </div>
        )
    }
}

export default Main;