import PageHeading from "@/components/shared/PageHeading";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { gmpcDoctors } from "@/lib";
const DocTimings = () => {
    return (
        <div>
            <PageHeading heading="Doctor Timing & Availability" />
            <div className="p-2 lg:p-10 flex items-center justify-center w-full">
                <Table className="w-full lg:w-[90%] border">
                    <TableHeader className="bg-primary">
                        <TableRow className="border">
                            {[
                                "Doctor name",
                                "Education",
                                "Speciality",
                                "Timings",
                            ].map((head) => (
                                <TableHead
                                    key={head}
                                    className="text-white uppercase text-sm md:text-base lg:text-lg"
                                >
                                    {head}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {gmpcDoctors.map((doc, index) => (
                            <TableRow key={index} className="odd:bg-blue-100">
                                <TableCell className="font-medium text-sm lg:text-base">
                                    {doc.name}
                                </TableCell>
                                <TableCell className="text-sm lg:text-base">
                                    {doc.education}
                                </TableCell>
                                <TableCell className="text-sm lg:text-base">
                                    {doc.Speciality}
                                </TableCell>
                                <TableCell className="text-sm lg:text-base">
                                    {doc.timings.map((time) => (
                                        <>
                                            <span key={time}>{time}</span>
                                            <br />
                                        </>
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default DocTimings;
