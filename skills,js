function calculateNumbers(var1, var2) {
    // Input validation
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    try {
        return {
            sum: var1 + var2,
            difference: var1 - var2,
            product: var1 * var2,
            quotient: var2 !== 0 ? var1 / var2 : 'Cannot divide by zero',
            remainder: var2 !== 0 ? var1 % var2 : 'Cannot calculate remainder when dividing by zero'
        };
    } catch (error) {
        throw new Error(`Calculation error: ${error.message}`);
    }
}

