import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { ICellRendererParams } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';
import { useMemo, useState } from 'react';

import { SerializedPokemon } from '@/types';

export type Props = { data: SerializedPokemon[] };

export const Table = ({ data }: Props) => {
  const pokeImageRenderer = (params: ICellRendererParams) => {
    return (
      /* Image */
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        style={{ maxHeight: '50px' }}
        className="ml-auto rounded-lg border-slate-300 border p-2 bg-white"
        src={params.value}
        aria-label={params.value}
        alt={params.value}
      />
    );
  };
  const [columnDefs] = useState([
    {
      field: 'name',
      headerName: '',
    },
    {
      field: 'image',
      headerName: '',
      cellRenderer: pokeImageRenderer,
    },
    {
      field: 'hp',
      headerName: 'HP',
    },
    {
      field: 'attack',
      headerName: 'Attack',
    },
    {
      field: 'defense',
      headerName: 'Defense',
    },
    {
      field: 'spAttack',
      headerName: 'Sp. Attack',
    },
    {
      field: 'spDefense',
      headerName: 'Sp. Defense',
    },
    {
      field: 'speed',
      headerName: 'Speed',
    },
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      flex: 1,
    }),
    [],
  );

  const pokeData = data.map((pokemon) => {
    const { name, image, stats } = pokemon;
    return {
      name,
      image,
      hp: stats.HP,
      attack: stats.Attack,
      defense: stats.Defense,
      spAttack: stats['Sp. Attack'],
      spDefense: stats['Sp. Defense'],
      speed: stats.Speed,
    };
  });

  return (
    <div
      id="myGrid"
      style={{
        width: '100%',
        margin: '25px 0px',
        height: 500,
      }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={pokeData}
        rowHeight={80}
      />
    </div>
  );
};
