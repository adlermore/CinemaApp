
import React, { useState, useEffect, useRef } from 'react';
import Menu from '../components/Menu/Menu';
import '../assets/scss/HomePage/_homePage.scss';
import mainFilmTitleImg from '../assets/img/FeaturedTitleImage.png'
import { IoMdPlay } from "react-icons/io";
import MainSlider from '../components/mainSlider/MainSlider';
import jsonData from '../data.json';
import FeaturedCoverImage from '../assets/img/FeaturedCoverImage.png';
const video = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

const HomePage = () => {

    const [currentMove, setCurrentMove] = useState({
        Category: "Movie",
        TitleImage: mainFilmTitleImg,
        ReleaseYear: "2021",
        MpaRating: "18+",
        CoverImage: FeaturedCoverImage,
        Duration: "1h 48m",
        VideoUrl: video,
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    })
    const [data, setData] = useState(null);
    const [coverImageShow, setcoverImageShow] = useState(true);

    const videoRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setData(jsonData);
        }, 1000);
    }, []);

    const SetcoverImageTime = setTimeout(() => {
        setcoverImageShow(false)
    }, 3000);

    const setTheCurrentMove = (currMove) => {
        clearTimeout(SetcoverImageTime);
        setCurrentMove(currMove);
        setcoverImageShow(true);
        videoRef.current.load();
        videoRef.current.play();
    }

    const containerStyle = {
        background: `url(${currentMove.CoverImage}) no-repeat`,
    };

    return (
        <div className='cinema_container'>
            <Menu />
            <div className={coverImageShow ? 'home_wrapper coverImageShow' : ' home_wrapper coverVideoShow'} style={containerStyle} >
                <div className="main_film_content">
                    <div className="content_type">{currentMove.Category}</div>
                    <div className="film_desc_image">
                        <img src={currentMove.TitleImage} alt="filmTitle" />
                    </div>
                    <div className="second_line">
                        <span className="film_date">{currentMove.ReleaseYear}</span>
                        <span className="film_ageWar">{currentMove.MpaRating}</span>
                        <span className="film_lenght">{currentMove.Duration}</span>
                    </div>
                    <div className="film_description">{currentMove.Description}</div>
                    <div className="button_line">
                        <a href="/#" className="play_btn"><IoMdPlay /> Play</a>
                        <a href="/#" className="info_btn"> More Info</a>
                    </div>
                </div>
                <div className="video_container">
                    <video ref={videoRef} className="video_inner_container" autoPlay muted loop>
                        <source src={currentMove.VideoUrl} type="video/mp4" />
                    </video>
                </div>
            </div>
            <MainSlider dataMoves={data} setCurrentMove={setTheCurrentMove} />
        </div>
    )
}

export default HomePage;