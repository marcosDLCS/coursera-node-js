/**
 * Created by marcos on 18/09/16.
 */

var rect = {
    perimeter: function (x, y) {
        return (2 * (x + y));
    },
    area: function (x, y) {
        return (x * y);
    }
};

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l < 0 || b < 0) {
        console.log("Rectangle dimensions should be greater than zero:  l = "
            + l + ",  and b = " + b);
    }
    else {
        console.log("The area of a rectangle of dimensions length = "
            + l + " and breadth = " + b + " is " + rect.area(l, b));
        console.log("The perimeter of a rectangle of dimensions length = "
            + l + " and breadth = " + b + " is " + rect.perimeter(l, b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);
