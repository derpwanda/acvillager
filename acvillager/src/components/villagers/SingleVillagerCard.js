import React from 'react'

function SingleVillagerCard({ villager }) {
    return (
        <div className='villager-card'>
            {villager.name}
        </div>
    )
}

export default SingleVillagerCard
