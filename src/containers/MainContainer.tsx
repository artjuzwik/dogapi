import React, { useState } from 'react'
import DogBreedButtons from '../components/DogBreedButtons/DogBreedButtons'
import Modal from '../components/Modal/Modal'
import './MainContainer.scss'




const MainContainer = () => {
    const [state, setState] = useState({dogBreed:null,modalShow:false})

    const setMainContainerState = (values:Record<string, unknown>) => {
        setState({...state, ...values })
    }

    return (
        <div className={'mainContainer'}>
            <DogBreedButtons  callback={setMainContainerState} />
            <Modal 
                show={state.modalShow} 
                dogBreed={state.dogBreed}
                callback={setMainContainerState}/>
        </div>
    )
};

export default MainContainer;