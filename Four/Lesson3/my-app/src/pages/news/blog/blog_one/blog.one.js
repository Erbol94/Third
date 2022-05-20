import React from "react";
import './blog.css'

export default class BlogOne extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button className='btn' onClick={()=> this.setState({isOpen:true})}>Открыть</button>
                {this.state.isOpen && (<div className='blog'>
                    <div className='blog-body'>
                        <h3>Что делает Android-разработчик</h3>
                        <p>Android Developer (разработчик на «Андроиде», андроид девелопер) создает мобильные приложения на операционной системе Android. Андроид-программист использует языки Java, Kotlin, C++,  иногда Javascript. В 2019 году Google объявил Kotlin официальным и предпочтительным языком для Android-разработки. </p>
                        <ul>
                            <li>создание архитектуры приложения;</li>
                            <li>конструирование интерфейса программы;</li>
                            <li>написание программного кода;</li>
                            <li>тестирование программного кода;</li>
                            <li>загрузка программы в android-магазин или на сайт;;</li>
                        </ul>
                        <p>Зарплата android-разработчика на май 2022</p>
                        <ul>
                            <li>  Россия
                                120000—450000₽
                            </li>
                            <li>Москва
                                80000—300000₽</li>
                        </ul>
                        <button className='btn' onClick={()=> this.setState({isOpen:false})}>Закрыть</button>
                    </div>
                </div> )}
            </React.Fragment>
        )
    }

}