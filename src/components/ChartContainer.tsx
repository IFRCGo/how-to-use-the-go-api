import React from 'react';
import { ChartViewer } from './ChartViewer';
import './ChartContainer.scss';

interface ChartContainerProps {
    chart: any;
    api: any;
    selectedLanguage: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
    chart,
    api,
    selectedLanguage,
}) => {
    const renderChartContainer = () => {
        return (
            <ChartViewer
                chart={chart[selectedLanguage]}
                api={api}
                selectedLanguage={selectedLanguage}
            ></ChartViewer>
        );
    };

    return <div className='chart-container'>{renderChartContainer()}</div>;
};
