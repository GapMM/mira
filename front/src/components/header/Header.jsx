import { useEffect, useState } from 'react';
import pipa from '../../images/logo_remove_bg.png';
import './style.css';
import Menu from '../menu/Menu';
import lang from './lang.js';

export default function Header({ curPath }) {
    /**
     * Правила работы с хуками
     * 1. Нельзя писать вне компонента/класса
     * 2. useState и useEffect всегда должны быть вне условия и на самом верху
     */
    const [now, setNow] = useState(new Date()); //0 - значение, 1 - функция коллбек, которая меняет это значение

    useEffect(
        () => {
            //timer
            const interval = setInterval(() => setNow(new Date()), 1000);

            return () => {
                clearInterval(interval);
                console.log('clear time');
            }
        }, []
    )

    return (
        <>
        <header>
            <div className='LogoGroup'>
                <a href='/'><img src={pipa} width="120px" alt="" /></a>
            </div>

            <Menu curPath={curPath} />

            <div className='timer'>{ now.toLocaleTimeString() }</div>
        </header>

        </>
    )
}
