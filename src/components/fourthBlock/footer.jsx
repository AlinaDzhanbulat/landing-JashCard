import "./footer.css";
import Logo2 from "../../image/logo.png";
import inst from "../../image/ints.png";
import tele from "../../image/tele.png";
import twit from "../../image/twit.png";
import faceb from "../../image/face.png";

export const FooterBlock = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <div className="row">
          <a href="#" className="logo">
            <img src={Logo2} alt="" />
          </a>
          <div className="footerCol">
            <h5>О карте</h5>
            <ul>
              <li>Информайия о карте</li>
              <li>Как пользоваться</li>
              <li>Обучение</li>
              <li>Картинки</li>
            </ul>
          </div>

          <div className="footerCol">
            <h5>Партнеры</h5>
            <ul>
              <li>Список компаниий</li>
              <li>Условия сотрудничества</li>
              <li>Форма для обратной связи</li>
            </ul>
          </div>

          <div className="footerCol">
            <h5>Новости</h5>
            <ul>
              <li>Слайдер по акциям</li>
              <li>Новые компании</li>
              <li>Мероприятия</li>
            </ul>
          </div>

          <div className="imgFlex">
            <img  src={inst} alt="" />
            <img className="img1" src={tele} alt="" />
            <img className="img1" src={twit} alt="" />
            <img className="img1" src={faceb} alt="" />
          </div>
        </div>
        <hr className="hrfooter" />
      </div>
    </footer>
  );
};
