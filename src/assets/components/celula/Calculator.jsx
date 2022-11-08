import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const operations = ['+', '-', '*', '/']
export const equalSign = '='

export const Calculator = () => {
	const [value, setValue] = useState('')

	const handleNumber = op => () => setValue(value => value + op)

	// const handleResult = op => () => setValue(value => value + op)

	return (
		<div>
			<h1>Calculator</h1>
			<input value={value} role="textbox" readOnly />
			<div role="grid">
				{rows.map(row => (
					<div role="row" key={row}>
						{row.map(n => (
							<button onClick={handleNumber(n)} key={n}>
								{n}
							</button>
						))}
					</div>
				))}
				{operations.map(operation => (
					<button onClick={handleNumber(operation)} key={operation}>
						{operation}
					</button>
				))}
			</div>
			<button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
		</div>
	)
}
