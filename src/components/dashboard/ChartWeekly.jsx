import FusionCharts from 'fusioncharts';
import MsColumn3D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React, { useMemo } from 'react';
import ReactFC from 'react-fusioncharts';

import { useWeeklyCharts } from '@/api/transaction';

ReactFC.fcRoot(FusionCharts, MsColumn3D, FusionTheme);

function ChartWeekly() {
  const { data } = useWeeklyCharts();

  const [dataIncome, dataExpense, date] = useMemo(() => {
    if (!data) {
      return [[], [], []];
    }
    const inc = [];
    const exp = [];
    const dat = [];
    Object.keys(data).forEach((k) => {
      inc.push({ value: data[k].income });
      exp.push({ value: data[k].expense });
      dat.push({ label: data[k].date });
    });
    return [inc, exp, dat];
  }, [data]);

  const categories = [
    {
      category: date.reverse(),
    },
  ];

  const dataset = [
    {
      seriesname: 'Expense',
      data: dataExpense.reverse(),
    },
    {
      seriesname: 'Income',
      data: dataIncome.reverse(),
    },
  ];

  const chartConfigs = {
    type: 'mscolumn3d',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'My Income and expenses',

        xAxisName: 'Date',

        yAxisName: 'Total Income and expenses',

        theme: 'fusion',
        palettecolors: 'f2726f,29c3be',
      },
      categories,
      dataset,
    },
  };
  return <ReactFC {...chartConfigs} />;
}

export default ChartWeekly;
