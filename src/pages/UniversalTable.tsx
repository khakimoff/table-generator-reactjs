import React, { useState, useEffect, useCallback } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Table } from '../components/Table';
import Filter from '../components/Filter/Filter';
import { Modal } from '../components/Modal';
import { PortalHOC } from '../hoc/PortalHOC';

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
  const [isOpenPortal, setIsOpenPortal] = useState<boolean>(false);
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
    setIsOpenPortal(true);
    setEditValue(value);
    setSelectedRowIndex(rowIndex);
  };

  const saveEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const updatedData = [...originalData];
    const textFieldKey = Object.keys(updatedData[selectedRowIndex]).find(
      (key) => typeof updatedData[selectedRowIndex][key] === 'string'
    );
    if (textFieldKey) {
      updatedData[selectedRowIndex] = {
        ...updatedData[selectedRowIndex],
        [textFieldKey]: editValue,
      };
      setOriginalData(updatedData);
      setFilteredData(updatedData);
    }
    setIsOpenPortal(false);
  };

  useHotkeys('esc', () => setIsOpenPortal(false));

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
      <PortalHOC isOpenPortal={isOpenPortal}>
        <Modal
          setIsOpenPortal={setIsOpenPortal}
          title="Edit"
          name="Name"
          editValue={editValue}
          setEditValue={setEditValue}
          saveEdit={saveEdit}
        />
      </PortalHOC>
    </>
  );
}

export default UniversalTable;
