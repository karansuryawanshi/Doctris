import React from 'react'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart } from "react-google-charts";
import ProgressBar from "@ramonak/react-progress-bar";

const heartbeatData = [
  ["rate", "Heardrate"],
  ["", 15],
  ["", 20],
  ["", 10],
  ["", 45],
  ["", 20],
  ["", 10],
  ["", 5],
];

const hemoglobinData = [
  ["rate", "Heardrate"],
  ["", 10],
  ["", 25],
  ["", 30],
  ["", 54],
  ["", 45],
  ["", 39],
  ["", 15],
];

const options = {
   // title: "Company Performance",
  curveType: "function",
  legend: { position: "none" },
};

const MonthlyReport = [
  {
  heading:"Treatment report",
  percentage:"22"
  },
  {
    heading:"State of being report",
    percentage:"79"
  },
  {
    heading:"Health department report",
    percentage:"95"
  },
  {
    heading:"Questionnaire",
    percentage:"90"
  },
  {
    heading:"Covid-19 report",
    percentage:"75"
  },
  {
    heading:"Blood pressure report",
    percentage:"97"
  },
  {
    heading:"Water report",
    percentage:"93"
  },
  {
    heading:"Heart report",
    percentage:"80"
  },
    
]

const MainDashboard = () => {

  return (
  <div className='h-max px-3'>
    <div className='text-lg font-semibold pb-4'>
        <p>Dashboard</p>
    </div>
    <div className='flex'>
        <div className='space-y-8'>
            <div className='flex space-x-10 w-1/2'>
                <div className='flex'>
                    <div className='border border-1 rounded-xl'>
                        <div className='flex p-4'>
                            <div className='flex space-x-2'>
                                <p className='text-base font-semibold text-gray-700'>Water</p>
                                <p className='text-xs border-2 font-bold px-2 py-1 rounded-full border-blue-500 bg-blue-50 text-blue-500'>93%</p>
                            </div>
                            <div className='flex items-center justify-end ml-24'>
                                <Icon className='text-blue-500 text-2xl' icon={"lets-icons:water"}></Icon>
                            </div>
                        </div>
                        <div className=' w-64 p-8'>
                            <CircularProgressbar value={90} />
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='border border-1 rounded-xl'>
                        <div className='flex p-4'>
                            <div className='flex space-x-2'>
                                <p className='text-base font-semibold text-gray-700'>Heartbeat</p>
                                <p className='text-xs border-2 font-bold px-2 py-1 rounded-full border-red-400 bg-red-50 text-red-400'>80 bpm</p>
                            </div>
                            <div className='flex items-center justify-end ml-12'>
                                <Icon className='text-red-400 text-2xl' icon={"solar:heart-bold"}></Icon>
                            </div>
                        </div>
                        <div className=''>
                            <Chart
                            chartType="LineChart"
                            width="260px"
                            height="250px"
                            data={heartbeatData}
                            options={options}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex space-x-10 w-1/2'>
                <div className='flex'>
                    <div className='border border-1 rounded-xl'>
                        <div className='flex p-4'>
                            <div className='flex space-x-2'>
                                <p className='text-base font-semibold text-gray-700'>Hemoglobin</p>
                                <p className='text-xs border-2 font-bold px-2 py-1 rounded-full border-orange-400 bg-orange-50 text-orange-400'>90 mg/dL</p>
                            </div>
                            <div className='flex items-center justify-end ml-6'>
                                <Icon className='text-orange-400 text-2xl' icon={"svg-spinners:clock"}></Icon>
                            </div>
                        </div>
                        <div className=''>
                            <Chart
                            chartType="LineChart"
                            width="260px"
                            height="250px"
                            data={hemoglobinData}
                            options={options}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='border border-1 rounded-xl'>
                        <div className='flex p-4'>
                            <div className='flex space-x-2'>
                                <p className='text-base font-semibold text-gray-700'>Sugar Level</p>
                                <p className='text-xs border-2 font-bold px-2 py-1 rounded-full border-green-500 bg-green-50 text-green-500'>19.5 g/dL</p>
                            </div>
                            <div className='flex items-center justify-end ml-8'>
                                <Icon className='text-green-500 text-2xl' icon={"game-icons:chemical-drop"}></Icon>
                            </div>
                        </div>
                        <div className=' w-64 p-8'>
                            <CircularProgressbar value={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='border border-1 p-4 w-96 mx-8 rounded-xl'>
            <div className='font-semibold text-gray-700'>
                Monthly Reports
            </div>
            {MonthlyReport.map((item)=>{
              return(
              <div>
                  <div className='flex mt-5 mb-3'>
                      <p className='text-gray-600 font-semibold'>{item.heading}</p>
                      <p className='ml-20 text-gray-600'>{item.percentage}%</p>
                  </div>
                  <div>
                      <ProgressBar 
                          completed={item.percentage}
                          bgColor="#3b82f6"
                          labelColor="#3b82f6"
                          />
                  </div>
              </div>
              )
            })}
        </div>
    </div>
    <div className='pb-4'>
      <div className='text-lg font-semibold pb-4'>
          <p>Contact us</p>
      </div>
      <div className='flex space-x-4'>
        <div className='w-1/2 border border-1 rounded-xl'>
            <div className='flex items-center justify-center p-8'>
              <div className='p-4 rounded-full bg-blue-100'>
                <Icon className='text-4xl border-1 text-blue-700' icon={"streamline:mail-send-email-message"}></Icon>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-xl font-semibold'>New Messages</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-base text-blue-600 flex items-center justify-center'>Read More <Icon className='mt-1 ml-1' icon={"ep:right"}></Icon> </p>
            </div>
        </div>
        <div className='w-1/2 border border-1 rounded-xl'>
          <div className='flex items-center justify-center p-8'>
              <div className='p-4 rounded-full bg-blue-100'>
                <Icon className='text-4xl border-1 text-blue-700' icon={"mdi:message-star-outline"}></Icon>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-xl font-semibold'>Latest Proposals</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-base pb-4 text-blue-600 flex items-center justify-center'>Read More <Icon className='mt-1 ml-1' icon={"ep:right"}></Icon> </p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainDashboard
