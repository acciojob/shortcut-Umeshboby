function shortcut(s1, s2) {
  // your code here
	function shortcut(str1,str2){
	if(str1.length == 0 || str2.length == 0){
		return "''";
	}
	const initial = str1[0].toUpperCase() + str2[0].toUpperCase()
	return initial;

}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
