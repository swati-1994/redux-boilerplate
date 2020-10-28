import React, {Component} from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component{

    render(){

         //step2 Reducer: state and action
        const reducer=function(state, action){
            if(action.type="cotton")
            {
            return action.payload;
            }
            if(action.type="chiffon")
            {
            return action.payload;
            }
            return state;
        }

        // step1 Store: reducer and state
        const store = createStore(reducer,"fabric");

       
        
        

        store.subscribe(()=>{
            console.log("store is now changed to", store.getState())
        })

        //step4: dispatch action
        store.dispatch({type:"cotton", payload:"good for summers "})
        store.dispatch({type:"chiffon", payload:"good for spring "})



        return(


            <div>
                <h1>Hey, let's simplify redux</h1>
                </div>
        )
    }
}

export default ReduxDemo;