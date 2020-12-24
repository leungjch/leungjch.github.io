---
title: "CS 145 Notes"
date: "2020-09-07"
type: "note"
tags: "cs145, racket, functional-programming"
---

# Lec 1 Mon 07 Sep 2020
# General info
CS145 is the advanced introductory CS course.
Course breakdown: 
- 60% assignments
- 10% midterm 1
- 10% midterm 2
- 20% final exam

You have until October 21, 2020 to drop CS145.

## Racket syntax
To evaluate expressions in Racket, use brackets.
```scheme
(+ 1 2 3)
(operator arg1 arg2 ... argn)
```
Expressions are enclosed in brackets. The first element inside the bracket is the operator, a function that takes in an input. The following elements are called parameters or arguments, which are the inputs to place inside the function.

This style of syntax is called **prefix notation**.

We can nest expressions within expressions.
```scheme
(- (+ 5 6)(* 2 3))
```
Racket evaluates `(+ 5 6)` = `11` and `(* 2 3)` = `6` first, which are the arguments to the outer expression, now `(- 11 6)` = `5`. 

## Stepper
The stepper is only available in BSL.

## Naming values
To define a value, use:
```scheme
(define fred (+ 1 2 3))
fred
; > 6
```

## Parameterizing values (functions)

```scheme
(define (wilma x) (+ x x))
```
The function `wilma` takes in a value `x` and returns `x + x`, or double `x`. Call `wilma` using
```scheme
(wilma 10)
; > 20
```

## Marmoset
Marmoset allows you to submit an infinite amount of times. It shows you a public test result, which, if your program was successful in, will also give the opportunity to see the detailed test results. You have 3 "release tokens" which yoou can spend to access the detailed test results, and they regenerate every 12 hours.

## Support and resources
Two TAs available with office hours
Tutorials - extra exercises to reinforce understanding and talk about material

# Lec 2 Thu 10 Sep 2020 
## Data types

``` scheme
(- 30 90)
> -60
(/ 20 10)
> 2
(/ 2 3)
0.6 (bar)

(sqr 2) ; square a number
(expt 2 .5) ; 2^0.5
> #i1.4142
```

## Inexact and exact
` (sqr (sqrt 2)) ` Returns inexact #i2.0000004. 

## Imaginary Numbers
```scheme
(sqrt -1) 
> 0 + 1i ; real part 0, complex part i


## Special functions
```scheme
(define fred 9)
fred
> 9
(quote fred) ; return the argument as a **symbol**
> 'fred
```

String are enclosed by double parentheses.
```scheme
"Helloo"
> "Helloo"


## Boolean algebra
``` scheme
(< 1 2) ; true
(> 1 2) ; false
(= 1 2) ; false
```
`#t` and `#f` are the actual values that Racket uses to represent booleans. But Racket also allows you to represent them as `true` and `false`, or `#true` and `#false`. 

## Conditional expressions
To evaluate a conditional expression, use `if`. `if` is a magic function (you cannot create it yourself) `if` takes in three arguments: 1) the condition to evaluate, 2) the value to return if true, and 3) the value to return if false.

Example: 
```scheme
(if (< 2 3)(+ 1 2 3)(+ 3 4 5)) ; returns (+ 1 2 3) which is 6
```

After a program is run that contains a conditional, it **highlights the part that was not reached**. 


## Conditionals and Functions
```scheme
(define (bigger a b)
	(if (< a b) b a))
(bigger 10 20) ; 20
```

## More functions
```scheme
(and true true true) ; returns true if all are true
> true
(and true false true)
> false

(or true false) ; returns true if any argument is true
> true
```
The **`and`** magic function tests the boolean value of the first argument first. If it's true, then it steps through and evaluates the next argument. If it encounters a `#f`, it discards the rest of the code and returns `#f`. It **short-circuits**.

Similarly, the **`or`** function will discard the rest of the code when it encounters a `#t` value. 

Hint for A1 and A2: Avoid inexact computations.

## Predicates
Predicates have a `?` suffix and are pronounced 'huh'. They return whether a value belongs to a class of objects.

``` scheme
(number? 42) ; #t
(number? "hello") ; #f
```

Ex. of more predicates: `exact?` , `even?`, `string?`, `symbol?`, `real?`


# Lec 3 Thu 10 Sep 2020
## Commenting
When defining functions, they should have a comment at the top explaining **what arguments it expects** and **what it does**. Also consider describing **how it does it** but not necessary.
To comment in Racket, use `;`. By convention, use double semicolons to indicate a block comment.

## Recursion
### Sumto
A function that sums the numbers from 1 to n:
```scheme
;; sum the integers from 1 to n
;; where n is a positive integer
(define (sumto n)
	(if (= n 1) 1
		(+ (sumto (- n 1)))))

```
The function references itself and establishes a base case (n = 1) to stop.
Recursion works on the principle of mathematical induction. We first prove that it works for the first case, then prove it for the n+1 case. We can then use this for the n+m case. 
### Factorial
```scheme
;; (fact n) computes n! for non-negative integer n
(define (fact n)
	(if (= n 0) 1 ; base case
		(* n (fact (- n 1)))))
```
Factorial is basically the multiplication version of `sumto`. 

### Fibnonacci
```scheme
;; (fib n) is the nth fibonacci number
;; (fib 0) is 0
;; (fib 1) is 1
;; (fib n) is (fib n-2) + (fib n-1)

(define (fib n)
	(if (= n 0) 0
		(if (= n 1) 1)
			(+ (fib (- n 2)) (fib (- n 1)))))
```
The fibonacci function as defined above takes many steps.

**It recomputes a prevoius value every time, which is very inefficient.**

## Efficiency
The efficiency of an algorithm is proportional to the number of steps that Racket reports. An algorithm that computes something as the same as another algorithm in fewer steps is more efficient.

**The number of steps for (fib n) is exponential with respect to n**.

## Stepper 
Don't try to look at all of the steps in a recursive function. Instead, step to the point before Racket conducts the self-referential step. E.x. for (fib 3), step only to when Racket shows (fib 2) in the stepper.



# Lec 4 Mon 14 Sep 2020
Revisiting `sumto`:
```scheme
define (sumto n)
	(if (= n 1) -1)
		(+ (sumto (- n 1)) n))
```
Problem: `sumto` runs in exponential time. We can solve this using **tail-recursion**.

**Size of derivation**: Number of *intermediate expressions* in the stepper. The number. **Determines the amount of memory required**.

## Time and memory
Time $\propto$ num. steps

Memory $\propto$ size of largest intermediate expression.

**To calculate the number of expressions, count the number of open brackets**


## Analysis of sumto

|n|result|steps|size*|
|-|------|-----|-----|
|1|1|3|5|
|2|3|8|6|
|3|6|13|7|
|4|10|18|8|

*Number of expressions + subexpressions in the largest intermediate expression while stepping

