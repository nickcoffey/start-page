import { useState, useEffect } from 'react'
import { firestore } from '../services'

type Operation = 'create' | 'read' | 'update' | 'delete'

type Input = {
  id: string
  [key: string]: unknown
}

const useQuery = <T,>(collection: string, operation: Operation, input?: Input) => {
  const [data, setData] = useState<T[]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = (error: string) => {
    console.error(error)
    setError(true)
  }

  const dbCollection = firestore.collection(collection)

  const runQuery = () => {
    switch (operation) {
      case 'read':
        dbCollection
          .get()
          .then((snapshot) => {
            const tempData: T[] = []
            snapshot.forEach((doc) => tempData.push(doc.data() as T))
            setData(tempData)
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

  useEffect(() => {
    runQuery()
  }, [])

  return { data, loading, error, refetch: runQuery }
}

export default useQuery
