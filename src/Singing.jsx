import { useRive } from '@rive-app/react-canvas'

const audio = new Audio('/dad-card-singing-1.wav')
audio.loop = true

export default function Singing() {
  const { RiveComponent } = useRive({
    src: 'full-singing.riv',
    stateMachines: 'combined',
    autoplay: true,
    onStateChange: (event) => {
      console.log(event.data)

      if (event.data.includes('singing')) {
        audio.play() // play the audio if "singing" is in event.data
      } else {
        audio.pause() // pause the audio if "singing" is not in event.data
        audio.currentTime = 0 // reset audio to the beginning
      }
    }
  })

  return <RiveComponent />
}
