import "./content.css";
import Boy1 from "../../image/1.png";
import boy2 from "../../image/2.png";
import boy3 from "../../image/3.png";
import boy4 from "../../image/4.png";
import Str from "../../image/strelka.png";
import card from "../../image/cardback.png";
import card1 from "../../image/cardface.png";


export const ImageContent = () => {
  const data = [
    {
      img: Boy1,
    },
    {
      img: boy2,
    },
    {
      img: boy3,
    },
    {
      img: boy4,
      tit: "dfgxdfg",
    },
  ];
  return (
    <div>
      <div className="imgDiv">
        <div>
          <h4 className="conth4">Фото молодежи с картой</h4>
          <p className="pcont">
            Равным образом, выбранный нами инновационный путь однозначно
            определяет каждого участника как способного принимать собственные
            решения касаемо дальнейших направлений.
          </p>
        </div>
        <div className="mapDiv">
          {data.map((el) => {
            console.log(el);
            return (
              <div
                className="map-st"
                style={{ backgroundImage: `url(${el.img})` }}
              ></div>
            );
          })}
        </div>
        <hr className="hrCont"></hr>
        <img className="str" src={Str} alt="" />

        <div className="box">
            <div className="cont1">
                <h4 className="h44">О карте</h4>
                <hr className="yellowhr" />
                <p className="yellowp">Господа, новая модель организационной деятельности однозначно фиксирует необходимость анализа существующих паттернов поведения. Вот вам яркий пример современных тенденций - перспективное планирование требует определения и уточнения прогресса профессионального сообщества. Идейные соображения высшего порядка, а также семантический разбор внешних.</p>
                <button className="btn1">Получить</button>
                <button className="btn2">Узнать больше</button>
            </div>
            <div className="cont2">
                <img src={card1} alt="" />
            </div>
            <div className="cont3">
            <img src={card} alt="" />
            </div>
            <div className="cont4">
            <h4 className="h44">Примечания</h4>
                <hr className="pinkhr" />
                <p className="yellowp">С учётом сложившейся международной обстановки, разбавленное изрядной долей эмпатии, рациональное мышление создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса. А ещё диаграммы связей объявлены нарушающими общечеловеческие нормы этики и морали. Предварительные выводы.</p>
                <button className="btn3">Узнать больше</button>
            </div>
        </div>
      </div>
    </div>
  );
};
