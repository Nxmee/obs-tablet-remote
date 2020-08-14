<template>
	<panel-wrapper :content-class="['button-grid', 'has-per-row-1', 'overflow-y-auto']">
		<template slot="name">
			Stream Status
		</template>
		<DangerousButton
			:class="[streaming ? 'is-active' : 'is-inactive']"
			:vibrate="true"
			@click="setStreaming({status: !streaming})"
		>
			Streaming: {{ streamingText }}
		</DangerousButton>
		<DangerousButton
			:class="[recording ? 'is-active' : 'is-inactive']"
			:vibrate="true"
			@click="setRecording({status: !recording})"
		>
			Recording: {{ recordingText }}
		</DangerousButton>
		<DangerousButton
			:class="[paused ? 'is-active' : 'is-inactive']"
			:vibrate="true"
			@click="setPaused({status: !paused})"
		>
			Pause
		</DangerousButton>
		<DangerousButton
			:class="[paused ? 'is-active' : 'is-inactive']"
			:vibrate="true"
			@click="setResumed({status: !paused})"
		>
			Resume
		</DangerousButton>
	</panel-wrapper>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

import DangerousButton from '../dangerous-button'
import panelMixin from '@/mixins/panel'

export default {
	components: {
		DangerousButton
	},
	mixins: [panelMixin],
	computed: {
		...mapState('obs', {
			recording: state => state.stream.recording,
			paused: state => state.stream.paused,
			resumed: state => state.stream.resumed,
			recTimecode: state => state.stream.recTimecode,
			streaming: state => state.stream.streaming,
			streamTimecode: state => state.stream.streamTimecode
		}),
		...mapGetters('obs', ['recordingText', 'pausedText', 'streamingText'])
	},
	methods: {
		...mapActions('obs', {
			setRecording: 'stream/recording',
			setPaused: 'stream/paused',
			setResumed: 'stream/resumed',
			setStreaming: 'stream/streaming'
		})
	}
}
</script>