We can formulate the `result`, `steps`, and `size*` into recurrence relations (recursive) and explicit formulae (sometimes)

### Recurrence relations
$$
\begin{aligned}
result(1) = 1 \\
result(n>1) = result(n-1) + n \\ \\

steps(1) = 3 \\
steps(n>1) = steps(n-1) + 5 \\ \\ 

size(1) = 5 \\
size(n>1) = size(n-1) + 1 \\ 
\end{aligned}
$$

### Closed-form solution
To obtain these, use the sum of an arithmetic sequence formula.

$$
\begin{aligned}
result(n) = \frac{n(n+1)}{2} \\
steps(n) = 5(n-1)+3 \\
size(n) = n+4
\end{aligned}
$$

The closed form solution is much less computationally expensive than the recurrence relation. But they may not always exist.

# Lec 4a Mon 14 Sep 2020 (Tail recursion)
Consider the function `sumbetween` which sums integers between `a` and `b` inclusive, plus `acc` (*accumulator*)
```scheme
;; sum the integers between a and b, inclusive, plus acc
(define (sumbetween a b acc)
	(if (> a b) acc
		(sumbetween (+ a 1) b (+ acc a))))
```
We use `sumbetween` as a *helper function* to create a more efficient `sumto`. 

```scheme
(define (sumto n)
	(sumbetween 1 n 0))
```

This is a **tail recursive** implementation of `sumto`. The function recursively calls itself with different parameters but stores the result in `acc`. If the trivial case is reached, it simply returns `acc`. 

Notice the vast improvement in steps and constant size when tail-recursive `sumto` is analyzed:
|n|result|steps|size*|
|-|-|-|-|
|1|1|9|5|
|2|3|14|5|
|3|6|19|5|
|4|10|14|15|

# Lec 5 Tue 15 Sep 2020 (Mystery function crunch)
```scheme
;; 
;; (crunch x): given a rational non-negative number x
;; calculates number of digits before the decimal point

(define (crunch x)
	(if (< x 10) 1
		(add1 (crunch (/ x 10)))))
```
## Analysis of the crunch function
**Partial solution for 0, powers of 10**
|n|val|zzz|
|-|-|-|
|$n \in \{0,1\}$|1|zzz|
|$n=10^k$|$1+crunch(\frac{n}{10})=k$|(integer $k \geq 1$)|

**General solution for rational $n$**

Using **ranges**, we obtain
|n|val| |
|-|-|-|
|$0<n<10$|1| |
|$10^k \leq n < 10^{k+1}$|$1+(crunch \frac{n}{10})=k$|(integer $k \geq 1$|
## Usefulness of crunch function
Used for calculating logarithms, floors of logarithms

# Lec 6 Thu 17 Sep 2020 (Compound data)
`(make-posn 1 2)` makes a coordinate with (1,2). Note that you can use `(make-posn "a" "b")` or any data type as well.

`(make-posn x y)` is a **constructor.**

## Box notation of `posn` data structure
![posn_box](img/posn_box.png)

## Posn within posn
`(make-posn (make-posn 1 2) 3)`
Yields the following box diagram

![posn_in_posn](img/nestedposn.png)

## Arrow notation of `posn` data structure
![posn_arrow](img/posn-arrow.png)
## Graph notation of `posn` (preferred)
![posn_arrow](img/graph-notation.png)

## Selectors
To get the first value and second values in a `posn`, use
``` scheme
(posn-y (make-posn 1 2)) ; 1
(posn-x (make-posn 1 2)) ; 2
```

## Predicate
Each data structure gets a predicate:
```scheme
(posn? (make-posn 1 2)) ; true
(posn? 2) ; false
```
## Defining a data structure
```scheme
(define-struct triple (a b c)) ; returns (make-triple 1 2 3)
(triple-a (make-triple 1 2 3)) ; 1
```

# Lec 7 Tue 22 Sep 2020
## Bunches
"Bunches" (multisets) are an abstract data type (**ADT**) since there is no implementation yet

Operations on bunches:
- `joinb` joins two bunches
- `count obj` counts number of occurrences (including things that do not exist in the bunch)
- `emptyb?` if a set is empty
- `remb` removes an element from a set  
- `elemb` arbitrarily select an element. 

![bunches](img/bunches.png)

![bunches](img/bunches2.png)

## Racket implementation of bunches
Specifications of `bunch`:

![bunch](img/bunch-specification.png)

Problems with bunches - too much choice. Binary trees are better because there is no simpleton (1 element bunch). 

# Lec 8a Tue 22 Sep 2020 (Concrete implementation of bunch)
![bunch](img/bunches-bad.png)

Problem with this implementation: We need to check recursively if a bunch is empty. 

# Lec 8c Tue 22 Sep 2020 (Trees)
A bunch implementation is an example of a **tree**. 

Any data strutcure built with **structs** is a tree. 

We'll restrict forms of trees using specific rules:

**Undecorated binary tree** is either:
- `empty`
- a `node` containing two trees:
	- i) left subtree
	- ii) right subtree

Note: we can use trees to represent any type of data

## Definitions
- Leaf: a node with no subtree

- Root: a node at is a subtree of another node

- Path: a squence of nodes that follow from one to another (one node is a subtree of a previous node)

- Path length: the number of nodes in the path

- Height:
	- 0 if empty tree
	- maximum of all path lengths if non-empty tree

- Depth: 
	- path length from root to node

Note: some definitions are different. In this course, **an empty tree has a height of 1**.

Height = $1 + max(height(left) , height(right))$

## Minimal height trees
### Full trees
A tree in which every node has (a) no non-empty subtrees or (b) two non-empty subtrees. We can figure out its height and size properties by inspection:

![full-tree](img/full-tree.png)

A full tree always has $2^h -1$ nodes. Then a full tree with $n > 0$ nodes has height $log_2(n + 1) = 1 + \lfloor log_2(n)\rfloor$
### Non-full maximal height trees
Find $h$ s.t. $2^{h-1} \leq n < 2^h$.
- minimal height tree has height $h$
- many possible trees
	- removing nodes from the full tree

# Lec 9 Thu 24 Sep 2020
## Decorated binary trees
Decorated binary tree: Every node contains one or more values, such as its height and size.
![dec_tree](img/decorated-trees.png)


Why use decorated trees
- To store summary information about tree
2. To store elements of a set or multiset

Examples of decorated trees:
- Binary search tree (BST)
	- Ordered from smallest to greatest
	- Easy to find elements
- Heap
	- Ordered
	- Not so easy to find elements
	- Can easily find maximum / minimum value
- Trie
	- If elements can be numbered, they can be bucketed for efficient looku

