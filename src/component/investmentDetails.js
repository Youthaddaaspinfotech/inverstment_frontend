import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getbyUserPortfolioPaidIntTransactionPaymentAction } from '../actions/admin.actions';

const InvestmentDetails = () => {
    const location = useLocation();
    const data = location.state; // Assumes the data is passed via `state` in `useLocation`
    const [monthlyIntData, setMonthlyIntData] = useState([]);


    const getData = async () => {
        let resp = await getbyUserPortfolioPaidIntTransactionPaymentAction({ portfolioId: data.portfolioId, userId: data.userId, paymentStatus: 'Paid' });
        if (resp.code === 200) {
            setMonthlyIntData(resp.data)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return <p>No data available!</p>;
    }


    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Investment Details</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}>
                <tbody>
                    <tr>
                        <th style={styles.th}>Property Name</th>
                        <td style={styles.td}>{data.propertyDocs[0]?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Property Location</th>
                        <td style={styles.td}>{data.propertyDocs[0]?.location || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>User Name</th>
                        <td style={styles.td}>{data.userDocs[0]?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>User Email</th>
                        <td style={styles.td}>{data.userDocs[0]?.email || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>User Mobile</th>
                        <td style={styles.td}>{data.userDocs[0]?.mobile || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Tenure</th>
                        <td style={styles.td}>{data.tenureDocs[0]?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Amount</th>
                        <td style={styles.td}>₹{data.amount}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Interest Rate</th>
                        <td style={styles.td}>{data.interestRate}%</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Transaction ID</th>
                        <td style={styles.td}>{data.transactionId}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Investment Status</th>
                        <td style={styles.td}>{data.receivedStatus}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}> Total Interest Paid</th>
                        <td style={styles.td}>₹{data.totalInterestPaid?.toFixed(2) || "0.00"}</td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Widthdraw</th>
                        <td style={styles.td}><button className='lockedBtn' disabled style={{ cursor: "" }}>Tenure Not completed</button></td>
                    </tr>
                    <tr>
                        <th style={styles.th}>Monthly Interest Credit</th>
                        <td style={styles.td}>
                            {monthlyIntData?.length > 0 ? (
                                monthlyIntData.map((v, i) => (
                                    <div key={v._id} style={{ marginBottom: '8px' }}>
                                        <strong>Date:</strong> {new Date(v.date).toLocaleDateString('en-GB')} <br />
                                        <strong>Interest Amount:</strong> ₹{v.interestAmount.toFixed(2)}
                                    </div>
                                ))
                            ) : (
                                <p>No monthly interest credited yet.</p>
                            )}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

const styles = {
    th: {
        textAlign: 'left',
        padding: '10px',
        backgroundColor: '#f2f2f2',
        border: '1px solid #ddd',
    },
    td: {
        padding: '10px',
        border: '1px solid #ddd',
    },
};

export default InvestmentDetails;
