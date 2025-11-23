module.exports = function(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
};
