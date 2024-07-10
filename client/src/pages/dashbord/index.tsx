import { useUser } from "@clerk/clerk-react";
import { FinacialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./finacial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-contesxt";
import { useMemo } from "react";
export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <FinacialRecordForm />
      <div>Total Monthly: ${totalMonthly}</div>
      <FinancialRecordList />
    </div>
  );
};