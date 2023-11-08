'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'


dayjs.extend(relativeTime)

interface TimeElapsedCounterProps {
	targetDate: string // ISO 8601 format date string
}

const TimeElapsedCounter: React.FC<TimeElapsedCounterProps> = ({
	targetDate,
}) => {
	const [timeElapsed, setTimeElapsed] = useState<string>('')

	useEffect(() => {
		const intervalId = setInterval(() => {
			const timeElapsedSinceTargetDate = dayjs(targetDate).fromNow()
			setTimeElapsed(timeElapsedSinceTargetDate)
		}, 1000)

		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId)
	}, [targetDate]) // Dependency array, re-run the effect if targetDate changes

	return (
		<div>
			<p>Time Elapsed: {timeElapsed}</p>
		</div>
	)
}

export default TimeElapsedCounter
