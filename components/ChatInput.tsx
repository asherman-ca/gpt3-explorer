'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'

type Props = {
	chatId: string
}

function ChatInput({ chatId }: Props) {
	const [prompt, setPrompt] = useState('')
	const { data: session } = useSession()

	const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!prompt) return

		// get rid of whitespace
		const input = prompt.trim()
		setPrompt('')
	}

	return (
		<div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
			<form onSubmit={sendMessage} className='p-5 space-x-5 flex'>
				<input
					className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
					type='text'
					placeholder='Type your message here...'
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					disabled={!session}
				/>

				<button
					type='submit'
					disabled={!prompt || !session}
					className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
				>
					<PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
				</button>
			</form>

			<div>{/* model selection */}</div>
		</div>
	)
}

export default ChatInput
