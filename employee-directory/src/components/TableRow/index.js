import React, { useContext } from "react";
import TableBody from "../TableBody";
import "./style.css";
import DataHook from "../../utils/DataContext";

const TableRow = () => {
    const context = useContext(DataHook);

    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <TableBody />
            </table>
        </div>
    );
}

export default TableRow;
