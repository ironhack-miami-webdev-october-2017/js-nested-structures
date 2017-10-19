var school = [
    [ 'Bob',    'Susy',  'Ted' ],   // row 0
    [ 'Lilly',  'Sarah', 'Bill' ],  // row 1
    [ 'Thomas', 'Barry', 'Alex' ],  // row 2
    // col 0     col 1    col2
];


console.log( school[0] );
console.log( school[0].length );
console.log( school[0].join(' and ') );
console.log( school[0][1] );
console.log( school[2][1] );
console.log( school[1][2] );

school[1].forEach(function (oneStudent) {
    console.log(oneStudent.toUpperCase());
});
