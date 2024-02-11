/**
 * NLW Expert - Trilha ReactJS
 **/

import logo from './assets/logo.svg'

import { useState } from "react"
import { NewNote } from './components/new-note-card'
import { Note } from './components/note-card'
import type { Note as TNote } from './components/note-card'
import { Search } from './components/search'

export function App() {
	const [notes] = useState<TNote[]>([
		{ id:'shaiGWBF8137', created_at: new Date(), content: 'Hellp, my mussarellos'}
	])

	return (
		<div className="w-screen max-w-[1092px] flex flex-col gap-10 items-start p-5">
		  <img src={logo} className="h-6 w-auto smax:mx-auto" alt="nlw-expert-notexpert" />

			<Search onSearch={console.log} />

			<hr className="w-full h-0.25 bg-slate-700"/>

			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gris-cols-3 gap-3 auto-rows-[250px]">	
			  <NewNote />

				{ notes.map(note => (
					<Note id={note.id} note={note} />
				)) }
			</div>
		</div>
	)
}

