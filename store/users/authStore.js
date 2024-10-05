import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

const useAuthStore = defineStore('auth', () => {
    const submitForm = async (data) => {
        try {
            const response = await axios.post('https://your-server-url.com/api/send-email', data);
            // Handle the response here if needed
            console.log('Email sent successfully:', response.data);
        } catch (error) {
            // Handle error
            console.error('Error sending email:', error);
        }
    };

    return {
        submitForm,
    };
});

export default useAuthStore;
