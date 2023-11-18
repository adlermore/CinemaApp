import React, { memo, useState, useCallback, useEffect, createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/scss/MainSlider/_mainSlider.scss';
import Slider from "react-slick";

const Menu = ({ dataMoves, setCurrentMove }) => {
    const [loading, setLoading] = useState(false);
    const sliderRef = createRef();
    const scroll = useCallback(
        y => {
            if (y > 0) {
                return sliderRef?.current?.slickNext();
            } else {
                return sliderRef?.current?.slickPrev();
            }
        },
        [sliderRef]
    );

    useEffect(() => {
        window.addEventListener("wheel", e => {
            scroll(e.deltaY);
        });
        if (dataMoves) {
            setLoading(true)
        }

    }, [scroll, dataMoves ]);

    const handleCurrentMove = (move) => {
        sessionStorage.setItem('lastClickedMovieId', move.Id);
        let seconds = move.Duration;
        let hours = Math.floor(seconds / 3600) + 'h';
        let minutes = Math.floor((seconds % 3600) / 60) + 'm';
        setCurrentMove({
            ...move,
            TitleImage: require(`../../assets/img/${move.TitleImage}`),
            CoverImage: require(`../../assets/img/${move.CoverImage}`),
            SlideImage: require(`../../assets/img/${move.SlideImage}`),
            Duration: `${hours} ${minutes}`,
            VideoUrl: move.VideoUrl
        });
    }

    const settingsTrending = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 8.1,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    };

    return (
        <div className="main_slider">
            <div className="label_title">Trending Now</div>
            {loading &&
                <div className="trending_slider">
                    <Slider {...settingsTrending} ref={sliderRef}>
                        {dataMoves.TendingNow.map((move, index) => (
                            <div key={index} className='slider_block'>
                                <div className="slider_inner"
                                    onClick={() => handleCurrentMove(move)}
                                >
                                    <img src={require(`../../assets/img/${move.CoverImage}`)} alt="slideImg" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            }

        </div>
    )
}

export default memo(Menu);