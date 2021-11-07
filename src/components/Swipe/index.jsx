import React, { useState, useRef, useContext, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import SwipeCard from './card/index'
import Controls from './controls/index'
import { Context } from '../../store/store'

//dummy data
import bird1 from '../../media/images/bird1.png'
import bird2 from '../../media/images/bird2.png'
import bird3 from '../../media/images/bird3.png'

export default function Index() {
    const { store, actions } = useContext(Context)

    const cardList = [
        <SwipeCard tags={['coding', 'ping pong', 'ping pong', 'ping pong']} icon={bird1} />,
        <SwipeCard tags={['dancing', 'archery']} icon={bird2} />,
        <SwipeCard tags={['basketball', 'cars']} icon={bird3} />
    ]

    const [card, setcard] = useState(0)
    //const currentCardRef = useRef()

    const canSwipeBackwards = card > 0

    const canSwipeForwards = (card < cardList.length - 1)

    const currentCard = cardList[card]


    useEffect(() => {
        if (card === 2) {
            actions.setMatched(true)
        }
    }, [card])

    const moveCard = (direction) => {
        switch (direction) {
            case 'forward':
                if (canSwipeForwards) setcard((card) => card + 1)
                break
            case 'back':
                if (canSwipeBackwards) setcard((card) => card - 1)
                break
            default:
                break
        }
    }

    const onSwipe = (direction) => {
        switch (direction) {
            case 'left':
                console.log('You swiped left!')
                moveCard('back')
                break
            case 'right':
                console.log('You swiped right!')
                moveCard('forward')
                break
            case 'up':
                console.log('You swiped up!')
                break
            case 'down':
                console.log('You swiped down!')
                break
            default:
                console.log('Nani!')
                break
        }
    }

    const nextCard = () => {
        //console.log(currentCardRef.current);
    }

    const next = () => canSwipeForwards ? setcard((card) => card + 1) : null
    const previous = () => (canSwipeBackwards) ? setcard((card) => card - 1) : null

    const nextCardDisplay = (sCard) => {
        return (
            <TinderCard
                // ref={currentCardRef}
                onSwipe={onSwipe}
                onCardLeftScreen={nextCard}
                preventSwipe={['up', 'down', 'left', 'right']}
                swipeThreshold={100}
            >
                {sCard}
            </TinderCard>
        )
    }

    // console.log('card: ', card);

    return (
        <div className='container-sm'>
            <div className='row'>
                <div className='col-auto mx-auto m-0 p-0 mt-2'>
                    {nextCardDisplay(currentCard)}
                </div>
            </div>
            {Controls ? <Controls next={next} reset={previous} /> : ''}
        </div>
    )
}

// https://via.className=holder.com/400x300?text=North+star