import PageHeading from "@/components/shared/PageHeading";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { fetchAppointmentData } from "@/lib/firebase/api";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

const DashboardAppointments = () => {
    const [data, setData] = useState<DocumentData>([]);
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        setLoading(true);
        const response = await fetchAppointmentData();
        if (response) {
            setData(response);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const timerId = setInterval(() => {
            fetchData();
        }, 5 * 60 * 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            <PageHeading heading="Customer Appointments" />
            <div className="w-full flex justify-between p-2">
                <div className="font-sans font-medium">
                    Total Appointments: {data?.length}
                </div>
                <button className="text-green-600" onClick={fetchData}>
                    Refresh
                </button>
            </div>
            {loading ? (
                <div className="text-xl font-sans text-center py-20 animate-pulse animate-infinite">
                    Loading...
                </div>
            ) : data.length === 0 ? (
                <div className="py-20 font-sans text-center text-xl w-full">
                    No appointments to show!
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-56">Time</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="w-20">Age</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Service Needed</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data: DocumentData, indx: number) => {
                            return (
                                <TableRow key={indx}>
                                    <TableCell className="font-medium text-red-600 ">
                                        {data.time} {data.date}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {data.name}
                                    </TableCell>
                                    <TableCell>{data.age}</TableCell>
                                    <TableCell>{data.address}</TableCell>
                                    <TableCell>{data.contact}</TableCell>
                                    <TableCell>{data.service}</TableCell>
                                    <TableCell>{data.description}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default DashboardAppointments;
