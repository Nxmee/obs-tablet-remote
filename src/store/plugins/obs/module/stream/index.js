import actions from './actions'
import mutations from './mutations'

export default {
	state: {
		streaming: false,
		recording: false,
		paused: false,
		resumed: false,
		bytesPerSec: 0,
		kbitsPerSec: 0,
		strain: 0,
		totalStreamTime: 0,
		streamTimecode: 0,
		recTimecode: 0,
		numTotalFrames: 0,
		numDroppedFrames: 0,
		fps: 0
	},
	actions,
	getters: {
		recordingText(state) {
			if (state.recording === true) {
				return state.recTimecode
			}

			if (state.recording === false) {
				return 'Disabled'
			}

			return state.recording
		},
		pausedText(state) {
			if (state.paused === true) {
				return 'Paused'
			}

			if (state.paused === false) {
				return 'Not Paused'
			}

			return state.paused
		},
		streamingText(state) {
			if (state.streaming === true) {
				return state.streamTimecode
			}

			if (state.streaming === false) {
				return 'Offline'
			}

			return state.streaming
		}
	},
	mutations
}
