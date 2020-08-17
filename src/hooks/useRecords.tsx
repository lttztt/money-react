import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createAt: string // ISO 8601
}

type newRecordItem = Omit<RecordItem, 'createAt'>  // ts专门过滤不用类型的函数

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([])

  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem('records') || '[]'))
  }, [])  // 相当于 after mount

  useUpdate(()=> {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records] )

  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createAt: (new Date()).toISOString()}
    setRecords([...records, record])
  }

  return {records, addRecord}
}
