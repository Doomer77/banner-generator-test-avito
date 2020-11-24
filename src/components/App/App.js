import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Banner } from '../../components/Banner/Banner';
import { Form } from '../../components/Form/Form';
import { useStyles } from './main.style';
import ReactDOMServer from 'react-dom/server';
import './App.css';

function App() {
  const [fillColor, setFillColor] = useState();
  const [href, setHref] = useState('');
  const [photo, setPhoto] = useState('');
  const [text, setText] = useState('');
  const [downloadPng, setDownloadPng] = useState();
  const [resize, setResize] = useState({
    height: 300,
    width: 550,
  });
  const classes = useStyles();
  // Получает картинку из канваса в png
  const getPng = (e) => {
    setDownloadPng(e)
  };

  // Тут сформировать JSON обьект из стэйта
  const getJSON = () => {
    const jsonData = JSON.stringify({
      text: text,
      href: href,
      photo: photo,
      fillColor: fillColor,
    })
    navigator.clipboard.writeText(jsonData)
      .then(() => {
        alert('JSON copy!')
      })
      .catch(err => {
        alert('ERROR!')
      });
  };

  const getHtml = () => {
    navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(
      <div style={{ backgroundColor: fillColor }}>
        <img src={`${href}`} alt="" />
        <p>{`${text}`}</p>
      </div>
    ))
      .then(() => {
        alert('HTML copy!')
      })
      .catch(err => {
        alert('ERROR!')
      });
  }

  return (
    <div className="app">
      <Form className="form"
        setFillColor={(e) => setFillColor(e)}
        fillColor={fillColor}
        setResize={(param, size) => setResize({ ...resize, [param]: size })}
        resize={resize}
        setHref={(e) => setHref(e)}
        href={href}
        setPhoto={(e) => setPhoto(e)}
        photo={photo}
        setText={(e) => setText(e)}
        text={text}
      />
      <Banner className="banner"
        fillColor={fillColor}
        resize={resize}
        href={href}
        photo={photo}
        text={text}
        getPng={getPng}
      />
      <div className={classes.root}>
        <Button  onClick={() => getHtml()} variant="contained" color="primary">Скопировать в HTML</Button>
        <Button variant="contained" color="secondary" onClick={() => getJSON()}>Скопировать в JSON</Button>
        <Button variant="contained"><a className="link" href={downloadPng} download>Сохранить в png</a></Button>
      </div>
    </div>
  );
}

export default App;
