import React, { Component} from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    value: [0,0],
    index: 0
}

export default class Calculator extends Component {

    state = { ...initialState } //state is a clone of initialState

    // // to not have problems with 'this', instead:
    // //const addDigit = n => this.addDigit(n)
    // //const setOperation = n => this.setOperation(n)
    // // you can bind in the constructor:
    // constructor(props){
    //     super(props)
    //     this.clearMemory = this.clearMemory.bind(this)
    //     this.setOperation = this.setOperation.bind(this)
    //     this.addDigit = this.addDigit.bind(this)
    // }

    
    clearMemory(){
        console.log('limpar')
        this.setState({...initialState})
    }

    setOperation(operation){
        console.log(operation)
        
    }

    addDigit(digit){
        console.log(digit)

        if (digit === '.' && this.state.displayValue.includes('.'))
            return

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({displayValue, clearDisplay: false})

        if (digit != '.'){
            const i = this.state.index
            const newValue = parseFloat(displayValue)
            const values = [...this.state.value]
            values[i] = newValue
            this.setState({values}) //or if the variable has a different name, use key:value :: this.setState({values : newValues})
            console.log(values)
        }
    }


    render(){   
        const addDigit = n => this.addDigit(n)
        const setOperation = n => this.setOperation(n)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation} operation/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation/>
                <Button label="0" click={addDigit} double/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation} operation/>
            </div>
        )
    }
}