/** Nlw Expert **/

import { ChangeEvent } from "react"

type OnChangeEvent = ChangeEvent<HTMLInputElement>

type SearchProps = {
	onSearch: (query: string) => void
}

export function Search({ onSearch }: SearchProps) {
	const handleChange = (event:OnChangeEvent) => {
		onSearch(event.target.value)
	}

	return (
		<input
		  onChange={handleChange}
			className="w-full h-10 p-2 text-slate-100 placeholder:text-slate-500 text-lg bg-slate-950 outline-none hover:ring-2 hover:ring-lime-400"
			placeholder="Search notes .."
		/>
	)
}
