import React from 'react'
import SingleVillagerCard from './SingleVillagerCard'

function VillagersCollection({villagers}) {
    return (
        <div className="villager-collection">
            {villagers.map( (villager) => (
                <SingleVillagerCard key={villager.id} villager={villager}>
                </SingleVillagerCard>
            ))}
        </div>
    )
}

export default VillagersCollection
