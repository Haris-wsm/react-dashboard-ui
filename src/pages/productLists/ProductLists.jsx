import './productLists.css';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummy';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

export default function ProductLists() {
  const [data, setdata] = useState(productRows);

  const handleRemove = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const column = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Product',
      headerName: 'Product',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.avatar} alt="" />
            {params.row.name}
          </div>
        );
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      width: 150
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleRemove(params.row.id)}
            />
          </>
        );
      }
    }
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={column}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
