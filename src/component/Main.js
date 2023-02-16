import React, { useContext, useEffect, useState } from 'react'
import { AnimalContext } from '../Context'
import styled from 'styled-components'
/* import Button from '@mui/material/Button'; */
/* import { styled } from '@mui/material/styles'; */
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Main = () => {
    
    const { animal, yugiList, todoList ,movePageFn} = useContext(AnimalContext);
    const [aniList, setAniList] = useState([]);
    var aniValue = [];
    useEffect(() => {
        animal && animal.map((obj, key) => {
            if (obj.img.PHOTO_KND == 'THUMB') {
                aniValue.push(obj)
                setAniList(aniValue);
            }
        })
    }, [])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    //슬릭슬라이드css
    const SlickItems = styled.div`
    width: 50%;    
    img {
        max-width: 100%;
        height: 100%;
        vertical-align: top;
    }
`;
    //figcaption css 
    
   // const figcaptionCss={{fontFamily:var('--font-KCC')}}

    return (
        <>

        
            <div className='main-container'>
                <section className='text-container'>
                    <figure className="text-content">
                        <img src='../img/main-dog.png' alt='강아지 고양이 이미지....'>
                        </img>
                        <figcaption /* style={} */>
                            <p>나는 기다립니다. 나를 두고 간 사람들을....</p>
                            <p>기다려도 기다려도 아무도 내게  오지 않습니다.</p>
                            <p>얼마나 더 기다려야 할까요?</p>
                            <p>저는 하염없이 기다립니다. 새로운 가족을  </p>
                            <p>저의 가족이 되어주세요.</p>
                        </figcaption>
                    </figure>
                </section>
                <section className='view-slied-container'>
                    <h3>우리 친구들을 소개합니다.</h3>
                    <Slider {...settings}>
                        {
                            animal && animal.map((obj, key) => {
                                if (obj.img.PHOTO_KND == 'THUMB') {
                                    return <SlickItems key={key}>
                                        <figure key={key}>
                                            <img src={obj.img.PHOTO_URL}></img>
                                            <p>{obj.Animal.NM}</p>
                                            <button onClick={()=>movePageFn(`animalInfo/${obj.Animal.ANIMAL_NO}`)}>Learn More</button>
                                        </figure>
                                    </SlickItems>
                                }
                            })

                        }
                    </Slider>

                        <button className='list-button' onClick={()=>movePageFn("AnimalList")} >다른 아이들</button>


                </section>
                <section className='main-QnA-container'>
                    <h3>무엇을 도와드릴까요?</h3>
                    <div className='icon-box'>
                        <figure onClick={()=>movePageFn("Qnalist")}>
                            <img src='../img/qnaIcon.svg'></img>
                            <figcaption>QnA</figcaption>
                        </figure>
                        <figure onClick={()=>movePageFn("todolist")}>
                            <img src='../img/todolistIcon.svg'></img>
                            <figcaption>게시판</figcaption>
                        </figure>
                        <figure>
                            <img src='../img/hospitalIcon.svg'></img>
                            <figcaption>Hospital</figcaption>
                        </figure>
                    </div>
                </section>


            </div>
        </>

    )
}

export default Main