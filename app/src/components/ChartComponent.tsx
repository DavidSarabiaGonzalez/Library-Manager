import { AreaSeries, ColorType, createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";

interface ChartColors {
  backgroundColor?: string;
  lineColor?: string;
  textColor?: string;
  areaTopColor?: string;
  areaBottomColor?: string;
}

interface ChartProps {
  data: {
    time: string;
    value: number;
  }[];
  colors?: ChartColors;
}

export const ChartComponent = ({ data, colors = {} }: ChartProps) => {
  const {
    backgroundColor = "transparent",
    lineColor = "#2962FF",
    textColor = "black",
    areaTopColor = "#2962FF",
    areaBottomColor = "rgba(41, 98, 255, 0.28)",
  } = colors;

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          type: ColorType.Solid,
          color: backgroundColor,
        },
        textColor,
        attributionLogo: false,
      },
      width: chartContainerRef.current.clientWidth,
      height: 250,
    });

    const newSeries = chart.addSeries(AreaSeries, {
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });

    newSeries.setData(data);

    chart.timeScale().fitContent();

    const handleResize = () => {
      if (!chartContainerRef.current) return;

      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};
