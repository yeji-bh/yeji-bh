import React from "react"

const List = ({ data, Element }) => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center" style={{ maxWidth: 1000 }}>
      {data.map(item => <Element key={item.id} {...item} />)}
    </div>
  )
}
export default List;