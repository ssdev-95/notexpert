/** NLW Expert **/

import { Plus } from "lucide-react"

export function NewNote() {
	return (
		<button className="relative rounded-tr-lg overflow-hidden bg-slate-600 ring-2 ring-slate-800 focus-visible:ring-lime-400 hover:ring-slate-400 active:ring-lime-400">
		  <div className="absolute top-0 right-0 h-10 w-10 bg-slate-800 flex items-center justify-center">
			  <Plus className="text-lg text-slate-600" />
			</div>

		  <div className="w-full h-full p-4 flex flex-col text-left gap-5 text-sm">
		    <strong className="text-slate-200">Add new note</strong>
				<span className="text-slate-400">Insert manually or record an audio that will be converted to text automatically.</span>
			</div>
		</button>
	)
}
