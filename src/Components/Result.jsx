import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = (resultsData[0].valueEndOfYear-resultsData[0].interest-resultsData[0].annualInvestment);
    console.log(resultsData)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((x) => {
                    const totalInterest=x.valueEndOfYear-x.annualInvestment*x.year-initialInvestment
                    const totalAmountInvested=x.valueEndOfYear-totalInterest
                    return <tr key={x.year}>
                        <td>{x.year}</td>
                        <td>{formatter.format(x.valueEndOfYear)}</td>
                        <td>{formatter.format(x.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}
