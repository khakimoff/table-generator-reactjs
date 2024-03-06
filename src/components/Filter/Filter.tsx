import React, { useState, useEffect } from 'react';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import filterImg from '../../assets/filter.png';
import './index.css';
import { CommonItem } from '../../pages/UniversalTable';

interface FulterProps {
  data: CommonItem[];
  originalData: CommonItem[];
  applyFilter: (filtered: CommonItem[]) => void;
}
interface Filters {
  text: string;
  booleanField: string | undefined;
}

function Filter({ data, originalData, applyFilter }: FulterProps) {
  const [filters, setFilters] = useState<Filters>({
    text: '',
    booleanField: undefined,
  });
  const [filteredData, setFilteredData] = useState<CommonItem[]>(data);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, text: e.target.value });
  };

  useEffect(() => {
    setFilteredData(originalData);
  }, [originalData]);

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const filtered = filteredData.filter((item) => {
      const textMatch = filters.text
        ? Object.values(item).some(
            (val) =>
              typeof val === 'string' &&
              val.toLowerCase().includes(filters.text.toLowerCase())
          )
        : true;
      const booleanMatch = filters.booleanField
        ? item[filters.booleanField] === true
        : true;
      return textMatch && booleanMatch;
    });
    applyFilter(filtered);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      booleanField: e.target.value !== 'none' ? e.target.value : undefined,
    });
  };

  return (
    <form className="filter">
      <Input
        value={filters.text}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <Select
        value={filters.booleanField || 'none'}
        onChange={handleSelectChange}
        options={Object.keys(originalData[0])}
        data={originalData}
      />
      <Button
        onClick={handleFilterClick}
        title="Filter"
        isImage={true}
        srcImg={filterImg}
        heightImg={13}
        alt="filter"
      />
    </form>
  );
}

export default Filter;
