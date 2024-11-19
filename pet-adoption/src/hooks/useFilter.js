import { useState } from 'react'

export default function useFilter(pets) {
    const [filters, setFilters] = useState({ race: '', type: '', location: '' })

    const filterdPets = pets.filter ((pet) => {
        return (
            (filters.race ? pet.race.toLowCase().includes(filters.race.toLowerCase()) : true) &&
            (filters.type ? pet.type.toLowCase().includes(filters.type.toLowerCase()) : true) &&
            (filters.location ? pet.location.toLowCase().includes(filters.location.toLowerCase()) : true)

        )
    })

    const updateFilter = (field, value) => {
        setFilters({ ...filters, [field]: value })
    }

    return { filterdPets, updateFilter, filters }
}