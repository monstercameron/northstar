import React, { useState, useEffect } from 'react';

import Intro from '../pages/Onboarding/Intro'
import Language from '../pages/Onboarding/Language'
import Message from '../pages/Onboarding/Message'
import Basic from '../pages/Onboarding/Basic'
import Avatar from '../pages/Onboarding/Avatar'
import Questions from '../pages/Onboarding/Questions'

export const Context = React.createContext(null);

export const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        //this will be passed as the contenxt value
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            /**
             * EDIT THIS!
             * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
             * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
             * store, instead use actions, like this:
             *
             * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
             *
             **/
        }, []);

        // The initial value for the context is not null anymore, but the current state of this component,
        // the context will now have a getStore, getActions and setStore functions available, because they were declared
        // on the state of this component
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            matched: false,
            OnbSettings:
                [Intro,
                    Basic,
                    Language,
                    Message,
                    Questions,
                    Avatar,
                ],
            OnbIndex: 3,
            OnbQuestion: [
                {
                    question: 'what is your gender?',
                    opts: [
                        'He,His',
                        'She,Her',
                        'They,Them',
                        'Genderfluid'
                    ]
                },
            ],
            OnbQuestionIndex: 0,
            OnbValues: {
                name: '',
                dob: '',
                residence: '',
                cityState: '',
                jobTitle: '',
                priLang: '',
                secLang: '',
                gender: '',
                food: '',
                coffee: '',
                candy: '',
                personality: '',
                avatar: '',
            },
        },
        actions: {
            next: () => {
                console.log('from store', getStore().OnbIndex);
                const index = getStore().OnbIndex
                const length = getStore().OnbSettings.length
                if (index < length - 1) {
                    setStore({ OnbIndex: index + 1 });
                }
            },
            setMatched: (bool) => {
                console.log('set matched:', bool);
                setStore({ matched: bool });
            },
        }
    };
};

export default getState;