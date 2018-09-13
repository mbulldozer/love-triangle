/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // implementation
    let num_spichonee = preferences.length;
    let spichonee_a, spichonee_b, spichonee_c;
    let count_triangles = 0;
    for(let i = 1; i <= num_spichonee; i++)
    {
        spichonee_a = preferences[i - 1];
        if(spichonee_a == i) continue;
        spichonee_b = preferences[spichonee_a - 1];
        if(spichonee_b == spichonee_a) continue;
        spichonee_c = preferences[spichonee_b - 1];
            if(spichonee_c == i){
              count_triangles++;
            }
    }
    return count_triangles / 3;
};
