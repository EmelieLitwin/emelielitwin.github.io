import { useEffect, useState, useRef } from 'react'
import './TypingAnimation.css'

interface TypingAnimationProps {
  words: readonly string[]
  prefix?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export default function TypingAnimation({
  words,
  prefix = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  )

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setCurrentText(words.join(' / '))
      return
    }

    const currentWord = words[currentWordIndex]
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetweenWords)
      
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true)
      return
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1)
          } else {
            return currentWord.substring(0, prev.length + 1)
          }
        })
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, delayBetweenWords])

  const fullText = prefix ? `${prefix} ${words.join(', ')}` : words.join(', ')

  return (
    <span className="typing-animation">
      {/* Visually hidden text for screen readers with full context */}
      <span className="visually-hidden">{fullText}</span>
      
      {/* Visual presentation with animation (hidden from screen readers) */}
      <span aria-hidden="true">
        {prefix && <span className="typing-prefix">{prefix} </span>}
        <span className="typing-text">
          {currentText}
          {!prefersReducedMotion.current && (
            <span className="typing-cursor">|</span>
          )}
        </span>
      </span>
    </span>
  )
}
