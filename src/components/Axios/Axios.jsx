import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Axios = ({markPromes}) => {
   const markDataRes =use(markPromes);
    const markData = markDataRes.data;
    const markChartsData = markData.map(studentData => {
        const student = {
            id: studentData.id,
            name:studentData.name,
            bangla:studentData.marks.bangla,
            english:studentData.marks.english,
            math:studentData.marks.math
        }
        const avg = (student.bangla+student.english+student.math)/3;
        student.avg = avg;
        return student;
    })
   
    
    return (
        <div className='my-28'>
            <BarChart width={1200} height={400} data={markChartsData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="id"></YAxis>
                <Bar dataKey="avg" fill="yellow"></Bar>
                <Bar dataKey="math" fill="red"></Bar>
                <Bar dataKey="bangla" fill="blue"></Bar>
                <Bar dataKey="english" fill="green"></Bar>

            </BarChart>
        </div>
    );
};

export default Axios;