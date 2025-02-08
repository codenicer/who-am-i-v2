import { useContext, useState, createContext } from 'react'

const DoneLoadingContext = createContext()
const UpdateLoadingContext = createContext()

export function doneLoadingState() {
  return useContext(DoneLoadingContext)
}

export function setDoneLoadingState() {
  return useContext(UpdateLoadingContext)
}

export default function DoneLaoadingProvider({ children }) {
  const [doneLoading, setDoneLoading] = useState(false)

  return (
    <DoneLoadingContext.Provider value={doneLoading}>
      <UpdateLoadingContext.Provider value={setDoneLoading}>
        {children}
      </UpdateLoadingContext.Provider>
    </DoneLoadingContext.Provider>
  )
}
