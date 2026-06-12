"use client"
import DashBoardTable from "@/components/Dashboard/DashBoardTable";
import StatsGrid from "@/components/Dashboard/StatsGrid";
import { authClient } from "@/lib/auth-client";

import {
    FileText, Users, Zap, CheckCircle2,
} from "lucide-react";
import { div } from "motion/react-client";

export default function RecruiterPage() {
    const { data: session, isPending, } = authClient.useSession();
    const user = session?.user
         if(isPending){
            return <div>Loading...</div>
         }
    const stats = [
        {
            title: "Total Job Posts",
            value: 48,
            icon: <FileText size={20} />,
        },
        {
            title: "Total Applicants",
            value: "1,284",
            icon: <Users size={20} />,
        },
        {
            title: "Active Jobs",
            value: 18,
            icon: <Zap size={20} />,
        },
        {
            title: "Jobs Closed",
            value: 32,
            icon: <CheckCircle2 size={20} />,
        },
    ];

    return ( 
        <>
        <h2 className="p-5 text-3xl pt-6 font-bold">Wellcome Back, {user.name}</h2>
        <div className="p-6">
            <StatsGrid stats={stats} />
        </div>
     <DashBoardTable></DashBoardTable>
         
        </>
    );
}