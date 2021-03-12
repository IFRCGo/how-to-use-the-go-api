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
        return chart[selectedLanguage] ? (
            <div className='chart-container'>
                <ChartViewer
                    chart={chart[selectedLanguage]}
                    api={api}
                    selectedLanguage={selectedLanguage}
                ></ChartViewer>
            </div>
        ) : null;
    };

    return renderChartContainer();
};
