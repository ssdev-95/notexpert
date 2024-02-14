/** NLW Expert **/

import { X } from "lucide-react"
import { useNewNote } from "./use-new-note"
import { NoteActionModal } from "./note-action-modal"

type NewNoteProps = {
	onCreateNote: (note:string)=>void
}

export function NewNote(props:NewNoteProps) {
	const {
		note,
		isTyping,
		isRecording,
		reset,
		handleChange,
		toggleTyping,
		handleCreateNote,
		startRecordingNote,
		stopRecordingNote
	} = useNewNote()

	return (
		<NoteActionModal
  		icon="plus"
			header="Add New Note"
			body="Insert manually or record an audio that will be converted to text automatically."
			className="relative rounded-tr-lg overflow-hidden bg-slate-600 ring-2 ring-slate-800 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400"
		>
		  <div className="w-full h-full flex flex-col">
		  <div className="w-full flex-1 flex flex-col gap-2 p-2">
			  <strong className="text-slate-200">New note</strong>
				{(isTyping || isRecording) ? (
					<textarea
					  className="w-full h-3/5 bg-slate-700 text-slate-100 outline-none resize-none rounded-0 disabled:pointer-events-none"
						onChange={handleChange}
						disabled={isRecording}
						value={note}
					/>
				) : (
  				<p className="text-slate-400 text-sm">
  				  Start by&nbsp;
						<button
						  className="text-lime-400"
							onClick={startRecordingNote}
  					>
  						record a note
  					</button>
  				  &nbsp;as audio or by&nbsp;
						<button
						  className="text-lime-400"
							onClick={toggleTyping}
						>
						  typing it manually
						</button>
					</p>
				)}

				</div>

				{isRecording ? (
					<button
					  className="w-full h-12 flex items-center justify-center gap-4 bg-slate-800 text-slate-400 hover:bg-slate-500 active:bg-slate-500 focus-visible:ring-2 focus-visible:ring-slate-800"
						onClick={()=>{
							stopRecordingNote()
							handleCreateNote(props.onCreateNote)
						}}
					>
					  <div className="rounded-full h-4 w-4 bg-red-500 animate-pulse" />
						<span>Stop recording</span>
					</button>
				) : (<>
				  {isTyping && (
						<button
						  className="w-full h-12 flex items-center justify-center gap-3 bg-slate-800 text-red-500 hover:bg-slate-500 active:bg-slate-500 focus-visible:ring-2 focus-visible:ring-slate-800 mb-2"
							onClick={()=>{
								reset()
								toggleTyping()
							}}
						>
						  <X />
				  		Cancel
			  		</button>
					)}

					<button
					  disabled={!note.length}
						className="w-full h-12 bg-lime-400 text-lime-800 hover:bg-lime-500 active:lime-500 focus-visible:ring-2 focus-visible:ring-lime-800 disabled:cursor-not-allowed disabled:bg-lime-700"
						onClick={()=>handleCreateNote(props.onCreateNote)}
					>
  					save note
					</button>
				</>)}
			</div>
		</NoteActionModal>
	)
}
