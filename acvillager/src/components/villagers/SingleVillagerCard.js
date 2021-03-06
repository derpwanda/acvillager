import React from 'react'

function SingleVillagerCard({ villager }) {
    return (
        <div className="single-villager">
            <img src={villager.image_url} alt='villager'></img>
            <div>{villager.name}</div>
        </div>
    )
}

export default SingleVillagerCard

/* <img src="{villager.image_url}&thumbsize=50" alt='villager'></img> */
// <img src={villager.image_url} alt='villager'></img>