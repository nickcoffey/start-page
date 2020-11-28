import { useState } from 'react'
import { firestore } from '../services'

type Operation = 'create' | 'update' | 'delete'

const useMutation = <T,>(collection: string, operation: Operation) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = (error: string) => {
    console.error(error)
    setError(true)
  }

  const dbCollection = firestore.collection(collection)

  const runMutation = (input: { id?: string } & T) => {
    switch (operation) {
      case 'create':
        dbCollection
          .doc()
          .set(input)
          .then(() => {
            setData(input)
            setLoading(false)
          })
          .catch(handleError)
        break
      default:
        setLoading(false)
        setError(true)
        break
    }
  }

  return { data, loading, error, runMutation }
}

export default useMutation