## Implementation of a Height Decorated Tree (HDT)
Specification:
```scheme
;; a height decorated tree (HDT) is an ADT with operations:
;; (hdt-height t) -- height of t, calculated in constant steps
;; (htdp-left t) -- left subtree of t
;; (hdt-right t) -- right subtree of t
;; empty -- the empty HDT
;; (empty? t) -- true iff HDT t is empty
;; (make-hdt a b) -- HDT with HDT a as left subtree and HDT b as right subtree
```
Implementation:
```scheme
;; An HDT is one of
;; - empty
;; - (make-node l r h) where l and r are HDTs and h is its height

(define-struct node (l r h))

; returns height in constant time
(define (hdt-height t)
	(if (empty? t) 0 (node-ht)))

;; a "smart" construcor combines two height decorated trees
(define (make-hdt t1 t2)
	(make-node t1 t2 (+ 1 (max (hdt-height t1) (hdt-height t2)))))
; more getter functions
(define (hdt-left t) (node-l t))
(define (hdt-right t) (node-r t))
```
Example usage:
```scheme
(define x (make-hdt (make-hdt empty empty)(make-hdt (make-hdt empty empty) empty)))
(hdt-height x)
> 3
```

# Lec 10 (Binary Search Trees)
**BSTs** are a decorated tree (takes values) and represents an ordered set. 
Consider the set $S = \{10,20,5,40\}$. We can represent this as a BST:
```
  10
 /  \
5 	20
	  \
	  40
```
## Data definition of a BST
A BST is one of:
1. An empty
2. A node decorated with an element `e`
   - whose left subtree is a BST containing only elements less than `e`
   - right subtree is a BST containing elements greater than `e`.

# Inserting into a BST
Pseudocode for inserting an `x` element into a BST:
1. **Base case:** If `t` is empty, return a tree with `x` as the only node
2. If `x` < `y`, then form a new tree `y` where the left subtree is the result of inserting `x` into the left subtree. That is, call the insert function on the left side.
3. If `x` > `y`, form a new tree `y` where the right subtree is the result of inserting `x` into the right subtree. That is, call insert on the right subtree.
4. If `x` = `y`, then just return the tree (BSTs are a set containing unique values)
   
**Inserting into a BST is proportional to the height of the tree**.
# Querying a BST
## Height of a tree
```scheme
;; height of any tree t
(define (height t)
	(if (empty? t) 0 (add1 (max (height (node-left t)) (height (node-right t))))))
```
## Size of a tree
```scheme
;; size of any tree t
(define (size t)
	(if (empty? t) 0 (+ 1 (size (node-left t)) (size (node-right t)))))
```
## Naive search for an element (slow)
``` scheme
;; checks if x is a member of a decorated tree t which is not necessarily a BST
(define (elem? x t)
	(cond 
	[(empty? t) false])
	[(= x (node-key t)) true]
	[true (or (elem? x (node-left t)) (elem? x (node-right t)))])
```
## Efficient search for an element in a BST
Pseudocode, of `elemb?` much similar to `insert`
1. **Base case:** If `t` is empty, then return false.
2. If tree contains a node:
	- If `x < y`, then check `elemb? left-tree`
	- If `x > y`, then check `elemb? right-tree`
	- If `x = y`, return true


## Minimum of a BST
Pseudocode of `minb`:
1. If tree is empty, there is no minimum
2. If tree is not empty, keep querying the left subtree until there are no more elements. The leftmost node is therefore the minimum element. 

```scheme
(define (minb t)
	(cond 
	[(empty? t) `undefined]
	[(empty? (node-left t) (node-key t))] ; if root is minimum
	[true (minb (node-left t))] ; minimum is in left subtree
	))
```
# Lec 11 Deleting Elements from a BST
## Deleting Minimum of a BST
```scheme
(define (deletemin t)
	(cond
	[(empty? t) empty]
	[(empty? (node-left t)) (node-right t)]
	[true (make-node (node-key t) (deletemin (node-left t)) (node-right t))]))
```

## Deleting an element from a BST
Pseudocode of `(delb t)`:
1. If tree is empty, return tree
2. **Base case**: If node is empty, return empty
3. If node contains left subtree, do `delb left-tree`
4. If node contains right subtree, do `delb right-tree`
5. If node contains two children, replace the node with the leftmost node of the right subtree (minimum of the right subtree) and delete that node from the subtree.


Use `(random)` to randomly choose which subtree to delete a node from in order to prevent trees from growing taller from repeatedly calling delete and insert. 


# Tutorial #02
## Special forms
`if` and `cond` are special forms because they change the order of computation. Specifically, if the condition in either of them evaluates to `#f`, then the rest of the arguments are discarded (not computed). This is not possible in a normal function, since the arguments must be evaluated first.

## Induction on proofs of correctness
Consider `(crunch n)`, which produces the number of digits that a non-negative (rational) number $n$ has.

```scheme
(define (crunch x)
	(if (< x 10) 1
	(add1 (crunch (/ x 10)))))
```
Statement: floorlog2(x) gives $k$ such that $10^k \leq x < 10^{k+1}$ for all $x$.

Base case: If $k = 0$, then we have $10^0 \leq x < 10^1$, so $crunch(x) = 0$. 

Inductive hypothesis: Assume that $crunch(x)$ gives the correct $k$ for $x$ which satisfies $2 \leq x \leq 2^m$ for some $m$. 

Inductive step: Then if for some integer $k$ such that $2^{k} \leq x < 2^{k+1}$, $crunch(\frac{x}{10}) = 1 + (m-1) = m$, so $crunch(x) = 1 + m$. 

# Week 4 Lecture 12 - Intro to Lists
We use `(cons a b)` to define a list data structure, where `a` and `b` are either empty or lists. 

However, the preferred equivalent way is `(list e1 e2 e3 ... en)`

List functions:
- `(car li)` takes the first element of the list
- `(cdr li)` returns the rest of the list
- `(reverse li)` reverses the list
- `(length li)` provides the length of the list
- `(append li1 li2)` appends `li2` into `li1`. 


# Week 4 Lecture 13 - List Functions
```scheme
;; Compute the number of elements in a list
;; (Length x) is equivalent to (length x)
;; number of steps linear in (length x)

(define (Length x) (if (empty? x) 0 (add1 (Length (cdr x)))))

;; Check if an element is in a list
;; (Member e x) is equivalent to (member e x)
;; number of steps linear in (length x)
(define (Member x lst)
	(cond 
		[(empty? lst) false]
		[(equal? x (car lst)) true]
		[true (Member x (cdr lst))]))

;; (Sum x) given x a list of numbers, compute the sum
;; of all numbers

(define (Sum x)
	(if (empty? x) 0 (+ (car x) (Sum (cdr x)))))

; Equivalent to builtin (append a b)
; number of steps linear to (length a)
(define (Append a b)
	(cond
	[(empty? a) b]
	[true (cons (car a) (Append (cdr a) b))]))

```

Notice that `(Append)` adds elements from the **beginning** of the list , which is more efficient. 

**Identities on operations**:
- A*1 = A (multiplicative identity)
- A + 0 = A (additive identity)
- min(infty, A) = A (minimum identity)
- max(-infty, A) = A (maximum identity)
- A AND True = A
- A OR False = A



