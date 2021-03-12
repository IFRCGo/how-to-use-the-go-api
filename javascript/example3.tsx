import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

interface SurgeAlert {
    id: number;
    deployment_needed: string;
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
    const [surgeAlerts, setSurgeAlerts] = useState([]);
    const [data, setData] = useState({});

    const backgroundColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ];

    const borderColors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
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

    const fetchSurgeAlerts = () => {
        fetch('https://goadmin.ifrc.org/api/v2/surge_alert/?limit=1000', {
            headers: {
                Authorization: 'Token GO_API_AUTHORIZATION_TOKEN',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setSurgeAlerts(data.results);
                setData(getChartDataFromSurgeAlerts(surgeAlerts));
            });
    };

    useEffect(fetchSurgeAlerts, [surgeAlerts.length]);

    const getChartDataFromSurgeAlerts = (surgeAlerts: SurgeAlert[]) => {
        const data: Data = {
            labels: [],
            datasets: [
                {
                    label: '# of Surge Alerts',
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1,
                },
            ],
        };

        surgeAlerts.forEach((surgeAlert) => {
            const dataIndex = data.labels.indexOf(surgeAlert.deployment_needed);

            if (dataIndex >= 0) {
                data.datasets[0].data[dataIndex] += 1;
            } else {
                data.labels.push(surgeAlert.deployment_needed);
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
        <div className='chart-container'>
            <Bar data={data} options={options} />
        </div>
    );
};
