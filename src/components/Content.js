import React from "react";
import { Button, CardContent, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

const Content = (props) => {
    return (
        <div className="casino_content">
            <Table size="large" stickyHeader={true}>
                <TableHead>
                    <TableCell>ID</TableCell>
                    <TableCell>Slot 1</TableCell>
                    <TableCell>Slot 2</TableCell>
                    <TableCell>Slot 3</TableCell>
                    <TableCell>Timestamp</TableCell>
                </TableHead>
                <TableBody>
                {props.results.map((elem) => {
            return (
              <TableRow>
                <TableCell>{elem.id}</TableCell>
                <TableCell>{elem.slotOne}</TableCell>
                <TableCell>{elem.slotTwo}</TableCell>
                <TableCell>{elem.slotThree}</TableCell>
                <TableCell>{elem.time}</TableCell>
              </TableRow>
            );
        })}
            </TableBody>
            </Table>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => props.setOpenPopup(true)}
            >Play</Button>
        </div>
    );
};

export default Content;