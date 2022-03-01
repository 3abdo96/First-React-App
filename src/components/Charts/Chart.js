import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointsValue = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaxValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          label={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
