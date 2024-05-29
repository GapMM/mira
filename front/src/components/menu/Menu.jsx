import { useEffect, useState, useCallback } from 'react';
import './style.css';
import config from '../../params/config';

export default function Menu({curPath}) {
    const [menu, setMenu] = useState([]);

    const fetchMenu = useCallback(async () => {
        const response = await fetch(config.api + 'get/Menu/');
        const answer = await response.json();
        setMenu(answer.data);
    }, []);

    useEffect(
        () => {fetchMenu()}, [fetchMenu]
    );

    function toBlock(event) {
        event.preventDefault();
        let target = event.target;
        let href = target.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        window.scrollTo({
            top: scrollTarget.offsetTop - 100,
            behavior: 'smooth'
        });
    }

    return (
        <menu>   
            {
                menu && menu.map(menuElement => (
                    <li className={curPath == menuElement.LINK ? 'selected': null} key={menuElement._id}><a onClick={toBlock} href={menuElement.LINK}>{menuElement.NAME}</a></li>
                ))
            }
        </menu>
    )
}