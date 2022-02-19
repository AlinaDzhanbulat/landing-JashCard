import './header.css'
import Logo from '../../image/logo.png'
import Russian from '../../image/flag.png'

const HeaderBlock = () => {
    return (
        <header className="headerCont">
            <a href="/" className="logo"><img src={Logo} alt="" /></a>
            <ul className="menu">
                <li><a href="">Новости</a></li>
                <li><a href="">О карте</a></li>
                <li><a href="">Партнеры</a></li>
                <li><a href="">Форма заявки</a></li>
            </ul>
            <div className="minCont">
                <img src={Russian} alt="" className="svg-img" />
                <div>Русский</div>
            </div>
        </header>
    )
}

export default HeaderBlock