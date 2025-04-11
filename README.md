# find-ip-address
`find-ip-address` is a simple and lightweight custom React hook to fetch the user's public IP address using [ipify](https://www.ipify.org). It is designed for client-side React only.
## Installation
```bash
npm install find-ip-address
```
Or with Yarn:
```
yarn add find-ip-address
```
## Usage
```js
import React from 'react';
import useIpAddress from 'find-ip-address';

function App() {
  const { data, loading, error } = useIpAddress();
  
  if (loading) {
    return <p>Loading...</p>
  };
  if (error) {
    return <p>Error: {error}</p>
  };
  
  return (
    <div>
      <p>Your IP Address is: {data.ip}</p>
    </div>
  );
};
export default App;
```
## What It Returns
`useIpAddress()` returns an object with the following properties:
| Property  | Type     | Description                              |
|-----------|----------|------------------------------------------|
| `data`    | object   | The IP address object (e.g.: `{ ip: "203.0.113.42" }`) |
| `loading` | boolean  | Indicates if the request is in progress.  |
| `error`   | string   | Any error message if request fails.       |
## License
This package is open source and available under the ISC license.
## Author
### Made by `Sejin Ahmed`.