# Lecture 14 - Intermediate Student with Lambda and Full Racket, Abstract List Functions (build list, map)
```scheme

(define (sumto n) (if (zero? n) 0 (+ n (sumto (sub1 n)))))

(define (fact n) (if (zero? n) 1 (* n (fact (sub1 n)))))

(define (listto n) (if (zero? n) empty (cons n (listto (sub1 n)))))

(define (listfrom n) (if (zero? n) empty (append (listfrom (sub1 n)) (list n))))
```
All of these functions are very similar, containing a base case, number of iterations, and what to "do" when it executes recursion. They can all be written in the form of `doit`:
```scheme
(define (doit n i f) (if (zero? n) i (f n (doit (sub1 n ) i f))))
```

The following are equivalent to the functions above:
```scheme
(doit 10 0 +)
(doit 10 1 *)
(doit 10 empty cons)

(define (snoc a b) (append b (list a)))
(doit 10 empty snoc)
; or equivalently
(doit 10 (empty (lambda(a b) (append b (list a)))))
```
A **lambda** is an anonymous function that has no names. This feature does not work in BSL, but is enabled in Intermediate Student with Lambda. 

```scheme
(prodecure? func) ; returns #true if a function is a lambda expression

; all builtins are procedures
```
In Intermediate Student with Lambda, all functions are lambdas. If we evaluate a function in the stepper, it is automatically translated into a lambda expression first:
```scheme
(define (foo x)(+ x x x))
(foo 100)
; evaluates to...
((lambda (x) (+ x x x)) 100)
;
(+ 100 100 100)
; 
300
```

More lambda example:
```scheme
(define (addn n)
	(lambda(x) (+ x n)))

(addn 10) ; returns a lambda function to call with x
((addn 10) 300) ; returns 310

(define add10 (addn 10))
(add10 300) ; returns 310
```
## Abstract List Functions
```scheme
; Abstract List functions

; build-list creates a list from 0 to n
; last argment provides what function to apply to each natural number. 
(build-list 10 (+ 0)) ; returns 0-9
(build-list 10 add1) ; returns 1-10
(build-list 10 sqr) ; returns 0-81

; map applies a function to each element of a list
(map (add1 (list 10 20 30))) ; returns 11,21,31

; foldl iterates through the list
; uses a combining function and puts that in an accumulator
(foldl + 0 (list 1 2 3)) ; returns 6

; returns (list 10 9 8 7 6 5 4 3 2 1)
(foldl cons empty (build-list 10 add1))

; returns (list 1 2 3 4 5 6 7 8 9 10)
(foldr cons empty (build-list 10 add1))
```
## Doit-list: Different way of implementing doit

```scheme
(define (doit-list lst i f)
	(if (empty? lst) i (doit-list (cdr lst) (f (car lst) i) f)))

; equivalent to (sumto 10)
(doit-list (build-list 10 add1) 0 +)
; equivalent to (fact 10)
(doit-list (build-list 10 add1) 0 *)
; equivalent to listfrom 10
(doit-list (build-list 10 add1) empty cons)
; equivalent to listto 10
(doit-list (build-list 10 add1) empty snoc)
```

Cons runs in constant time, but `snoc` requires steps proportional to the size of the list. 

# Lecture 15 Part 1 The Time Function
The `time` function provides information about running time:
```scheme
(time (+ 1 2 3))
; cpu time: 0 real time: 0 gc time: 0
```
**CPU time:** Amount of time spent by the computer. Less than the real time due to other programs running on the computer.

**Real time:** The "clock" time: $time_{ended} - time_{started}$

**GC Time:** Garbage collector time. Subtract this amount from CPU time to get actual amount of work time. 

# Lecture 15 Part 2
Steps, clock time, CPU-GC time, CPU time, etc, can be abstracted into **equivalence classes of running time**.

1. Linear time is no more than $a\cdot n+b$ where $n$ is the input size. $a,b$ are constants independent of the input. 

Suppose $f(n)$ and $g(n)$ are linear. Then $f(n)+g(n)$ is linear.

Since
$$
f(n) \leq an +b \\
g(n) \leq a^\prime n+b^\prime \\
f(n)+g(n) \leq (a+a^\prime)n+(b+b^\prime)
$$

## Big O Notation
$O(n)$ represents the linear function. People say "$f(n)$ is $O(n)$". 

Most preferrably, it should be said that $f(n) \in O(n)$ since  $O(n)$ represents the set of all functions linear. 

Also, $O(n)$ can represent any linear function.

$f(x) + O(n) \in O(n)$ when $f(x) \in O(n)$.

So the algebraic properties are obtained:

$$
O(n) + O(n) = O(n) \\
k\cdot O(n) = O(n) \text{ (where k is independent of input)}
$$

### Quadratic order
$$
n\cdot O(n) \in O(n^2) \\
O(n) + O(n^2) = O(n^2)
$$

**Big O** is the **upper bound**. So
$$O(n) \subseteq O(n^2)$$



# Reference - Proving Order
https://student.cs.uwaterloo.ca/~cs145/handouts/summaries/order-notation.pdf

## Definition
Definition 1: $f(n)$ is $O(g(n))$ if there exist constants $c$ and $n_0$ such that for all $n \geq n_0, f(n) \leq c\cdot g(n)$. 

Symbolic form: $f(n)$ is $O(g(n))$ if:
$$
\exists c \exists n_0 \forall n \geq n_0, f(n) \leq c\cdot g(n)
$$

Definition 2: $O(g(n))$ is the set of functions $f(n)$ such that there exist constants $c$ and $n_0$ such that for all $n \geq n_0, f(n) \leq c\cdot g(n)$.



## Working with Definition 1
Prove that $3n^2+6n$ is $O(n^2)$. 

We can accumulate information about $c$ and $n_0$ while working and then specify its values at the end. 

However, we need to prove the $\forall n \geq n_0, f(n) \leq c\cdot g(n)$. 

We work with the inequality $3n^2+6n\leq c\cdot n^2$ to prove.

$$
3n^2+6n\leq c\cdot n^2 \\
6n \leq (c-3)n^2 \\
6 \leq (c-3)n \\
\dfrac{6}{c-3} \leq n
$$
This inequality is true for any $c > 3$. For exapmle, choose $c=4$. Then the inequality is $6 \leq n$. So we choose $c=4$ and $n_0 = 6$.
$$
6 \leq n \\
6 \leq (4-3)n \\
6n \leq (4-3)n^2 \\
3n^2+6n \leq 4n^2
$$

# Lecture 16 Formal Big O Notation
Big O aka "order" aka Bachman and Landau notation

O(f(x)) is a **set** of functions that have an asymptotic running time. 

We have that $g(x) \in O(f(x))$ if:

