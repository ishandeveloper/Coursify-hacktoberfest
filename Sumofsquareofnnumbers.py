'''
Given a positive integer N. The task is to find 12 + 22 + 32 + ….. + N2.
if N = 4 
1^2 + 2^2 + 3^2 + 4^2 = 30
The idea is to run a loop from 1 to n and for each i, 1 <= i <= n, find i2 to sum.
'''

def squaresum(n):
	sum = 0
	for i in range(1, n+1):
		sum += (i * i)
	return sum

n = int(input("Enter Number to Print Sum Of square of N Natural Number :\n"))
print(squaresum(n))


'''
The above approach takes linear time to compute the squaresum however we can solve
this in constant time using the formula:
    Σn^2 = [n(n+1)(2n+1)]/6
Source : https://en.wikipedia.org/wiki/Square_pyramidal_number
'''

def squaresum(n):
	sum = (n*(n+1)*(2*n+1))//6
	return sum

n = int(input("Enter Number to Print Sum Of square of N Natural Number :\n"))
print(squaresum(n))
