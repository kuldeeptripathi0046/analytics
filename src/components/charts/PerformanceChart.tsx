import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useData } from '../../data/DataContext';
import { Employee } from '../../types/employee';

const PerformanceChart: React.FC = () => {
  const { employees, loading, error } = useData();
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Performance Rating Distribution'
    },
    xAxis: {
      categories: ['1', '2', '3', '4', '5'],
      title: {
        text: 'Performance Rating'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Employees'
      }
    },
    series: [{
      name: 'Employees',
      type: 'column',
      data: [0, 0, 0, 0, 0]
    }]
  });

  useEffect(() => {
    if (loading || error || !employees.length) return;

    // Calculate performance rating distribution
    const ratings = [0, 0, 0, 0, 0]; // Ratings 1-5

    employees.forEach((employee: Employee) => {
      // Adjust index for 0-based array
      const ratingIndex = employee.performanceRating - 1;
      if (ratingIndex >= 0 && ratingIndex < 5) {
        ratings[ratingIndex]++;
      }
    });

    setChartOptions({
      ...chartOptions,
      series: [{
        name: 'Employees',
        type: 'column',
        data: ratings
      }]
    });
  }, [employees, loading, error]);

  if (loading) return <div>Loading performance data...</div>;
  if (error) return <div>Error loading performance data: {error}</div>;

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default PerformanceChart; 