$\{g(x) | \exists c>0, \exists x_0, \forall x\geq x_0 g(x) \leq c*f(x)\}$

Where $c$ and $x_0$ are constants. 

Alternatively:

$g(x)$ is $O(f(x))$ if:

$\exists c>0,\exists x_0, \forall x \geq x_0, g(x) \leq c*f(x)$

Proving order:

Example: Prove $10x^2+20 \in O(x^2)$

Proof: let $c=30, x_0 = 10, x\geq x_0$. 
We can choose any c and $x_0$, can be as big as we want. 
1. $1020 \leq 3000$
2. $10*10^2+20 \leq 30*10^2$
3. $10x_0^2 + 20 \leq 30x_0^2$ (substituting $x_0$)
4. $20 \leq 20x_0^2$ (subtract $10x_0^2$ from both sides)
5. $20x_0^2 \leq 20x^2$ (since $x \geq x_0 > 0$)
6. $20 \leq 20x^2$ (combining 4 and 5, since 4. < 5. by transitivity)
7. $10x^2+20 \leq 30x^2$ (add $10x^2$ on both sides)
8. $10x^2+20 \leq c*x^2$ (substituting in $c$ and $x^2$)


Example 2: Prove $x^2 \not\in O(x)$

We need to prove that regardless of choice of $x,x_0$, it is not true that $x^2 \leq *x$ for all $x \geq x_0$.

So, we need to prove $\forall c \forall x_0, \exists x \geq x_0, x^2>c*x$ 

Let $c$ and $x_0$ be given. Take $x=max(x_0,c_1)$.

1. $x \geq c + 1$
2. $x^2 \geq x(c+1) = xc+x \qquad$ [since $x\geq c+1>0$]
3. $x^2 \geq xc+x > xc \qquad$ [since ($x > 0$)]
4. $x^2>cx \qquad$ [combine 2 and 3]

So for any $c$ and $x_0$, we can find $x \geq x_0$ such that $x^2>cx$. So we can conclude $x^2\not\in O(x)$. 

# Lecture 16 Pt 2 - Big O Wrap Up
Big O Identities

$$a*O(f(x)) + b = O(f(x))$$


Addition identities
$$
O(f(x)) + O(g(x)) = O(f(x)+g(x)) \\
= O(max(f(x),g(x))) \\
= O(f(x)) \cup O(g(x)) \\
= O(f(x)) \text{ if } O(f(x)) \geq O(g(x))
= O(g(x)) \text{ if } O(f(x) \leq O(f(x)))
$$

Multiplication identities:
$$
O(f(x)) * O(g(x)) = O(f(x) * g(x)) \\
O\Bigg(\sum_{i = 0}^{O(f(x))} O(g(x))\Bigg) = O(f(x)*g(x))
$$
(useful for a for loop)

Big O Cousins: Big-Omega, Big-Theta

Recall that Big-O is an upper bound.

e.g. $x \in O(x^2)$ although $x^2\not\in O(x)$

$\Omega(f(x))$ is the **lower bound**.

$g(x) \in \Omega(f(x))$ means $f(x) \in O(g(x))$

$\Theta(f(x))$ is both the upper and lower bound.
$g(x) \in \Theta(f(x))$ means $g(x) \in O(f(x)) \quad \text{AND} \quad g(x) \in \Omega(f(x))$

# Lecture 17 More trees and tail recursion
## A5 problems
Sum:
```scheme
; Sum a BST
(define (sum t)
	(if (empty? t) 0 (+ (node-k t) (sum (node-1 t)) (sum (node-r t)))))
; List of elements of BST t in order
(define (lst t)
	(if (empty? t) empty (append (lst (node-l t)) (lst (node-r t)))))

; (lst t) semi-tail recursive implementation
(define (lst1 t) (lst-helper t empty))
(define (lst-helper t acc)
	(if (empty? t)
	acc
	(lst1-helper (node-l t)(cons (node-k t)(lst1-helper (node-r t) acc)))))

; fully tail recursive sum 
; sum the elements of every tree in list of trees
; worklist, adds result to accumulator
(define (sum-tail t) (sum-helper (list t) 0))
(define (sum-helper worklist acc)
	(cond
	; if list is empty, return acc
	[(empty? worklist) acc]
	; if element in list isnt a tree
	[(empty? (car worklist)) (sum-helper (cdr worklist) acc)]
	; else, "deconstruct" the left and right subtrees by pushing them into the worklist, and sum the node key
	[else (sum-helper
			(cons (node-l (car worklist))
			(cons (node-r (car worklist)) (cdr worklist)))
			(+ (node-k (car worklist)) acc))]))

```
When we run (sum-tail t), it is actually slower than (sum t). This is because Racket's built-in stack is simply more efficient than this implementation. 

# Lecture 18 Information Hiding
Information hiding: A technique for structuring programs so that information about ADTs are only available in the implementation and hidden from the user. 

Every module hides a secret.

Why?
- Preserve invariant (e.g. BST)
- Prevent malicious usage (e.g. `(make-node empty empty 'wilma)`)
- Reduce intellectual complexity
  - Interactions among modules should be minimized

To make a .rkt file a module:
- Put `#lang racket` and use full racket
- Use `(provide func1 func2 func3 ...)` to specify which functions should be allowed to be used by the user
- Optionally `(define func1 func1-alias)` to specify an alias and use `func1-alias` in the `provide` function.

To **use** a module
- Put `(require filename)` 
- Attempting to run any functions that are not given in `provide` will produce an error.
- When we try to access a struct, for example a node, we will only see `(make-node ...)`. 


# Lecture 19 Total Order
Generalizing BSTs: The BST invariant is that the left must be less than right. We can define BSTs to have other ways of ordering.

Definition: An ordered set is any set with a **total order** over the set.

The most familiar total order (increasing order) is $\leq$. Given a set $S$, the relation $\leq$ is a total order if:
- $a \leq a$ for all $a \in S$ (reflexive)
- $a \leq b$ OR $b \leq a$ for all $a,b\in S$
- $a\leq b$ AND $b \leq a$ implies $a=b$
- $a \leq b$ AND $b \leq c$ implies $a \leq c$ (transitive)

Examples of total orders
- `<=` over Racket numbers
- `>=` over Racket numbers
- `string<=?` over Racket strings (alphabetical aka lexicographical order)

A custom total order that produces the set $\{0, -1, 1, -2, 2, -3, 3, ...\}$:
```scheme
(lambda (a b)
	(cond
		[(< (abs a)(abs b)) true]
		[(> (abs a)(abs b)) false]
		[true (<= a b)]))
```
Derived Relations from the total order $\leq$
$$
a \geq b \equiv b \leq a \\
a = b \equiv a \leq b \wedge b \leq a \\
a \neq b \equiv \neg (a = b) \\
a < b \equiv \neg (b \leq a) \\
a > b \equiv \neg (a \leq b) \\
$$
Give na strict total order <, we can define it simply in terms of $\leq$:
$a \leq b \equiv \neg (b < a)$

