import React from "react";
import './blog.css'

export default class BlogThree extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button className='btn' onClick={()=> this.setState({isOpen:true})}>Открыть</button>
                {this.state.isOpen && (<div className='blog'>
                    <div className='blog-body'>
                        <h3>Что делает iOS-разработчик</h3>
                        <p>iOS-разработчики — одни из самых востребованных и высокооплачиваемых специалистов. Они генерируют и воплощают свои идеи для мобильных устройств Apple: iPhone, Apple Watch, iPad, iPod.

                            Главная задача OS-разработчика — создавать новые приложения, удобные пользовательские интерфейсы, обновления, а также заботиться о том, чтобы эти разработки приносили заказчику прибыль.</p>
                        <br/>
                        <p>В своей работе iOS-разработчики используют язык программирования Swift — относительно легкий в изучении и устойчивый к ошибкам. Как результат, скорость разработки значительно увеличивается.</p>
                        <p>Сколько получает iOS-разработчик</p>
                        <ul>
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