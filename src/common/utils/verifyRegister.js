/**
 * This method tells if user is already registered in db
 * @param email
 * @returns boolean
 * **/
const baseUrl = process.env.NEXT_PUBLIC_API_SHOPPICKS_BASE_URL;
const customerUrl = process.env.NEXT_PUBLIC_API_SHOPPICKS_CUSTOMER_URL;
export const getSigned = async (email) => {
    const response = await fetch(`${baseUrl}${customerUrl}/verify-register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
};
