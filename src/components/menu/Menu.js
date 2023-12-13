import { useState } from "react";

export default function Menu({handle}) {
    const [difficulty, setDifficulty] = useState(8)

    const handleChange = (event) => {
        let selectedDifficulty = parseInt(event.target.value)
        setDifficulty(selectedDifficulty)
    }

    return (
        <section>
            <form>
                <button type="button" onClick={() => {handle(difficulty)}}>Play</button>
                <label>Difficulty
                    <select value={difficulty} onChange={handleChange}>
                        <option value={8} selected>8</option>
                        <option value={16}>16</option>
                        <option value={24}>24</option>
                    </select>
                </label>
            </form>
        </section>
    )
}