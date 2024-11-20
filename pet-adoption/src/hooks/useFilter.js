import { useState } from 'react';

export default function useFilter(pets) {
  const [filters, setFilters] = useState({ race: '', type: '', location: '' });

  const filteredPets = pets.filter((pet) => {
    return (
      (filters.race ? pet.race.toLowerCase().includes(filters.race.toLowerCase()) : true) &&
      (filters.type ? pet.type.toLowerCase().includes(filters.type.toLowerCase()) : true) &&
      (filters.location ? pet.location.toLowerCase().includes(filters.location.toLowerCase()) : true)
    );
  });

  const updateFilter = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  return { filteredPets, updateFilter, filters };
}