/** NLW Expert **/

import { ArrowUpRight, MessageCircleWarning } from "lucide-react"
import { Modal } from "./modal"
import { getDistance } from "../utils/time"

export type Note = {
	id: string
	created_at: Date
	content: string
}

type NoteProps = {
	note: Note
	onDeleteNote: (id:string)=>void
}

export function Note({ note, onDeleteNote }: NoteProps) {
	const time = getDistance(note.created_at)

	return (
		<Modal trigger={()=>(
		<button className="relative rounded-tr-lg overflow-hidden bg-slate-800 ring-2 ring-slate-600 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400">
		  <div className="absolute top-0 right-0 h-10 w-10 bg-slate-600 flex items-center justify-center">
			  <ArrowUpRight className="text-lg text-slate-400" />
			</div>

		  <div className="w-full h-full p-4 flex flex-col text-left gap-5 text-sm relative">
		    <span className="text-slate-200">{time}</span>
				<p className="text-slate-400">{note.content}</p>
				<div className="w-full h-3/5 bg-gradient-to-t from-black to-black/40 fixed bottom-0 left-0" />
			</div>
		</button>
		)}>
		  <div className="h-full w-full flex flex-col bg-slate-700 overflow-hidden relative rounded-tr-lg">
			  <strong className="text-slate-200">{time}</strong>
				<p className="text-slate-400">{note.content}</p>
				<button
				  className="w-full h-12 flex items-center justify-center gap-4 bg-slate-800 text-red-500 hover:bg-slate-500 active:bg-slate-500 focus-visible:ring-2 focus-visible:ring-slate-800"
					onClick={()=>onDeleteNote(note.id)}
				>
				  <MessageCircleWarning className="text-lg" />
				  Delete this note?
				</button>
			</div>
		</Modal>
	)
}
