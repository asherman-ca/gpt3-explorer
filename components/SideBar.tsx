// anytime we use hooks we need to useclient
'use client'

import React from 'react'
import NewChat from './NewChat'
import ChatRow from './ChatRow'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

function SideBar() {
	// destructs and renames data variable to 'session'
	const { data: session } = useSession()
	const [chats, loading, error] = useCollection(
		session &&
			query(
				collection(db, 'users', session.user?.email!, 'chats'),
				orderBy('createdAt', 'asc')
			)
	)

	return (
		<div className='p-2 flex flex-col h-screen'>
			<div className='flex-1'>
				<div>
					<NewChat />

					<div>{/* model selection */}</div>

					{chats?.docs.map((chat) => (
						<ChatRow key={chat.id} id={chat.id} />
					))}
				</div>
			</div>

			{session && (
				<img
					onClick={() => signOut()}
					className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
					src={session.user?.image!}
					alt='Profile Picture'
				/>
			)}
		</div>
	)
}

export default SideBar
