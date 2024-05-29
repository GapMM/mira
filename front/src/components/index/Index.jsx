import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import "./style.css";

export default function Index() {
  const [table, setTable] = useState({
    body: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchTable = useCallback(async () => {
    setLoading(true);
    const response = await fetch(config.api + "get/collection/list/");
    const answer = await response.json();

    let labels = [];
    let numbers = [];
    let indexes = [];

    answer.forEach((item) => {
      labels.push(item.TITLE.split(".")[1]);
      numbers.push(item.DOCUMENTS);
      indexes.push(item.INDEXES);
    });

    setTable({
      body: answer,
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTable();
  }, [fetchTable]);

  return (
    <>
      <div className="banner">
        <div className="text">
          <div class="tekst_sverhu_kartinki">TRAVEL TIME</div>
          <div class="text_name">
            Don't let the loud noise scare you.<br></br>
            Let the rhythms of the dance amuse you.<br></br>
            You are given a very rare chance <br></br>
            Feel the movement of our ancestors
          </div>
        </div>
      </div>

      <h1 id="hot">Popular tours</h1>

      <div className="box">
        <div class="box1">
          <a
            className="preview-picture"
            href="test"
            style={{
              backgroundImage:
                "url(https://sportishka.com/uploads/posts/2023-12/1702065997_sportishka-com-p-parizh-eifeleva-bashnya-krasivo-22.jpg)",
            }}
          ></a>
          <h3>Paris</h3>
        </div>

        <div class="box1">
          <a
            className="preview-picture"
            href="Japan"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/36/12/d8/3612d88a202482eff6b3d552d2920654.jpg)",
            }}
          ></a>
          <h3>Japan</h3>
        </div>

        <div class="box1">
          <a
            className="preview-picture"
            href=""
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/db/87/d3/db87d388659ab6ee0b7251e576d6ae4f.jpg)",
            }}
          ></a>
          <h3>Italy</h3>
        </div>

        <div class="box1">
          <a
            className="preview-picture"
            href=""
            style={{
              backgroundImage:
                "url(https://sportishka.com/uploads/posts/2023-12/1701803231_sportishka-com-p-samie-krasivie-ostrova-pkhuketa-oboi-63.jpg)",
            }}
          ></a>
          <h3>Thailand</h3>
        </div>
      </div>

      <h1 id="order">Registration</h1>

      <div class="signupFrm">
        <form action="" class="form">
          <h1 class="title">Sign up</h1>

          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">
              Email
            </label>
          </div>

          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">
              Username
            </label>
          </div>

          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">
              Password
            </label>
          </div>

          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">
              Confirm Password
            </label>
          </div>

          <input type="submit" class="submitBtn" value="Sign up" />
        </form>
      </div>

      <h1 id="about">About</h1>

      <div className="box tower">
        <div className="about-text">
          <p>
            Бренд Horizon Travel представлен на рынке с 1995 года. Сегодня
            оператор занимает лидирующие позиции в туристической отрасли и
            позиционируется как марка надежности и качества. Клиентов Horizon
            Travel в Турции, Египте, Греции, Испании, ОАЭ, Таиланде и Вьетнаме
            обслуживают принимающая компания Odeon Tours.
          </p>
          <p>
            Туроператор Horizon Travel предлагает лучшие курорты и отели в 40
            странах мира, среди которых Австрия, Андорра, Бахрейн, Беларусь,
            Болгария, Вьетнам, Греция, Грузия, Доминиканская Республика, Египет,
            Израиль, Индия, Индонезия, Иордания, Испания, Италия, Катар, Кения,
            Кипр, Куба, Маврикий, Мальдивы, Марокко, Мексика, ОАЭ, Россия,
            Сейшелы, Сингапур, Таиланд, Танзания, Тунис, Турция, Узбекистан,
            Хорватия, Черногория, Шри-Ланка. Идет постоянная работа по открытию
            новых направлений. Туроператор организует групповые и индивидуальные
            туры FIT на базе собственных чартерных программ и регулярных рейсов,
            занимается развитием инсентив-, конгресс-, спортивного и других
            видов туризма, а также активно продает авиабилеты в онлайн.
          </p>
        </div>
      </div>
    </>
  );
}
