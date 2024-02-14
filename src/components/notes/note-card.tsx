/** NLW Expert **/

import { AlertOctagon } from "lucide-react"
import { toast } from "sonner"
import { getDistance } from "../../utils/time"
import { NoteActionModal } from "./note-action-modal"

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
	const handleDeleteNote = () => {
		onDeleteNote(note.id)
		toast.success('Note Deleted')
	}

	return (
		<NoteActionModal
		  shadow
		  header={time}
			body={note.content}
			icon="arrow"
			className="relative rounded-tr-lg overflow-hidden bg-slate-800 ring-2 ring-slate-600 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400"
		>
		  <div className="w-full h-full flex flex-col">
			  <div className="w-full flex-1 flex flex-col gap-3 p-2">
    		  <strong className="text-slate-200">Note</strong>
    			<p className="text-slate-400">{note.content}</p>
  			</div>
  
				<button
  			  onClick={handleDeleteNote}
  				className="w-full h-12 flex items-center justify-center gap-2 bg-slate-800 text-red-500"
  			>
    		  <AlertOctagon />
  				Delete this note?
    		</button>
			</div>
		</NoteActionModal>
	)
}
