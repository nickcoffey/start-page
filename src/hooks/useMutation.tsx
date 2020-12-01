import { useState } from 'react'
import { firestore } from '../services'

export type Operation = 'create' | 'update' | 'delete'

const useMutation = <T extends { id: string }>(collection: string, operation: Operation) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = (error: string) => {
    console.error(error)
    setError(true)
  }

  const dbCollection = firestore.collection(collection)

  const runMutation = ({ id, ...fields }: { id?: string } & Omit<T, 'id'>) => {
    switch (operation) {
      case 'create':
        dbCollection
          .add(fields)
          .then((doc) => {
            setData({ id: doc.id, ...fields } as T)
            setLoading(false)
          })
          .catch(handleError)
        break
      case 'update':
        console.log(`UPDATE${id}`)
        dbCollection
          .doc(id)
          .set(fields)
          .then(() => {
            setData({ id, ...fields } as T)
            setLoading(false)
          })
          .catch(handleError)
        break
      case 'delete':
        console.log('DELETE')
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
