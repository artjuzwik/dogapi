import React, { useEffect, useState } from 'react'
import './DogBreedButtons.scss'


interface DogBreedButtonsI {
    callback?: Function
} 

const DogBreedButtons = (props:DogBreedButtonsI) => {

    const [state, setState] = useState({message:null, dogsArray:[]});
    

    const createDogsArray = (dogs:Array<string>) => {
        const dogsArray = [];

        if(typeof dogs === 'undefined') return false

        for(const props in dogs){
            if(dogs[props].length === 0){
                dogsArray.push(props)
                
            }else{
                dogsArray.push(props)
                dogs[props].map((elem:string) => {return dogsArray.push(`${props}-${elem}`)})
            }
        }
        return dogsArray
    }
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then((resp) => resp.json())
        .then((json) => {
            if(json.status !== 'success') {
                alert('załadowanie ras psów nie powiodło się, odśwież stronę')
                return false
            }     
            if(typeof json.message === 'object') setState({...state, 'dogsArray': createDogsArray(json.message)})
        })
    },[])

    return (
        <React.Fragment>
        {state.dogsArray?.map((elem:string,i:number) => {
            return(
                <button 
                    key={i} 
                    className={'dogBreedButton'}
                    onClick={() => {props.callback ? props.callback({'dogBreed':elem, 'modalShow':true}) : false }}
                >
                {elem}
                </button>
            )
        })}
        </React.Fragment>
    )
}

export default DogBreedButtons;