import React from 'react';
export default function useIpAddress () {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState('');
    React.useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error || 'Error fetching IP address.');
            } finally {
                setLoading(false);
            };
        };
        fetchIpAddress();
    }, []);
    return { data, loading, error };
};