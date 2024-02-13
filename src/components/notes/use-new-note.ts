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

		const isSpeechRecognitionAvailable = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
	
		if (!isSpeechRecognitionAvailable) {
			toast.error('Audio Not Available')
			return;
		}

		const RecognitionAPI = window.webkitSpeechRecognition || window.SpeechRecognition

		recognitionAPI = new RecognitionAPI()

		if (recognitionAPI === null) {
			toast.error('Audio Not Available')
			return
		}

		setIsRecording(true)
		recognitionAPI.continuous = true
		recognitionAPI.lang = 'pt-Br'
		recognitionAPI.interimResults = false
		recognitionAPI.maxAlternatives = 1

		recognitionAPI.onresult =	(event) => {
			const speech = Array.from(event.results).reduce((text, result)=>{
				return `${text} ${result[0].transcript}`
			}, '')

			setNote(speech)
		}
	
		recognitionAPI.onerror = (event) => {
			console.error(event.error)
		}

		recognitionAPI.start()
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

