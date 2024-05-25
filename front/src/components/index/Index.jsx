import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import { CChart } from "@coreui/react-chartjs";
import "./style.css";

export default function Index() {
    const [table, setTable] = useState({
        body: [],
    });
    const [pie, setPie] = useState({
        labels: [],
        numbers: [],
        indexes: [],
        count: 1,
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

        setPie({
            labels: labels,
            numbers: numbers,
            indexes: indexes,
            count: labels.length,
        });

        setTable({
            body: answer,
        });

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchTable();
    }, [fetchTable]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getColors(count) {
        if (count > 0) {
            let arColors = [];
            let arColorCode = [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0",
            ];
            //HEX: RGB, RGBA. 00 00 00 00

            for (let j = 0; j < count; j++) {
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += arColorCode[getRandomInt(16)];
                }

                arColors.push(color);
            }
        } else return false;
    }

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

            <h1 id='hot'>Популярные туры</h1>

            <div className="box">
                <div class="box1">
                    <a className='preview-picture'
                        href="test"
                        style={{
                            backgroundImage:
                                "url(https://sportishka.com/uploads/posts/2023-12/1702065997_sportishka-com-p-parizh-eifeleva-bashnya-krasivo-22.jpg)",
                        }}
                    ></a>
                    <h3>Paris</h3>
                </div>

                <div class="box1">
                    <a className='preview-picture'
                        href="Japan"
                        style={{
                            backgroundImage:
                                "url(https://i.pinimg.com/originals/36/12/d8/3612d88a202482eff6b3d552d2920654.jpg)",
                        }}
                    ></a>
                    <h3>Japan</h3>
                </div>

                <div class="box1">
                    <a className='preview-picture'
                        href=""
                        style={{
                            backgroundImage:
                                "url(https://i.pinimg.com/originals/db/87/d3/db87d388659ab6ee0b7251e576d6ae4f.jpg)",
                        }}
                    ></a>
                    <h3>Italy</h3>
                </div>

                <div class="box1">
                    <a className='preview-picture'
                        href=""
                        style={{
                            backgroundImage:
                                "url(https://sportishka.com/uploads/posts/2023-12/1701803231_sportishka-com-p-samie-krasivie-ostrova-pkhuketa-oboi-63.jpg)",
                        }}
                    ></a>
                    <h3>Thailand</h3>
                </div>
            </div>
            <div class="form-wrap">
  <div class="profile">
    <h1>Регистрация</h1>
  </div>
  <form method="post" action="form.php">
    <div>
      <label for="name">Имя</label>
      <input type="text" name="name" required/>
    </div>
    <div class="radio">
      <span>Пол</span>
      <label>
        <input type="radio" name="s" value="мужской"/>мужской
        <div class="radio-control male"></div>
      </label>
      <label>
        <input type="radio" name="s" value="женский"/>женский
        <div class="radio-control female"></div>
      </label>
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="email" name="email" required/>
    </div>
    <div>
      <label for="country">Страна</label>
      <select name="country">
        <option>Выберите страну проживания</option>
        <option value="Россия">Россия</option> 
        <option value="Париж">Париж</option> 
        <option value="Беларусь">Беларусь</option> 
      </select> 
      <div class="select-arrow"></div> 
    </div> 
    <button type="submit">Отправить</button> 
  </form> 
</div>
        </>
    );
}
