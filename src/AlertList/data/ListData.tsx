export interface Alert {
    id: number;
    title: string;
    price: number;
    percentage: string;
    risk: string;
}
export const alerts: Alert[] = [
    {
        id: 0,
        title: "AMZN",
        price: 200,
        percentage: "0.25 %",
        risk: "Low Risk",
    },
    {
        id: 0,
        title: "TSLA",
        price: 200,
        percentage: "0.25 %",
        risk: "Low Risk",
    },
    {
        id: 0,
        title: "ABQQ",
        price: 200,
        percentage: "0.25 %",
        risk: "Low Risk",
    },
    {
        id: 0,
        title: "MSFT",
        price: 200,
        percentage: "0.25 %",
        risk: "Low Risk",
    },
    {
        id: 0,
        title: "PYPL",
        price: 200,
        percentage: "0.25 %",
        risk: "Low Risk",
    },
];
