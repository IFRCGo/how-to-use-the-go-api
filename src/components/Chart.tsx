import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./Chart.scss";

interface Project {
    id: number;
    name: string;
    primary_sector_display: string;
}

interface Dataset {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}

interface Data {
    labels: string[];
    datasets: Dataset[];
}

export const Chart: React.FC = () => {
    const [projects, setProjects] = useState([]);
    const [data, setData] = useState({});

    const backgroundColors = [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
    ];

    const borderColors = [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
    ];

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const fetchProjects = () => {
        fetch("https://goadmin.ifrc.org/api/v2/project/?country=NPL")
            .then(response => response.json())
            .then(data => {
                setProjects(data.results);
                setData(getChartDataFromProjects(projects));
            });
    };

    useEffect(fetchProjects, [projects.length]);

    const getChartDataFromProjects = (projects: Project[]) => {
        const data: Data = {
            labels: [],
            datasets: [
                {
                    label: "# of Projects",
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1,
                },
            ],
        };

        projects.forEach(project => {
            const dataIndex = data.labels.indexOf(
                project.primary_sector_display
            );

            if (dataIndex >= 0) {
                data.datasets[0].data[dataIndex] += 1;
            } else {
                data.labels.push(project.primary_sector_display);
                data.datasets[0].data.push(1);
                data.datasets[0].backgroundColor = backgroundColors.slice(
                    0,
                    data.datasets[0].data.length
                );
                data.datasets[0].borderColor = borderColors.slice(
                    0,
                    data.datasets[0].data.length
                );
            }
        });

        return data;
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};
