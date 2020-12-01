import { useState, useEffect } from 'react'
import { firestore } from '../services'

const useSubscription = <T extends { id: string }>(collection: string) => {
  const [data, setData] = useState<T[]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleError = (error: string) => {
    console.error(error)
    setError(true)
  }

  const dbCollection = firestore.collection(collection)

  const runQuery = () => {
    dbCollection.onSnapshot(
      (snapshot) => {
        const tempData: T[] = []
        snapshot.forEach((doc) => tempData.push({ id: doc.id, ...doc.data() } as T))
        setData(tempData)
        setLoading(false)
      },
      (err) => handleError(err.message)
    )
  }

  useEffect(() => {
    runQuery()
  }, [])

  return { data, loading, error, refetch: runQuery }
}

export default useSubscription
