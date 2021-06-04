import { RefObject, useEffect, useRef } from 'react'

function useEventListener(
  eventName,
  handler,
  element,
) {
  // Create a ref that stores handler
  const savedHandler = useRef()

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) {
        savedHandler.current(event)
      }
    }

    targetElement.addEventListener(eventName, eventListener)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, handler])
}
export default function UseEventListener() {
  const buttonRef = useRef(null)

  const onScroll = (event) => {
    console.log('window scrolled!', event)
  }

  const onClick = (event) => {
    console.log('button clicked!', event)
  }

  // example with window based event
  // useEventListener('scroll', onScroll, buttonRef)

  // example with element based event
  useEventListener('click', onClick, window)

  return (
    <div style={{ minHeight: '200vh', border: '1px solid red'}}>
      UseEventListener
      <button ref={buttonRef}>Click me</button>
    </div>
  )
}
