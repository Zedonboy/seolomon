const baseUrl = process.env.NODE_ENV === "production" 
? 'https://seolo.ai' 
: 'http://localhost:3000';

export default baseUrl;