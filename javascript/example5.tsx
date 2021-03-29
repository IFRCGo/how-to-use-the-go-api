import React, { useCallback, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

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

export const Chart: React.FC = () => {
    const [data, setData] = useState({} as Data);

    const goAPIUrl =
        'https://goadmin.ifrc.org/api/v2/event/?countries__in=123%2C84%2C85%2C180&format=json&limit=1000';
    const goAPILabel = '# of Events in Go';
    const goAPIKey = 'countries.0.iso3';

    const reliefWebFacet = 'primary_country.iso3';
    const reliefWebLabel = '# of Events in ReliefWeb';
    const reliefWebFacetValues = ['IND', 'NPL', 'SUR', 'IDN', 'BGD'];
    const reliefWebUrl =
        'https://api.reliefweb.int/v1/disasters?appname=how-to-use-the-go-api&appname=how-to-use-the-go-api';

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

    const reliefWeb = useCallback(() => {
        const callReliefWebAPIBody = {
            limit: 1000,
            preset: 'latest',
            facets: [
                {
                    field: reliefWebFacet,
                },
            ],
            filter: {
                conditions: [
                    {
                        field: reliefWebFacet,
                        value: reliefWebFacetValues,
                        operator: 'OR',
                    },
                ],
            },
        };

        return fetch(reliefWebUrl, {
            body: JSON.stringify(callReliefWebAPIBody),
            method: 'POST',
        })
            .then((response) => response.json())
            .then((reliefWebResponse: ReliefWebAPIResponse): void => {
                const parsedReliefWebAPIResponse = reliefWebResponse.embedded.facets[
                    reliefWebFacet
                ].data.map(
                    (
                        reliefWebAPIResponseFacetData: ReliefWebAPIResponseFacetData
                    ) => reliefWebAPIResponseFacetData.count
                );

                if (data.datasets[0] && data.datasets.length < 2) {
                    const reliefWebDataset: Dataset = {
                        label: reliefWebLabel,
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
            });
    }, [
        reliefWebFacet,
        reliefWebFacetValues,
        reliefWebUrl,
        data,
        backgroundColors,
        borderColors,
    ]);

    useEffect(() => {
        reliefWeb();
    }, [reliefWeb]);

    const callGoAPI = () => {
        fetch(goAPIUrl)
            .then((response) => response.json())
            .then((goAPIResponse: GoAPIResponse): void => {
                const parsedGoAPIResponse = getDataFromResponseResults(
                    goAPIResponse.results,
                    goAPILabel,
                    goAPIKey
                );
                setData(parsedGoAPIResponse);
            });
    };

    useEffect(callGoAPI, [data]);

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

    return <Bar data={data} options={options} />;
};
