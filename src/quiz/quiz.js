//libraries
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, H1 } from '@salt-ds/core';
//components
import QuizBank from './quizbank';
//styling


function Quiz (){

  
    const [currentQ, setCurrentQ] = useState("")
    const [points, setPoints] = useState(0)
    const [finishedQuiz, setFinishedQuiz] = useState(false)
    const [result, setResult] = useState('')

    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    // useEffect(() => {
    //     setPoints(points + currentQ.pointsMT)
    // }, [currentQ])

    const revealAnswer = () => {
        console.log({points})
        if(points<7) {
            setResult('MT')
            setFinishedQuiz(true)
        } if(points<13 && points>=7){
            setFinishedQuiz(true)
            setResult('Pop')
        } if(points<19 && points>=13){
            setFinishedQuiz(true)
            setResult('Classical')
        } if(points>=20){
            setFinishedQuiz(true)
            setResult('Drum and Bass')
        }
    }

    function handleClickMT (){
        console.log("a clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestion)
        if (nextQ) {
            setPoints(points => points + currentQ.pointsMT)
            console.log(points)
            setCurrentQ(nextQ)}
        else {revealAnswer()}
    }

    function handleClickPop (){
        console.log("b clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestion)
        if (nextQ) {
            setPoints(points => points + currentQ.pointsPop)
            console.log(points)
            setCurrentQ(nextQ)
        
        }
        else {
        revealAnswer()
        }
    }

    function handleClickClassical (){
        console.log("c clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestion)
        if (nextQ) {
            setPoints(points => points + currentQ.pointsClassical)
            console.log(points)
            setCurrentQ(nextQ)
        
        }
        else {
        revealAnswer()
        }
    }
    
    function handleClickD (){
        console.log("c clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestion)
        if (nextQ) {
            setPoints(points => points + currentQ.pointsD)
            console.log(points)
            setCurrentQ(nextQ)
        
        }
        else {
        revealAnswer()
        }
    }

    return (
        <>
        {!finishedQuiz? (
            <>
        <p> {currentQ.question} </p>

        <Button onClick={handleClickMT}> {currentQ.answerMT} </Button>

        <Button onClick={handleClickPop}> {currentQ.answerPop} </Button>

        <Button onClick={handleClickClassical}> {currentQ.answerClassical} </Button>

        <Button onClick={handleClickD}> {currentQ.answerD} </Button>

        {<br />}
        {<br />}

        {/* <Link  to="/home/quiz" onClick={() => window.location.reload()}> restart quiz </Link> */}
        </>) :
<H1> You should listen to {result}</H1>
        }
        </>

    )
}

export default Quiz