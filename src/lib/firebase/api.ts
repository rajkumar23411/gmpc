import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { firestore } from "./config";
interface IAppointmentData {
    name: string;
    age: number;
    address: string;
    contact: number;
    service: string;
    description: string;
}

export async function saveAppointmentToDb(data: IAppointmentData) {
    const currentDate = new Date(); // Get the current date and time

    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };
    try {
        const doc = await addDoc(collection(firestore, "appointments"), {
            name: data.name,
            contact: data.contact,
            age: data.age,
            address: data.address,
            service: data.service,
            description: data.description,
            date: currentDate.toLocaleDateString("en-US", dateOptions),
            time: currentDate.toLocaleTimeString("en-us", timeOptions),
        });

        if (!doc) {
            return { status: "fail" };
        }

        return { status: "ok" };
    } catch (error) {
        console.log(error);
    }
}

export async function fetchAppointmentData() {
    try {
        const data: DocumentData[] = [];
        const querySnapshot = await getDocs(
            collection(firestore, "appointments")
        );
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}
