import React, { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import the confirmAlert library
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the CSS for the modal
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    // Trigger logout confirmation when the component mounts
    useEffect(() => {
        confirmAlert({
            title: 'Confirm to Log Out',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        // Clear all localStorage items
                        localStorage.clear();
                        // Refresh the page after logout
                        window.location.reload();
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        navigate(-1)
                    }
                }
            ]
        });
    }, []); // Empty dependency array means this runs only once when the component mounts

    return <div></div>; // No need for a button, just the confirmation modal will show
};

export default Logout;