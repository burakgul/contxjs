/**
 * Push classnames to the target actor
 * 
 * @params {string} classnames - Component classnames
 * @returns {Object}
 */
export default function pushClassNames(classNames){
    return {
        type: "pushClassNames",
        classNames
    };
}
