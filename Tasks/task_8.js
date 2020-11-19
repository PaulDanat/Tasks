function count_3s(n)
{
	var count = 0;
	while (n > 0)
	{
		if (n % 10 == 3)
		{
			count++;
		}
      n = n / 10;
	}
return count;
}

function count_in_range( n)
{
	var count = 0 ;
	for (var i = 2; i <= n; i++)
	{
		count += count_3s(i);
	}
	return count;
}
	console.log(count_in_range(25));
