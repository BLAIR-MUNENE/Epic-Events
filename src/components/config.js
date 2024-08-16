const isProduction = false; // Set to true for production

export const config = {
  apiUrl: isProduction 
    ? "https://api.production.example.com" 
    : "https://sandbox.api.example.com",
  credentials: {
    consumerKey: isProduction 
      ? "YOUR_PRODUCTION_CONSUMER_KEY" 
      : "YOUR_SANDBOX_CONSUMER_KEY",
    consumerSecret: isProduction 
      ? "YOUR_PRODUCTION_CONSUMER_SECRET" 
      : "YOUR_SANDBOX_CONSUMER_SECRET"
  }
};
