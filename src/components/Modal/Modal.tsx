import React, { useEffect, useState } from 'react'
import './Modal.scss'

interface ModalI {
    show: boolean
    dogBreed: string | null
    callback: Function
}

const Modal = (props:ModalI) => {
    if(props.show === false) return null 

    const [state,setState] = useState({dogLink:'',error:''})

    const getDogPhoto = (dogBreed:string | null):void => {
        if(dogBreed === null) return

        fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(resp => resp.json())
        .then(resp => {
            if(resp.status === 'error'){
                setState({...state, error:'nie ma takiego zasobu'})
            }else{
                setState({...state, dogLink: resp.message, error:''})
            }
        })
    }

    useEffect(() => {
        getDogPhoto(props.dogBreed)
    },[props.dogBreed])

    return (
      <div className={'modal'}>
          <div className={'modal-content'}>
              <div className={'modal-header'}>
                  <h1 className={'modal-title'}>{props.dogBreed}</h1>
              </div>
              <div className={'modal-body'}>
                  {state.error ?
                    state.error 
                    :
                    <img src={state.dogLink} />
                  }
              </div>
              <div className={'modal-footer'}>
                  <button 
                    className={'modal-close'}
                    onClick={() => {props.callback({modalShow:false})}}>Zamknij</button>
                  <button 
                    className={'modal-close'}
                    onClick={(() =>getDogPhoto(props.dogBreed))}>Losuj inne zdjęcie tej rasy</button>
              </div>
          </div>
      </div>  
    )
}

export default Modal;