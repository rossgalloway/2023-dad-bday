import { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Simple() {
  const { rive, RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: 'bumpy',
    autoplay: true,
    // We can pass the call back to the `useRive` hook
    onStateChange: (event) => {
      console.log(event.data[0])
    }
  })

  const bumpInput = useStateMachineInput(rive, 'bumpy', 'bump')

  // We can also pass the callback to the rive object once it has loaded.
  // NOTE: If you pass the callback to the rive object, you do not need to
  // pass it to the useRive hook as well, and vice versa.
  useEffect(() => {
    if (rive) {
      rive.on('statechange', (event) => {
        console.log(event.data[0])
      })
    }
  }, [rive])

  return (
    <RiveComponent
      style={{ height: '1000px' }}
      onClick={() => bumpInput && bumpInput.fire()}
    />
  )
}
