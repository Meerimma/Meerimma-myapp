import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className='header__left'>

                        <a href='/'>
                            <h1 className='header__title'>  <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.792 10.352C0.792 8.976 1.072 7.776 1.632 6.752C2.192 5.712 2.968 4.912 3.96 4.352C4.952 3.776 6.088 3.488 7.368 3.488C9.016 3.488 10.376 3.904 11.448 4.736C12.536 5.552 13.264 6.704 13.632 8.192H10.008C9.816 7.616 9.488 7.168 9.024 6.848C8.576 6.512 8.016 6.344 7.344 6.344C6.384 6.344 5.624 6.696 5.064 7.4C4.504 8.088 4.224 9.072 4.224 10.352C4.224 11.616 4.504 12.6 5.064 13.304C5.624 13.992 6.384 14.336 7.344 14.336C8.704 14.336 9.592 13.728 10.008 12.512H13.632C13.264 13.952 12.536 15.096 11.448 15.944C10.36 16.792 9 17.216 7.368 17.216C6.088 17.216 4.952 16.936 3.96 16.376C2.968 15.8 2.192 15 1.632 13.976C1.072 12.936 0.792 11.728 0.792 10.352ZM18.9735 5.768C19.4055 5.064 19.9655 4.512 20.6535 4.112C21.3575 3.712 22.1575 3.512 23.0535 3.512V7.04H22.1655C21.1095 7.04 20.3095 7.288 19.7655 7.784C19.2375 8.28 18.9735 9.144 18.9735 10.376V17H15.6135V3.704H18.9735V5.768ZM37.5566 3.704L29.3246 23.288H25.7486L28.6286 16.664L23.3006 3.704H27.0686L30.5006 12.992L33.9806 3.704H37.5566ZM42.2479 5.624C42.6799 5.016 43.2719 4.512 44.0239 4.112C44.7919 3.696 45.6639 3.488 46.6399 3.488C47.7759 3.488 48.7999 3.768 49.7119 4.328C50.6399 4.888 51.3679 5.688 51.8959 6.728C52.4399 7.752 52.7119 8.944 52.7119 10.304C52.7119 11.664 52.4399 12.872 51.8959 13.928C51.3679 14.968 50.6399 15.776 49.7119 16.352C48.7999 16.928 47.7759 17.216 46.6399 17.216C45.6639 17.216 44.7999 17.016 44.0479 16.616C43.3119 16.216 42.7119 15.712 42.2479 15.104V23.336H38.8879V3.704H42.2479V5.624ZM49.2799 10.304C49.2799 9.504 49.1119 8.816 48.7759 8.24C48.4559 7.648 48.0239 7.2 47.4799 6.896C46.9519 6.592 46.3759 6.44 45.7519 6.44C45.1439 6.44 44.5679 6.6 44.0239 6.92C43.4959 7.224 43.0639 7.672 42.7279 8.264C42.4079 8.856 42.2479 9.552 42.2479 10.352C42.2479 11.152 42.4079 11.848 42.7279 12.44C43.0639 13.032 43.4959 13.488 44.0239 13.808C44.5679 14.112 45.1439 14.264 45.7519 14.264C46.3759 14.264 46.9519 14.104 47.4799 13.784C48.0239 13.464 48.4559 13.008 48.7759 12.416C49.1119 11.824 49.2799 11.12 49.2799 10.304ZM58.5855 6.464V12.896C58.5855 13.344 58.6895 13.672 58.8975 13.88C59.1215 14.072 59.4895 14.168 60.0015 14.168H61.5615V17H59.4495C56.6175 17 55.2015 15.624 55.2015 12.872V6.464H53.6175V3.704H55.2015V0.415999H58.5855V3.704H61.5615V6.464H58.5855ZM75.8582 10.064C75.8582 10.544 75.8262 10.976 75.7622 11.36H66.0422C66.1222 12.32 66.4582 13.072 67.0502 13.616C67.6422 14.16 68.3702 14.432 69.2342 14.432C70.4822 14.432 71.3702 13.896 71.8982 12.824H75.5222C75.1382 14.104 74.4022 15.16 73.3142 15.992C72.2262 16.808 70.8902 17.216 69.3062 17.216C68.0262 17.216 66.8742 16.936 65.8502 16.376C64.8422 15.8 64.0502 14.992 63.4742 13.952C62.9142 12.912 62.6342 11.712 62.6342 10.352C62.6342 8.976 62.9142 7.768 63.4742 6.728C64.0342 5.688 64.8182 4.888 65.8262 4.328C66.8342 3.768 67.9942 3.488 69.3062 3.488C70.5702 3.488 71.6982 3.76 72.6902 4.304C73.6982 4.848 74.4742 5.624 75.0182 6.632C75.5782 7.624 75.8582 8.768 75.8582 10.064ZM72.3782 9.104C72.3622 8.24 72.0502 7.552 71.4422 7.04C70.8342 6.512 70.0902 6.248 69.2102 6.248C68.3782 6.248 67.6742 6.504 67.0982 7.016C66.5382 7.512 66.1942 8.208 66.0662 9.104H72.3782ZM81.1907 5.768C81.6227 5.064 82.1827 4.512 82.8707 4.112C83.5747 3.712 84.3747 3.512 85.2707 3.512V7.04H84.3827C83.3267 7.04 82.5267 7.288 81.9827 7.784C81.4547 8.28 81.1907 9.144 81.1907 10.376V17H77.8307V3.704H81.1907V5.768Z" fill="#23262F"/>
                            </svg> </h1>
                        </a>

                        <p className='header__text-1'> Discover </p>
                        <a href='/questions'>
                            <p className='header__text-2'> How it work</p>
                        </a>
                    </div>


                    <div className='header__right'>

                        <label htmlFor="" className='header__search' >
                            <input className='header__search-field' type="text"/>
                            <a> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4212 12.6002C10.2923 13.4778 8.87376 14.0003 7.33317 14.0003C3.65127 14.0003 0.666504 11.0156 0.666504 7.33366C0.666504 3.65176 3.65127 0.666992 7.33317 0.666992C11.0151 0.666992 13.9998 3.65176 13.9998 7.33366C13.9998 8.87425 13.4773 10.2928 12.5997 11.4217L17.0891 15.9111C17.4145 16.2365 17.4145 16.7641 17.0891 17.0896C16.7637 17.415 16.236 17.415 15.9106 17.0896L11.4212 12.6002ZM12.3332 7.33366C12.3332 10.0951 10.0946 12.3337 7.33317 12.3337C4.57175 12.3337 2.33317 10.0951 2.33317 7.33366C2.33317 4.57224 4.57175 2.33366 7.33317 2.33366C10.0946 2.33366 12.3332 4.57224 12.3332 7.33366Z" fill="#777E91"/>
                            </svg> </a>
                        </label>

                        <a href='/profile' className='header__symbol'> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="28" width="12" height="12" rx="6" fill="#45B36B"/>
                            <g clip-path="url(#clip0_20970_7996)">
                                <path d="M29 26.0233C29 26.5113 28.6043 26.907 28.1163 26.907H11.8837C11.3957 26.907 11 26.5113 11 26.0233C11 25.5352 11.3957 25.1395 11.8837 25.1395H11.9V18.9809C11.9 14.5729 15.527 11 20 11C24.473 11 28.1 14.5729 28.1 18.9809V25.1395H28.1163C28.6043 25.1395 29 25.5352 29 26.0233ZM13.7 25.1395H26.3V18.9809C26.3 15.5494 23.4794 12.7674 20 12.7674C16.5206 12.7674 13.7 15.5494 13.7 18.9809V25.1395ZM17.976 28.7558C17.7312 28.2608 18.1977 27.7907 18.75 27.7907H21.25C21.8023 27.7907 22.2688 28.2608 22.024 28.7558C21.9155 28.9751 21.7699 29.1773 21.591 29.3529C21.169 29.7672 20.5967 30 20 30C19.4033 30 18.831 29.7672 18.409 29.3529C18.2301 29.1773 18.0845 28.9751 17.976 28.7558Z" fill="#777E91"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_20970_7996">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg> </a>


                        <a href='/about'>
                            <button className='header__btn-1'> Upload </button>
                        </a>


                        <a href='/connect'>
                            <button className='header__btn-2'> Connect Wallet </button>
                        </a>



                    </div>

                </nav>


            </div>
        </header>
    );
};

export default Header;