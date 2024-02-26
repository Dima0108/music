import React, { useState } from 'react';
import ReactAudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../styles/style.css';
import { Link } from 'react-router-dom';


import Logo from '../../img/kit.svg'
import Dima from "../../img/dima.jpg"
import playIMG from "../../img/play-regular-36.png"

import img1 from '../../uploads/img/di_kaprio.jpg'
import img2 from '../../uploads/img/1534558414613.png'
import img3 from '../../uploads/img/fon-dozhdya.jpg'
import img4 from '../../uploads/img/horizon-mountain-sun-sunrise-sunset.jpg'

import music1 from '../../uploads/music/Dance.mp3'
import music2 from '../../uploads/music/Music1.mp3'
import music3 from '../../uploads/music/Music2.mp3'
import music4 from '../../uploads/music/Prety.mp3'


const Music = () => {
    const [show, setShow] = useState(false);

    
    const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

    let tracks = [
        {
            name: "Dance",
            path: `${music1}`,
            author: "No name",
            img: `${img1}`
        },
        {
            name: "Music 1",
            path: `${music2}`,
            author: "No name",
            img: `${img2}`
        },
        {
            name: "Music 2",
            path: `${music3}`,
            author: "No name",
            img: `${img3}`
        },
        {
            name: "Music 3",
            path: `${music4}`,
            author: "No name",
            img: `${img4}`
        },
        {
            name: "Music 1",
            path: `${music2}`,
            author: "No name",
            img: `${img2}`
        },
        {
            name: "Music 3",
            path: `${music4}`,
            author: "No name",
            img: `${img4}`
        },
        {
            name: "Music 1",
            path: `${music2}`,
            author: "No name",
            img: `${img2}`
        },
        {
            name: "Music 3",
            path: `${music4}`,
            author: "No name",
            img: `${img4}`
        },
        {
            name: "Music 1",
            path: `${music2}`,
            author: "No name",
            img: `${img2}`
        },
        {
            name: "Music 3",
            path: `${music4}`,
            author: "No name",
            img: `${img4}`
        },
    ]

    const handleTrackClick = (index) => {
        setCurrentTrackIndex(index);
    };

    const playNextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    };

    const playPreviousTrack = () => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
        );
    };

    const closeMusic = () => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex = null
        );
    };

    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle' onClick={() => setShow(!show)}>
                    <i className={`bx bx-menu ${show ? 'fa-solid fa-xmark' : null}`}></i>
                </div>

                <div className="group">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input placeholder="Поиск..." type="search" className="input"/>
                </div>

                <div className="header__img">
                    <img src={Dima} alt=""/>
                </div>
            </header>

            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <Link to='/' className='nav-logo'>
                            <img src={Logo} alt=""/>
                            <i className={`nav-logo-icon`}></i>
                            <span className='nav-logo-name'>Кит Медиа</span>
                        </Link>

                        <div className='nav-list'>
                            <Link to='../../Sidebar' className='nav-link active'>
                                <i className='bx bx-user nav-link-icon'></i>
                                <span className='nav-link-name'>Главная</span>
                            </Link>
                            <Link to='../../Library' className='nav-link'>
                                <i className='bx bx-grid-alt nav-link-icon'></i>
                                <span className='nav-link-name'>Библиотека</span>
                            </Link>
                            <Link to='../../Music' className='nav-link'>
                                <i className='bx bx-music nav-link-icon'></i>
                                <span className='nav-link-name'>Музыка</span>
                            </Link>
                            <Link to='../../Record' className='nav-link'>
                                <i className='bx bx-folder nav-link-icon'></i>
                                <span className='nav-link-name'>Записать</span>
                            </Link>
                            <Link to='../../Favorites' className='nav-link'>
                                <i className='bx bx-heart nav-link-icon'></i>
                                <span className='nav-link-name'>Избранное</span>
                            </Link>
                            <Link to='../../Radio' className='nav-link'>
                                <i className='bx bx-radio nav-link-icon'></i>
                                <span className='nav-link-name'>Радио</span>
                            </Link>
                            <Link to='../../Settings' className='nav-link'>
                                <i className='bx bx-cog nav-link-icon'></i>
                                <span className='nav-link-name'>Настройки</span>
                            </Link>
                        </div>
                    </div>

                    <Link to='/' className='nav-link'>
                        <i className='bx bx-log-out nav-link-icon'></i>
                        <span className='nav-link-name'>Выйти</span>
                    </Link>
                </nav>
            </aside>

            <h1>Музыка</h1>
            <section className="music-list">
                {tracks.map((track, index) => (
                    <div
                        className="music-card"
                        key={index}
                        onClick={() => handleTrackClick(index)}
                    >
                        <div className="albom-fon">
                            <img src={track.img} alt="" className="music-img" />
                            <img src={playIMG} alt="" id="playIMG" />
                        </div>
                        <p className="name-music">{track.name}</p>
                        <p className="author-music">{track.author}</p>
                    </div>
                ))}
            </section>

            {currentTrackIndex !== null && (
                <>
                    <div className="AudioPlayer">
                        <button onClick={playPreviousTrack} id="leftBut"></button>

                        <ReactAudioPlayer
                            autoPlay
                            src={tracks[currentTrackIndex].path}
                            customProgressBarSection={
                                [
                                    RHAP_UI.PROGRESS_BAR,
                                    RHAP_UI.CURRENT_TIME,
                                    <div>/</div>,
                                    RHAP_UI.DURATION
                                ]
                            }
                            controls
                        />
                        <button onClick={playNextTrack} id="rightBut"></button>
                        <button onClick={closeMusic} id="CloseBut">X</button>
                        <img src={tracks[currentTrackIndex].img} alt=""/>
                    </div>
                </>
            )}

        </main>
    );
};

export default Music;

