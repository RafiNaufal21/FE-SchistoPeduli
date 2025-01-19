// src/Kamera.js
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../css/Kamera.css'; // Pastikan untuk membuat file CSS terpisah untuk styling

const Kamera = () => {
  const [predictions, setPredictions] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [predictedLabel, setPredictedLabel] = useState('');
  const [confidence, setConfidence] = useState('');

  // Mengakses stream webcam
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Gagal mengakses webcam:', error);
      }
    };
    startWebcam();
  }, []);

  // Fungsi untuk mengambil gambar dari video
  const captureImage = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');

    // Gambar frame video ke kanvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Ambil data URL dari kanvas
    const dataURL = canvas.toDataURL('image/jpeg');

    // Kirim gambar ke server
    const formData = new FormData();
    const blob = await (await fetch(dataURL)).blob();
    formData.append('images', blob, 'captured.jpg');

    try {
      const response = await axios.post(
        'http://127.0.0.1:8001/predict',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setPredictions(response.data);

      // Ambil label dan confidence dari response
      const prediction = response.data[0];
      setPredictedLabel(prediction.predicted_label);
      setConfidence(prediction.confidence);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Tangani upload gambar
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('images', file);

      try {
        const response = await axios.post(
          'http://127.0.0.1:8001/predict',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setPredictions(response.data);

        // Ambil label dan confidence dari response
        const prediction = response.data[0];
        setPredictedLabel(prediction.predicted_label);
        setConfidence(prediction.confidence);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Deteksi Keong dengan Kamera</h1>
      <div className="row">
        <div className="video-container">
          <video ref={videoRef} autoPlay playsInline muted></video>
          <button onClick={captureImage} className="capture-button">
            Ambil Gambar
          </button>
          <canvas
            ref={canvasRef}
            width="250"
            height="250"
            style={{ display: 'none' }}></canvas>
        </div>
        <div className="result-container">
          <h3>Hasil Deteksi:</h3>
          <p className="prediction">
            {predictedLabel ? (
              <span>
                Jenis Keong: {predictedLabel} <br />
                Confidence: {confidence}%
              </span>
            ) : (
              <span>Mendeteksi...</span>
            )}
          </p>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleImageUpload} className="upload-button">
            Deteksi Keong
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kamera;