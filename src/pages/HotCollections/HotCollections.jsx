import React from 'react';
import li from '../../images/little/littlepic.png'
import fu from '../../images/future/future1.png'
import lit from '../../images/hotcollections/little.png'
import litt from '../../images/hotcollections/little2.png'
import littl from '../../images/hotcollections/little3.png'
import net from '../../images/network/network-left.png'
import hot from '../../images/hotcollections/main2.png'



const HotCollections = () => {
    return (
        <selection className='hotcollections'>
            <div className='hot'>
               <div className='container'>
                    <h1 className='hotcollections__name'> Hot Collections</h1>

                <ul className='hotcollections__card-list'>

                    <li className='hotcollections__card'>
                        <img src={fu} alt='' className='hotcollections__card-mainphoto'/>

                        <div className='hotcollections__card-downphotoes'>
                            <img src={lit} alt='' className='hotcollections__card-anothph'/>
                            <img src={litt} alt=''  className='hotcollections__card-anothph'/>
                            <img src={littl} alt=''  className='hotcollections__card-anothph'/>


                            <div className='hotcollections__person'>
                                <h1 className='hotcolllections__person-title'>Awesome collection</h1>

                                <div className='hotcollections__person-downlist'>
                                    <img src={li} alt='' className='hotcollections__person-photo'/>
                                    <p className='future__person-text'> By Kennith Olson</p>
                                    <a> <svg width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.468 7.356C0.74 7.14 0.864 7.04 0.84 7.056C1.624 6.408 2.24 5.876 2.688 5.46C3.144 5.044 3.528 4.608 3.84 4.152C4.152 3.696 4.308 3.252 4.308 2.82C4.308 2.492 4.232 2.236 4.08 2.052C3.928 1.868 3.7 1.776 3.396 1.776C3.092 1.776 2.852 1.892 2.676 2.124C2.508 2.348 2.424 2.668 2.424 3.084H0.444C0.46 2.404 0.604 1.836 0.876 1.38C1.156 0.924 1.52 0.588 1.968 0.372C2.424 0.155999 2.928 0.0479994 3.48 0.0479994C4.432 0.0479994 5.148 0.291999 5.628 0.779999C6.116 1.268 6.36 1.904 6.36 2.688C6.36 3.544 6.068 4.34 5.484 5.076C4.9 5.804 4.156 6.516 3.252 7.212H6.492V8.88H0.468V7.356ZM8.83547 4.296C8.08347 3.896 7.70747 3.268 7.70747 2.412C7.70747 1.98 7.81947 1.588 8.04347 1.236C8.26747 0.876 8.60747 0.592 9.06347 0.383999C9.51947 0.167999 10.0795 0.0599992 10.7435 0.0599992C11.4075 0.0599992 11.9635 0.167999 12.4115 0.383999C12.8675 0.592 13.2075 0.876 13.4315 1.236C13.6555 1.588 13.7675 1.98 13.7675 2.412C13.7675 2.844 13.6635 3.22 13.4555 3.54C13.2555 3.86 12.9835 4.112 12.6395 4.296C13.0715 4.504 13.4035 4.792 13.6355 5.16C13.8675 5.52 13.9835 5.944 13.9835 6.432C13.9835 7 13.8395 7.492 13.5515 7.908C13.2635 8.316 12.8715 8.628 12.3755 8.844C11.8875 9.06 11.3435 9.168 10.7435 9.168C10.1435 9.168 9.59547 9.06 9.09947 8.844C8.61147 8.628 8.22347 8.316 7.93547 7.908C7.64747 7.492 7.50347 7 7.50347 6.432C7.50347 5.936 7.61947 5.508 7.85147 5.148C8.08347 4.78 8.41147 4.496 8.83547 4.296ZM11.7755 2.724C11.7755 2.396 11.6795 2.144 11.4875 1.968C11.3035 1.784 11.0555 1.692 10.7435 1.692C10.4315 1.692 10.1795 1.784 9.98747 1.968C9.80347 2.152 9.71147 2.408 9.71147 2.736C9.71147 3.048 9.80747 3.296 9.99947 3.48C10.1915 3.656 10.4395 3.744 10.7435 3.744C11.0475 3.744 11.2955 3.652 11.4875 3.468C11.6795 3.284 11.7755 3.036 11.7755 2.724ZM10.7435 5.184C10.3675 5.184 10.0635 5.288 9.83147 5.496C9.59947 5.696 9.48347 5.976 9.48347 6.336C9.48347 6.672 9.59547 6.948 9.81947 7.164C10.0515 7.38 10.3595 7.488 10.7435 7.488C11.1275 7.488 11.4275 7.38 11.6435 7.164C11.8675 6.948 11.9795 6.672 11.9795 6.336C11.9795 5.984 11.8635 5.704 11.6315 5.496C11.4075 5.288 11.1115 5.184 10.7435 5.184ZM19.9757 0.576V9H17.9237V0.576H19.9757ZM27.5228 0.576V2.22H25.2908V9H23.2388V2.22H21.0068V0.576H27.5228ZM30.6046 2.22V3.924H33.3526V5.508H30.6046V7.356H33.7126V9H28.5526V0.576H33.7126V2.22H30.6046ZM44.5848 0.576V9H42.5328V3.948L40.6488 9H38.9928L37.0968 3.936V9H35.0448V0.576H37.4688L39.8328 6.408L42.1728 0.576H44.5848ZM49.1084 9.084C48.4924 9.084 47.9404 8.984 47.4524 8.784C46.9644 8.584 46.5724 8.288 46.2764 7.896C45.9884 7.504 45.8364 7.032 45.8204 6.48H48.0044C48.0364 6.792 48.1444 7.032 48.3284 7.2C48.5124 7.36 48.7524 7.44 49.0484 7.44C49.3524 7.44 49.5924 7.372 49.7684 7.236C49.9444 7.092 50.0324 6.896 50.0324 6.648C50.0324 6.44 49.9604 6.268 49.8164 6.132C49.6804 5.996 49.5084 5.884 49.3004 5.796C49.1004 5.708 48.8124 5.608 48.4364 5.496C47.8924 5.328 47.4484 5.16 47.1044 4.992C46.7604 4.824 46.4644 4.576 46.2164 4.248C45.9684 3.92 45.8444 3.492 45.8444 2.964C45.8444 2.18 46.1284 1.568 46.6964 1.128C47.2644 0.68 48.0044 0.456 48.9164 0.456C49.8444 0.456 50.5924 0.68 51.1604 1.128C51.7284 1.568 52.0324 2.184 52.0724 2.976H49.8524C49.8364 2.704 49.7364 2.492 49.5524 2.34C49.3684 2.18 49.1324 2.1 48.8444 2.1C48.5964 2.1 48.3964 2.168 48.2444 2.304C48.0924 2.432 48.0164 2.62 48.0164 2.868C48.0164 3.14 48.1444 3.352 48.4004 3.504C48.6564 3.656 49.0564 3.82 49.6004 3.996C50.1444 4.18 50.5844 4.356 50.9204 4.524C51.2644 4.692 51.5604 4.936 51.8084 5.256C52.0564 5.576 52.1804 5.988 52.1804 6.492C52.1804 6.972 52.0564 7.408 51.8084 7.8C51.5684 8.192 51.2164 8.504 50.7524 8.736C50.2884 8.968 49.7404 9.084 49.1084 9.084Z" fill="#23262F"/>
                                    </svg></a>

                                </div>
                            </div>


                        </div>




                    </li>

                    <li className='hotcollections__card'>
                        <img src={hot} alt='' className='hotcollections__card-mainphoto'/>

                        <div className='hotcollections__card-downphotoes'>
                            <img src={lit} alt='' className='hotcollections__card-anothph'/>
                            <img src={litt} alt=''  className='hotcollections__card-anothph'/>
                            <img src={littl} alt=''  className='hotcollections__card-anothph'/>


                            <div className='hotcollections__person'>
                                <h1 className='hotcolllections__person-title'>Awesome collection</h1>

                                <div className='hotcollections__person-downlist'>
                                    <img src={li} alt='' className='hotcollections__person-photo'/>
                                    <p className='future__person-text'> By Kennith Olson</p>
                                    <a> <svg width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.468 7.356C0.74 7.14 0.864 7.04 0.84 7.056C1.624 6.408 2.24 5.876 2.688 5.46C3.144 5.044 3.528 4.608 3.84 4.152C4.152 3.696 4.308 3.252 4.308 2.82C4.308 2.492 4.232 2.236 4.08 2.052C3.928 1.868 3.7 1.776 3.396 1.776C3.092 1.776 2.852 1.892 2.676 2.124C2.508 2.348 2.424 2.668 2.424 3.084H0.444C0.46 2.404 0.604 1.836 0.876 1.38C1.156 0.924 1.52 0.588 1.968 0.372C2.424 0.155999 2.928 0.0479994 3.48 0.0479994C4.432 0.0479994 5.148 0.291999 5.628 0.779999C6.116 1.268 6.36 1.904 6.36 2.688C6.36 3.544 6.068 4.34 5.484 5.076C4.9 5.804 4.156 6.516 3.252 7.212H6.492V8.88H0.468V7.356ZM8.83547 4.296C8.08347 3.896 7.70747 3.268 7.70747 2.412C7.70747 1.98 7.81947 1.588 8.04347 1.236C8.26747 0.876 8.60747 0.592 9.06347 0.383999C9.51947 0.167999 10.0795 0.0599992 10.7435 0.0599992C11.4075 0.0599992 11.9635 0.167999 12.4115 0.383999C12.8675 0.592 13.2075 0.876 13.4315 1.236C13.6555 1.588 13.7675 1.98 13.7675 2.412C13.7675 2.844 13.6635 3.22 13.4555 3.54C13.2555 3.86 12.9835 4.112 12.6395 4.296C13.0715 4.504 13.4035 4.792 13.6355 5.16C13.8675 5.52 13.9835 5.944 13.9835 6.432C13.9835 7 13.8395 7.492 13.5515 7.908C13.2635 8.316 12.8715 8.628 12.3755 8.844C11.8875 9.06 11.3435 9.168 10.7435 9.168C10.1435 9.168 9.59547 9.06 9.09947 8.844C8.61147 8.628 8.22347 8.316 7.93547 7.908C7.64747 7.492 7.50347 7 7.50347 6.432C7.50347 5.936 7.61947 5.508 7.85147 5.148C8.08347 4.78 8.41147 4.496 8.83547 4.296ZM11.7755 2.724C11.7755 2.396 11.6795 2.144 11.4875 1.968C11.3035 1.784 11.0555 1.692 10.7435 1.692C10.4315 1.692 10.1795 1.784 9.98747 1.968C9.80347 2.152 9.71147 2.408 9.71147 2.736C9.71147 3.048 9.80747 3.296 9.99947 3.48C10.1915 3.656 10.4395 3.744 10.7435 3.744C11.0475 3.744 11.2955 3.652 11.4875 3.468C11.6795 3.284 11.7755 3.036 11.7755 2.724ZM10.7435 5.184C10.3675 5.184 10.0635 5.288 9.83147 5.496C9.59947 5.696 9.48347 5.976 9.48347 6.336C9.48347 6.672 9.59547 6.948 9.81947 7.164C10.0515 7.38 10.3595 7.488 10.7435 7.488C11.1275 7.488 11.4275 7.38 11.6435 7.164C11.8675 6.948 11.9795 6.672 11.9795 6.336C11.9795 5.984 11.8635 5.704 11.6315 5.496C11.4075 5.288 11.1115 5.184 10.7435 5.184ZM19.9757 0.576V9H17.9237V0.576H19.9757ZM27.5228 0.576V2.22H25.2908V9H23.2388V2.22H21.0068V0.576H27.5228ZM30.6046 2.22V3.924H33.3526V5.508H30.6046V7.356H33.7126V9H28.5526V0.576H33.7126V2.22H30.6046ZM44.5848 0.576V9H42.5328V3.948L40.6488 9H38.9928L37.0968 3.936V9H35.0448V0.576H37.4688L39.8328 6.408L42.1728 0.576H44.5848ZM49.1084 9.084C48.4924 9.084 47.9404 8.984 47.4524 8.784C46.9644 8.584 46.5724 8.288 46.2764 7.896C45.9884 7.504 45.8364 7.032 45.8204 6.48H48.0044C48.0364 6.792 48.1444 7.032 48.3284 7.2C48.5124 7.36 48.7524 7.44 49.0484 7.44C49.3524 7.44 49.5924 7.372 49.7684 7.236C49.9444 7.092 50.0324 6.896 50.0324 6.648C50.0324 6.44 49.9604 6.268 49.8164 6.132C49.6804 5.996 49.5084 5.884 49.3004 5.796C49.1004 5.708 48.8124 5.608 48.4364 5.496C47.8924 5.328 47.4484 5.16 47.1044 4.992C46.7604 4.824 46.4644 4.576 46.2164 4.248C45.9684 3.92 45.8444 3.492 45.8444 2.964C45.8444 2.18 46.1284 1.568 46.6964 1.128C47.2644 0.68 48.0044 0.456 48.9164 0.456C49.8444 0.456 50.5924 0.68 51.1604 1.128C51.7284 1.568 52.0324 2.184 52.0724 2.976H49.8524C49.8364 2.704 49.7364 2.492 49.5524 2.34C49.3684 2.18 49.1324 2.1 48.8444 2.1C48.5964 2.1 48.3964 2.168 48.2444 2.304C48.0924 2.432 48.0164 2.62 48.0164 2.868C48.0164 3.14 48.1444 3.352 48.4004 3.504C48.6564 3.656 49.0564 3.82 49.6004 3.996C50.1444 4.18 50.5844 4.356 50.9204 4.524C51.2644 4.692 51.5604 4.936 51.8084 5.256C52.0564 5.576 52.1804 5.988 52.1804 6.492C52.1804 6.972 52.0564 7.408 51.8084 7.8C51.5684 8.192 51.2164 8.504 50.7524 8.736C50.2884 8.968 49.7404 9.084 49.1084 9.084Z" fill="#23262F"/>
                                    </svg></a>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li className='hotcollections__card'>
                        <img src={net} alt='' className='hotcollections__card-mainphot'/>


                        <div className='hotcollections__card-downphotoes'>
                            <img src={lit} alt='' className='hotcollections__card-anothphoto'/>
                            <img src={litt} alt=''  className='hotcollections__card-anothphoto'/>
                            <img src={littl} alt=''  className='hotcollections__card-anothphoto'/>


                            <div className='hotcollections__person'>
                                <h1 className='hotcolllections__person-title'>Awesome collection</h1>

                                <div className='hotcollections__person-downlist2'>
                                    <img src={li} alt='' className='hotcollections__person-photo'/>
                                    <p className='future__person-text'> By Kennith Olson</p>
                                    <a> <svg width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.468 7.356C0.74 7.14 0.864 7.04 0.84 7.056C1.624 6.408 2.24 5.876 2.688 5.46C3.144 5.044 3.528 4.608 3.84 4.152C4.152 3.696 4.308 3.252 4.308 2.82C4.308 2.492 4.232 2.236 4.08 2.052C3.928 1.868 3.7 1.776 3.396 1.776C3.092 1.776 2.852 1.892 2.676 2.124C2.508 2.348 2.424 2.668 2.424 3.084H0.444C0.46 2.404 0.604 1.836 0.876 1.38C1.156 0.924 1.52 0.588 1.968 0.372C2.424 0.155999 2.928 0.0479994 3.48 0.0479994C4.432 0.0479994 5.148 0.291999 5.628 0.779999C6.116 1.268 6.36 1.904 6.36 2.688C6.36 3.544 6.068 4.34 5.484 5.076C4.9 5.804 4.156 6.516 3.252 7.212H6.492V8.88H0.468V7.356ZM8.83547 4.296C8.08347 3.896 7.70747 3.268 7.70747 2.412C7.70747 1.98 7.81947 1.588 8.04347 1.236C8.26747 0.876 8.60747 0.592 9.06347 0.383999C9.51947 0.167999 10.0795 0.0599992 10.7435 0.0599992C11.4075 0.0599992 11.9635 0.167999 12.4115 0.383999C12.8675 0.592 13.2075 0.876 13.4315 1.236C13.6555 1.588 13.7675 1.98 13.7675 2.412C13.7675 2.844 13.6635 3.22 13.4555 3.54C13.2555 3.86 12.9835 4.112 12.6395 4.296C13.0715 4.504 13.4035 4.792 13.6355 5.16C13.8675 5.52 13.9835 5.944 13.9835 6.432C13.9835 7 13.8395 7.492 13.5515 7.908C13.2635 8.316 12.8715 8.628 12.3755 8.844C11.8875 9.06 11.3435 9.168 10.7435 9.168C10.1435 9.168 9.59547 9.06 9.09947 8.844C8.61147 8.628 8.22347 8.316 7.93547 7.908C7.64747 7.492 7.50347 7 7.50347 6.432C7.50347 5.936 7.61947 5.508 7.85147 5.148C8.08347 4.78 8.41147 4.496 8.83547 4.296ZM11.7755 2.724C11.7755 2.396 11.6795 2.144 11.4875 1.968C11.3035 1.784 11.0555 1.692 10.7435 1.692C10.4315 1.692 10.1795 1.784 9.98747 1.968C9.80347 2.152 9.71147 2.408 9.71147 2.736C9.71147 3.048 9.80747 3.296 9.99947 3.48C10.1915 3.656 10.4395 3.744 10.7435 3.744C11.0475 3.744 11.2955 3.652 11.4875 3.468C11.6795 3.284 11.7755 3.036 11.7755 2.724ZM10.7435 5.184C10.3675 5.184 10.0635 5.288 9.83147 5.496C9.59947 5.696 9.48347 5.976 9.48347 6.336C9.48347 6.672 9.59547 6.948 9.81947 7.164C10.0515 7.38 10.3595 7.488 10.7435 7.488C11.1275 7.488 11.4275 7.38 11.6435 7.164C11.8675 6.948 11.9795 6.672 11.9795 6.336C11.9795 5.984 11.8635 5.704 11.6315 5.496C11.4075 5.288 11.1115 5.184 10.7435 5.184ZM19.9757 0.576V9H17.9237V0.576H19.9757ZM27.5228 0.576V2.22H25.2908V9H23.2388V2.22H21.0068V0.576H27.5228ZM30.6046 2.22V3.924H33.3526V5.508H30.6046V7.356H33.7126V9H28.5526V0.576H33.7126V2.22H30.6046ZM44.5848 0.576V9H42.5328V3.948L40.6488 9H38.9928L37.0968 3.936V9H35.0448V0.576H37.4688L39.8328 6.408L42.1728 0.576H44.5848ZM49.1084 9.084C48.4924 9.084 47.9404 8.984 47.4524 8.784C46.9644 8.584 46.5724 8.288 46.2764 7.896C45.9884 7.504 45.8364 7.032 45.8204 6.48H48.0044C48.0364 6.792 48.1444 7.032 48.3284 7.2C48.5124 7.36 48.7524 7.44 49.0484 7.44C49.3524 7.44 49.5924 7.372 49.7684 7.236C49.9444 7.092 50.0324 6.896 50.0324 6.648C50.0324 6.44 49.9604 6.268 49.8164 6.132C49.6804 5.996 49.5084 5.884 49.3004 5.796C49.1004 5.708 48.8124 5.608 48.4364 5.496C47.8924 5.328 47.4484 5.16 47.1044 4.992C46.7604 4.824 46.4644 4.576 46.2164 4.248C45.9684 3.92 45.8444 3.492 45.8444 2.964C45.8444 2.18 46.1284 1.568 46.6964 1.128C47.2644 0.68 48.0044 0.456 48.9164 0.456C49.8444 0.456 50.5924 0.68 51.1604 1.128C51.7284 1.568 52.0324 2.184 52.0724 2.976H49.8524C49.8364 2.704 49.7364 2.492 49.5524 2.34C49.3684 2.18 49.1324 2.1 48.8444 2.1C48.5964 2.1 48.3964 2.168 48.2444 2.304C48.0924 2.432 48.0164 2.62 48.0164 2.868C48.0164 3.14 48.1444 3.352 48.4004 3.504C48.6564 3.656 49.0564 3.82 49.6004 3.996C50.1444 4.18 50.5844 4.356 50.9204 4.524C51.2644 4.692 51.5604 4.936 51.8084 5.256C52.0564 5.576 52.1804 5.988 52.1804 6.492C52.1804 6.972 52.0564 7.408 51.8084 7.8C51.5684 8.192 51.2164 8.504 50.7524 8.736C50.2884 8.968 49.7404 9.084 49.1084 9.084Z" fill="#23262F"/>
                                    </svg></a>
                                </div>
                            </div>
                        </div>



                    </li>

                </ul>




            </div>









            </div>

        </selection>
    );
};

export default HotCollections;