Strict total order:
A relation $<$ such that exactly **one of** $a <  b$, $b < a$, $a=b$ for $a,b \in S$, $a < b$, $b < c$ implies $a < c$


How do we make information to make sure we are using the same operation of ordering on a BST? We cannot let users use insert with < and then with <= later. 

# Lecture 19 Pt. 2 Structs as wrappers


```scheme
(define (foo x) x)
(define (bar x) x)
(define foofoo foo)
(define barbar bar)
(define bif (lambda(x) x))
(define baf (lambda(x) x))

(eq? foo foo) ; #t

(eq? foo bar) ; #f

(eq? foo foofoo) ; #t
(eq? bar barbar) ; #t

(eq? bif baf) ; #f
(eq? bif bif) ; #t

(define-struct fooo (x))
(define a (make-fooo 10))
(define b (make-fooo 10))
(eq? a b) ; #f 
```

Example of a lexicographical total order (alphabetical, by length, by increasing)
Use the racket builtin `string<?` to compare alphabetical
1. foo
2. wilma
3. fred

# Lecture 21 Sorting Algorithms
All of the algos are in tail-recursive form. 
# Insertion Sort
Two accumulators:
```scheme
(ins-helper old new)
```
- **Invariant**: Union of old+new is set of elements in input
- New is ordered (sorted)
- Progress: old is reduced by 1, new is increased by 1
- Strategy: Take car of old and walk thru new list and insert in order

In each step: Remove 1st element from old - O(1)
Insert into new O(n)
N is the size of list

So we have O(N) steps, and O(N)*O(N) = O(N^2) steps in total. 

## Selection sort
...

# Lecture 22 Generator Functions
Naming arguments using **local bindings**:
```scheme
(define (sumbetween2 st)
	(define a (car st))
	(define b (cadr st))
	(define acc (caddr st))
	(sumbetween1 (list (add1 a) b (+ a acc))))
;; EQUIVALENTLY:
(define (sumbetween3 st)
	((lambda (a b acc)
		(sumbetween1 (list (add1 a) b (+ a acc))))
	(car st)
	(cadr st)
	(caddr st)))
```

Compute fibonacci numbers using generate:
```scheme
(define (fib n)
	(generate
	(list 0 0 1) ;; (list i fib nxt) where fib is the ith fibonacci, nxt is the i+lst
	(lambda(st)(= (car st) n))
	(lambda(st)
		(define i (car st))
		(define fib (cadr st))
		(define nxt (caddr st))
		(list (add1 i) nxt (+ fib nxt)))
	(lambda(st) (cadr st)))) ; result is fib
```

# Lecture 23 Streams


A stream is like a "lazy list". It has initial state and a next function, and an accessor function to extract current value. 


fibstream.rkt:
```scheme
(require "stream.rkt")

(define-struct f (fib nxt))

(define fibseq
	(stream-generate
	(make-f 0 1)
	(lambda(st)false)
	(lambda (st)
	 (make-f (f-nxt st)(+ (f-fib st)(f-nxt st))))
	 (lambda(st) (f-fib st))))
(define fibcar stream-car)
(define fibcdr stream-cdr)
```

use-fib.rkt
```scheme
(require "fibseq.rkt")

(fibcar fibseq)
(fibcar (fibcdr fibseq))
(fibcar (fibcdr (fibcdr fibseq)))
```

**stream-cdr** is the function that creates the next element. **stream-car** accesses the value. **stream-generate** sets up the stream. 


# Lecture 24 Deferred Evaluation and Lazy Racket

## Deferred Evaluation
- What if there were no special forms
- How do define `if`?
- Solution: Use lambda to defer evaluation
```scheme
(define x e) ; evaluates e
(define (x y) e) ; doesn't evaluate e
(x 'wilma) ; evaluates e
(define (xx) e) ; PROMISE
(xx) ; CALL 
(define xxx (lambda() e)))
(xxx)

(define (myif1 t a b)
	(if t (a) (b)))

(random 10) ; provides the next element in an infinite stream

(define (zap x)(x x))
; running zap zap gives an infinite loop
(define (ident x) x)
(zap ident)

(define (myif t a b) (if t a b))
(define (myif1 t a b) (if t (a)(b)))
(myif1 false (λ() (zap zap)) (λ() 23))

; gets input from user
(define r (build-list 2 (λ(x) (read))))

; prints the value
(display r)

; evaluates the arguments but only returns the last one
(define zzzz (begin (display 10) 33))

; evaluates everything
(cond
  [true (display 'hello) (display 42) 33])

```


## Lazy racket


```scheme
#lang ; must use for marmoset tests

(define (myif t a b) (if t a b))
(myif false ((λ(x) (x x)) (λ(x)(x x))) 32)

; impossible in normal racket
(define r (cons 1 r))
(car r)
(cdr r)

; substitutes in (add1 10) as x instead of computing it first
(define (triple x)(+ x x x))
(triple (add1 10))
```


# Lecture 25 pt. 1 Lambda calculus notation and rules
Lambda calculus is like a programming language

Lambda calculus can be used to compute anything

## λ Calculus notation

A lambda expression is:
1. variable name: x, y, z, ... 
2. OR application: e1 e2, which are λ-expressions
3. OR abstraction: λx. e is a λ-expression

Do application first
λx. (e1 e2)

## λ Calculus rules
1. expressions can be equivalent 
2. one expression can be a reduction of another
3. Alpha equivalence: $\lambda x.x \equiv_\alpha \lambda y.y$
4. Beta Reduction: $\lambda x.(x x) y \Rightarrow_\beta y y$

Computation: 
- repeatedly substitute
  - $\alpha$ equivalent or
  - $\beta$ reduced versions of expression


E.g. is 27 a prime number? The lambda calculus will look something like:

$\lambda x. \lambda n (\quad ) () \\
\alpha_1 \beta_1 \cdots \\
y \text{ if yes} \\
n \text{ if no}
$
## Free variables of λ-expression e
Intuition: 
$$\lambda x . x \quad \text{ is a bound variable.}$$ 

$$\lambda x.y \quad \text{ is a free variable}$$

Define FV(e) be the set of free variables of e. 

|Cases|Solution|
|-|-|
|$e=x$|$Fv(e) = \{x\}$|
|$e=e_1e_2$|$Fv(e) = Fv(e_1) \cup Fv(e_2)$|
|$e=\lambda x . x$|$Fv(e) = Fv(e_1) \backslash \{x\}$|

Substitution
$e [x \leftarrow e_1]$ means replace all free unbound $x$ by $e_1$. 

$\lambda x.y z x \Big[z + \lambda a.a\Big] \\
\Rightarrow \lambda x.y(\lambda a . a)x \\
\lambda x . y z x \Big[x + \lambda a.a\Big] \\
\Rightarrow \lambda x.yzx
$

