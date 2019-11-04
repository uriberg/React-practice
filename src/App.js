import React, {Component} from 'react';
import classes from './App.module.css'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
    state = {
        show: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({show: false});
        }, 5000);
    }

    render() {
        return (
            <div className={classes.uri}>
                <Layout>
                    {this.state.show ? <BurgerBuilder/> : null}
                </Layout>
            </div>
        );
    }
}

export default App;
