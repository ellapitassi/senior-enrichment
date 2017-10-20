
import React, { Component } from 'react';
import store from '../store'

export default class NewPlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            campus: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    handleChange(evt) {
        store.dispatch()
    }

    handleSubmit(evt){
    }

    render(){

    return(
        <div>
        <h3>Form to add a new student</h3>
        <form>
        <label>Name</label>
        <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"/>
        <label>Email</label>
        <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter email"/>
        <label>Campus</label>
        <input
            type="text"
            name="campus"
            value={this.state.campus}
            onChange={this.handleChange}
            placeholder="Select campus"/>
        </form>
        </div>
    )
    }
}
