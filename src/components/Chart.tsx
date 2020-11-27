import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { IonNote } from "@ionic/react";
import languages from "../assets/languages.json";
import "./Chart.scss";

declare var mpld3: any;

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

interface ChartProps {
    selectedLanguage: string;
}

export const Chart: React.FC<ChartProps> = ({ selectedLanguage }) => {
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
                setData(getDataFromProjects(projects));
            });
    };

    useEffect(fetchProjects, [projects.length]);
    useEffect(() => {
        const pythonChartData = {
            data01: [
                [-0.4, 0.0, 1.6],
                [0.4, 0.0, 2.4],
                [0.4, 2.0, 2.4],
                [-0.4, 2.0, 1.6],
            ],
            data03: [
                [2.6, 0.0],
                [3.4, 0.0],
                [3.4, 1.0],
                [2.6, 1.0],
            ],
            data02: [
                [0.6, 0.0],
                [1.4, 0.0],
                [1.4, 10.0],
                [0.6, 10.0],
            ],
        };

        const pythonChartAxes = [
            {
                images: [],
                sharey: [],
                texts: [],
                zoomable: true,
                markers: [],
                collections: [],
                bbox: [0.125, 0.11, 0.775, 0.77],
                xlim: [-0.59, 3.59],
                paths: [
                    {
                        pathcodes: ["M", "L", "L", "L", "Z"],
                        xindex: 0,
                        yindex: 1,
                        facecolor: "rgba(255, 99, 132, 0.2)",
                        data: "data01",
                        alpha: 1,
                        edgewidth: 1.0,
                        id: "el45167140343872475880",
                        edgecolor: "rgba(255, 99, 132, 1)",
                        dasharray: "none",
                        coordinates: "data",
                        zorder: 1,
                    },
                    {
                        pathcodes: ["M", "L", "L", "L", "Z"],
                        xindex: 0,
                        yindex: 1,
                        facecolor: "rgba(54, 162, 235, 0.2)",
                        data: "data02",
                        alpha: 1,
                        edgewidth: 1.0,
                        id: "el45167140343872475320",
                        edgecolor: "rgba(54, 162, 235, 1)",
                        dasharray: "none",
                        coordinates: "data",
                        zorder: 1,
                    },
                    {
                        pathcodes: ["M", "L", "L", "L", "Z"],
                        xindex: 2,
                        yindex: 1,
                        facecolor: "rgba(255, 206, 86, 0.2)",
                        data: "data01",
                        alpha: 1,
                        edgewidth: 1.0,
                        id: "el45167140343872476720",
                        edgecolor: "rgba(255, 206, 86, 1)",
                        dasharray: "none",
                        coordinates: "data",
                        zorder: 1,
                    },
                    {
                        pathcodes: ["M", "L", "L", "L", "Z"],
                        xindex: 0,
                        yindex: 1,
                        facecolor: "rgba(75, 192, 192, 0.2)",
                        data: "data03",
                        alpha: 1,
                        edgewidth: 1.0,
                        id: "el45167140343872477560",
                        edgecolor: "rgba(75, 192, 192, 1)",
                        dasharray: "none",
                        coordinates: "data",
                        zorder: 1,
                    },
                ],
                xdomain: [-0.59, 3.59],
                axesbgalpha: null,
                axes: [
                    {
                        fontsize: 10.0,
                        grid: {
                            gridOn: false,
                        },
                        tickvalues: [0.0, 1.0, 2.0, 3.0],
                        tickformat: [
                            "CEA",
                            "Health",
                            "WASH",
                            "NS Strengthening",
                        ],
                        tickcolor: "red",
                        visible: true,
                        nticks: 4,
                        position: "bottom",
                        tickformat_formatter: "fixed",
                        scale: "linear",
                    },
                    {
                        fontsize: 10.0,
                        grid: {
                            gridOn: false,
                        },
                        tickvalues: null,
                        tickformat: null,
                        tickcolor: "#ffff00",
                        visible: true,
                        nticks: 7,
                        position: "left",
                        tickformat_formatter: "",
                        scale: "linear",
                    },
                ],
                yscale: "linear",
                lines: [],
                axesbg: "transparent",
                sharex: [],
                ydomain: [0.0, 10.5],
                xscale: "linear",
                id: "el45167140343846732296",
                ylim: [0.0, 10.5],
            },
        ];

        const loadPythonChart = (data: any, axes: any) => {
            if (document.querySelector("#python-chart")) {
                mpld3.draw_figure("python-chart", {
                    width: 600.0,
                    height: 300.0,
                    data,
                    axes,
                    id: "python-chart",
                    plugins: [
                        { type: "reset" },
                        { button: true, type: "zoom", enabled: false },
                        { button: true, type: "boxzoom", enabled: false },
                    ],
                });
                document.querySelector(".mpld3-resetbutton")?.dispatchEvent(
                    new MouseEvent("click", {
                        view: window,
                        bubbles: true,
                        cancelable: true,
                        buttons: 1,
                    })
                );
            }
        };

        loadPythonChart(pythonChartData, pythonChartAxes);
    }, [selectedLanguage]);

    const getDataFromProjects = (projects: Project[]) => {
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

    const renderChart = () => {
        switch (selectedLanguage) {
            case languages[0]:
                return (
                    <IonNote className="ion-margin ion-padding">
                        Chart for PowerBI is not available
                    </IonNote>
                );
            case languages[1]:
                return (
                    <IonNote className="ion-margin ion-padding">
                        Chart for Tableau is not available
                    </IonNote>
                );
            case languages[2]:
                return <Bar data={data} options={options} />;
            case languages[3]:
                return <div id="python-chart"></div>;
            default:
                return (
                    <IonNote className="ion-margin ion-padding">
                        Chart not available
                    </IonNote>
                );
        }
    };

    return <div className="chart-container">{renderChart()}</div>;
};
