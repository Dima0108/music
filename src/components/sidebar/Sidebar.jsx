import React, { useState } from 'react';
import '../../styles/style.css';
import { Link } from 'react-router-dom';

import Logo from '../../img/kit.svg'
import Dima from "../../img/dima.jpg"

import './sidedar.css'

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      id: Date.now() + file.name,
      file: file,
    }));
    setSelectedFiles([...selectedFiles, ...newFiles]);
  };

  const handleDelete = (fileId) => {
    setSelectedFiles(selectedFiles.filter(file => file.id !== fileId));
  };

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`bx bx-menu ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>

        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Поиск..." type="search" class="input" />
        </div>

        <div class="header__img">
          <img src={Dima} alt="" />
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <img src={Logo} alt="" />
              <i className={`nav-logo-icon`}></i>
              <span className='nav-logo-name'>Кит Медиа</span>
            </Link>

            <div className='nav-list'>
              <Link to='#!' className='nav-link active'>
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

      <h1>Главная</h1>

      <div>
        <div className="upload-container">
          <label className="upload-button">
            <input type="file" accept="audio/*" multiple onChange={handleFileChange} />
            <i class='bx bxs-download' ></i>
          </label>

          {selectedFiles.length > 0 && (
            <div>
              <ul className="audio-list">
                {selectedFiles.map(({ id, file }) => (
                  <li key={id} className="audio-item">
                    <audio controls>
                      <source src={URL.createObjectURL(file)} type="audio/mp3" />
                      Ваш браузер не поддерживает аудио элемент.
                    </audio>
                    <button className="delete-button" onClick={() => handleDelete(id)}>Удалить</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

    </main>
  );
};

export default Sidebar;
