'use client'

import { useState } from "react"

export default function SearchFunctionalty() {
    const [searchInput,setSearchInput]= useState("")
const [filterData  ,setFilterData] = useState([])
  const dataList = [
    'T-shirt',
    'Hoodie',
    'Jeans',
    'Kurta',
    'Dress',
    'Ethnic Wear',
    'Activewear',
    'Winter Jacket'
  ]

const handleSearch = async(e)=>{
    console.log(e.target.value)
    setSearchInput(e.target.value)
  setFilterData(dataList?.filter(e=>e.toLocaleLowerCase().includes(searchInput)))
}
        
  return (
    <div className="max-w-md mx-auto  ">
      <input
      onChange={handleSearch}
        type="text"
        placeholder="Search items..."
        className="w-full border border-gray-300 px-4 py-1  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

        {filterData&& filterData.map((item, index) => (
      <ul className="mt-4 space-y-2">
          <li key={index} className="p-2 bg-gray-100 rounded">
            {item}
          </li>
      </ul>
        ))}
    </div>
  )
}
