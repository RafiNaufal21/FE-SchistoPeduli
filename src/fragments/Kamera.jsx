import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js

const Kamera = () => {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load the TensorFlow.js model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadGraphModel(
          '/models/model.json' // Path to your model (make sure this path is correct)
        );
        setModel(loadedModel);
        console.log('Model loaded successfully.');
      } catch (error) {
        console.error('Failed to load model:', error);
      }
    };
    loadModel();
  }, []);

  // Access webcam stream
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
        console.error('Failed to access the webcam:', error);
      }
    };
    startWebcam();
  }, []);

  // Function to classify the frame
  const classifyFrame = async () => {
    if (model && videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Draw video frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Preprocess the image for the model
      const imgTensor = tf.browser
        .fromPixels(canvas)
        .resizeNearestNeighbor([224, 224]) // Resize the image to match model input size
        .expandDims() // Add a batch dimension (1, 224, 224, 3)
        .toFloat()
        .div(tf.scalar(255)); // Normalize pixel values to [0, 1]

      // Get predictions
      const predictions = await model.predict(imgTensor).data();
      const labels = ['Keong Oncomelania', 'Keong Sawah', 'Keong Kuning'];

      // Get the predicted label with highest probability
      const highestIndex = predictions.indexOf(Math.max(...predictions));
      setPredictions([labels[highestIndex]]);
    }
  };

  // Classify frame every second
  useEffect(() => {
    const interval = setInterval(() => {
      classifyFrame();
    }, 1000); // Classify every second
    return () => clearInterval(interval);
  }, [model]);

  return (
    <>
      <div className="container">
        <h1>Deteksi Keong dengan Kamera</h1>
        <div className="row">
          <div className="col-md-6">
            {/* Video stream from webcam */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{
                width: '100%',
                height: 'auto',
                border: '2px solid black',
              }}></video>
          </div>
          <div className="col-md-6">
            {/* Canvas to draw video frame */}
            <canvas
              ref={canvasRef}
              width="224"
              height="224"
              style={{
                display: 'none',
              }}></canvas>

            <h3>Hasil Deteksi:</h3>
            <p>
              {predictions.length > 0 ? (
                <span>Jenis Keong: {predictions[0]}</span>
              ) : (
                <span>Mendeteksi...</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kamera;
