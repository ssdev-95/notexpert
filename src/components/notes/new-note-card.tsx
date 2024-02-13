/** NLW Expert **/

import * as Dialog  from "@radix-ui/react-dialog"
import { Plus, X } from "lucide-react"
import { useNewNote } from "./use-new-note"

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
		<Dialog.Root>
			<Dialog.Trigger className="relative rounded-tr-lg overflow-hidden bg-slate-600 ring-2 ring-slate-800 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400">
			  <div className="absolute top-0 right-0 h-10 w-10 bg-slate-800 flex items-center justify-center">
  				<Plus className="text-lg text-slate-600" />
			  </div>

				<div className="w-full h-full p-4 flex flex-col text-left gap-5 text-sm">
				  <strong className="text-slate-200">Add new note</strong>
					<span className="text-slate-400">Insert manually or record an audio that will be converted to text automatically.</span>
				</div>
			</Dialog.Trigger>

			<Dialog.Portal>
  			<Dialog.Overlay className="w-screen h-screen absolute top-0 left-0 bg-black/60 flex items-center justify-center">
				<Dialog.Content className="w-[640px] max-w-[80vw] h-[600px] max-h-screen flex flex-col bg-slate-700 overflow-hidden relative rounded-tr-lg p-3">
    			  <div className="w-full flex-1 flex flex-col gap-2">
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
										  <X /> Cancel
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

      			<Dialog.Close className="absolute top-0 right-0 h-10 w-10 bg-slate-800 text-slate-700 flex items-center justify-center">
      			  <X />
      			</Dialog.Close>
  			  </Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
