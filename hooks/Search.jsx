import { Box } from '@mui/system';
import {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Search = (items) => {
const [data, setData] = useState("items");
const [keyword, setKeyword] = useState("");

useEffect(()=>{
    if(keyword.length > 3){
        let tmp = data.filter((item)=>
        item.title.toLowerCase().includes(keyword.toLowerCase()));
        setData(tmp);
    }
else if(keyword.length < 3){
    setData(items)
}
},[keyword])
  return (
    <Stack  sx={{width: 600, py:'2em'}}>
        <TextField  label="Search"/>
    </Stack>
  )
}

export default Search