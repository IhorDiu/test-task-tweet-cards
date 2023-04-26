import React from 'react';
import {statusFilters} from 'services/statusFilters'

import { Select } from './Dropdown.styled';

export const Dropdown = ({ filter, onFilterChange }) => {
  
  const handleChange = event => {
    onFilterChange(event.target.value)
  };

  return (
    <div>
      <Select value={filter} onChange={handleChange}>
        {statusFilters.map(filter => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </Select>
    </div>
  );
  
};


