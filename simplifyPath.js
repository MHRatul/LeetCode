var simplifyPath = function(path) {
    const tokens = path.split('/');
    const stack = [];
    
    for (const token of tokens) {
        if (token === '' || token === '.') {
            // Ignore empty tokens and current directory tokens.
            continue;
        } else if (token === '..') {
            // Move one directory up if possible.
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // For valid directory names (including sequences like '...'), add to the stack.
            stack.push(token);
        }
    }
    
    // If stack is empty, return root; otherwise join the tokens with '/'
    return '/' + stack.join('/');
};

// Example usage:
console.log(simplifyPath("/home/"));                  // Output: "/home"
console.log(simplifyPath("/home//foo/"));              // Output: "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); // Output: "/home/user/Pictures"
console.log(simplifyPath("/../"));                     // Output: "/"
console.log(simplifyPath("/.../a/../b/c/../d/./"));     // Output: "/.../b/d"
