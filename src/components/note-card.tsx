/** NLW Expert **/

import { ArrowUpRight } from "lucide-react"
import { getDistance } from "../utils/time"

export type Note = {
	id: string
	created_at: Date
	content: string
}

type NoteProps = {
	note: Note
}

export function Note({ note }: NoteProps) {
	const time = getDistance(note.created_at)

	return (
		<button className="relative rounded-tr-lg overflow-hidden bg-slate-800 ring-2 ring-slate-600 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400">
		  <div className="absolute top-0 right-0 h-10 w-10 bg-slate-600 flex items-center justify-center">
			  <ArrowUpRight className="text-lg text-slate-400" />
			</div>

		  <div className="w-full h-full p-4 flex flex-col text-left gap-5 text-sm">
		    <span className="text-slate-200">{time}</span>
				<p className="text-slate-400">{note.content}</p>
			</div>
		</button>
	)
}
