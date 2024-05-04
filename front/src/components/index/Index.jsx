import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import { CChart } from '@coreui/react-chartjs';
import './style.css';

export default function Index() {
    const [table, setTable] = useState({
        body: []
    });
    const [pie, setPie] = useState({
        labels: [],
        numbers: [],
        indexes: [],
        count: 1
    });
    const [loading, setLoading] = useState(false);

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + 'get/collection/list/');
        const answer = await response.json();

        let labels = [];
        let numbers = [];
        let indexes = [];

        answer.forEach(item => {
            labels.push(item.TITLE.split('.')[1]);
            numbers.push(item.DOCUMENTS);
            indexes.push(item.INDEXES);
        });

        setPie({
            labels: labels,
            numbers: numbers,
            indexes: indexes,
            count: labels.length
        })

        setTable({
            body: answer
        })

        setLoading(false);
    }, []);

    useEffect(
        () => {
            fetchTable()
        }, [fetchTable]
    );

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getColors(count) {
        if (count > 0) {
            let arColors = [];
            let arColorCode = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            //HEX: RGB, RGBA. 00 00 00 00

            for (let j = 0; j < count; j++) {
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += arColorCode[getRandomInt(16)]
                }

                arColors.push(color);
            }

        }
        else return false;
    }


    return (
        <>


            <div className="banner">

                <div className="text">
                    <div class="tekst_sverhu_kartinki">TRAVEL TIME</div>        
                    <div class='text_name'>Don't let the loud noise scare you.<br></br>
                    Let the rhythms of the dance  amuse you.<br></br>
                    You are given a very rare chance <br></br>
                    Feel the movement of our ancestors</div></div>
            </div>

            <link rel="stylesheet" href="style.css" />


        </>
    )
}