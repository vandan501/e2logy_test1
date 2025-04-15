import React, { useState } from 'react';

const UpdateAddress = () => {
const [user, setUser] = useState({
name: 'John Doe',
address: {
street: '123 Main St',
city: 'New York'
}
});

const handleAddressChange = () => {
setUser({
...user,
address: { ...user.address, city: 'San Francisco' }
});
};

return (
<div>
<p>Name: {user.name}</p>
<p>Address: {user.address.street}, {user.address.city}</p>
<button onClick={handleAddressChange}>Change City</button>
</div>
);
};

export default UpdateAddress;