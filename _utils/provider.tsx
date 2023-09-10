'use client'

import React, { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Providers({children}:{ children : ReactNode}) {
	const [client] = useState(new QueryClient())

	return (
		<QueryClientProvider client={client}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}