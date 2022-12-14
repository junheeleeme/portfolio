import '@google/model-viewer'

const Voxel = () => {
  return (
    <>
      <model-viewer
        src="/juni-coding-voxel.gltf"
        camera-controls
        autoplay
        auto-rotate
        shadow-intensity="2.5"
        shadow-softness="1"
        alt="꾸생 Voxel Avatar"
        camera-orbit="150deg 65deg 130%"
        environment-image="neutral"
        interaction-prompt="none"
        min-field-of-view="10deg"
        max-field-of-view="130deg"
        max-camera-orbit="Infinity 180deg auto"
        min-camera-orbit="-Infinity 0deg auto"
        interpolation-decay="30"
        auto-rotate-delay="0"
        // rotation-per-second={speedTable[0] + 'deg'}
        exposure="1"
        style={{ width: '100%', height: 'calc(100vh - (102px + 2em))', '--progress-bar-height': '0', '--progress-mask': 'none', '--poster-color': 'transparent' }}
      />
    </>
  )
}

export default Voxel
