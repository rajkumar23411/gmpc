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
    const fetchData = async () => {
        const response = await fetchAppointmentData();

        if (response) setData(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <PageHeading heading="Customer Appointments" />
            {data.length === 0 ? (
                <h1 className="flex-center py-20 text-lg md:text-xl">
                    No appointments to show
                </h1>
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
                            console.log(data.name);

                            return (
                                <TableRow key={indx}>
                                    <TableCell className="font-medium text-red-600 ">
                                        {data.time} at {data.date}
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
