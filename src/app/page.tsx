"use client";
import { useEffect, useState } from "react";
import Login from "@/components/Login";
import Index from "../components/Index";
import axios from "axios";

function NotStarted() {
  return (
    <div className="flex flex-col justify-center items-center b">
      <h1 className="text-2xl font-black	text-red-400">
        Lottery is not started yet
      </h1>
      <p>Come back soon!</p>
    </div>
  );
}

export default function Home() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data..."); // Log when the fetch starts

      try {
        const response = await axios.get("/api/getLotteryStartStatus");
        console.log("Response:", response.data.start); // Log the entire response

        if (response.data) {
          setStatus(response.data.start); // Set the data state
          console.log("Response data:", response.data.start); // Log the response data
        } else {
          console.log("No data in response"); // Log if there's no data
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Log any errors
      }
    };

    fetchData();
  }, []);

  return <>{status ? <Login /> : <NotStarted />}</>;
}
