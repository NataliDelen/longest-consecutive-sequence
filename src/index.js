module.exports = function longestConsecutiveLength(array) {
	if(array.length == 0) return 0;
	
   	array.sort(function(a,b){
  		return a - b;
  	});
 	
  	let res = [];
  	let ind = 0;
  	let length = array.length;

  	while(ind < length){
  		ind = findeIndex(array,ind);
  		if(ind == 'none') break;
  		
  		let lengthCons = findeLength(array,ind);
  		res.push(lengthCons + 1);

  		ind = ind + lengthCons;  		  			
  	}

  	if(res.length == 0) return 1;
  
  	res.sort(function(a,b){
  		return a - b;
  	});  	 	
  
  	return res.pop();
  	
}

function findeIndex(arr,n){
	
	let index = 'none';
		for(let i = n, length = arr.length; i < length - 1; i++){
			let a = arr[i+1];
			let b = arr[i];
			if(a - b == 1){
				index = i;
				break;
			} 
		}

		return index;
	}


function findeLength(arr,k){
	let countLength = 0;

	for(let i = k, length = arr.length; i < length - 1; i++){	
		let a = arr[i+1];
		let b = arr[i];
		if (a - b == 1){
			countLength++;
		} else break;
	}

	return countLength;	
}