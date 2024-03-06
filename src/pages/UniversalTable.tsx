import React, { useState, useEffect, useCallback } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Table } from '../components/Table';
import Filter from '../components/Filter/Filter';
import { Modal } from '../components/Modal';

export interface CommonItem {
  id: number;
  [key: string]: unknown;
}
export interface UniversalTable {
  data: CommonItem[];
}

function UniversalTable({ data }: UniversalTable) {
  const [originalData, setOriginalData] = useState<CommonItem[]>(data);
  const [filteredData, setFilteredData] = useState<CommonItem[]>(data);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>(-1);

  useEffect(() => {
    setOriginalData(data); // update original data if change props
    setFilteredData(data); // update filter data if change props
  }, [data]);

  const applyFilter = useCallback(
    (filtered: CommonItem[]) => {
      setFilteredData(filtered);
    },
    [setFilteredData]
  );

  const openModal = (value: string, rowIndex: number) => {
    setIsOpenModal(true);
    setEditValue(value);
    setSelectedRowIndex(rowIndex);
  };

  const saveEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const updatedData = [...originalData];
    const textFieldKey = Object.keys(updatedData[selectedRowIndex]).find(
      (key) =>
        typeof updatedData[selectedRowIndex][key] === 'string' ||
        typeof updatedData[selectedRowIndex][key] === 'number'
    );
    if (textFieldKey) {
      updatedData[selectedRowIndex] = {
        ...updatedData[selectedRowIndex],
        [textFieldKey]: editValue,
      };
      setOriginalData(updatedData);
      setFilteredData(updatedData);
    }
    setIsOpenModal(false);
  };

  useHotkeys('esc', () => setIsOpenModal(false));

  return (
    <>
      <Filter
        data={filteredData}
        applyFilter={applyFilter}
        originalData={originalData}
      />
      <Table
        headData={Object.keys(originalData[0])}
        bodyData={filteredData}
        openModal={openModal}
      />
      <Modal
        isOpenModal={isOpenModal}
        title="Edit"
        setIsOpenModal={setIsOpenModal}
        name="Name"
        editValue={editValue}
        setEditValue={setEditValue}
        saveEdit={saveEdit}
      />
    </>
  );
}

export default UniversalTable;
