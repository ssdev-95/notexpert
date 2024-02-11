/** NLW Expert **/

import { Root, Overlay, Content, Portal } from "@radix-ui/react-dialog"
import { ReactNode } from "react"

type ModalProps = {
	children: ReactNode
	trigger: (props:any)=>ReactNode
}

export function Modal(props: ModalProps) {
	const Trigger = props.trigger
	return (
		<Root>
		  <Trigger />

		  <Portal>
			  <Overlay className="w-screen h-screen absolute inset-0 bg-black/60" />

				<Content className="w-[640px] max-w-[80vw] h-[600px] max-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
				  {props.children}
				</Content>
			</Portal>
		</Root>
	)
}
