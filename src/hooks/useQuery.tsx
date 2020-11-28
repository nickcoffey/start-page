import { useState, useEffect } from 'react'
import { firestore } from '../services'

const useQuery = <T,>(collection: string) => {
  const [data, setData] = useState<T[]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = (error: string) => {
    console.error(error)
    setError(true)
  }

  const dbCollection = firestore.collection(collection)

  const runQuery = () => {
    dbCollection
      .get()
      .then((snapshot) => {
        const tempData: T[] = []
        snapshot.forEach((doc) => tempData.push(doc.data() as T))
        setData(tempData)
        setLoading(false)
      })
      .catch(handleError)
  }

  useEffect(() => {
    runQuery()
  }, [])

  return { data, loading, error, refetch: runQuery }
}

export default useQuery