The second one is unaffected because $x$ is bound. 


Alternate notations of substitution:
$$
[e_1 \rightarrow x] \\
[x \rightarrow e_1] \\
[e_1 \leftarrow x] \\
[e_1 \backslash x] \\
[x := l_1]
$$

## Substitution rules
For the substitution:
$$e \quad [x \leftarrow e_1]$$

|case|result|
|-|-|
|$e=y\neq x$|$e$|
|$e=x$|$e_1$|
|$e=e_2e_3$|$e_2[x\leftarrow e_1] \quad e_3[x \leftarrow e_1]$|
|$e=\lambda y . e_2 \; (y\neq x)$|$\lambda y . e_2 [x \leftarrow e_1]$|
|$e = \lambda x . e_2$|$e$|

## Using alpha equivalence
For the alpha equivalence:
$\lambda x . e_1 \equiv_\alpha \lambda y . e_2$
If 
$e_1[x \leftarrow y] = e_2
, \quad y \not\in FV(e_1)$
Then
$\lambda x . x w \equiv_\alpha \lambda y . y w \\
\lambda x . x w \not\equiv_\alpha \lambda w . w w
$

## Beta reduction
Define **redex** = (reducible expression)
$
(\lambda x . e_1)e_2 \\
\Rightarrow_\beta e_1[x \leftarrow e_2] 
$
Provided that the substitution $[x \leftarrow e_2]$ is defined. 

# Lecture 25 Part 2
Continuing on substitutions:
$$e [x \leftarrow e_1]$$

|Case|Result|
|-|-|
|$e=y\neq x$|$e$|
|$e=x$|$e_1$|
|$e=e_2e_3$|$e_2[x\leftarrow e_1] \; e_3[x\leftarrow e_1]$|
|$e=\lambda y . e_2 (y \neq x)$|$\lambda y . e_2 [x \leftarrow e_1]$|
|$e = \lambda x . e_2$|$e$|
Second last result only works if $y \not\in FV(e_1)$

## Alpha equivalence rules
$$\lambda x . e_1 \equiv_\alpha \lambda y . e_2$$
If $e_1[x \leftarrow y] = e_2$ and $y \not\in FV(e_1)$ to avoid capture

Alpha equivalence always works: use a fresh variable on RHS. Infinite number of alpha equivalent forms

$$ \lambda x . x w \equiv_\alpha \lambda y . y w \\
\lambda x . x w \equiv_\alpha \lambda w .w
$$
Second one doesn't work because $w$ is bound. 

## Beta reduction
Define redex (reducible expression) to be:

$(\lambda x_1 e_1)e_2 \\
\Rightarrow \beta \qquad e_1[x \leftarrow e_2]$

Provided that
$e_1[x \leftarrow e_2]$ 
is defined. And 

$x \not\in FV(e_2)$

Beta reduction doesn't work all the time. Instead, we can use: 

$\alpha\beta$ reduction: 
$$e_1e_2 \Rightarrow_{\alpha\beta} e_3$$ 
if $\exists e_4 \equiv_\alpha e_1$ and $e_4 \Rightarrow_\beta e_3$

## Alpha-beta reduction
|Case|Result|
|-|-|
|$e=x$|no reduction|
|$e_1 e_2, e_1\Rightarrow_{\alpha\beta} e_3$|$e_1 e_2 \Rightarrow_{\alpha\beta} e_3e_1$|
|$e_1e_2, e_2\Rightarrow_{\alpha\beta}e_3$|$e_1e_2\Rightarrow_{\alpha\beta} e_1e_3$|

We have a choice of reduction strategy

Fully reduced $\lambda$-expression has no redexes.

Some expressions can be reduced by alpha-beta reduction to fully reduced form. And some cant. 

Problem: Given a lambda expression, do we know if it has a fully reduced form? <- This is undecidable, limit of computation

Given that $e$ can be reduced to fully reduced form, what strategy will achieve that?

Evaluation strategies:

1. Normal order - always reduced leftmost redex (the one that begins first)
   1. E.g. $(\lambda x . x x)((\lambda y . y )Q)$ are redexes. 
   
$$
(\lambda x . x x)((\lambda y . y )q) \\
\Downarrow \alpha \beta \\
((\lambda y . y ) q)((\lambda y . y) q) \\
\Downarrow  \\
q((\lambda y . y ) q) \\
\Downarrow \\
q q
$$

Example of no redex form:
$$(\lambda x . x x ) (\lambda x . x x)$$

Another reduced form:
$$(\lambda x . y )((\lambda x . x x)(\lambda x . x x))$$
Normal order can reduce this to $y$.

Applicative order cannot reduce this expression.

## Lambda calculus in Racket
|$\lambda$ calculus|Racket|
|-|-|
|$x$|$x$ if bound, $'x$ if unbounded.|
|$\lambda x . x$|`(lambda(x) x)|
|$x$|`'x`|
|$e_1e_2$|`([e1] [e2])`|

Applicative order: Use full Racket

Normal order: Use lazy Racket

# Programming in Lambda Calculus

|Racket Expression R|Lambda calc. translation [R]|
|-|-|
|'x|x|
|x|x|
|(R1 R2)|[R1][R2]|
|(lambda(x) R)|$\lambda x . [R]$|
|λ(x y) R) or (λ(x)(λ(y) R)) (aka currying)|[$(λ(x)(λ(y)R))$] or $λx.λy.[R]$|
|(f R1 R2)|$[((f R_1) R_2)]$|
|((f R1) R2) (curried)|$[f]R_1 R_2$|

## Building ADTs

### Booleans
|Racket|Lambda calc|
|-|-|
|true |λx.λ.x|
|false|λx.λy.y|

Defining IF

`(if B 'y 'n)`

Lambda calc:

[B]['y]['n]

[B]y n

If B = true:
$$
(λx.λy.x) y n \\

(λx.λz.x) y n \\

(λz.y)n \\ 

y
$$
If B = false:
$$
(λx.λy.y)y n \\

(λx.λz.z) y n \\

(λ z. z) n \\

n
$$


More racket equivalents
|Racket|Lambda calc|
|-|-|
|`if`| $λb.λt.λf.btf$|
|`(cons A B)`|$λs.s [A][B]$|
|`(car c)`|[c][true]|
|`(cdr c)`|[c][false]|
|`empty`|$λa.\text{true}$|
|`empty? c`|$[c]λa.λb.[\text{false}]$|
|`(define x R)`|$(λx.[S])[R]$|


s is the selector function. If s is true, then = A, if false, = B. 

Example of list in lambda calc:

`(cons 'fred 'wilma)` = $λs.s \text{ fred wilma} = (λs.s \text{fred wilma})\text{true} \Rightarrow \text{fred}$

