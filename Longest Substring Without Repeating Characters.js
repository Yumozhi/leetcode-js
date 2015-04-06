// Given a string, find the length of the longest substring without repeating characters. For example, the longest substring // without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with // the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var last = {};
    var start = 0, len = 0, maxlen  = 0;
    for(var i = 0; i < s.length; i++) {
        if(last[s[i]] === undefined || last[s[i]] < start) {
            len++;
            last[s[i]] = i;
            if(len > maxlen) {
                maxlen = len;
            }
        }
        else {
            start = last[s[i]] + 1;
            len = i - last[s[i]];
            last[s[i]] = i;
        }
    }
    return maxlen;
};

// if lastIndex < start || lastIndex === undeifined
//     dp[i] = dp[i-1] + 1
// if lastIndex >= maxStart
//     dp[i] = i - last
