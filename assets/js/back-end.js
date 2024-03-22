const reportA = {
  'Housing': 30,
  'Food': 25,
  'Transportation': 15,
  'Entertainment': 10,
  'Savings': 20
};

const reportB = {
  'Housing': 40,
  'Food': 20,
  'Transportation': 20,
  'Entertainment': 15,
  'Savings': 5
};

function combineFinancialReports(reportA, reportB) {
  const combinedReport = {};
  const categories = new Set([...Object.keys(reportA),...Object.keys(reportB)]);

  for (const category of categories) {
    const valueA = reportA[category] || 0;
    const valueB = reportB[category] || 0;

    const weightA = valueA / (valueA + valueB) || 0.5;
    const weightB = 1 - weightA;
    const combinedPercentage = (weightA * valueA + weightB * valueB) / (valueA + valueB) * 100;

    combinedReport[category] = combinedPercentage;
  }

  return combinedReport;
}

function generateVisualizationData(combinedReport) {
  const categoryLabels = Object.keys(combinedReport);
  const percentages = Object.values(combinedReport);

  const chartData = {
    labels: categoryLabels,
    datasets: [{
      label: 'Combined Financial Health',
      data: percentages,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  return chartData;
}

const combinedReport = combineFinancialReports(reportA, reportB);
const chartData = generateVisualizationData(combinedReport);

const ctx = document.getElementById('combined-report').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: chartData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            return value + '%';
          }
        }
      }
    }
  }
});

