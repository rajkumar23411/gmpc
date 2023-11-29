import PageHeading from "@/components/shared/PageHeading";
import { getAllQueries } from "@/lib/firebase/api";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
const DashboardQueries = () => {
    const [data, setData] = useState<DocumentData>([]);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        setLoading(true);
        const response = await getAllQueries();

        if (response) {
            setData(response);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <PageHeading heading="Customer Queries" />
            {loading ? (
                <div className="text-xl font-sans text-center py-20 animate-pulse animate-infinite">
                    Loading...
                </div>
            ) : data.length === 0 ? (
                <div className="py-20 font-sans text-center text-xl">
                    No queries to show!
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-56 text-lg">Time</TableHead>
                            <TableHead className="text-lg">Name</TableHead>
                            <TableHead className="w-20 text-lg">
                                Contact
                            </TableHead>
                            <TableHead className="text-lg">Email</TableHead>
                            <TableHead className="text-lg">Query</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((data: DocumentData, indx: number) => {
                            return (
                                <TableRow key={indx}>
                                    <TableCell className="font-medium text-red-600 ">
                                        {data.time} at {data.date}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {data.name}
                                    </TableCell>
                                    <TableCell>{data.contact}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.query}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default DashboardQueries;
