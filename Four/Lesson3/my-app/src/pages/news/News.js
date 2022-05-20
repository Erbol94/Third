import classes from './news.module.css'
import {Services} from "../../components/services/Services";
import BlogOne from "./blog/blog_one/blog.one";
import BlogThree from "./blog/blog_three/blog.three";
import BlogTwo from "./blog/blog_two/blog.two";

function News (){
    const services = ['Инстарграмм:@Geek_tech', 'Контакты:+996 999 444', 'Адрес: ул.Ибраимова, 103']
    return(
        <div className={classes.container}>
            <h2>Блог разработчиков</h2>
            <div className={classes.container_inner}>
                <div className={classes.blog}>
                    <h2>Android-разработчик: где работает, что делает и как им стать</h2>
                    <p>Android-разработчик создает, обновляет, усовершенствует мобильные приложения для смартфонов, планшетов, электронных книг, игровых приставок и других девайсов, работающих на операционной системе Android. Профессия считается самой востребованной в мобильной разработке, так как «Андроид» установлен в 80 % мобильных устройств мира. </p>
                    <BlogOne />
                    <Services services={services}/>

                </div>
                <div className={classes.blog}>
                    <h2>Кто такой iOS-разработчик?</h2>
                    <p>iOS-разработчик создает приложения для устройств Apple. Это не только iPhone, но и iPad, Apple Watch и другие гаджеты, входящие в экосистему. Он не только пишет код и работает над интерфейсом, но и занимается поддержкой приложения, адаптацией его под разные модели устройств, тестированием и исправлением багов.</p>
                    <BlogThree />
                    <Services services={services}/>
                </div>
                <div className={classes.blog} >
                    <h2>Кто такой FullStack разработчик</h2>
                    <p>Full-stack разработчик (произносится “фулл стек”) — это некий мастер на все руки в мире веб-разработки. Ему под силу реализовать как клиентскую, так и серверную сторону приложения, которыми, обычно, занимаются FrontEnd и BackEnd разработчики раздельно друг от друга. Таким образом, Full-stack специалист способен в одиночку вести проект от начала до конца.</p>
                    <BlogTwo />
                    <Services services={services}/>
                </div>
            </div>
        </div>
    )

}
export default News;