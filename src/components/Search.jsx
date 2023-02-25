function Search({ handleSearch, search }) {

    return (
        <div>
            <p>Search for a food</p>
            <input type="text" onChange={handleSearch} value={search} placeholder="Search.." />
        </div>
    )
}

export default Search;