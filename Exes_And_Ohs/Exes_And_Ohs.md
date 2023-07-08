# CodeWars JavaScript Solutions

---

## Exes And Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

**Examples input/output**

```javascript
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

---

### Given Coded

```javascript
function XO(str) {
    //code here
}
```

---

### Solution

```javascript
function XO(str) {
  let xNum = "";
  let oNum = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xNum += str[i];
    } else if (str[i].toLowerCase() === "o") {
      oNum += str[i];
    }
  }

  return xNum.length === oNum.length;
}
```

---

[See on CodeWars.com](https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript)
