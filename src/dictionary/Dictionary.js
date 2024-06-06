import styles from './Dictionary.module.css'
import { useState } from 'react'; 

const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


const Dictionary = () =>
{
    const [word,setWord] = useState('');
    const [definition, setDefinition] = useState(null);

    const handleSearch = () =>
    {
        const filteredValue = dictionary.filter((key) => (key.word === word))
        setDefinition(filteredValue[0]);
    }

    return(
        <div className={styles.container}>
            <h1>Dictionary App</h1>
            <input type="text" value={word} placeholder="Search for a word..." onChange={(e)=> setWord(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <p style={{marginTop:0, fontWeight:700}}><bold>Definition:</bold></p>
            {definition === undefined ?  
            <p>Word not found in the dictionary.</p> : 
            <p>{definition?.meaning}</p>}
        </div>
    )
}

export default Dictionary