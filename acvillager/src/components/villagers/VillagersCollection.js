import React, { useState } from 'react'
import SingleVillagerCard from './SingleVillagerCard'

function VillagersCollection({ pureVillagerArray, villagers, loading }) {

    const [searchVillager, setSearchVillager] = useState('')

    if (loading) {
        return <h3>loading...</h3>
    }

    return (
        <div>
            <input type="text" placeholder="villager name..." name="villager-search" onChange={(event) => {
                setSearchVillager(event.target.value)
                console.log(event.target.value)
            }} />
            <section className="villager-list">
                {villagers.filter((character) => {
                    if (searchVillager == "") {
                        return character
                    } else if (character.name.toLowerCase().includes(searchVillager.toLowerCase())) {
                        return character
                    }
                }).map(villager => (
                    <SingleVillagerCard key={villager.name} villager={villager}>
                    </SingleVillagerCard>
                ))}
            </section>
        </div>
    )
}

export default VillagersCollection
