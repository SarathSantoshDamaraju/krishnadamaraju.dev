import { useState, useEffect } from 'react'

const emojis = ['🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎫', '🎬']
const cards = [...emojis, ...emojis]

export default function Game() {
  const [shuffledCards, setShuffledCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  useEffect(() => {
    setShuffledCards(cards.sort(() => Math.random() - 0.5))
  }, [])

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return

    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards
      if (shuffledCards[firstIndex] === shuffledCards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex])
      }
      setTimeout(() => setFlippedCards([]), 1000)
    }
  }

  return (
    <div className="w-[400px] max-w-4xl mx-auto p-8 bg-theme-light-bg dark:bg-theme-dark-bg rounded-lg ">
      <h2 className="text-3xl font-bold text-center mb-8 text-theme-light-text dark:text-theme-dark-text">
        Nothing here. Search or play a game.
      </h2>
      <p className="text-center mb-8 text-theme-light-text/80 dark:text-theme-dark-text/80">
        Match the pairs of emojis to win! Click on cards to flip them.
      </p>
      <div className="grid grid-cols-4 gap-2 gap-y-2">
        {shuffledCards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-20 h-20 flex items-center justify-center text-3xl cursor-pointer rounded-lg transition-all duration-300 ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary/60 dark:hover:bg-primary/60'
            }`}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) && card}
          </div>
        ))}
      </div>
      {matchedCards.length === cards.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setShuffledCards(cards.sort(() => Math.random() - 0.5))
              setMatchedCards([])
              setFlippedCards([])
            }}
            className="mt-4 px-6 py-2 theme-dark-bg text-primary rounded-lg hover:bg-secondary/80 transition-colors"
          >
            You won! Play Again ?
          </button>
        </div>
      )}
    </div>
  )
}
