import React from "react";
import NewsPage from "./newsPage/NewsPage";
import classes from './mainpage.module.css'

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({menuStatus: false})
        this.openNewsPage = this.openNewsPage.bind(this)

    }

    openNewsPage (){
        this.setState ({menuStatus: !this.state.menuStatus})
    }

    render() {
        return (
            <div className={classes.main_page}>
                <div className={classes.main_page_inner}>
                    <h2>Main Page</h2>
                    {this.state.menuStatus === true ? <NewsPage/>: ''}
                    <br/>
                    <button onClick={this.openNewsPage} className={classes.btn}>Click</button>
                </div>
            </div>
        )
    }
}

export default MainPage;