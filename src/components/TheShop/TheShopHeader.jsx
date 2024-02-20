import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import "./TheShop.css";

const TheShopMainHeader = () => {
    return (
        <Box className="mortaHeader">
            <Box className="container1">
                <Box className="mortalHeader">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            className="mkCOl"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Box className="mkHeader">
                                <Link to="/">
                                    <Avatar
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                            cursor: "pointer",
                                        }}
                                        src="https://seeklogo.com/images/W/wb-warner-bros-logo-50CFB66DB7-seeklogo.com.png"
                                    />
                                </Link>
                                <Typography
                                    className="mkColor"
                                    style={{
                                        color: "rgb(7, 7, 122)",
                                        fontSize: "22px",
                                        fontWeight: "800",
                                        cursor: "pointer",
                                        width: "200px",
                                    }}
                                >
                                    THE SHOP
                                </Typography>
                            </Box>
                            <Typography
                                id="mkCol"
                                variant="a"
                                style={{
                                    marginLeft: "-3pc",
                                    fontSize: "10px",
                                    fontWeight: "800",
                                    padding: "0 10px",
                                    cursor: "pointer",
                                }}
                            >
                                TED LASSO
                            </Typography>
                            <Typography
                                id="mkCol"
                                variant="a"
                                style={{
                                    fontSize: "10px",
                                    fontWeight: "800",
                                    cursor: "pointer",
                                }}
                            >
                                HOUSE OF THE DRAGON
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                                className=""
                            >
                                <nav id="menu">
                                    <div className="menu-item">
                                        <div className="menu-text">
                                            <a
                                                style={{
                                                    color: "black",
                                                    fontSize: "10px",
                                                }}
                                                href="#"
                                            >
                                                FEATURED
                                            </a>
                                        </div>
                                        <div className="sub-menu">
                                            <div class="icon-box">
                                                <div class="icon">
                                                    <i class="fal fa-wind-turbine"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Turbo Editor{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        Edit your code while
                                                        slowing down time.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box">
                                                <div class="icon">
                                                    <i class="fal fa-lightbulb-on"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Idea Creator{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        Think of an idea, and
                                                        have an AI create it.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box">
                                                <div class="icon">
                                                    <i class="fal fa-bomb"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Super Collider{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        Remove mass from any
                                                        object.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sub-menu-holder"></div>
                                        </div>
                                    </div>
                                    <div class="menu-item highlight">
                                        <div class="menu-text">
                                            <a
                                                className="menuu"
                                                style={{
                                                    color: "black",
                                                    fontSize: "10px",
                                                }}
                                                href="#"
                                            >
                                                SHOP BY TITLE
                                            </a>
                                        </div>
                                        <div class="sub-menu double">
                                            <div class="icon-box gb a">
                                                <div class="icon">
                                                    <i class="far fa-question-circle"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Consult{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        From Professionals
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box gb b">
                                                <div class="icon">
                                                    <i class="far fa-users-class"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Teach{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        In Classroom
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box gb c">
                                                <div class="icon">
                                                    <i class="far fa-school"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Learn{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        By Video
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box gb d">
                                                <div class="icon">
                                                    <i class="far fa-chess-rook"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Keep{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        The Castle
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box gb e">
                                                <div class="icon">
                                                    <i class="far fa-video-plus"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Become{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        A Creator
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box gb f">
                                                <div class="icon">
                                                    <i class="far fa-cat"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Understand{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        Our Journey
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bottom-container">
                                                Ready to dive in?{" "}
                                                <a href="#">Get Started</a>
                                            </div>
                                            <div class="sub-menu-holder"></div>
                                        </div>
                                    </div>
                                    <div class="menu-item highlight">
                                        <div class="menu-text">
                                            <a
                                                style={{
                                                    color: "black",
                                                    fontSize: "10px",
                                                }}
                                                href="#"
                                            >
                                                CATEGORIES
                                            </a>
                                        </div>
                                        <div class="sub-menu triple">
                                            <div class="top-container gb c icon-box">
                                                <div class="icon big">
                                                    <i class="far fa-book"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Where to start
                                                    </div>
                                                    <div class="sub-text">
                                                        Find out where to begin
                                                        below
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="box">
                                                <h3>Your Journey</h3>
                                                <a href="#">Get Started</a>
                                                <a href="#">Learn the Basics</a>
                                                <a href="#">Get Advanced</a>
                                                <a href="#">Start Teaching</a>
                                            </div>
                                            <div class="box">
                                                <h3>Your Tools</h3>
                                                <a href="#">Turbo Editor</a>
                                                <a href="#">Time Stopper</a>
                                                <a href="#">Brain Enhancer</a>
                                                <a href="#">Network Maker</a>
                                            </div>
                                            <div class="icon-box flat">
                                                <div class="icon">
                                                    <i class="fal fa-plug"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        API Guide{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box flat">
                                                <div class="icon">
                                                    <i class="fal fa-comments"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Support Line{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box flat">
                                                <div class="icon">
                                                    <i class="fal fa-phone-volume"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Live Chat{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box flat">
                                                <div class="icon">
                                                    <i class="fal fa-book-spells"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Documentation{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu-item">
                                        <div class="menu-text">
                                            <a
                                                style={{
                                                    color: "black",
                                                    fontSize: "10px",
                                                }}
                                                href="#"
                                            >
                                                EXPERIENCES
                                            </a>
                                        </div>
                                        <div class="sub-menu">
                                            <div class="icon-box">
                                                <div class="icon">
                                                    <i class="far fa-satellite"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Forum{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        Join our passionate
                                                        community.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box">
                                                <div class="icon">
                                                    <i class="fab fa-twitter-square"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Twitter{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        Follow us on twitter.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="icon-box">
                                                <div class="icon">
                                                    <i class="fab fa-twitch"></i>
                                                </div>
                                                <div class="text">
                                                    <div class="title">
                                                        Live Stream{" "}
                                                        <i class="far fa-arrow-right"></i>
                                                    </div>
                                                    <div class="sub-text">
                                                        We stream content every
                                                        day.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sub-menu-holder"></div>
                                        </div>
                                    </div>
                                    <div id="sub-menu-container">
                                        <div id="sub-menu-holder">
                                            <div id="sub-menu-bottom"></div>
                                        </div>
                                    </div>
                                </nav>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                ml: "25pc",
                                gap: "10px",
                            }}
                        >
                            <>
                                <div
                                    style={{ marginLeft: "-15pc" }}
                                    class="input-container"
                                >
                                    <input
                                        placeholder="Search something..."
                                        className="input"
                                        name="text"
                                        type="text"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="icon"
                                    >
                                        <g
                                            stroke-width="0"
                                            id="SVGRepo_bgCarrier"
                                        ></g>
                                        <g
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                            id="SVGRepo_tracerCarrier"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <rect fill="white"></rect>{" "}
                                            <path
                                                d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                </div>
                            </>

                            <PermContactCalendarIcon className="PermContactCalendarIcon" />
                            <FavoriteIcon className="FavoriteIcon" />
                            <HttpsIcon className="HttpsIcon" />
                            <Link to="/admin">
                                <AdminPanelSettingsIcon className="adminThe" />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TheShopMainHeader;
