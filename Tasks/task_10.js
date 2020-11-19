function maxCharacter(str) {
    const charMap = {};
  
    str.replace(/\s/gi, '').split('').forEach(function(char){
      if(charMap[char]){
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });
    
    const max = Math.max(...Object.values(charMap));
    
    return Object.keys(charMap)
      .filter((c) => charMap[c] === max)
      .join(' ');
  }
  
  console.log(maxCharacter('javassccript'));