import React from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthBase, goToAuthPartners} from "../../../../store/authModalSlice";
import {useDispatch} from "react-redux";


interface Props {
    refOverlay: React.RefObject<HTMLDivElement>
    refCross: React.RefObject<HTMLDivElement>
}

export const AuthPartnersModal = ({refOverlay, refCross}: Props) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.overlay} ref={refOverlay}>
            <div className={styles.partnersModal}>
                <div className={styles.topBlock}>
                    <span className={styles.header}>Вход</span>
                    <div className={styles.crossBtn} ref={refCross}></div>
                </div>
                <div className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Наименование организации"/>
                    <input className={styles.input} type="text" placeholder="Email"/>
                    <input className={styles.input} type="text" placeholder="Пароль"/>
                </div>
                <LButton className={styles.signIn} colorTheme="green">Получить код</LButton>
                <div className={styles.bottomBlock}>
                    <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Я уже
                        зарегистировался(-ась)
                    </button>
                </div>
                <LButton onClick={() => dispatch(goToAuthPartners())} className={styles.signIn} colorTheme="gray">Вход
                    для партнеров</LButton>
            </div>
        </div>)
}
