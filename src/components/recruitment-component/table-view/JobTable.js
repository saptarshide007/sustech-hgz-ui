import { JobTypeData } from "../data/Data";
import { Table } from "react-bootstrap";
import { Slide } from "react-reveal";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import CreateType from "../forms/secondary-forms/CreateType";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'code', headerName: 'Job Type Code', width: 200 },
  { field: 'description', headerName: 'Type Description', width: 222 },
];

const JobTable = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Slide top>
      <div style={{ display: "inline"}}>
      <div style={{ height: 400, width: '55%' , marginLeft:"10px",float:"left"}}>
      <DataGrid
        rows={getRows(JobTypeData.getList())}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
      </div>
      <div style={{float:"left"}}>
      <FloatingActionButtons handleClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Form.Floating className="mb-2">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">Job Type Code</label>
        </Form.Floating>
        <Form.Floating className="mb-2">
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">Description</label>
        </Form.Floating>
      </Popover>
      </div>
    </div>
    
    </Slide>
  );
};
function FloatingActionButtons(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={(event)=>props.handleClick(event)}size="small" >
        <AddIcon/>
      </Fab>
    </Box>
  );
}
const getRows=(typeArr)=>
{
  let i=1;
  console.log(typeArr.map((value) => ({id:1, code:value.code,description:value.description})));
 return typeArr.map((value) => ({id:i++, code:value.code,description:value.description}));
}

export default JobTable;
