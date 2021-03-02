import React from 'react'
import SingleVillagerCard from '../singleVillager/SingleVillagerCard'

function VillagersCollection({ villagers, loading }) {

    if (loading) {
        return <h3>loading...</h3>
    }

    return (
        <section>
            {villagers.map(villager => (
                <SingleVillagerCard key={villager.index} villager={villager}>
                </SingleVillagerCard>
            ))}
        </section>
    )
}

export default VillagersCollection
