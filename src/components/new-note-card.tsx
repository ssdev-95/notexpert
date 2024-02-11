/** NLW Expert **/

import { ChangeEvent, useState } from "react"
import { DialogTrigger, DialogClose } from "@radix-ui/react-dialog"
import { Plus, X } from "lucide-react"
import { Modal } from "./modal"

type NewNoteProps = {
	onCreateNote: (note:string)=>void
}

type OnChange = ChangeEvent<HTMLTextAreaElement>

export function NewNote(props:NewNoteProps) {
	const [isTyping, setIsTyping] = useState(false)
	const [isRecording, setIsRecording] = useState(false)
	const [note, setNote] = useState('')

	const handleChange = (event:OnChange) => {
		if (!event.target.value.length) {
			setIsTyping(false)
		}

		setNote(event.target.value)
	}

	const handleCreateNote = () => {
		if (!note.length) {
			setIsTyping(false)
			return;
		}

		props.onCreateNote(note)
		setNote('')
		setIsTyping(false)
	}

	let recognitionAPI: SpeechRecognition|null = null

	const startRecordingNote = () => {
		const isSpeechAvailable = ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
		if (isSpeechAvailable) {
			alert('audio not available!')
			return;
		}

		setIsRecording(true)
		const RecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
		recognitionAPI = new RecognitionAPI()

		recognitionAPI.continuous = true
		recognitionAPI.interimResults= true
		recognitionAPI.maxAlternatives = 1

		recognitionAPI.start()
		recognitionAPI.onresult = (data) => {
			console.log(data)
		}

		recognitionAPI.onerror = console.error
	}

	const stopRecordingNote = () => {
		recognitionAPI?.stop()
		setIsRecording(false)
	}

	return (
		<Modal
		trigger={()=>(
			<DialogTrigger className="relative rounded-tr-lg overflow-hidden bg-slate-600 ring-2 ring-slate-800 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400">
			  <div className="absolute top-0 right-0 h-10 w-10 bg-slate-800 flex items-center justify-center">
  				<Plus className="text-lg text-slate-600" />
			  </div>

				<div className="w-full h-full p-4 flex flex-col text-left gap-5 text-sm">
				  <strong className="text-slate-200">Add new note</strong>
					<span className="text-slate-400">Insert manually or record an audio that will be converted to text automatically.</span>
				</div>
			</DialogTrigger>
		)}>
		  <div className="h-full w-full flex flex-col bg-slate-700 overflow-hidden relative rounded-tr-lg">
			  <div className="w-full flex-1 flex flex-col gap-2 p-3">
  			  <strong className="text-slate-200">New note</strong>
					{(isTyping || isRecording) ? (
						<textarea
						  className="w-full h-3/5 resize-none bg-black/5 text-slate-100 outline-none rounded-0 border-b-2 border-b-slate-800 disabled:pointer-events-none"
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
								onClick={()=>setIsTyping(true)}
							>
      				  typing it manually
      				</button>
      			</p>
					)}
				</div>

				{isRecording ? (
					<button
					  className="w-full h-12 flex items-center justify-center gap-4 bg-slate-800 text-slate-400 hover:bg-slate-500 active:bg-slate-500 focus-visible:ring-2 focus-visible:ring-slate-800"
						onClick={stopRecordingNote}
					>
					  <div className="rounded-full h-4 w-4 bg-red-500 animate-pulse" />
						<span>Stop recording</span>
					</button>
				) : (
  				<button
  				  className="w-full h-12 bg-lime-400 text-lime-800 hover:bg-lime-500 active:lime-500 focus-visible:ring-2 focus-visible:ring-lime-800"
  					onClick={handleCreateNote}
  				>
    			  save note
    			</button>
 				)}

  			<DialogClose className="absolute top-0 right-0 h-10 w-10 bg-slate-800 text-slate-700 flex items-center justify-center">
  			  <X />
  			</DialogClose>
			</div>
		</Modal>
	)
}
