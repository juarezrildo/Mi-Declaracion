import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Finternacional%2Fespectaculos%2Fminiones-absurda-lengua-minions-posible-hablar-_0_X9N2f5CUSt.html&psig=AOvVaw27XnUzNQ34FOt8XjBM8w90&ust=1707762986421000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDG7oL3o4QDFQAAAAAdAAAAABAEcom/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')

    const options = ['Segura?', 'Segurisima?', 'Estas completamente segura?', 'No te arrepentiras?', 'Pero si estas segura?', 'No hay vuelta atras', 'No hay devoluciones', 'No hay garantias', 'No hay reembolsos', 'No hay cambios', 'No hay nada', 'No hay', 'Que no hay']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif')
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Finternacional%2Fespectaculos%2Fminiones-absurda-lengua-minions-posible-hablar-_0_X9N2f5CUSt.html&psig=AOvVaw27XnUzNQ34FOt8XjBM8w90&ust=1707762986421000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDG7oL3o4QDFQAAAAAdAAAAABAE9d/7b/e49d7b7e965f09e31b498314b02e3662.gif")
        setTextP('Gracias por aceptar, te amo mucho <3')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image }
}