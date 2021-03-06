import React from 'react'

const SingleVillagerCard = ({ villager }) => {
    // "https://dodo.ac/np/images/8/85/June_NH.png"
    // "https://dodo.ac/np/images/thumb/8/85/June_NH.png/40px-June_NH.png"

    let characterURL = villager.image_url
    // console.log(characterURL)

    return (
        <div className="single-villager">
            <img src={characterURL} alt='villager'></img>
            <a href={villager.url}><div>{villager.name}</div></a>
        </div>
    )
}

export default SingleVillagerCard

/* <img src="{villager.image_url}&thumbsize=50" alt='villager'></img> */
// <img src={villager.image_url} alt='villager'></img>