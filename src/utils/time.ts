/** nLW Expert **/

import { formatDistance } from "date-fns"

export function getDistance(date:Date) {
	return formatDistance(
		date,
		new Date(),
		{ addSuffix: true }
	)
}

