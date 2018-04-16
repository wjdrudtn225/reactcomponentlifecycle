import React, { Component } from 'react';
import './App.css';

class App extends Component {
    //state : Mount
    constructor (props){
        super(props)
        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }


    componentDidMount() {
        console.log('componentDidMount')
    }

    //state : Update

    componentWillReceiveProps(nextProps){
        console.log('componentWillReciveProps')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    //state : Unmount

    componentWillUnmount(){
        console.log('componentUnmount')
    }
    //state : Render
    render() {

        console.log('render')
        const Handler = (e) => {
            console.log('* call setState()')
            this.setState({r: Math.random()})

        }
        return (<div>
            <button onClick={Handler}>Click</button>
        </div>
    )

    }

}

export default App;
