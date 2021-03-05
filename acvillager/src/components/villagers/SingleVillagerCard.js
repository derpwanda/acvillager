import React from 'react'

function SingleVillagerCard({ villager }) {
    return (
        <div className="single-villager">
            {villager.name}
        </div>
    )
}

export default SingleVillagerCard
