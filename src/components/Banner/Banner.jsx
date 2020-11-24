import React, { useRef, useEffect } from 'react';
import './banner.css';

export const Banner = ({ fillColor = '#CFCFCF', href = './', resize, photo, text, getPng }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = fillColor;
    context.fillRect(0, 0, resize.width, resize.height);
    if (photo) {

      let imageObj = new Image();
      imageObj.crossOrigin = '*';
      imageObj.onload = () => {
        context.drawImage(imageObj, 0, 0);
        context.strokeText(text, 30, 70)
        context.font = '20px Roboto';
        getPng(canvas.toDataURL());
      };
      imageObj.src = photo;
    }  
  }, [fillColor, resize, photo, href, text, getPng]);

  return (
    <canvas
      className="banner-main"
      ref={canvasRef}
      width={resize.width}
      height={resize.height}
      onClick={() => (document.location.href = href)}
    />
  );
};

/* eslint-disable */
// <div className="template-txt">{`${resize.width} X ${resize.height}`}</div>
