import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders counter app title', () => {
    render(<App />)
    expect(screen.getByText('Counter App')).toBeInTheDocument()
  })

  it('displays initial counter value of 0', () => {
    render(<App />)
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
  })

  it('increments counter when + button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const incrementButton = screen.getByTestId('increment-button')
    const counterValue = screen.getByTestId('counter-value')
    
    await user.click(incrementButton)
    expect(counterValue).toHaveTextContent('1')
    
    await user.click(incrementButton)
    expect(counterValue).toHaveTextContent('2')
  })

  it('decrements counter when - button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const decrementButton = screen.getByTestId('decrement-button')
    const counterValue = screen.getByTestId('counter-value')
    
    await user.click(decrementButton)
    expect(counterValue).toHaveTextContent('-1')
    
    await user.click(decrementButton)
    expect(counterValue).toHaveTextContent('-2')
  })

  it('resets counter to 0 when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const incrementButton = screen.getByTestId('increment-button')
    const resetButton = screen.getByTestId('reset-button')
    const counterValue = screen.getByTestId('counter-value')
    
    // First increment to 5
    for (let i = 0; i < 5; i++) {
      await user.click(incrementButton)
    }
    expect(counterValue).toHaveTextContent('5')
    
    // Then reset
    await user.click(resetButton)
    expect(counterValue).toHaveTextContent('0')
  })

  it('has all required buttons', () => {
    render(<App />)
    
    expect(screen.getByTestId('increment-button')).toBeInTheDocument()
    expect(screen.getByTestId('decrement-button')).toBeInTheDocument()
    expect(screen.getByTestId('reset-button')).toBeInTheDocument()
  })
})