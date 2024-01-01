import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TabFilter from './components/TabFilter'
import CardBook from './components/CardBook'
import { getLibros } from './services/book.js'

const App = () => {
  const [booksStatus, setbooksStatus] = useState([])
  const [textSearch, setTextSearch] = useState('')

  const fetchData = () => {
    const librosSet = getLibros(textSearch)
    setbooksStatus(librosSet)
  }
  const changeTtextSearch = (value) => {
    setTextSearch(value)
  }

  useEffect(() => {
    fetchData()
  }, [textSearch])

  return (
    <>
      <div className="bg-[--colorPrim] min-h-screen">
        <div className="py-2">
          <h1 className="font-extrabold text-4xl">Library_app</h1>
          <div className="mx-0">
            <SearchBar
              textSearch={textSearch}
              changeTtextSearch={changeTtextSearch}
            />
        </div>
        <TabFilter/>
        <CardBook allBooks={booksStatus} />
        </div>
      </div>
    </>
  )
}

export default App
