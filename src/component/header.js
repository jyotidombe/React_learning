import { Component } from 'react';
import chefLogo from '../images/chef.png'

export default class Header extends Component {
    render(){
        return (
            <>
            <header>
                <img src={chefLogo} alt='chef logo'/>
                <h1>Chef Claude</h1>
            </header>
            </>
        )
    }
}