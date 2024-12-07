import { useMemo } from "react";
import { useTable } from "react-table";

const Table = ({data}) => {
    const columns = useMemo(() => 
        [
            { Header: "ID", accessor: "id" },
            { Header: "First Name", accessor: "first_name" },
            { Header: "Last Name", accessor: "last_name" },
            { Header: "Email", accessor: "email" },
            { Header: "Phone", accessor: "phone" },
            { Header: "State", accessor: "state" },
            { Header: "City", accessor: "city" },
            { Header: "Address", accessor: "address" }
        ]    
    )


    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns,data})

    return (
        <div>
            <table {...getTableBodyProps}>
                <thead>
                    
                </thead>
            </table>
        </div>
    )
}
