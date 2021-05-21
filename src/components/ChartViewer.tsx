import React, { useCallback, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { IonImg, IonNote } from '@ionic/react';
import languages from '../assets/languages.json';
import './ChartViewer.scss';

declare var mpld3: any;

interface GoAPIResponse {
    count: number;
    next: string;
    previous: string;
    results: GoAPIResponseResult[];
}

interface ReliefWebAPIResponse {
    count: number;
    next: string;
    previous: string;
    results: GoAPIResponseResult[];
    data: ReliefWebAPIResponseData[];
    embedded: ReliefWebAPIResponseEmbedded;
    href: string;
    time: number;
    took: number;
    totalCount: number;
}

interface GoAPIResponseResult {
    [key: string]: string;
}

interface ReliefWebAPIResponseData {
    [key: string]: string;
}

interface ReliefWebAPIResponseEmbedded {
    facets: ReliefWebAPIResponseFacets;
}

interface ReliefWebAPIResponseFacets {
    [key: string]: ReliefWebAPIResponseFacet;
}

interface ReliefWebAPIResponseFacet {
    data: ReliefWebAPIResponseFacetData[];
    missing: number;
    more: boolean;
    type: string;
}

interface ReliefWebAPIResponseFacetData {
    value: string;
    count: number;
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

interface ChartViewerProps {
    chart: any;
    api: any;
    selectedLanguage: string;
}

function ObjectByString(o: any, s: string) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        const k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

export const ChartViewer: React.FC<ChartViewerProps> = ({
    chart,
    api,
    selectedLanguage,
}) => {
    const [data, setData] = useState({} as Data);
    const [loading, setLoading] = useState(false);

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

    const getDataFromReliefWebResponse = useCallback(
        (reliefWebAPIResponse: ReliefWebAPIResponse) => {
            return reliefWebAPIResponse.embedded.facets[
                api.reliefWeb.key
            ].data.map(
                (
                    reliefWebAPIResponseFacetData: ReliefWebAPIResponseFacetData
                ) => reliefWebAPIResponseFacetData.count
            );
        },
        [api.reliefWeb]
    );

    const onReliefWebAPIResponse = useCallback(
        (reliefWebResponse: ReliefWebAPIResponse): void => {
            const parsedReliefWebAPIResponse = getDataFromReliefWebResponse(
                reliefWebResponse
            );
            if (data.datasets[0] && data.datasets.length < 2) {
                const reliefWebDataset: Dataset = {
                    label: api.reliefWeb.label,
                    data: parsedReliefWebAPIResponse,
                    backgroundColor: Array(data.labels.length).fill(
                        backgroundColors[1]
                    ),
                    borderColor: Array(data.labels.length).fill(
                        borderColors[1]
                    ),
                    borderWidth: 1,
                };
                const newDatasets = data.datasets.concat(reliefWebDataset);
                const newData = { ...data };
                newData.datasets = newDatasets;
                newData.datasets[0].backgroundColor = Array(
                    data.labels.length
                ).fill(backgroundColors[0]);
                newData.datasets[0].borderColor = Array(
                    data.labels.length
                ).fill(borderColors[0]);
                setData(newData);
            }
        },
        [
            api.reliefWeb,
            data,
            getDataFromReliefWebResponse,
            backgroundColors,
            borderColors,
        ]
    );

    const callReliefWebAPI = () => {
        if (chart && selectedLanguage === languages[2] && api.reliefWeb) {
            setLoading(true);
            fetch(api.reliefWeb.url, {
                body: JSON.stringify(api.reliefWeb.body),
                method: 'POST',
            })
                .then((response) => response.json())
                .then(onReliefWebAPIResponse)
                .finally(() => setLoading(false));
        }
    };

    const callGoAPI = () => {
        if (chart && selectedLanguage === languages[2]) {
            setLoading(true);
            fetch(api.url)
                .then((response) => response.json())
                .then(onGoAPIResponse)
                .finally(() => setLoading(false));
        }
    };

    useEffect(callGoAPI, [api.url, selectedLanguage]);

    useEffect(callReliefWebAPI, [api, data]);

    useEffect(() => {
        if (!chart) return;

        const pythonChartData = chart.data;
        const pythonChartAxes = chart.axes;

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

        if (selectedLanguage === languages[3])
            loadPythonChart(pythonChartData, pythonChartAxes);
    }, [chart, selectedLanguage]);

    const onGoAPIResponse = (goAPIResponse: GoAPIResponse): void => {
        const parsedGoAPIResponse = getDataFromResponseResults(
            goAPIResponse.results,
            chart.label,
            chart.key
        );
        setData(parsedGoAPIResponse);
    };

    const getDataFromResponseResults = (
        responseResults: GoAPIResponseResult[],
        responseResultLabel: string,
        responseResultKey: string
    ) => {
        const data: Data = {
            labels: [],
            datasets: [
                {
                    label: responseResultLabel,
                    data: [],
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1,
                },
            ],
        };

        responseResults.forEach((responseResult) => {
            const responseResultValue = ObjectByString(
                responseResult,
                responseResultKey
            );

            const dataIndex = data.labels.indexOf(responseResultValue);

            if (dataIndex >= 0) {
                data.datasets[0].data[dataIndex] += 1;
            } else {
                data.labels.push(responseResultValue);
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

    const renderChartViewer = () => {
        if (!chart) {
            return (
                <IonNote className='ion-margin ion-padding'>
                    Chart for {selectedLanguage} is not available
                </IonNote>
            );
        }

        switch (selectedLanguage) {
            case languages[0]:
                return <IonImg src={chart} className='ion-image' />;
            case languages[1]:
                return <IonImg src={chart} className='ion-image' />;
            case languages[2]:
                return loading ? (
                    <div className='loader'>Loading...</div>
                ) : (
                    <Bar data={data} options={chart.options} />
                );
            case languages[3]:
                return <div id='python-chart'></div>;
            default:
                return (
                    <IonNote className='ion-margin ion-padding'>
                        Found Unsupported Chart
                    </IonNote>
                );
        }
    };

    return renderChartViewer();
};
