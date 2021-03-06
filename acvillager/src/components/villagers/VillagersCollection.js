import React, { useState } from 'react'
import SingleVillagerCard from './SingleVillagerCard'

function VillagersCollection({ pureVillagerArray, loading }) {

    const [searchVillager, setSearchVillager] = useState('')

    function customFilter(character) {
        if (searchVillager === "") {
            return character
        } else if (character.name.toLowerCase().includes(searchVillager.toLowerCase())) {
            return character
        }
    }


    if (loading) {
        return <h3>loading...</h3>
    }

    return (
        <div>
            <input type="text" placeholder="villager name..." name="villager-search" onChange={(event) => {
                setSearchVillager(event.target.value)
            }} />
            <section className="villager-list">
                {pureVillagerArray.filter((character) => {
                    return customFilter(character)
                }).map((villager, index) => (
                    <SingleVillagerCard key={index} villager={villager}>
                    </SingleVillagerCard>
                ))}
            </section>
        </div>
    )
}

export default VillagersCollection
