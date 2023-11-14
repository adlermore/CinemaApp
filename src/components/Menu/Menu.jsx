import React, { memo, useState } from "react";
import '../../assets/scss/_menu.scss';
import userImg from '../../assets/img/userImg.jpg'
import searchIcon from '../../assets/img/icons/search.png';
import homeIcon from '../../assets/img/icons/home.png';
import TvIcon from '../../assets/img/icons/tv.png';
import MoviesIcon from '../../assets/img/icons/movies.png';
import GenresIcon from '../../assets/img/icons/genres.png';
import LaterIcon from '../../assets/img/icons/later.png';

const Menu = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`menu_container ${isHovered ? 'active_menu' : ''}`}>
            <div className="menu_inner">
                <div className="user_block">
                    <div className="user_image">
                        <img src={userImg} alt="userImage" />
                    </div>
                    <div className="user_name">Daniel</div>
                </div>
                <div className="main_menu">
                    <ul className="menu_list"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <li>
                            <span className="menu_icon"><img src={searchIcon} alt="icon" /></span>
                            <span className="menu_link">Search</span>
                        </li>
                        <li className="active">
                            <span className="menu_icon"><img src={homeIcon} alt="icon" /></span>
                            <span className="menu_link">Home</span>
                        </li>
                        <li>
                            <span className="menu_icon"><img src={TvIcon} alt="icon" /></span>
                            <span className="menu_link">TV Shows</span>
                        </li>
                        <li>
                            <span className="menu_icon"><img src={MoviesIcon} alt="icon" /></span>
                            <span className="menu_link">Movies</span>
                        </li>
                        <li>
                            <span className="menu_icon"><img src={GenresIcon} alt="icon" /></span>
                            <span className="menu_link">Genres</span>
                        </li>
                        <li>
                            <span className="menu_icon"><img src={LaterIcon} alt="icon" /></span>
                            <span className="menu_link">Watch Later</span>
                        </li>
                    </ul>
                </div>
                <div className="bottom_links">
                    <div className="link_inner"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <a href="/#">Language</a>
                        <a href="/#">Get Help</a>
                        <a href="/#">Exit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Menu);