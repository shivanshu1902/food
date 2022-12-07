import React from 'react'

const ShowMore = ({num,setNum}) => {
    const showMoreItems=()=>{
        setNum(num+1)
    }
    
    return (
        <button className="showbtn" onClick={showMoreItems}>
            Show More Items
        </button>
    )
}

export default ShowMore