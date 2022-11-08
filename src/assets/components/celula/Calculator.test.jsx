import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculator, equalSign, numbers, operations } from './Calculator'

describe('Calculator', () => {
	afterEach(cleanup)
	it('should render', () => {
		render(<Calculator />)
	})

	it('should render title correctly', () => {
		render(<Calculator />)
		screen.getByText('Calculator')
	})

	it('should render numbers ', () => {
		render(<Calculator />)

		numbers.forEach(number => {
			screen.getByText(number)
		})
	})

	it('should render 4 rows ', () => {
		render(<Calculator />)

		const rows = screen.getAllByRole('row')
		expect(rows.length).toBe(4)
	})

	it('should render 4 operations ', () => {
		render(<Calculator />)
		operations.forEach(operation => {
			screen.getByText(operation)
		})
	})

	it('should render an input', () => {
		render(<Calculator />)
		screen.getByRole('textbox')
	})

	it('should user input after clicking a number', () => {
		render(<Calculator />)
		const one = screen.getByText('1')
		fireEvent.click(one)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('1')
	})

	it('should user input after clicking several numbers', () => {
		render(<Calculator />)
		const one = screen.getByText('1')
		fireEvent.click(one)

		const two = screen.getByText('2')
		fireEvent.click(two)

		const three = screen.getByText('3')
		fireEvent.click(three)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('123')
	})

	it('should show user input after clicking and operations', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		fireEvent.click(one)

		const plus = screen.getByText('+')
		fireEvent.click(plus)
		fireEvent.click(one)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('1+1')
	})

	it('should show user input after clicking and operations', () => {
		render(<Calculator />)

		const one = screen.getByText('1')
		fireEvent.click(one)

		const plus = screen.getByText('+')
		fireEvent.click(plus)
		fireEvent.click(one)

		const equal = screen.getByText(equalSign)

		fireEvent.click(equal)

		const input = screen.getByRole('textbox')
		expect(input.value).toBe('2')
	})
})
