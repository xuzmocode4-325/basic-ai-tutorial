import { useState } from 'react';

function InsuranceRegression() {
    const [inputData, setInputData] = useState('');
    const [prediction, setPrediction] = useState('');

    const handlePredict = async () => {
        const response = await fetch('/predict/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input_data: inputData }),
        });
        const data = await response.json();
        setPrediction(data.prediction);
    };

    return (
        <div>
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <button onClick={handlePredict}>Predict</button>
            <div>{prediction}</div>
        </div>
    );
}

export default InsuranceRegression;