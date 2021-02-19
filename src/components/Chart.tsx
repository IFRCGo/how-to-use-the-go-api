import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { IonImg, IonNote } from '@ionic/react';
import languages from '../assets/languages.json';
import './Chart.scss';

declare var mpld3: any;

interface Project {
    [key: string]: string;
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

interface ChartProps {
    code: any;
    api: any;
    selectedLanguage: string;
}

export const Chart: React.FC<ChartProps> = ({
    code,
    api,
    selectedLanguage,
}) => {
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

    const fetchProjects = () => {
        fetch(api.url)
            .then((response) => response.json())
            .then((data) => {
                setData(
                    getDataFromProjects(
                        data.results,
                        code[languages[2]].label,
                        code[languages[2]].key
                    )
                );
            });
    };

    useEffect(fetchProjects, [api.url]);
    useEffect(() => {
        const pythonChartData = code[languages[3]].data;
        const pythonChartAxes = code[languages[3]].axes;

        const loadPythonChart = (data: any, axes: any) => {
            if (document.querySelector('#python-chart')) {
                mpld3.draw_figure(
                    'python-chart',
                    {
                        width: 600.0,
                        height: 300.0,
                        data,
                        axes,
                        id: 'python-chart',
                        plugins: [
                            { type: 'reset' },
                            { button: true, type: 'zoom', enabled: false },
                            { button: true, type: 'boxzoom', enabled: false },
                        ],
                    },
                    null,
                    true
                );
                document.querySelector('.mpld3-resetbutton')?.dispatchEvent(
                    new MouseEvent('click', {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        buttons: 1,
                    })
                );
            }
        };

        loadPythonChart(pythonChartData, pythonChartAxes);
    }, [code, selectedLanguage]);

    const getDataFromProjects = (
        projects: Project[],
        label: string,
        key: string
    ) => {
        const data: Data = {
            labels: [],
            datasets: [
                {
                    label: label,
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1,
                },
            ],
        };

        projects.forEach((project) => {
            const dataIndex = data.labels.indexOf(project[key]);

            if (dataIndex >= 0) {
                data.datasets[0].data[dataIndex] += 1;
            } else {
                data.labels.push(project[key]);
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

    const renderChart = () => {
        switch (selectedLanguage) {
            case languages[0]:
                return code[languages[0]] ? (
                    <IonImg src={code[languages[0]]} className='ion-image' />
                ) : (
                    <IonNote className='ion-margin ion-padding'>
                        Chart for PowerBI is not available
                    </IonNote>
                );
            case languages[1]:
                return code[languages[1]] ? (
                    <IonImg src={code[languages[1]]} className='ion-image' />
                ) : (
                    <IonNote className='ion-margin ion-padding'>
                        Chart for Tableau is not available
                    </IonNote>
                );
            case languages[2]:
                return code[languages[2]] ? (
                    <Bar data={data} options={code[languages[2]].options} />
                ) : (
                    <IonNote className='ion-margin ion-padding'>
                        Chart for JavaScript is not available
                    </IonNote>
                );
            case languages[3]:
                return code[languages[3]] ? (
                    <div id='python-chart'></div>
                ) : (
                    <IonNote className='ion-margin ion-padding'>
                        Chart for Python is not available
                    </IonNote>
                );
            default:
                return (
                    <IonNote className='ion-margin ion-padding'>
                        Chart not available
                    </IonNote>
                );
        }
    };

    return <div className='chart-container'>{renderChart()}</div>;
};
