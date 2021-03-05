import React from 'react'

function SingleVillagerCard({ villager }) {
    return (
        <div className="single-villager">

            <div>{villager.name}</div>
            <div>{villager.species}</div>
            <div>{villager.personality}</div>
        </div>
    )
}

export default SingleVillagerCard

/* <img src="{villager.image_url}&thumbsize=50" alt='villager'></img> */
// <img src={villager.image_url} alt='villager'></img>