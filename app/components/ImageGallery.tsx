import React from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';
import bikes from '../../public/JSONs/bikes.json';

interface ImageData {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Bike {
  image: string;
  iteration: number;
  max_speed: number;
  development_start: number;
  development_end: number;
  competitions: string[];
  description: string;
  gallery: string[];
}

const bikeData: { [key: string]: Bike } = bikes;

const transformGallery = (bikeName: keyof typeof bikeData): ImageData[] => {
  const gallery = bikeData[bikeName].gallery;

  return gallery.map((image, index) => ({
    id: (index + 1).toString(), // Create an ID based on the index
    src: image,
    alt: `Image ${index + 1} description`, // Provide a default description
    width: 800, // Set a default width
    height: 600, // Set a default height
  }));
};

const images = transformGallery("Bilby");

console.log(images);
