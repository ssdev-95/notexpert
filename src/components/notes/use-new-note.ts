/** NLW Expert **/

import { ChangeEvent, useState } from "react"
import { toast } from "sonner"

type OnChange = ChangeEvent<HTMLTextAreaElement>

export function useNewNote() {
	const [isTyping, setIsTyping] = useState(false)
	const [isRecording, setIsRecording] = useState(false)
	const [note, setNote] = useState('')

	const toggleTyping = () => {
		setIsTyping(typing => !typing)
	}

	const handleChange = (event:OnChange) => {
		if (!event.target.value.length) {
			setIsTyping(false)
		}

		setNote(event.target.value)
	}

	const handleCreateNote = (
		  onNoteCreated:(note:string)=>void) => {
		if (!note.length) {
			setIsTyping(false)
			toast.error('Creating Note Failed')
			return;
		}

		onNoteCreated(note)
		setNote('')
		setIsTyping(false)
		toast.success('Note Created')
	}

	let recognitionAPI: SpeechRecognition|null = null

	const startRecordingNote = () => {
		console.clear()
	
		const isSpeechAvailable = ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
		if (!isSpeechAvailable) {
			toast.error('Audio Not Available [FAIL]')
			return;
		}

		setIsRecording(true)

		const RecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
		recognitionAPI = new RecognitionAPI()
		recognitionAPI.continuous = true
		recognitionAPI.interimResults = false
		recognitionAPI.maxAlternatives = 1
		recognitionAPI.start()

		recognitionAPI.onresult =	(event) => {
			let speech = []

			for(let i=0; i<event.results.length; i++) {
				speech.push(event.results[i][0])
			}

			setNote(speech.join(' '))
		}
	
		recognitionAPI.onerror = (event) => {
			console.debug(event.error)
		}
	}

	const stopRecordingNote = () => {
		recognitionAPI?.stop()
		setIsRecording(false)
	}

	return {
		note,
		isTyping,
		isRecording,
		handleChange,
		toggleTyping,
		handleCreateNote,
		stopRecordingNote,
		startRecordingNote
	}
}

