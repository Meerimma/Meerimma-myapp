import React from 'react';
import fu from "../../images/network/network-left.png";

const Questions = () => {
    return (
        <div className='questions'>
            <div className="container">

                <p className='questions__text1'> Learn how to get started </p>

                <h1 className='questions__title'> Frequently asked questions </h1>

                <p className='questions__text2'> Join Stacks community now to get free updates and also alot of freebies are
                    <br/>
                    waiting for you or Contact Support</p>


                <div className='questions__bottom'>

                    <div className='question__bottom-left'>
                        <ul className='questions__bottom-left-lists'>
                            <li className='questions__bottom-left-list'>
                                <a className='questions__bottom-symbol'> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3328 12.5332V5.97727L14.3231 6.57148C14.6388 6.76091 15.0483 6.65854 15.2378 6.34282C15.4272 6.02709 15.3248 5.61759 15.0091 5.42816L11.6612 3.41939L9.10037 1.87653L9.10032 1.8765C8.91417 1.76435 8.7713 1.67827 8.65023 1.61355C8.62197 1.59774 8.59328 1.58304 8.56422 1.56944C8.46345 1.52027 8.37611 1.48754 8.28637 1.46776C8.09734 1.42611 7.90152 1.42611 7.71249 1.46776C7.62252 1.48759 7.53496 1.52044 7.43386 1.56983C7.40532 1.5832 7.37714 1.59764 7.34939 1.61315C7.22816 1.67791 7.0851 1.76411 6.89856 1.87649L6.89853 1.87651L4.33389 3.42169L0.989786 5.42816C0.674066 5.61759 0.571689 6.02709 0.761121 6.34282C0.950553 6.65854 1.36006 6.76091 1.67578 6.57148L2.6661 5.97729V12.5332C2.6661 13.2799 2.6661 13.6533 2.81142 13.9385C2.93925 14.1894 3.14323 14.3934 3.39411 14.5212C3.67933 14.6665 4.05269 14.6665 4.79943 14.6665L5.99943 14.6665V10.6665C5.99943 9.56193 6.89486 8.6665 7.99943 8.6665C9.104 8.6665 9.99943 9.56193 9.99943 10.6665V14.6665L11.1994 14.6665C11.9462 14.6665 12.3195 14.6665 12.6048 14.5212C12.8556 14.3934 13.0596 14.1894 13.1874 13.9385C13.3328 13.6533 13.3328 13.2799 13.3328 12.5332Z" fill="#777E91"/>
                                </svg>
                                </a>
                                <p className='questions__bottom-name'> General</p>
                            </li>

                            <li className='questions__bottom-left-list'>
                                <a className='questions__bottom-symbol'> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00065 12.0002C9.31436 12.0002 12.0007 9.31387 12.0007 6.00016C12.0007 5.90102 11.9982 5.80244 11.9935 5.70448C11.9839 5.50612 12.1376 5.3335 12.3362 5.3335H13.334C14.0704 5.3335 14.6673 5.93045 14.6673 6.66683V13.3335C14.6673 14.0699 14.0704 14.6668 13.334 14.6668H6.66732C5.93094 14.6668 5.33398 14.0699 5.33398 13.3335V12.3358C5.33398 12.1372 5.50661 11.9834 5.70497 11.993C5.80293 11.9978 5.90151 12.0002 6.00065 12.0002Z" fill="#777E91"/>
                                    <path d="M10.6673 6.00016C10.6673 8.57749 8.57798 10.6668 6.00065 10.6668C3.42332 10.6668 1.33398 8.57749 1.33398 6.00016C1.33398 3.42283 3.42332 1.3335 6.00065 1.3335C8.57798 1.3335 10.6673 3.42283 10.6673 6.00016Z" fill="#777E91"/>
                                </svg>

                                </a>
                                <p className='questions__bottom-name'> Support</p>
                            </li>

                            <li className='questions__bottom-left-list'>
                                <a className='questions__bottom-symbol'> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.76412 8.94322L9.00162 0.306676C9.4142 -0.264593 10.3155 0.11151 10.1997 0.806602L9.33407 6.00021H12.6969C13.2407 6.00021 13.5558 6.61632 13.2373 7.0572L6.99985 15.6937C6.58726 16.265 5.68595 15.8889 5.8018 15.1938L6.6674 10.0002H3.30457C2.76072 10.0002 2.4457 9.3841 2.76412 8.94322Z" fill="#777E91"/>
                                </svg>

                                </a>
                                <p className='questions__bottom-name'> Hosting </p>
                            </li>

                            <li className='questions__bottom-left-list'>
                                <a className='questions__bottom-symbol'> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1105 11.2221L11.2216 14.111C10.7307 14.6019 9.93478 14.6019 9.44386 14.111C9.1984 13.8656 9.1984 13.4676 9.44386 13.2221L13.2216 9.44435C13.4671 9.19889 13.8651 9.19889 14.1105 9.44435C14.6014 9.93527 14.6014 10.7312 14.1105 11.2221Z" fill="#777E91"/>
                                    <path d="M6.00925 7.17694C6.02307 7.05872 5.99346 6.93636 5.9093 6.85219L1.9972 2.94009C1.82778 2.77067 1.55099 2.85618 1.58487 3.09337L2.36059 8.52337C2.55163 9.86065 3.40472 11.0112 4.62884 11.5824L7.24365 12.8027C7.49769 12.9212 7.79875 12.8682 7.99698 12.6699L12.6699 7.99698C12.8682 7.79875 12.9212 7.49769 12.8027 7.24365L11.5824 4.62885C11.0112 3.40473 9.86065 2.55163 8.52337 2.36059L3.09337 1.58488C2.8561 1.55098 2.77058 1.82785 2.94005 1.99733L6.85205 5.90932C6.93622 5.99349 7.0586 6.0231 7.17683 6.00926C7.22821 6.00325 7.28049 6.00016 7.33349 6.00016C8.06987 6.00016 8.66682 6.59711 8.66682 7.33349C8.66682 8.06987 8.06987 8.66682 7.33349 8.66682C6.59711 8.66682 6.00015 8.06987 6.00015 7.33349C6.00015 7.28053 6.00324 7.22829 6.00925 7.17694Z" fill="#777E91"/>
                                </svg>

                                </a>
                                <p className='questions__bottom-name'> Product</p>
                            </li>


                        </ul>

                    </div>

                    <div className='question__bottom-right'>
                        <h2 className='questions__bottom-text'>How does it work </h2>
                        <p className='questions__bottom-info'> The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks:<br/>
                            eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in<br/>
                            React Native. Mix-and-match dozens of responsive elements to quickly configure your <br/>
                            favorite landing page layouts or hit the ground running with 10 pre-built templates, all in <br/>
                            light or dark mode." </p>

                        <button className='questions__bottom-btn'>Learn more</button>

                        <h2 className='questions__bottom-text'> How to start with Stacks</h2>

                        <h2 className='questions__bottom-text'> Dose it suppport Dark Mode</h2>

                        <h2 className='questions__bottom-text'>Does it support Auto-Layout</h2>

                        <h2 className='questions__bottom-text'> What is Stacks Design System</h2>
                    </div>

                </div>


            </div>


            <div className='questions__hotbid'>

                <h1 className='hotbid__title'>Hot bid</h1>

                <ul className='question__card'>

                    <li className='question__card-first'>
                        <div className='question__uper'>
                            <img className='question__image' src={fu} alt=''/>
                        </div>

                        <ul className='question__bottom'>
                            <li className='question__bottom-left'>
                                <h1 className='question__bottom-title'> Amazing digital art </h1>
                                <a className='question__bottom-symbol'> <svg width="177" height="24" viewBox="0 0 177 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_21100_4929)">
                                        <rect width="24" height="24" rx="12" fill="#9757D7"/>
                                        <rect y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="1" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip1_21100_4929)">
                                        <rect x="16" width="24" height="24" rx="12" fill="#EF466F"/>
                                        <rect x="16" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="17" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip2_21100_4929)">
                                        <rect x="32" width="24" height="24" rx="12" fill="#45B36B"/>
                                        <rect x="32" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="33" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <defs>
                                        <clipPath id="clip0_21100_4929">
                                            <rect width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip1_21100_4929">
                                            <rect x="16" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip2_21100_4929">
                                            <rect x="32" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg></a>
                                <p className='question__grey'> Highest bid</p>
                            </li>

                            <li className='question__bottom-right'>
                                <a> <svg width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.468 16.356C8.74 16.14 8.864 16.04 8.84 16.056C9.624 15.408 10.24 14.876 10.688 14.46C11.144 14.044 11.528 13.608 11.84 13.152C12.152 12.696 12.308 12.252 12.308 11.82C12.308 11.492 12.232 11.236 12.08 11.052C11.928 10.868 11.7 10.776 11.396 10.776C11.092 10.776 10.852 10.892 10.676 11.124C10.508 11.348 10.424 11.668 10.424 12.084H8.444C8.46 11.404 8.604 10.836 8.876 10.38C9.156 9.924 9.52 9.588 9.968 9.372C10.424 9.156 10.928 9.048 11.48 9.048C12.432 9.048 13.148 9.292 13.628 9.78C14.116 10.268 14.36 10.904 14.36 11.688C14.36 12.544 14.068 13.34 13.484 14.076C12.9 14.804 12.156 15.516 11.252 16.212H14.492V17.88H8.468V16.356ZM16.5595 18.096C16.1995 18.096 15.9035 17.992 15.6715 17.784C15.4475 17.568 15.3355 17.304 15.3355 16.992C15.3355 16.672 15.4475 16.404 15.6715 16.188C15.9035 15.972 16.1995 15.864 16.5595 15.864C16.9115 15.864 17.1995 15.972 17.4235 16.188C17.6555 16.404 17.7715 16.672 17.7715 16.992C17.7715 17.304 17.6555 17.568 17.4235 17.784C17.1995 17.992 16.9115 18.096 16.5595 18.096ZM18.8302 16.44V14.784L22.6222 9.36H24.9142V14.664H25.8982V16.44H24.9142V18H22.8622V16.44H18.8302ZM23.0062 11.616L20.9902 14.664H23.0062V11.616ZM33.0713 11.028H29.3273V12.684C29.4873 12.508 29.7113 12.364 29.9993 12.252C30.2873 12.14 30.5993 12.084 30.9353 12.084C31.5353 12.084 32.0313 12.22 32.4233 12.492C32.8233 12.764 33.1153 13.116 33.2993 13.548C33.4833 13.98 33.5753 14.448 33.5753 14.952C33.5753 15.888 33.3113 16.632 32.7833 17.184C32.2553 17.728 31.5113 18 30.5513 18C29.9113 18 29.3553 17.892 28.8833 17.676C28.4113 17.452 28.0473 17.144 27.7913 16.752C27.5353 16.36 27.3953 15.908 27.3713 15.396H29.3753C29.4233 15.644 29.5393 15.852 29.7233 16.02C29.9073 16.18 30.1593 16.26 30.4793 16.26C30.8553 16.26 31.1353 16.14 31.3193 15.9C31.5033 15.66 31.5953 15.34 31.5953 14.94C31.5953 14.548 31.4993 14.248 31.3073 14.04C31.1153 13.832 30.8353 13.728 30.4673 13.728C30.1953 13.728 29.9713 13.796 29.7953 13.932C29.6193 14.06 29.5033 14.232 29.4473 14.448H27.4673V9.228H33.0713V11.028ZM39.5069 11.22V12.924H42.2549V14.508H39.5069V16.356H42.6149V18H37.4549V9.576H42.6149V11.22H39.5069ZM50.0071 9.576V11.22H47.7751V18H45.7231V11.22H43.4911V9.576H50.0071ZM58.333 9.576V18H56.281V14.532H53.089V18H51.037V9.576H53.089V12.876H56.281V9.576H58.333Z" fill="#45B36B"/>
                                    <rect x="1" y="1" width="66" height="24" rx="3" stroke="#45B36B" stroke-width="2"/>
                                </svg></a>
                                <p className=''> 3 in stock </p>
                                <p className='question__grey'>New bid 🔥</p>
                            </li>
                        </ul>
                    </li>

                    <li className='question__card-first'>
                        <div className='question__uper'>
                            <img className='question__image' src={fu} alt=''/>
                        </div>

                        <ul className='question__bottom'>
                            <li className='question__bottom-left'>
                                <h1 className='question__bottom-title'> Amazing digital art </h1>
                                <a className='question__bottom-symbol'> <svg width="177" height="24" viewBox="0 0 177 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_21100_4929)">
                                        <rect width="24" height="24" rx="12" fill="#9757D7"/>
                                        <rect y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="1" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip1_21100_4929)">
                                        <rect x="16" width="24" height="24" rx="12" fill="#EF466F"/>
                                        <rect x="16" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="17" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip2_21100_4929)">
                                        <rect x="32" width="24" height="24" rx="12" fill="#45B36B"/>
                                        <rect x="32" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="33" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <defs>
                                        <clipPath id="clip0_21100_4929">
                                            <rect width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip1_21100_4929">
                                            <rect x="16" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip2_21100_4929">
                                            <rect x="32" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg></a>
                                <p className='question__grey'> Highest bid</p>
                            </li>

                            <li className='question__bottom-right'>
                                <a> <svg width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.468 16.356C8.74 16.14 8.864 16.04 8.84 16.056C9.624 15.408 10.24 14.876 10.688 14.46C11.144 14.044 11.528 13.608 11.84 13.152C12.152 12.696 12.308 12.252 12.308 11.82C12.308 11.492 12.232 11.236 12.08 11.052C11.928 10.868 11.7 10.776 11.396 10.776C11.092 10.776 10.852 10.892 10.676 11.124C10.508 11.348 10.424 11.668 10.424 12.084H8.444C8.46 11.404 8.604 10.836 8.876 10.38C9.156 9.924 9.52 9.588 9.968 9.372C10.424 9.156 10.928 9.048 11.48 9.048C12.432 9.048 13.148 9.292 13.628 9.78C14.116 10.268 14.36 10.904 14.36 11.688C14.36 12.544 14.068 13.34 13.484 14.076C12.9 14.804 12.156 15.516 11.252 16.212H14.492V17.88H8.468V16.356ZM16.5595 18.096C16.1995 18.096 15.9035 17.992 15.6715 17.784C15.4475 17.568 15.3355 17.304 15.3355 16.992C15.3355 16.672 15.4475 16.404 15.6715 16.188C15.9035 15.972 16.1995 15.864 16.5595 15.864C16.9115 15.864 17.1995 15.972 17.4235 16.188C17.6555 16.404 17.7715 16.672 17.7715 16.992C17.7715 17.304 17.6555 17.568 17.4235 17.784C17.1995 17.992 16.9115 18.096 16.5595 18.096ZM18.8302 16.44V14.784L22.6222 9.36H24.9142V14.664H25.8982V16.44H24.9142V18H22.8622V16.44H18.8302ZM23.0062 11.616L20.9902 14.664H23.0062V11.616ZM33.0713 11.028H29.3273V12.684C29.4873 12.508 29.7113 12.364 29.9993 12.252C30.2873 12.14 30.5993 12.084 30.9353 12.084C31.5353 12.084 32.0313 12.22 32.4233 12.492C32.8233 12.764 33.1153 13.116 33.2993 13.548C33.4833 13.98 33.5753 14.448 33.5753 14.952C33.5753 15.888 33.3113 16.632 32.7833 17.184C32.2553 17.728 31.5113 18 30.5513 18C29.9113 18 29.3553 17.892 28.8833 17.676C28.4113 17.452 28.0473 17.144 27.7913 16.752C27.5353 16.36 27.3953 15.908 27.3713 15.396H29.3753C29.4233 15.644 29.5393 15.852 29.7233 16.02C29.9073 16.18 30.1593 16.26 30.4793 16.26C30.8553 16.26 31.1353 16.14 31.3193 15.9C31.5033 15.66 31.5953 15.34 31.5953 14.94C31.5953 14.548 31.4993 14.248 31.3073 14.04C31.1153 13.832 30.8353 13.728 30.4673 13.728C30.1953 13.728 29.9713 13.796 29.7953 13.932C29.6193 14.06 29.5033 14.232 29.4473 14.448H27.4673V9.228H33.0713V11.028ZM39.5069 11.22V12.924H42.2549V14.508H39.5069V16.356H42.6149V18H37.4549V9.576H42.6149V11.22H39.5069ZM50.0071 9.576V11.22H47.7751V18H45.7231V11.22H43.4911V9.576H50.0071ZM58.333 9.576V18H56.281V14.532H53.089V18H51.037V9.576H53.089V12.876H56.281V9.576H58.333Z" fill="#45B36B"/>
                                    <rect x="1" y="1" width="66" height="24" rx="3" stroke="#45B36B" stroke-width="2"/>
                                </svg></a>
                                <p className=''> 3 in stock </p>
                                <p className='question__grey'>New bid 🔥</p>
                            </li>
                        </ul>
                    </li>

                    <li className='question__card-first'>
                        <div className='question__uper'>
                            <img className='question__image' src={fu} alt=''/>
                        </div>

                        <ul className='question__bottom'>
                            <li className='question__bottom-left'>
                                <h1 className='question__bottom-title'> Amazing digital art </h1>
                                <a className='question__bottom-symbol'> <svg width="177" height="24" viewBox="0 0 177 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_21100_4929)">
                                        <rect width="24" height="24" rx="12" fill="#9757D7"/>
                                        <rect y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="1" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip1_21100_4929)">
                                        <rect x="16" width="24" height="24" rx="12" fill="#EF466F"/>
                                        <rect x="16" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="17" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip2_21100_4929)">
                                        <rect x="32" width="24" height="24" rx="12" fill="#45B36B"/>
                                        <rect x="32" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="33" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <defs>
                                        <clipPath id="clip0_21100_4929">
                                            <rect width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip1_21100_4929">
                                            <rect x="16" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip2_21100_4929">
                                            <rect x="32" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg></a>
                                <p className='question__grey'> Highest bid</p>
                            </li>

                            <li className='question__bottom-right'>
                                <a> <svg width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.468 16.356C8.74 16.14 8.864 16.04 8.84 16.056C9.624 15.408 10.24 14.876 10.688 14.46C11.144 14.044 11.528 13.608 11.84 13.152C12.152 12.696 12.308 12.252 12.308 11.82C12.308 11.492 12.232 11.236 12.08 11.052C11.928 10.868 11.7 10.776 11.396 10.776C11.092 10.776 10.852 10.892 10.676 11.124C10.508 11.348 10.424 11.668 10.424 12.084H8.444C8.46 11.404 8.604 10.836 8.876 10.38C9.156 9.924 9.52 9.588 9.968 9.372C10.424 9.156 10.928 9.048 11.48 9.048C12.432 9.048 13.148 9.292 13.628 9.78C14.116 10.268 14.36 10.904 14.36 11.688C14.36 12.544 14.068 13.34 13.484 14.076C12.9 14.804 12.156 15.516 11.252 16.212H14.492V17.88H8.468V16.356ZM16.5595 18.096C16.1995 18.096 15.9035 17.992 15.6715 17.784C15.4475 17.568 15.3355 17.304 15.3355 16.992C15.3355 16.672 15.4475 16.404 15.6715 16.188C15.9035 15.972 16.1995 15.864 16.5595 15.864C16.9115 15.864 17.1995 15.972 17.4235 16.188C17.6555 16.404 17.7715 16.672 17.7715 16.992C17.7715 17.304 17.6555 17.568 17.4235 17.784C17.1995 17.992 16.9115 18.096 16.5595 18.096ZM18.8302 16.44V14.784L22.6222 9.36H24.9142V14.664H25.8982V16.44H24.9142V18H22.8622V16.44H18.8302ZM23.0062 11.616L20.9902 14.664H23.0062V11.616ZM33.0713 11.028H29.3273V12.684C29.4873 12.508 29.7113 12.364 29.9993 12.252C30.2873 12.14 30.5993 12.084 30.9353 12.084C31.5353 12.084 32.0313 12.22 32.4233 12.492C32.8233 12.764 33.1153 13.116 33.2993 13.548C33.4833 13.98 33.5753 14.448 33.5753 14.952C33.5753 15.888 33.3113 16.632 32.7833 17.184C32.2553 17.728 31.5113 18 30.5513 18C29.9113 18 29.3553 17.892 28.8833 17.676C28.4113 17.452 28.0473 17.144 27.7913 16.752C27.5353 16.36 27.3953 15.908 27.3713 15.396H29.3753C29.4233 15.644 29.5393 15.852 29.7233 16.02C29.9073 16.18 30.1593 16.26 30.4793 16.26C30.8553 16.26 31.1353 16.14 31.3193 15.9C31.5033 15.66 31.5953 15.34 31.5953 14.94C31.5953 14.548 31.4993 14.248 31.3073 14.04C31.1153 13.832 30.8353 13.728 30.4673 13.728C30.1953 13.728 29.9713 13.796 29.7953 13.932C29.6193 14.06 29.5033 14.232 29.4473 14.448H27.4673V9.228H33.0713V11.028ZM39.5069 11.22V12.924H42.2549V14.508H39.5069V16.356H42.6149V18H37.4549V9.576H42.6149V11.22H39.5069ZM50.0071 9.576V11.22H47.7751V18H45.7231V11.22H43.4911V9.576H50.0071ZM58.333 9.576V18H56.281V14.532H53.089V18H51.037V9.576H53.089V12.876H56.281V9.576H58.333Z" fill="#45B36B"/>
                                    <rect x="1" y="1" width="66" height="24" rx="3" stroke="#45B36B" stroke-width="2"/>
                                </svg></a>
                                <p className=''> 3 in stock </p>
                                <p className='question__grey'>New bid 🔥</p>
                            </li>
                        </ul>
                    </li>

                    <li className='question__card-first'>
                        <div className='question__uper'>
                            <img className='question__image' src={fu} alt=''/>
                        </div>

                        <ul className='question__bottom'>
                            <li className='question__bottom-left'>
                                <h1 className='question__bottom-title'> Amazing digital art </h1>
                                <a className='question__bottom-symbol'> <svg width="177" height="24" viewBox="0 0 177 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_21100_4929)">
                                        <rect width="24" height="24" rx="12" fill="#9757D7"/>
                                        <rect y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="1" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip1_21100_4929)">
                                        <rect x="16" width="24" height="24" rx="12" fill="#EF466F"/>
                                        <rect x="16" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="17" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <g clip-path="url(#clip2_21100_4929)">
                                        <rect x="32" width="24" height="24" rx="12" fill="#45B36B"/>
                                        <rect x="32" y="-6.5" width="24" height="35.9956"/>
                                    </g>
                                    <rect x="33" y="1" width="22" height="22" rx="11" stroke="#FCFCFD" stroke-width="2"/>
                                    <defs>
                                        <clipPath id="clip0_21100_4929">
                                            <rect width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip1_21100_4929">
                                            <rect x="16" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip2_21100_4929">
                                            <rect x="32" width="24" height="24" rx="12" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg></a>
                                <p className='question__grey'> Highest bid</p>
                            </li>

                            <li className='question__bottom-right'>
                                <a> <svg width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.468 16.356C8.74 16.14 8.864 16.04 8.84 16.056C9.624 15.408 10.24 14.876 10.688 14.46C11.144 14.044 11.528 13.608 11.84 13.152C12.152 12.696 12.308 12.252 12.308 11.82C12.308 11.492 12.232 11.236 12.08 11.052C11.928 10.868 11.7 10.776 11.396 10.776C11.092 10.776 10.852 10.892 10.676 11.124C10.508 11.348 10.424 11.668 10.424 12.084H8.444C8.46 11.404 8.604 10.836 8.876 10.38C9.156 9.924 9.52 9.588 9.968 9.372C10.424 9.156 10.928 9.048 11.48 9.048C12.432 9.048 13.148 9.292 13.628 9.78C14.116 10.268 14.36 10.904 14.36 11.688C14.36 12.544 14.068 13.34 13.484 14.076C12.9 14.804 12.156 15.516 11.252 16.212H14.492V17.88H8.468V16.356ZM16.5595 18.096C16.1995 18.096 15.9035 17.992 15.6715 17.784C15.4475 17.568 15.3355 17.304 15.3355 16.992C15.3355 16.672 15.4475 16.404 15.6715 16.188C15.9035 15.972 16.1995 15.864 16.5595 15.864C16.9115 15.864 17.1995 15.972 17.4235 16.188C17.6555 16.404 17.7715 16.672 17.7715 16.992C17.7715 17.304 17.6555 17.568 17.4235 17.784C17.1995 17.992 16.9115 18.096 16.5595 18.096ZM18.8302 16.44V14.784L22.6222 9.36H24.9142V14.664H25.8982V16.44H24.9142V18H22.8622V16.44H18.8302ZM23.0062 11.616L20.9902 14.664H23.0062V11.616ZM33.0713 11.028H29.3273V12.684C29.4873 12.508 29.7113 12.364 29.9993 12.252C30.2873 12.14 30.5993 12.084 30.9353 12.084C31.5353 12.084 32.0313 12.22 32.4233 12.492C32.8233 12.764 33.1153 13.116 33.2993 13.548C33.4833 13.98 33.5753 14.448 33.5753 14.952C33.5753 15.888 33.3113 16.632 32.7833 17.184C32.2553 17.728 31.5113 18 30.5513 18C29.9113 18 29.3553 17.892 28.8833 17.676C28.4113 17.452 28.0473 17.144 27.7913 16.752C27.5353 16.36 27.3953 15.908 27.3713 15.396H29.3753C29.4233 15.644 29.5393 15.852 29.7233 16.02C29.9073 16.18 30.1593 16.26 30.4793 16.26C30.8553 16.26 31.1353 16.14 31.3193 15.9C31.5033 15.66 31.5953 15.34 31.5953 14.94C31.5953 14.548 31.4993 14.248 31.3073 14.04C31.1153 13.832 30.8353 13.728 30.4673 13.728C30.1953 13.728 29.9713 13.796 29.7953 13.932C29.6193 14.06 29.5033 14.232 29.4473 14.448H27.4673V9.228H33.0713V11.028ZM39.5069 11.22V12.924H42.2549V14.508H39.5069V16.356H42.6149V18H37.4549V9.576H42.6149V11.22H39.5069ZM50.0071 9.576V11.22H47.7751V18H45.7231V11.22H43.4911V9.576H50.0071ZM58.333 9.576V18H56.281V14.532H53.089V18H51.037V9.576H53.089V12.876H56.281V9.576H58.333Z" fill="#45B36B"/>
                                    <rect x="1" y="1" width="66" height="24" rx="3" stroke="#45B36B" stroke-width="2"/>
                                </svg></a>
                                <p className=''> 3 in stock </p>
                                <p className='question__grey'>New bid 🔥</p>
                            </li>
                        </ul>
                    </li>


                </ul>


            </div>





        </div>





    );
};

export default Questions;