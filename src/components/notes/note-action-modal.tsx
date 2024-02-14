/** NLW Expert **/



import * as Dialog  from "@radix-ui/react-dialog"
import { Plus, ArrowUpRight, X } from "lucide-react"
import { ReactNode } from "react"

type PopupProps = {
	header:string
	body:string
	className:string
	shadow?:boolean
	icon:"plus"|"arrow"
	children:ReactNode
}

export function NoteActionModal(
	{shadow=false,icon,header,body, className, children}:PopupProps
) {
	const icons = {
		plus: ()=><Plus className="text-lg text-slate-400"/>,
		arrow: ()=><ArrowUpRight className="text-lg text-slate-800" />
	}
	const Icon = icons[icon]

	return (
		<Dialog.Root>
			<Dialog.Trigger className={className}>
			  <div className={`absolute top-0 right-0 h-10 w-10 bg-slate-${shadow?600:800} flex items-center justify-center`}>
				  <Icon />
			  </div>

				<div className="w-full h-full p-4 flex flex-col text-left gap-5 text-sm">
				  <strong className="text-slate-200">{header}</strong>
					<span className="text-slate-400">{body}</span>
				</div>
				{shadow && (<div className="w-full h-3/5 bg-gradient-to-t from-black to-slate-800 absolute bottom-0 left-0" />)}
			</Dialog.Trigger>

			<Dialog.Portal>
  			<Dialog.Overlay className="w-screen h-screen absolute top-0 left-0 bg-black/60 flex items-center justify-center">
				  <Dialog.Content className="w-[640px] max-w-[80vw] h-[600px] max-h-screen bg-slate-700 overflow-hidden relative rounded-tr-lg">
  					{children}
						<Dialog.Close className="absolute top-0 right-0 h-10 w-10 bg-slate-800 text-slate-700 flex items-center justify-center">
						  <X />
						</Dialog.Close>
  			  </Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
