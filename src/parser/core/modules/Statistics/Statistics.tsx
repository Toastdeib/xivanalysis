import {t} from '@lingui/macro'
import {Analyser, DisplayMode} from 'parser/core/Analyser'
import React from 'react'
import DISPLAY_ORDER from '../DISPLAY_ORDER'
import {StatisticComponent} from './StatisticComponent'
import styles from './Statistics.module.css'

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export type ColumnSpan = 1 | 2 | 3 | 4

export interface Statistic {
	Content: React.ComponentType
	Info?: React.ComponentType
	width?: ColumnSpan
	height?: number
}

export class Statistics extends Analyser {
	static handle = 'statistics'
	// tslint:disable-next-line:variable-name
	static title = t('core.statistics.title')`Statistics`
	static displayOrder = DISPLAY_ORDER.STATISTICS
	static displayMode = DisplayMode.RAW

	private statistics: Statistic[] = []

	add(statistic: Statistic) {
		this.statistics.push(statistic)
	}

	output() {
		if (!this.statistics.length) {
			return false
		}

		return (
			<div className={styles.statistics}>
				{this.statistics.map((statistic, i) => (
					<StatisticComponent key={i} statistic={statistic}/>
				))}
			</div>
		)
	}
}
