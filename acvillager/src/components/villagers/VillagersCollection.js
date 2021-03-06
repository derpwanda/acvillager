import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleVillagerCard from './SingleVillagerCard'

const VillagersCollection = () => {

    const [villagers, setVillagers] = useState([])

    const [searchVillager, setSearchVillager] = useState('')

    useEffect(() => {
        fetchVillagers();
    }, [])

    const fetchVillagers = () => {
        // required headers for using Nookpedia API
        const config = {
            headers:
            {
                'X-API-KEY': `${process.env.REACT_APP_NOOKAPIKEY}`,
                'Accept-Version': '1.0.0'
            }
        }

        axios
            .get(`https://api.nookipedia.com/villagers`, config)
            .then(res =>
                setVillagers(res.data),
            )
            .catch(error => console.log(error));
    }

    const customFilter = (character) => {
        if (searchVillager === "") {
            return character
        } else if (character.name.toLowerCase().includes(searchVillager.toLowerCase())) {
            return character
        }
    }

    return (
        <div>
            <input type="text" placeholder="villager name..." name="villager-search" onChange={(event) => {
                setSearchVillager(event.target.value)
            }} />

            <section className="villager-list">
                {villagers.filter((character) => {
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