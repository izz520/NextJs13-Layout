import React from 'react'
interface IDetail {
  id: number;
  name: string;
  time: string
}
interface IList {
  data: IDetail[],
  status: number;
  message: string
}
export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://www.fastmock.site/mock/7c33a847ff6e800257113e4b4ec3610c/yasol/blog/${params.id}`);
  const detailRes = await res.json()

  return {
    title: `SDemo-${params.id}-${detailRes.time}`,
  }
}


const SDemo = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://www.fastmock.site/mock/7c33a847ff6e800257113e4b4ec3610c/yasol/blog/${params.id}`);
  const detailRes = await res.json()
  console.log(detailRes);
  return (
    <div>{`SDemo-${params.id}-${detailRes.time}`}</div>
  )
}

export default SDemo