import React from "react"
import { rerenderTree } from "../render"

let state = {
    dialogsData: [
        {id: 1, name: 'Kirill admin'},
        {id: 2, name: 'Vika seller'}
      ],
    messagesData: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'bb'}
      ]         
}

export let addMessage = (message) => {
    let newMessage = {
        id: 4,
        text: message
    }
    state.messagesData.push(newMessage)
    rerenderTree(state)
}


export default state;