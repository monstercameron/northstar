import React, { useContext } from 'react'
import { Context } from '../store/store'

// import sub pages
import Intro from './Onboarding/Intro'
// import Basic from './Onboarding/Basic'
// import Laungage from './Onboarding/Language'
// import Question from './Onboarding/Questions'
// import Avatar from './Onboarding/Avatar'


export default function Onboarding() {
    const {
        store: { OnbSettings: [
            Intro,
            Basic,
            Language,
            Message,
            Questions,
            Avatar,
        ], OnbIndex } } = useContext(Context)

    const displayOnbSettings = () => {
        switch (OnbIndex) {
            case 0:
                return <Intro />
            case 1:
                return <Basic />
            case 2:
                return <Language />
            case 3:
                return <Questions />
            case 4:
                return <Avatar />
            default:
                return <Intro />
        }
    }

    return displayOnbSettings()
}

