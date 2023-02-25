import { Divider, Input } from 'antd';


function Search({ handleSearch, search }) {

    return (
        <div>
            <Divider>Search</Divider>
            <Input type="text" onChange={handleSearch} value={search} placeholder="Search.." />
        </div>
    )
}

export default Search;