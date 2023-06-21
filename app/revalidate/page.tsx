import axios from 'axios'
import React from 'react'
export const revalidate = 60;
const Revalidate =async () => {
  // const res = await axios.get("https://www.fastmock.site/mock/7c33a847ff6e800257113e4b4ec3610c/yasol/api/revalidate");
  const res = await fetch("https://www.fastmock.site/mock/7c33a847ff6e800257113e4b4ec3610c/yasol/api/revalidate",{
    next:{
      revalidate:60
    }
  })
  const data = await res.json()
  console.log(data);
  return (
    <div>Revalidate--{data.time}</div>
  )
}

export default Revalidate