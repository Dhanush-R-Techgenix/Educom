import React, { Component } from 'react';
import "./banner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Footer from './UserFooter';
import Cards from './cards';




function Banner() {
    {
        return (
            <div className='edu-main'>
                <div>
                    <Carousel>
                        <div className='banner-container'>
                            <div className='banner-head'>
                                <h2>All our <b>top programs</b> just got upgraded with <b>Generative AI modules</b></h2>
                                <h1>Be the first to Change, Adapt and Build in AI</h1>
                                <button id='button'>Explore programs</button>
                            </div>
                            <div className='banner-image'>
                                <img src='https://img.freepik.com/premium-photo/online-education-internet-training-concept-with-pretty-young-woman-sitting-white-table-looking-laptop-screen-carrying-pencil-hands-abstract-light-green-wall-background_670147-461.jpg?w=2000'></img>
                            </div>
                        </div>

                        <div className='banner-container'>
                            <div className='banner-head'>
                                <h2>All our <b>top programs</b> just got upgraded with <b>Generative AI modules</b></h2>
                                <h1>Be the first to Change, Adapt and Build in AI</h1>
                                <button id='button'>Explore programs</button>
                            </div>
                            <div className='banner-image'>
                                <img src='https://img.freepik.com/premium-photo/online-education-internet-training-concept-with-pretty-young-woman-sitting-white-table-looking-laptop-screen-carrying-pencil-hands-abstract-light-green-wall-background_670147-461.jpg?w=2000'></img>
                            </div>
                        </div>


                        <div className='banner-container'>
                            <div className='banner-head'>
                                <h2>All our <b>top programs</b> just got upgraded with <b>Generative AI modules</b></h2>
                                <h1>Be the first to Change, Adapt and Build in AI</h1>
                                <button id='button'>Explore programs</button>
                            </div>
                            <div className='banner-image'>
                                <img src='https://img.freepik.com/premium-photo/online-education-internet-training-concept-with-pretty-young-woman-sitting-white-table-looking-laptop-screen-carrying-pencil-hands-abstract-light-green-wall-background_670147-461.jpg?w=2000'></img>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <Cards />
                <Footer />
            </div>

        );
    }
}
export default Banner;