import React, { useEffect } from 'react'
import { useState } from 'react'
// import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

export const Form = () => {

    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [subject, setSubject] = useState("physical")
    // const {tg} = useTelegram()

    useEffect(() => {
        const tg = window.Telegram.WebApp
        tg.MainButton.setParams({
            text: 'Отправить свои данные'
        })
    }, [])

    useEffect(() => {
        const tg = window.Telegram.WebApp
        if (!street || !city || !country) {
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show()
        }
    }, [country, city, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Дайте мне свои данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value = {country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Город'}
                value = {city}
                onChange={onChangeCity}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value = {street}
                onChange={onChangeStreet}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ.Лицо</option>
                <option value={'legal'}>Юр.Лицо</option>
            </select>

        </div>
    )
}
