import { useRef, useEffect } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Configure chart
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart data
const labels = ["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "55k", "60k"];
const data = [20, 50, 35, 85, 50, 50, 15, 20, 45, 55, 45, 60];

export default function SalesChart() {
  // Variables
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  // Hooks
  useEffect(() => {
    // Destroy previous chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    // Create chart
    const canvas = canvasRef.current;
    if (!canvas) return;
    chartRef.current = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "pcs.",
            data,
            fill: true,
            tension: 0.35,
            borderWidth: 3,
            pointRadius: 3,
            borderColor: "#4880ff",
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
              gradient.addColorStop(0, "rgba(67, 121, 238, 0.16)");
              gradient.addColorStop(1, "rgba(255, 255, 255, 0.18");
              return gradient;
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "end",
          },
          title: {
            display: true,
            text: "Sales Details",
            align: "start",
            padding: {
              top: 5,
              bottom: 20,
            },
            color: "#202224",
            font: {
              family: '"Nunito Sans", sans-serif',
              weight: 700,
              size: 24,
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: function (context) {
                const value = context.parsed?.y ?? context.parsed;
                const prefix = context.dataset?.label ? context.dataset.label + ": " : "";
                return prefix + value + "%";
              },
            },
            backgroundColor: "#4880ff",
          },
        },
        interaction: {
          mode: "nearest",
          axis: "x",
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: { display: false },
            grid: { display: false },
          },
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              precision: 0,
              callback: function (value) {
                return value + "%";
              },
            },
            grid: { display: false },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="sales-chart">
      <canvas ref={canvasRef} />
    </div>
  );
}
