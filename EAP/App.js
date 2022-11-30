import { getInstitutions } from "./api/axios";
import { useState, useEffect } from "react";



import SearchBar from "./components/SearchBar";
import ListPage from "./components/List";

export default function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getInstitutions().then(json => {
      setPosts(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
  }, [])

  return (
    <>
      <SearchBar posts={posts} setSearchResults={searchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )

}