# Lecture 27 - Recursion in Lambda calculus
```scheme
(define True (λ(x y) x))
(define False (λ(x y) y))
(define Display (λ(b)(b 'true 'false)))
(define If (λ(b t f)(b t f)))
(define Cons (λ(a b)(λ(s)(s a b))))
(define Car (λ(c)(c True)))
(define Cdr (λ(c)(c False)))
(define Empty (λ(c) True))
(define Empty? (λ(c)(c (λ(x y) False))))
(define x (Cons True (Cons False (Cons True Empty))))
(define y (Cons True (Cons True (Cons True Empty))))


(define And-list-helper
  (λ(self lst)(If (Empty? lst) True (If (Car lst)(self self (Cdr lst)) False))))
(define And-list1 (λ(lst) (And-list-helper And-list-helper lst)))

(define And-curry-helper
  (λ(self)(λ(lst)(If (Empty? lst) True (If (Car lst)((self self) (Cdr lst)) False)))))
(define And-list-curry
         (And-curry-helper And-curry-helper))


(define Generic-curry-nohelper ;; aka Y-combinator (fixed point combinator)
  (λ(f)
    ((λ(self)(f (self self)))
     (λ(self)(f (self self))))))
(define And-generic
  (Generic-curry-nohelper
   (λ(And-lst)
     (λ(lst)(If (Empty? lst) True (If (Car lst)(And-lst (Cdr lst)) False))))))
```
Y combinator: 
Y f ->_{beta} f (Y f)


## Numbers in λ-Calculus
1. Church numerals
2. Unary - n is a list of length n
3. Binary - n is a list of binary digits representing base 2

## Unary Naturals
|Representation|Implementation|
|-|-|
|0|[empty]|
|n>0|[cons][true][n-1]|
|3|[(True True)]|
|add1|[λ(x)(Cons True x)]|
|sub1|[Cdr]|

Addition is O(a+b)

Multiplication is O(n^2)

## Binary Naturals
|Representation|Implementation|
|-|-|
|0|Empty|
|$2n+1, n\geq0$|Cons True [n]|
|$2n, n>0$|[Cons][False][n]|
|1|(True)|
|2|



# Lecture 31 RAM Model of Computation
## Real world approximation of RAM machine
RAM ADT using a new kind of tree: Trie

O(logA) / O(1): RAM fetch and RAM store according to log cost or unit cost model


AVL Tree is:
- O(log(A)^2) in log cost model
- O(logA) in unit cost model

All computations done as (Gen inp state step)
- State must be a RAM
- Step must be O(1)


 Stored Program Computer (Von Neumann Architecture)

 RAM

 CPU implements Gen, stores and accesses data from RAM

 The access / store times are "constant" time when there are a fixed # of bits (8,16, 32, 64)

## Lecture 31 Part 2 RAM in Racket

```
(require "RAM.rkt")

ram
> #<wrapper>

> (core-dump ram)
---------------
---------------

(define r1 (ram-store ram 42 55))

(core-dump r1)
--------------
[42]: 55
-------------

; address is in square brackets
; value is beside it

(ram-fetch r1 42)
> 55

(ram-fetch r1 99999)
> 'undefined 
; real RAMs give out random garbage
; don't check 'undefined because that's not accurate



; GEN
; input stream and state
; state is always a RAM
; input is a stream
; step works using continuation function

; sum numbers using gen
(define init ram-store ram 42 0))

(define (step inp state cont)
	(cond
	[(empty? inp) empty]
	[true
	; (core-dump state)
	;(display (ram-fetch state 42))(newline)
	(cont
	(cdr inp)
	(ram-store state 42 (* (car inp)(ram-fetch state 42)))
	(list (+ (car inp)(ram-fetch state 42))))]))



(define (step inp state cont)
	(cond
	[(empty? inp) empty]
	[true
	; (core-dump state)
	;(display (ram-fetch state 42))(newline)
	(define wilma (+ (car inp)(ram-fetch state 42)))
	(cont
	(cdr inp)
	(ram-store state 42 wilma)
	(list wilma))]))
(Gen (list 1 2 3 4 5 6 7 8 9 10) init step)


; machine language program: the code in the step function
```

# Lecture 32 Part 1 Lists in RAM using vectors/arrays

```
[[4]] ; go to address of value of address of 4
; aka pointer chasing / indirection

; Lists in RAM
1) Attempt 1: Vector representation

- pick address in RAM for lst
first element is length of list
[3][10][20][30] 
Equivalent to
(30 20 10)

Calling [lst] will give the first element of the list
Car : update size by incrementing [lst]+1 and ram-store element after address

2) what if we want multiple e.g. 2 lists?

Problem: overrun, when first list overwrites address of other lists

3) Variable-sized vector/array lists
When we run out of space in first list, copy it to a new location and give it double the extra space.

Copy method takes O(n) time, n = length. This was obtained from amortized analysis.

Also, when the arrays are copied over, we need to remove the old array, aka. garbage collection. 
```

# Lecture 35 / 36 History

To build a computer, we need:
1. Some way to represent bits (e.g. cup of water, light, sound waves, toggle switch)
2. Some way to manipulate bits 
3. Some way to view / access bits

First computers:
1. Jacquard Loom
   1. Knits clothing according to punchcards
2. Player piano
   1. Plays and records songs using punchards
3. Herman Hollerith cards: 
   1. Cards that can be sorted in different orders
   2. Used until 1970s
4. Charles Babbage / Ada Lovelace
   1. Difference engine, digital computer that could perform computations using a fixed program
   2. Analytical engine, allowed to program using Jacquard cards
   3. Neither was built, only designs

- Claude Shannon
  - MIT Master's thesis, used Boolean algebra to describe switching circuits
  - consider 0 and 1 to be false and true
  - Invented information theory
  - Defined bits

Building a RAM with no moving parts
- Delay line: Sends a signal from one place to another and contains a "repeater"
  - Acoustic delay line - contains mercury
  - Electrical, fast. Also piezoelectrical - crystals that transmit electricity when squeezed
  - Light - contains LED which gives off light, sent through fiber optic delay line. This is how modern telecommunications work

- Cathode ray tube (Williams tube):
  - Electron gun shoots electrons at a phosphor coat, which gives off light. We can test whether the phosphor coat is lighted or not. This lets us create and manipulate images on a screen. 


- Magnetic core memory
  - Can magnetize the core (using electricity) to point north or south. This can be used to represent true and false. 
  - To detect whether pointing north or south, we need to try magnetizing it. This is called a **destructive read**. 
  - A RAM made of magnetic core consists of a grid of wires containing containing cores at each node. 
  - Disadvantages:
    -  Requires lots of core / space
    -  Electricity takes time to travel
 -  Advantage:
    -  Persistent (static), stays even after it is turned off

- Electric Memory
  - Dynamic RAM (DRAM): Capacitive
    - Works using capacitors that store charge
- Static RAM with electronic switches


## Characteristics of practical rams
1. Limited addresses
2. Limited vallues
3. Require more time and space for larger values
4. Hierarchial solution (logarithmic cost)