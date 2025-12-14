/***
 * Deobfuscated version of thenBy.js
 * Original functionality preserved.
 */
var firstBy = (function () {
    // Helper: Identity function
    // Previously 'n'
    function identity(value) {
        return value;
    }

    // Helper: Ignore case transformer
    // Previously 't'
    function toLowerCase(value) {
        return typeof value === "string" ? value.toLowerCase() : value;
    }

    // Main factory function to create or chain comparators
    // Previously 'r'
    function makeCompareFunction(input, options) {
        // Check for chaining: if 'this' is a function and not the factory itself, use it as the base comparator.
        // Previously 'u'
        var previousCompareFn = typeof this === "function" && !this.firstBy && this;

        // Create the comparator for the current rule
        // Previously 'f'
        var currentCompareFn = (function (selectorOrComparator, opts) {
            // Normalize options
            // If second arg is a number, treat it as direction. Else ensure it's an object.
            opts = typeof opts === "number" ? { direction: opts } : (opts || {});

            // If the first arg is not a function, treat it as a property name key.
            if (typeof selectorOrComparator !== "function") {
                var propertyKey = selectorOrComparator;
                selectorOrComparator = function (item) {
                    return item[propertyKey] ? item[propertyKey] : "";
                };
            }

            // If the function takes 1 argument, it is a value selector.
            // We need to wrap it into a standard (a, b) comparator.
            if (selectorOrComparator.length === 1) {
                var valueSelector = selectorOrComparator;
                var formatFn = opts.ignoreCase ? toLowerCase : identity;
                var comparisonFn = opts.cmp || function (v1, v2) {
                    return v1 < v2 ? -1 : (v1 > v2 ? 1 : 0);
                };

                // The created comparator function
                selectorOrComparator = function (a, b) {
                    return comparisonFn(formatFn(valueSelector(a)), formatFn(valueSelector(b)));
                };
            }

            // Apply direction modification
            return opts.direction === -1
                ? function (a, b) { return -selectorOrComparator(a, b); }
                : selectorOrComparator;

        })(input, options);

        // Define the resulting function.
        // If chaining, return (prev || current), else return current.
        // Previously 'o'
        var wrappedCompareFn = previousCompareFn
            ? function (a, b) {
                return previousCompareFn(a, b) || currentCompareFn(a, b);
            }
            : currentCompareFn;

        // Enable chaining by attaching the factory as 'thenBy'
        wrappedCompareFn.thenBy = makeCompareFunction;

        return wrappedCompareFn;
    }

    // Expose the factory as 'firstBy' property for consistency or external usage patterns
    makeCompareFunction.firstBy = makeCompareFunction;

    return makeCompareFunction;
})();