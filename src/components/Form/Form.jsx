import React from 'react';
import { TextField, TextareaAutosize } from '@material-ui/core';
import { useStyles } from '../../components/App/main.style';
import './Form.css'


export const Form = ({
  setFillColor,
  fillColor,
  setResize,
  resize,
  setHref,
  href,
  setPhoto,
  photo,
  setText,
  text,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        className="bcg-color"
        type="color"
        onChange={(e) => setFillColor(e.target.value)}
        value={fillColor}
        name="fill-color"
      />
      <TextField
        label="Ширина"
        type="number"
        name="width"
        onChange={(e) => setResize('width', e.target.value)}
        value={resize.width}
      />
      <TextField
        label="Высота"
        type="number"
        name="height"
        onChange={(e) => setResize('height', e.target.value)}
        value={resize.height}
      />
      <TextField
        label="Ссылка перехода"
        type="text"
        name="href"
        onChange={(e) => setHref(e.target.value)}
        value={href}
      />
      <TextField
        label="Ссылку картинки"
        type="text"
        className="upload"
        id="photo-upload"
        onChange={(e) => setPhoto(e.target.value)}
        value={photo}
      />
      <TextareaAutosize
        rowsMax={3}
        rowsMin={3}
        label="Введите текст банера"
        type="text"
        className="upload"
        id="photo-upload"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Введите текст"
      />
    </div>
  );
};
