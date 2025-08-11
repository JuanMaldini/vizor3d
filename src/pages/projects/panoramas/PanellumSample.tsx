import { useCallback, useEffect, useMemo, useState } from 'react'
import ReactPannellum, { addScene } from 'react-pannellum'
import type { PannellumSetup } from '../../../types/PanoramasConfig/panellumConfig_SampleAI'

export default function PanellumSample({ setup }: { setup: PannellumSetup }) {
	const { id, firstSceneId, first, scenes, defaults } = setup
	const [ready, setReady] = useState(false)

	const firstConfig = useMemo(() => ({ ...(defaults || {}), ...(first?.config || {}) }), [defaults, first])

	useEffect(() => {
		if (!ready) return
		if (!scenes) return

			Object.entries(scenes).forEach(([sceneId, def]) => {
			if (!def) return
			if (sceneId === firstSceneId) return
			const cfg = { ...(defaults || {}), ...(def.config || {}) }
			addScene(sceneId, { ...cfg, imageSource: def.imageSource })
		})
	}, [ready, scenes, defaults, firstSceneId])

		const handleLoaded = useCallback(() => setReady(true), [])
		const imgSrc = first?.imageSource

	return (
		<ReactPannellum
			id={id}
			sceneId={firstSceneId}
				imageSource={imgSrc}
			config={firstConfig}
			style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', background: '#000' }}
				onPanoramaLoaded={handleLoaded}
		/>
	)
}
