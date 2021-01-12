import React from "react";
import Mine from "../images/mine.jpg";
// import Facebook from "../images/Facebook_b.png";
// import Github from "../images/Github_b.png";
// import Mail from "../images/Mail_b.png";
import { FaGithub, FaMediumM, FaFacebook, FaInstagram } from 'react-icons/fa';
import "../css/Header.css";
import { useFadeIn } from "./useFadeIn";

function Header() {
    const FadeIn = useFadeIn(5, 0);
    return (
        <div className="App">
            <header {...FadeIn} className="App_header">
                <div className="App_header_mainbox">
                    <div className="mainbox_left">
                        {/* <img src="../../public/mine.jpg" alt="Me" height="447" /> */}
                        <img src={Mine} alt="Me" />
                    </div>
                    <div className="mainbox_right">
                        <h3 id="name">이름</h3>
                        <h4>임연수</h4>
                        <p>&nbsp;</p>
                        <h3 id="birth">생년월일</h3>
                        <h4>1996. 07. 08</h4>
                        <p>&nbsp;</p>
                        <h3 id="Studying">학력</h3>
                        <h4>금오공과대학교 학사</h4>
                        <p>&nbsp;</p>
                        <h3 id="major">전공</h3>
                        <h4>컴퓨터공학과</h4>
                        <p>&nbsp;</p>
                        <h3 id="email">이메일</h3>
                        <h4>yslim6168@naver.com</h4>
                        <p>&nbsp;</p>
                    </div>
                    <div className="mainbox_bottom">
                        <div id="github" className="icon">
                            <a href="https://github.com/limyeonsoo" rel="noopener noreferrer" target="_blank" title="link_to_Github">
                                <FaGithub size="2em" />
                            </a>
                        </div>

                        <div id="mail" className="icon">
                            <a href="mailto:yslim6168@naver.com" rel="noopener noreferrer" target="_blank" title="link_to_Mail">
                                <FaMediumM size="2em" />
                            </a>
                        </div>

                        <div id="facebook" className="icon">
                            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" title="link_to_Facebook">
                                <FaFacebook size="2em" />
                            </a>
                        </div>

                        <div id="instagram" className="icon">
                            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank" title="link_to_Instagram">
                                <FaInstagram size="2em" />
                            </a>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;