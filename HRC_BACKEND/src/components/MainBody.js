import React, { Component,useState } from 'react';
import './MainBody.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from './AddButton.js';
import EditButton from './EditButton.js';
import DeleteButton from './DeleteButton.js';
import PredictButton from './PredictButton.js';
import ViewCorrespondenceButton from './ViewCorrespondenceButton.js'
import SearchBarField from './SearchBarField.js';
import MyTable from './Table.js';

const useStyle = makeStyles((theme) => ({
    buttonL:{
      float:'left'
    },
    buttonR:{
        float:'right',
    }
}));

export default function MainBody() {

    const classes=useStyle();
    // const [rows, setrows] = React.useState([]);

    // React.useEffect(() => {
    //     axios.get('http://localhost:8080/1804056/myservlet').then((response) => { 
    //         console.log("data received from api\n",response.data);
    //         setrows(response.data);
    //     });
    //     }, []);

    return (
        <div class="outer">
            <div class="inner">
            <div class="buttons">
            <div style={{display:'flex'}}>
             <PredictButton/>
             <ViewCorrespondenceButton/>
             </div>
             <div style={{display:'flex'}}>
             <AddButton/>
             <EditButton/>
             <DeleteButton/>
            <SearchBarField/>
            </div>
            </div>



            <div>
                <MyTable/>
            </div>
{/* 
            <TableContainer>
            <Table>
                <TableBody>
                    {rows && rows.map( (row,index)  => {
                        return(
                            <TableRow key={index}  hover={true}>
                            <TableCell>{row.custNumber}</TableCell>
                            <TableCell>{row.nameCustomer}</TableCell>
                            <TableCell>{row.dueInDate}</TableCell>
                            <TableCell>{row.totalOpenAmount}</TableCell>
                            <TableCell>{row.invoiceId}</TableCell>
                            <TableCell>{row.notes}</TableCell>
                            </TableRow>
                        )}
                    )}
                </TableBody>
            </Table>
            </TableContainer> */}
            </div>
        </div>
    )
}
