/** nLW Expert **/

import { formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

export function getDistance(date:Date) {
	return formatDistance(date, new Date(), {
		addSuffix: true,
		locale: ptBR
	})
}

