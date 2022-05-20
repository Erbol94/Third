import React from "react";
import './blog.css'

export default class BlogTwo extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={()=> this.setState({isOpen:true})} className='btn'>Открыть</button>
                {this.state.isOpen && (<div className='blog'>
                    <div className='blog-body'>
                        <h3>Особенности направления</h3>
                        <p>Full Stack Developer — это универсальный программист, который может сам с нуля разработать функциональный продукт. Такой специалист разбирается как в Back-end составляющей (программно-аппаратная часть сервиса), так и во Front-end (интерфейс пользователя).</p>
                        <br/>
                        <p>По сути, разделение на Back-end и Front-end появилось только в 2010-х годах, когда программные продукты стали иметь сложную и многоуровневую структуру. До этого большинство программистов по умолчанию выступали в роли Full Stack, хотя так их никто не называл.</p>
                        <p>Сколько получает FullStack-разработчик</p>
                        <ul>
                            <li>100000—300000₽</li>
                        </ul>
                        <button onClick={()=> this.setState({isOpen:false})} className='btn'>Закрыть</button>
                    </div>
                </div> )}
            </React.Fragment>
        )
    }

}