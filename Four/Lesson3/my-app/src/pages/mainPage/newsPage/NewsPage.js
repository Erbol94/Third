import React from "react";
import classes from './newspage.module.css'

class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }

    }
    componentDidMount() {
        this.timeid = setInterval(()=> {
            this.tick()
        })
    }
    componentWillMount() {
        clearInterval(this.timeid)
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    render() {
        return (
            <div className={classes.news_page}>
                <div className={classes.news_page_inner}>
                    <h3>News page</h3>
                    <h3>Time:{this.state.time.toLocaleTimeString()}</h3>
                </div>

            </div>
        )
    }
}

export default NewsPage;
