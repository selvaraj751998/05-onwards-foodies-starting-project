'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import classes from './image-show.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageShow(){

    const [UpdatedImage , setUpdatedImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedImage((preIndex) => {
               preIndex = preIndex > images.length - 1 ? preIndex + 1 : 0 ;
            },5000)
        })
        return () => clearInterval(interval)
    },[])
    return(
        <div className={classes.ImageShow}>
            {
                images.map((image,index) => (
                <Image key={index} 
                src={image.image} 
                alt={image.alt} 
                width={500000} 
                height={500000} 
                className={index === UpdatedImage ? classes.active : ''} />))
            }
        </div>
        
    )
    
}