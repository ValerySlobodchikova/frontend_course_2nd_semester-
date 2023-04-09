import React from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthBase, goToAuthPartners} from "../../../../store/authModalSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";

export const RegisterInputCodeModal = () => {
    const dispatch = useDispatch()
    const phoneNumber = useSelector((state: RootState) => state.authModal.addition)
    return (

        <div className={styles.mediumModal}>
            <div className={styles.formCode}>
                <div className={styles.message}>
                    <p>Введите код отправленный вам на телефон</p>
                    <p className={styles.phone}>{phoneNumber}</p>
                </div>
                <input className={styles.input} type="text" placeholder="Код"/>
            </div>
            <LButton onClick={() => dispatch(goToAuthBase())} className={styles.signIn}
                     colorTheme="green">Отправить</LButton>
            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Не получил(-а) код
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} className={styles.signIn} colorTheme="gray">Вход
                для партнеров</LButton>
        </div>
    )
}